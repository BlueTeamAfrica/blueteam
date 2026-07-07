# 🚀 Deploy to Vercel - Step by Step Guide

## ✅ Prerequisites

- ✅ Code pushed to GitHub
- ✅ Form working locally
- ✅ Firebase configured

## 📋 Step-by-Step Deployment

### Step 1: Verify Code is Pushed to GitHub

```bash
git status
```

If you have uncommitted changes:
```bash
git add -A
git commit -m "Ready for Vercel deployment"
git push origin main
```

### Step 2: Sign Up / Login to Vercel

1. Go to: https://vercel.com
2. Click **"Sign Up"** or **"Log In"**
3. Choose **"Continue with GitHub"** (recommended)
4. Authorize Vercel to access your GitHub account

### Step 3: Import Your Project

1. In Vercel dashboard, click **"Add New Project"** or **"New Project"**
2. You'll see your GitHub repositories
3. Find and select: **`BlueTeamAfrica/blueteam`**
4. Click **"Import"**

### Step 4: Configure Project Settings

Vercel will auto-detect Next.js. Keep these defaults:
- **Framework Preset**: Next.js (auto-detected)
- **Root Directory**: `./` (default)
- **Build Command**: `npm run build` (default)
- **Output Directory**: `.next` (default)

**Click "Deploy"** (we'll add environment variables after)

### Step 5: Add Environment Variables

**IMPORTANT:** After deployment starts, add these variables:

1. Go to your project in Vercel
2. Click **"Settings"** tab
3. Click **"Environment Variables"** in left sidebar
4. Add each variable one by one:

#### Required Variables:

```env
NEXT_PUBLIC_SITE_URL=https://your-project-name.vercel.app
```

```env
NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSyCSdOTcQzefrHnOqIZ7mNjoi_OqirctFwg
```

```env
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=blueteamafrica.firebaseapp.com
```

```env
NEXT_PUBLIC_FIREBASE_PROJECT_ID=blueteamafrica
```

```env
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=blueteamafrica.appspot.com
```

```env
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=166097215782
```

```env
NEXT_PUBLIC_FIREBASE_APP_ID=1:166097215782:web:79e392537a5835082361e7
```

**For each variable:**
- Click **"Add New"**
- Paste the **Name** and **Value**
- Select **"Production"**, **"Preview"**, and **"Development"** (all three)
- Click **"Save"**

### Step 6: Redeploy

After adding all environment variables:

1. Go to **"Deployments"** tab
2. Click the **"..."** menu on the latest deployment
3. Click **"Redeploy"**
4. Or push a new commit to trigger auto-deploy

### Step 7: Test Your Live Site

1. Wait for deployment to complete (2-3 minutes)
2. Click on your deployment to see the live URL
3. Visit: `https://your-project-name.vercel.app`
4. Test the contact form
5. Check Firebase Console → Firestore → `leads` collection

## ✅ Verification Checklist

- [ ] Code pushed to GitHub
- [ ] Vercel account created
- [ ] Project imported from GitHub
- [ ] Initial deployment started
- [ ] All 7 environment variables added
- [ ] Project redeployed with variables
- [ ] Live site loads correctly
- [ ] Contact form works
- [ ] Leads saving to Firebase

## 🔧 Troubleshooting

### Build Fails

- Check build logs in Vercel dashboard
- Common issues:
  - Missing environment variables
  - TypeScript errors
  - Missing dependencies

### Form Not Working on Live Site

- Verify all Firebase environment variables are set
- Check browser console for errors (F12)
- Verify Firestore rules allow writes
- Check Vercel function logs

### Environment Variables Not Working

- Make sure you selected all environments (Production, Preview, Development)
- Redeploy after adding variables
- Check variable names match exactly (case-sensitive)

## 🎉 After Deployment

1. **Update Firestore Rules** (if needed):
   - Rules should still allow writes
   - Check Firebase Console → Firestore → Rules

2. **Set Custom Domain** (optional):
   - Vercel Settings → Domains
   - Add your domain (e.g., blueteamafrica.com)

3. **Monitor Deployments**:
   - Vercel auto-deploys on every git push
   - Check deployment status in dashboard

## 📝 Quick Reference

**Vercel Dashboard**: https://vercel.com/dashboard
**Your Project**: https://vercel.com/dashboard (after import)
**Environment Variables**: Settings → Environment Variables

## 🆘 Need Help?

If you encounter issues:
1. Check Vercel deployment logs
2. Check browser console (F12)
3. Verify all environment variables are set
4. Make sure Firestore rules allow writes

Let me know when you're ready to start, or if you need help with any step!

