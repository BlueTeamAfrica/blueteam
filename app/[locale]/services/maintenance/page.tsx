import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { buildAlternates } from '@/lib/metadata-helpers'
import CompactServicePage, { type CompactServiceConfig } from '@/components/service/CompactServicePage'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'MaintenancePage' })
  // OpenGraph/Twitter text stays English on both locales (project convention)
  const tEn = await getTranslations({ locale: 'en', namespace: 'MaintenancePage' })
  return {
    title: t('metaTitle'),
    description: t('metaDescription'),
    alternates: buildAlternates('/services/maintenance', locale),
    openGraph: {
      title: tEn('metaTitle'),
      description: tEn('metaDescription'),
    },
  }
}

const config: CompactServiceConfig = {
  namespace: 'MaintenancePage',
  slug: 'maintenance',
  family: 'protect',
  crumbKey: 'breadcrumbMaintenance',
  schemaCrumbName: 'IT Maintenance & Support',
  schemaServiceName: 'Maintenance',
  related: [
    { href: '/services/hosting', key: 'relatedHosting' },
    { href: '/services/cybersecurity', key: 'relatedCybersecurity' },
    { href: '/services/web-design', key: 'relatedWebDesign' },
  ],
}

export default async function MaintenancePage() {
  return <CompactServicePage config={config} />
}
