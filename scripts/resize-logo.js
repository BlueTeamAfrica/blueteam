#!/usr/bin/env node

/**
 * Resize Logo Script
 * Resizes the logo to optimal dimensions for Header and Footer
 * 
 * Usage: node scripts/resize-logo.js
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const LOGO_INPUT = 'public/images/logo/logo.webp';
const LOGO_OUTPUT = 'public/images/logo/logo.webp'; // Overwrite original

async function resizeLogo() {
  try {
    console.log('🖼️  Resizing logo...\n');
    
    // Check if logo exists
    if (!fs.existsSync(LOGO_INPUT)) {
      console.error(`❌ Logo not found: ${LOGO_INPUT}`);
      console.log('\nPlease ensure your logo file exists at: public/images/logo/logo.webp');
      process.exit(1);
    }
    
    // Get original image info
    const metadata = await sharp(LOGO_INPUT).metadata();
    console.log(`Original size: ${metadata.width}x${metadata.height}px`);
    
    // Resize to 120x120px (covers all sizes at 2x-3x for retina displays)
    // This will work perfectly for:
    // - Header: 40px display (3x = 120px source)
    // - Footer: 48px display (2.5x = 120px source)
    await sharp(LOGO_INPUT)
      .resize(120, 120, {
        fit: 'contain', // Maintains aspect ratio, fits within 120x120
        background: { r: 0, g: 0, b: 0, alpha: 0 } // Transparent background
      })
      .webp({ 
        quality: 90, // High quality for logo
        effort: 6 // Higher compression effort
      })
      .toFile(LOGO_OUTPUT);
    
    // Check output size
    const stats = fs.statSync(LOGO_OUTPUT);
    const sizeKB = (stats.size / 1024).toFixed(2);
    
    console.log(`✅ Logo resized successfully!`);
    console.log(`   Output: ${LOGO_OUTPUT}`);
    console.log(`   Size: 120x120px (optimized for retina displays)`);
    console.log(`   File size: ${sizeKB} KB`);
    console.log(`\n✨ Your logo is now ready to use!`);
    console.log(`   It will display at:`);
    console.log(`   - Header: 40px × 40px`);
    console.log(`   - Footer: 48px × 48px`);
    console.log(`   - Both will look crisp on retina displays`);
    
  } catch (error) {
    console.error('❌ Error resizing logo:', error.message);
    process.exit(1);
  }
}

// Check if sharp is installed
try {
  require.resolve('sharp');
} catch (e) {
  console.error('❌ Error: sharp is not installed.');
  console.error('Please run: npm install sharp');
  process.exit(1);
}

resizeLogo().catch(console.error);
