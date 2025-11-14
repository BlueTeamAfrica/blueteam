# Images Directory

Place all your website images in this directory.

## Recommended Image Structure

```
public/images/
├── hero/
│   └── hero-gradient-abstract.webp (or .jpg)
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
    └── logo.png (or .svg)
```

## Image Sources (from content pack)

Use these queries on Unsplash/Pexels/Pixabay:

1. **Hero gradient**: Search "colorful gradient background abstract"
2. **About founder**: Search "portrait entrepreneur africa" (or use stylized/illustrative)
3. **Team photo**: Search "tech team africa office"
4. **Website design**: Search "web design laptop office africa"
5. **eCommerce**: Search "mobile money africa smartphone payment"
6. **Architecture**: Search "cloud architecture team africa data center"

## Image Optimization

- **Format**: Use WebP when possible (better compression)
- **Hero images**: 2000×1200px recommended
- **Service images**: 1200×800px recommended
- **Portfolio images**: 1600×1000px recommended
- **Logo**: SVG preferred, or PNG with transparent background

## Using Images in Next.js

```tsx
import Image from 'next/image'

<Image
  src="/images/hero/hero-gradient-abstract.webp"
  alt="Blue Team Africa - Digital Growth"
  width={2000}
  height={1200}
  priority
/>
```

