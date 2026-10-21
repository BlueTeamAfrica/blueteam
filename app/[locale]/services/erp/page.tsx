import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import { buildAlternates } from '@/lib/metadata-helpers'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import ServiceSchema from '@/components/ServiceSchema'
import ServiceHero from '@/components/service/ServiceHero'
import CaseResults from '@/components/service/CaseResults'
import BenefitsBento from '@/components/service/BenefitsBento'
import { Checklist, CheckItems, NumberedCards, CaseStudyCards } from '@/components/service/InfoSections'
import ServiceFaq from '@/components/service/ServiceFaq'
import RelatedServices from '@/components/service/RelatedServices'
import { inlineLink } from '@/components/service/styles'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'ErpPage' })
  // OpenGraph/Twitter text stays English on both locales (project convention)
  const tEn = await getTranslations({ locale: 'en', namespace: 'ErpPage' })
  const alternates = buildAlternates('/services/erp', locale)
  return {
    title: t('metaTitle'),
    description: t('metaDescription'),
    keywords: 'ERP systems, ERPNext, ERP solutions Uganda, ERP for NGOs, ERP for humanitarian organizations, ERPNext implementation, enterprise resource planning East Africa, NGO ERP systems',
    alternates,
    openGraph: {
      title: tEn('metaTitle'),
      description: tEn('metaDescription'),
      url: alternates.canonical,
      siteName: 'Blue Team Africa',
      images: [
        {
          url: '/images/services/erp-crm/services-erpcrm-erp-crm-dashboard-01.webp',
          width: 1200,
          height: 630,
          alt: 'ERP Solutions for NGOs and Companies',
        },
      ],
      type: 'website',
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: tEn('metaTitle'),
      description: tEn('metaDescription'),
      images: ['/images/services/erp-crm/services-erpcrm-erp-crm-dashboard-01.webp'],
    },
  }
}

const SITE = 'https://www.blueteamafrica.com'

// Bands: hero (light) → results → white value cards + "What you get" list → light checklist →
// navy checklist → white case studies → light "why choose" → white FAQ → light related
export default async function ERPPage() {
  const t = await getTranslations('ErpPage')
  const tPf = await getTranslations('PortfolioPage')
  const tSvc = await getTranslations('ServiceSidebar')
  const faqs = [1, 2, 3, 4, 5, 6].map((n) => ({ q: t(`faq${n}q`), a: t(`faq${n}a`) }))
  const to = (href: string, label: string) => <Link href={href} className={inlineLink}>{label}</Link>

  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: `${SITE}/` },
        { name: 'Services', url: `${SITE}/services` },
        { name: 'ERP Solutions', url: `${SITE}/services/erp` },
      ]} />
      <ServiceSchema serviceName="ERP" serviceSlug="erp" />

      <ServiceHero
        family="systems"
        title={t('title')}
        intro={<>{t('introPre')}<strong><Link href="/services/erp">{t('introLinkLabel')}</Link></strong>{t('introPost')}</>}
        breadcrumb={[
          { label: t('breadcrumbHome'), href: '/' },
          { label: t('breadcrumbServices'), href: '/services' },
          { label: t('breadcrumbErp') },
        ]}
      />

      {/* The CSLO case this page presents; figures as /portfolio/cslo-sudan shows them */}
      <CaseResults href="/portfolio/cslo-sudan" namespace="CaseStudyCsloSudanPage" values={['70%', '50%']} />

      {/* The value cards and the "What you get" list share one section: two "What you get"
          headings would repeat each other */}
      <BenefitsBento
        eyebrow={t('breadcrumbErp')}
        title={t('featuresTitle')}
        cards={[1, 2, 3].map((n) => ({ title: t(`pillar${n}Title`), body: t(`pillar${n}Body`) }))}
      >
        <CheckItems items={[
          { body: t('feature1') },
          { body: <>{t('feature2Pre')}{to('/services/hosting', t('feature2LinkLabel'))}{t('feature2Post')}</> },
          { body: t('feature3') },
          { body: t('feature4') },
          { body: t('feature5') },
          { body: t('feature6') },
          { body: <>{t('feature7Pre')}{to('/services/web-design', t('feature7Link1'))}{t('feature7Mid')}{to('/services/mobile-apps', t('feature7Link2'))}</> },
          { body: <>{t('feature8Pre')}{to('/services/maintenance', t('feature8LinkLabel'))}{t('feature8Post')}</> },
        ]} />
      </BenefitsBento>

      <Checklist
        id="centralize-heading"
        heading={t('whyTitle')}
        tone="light"
        lead={[<>{t('whyBodyPre')}<strong>{to('/services/erp', t('whyBodyLinkLabel'))}</strong>{t('whyBodyPost')}</>]}
        items={[1, 2, 3, 4, 5, 6, 7, 8].map((n) => ({ body: t(`whyBullet${n}`) }))}
      />

      <Checklist
        id="mobile-heading"
        heading={t('mobileTitle')}
        tone="dark"
        lead={[<>{t('mobileBodyPre')}{to('/services/mobile-apps', t('mobileBodyLinkLabel'))}{t('mobileBodyPost')}</>]}
        items={[1, 2, 3, 4, 5].map((n) => ({ body: t(`mobileBullet${n}`) }))}
        closing={[t('mobileClosing')]}
      />

      <CaseStudyCards
        id="case-heading"
        heading={t.rich('caseTitle', { sudanLink: (chunks) => <Link href="/locations/sudan" className={inlineLink}>{chunks}</Link> })}
        lead={[t('caseBody1'), <>{t('caseBody2Pre')}<strong>{to('/services/mobile-apps', t('caseBody2LinkLabel'))}</strong>{t('caseBody2Post')}</>]}
        cases={[
          { href: '/portfolio/cslo-sudan', tag: tPf('item_csloSudan_cat'), title: t('caseStudyLink1'), body: [tPf('item_csloSudan_desc')] },
          { href: '/portfolio/erp-integration', tag: tPf('item_erpIntegration_cat'), title: t('caseStudyLink2'), body: [tPf('item_erpIntegration_desc')] },
        ]}
      />

      <NumberedCards
        id="why-choose-heading"
        heading={t('whyChooseTitle')}
        tone="light"
        items={[
          { title: t('why1Title'), body: <>{t('why1BodyPre')}{to('/services/erp', 'ERPNext')}{t('why1BodyMid')}{to('/services/crm', 'Frappe')}{t('why1BodyPost')}</> },
          { title: t('why2Title'), body: <>{t('why2BodyPre')}{to('/services/mobile-apps', t('why2BodyLinkLabel'))}{t('why2BodyPost')}</> },
          { title: t('why3Title'), body: <>{t('why3BodyPre')}{to('/services/maintenance', t('why3BodyLinkLabel'))}{t('why3BodyPost')}</> },
        ]}
      />

      <ServiceFaq title={t('faqTitle')} description={t('faqDescription')} items={faqs} viewAllLabel={t('faqViewAll')} />

      {/* The page's related-services sentence (links kept) over cards for the same three */}
      <RelatedServices
        title={t('relatedTitle')}
        intro={<>{t('relatedBodyPre')}{to('/services/web-design', t('relatedLink1'))}{t('relatedMid1')}{to('/services/mobile-apps', t('relatedLink2'))}{t('relatedMid2')}{to('/services/cybersecurity', t('relatedLink3'))}{t('relatedPost')}</>}
        links={[
          { href: '/services/web-design', label: tSvc('webDesign') },
          { href: '/services/mobile-apps', label: tSvc('mobileApps') },
          { href: '/services/cybersecurity', label: tSvc('cybersecurity') },
        ]}
      />
    </>
  )
}
