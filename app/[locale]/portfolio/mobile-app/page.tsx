import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { buildAlternates } from '@/lib/metadata-helpers'
import CaseStudyPage from '@/components/case-study/CaseStudyPage'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'CaseStudyMobileAppPage' })
  // OpenGraph/Twitter text stays English on both locales (project convention)
  const tEn = await getTranslations({ locale: 'en', namespace: 'CaseStudyMobileAppPage' })
  return {
    title: t('metaTitle'),
    description: t('metaDescription'),
    alternates: buildAlternates('/portfolio/mobile-app', locale),
    openGraph: {
      title: tEn('metaTitle'),
      description: tEn('metaDescription'),
    },
  }
}

export default async function MobileAppCaseStudy() {
  return <CaseStudyPage slug="mobile-app" crumbName="Healthcare Mobile App" projectName="Mobile App" solutionBullets={10} />
}
