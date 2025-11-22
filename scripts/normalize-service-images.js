#!/usr/bin/env node

/**
 * Script to normalize all service page images to follow naming convention:
 * service-slug_section-description_unique-number.ext
 * 
 * Usage: node scripts/normalize-service-images.js
 */

const { existsSync, mkdirSync, readdirSync, renameSync, statSync } = require('fs')
const { join } = require('path')

const SERVICES_DIR = join(process.cwd(), 'public', 'images', 'services')
const SERVICE_FOLDERS = {
  'web-design': 'web-design',
  'website-development': 'web-development',
  'hosting': 'hosting',
  'cybersecurity': 'cybersecurity',
  'mobile-apps': 'mobile-apps',
  'ecommerce': 'ecommerce',
  'erp': 'erp',
  'crm': 'crm',
  'branding': 'branding',
  'ui-ux': 'ui-ux',
  'maintenance': 'maintenance',
  'custom-systems': 'custom-systems',
}

function isValidImageName(filename, serviceSlug) {
  if (!/\.(webp|jpg|jpeg|png|gif|svg)$/i.test(filename)) return false
  if (filename.startsWith('.') || filename === '.DS_Store') return false
  
  const expectedPattern = new RegExp(`^${serviceSlug}_.+_\\d+\\.(webp|jpg|jpeg|png|gif|svg)$`, 'i')
  return expectedPattern.test(filename)
}

function normalizeImageName(filename, serviceSlug) {
  // Remove version suffixes
  let normalized = filename.replace(/[-_]v\d+\./i, '.')
  const ext = normalized.split('.').pop() || 'webp'
  const nameWithoutExt = normalized.substring(0, normalized.lastIndexOf('.'))
  
  // If already valid, return as-is
  if (isValidImageName(normalized, serviceSlug)) {
    return normalized
  }
  
  // Try to extract section from existing name
  const parts = nameWithoutExt.split(/[-_]/)
  
  // Find service slug in parts
  let sectionParts = []
  let foundSlug = false
  
  for (let i = 0; i < parts.length; i++) {
    if (parts[i].toLowerCase().includes(serviceSlug.replace(/-/g, ''))) {
      foundSlug = true
      continue
    }
    if (foundSlug) {
      sectionParts.push(parts[i])
    }
  }
  
  // Determine section type
  let section = 'hero-background'
  if (sectionParts.length > 0) {
    const combined = sectionParts.join('-')
    // Common sections
    if (combined.includes('feature') || combined.includes('layout') || combined.includes('sample')) {
      section = combined.replace(/[-_]feature|[-_]layout|[-_]sample/g, '').replace(/^[-_]+|[-_]+$/g, '') || 'hero-background'
    } else if (combined.includes('hero') || combined.includes('banner')) {
      section = 'hero-background'
    } else if (combined.includes('dashboard') || combined.includes('admin')) {
      section = 'dashboard-sample'
    } else if (combined.includes('protection') || combined.includes('security')) {
      section = 'security-feature'
    } else {
      section = combined || 'hero-background'
    }
  }
  
  // Clean section name
  section = section.replace(/[^a-z0-9-]/gi, '-').replace(/-+/g, '-').toLowerCase()
  
  return `${serviceSlug}_${section}_01.${ext}`
}

function processServiceFolder(serviceSlug, folderName) {
  const folderPath = join(SERVICES_DIR, folderName)
  
  // Create folder if it doesn't exist
  if (!existsSync(folderPath)) {
    mkdirSync(folderPath, { recursive: true })
    console.log(`✅ Created folder: ${folderName}`)
    return
  }
  
  const files = readdirSync(folderPath).filter(file => {
    return /\.(webp|jpg|jpeg|png|gif|svg)$/i.test(file) && 
           !file.startsWith('.') && 
           file !== '.DS_Store'
  })
  
  if (files.length === 0) {
    console.log(`⚠️  No images in: ${folderName}`)
    return
  }
  
  console.log(`\n📁 Processing: ${folderName} (${files.length} image(s))`)
  
  // Track renamed files to avoid duplicates
  const renamedFiles = new Set()
  let counter = 1
  
  for (const file of files) {
    if (isValidImageName(file, serviceSlug)) {
      console.log(`   ✓ ${file} (already correct)`)
      continue
    }
    
    const oldPath = join(folderPath, file)
    let newName = normalizeImageName(file, serviceSlug)
    
    // Handle duplicates
    while (renamedFiles.has(newName) || existsSync(join(folderPath, newName))) {
      counter++
      const ext = newName.split('.').pop()
      const baseName = newName.substring(0, newName.lastIndexOf('_'))
      newName = `${baseName}_${String(counter).padStart(2, '0')}.${ext}`
    }
    
    const newPath = join(folderPath, newName)
    
    try {
      renameSync(oldPath, newPath)
      renamedFiles.add(newName)
      console.log(`   🔄 ${file} → ${newName}`)
    } catch (error) {
      console.error(`   ❌ Error renaming ${file}:`, error.message)
    }
  }
}

// Main execution
console.log('🚀 Normalizing service page images...\n')

// Process all service folders
for (const [serviceSlug, folderName] of Object.entries(SERVICE_FOLDERS)) {
  processServiceFolder(serviceSlug, folderName)
}

console.log('\n✅ Done! All images have been normalized.')

