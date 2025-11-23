#!/usr/bin/env node

/**
 * MASTER BLUEPRINT IMAGE RENAMING TASK
 * 
 * Based on IMAGE_BLUEPRINT.md:
 * - Scans /public/images and subfolders
 * - Renames/moves all files to enforced pattern
 * - Creates /public/images/_legacy/ for originals as backups
 * - Updates all JSX imports/paths accordingly
 * - Produces Missing Image Report
 * - Outputs rename map (original → new filename)
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const IMAGES_DIR = path.join(process.cwd(), 'public/images');
const LEGACY_DIR = path.join(IMAGES_DIR, '_legacy');

// Master Blueprint from IMAGE_BLUEPRINT.md
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
  ],
  'contact': [] // Contact images not in blueprint - keep as-is or map manually
};

// Normalize image name to blueprint pattern
function normalizeImageName(fileName) {
  let normalized = path.basename(fileName, path.extname(fileName));
  normalized = normalized.toLowerCase();
  normalized = normalized.replace(/[_ ]+/g, '-');
  normalized = normalized.replace(/-v\d+/g, '');
  normalized = normalized.replace(/v\d+-/g, '');
  normalized = normalized.replace(/v\d+$/g, '');
  normalized = normalized.replace(/-+/g, '-');
  normalized = normalized.replace(/^-+|-+$/g, '');
  
  // Remove leading zeros from numbers
  normalized = normalized.replace(/-0+(\d+)$/, '-$1');
  
  // Ensure .webp extension
  return normalized + '.webp';
}

// Get all image files recursively
function getAllImages(dir, baseDir = dir, images = []) {
  if (!fs.existsSync(dir)) return images;
  
  const items = fs.readdirSync(dir);
  items.forEach(item => {
    if (item === '_legacy') return; // Skip legacy folder
    
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      getAllImages(fullPath, baseDir, images);
    } else if (/\.(webp|jpg|jpeg|png)$/i.test(item)) {
      const relativePath = path.relative(baseDir, fullPath).replace(/\\/g, '/');
      const relativeDir = path.relative(baseDir, path.dirname(fullPath)).replace(/\\/g, '/') || '.';
      
      images.push({
        fullPath,
        relativePath,
        relativeDir: relativeDir || '.',
        fileName: item,
        dir: path.dirname(fullPath)
      });
    }
  });
  
  return images;
}

// Find target path for an image based on blueprint and current location
function findTargetPath(image) {
  const { relativeDir, fileName } = image;
  const normalized = normalizeImageName(fileName);
  
  // Try exact blueprint match first
  if (BLUEPRINT[relativeDir] && BLUEPRINT[relativeDir].includes(normalized)) {
    return {
      folder: relativeDir,
      fileName: normalized,
      action: 'rename'
    };
  }
  
  // Try normalized match in blueprint
  if (BLUEPRINT[relativeDir] && BLUEPRINT[relativeDir].includes(normalized)) {
    return {
      folder: relativeDir,
      fileName: normalized,
      action: 'rename'
    };
  }
  
  // Check if normalized name matches any blueprint entry in current folder
  if (BLUEPRINT[relativeDir]) {
    const matching = BLUEPRINT[relativeDir].find(blueprintName => {
      // Extract base name (without number)
      const base1 = normalized.replace(/-\d+\.webp$/, '');
      const base2 = blueprintName.replace(/-\d+\.webp$/, '');
      return base1 === base2;
    });
    if (matching && !fs.existsSync(path.join(IMAGES_DIR, relativeDir, matching))) {
      return { folder: relativeDir, fileName: matching, action: 'rename' };
    }
  }
  
  // Try to match based on folder structure
  if (relativeDir.startsWith('services/')) {
    const serviceSlug = relativeDir.replace('services/', '');
    const blueprintFolder = `services/${serviceSlug}`;
    
    if (BLUEPRINT[blueprintFolder]) {
      // Try to find matching blueprint entry by content
      const lowerFileName = fileName.toLowerCase();
      if (lowerFileName.includes('hero') || lowerFileName.includes('background')) {
        const heroFiles = BLUEPRINT[blueprintFolder].filter(f => f.includes('hero'));
        for (const heroFile of heroFiles) {
          const targetPath = path.join(IMAGES_DIR, blueprintFolder, heroFile);
          if (!fs.existsSync(targetPath)) {
            return { folder: blueprintFolder, fileName: heroFile, action: 'rename' };
          }
        }
      }
      if (lowerFileName.includes('dashboard')) {
        const dashFile = BLUEPRINT[blueprintFolder].find(f => f.includes('dashboard'));
        if (dashFile && !fs.existsSync(path.join(IMAGES_DIR, blueprintFolder, dashFile))) {
          return { folder: blueprintFolder, fileName: dashFile, action: 'rename' };
        }
      }
      if (lowerFileName.includes('feature') || lowerFileName.includes('server')) {
        const featFile = BLUEPRINT[blueprintFolder].find(f => f.includes('feature') || f.includes('server'));
        if (featFile && !fs.existsSync(path.join(IMAGES_DIR, blueprintFolder, featFile))) {
          return { folder: blueprintFolder, fileName: featFile, action: 'rename' };
        }
      }
      // Try other matches
      for (const blueprintFile of BLUEPRINT[blueprintFolder]) {
        const targetPath = path.join(IMAGES_DIR, blueprintFolder, blueprintFile);
        if (!fs.existsSync(targetPath)) {
          return { folder: blueprintFolder, fileName: blueprintFile, action: 'rename' };
        }
      }
    }
  }
  
  // For home folder
  if (relativeDir === 'home') {
    const lowerFileName = fileName.toLowerCase();
    if (lowerFileName.includes('feature-a') || lowerFileName.includes('section-feature-a')) {
      return { folder: 'home', fileName: 'home-feature-1.webp', action: 'rename' };
    }
    if (lowerFileName.includes('feature-b') || lowerFileName.includes('section-feature-b')) {
      return { folder: 'home', fileName: 'home-feature-2.webp', action: 'rename' };
    }
    if (lowerFileName.includes('feature-e') || lowerFileName.includes('section-feature-e')) {
      return { folder: 'home', fileName: 'home-feature-3.webp', action: 'rename' };
    }
    if (lowerFileName.includes('feature-m') || lowerFileName.includes('section-feature-m')) {
      return { folder: 'home', fileName: 'home-feature-4.webp', action: 'rename' };
    }
    if (lowerFileName.includes('client') || lowerFileName.includes('logo')) {
      return { folder: 'home', fileName: 'home-clients-1.webp', action: 'rename' };
    }
    if (lowerFileName.includes('team') || lowerFileName.includes('photo')) {
      return { folder: 'home', fileName: 'home-team-1.webp', action: 'rename' };
    }
    // Try any available home-feature slot
    for (let i = 1; i <= 4; i++) {
      const target = `home-feature-${i}.webp`;
      if (BLUEPRINT['home'].includes(target) && !fs.existsSync(path.join(IMAGES_DIR, 'home', target))) {
        return { folder: 'home', fileName: target, action: 'rename' };
      }
    }
  }
  
  // For home/services subfolder
  if (relativeDir === 'home/services') {
    const lowerFileName = fileName.toLowerCase();
    if (lowerFileName.includes('web-design')) {
      return { folder: 'home/services', fileName: 'home-service-web-design-1.webp', action: 'rename' };
    }
    if (lowerFileName.includes('cybersecurity')) {
      return { folder: 'home/services', fileName: 'home-service-cybersecurity-1.webp', action: 'rename' };
    }
    if (lowerFileName.includes('mobile')) {
      return { folder: 'home/services', fileName: 'home-service-mobile-apps-1.webp', action: 'rename' };
    }
    if (lowerFileName.includes('erp')) {
      return { folder: 'home/services', fileName: 'home-service-erp-1.webp', action: 'rename' };
    }
    if (lowerFileName.includes('hosting')) {
      return { folder: 'home/services', fileName: 'home-service-hosting-1.webp', action: 'rename' };
    }
  }
  
  // For home/portfolio subfolder
  if (relativeDir === 'home/portfolio') {
    const lowerFileName = fileName.toLowerCase();
    if (lowerFileName.includes('ngo') || lowerFileName.includes('portal')) {
      return { folder: 'home/portfolio', fileName: 'home-portfolio-ngo-portal-1.webp', action: 'rename' };
    }
    if (lowerFileName.includes('ecommerce') || lowerFileName.includes('e-commerce')) {
      return { folder: 'home/portfolio', fileName: 'home-portfolio-ecommerce-1.webp', action: 'rename' };
    }
    if (lowerFileName.includes('preview')) {
      const target = 'home-portfolio-preview-1.webp';
      if (!fs.existsSync(path.join(IMAGES_DIR, 'home/portfolio', target))) {
        return { folder: 'home/portfolio', fileName: target, action: 'rename' };
      }
    }
  }
  
  // For about folder - handle numbered versions
  if (relativeDir === 'about') {
    const lowerFileName = normalized.toLowerCase();
    if (lowerFileName.includes('team')) {
      // Map about-team-01 through about-team-09 to about-team-1 (keep only first)
      const numberMatch = lowerFileName.match(/team-(\d+)/);
      if (numberMatch) {
        const num = parseInt(numberMatch[1], 10);
        if (num === 1) {
          return { folder: 'about', fileName: 'about-team-1.webp', action: 'rename' };
        }
        // For team-02 through team-09, keep as-is but normalize
        return { folder: 'about', fileName: `about-team-${num}.webp`, action: 'normalize' };
      }
      return { folder: 'about', fileName: 'about-team-1.webp', action: 'rename' };
    }
    if (lowerFileName.includes('founder')) {
      return { folder: 'about', fileName: 'about-founder-1.webp', action: 'rename' };
    }
    if (lowerFileName.includes('office')) {
      // Map about-office-01 to about-office-1
      const numberMatch = lowerFileName.match(/office-(\d+)/);
      if (numberMatch) {
        const num = parseInt(numberMatch[1], 10);
        return { folder: 'about', fileName: `about-office-${num}.webp`, action: 'rename' };
      }
    }
    if (lowerFileName.includes('story')) {
      // Keep story images as-is but normalize
      const numberMatch = lowerFileName.match(/story-(\d+)/);
      if (numberMatch) {
        const num = parseInt(numberMatch[1], 10);
        return { folder: 'about', fileName: `about-story-${num}.webp`, action: 'normalize' };
      }
    }
  }
  
  // For blog folder
  if (relativeDir === 'blog') {
    const lowerFileName = normalized.toLowerCase();
    if (lowerFileName.includes('thumbnail')) {
      // Map existing thumbnails
      for (let i = 1; i <= 5; i++) {
        const target = `blog-thumbnail-${i}.webp`;
        const targetPath = path.join(IMAGES_DIR, 'blog', target);
        if (!fs.existsSync(targetPath)) {
          return { folder: 'blog', fileName: target, action: 'rename' };
        }
      }
    }
    // Map blog-post-thumbnail-X to blog-thumbnail-X
    const postMatch = normalized.match(/blog-post-thumbnail-(\w+)/);
    if (postMatch) {
      const identifier = postMatch[1];
      // Map specific known ones
      if (identifier === '6' || identifier === 'd-1') {
        const target = 'blog-thumbnail-4.webp';
        if (!fs.existsSync(path.join(IMAGES_DIR, 'blog', target))) {
          return { folder: 'blog', fileName: target, action: 'rename' };
        }
      }
    }
  }
  
  // For contact folder - keep as-is but normalize
  if (relativeDir === 'contact') {
    return { folder: relativeDir, fileName: normalized, action: 'normalize' };
  }
  
  // For portfolio/cslo-sudan
  if (relativeDir === 'portfolio/cslo-sudan') {
    const lowerFileName = normalized.toLowerCase();
    if (lowerFileName.includes('cslo')) {
      // Remove v01 suffix if present
      if (lowerFileName.includes('erp-system-v01')) {
        return { folder: 'portfolio/cslo-sudan', fileName: 'portfolio-project-cslo-1.webp', action: 'rename' };
      }
      return { folder: 'portfolio/cslo-sudan', fileName: 'portfolio-project-cslo-1.webp', action: 'rename' };
    }
  }
  
  // For icons folder
  if (relativeDir === 'icons') {
    const lowerFileName = normalized.toLowerCase();
    if (lowerFileName.includes('feature')) {
      // Map to icons-feature-X
      const numberMatch = lowerFileName.match(/feature-(\d+)/);
      if (numberMatch) {
        const num = parseInt(numberMatch[1], 10);
        return { folder: 'icons', fileName: `icons-feature-${num}.webp`, action: 'rename' };
      }
    }
  }
  
  // Default: keep in same folder, normalize name
  return {
    folder: relativeDir,
    fileName: normalized,
    action: 'normalize'
  };
}

// Copy file to legacy backup
function backupToLegacy(image, newPath) {
  const legacyPath = newPath.replace(IMAGES_DIR, LEGACY_DIR);
  const legacyDir = path.dirname(legacyPath);
  
  if (!fs.existsSync(legacyDir)) {
    fs.mkdirSync(legacyDir, { recursive: true });
  }
  
  if (!fs.existsSync(legacyPath)) {
    fs.copyFileSync(image.fullPath, legacyPath);
  }
}

// Scan codebase for image references
function scanCodebaseForImages() {
  const images = new Map();
  
  try {
    const result = execSync(
      `grep -rE "(/images/|'/images/|\"/images/|images/)" --include="*.tsx" --include="*.jsx" --include="*.ts" --include="*.js" --include="*.css" . 2>/dev/null | grep -v node_modules | grep -v ".next" | grep -v "_legacy" || true`,
      { cwd: process.cwd(), encoding: 'utf-8', maxBuffer: 10 * 1024 * 1024 }
    );
    
    const lines = result.split('\n').filter(l => l.trim());
    lines.forEach(line => {
      const matches = line.match(/['"`]([^'"`]*images[^'"`]*\.(webp|jpg|jpeg|png))['"`]/gi);
      if (matches) {
        matches.forEach(match => {
          const pathMatch = match.match(/['"`](.+?)['"`]/);
          if (pathMatch) {
            let imgPath = pathMatch[1];
            if (imgPath.startsWith('/')) imgPath = imgPath.substring(1);
            if (!imgPath.startsWith('public/') && imgPath.startsWith('images/')) {
              imgPath = 'public/' + imgPath;
            }
            
            const key = imgPath.replace('public/images/', '');
            if (!images.has(key)) {
              images.set(key, []);
            }
            images.get(key).push(line.trim());
          }
        });
      }
    });
  } catch (error) {
    console.warn('⚠️  Error scanning codebase:', error.message);
  }
  
  return images;
}

// Update image path in file
function updateImagePathInFile(filePath, oldPath, newPath) {
  try {
    let content = fs.readFileSync(filePath, 'utf-8');
    const oldPublicPath = `/images/${oldPath}`;
    const newPublicPath = `/images/${newPath}`;
    
    // Replace all occurrences
    content = content.replace(new RegExp(oldPublicPath.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), newPublicPath);
    
    fs.writeFileSync(filePath, content, 'utf-8');
    return true;
  } catch (error) {
    console.error(`Error updating ${filePath}:`, error.message);
    return false;
  }
}

// Find files that reference an image
function findFilesReferencingImage(imagePath) {
  const files = [];
  const searchPath = imagePath.replace('public/images/', '');
  
  try {
    const result = execSync(
      `grep -rlE "(/images/${searchPath.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}|images/${searchPath.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})" --include="*.tsx" --include="*.jsx" --include="*.ts" --include="*.js" --include="*.css" . 2>/dev/null | grep -v node_modules | grep -v ".next" || true`,
      { cwd: process.cwd(), encoding: 'utf-8', maxBuffer: 10 * 1024 * 1024 }
    );
    
    files.push(...result.split('\n').filter(f => f.trim()));
  } catch (error) {
    // Ignore errors
  }
  
  return files;
}

// Main execution
function main() {
  console.log('🚀 Starting Master Blueprint Image Renaming Task...\n');
  
  // Create legacy directory
  if (!fs.existsSync(LEGACY_DIR)) {
    fs.mkdirSync(LEGACY_DIR, { recursive: true });
    console.log('📁 Created _legacy directory\n');
  }
  
  const report = {
    renamed: [],
    moved: [],
    backupsCreated: [],
    importUpdates: [],
    missing: [],
    errors: [],
    renameMap: []
  };
  
  // 1. Scan all images
  console.log('📂 Scanning all images...');
  const allImages = getAllImages(IMAGES_DIR, IMAGES_DIR);
  console.log(`✅ Found ${allImages.length} images\n`);
  
  // 2. Scan codebase for references
  console.log('🔍 Scanning codebase for image references...');
  const codebaseImages = scanCodebaseForImages();
  console.log(`✅ Found ${codebaseImages.size} unique image references\n`);
  
  // 3. Process each image
  console.log('🔄 Processing images...\n');
  
  const processedTargets = new Set();
  
  allImages.forEach(image => {
    try {
      const target = findTargetPath(image);
      const targetFullPath = path.join(IMAGES_DIR, target.folder, target.fileName);
      const targetRelativePath = `${target.folder}/${target.fileName}`;
      
      // Skip if already at target
      if (image.relativePath === targetRelativePath && image.fileName === target.fileName) {
        return;
      }
      
      // Check if target already exists (and is different file)
      if (fs.existsSync(targetFullPath) && image.fullPath !== targetFullPath) {
        const existingStat = fs.statSync(targetFullPath);
        const currentStat = fs.statSync(image.fullPath);
        
        if (existingStat.ino === currentStat.ino) {
          // Same file, already processed
          return;
        }
        
        // Target exists with different file - skip or use next number
        report.errors.push({
          image: image.relativePath,
          reason: `Target ${targetRelativePath} already exists`,
          suggestion: 'Manual review needed'
        });
        return;
      }
      
      // Create backup
      backupToLegacy(image, image.fullPath);
      report.backupsCreated.push(image.relativePath);
      
      // Create target folder if needed
      const targetDir = path.join(IMAGES_DIR, target.folder);
      if (!fs.existsSync(targetDir)) {
        fs.mkdirSync(targetDir, { recursive: true });
      }
      
      // Move/rename file
      if (image.fullPath !== targetFullPath) {
        fs.renameSync(image.fullPath, targetFullPath);
        
        if (target.folder !== image.relativeDir) {
          report.moved.push({
            from: image.relativePath,
            to: targetRelativePath
          });
          console.log(`📦 Moved: ${image.relativePath} → ${targetRelativePath}`);
        } else {
          report.renamed.push({
            from: image.relativePath,
            to: targetRelativePath
          });
          console.log(`✏️  Renamed: ${image.fileName} → ${target.fileName}`);
        }
        
        // Add to rename map
        report.renameMap.push({
          original: image.relativePath,
          new: targetRelativePath
        });
        
        // Update imports in codebase
        const filesToUpdate = findFilesReferencingImage(image.fullPath);
        filesToUpdate.forEach(file => {
          if (updateImagePathInFile(file, image.relativePath, targetRelativePath)) {
            report.importUpdates.push({
              file,
              oldPath: image.relativePath,
              newPath: targetRelativePath
            });
          }
        });
      }
      
      processedTargets.add(targetRelativePath);
    } catch (error) {
      report.errors.push({
        image: image.relativePath,
        error: error.message
      });
      console.error(`❌ Error processing ${image.relativePath}:`, error.message);
    }
  });
  
  // 4. Check for missing images from blueprint
  console.log('\n📋 Checking for missing blueprint images...\n');
  Object.keys(BLUEPRINT).forEach(folder => {
    BLUEPRINT[folder].forEach(fileName => {
      const fullPath = path.join(IMAGES_DIR, folder, fileName);
      const relativePath = `${folder}/${fileName}`;
      
      if (!fs.existsSync(fullPath) && !processedTargets.has(relativePath)) {
        report.missing.push({
          folder,
          fileName,
          expectedPath: `public/images/${relativePath}`,
          suggestion: `Upload image as: ${fileName}`
        });
      }
    });
  });
  
  // 5. Generate reports
  console.log('\n📄 Generating reports...\n');
  
  // Rename map output
  let renameMapOutput = '\n## 🔄 RENAME MAP (Original → New)\n\n';
  if (report.renameMap.length > 0) {
    report.renameMap.forEach(item => {
      renameMapOutput += `${item.original} → ${item.new}\n`;
    });
  } else {
    renameMapOutput += 'No renames performed.\n';
  }
  
  console.log(renameMapOutput);
  
  // Missing images report
  let missingReport = '\n## ❌ MISSING IMAGE REPORT\n\n';
  if (report.missing.length > 0) {
    report.missing.forEach(item => {
      missingReport += `- **Path:** \`${item.expectedPath}\`\n`;
      missingReport += `  - **Suggested Filename:** \`${item.fileName}\`\n`;
      missingReport += `  - **Action:** ${item.suggestion}\n\n`;
    });
  } else {
    missingReport += '✅ All blueprint images found.\n';
  }
  
  console.log(missingReport);
  
  // Write detailed report to file
  const reportFile = path.join(process.cwd(), 'IMAGE_RENAME_REPORT.md');
  let reportContent = `# 📸 Master Blueprint Image Renaming Report\n\n`;
  reportContent += `Generated: ${new Date().toISOString()}\n\n`;
  reportContent += `## Summary\n\n`;
  reportContent += `- ✅ Renamed: ${report.renamed.length} images\n`;
  reportContent += `- 📦 Moved: ${report.moved.length} images\n`;
  reportContent += `- 💾 Backups Created: ${report.backupsCreated.length} images\n`;
  reportContent += `- 🔄 Import Updates: ${report.importUpdates.length} files updated\n`;
  reportContent += `- ❌ Missing: ${report.missing.length} blueprint images\n`;
  reportContent += `- 🐛 Errors: ${report.errors.length}\n\n`;
  
  reportContent += renameMapOutput + '\n';
  reportContent += missingReport + '\n';
  
  if (report.importUpdates.length > 0) {
    reportContent += `## 🔄 Updated Imports\n\n`;
    report.importUpdates.forEach(item => {
      reportContent += `- **File:** \`${item.file}\`\n`;
      reportContent += `  - **Old Path:** \`${item.oldPath}\`\n`;
      reportContent += `  - **New Path:** \`${item.newPath}\`\n\n`;
    });
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
  
  fs.writeFileSync(reportFile, reportContent);
  console.log(`✅ Detailed report saved to: ${reportFile}\n`);
  
  // Final summary
  console.log('✨ Image renaming complete!\n');
  console.log('📊 Summary:');
  console.log(`   ✅ Renamed: ${report.renamed.length}`);
  console.log(`   📦 Moved: ${report.moved.length}`);
  console.log(`   💾 Backups: ${report.backupsCreated.length}`);
  console.log(`   🔄 Import Updates: ${report.importUpdates.length}`);
  console.log(`   ❌ Missing: ${report.missing.length}`);
  console.log(`   🐛 Errors: ${report.errors.length}\n`);
}

// Run
try {
  main();
} catch (error) {
  console.error('❌ Fatal error:', error);
  process.exit(1);
}

