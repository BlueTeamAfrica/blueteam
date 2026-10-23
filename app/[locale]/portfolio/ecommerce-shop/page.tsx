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
  const t = await getTranslations({ locale, namespace: 'CaseStudyEcommerceShopPage' })
  // OpenGraph/Twitter text stays English on both locales (project convention)
  const tEn = await getTranslations({ locale: 'en', namespace: 'CaseStudyEcommerceShopPage' })
  return withSocialDefaults({
    title: t('metaTitle'),
    description: t('metaDescription'),
    alternates: buildAlternates('/portfolio/ecommerce-shop', locale),
    openGraph: {
      title: tEn('metaTitle'),
      description: tEn('metaDescription'),
    },
  })
}

export default async function EcommerceShopCaseStudy() {
  return <CaseStudyPage slug="ecommerce-shop" crumbName="E-commerce Platform" projectName="E-commerce Shop" solutionBullets={10} />
}
