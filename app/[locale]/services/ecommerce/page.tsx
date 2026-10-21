import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { buildAlternates } from '@/lib/metadata-helpers'
import { flagTags } from '@/components/Flag'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import ServiceSchema from '@/components/ServiceSchema'
import ServiceHero from '@/components/service/ServiceHero'
import CaseResults from '@/components/service/CaseResults'
import { NumberedCards, ChipsRow, CaseStudyCards } from '@/components/service/InfoSections'
import ServiceFaq from '@/components/service/ServiceFaq'
import RelatedServices from '@/components/service/RelatedServices'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'EcommercePage' })
  // OpenGraph/Twitter text stays English on both locales (project convention)
  const tEn = await getTranslations({ locale: 'en', namespace: 'EcommercePage' })
  const alternates = buildAlternates('/services/ecommerce', locale)
  return {
    title: t('metaTitle'),
    description: t('metaDescription'),
    keywords: 'e-commerce Uganda, e-commerce Kenya, online store development, e-commerce solutions East Africa, mobile money integration, payment gateway integration, e-commerce platform development',
    alternates,
    openGraph: {
      title: tEn('metaTitle'),
      description: tEn('metaDescription'),
      url: alternates.canonical,
      siteName: 'Blue Team Africa',
      images: [
        {
          url: '/images/services/ecommerce/services-ecommerce-hero-01.webp',
          width: 1200,
          height: 630,
          alt: 'E-commerce Solutions for East Africa',
        },
      ],
      type: 'website',
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: tEn('metaTitle'),
      description: tEn('metaDescription'),
      images: ['/images/services/ecommerce/services-ecommerce-hero-01.webp'],
    },
  }
}

const SITE = 'https://www.blueteamafrica.com'

// Bands: hero (white) → results → white cards → light chips → white case study → light FAQ
// → white related services
export default async function EcommercePage() {
  const t = await getTranslations('EcommercePage')
  const tTemplate = await getTranslations('ServiceTemplate')
  const tPf = await getTranslations('PortfolioPage')
  const tFooter = await getTranslations('Footer')
  const tSvc = await getTranslations('ServiceSidebar')
  const faqs = [1, 2, 3, 4, 5, 6].map((n) => ({ q: t(`faq${n}q`), a: t(`faq${n}a`) }))

  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: `${SITE}/` },
        { name: 'Services', url: `${SITE}/services` },
        { name: 'E-commerce Solutions', url: `${SITE}/services/ecommerce` },
      ]} />
      <ServiceSchema serviceName="E-commerce" serviceSlug="ecommerce" />

      <ServiceHero
        family="design"
        title={t('title')}
        tagline={t('heroH2')}
        intro={t.rich('heroBody', flagTags)}
        breadcrumb={[
          { label: t('breadcrumbHome'), href: '/' },
          { label: t('breadcrumbServices'), href: '/services' },
          { label: t('breadcrumbEcommerce') },
        ]}
      />

      {/* Figures as /portfolio/ecommerce-shop shows them */}
      <CaseResults href="/portfolio/ecommerce-shop" namespace="CaseStudyEcommerceShopPage" values={['5x', '80%', '3x']} />

      <NumberedCards
        id="services-heading"
        heading={t('servicesTitle')}
        items={[1, 2, 3, 4, 5, 6].map((n) => ({ title: t(`service${n}Title`), body: t(`service${n}Body`) }))}
      />

      <ChipsRow
        id="tech-heading"
        heading={t('techTitle')}
        lead={[t('techBody')]}
        items={[1, 2, 3, 4].map((n) => ({ body: t(`techBullet${n}`) }))}
      />

      <CaseStudyCards
        id="case-heading"
        heading={tFooter('caseStudies')}
        cases={[{ href: '/portfolio/ecommerce-shop', tag: tPf('item_ecommerceShop_cat'), title: tPf('item_ecommerceShop_title'), body: [tPf('item_ecommerceShop_desc')] }]}
      />

      <ServiceFaq tone="light" title={t('faqTitle')} description={t('faqDescription')} items={faqs} viewAllLabel={t('faqViewAll')} />

      {/* The page had no related-services block: the services an online store is built with */}
      <RelatedServices
        tone="white"
        title={tTemplate('relatedServices')}
        links={[
          { href: '/services/web-design', label: tSvc('webDesign') },
          { href: '/services/website-development', label: tSvc('websiteDev') },
          { href: '/services/hosting', label: tSvc('hosting') },
        ]}
      />
    </>
  )
}
