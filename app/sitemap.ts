import type { MetadataRoute } from 'next'

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.blueteamafrica.com'

const staticRoutes: MetadataRoute.Sitemap = [
  { url: `${BASE_URL}/`, changeFrequency: 'weekly', priority: 1.0, lastModified: new Date('2026-07-08') },
  { url: `${BASE_URL}/services`, changeFrequency: 'weekly', priority: 0.9 },
  { url: `${BASE_URL}/services/cybersecurity`, changeFrequency: 'monthly', priority: 0.85 },
  { url: `${BASE_URL}/services/web-design`, changeFrequency: 'monthly', priority: 0.85 },
  { url: `${BASE_URL}/services/website-development`, changeFrequency: 'monthly', priority: 0.85 },
  { url: `${BASE_URL}/services/hosting`, changeFrequency: 'monthly', priority: 0.8 },
  { url: `${BASE_URL}/services/branding`, changeFrequency: 'monthly', priority: 0.8 },
  { url: `${BASE_URL}/services/ecommerce`, changeFrequency: 'monthly', priority: 0.8 },
  { url: `${BASE_URL}/services/erp`, changeFrequency: 'monthly', priority: 0.8 },
  { url: `${BASE_URL}/services/crm`, changeFrequency: 'monthly', priority: 0.8 },
  { url: `${BASE_URL}/services/mobile-apps`, changeFrequency: 'monthly', priority: 0.8 },
  { url: `${BASE_URL}/services/custom-systems`, changeFrequency: 'monthly', priority: 0.8 },
  { url: `${BASE_URL}/services/ui-ux`, changeFrequency: 'monthly', priority: 0.75 },
  { url: `${BASE_URL}/services/maintenance`, changeFrequency: 'monthly', priority: 0.75 },
  { url: `${BASE_URL}/portfolio`, changeFrequency: 'monthly', priority: 0.8 },
  { url: `${BASE_URL}/portfolio/cslo-sudan`, changeFrequency: 'yearly', priority: 0.6 },
  { url: `${BASE_URL}/portfolio/ecommerce-shop`, changeFrequency: 'yearly', priority: 0.6 },
  { url: `${BASE_URL}/portfolio/crm-system`, changeFrequency: 'yearly', priority: 0.6 },
  { url: `${BASE_URL}/portfolio/erp-integration`, changeFrequency: 'yearly', priority: 0.6 },
  { url: `${BASE_URL}/portfolio/cloud-migration`, changeFrequency: 'yearly', priority: 0.6 },
  { url: `${BASE_URL}/portfolio/mobile-app`, changeFrequency: 'yearly', priority: 0.6 },
  { url: `${BASE_URL}/portfolio/ngo-portal`, changeFrequency: 'yearly', priority: 0.6 },
  { url: `${BASE_URL}/about`, changeFrequency: 'monthly', priority: 0.7 },
  { url: `${BASE_URL}/team`, changeFrequency: 'monthly', priority: 0.6 },
  { url: `${BASE_URL}/process`, changeFrequency: 'monthly', priority: 0.6 },
  { url: `${BASE_URL}/mission`, changeFrequency: 'monthly', priority: 0.6 },
  { url: `${BASE_URL}/contact`, changeFrequency: 'monthly', priority: 0.7 },
  { url: `${BASE_URL}/faq`, changeFrequency: 'monthly', priority: 0.65 },
  { url: `${BASE_URL}/blog`, changeFrequency: 'weekly', priority: 0.75 },
  { url: `${BASE_URL}/locations/rwanda`, changeFrequency: 'monthly', priority: 0.7 },
  { url: `${BASE_URL}/web-design-rwanda`, changeFrequency: 'monthly', priority: 0.8 },
  { url: `${BASE_URL}/web-development-rwanda`, changeFrequency: 'monthly', priority: 0.8 },
  { url: `${BASE_URL}/privacy`, changeFrequency: 'yearly', priority: 0.3 },
  { url: `${BASE_URL}/terms`, changeFrequency: 'yearly', priority: 0.3 },
  { url: `${BASE_URL}/cookies`, changeFrequency: 'yearly', priority: 0.3 },
]

const blogPosts: { slug: string; date: string }[] = [
  { slug: 'how-to-choose-the-right-website-for-your-ngo', date: '2024-01-15' },
  { slug: 'why-hosting-speed-matters-in-africa', date: '2024-01-10' },
  { slug: 'erp-for-african-smes-a-complete-guide', date: '2024-01-05' },
  { slug: 'choosing-a-web-design-company-in-rwanda-what-businesses-should-know', date: '2024-12-20' },
  { slug: 'web-development-companies-in-rwanda-what-to-look-for-2026', date: '2025-01-20' },
  { slug: 'web-design-cost-in-rwanda-2026', date: '2026-01-22' },
  { slug: 'best-web-design-companies-in-rwanda', date: '2026-01-25' },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map(({ slug, date }) => ({
    url: `${BASE_URL}/blog/${slug}`,
    lastModified: new Date(date),
    changeFrequency: 'monthly',
    priority: 0.65,
  }))

  return [...staticRoutes, ...blogRoutes]
}
