# Image Upload Guide

This guide explains how to add images to your Blue Team Africa website.

## Where to Place Images

All images go in the `public/images/` directory. This directory is already created.

## Directory Structure

```
public/
└── images/
    ├── hero/
    │   └── hero-gradient-abstract.webp
    ├── about/
    │   ├── about-founder.jpg
    │   └── about-team.jpg
    ├── services/
    │   ├── t1-website-design.jpg
    │   ├── t2-ecommerce.jpg
    │   └── t3-architecture.jpg
    ├── portfolio/
    │   └── (project images)
    └── logo/
        └── logo.png
```

## Step-by-Step: Adding Images

### Option 1: Download from Unsplash/Pexels (Recommended)

1. **Go to Unsplash** (https://unsplash.com) or **Pexels** (https://pexels.com)

2. **Search for images** using these queries (from content pack):
   - Hero: `colorful gradient background abstract`
   - About founder: `portrait entrepreneur africa`
   - Team: `tech team africa office`
   - Website design: `web design laptop office africa`
   - eCommerce: `mobile money africa smartphone payment`
   - Architecture: `cloud architecture team africa data center`

3. **Download the image** (click download button)

4. **Rename and place** in the appropriate folder:
   ```bash
   # Example: Save hero image
   # Download → Rename to: hero-gradient-abstract.webp
   # Move to: public/images/hero/hero-gradient-abstract.webp
   ```

5. **Optimize if needed**:
   - Use online tools like [Squoosh](https://squoosh.app) to compress
   - Convert to WebP format for better performance
   - Resize to recommended dimensions (see below)

### Option 2: Upload Your Own Images

1. **Prepare your images**:
   - Resize to recommended dimensions
   - Optimize file size
   - Use appropriate format (WebP, JPG, or PNG)

2. **Place in correct folder**:
   ```bash
   # Example for logo
   cp /path/to/your/logo.png public/images/logo/logo.png
   ```

## Recommended Image Sizes

- **Hero images**: 2000×1200px (WebP or JPG)
- **Service images**: 1200×800px (WebP or JPG)
- **Portfolio images**: 1600×1000px (WebP or JPG)
- **About images**: 1200×1200px (square, JPG)
- **Logo**: SVG preferred, or PNG with transparent background

## Using Images in Your Code

### Method 1: Next.js Image Component (Recommended)

```tsx
import Image from 'next/image'

<Image
  src="/images/hero/hero-gradient-abstract.webp"
  alt="Blue Team Africa - Digital Growth"
  width={2000}
  height={1200}
  priority // For above-the-fold images
  className="rounded-lg"
/>
```

### Method 2: Regular img tag (for simple cases)

```tsx
<img 
  src="/images/logo/logo.png" 
  alt="Blue Team Africa Logo"
  className="w-32 h-32"
/>
```

## Quick Start: Add Images Now

1. **Create subdirectories** (if needed):
   ```bash
   mkdir -p public/images/{hero,about,services,portfolio,logo}
   ```

2. **Download images** from Unsplash/Pexels using the queries above

3. **Place images** in the correct folders

4. **Update your pages** to use the images (I can help with this)

## Image Optimization Tips

1. **Use WebP format** when possible (better compression)
2. **Compress images** before uploading (use [TinyPNG](https://tinypng.com) or [Squoosh](https://squoosh.app))
3. **Use Next.js Image component** for automatic optimization
4. **Add proper alt text** for SEO and accessibility

## Example: Adding Hero Image

1. Download image from Unsplash: `colorful gradient background abstract`
2. Save as: `public/images/hero/hero-gradient-abstract.webp`
3. Update homepage to use it:

```tsx
// In app/page.tsx, update the hero section:
<Image
  src="/images/hero/hero-gradient-abstract.webp"
  alt="Blue Team Africa - Technology Solutions for East Africa"
  fill
  className="object-cover"
  priority
/>
```

## Need Help?

If you want me to:
- Update pages to use specific images
- Create image placeholders
- Set up image optimization
- Add image galleries

Just let me know which images you've added and I'll integrate them!

