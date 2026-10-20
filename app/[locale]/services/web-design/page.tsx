import type { Metadata } from 'next'
import NextLink from 'next/link'
import { getTranslations } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import { buildAlternates } from '@/lib/metadata-helpers'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import ServiceSchema from '@/components/ServiceSchema'
import ServiceHero from '@/components/service/ServiceHero'
import CaseResults from '@/components/service/CaseResults'
import BenefitsBento from '@/components/service/BenefitsBento'
import { NumberedCards, DarkBand, StepsTimeline, ChipsRow, CaseStudyCards } from '@/components/service/InfoSections'
import ServiceFaq from '@/components/service/ServiceFaq'
import RelatedServices from '@/components/service/RelatedServices'
import { inlineLink } from '@/components/service/styles'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'WebDesignPage' })
  // OpenGraph/Twitter text stays English on both locales (project convention)
  const tEn = await getTranslations({ locale: 'en', namespace: 'WebDesignPage' })
  return {
    title: t('metaTitle'),
    description: t('metaDescription'),
    alternates: buildAlternates('/services/web-design', locale),
    openGraph: {
      title: tEn('metaTitle'),
      description: tEn('metaDescription'),
    },
  }
}

const SITE = 'https://www.blueteamafrica.com'

// Bands alternate: hero (white) → results → white → light → dark → white → light → white →
// light FAQ → white related. Key names in WebDesignPage don't match their text (e.g.
// customDesign is "Types of Websites We Build"); they are used as the old page used them.
export default async function WebDesignPage() {
  const t = await getTranslations('WebDesignPage')
  const tTemplate = await getTranslations('ServiceTemplate')
  const faqs = [1, 2, 3, 4, 5, 6].map((n) => ({ q: t(`faq${n}q`), a: t(`faq${n}a`) }))

  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: `${SITE}/` },
        { name: 'Services', url: `${SITE}/services` },
        { name: 'Professional Web Design Services', url: `${SITE}/services/web-design` },
      ]} />
      <ServiceSchema serviceName="Web Design" serviceSlug="web-design" />

      <ServiceHero
        family="design"
        title={t('title')}
        intro={t('intro')}
        introExtra={[
          t.rich('rwandaIntroPara', { rwandaLink: (chunks) => <Link href="/web-design-rwanda">{chunks}</Link> }),
          // Blog posts are English-only: link straight to /blog/<slug> (no /ar prefix, no redirect hop)
          t.rich('ngoGuidePara', { ngoGuideLink: (chunks) => <NextLink href="/blog/how-to-choose-the-right-website-for-your-ngo">{chunks}</NextLink> }),
        ]}
        breadcrumb={[
          { label: t('breadcrumbHome'), href: '/' },
          { label: t('breadcrumbServices'), href: '/services' },
          { label: t('breadcrumbWebDesign') },
        ]}
      />

      {/* Figures as /portfolio/ecommerce-shop shows them (the platform this page describes) */}
      <CaseResults href="/portfolio/ecommerce-shop" namespace="CaseStudyEcommerceShopPage" values={['5x', '80%', '3x']} />

      <BenefitsBento
        eyebrow={t('breadcrumbWebDesign')}
        title={tTemplate('whatYouGet')}
        cards={[
          { title: t('responsiveDesign'), body: t('responsiveDesignBody') },
          { title: t('fastPerformance'), body: t('fastPerformanceBody') },
          { title: t('seoReady'), body: t('seoReadyBody') },
        ]}
      />

      <NumberedCards
        id="types-heading"
        heading={t('customDesign')}
        tone="light"
        items={[
          { title: t('customDesignBody'), body: t('corporateBody') },
          { title: t('secureHosting'), body: t('ngoBody') },
          { title: t('secureHostingBody'), body: t('landingBody') },
          { title: t('cmsIntegration'), body: t('portfolioBody') },
          { title: t('cmsIntegrationBody'), body: t('contentBody') },
        ]}
      />

      <DarkBand
        id="stack-heading"
        heading={t('servicesTitle')}
        lead={[t('techIntro')]}
        items={[
          { title: t('loadSpeedTitle'), body: t('loadSpeedBody') },
          { title: t('seoStructureTitle'), body: t('seoStructureBody') },
          { title: t('vendorLockTitle'), body: t('vendorLockBody') },
          { title: t('maintainableTitle'), body: t('maintainableBody') },
        ]}
      />

      <StepsTimeline
        id="process-heading"
        heading={t('corporateSites')}
        vertical
        items={[
          { title: t('corporateSitesBody'), body: t('discoveryBody') },
          { title: t('ngoWebsites'), body: t('designBody') },
          { title: t('ngoWebsitesBody'), body: t('developmentBody') },
          { title: t('ecommerceSites'), body: t('qaBody') },
          { title: t('ecommerceSitesBody'), body: t('launchBody') },
        ]}
      />

      <ChipsRow
        id="industries-heading"
        heading={t('portfolioSites')}
        tone="light"
        items={[
          { title: t('portfolioSitesBody'), body: t.rich('ngoSectorBody', { sudanLink: (chunks) => <Link href="/locations/sudan" className={inlineLink}>{chunks}</Link> }) },
          { title: t('rwandaTitle'), body: t('startupBody') },
          { title: t('rwandaBody'), body: t('profServicesBody') },
          { title: t('industriesTitle'), body: t('educationBody') },
          { title: t('mediaTitle'), body: t.rich('mediaBody', { sudanFactsLink: (chunks) => <a href="https://sudanfacts.org" target="_blank" rel="noopener noreferrer" className={inlineLink}>{chunks}</a> }) },
        ]}
      />

      <CaseStudyCards
        id="work-heading"
        heading={t('seeOurWorkTitle')}
        cases={[
          { href: '/portfolio/ngo-portal', title: t('ngoPortalTitle'), body: [t('ngoPortalBody')] },
          { href: '/portfolio/ecommerce-shop', title: t('ecommercePlatformTitle'), body: [t('ecommercePlatformBody')] },
        ]}
        allLink={{ href: '/portfolio', label: t('ngos') }}
      />

      <ServiceFaq tone="light" title={t('faqTitle')} description={t('faqDescription')} items={faqs} viewAllLabel={t('faqViewAll')} />

      <RelatedServices
        tone="white"
        title={t('relatedTitle')}
        links={[
          { href: '/services/hosting', label: t('relatedHosting') },
          { href: '/services/ecommerce', label: t('relatedEcommerce') },
          { href: '/services/branding', label: t('relatedBranding') },
        ]}
      />
    </>
  )
}
