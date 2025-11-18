# ✅ Next Steps Checklist

Your Blue Team Africa website is now running! Here's what to do next:

## 🧪 1. Test All Features (Do This First)

Visit http://localhost:3000 and test:

- [ ] **Header Navigation** — Click all nav links (Home, Solutions, Portfolio, Blog, Company, Contact)
- [ ] **Mobile Menu** — Test on mobile/tablet viewport (resize browser or use DevTools)
- [ ] **Hero Video Button** — Click play button, verify modal opens/closes (ESC key should close)
- [ ] **WhatsApp Floating Button** — Click floating WhatsApp button (bottom-right)
- [ ] **WhatsApp Header Button** — Click WhatsApp button in header
- [ ] **Contact Form** — Fill out and submit (check `data/leads.json` file is created)
- [ ] **Services Pages** — Visit all 6 service pages:
  - `/services/web-design`
  - `/services/hosting`
  - `/services/erp-integration`
  - `/services/crm-automation`
  - `/services/mobile-apps`
  - `/services/cybersecurity`
- [ ] **Portfolio** — Visit `/portfolio` and case study `/portfolio/regional-logistics`
- [ ] **Blog** — Visit `/blog` and sample post `/blog/how-to-choose-erp-in-uganda`
- [ ] **FAQ Page** — Visit `/faq` and verify all 12 questions display
- [ ] **Company Page** — Visit `/company` (About/Our Story)
- [ ] **Scroll Behavior** — Test sticky header shadow change on scroll

## 🖼️ 2. Add Placeholder Images (Required)

The site needs placeholder images. See `public/images/PLACEHOLDER_IMAGES.md` for details.

**Quick options:**

### Option A: Use Unsplash API (Fast)
```bash
cd public/images

# Download hero image
curl -L "https://source.unsplash.com/1920x1080/?abstract,gradient,blue" -o hero-gradient-abstract.webp

# Download web design image
curl -L "https://source.unsplash.com/1920x1080/?laptop,code,web,design" -o webdesign-laptop.webp

# Download hosting image
curl -L "https://source.unsplash.com/1920x1080/?datacenter,server,room" -o hosting-datacenter.webp

# Download ERP image
curl -L "https://source.unsplash.com/1920x1080/?business,architecture,diagram" -o erp-architecture.webp

# Download CRM image
curl -L "https://source.unsplash.com/1920x1080/?dashboard,analytics,crm" -o crm-dashboard.webp

# Download mobile image
curl -L "https://source.unsplash.com/1920x1080/?mobile,phone,business" -o mobile-field.webp

# Download cybersecurity image
curl -L "https://source.unsplash.com/1920x1080/?cybersecurity,lock,security" -o cybersecurity-lock.webp

# Download team image
curl -L "https://source.unsplash.com/1920x1080/?diverse,team,collaboration" -o about-team.webp

# Portfolio image
curl -L "https://source.unsplash.com/800x600/?logistics,shipping" -o portfolio/regional-logistics-thumb.webp
```

**Note:** These will download JPG files. Convert to WebP format using:
- Online converter: https://convertio.co/jpg-webp/
- Or ImageMagick: `convert input.jpg -quality 85 output.webp`

### Option B: Manual Download
1. Visit https://unsplash.com or https://pexels.com
2. Search for keywords from `PLACEHOLDER_IMAGES.md`
3. Download high-resolution images
4. Convert to WebP format
5. Place in correct directories under `public/images/`

### Logo & Favicon
- [ ] Add `public/logo.png` (512x512px, square)
- [ ] Add `public/favicon.ico` (32x32px)
- [ ] Add 6 logo placeholders in `public/images/logos/logo-placeholder-1.png` through `logo-placeholder-6.png`

## 📝 3. Customize Content (Optional)

Review and customize:

- [ ] **Home Page Hero** — Update title/subtitle in `app/page.tsx`
- [ ] **Services Descriptions** — Update service details in service pages
- [ ] **Package Cards** — Review pricing/details in `components/PackageCards.tsx`
- [ ] **FAQ** — Review/update FAQ questions in `app/faq/page.tsx`
- [ ] **Company Story** — Review/update company page content in `app/company/page.tsx`
- [ ] **Contact Info** — Verify phone/email correct in `components/Header.tsx`, `components/Footer.tsx`, `components/ContactForm.tsx`

## 🎬 4. Add Brand Video (Optional)

Update hero video URL in `components/HeroWithVideo.tsx`:

```tsx
videoUrl = 'YOUR_YOUTUBE_OR_VIMEO_EMBED_URL'
```

Or leave placeholder for now.

## 🔧 5. Set Up Analytics (Optional)

Add Google Analytics 4 tracking:

1. Get your GA4 Measurement ID (e.g., `G-XXXXXXXXXX`)
2. Add to `app/layout.tsx` in `<head>` section:

```tsx
<script async src={`https://www.googletagmanager.com/gtag/js?id=${GA4_MEASUREMENT_ID}`}></script>
<script dangerouslySetInnerHTML={{
  __html: `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${GA4_MEASUREMENT_ID}');
  `
}}></script>
```

Events are already tracked:
- `video_play` — Hero video play
- `lead_form_submit` — Contact form submission
- `whatsapp_click` — WhatsApp button clicks

## 🔥 6. Production Setup (When Ready)

### Set Up Firestore (For Contact Form)

Currently using dev JSON file logging. For production:

1. **Create Firebase Project:**
   - Go to https://console.firebase.google.com
   - Create new project
   - Enable Firestore Database

2. **Get Service Account:**
   - Project Settings → Service Accounts
   - Generate new private key
   - Save as `firebase-service-account.json` (add to `.gitignore`)

3. **Update API Endpoint:**
   - Follow instructions in `app/api/leads/route.ts`
   - Uncomment Firestore code
   - Remove local JSON file logic

4. **Set Environment Variables:**
   ```env
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
   FIREBASE_SERVICE_ACCOUNT_KEY=path/to/firebase-service-account.json
   ```

### Deploy to Vercel (Recommended)

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Deploy to Vercel:**
   - Go to https://vercel.com
   - Import your GitHub repository
   - Add environment variables if needed
   - Deploy!

   Or use CLI:
   ```bash
   npm i -g vercel
   vercel
   ```

## 📋 7. Final Checks Before Launch

- [ ] All placeholder images replaced
- [ ] All links work correctly
- [ ] Contact form tested (submissions working)
- [ ] Mobile responsive (test on real devices)
- [ ] SEO meta tags verified (check page source)
- [ ] JSON-LD schema validated (use Google Rich Results Test)
- [ ] Performance check (Lighthouse score)
- [ ] Accessibility check (WCAG compliance)
- [ ] Analytics configured (if using)
- [ ] Firestore set up (for production contact form)
- [ ] Domain configured (if using custom domain)

## 🎉 You're Done!

Once you've completed these steps, your Blue Team Africa website is ready for production!

---

**Need Help?**
- Check `README.md` for detailed documentation
- Review `FILES_CREATED.md` for file structure
- See `public/images/PLACEHOLDER_IMAGES.md` for image requirements
