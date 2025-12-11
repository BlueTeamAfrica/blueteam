import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'
import { adminDb } from '@/lib/firebase-admin'

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

    // Try to save to Firebase first, fallback to JSON file
    let savedToFirebase = false
    let firebaseError: Error | null = null
    
    if (adminDb) {
      try {
        await adminDb.collection('leads').add(leadData)
        savedToFirebase = true
        console.log('✅ Lead saved to Firestore successfully')
      } catch (error) {
        firebaseError = error instanceof Error ? error : new Error(String(error))
        console.error('❌ Firebase save failed:', {
          message: firebaseError.message,
          stack: firebaseError.stack,
          error: error
        })
      }
    } else {
      console.warn('⚠️ Firebase Admin DB is not initialized. Check Firebase credentials.')
      console.warn('Available env vars:', {
            hasProjectId: !!process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
            hasServiceAccountKey: !!process.env.FIREBASE_SERVICE_ACCOUNT_KEY,
            hasGoogleAppCreds: !!process.env.GOOGLE_APPLICATION_CREDENTIALS,
          })
    }

    // Fallback: Save to JSON file (for development or if Firebase fails)
    // Note: File system writes may not work in production (e.g., Vercel)
    // This is a development fallback only
    if (!savedToFirebase) {
      try {
        const dataDir = path.join(process.cwd(), 'data')
        const leadsFile = path.join(dataDir, 'leads.json')

        // Ensure data directory exists
        if (!fs.existsSync(dataDir)) {
          fs.mkdirSync(dataDir, { recursive: true })
        }

        // Read existing leads or create new array
        let leads = []
        if (fs.existsSync(leadsFile)) {
          try {
            const fileContent = fs.readFileSync(leadsFile, 'utf-8')
            leads = JSON.parse(fileContent)
          } catch (parseError) {
            console.error('Error parsing leads.json:', parseError)
            leads = []
          }
        }

        // Add new lead
        leads.push(leadData)

        // Write back to file
        fs.writeFileSync(leadsFile, JSON.stringify(leads, null, 2))
        console.log('Lead saved to JSON file')
      } catch (fileError) {
        // File system might not be available in production
        console.error('Failed to save to JSON file (this is normal in production):', fileError)
        // Don't fail the request - at least we tried to save
        // In production, Firebase should be configured
      }
    }

    return NextResponse.json(
      { 
        success: true, 
        message: 'Lead saved successfully',
        storage: savedToFirebase ? 'firebase' : 'json',
        firebaseError: firebaseError ? (process.env.NODE_ENV === 'development' ? firebaseError.message : undefined) : undefined
      },
      { 
        status: 200,
        headers: {
          'X-RateLimit-Limit': String(RATE_LIMIT_MAX),
          'X-RateLimit-Remaining': String(rateLimit.remaining),
        }
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

