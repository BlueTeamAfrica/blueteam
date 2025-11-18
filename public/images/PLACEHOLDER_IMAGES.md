# Placeholder Images Guide

This directory requires the following placeholder images. You can source them from Unsplash or Pexels with free licenses.

## Required Images

### Main Images
- `hero-gradient-abstract.webp` - Abstract gradient hero background (1920x1080)
  - Search: "abstract gradient blue purple"
  - Recommended: Unsplash
  
- `webdesign-laptop.webp` - Laptop with code/design (1920x1080)
  - Search: "laptop web design code"
  - Recommended: Unsplash

- `hosting-datacenter.webp` - Datacenter/server room (1920x1080)
  - Search: "datacenter server room"
  - Recommended: Unsplash

- `erp-architecture.webp` - Business systems diagram/chart (1920x1080)
  - Search: "business architecture diagram"
  - Recommended: Unsplash

- `crm-dashboard.webp` - CRM dashboard/analytics (1920x1080)
  - Search: "CRM dashboard analytics"
  - Recommended: Unsplash

- `mobile-field.webp` - Mobile device in field/business setting (1920x1080)
  - Search: "mobile phone business field"
  - Recommended: Unsplash

- `cybersecurity-lock.webp` - Security/lock icon or concept (1920x1080)
  - Search: "cybersecurity lock security"
  - Recommended: Unsplash

- `about-team.webp` - Diverse team collaboration (1920x1080)
  - Search: "diverse team collaboration"
  - Recommended: Unsplash

### Logo Placeholders
Place in `logos/` directory:
- `logo-placeholder-1.png` through `logo-placeholder-6.png`
  - Size: 200x100px (or similar aspect ratio)
  - Transparent background preferred
  - Use placeholder logo generators or brand placeholders

### Portfolio
Place in `portfolio/` directory:
- `regional-logistics-thumb.webp` - Logistics/shipping imagery (800x600)
  - Search: "logistics shipping container"

### Logo & Favicon
In `public/` root:
- `logo.png` - Blue Team Africa logo (512x512px, square)
- `favicon.ico` - Favicon (32x32px or 16x16px)

## Quick Setup from Unsplash

You can use Unsplash Source API for quick placeholders:

```bash
# Example: Download hero image
curl -L "https://source.unsplash.com/1920x1080/?abstract,gradient,blue" -o hero-gradient-abstract.webp

# Example: Download web design image
curl -L "https://source.unsplash.com/1920x1080/?laptop,code,web,design" -o webdesign-laptop.webp
```

Or visit:
- https://unsplash.com
- https://pexels.com

Search for keywords above and download high-resolution images, then convert to WebP format.

## Converting to WebP

Use ImageMagick or online tools:
```bash
# If you have ImageMagick installed
convert input.jpg -quality 85 output.webp
```

Or use online converter: https://convertio.co/jpg-webp/

