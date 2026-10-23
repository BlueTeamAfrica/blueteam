import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { buildAlternates, withSocialDefaults } from '@/lib/metadata-helpers'
import CompactServicePage, { type CompactServiceConfig } from '@/components/service/CompactServicePage'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'UIUXPage' })
  // OpenGraph/Twitter text stays English on both locales (project convention)
  const tEn = await getTranslations({ locale: 'en', namespace: 'UIUXPage' })
  return withSocialDefaults({
    title: t('metaTitle'),
    description: t('metaDescription'),
    alternates: buildAlternates('/services/ui-ux', locale),
    openGraph: {
      title: tEn('metaTitle'),
      description: tEn('metaDescription'),
    },
  })
}

const config: CompactServiceConfig = {
  namespace: 'UIUXPage',
  slug: 'ui-ux',
  family: 'design',
  crumbKey: 'breadcrumbUiUx',
  schemaCrumbName: 'UI/UX Design',
  schemaServiceName: 'UI/UX',
  related: [
    { href: '/services/web-design', key: 'relatedWebDesign' },
    { href: '/services/mobile-apps', key: 'relatedMobileApps' },
    { href: '/services/branding', key: 'relatedBranding' },
  ],
}

export default async function UIUXPage() {
  return <CompactServicePage config={config} />
}
