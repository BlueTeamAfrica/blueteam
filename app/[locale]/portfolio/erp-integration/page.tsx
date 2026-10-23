import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { buildAlternates, withSocialDefaults } from '@/lib/metadata-helpers'
import CaseStudyPage from '@/components/case-study/CaseStudyPage'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'CaseStudyErpIntegrationPage' })
  // OpenGraph/Twitter text stays English on both locales (project convention)
  const tEn = await getTranslations({ locale: 'en', namespace: 'CaseStudyErpIntegrationPage' })
  return withSocialDefaults({
    title: t('metaTitle'),
    description: t('metaDescription'),
    alternates: buildAlternates('/portfolio/erp-integration', locale),
    openGraph: {
      title: tEn('metaTitle'),
      description: tEn('metaDescription'),
    },
  })
}

export default async function ERPIntegrationCaseStudy() {
  return <CaseStudyPage slug="erp-integration" crumbName="Enterprise ERP Integration" projectName="ERP Integration" solutionBullets={8} />
}
