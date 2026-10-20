import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import { buildAlternates } from '@/lib/metadata-helpers'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import ServiceSchema from '@/components/ServiceSchema'
import ServiceHero from '@/components/service/ServiceHero'
import CaseResults from '@/components/service/CaseResults'
import { Band, Checklist, NumberedCards, CaseStudyCards } from '@/components/service/InfoSections'
import ServiceFaq from '@/components/service/ServiceFaq'
import RelatedServices from '@/components/service/RelatedServices'
import { inlineLink } from '@/components/service/styles'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'WebsiteDevelopmentPage' })
  // OpenGraph/Twitter text stays English on both locales (project convention)
  const tEn = await getTranslations({ locale: 'en', namespace: 'WebsiteDevelopmentPage' })
  const alternates = buildAlternates('/services/website-development', locale)
  return {
    title: t('metaTitle'),
    description: t('metaDescription'),
    keywords: [
      'website development',
      'web development',
      'custom web applications',
      'NGO website development',
      'business website development',
      'e-commerce development',
      'web application development',
      'scalable web development',
      'secure website development',
      'full-stack development',
    ],
    alternates,
    openGraph: {
      title: tEn('metaTitle'),
      description: tEn('metaDescription'),
      url: alternates.canonical,
      images: ['/images/hero/hero-og-1200x630.jpg'],
    },
  }
}

const SITE = 'https://www.blueteamafrica.com'

// Bands: hero (white) → results → white checklist → light cards → navy "why choose" →
// white checklist → light case study → white FAQ → light related services
export default async function WebsiteDevelopmentPage() {
  const t = await getTranslations('WebsiteDevelopmentPage')
  const faqs = [1, 2, 3, 4, 5, 6].map((n) => ({ q: t(`faq${n}q`), a: t(`faq${n}a`) }))

  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: `${SITE}/` },
        { name: 'Services', url: `${SITE}/services` },
        { name: 'Professional Web Development Services', url: `${SITE}/services/website-development` },
      ]} />
      <ServiceSchema serviceName="Website Development" serviceSlug="website-development" />

      <ServiceHero
        family="design"
        title={t('title')}
        intro={t('introP1')}
        introExtra={[
          <>{t('introPre')}<Link href="/web-development-rwanda">{t('introLinkLabel')}</Link>{t('introPost')}</>,
        ]}
        breadcrumb={[
          { label: t('breadcrumbHome'), href: '/' },
          { label: t('breadcrumbServices'), href: '/services' },
          { label: t('breadcrumbWebsiteDevelopment') },
        ]}
      />

      {/* The CSLO case this page already presents; figures as /portfolio/cslo-sudan shows them */}
      <CaseResults href="/portfolio/cslo-sudan" namespace="CaseStudyCsloSudanPage" values={['70%', '50%']} />

      <Checklist
        id="why-heading"
        heading={t('whyTitle')}
        lead={[
          <>{t('whyP1Pre')}<strong>{t('whyP1Bold')}</strong>{t('whyP1Post')}</>,
          t('whyP2'),
        ]}
        items={[
          { body: <><strong>{t('whyBullet1Bold')}</strong>{t('whyBullet1Rest')}</> },
          { body: <strong>{t('whyBullet2')}</strong> },
          { body: <><strong>{t('whyBullet3Bold')}</strong>{t('whyBullet3Rest')}</> },
          { body: <><strong>{t('whyBullet4Bold')}</strong>{t('whyBullet4Rest')}</> },
          { body: <strong>{t('whyBullet5')}</strong> },
          { body: <strong>{t('whyBullet6')}</strong> },
        ]}
        closing={[t('whyConclusion')]}
      />

      <NumberedCards
        id="build-heading"
        heading={t('buildTitle')}
        tone="light"
        items={[
          { title: t('build1Title'), body: t('build1Desc') },
          { title: t('build2Title'), body: t('build2Desc') },
          { title: t('build3Title'), body: t('build3Desc') },
          { title: t('build4Title'), body: t('build4Desc') },
          { title: t('build5Title'), body: t('build5Intro'), bullets: [1, 2, 3, 4, 5].map((n) => t(`build5Bullet${n}`)) },
          { title: t('build6Title'), body: t.rich('build6Desc', { sudanFactsLink: (chunks) => <a href="https://sudanfacts.org" target="_blank" rel="noopener noreferrer" className={inlineLink}>{chunks}</a> }) },
        ]}
      />

      {/* Two paragraphs, no card titles: a statement band rather than a bento */}
      <Band id="why-choose-heading" tone="dark" heading={t('whyChooseTitle')} lead={[t('whyChooseP1'), t('whyChooseP2')]}>{null}</Band>

      <Checklist
        id="highlights-heading"
        heading={t('highlightsTitle')}
        items={[1, 2, 3, 4, 5, 6, 7, 8].map((n) => ({ body: t(`highlight${n}`) }))}
      />

      <CaseStudyCards
        id="case-heading"
        heading={t('caseTitle')}
        tone="light"
        cases={[{
          href: '/portfolio/cslo-sudan',
          title: t('caseH3'),
          body: [t('caseP1'), t('caseP2'), t('caseP3'), t('caseP4')],
          linkLabel: t('caseViewStudy'),
        }]}
      />

      <ServiceFaq title={t('faqTitle')} description={t('faqDescription')} items={faqs} viewAllLabel={t('faqViewAll')} />

      <RelatedServices
        title={t('relatedTitle')}
        links={[
          { href: '/services/web-design', label: t('related1Title'), desc: t('related1Desc') },
          { href: '/services/mobile-apps', label: t('related2Title'), desc: t('related2Desc') },
          { href: '/services/cybersecurity', label: t('related3Title'), desc: t('related3Desc') },
          { href: '/services/erp', label: t('related4Title'), desc: t('related4Desc') },
        ]}
      />
    </>
  )
}
