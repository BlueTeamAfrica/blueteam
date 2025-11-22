import { existsSync, mkdirSync, readdirSync, renameSync, statSync } from 'fs'
import { join } from 'path'

/**
 * Service slug to folder name mapping
 */
export const SERVICE_FOLDER_MAP: Record<string, string> = {
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

/**
 * Check if image name follows naming convention:
 * service-slug_section-description_unique-number.ext
 */
export function isValidImageName(filename: string, serviceSlug: string): boolean {
  // Skip non-image files
  if (!/\.(webp|jpg|jpeg|png|gif|svg)$/i.test(filename)) {
    return false
  }

  // Skip system files
  if (filename.startsWith('.') || filename === '.DS_Store') {
    return false
  }

  // Check if it starts with service-slug_ and has _ section separator
  const slugPattern = serviceSlug.replace(/-/g, '-')
  const expectedPattern = new RegExp(`^${slugPattern}_.+_\\d+\\.(webp|jpg|jpeg|png|gif|svg)$`, 'i')
  
  return expectedPattern.test(filename)
}

/**
 * Rename image to follow naming convention
 */
export function renameImageToConvention(
  oldPath: string,
  serviceSlug: string,
  section: string = 'hero-background',
  number: number = 1
): string {
  const ext = oldPath.split('.').pop() || 'webp'
  const newName = `${serviceSlug}_${section}_${String(number).padStart(2, '0')}.${ext}`
  const dir = oldPath.substring(0, oldPath.lastIndexOf('/'))
  return `${dir}/${newName}`
}

/**
 * Get service folder name from slug
 */
export function getServiceFolder(serviceSlug: string): string {
  return SERVICE_FOLDER_MAP[serviceSlug] || serviceSlug
}

/**
 * Ensure service image folder exists and return path
 */
export function ensureServiceImageFolder(serviceSlug: string): string {
  const folderName = getServiceFolder(serviceSlug)
  const folderPath = join(process.cwd(), 'public', 'images', 'services', folderName)
  
  if (!existsSync(folderPath)) {
    mkdirSync(folderPath, { recursive: true })
    console.log(`✅ Created folder: ${folderPath}`)
  }
  
  return folderPath
}

/**
 * Get first hero image from service folder
 * Returns null if no image found
 */
export function getHeroImagePath(serviceSlug: string): string | null {
  const folderName = getServiceFolder(serviceSlug)
  const folderPath = join(process.cwd(), 'public', 'images', 'services', folderName)
  
  if (!existsSync(folderPath)) {
    return null
  }
  
  const files = readdirSync(folderPath).filter(file => {
    // Filter image files only
    return /\.(webp|jpg|jpeg|png|gif|svg)$/i.test(file) && 
           !file.startsWith('.') && 
           file !== '.DS_Store'
  })
  
  if (files.length === 0) {
    return null
  }
  
  // Prefer hero-background images
  const heroImages = files.filter(file => file.includes('hero-background'))
  if (heroImages.length > 0) {
    return `/images/services/${folderName}/${heroImages[0]}`
  }
  
  // Otherwise return first image
  return `/images/services/${folderName}/${files[0]}`
}

/**
 * Normalize image filename to follow naming convention
 * This is a helper for manual renaming if needed
 */
export function normalizeImageName(filename: string, serviceSlug: string): string {
  // Remove version suffixes like -v01, -v1, _v01
  let normalized = filename.replace(/[-_]v\d+\./i, '.')
  
  // Extract extension
  const ext = normalized.split('.').pop() || 'webp'
  const nameWithoutExt = normalized.substring(0, normalized.lastIndexOf('.'))
  
  // Check if already follows convention
  if (isValidImageName(normalized, serviceSlug)) {
    return normalized
  }
  
  // Try to extract section name (between last - and extension)
  const parts = nameWithoutExt.split(/[-_]/)
  const slugIndex = parts.findIndex(p => p === serviceSlug || p.includes(serviceSlug))
  
  if (slugIndex >= 0 && parts.length > slugIndex + 1) {
    // Has section info, rebuild
    const section = parts.slice(slugIndex + 1).join('-')
    return `${serviceSlug}_${section}_01.${ext}`
  }
  
  // Default to hero-background
  return `${serviceSlug}_hero-background_01.${ext}`
}

