# Firebase Firestore Setup Guide

## Issue: Form Submissions Not Saving to Firestore

If your form submissions are successful but not appearing in Firestore, the Firebase Admin SDK is likely not properly configured.

## Quick Diagnosis

Check your production logs (Vercel/your hosting platform) for:
- `⚠️ Firebase Admin DB is not initialized`
- `❌ Firebase Admin initialization failed`
- `✅ Lead saved to Firestore successfully` (if working)

## Solution: Set Up Firebase Admin Credentials

### Option 1: Service Account JSON (Recommended for Vercel)

1. **Get Service Account Key:**
   - Go to [Firebase Console](https://console.firebase.google.com/)
   - Select your project: `blueteamafrica`
   - Go to **Project Settings** → **Service Accounts**
   - Click **Generate New Private Key**
   - Download the JSON file

2. **Add to Vercel Environment Variables:**
   - Go to your Vercel project settings
   - Navigate to **Environment Variables**
   - Add new variable:
     - **Name**: `FIREBASE_SERVICE_ACCOUNT_KEY`
     - **Value**: Copy the entire contents of the downloaded JSON file (as a single-line string)
     - **Environment**: Production, Preview, Development (select all)

3. **Format the JSON as a single line:**
   ```json
   {"type":"service_account","project_id":"blueteamafrica",...}
   ```

### Option 2: Use Application Default Credentials (Vercel)

If you're on Vercel and have Firebase project linked:
- Vercel can automatically use Application Default Credentials
- Make sure your Firebase project is connected in Vercel settings

### Option 3: Local Development Setup

1. **Create `.env.local` file:**
   ```env
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=blueteamafrica
   FIREBASE_SERVICE_ACCOUNT_KEY={"type":"service_account","project_id":"blueteamafrica",...}
   ```

2. **Or use service account file:**
   ```env
   GOOGLE_APPLICATION_CREDENTIALS=/path/to/service-account-key.json
   ```

## Verify Setup

After adding credentials:

1. **Redeploy your application** (Vercel will pick up new env vars)

2. **Check logs** when submitting a form:
   - Should see: `✅ Firebase Admin initialized successfully`
   - Should see: `✅ Firestore database initialized`
   - Should see: `✅ Lead saved to Firestore successfully`

3. **Check Firestore Console:**
   - Go to Firebase Console → Firestore Database
   - Look for `leads` collection
   - New submissions should appear there

## Firestore Security Rules

Make sure your Firestore security rules allow writes. For the `leads` collection:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /leads/{leadId} {
      // Allow writes from Admin SDK (bypasses rules)
      // But we still need rules for client SDK if used
      allow read, write: if false; // Admin SDK bypasses this anyway
    }
  }
}
```

**Note**: Admin SDK bypasses security rules, so the rules above are just for reference. The Admin SDK uses service account credentials which have full access.

## Troubleshooting

### Issue: Still not saving to Firestore

1. **Check environment variables are set:**
   - In Vercel: Project Settings → Environment Variables
   - Verify `FIREBASE_SERVICE_ACCOUNT_KEY` exists and is correct

2. **Check logs for errors:**
   - Look for Firebase initialization errors
   - Check if JSON parsing is failing

3. **Verify service account has permissions:**
   - Service account should have "Firebase Admin SDK Administrator Service Agent" role
   - Or "Cloud Datastore User" role

4. **Test locally:**
   ```bash
   # Set env var locally
   export FIREBASE_SERVICE_ACCOUNT_KEY='{"type":"service_account",...}'
   npm run dev
   # Submit form and check logs
   ```

### Issue: JSON parsing error

- Make sure `FIREBASE_SERVICE_ACCOUNT_KEY` is valid JSON
- Remove any line breaks (should be single-line)
- Escape quotes properly if needed

### Issue: Permission denied

- Check service account has proper IAM roles in Google Cloud Console
- Verify project ID matches: `blueteamafrica`

## Current Status Check

The code will log its status:
- ✅ `Firebase Admin initialized successfully` - Good!
- ⚠️ `Firebase Admin DB is not initialized` - Need credentials
- ❌ `Firebase Admin initialization failed` - Check error message

## Next Steps

1. ✅ Add `FIREBASE_SERVICE_ACCOUNT_KEY` to Vercel environment variables
2. ✅ Redeploy application
3. ✅ Test form submission
4. ✅ Check Firestore console for new leads
5. ✅ Verify logs show successful Firebase saves
