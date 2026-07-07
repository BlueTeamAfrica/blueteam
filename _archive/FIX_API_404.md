# 🔧 Fix: API Route Returns 404 on Vercel

## Problem
The `/api/leads` endpoint returns 404 on Vercel, but works locally.

## Solution: Trigger Rebuild

I've pushed a commit to trigger a rebuild. Now:

### Step 1: Check Vercel Build

1. Go to **Vercel Dashboard** → Your Project
2. Go to **Deployments** tab
3. Wait for new deployment to complete (should start automatically)
4. Check if build succeeds ✅

### Step 2: Test API After Rebuild

Once deployment completes, test:
- `https://blueteam-git-main-blueteamafricas-projects.vercel.app/api/leads`

Should return JSON (not 404):
```json
{
  "message": "Leads API is running...",
  "firebaseConfigured": true,
  "firebaseProjectId": "blueteamafrica"
}
```

### Step 3: If Still 404

**Option A: Manual Redeploy**
1. Go to **Deployments** tab
2. Click **"..."** on latest deployment
3. Click **"Redeploy"**

**Option B: Check Build Logs**
1. Click on deployment
2. Check **Build Logs**
3. Look for errors related to API routes
4. Share any errors you see

## Common Causes

1. **Build didn't include API route** - Rebuild fixes this
2. **Runtime error** - Check function logs in Vercel
3. **Environment variables missing** - Check Settings → Environment Variables

## ✅ After Rebuild

1. Test API endpoint: `/api/leads`
2. Test contact form: `/contact`
3. Submit form and check Firebase

Let me know if the API works after the rebuild!

