import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import OrganizationSchema from '@/components/OrganizationSchema'
import HomepageFAQSchema from '@/components/HomepageFAQSchema'
import HeroSection from '@/components/hero/Hero'
import dynamic from 'next/dynamic'
import { getTranslations } from 'next-intl/server'
import { buildAlternates } from '@/lib/metadata-helpers'

// Dynamically import non-critical components to reduce initial JS payload (mobile optimization)
// These will still be code-split and loaded lazily, improving initial bundle size

const MobileMoveOurServices = dynamic(() => import('@/components/MobileMoveOurServices'))

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const alternates = buildAlternates('/', locale)

  return {
    title: 'Blue Team Africa | Web Design & Development Company',
    description: 'Professional web design, website development, hosting, SEO and digital solutions for NGOs, companies, and startups in Uganda, Kenya & East Africa.',
    robots: 'index, follow',
    alternates,
    openGraph: {
      title: 'BlueTeam Africa — Web Design & Digital Solutions',
      description: 'High-quality website design, hosting, SEO, and development services across East Africa.',
      url: alternates.canonical,
      siteName: 'Blue Team Africa',
      type: 'website',
      images: [
        {
          url: '/images/hero/hero-og-01.webp',
          width: 1200,
          height: 630,
          alt: 'Blue Team Africa — Web Design, Website Development & Digital Solutions',
        },
      ],
      locale: locale === 'ar' ? 'ar_001' : 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'BlueTeam Africa — Web Design & Digital Solutions',
      description: 'High-quality website design, hosting, SEO, and development services across East Africa.',
      images: ['/images/hero/hero-og-01.webp'],
    },
    keywords: [
      'web design',
      'website design',
      'website development',
      'web development',
      'digital solutions',
      'hosting',
      'SEO',
      'NGO',
      'Uganda',
      'Kenya',
      'East Africa',
      'web design company',
      'website development company',
    ],
  }
}

export default async function Home() {
  const t = await getTranslations('HomePage')
  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://www.blueteamafrica.com/#localbusiness",
    "name": "Blue Team Africa",
    "legalName": "Blue Team Ltd.",
    "url": "https://www.blueteamafrica.com",
    "logo": "https://www.blueteamafrica.com/logo.png",
    "image": "https://www.blueteamafrica.com/og-image.png",
    "telephone": "+250798973375",
    "email": "contact@blueteamafrica.com",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "RW"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Rwanda"
    },
    "sameAs": [
      "https://www.linkedin.com/company/blue-team-africa",
      "https://about.me/blueteamafrica"
    ],
    "description": "Blue Team Africa is a Rwanda-based web design and web development company delivering high-performance, SEO-driven digital solutions for businesses and NGOs.",
    "foundingDate": "2023-09-16",
    "serviceType": [
      "Web Design",
      "Web Development",
      "Website Hosting",
      "CRM Systems",
      "ERP Systems"
    ]
  }

  return (
    <>
      {/* JSON-LD Schemas */}
      <OrganizationSchema />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
      />
      <HomepageFAQSchema />

      {/* Mobile Move Our Services Component */}
      <MobileMoveOurServices />

      <div className="w-full overflow-hidden">
        {/* HERO */}
        <HeroSection />

        {/* FEATURED CASE STUDY - CSLO Sudan */}
        <section className="py-20 bg-white" aria-labelledby="case-study-heading">
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-center text-gray-600 mb-6">
              {t.rich('csloSection.intro', {
                rwandaLink: (chunks) => (
                  <Link href="/web-design-rwanda" className="text-primary hover:text-primary-dark hover:underline">{chunks}</Link>
                ),
              })}
            </p>
            <h2 id="case-study-heading" className="text-3xl font-heading font-semibold text-center mb-8">
              {t('csloSection.title')}
            </h2>
            <div className="bg-gray-50 rounded-2xl p-8 md:p-10">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {t.rich('csloSection.body', {
                  erpLink: (chunks) => <Link href="/services/erp" className="text-primary hover:underline">{chunks}</Link>,
                  crmLink: (chunks) => <Link href="/services/crm" className="text-primary hover:underline">{chunks}</Link>,
                  mobileLink: (chunks) => <Link href="/services/mobile-apps" className="text-primary hover:underline">{chunks}</Link>,
                })}
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">{t('csloSection.bullet1')}</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">{t('csloSection.bullet2')}</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">{t('csloSection.bullet3')}</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">{t('csloSection.bullet4')}</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">{t('csloSection.bullet5')}</p>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <Link
                  href="/portfolio/cslo-sudan"
                  className="inline-block text-primary font-semibold hover:text-primary-dark underline"
                >
                  {t('csloSection.cta')}<span aria-hidden="true" className="rtl:hidden"> →</span><span aria-hidden="true" className="ltr:hidden"> ←</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES GRID */}
        <section id="services" data-our-services="top" className="py-20 bg-gray-50" aria-labelledby="services-heading">
        <div className="max-w-6xl mx-auto px-6">
            <h2 id="services-heading" className="text-3xl font-heading font-semibold text-center mb-4">
              {t('servicesSection.sectionTitle')}
            </h2>
            <p className="text-center text-gray-600 max-w-2xl mx-auto mb-4">
              {t('servicesSection.sectionSubtitle')}
            </p>
            <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
              {t.rich('servicesSection.pricingNote', {
                pricingLink: (chunks) => (
                  <Link href="/blog/web-design-cost-in-rwanda-2026" className="text-primary hover:text-primary-dark hover:underline">{chunks}</Link>
                ),
              })}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* CARD 1 - Web Design */}
              <article className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
                <div className="relative w-full h-44 mb-4 rounded-md overflow-hidden">
                  <Image
                    src="/images/home/services/home-service-web-design-01.webp"
                    alt="website design Uganda mobile-first UX"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-xl font-semibold">{t('servicesSection.cards.webDesign.title')}</h3>
                <p className="mt-2 text-gray-600">
                  {t('servicesSection.cards.webDesign.desc')}
                </p>
                <Link href="/services/web-design" className="mt-4 inline-flex items-center gap-1 text-primary font-medium hover:text-primary-dark">
                  {t('servicesSection.cta')}<span aria-hidden="true" className="rtl:hidden"> →</span><span aria-hidden="true" className="ltr:hidden"> ←</span>
                </Link>
              </article>

              {/* CARD 2 - Website Development */}
              <article className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
                <div className="relative w-full h-44 mb-4 rounded-md overflow-hidden">
                  <Image
                    src="/images/home/services/home-service-website-development-01.webp"
                    alt="website development Uganda custom systems"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-xl font-semibold">{t('servicesSection.cards.webDev.title')}</h3>
                <p className="mt-2 text-gray-600">
                  {t('servicesSection.cards.webDev.desc')}
                </p>
                <Link href="/services/website-development" className="mt-4 inline-flex items-center gap-1 text-primary font-medium hover:text-primary-dark">
                  {t('servicesSection.cta')}<span aria-hidden="true" className="rtl:hidden"> →</span><span aria-hidden="true" className="ltr:hidden"> ←</span>
                </Link>
              </article>

              {/* CARD 3 - Cyber Security */}
              <article className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
                <div className="relative w-full h-44 mb-4 rounded-md overflow-hidden">
                  <Image
                    src="/images/home/services/home-service-cybersecurity-01.webp"
                    alt="cyber security Uganda penetration testing"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-xl font-semibold">{t('servicesSection.cards.cyber.title')}</h3>
                <p className="mt-2 text-gray-600">
                  {t('servicesSection.cards.cyber.desc')}
                </p>
                <Link href="/services/cybersecurity" className="mt-4 inline-flex items-center gap-1 text-primary font-medium hover:text-primary-dark">
                  {t('servicesSection.cta')}<span aria-hidden="true" className="rtl:hidden"> →</span><span aria-hidden="true" className="ltr:hidden"> ←</span>
                </Link>
              </article>

              {/* CARD 4 - Mobile App Development */}
              <article className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
                <div className="relative w-full h-44 mb-4 rounded-md overflow-hidden">
                  <Image
                    src="/images/home/services/home-service-mobile-apps-01.webp"
                    alt="mobile app development for field teams"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-xl font-semibold">{t('servicesSection.cards.mobileApps.title')}</h3>
                <p className="mt-2 text-gray-600">
                  {t('servicesSection.cards.mobileApps.desc')}
                </p>
                <Link href="/services/mobile-apps" className="mt-4 inline-flex items-center gap-1 text-primary font-medium hover:text-primary-dark">
                  {t('servicesSection.cta')}<span aria-hidden="true" className="rtl:hidden"> →</span><span aria-hidden="true" className="ltr:hidden"> ←</span>
                </Link>
              </article>

              {/* CARD 5 - ERP & CRM Systems */}
              <article className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
                <div className="relative w-full h-44 mb-4 rounded-md overflow-hidden">
                  <Image
                    src="/images/home/services/home-service-erp-01.webp"
                    alt="ERP CRM systems for NGOs ERPNext"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-xl font-semibold">{t('servicesSection.cards.erp.title')}</h3>
                <p className="mt-2 text-gray-600">
                  {t('servicesSection.cards.erp.desc')}
                </p>
                <Link href="/services/erp" className="mt-4 inline-flex items-center gap-1 text-primary font-medium hover:text-primary-dark">
                  {t('servicesSection.cta')}<span aria-hidden="true" className="rtl:hidden"> →</span><span aria-hidden="true" className="ltr:hidden"> ←</span>
                </Link>
              </article>

              {/* CARD 6 - Digital Marketing */}
              <article className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
                <div className="relative w-full h-44 mb-4 rounded-md overflow-hidden">
                  <Image
                    src="/images/home/services/home-service-digital-marketing-01.webp"
                    alt="digital marketing SEO Uganda"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-xl font-semibold">{t('servicesSection.cards.marketing.title')}</h3>
                <p className="mt-2 text-gray-600">
                  {t('servicesSection.cards.marketing.desc')}
                </p>
                <Link href="/services/web-design" className="mt-4 inline-flex items-center gap-1 text-primary font-medium hover:text-primary-dark">
                  {t('servicesSection.cta')}<span aria-hidden="true" className="rtl:hidden"> →</span><span aria-hidden="true" className="ltr:hidden"> ←</span>
                </Link>
              </article>
            </div>
        </div>
      </section>

        {/* Serving Rwanda & East Africa - Contextual Regional Link */}
        <section data-rwanda-section className="py-12 bg-white" aria-labelledby="rwanda-regional">
          <div className="max-w-6xl mx-auto px-6">
            <div className="location-link">
              <h3 id="rwanda-regional" className="text-2xl font-heading font-semibold mb-3 text-gray-900">
                {t('rwandaSection.title')}
              </h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                {t.rich('rwandaSection.subtitle', {
                  devLink: (chunks) => (
                    <Link href="/web-development-rwanda" className="text-primary hover:text-primary-dark hover:underline">{chunks}</Link>
                  ),
                })}
              </p>
              <Link
                href="/locations/rwanda"
                className="text-primary font-semibold hover:text-primary-dark hover:underline inline-flex items-center"
              >
                {t('rwandaSection.cta')}<span aria-hidden="true" className="rtl:hidden"> →</span><span aria-hidden="true" className="ltr:hidden"> ←</span>
              </Link>
            </div>
          </div>
        </section>

        {/* WHY CHOOSE BLUE TEAM AFRICA */}
        <section className="py-20 bg-white" aria-labelledby="why-trust-heading">
          <div className="max-w-6xl mx-auto px-6">
            <h2 id="why-trust-heading" className="text-3xl font-heading font-semibold text-center mb-6">
              {t('whyChoose.title')}
            </h2>
            <p className="text-center text-gray-700 max-w-3xl mx-auto mb-8 leading-relaxed">
              {t('whyChoose.teamStory1')}
            </p>
            <p className="text-center text-gray-700 max-w-3xl mx-auto mb-8 leading-relaxed">
              {t('whyChoose.teamStory2')}
            </p>
            <p className="text-center text-gray-700 max-w-3xl mx-auto mb-12 leading-relaxed">
              {t('whyChoose.teamStory3')}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">{t('whyChoose.securityFirst')}</h3>
                <p className="text-gray-600">
                  {t('whyChoose.securityFirstBody')}
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">{t('whyChoose.ngoExpertise')}</h3>
                <p className="text-gray-600">
                  {t('whyChoose.ngoExpertiseBody')}
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">{t('whyChoose.scalableTech')}</h3>
                <p className="text-gray-600">
                  {t('whyChoose.scalableTechBody')}
                </p>
              </div>
            </div>
        </div>
      </section>

        {/* NGO DIGITAL SOLUTIONS */}
        <section className="py-20 bg-white" aria-labelledby="ngo-solutions-heading">
          <div className="max-w-6xl mx-auto px-6">
            <h2 id="ngo-solutions-heading" className="text-3xl font-heading font-semibold text-center mb-6">
              {t('ngoSolutions.title')}
            </h2>
            <p className="text-center text-gray-700 max-w-3xl mx-auto mb-8 leading-relaxed">
              {t('ngoSolutions.subtitle')}
            </p>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-10">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700">
                  {t.rich('ngoSolutions.bullet1', {
                    erpLink: (chunks) => <Link href="/services/erp" className="text-primary hover:underline">{chunks}</Link>,
                  })}
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700">
                  {t.rich('ngoSolutions.bullet2', {
                    crmLink: (chunks) => <Link href="/services/crm" className="text-primary hover:underline">{chunks}</Link>,
                  })}
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700">
                  {t.rich('ngoSolutions.bullet3', {
                    mobileLink: (chunks) => <Link href="/services/mobile-apps" className="text-primary hover:underline">{chunks}</Link>,
                  })}
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700">{t('ngoSolutions.bullet4')}</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700">{t('ngoSolutions.bullet5')}</p>
              </div>
            </div>

            <div className="text-center">
              <Link
                href="/contact"
                className="inline-block px-8 py-4 bg-primary text-white rounded-lg hover:bg-primary-dark transition font-semibold"
              >
                {t('ngoSolutions.cta')}
              </Link>
            </div>
          </div>
        </section>

        {/* OUR PROCESS */}
        <section className="py-20 bg-gray-50" aria-labelledby="process-heading">
          <div className="max-w-6xl mx-auto px-6">
            <h2 id="process-heading" className="text-3xl font-heading font-semibold text-center mb-12">
              {t('process.title')}
            </h2>
            <div className="grid md:grid-cols-5 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">1</div>
                <h3 className="text-lg font-semibold mb-2">{t('process.step1Title')}</h3>
                <p className="text-gray-600 text-sm">
                  {t('process.step1Body')}
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">2</div>
                <h3 className="text-lg font-semibold mb-2">{t('process.step2Title')}</h3>
                <p className="text-gray-600 text-sm">
                  {t('process.step2Body')}
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">3</div>
                <h3 className="text-lg font-semibold mb-2">{t('process.step3Title')}</h3>
                <p className="text-gray-600 text-sm">
                  {t('process.step3Body')}
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">4</div>
                <h3 className="text-lg font-semibold mb-2">{t('process.step4Title')}</h3>
                <p className="text-gray-600 text-sm">
                  {t('process.step4Body')}
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">5</div>
                <h3 className="text-lg font-semibold mb-2">{t('process.step5Title')}</h3>
                <p className="text-gray-600 text-sm">
                  {t('process.step5Body')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* REGIONAL IMPACT */}
        <section className="py-20 bg-white" aria-labelledby="regional-impact-heading">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 id="regional-impact-heading" className="text-3xl font-heading font-semibold mb-6">
              {t('regionalSection.title')}
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
              {t('regionalSection.body')}
            </p>
            {/* Country flags */}
            <div className="flex items-center justify-center gap-8 flex-wrap mt-8">
              <div className="text-gray-700 font-semibold text-lg flex items-center gap-2">
                <span className="text-3xl">🇸🇩</span>
                <span>{t('regionalSection.sudan')}</span>
              </div>
              <div className="text-gray-700 font-semibold text-lg flex items-center gap-2">
                <span className="text-3xl">🇺🇬</span>
                <span>{t('regionalSection.uganda')}</span>
              </div>
              <div className="text-gray-700 font-semibold text-lg flex items-center gap-2">
                <span className="text-3xl">🇰🇪</span>
                <span>{t('regionalSection.kenya')}</span>
              </div>
              <div className="text-gray-700 font-semibold text-lg flex items-center gap-2">
                <span className="text-3xl">🇷🇼</span>
                <span>{t('regionalSection.rwanda')}</span>
              </div>
            </div>
          </div>
        </section>

        {/* SEO KEYWORD BLOCK */}
        <section className="py-16 bg-gray-50" aria-labelledby="seo-keyword-heading">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 id="seo-keyword-heading" className="text-3xl font-heading font-semibold mb-6">
              {t('seoBlock.title')}
            </h2>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              {t('seoBlock.body')}
            </p>
          </div>
        </section>

        {/* TECH STACK */}
        <section className="py-12 bg-gray-50 border-t border-gray-200">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <p className="text-gray-600 mb-6">{t('techStack.label')}</p>
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
              {/* ERPNext */}
              <div className="flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-all duration-300 group">
                <div className="w-20 h-12 flex items-center justify-center">
                  <img
                    src="https://cdn.simpleicons.org/erpnext/0089FF"
                    alt="ERPNext"
                    width={48}
                    height={48}
                    className="w-12 h-12"
                    loading="lazy"
                  />
                </div>
                <span className="text-xs text-gray-600 font-medium">ERPNext</span>
              </div>
              {/* Frappe */}
              <div className="flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-all duration-300 group">
                <div className="w-20 h-12 flex items-center justify-center">
                  <img
                    src="https://cdn.simpleicons.org/frappe/0089FF"
                    alt="Frappe"
                    width={48}
                    height={48}
                    className="w-12 h-12"
                    loading="lazy"
                  />
                </div>
                <span className="text-xs text-gray-600 font-medium">Frappe</span>
              </div>
              {/* React */}
              <div className="flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-all duration-300 group">
                <div className="w-20 h-12 flex items-center justify-center">
                  <img
                    src="https://cdn.simpleicons.org/react/61DAFB"
                    alt="React"
                    width={48}
                    height={48}
                    className="w-12 h-12"
                    loading="lazy"
                  />
                </div>
                <span className="text-xs text-gray-600 font-medium">React</span>
              </div>
              {/* Next.js */}
              <div className="flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-all duration-300 group">
                <div className="w-20 h-12 flex items-center justify-center">
                  <img
                    src="https://cdn.simpleicons.org/nextdotjs/000000"
                    alt="Next.js"
                    width={48}
                    height={48}
                    className="w-12 h-12"
                    loading="lazy"
                  />
                </div>
                <span className="text-xs text-gray-600 font-medium">Next.js</span>
              </div>
              {/* Flutter */}
              <div className="flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-all duration-300 group">
                <div className="w-20 h-12 flex items-center justify-center">
                  <img
                    src="https://cdn.simpleicons.org/flutter/02569B"
                    alt="Flutter"
                    width={48}
                    height={48}
                    className="w-12 h-12"
                    loading="lazy"
                  />
                </div>
                <span className="text-xs text-gray-600 font-medium">Flutter</span>
              </div>
              {/* Firebase */}
              <div className="flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-all duration-300 group">
                <div className="w-20 h-12 flex items-center justify-center">
                  <img
                    src="https://cdn.simpleicons.org/firebase/FFCA28"
                    alt="Firebase"
                    width={48}
                    height={48}
                    className="w-12 h-12"
                    loading="lazy"
                  />
                </div>
                <span className="text-xs text-gray-600 font-medium">Firebase</span>
              </div>
              {/* Vercel */}
              <div className="flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-all duration-300 group">
                <div className="w-20 h-12 flex items-center justify-center">
                  <img
                    src="https://cdn.simpleicons.org/vercel/000000"
                    alt="Vercel"
                    width={48}
                    height={48}
                    className="w-12 h-12"
                    loading="lazy"
                  />
                </div>
                <span className="text-xs text-gray-600 font-medium">Vercel</span>
              </div>
              {/* Tailwind CSS */}
              <div className="flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-all duration-300 group">
                <div className="w-20 h-12 flex items-center justify-center">
                  <img
                    src="https://cdn.simpleicons.org/tailwindcss/06B6D4"
                    alt="Tailwind CSS"
                    width={48}
                    height={48}
                    className="w-12 h-12"
                    loading="lazy"
                  />
                </div>
                <span className="text-xs text-gray-600 font-medium">Tailwind</span>
              </div>
            </div>
          </div>
        </section>

        {/* PORTFOLIO PREVIEW */}
        <section id="portfolio" className="py-20 bg-white" aria-labelledby="portfolio-heading">
        <div className="max-w-6xl mx-auto px-6">
            <h2 id="portfolio-heading" className="text-3xl font-heading font-semibold text-center mb-12">
              {t('portfolioPreview.title')}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <article className="rounded-2xl overflow-hidden shadow bg-white">
                <div className="relative w-full h-48">
                  <Image
                    src="/images/portfolio/cslo-sudan/case-cslo-cslo-01.webp"
                    alt="CSLO Sudan ERPNext and CRM implementation case study"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    loading="lazy"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold">{t('portfolioPreview.card1Title')}</h3>
                  <p className="text-sm text-gray-600 mt-2">
                    {t('portfolioPreview.card1Desc')}
                    <Link href="/portfolio/cslo-sudan" className="text-primary ml-1 hover:text-primary-dark">
                      {t('portfolioPreview.card1ReadMore')}
                    </Link>
                  </p>
                </div>
              </article>

              <article className="rounded-2xl overflow-hidden shadow bg-white">
                <div className="relative w-full h-48">
                  <Image
                    src="/images/home/portfolio/home-portfolio-ngo-portal-01.webp"
                    alt="NGO portal Uganda"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    loading="lazy"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold">{t('portfolioPreview.card2Title')}</h3>
                  <p className="text-sm text-gray-600 mt-2">
                    {t('portfolioPreview.card2Desc')}
                    <Link href="/portfolio/ngo-portal" className="text-primary ml-1 hover:text-primary-dark">
                      {t('portfolioPreview.card2ReadMore')}
                    </Link>
                  </p>
                </div>
              </article>

              <article className="rounded-2xl overflow-hidden shadow bg-white">
                <div className="relative w-full h-48">
                  <Image
                    src="/images/home/portfolio/home-portfolio-ecommerce-01.webp"
                    alt="Ecommerce Uganda case study"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    loading="lazy"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold">{t('portfolioPreview.card3Title')}</h3>
                  <p className="text-sm text-gray-600 mt-2">
                    {t('portfolioPreview.card3Desc')}
                    <Link href="/portfolio/ecommerce-shop" className="text-primary ml-1 hover:text-primary-dark">
                      {t('portfolioPreview.card3ReadMore')}
                    </Link>
                  </p>
                </div>
              </article>
            </div>

            <div className="mt-10 text-center">
              <Link
                href="/portfolio"
                className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition"
                aria-label="View all portfolio case studies"
              >
                {t('portfolioPreview.cta')}
              </Link>
            </div>
          </div>
        </section>
      </div>

      {/* Bottom Container for Mobile Services Repositioning */}
      <div data-bottom-container>
        {/* FAQ PREVIEW */}
        <section className="py-20 bg-gray-50" aria-labelledby="faq-heading">
          <div className="max-w-5xl mx-auto px-6">
            <h2 id="faq-heading" className="text-3xl font-heading font-semibold text-center mb-12">
              {t('faqPreview.title')}
            </h2>

            <div className="space-y-6">
              <details className="bg-white p-6 rounded-xl shadow-sm">
                <summary className="font-semibold cursor-pointer text-gray-900">
                  {t('faqPreview.q1')}
                </summary>
                <p className="mt-4 text-gray-600">
                  {t('faqPreview.a1')}
                </p>
              </details>

              <details className="bg-white p-6 rounded-xl shadow-sm">
                <summary className="font-semibold cursor-pointer text-gray-900">
                  {t('faqPreview.q2')}
                </summary>
                <p className="mt-4 text-gray-600">
                  {t('faqPreview.a2')}
                </p>
              </details>

              <details className="bg-white p-6 rounded-xl shadow-sm">
                <summary className="font-semibold cursor-pointer text-gray-900">
                  {t('faqPreview.q3')}
                </summary>
                <p className="mt-4 text-gray-600">
                  {t('faqPreview.a3')}
                </p>
              </details>

              <details className="bg-white p-6 rounded-xl shadow-sm">
                <summary className="font-semibold cursor-pointer text-gray-900">
                  {t('faqPreview.q4')}
                </summary>
                <p className="mt-4 text-gray-600">
                  {t('faqPreview.a4')}
                </p>
              </details>

              <details className="bg-white p-6 rounded-xl shadow-sm">
                <summary className="font-semibold cursor-pointer text-gray-900">
                  {t('faqPreview.q5')}
                </summary>
                <p className="mt-4 text-gray-600">
                  {t('faqPreview.a5')}
                </p>
              </details>
            </div>

            <div className="mt-10 text-center">
              <Link href="/contact" className="text-primary underline hover:text-primary-dark font-semibold">
                {t('faqPreview.contactCta')}
              </Link>
            </div>
          </div>
        </section>

        {/* BOTTOM CTA */}
        <section className="py-20 bg-[#F8FAFF] text-center" aria-labelledby="cta-heading">
          <div className="max-w-4xl mx-auto px-6">
            <h3 id="cta-heading" className="text-3xl font-heading font-semibold text-gray-900">
              {t('bottomCTA.title')}
            </h3>
            <p className="mt-3 text-lg text-gray-700">
              {t('bottomCTA.subtitle')}
            </p>
            <div className="mt-8 flex items-center justify-center gap-4 flex-wrap">
              <a
                href="https://wa.me/254119402737"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-lg hover:bg-primary-dark transition font-semibold"
                aria-label="Contact us on WhatsApp"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                {t('bottomCTA.ctaWhatsApp')}
              </a>
              <Link
                href="/contact"
                className="px-8 py-4 border-2 border-primary rounded-lg text-primary hover:bg-primary/5 transition font-semibold"
                aria-label="Get a free quote"
              >
                {t('bottomCTA.ctaPrimary')}
              </Link>
          </div>
        </div>
      </section>
      </div>

    </>
  )
}
