# Blue Team Africa — Full Website Rebuild

A production-ready Next.js (App Router) website for Blue Team Africa, built with Tailwind CSS, Framer Motion, and TypeScript.

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm/yarn
- Git (optional, for version control)

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   ```
   http://localhost:3000
   ```

## 📦 Project Structure

```
blueteamafrica/
├── app/                          # Next.js App Router pages
│   ├── page.tsx                 # Home page
│   ├── layout.tsx               # Root layout with Header/Footer
│   ├── solutions/               # Solutions hub
│   ├── services/                # Service pages
│   │   ├── web-design/
│   │   ├── hosting/
│   │   ├── erp-integration/
│   │   ├── crm-automation/
│   │   ├── mobile-apps/
│   │   └── cybersecurity/
│   ├── portfolio/               # Portfolio index + case studies
│   ├── blog/                    # Blog index + posts
│   ├── company/                 # About/Our Story page
│   ├── contact/                 # Contact form page
│   ├── faq/                     # FAQ page
│   └── api/
│       └── leads/               # Contact form API endpoint
├── components/                  # React components
│   ├── Header.tsx               # Sticky header with navigation
│   ├── Footer.tsx               # Site footer
│   ├── HeroWithVideo.tsx        # Hero with video modal
│   ├── ServicesGrid.tsx         # Services grid
│   ├── PackageCards.tsx         # Essential/Professional/Elite packages
│   ├── LogoStrip.tsx            # Client logos carousel
│   ├── PortfolioGrid.tsx        # Portfolio grid
│   ├── BlogList.tsx             # Blog post list
│   ├── ContactForm.tsx          # Contact form component
│   ├── WhatsAppFloat.tsx        # Floating WhatsApp button
│   └── SEOJsonLd.tsx            # JSON-LD schema helpers
├── public/
│   └── images/                  # Image assets
│       ├── hero-gradient-abstract.webp
│       ├── webdesign-laptop.webp
│       ├── hosting-datacenter.webp
│       ├── erp-architecture.webp
│       ├── crm-dashboard.webp
│       ├── mobile-field.webp
│       ├── cybersecurity-lock.webp
│       ├── about-team.webp
│       ├── logos/               # Client logo placeholders
│       └── portfolio/           # Portfolio images
├── styles/
│   └── globals.css              # Global styles + Tailwind
├── data/
│   └── leads.json               # Dev: Contact form submissions (auto-created)
├── content/                     # Markdown content (optional)
│   ├── portfolio/
│   └── blog/
└── tailwind.config.ts           # Tailwind configuration

```

## 🎨 Brand Colors

- **Primary (Blue):** `#2563EB`
- **Secondary (Amber/Gold):** `#D97706`
- **Background:** `#F8FAFC`
- **Dark:** `#0F172A`

## 📝 Key Features

- ✅ **Sticky Header** with scroll shadow change
- ✅ **Animated Hero** with video play button and accessible modal
- ✅ **WhatsApp Integration** (floating button + header links)
- ✅ **Contact Form** with dev JSON file logging (ready for Firestore)
- ✅ **SEO Optimized** with JSON-LD schema markup
- ✅ **Mobile Responsive** with mobile-first design
- ✅ **Accessible** with ARIA labels and keyboard navigation
- ✅ **Framer Motion** animations (optional, with CSS fallbacks)

## 🔧 Configuration

### Tailwind CSS

Colors and fonts are configured in `tailwind.config.ts`. Brand colors and font families (Poppins for headings, Inter for body) are already set up.

### Contact Form API

The contact form submits to `/api/leads` which currently:
- **Development:** Saves to `data/leads.json` (local JSON file)
- **Production:** Ready to swap to Firestore (instructions in `/app/api/leads/route.ts`)

To switch to Firestore:
1. Set up Firebase project and add credentials
2. Uncomment Firestore code in `/app/api/leads/route.ts`
3. Remove local JSON file logic

### Analytics

Placeholder GA4 events are included:
- `audit_cta_click`
- `lead_form_submit`
- `video_play`
- `whatsapp_click`

Add your GA4 tracking ID to enable analytics.

## 🖼️ Adding Images

### Placeholder Images Required

See `public/images/PLACEHOLDER_IMAGES.md` for a complete list of required images and where to source them (Unsplash/Pexels).

### Quick Image Setup

1. **Download images** from Unsplash or Pexels (see guide above)
2. **Convert to WebP** format (use ImageMagick or online converter)
3. **Place in appropriate directories** under `public/images/`

### Logo & Favicon

- `public/logo.png` — Blue Team Africa logo (512x512px)
- `public/favicon.ico` — Favicon (32x32px or 16x16px)

## 📄 Available Pages

- `/` — Home page
- `/solutions` — Solutions hub with packages
- `/services/web-design` — Web design service page
- `/services/hosting` — Hosting service page
- `/services/erp-integration` — ERP integration service page
- `/services/crm-automation` — CRM & automation service page
- `/services/mobile-apps` — Mobile app development page
- `/services/cybersecurity` — Cybersecurity services page
- `/portfolio` — Portfolio index
- `/portfolio/regional-logistics` — Sample case study
- `/blog` — Blog index
- `/blog/how-to-choose-erp-in-uganda` — Sample blog post
- `/company` — About/Our Story page
- `/contact` — Contact form page
- `/faq` — FAQ page (12 questions)

## 🛠️ Development

### Build for Production

```bash
npm run build
npm start
```

### Linting

```bash
npm run lint
```

### TypeScript

The project uses TypeScript. Run type checking with:
```bash
npx tsc --noEmit
```

## 📞 Contact Information

- **Phone/WhatsApp:** +256 765 508 131
- **Email:** eldaby@meslsolutions.com
- **WhatsApp Link:** https://wa.me/256765508131

## 🔄 Next Steps

1. **Replace placeholder images** with real assets (see `public/images/PLACEHOLDER_IMAGES.md`)
2. **Add client logos** to `public/images/logos/`
3. **Set up Firestore** for production contact form submissions
4. **Add GA4 tracking ID** for analytics
5. **Add brand video URL** to HeroWithVideo component
6. **Review and customize content** across all pages
7. **Test contact form** submissions locally
8. **Deploy to production** (Vercel recommended)

## 📚 Dependencies

- **Next.js 14.2+** — React framework with App Router
- **React 18.3+** — UI library
- **Tailwind CSS 3.4+** — Utility-first CSS
- **Framer Motion 11.0+** — Animation library (optional)
- **TypeScript 5.4+** — Type safety

## 🐛 Troubleshooting

### Images not loading
- Ensure images are in the correct `public/images/` directories
- Check file names match exactly (case-sensitive)
- Convert images to WebP format for best performance

### Contact form not submitting
- Check `data/` directory exists (auto-created on first submission)
- Ensure form fields are filled correctly
- Check browser console for errors

### Styling issues
- Ensure Tailwind CSS is properly configured
- Clear `.next` cache and rebuild: `rm -rf .next && npm run build`

## 📄 License

Proprietary — Blue Team Africa

---

**Built with ❤️ by Blue Team Africa**
