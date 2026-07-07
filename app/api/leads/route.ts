import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'
import { adminDb } from '@/lib/firebase-admin'

// NOTE: Vercel serverless containers have a read-only filesystem at process.cwd().
// The JSON fallback below writes to /tmp (writable, but ephemeral per-container).
// Leads written there are lost when the container is recycled — they are NOT persisted.
// The JSON fallback exists solely to prevent a hard crash in local dev.
// In production, FIREBASE_SERVICE_ACCOUNT_KEY must be set in Vercel env vars.

// Rate limiting: Simple in-memory store (use Redis in production)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>()
const RATE_LIMIT_WINDOW = 60 * 60 * 1000 // 1 hour
const RATE_LIMIT_MAX = 5 // Max 5 submissions per hour per IP

// Input sanitization
// Note: We preserve spaces (0x20) but remove control characters and HTML tags
function sanitizeInput(input: string): string {
  if (typeof input !== 'string') return ''
  return input
    .trim()
    .replace(/[<>]/g, '') // Remove potential HTML tags
    .replace(/[\x00-\x09\x0B-\x0C\x0E-\x1F\x7F]/g, '') // Remove control characters but keep space (0x20), tab (0x09), newline (0x0A), carriage return (0x0D)
    .slice(0, 2000) // Max length
}

// Email validation
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email) && email.length <= 255
}

// Phone validation
function isValidPhone(phone: string): boolean {
  const digits = phone.replace(/\D/g, '')
  return digits.length >= 9 && digits.length <= 15
}

// Rate limiting check
function checkRateLimit(ip: string): { allowed: boolean; remaining: number } {
  const now = Date.now()
  const record = rateLimitMap.get(ip)

  if (!record || now > record.resetTime) {
    // New or expired, reset
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW })
    return { allowed: true, remaining: RATE_LIMIT_MAX - 1 }
  }

  if (record.count >= RATE_LIMIT_MAX) {
    return { allowed: false, remaining: 0 }
  }

  record.count++
  return { allowed: true, remaining: RATE_LIMIT_MAX - record.count }
}

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0] || 
               request.headers.get('x-real-ip') || 
               'unknown'

    // Check rate limit
    const rateLimit = checkRateLimit(ip)
    if (!rateLimit.allowed) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { 
          status: 429,
          headers: {
            'Retry-After': '3600', // 1 hour in seconds
            'X-RateLimit-Limit': String(RATE_LIMIT_MAX),
            'X-RateLimit-Remaining': '0',
          }
        }
      )
    }

    const body = await request.json()
    let { name, email, phone, subject, message } = body

    // Sanitize all inputs
    name = sanitizeInput(name || '')
    email = sanitizeInput(email || '').toLowerCase()
    phone = sanitizeInput(phone || '')
    subject = sanitizeInput(subject || '')
    message = sanitizeInput(message || '')

    // Validate required fields
    const errors: string[] = []

    if (!name || name.length < 2) {
      errors.push('Name must be at least 2 characters')
    }
    if (name.length > 100) {
      errors.push('Name must be less than 100 characters')
    }

    if (!email || !isValidEmail(email)) {
      errors.push('Please provide a valid email address')
    }

    if (!phone || !isValidPhone(phone)) {
      errors.push('Please provide a valid phone number (9-15 digits)')
    }

    if (!subject) {
      errors.push('Subject is required')
    }

    if (!message || message.length < 10) {
      errors.push('Message must be at least 10 characters')
    }
    if (message.length > 2000) {
      errors.push('Message must be less than 2000 characters')
    }

    if (errors.length > 0) {
      return NextResponse.json(
        { error: 'Validation failed', details: errors },
        { status: 400 }
      )
    }

    // Create leads data
    const leadData = {
      name,
      email,
      phone,
      subject,
      message,
      timestamp: new Date().toISOString(),
      source: 'contact-form',
      ip: ip === 'unknown' ? undefined : ip, // Don't store if unknown
      userAgent: request.headers.get('user-agent') || undefined,
    }

    // Try to save to Firestore via Admin SDK
    let savedToFirebase = false
    let firebaseError: Error | null = null
    let adminUnavailable = false

    if (adminDb) {
      try {
        await adminDb.collection('leads').add(leadData)
        savedToFirebase = true
        console.log('[LEADS] Saved to Firestore successfully')
      } catch (error) {
        firebaseError = error instanceof Error ? error : new Error(String(error))
        console.error('[LEADS_FIRESTORE_ERROR] Write to Firestore failed — lead NOT persisted to primary store:', {
          message: firebaseError.message,
          code: (error as Record<string, unknown>)?.code,
          stack: firebaseError.stack,
        })
      }
    } else {
      adminUnavailable = true
      console.error(
        '[LEADS_ADMIN_UNAVAILABLE] Firebase Admin DB is not initialized — FIREBASE_SERVICE_ACCOUNT_KEY is missing or failed to parse.',
        {
          hasProjectId: !!process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
          hasServiceAccountKey: !!process.env.FIREBASE_SERVICE_ACCOUNT_KEY,
          hasGoogleAppCreds: !!process.env.GOOGLE_APPLICATION_CREDENTIALS,
        }
      )
    }

    // Fallback: attempt a local JSON write for dev environments only.
    // On Vercel, process.cwd() is read-only; /tmp is writable but ephemeral per-container.
    // Either way, data written here will NOT survive a container recycle — it is not a
    // reliable backup. The only purpose is to preserve data in local dev.
    if (!savedToFirebase) {
      const isVercel = !!process.env.VERCEL
      if (isVercel) {
        console.error(
          '[LEADS_LOST] Running on Vercel with no Firestore write — lead data is being discarded.',
          'Set FIREBASE_SERVICE_ACCOUNT_KEY in Vercel env vars to fix this.',
          { leadEmail: leadData.email, leadName: leadData.name, timestamp: leadData.timestamp }
        )
      } else {
        // Local dev: write to data/leads.json
        try {
          const dataDir = path.join(process.cwd(), 'data')
          const leadsFile = path.join(dataDir, 'leads.json')
          if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true })
          let leads: unknown[] = []
          if (fs.existsSync(leadsFile)) {
            try { leads = JSON.parse(fs.readFileSync(leadsFile, 'utf-8')) } catch { leads = [] }
          }
          leads.push(leadData)
          fs.writeFileSync(leadsFile, JSON.stringify(leads, null, 2))
          console.log('[LEADS] Saved to local data/leads.json (dev fallback)')
        } catch (fileError) {
          console.error('[LEADS_FILESYSTEM_ERROR] Failed to write local fallback leads.json:', fileError)
        }
      }
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Lead saved successfully',
        storage: savedToFirebase ? 'firebase' : 'degraded',
        ...(adminUnavailable && { adminUnavailable: true }),
        ...(firebaseError && process.env.NODE_ENV === 'development' && { firebaseError: firebaseError.message }),
      },
      {
        status: 200,
        headers: {
          'X-RateLimit-Limit': String(RATE_LIMIT_MAX),
          'X-RateLimit-Remaining': String(rateLimit.remaining),
        },
      }
    )
  } catch (error) {
    console.error('Error processing lead:', error)
    
    // Provide more detailed error information in development
    const errorMessage = process.env.NODE_ENV === 'development' 
      ? `Internal server error: ${error instanceof Error ? error.message : String(error)}`
      : 'Internal server error. Please try again later or contact us directly.'
    
    return NextResponse.json(
      { 
        error: errorMessage,
        details: process.env.NODE_ENV === 'development' ? (error instanceof Error ? error.stack : undefined) : undefined
      },
      { status: 500 }
    )
  }
}

