/**
 * Fix Service Folders - Consolidate duplicate folders and preserve hyphens
 */

const fs = require('fs');
const path = require('path');

const IMAGES_ROOT = path.join(process.cwd(), 'public/images/services');

// Folder mappings: folder without hyphens -> folder with hyphens
const FOLDER_MAP = {
  'mobileapps': 'mobile-apps',
  'websitedevelopment': 'website-development',
  'webdesign': 'web-design',
  'customsystems': 'custom-systems',
  'erpcrm': 'erp-crm',
  'uiux': 'ui-ux',
};

function fixFolders() {
  console.log('🔧 Fixing service folder structure...\n');
  
  const folders = fs.readdirSync(IMAGES_ROOT, { withFileTypes: true });
  const fixes = [];
  
  for (const folder of folders) {
    if (!folder.isDirectory()) continue;
    
    const folderName = folder.name;
    const targetName = FOLDER_MAP[folderName];
    
    if (targetName) {
      const sourcePath = path.join(IMAGES_ROOT, folderName);
      const targetPath = path.join(IMAGES_ROOT, targetName);
      
      // Check if target already exists
      if (fs.existsSync(targetPath)) {
        console.log(`   ⚠️  Target ${targetName}/ already exists, merging...`);
        
        // Move files from source to target
        const files = fs.readdirSync(sourcePath);
        for (const file of files) {
          const sourceFile = path.join(sourcePath, file);
          const targetFile = path.join(targetPath, file);
          
          if (fs.existsSync(targetFile)) {
            console.log(`      ⚠️  ${file} already exists in target, skipping`);
          } else {
            fs.renameSync(sourceFile, targetFile);
            console.log(`      ✓ Moved ${file}`);
          }
        }
        
        // Remove source folder if empty
        if (fs.readdirSync(sourcePath).length === 0) {
          fs.rmdirSync(sourcePath);
          console.log(`   ✓ Removed empty ${folderName}/ folder`);
        }
      } else {
        // Rename folder
        fs.renameSync(sourcePath, targetPath);
        console.log(`   ✓ Renamed ${folderName}/ → ${targetName}/`);
      }
      
      fixes.push({
        old: folderName,
        new: targetName,
        oldPath: `/images/services/${folderName}`,
        newPath: `/images/services/${targetName}`,
      });
    }
  }
  
  console.log(`\n   ✅ Fixed ${fixes.length} folders\n`);
  
  // Update file references
  console.log('📝 Updating file references...');
  updateReferences(fixes);
  console.log('   ✅ References updated\n');
  
  return fixes;
}

function updateReferences(fixes) {
  const codeExtensions = ['.tsx', '.ts', '.jsx', '.js', '.json'];
  const searchDir = process.cwd();
  let updateCount = 0;
  
  function searchFiles(dir) {
    const files = fs.readdirSync(dir);
    
    for (const file of files) {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (file === 'node_modules' || file === '.next' || file === '.git' || file === 'reports' || file === 'scripts') {
        continue;
      }
      
      if (stat.isDirectory()) {
        searchFiles(filePath);
      } else if (codeExtensions.includes(path.extname(file))) {
        let content = fs.readFileSync(filePath, 'utf8');
        let modified = false;
        
        for (const fix of fixes) {
          const patterns = [
            new RegExp(fix.oldPath.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'),
            new RegExp(`["']${fix.oldPath.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}["']`, 'g'),
          ];
          
          for (const pattern of patterns) {
            if (pattern.test(content)) {
              content = content.replace(pattern, (match) => {
                return match.replace(fix.oldPath, fix.newPath);
              });
              modified = true;
            }
          }
        }
        
        if (modified) {
          fs.writeFileSync(filePath, content, 'utf8');
          updateCount++;
        }
      }
    }
  }
  
  searchFiles(searchDir);
  console.log(`   Updated ${updateCount} files`);
}

// Run
try {
  fixFolders();
  console.log('✨ Folder fix complete!\n');
} catch (error) {
  console.error('❌ Error:', error);
  process.exit(1);
}

