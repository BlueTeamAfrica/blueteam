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
  const t = await getTranslations({ locale, namespace: 'CustomSystemsPage' })
  // OpenGraph/Twitter text stays English on both locales (project convention)
  const tEn = await getTranslations({ locale: 'en', namespace: 'CustomSystemsPage' })
  return {
    title: t('metaTitle'),
    description: t('metaDescription'),
    alternates: buildAlternates('/services/custom-systems', locale),
    openGraph: {
      title: tEn('metaTitle'),
      description: tEn('metaDescription'),
    },
  }
}

const config: CompactServiceConfig = {
  namespace: 'CustomSystemsPage',
  slug: 'custom-systems',
  family: 'systems',
  crumbKey: 'breadcrumbCustomSystems',
  schemaCrumbName: 'Custom Software Development',
  schemaServiceName: 'Custom Systems',
  related: [
    { href: '/services/erp', key: 'relatedERP' },
    { href: '/services/crm', key: 'relatedCRM' },
    { href: '/services/mobile-apps', key: 'relatedMobileApps' },
  ],
  // Figures as /portfolio/ngo-portal shows them; labels are its own keys
  caseStudy: { href: '/portfolio/ngo-portal', namespace: 'CaseStudyNgoPortalPage', values: ['75%', '50%', '3x'] },
  // The page linked both case studies before the template; the strip covers the first
  relatedCase: { href: '/portfolio/crm-system', item: 'crmSystem' },
}

export default async function CustomSystemsPage() {
  return <CompactServicePage config={config} />
}
