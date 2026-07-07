# 🔧 Fix: Set Up Firebase Admin SDK (Bypasses Security Rules)

## Problem
The client SDK in Next.js API routes still respects Firestore security rules, so writes are being blocked.

## Solution: Use Firebase Admin SDK

Admin SDK runs with admin privileges and bypasses security rules - perfect for server-side API routes.

## Step 1: Get Service Account Key

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select project: **blueteamafrica**
3. Click ⚙️ **Project Settings** (gear icon)
4. Go to **"Service Accounts"** tab
5. Click **"Generate New Private Key"**
6. Click **"Generate Key"** in the popup
7. **Download the JSON file** - save it securely (DO NOT commit to git!)

## Step 2: Add Service Account to Environment

**Option A: Use JSON file content (Development)**
1. Open the downloaded JSON file
2. Copy the entire content
3. Add to `.env.local`:
   ```env
   FIREBASE_SERVICE_ACCOUNT={"type":"service_account","project_id":"blueteamafrica",...}
   ```
   (Paste the entire JSON as one line, or use base64 encoding)

**Option B: Use file path (Local development)**
1. Save the JSON file as `firebase-service-account.json` in project root
2. Add to `.gitignore` (already there)
3. The code will auto-detect it

**Option C: Use Vercel Environment Variables (Production)**
1. In Vercel project settings → Environment Variables
2. Add `FIREBASE_SERVICE_ACCOUNT` with the JSON content

## Step 3: Update API Route to Use Admin SDK

I'll update the code to use Admin SDK instead of client SDK for writes.

## Quick Alternative: Temporarily Allow Writes

If you want to test now without setting up Admin SDK:

**Update Firestore Rules to:**
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /leads/{leadId} {
      allow read: if false;
      allow write: if true;  // Temporary - allows writes
    }
  }
}
```

**Make sure to click "Publish"** after updating!

## Choose Your Approach

- **Quick Fix**: Update rules to `allow write: if true` (temporary)
- **Proper Fix**: Set up Firebase Admin SDK (recommended for production)

Let me know which approach you prefer!

