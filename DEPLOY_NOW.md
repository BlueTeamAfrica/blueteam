# 🚀 Deploy to Vercel - Quick Start

## Step 1: Push Code to GitHub (if needed)

```bash
cd /Users/mohamedeldaby/Documents/blueteamafrica
git add -A
git commit -m "Ready for Vercel deployment"
git push origin main
```

## Step 2: Go to Vercel

1. **Open**: https://vercel.com
2. **Sign up/Login** with GitHub
3. **Click**: "Add New Project"
4. **Select**: `BlueTeamAfrica/blueteam` repository
5. **Click**: "Import"

## Step 3: Configure Project

- Framework: **Next.js** (auto-detected) ✅
- Root Directory: `./` (default) ✅
- **Click "Deploy"** (we'll add env vars after)

## Step 4: Add Environment Variables

After deployment starts:

1. Go to **Settings** → **Environment Variables**
2. Add these **7 variables**:

### Copy-Paste These:

**Variable 1:**
```
Name: NEXT_PUBLIC_SITE_URL
Value: https://blueteamafrica.vercel.app
(Or your actual Vercel URL after deployment)
```

**Variable 2:**
```
Name: NEXT_PUBLIC_FIREBASE_API_KEY
Value: AIzaSyCSdOTcQzefrHnOqIZ7mNjoi_OqirctFwg
```

**Variable 3:**
```
Name: NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN
Value: blueteamafrica.firebaseapp.com
```

**Variable 4:**
```
Name: NEXT_PUBLIC_FIREBASE_PROJECT_ID
Value: blueteamafrica
```

**Variable 5:**
```
Name: NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET
Value: blueteamafrica.appspot.com
```

**Variable 6:**
```
Name: NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID
Value: 166097215782
```

**Variable 7:**
```
Name: NEXT_PUBLIC_FIREBASE_APP_ID
Value: 1:166097215782:web:79e392537a5835082361e7
```

**For each:**
- Select: ✅ Production, ✅ Preview, ✅ Development
- Click "Save"

## Step 5: Redeploy

1. Go to **Deployments** tab
2. Click **"..."** on latest deployment
3. Click **"Redeploy"**

## Step 6: Test!

1. Visit your live URL (shown in Vercel)
2. Test contact form
3. Check Firebase → Firestore → `leads` collection

## ✅ Done!

Your website is now live! 🎉

