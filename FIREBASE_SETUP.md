# Firebase/Firestore Setup Guide

This guide will help you set up Firebase Firestore to store contact form leads.

## Step 1: Create a Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click **"Add project"** or **"Create a project"**
3. Enter project name: `blueteamafrica` (or your preferred name)
4. Disable Google Analytics (optional) or enable if you want it
5. Click **"Create project"**
6. Wait for project creation to complete

## Step 2: Enable Firestore Database

1. In your Firebase project, click **"Firestore Database"** in the left menu
2. Click **"Create database"**
3. Choose **"Start in test mode"** (for now - we'll secure it later)
4. Select a location closest to East Africa (e.g., `europe-west1` or `asia-south1`)
5. Click **"Enable"**

## Step 3: Get Your Firebase Configuration

1. In Firebase Console, click the gear icon ⚙️ next to "Project Overview"
2. Click **"Project settings"**
3. Scroll down to **"Your apps"** section
4. Click the **Web icon** (`</>`) to add a web app
5. Register app name: `Blue Team Africa Web`
6. Click **"Register app"**
7. **Copy the `firebaseConfig` object** - you'll need these values:

```javascript
const firebaseConfig = {
  apiKey: "AIza...",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc123"
}
```

## Step 4: Set Up Firestore Security Rules

1. Go to **Firestore Database** → **Rules** tab
2. Replace the rules with:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow reads/writes to leads collection from authenticated users only
    // For now, we'll allow writes from your API route (server-side)
    match /leads/{leadId} {
      allow read: if request.auth != null; // Only authenticated users can read
      allow write: if false; // Disable client-side writes (we use API route)
    }
  }
}
```

**Note:** Since we're using an API route (`/api/leads`), the writes happen server-side, so these rules are for extra security.

## Step 5: Add Environment Variables

Create or update `.env.local` file in your project root:

```env
# Site URL
NEXT_PUBLIC_SITE_URL=https://blueteamafrica.com

# Formspree (for email notifications)
NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/yourFormId

# Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=AIza...
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=123456789
NEXT_PUBLIC_FIREBASE_APP_ID=1:123456789:web:abc123
```

## Step 6: Create the Leads Collection Structure

Firestore will automatically create the `leads` collection when the first lead is submitted. The structure will be:

```
leads/
  └── {leadId}/
      ├── name: string
      ├── company: string (optional)
      ├── email: string
      ├── phone: string (optional)
      ├── country: string
      ├── solution_interest: string (T1/T2/T3)
      ├── approx_annual_revenue: string (optional)
      ├── employees: string (optional)
      ├── message: string
      ├── preferred_time: string (optional)
      ├── package: string (optional)
      ├── utm_source: string (optional)
      ├── utm_medium: string (optional)
      ├── utm_campaign: string (optional)
      ├── status: string (new/contacted/qualified/proposal_sent/closed)
      ├── createdAt: timestamp
      └── updatedAt: timestamp
```

## Step 7: Test the Setup

1. Restart your dev server: `npm run dev`
2. Go to `/contact` page
3. Fill out and submit the form
4. Check Firebase Console → Firestore Database → `leads` collection
5. You should see a new document with all the form data

## Step 8: Set Up Firebase Admin (Optional - for Server-Side Operations)

If you want to manage leads server-side (update status, etc.), you can set up Firebase Admin:

```bash
npm install firebase-admin
```

Then create `lib/firebase-admin.ts` for server-side operations.

## Step 9: Add to Vercel Environment Variables

When deploying to Vercel:

1. Go to your Vercel project → **Settings** → **Environment Variables**
2. Add all the Firebase environment variables:
   - `NEXT_PUBLIC_FIREBASE_API_KEY`
   - `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`
   - `NEXT_PUBLIC_FIREBASE_PROJECT_ID`
   - `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET`
   - `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID`
   - `NEXT_PUBLIC_FIREBASE_APP_ID`
3. Redeploy your site

## Viewing Leads in Firebase

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project
3. Go to **Firestore Database**
4. Click on the **`leads`** collection
5. You'll see all submitted leads with their data

## Security Notes

- The API route (`/api/leads`) handles writes server-side
- Client-side code only reads Firebase config (safe to expose)
- Consider setting up Firebase Admin for advanced operations
- Regularly review and update Firestore security rules

## Troubleshooting

**Error: "Firebase not configured"**
- Check that all `NEXT_PUBLIC_FIREBASE_*` variables are set in `.env.local`
- Restart your dev server after adding environment variables

**Error: "Permission denied"**
- Check Firestore security rules
- Ensure the API route is working (server-side writes should work)

**Leads not appearing in Firestore**
- Check browser console for errors
- Verify Firebase config values are correct
- Check Network tab to see if `/api/leads` request is successful

