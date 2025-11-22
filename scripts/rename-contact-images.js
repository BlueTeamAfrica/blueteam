#!/usr/bin/env node

/**
 * RENAME CONTACT IMAGES
 * 
 * Renames images in /public/images/contact/ to follow:
 * contact-[descriptive-keyword]-01.webp
 */

const fs = require('fs');
const path = require('path');

const CONTACT_DIR = path.join(process.cwd(), 'public/images/contact');

// Mapping of current names to descriptive names
const RENAME_MAP = [
  { from: 'about-founder-02.webp', to: 'contact-hero-01.webp' },
  { from: 'about-founder-03.webp', to: 'contact-office-01.webp' },
  { from: 'about-founder-04.webp', to: 'contact-office-02.webp' },
  { from: 'about-founder-05.webp', to: 'contact-support-01.webp' },
  { from: 'about-founder-06.webp', to: 'contact-support-02.webp' },
  { from: 'about-founder-07.webp', to: 'contact-team-01.webp' },
  { from: 'about-founder-08.webp', to: 'contact-team-02.webp' },
];

function main() {
  console.log('🔄 Renaming Contact page images...\n');
  
  const renames = [];
  const errors = [];
  
  RENAME_MAP.forEach(({ from, to }) => {
    const fromPath = path.join(CONTACT_DIR, from);
    const toPath = path.join(CONTACT_DIR, to);
    
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

