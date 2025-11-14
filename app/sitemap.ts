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
    '/solutions',
    '/solutions/foundational',
    '/solutions/growth',
    '/solutions/enterprise',
  ]

  // Service pages
  const services = [
    'web-design',
    'web-development',
    'hosting',
    'app-development',
    'saas',
    'cloud',
    'erp',
    'crm',
    'cybersecurity',
  ]

  // Location pages
  const locations = ['uganda', 'kenya', 'rwanda']
  const locationServices = ['web-design'] // Can be expanded

  // Blog posts
  const blogPosts = [
    'seo-website-design-best-practices',
    'web-design-services-what-to-look-for',
    'best-web-design-practices-uganda',
    'web-development-trends-east-africa',
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

  // Add service pages
  services.forEach((service) => {
    sitemapEntries.push({
      url: `${baseUrl}/services/${service}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    })
  })

  // Add location-specific pages
  locations.forEach((location) => {
    locationServices.forEach((service) => {
      sitemapEntries.push({
        url: `${baseUrl}/${location}/${service}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.85,
      })
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

