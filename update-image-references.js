#!/usr/bin/env node

/**
 * Update Image References Script
 * Updates all code references from .jpg to .webp after conversion
 * 
 * Usage: node update-image-references.js
 */

const fs = require('fs');
const path = require('path');

// Files to update and their replacements
const updates = [
  // Blog page - already fixed manually
  // {
  //   file: 'app/blog/page.tsx',
  //   replacements: [
  //     {
  //       from: '/images/blog/blog-post-thumbnail-2-v01.jpg',
  //       to: '/images/blog/blog-post-thumbnail-2-v01.webp'
  //     }
  //   ]
  // }
];

function updateFile(fileConfig) {
  const filePath = fileConfig.file;
  
  try {
    if (!fs.existsSync(filePath)) {
      console.log(`⚠️  File not found: ${filePath}`);
      return;
    }
    
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    for (const replacement of fileConfig.replacements) {
      if (content.includes(replacement.from)) {
        content = content.replace(new RegExp(replacement.from, 'g'), replacement.to);
        modified = true;
        console.log(`  ✅ Updated: ${replacement.from} → ${replacement.to}`);
      }
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Updated file: ${filePath}\n`);
    } else {
      console.log(`ℹ️  No changes needed in: ${filePath}\n`);
    }
    
  } catch (error) {
    console.error(`❌ Error updating ${filePath}:`, error.message);
  }
}

function scanForJpgReferences() {
  console.log('🔍 Scanning for remaining .jpg references...\n');
  
  const extensions = ['.tsx', '.ts', '.jsx', '.js'];
  const dirsToScan = ['app', 'components'];
  
  const jpgPattern = /\/images\/[^'"]+\.jpg/g;
  let foundReferences = [];
  
  function scanDirectory(dir) {
    const items = fs.readdirSync(dir, { withFileTypes: true });
    
    for (const item of items) {
      const fullPath = path.join(dir, item.name);
      
      if (item.isDirectory() && !item.name.startsWith('.') && item.name !== 'node_modules') {
        scanDirectory(fullPath);
      } else if (item.isFile() && extensions.includes(path.extname(item.name))) {
        const content = fs.readFileSync(fullPath, 'utf8');
        const matches = content.match(jpgPattern);
        
        if (matches) {
          foundReferences.push({
            file: fullPath,
            references: [...new Set(matches)]
          });
        }
      }
    }
  }
  
  for (const dir of dirsToScan) {
    if (fs.existsSync(dir)) {
      scanDirectory(dir);
    }
  }
  
  if (foundReferences.length > 0) {
    console.log('⚠️  Found .jpg references that need updating:\n');
    for (const ref of foundReferences) {
      console.log(`📄 ${ref.file}`);
      for (const img of ref.references) {
        console.log(`   - ${img}`);
      }
      console.log('');
    }
  } else {
    console.log('✅ No .jpg references found in code!\n');
  }
  
  return foundReferences;
}

function main() {
  console.log('🚀 Starting image reference updates...\n');
  
  // Apply known updates
  if (updates.length > 0) {
    console.log('📝 Applying known updates...\n');
    for (const fileConfig of updates) {
      updateFile(fileConfig);
    }
  }
  
  // Scan for any remaining .jpg references
  const remaining = scanForJpgReferences();
  
  if (remaining.length === 0) {
    console.log('✅ All image references updated successfully!');
  } else {
    console.log('⚠️  Please review and manually update the remaining references.');
  }
}

main();

