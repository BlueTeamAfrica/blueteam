# Vercel Deployment Guide

## Quick Deploy to Vercel

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Push your code to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Blue Team Africa website"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Deploy on Vercel:**
   - Go to https://vercel.com
   - Sign up/Login with GitHub
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"

3. **Your site will be live!**
   - Vercel provides a URL like: `your-project.vercel.app`
   - You can add a custom domain later

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Deploy:**
   ```bash
   vercel
   ```

3. **Follow the prompts:**
   - Login to Vercel
   - Link to existing project or create new
   - Confirm settings

4. **For production deployment:**
   ```bash
   vercel --prod
   ```

## Pre-Deployment Checklist

- [x] Header spacing fixed (no gap with hero)
- [x] All components working
- [x] Images optimized
- [ ] Environment variables (if needed)
- [ ] Build succeeds locally: `npm run build`
- [ ] Test locally: `npm start`

## Build Configuration

Vercel will automatically:
- Detect Next.js framework
- Install dependencies (`npm install`)
- Run build command (`npm run build`)
- Start production server

## Environment Variables (If Needed)

If you need environment variables (e.g., API keys, Firebase):
1. Go to Vercel Dashboard → Project → Settings → Environment Variables
2. Add your variables
3. Redeploy

## Custom Domain

1. Go to Vercel Dashboard → Project → Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed
4. Vercel handles SSL automatically

## Post-Deployment

After deployment:
1. Test all pages on the live site
2. Check mobile responsiveness
3. Test WhatsApp buttons and links
4. Verify all images load correctly
5. Test form submissions (if applicable)

---

**Your site is ready to deploy!** 🚀

