// Firebase Admin SDK for server-side operations
// This bypasses Firestore security rules

import { initializeApp, getApps, cert, App } from 'firebase-admin/app'
import { getFirestore, Firestore } from 'firebase-admin/firestore'

let adminApp: App | null = null
let adminDb: Firestore | null = null

// Initialize Admin SDK if credentials are available
// Option 1: Using service account (preferred for production)
// Option 2: Using application default credentials (works on Vercel/Google Cloud)

try {
  // Check if we already have an initialized app
  if (getApps().length === 0) {
    // Try to initialize with service account credentials
    // For now, we'll use application default credentials if available
    // On Vercel, this will use the environment variable if set
    adminApp = initializeApp({
      credential: cert({
        projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || 'blueteamafrica',
        // For now, we'll use application default credentials
        // You can add a service account JSON later
      }) as any,
      projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || 'blueteamafrica',
    })
    console.log('Firebase Admin initialized successfully')
  } else {
    adminApp = getApps()[0]
  }

  if (adminApp) {
    adminDb = getFirestore(adminApp)
  }
} catch (error) {
  console.warn('Firebase Admin initialization failed. Using client SDK instead:', error)
  // Fall back to client SDK if Admin SDK fails
  adminApp = null
  adminDb = null
}

export { adminDb }
export default adminApp

