import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import { buildAlternates, withSocialDefaults } from '@/lib/metadata-helpers'
import CompactServicePage, { type CompactServiceConfig } from '@/components/service/CompactServicePage'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'HostingPage' })
  // OpenGraph/Twitter text stays English on both locales (project convention)
  const tEn = await getTranslations({ locale: 'en', namespace: 'HostingPage' })
  return withSocialDefaults({
    title: t('metaTitle'),
    description: t('metaDescription'),
    alternates: buildAlternates('/services/hosting', locale),
    openGraph: {
      title: tEn('metaTitle'),
      description: tEn('metaDescription'),
    },
  })
}

const config: CompactServiceConfig = {
  namespace: 'HostingPage',
  slug: 'hosting',
  family: 'protect',
  crumbKey: 'breadcrumbHosting',
  schemaCrumbName: 'Cloud & Web Hosting',
  schemaServiceName: 'Hosting',
  related: [
    { href: '/services/web-design', key: 'relatedWebDesign' },
    { href: '/services/cybersecurity', key: 'relatedCybersecurity' },
    { href: '/services/maintenance', key: 'relatedMaintenance' },
  ],
  // Figures as /portfolio/cloud-migration shows them; labels are its own keys
  caseStudy: { href: '/portfolio/cloud-migration', namespace: 'CaseStudyCloudMigrationPage', values: ['99.9%', '40%', '0'] },
}

export default async function HostingPage() {
  const t = await getTranslations('HostingPage')
  // The intro carries a link to the Rwanda web-development page, as before
  const intro = (
    <>
      {t('intro')}{' '}
      {t('introRwandaPre')}{' '}
      <Link href="/web-development-rwanda">{t('introLinkLabel')}</Link>{' '}
      {t('introRwandaPost')}
    </>
  )
  return <CompactServicePage config={config} intro={intro} />
}
