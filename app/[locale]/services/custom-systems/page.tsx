import Link from 'next/link'
import Image from 'next/image'
import { MessageCircle, ArrowRight } from 'lucide-react'
import InteriorHeader from '@/components/InteriorHeader'
import ServiceSidebar from '@/components/ServiceSidebar'
import type { Metadata } from 'next'
import { metadataCustomSystems } from '@/lib/service-metadata'
import ServiceSchema from '@/components/ServiceSchema'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import FAQSection from '@/components/FAQSection'
import type { FAQ } from '@/lib/faqs'
import { getTranslations } from 'next-intl/server'

const customSystemsFAQs: FAQ[] = [
  {
    question: 'What counts as a "custom system" — how is it different from a website or an ERP?',
    answer: 'A custom system is purpose-built software that does not map neatly to a standard product. Examples we have built: internal staff management dashboards, beneficiary registration and tracking databases, procurement approval portals, field data collection tools, and reporting systems that pull from multiple data sources. If off-the-shelf software does not fit how you work, a custom system likely does.',
  },
  {
    question: 'How do you scope a custom development project?',
    answer: 'We start with a requirements workshop where we map your current process — what data flows in, what decisions get made, what outputs you need. From that we produce a functional specification and a fixed scope before any development begins. This prevents scope creep and gives you a clear cost and timeline before committing.',
  },
  {
    question: 'Can a custom system integrate with our existing tools — ERP, mobile app, website?',
    answer: 'Yes, and this is often the point. We build custom systems with open APIs so they can exchange data with ERPNext, mobile apps we develop, your website, or third-party tools like Google Workspace or payment gateways. We have built systems that sit as a coordination layer across several existing platforms.',
  },
  {
    question: 'Who owns the code when the project is complete?',
    answer: 'You do, entirely. We hand over the full source code, deployment configuration, and technical documentation. We do not retain licensing rights over anything we build for you.',
  },
  {
    question: 'How long does custom software development take?',
    answer: 'Scope determines timeline. Focused internal tools — a dashboard, a single-process workflow app — typically take six to ten weeks. Larger systems with multiple user roles, complex data models, or third-party integrations run twelve to twenty weeks. We provide a firm estimate after the requirements workshop.',
  },
  {
    question: 'Do you provide training and ongoing maintenance after delivery?',
    answer: 'Yes. Handover includes documentation and at minimum one training session for administrators and end users. We offer ongoing maintenance contracts for bug fixes, feature additions, and server management — particularly important for systems handling live operational data.',
  },
]

function CustomSystemsFAQSchema() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: customSystemsFAQs.map((faq) => ({
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
  const canonical = `https://www.blueteamafrica.com${lp}/services/custom-systems`
  return {
    ...metadataCustomSystems,
    alternates: { canonical },
  }
}

export default async function CustomSystemsPage() {
  const t = await getTranslations('CustomSystemsPage')

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
        { name: 'Custom Software Development', url: 'https://www.blueteamafrica.com/services/custom-systems' },
      ]} />
      <CustomSystemsFAQSchema />
      <ServiceSchema serviceName="Custom Systems" serviceSlug="custom-systems" />
      <InteriorHeader
        title={t('title')}
        breadcrumb={[
          { label: t('breadcrumbHome'), href: '/' },
          { label: t('breadcrumbServices'), href: '/services' },
          { label: t('breadcrumbCustomSystems') }
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
                  src="/images/services/custom-systems/services-customsystems-custom-systems-hero-01.webp"
                  alt="Custom Software Development"
                  fill
                  className="object-cover"
                  sizes="100vw"
                  priority
                />
              </div>
            </section>

            {/* Intro */}
            <section className="mb-12">
              <p className="text-lg text-gray-700 leading-relaxed">
                {t('intro')}
              </p>
            </section>

            {/* 3 Value Pillars */}
            <section className="mb-12">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('pillar1Title')}</h3>
                  <p className="text-gray-600">
                    {t('pillar1Body')}
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('pillar2Title')}</h3>
                  <p className="text-gray-600">
                    {t('pillar2Body')}
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('pillar3Title')}</h3>
                  <p className="text-gray-600">
                    {t('pillar3Body')}
                  </p>
                </div>
              </div>
            </section>

            {/* Why Choose Blue Team Africa */}
            <section className="mb-12">
              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-8">
                {t('whyTitle')}
              </h2>
              <div className="space-y-6 text-gray-700">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">{t('why1Title')}</h3>
                  <p>{t('why1Body')}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">{t('why2Title')}</h3>
                  <p>{t('why2Body')}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">{t('why3Title')}</h3>
                  <p>{t('why3Body')}</p>
                </div>
              </div>
            </section>

            {/* Related Services */}
            <section className="mb-12 p-6 bg-gray-50 rounded-lg">
              <h2 className="text-2xl font-heading font-bold text-gray-900 mb-6">{t('relatedTitle')}</h2>
              <div className="flex flex-wrap gap-4">
                <Link href="/services/erp" className="text-primary hover:text-primary-dark font-medium">
                  {t('relatedERP')} →
                </Link>
                <Link href="/services/crm" className="text-primary hover:text-primary-dark font-medium">
                  {t('relatedCRM')} →
                </Link>
                <Link href="/services/mobile-apps" className="text-primary hover:text-primary-dark font-medium">
                  {t('relatedMobileApps')} →
                </Link>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-600 mb-3">{t('seeOurWork')}</p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/portfolio/ngo-portal" className="text-primary hover:text-primary-dark font-medium">
                    {t('caseStudy1Label')} →
                  </Link>
                  <Link href="/portfolio/crm-system" className="text-primary hover:text-primary-dark font-medium">
                    {t('caseStudy2Label')} →
                  </Link>
                </div>
              </div>
            </section>

            {/* FAQ Section */}
            <section className="mb-12">
              <FAQSection
                customFAQs={displayFAQs}
                title={t('faqTitle')}
                description={t('faqDescription')}
                viewAllLabel={t('faqViewAll')}
              />
            </section>

            {/* CTA Strip */}
            <section className="p-8 bg-primary text-white rounded-lg">
              <div className="text-center">
                <h2 className="text-2xl font-heading font-bold mb-4">{t('ctaTitle')}</h2>
                <p className="text-primary-100 mb-6">{t('ctaSubtitle')}</p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href="https://wa.me/254119402737"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
                  >
                    <MessageCircle size={20} />
                    {t('ctaWhatsApp')}
                  </a>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition"
                  >
                    {t('ctaGetQuote')}
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </section>
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
