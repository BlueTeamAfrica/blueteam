/**
 * IMAGE NAMING HELPER MODULE
 * 
 * Auto-generates correct filenames for new images
 * Validates naming for existing images
 * Prevents adding images with incorrect names
 * 
 * Pattern: {page-or-service}-{short-description}-{number}.webp
 */

const path = require('path');
const fs = require('fs');

/**
 * Validates if an image filename follows the blueprint pattern
 * @param {string} fileName - The filename to validate
 * @returns {boolean} - True if valid, false otherwise
 */
function validateImageName(fileName) {
  // Must be lowercase
  if (fileName !== fileName.toLowerCase()) {
    return { valid: false, reason: 'Must be lowercase' };
  }
  
  // Must end with .webp
  if (!fileName.endsWith('.webp')) {
    return { valid: false, reason: 'Must be .webp format' };
  }
  
  // Must end with -{number}.webp (no leading zeros, no v-prefix)
  if (!/-\d+\.webp$/.test(fileName)) {
    return { valid: false, reason: 'Must end with -{number}.webp (e.g., -1.webp, not -01.webp or -v01.webp)' };
  }
  
  // Must not have underscores or spaces
  if (/[_\s]/.test(fileName)) {
    return { valid: false, reason: 'Must use hyphens only, no underscores or spaces' };
  }
  
  // Must not have version prefixes like v01, v1
  if (/[vV]\d+/.test(fileName)) {
    return { valid: false, reason: 'No version prefixes allowed (remove v01, v1, etc.)' };
  }
  
  // Must have at least one hyphen before the number
  if (!/.+-\d+\.webp$/.test(fileName)) {
    return { valid: false, reason: 'Must have format: {name}-{number}.webp' };
  }
  
  return { valid: true };
}

/**
 * Normalizes a filename to match the blueprint pattern
 * @param {string} fileName - The filename to normalize
 * @returns {string} - Normalized filename
 */
function normalizeImageName(fileName) {
  // Remove extension
  let normalized = path.basename(fileName, path.extname(fileName));
  
  // Convert to lowercase
  normalized = normalized.toLowerCase();
  
  // Replace underscores and spaces with hyphens
  normalized = normalized.replace(/[_ ]+/g, '-');
  
  // Remove version prefixes (v01, v1, etc.)
  normalized = normalized.replace(/-v\d+/g, '');
  normalized = normalized.replace(/v\d+-/g, '');
  normalized = normalized.replace(/v\d+$/g, '');
  
  // Clean up multiple hyphens
  normalized = normalized.replace(/-+/g, '-');
  
  // Remove leading/trailing hyphens
  normalized = normalized.replace(/^-+|-+$/g, '');
  
  // Ensure it ends with a number (if not, add -1)
  if (!/-\d+$/.test(normalized)) {
    // Extract number if exists
    const numberMatch = normalized.match(/(\d+)$/);
    if (numberMatch) {
      const number = parseInt(numberMatch[1], 10);
      normalized = normalized.replace(/\d+$/, '') + number;
    } else {
      normalized = normalized + '-1';
    }
  } else {
    // Remove leading zeros from number
    normalized = normalized.replace(/-0+(\d+)$/, '-$1');
  }
  
  return normalized + '.webp';
}

/**
 * Generates a correct image filename for a given context
 * @param {string} pageOrService - The page or service slug (e.g., 'web-design', 'home', 'hero')
 * @param {string} description - Short description (e.g., 'hero', 'feature', 'dashboard')
 * @param {number} number - Image number (default: 1)
 * @returns {string} - Generated filename
 */
function generateImageName(pageOrService, description, number = 1) {
  const page = pageOrService.toLowerCase().replace(/[_\s]+/g, '-');
  const desc = description.toLowerCase().replace(/[_\s]+/g, '-');
  return `${page}-${desc}-${number}.webp`;
}

/**
 * Gets the correct folder path for an image based on its type
 * @param {string} pageOrService - The page or service slug
 * @param {string} category - Optional category (e.g., 'services', 'portfolio')
 * @returns {string} - Folder path relative to /public/images/
 */
function getImageFolder(pageOrService, category = null) {
  const serviceSlug = pageOrService.toLowerCase().replace(/[_\s]+/g, '-');
  
  if (category === 'services') {
    return `services/${serviceSlug}`;
  } else if (category === 'portfolio') {
    if (serviceSlug.includes('cslo')) {
      return 'portfolio/cslo-sudan';
    }
    return 'portfolio';
  } else if (category === 'home') {
    if (serviceSlug.includes('service')) {
      return 'home/services';
    } else if (serviceSlug.includes('portfolio')) {
      return 'home/portfolio';
    }
    return 'home';
  }
  
  // Default mapping
  const folderMap = {
    'hero': 'hero',
    'home': 'home',
    'about': 'about',
    'blog': 'blog',
    'portfolio': 'portfolio',
    'contact': 'contact',
    'common': 'common',
    'icons': 'icons'
  };
  
  return folderMap[serviceSlug] || serviceSlug;
}

/**
 * Ensures an image follows the blueprint pattern
 * @param {string} imagePath - Full path to the image
 * @param {string} folder - Target folder (relative to /public/images/)
 * @param {string} description - Description for the image
 * @returns {object} - Result with normalized path and status
 */
function ensureImage(imagePath, folder, description) {
  const fileName = path.basename(imagePath);
  const validation = validateImageName(fileName);
  
  if (!validation.valid) {
    // Normalize the filename
    const normalizedName = normalizeImageName(fileName);
    return {
      success: false,
      originalName: fileName,
      normalizedName: normalizedName,
      reason: validation.reason,
      suggestion: `Rename to: ${normalizedName}`
    };
  }
  
  // Generate expected name if description provided
  if (description) {
    const pageOrService = folder.split('/').pop() || folder;
    const expectedName = generateImageName(pageOrService, description, 1);
    
    if (fileName !== expectedName) {
      return {
        success: false,
        originalName: fileName,
        expectedName: expectedName,
        reason: 'Name does not match expected pattern',
        suggestion: `Rename to: ${expectedName}`
      };
    }
  }
  
  return {
    success: true,
    fileName: fileName,
    path: path.join('public/images', folder, fileName)
  };
}

/**
 * Gets the correct image path for a service page
 * @param {string} serviceSlug - Service slug (e.g., 'web-design')
 * @param {string} section - Section type (e.g., 'hero', 'feature')
 * @param {number} number - Image number (default: 1)
 * @returns {string} - Image path relative to /public
 */
function getServiceImagePath(serviceSlug, section, number = 1) {
  const fileName = generateImageName(serviceSlug, section, number);
  return `/images/services/${serviceSlug}/${fileName}`;
}

/**
 * Scans a folder for images and validates them
 * @param {string} folderPath - Path to folder (relative to /public/images/)
 * @returns {Array} - Array of validation results
 */
function validateFolderImages(folderPath) {
  const fullPath = path.join(process.cwd(), 'public/images', folderPath);
  
  if (!fs.existsSync(fullPath)) {
    return [];
  }
  
  const files = fs.readdirSync(fullPath);
  const imageFiles = files.filter(file => /\.(webp|jpg|jpeg|png)$/i.test(file));
  
  return imageFiles.map(file => {
    const validation = validateImageName(file);
    return {
      fileName: file,
      valid: validation.valid,
      reason: validation.reason || null,
      normalizedName: validation.valid ? null : normalizeImageName(file)
    };
  });
}

module.exports = {
  validateImageName,
  normalizeImageName,
  generateImageName,
  getImageFolder,
  ensureImage,
  getServiceImagePath,
  validateFolderImages
};

