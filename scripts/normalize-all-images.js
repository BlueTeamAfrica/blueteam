/**
 * COMPREHENSIVE IMAGE NORMALIZATION SCRIPT
 * 
 * Tasks:
 * 1. Scan all images in /public/images (excluding _legacy)
 * 2. Rename to: {section}-{subsection}-{description}-{xx}.webp
 * 3. Move to correct folders
 * 4. Move originals to _legacy/
 * 5. Update all JSX/import references
 * 6. Generate rename-map.json and missing-images-report.json
 */

const fs = require('fs');
const path = require('path');

const IMAGES_ROOT = path.join(process.cwd(), 'public/images');
const LEGACY_ROOT = path.join(IMAGES_ROOT, '_legacy');
const REPORTS_DIR = path.join(process.cwd(), 'reports');

// Ensure reports directory exists
if (!fs.existsSync(REPORTS_DIR)) {
  fs.mkdirSync(REPORTS_DIR, { recursive: true });
}

// Folder mapping: where images should go based on section
const FOLDER_MAP = {
  hero: 'hero',
  about: 'about',
  contact: 'contact',
  blog: 'blog',
  portfolio: 'portfolio',
  services: 'services',
  home: 'home',
  common: 'common',
  icons: 'icons',
  'case-studies': 'portfolio', // case studies go to portfolio with subfolder
};

// Expected images by section (for missing images report)
const EXPECTED_IMAGES = {
  hero: [
    { name: 'hero-main-01.webp', folder: 'hero' },
    { name: 'hero-gradient-01.webp', folder: 'hero' },
    { name: 'hero-og-01.webp', folder: 'hero' },
  ],
  about: [
    { name: 'about-team-01.webp', folder: 'about' },
    { name: 'about-office-01.webp', folder: 'about' },
    { name: 'about-story-01.webp', folder: 'about' },
  ],
  contact: [
    { name: 'contact-hero-01.webp', folder: 'contact' },
    { name: 'contact-office-01.webp', folder: 'contact' },
    { name: 'contact-team-01.webp', folder: 'contact' },
  ],
  blog: [
    { name: 'blog-thumbnail-01.webp', folder: 'blog' },
    { name: 'blog-thumbnail-02.webp', folder: 'blog' },
    { name: 'blog-thumbnail-03.webp', folder: 'blog' },
  ],
  'home/services': [
    { name: 'home-service-web-design-01.webp', folder: 'home/services' },
    { name: 'home-service-website-development-01.webp', folder: 'home/services' },
    { name: 'home-service-cybersecurity-01.webp', folder: 'home/services' },
    { name: 'home-service-mobile-apps-01.webp', folder: 'home/services' },
    { name: 'home-service-erp-01.webp', folder: 'home/services' },
    { name: 'home-service-digital-marketing-01.webp', folder: 'home/services' },
    { name: 'home-service-hosting-01.webp', folder: 'home/services' },
  ],
  'home/portfolio': [
    { name: 'home-portfolio-ecommerce-01.webp', folder: 'home/portfolio' },
    { name: 'home-portfolio-ngo-portal-01.webp', folder: 'home/portfolio' },
    { name: 'home-portfolio-preview-01.webp', folder: 'home/portfolio' },
    { name: 'home-portfolio-preview-02.webp', folder: 'home/portfolio' },
  ],
  'portfolio/cslo-sudan': [
    { name: 'portfolio-project-cslo-01.webp', folder: 'portfolio/cslo-sudan' },
  ],
  'services/web-design': [
    { name: 'services-webdesign-hero-01.webp', folder: 'services/web-design' },
  ],
  'services/website-development': [
    { name: 'services-website-development-hero-01.webp', folder: 'services/website-development' },
  ],
  'services/hosting': [
    { name: 'services-hosting-hero-01.webp', folder: 'services/hosting' },
  ],
  'services/cybersecurity': [
    { name: 'services-cybersecurity-hero-01.webp', folder: 'services/cybersecurity' },
    { name: 'services-cybersecurity-shield-01.webp', folder: 'services/cybersecurity' },
  ],
  'services/mobile-apps': [
    { name: 'services-mobile-apps-hero-01.webp', folder: 'services/mobile-apps' },
    { name: 'services-mobile-apps-ui-01.webp', folder: 'services/mobile-apps' },
  ],
  'services/erp': [
    { name: 'services-erp-hero-01.webp', folder: 'services/erp' },
  ],
  'services/ecommerce': [
    { name: 'services-ecommerce-hero-01.webp', folder: 'services/ecommerce' },
    { name: 'services-ecommerce-dashboard-01.webp', folder: 'services/ecommerce' },
    { name: 'services-ecommerce-integrations-01.webp', folder: 'services/ecommerce' },
  ],
};

/**
 * Normalize filename to new pattern
 * Pattern: {section}-{subsection}-{description}-{xx}.webp
 */
function normalizeFileName(fileName, currentPath) {
  let baseName = fileName.replace(/\.(webp|jpg|jpeg|png)$/i, '');
  
  // Convert to lowercase
  baseName = baseName.toLowerCase();
  
  // Replace underscores and spaces with hyphens
  baseName = baseName.replace(/[_ ]+/g, '-');
  
  // Remove version prefixes (v01, v1, etc.)
  baseName = baseName.replace(/-v\d+/gi, '');
  baseName = baseName.replace(/^v\d+-/gi, '');
  baseName = baseName.replace(/v\d+$/gi, '');
  
  // Clean up multiple hyphens
  baseName = baseName.replace(/-+/g, '-');
  
  // Remove leading/trailing hyphens
  baseName = baseName.replace(/^-+|-+$/g, '');
  
  // Extract number if exists at end
  let number = 1;
  const numberMatch = baseName.match(/-(\d+)$/);
  if (numberMatch) {
    number = parseInt(numberMatch[1], 10);
    baseName = baseName.replace(/-\d+$/, '');
  }
  
  // Format number with leading zero (01, 02, etc.)
  const formattedNumber = String(number).padStart(2, '0');
  
  // Determine section and subsection from path and filename
  const pathParts = currentPath.split(path.sep);
  const imagesIndex = pathParts.indexOf('images');
  const relativePath = pathParts.slice(imagesIndex + 1).join('/');
  
  let section = 'general';
  let subsection = '';
  let description = baseName;
  
  // Parse based on path structure
  if (relativePath.startsWith('hero/')) {
    section = 'hero';
    description = baseName.replace(/^hero-?/, '');
  } else if (relativePath.startsWith('about/')) {
    section = 'about';
    description = baseName.replace(/^about-?/, '');
  } else if (relativePath.startsWith('contact/')) {
    section = 'contact';
    description = baseName.replace(/^contact-?/, '');
  } else if (relativePath.startsWith('blog/')) {
    section = 'blog';
    description = baseName.replace(/^blog-?/, '');
  } else if (relativePath.startsWith('home/services/')) {
    section = 'home';
    subsection = 'service';
    description = baseName.replace(/^(home-)?(service-)?/, '');
  } else if (relativePath.startsWith('home/portfolio/')) {
    section = 'home';
    subsection = 'portfolio';
    description = baseName.replace(/^(home-)?(portfolio-)?/, '');
  } else if (relativePath.startsWith('home/')) {
    section = 'home';
    description = baseName.replace(/^home-?/, '');
  } else if (relativePath.startsWith('portfolio/')) {
    if (relativePath.includes('cslo')) {
      section = 'case';
      subsection = 'cslo';
      description = baseName.replace(/^(portfolio-)?(project-)?(cslo-)?/, '');
    } else {
      section = 'portfolio';
      description = baseName.replace(/^(portfolio-)?(project-)?/, '');
    }
  } else if (relativePath.startsWith('services/')) {
    section = 'services';
    const serviceMatch = relativePath.match(/services\/([^/]+)/);
    if (serviceMatch) {
      subsection = serviceMatch[1].replace(/-/g, '');
      description = baseName.replace(new RegExp(`^(services-)?(${subsection}-)?`, 'i'), '');
    }
  }
  
  // Clean description
  description = description.replace(/^-+|-+$/g, '');
  if (!description) {
    description = 'image';
  }
  
  // Build new filename
  let newName;
  if (subsection) {
    newName = `${section}-${subsection}-${description}-${formattedNumber}.webp`;
  } else {
    newName = `${section}-${description}-${formattedNumber}.webp`;
  }
  
  return {
    newName,
    section,
    subsection,
    description,
    number,
  };
}

/**
 * Determine target folder for normalized image
 */
function getTargetFolder(section, subsection, currentPath) {
  const pathParts = currentPath.split(path.sep);
  const imagesIndex = pathParts.indexOf('images');
  const relativePath = pathParts.slice(imagesIndex + 1).join('/');
  
  if (section === 'hero') return 'hero';
  if (section === 'about') return 'about';
  if (section === 'contact') return 'contact';
  if (section === 'blog') return 'blog';
  if (section === 'home') {
    if (subsection === 'service') return 'home/services';
    if (subsection === 'portfolio') return 'home/portfolio';
    return 'home';
  }
  if (section === 'portfolio' || section === 'case') {
    if (subsection === 'cslo') return 'portfolio/cslo-sudan';
    return 'portfolio';
  }
  if (section === 'services' && subsection) {
    return `services/${subsection}`;
  }
  
  // Default: maintain current structure if it's valid
  if (relativePath.startsWith('services/')) {
    return relativePath.substring(0, relativePath.lastIndexOf('/'));
  }
  
  return 'general';
}

/**
 * Recursively scan directory for images
 */
function scanDirectory(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    // Skip _legacy directory
    if (file === '_legacy' || filePath.includes('_legacy')) {
      continue;
    }
    
    if (stat.isDirectory()) {
      scanDirectory(filePath, fileList);
    } else if (/\.(webp|jpg|jpeg|png)$/i.test(file)) {
      fileList.push({
        fullPath: filePath,
        fileName: file,
        relativePath: path.relative(IMAGES_ROOT, filePath),
      });
    }
  }
  
  return fileList;
}

/**
 * Update file references in codebase
 */
function updateFileReferences(oldPath, newPath) {
  const codeExtensions = ['.tsx', '.ts', '.jsx', '.js', '.css', '.md'];
  const searchDir = process.cwd();
  const updates = [];
  
  function searchFiles(dir) {
    const files = fs.readdirSync(dir);
    
    for (const file of files) {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      // Skip node_modules, .next, etc.
      if (file === 'node_modules' || file === '.next' || file === '.git' || file === 'reports') {
        continue;
      }
      
      if (stat.isDirectory()) {
        searchFiles(filePath);
      } else if (codeExtensions.includes(path.extname(file))) {
        let content = fs.readFileSync(filePath, 'utf8');
        let modified = false;
        
        // Update various path patterns
        const patterns = [
          new RegExp(oldPath.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'),
          new RegExp(oldPath.replace(/\//g, '/'), 'g'),
          new RegExp(`["']${oldPath.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}["']`, 'g'),
        ];
        
        for (const pattern of patterns) {
          if (pattern.test(content)) {
            content = content.replace(pattern, newPath);
            modified = true;
          }
        }
        
        if (modified) {
          fs.writeFileSync(filePath, content, 'utf8');
          updates.push({
            file: path.relative(process.cwd(), filePath),
            oldPath,
            newPath,
          });
        }
      }
    }
  }
  
  searchFiles(searchDir);
  return updates;
}

/**
 * Main execution
 */
function main() {
  console.log('🖼️  Starting comprehensive image normalization...\n');
  
  // Step 1: Scan all images
  console.log('📁 Scanning images...');
  const allImages = scanDirectory(IMAGES_ROOT);
  console.log(`   Found ${allImages.length} images\n`);
  
  // Step 2: Normalize and rename
  console.log('🔄 Normalizing images...');
  const renameMap = [];
  const processedImages = new Map();
  
  for (const image of allImages) {
    const normalized = normalizeFileName(image.fileName, image.fullPath);
    const targetFolder = getTargetFolder(normalized.section, normalized.subsection, image.fullPath);
    const targetDir = path.join(IMAGES_ROOT, targetFolder);
    const targetPath = path.join(targetDir, normalized.newName);
    const relativeOldPath = `/images/${image.relativePath.replace(/\\/g, '/')}`;
    const relativeNewPath = `/images/${targetFolder}/${normalized.newName}`;
    
    // Create target directory if needed
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }
    
    // Check if target already exists (duplicate)
    if (fs.existsSync(targetPath) && image.fullPath !== targetPath) {
      console.log(`   ⚠️  Duplicate detected: ${normalized.newName} already exists, skipping ${image.fileName}`);
      // Move original to legacy anyway
      const legacyPath = path.join(LEGACY_ROOT, image.relativePath);
      const legacyDir = path.dirname(legacyPath);
      if (!fs.existsSync(legacyDir)) {
        fs.mkdirSync(legacyDir, { recursive: true });
      }
      fs.copyFileSync(image.fullPath, legacyPath);
      fs.unlinkSync(image.fullPath);
      continue;
    }
    
    // Only process if path or name changed
    if (image.relativePath !== `${targetFolder}/${normalized.newName}`) {
      // Copy original to legacy
      const legacyPath = path.join(LEGACY_ROOT, image.relativePath);
      const legacyDir = path.dirname(legacyPath);
      if (!fs.existsSync(legacyDir)) {
        fs.mkdirSync(legacyDir, { recursive: true });
      }
      fs.copyFileSync(image.fullPath, legacyPath);
      
      // Move and rename
      if (!fs.existsSync(targetPath)) {
        fs.copyFileSync(image.fullPath, targetPath);
      }
      
      // Delete original if different location
      if (image.fullPath !== targetPath) {
        fs.unlinkSync(image.fullPath);
      }
      
      // Update references
      console.log(`   ✓ ${image.fileName} → ${normalized.newName}`);
      updateFileReferences(relativeOldPath, relativeNewPath);
      
      renameMap.push({
        original: image.relativePath.replace(/\\/g, '/'),
        renamed: `${targetFolder}/${normalized.newName}`,
        oldPath: relativeOldPath,
        newPath: relativeNewPath,
      });
      
      processedImages.set(relativeNewPath, true);
    } else {
      processedImages.set(relativeNewPath, true);
    }
  }
  
  console.log(`\n   ✅ Processed ${renameMap.length} images\n`);
  
  // Step 3: Generate missing images report
  console.log('📋 Generating missing images report...');
  const missingImages = [];
  
  for (const [key, expectedList] of Object.entries(EXPECTED_IMAGES)) {
    for (const expected of expectedList) {
      const expectedPath = `/images/${expected.folder}/${expected.name}`;
      if (!processedImages.has(expectedPath)) {
        missingImages.push({
          expectedPath,
          folder: expected.folder,
          fileName: expected.name,
          section: key,
        });
      }
    }
  }
  
  console.log(`   Found ${missingImages.length} missing images\n`);
  
  // Step 4: Save reports
  console.log('💾 Saving reports...');
  
  // Save rename map
  const renameMapPath = path.join(REPORTS_DIR, 'rename-map.json');
  fs.writeFileSync(
    renameMapPath,
    JSON.stringify(renameMap, null, 2),
    'utf8'
  );
  console.log(`   ✓ rename-map.json (${renameMap.length} entries)`);
  
  // Save missing images report
  const missingReportPath = path.join(REPORTS_DIR, 'missing-images-report.json');
  fs.writeFileSync(
    missingReportPath,
    JSON.stringify(missingImages, null, 2),
    'utf8'
  );
  console.log(`   ✓ missing-images-report.json (${missingImages.length} entries)\n`);
  
  // Step 5: Summary
  console.log('✨ Normalization complete!\n');
  console.log('📊 Summary:');
  console.log(`   • Images processed: ${renameMap.length}`);
  console.log(`   • Missing images: ${missingImages.length}`);
  console.log(`   • Reports saved to: ${REPORTS_DIR}\n`);
  
  if (missingImages.length > 0) {
    console.log('⚠️  Missing images that need to be uploaded:');
    const byFolder = {};
    for (const img of missingImages) {
      if (!byFolder[img.folder]) {
        byFolder[img.folder] = [];
      }
      byFolder[img.folder].push(img.fileName);
    }
    
    for (const [folder, files] of Object.entries(byFolder)) {
      console.log(`\n   📁 ${folder}/`);
      for (const file of files) {
        console.log(`      • ${file}`);
      }
    }
    console.log('');
  }
}

// Run the script
try {
  main();
} catch (error) {
  console.error('❌ Error:', error);
  process.exit(1);
}

