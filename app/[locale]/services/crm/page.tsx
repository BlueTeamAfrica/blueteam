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
  const t = await getTranslations({ locale, namespace: 'CrmPage' })
  // OpenGraph/Twitter text stays English on both locales (project convention)
  const tEn = await getTranslations({ locale: 'en', namespace: 'CrmPage' })
  return {
    title: t('metaTitle'),
    description: t('metaDescription'),
    alternates: buildAlternates('/services/crm', locale),
    openGraph: {
      title: tEn('metaTitle'),
      description: tEn('metaDescription'),
    },
  }
}

const config: CompactServiceConfig = {
  namespace: 'CrmPage',
  slug: 'crm',
  family: 'systems',
  crumbKey: 'breadcrumbCrm',
  schemaCrumbName: 'CRM Solutions',
  schemaServiceName: 'CRM',
  related: [
    { href: '/services/erp', key: 'relatedERP' },
    { href: '/services/web-design', key: 'relatedWebDesign' },
    { href: '/services/custom-systems', key: 'relatedCustomSystems' },
  ],
  // Figures as /portfolio/crm-system shows them; labels are its own keys
  caseStudy: { href: '/portfolio/crm-system', namespace: 'CaseStudyCrmSystemPage', values: ['45%', '35%', '60%'] },
}

export default async function CRMPage() {
  return <CompactServicePage config={config} />
}
