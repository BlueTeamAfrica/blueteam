# 🔧 Fix Form Error on Vercel

## Problem
API endpoint works, but form submission fails.

## Root Cause
**Firebase environment variables are missing in Vercel!**

The API returns: `"firebaseConfigured": false` - this means Firebase can't save leads.

## ✅ Solution: Add Environment Variables to Vercel

### Step 1: Go to Vercel Settings

1. **Vercel Dashboard** → Your Project
2. **Settings** tab → **Environment Variables**

### Step 2: Add All 7 Firebase Variables

Add these one by one (copy from your `.env.local`):

**Variable 1:**
```
Name: NEXT_PUBLIC_SITE_URL
Value: https://blueteam-git-main-blueteamafricas-projects.vercel.app
Select: ✅ Production, ✅ Preview, ✅ Development
```

**Variable 2:**
```
Name: NEXT_PUBLIC_FIREBASE_API_KEY
Value: AIzaSyCSdOTcQzefrHnOqIZ7mNjoi_OqirctFwg
Select: ✅ Production, ✅ Preview, ✅ Development
```

**Variable 3:**
```
Name: NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN
Value: blueteamafrica.firebaseapp.com
Select: ✅ Production, ✅ Preview, ✅ Development
```

**Variable 4:**
```
Name: NEXT_PUBLIC_FIREBASE_PROJECT_ID
Value: blueteamafrica
Select: ✅ Production, ✅ Preview, ✅ Development
```

**Variable 5:**
```
Name: NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET
Value: blueteamafrica.appspot.com
Select: ✅ Production, ✅ Preview, ✅ Development
```

**Variable 6:**
```
Name: NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID
Value: 166097215782
Select: ✅ Production, ✅ Preview, ✅ Development
```

**Variable 7:**
```
Name: NEXT_PUBLIC_FIREBASE_APP_ID
Value: 1:166097215782:web:79e392537a5835082361e7
Select: ✅ Production, ✅ Preview, ✅ Development
```

### Step 3: Redeploy

**IMPORTANT:** After adding variables, you MUST redeploy!

1. Go to **Deployments** tab
2. Click **"..."** on latest deployment
3. Click **"Redeploy"**
4. Wait 2-3 minutes for deployment to complete

### Step 4: Verify

After redeploy, test the API again:
- Visit: `https://blueteam-git-main-blueteamafricas-projects.vercel.app/api/leads`
- Should show: `"firebaseConfigured": true` ✅

### Step 5: Test Form

1. Go to: `https://blueteam-git-main-blueteamafricas-projects.vercel.app/contact`
2. Fill out form
3. Submit
4. Should work! ✅

## 🔍 Check Current Status

Test API endpoint:
```
https://blueteam-git-main-blueteamafricas-projects.vercel.app/api/leads
```

If you see `"firebaseConfigured": false`, environment variables are missing!

## ✅ After Adding Variables

1. **Redeploy** (very important!)
2. **Wait** for deployment to complete
3. **Test** API endpoint (should show `firebaseConfigured: true`)
4. **Test** contact form (should save to Firebase)

Let me know once you've added the variables and redeployed!

