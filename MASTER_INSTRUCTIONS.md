# 🔵 MASTER INSTRUCTION FOR BLUE TEAM AFRICA WEBSITE (GLOBAL STANDARD)

You are working on the Blue Team Africa website (https://www.blueteamafrica.com).

Follow these rules for any service page, category page, or content block.

---

## 1️⃣ FILE LOCATIONS & COMPONENTS

### **All service pages are stored in:**
```
/app/services/[slug]/page.jsx
```

### **Shared components are inside:**
```
/components
```

### **Global styles remain untouched unless explicitly instructed.**

**DO NOT modify the main header, footer, or page layout structure.**

---

## 2️⃣ IMAGE HANDLING (MANDATORY RULES)

### **A. Use the user's folder structure**

All images are in:
```
/public/images/
```

Inside are organized folders like:
- `/web-design/`
- `/web-development/`
- `/hosting/`
- `/seo/`
- `/mobile-apps/`
- `/case-studies/`
- `/about/`

**Cursor must automatically detect the folder based on the service page topic.**

### **B. Naming Pattern (BLUEPRINT ENFORCED)**

Every image MUST follow this naming convention from `IMAGE_BLUEPRINT.md`:
```
{page-or-service}-{short-description}-{number}.webp
```

**Rules:**
- ✅ **Lowercase only**
- ✅ **Hyphens only** (no underscores, no spaces)
- ✅ **Always `.webp` format**
- ✅ **Always ends with `-{number}.webp`** (no leading zeros, no v-prefix)

**Examples:**
- `web-design-hero-1.webp` ✅
- `ecommerce-store-2.webp` ✅
- `portfolio-project-cslo-1.webp` ✅
- `home-service-cybersecurity-1.webp` ✅

**Invalid Examples:**
- `web-design_hero-background_01.webp` ❌ (underscore, leading zero)
- `Web-Design-Hero-1.webp` ❌ (uppercase)
- `ecommerce-store-v01.webp` ❌ (v-prefix)

### **C. Automatic Folder Creation & Image Normalization**

1. ✅ **Check if service folder exists** in `/public/images/services/[service-slug]/`
2. ✅ **Create folder automatically** if it doesn't exist
3. ✅ **Use IMAGE_BLUEPRINT.md** as the single source of truth for image names
4. ✅ **Use helper module**: Import from `/lib/imageNaming.js` to validate and generate correct names
5. ✅ **Run enforcement script**: `node scripts/enforce-image-blueprint.js` to standardize existing images
6. ✅ **Hero images** should be named: `[service-slug]-hero-1.webp` (e.g., `web-design-hero-1.webp`)

### **D. If an image is not following the naming pattern**

1. **Check IMAGE_BLUEPRINT.md** for the correct name
2. **Use helper module** (`/lib/imageNaming.js`) to normalize the name
3. **Rename it immediately** using the proper format
4. **Update all code references** to the new name

If conflict → increment the number (e.g., `-1.webp` → `-2.webp`)

### **E. Use ALL images inside the related folder**

For each service page, Cursor must:

1. ✅ **scan the relevant folder**
2. ✅ **use all images that are useful**
3. ✅ **assign them to hero, features, case studies, or gallery sections**
4. ✅ **compress if needed but preserve quality**
5. ✅ **ensure dimensions are consistent**
6. ✅ **Hero image section** must be included on every service page using the first hero image found

---

## 3️⃣ PAGE STRUCTURE (ALWAYS FOLLOW THIS)

Every service page must include these **6 sections**:

### **Section 1 — Hero Section**

**Structure:**
- InteriorHeader component with title and breadcrumb
- **Hero Image Section** (MANDATORY):
  ```tsx
  {/* Hero Image */}
  <section className="mb-12">
    <div className="relative h-96 bg-gray-200 rounded-lg overflow-hidden shadow-lg">
      <Image
        src="/images/services/[service-slug]/[service-slug]-hero-1.webp"
        alt="[Service Name]"
        fill
        className="object-cover"
        sizes="100vw"
        priority
      />
    </div>
  </section>
  ```
  
  **Example:**
  ```tsx
  <Image
    src="/images/services/webdesign/services-webdesign-web-design-hero-01.webp"
    alt="Web Design Services"
    fill
    className="object-cover"
    sizes="100vw"
    priority
  />
  ```
- Short SEO-rich intro (first SectionWrapper)
- Fade-in animation (mild, not heavy)
- Must stay readable on mobile
- Add dark overlay automatically if text visibility drops below WCAG AA

### **Section 2 — Key Features / What We Offer**

Bullet-based section. Best for SEO using:
- ✅ action verbs
- ✅ industry keywords
- ✅ region-specific modifiers (East Africa, Uganda, Sudan, Kenya, Rwanda)

### **Section 3 — Why Choose Us**

Highlight Blue Team strengths:
- ✅ SEO
- ✅ Integrations
- ✅ Mobile-first
- ✅ Security
- ✅ Vercel + Cloudflare
- ✅ Local support

### **Section 4 — Case Study (Dynamic)**

Cursor must:
1. ✅ **detect any available case studies in `/public/images/case-studies/`**
2. ✅ **pick a relevant one**
3. ✅ **include it with a title + 4 bullet highlights**
4. ✅ **show before/after if images exist**

### **Section 5 — FAQ (SEO)**

Cursor must generate **5–8 Q&A blocks** optimized for Google Rich Snippets.

### **Section 6 — Final CTA**

**Structure:**
- Strong call to action
- "Start Your Project" button
- "Chat on WhatsApp" button

---

## 4️⃣ SEO RULES (MANDATORY)

Cursor must apply on every page:

### **Metadata**

- ✅ `title`: `<Service Name> | Blue Team Africa`
- ✅ `description`: summary with keywords (NGOs + business + region)
- ✅ `keywords`: generate automatically
- ✅ Open Graph metadata included

### **On-Page SEO**

Cursor must ensure:
- ✅ **H1 only once**
- ✅ **H2 for sections**
- ✅ **H3 for highlights**
- ✅ **No long paragraphs**
- ✅ **Keyword density between 1.2–1.8%**
- ✅ **Include East Africa + Uganda + Sudan variations**

### **Structured Data**

Add JSON-LD for:
- ✅ Service page
- ✅ FAQ
- ✅ Organization (only if missing)

---

## 5️⃣ DESIGN RULES

Cursor must:
- ✅ **NEVER change the global color palette unless told**
- ✅ **NEVER modify the header or footer**
- ✅ **Use subtle animations (Oracom-style but lighter)**
- ✅ **Maintain whitespace, readability, and spacing**
- ✅ **Follow the existing UI components (Cards / Sections / Grids)**

---

## 6️⃣ FINAL CODE QUALITY RULES

All code must be:
- ✅ **clean and formatted**
- ✅ **Avoid duplication**
- ✅ **Use Tailwind utility classes responsibly**
- ✅ **Use Next/Image for all images**
- ✅ **Ensure mobile responsiveness is correct**
- ✅ **Avoid inline styles**

---

## ✅ QUICK REFERENCE: HOW TO USE THIS TEMPLATE

When you want to create a new service page or update an existing one, just tell Cursor:

> **"Use the MASTER INSTRUCTIONS to generate Service Page: [SERVICE NAME]"**

Example:
- "Use the MASTER INSTRUCTIONS to generate Service Page: Website Maintenance"
- "Use the MASTER INSTRUCTIONS to generate Service Page: E-commerce Development"
- "Use the MASTER INSTRUCTIONS to generate Service Page: SEO Services"

---

## 📋 CHECKLIST FOR EVERY SERVICE PAGE

- [ ] Images follow naming convention: `service-slug_section-description_unique-number.ext`
- [ ] All images in relevant folder are used
- [ ] 6 sections included (Hero, Features, Why Choose Us, Case Study, FAQ, CTA)
- [ ] SEO metadata added (title, description, keywords, Open Graph)
- [ ] H1 used once, H2 for sections, H3 for highlights
- [ ] Keyword density 1.2–1.8%
- [ ] Region-specific keywords included (East Africa, Uganda, Sudan, etc.)
- [ ] JSON-LD structured data added
- [ ] Mobile responsive design verified
- [ ] No global styles modified
- [ ] Header/footer untouched
- [ ] All images use Next/Image component
- [ ] Code is clean and formatted
- [ ] No inline styles
- [ ] Subtle animations applied

---

**END OF MASTER INSTRUCTIONS — DO NOT EDIT ABOVE THIS LINE**

---

## 📚 Additional Notes

### **Image Optimization:**
- Use WebP format when possible
- Optimize images for web (compress, resize)
- Maintain aspect ratios
- Use proper alt text for accessibility

### **Component Reusability:**
- Use existing components from `/components`
- Don't duplicate component logic
- Follow existing patterns

### **Testing:**
- Verify on mobile devices
- Check browser compatibility
- Test all links and buttons
- Validate HTML structure

---

**Last Updated:** January 2025
**Version:** 1.0.0
**Status:** ✅ Active Standard

