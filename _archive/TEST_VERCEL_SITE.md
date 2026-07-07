# 🔍 Test Your Vercel Site

## Your Site URL

**Full URL:** `https://blueteam-git-main-blueteamafricas-projects.vercel.app`

## Quick Tests

### Test 1: Homepage
Try: `https://blueteam-git-main-blueteamafricas-projects.vercel.app/`

**Expected:** Should show your homepage with hero section

### Test 2: Contact Page
Try: `https://blueteam-git-main-blueteamafricas-projects.vercel.app/contact`

**Expected:** Should show contact form

### Test 3: API Endpoint
Try: `https://blueteam-git-main-blueteamafricas-projects.vercel.app/api/leads`

**Expected:** Should return JSON:
```json
{
  "message": "Leads API is running...",
  "firebaseConfigured": true,
  "firebaseProjectId": "blueteamafrica"
}
```

## Common Issues

### Issue 1: 404 on All Pages

**Cause:** Build failed or routing issue

**Fix:**
1. Go to Vercel Dashboard
2. Check **Deployments** tab
3. Look for ❌ **Error** status
4. Check **Build Logs** for errors

### Issue 2: 404 on Specific Page

**Cause:** Page doesn't exist or routing issue

**Fix:**
- Verify page exists in `app/` directory
- Check file name is `page.tsx`
- Try homepage first: `/`

### Issue 3: Form Error

**Cause:** Missing environment variables

**Fix:**
1. Vercel Dashboard → Settings → Environment Variables
2. Add all 7 Firebase variables
3. Redeploy

## Next Steps

1. **Test the URLs above** and tell me what you see
2. **Check Vercel Dashboard** for build status
3. **Share any error messages** you see

Let me know what happens when you test these URLs!

