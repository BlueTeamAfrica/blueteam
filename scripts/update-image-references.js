#!/usr/bin/env node

/**
 * UPDATE IMAGE REFERENCES SCRIPT
 * 
 * Updates all image references in code to match the new blueprint naming
 */

const fs = require('fs');
const path = require('path');

// Mapping of old paths to new blueprint paths
const REFERENCE_UPDATES = [
  // Hero images
  { from: '/images/hero/hero-banner-gradient-abstract-v01.webp', to: '/images/hero/hero-banner-gradient-abstract-1.webp' },
  { from: '/images/hero/hero-banner-og-image-v01.webp', to: '/images/hero/hero-og-01.webp' },
  
  // Home images
  { from: '/images/home/services/web-design-icon-layout-v01.webp', to: '/images/home/services/home-service-web-design-01.webp' },
  { from: '/images/home/services/cybersecurity-icon-shield-v01.webp', to: '/images/home/services/home-service-cybersecurity-01.webp' },
  { from: '/images/home/services/mobile-apps-icon-phone-v01.webp', to: '/images/home/services/home-service-mobile-apps-01.webp' },
  { from: '/images/home/services/erp-systems-icon-dashboard-v01.webp', to: '/images/home/services/home-service-erp-01.webp' },
  { from: '/images/home/services/cloud-hosting-icon-server-v01.webp', to: '/images/home/services/home-service-hosting-01.webp' },
  { from: '/images/home/portfolio/portfolio-mockup-ngo-portal-v01.jpg', to: '/images/home/portfolio/home-portfolio-ngo-portal-01.webp' },
  { from: '/images/home/portfolio/portfolio-mockup-retail-ecommerce-v01.webp', to: '/images/home/portfolio/home-portfolio-ecommerce-01.webp' },
  
  // Portfolio images
  { from: '/images/portfolio/cslo-sudan/portfolio-project-cslo-erp-system-v01.webp', to: '/images/portfolio/cslo-sudan/case-cslo-cslo-01.webp' },
  { from: '/images/portfolio/portfolio-project-preview-i-v01.webp', to: '/images/portfolio/portfolio-preview-01.webp' },
  { from: '/images/portfolio/portfolio-project-preview-q-v01.webp', to: '/images/portfolio/portfolio-preview-02.webp' },
  { from: '/images/portfolio/portfolio-project-preview-t-v01.webp', to: '/images/portfolio/portfolio-preview-03.webp' },
  { from: '/images/portfolio/portfolio-project-preview-u-v01.webp', to: '/images/portfolio/portfolio-preview-04.webp' },
  
  // Blog images
  { from: '/images/blog/blog-post-thumbnail-2-v01.jpg', to: '/images/blog/blog-thumbnail-01.webp' },
  { from: '/images/blog/blog-post-thumbnail-3-v01.webp', to: '/images/blog/blog-thumbnail-02.webp' },
  { from: '/images/blog/blog-post-thumbnail-6-v01.webp', to: '/images/blog/blog-thumbnail-03.webp' },
  { from: '/images/blog/blog-post-thumbnail-7-v01.webp', to: '/images/blog/blog-thumbnail-4.webp' },
  { from: '/images/blog/blog-post-thumbnail-d-v01.webp', to: '/images/blog/blog-thumbnail-5.webp' },
  
  // Service images - web design
  { from: '/images/services/web-design/web-design_hero-background_01.webp', to: '/images/services/webdesign/services-webdesign-web-design-hero-01.webp' },
  { from: '/images/services/web-design/web-design_hero-background_0.webp', to: '/images/services/webdesign/services-webdesign-web-design-hero-01.webp' },
  
  // Service images - website development
  { from: '/images/services/web-development/web-development_hero-background_01.webp', to: '/images/services/websitedevelopment/services-websitedevelopment-website-development-hero-01.webp' },
  
  // Service images - cybersecurity
  { from: '/images/services/cybersecurity/cybersecurity_hero-background_01.webp', to: '/images/services/cybersecurity/services-cybersecurity-hero-01.webp' },
  
  // Service images - ecommerce
  { from: '/images/services/ecommerce/ecommerce_feature-shop_01.webp', to: '/images/services/ecommerce/services-ecommerce-hero-01.webp' },
  { from: '/images/services/ecommerce/ecommerce_dashboard-sample_01.webp', to: '/images/services/ecommerce/services-ecommerce-dashboard-01.webp' },
  { from: '/images/services/ecommerce/ecommerce_integrations-overview_01.webp', to: '/images/services/ecommerce/services-ecommerce-integrations-01.webp' },
  
  // Service images - mobile apps
  { from: '/images/services/mobile-apps/mobile-apps_hero-background_01.webp', to: '/images/services/mobileapps/services-mobileapps-mobile-apps-hero-01.webp' },
  { from: '/images/services/mobile-apps/mobile-apps_hero-background_02.webp', to: '/images/services/mobileapps/services-mobileapps-mobile-apps-hero-02.webp' },
  { from: '/images/services/mobile-apps/mobile-apps_hero-background_03.webp', to: '/images/services/mobileapps/services-mobileapps-mobile-apps-hero-03.webp' },
  
  // Service images - hosting
  { from: '/images/services/hosting/hosting_feature-infrastructure_01.webp', to: '/images/services/hosting/services-hosting-hero-01.webp' },
  { from: '/images/services/hosting/hosting_feature-server_01.webp', to: '/images/services/hosting/hosting-server-1.webp' },
  
  // Service images - erp
  { from: '/images/services/erp/erp_systems-dashboard_01.webp', to: '/images/services/erpcrm/services-erpcrm-erp-crm-dashboard-01.webp' },
  
  // Service images - crm
  { from: '/images/services/crm/crm_feature-legacy-5_01.webp', to: '/images/services/erpcrm/services-erpcrm-erp-crm-hero-01.webp' },
];

// Get all files recursively
function getAllFiles(dirPath, arrayOfFiles = []) {
  const files = fs.readdirSync(dirPath);
  
  files.forEach((file) => {
    const filePath = path.join(dirPath, file);
    if (fs.statSync(filePath).isDirectory()) {
      // Skip node_modules and .next
      if (file !== 'node_modules' && file !== '.next' && !file.startsWith('.')) {
        arrayOfFiles = getAllFiles(filePath, arrayOfFiles);
      }
    } else if (/\.(tsx|jsx|ts|js)$/.test(file)) {
      arrayOfFiles.push(filePath);
    }
  });
  
  return arrayOfFiles;
}

// Update references in a file
function updateFileReferences(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  let updated = false;
  
  REFERENCE_UPDATES.forEach(({ from, to }) => {
    // Update all occurrences
    const regex = new RegExp(from.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
    if (content.includes(from)) {
      content = content.replace(regex, to);
      updated = true;
      console.log(`  ✅ Updated: ${from} → ${to}`);
    }
  });
  
  if (updated) {
    fs.writeFileSync(filePath, content, 'utf-8');
    return true;
  }
  
  return false;
}

// Main execution
function main() {
  console.log('🔄 Updating image references in code...\n');
  
  const srcDir = path.join(process.cwd(), 'app');
  const componentsDir = path.join(process.cwd(), 'components');
  const libDir = path.join(process.cwd(), 'lib');
  
  const allFiles = [
    ...getAllFiles(srcDir),
    ...getAllFiles(componentsDir),
    ...(fs.existsSync(libDir) ? getAllFiles(libDir) : [])
  ];
  
  console.log(`📂 Found ${allFiles.length} files to check\n`);
  
  let updatedCount = 0;
  allFiles.forEach(filePath => {
    const relativePath = path.relative(process.cwd(), filePath);
    if (updateFileReferences(filePath)) {
      updatedCount++;
      console.log(`📝 Updated: ${relativePath}\n`);
    }
  });
  
  console.log(`\n✨ Complete! Updated ${updatedCount} files.\n`);
}

// Run
try {
  main();
} catch (error) {
  console.error('❌ Fatal error:', error);
  process.exit(1);
}

