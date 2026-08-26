import { Link } from '@/i18n/navigation'
import Image from 'next/image'
import { MessageCircle, ArrowRight } from 'lucide-react'
import InteriorHeader from '@/components/InteriorHeader'
import ServiceSidebar from '@/components/ServiceSidebar'
import type { Metadata } from 'next'
import { metadataHosting } from '@/lib/service-metadata'
import ServiceSchema from '@/components/ServiceSchema'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import FAQSection from '@/components/FAQSection'
import type { FAQ } from '@/lib/faqs'
import { getTranslations } from 'next-intl/server'
import { buildAlternates } from '@/lib/metadata-helpers'

const hostingFAQs: FAQ[] = [
  {
    question: 'What does your hosting service actually include?',
    answer: 'Our hosting packages cover server provisioning and configuration, SSL certificate setup and renewal, daily automated backups, uptime monitoring, CDN configuration for faster delivery across East Africa, and basic security hardening. We manage the infrastructure so your team does not need a sysadmin on staff.',
  },
  {
    question: 'Where are your servers located, and does that affect speed in East Africa?',
    answer: 'We use cloud infrastructure with regional options including providers with points of presence in Africa, which reduces latency for users in Uganda, Kenya, Rwanda, and Sudan compared to servers located exclusively in Europe or the US. For most projects we also configure a CDN layer so static assets are served from the nearest edge node regardless of origin server location.',
  },
  {
    question: 'What uptime guarantee do you offer?',
    answer: 'Our infrastructure targets 99.9% uptime. For production systems — particularly ERP platforms or e-commerce stores where downtime has direct operational or revenue impact — we can discuss higher-availability configurations with redundant infrastructure.',
  },
  {
    question: 'Can you host our existing website or system, not just ones you built?',
    answer: 'Yes. We migrate and host sites and applications we did not build, provided they run on a supported stack (typically Node.js, PHP, or Python-based applications). We assess compatibility during scoping and handle the migration with minimal downtime.',
  },
  {
    question: 'How do you handle security at the hosting level?',
    answer: 'Standard hardening includes firewall configuration, SSH key-only access, automated security patching, and encrypted backups stored off-server. For organizations with higher risk profiles — particularly NGOs handling sensitive beneficiary or field data — we can layer in additional monitoring through our cybersecurity service.',
  },
  {
    question: 'Is hosting bundled with other services or priced separately?',
    answer: 'Hosting is available as a standalone service or bundled with website development, ERP, or custom systems projects. Pricing depends on resource requirements — storage, traffic volume, number of domains, and whether a managed database is needed. Contact us for a quote once you know what you need to run.',
  },
]

function HostingFAQSchema() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: hostingFAQs.map((faq) => ({
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
  return {
    ...metadataHosting,
    alternates: buildAlternates('/services/hosting', locale),
  }
}

export default async function HostingPage() {
  const t = await getTranslations('HostingPage')

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
        { name: 'Cloud & Web Hosting', url: 'https://www.blueteamafrica.com/services/hosting' },
      ]} />
      <HostingFAQSchema />
      <ServiceSchema serviceName="Hosting" serviceSlug="hosting" />
      <InteriorHeader
        title={t('title')}
        breadcrumb={[
          { label: t('breadcrumbHome'), href: '/' },
          { label: t('breadcrumbServices'), href: '/services' },
          { label: t('breadcrumbHosting') }
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
                  src="/images/services/hosting/services-hosting-hero-01.webp"
                  alt="Cloud & Web Hosting"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 75vw"
                  priority
                />
              </div>
            </section>

            {/* Intro */}
            <section className="mb-12">
              <p className="text-lg text-gray-700 leading-relaxed">
                {t('intro')}{' '}
                {t('introRwandaPre')}{' '}
                <Link href="/web-development-rwanda" className="text-primary hover:text-primary-dark hover:underline">
                  {t('introLinkLabel')}
                </Link>{' '}
                {t('introRwandaPost')}
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
                <Link href="/services/cybersecurity" className="text-primary hover:text-primary-dark font-medium">
                  {t('relatedCybersecurity')} →
                </Link>
                <Link href="/services/maintenance" className="text-primary hover:text-primary-dark font-medium">
                  {t('relatedMaintenance')} →
                </Link>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-600 mb-3">{t('seeOurWork')}</p>
                <Link href="/portfolio/cloud-migration" className="text-primary hover:text-primary-dark font-medium">
                  {t('caseStudyLabel')} →
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
