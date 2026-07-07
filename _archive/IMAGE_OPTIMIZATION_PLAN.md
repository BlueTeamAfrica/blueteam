# Image Optimization Plan

## Current Status

### ✅ Already Following Pattern
Most images in `/public/images` already follow the naming pattern:
- `{service-slug}-{type}-{description}-v01.webp`

### 🔧 Issues Found

#### 1. Missing Image
- `/images/blog/4.webp` - Referenced in `app/blog/page.tsx` but doesn't exist
  - **Action**: Update code to use existing blog thumbnail

#### 2. JPG Files to Convert (20 files)

**Blog Images (1 file)**
- `blog/blog-post-thumbnail-2-v01.jpg` → Already properly named, just needs WebP conversion

**About/Team Images (5 files)**
- `about/about-team-member-1-v01.jpg` → Convert to WebP
- `about/about-team-member-3-v01.jpg` → Convert to WebP
- `about/about-team-member-11-v01.jpg` → Convert to WebP
- `about/about-team-member-12-v01.jpg` → Convert to WebP
- `about/about-team-member-13-v01.jpg` → Convert to WebP

**Home Portfolio Images (1 file)**
- `home/portfolio/portfolio-mockup-ngo-portal-v01.jpg` → Convert to WebP

**Services Process Images (13 files)**
- `services/services-feature-process-14-v01.jpg` through `services-feature-process-26-v01.jpg`
- **Note**: These are NOT referenced in any code files
- **Action**: Move to `_legacy` folder for archival

## Recommended Actions

### Phase 1: Fix Broken Reference
1. Update `app/blog/page.tsx` to use existing blog thumbnail instead of missing `4.webp`

### Phase 2: Convert JPG to WebP
Use image optimization tool to convert:
- Blog thumbnails
- Team member photos
- Portfolio mockups

Target specs:
- Format: WebP
- Width: 1200px for section images, 800px for thumbnails
- Quality: 80-85%
- Target size: <300KB

### Phase 3: Archive Unused Images
Move unused service process images to `_legacy` folder

## Manual Steps Required

Since we cannot directly convert images in this environment, you'll need to:

1. **Install image optimization tool** (if not already installed):
   ```bash
   npm install -g sharp-cli
   # or
   brew install webp
   ```

2. **Run conversion script** (I'll create this for you)

3. **Update code references** (I'll handle this)

## Next Steps

Would you like me to:
1. Create an automated conversion script?
2. Fix the broken blog image reference immediately?
3. Move unused images to _legacy folder?

