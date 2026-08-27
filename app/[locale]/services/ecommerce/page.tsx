import { Link } from '@/i18n/navigation'
import Image from 'next/image'
import { MessageCircle, ArrowRight } from 'lucide-react'
import InteriorHeader from '@/components/InteriorHeader'
import SectionWrapper from '@/components/SectionWrapper'
import ServiceSidebar from '@/components/ServiceSidebar'
import type { Metadata } from 'next'
import { metadataEcommerce } from '@/lib/service-metadata'
import ServiceSchema from '@/components/ServiceSchema'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import FAQSection from '@/components/FAQSection'
import type { FAQ } from '@/lib/faqs'
import { getTranslations } from 'next-intl/server'
import { buildAlternates } from '@/lib/metadata-helpers'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const alternates = buildAlternates('/services/ecommerce', locale)
  return {
    ...metadataEcommerce,
    keywords: 'e-commerce Uganda, e-commerce Kenya, online store development, e-commerce solutions East Africa, mobile money integration, payment gateway integration, e-commerce platform development',
    alternates,
    openGraph: {
      title: 'E-commerce Solutions for Businesses in East Africa',
      description: 'Launch fast, scale secure, and sell everywhere. From mobile-first stores to secure payment integrations and inventory automation.',
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
      title: 'E-commerce Solutions | Blue Team Africa',
      description: 'Build e-commerce platforms that convert and scale across East Africa.',
      images: ['/images/services/ecommerce/services-ecommerce-hero-01.webp'],
    },
  }
}

export default async function EcommercePage() {
  const t = await getTranslations('EcommercePage')

  const displayFAQs: FAQ[] = [
    { question: t('faq1q'), answer: t('faq1a') },
    { question: t('faq2q'), answer: t('faq2a') },
    { question: t('faq3q'), answer: t('faq3a') },
    { question: t('faq4q'), answer: t('faq4a') },
    { question: t('faq5q'), answer: t('faq5a') },
    { question: t('faq6q'), answer: t('faq6a') },
  ]

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: displayFAQs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  }

  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://www.blueteamafrica.com/' },
        { name: 'Services', url: 'https://www.blueteamafrica.com/services' },
        { name: 'E-commerce Solutions', url: 'https://www.blueteamafrica.com/services/ecommerce' },
      ]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <ServiceSchema serviceName="E-commerce" serviceSlug="ecommerce" />
      <InteriorHeader
        title={t('title')}
        breadcrumb={[
          { label: t('breadcrumbHome'), href: '/' },
          { label: t('breadcrumbServices'), href: '/services' },
          { label: t('breadcrumbEcommerce') }
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
            {/* Hero Section with Two Columns */}
            <SectionWrapper bgColor="white">
              <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold leading-tight text-gray-900 mb-6">
                    {t('heroH2')}
                  </h2>
                  <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
                    {t('heroBody')}
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <a
                      href="https://wa.me/254119402737?text=Hello!%20I%20would%20like%20to%20start%20an%20e-commerce%20store."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg font-semibold transition"
                    >
                      <MessageCircle size={20} />
                      {t('heroStartStore')}
                    </a>
                    <Link
                      href="/portfolio/ecommerce-shop"
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
                        src="/images/services/ecommerce/services-ecommerce-dashboard-01.webp"
                        alt="Ecommerce dashboard"
                        fill
                        className="object-cover rounded-lg"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority
                      />
                    </div>
                  </div>
                </div>
              </div>
            </SectionWrapper>

            {/* E-commerce Services We Offer */}
            <SectionWrapper bgColor="light">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-heading font-bold text-gray-900 mb-8">{t('servicesTitle')}</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('service1Title')}</h3>
                    <p className="text-gray-700">{t('service1Body')}</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('service2Title')}</h3>
                    <p className="text-gray-700">{t('service2Body')}</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('service3Title')}</h3>
                    <p className="text-gray-700">{t('service3Body')}</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('service4Title')}</h3>
                    <p className="text-gray-700">{t('service4Body')}</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('service5Title')}</h3>
                    <p className="text-gray-700">{t('service5Body')}</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('service6Title')}</h3>
                    <p className="text-gray-700">{t('service6Body')}</p>
                  </div>
                </div>
              </div>
            </SectionWrapper>

            {/* Tech & Integrations */}
            <SectionWrapper bgColor="white">
              <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
                <div>
                  <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">{t('techTitle')}</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {t('techBody')}
                  </p>
                  <ul className="list-disc ml-6 space-y-2 text-gray-700">
                    <li>{t('techBullet1')}</li>
                    <li>{t('techBullet2')}</li>
                    <li>{t('techBullet3')}</li>
                    <li>{t('techBullet4')}</li>
                  </ul>
                </div>
                <div className="flex justify-center">
                  <div className="relative w-full max-w-lg h-80 rounded-xl overflow-hidden shadow-lg bg-gray-50">
                    <Image
                      src="/images/services/ecommerce/services-ecommerce-integrations-01.webp"
                      alt="Ecommerce integrations"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </div>
            </SectionWrapper>

            {/* Case Study Teaser */}
            <SectionWrapper bgColor="highlight">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">{t('caseTitle')}</h2>
                <p className="text-gray-700 leading-relaxed mb-8">
                  {t('caseBody')}
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('caseProblemTitle')}</h3>
                    <p className="text-gray-600">{t('caseProblemBody')}</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('caseSolutionTitle')}</h3>
                    <p className="text-gray-600">{t('caseSolutionBody')}</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
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
                  href="https://wa.me/254119402737?text=Hello!%20I%20would%20like%20to%20start%20an%20e-commerce%20project."
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
