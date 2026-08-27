import type { Metadata } from 'next'
import { Link } from '@/i18n/navigation'
import InteriorHeader from '@/components/InteriorHeader'
import { getTranslations } from 'next-intl/server'
import { buildAlternates } from '@/lib/metadata-helpers'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const alternates = buildAlternates('/locations/sudan', locale)
  return {
    title: 'Technology Solutions for Sudanese Organizations | Blue Team Africa',
    description:
      'Blue Team Africa builds secure, reliable digital systems for Sudanese humanitarian groups, media organizations, businesses, and educational institutions — inside Sudan and across the diaspora.',
    robots: 'index, follow',
    alternates,
    keywords: [
      'technology solutions Sudan',
      'digital systems Sudan',
      'NGO technology Sudan',
      'humanitarian technology Sudan',
      'Sudanese organizations tech',
      'LMS Sudan colleges',
      'secure systems Sudan',
      'diaspora Sudan technology',
    ],
    openGraph: {
      title: 'Technology Solutions for Sudanese Organizations | Blue Team Africa',
      description:
        'Secure, reliable digital systems for Sudanese humanitarian groups, media organizations, businesses, and educational institutions.',
      url: alternates.canonical,
      type: 'website',
    },
  }
}

export async function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'ar' }]
}

export default async function SudanLocationPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  await params
  const t = await getTranslations('LocationsSudanPage')

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: t('faq1Q'), acceptedAnswer: { '@type': 'Answer', text: t('faq1A') } },
      { '@type': 'Question', name: t('faq2Q'), acceptedAnswer: { '@type': 'Answer', text: t('faq2A') } },
      { '@type': 'Question', name: t('faq3Q'), acceptedAnswer: { '@type': 'Answer', text: t('faq3A') } },
      { '@type': 'Question', name: t('faq4Q'), acceptedAnswer: { '@type': 'Answer', text: t('faq4A') } },
      { '@type': 'Question', name: t('faq5Q'), acceptedAnswer: { '@type': 'Answer', text: t('faq5A') } },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <InteriorHeader
        title={t('headerTitle')}
        breadcrumb={[
          { label: t('breadcrumbHome'), href: '/' },
          { label: t('breadcrumbLocations'), href: '#' },
          { label: t('breadcrumbSudan') },
        ]}
      />

      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-br from-primary/10 via-primary/5 to-gray-50 py-16 md:py-24 overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <div className="fade-up">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-gray-900 leading-tight">
              {t('heroH1')}
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed max-w-3xl mx-auto">
              {t('heroPara')}
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-primary text-white rounded-lg hover:bg-primary-dark transition-all font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              {t('heroCta')}
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-12 md:py-20">

        {/* Who We Work With */}
        <section className="mb-16 fade-up" aria-labelledby="who-we-work-with">
          <h2 id="who-we-work-with" className="text-3xl md:text-4xl font-heading font-semibold mb-8 text-gray-900">
            {t('whoWeWorkWithTitle')}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
              <h3 className="text-xl font-heading font-semibold mb-3 text-gray-900">{t('item1Title')}</h3>
              <p className="text-gray-600 leading-relaxed">{t('item1Body')}</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
              <h3 className="text-xl font-heading font-semibold mb-3 text-gray-900">{t('item2Title')}</h3>
              <p className="text-gray-600 leading-relaxed">{t('item2Body')}</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
              <h3 className="text-xl font-heading font-semibold mb-3 text-gray-900">{t('item3Title')}</h3>
              <p className="text-gray-600 leading-relaxed">{t('item3Body')}</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
              <h3 className="text-xl font-heading font-semibold mb-3 text-gray-900">{t('item4Title')}</h3>
              <p className="text-gray-600 leading-relaxed">{t('item4Body')}</p>
            </div>
          </div>
        </section>

        {/* Built for the Realities of the Region */}
        <section className="mb-16 bg-gray-50 rounded-2xl p-8 md:p-10 fade-up" aria-labelledby="realities-section">
          <h2 id="realities-section" className="text-3xl md:text-4xl font-heading font-semibold mb-6 text-gray-900">
            {t('realitiesTitle')}
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">{t('realitiesPara')}</p>
        </section>

        {/* Education Technology — LMS */}
        <section className="mb-16 bg-primary/5 border border-primary/20 rounded-2xl p-8 md:p-10 fade-up" aria-labelledby="lms-section">
          <h2 id="lms-section" className="text-3xl md:text-4xl font-heading font-semibold mb-6 text-gray-900">
            {t('lmsTitle')}
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">{t('lmsPara')}</p>
        </section>

        {/* FAQ Section */}
        <section className="mb-16 fade-up" aria-labelledby="faq-sudan">
          <h2 id="faq-sudan" className="text-3xl md:text-4xl font-heading font-semibold mb-8 text-gray-900">
            {t('faqTitle')}
          </h2>
          <div className="space-y-6">
            <details className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <summary className="font-heading font-semibold cursor-pointer text-gray-900 text-lg mb-2">{t('faq1Q')}</summary>
              <p className="mt-4 text-gray-700 leading-relaxed">{t('faq1A')}</p>
            </details>
            <details className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <summary className="font-heading font-semibold cursor-pointer text-gray-900 text-lg mb-2">{t('faq2Q')}</summary>
              <p className="mt-4 text-gray-700 leading-relaxed">{t('faq2A')}</p>
            </details>
            <details className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <summary className="font-heading font-semibold cursor-pointer text-gray-900 text-lg mb-2">{t('faq3Q')}</summary>
              <p className="mt-4 text-gray-700 leading-relaxed">{t('faq3A')}</p>
            </details>
            <details className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <summary className="font-heading font-semibold cursor-pointer text-gray-900 text-lg mb-2">{t('faq4Q')}</summary>
              <p className="mt-4 text-gray-700 leading-relaxed">{t('faq4A')}</p>
            </details>
            <details className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <summary className="font-heading font-semibold cursor-pointer text-gray-900 text-lg mb-2">{t('faq5Q')}</summary>
              <p className="mt-4 text-gray-700 leading-relaxed">{t('faq5A')}</p>
            </details>
          </div>
        </section>

        {/* CTA Section */}
        <section
          className="text-center bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-8 md:p-12 text-white fade-in shadow-2xl"
          aria-labelledby="cta-sudan"
        >
          <h2 id="cta-sudan" className="text-3xl md:text-4xl font-heading font-semibold mb-4 text-white">
            {t('ctaTitle')}
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            {t('ctaBody')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-white text-primary rounded-lg hover:bg-gray-100 transition-all font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              {t('ctaContact')}
            </Link>
            <a
              href="https://wa.me/254119402737"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white/10 transition-all font-semibold"
            >
              {t('ctaWhatsApp')}
            </a>
          </div>
        </section>

      </div>
    </>
  )
}
