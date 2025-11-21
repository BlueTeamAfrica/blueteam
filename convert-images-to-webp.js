#!/usr/bin/env node

/**
 * Image Optimization Script
 * Converts JPG/PNG images to WebP format with proper compression
 * 
 * Requirements: npm install sharp
 * Usage: node convert-images-to-webp.js
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Images to convert
const imagesToConvert = [
  // Blog images
  {
    input: 'public/images/blog/blog-post-thumbnail-2-v01.jpg',
    output: 'public/images/blog/blog-post-thumbnail-2-v01.webp',
    width: 800,
    quality: 85
  },
  
  // About/Team images
  {
    input: 'public/images/about/about-team-member-1-v01.jpg',
    output: 'public/images/about/about-team-member-1-v01.webp',
    width: 400,
    quality: 85
  },
  {
    input: 'public/images/about/about-team-member-3-v01.jpg',
    output: 'public/images/about/about-team-member-3-v01.webp',
    width: 400,
    quality: 85
  },
  {
    input: 'public/images/about/about-team-member-11-v01.jpg',
    output: 'public/images/about/about-team-member-11-v01.webp',
    width: 400,
    quality: 85
  },
  {
    input: 'public/images/about/about-team-member-12-v01.jpg',
    output: 'public/images/about/about-team-member-12-v01.webp',
    width: 400,
    quality: 85
  },
  {
    input: 'public/images/about/about-team-member-13-v01.jpg',
    output: 'public/images/about/about-team-member-13-v01.webp',
    width: 400,
    quality: 85
  },
  
  // Portfolio mockup
  {
    input: 'public/images/home/portfolio/portfolio-mockup-ngo-portal-v01.jpg',
    output: 'public/images/home/portfolio/portfolio-mockup-ngo-portal-v01.webp',
    width: 1200,
    quality: 85
  }
];

// Images to move to _legacy (unused service process images)
const imagesToArchive = [
  'public/images/services/services-feature-process-14-v01.jpg',
  'public/images/services/services-feature-process-15-v01.jpg',
  'public/images/services/services-feature-process-16-v01.jpg',
  'public/images/services/services-feature-process-17-v01.jpg',
  'public/images/services/services-feature-process-18-v01.jpg',
  'public/images/services/services-feature-process-19-v01.jpg',
  'public/images/services/services-feature-process-20-v01.jpg',
  'public/images/services/services-feature-process-21-v01.jpg',
  'public/images/services/services-feature-process-22-v01.jpg',
  'public/images/services/services-feature-process-23-v01.jpg',
  'public/images/services/services-feature-process-24-v01.jpg',
  'public/images/services/services-feature-process-25-v01.jpg',
  'public/images/services/services-feature-process-26-v01.jpg',
];

async function convertImage(config) {
  try {
    console.log(`Converting: ${config.input}`);
    
    // Check if input exists
    if (!fs.existsSync(config.input)) {
      console.log(`  ⚠️  Input file not found: ${config.input}`);
      return;
    }
    
    // Convert to WebP
    await sharp(config.input)
      .resize(config.width, null, {
        fit: 'inside',
        withoutEnlargement: true
      })
      .webp({ quality: config.quality })
      .toFile(config.output);
    
    // Check output size
    const stats = fs.statSync(config.output);
    const sizeKB = (stats.size / 1024).toFixed(2);
    
    console.log(`  ✅ Created: ${config.output} (${sizeKB} KB)`);
    
    if (stats.size > 300 * 1024) {
      console.log(`  ⚠️  Warning: File size exceeds 300KB`);
    }
    
    // Move original to _legacy
    const legacyDir = path.join(path.dirname(config.input), '_legacy');
    if (!fs.existsSync(legacyDir)) {
      fs.mkdirSync(legacyDir, { recursive: true });
    }
    
    const legacyPath = path.join(legacyDir, path.basename(config.input));
    fs.renameSync(config.input, legacyPath);
    console.log(`  📦 Moved original to: ${legacyPath}`);
    
  } catch (error) {
    console.error(`  ❌ Error converting ${config.input}:`, error.message);
  }
}

async function archiveImage(imagePath) {
  try {
    if (!fs.existsSync(imagePath)) {
      console.log(`  ⚠️  File not found: ${imagePath}`);
      return;
    }
    
    const legacyDir = path.join(path.dirname(imagePath), '_legacy');
    if (!fs.existsSync(legacyDir)) {
      fs.mkdirSync(legacyDir, { recursive: true });
    }
    
    const legacyPath = path.join(legacyDir, path.basename(imagePath));
    fs.renameSync(imagePath, legacyPath);
    console.log(`  📦 Archived: ${imagePath} → ${legacyPath}`);
    
  } catch (error) {
    console.error(`  ❌ Error archiving ${imagePath}:`, error.message);
  }
}

async function main() {
  console.log('🚀 Starting image optimization...\n');
  
  // Check if sharp is installed
  try {
    require.resolve('sharp');
  } catch (e) {
    console.error('❌ Error: sharp is not installed.');
    console.error('Please run: npm install sharp');
    process.exit(1);
  }
  
  // Convert images
  console.log('📸 Converting images to WebP...\n');
  for (const config of imagesToConvert) {
    await convertImage(config);
  }
  
  // Archive unused images
  console.log('\n📦 Archiving unused images...\n');
  for (const imagePath of imagesToArchive) {
    await archiveImage(imagePath);
  }
  
  console.log('\n✅ Image optimization complete!');
  console.log('\nNext steps:');
  console.log('1. Review the converted images');
  console.log('2. Run: node update-image-references.js');
  console.log('3. Test the site to ensure all images load correctly');
}

main().catch(console.error);

