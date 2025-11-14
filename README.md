# Blue Team Africa Website

SEO-optimized website for Blue Team Africa, targeting top 3 rankings in Uganda, Kenya, and Rwanda.

## Features

- **SEO-Optimized**: Built with Next.js 14+ App Router for optimal SEO performance
- **Location-Specific Pages**: Dedicated landing pages for Uganda, Kenya, and Rwanda
- **Service Pages**: Comprehensive service pages targeting specific keywords
- **Blog**: Content marketing platform for ongoing SEO
- **Schema Markup**: Structured data for better search engine understanding
- **Responsive Design**: Mobile-first design with Tailwind CSS

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Optimized for Vercel

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Create a `.env.local` file:
```env
# Used for canonical URLs and the sitemap
NEXT_PUBLIC_SITE_URL=https://blueteamafrica.com

# Formspree endpoint for the contact form (create a form at formspree.io)
# Optional - for email notifications
NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/yourFormId

# Firebase Configuration (for lead storage)
# Get these from Firebase Console: Project Settings → Your apps → Web app
NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSyC...
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=blueteamafrica.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=blueteamafrica
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=blueteamafrica.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=166097215782
NEXT_PUBLIC_FIREBASE_APP_ID=1:166097215782:web:...
```

**Quick Setup:**
- Run `./setup-env.sh` to create `.env.local` template
- Or see `FIREBASE_CREDENTIALS_SETUP.md` for detailed instructions

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
app/
  ├── page.tsx              # Homepage
  ├── layout.tsx            # Root layout
  ├── globals.css           # Global styles
  ├── about/                # About page
  ├── contact/              # Contact page
  ├── portfolio/           # Portfolio page
  ├── blog/                 # Blog pages
  ├── services/             # Service pages
  │   ├── web-design/
  │   ├── web-development/
  │   ├── hosting/
  │   ├── app-development/
  │   ├── saas/
  │   └── cloud/
  ├── uganda/               # Location-specific pages
  ├── kenya/
  ├── rwanda/
  ├── sitemap.ts            # SEO sitemap
  └── robots.ts             # SEO robots.txt
components/
  ├── Header.tsx            # Site header
  ├── Footer.tsx            # Site footer
  └── SEO.tsx               # SEO utilities
lib/
  └── schema.ts             # Schema markup utilities
```

## SEO Features

- **Keyword Optimization**: Pages optimized for target keywords from keyword research
- **Location Targeting**: Country-specific pages for Uganda, Kenya, and Rwanda
- **Schema Markup**: LocalBusiness, Service, Organization, and Breadcrumb schemas
- **Sitemap**: Auto-generated XML sitemap
- **Robots.txt**: Properly configured for search engines
- **Meta Tags**: Comprehensive Open Graph and Twitter Card support

## Building for Production

```bash
npm run build
npm start
```

## Deployment

The site is optimized for deployment on Vercel:

1. Push your code to GitHub
2. Import the project in [Vercel](https://vercel.com/new)
3. Add `NEXT_PUBLIC_SITE_URL` and `NEXT_PUBLIC_FORMSPREE_ENDPOINT` to the Vercel project settings
4. Click **Deploy** (Vercel will install dependencies, run `npm run build`, and serve the app globally)

## Deployment Checklist

1. **Content Review**
   - Update hero copy, services, and case studies with final wording
   - Add your real logo and imagery (hero, portfolio, blog)
   - Replace placeholder blog entries or connect a CMS

2. **Environment Variables**
   - `NEXT_PUBLIC_SITE_URL` — production URL (e.g. https://blueteamafrica.com)
   - `NEXT_PUBLIC_FORMSPREE_ENDPOINT` — Formspree form URL (create at formspree.io using info@blueteamafrica.com)

3. **Contact Form QA**
   - Submit the form from `/contact`
   - Confirm the email arrives in the Formspree dashboard/inbox

4. **SEO / Analytics**
   - Verify `sitemap.xml` and `robots.txt`
   - Add Google Analytics 4 / Search Console if needed
   - Test Core Web Vitals with Lighthouse

5. **Post-Deploy Checks**
   - Run `npm run build` locally to ensure no build errors
   - Test all pages on mobile and desktop
   - Confirm navigation, forms, and external links work

## SEO Strategy

### Primary Keywords
- "web design" (5,000 searches/month)
- "website design" (5,000 searches/month)

### Location Keywords
- "web design Uganda", "website design Uganda"
- "web design Kenya", "website design Kenya"
- "web design Rwanda", "website design Rwanda"

### Service Keywords
- "web design services", "website design services"
- "web development", "web development company"
- "web design company", "website design company"
- "seo website design" (emerging keyword)

## License

Copyright © 2024 Blue Team Africa. All rights reserved.

