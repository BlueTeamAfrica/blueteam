// Firebase configuration for Blue Team Africa
// Credentials should be set in .env.local file

import { initializeApp, getApps, FirebaseApp } from 'firebase/app'
import { getFirestore, Firestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || 'blueteamafrica.firebaseapp.com',
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || 'blueteamafrica',
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || 'blueteamafrica.appspot.com',
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || '166097215782',
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
}

// Validate required config
const isConfigValid = firebaseConfig.apiKey && firebaseConfig.appId

// Initialize Firebase (only if config is valid and not already initialized)
let app: FirebaseApp | null = null
let db: Firestore | null = null

if (isConfigValid) {
  try {
    if (getApps().length === 0) {
      app = initializeApp(firebaseConfig)
      console.log('Firebase initialized successfully')
    } else {
      app = getApps()[0]
    }
    
    // Initialize Firestore only if app was initialized
    if (app) {
      db = getFirestore(app)
    }
  } catch (error) {
    console.error('Error initializing Firebase:', error)
    // Don't throw - allow app to continue without Firebase
    app = null
    db = null
  }
} else {
  console.warn('Firebase configuration is incomplete. Please set NEXT_PUBLIC_FIREBASE_API_KEY and NEXT_PUBLIC_FIREBASE_APP_ID in .env.local')
}

// Export db - will be null if Firebase not configured
export { db }

// Export app - will be null if Firebase not configured
export default app

