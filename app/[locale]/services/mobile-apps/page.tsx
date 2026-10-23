import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import { buildAlternates, withSocialDefaults } from '@/lib/metadata-helpers'
import { flagTags } from '@/components/Flag'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import ServiceSchema from '@/components/ServiceSchema'
import ServiceHero from '@/components/service/ServiceHero'
import CaseResults from '@/components/service/CaseResults'
import { Checklist, NumberedCards, CaseStudyCards } from '@/components/service/InfoSections'
import ServiceFaq from '@/components/service/ServiceFaq'
import RelatedServices from '@/components/service/RelatedServices'
import { inlineLink } from '@/components/service/styles'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'MobileAppsPage' })
  // OpenGraph/Twitter text stays English on both locales (project convention)
  const tEn = await getTranslations({ locale: 'en', namespace: 'MobileAppsPage' })
  const alternates = buildAlternates('/services/mobile-apps', locale)
  return withSocialDefaults({
    title: t('metaTitle'),
    description: t('metaDescription'),
    keywords: 'mobile app development, mobile app development Uganda, mobile app development Kenya, Flutter development, React Native development, offline mobile apps, NGO mobile apps East Africa',
    alternates,
    openGraph: {
      title: tEn('metaTitle'),
      description: tEn('metaDescription'),
      url: alternates.canonical,
      siteName: 'Blue Team Africa',
      images: [
        {
          url: '/images/hero/hero-og-1200x630.jpg',
          width: 1200,
          height: 630,
          alt: 'Mobile App Development Services',
        },
      ],
      type: 'website',
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: tEn('metaTitle'),
      description: tEn('metaDescription'),
      images: ['/images/hero/hero-og-1200x630.jpg'],
    },
  })
}

const SITE = 'https://www.blueteamafrica.com'

// Bands: hero (light) → results → white checklist → light cards → navy checklist → white
// case studies → light FAQ → white related services
export default async function MobileAppsPage() {
  const t = await getTranslations('MobileAppsPage')
  const tTemplate = await getTranslations('ServiceTemplate')
  const tPf = await getTranslations('PortfolioPage')
  const tFooter = await getTranslations('Footer')
  const tNav = await getTranslations('Navigation')
  const tSvc = await getTranslations('ServiceSidebar')
  const faqs = [1, 2, 3, 4, 5, 6].map((n) => ({ q: t(`faq${n}q`), a: t(`faq${n}a`) }))
  const erp = (label: string) => <Link href="/services/erp" className={inlineLink}>{label}</Link>
  const crm = (label: string) => <Link href="/services/crm" className={inlineLink}>{label}</Link>

  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: `${SITE}/` },
        { name: 'Services', url: `${SITE}/services` },
        { name: 'Mobile App Development Services', url: `${SITE}/services/mobile-apps` },
      ]} />
      <ServiceSchema serviceName="Mobile Apps" serviceSlug="mobile-apps" />

      <ServiceHero
        family="systems"
        title={t('title')}
        tagline={t('heroH2')}
        intro={<>
          {t.rich('heroPre', { ...flagTags, sudanLink: (chunks) => <Link href="/locations/sudan">{chunks}</Link> })}
          <Link href="/locations/rwanda">{t('heroLinkLabel')}</Link>
          {t('heroPost')}
        </>}
        breadcrumb={[
          { label: t('breadcrumbHome'), href: '/' },
          { label: t('breadcrumbServices'), href: '/services' },
          { label: t('breadcrumbMobileApps') },
        ]}
      />

      {/* The CSLO field app this page presents; figures as /portfolio/cslo-sudan shows them */}
      <CaseResults href="/portfolio/cslo-sudan" namespace="CaseStudyCsloSudanPage" values={['70%', '50%']} />

      <Checklist
        id="overview-heading"
        heading={t('overviewTitle')}
        lead={[<>{t('overviewPre')}{erp(t('overviewLink1'))}{t('overviewMid')}{crm(t('overviewLink2'))}{t('overviewPost')}</>]}
        items={[
          { body: t('overviewBullet1') },
          { body: t('overviewBullet2') },
          { body: <>{t('overviewBullet3Pre')}{erp(t('overviewBullet3Link1'))}{t('overviewBullet3Mid')}{crm(t('overviewBullet3Link2'))}{t('overviewBullet3Post')}</> },
          { body: t('overviewBullet4') },
          { body: t('overviewBullet5') },
        ]}
      />

      <NumberedCards
        id="features-heading"
        heading={t('featuresTitle')}
        tone="light"
        items={[
          { title: t('feature1Title'), body: t('feature1Desc') },
          { title: t('feature2Title'), body: t('feature2Desc') },
          { title: t('feature3Title'), body: t('feature3Desc') },
          { title: t('feature4Title'), body: <>{t('feature4Pre')}{erp(t('feature4Link1'))}{t('feature4Mid')}{crm(t('feature4Link2'))}{t('feature4Post')}</> },
          { title: t('feature5Title'), body: t('feature5Desc') },
          { title: t('feature6Title'), body: t('feature6Desc') },
        ]}
      />

      {/* Untitled bullets with links: a checklist on the navy band rather than DarkBand columns */}
      <Checklist
        id="tech-heading"
        heading={t('techTitle')}
        tone="dark"
        lead={[t('techBody')]}
        items={[
          { body: t('techBullet1') },
          { body: t('techBullet2') },
          { body: <>{erp(t('techBullet3Link1'))}{t('techBullet3Mid')}{crm(t('techBullet3Link2'))}{t('techBullet3Post')}</> },
          { body: <>{t('techBullet4Pre')}<Link href="/services/hosting" className={inlineLink}>{t('techBullet4LinkLabel')}</Link>{t('techBullet4Post')}</> },
        ]}
      />

      <CaseStudyCards
        id="cases-heading"
        heading={tFooter('caseStudies')}
        cases={[
          {
            href: '/portfolio/cslo-sudan',
            title: t('caseTitle'),
            body: [
              t('caseBody'),
              <><strong>{t('caseProblemTitle')}</strong> {t('caseProblemBody')}</>,
              <><strong>{t('caseSolutionTitle')}</strong> {t('caseSolutionBody')}</>,
              <><strong>{t('caseImpactTitle')}</strong> {t('caseImpactBody')}</>,
            ],
          },
          { href: '/portfolio/mobile-app', tag: tPf('item_mobileApp_cat'), title: tPf('item_mobileApp_title'), body: [tPf('item_mobileApp_desc')] },
        ]}
      />

      <ServiceFaq tone="light" title={t('faqTitle')} description={t('faqDescription')} items={faqs} viewAllLabel={t('faqViewAll')} />

      {/* The page had no related-services block; these are the services its copy links to */}
      <RelatedServices
        tone="white"
        title={tTemplate('relatedServices')}
        links={[
          { href: '/services/erp', label: tNav('services.erp.name') },
          { href: '/services/crm', label: tNav('services.crm.name') },
          { href: '/services/hosting', label: tSvc('hosting') },
        ]}
      />
    </>
  )
}
