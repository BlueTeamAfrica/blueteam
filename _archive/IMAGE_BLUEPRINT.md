# 📐 IMAGE BLUEPRINT - Master Naming Convention

This document defines the EXACT naming pattern for ALL images in the project.

## 🎯 Naming Pattern

**Format:** `{page-or-service}-{short-description}-{number}.webp`

- Use **lowercase** letters only
- Use **hyphens** to separate words (no underscores, no spaces)
- Always end with **.webp**
- Always include a number (1, 2, 3, etc.)

## 📁 Folder Structure

```
/public/images/
├── hero/
├── home/
├── services/
│   ├── web-design/
│   ├── website-development/
│   ├── cybersecurity/
│   ├── ecommerce/
│   ├── mobile-apps/
│   ├── seo/
│   ├── branding/
│   ├── erp-crm/
│   ├── hosting/
│   ├── ui-ux/
│   ├── maintenance/
│   └── custom-systems/
├── about/
├── portfolio/
├── blog/
├── contact/
├── common/
└── icons/
```

## 📋 Image Blueprint by Category

### 🎯 Hero Images
**Folder:** `/public/images/hero/`
- `hero-bg-1.webp` - Main homepage hero background
- `hero-gradient-1.webp` - Gradient abstract background
- `hero-og-1.webp` - Open Graph image for homepage

### 🏠 Home Page Images
**Folder:** `/public/images/home/`
- `home-feature-1.webp` - Feature section A
- `home-feature-2.webp` - Feature section B
- `home-feature-3.webp` - Feature section E
- `home-feature-4.webp` - Feature section M
- `home-clients-1.webp` - Client logo strip
- `home-team-1.webp` - Team photo

**Subfolder:** `/public/images/home/services/`
- `home-service-web-design-1.webp` - Web design icon
- `home-service-cybersecurity-1.webp` - Cybersecurity icon
- `home-service-mobile-apps-1.webp` - Mobile apps icon
- `home-service-erp-1.webp` - ERP systems icon
- `home-service-hosting-1.webp` - Cloud hosting icon

**Subfolder:** `/public/images/home/portfolio/`
- `home-portfolio-ngo-portal-1.webp` - NGO Portal preview
- `home-portfolio-ecommerce-1.webp` - E-commerce preview
- `home-portfolio-preview-1.webp` - Portfolio preview I

### 🛠️ Service Images

#### Web Design (`/public/images/services/web-design/`)
- `web-design-hero-1.webp` - Hero background
- `web-design-feature-1.webp` - Feature image
- `web-design-ui-1.webp` - UI showcase

#### Website Development (`/public/images/services/website-development/`)
- `website-development-hero-1.webp` - Hero background
- `website-development-feature-1.webp` - Feature image

#### Cybersecurity (`/public/images/services/cybersecurity/`)
- `cybersecurity-hero-1.webp` - Hero background
- `cybersecurity-shield-1.webp` - Security feature

#### E-commerce (`/public/images/services/ecommerce/`)
- `ecommerce-hero-1.webp` - Hero background
- `ecommerce-store-1.webp` - Store feature
- `ecommerce-dashboard-1.webp` - Dashboard sample
- `ecommerce-integrations-1.webp` - Integrations overview

#### Mobile Apps (`/public/images/services/mobile-apps/`)
- `mobile-apps-hero-1.webp` - Hero background
- `mobile-apps-hero-2.webp` - Hero variant 2
- `mobile-apps-hero-3.webp` - Hero variant 3
- `mobile-apps-feature-1.webp` - Feature image

#### SEO (`/public/images/services/seo/`)
- `seo-hero-1.webp` - Hero background
- `seo-feature-1.webp` - Feature image

#### Branding (`/public/images/services/branding/`)
- `branding-hero-1.webp` - Hero background
- `branding-logo-1.webp` - Logo sample
- `branding-identity-1.webp` - Brand identity

#### ERP-CRM (`/public/images/services/erp-crm/`)
- `erp-crm-hero-1.webp` - Hero background
- `erp-crm-dashboard-1.webp` - Dashboard sample
- `erp-crm-feature-1.webp` - Feature image

#### Hosting (`/public/images/services/hosting/`)
- `hosting-hero-1.webp` - Hero background
- `hosting-infrastructure-1.webp` - Infrastructure
- `hosting-server-1.webp` - Server feature

#### UI/UX (`/public/images/services/ui-ux/`)
- `ui-ux-hero-1.webp` - Hero background
- `ui-ux-design-1.webp` - Design sample

#### Maintenance (`/public/images/services/maintenance/`)
- `maintenance-hero-1.webp` - Hero background
- `maintenance-support-1.webp` - Support feature

#### Custom Systems (`/public/images/services/custom-systems/`)
- `custom-systems-hero-1.webp` - Hero background
- `custom-systems-feature-1.webp` - Feature image

### 📖 About Page
**Folder:** `/public/images/about/`
- `about-team-1.webp` - Team photo
- `about-founder-1.webp` - Founder photo
- `about-office-1.webp` - Office photo

### 💼 Portfolio
**Folder:** `/public/images/portfolio/`
- `portfolio-project-cslo-1.webp` - CSLO Sudan ERP system
- `portfolio-project-preview-1.webp` - Project preview I
- `portfolio-project-preview-2.webp` - Project preview Q
- `portfolio-project-preview-3.webp` - Project preview T
- `portfolio-project-preview-4.webp` - Project preview U
- `portfolio-project-preview-5.webp` - Project preview V

**Subfolder:** `/public/images/portfolio/cslo-sudan/`
- `portfolio-project-cslo-1.webp` - CSLO ERP system main

### 📝 Blog
**Folder:** `/public/images/blog/`
- `blog-thumbnail-1.webp` - Blog post thumbnail 2
- `blog-thumbnail-2.webp` - Blog post thumbnail 3
- `blog-thumbnail-3.webp` - Blog post thumbnail 6
- `blog-thumbnail-4.webp` - Blog post thumbnail 7
- `blog-thumbnail-5.webp` - Blog post thumbnail D

### 🎨 Common/Icons
**Folder:** `/public/images/common/`
- `common-icon-1.webp` - Common icon
- `common-icon-2.webp` - Common icon variant

**Folder:** `/public/images/icons/`
- `icons-feature-1.webp` - Feature icon
- `icons-feature-2.webp` - Feature icon variant

## 🔄 Naming Rules

1. **Service pages**: `{service-slug}-{description}-{number}.webp`
   - Example: `web-design-hero-1.webp`
   - Example: `ecommerce-store-2.webp`

2. **Home page**: `home-{section}-{description}-{number}.webp`
   - Example: `home-feature-1.webp`
   - Example: `home-service-web-design-1.webp`

3. **Portfolio**: `portfolio-{project-type}-{description}-{number}.webp`
   - Example: `portfolio-project-cslo-1.webp`

4. **Blog**: `blog-{type}-{description}-{number}.webp`
   - Example: `blog-thumbnail-1.webp`

5. **About**: `about-{type}-{number}.webp`
   - Example: `about-team-1.webp`

## ✅ Validation Rules

- All images must be `.webp` format
- All names must be lowercase
- All names must use hyphens (no underscores or spaces)
- All names must end with a number
- Numbers start from 1 and increment

## 🚫 Invalid Examples

- `Hero_Banner.webp` ❌ (uppercase, underscore)
- `web design hero.webp` ❌ (spaces)
- `ecommerce-store.webp` ❌ (missing number)
- `cybersecurity-hero-background-01.webp` ❌ (leading zero)
- `portfolio-project-cslo-system-v01.webp` ❌ (v-prefix, not just number)

## ✅ Valid Examples

- `hero-bg-1.webp` ✅
- `web-design-hero-1.webp` ✅
- `ecommerce-store-2.webp` ✅
- `portfolio-project-cslo-1.webp` ✅

