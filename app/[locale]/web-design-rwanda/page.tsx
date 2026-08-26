import type { Metadata } from 'next'
import { Link } from '@/i18n/navigation'
import Image from 'next/image'
import InteriorHeader from '@/components/InteriorHeader'
import { MessageCircle, ArrowRight, Globe, Smartphone, Search, Zap } from 'lucide-react'
import FAQSection from '@/components/FAQSection'
import type { FAQ } from '@/lib/faqs'
import { getTranslations } from 'next-intl/server'
import { buildAlternates } from '@/lib/metadata-helpers'

const webDesignRwandaFAQs: FAQ[] = [
  {
    question: 'How much does web design cost in Rwanda?',
    answer: 'Web design costs in Rwanda depend on project scope, features, and complexity. Blue Team Africa offers flexible pricing tailored to business and NGO needs, with transparent packages starting from RWF 350,000.',
  },
  {
    question: 'How long does it take to build a website?',
    answer: 'Website development timelines vary based on project complexity. A standard 5-page website typically takes 2-4 weeks, while more complex sites with custom features may take 6-8 weeks. We provide clear timelines during project planning.',
  },
  {
    question: 'Do you work with NGOs and international organizations?',
    answer: 'Yes. We specialize in web design for NGOs and international organizations operating in Rwanda, including informational websites, program portals, donation platforms, and multi-language sites for global audiences.',
  },
  {
    question: 'Can you redesign an existing website?',
    answer: 'Yes. We offer website redesign services to modernize existing sites, improve performance, enhance user experience, and update content management systems while preserving your brand identity and SEO value.',
  },
]

function WebDesignRwandaFAQSchema() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: webDesignRwandaFAQs.map((faq) => ({
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
  const alternates = buildAlternates('/web-design-rwanda', locale)
  return {
    title: 'Web Design Company in Rwanda | High-Performance Websites for Business & NGOs',
    description: 'Professional web design company in Rwanda delivering fast, secure, and SEO-ready websites for businesses and NGOs. Get a custom quote today.',
    robots: 'index, follow',
    alternates,
    keywords: [
      'web design Rwanda',
      'website design Rwanda',
      'web design Kigali',
      'website design Kigali',
      'professional web design Rwanda',
      'responsive web design Rwanda',
      'business website design Rwanda',
    ],
    openGraph: {
      title: 'Web Design Company in Rwanda | High-Performance Websites for Business & NGOs',
      description: 'Reliable web design company in Rwanda. We build fast, SEO-ready websites for businesses, NGOs, and growing organizations. Get a quote today.',
      url: alternates.canonical,
      type: 'website',
    },
  }
}

export default async function WebDesignRwandaPage() {
  const t = await getTranslations('WebDesignRwandaPage')

  const displayFAQs: FAQ[] = [
    { question: t('faq1Q'), answer: t('faq1A') },
    { question: t('faq2Q'), answer: t('faq2A') },
    { question: t('faq3Q'), answer: t('faq3A') },
    { question: t('faq4Q'), answer: t('faq4A') },
  ]

  return (
    <>
      <WebDesignRwandaFAQSchema />
      <InteriorHeader
        title={t('pageTitle')}
        breadcrumb={[
          { label: t('breadcrumbHome'), href: '/' },
          { label: t('breadcrumbCurrent') },
        ]}
        headingLevel="h2"
      />

      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-br from-primary/10 via-primary/5 to-gray-50 py-16 md:py-24 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="fade-up">
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-gray-900 leading-tight">
                {t('pageTitle')}
              </h1>
              <p className="text-base md:text-lg text-gray-700 mb-4 leading-relaxed font-medium">
                {t('heroTrustBadge')}
              </p>
              <p className="text-lg md:text-xl text-gray-700 mb-4 leading-relaxed">
                {t('heroP1')}
              </p>
              <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
                {t('heroP2')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-block px-8 py-4 bg-primary text-white rounded-lg hover:bg-primary-dark transition-all font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-center"
                >
                  {t('heroCTA1')}
                </Link>
                <Link
                  href="/locations/rwanda"
                  className="inline-block px-8 py-4 border-2 border-primary text-primary rounded-lg hover:bg-primary/5 transition-all font-semibold text-center"
                >
                  {t('heroCTA2')}
                </Link>
              </div>
            </div>
            <div className="fade-in">
              <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/services/web-design/services-webdesign-web-design-hero-01.webp"
                  alt="Professional web design services for businesses in Rwanda"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-12 md:py-20">
        {/* Pricing Section */}
        <section className="mb-16 fade-up" aria-labelledby="pricing-rwanda">
          <h2 id="pricing-rwanda" className="text-3xl md:text-4xl font-heading font-semibold mb-4 text-gray-900">
            {t('pricingTitle')}
          </h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            {t('pricingIntro')}
          </p>
          <div className="pricing-grid">
            {/* Starter */}
            <div className="pricing-card">
              <h3 className="text-2xl font-heading font-semibold mb-4 text-gray-900">{t('starterName')}</h3>
              <p className="price text-3xl font-bold mb-6 text-primary">RWF 350,000</p>
              <ul className="space-y-3 mb-6 text-gray-700">
                <li className="flex items-start"><span className="text-primary mr-2">•</span><span>{t('starterBullet1')}</span></li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><span>{t('starterBullet2')}</span></li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><span>{t('starterBullet3')}</span></li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><span>{t('starterBullet4')}</span></li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><span>{t('starterBullet5')}</span></li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><span>{t('starterBullet6')}</span></li>
              </ul>
              <p className="note text-sm text-gray-600 italic">{t('starterNote')}</p>
            </div>

            {/* Business */}
            <div className="pricing-card featured">
              <h3 className="text-2xl font-heading font-semibold mb-4 text-gray-900">{t('businessName')}</h3>
              <p className="price text-3xl font-bold mb-6 text-primary">RWF 750,000</p>
              <ul className="space-y-3 mb-6 text-gray-700">
                <li className="flex items-start"><span className="text-primary mr-2">•</span><span>{t('businessBullet1')}</span></li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><span>{t('businessBullet2')}</span></li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><span>{t('businessBullet3')}</span></li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><span>{t('businessBullet4')}</span></li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><span>{t('businessBullet5')}</span></li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><span>{t('businessBullet6')}</span></li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><span>{t('businessBullet7')}</span></li>
              </ul>
              <p className="note text-sm text-gray-600 italic">{t('businessNote')}</p>
            </div>

            {/* Enterprise */}
            <div className="pricing-card">
              <h3 className="text-2xl font-heading font-semibold mb-4 text-gray-900">{t('enterpriseName')}</h3>
              <p className="price text-3xl font-bold mb-6 text-primary">{t('enterprisePrice')}</p>
              <ul className="space-y-3 mb-6 text-gray-700">
                <li className="flex items-start"><span className="text-primary mr-2">•</span><span>{t('enterpriseBullet1')}</span></li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><span>{t('enterpriseBullet2')}</span></li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><span>{t('enterpriseBullet3')}</span></li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><span>{t('enterpriseBullet4')}</span></li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><span>{t('enterpriseBullet5')}</span></li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><span>{t('enterpriseBullet6')}</span></li>
              </ul>
              <p className="note text-sm text-gray-600 italic">{t('enterpriseNote')}</p>
            </div>
          </div>
        </section>

        {/* Why Web Design Matters in Rwanda */}
        <section className="mb-16 fade-up" aria-labelledby="why-web-design">
          <h2 id="why-web-design" className="text-3xl md:text-4xl font-heading font-semibold mb-6 text-gray-900">
            {t('whyTitle')}
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="mb-4">{t('whyP1')}</p>
            <p className="mb-4">{t('whyP2')}</p>
            <p>{t('whyP3')}</p>
          </div>
        </section>

        {/* Our Web Design Approach */}
        <section className="mb-16 bg-gray-50 rounded-2xl p-8 md:p-10 fade-up" aria-labelledby="our-approach">
          <h2 id="our-approach" className="text-3xl md:text-4xl font-heading font-semibold mb-8 text-gray-900">
            {t('approachTitle')}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-heading font-semibold mb-4 text-gray-900">{t('approach1Title')}</h3>
              <p className="text-gray-700 leading-relaxed">{t('approach1Body')}</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-heading font-semibold mb-4 text-gray-900">{t('approach2Title')}</h3>
              <p className="text-gray-700 leading-relaxed">{t('approach2Body')}</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-heading font-semibold mb-4 text-gray-900">{t('approach3Title')}</h3>
              <p className="text-gray-700 leading-relaxed">{t('approach3Body')}</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-heading font-semibold mb-4 text-gray-900">{t('approach4Title')}</h3>
              <p className="text-gray-700 leading-relaxed">{t('approach4Body')}</p>
            </div>
          </div>
        </section>

        {/* Services We Offer */}
        <section className="mb-16 fade-up" aria-labelledby="services-offered">
          <h2 id="services-offered" className="text-3xl md:text-4xl font-heading font-semibold mb-8 text-gray-900">
            {t('servicesOfferedTitle')}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all border border-gray-100">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3 text-gray-900">{t('serviceCard1Title')}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{t('serviceCard1Body')}</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all border border-gray-100">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Smartphone className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3 text-gray-900">{t('serviceCard2Title')}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{t('serviceCard2Body')}</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all border border-gray-100">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Search className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3 text-gray-900">{t('serviceCard3Title')}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{t('serviceCard3Body')}</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all border border-gray-100">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3 text-gray-900">{t('serviceCard4Title')}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{t('serviceCard4Body')}</p>
            </div>
          </div>
        </section>

        {/* Why Choose Blue Team Africa */}
        <section className="mb-16 bg-gradient-to-br from-primary/5 to-gray-50 rounded-2xl p-8 md:p-12 fade-up" aria-labelledby="why-choose">
          <h2 id="why-choose" className="text-3xl md:text-4xl font-heading font-semibold mb-8 text-gray-900 text-center">
            {t('whyChooseTitle')}
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div>
              <h3 className="text-xl font-heading font-semibold mb-3 text-gray-900">{t('whyChoose1Title')}</h3>
              <p className="text-gray-700 leading-relaxed">{t('whyChoose1Body')}</p>
            </div>
            <div>
              <h3 className="text-xl font-heading font-semibold mb-3 text-gray-900">{t('whyChoose2Title')}</h3>
              <p className="text-gray-700 leading-relaxed">{t('whyChoose2Body')}</p>
              <p className="text-gray-700 leading-relaxed mt-3">
                {t.rich('whyChoose2BodyP2', {
                  devLink: (chunks) => (
                    <Link href="/web-development-rwanda" className="text-primary hover:text-primary-dark hover:underline">{chunks}</Link>
                  ),
                })}
              </p>
            </div>
            <div>
              <h3 className="text-xl font-heading font-semibold mb-3 text-gray-900">{t('whyChoose3Title')}</h3>
              <p className="text-gray-700 leading-relaxed">{t('whyChoose3Body')}</p>
            </div>
            <div>
              <h3 className="text-xl font-heading font-semibold mb-3 text-gray-900">{t('whyChoose4Title')}</h3>
              <p className="text-gray-700 leading-relaxed">{t('whyChoose4Body')}</p>
            </div>
          </div>
        </section>

        {/* Industries We Serve in Rwanda */}
        <section className="mb-16 bg-white rounded-2xl p-8 md:p-10 border border-gray-200 fade-up" aria-labelledby="industries-rwanda">
          <h2 id="industries-rwanda" className="text-3xl md:text-4xl font-heading font-semibold mb-6 text-gray-900">
            {t('industriesTitle')}
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="mb-4">{t('industriesIntro')}</p>
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div>
                <h3 className="text-xl font-heading font-semibold mb-3 text-gray-900">{t('ngoIndustryTitle')}</h3>
                <p className="text-gray-700 leading-relaxed mb-3">{t('ngoIndustryBody')}</p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start"><span className="text-primary mr-2">•</span><span>{t('ngoBullet1')}</span></li>
                  <li className="flex items-start"><span className="text-primary mr-2">•</span><span>{t('ngoBullet2')}</span></li>
                  <li className="flex items-start"><span className="text-primary mr-2">•</span><span>{t('ngoBullet3')}</span></li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-heading font-semibold mb-3 text-gray-900">{t('bizIndustryTitle')}</h3>
                <p className="text-gray-700 leading-relaxed mb-3">{t('bizIndustryBody')}</p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start"><span className="text-primary mr-2">•</span><span>{t('bizBullet1')}</span></li>
                  <li className="flex items-start"><span className="text-primary mr-2">•</span><span>{t('bizBullet2')}</span></li>
                  <li className="flex items-start"><span className="text-primary mr-2">•</span><span>{t('bizBullet3')}</span></li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-heading font-semibold mb-3 text-gray-900">{t('eduIndustryTitle')}</h3>
                <p className="text-gray-700 leading-relaxed mb-3">{t('eduIndustryBody')}</p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start"><span className="text-primary mr-2">•</span><span>{t('eduBullet1')}</span></li>
                  <li className="flex items-start"><span className="text-primary mr-2">•</span><span>{t('eduBullet2')}</span></li>
                  <li className="flex items-start"><span className="text-primary mr-2">•</span><span>{t('eduBullet3')}</span></li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-heading font-semibold mb-3 text-gray-900">{t('healthIndustryTitle')}</h3>
                <p className="text-gray-700 leading-relaxed mb-3">{t('healthIndustryBody')}</p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start"><span className="text-primary mr-2">•</span><span>{t('healthBullet1')}</span></li>
                  <li className="flex items-start"><span className="text-primary mr-2">•</span><span>{t('healthBullet2')}</span></li>
                  <li className="flex items-start"><span className="text-primary mr-2">•</span><span>{t('healthBullet3')}</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Our Web Design Process */}
        <section className="mb-16 fade-up" aria-labelledby="design-process">
          <h2 id="design-process" className="text-3xl md:text-4xl font-heading font-semibold mb-6 text-gray-900">
            {t('processTitle')}
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="mb-6">{t('processIntro')}</p>
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h3 className="text-xl font-heading font-semibold mb-3 text-gray-900">{t('process1Title')}</h3>
                <p className="text-gray-700 leading-relaxed mb-3">{t('process1Body')}</p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start"><span className="text-primary mr-2">•</span><span>{t('process1Bullet1')}</span></li>
                  <li className="flex items-start"><span className="text-primary mr-2">•</span><span>{t('process1Bullet2')}</span></li>
                  <li className="flex items-start"><span className="text-primary mr-2">•</span><span>{t('process1Bullet3')}</span></li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h3 className="text-xl font-heading font-semibold mb-3 text-gray-900">{t('process2Title')}</h3>
                <p className="text-gray-700 leading-relaxed mb-3">{t('process2Body')}</p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start"><span className="text-primary mr-2">•</span><span>{t('process2Bullet1')}</span></li>
                  <li className="flex items-start"><span className="text-primary mr-2">•</span><span>{t('process2Bullet2')}</span></li>
                  <li className="flex items-start"><span className="text-primary mr-2">•</span><span>{t('process2Bullet3')}</span></li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h3 className="text-xl font-heading font-semibold mb-3 text-gray-900">{t('process3Title')}</h3>
                <p className="text-gray-700 leading-relaxed mb-3">{t('process3Body')}</p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start"><span className="text-primary mr-2">•</span><span>{t('process3Bullet1')}</span></li>
                  <li className="flex items-start"><span className="text-primary mr-2">•</span><span>{t('process3Bullet2')}</span></li>
                  <li className="flex items-start"><span className="text-primary mr-2">•</span><span>{t('process3Bullet3')}</span></li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h3 className="text-xl font-heading font-semibold mb-3 text-gray-900">{t('process4Title')}</h3>
                <p className="text-gray-700 leading-relaxed mb-3">{t('process4Body')}</p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start"><span className="text-primary mr-2">•</span><span>{t('process4Bullet1')}</span></li>
                  <li className="flex items-start"><span className="text-primary mr-2">•</span><span>{t('process4Bullet2')}</span></li>
                  <li className="flex items-start"><span className="text-primary mr-2">•</span><span>{t('process4Bullet3')}</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="mb-16 bg-gradient-to-br from-primary/5 to-gray-50 rounded-2xl p-8 md:p-10 fade-up" aria-labelledby="related-services">
          <h2 id="related-services" className="text-3xl md:text-4xl font-heading font-semibold mb-6 text-gray-900">
            {t('relatedServicesTitle')}
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="mb-6">{t('relatedServicesIntro')}</p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-heading font-semibold mb-3 text-gray-900">{t('relatedWebDevTitle')}</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  {t.rich('relatedWebDevP1', {
                    devLink: (chunks) => (
                      <Link href="/web-development-rwanda" className="text-primary hover:text-primary-dark hover:underline">{chunks}</Link>
                    ),
                  })}
                </p>
                <p className="text-gray-700 leading-relaxed text-sm">{t('relatedWebDevP2')}</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-heading font-semibold mb-3 text-gray-900">{t('relatedBrandingTitle')}</h3>
                <p className="text-gray-700 leading-relaxed mb-3">{t('relatedBrandingP1')}</p>
                <p className="text-gray-700 leading-relaxed text-sm">{t('relatedBrandingP2')}</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-heading font-semibold mb-3 text-gray-900">{t('relatedHostingTitle')}</h3>
                <p className="text-gray-700 leading-relaxed mb-3">{t('relatedHostingP1')}</p>
                <p className="text-gray-700 leading-relaxed text-sm">{t('relatedHostingP2')}</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-heading font-semibold mb-3 text-gray-900">{t('relatedEcommerceTitle')}</h3>
                <p className="text-gray-700 leading-relaxed mb-3">{t('relatedEcommerceP1')}</p>
                <p className="text-gray-700 leading-relaxed text-sm">{t('relatedEcommerceP2')}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Working with Organizations in Rwanda */}
        <section className="mb-16 fade-up" aria-labelledby="working-rwanda">
          <h2 id="working-rwanda" className="text-3xl md:text-4xl font-heading font-semibold mb-6 text-gray-900">
            {t('workingTitle')}
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="mb-4">{t('workingP1')}</p>
            <p className="mb-4">{t('workingP2')}</p>
            <p>{t('workingP3')}</p>
            <p className="mt-4">
              {t.rich('workingP4', {
                costGuideLink: (chunks) => (
                  <Link href="/blog/web-design-cost-in-rwanda-2026" className="text-primary hover:text-primary-dark hover:underline">{chunks}</Link>
                ),
              })}
            </p>
          </div>
          <div className="mt-8">
            <Link
              href="/locations/rwanda"
              className="inline-flex items-center text-primary font-semibold hover:text-primary-dark hover:underline"
            >
              {t('workingFooterLink')}
            </Link>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-16 fade-up" aria-labelledby="faq-section">
          <FAQSection
            customFAQs={displayFAQs}
            title={t('faqTitle')}
            description={t('faqDescription')}
            viewAllLabel={t('faqViewAll')}
          />
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-8 md:p-12 text-white fade-in shadow-2xl" aria-labelledby="cta-section">
          <h2 id="cta-section" className="text-3xl md:text-4xl font-heading font-semibold mb-4 text-white">
            {t('ctaTitle')}
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            {t('ctaBody')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/254119402737"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <MessageCircle size={20} />
              {t('ctaWhatsApp')}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all"
            >
              {t('ctaGetQuote')}
              <ArrowRight size={18} className="rtl:rotate-180" />
            </Link>
          </div>
        </section>
      </div>
    </>
  )
}
