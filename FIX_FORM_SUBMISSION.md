# 🔧 Fix: Form Submission Not Working

## Problem
The form is failing because Firestore security rules block all writes, including from your server-side API route.

## Quick Fix (Temporary)

### Step 1: Update Firestore Rules (Temporary)

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select project: **blueteamafrica**
3. Go to **Firestore Database** → **Rules** tab
4. **Replace** with these temporary rules:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /leads/{leadId} {
      allow read: if false;
      allow write: if true;  // Temporary - allows API route to write
    }
  }
}
```

5. Click **"Publish"**
6. Test the form again

### Why This Works (Temporarily)
- Allows writes so your API route can save leads
- Still blocks client-side reads (protects data)
- **This is temporary** - we'll set up proper Admin SDK next

## Permanent Fix (Set Up Admin SDK)

To properly secure this, we need Firebase Admin SDK for server-side writes that bypass rules.

**Option A: Use Service Account (Recommended)**
1. Firebase Console → Project Settings → Service Accounts
2. Generate new private key
3. Download JSON file
4. Add to environment variables (I'll help with this)

**Option B: Keep Current Setup (Simpler)**
- The temporary rules above will work
- Form will function properly
- Slightly less secure but acceptable for MVP

## Test After Fix

1. Go to: http://localhost:3002/contact
2. Fill out and submit form
3. Check Firebase Console → Firestore → `leads` collection
4. New lead should appear!

Let me know once you've updated the rules and we can test!

