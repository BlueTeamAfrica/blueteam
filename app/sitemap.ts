import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://blueteamafrica.com'

  // Core pages
  const routes = [
    '',
    '/about',
    '/contact',
    '/portfolio',
    '/blog',
    '/faq',
  ]

  // Location pages
  const locations = [
    '/locations/rwanda',
  ]

  // Service pages - All actual service pages
  const services = [
    'web-design',
    'website-development',
    'hosting',
    'mobile-apps',
    'erp',
    'crm',
    'cybersecurity',
    'ecommerce',
    'custom-systems',
    'maintenance',
    'branding',
    'ui-ux',
  ]

  // Portfolio items - All actual portfolio projects
  const portfolioItems = [
    'cslo-sudan',
    'ngo-portal',
    'erp-integration',
    'ecommerce-shop',
    'mobile-app',
    'crm-system',
    'cloud-migration',
  ]

  // Blog posts - All actual blog posts
  const blogPosts = [
    'how-to-choose-the-right-website-for-your-ngo',
    'why-hosting-speed-matters-in-africa',
    'erp-for-african-smes-a-complete-guide',
  ]

  const sitemapEntries: MetadataRoute.Sitemap = []

  // Add core pages
  routes.forEach((route) => {
    sitemapEntries.push({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: route === '' ? 'weekly' : 'monthly',
      priority: route === '' ? 1 : 0.8,
    })
  })

  // Add location pages
  locations.forEach((location) => {
    sitemapEntries.push({
      url: `${baseUrl}${location}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.85,
    })
  })

  // Add service pages
  services.forEach((service) => {
    sitemapEntries.push({
      url: `${baseUrl}/services/${service}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    })
  })

  // Add portfolio items
  portfolioItems.forEach((item) => {
    sitemapEntries.push({
      url: `${baseUrl}/portfolio/${item}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.85,
    })
  })

  // Add blog posts
  blogPosts.forEach((slug) => {
    sitemapEntries.push({
      url: `${baseUrl}/blog/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    })
  })

  return sitemapEntries
}

