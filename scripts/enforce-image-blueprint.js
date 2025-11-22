#!/usr/bin/env node

/**
 * IMAGE BLUEPRINT ENFORCEMENT SCRIPT
 * 
 * Uses ONLY the image names provided in IMAGE_BLUEPRINT.md
 * - Renames images that don't match blueprint
 * - Creates folders automatically
 * - Generates missing images report
 * - Lists unused images
 * - NEVER deletes files
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const imageNaming = require('../lib/imageNaming');

const IMAGES_DIR = path.join(process.cwd(), 'public/images');
const REPORT_FILE = path.join(process.cwd(), 'IMAGE_STANDARDIZATION_REPORT.md');

// Blueprint mapping (extracted from IMAGE_BLUEPRINT.md)
const BLUEPRINT = {
  'hero': [
    'hero-bg-1.webp',
    'hero-gradient-1.webp',
    'hero-og-1.webp'
  ],
  'home': [
    'home-feature-1.webp',
    'home-feature-2.webp',
    'home-feature-3.webp',
    'home-feature-4.webp',
    'home-clients-1.webp',
    'home-team-1.webp'
  ],
  'home/services': [
    'home-service-web-design-1.webp',
    'home-service-cybersecurity-1.webp',
    'home-service-mobile-apps-1.webp',
    'home-service-erp-1.webp',
    'home-service-hosting-1.webp'
  ],
  'home/portfolio': [
    'home-portfolio-ngo-portal-1.webp',
    'home-portfolio-ecommerce-1.webp',
    'home-portfolio-preview-1.webp'
  ],
  'services/web-design': [
    'web-design-hero-1.webp',
    'web-design-feature-1.webp',
    'web-design-ui-1.webp'
  ],
  'services/website-development': [
    'website-development-hero-1.webp',
    'website-development-feature-1.webp'
  ],
  'services/cybersecurity': [
    'cybersecurity-hero-1.webp',
    'cybersecurity-shield-1.webp'
  ],
  'services/ecommerce': [
    'ecommerce-hero-1.webp',
    'ecommerce-store-1.webp',
    'ecommerce-dashboard-1.webp',
    'ecommerce-integrations-1.webp'
  ],
  'services/mobile-apps': [
    'mobile-apps-hero-1.webp',
    'mobile-apps-hero-2.webp',
    'mobile-apps-hero-3.webp',
    'mobile-apps-feature-1.webp'
  ],
  'services/seo': [
    'seo-hero-1.webp',
    'seo-feature-1.webp'
  ],
  'services/branding': [
    'branding-hero-1.webp',
    'branding-logo-1.webp',
    'branding-identity-1.webp'
  ],
  'services/erp-crm': [
    'erp-crm-hero-1.webp',
    'erp-crm-dashboard-1.webp',
    'erp-crm-feature-1.webp'
  ],
  'services/hosting': [
    'hosting-hero-1.webp',
    'hosting-infrastructure-1.webp',
    'hosting-server-1.webp'
  ],
  'services/ui-ux': [
    'ui-ux-hero-1.webp',
    'ui-ux-design-1.webp'
  ],
  'services/maintenance': [
    'maintenance-hero-1.webp',
    'maintenance-support-1.webp'
  ],
  'services/custom-systems': [
    'custom-systems-hero-1.webp',
    'custom-systems-feature-1.webp'
  ],
  'about': [
    'about-team-1.webp',
    'about-founder-1.webp',
    'about-office-1.webp'
  ],
  'portfolio': [
    'portfolio-project-cslo-1.webp',
    'portfolio-project-preview-1.webp',
    'portfolio-project-preview-2.webp',
    'portfolio-project-preview-3.webp',
    'portfolio-project-preview-4.webp',
    'portfolio-project-preview-5.webp'
  ],
  'portfolio/cslo-sudan': [
    'portfolio-project-cslo-1.webp'
  ],
  'blog': [
    'blog-thumbnail-1.webp',
    'blog-thumbnail-2.webp',
    'blog-thumbnail-3.webp',
    'blog-thumbnail-4.webp',
    'blog-thumbnail-5.webp'
  ],
  'common': [
    'common-icon-1.webp',
    'common-icon-2.webp'
  ],
  'icons': [
    'icons-feature-1.webp',
    'icons-feature-2.webp'
  ]
};

// Get all image files recursively
function getAllImages(dir, baseDir = dir) {
  const files = [];
  if (!fs.existsSync(dir)) return files;
  
  const items = fs.readdirSync(dir);
  items.forEach(item => {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files.push(...getAllImages(fullPath, baseDir));
    } else if (/\.(webp|jpg|jpeg|png)$/i.test(item)) {
      files.push({
        fullPath,
        relativePath: path.relative(baseDir, fullPath).replace(/\\/g, '/'),
        fileName: item,
        dir: path.dirname(fullPath),
        relativeDir: path.relative(baseDir, path.dirname(fullPath)).replace(/\\/g, '/')
      });
    }
  });
  
  return files;
}

// Find matching blueprint entry for an image
function findBlueprintMatch(image) {
  const { relativeDir, fileName } = image;
  
  // Try exact folder match
  if (BLUEPRINT[relativeDir] && BLUEPRINT[relativeDir].includes(fileName)) {
    return { folder: relativeDir, name: fileName, exact: true };
  }
  
  // Try normalized match
  const normalized = imageNaming.normalizeImageName(fileName);
  if (BLUEPRINT[relativeDir] && BLUEPRINT[relativeDir].includes(normalized)) {
    return { folder: relativeDir, name: normalized, exact: false, action: 'rename' };
  }
  
  // Try to infer from folder structure
  if (relativeDir.startsWith('services/')) {
    const serviceSlug = relativeDir.replace('services/', '');
    const blueprintFolder = `services/${serviceSlug}`;
    if (BLUEPRINT[blueprintFolder]) {
      // Check if we can match by pattern
      const validation = imageNaming.validateImageName(fileName);
      if (!validation.valid) {
        // Suggest first blueprint name for this folder
        return { folder: blueprintFolder, name: BLUEPRINT[blueprintFolder][0], exact: false, action: 'normalize' };
      }
    }
  }
  
  return null;
}

// Scan codebase for image references
function scanCodebaseForImages() {
  const images = new Set();
  
  try {
    const result = execSync(
      `grep -rE "(/images/|'/images/|\"/images/)" --include="*.tsx" --include="*.jsx" --include="*.ts" --include="*.js" . 2>/dev/null | grep -v node_modules | grep -v ".next" || true`,
      { cwd: process.cwd(), encoding: 'utf-8', maxBuffer: 10 * 1024 * 1024 }
    );
    
    const lines = result.split('\n').filter(l => l.trim());
    lines.forEach(line => {
      // Extract image paths
      const matches = line.match(/['"`]([^'"`]*images[^'"`]*\.(webp|jpg|jpeg|png))['"`]/gi);
      if (matches) {
        matches.forEach(match => {
          const pathMatch = match.match(/['"`](.+?)['"`]/);
          if (pathMatch) {
            let imgPath = pathMatch[1];
            // Normalize path
            if (imgPath.startsWith('/')) imgPath = imgPath.substring(1);
            if (!imgPath.startsWith('public/') && imgPath.startsWith('images/')) {
              imgPath = 'public/' + imgPath;
            }
            images.add(imgPath);
          }
        });
      }
    });
  } catch (error) {
    console.warn('⚠️  Error scanning codebase:', error.message);
  }
  
  return Array.from(images);
}

// Main execution
function main() {
  console.log('🔍 Starting Image Blueprint Enforcement...\n');

  const report = {
    renamed: [],
    moved: [],
    foldersCreated: new Set(),
    missing: [],
    unused: [],
    errors: []
  };

  // 1. Scan existing images
  console.log('📂 Scanning existing images...');
  const allImages = getAllImages(IMAGES_DIR, IMAGES_DIR);
  console.log(`✅ Found ${allImages.length} images\n`);

  // 2. Process each image
  console.log('🔄 Processing images...\n');
  
  const processedPaths = new Set();
  
  allImages.forEach(image => {
    try {
      const match = findBlueprintMatch(image);
      const validation = imageNaming.validateImageName(image.fileName);
      
      // If doesn't match pattern, normalize it
      if (!validation.valid) {
        const normalized = imageNaming.normalizeImageName(image.fileName);
        const newPath = path.join(image.dir, normalized);
        
        if (fs.existsSync(newPath) && newPath !== image.fullPath) {
          report.errors.push({
            image: image.relativePath,
            reason: `Normalized name ${normalized} already exists`,
            suggestion: 'Manual review needed'
          });
          return;
        }
        
        // Rename
        fs.renameSync(image.fullPath, newPath);
        report.renamed.push({
          from: image.relativePath,
          to: path.join(image.relativeDir, normalized)
        });
        console.log(`✅ Renamed: ${image.fileName} → ${normalized}`);
        
        // Update image object
        image.fullPath = newPath;
        image.fileName = normalized;
        image.relativePath = path.join(image.relativeDir, normalized);
      }
      
      // Check if should be moved/renamed based on blueprint
      if (match && !match.exact) {
        const targetFolder = path.join(IMAGES_DIR, match.folder);
        const targetPath = path.join(targetFolder, match.name);
        
        // Create folder if needed
        if (!fs.existsSync(targetFolder)) {
          fs.mkdirSync(targetFolder, { recursive: true });
          report.foldersCreated.add(match.folder);
          console.log(`📁 Created folder: ${match.folder}`);
        }
        
        // Move/rename if needed
        if (image.fullPath !== targetPath && !fs.existsSync(targetPath)) {
          fs.renameSync(image.fullPath, targetPath);
          report.moved.push({
            from: image.relativePath,
            to: `${match.folder}/${match.name}`
          });
          console.log(`📦 Moved: ${image.relativePath} → ${match.folder}/${match.name}`);
          image.fullPath = targetPath;
          image.relativePath = `${match.folder}/${match.name}`;
        }
      }
      
      processedPaths.add(image.relativePath);
    } catch (error) {
      report.errors.push({
        image: image.relativePath,
        error: error.message
      });
      console.error(`❌ Error processing ${image.relativePath}:`, error.message);
    }
  });

  // 3. Scan codebase for referenced images
  console.log('\n🔍 Scanning codebase for image references...');
  const codebaseImages = scanCodebaseForImages();
  console.log(`✅ Found ${codebaseImages.length} image references in code\n`);

  // 4. Check for missing images
  console.log('📋 Checking for missing images...\n');
  codebaseImages.forEach(imgRef => {
    const fullPath = path.join(process.cwd(), imgRef);
    if (!fs.existsSync(fullPath)) {
      const imgName = path.basename(imgRef);
      const imgDir = path.dirname(imgRef).replace('public/images/', '');
      
      // Find blueprint match
      let blueprintName = imgName;
      if (BLUEPRINT[imgDir] && BLUEPRINT[imgDir].length > 0) {
        blueprintName = BLUEPRINT[imgDir][0]; // Use first blueprint name
      }
      
      report.missing.push({
        referencedPath: imgRef,
        folder: imgDir,
        expectedName: blueprintName,
        suggestion: `Upload to: public/images/${imgDir}/${blueprintName}`
      });
    }
  });

  // 5. Find unused images
  console.log('🔍 Finding unused images...\n');
  allImages.forEach(image => {
    const publicPath = `/images/${image.relativePath}`;
    const existsInCode = codebaseImages.some(ref => 
      ref.includes(image.relativePath) || image.relativePath.includes(ref.replace('public/images/', ''))
    );
    
    if (!existsInCode && !processedPaths.has(image.relativePath)) {
      report.unused.push({
        path: image.relativePath,
        suggestion: 'Consider removing or using in a page'
      });
    }
  });

  // 6. Generate report
  console.log('📄 Generating report...\n');
  let reportContent = `# 📸 Image Standardization Report\n\n`;
  reportContent += `Generated: ${new Date().toISOString()}\n\n`;
  reportContent += `## Summary\n\n`;
  reportContent += `- ✅ Renamed: ${report.renamed.length} images\n`;
  reportContent += `- 📦 Moved: ${report.moved.length} images\n`;
  reportContent += `- 📁 Folders Created: ${report.foldersCreated.size}\n`;
  reportContent += `- ❌ Missing: ${report.missing.length} images\n`;
  reportContent += `- ⚠️  Unused: ${report.unused.length} images\n`;
  reportContent += `- 🐛 Errors: ${report.errors.length}\n\n`;

  if (report.renamed.length > 0) {
    reportContent += `## ✅ Renamed Images\n\n`;
    report.renamed.forEach(item => {
      reportContent += `- \`${item.from}\` → \`${item.to}\`\n`;
    });
    reportContent += `\n`;
  }

  if (report.moved.length > 0) {
    reportContent += `## 📦 Moved Images\n\n`;
    report.moved.forEach(item => {
      reportContent += `- \`${item.from}\` → \`${item.to}\`\n`;
    });
    reportContent += `\n`;
  }

  if (report.foldersCreated.size > 0) {
    reportContent += `## 📁 Folders Created\n\n`;
    Array.from(report.foldersCreated).forEach(folder => {
      reportContent += `- \`${folder}\`\n`;
    });
    reportContent += `\n`;
  }

  if (report.missing.length > 0) {
    reportContent += `## ❌ Missing Images Report\n\n`;
    reportContent += `These images are referenced in code but don't exist:\n\n`;
    report.missing.forEach(item => {
      reportContent += `### Missing: \`${item.expectedName}\`\n`;
      reportContent += `- **Referenced in:** \`${item.referencedPath}\`\n`;
      reportContent += `- **Correct Folder:** \`public/images/${item.folder}\`\n`;
      reportContent += `- **Correct Filename:** \`${item.expectedName}\`\n`;
      reportContent += `- **Action:** ${item.suggestion}\n\n`;
    });
  }

  if (report.unused.length > 0) {
    reportContent += `## ⚠️  Unused Images\n\n`;
    reportContent += `These images exist but are not referenced in code:\n\n`;
    report.unused.forEach(item => {
      reportContent += `- \`${item.path}\` - ${item.suggestion}\n`;
    });
    reportContent += `\n`;
  }

  if (report.errors.length > 0) {
    reportContent += `## 🐛 Errors\n\n`;
    report.errors.forEach(item => {
      reportContent += `- **Image:** \`${item.image}\`\n`;
      reportContent += `  - **Issue:** ${item.reason || item.error}\n`;
      if (item.suggestion) {
        reportContent += `  - **Suggestion:** ${item.suggestion}\n`;
      }
      reportContent += `\n`;
    });
  }

  fs.writeFileSync(REPORT_FILE, reportContent);
  console.log(`✅ Report saved to: ${REPORT_FILE}\n`);

  // Final summary
  console.log('✨ Image standardization complete!\n');
  console.log('📊 Summary:');
  console.log(`   ✅ Renamed: ${report.renamed.length}`);
  console.log(`   📦 Moved: ${report.moved.length}`);
  console.log(`   📁 Folders Created: ${report.foldersCreated.size}`);
  console.log(`   ❌ Missing: ${report.missing.length}`);
  console.log(`   ⚠️  Unused: ${report.unused.length}`);
  console.log(`   🐛 Errors: ${report.errors.length}\n`);
  
  if (report.missing.length > 0) {
    console.log('📋 Missing images listed in:', REPORT_FILE);
    console.log('   Please upload these images with the exact names shown.\n');
  }
}

// Run
try {
  main();
} catch (error) {
  console.error('❌ Fatal error:', error);
  process.exit(1);
}
