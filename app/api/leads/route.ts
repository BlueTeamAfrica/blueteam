import { NextRequest, NextResponse } from 'next/server'
import { collection, addDoc, serverTimestamp, Firestore } from 'firebase/firestore'

// Import Firebase - will handle errors in the route handlers
let db: Firestore | null = null

// Try to import Firebase on module load
try {
  const firebase = require('@/lib/firebase')
  db = firebase.db
} catch (error) {
  console.warn('Firebase initialization warning:', error)
  // db remains null - will be handled in route handlers
}

function getFirestoreDB(): Firestore | null {
  return db
}

// Firestore lead schema (matches content pack)
interface LeadData {
  name: string
  company?: string
  email: string
  phone?: string
  country: string
  solution_interest?: string
  approx_annual_revenue?: string
  employees?: string
  message: string
  preferred_time?: string
  package?: string
  utm_source?: string
  utm_medium?: string
  utm_campaign?: string
  status?: 'new' | 'contacted' | 'qualified' | 'proposal_sent' | 'closed'
}

export async function POST(request: NextRequest) {
  try {
    // Check if Firebase is configured
    if (!process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID) {
      return NextResponse.json(
        { error: 'Firebase not configured. Please set Firebase environment variables.' },
        { status: 500 }
      )
    }

    const body = await request.json()
    
    // Extract UTM parameters from referer or request body
    let urlParams: URLSearchParams | null = null
    try {
      const referer = request.headers.get('referer') || ''
      if (referer) {
        urlParams = new URL(referer).searchParams
      }
    } catch (e) {
      // If referer parsing fails, use body params
    }
    
    const leadData: LeadData = {
      name: body.name || '',
      company: body.company || '',
      email: body.email || '',
      phone: body.phone || '',
      country: body.country || '',
      solution_interest: body.solution_interest || '',
      approx_annual_revenue: body.approx_annual_revenue || '',
      employees: body.employees || '',
      message: body.message || '',
      preferred_time: body.preferred_time || '',
      package: body.package || '',
      utm_source: (urlParams?.get('utm_source') || body.utm_source || ''),
      utm_medium: (urlParams?.get('utm_medium') || body.utm_medium || ''),
      utm_campaign: (urlParams?.get('utm_campaign') || body.utm_campaign || ''),
      status: 'new',
    }

    // Validate required fields
    if (!leadData.name || !leadData.email || !leadData.country || !leadData.message) {
      return NextResponse.json(
        { error: 'Missing required fields: name, email, country, message' },
        { status: 400 }
      )
    }

    // Get Firestore database
    const db = getFirestoreDB()
    if (!db) {
      return NextResponse.json(
        { error: 'Firebase Firestore not initialized. Please check your Firebase configuration.' },
        { status: 500 }
      )
    }

    // Add to Firestore
    const docRef = await addDoc(collection(db, 'leads'), {
      ...leadData,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    })

    return NextResponse.json(
      { 
        success: true, 
        leadId: docRef.id,
        message: 'Lead saved successfully' 
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error saving lead to Firestore:', error)
    const errorMessage = error instanceof Error ? error.message : String(error)
    return NextResponse.json(
      { 
        error: 'Failed to save lead. Please try again.',
        details: process.env.NODE_ENV === 'development' ? errorMessage : undefined
      },
      { status: 500 }
    )
  }
}

// Optional: GET endpoint to check if API is working
export async function GET() {
  const db = getFirestoreDB()
  const isFirebaseConfigured = !!process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID && !!db
  
  return NextResponse.json(
    { 
      message: 'Leads API is running. Use POST to submit leads.',
      firebaseConfigured: isFirebaseConfigured,
      firebaseProjectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || 'not set'
    },
    { status: 200 }
  )
}

