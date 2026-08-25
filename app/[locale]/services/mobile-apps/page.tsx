import Link from 'next/link'
import Image from 'next/image'
import { MessageCircle, ArrowRight } from 'lucide-react'
import InteriorHeader from '@/components/InteriorHeader'
import SectionWrapper from '@/components/SectionWrapper'
import ServiceSidebar from '@/components/ServiceSidebar'
import type { Metadata } from 'next'
import { metadataMobileApps } from '@/lib/service-metadata'
import ServiceSchema from '@/components/ServiceSchema'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import FAQSection from '@/components/FAQSection'
import type { FAQ } from '@/lib/faqs'
import { getTranslations } from 'next-intl/server'
import { buildAlternates } from '@/lib/metadata-helpers'

const mobileAppsFAQs: FAQ[] = [
  {
    question: 'What platforms do you develop for — iOS, Android, or both?',
    answer: 'We develop for both iOS and Android using React Native, which produces a single codebase that runs natively on both platforms. For projects where native device APIs or performance requirements demand it, we can build platform-specific versions. We advise on the right approach during scoping based on your user base and budget.',
  },
  {
    question: 'How long does mobile app development take?',
    answer: 'A focused app with a defined feature set — field data collection, beneficiary registration, staff scheduling — typically takes eight to fourteen weeks from requirements to app store submission. More complex apps with real-time sync, offline-first architecture, or third-party integrations run fourteen to twenty-four weeks. We provide a firm estimate after the requirements phase.',
  },
  {
    question: 'Can the app work offline in low-connectivity environments?',
    answer: 'Offline-first capability is a design requirement we treat as standard for apps deployed in East Africa and humanitarian contexts, not an optional add-on. Data is stored locally on the device and syncs to the server automatically when a connection is available. Field teams in low-connectivity zones in Sudan, Uganda, and rural Rwanda rely on this behaviour in apps we have built.',
  },
  {
    question: 'How does the app connect to our ERP or back-office system?',
    answer: 'We build the app\'s API layer to exchange data directly with ERPNext or any back-end system with an accessible API. Field submissions — beneficiary records, incident reports, distribution data — flow into the ERP in real time once synced. This eliminates manual re-entry and gives program managers live visibility into field operations.',
  },
  {
    question: 'Do you handle app store submission and approval?',
    answer: 'Yes. We prepare all required assets — screenshots, app descriptions, privacy policy, and review responses — and manage the submission process for both the Apple App Store and Google Play Store. Approval timelines are set by the stores, but we handle everything on your behalf.',
  },
  {
    question: 'What security measures are applied to mobile apps handling sensitive data?',
    answer: 'For apps handling beneficiary data, health records, or confidential field information, we implement encrypted local storage, secure token-based authentication, certificate pinning to prevent API interception, and role-based data access so users only see records relevant to their assignment. We align these controls with our broader cybersecurity service standards.',
  },
]

function MobileAppsFAQSchema() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: mobileAppsFAQs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
    />
  )
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const alternates = buildAlternates('/services/mobile-apps', locale)
  return {
    ...metadataMobileApps,
    keywords: 'mobile app development, mobile app development Uganda, mobile app development Kenya, Flutter development, React Native development, offline mobile apps, NGO mobile apps East Africa',
    alternates,
    openGraph: {
      title: 'Mobile App Development Services in East Africa',
      description: 'Secure, offline-first mobile apps for NGOs, enterprises and startups built for low-connectivity environments.',
      url: alternates.canonical,
      siteName: 'Blue Team Africa',
      images: [
        {
          url: '/images/services/mobile-apps/services-mobileapps-mobile-apps-hero-01.webp',
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
      title: 'Mobile App Development Services | Blue Team Africa',
      description: 'Build secure, offline-capable mobile solutions for your team.',
      images: ['/images/services/mobile-apps/services-mobileapps-mobile-apps-hero-01.webp'],
    },
  }
}

export default async function MobileAppsPage() {
  const t = await getTranslations('MobileAppsPage')

  const displayFAQs: FAQ[] = [
    { question: t('faq1q'), answer: t('faq1a') },
    { question: t('faq2q'), answer: t('faq2a') },
    { question: t('faq3q'), answer: t('faq3a') },
    { question: t('faq4q'), answer: t('faq4a') },
    { question: t('faq5q'), answer: t('faq5a') },
    { question: t('faq6q'), answer: t('faq6a') },
  ]

  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://www.blueteamafrica.com/' },
        { name: 'Services', url: 'https://www.blueteamafrica.com/services' },
        { name: 'Mobile App Development Services', url: 'https://www.blueteamafrica.com/services/mobile-apps' },
      ]} />
      <MobileAppsFAQSchema />
      <ServiceSchema serviceName="Mobile Apps" serviceSlug="mobile-apps" />
      <InteriorHeader
        title={t('title')}
        breadcrumb={[
          { label: t('breadcrumbHome'), href: '/' },
          { label: t('breadcrumbServices'), href: '/services' },
          { label: t('breadcrumbMobileApps') }
        ]}
      />

      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="hidden lg:block lg:w-1/4 flex-shrink-0">
            <div className="lg:sticky lg:top-24">
              <ServiceSidebar />
            </div>
          </aside>

          <div className="lg:w-3/4 flex-grow">
            {/* Hero Image */}
            <section className="mb-12">
              <div className="relative h-96 bg-gray-200 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/services/mobile-apps/services-mobileapps-mobile-apps-hero-01.webp"
                  alt="Mobile App Development"
                  fill
                  className="object-cover"
                  sizes="100vw"
                  priority
                />
              </div>
            </section>

            {/* Hero Section with Two Columns */}
            <SectionWrapper bgColor="white">
              <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold leading-tight text-gray-900 mb-6">
                    {t('heroH2')}
                  </h2>
                  <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
                    {t('heroPre')}
                    <Link href="/locations/rwanda" className="text-primary hover:text-primary-dark hover:underline">
                      {t('heroLinkLabel')}
                    </Link>
                    {t('heroPost')}
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <a
                      href="https://wa.me/254119402737?text=Hello!%20I%20would%20like%20to%20start%20a%20mobile%20app%20project."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg font-semibold transition"
                    >
                      <MessageCircle size={20} />
                      {t('heroStartApp')}
                    </a>
                    <Link
                      href="/portfolio/mobile-app"
                      className="inline-flex items-center gap-2 border-2 border-gray-300 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition"
                    >
                      {t('heroViewWork')}
                      <ArrowRight size={18} />
                    </Link>
                  </div>
                </div>
                <div className="flex justify-center md:justify-end">
                  <div className="w-full max-w-md bg-gray-50 rounded-xl p-6 shadow-lg">
                    <div className="relative h-64 md:h-80 w-full rounded-lg overflow-hidden">
                      <Image
                        src="/images/services/mobile-apps/services-mobileapps-mobile-apps-ui-01.webp"
                        alt="Mobile app UI preview"
                        fill
                        className="object-cover rounded-lg"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </SectionWrapper>

            {/* Overview & Use Cases */}
            <SectionWrapper bgColor="light">
              <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">
                <div>
                  <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">{t('overviewTitle')}</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {t('overviewPre')}
                    <Link href="/services/erp" className="text-primary hover:underline">{t('overviewLink1')}</Link>
                    {t('overviewMid')}
                    <Link href="/services/crm" className="text-primary hover:underline">{t('overviewLink2')}</Link>
                    {t('overviewPost')}
                  </p>
                  <ul className="list-disc ml-6 text-gray-700 space-y-2">
                    <li>{t('overviewBullet1')}</li>
                    <li>{t('overviewBullet2')}</li>
                    <li>
                      {t('overviewBullet3Pre')}
                      <Link href="/services/erp" className="text-primary hover:underline">{t('overviewBullet3Link1')}</Link>
                      {t('overviewBullet3Mid')}
                      <Link href="/services/crm" className="text-primary hover:underline">{t('overviewBullet3Link2')}</Link>
                      {t('overviewBullet3Post')}
                    </li>
                    <li>{t('overviewBullet4')}</li>
                    <li>{t('overviewBullet5')}</li>
                  </ul>
                </div>
                <div className="flex justify-center">
                  <div className="relative w-full max-w-lg h-80 rounded-xl overflow-hidden shadow-lg bg-gray-50">
                    <Image
                      src="/images/services/mobile-apps/services-mobileapps-mobile-apps-hero-03.webp"
                      alt="Mobile app dashboard"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </div>
            </SectionWrapper>

            {/* Core Features */}
            <SectionWrapper bgColor="white">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-heading font-bold text-gray-900 text-center mb-12">{t('featuresTitle')}</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('feature1Title')}</h3>
                    <p className="text-gray-700">{t('feature1Desc')}</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('feature2Title')}</h3>
                    <p className="text-gray-700">{t('feature2Desc')}</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('feature3Title')}</h3>
                    <p className="text-gray-700">{t('feature3Desc')}</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('feature4Title')}</h3>
                    <p className="text-gray-700">
                      {t('feature4Pre')}
                      <Link href="/services/erp" className="text-primary hover:underline">{t('feature4Link1')}</Link>
                      {t('feature4Mid')}
                      <Link href="/services/crm" className="text-primary hover:underline">{t('feature4Link2')}</Link>
                      {t('feature4Post')}
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('feature5Title')}</h3>
                    <p className="text-gray-700">{t('feature5Desc')}</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('feature6Title')}</h3>
                    <p className="text-gray-700">{t('feature6Desc')}</p>
                  </div>
                </div>
              </div>
            </SectionWrapper>

            {/* Technology & Integrations */}
            <SectionWrapper bgColor="highlight">
              <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
                <div>
                  <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">{t('techTitle')}</h2>
                  <p className="text-gray-700 mb-6">{t('techBody')}</p>
                  <ul className="list-disc ml-6 text-gray-700 space-y-2">
                    <li>{t('techBullet1')}</li>
                    <li>{t('techBullet2')}</li>
                    <li>
                      <Link href="/services/erp" className="text-primary hover:underline">{t('techBullet3Link1')}</Link>
                      {t('techBullet3Mid')}
                      <Link href="/services/crm" className="text-primary hover:underline">{t('techBullet3Link2')}</Link>
                      {t('techBullet3Post')}
                    </li>
                    <li>
                      {t('techBullet4Pre')}
                      <Link href="/services/hosting" className="text-primary hover:underline">{t('techBullet4LinkLabel')}</Link>
                      {t('techBullet4Post')}
                    </li>
                  </ul>
                </div>
                <div className="flex justify-center">
                  <div className="relative w-full max-w-lg h-80 rounded-xl overflow-hidden shadow-lg bg-gray-50">
                    <Image
                      src="/images/services/mobile-apps/services-mobileapps-mobile-apps-hero-02.webp"
                      alt="Mobile app API integration"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </div>
            </SectionWrapper>

            {/* Case Study Teaser */}
            <SectionWrapper bgColor="white">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">{t('caseTitle')}</h2>
                <p className="text-gray-700 leading-relaxed mb-8">
                  {t('caseBody')}
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('caseProblemTitle')}</h3>
                    <p className="text-gray-600">{t('caseProblemBody')}</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('caseSolutionTitle')}</h3>
                    <p className="text-gray-600">{t('caseSolutionBody')}</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('caseImpactTitle')}</h3>
                    <p className="text-gray-600">{t('caseImpactBody')}</p>
                  </div>
                </div>
              </div>
            </SectionWrapper>

            {/* FAQ Section */}
            <SectionWrapper bgColor="white">
              <FAQSection
                customFAQs={displayFAQs}
                title={t('faqTitle')}
                description={t('faqDescription')}
                viewAllLabel={t('faqViewAll')}
              />
            </SectionWrapper>

            {/* CTA Section */}
            <SectionWrapper bgColor="white">
              <div className="max-w-4xl mx-auto text-center py-12 md:py-16 bg-primary text-white rounded-lg">
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">{t('ctaTitle')}</h2>
                <p className="text-white/90 max-w-2xl mx-auto mb-8 text-lg">
                  {t('ctaSubtitle')}
                </p>
                <a
                  href="https://wa.me/254119402737?text=Hello!%20I%20would%20like%20to%20start%20a%20mobile%20app%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition shadow-lg"
                >
                  <MessageCircle size={20} />
                  {t('ctaBtn')}
                </a>
              </div>
            </SectionWrapper>
          </div>
        </div>
      </div>

      {/* Our Services - Mobile Only (Bottom) */}
      <div className="block lg:hidden max-w-7xl mx-auto px-6 pb-12">
        <ServiceSidebar />
      </div>
    </>
  )
}
