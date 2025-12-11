// Firebase Admin SDK for server-side operations
// This bypasses Firestore security rules

import { initializeApp, getApps, cert, App, applicationDefault } from 'firebase-admin/app'
import { getFirestore, Firestore } from 'firebase-admin/firestore'

let adminApp: App | null = null
let adminDb: Firestore | null = null

// Initialize Admin SDK if credentials are available
// Supports multiple credential methods:
// 1. Service account JSON (FIREBASE_SERVICE_ACCOUNT_KEY env var)
// 2. Service account file path (GOOGLE_APPLICATION_CREDENTIALS env var)
// 3. Application Default Credentials (works on Vercel/Google Cloud)

try {
  // Check if we already have an initialized app
  if (getApps().length === 0) {
    const projectId = process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || 'blueteamafrica'
    
    let credential
    
    // Option 1: Service account JSON from environment variable
    if (process.env.FIREBASE_SERVICE_ACCOUNT_KEY) {
      try {
        const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY)
        credential = cert(serviceAccount)
        console.log('Firebase Admin: Using service account from env var')
      } catch (parseError) {
        console.warn('Firebase Admin: Failed to parse FIREBASE_SERVICE_ACCOUNT_KEY', parseError)
      }
    }
    
    // Option 2: Application Default Credentials (Vercel/Google Cloud)
    if (!credential) {
      try {
        credential = applicationDefault()
        console.log('Firebase Admin: Using Application Default Credentials')
      } catch (adcError) {
        console.warn('Firebase Admin: Application Default Credentials not available', adcError)
      }
    }
    
    // Initialize with available credential or minimal config
    if (credential) {
      adminApp = initializeApp({
        credential,
        projectId,
      })
      console.log('Firebase Admin initialized successfully')
    } else {
      // Fallback: Initialize without credentials (will fail on Firestore operations)
      // This allows the app to continue but Firebase operations will fail gracefully
      console.warn('Firebase Admin: No credentials found. Admin SDK will not work.')
      adminApp = null
    }
  } else {
    adminApp = getApps()[0]
  }

  if (adminApp) {
    adminDb = getFirestore(adminApp)
  }
} catch (error) {
  console.warn('Firebase Admin initialization failed. App will use JSON file fallback:', error)
  // Don't throw - allow app to continue without Firebase
  adminApp = null
  adminDb = null
}

export { adminDb }
export default adminApp

