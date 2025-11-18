# Image Mapping Guide

This document maps your uploaded images to the image paths expected by the code.

## ✅ Current Image Locations vs. Expected Paths

### Hero Images
- **Expected:** `/images/hero-gradient-abstract.webp`
- **You have:** `/images/hero/1.jpg`
- **Action:** Copy or rename `hero/1.jpg` to root as `hero-gradient-abstract.webp` (or convert JPG to WebP)

### Service Images

#### Web Design
- **Expected:** `/images/webdesign-laptop.webp`
- **You have:** Check `services/web-design/` directory
- **Action:** Place appropriate image here or update code path

#### Hosting
- **Expected:** `/images/hosting-datacenter.webp`
- **You have:** `/images/services/hosting/1.webp` ✅
- **Action:** Copy to root or update code to use `services/hosting/1.webp`

#### CRM
- **Expected:** `/images/crm-dashboard.webp`
- **You have:** `/images/services/crm/5.webp` ✅
- **Action:** Copy to root or update code to use `services/crm/5.webp`

#### ERP
- **Expected:** `/images/erp-architecture.webp`
- **You have:** Check `services/erp/` directory
- **Action:** Place appropriate image or update code path

#### Mobile Apps
- **Expected:** `/images/mobile-field.webp`
- **You have:** Check `services/mobile-apps/` directory
- **Action:** Place appropriate image or update code path

#### Cybersecurity
- **Expected:** `/images/cybersecurity-lock.webp`
- **You have:** Check `services/cybersecurity/` directory
- **Action:** Place appropriate image or update code path

### About/Company
- **Expected:** `/images/about-team.webp`
- **You have:** `/images/about/3.jpg`, `/images/about/4.jpg` ✅
- **Action:** Copy one to root as `about-team.webp` (or convert JPG to WebP)

### Portfolio
- **Expected:** `/images/portfolio/regional-logistics-thumb.webp`
- **You have:** `/images/portfolio/3.webp`, `/images/portfolio/4.webp` ✅
- **Action:** Use one of these or copy/rename to `regional-logistics-thumb.webp`

### Logos
- **Expected:** `/images/logos/logo-placeholder-1.png` through `logo-placeholder-6.png`
- **You have:** Check `images/logos/` directory
- **Action:** Add 6 logo placeholder files

## 🔧 Quick Fix Options

### Option 1: Update Code to Use Existing Paths
I can update the code to use your existing image locations (e.g., `services/hosting/1.webp` instead of `hosting-datacenter.webp`).

### Option 2: Create Symlinks/Shortcuts
Create symlinks or copy images to match expected paths.

### Option 3: Manual Organization
Manually organize images to match expected paths.

---

**Which would you prefer?** Let me know and I'll help organize the images accordingly!

