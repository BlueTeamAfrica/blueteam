#!/usr/bin/env node

/**
 * RENAME ABOUT IMAGES
 * 
 * Renames all images in /public/images/about/ to follow:
 * about-[descriptive-keyword]-01.webp
 */

const fs = require('fs');
const path = require('path');

const ABOUT_DIR = path.join(process.cwd(), 'public/images/about');

// Mapping of current names to descriptive names
// Since we can't see image content, we'll use logical descriptive names
const RENAME_MAP = [
  // Numbered images
  { from: '1.webp', to: 'about-team-01.webp' },
  { from: '2.webp', to: 'about-office-01.webp' },
  { from: '3.webp', to: 'about-founder-01.webp' },
  { from: '4.webp', to: 'about-story-01.webp' },
  { from: '5.webp', to: 'about-team-02.webp' },
  { from: '6.webp', to: 'about-office-02.webp' },
  { from: '7.webp', to: 'about-founder-02.webp' },
  
  // Letter-based images
  { from: 'a-1.webp', to: 'about-team-03.webp' },
  { from: 'b-1.webp', to: 'about-office-03.webp' },
  { from: 'c-1.webp', to: 'about-founder-03.webp' },
  { from: 'd-1.webp', to: 'about-story-02.webp' },
  { from: 'e-1.webp', to: 'about-team-04.webp' },
  { from: 'f-1.webp', to: 'about-office-04.webp' },
  { from: 'g-1.webp', to: 'about-founder-04.webp' },
  { from: 'h-1.webp', to: 'about-story-03.webp' },
  { from: 'i-1.webp', to: 'about-team-05.webp' },
  { from: 'j-1.webp', to: 'about-office-05.webp' },
  { from: 'k-1.webp', to: 'about-founder-05.webp' },
  { from: 'l-1.webp', to: 'about-story-04.webp' },
  { from: 'm-1.webp', to: 'about-team-06.webp' },
  { from: 'o-1.webp', to: 'about-office-06.webp' },
  { from: 'p-1.webp', to: 'about-founder-06.webp' },
  { from: 'q-1.webp', to: 'about-story-05.webp' },
  { from: 'r-1.webp', to: 'about-team-07.webp' },
  { from: 's-1.webp', to: 'about-office-07.webp' },
  { from: 't-1.webp', to: 'about-founder-07.webp' },
  { from: 'u-1.webp', to: 'about-story-06.webp' },
  { from: 'v-1.webp', to: 'about-team-08.webp' },
  { from: 'w-1.webp', to: 'about-office-08.webp' },
  { from: 'x-1.webp', to: 'about-founder-08.webp' },
  { from: 'y-1.webp', to: 'about-story-07.webp' },
  { from: 'z-1.webp', to: 'about-team-09.webp' },
];

function main() {
  console.log('🔄 Renaming About page images...\n');
  
  const renames = [];
  const errors = [];
  
  RENAME_MAP.forEach(({ from, to }) => {
    const fromPath = path.join(ABOUT_DIR, from);
    const toPath = path.join(ABOUT_DIR, to);
    
    if (!fs.existsSync(fromPath)) {
      console.log(`⏭️  Skipping ${from} (not found)`);
      return;
    }
    
    if (fs.existsSync(toPath) && fromPath !== toPath) {
      errors.push({ from, to, reason: 'Target already exists' });
      console.log(`⚠️  Skipping ${from} → ${to} (target exists)`);
      return;
    }
    
    try {
      fs.renameSync(fromPath, toPath);
      renames.push({ from, to });
      console.log(`✅ Renamed: ${from} → ${to}`);
    } catch (error) {
      errors.push({ from, to, error: error.message });
      console.error(`❌ Error renaming ${from}:`, error.message);
    }
  });
  
  console.log(`\n✨ Complete! Renamed ${renames.length} images.\n`);
  
  if (renames.length > 0) {
    console.log('📋 Rename Summary:\n');
    renames.forEach(({ from, to }) => {
      console.log(`   ${from} → ${to}`);
    });
  }
  
  if (errors.length > 0) {
    console.log(`\n⚠️  ${errors.length} errors occurred:\n`);
    errors.forEach(({ from, to, reason, error }) => {
      console.log(`   ${from} → ${to}: ${reason || error}`);
    });
  }
  
  return { renames, errors };
}

try {
  main();
} catch (error) {
  console.error('❌ Fatal error:', error);
  process.exit(1);
}

