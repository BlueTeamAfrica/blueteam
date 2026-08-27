import { Link } from '@/i18n/navigation'
import Image from 'next/image'
import { MessageCircle, ArrowRight } from 'lucide-react'
import InteriorHeader from '@/components/InteriorHeader'
import ServiceSidebar from '@/components/ServiceSidebar'
import type { Metadata } from 'next'
import { metadataBranding } from '@/lib/service-metadata'
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
  return {
    ...metadataBranding,
    alternates: buildAlternates('/services/branding', locale),
  }
}

export default async function BrandingPage() {
  const t = await getTranslations('BrandingPage')

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
        { name: 'Branding & Logo Design', url: 'https://www.blueteamafrica.com/services/branding' },
      ]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <ServiceSchema serviceName="Branding" serviceSlug="branding" />
      <InteriorHeader
        title={t('title')}
        breadcrumb={[
          { label: t('breadcrumbHome'), href: '/' },
          { label: t('breadcrumbServices'), href: '/services' },
          { label: t('breadcrumbBranding') }
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
                  src="/images/services/branding/services-branding-hero-01.webp"
                  alt="Branding & Logo Design"
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
                <Link href="/services/web-design" className="text-primary hover:text-primary-dark font-medium">
                  {t('relatedWebDesign')} →
                </Link>
                <Link href="/services/ui-ux" className="text-primary hover:text-primary-dark font-medium">
                  {t('relatedUIUX')} →
                </Link>
                <Link href="/services/ecommerce" className="text-primary hover:text-primary-dark font-medium">
                  {t('relatedEcommerce')} →
                </Link>
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
