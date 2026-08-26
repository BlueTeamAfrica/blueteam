import type { Metadata } from 'next'
import { Link } from '@/i18n/navigation'
import Image from 'next/image'
import InteriorHeader from '@/components/InteriorHeader'
import { generateLocalBusinessSchema, generateServiceSchema } from '@/lib/schema'
import { Globe, Smartphone, Shield, Code } from 'lucide-react'
import { getTranslations } from 'next-intl/server'
import { buildAlternates } from '@/lib/metadata-helpers'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const alternates = buildAlternates('/locations/rwanda', locale)
  return {
    title: 'Technology Solutions Provider in Rwanda | Blue Team Africa',
    description: 'Website design, mobile app development, and cybersecurity services in Rwanda, serving NGOs and businesses in Kigali and nationwide.',
    robots: 'index, follow',
    alternates,
    keywords: [
      'website design Rwanda',
      'website development Rwanda',
      'mobile applications Rwanda',
      'mobile app development Rwanda',
      'cybersecurity services Rwanda',
      'web design Kigali',
      'website development Kigali',
      'mobile apps Kigali',
      'cybersecurity Kigali',
      'NGO website Rwanda',
      'business website Rwanda',
    ],
    openGraph: {
      title: 'Website Design, Mobile App Development & Cybersecurity Company in Rwanda | Blue Team Africa',
      description: 'Website design, mobile app development, and cybersecurity services in Rwanda, serving NGOs and businesses in Kigali and nationwide.',
      url: alternates.canonical,
      type: 'website',
    },
  }
}

// Generate JSON-LD schemas (stay English intentionally)
const localBusinessSchema = generateLocalBusinessSchema(
  'Blue Team Africa',
  'RW',
  'Kigali',
  'https://www.blueteamafrica.com/locations/rwanda',
  [
    'Website Design',
    'Website Development',
    'Mobile Applications',
    'Mobile App Development',
    'Cybersecurity Services',
  ]
)

const websiteDesignServiceSchema = generateServiceSchema(
  'Website Design Services in Rwanda',
  'Professional website design services for NGOs and businesses in Rwanda, with expertise serving organizations in Kigali and nationwide.',
  'Blue Team Africa',
  'https://www.blueteamafrica.com',
  'Website Design',
  ['Rwanda', 'Kigali']
)

const mobileAppServiceSchema = generateServiceSchema(
  'Mobile App Development Services in Rwanda',
  'Custom mobile application development for NGOs and businesses in Rwanda, including solutions for organizations in Kigali.',
  'Blue Team Africa',
  'https://www.blueteamafrica.com',
  'Mobile App Development',
  ['Rwanda', 'Kigali']
)

const cybersecurityServiceSchema = generateServiceSchema(
  'Cybersecurity Services in Rwanda',
  'Comprehensive cybersecurity solutions for NGOs and businesses in Rwanda, protecting organizations in Kigali and across the country.',
  'Blue Team Africa',
  'https://www.blueteamafrica.com',
  'Cybersecurity',
  ['Rwanda', 'Kigali']
)

export default async function RwandaLocationPage() {
  const t = await getTranslations('LocationsRwandaPage')

  return (
    <>
      {/* JSON-LD Schemas — stay English intentionally */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteDesignServiceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(mobileAppServiceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(cybersecurityServiceSchema) }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Blue Team Africa",
            "url": "https://www.blueteamafrica.com/locations/rwanda",
            "logo": "https://www.blueteamafrica.com/images/logo.png",
            "image": "https://www.blueteamafrica.com/images/locations/rwanda-hero.webp",
            "description": "Blue Team Africa provides website design, mobile app development, and cybersecurity services for NGOs and businesses in Rwanda, including Kigali.",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "RW",
              "addressRegion": "Kigali City",
              "addressLocality": "Kigali"
            },
            "areaServed": [
              { "@type": "Country", "name": "Rwanda" },
              { "@type": "City", "name": "Kigali" }
            ],
            "sameAs": [
              "https://www.linkedin.com/company/blue-team-africa",
              "https://x.com/BLUETEAMAFRICA"
            ],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Technology Services in Rwanda",
              "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Website Design in Rwanda" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Mobile App Development in Rwanda" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Cybersecurity Services in Rwanda" } }
              ]
            }
          })
        }}
      />

      {/* FAQPage Schema — stays English intentionally */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              { "@type": "Question", "name": "Do you provide website design services in Kigali, Rwanda?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Blue Team Africa provides professional website design services in Kigali and across Rwanda for NGOs, startups, and businesses, focusing on performance, security, and scalability." } },
              { "@type": "Question", "name": "Do you offer mobile app development services in Rwanda?", "acceptedAnswer": { "@type": "Answer", "text": "We develop custom Android and iOS mobile applications for organizations in Rwanda, including NGOs and SMEs, tailored to local user needs and infrastructure." } },
              { "@type": "Question", "name": "Can NGOs in Rwanda work with Blue Team Africa remotely?", "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. We work with NGOs and organizations across Rwanda using secure remote collaboration, while maintaining local context and regional experience in East Africa." } },
              { "@type": "Question", "name": "Do you provide cybersecurity services for organizations in Rwanda?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We offer cybersecurity solutions for organizations in Rwanda, including system hardening, secure hosting, data protection, and ongoing technical support." } },
              { "@type": "Question", "name": "How much does website design cost in Rwanda?", "acceptedAnswer": { "@type": "Answer", "text": "Website design costs in Rwanda depend on project scope and requirements. We offer flexible solutions suitable for NGOs, startups, and growing businesses operating in Rwanda." } }
            ]
          })
        }}
      />

      <InteriorHeader
        title={t('headerTitle')}
        breadcrumb={[
          { label: t('breadcrumbHome'), href: '/' },
          { label: t('breadcrumbLocations'), href: '#' },
          { label: t('breadcrumbRwanda') },
        ]}
      />

      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-br from-primary/10 via-primary/5 to-gray-50 py-16 md:py-24 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="fade-up">
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-gray-900 leading-tight">
                {t('heroH1')}
              </h1>
              <p className="text-lg md:text-xl text-gray-700 mb-4 leading-relaxed">
                {t('heroPara1')}
              </p>
              <p className="text-lg md:text-xl text-gray-700 mb-6 font-semibold">
                {t('heroPara2')}
              </p>
              <Link
                href="/contact"
                className="inline-block px-8 py-4 bg-primary text-white rounded-lg hover:bg-primary-dark transition-all font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                {t('heroCta')}
              </Link>
            </div>
            <div className="fade-in">
              <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/locations/rwanda-hero.webp"
                  alt="Digital solutions for NGOs and businesses in Rwanda and Kigali"
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
        {/* Section 1: Rwanda Digital Overview */}
        <section className="mb-16 fade-up" aria-labelledby="rwanda-overview">
          <h2 id="rwanda-overview" className="text-3xl md:text-4xl font-heading font-semibold mb-6 text-gray-900">
            {t('overviewTitle')}
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="mb-4">{t('overviewPara1')}</p>
            <p className="mb-4">{t('overviewPara2')}</p>
            <p>{t('overviewPara3')}</p>
          </div>
        </section>

        {/* Section 2: Kigali Focus */}
        <section className="mb-16 bg-gray-50 rounded-2xl p-8 md:p-10 fade-up" aria-labelledby="kigali-focus">
          <h2 id="kigali-focus" className="text-3xl md:text-4xl font-heading font-semibold mb-6 text-gray-900">
            {t('kigaliTitle')}
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="mb-4">{t('kigaliPara1')}</p>
            <p className="mb-4">{t('kigaliPara2')}</p>
            <p>{t('kigaliPara3')}</p>
          </div>
        </section>

        {/* Section 3: Services in Rwanda */}
        <section className="mb-16 fade-up" aria-labelledby="services-rwanda">
          <h2 id="services-rwanda" className="text-3xl md:text-4xl font-heading font-semibold mb-8 text-gray-900">
            {t('servicesTitle')}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all border border-gray-100 fade-up delay-1">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3 text-gray-900">{t('websiteDesignTitle')}</h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">{t('websiteDesignBody')}</p>
              <Link href="/services/web-design" className="text-primary font-semibold hover:text-primary-dark hover:underline text-sm inline-flex items-center">
                {t('websiteDesignLink')}
              </Link>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all border border-gray-100 fade-up delay-2">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Code className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3 text-gray-900">{t('websiteDevTitle')}</h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">{t('websiteDevBody')}</p>
              <Link href="/services/website-development" className="text-primary font-semibold hover:text-primary-dark hover:underline text-sm inline-flex items-center">
                {t('websiteDevLink')}
              </Link>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all border border-gray-100 fade-up delay-3">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Smartphone className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3 text-gray-900">{t('mobileAppTitle')}</h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">{t('mobileAppBody')}</p>
              <Link href="/services/mobile-apps" className="text-primary font-semibold hover:text-primary-dark hover:underline text-sm inline-flex items-center">
                {t('mobileAppLink')}
              </Link>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all border border-gray-100 fade-up">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3 text-gray-900">{t('cybersecTitle')}</h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">{t('cybersecBody')}</p>
              <Link href="/services/cybersecurity" className="text-primary font-semibold hover:text-primary-dark hover:underline text-sm inline-flex items-center">
                {t('cybersecLink')}
              </Link>
            </div>
          </div>

          <div className="space-y-12 mt-12">
            <div>
              <h3 className="text-2xl md:text-3xl font-heading font-semibold mb-4 text-gray-900">{t('webDesignDevTitle')}</h3>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed mb-4">
                <p>{t('webDesignDevPara1')}</p>
                <p>{t('webDesignDevPara2')}</p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="/services/web-design" className="inline-flex items-center text-primary font-semibold hover:text-primary-dark hover:underline">
                  {t('webDesignLink')}
                </Link>
                <Link href="/services/website-development" className="inline-flex items-center text-primary font-semibold hover:text-primary-dark hover:underline">
                  {t('webDevLink')}
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-2xl md:text-3xl font-heading font-semibold mb-4 text-gray-900">{t('mobileAppsTitle')}</h3>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed mb-4">
                <p>{t('mobileAppsPara1')}</p>
                <p>{t('mobileAppsPara2')}</p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="/services/mobile-apps" className="inline-flex items-center text-primary font-semibold hover:text-primary-dark hover:underline">
                  {t('mobileAppsLink')}
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-2xl md:text-3xl font-heading font-semibold mb-4 text-gray-900">{t('cybersecServTitle')}</h3>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed mb-4">
                <p>{t('cybersecServPara1')}</p>
                <p>{t('cybersecServPara2')}</p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="/services/cybersecurity" className="inline-flex items-center text-primary font-semibold hover:text-primary-dark hover:underline">
                  {t('cybersecServLink')}
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-16 fade-up" aria-labelledby="faq-rwanda">
          <h2 id="faq-rwanda" className="text-3xl md:text-4xl font-heading font-semibold mb-8 text-gray-900">
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

        {/* Trust Signals Section */}
        <section className="mb-16 fade-up" aria-labelledby="trust-signals">
          <h2 id="trust-signals" className="text-3xl md:text-4xl font-heading font-semibold mb-6 text-gray-900">
            {t('trustTitle')}
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed mb-6">
            <p className="mb-4">{t('trustPara1')}</p>
            <p>{t('trustPara2')}</p>
          </div>
          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-700">{t('trustBullet1')}</p>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-700">{t('trustBullet2')}</p>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-700">{t('trustBullet3')}</p>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-700">{t('trustBullet4')}</p>
            </li>
          </ul>
          <div className="mt-6">
            <Link href="/portfolio" className="inline-flex items-center text-primary font-semibold hover:text-primary-dark hover:underline">
              {t('trustPortfolioLink')}
            </Link>
          </div>
        </section>

        {/* Stats Section */}
        <section className="mb-16 bg-gradient-to-br from-primary/5 to-gray-50 rounded-2xl p-8 md:p-12 fade-up" aria-labelledby="trust-section">
          <div className="max-w-4xl mx-auto text-center">
            <h2 id="trust-section" className="text-3xl md:text-4xl font-heading font-semibold mb-6 text-gray-900">
              {t('statsTitle')}
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mt-10">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">5+</div>
                <p className="text-gray-700 font-semibold">{t('statsYearsLabel')}</p>
                <p className="text-sm text-gray-600 mt-2">{t('statsYearsSubtitle')}</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <p className="text-gray-700 font-semibold">{t('statsNGOsLabel')}</p>
                <p className="text-sm text-gray-600 mt-2">{t('statsNGOsSubtitle')}</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">4</div>
                <p className="text-gray-700 font-semibold">{t('statsCountriesLabel')}</p>
                <p className="text-sm text-gray-600 mt-2">{t('statsCountriesSubtitle')}</p>
              </div>
            </div>
            <div className="mt-10">
              <div className="relative h-48 md:h-64 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/images/locations/rwanda-trust.webp"
                  alt="NGO and business collaboration in Rwanda"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 80vw"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Why Blue Team Africa in Rwanda */}
        <section className="mb-16 bg-white rounded-2xl p-8 md:p-10 border border-gray-200 fade-up" aria-labelledby="why-blue-team">
          <h2 id="why-blue-team" className="text-3xl md:text-4xl font-heading font-semibold mb-6 text-gray-900">
            {t('whyTitle')}
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="mb-4">{t('whyPara1')}</p>
            <p className="mb-4">{t('whyPara2')}</p>
            <p className="mb-4">{t('whyPara3')}</p>
            <p>{t('whyPara4')}</p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-8 md:p-12 text-white fade-in shadow-2xl" aria-labelledby="cta-rwanda">
          <h2 id="cta-rwanda" className="text-3xl md:text-4xl font-heading font-semibold mb-4 text-white">
            {t('ctaTitle')}
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            {t('ctaBody')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-block px-8 py-4 bg-white text-primary rounded-lg hover:bg-gray-100 transition-all font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              {t('ctaContact')}
            </Link>
            <Link href="/contact" className="inline-block px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white/10 transition-all font-semibold">
              {t('ctaQuote')}
            </Link>
          </div>
        </section>
      </div>
    </>
  )
}
