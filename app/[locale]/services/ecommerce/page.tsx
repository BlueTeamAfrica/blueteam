import Link from 'next/link'
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

const ecommerceFAQs: FAQ[] = [
  {
    question: 'What types of e-commerce stores do you build?',
    answer: 'We build custom online stores, B2B ordering portals, marketplace platforms, and donation or payment collection pages. We work with WooCommerce for WordPress-based projects and Next.js with headless commerce for performance-critical or highly custom builds. We help you choose the right architecture based on your catalogue size, traffic expectations, and integrations needed.',
  },
  {
    question: 'Do you integrate mobile money payment methods?',
    answer: 'Yes — this is a standard part of our East Africa e-commerce builds. We integrate MTN Mobile Money, Airtel Money, M-Pesa, and regional payment gateways alongside international options like Stripe or PayPal where needed. We confirm gateway availability for your country during scoping.',
  },
  {
    question: 'Can you connect the store to our inventory and order management?',
    answer: 'Yes. Inventory and order management integration is one of the key services we offer. For organizations already using an ERP like ERPNext, we connect the store directly so stock levels, orders, and customer records sync automatically without manual reconciliation.',
  },
  {
    question: 'How long does an e-commerce project take to build?',
    answer: 'A straightforward product catalogue with payment integration typically runs four to eight weeks. Stores with custom product configurators, marketplace features, or ERP integration sit in the eight to fourteen week range. Timeline is confirmed after scoping.',
  },
  {
    question: 'Is the store built to perform well on slow connections common in East Africa?',
    answer: 'Performance in variable-connectivity environments is something we design for explicitly — image optimization, lazy loading, minimal JavaScript payloads, and CDN delivery. We test load times on typical East African mobile connections before handover, not just on fast broadband.',
  },
  {
    question: 'What ongoing support does an e-commerce store need?',
    answer: 'At minimum: security updates, payment gateway certificate renewals, and platform version updates. We offer maintenance plans that cover all of this plus content changes, product catalogue updates, and promotional configuration. Hosting is managed separately through our hosting service.',
  },
]

function EcommerceFAQSchema() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: ecommerceFAQs.map((faq) => ({
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
  const lp = locale === 'en' ? '' : `/${locale}`
  const canonical = `https://www.blueteamafrica.com${lp}/services/ecommerce`
  return {
    ...metadataEcommerce,
    keywords: 'e-commerce Uganda, e-commerce Kenya, online store development, e-commerce solutions East Africa, mobile money integration, payment gateway integration, e-commerce platform development',
    alternates: { canonical },
    openGraph: {
      title: 'E-commerce Solutions for Businesses in East Africa',
      description: 'Launch fast, scale secure, and sell everywhere. From mobile-first stores to secure payment integrations and inventory automation.',
      url: canonical,
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

  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://www.blueteamafrica.com/' },
        { name: 'Services', url: 'https://www.blueteamafrica.com/services' },
        { name: 'E-commerce Solutions', url: 'https://www.blueteamafrica.com/services/ecommerce' },
      ]} />
      <EcommerceFAQSchema />
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
