# 🔧 Fix Form Error on Vercel

## Common Causes & Fixes

### Issue 1: Missing Environment Variables

**Symptom:** Form fails with "Firebase not configured" or similar error

**Fix:**
1. Go to Vercel Dashboard → Your Project
2. Go to **Settings** → **Environment Variables**
3. Verify all 7 Firebase variables are added:
   - `NEXT_PUBLIC_FIREBASE_API_KEY`
   - `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`
   - `NEXT_PUBLIC_FIREBASE_PROJECT_ID`
   - `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET`
   - `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID`
   - `NEXT_PUBLIC_FIREBASE_APP_ID`
   - `NEXT_PUBLIC_SITE_URL`
4. Make sure each is selected for: ✅ Production, ✅ Preview, ✅ Development
5. **Redeploy** after adding variables

### Issue 2: Environment Variables Not Applied

**Symptom:** Variables added but form still fails

**Fix:**
1. Go to **Deployments** tab
2. Click **"..."** on latest deployment
3. Click **"Redeploy"**
4. Wait for deployment to complete

### Issue 3: Firestore Security Rules

**Symptom:** "Permission denied" error

**Fix:**
1. Go to Firebase Console → Firestore Database → Rules
2. Make sure rules allow writes:
   ```javascript
   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       match /leads/{leadId} {
         allow read: if false;
         allow write: if true;
       }
     }
   }
   ```
3. Click **"Publish"**

### Issue 4: CORS or Network Error

**Symptom:** Network error or CORS issues

**Fix:**
- Check browser console (F12) for specific error
- Verify API route is accessible: `https://your-site.vercel.app/api/leads`
- Check Vercel function logs

## 🔍 How to Diagnose

### Step 1: Check Browser Console

1. Open your live site
2. Press **F12** (or right-click → Inspect)
3. Go to **Console** tab
4. Try submitting the form
5. **Copy any error messages** you see

### Step 2: Check Vercel Logs

1. Go to Vercel Dashboard → Your Project
2. Go to **Deployments** tab
3. Click on the latest deployment
4. Check **"Function Logs"** or **"Runtime Logs"**
5. Look for Firebase or API errors

### Step 3: Test API Endpoint

Try accessing: `https://your-site.vercel.app/api/leads`

Should return:
```json
{
  "message": "Leads API is running. Use POST to submit leads.",
  "firebaseConfigured": true,
  "firebaseProjectId": "blueteamafrica"
}
```

If `firebaseConfigured: false`, environment variables are missing!

## ✅ Quick Checklist

- [ ] All 7 environment variables added to Vercel
- [ ] Variables selected for Production, Preview, Development
- [ ] Project redeployed after adding variables
- [ ] Firestore rules allow writes (`allow write: if true`)
- [ ] Checked browser console for errors
- [ ] Checked Vercel function logs

## 🆘 Share Error Details

Please share:
1. **Error message** from browser console (F12)
2. **Error message** from form (what user sees)
3. **Vercel function logs** (if available)
4. **Your Vercel URL** (so I can check)

This will help me pinpoint the exact issue!

