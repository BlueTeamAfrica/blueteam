# 🚀 Deploy to Vercel - Quick Guide

## Option 1: Deploy via Vercel Dashboard (Easiest)

1. **Push your code to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Blue Team Africa website ready for deployment"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Go to Vercel:**
   - Visit https://vercel.com
   - Sign up/Login (use GitHub account)
   - Click "Add New..." → "Project"

3. **Import Repository:**
   - Select your GitHub repository
   - Vercel auto-detects Next.js settings
   - Click "Deploy"

4. **Your site is live!**
   - Vercel provides: `your-project.vercel.app`
   - Custom domain can be added later

## Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI globally
npm i -g vercel

# Deploy (follow prompts)
vercel

# For production deployment
vercel --prod
```

## Pre-Deployment Checklist

✅ Header spacing fixed (no gap with hero)
✅ Dropdowns aligned perfectly with header
✅ All components working
✅ Build test: `npm run build` (should succeed)
✅ Test production: `npm start` (verify locally)

## Build Commands (Auto-detected by Vercel)

- **Build Command:** `npm run build`
- **Output Directory:** `.next`
- **Install Command:** `npm install`
- **Node Version:** Auto-detected (18+)

## Environment Variables (If Needed)

If you use environment variables:
1. Vercel Dashboard → Project → Settings → Environment Variables
2. Add variables (e.g., API keys, Firebase config)
3. Redeploy automatically

## After Deployment

1. Test your live site
2. Check mobile responsiveness
3. Test WhatsApp buttons
4. Verify all images load
5. Test all navigation links

## Custom Domain Setup

1. Vercel Dashboard → Project → Settings → Domains
2. Add your domain (e.g., blueteamafrica.com)
3. Update DNS as instructed
4. SSL certificate is automatic

---

**Ready to deploy!** Your site is production-ready. 🎉

