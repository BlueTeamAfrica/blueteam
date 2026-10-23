import { getTranslations } from 'next-intl/server'
import { getServiceSchema } from '@/lib/schema'

interface ServiceSchemaProps {
  serviceName: string
  serviceSlug: string
}

// Each service page's message namespace; the schema describes the service with that page's
// own English meta description
const SERVICE_NAMESPACES: Record<string, string> = {
  branding: 'BrandingPage',
  crm: 'CrmPage',
  'custom-systems': 'CustomSystemsPage',
  cybersecurity: 'CybersecurityPage',
  ecommerce: 'EcommercePage',
  erp: 'ErpPage',
  hosting: 'HostingPage',
  maintenance: 'MaintenancePage',
  'mobile-apps': 'MobileAppsPage',
  'ui-ux': 'UIUXPage',
  'web-design': 'WebDesignPage',
  'website-development': 'WebsiteDevelopmentPage',
}

export default async function ServiceSchema({ serviceName, serviceSlug }: ServiceSchemaProps) {
  const tEn = await getTranslations({ locale: 'en', namespace: SERVICE_NAMESPACES[serviceSlug] })
  const schema = getServiceSchema(serviceName, serviceSlug, tEn('metaDescription'))

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
