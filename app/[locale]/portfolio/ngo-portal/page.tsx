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
  const t = await getTranslations({ locale, namespace: 'CaseStudyNgoPortalPage' })
  // OpenGraph/Twitter text stays English on both locales (project convention)
  const tEn = await getTranslations({ locale: 'en', namespace: 'CaseStudyNgoPortalPage' })
  return withSocialDefaults({
    title: t('metaTitle'),
    description: t('metaDescription'),
    alternates: buildAlternates('/portfolio/ngo-portal', locale),
    openGraph: {
      title: tEn('metaTitle'),
      description: tEn('metaDescription'),
    },
  })
}

export default async function NGOPortalCaseStudy() {
  return <CaseStudyPage slug="ngo-portal" crumbName="NGO Management Portal" projectName="NGO Portal" solutionBullets={7} />
}
