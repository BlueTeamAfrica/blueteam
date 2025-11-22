#!/usr/bin/env node

/**
 * FIX IMAGE MISMATCHES
 * 
 * Renames/moves existing images to match code references OR
 * Updates code to use existing images (whichever makes more sense)
 */

const fs = require('fs');
const path = require('path');

const IMAGES_DIR = path.join(process.cwd(), 'public/images');

// Mapping: code reference -> actual existing file
const FIXES = [
  // Hero images
  {
    codeRef: '/images/hero/hero-og-1.webp',
    actualFile: '/images/hero/hero-banner-gradient-abstract-1.webp',
    action: 'copy', // Copy since we might need both
    priority: 'high'
  },
  {
    codeRef: '/images/hero/hero-gradient-1.webp',
    actualFile: '/images/hero/hero-banner-gradient-abstract-1.webp',
    action: 'rename', // Rename to match blueprint
    priority: 'high'
  },
  
  // Home service icons - these exist but with old names
  {
    codeRef: '/images/home/services/home-service-web-design-1.webp',
    actualFile: '/images/home/services/web-design-icon-layout-1.webp',
    action: 'rename',
    priority: 'high'
  },
  {
    codeRef: '/images/home/services/home-service-cybersecurity-1.webp',
    actualFile: '/images/home/services/cybersecurity-icon-shield-1.webp',
    action: 'rename',
    priority: 'high'
  },
  {
    codeRef: '/images/home/services/home-service-mobile-apps-1.webp',
    actualFile: '/images/home/services/mobile-apps-icon-phone-1.webp',
    action: 'rename',
    priority: 'high'
  },
  {
    codeRef: '/images/home/services/home-service-erp-1.webp',
    actualFile: '/images/home/services/erp-systems-icon-dashboard-1.webp',
    action: 'rename',
    priority: 'high'
  },
  {
    codeRef: '/images/home/services/home-service-hosting-1.webp',
    actualFile: '/images/home/services/cloud-hosting-icon-server-1.webp',
    action: 'rename',
    priority: 'high'
  },
  
  // Home portfolio
  {
    codeRef: '/images/home/portfolio/home-portfolio-ngo-portal-1.webp',
    actualFile: '/images/home/portfolio/portfolio-mockup-ng-portal-uganda-1.webp',
    action: 'rename',
    priority: 'high'
  },
  {
    codeRef: '/images/home/portfolio/home-portfolio-ecommerce-1.webp',
    actualFile: '/images/home/portfolio/portfolio-mockup-retail-ecommerce-1.webp',
    action: 'rename',
    priority: 'high'
  },
  
  // Portfolio
  {
    codeRef: '/images/portfolio/cslo-sudan/portfolio-project-cslo-1.webp',
    actualFile: '/images/portfolio/cslo-sudan/portfolio-project-cslo-erp-system-1.webp',
    action: 'rename',
    priority: 'high'
  },
  {
    codeRef: '/images/portfolio/portfolio-project-preview-1.webp',
    actualFile: '/images/portfolio/portfolio-project-preview-i-1.webp',
    action: 'rename',
    priority: 'high'
  },
  {
    codeRef: '/images/portfolio/portfolio-project-preview-2.webp',
    actualFile: '/images/portfolio/portfolio-project-preview-q-1.webp',
    action: 'rename',
    priority: 'high'
  },
  {
    codeRef: '/images/portfolio/portfolio-project-preview-3.webp',
    actualFile: '/images/portfolio/portfolio-project-preview-t-1.webp',
    action: 'rename',
    priority: 'high'
  },
  {
    codeRef: '/images/portfolio/portfolio-project-preview-4.webp',
    actualFile: '/images/portfolio/portfolio-project-preview-u-1.webp',
    action: 'rename',
    priority: 'high'
  },
  
  // Blog - rename existing files
  {
    codeRef: '/images/blog/blog-thumbnail-1.webp',
    actualFile: '/images/blog/blog-post-thumbnail-3.webp', // Use existing as placeholder
    action: 'copy',
    priority: 'medium'
  },
  {
    codeRef: '/images/blog/blog-thumbnail-2.webp',
    actualFile: '/images/blog/blog-post-thumbnail-3.webp',
    action: 'copy',
    priority: 'medium'
  },
  {
    codeRef: '/images/blog/blog-thumbnail-3.webp',
    actualFile: '/images/blog/blog-post-thumbnail-3.webp',
    action: 'rename',
    priority: 'medium'
  },
  
  // ERP-CRM folder - need to create and move files
  {
    codeRef: '/images/services/erp-crm/erp-crm-hero-1.webp',
    actualFile: '/images/services/crm/crm-feature-legacy-5-1.webp',
    action: 'move',
    priority: 'high'
  },
  {
    codeRef: '/images/services/erp-crm/erp-crm-dashboard-1.webp',
    actualFile: '/images/services/erp/erp-systems-dashboard-1.webp',
    action: 'move',
    priority: 'high'
  },
  
  // Ecommerce - use hero as placeholder for missing images
  {
    codeRef: '/images/services/ecommerce/ecommerce-dashboard-1.webp',
    actualFile: '/images/services/ecommerce/ecommerce-hero-1.webp',
    action: 'copy',
    priority: 'medium'
  },
  {
    codeRef: '/images/services/ecommerce/ecommerce-integrations-1.webp',
    actualFile: '/images/services/ecommerce/ecommerce-hero-1.webp',
    action: 'copy',
    priority: 'medium'
  },
];

function main() {
  console.log('🔧 Fixing image mismatches...\n');
  
  let fixed = 0;
  let errors = [];
  
  FIXES.forEach(({ codeRef, actualFile, action, priority }) => {
    const targetPath = path.join(process.cwd(), 'public', codeRef);
    const sourcePath = path.join(process.cwd(), 'public', actualFile);
    
    // Skip if target already exists
    if (fs.existsSync(targetPath)) {
      console.log(`⏭️  Skipping ${codeRef} (already exists)`);
      return;
    }
    
    // Check if source exists
    if (!fs.existsSync(sourcePath)) {
      errors.push({ codeRef, actualFile, error: 'Source file does not exist' });
      console.log(`❌ Source not found: ${actualFile}`);
      return;
    }
    
    // Create target directory if needed
    const targetDir = path.dirname(targetPath);
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
      console.log(`📁 Created directory: ${path.relative(process.cwd() + '/public', targetDir)}`);
    }
    
    try {
      if (action === 'rename') {
        // Rename/move file
        fs.renameSync(sourcePath, targetPath);
        console.log(`✅ Renamed: ${actualFile} → ${codeRef}`);
        fixed++;
      } else if (action === 'copy') {
        // Copy file
        fs.copyFileSync(sourcePath, targetPath);
        console.log(`✅ Copied: ${actualFile} → ${codeRef}`);
        fixed++;
      } else if (action === 'move') {
        // Move file (same as rename but across folders)
        fs.renameSync(sourcePath, targetPath);
        console.log(`✅ Moved: ${actualFile} → ${codeRef}`);
        fixed++;
      }
    } catch (error) {
      errors.push({ codeRef, actualFile, error: error.message });
      console.error(`❌ Error fixing ${codeRef}:`, error.message);
    }
  });
  
  console.log(`\n✨ Fixed ${fixed} images`);
  if (errors.length > 0) {
    console.log(`\n⚠️  ${errors.length} errors occurred`);
    errors.forEach(err => {
      console.log(`   - ${err.codeRef}: ${err.error}`);
    });
  }
}

// Run
try {
  main();
} catch (error) {
  console.error('❌ Fatal error:', error);
  process.exit(1);
}

