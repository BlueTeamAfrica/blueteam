# Unused Code Report

This report identifies unused code, components, and files in the codebase.

**Status**: ✅ All unused files have been deleted.

## Unused Components

### 1. `components/ServicesSection.tsx`
- **Status**: ❌ **UNUSED**
- **Reason**: Component is defined but never imported or used anywhere in the codebase
- **Action**: Can be safely deleted or kept for future use

### 2. `components/AnimatedCTASection.tsx`
- **Status**: ❌ **UNUSED**
- **Reason**: Component is defined but never imported or used anywhere
- **Action**: Can be safely deleted or kept for future use

### 3. `components/CTASection.tsx`
- **Status**: ❌ **UNUSED**
- **Reason**: Component is defined but never imported or used anywhere
- **Action**: Can be safely deleted or kept for future use

### 4. `components/FeaturesSection.tsx`
- **Status**: ❌ **UNUSED**
- **Reason**: Component is defined but never imported or used anywhere
- **Action**: Can be safely deleted or kept for future use

### 5. `components/ServicesOverview.tsx`
- **Status**: ❌ **UNUSED**
- **Reason**: Component is defined but never imported or used anywhere
- **Action**: Can be safely deleted or kept for future use

## Unused Utility Files

### 6. `lib/image-utils.ts`
- **Status**: ❌ **UNUSED** (in application code)
- **Reason**: File exists but is never imported in any TypeScript/JavaScript application code
- **Note**: Only referenced in markdown documentation files, not in actual code
- **Action**: Can be deleted if not needed, or kept if planned for future use

## Used Files (Keep These)

### ✅ `lib/imageNaming.js`
- **Status**: ✅ **USED**
- **Used by**: `scripts/enforce-image-blueprint.js`
- **Action**: Keep this file

### ✅ `lib/schema.ts`
- **Status**: ✅ **USED**
- **Used by**: `components/BreadcrumbSchema.tsx`
- **Action**: Keep this file

### ✅ `lib/faqs.ts`
- **Status**: ✅ **USED**
- **Used by**: 
  - `components/FAQSchema.tsx`
  - `components/FAQSection.tsx`
  - `app/services/cybersecurity/page.tsx`
- **Action**: Keep this file

## Summary

**Total Unused Components**: 5
**Total Unused Utility Files**: 1

### Recommended Actions

1. **Delete unused components** if they're not planned for future use:
   - `components/ServicesSection.tsx`
   - `components/AnimatedCTASection.tsx`
   - `components/CTASection.tsx`
   - `components/FeaturesSection.tsx`
   - `components/ServicesOverview.tsx`

2. **Review and potentially delete**:
   - `lib/image-utils.ts` (if not needed for future development)

3. **Keep for reference** (if you might use them later):
   - Consider moving unused components to a `components/_unused/` or `components/_archive/` folder instead of deleting

## Notes

- All imports in `app/blog/[slug]/page.tsx` are used (MessageCircle and ArrowRight are both used)
- `components/RelatedServicesMobile.tsx` is used across all service pages
- `components/ServiceSidebar.tsx` is used across all service pages
- `components/MobileMoveOurServices.jsx` is used in `app/page.tsx`
