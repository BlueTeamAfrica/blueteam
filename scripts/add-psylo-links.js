#!/usr/bin/env node

/**
 * ADD PSYLO LINKS SCRIPT
 * 
 * Automatically adds PsyloLinks component to all pages
 */

const fs = require('fs');
const path = require('path');

const PAGES_DIR = path.join(process.cwd(), 'app');
const COMPONENTS_DIR = path.join(process.cwd(), 'components');

// Files to process
const filesToUpdate = [
  'app/page.tsx',
  'app/services/web-design/page.tsx',
  'app/services/website-development/page.tsx',
  'app/services/cybersecurity/page.tsx',
  'app/services/ecommerce/page.tsx',
  'app/services/mobile-apps/page.tsx',
  'app/services/erp/page.tsx',
  'app/services/crm/page.tsx',
  'app/services/hosting/page.tsx',
  'app/services/ui-ux/page.tsx',
  'app/services/branding/page.tsx',
  'app/services/maintenance/page.tsx',
  'app/services/custom-systems/page.tsx',
];

function addPsyloLinks(filePath) {
  const fullPath = path.join(process.cwd(), filePath);
  
  if (!fs.existsSync(fullPath)) {
    console.log(`⏭️  Skipping ${filePath} (not found)`);
    return false;
  }
  
  let content = fs.readFileSync(fullPath, 'utf-8');
  let modified = false;
  
  // Check if PsyloLinks is already imported
  if (!content.includes("PsyloLinks")) {
    // Add import
    const importPattern = /import (.+?) from ['"]@\/components\/(.+?)['"]/;
    const lastImportMatch = content.match(/import .+? from ['"]@\/components\/.+?['"];?\s*\n/g);
    
    if (lastImportMatch) {
      const lastImport = lastImportMatch[lastImportMatch.length - 1];
      const insertPosition = content.indexOf(lastImport) + lastImport.length;
      const newImport = "import PsyloLinks from '@/components/seo/PsyloLinks'\n";
      
      if (!content.includes(newImport.trim())) {
        content = content.slice(0, insertPosition) + newImport + content.slice(insertPosition);
        modified = true;
      }
    }
  }
  
  // Check if PsyloLinks is already added at the end
  if (!content.includes('<PsyloLinks')) {
    // Find the closing tags
    const closingTags = content.match(/<\/div>\s*<\/>\s*\)\s*}\s*$/m);
    if (closingTags) {
      const insertPosition = content.lastIndexOf('</>');
      if (insertPosition > 0) {
        const psyloBlock = '\n      \n      {/* Psylo Links for SEO */}\n      <PsyloLinks />\n';
        content = content.slice(0, insertPosition) + psyloBlock + content.slice(insertPosition);
        modified = true;
      }
    }
  }
  
  if (modified) {
    fs.writeFileSync(fullPath, content, 'utf-8');
    console.log(`✅ Updated: ${filePath}`);
    return true;
  } else {
    console.log(`⏭️  Skipped: ${filePath} (already has PsyloLinks)`);
    return false;
  }
}

// Main execution
function main() {
  console.log('🔗 Adding PsyloLinks to all pages...\n');
  
  let updated = 0;
  filesToUpdate.forEach(file => {
    if (addPsyloLinks(file)) {
      updated++;
    }
  });
  
  console.log(`\n✨ Complete! Updated ${updated} files.\n`);
}

try {
  main();
} catch (error) {
  console.error('❌ Fatal error:', error);
  process.exit(1);
}

