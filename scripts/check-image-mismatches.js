#!/usr/bin/env node

/**
 * CHECK IMAGE MISMATCHES
 * 
 * Finds all image references in code and checks if files actually exist
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const IMAGES_DIR = path.join(process.cwd(), 'public/images');
const REPORT_FILE = path.join(process.cwd(), 'IMAGE_MISMATCHES_REPORT.md');

// Get all image files recursively
function getAllImageFiles(dir, baseDir = dir) {
  const files = [];
  if (!fs.existsSync(dir)) return files;
  
  const items = fs.readdirSync(dir);
  items.forEach(item => {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files.push(...getAllImageFiles(fullPath, baseDir));
    } else if (/\.(webp|jpg|jpeg|png)$/i.test(item)) {
      const relativePath = path.relative(baseDir, fullPath).replace(/\\/g, '/');
      files.push({
        fullPath,
        relativePath: `images/${relativePath}`,
        publicPath: `/images/${relativePath}`,
        fileName: item
      });
    }
  });
  
  return files;
}

// Scan codebase for image references
function scanCodebaseForImages() {
  const images = new Map();
  
  try {
    const result = execSync(
      `grep -rE "/images/" --include="*.tsx" --include="*.jsx" --include="*.ts" --include="*.js" . 2>/dev/null | grep -v node_modules | grep -v ".next" || true`,
      { cwd: process.cwd(), encoding: 'utf-8', maxBuffer: 10 * 1024 * 1024 }
    );
    
    const lines = result.split('\n').filter(l => l.trim());
    lines.forEach(line => {
      // Extract image paths using multiple patterns
      const patterns = [
        /['"`](\/images\/[^'"`]*\.(webp|jpg|jpeg|png))['"`]/gi,
        /src=["']([^"']*\/images\/[^"']*)["']/gi,
        /image: ["']([^"']*\/images\/[^"']*)["']/gi,
        /url: ["']([^"']*\/images\/[^"']*)["']/gi
      ];
      
      const fileMatch = line.match(/^([^:]+):/);
      const fileName = fileMatch ? fileMatch[1] : 'unknown';
      
      patterns.forEach(pattern => {
        const matches = line.match(pattern);
        if (matches) {
          matches.forEach(match => {
            const pathMatch = match.match(/["'`](.+?)["'`]/);
            if (pathMatch) {
              let imgPath = pathMatch[1];
              // Normalize path - should start with /images/
              if (!imgPath.startsWith('/images/')) {
                if (imgPath.startsWith('images/')) imgPath = '/' + imgPath;
                else if (imgPath.startsWith('/public/images/')) imgPath = imgPath.replace('/public', '');
                else return;
              }
              
              // Only add if it looks like an image path
              if (imgPath.match(/\.(webp|jpg|jpeg|png)$/i)) {
                if (!images.has(imgPath)) {
                  images.set(imgPath, []);
                }
                images.get(imgPath).push(fileName);
              }
            }
          });
        }
      });
    });
  } catch (error) {
    console.warn('⚠️  Error scanning codebase:', error.message);
  }
  
  return images;
}

// Main execution
function main() {
  console.log('🔍 Checking for image mismatches...\n');

  // 1. Get all actual image files
  console.log('📂 Scanning image files...');
  const actualImages = getAllImageFiles(IMAGES_DIR, IMAGES_DIR);
  const actualPaths = new Set(actualImages.map(img => img.publicPath));
  console.log(`✅ Found ${actualImages.length} image files\n`);

  // 2. Get all code references
  console.log('📖 Scanning codebase for image references...');
  const codeReferences = scanCodebaseForImages();
  console.log(`✅ Found ${codeReferences.size} unique image references\n`);

  // 3. Find mismatches
  console.log('🔍 Checking for mismatches...\n');
  
  const missing = [];
  const existing = [];
  
  codeReferences.forEach((files, imgPath) => {
    const fullPath = path.join(process.cwd(), 'public', imgPath);
    const relativePath = imgPath.replace(/^\//, '');
    
    if (fs.existsSync(fullPath)) {
      existing.push({ path: imgPath, usedIn: files });
    } else {
      // Try to find similar images
      const fileName = path.basename(imgPath);
      const dirName = path.dirname(relativePath);
      const similar = actualImages.filter(img => {
        return img.fileName === fileName || 
               img.fileName.toLowerCase() === fileName.toLowerCase() ||
               img.relativePath.includes(dirName);
      });
      
      missing.push({
        path: imgPath,
        usedIn: files,
        similar: similar.map(img => img.publicPath)
      });
    }
  });

  // 4. Find orphaned images (exist but not referenced)
  const referencedPaths = new Set(codeReferences.keys());
  const orphaned = actualImages.filter(img => !referencedPaths.has(img.publicPath));

  // 5. Generate report
  let report = `# 🔍 Image Mismatches Report\n\n`;
  report += `Generated: ${new Date().toISOString()}\n\n`;
  report += `## Summary\n\n`;
  report += `- ✅ Working: ${existing.length} images\n`;
  report += `- ❌ Missing: ${missing.length} images\n`;
  report += `- ⚠️  Orphaned: ${orphaned.length} images (exist but not referenced)\n\n`;

  if (missing.length > 0) {
    report += `## ❌ Missing Images (Referenced in code but don't exist)\n\n`;
    missing.forEach(({ path, usedIn, similar }) => {
      report += `### \`${path}\`\n`;
      report += `- **Used in:** ${usedIn.map(f => `\`${f}\``).join(', ')}\n`;
      if (similar.length > 0) {
        report += `- **Similar files found:**\n`;
        similar.forEach(sim => {
          report += `  - \`${sim}\` ✅ (maybe this one?)\n`;
        });
      } else {
        report += `- **Action:** Upload this image or update code to use an existing image\n`;
      }
      report += `\n`;
    });
  }

  if (orphaned.length > 0) {
    report += `## ⚠️  Orphaned Images (Exist but not referenced in code)\n\n`;
    orphaned.forEach(img => {
      report += `- \`${img.publicPath}\`\n`;
    });
    report += `\n`;
  }

  if (missing.length === 0 && orphaned.length === 0) {
    report += `## ✅ All Good!\n\n`;
    report += `All image references match existing files.\n`;
  }

  fs.writeFileSync(REPORT_FILE, report);
  console.log(`✅ Report saved to: ${REPORT_FILE}\n`);

  // Console summary
  console.log('📊 Summary:');
  console.log(`   ✅ Working: ${existing.length}`);
  console.log(`   ❌ Missing: ${missing.length}`);
  console.log(`   ⚠️  Orphaned: ${orphaned.length}\n`);
  
  if (missing.length > 0) {
    console.log('❌ MISSING IMAGES FOUND:\n');
    missing.forEach(({ path, usedIn, similar }) => {
      console.log(`   ${path}`);
      console.log(`   Used in: ${usedIn[0]}`);
      if (similar.length > 0) {
        console.log(`   💡 Similar file exists: ${similar[0]}`);
      }
      console.log('');
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

