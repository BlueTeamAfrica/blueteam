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
  const t = await getTranslations({ locale, namespace: 'BrandingPage' })
  // OpenGraph/Twitter text stays English on both locales (project convention)
  const tEn = await getTranslations({ locale: 'en', namespace: 'BrandingPage' })
  return withSocialDefaults({
    title: t('metaTitle'),
    description: t('metaDescription'),
    alternates: buildAlternates('/services/branding', locale),
    openGraph: {
      title: tEn('metaTitle'),
      description: tEn('metaDescription'),
    },
  })
}

const config: CompactServiceConfig = {
  namespace: 'BrandingPage',
  slug: 'branding',
  family: 'design',
  crumbKey: 'breadcrumbBranding',
  schemaCrumbName: 'Branding & Logo Design',
  schemaServiceName: 'Branding',
  related: [
    { href: '/services/web-design', key: 'relatedWebDesign' },
    { href: '/services/ui-ux', key: 'relatedUIUX' },
    { href: '/services/ecommerce', key: 'relatedEcommerce' },
  ],
}

export default async function BrandingPage() {
  return <CompactServicePage config={config} />
}
