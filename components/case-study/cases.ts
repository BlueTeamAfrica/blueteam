import type { ServiceFamily } from '@/components/service/ServiceHero'

// The case studies in portfolio order (the order /portfolio lists them, and "Next case study"
// follows, wrapping at the end). values: the page's three figures exactly as it shows them,
// one per stat1Label… key in its namespace. item: the PortfolioPage card key (title, desc, cat).

export interface CaseStudy {
  slug: string
  namespace: string
  item: string
  family: ServiceFamily
  values: string[]
  /** Services the page links, otherwise picked by category */
  related: string[]
}

export const CASES: CaseStudy[] = [
  { slug: 'cslo-sudan', namespace: 'CaseStudyCsloSudanPage', item: 'csloSudan', family: 'systems', values: ['70%', '50%', '100%'], related: ['erp', 'crm', 'mobile-apps'] },
  { slug: 'ngo-portal', namespace: 'CaseStudyNgoPortalPage', item: 'ngoPortal', family: 'design', values: ['75%', '50%', '3x'], related: ['website-development', 'web-design', 'custom-systems'] },
  { slug: 'erp-integration', namespace: 'CaseStudyErpIntegrationPage', item: 'erpIntegration', family: 'systems', values: ['60%', '40%', '30%'], related: ['erp', 'custom-systems', 'crm'] },
  { slug: 'ecommerce-shop', namespace: 'CaseStudyEcommerceShopPage', item: 'ecommerceShop', family: 'design', values: ['5x', '80%', '3x'], related: ['ecommerce', 'web-design', 'hosting'] },
  { slug: 'mobile-app', namespace: 'CaseStudyMobileAppPage', item: 'mobileApp', family: 'systems', values: ['70%', '50%', '90%'], related: ['mobile-apps', 'custom-systems', 'hosting'] },
  { slug: 'crm-system', namespace: 'CaseStudyCrmSystemPage', item: 'crmSystem', family: 'systems', values: ['45%', '35%', '60%'], related: ['crm', 'erp', 'custom-systems'] },
  { slug: 'cloud-migration', namespace: 'CaseStudyCloudMigrationPage', item: 'cloudMigration', family: 'protect', values: ['99.9%', '40%', '0'], related: ['hosting', 'cybersecurity', 'maintenance'] },
]

export const caseBySlug = (slug: string) => CASES.find((c) => c.slug === slug)!
export const nextCase = (slug: string) => CASES[(CASES.findIndex((c) => c.slug === slug) + 1) % CASES.length]
