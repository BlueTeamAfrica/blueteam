# Image Naming Rules for Blue Team Africa

## 📋 Naming Convention

All images must follow this SEO-friendly pattern:

```
{category}-{subcategory}-{descriptor}-v0X.{ext}
```

### Components Explained

1. **Category**: The primary content area or service
   - Examples: `web-design`, `erp-systems`, `mobile-apps`, `portfolio`, `blog`, `about`, etc.

2. **Subcategory**: The type of image or its purpose
   - Examples: `feature`, `icon`, `banner`, `mockup`, `screenshot`, `thumbnail`, `process`, `team`, `client`, `project`

3. **Descriptor**: A meaningful, SEO-friendly description
   - Use lowercase letters only
   - Separate words with hyphens
   - Be specific and descriptive
   - Avoid generic names like "image1" or "photo"

4. **Version**: Sequential version number
   - Start at `v01`
   - Increment for updates: `v02`, `v03`, etc.
   - Use two digits: `v01` not `v1`

5. **Extension**: Original file format
   - `.webp` (preferred for web)
   - `.jpg` or `.jpeg`
   - `.png`
   - `.svg`

---

## ✅ Good Examples

```
✅ web-design-feature-layout-v01.webp
✅ portfolio-project-cslo-erp-system-v01.webp
✅ mobile-apps-icon-phone-v01.webp
✅ blog-post-thumbnail-erp-guide-v01.jpg
✅ about-team-member-john-smith-v01.jpg
✅ services-feature-process-planning-v01.jpg
✅ hero-banner-gradient-abstract-v01.webp
```

---

## ❌ Bad Examples

```
❌ IMG_2021.jpg                    → Too generic, no context
❌ photo1.webp                     → No descriptive value
❌ a.webp                          → Meaningless single letter
❌ websitedesign.jpg               → Missing hyphens
❌ web_design_feature.jpg          → Use hyphens, not underscores
❌ Web-Design-Feature-v01.webp     → Use lowercase only
❌ design-v1.webp                  → Version needs two digits (v01)
❌ feature.jpg                     → Missing category and descriptor
```

---

## 📁 Folder Structure

Organize images into logical folders:

```
public/images/
├── about/                         → Team members, office photos
├── blog/                          → Blog post thumbnails
├── clients/                       → Client logos
├── hero/                          → Hero section images
├── home/                          → Homepage specific images
│   ├── portfolio/                 → Homepage portfolio previews
│   ├── services/                  → Service icons/images
│   └── team/                      → Team photos
├── icons/                         → General UI icons
├── portfolio/                     → Portfolio project images
│   └── [project-name]/            → Project-specific folder
└── services/                      → Service-related images
    ├── web-design/
    ├── mobile-apps/
    ├── erp/
    ├── cybersecurity/
    ├── hosting/
    └── ecommerce/
```

---

## 🎯 Category Reference

Use these categories based on content type:

| Category | Use For |
|----------|---------|
| `web-design` | Web design services, layouts, mockups |
| `website-development` | Development process, code, technical |
| `mobile-apps` | Mobile app screenshots, features |
| `erp-systems` | ERP dashboards, processes |
| `crm-solutions` | CRM interfaces, workflows |
| `cybersecurity` | Security features, protection |
| `cloud-hosting` | Server, infrastructure images |
| `portfolio` | Project showcases, case studies |
| `blog` | Blog post thumbnails |
| `about` | Team photos, office images |
| `home` | Homepage specific content |
| `hero` | Hero/banner images |
| `clients` | Client logos |
| `icons` | UI icons, symbols |
| `brand` | Branding, logos, identity |

---

## 🔄 Subcategory Reference

Common subcategories to use:

| Subcategory | Use For |
|-------------|---------|
| `feature` | Main feature images |
| `icon` | Icons and symbols |
| `banner` | Banner and hero images |
| `mockup` | Design mockups |
| `screenshot` | Screen captures |
| `thumbnail` | Preview images |
| `process` | Process diagrams |
| `team` | Team member photos |
| `client` | Client photos/logos |
| `project` | Project images |
| `gallery` | Gallery items |
| `hero` | Hero section images |

---

## 📝 Renaming Process

When adding new images:

1. **Identify the category**: What service/section is this for?
2. **Choose subcategory**: What type of image is it?
3. **Create descriptor**: What does this image show?
4. **Check for duplicates**: If name exists, increment version
5. **Convert to lowercase**: All letters must be lowercase
6. **Replace spaces**: Use hyphens instead of spaces
7. **Remove special characters**: Only use letters, numbers, and hyphens
8. **Add version**: Start with v01

### Example Workflow

```
Original: IMG_2047.JPG
Purpose: ERP dashboard screenshot for services page

Step 1: Category = erp-systems
Step 2: Subcategory = feature
Step 3: Descriptor = dashboard
Step 4: No duplicates found
Step 5-7: Already lowercase with hyphens
Step 8: Add version = v01

Final: erp-systems-feature-dashboard-v01.jpg
```

---

## 🚀 SEO Benefits

Following this naming convention provides:

✅ **Better Image SEO**: Search engines can understand image content
✅ **Improved Accessibility**: Screen readers can describe images
✅ **Easier Management**: Clear file organization
✅ **Version Control**: Track image updates easily
✅ **Professional Structure**: Consistent branding

---

## 🛠️ Tools

Use these scripts to rename images:

```bash
# Verify all images follow the pattern
find public/images -type f \( -iname "*.jpg" -o -iname "*.webp" -o -iname "*.png" \) ! -name "*-*-*" 

# Should return empty if all images are properly named
```

---

## 📚 Related Documentation

- `IMAGE_RENAMING_COMPLETE.md` - Completed renaming summary
- `IMAGE_RENAME_MAPPING.txt` - Old → New path mappings
- `REORGANIZATION_SUMMARY.md` - Folder reorganization details

---

**Last Updated**: November 2025  
**Status**: ✅ All images compliant  
**Maintained by**: Blue Team Africa Development Team

