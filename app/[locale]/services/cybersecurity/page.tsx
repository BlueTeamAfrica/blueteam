import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import { buildAlternates } from '@/lib/metadata-helpers'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import ServiceSchema from '@/components/ServiceSchema'
import ServiceHero from '@/components/service/ServiceHero'
import { Checklist, NumberedCards, DarkBand, StepsTimeline } from '@/components/service/InfoSections'
import ServiceFaq from '@/components/service/ServiceFaq'
import RelatedServices from '@/components/service/RelatedServices'
import { inlineLink } from '@/components/service/styles'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'CybersecurityPage' })
  // OpenGraph/Twitter text stays English on both locales (project convention)
  const tEn = await getTranslations({ locale: 'en', namespace: 'CybersecurityPage' })
  const alternates = buildAlternates('/services/cybersecurity', locale)
  return {
    title: t('metaTitle'),
    description: t('metaDescription'),
    keywords: 'cybersecurity Uganda, cybersecurity Sudan, penetration testing East Africa, security audit Uganda, NGO cybersecurity, website security, data protection East Africa, cyber security services, Blue Team Africa',
    alternates,
    openGraph: {
      title: tEn('metaTitle'),
      description: tEn('metaDescription'),
      url: alternates.canonical,
      siteName: 'Blue Team Africa',
      images: [
        {
          url: '/images/services/cybersecurity/services-cybersecurity-hero-01.webp',
          width: 1200,
          height: 630,
          alt: 'Cybersecurity Solutions for East Africa',
        },
      ],
      type: 'website',
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: tEn('metaTitle'),
      description: tEn('metaDescription'),
      images: ['/images/services/cybersecurity/services-cybersecurity-hero-01.webp'],
    },
  }
}

const SITE = 'https://www.blueteamafrica.com'

// No case study states figures for this service, so no results strip. Bands: navy hero →
// white checklist → light cards → white checklist → navy band (not under the hero) → white
// cards → light steps → white FAQ → light related services
export default async function CybersecurityPage() {
  const t = await getTranslations('CybersecurityPage')
  const tTemplate = await getTranslations('ServiceTemplate')
  const tSvc = await getTranslations('ServiceSidebar')
  const faqs = [1, 2, 3, 4, 5, 6, 7, 8].map((n) => ({ q: t(`faq${n}q`), a: t(`faq${n}a`) }))

  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: `${SITE}/` },
        { name: 'Services', url: `${SITE}/services` },
        { name: 'Cybersecurity Solutions', url: `${SITE}/services/cybersecurity` },
      ]} />
      <ServiceSchema serviceName="Cybersecurity" serviceSlug="cybersecurity" />

      <ServiceHero
        family="protect"
        title={t('interiorHeaderTitle')}
        intro={<>{t('sec1P1Pre')}<Link href="/locations/rwanda">{t('sec1P1LinkLabel')}</Link>{t('sec1P1Post')}</>}
        breadcrumb={[
          { label: t('breadcrumbHome'), href: '/' },
          { label: t('breadcrumbServices'), href: '/services' },
          { label: t('breadcrumbCybersecurity') },
        ]}
      />

      {/* Untitled points: a checklist rather than a bento (whose cards need titles) */}
      <Checklist
        id="why-heading"
        heading={t('sec1H2')}
        lead={[t('sec1P2')]}
        items={[
          { body: t.rich('sec1Li1', { sudanLink: (chunks) => <Link href="/locations/sudan" className={inlineLink}>{chunks}</Link> }) },
          { body: t('sec1Li2') },
          { body: t('sec1Li3') },
          { body: t('sec1Li4') },
          { body: t('sec1Li5') },
        ]}
        closing={[t('sec1P3')]}
      />

      <NumberedCards
        id="secure-heading"
        heading={t('sec2H2')}
        tone="light"
        items={[1, 2, 3, 4, 5, 6, 7].map((n) => ({ title: t(`sec2Card${n}H3`), body: t(`sec2Card${n}P`) }))}
        closing={[<><Link href="/services/website-development" className={inlineLink}>{t('sec2LinkLabel')}</Link>{' '}{t('sec2LinkPost')}</>]}
      />

      <Checklist
        id="services-heading"
        heading={t('sec3H2')}
        items={[1, 2, 3, 4, 5, 6, 7, 8].map((n) => ({ title: t(`sec3Service${n}H3`), body: t(`sec3Service${n}P`) }))}
      />

      <DarkBand
        id="experience-heading"
        heading={t('sec4H2')}
        lead={[t('sec4P1'), t('sec4P2')]}
        items={[1, 2, 3, 4, 5, 6].map((n) => ({ title: t(`sec4Card${n}H3`), body: t(`sec4Card${n}P`) }))}
        closing={[<><Link href="/services/erp">{t('sec4LinkLabel')}</Link>{' '}{t('sec4LinkPost')}</>]}
      />

      <NumberedCards
        id="different-heading"
        heading={t('sec5H2')}
        lead={[t('sec5P1'), <span key="q" className="font-heading text-[20px] font-semibold text-navy">{t('sec5Pullquote')}</span>]}
        subheading={t('sec5H3')}
        items={[1, 2, 3, 4, 5, 6].map((n) => ({ title: t(`sec5Card${n}H4`), body: t(`sec5Card${n}P`) }))}
      />

      <StepsTimeline
        id="process-heading"
        heading={t('sec6H2')}
        tone="light"
        items={[1, 2, 3, 4, 5, 6].map((n) => ({ title: t(`sec6Step${n}H3`), body: t(`sec6Step${n}P`) }))}
      />

      {/* The old page listed all eight questions and no "view all" link */}
      <ServiceFaq title={t('faqTitle')} description={t('faqDescription')} items={faqs} />

      {/* The page had no related-services block: the other "Protect & run" services, and the
          website development its copy links to */}
      <RelatedServices
        title={tTemplate('relatedServices')}
        links={[
          { href: '/services/hosting', label: tSvc('hosting') },
          { href: '/services/maintenance', label: tSvc('maintenance') },
          { href: '/services/website-development', label: tSvc('websiteDev') },
        ]}
      />
    </>
  )
}
