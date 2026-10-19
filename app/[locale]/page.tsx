import type { Metadata } from 'next'
import { Link } from '@/i18n/navigation'
// Blog posts are English-only: link straight to /blog/<slug> (no /ar prefix, no redirect hop)
import NextLink from 'next/link'
import OrganizationSchema from '@/components/OrganizationSchema'
import HomepageFAQSchema from '@/components/HomepageFAQSchema'
import HeroSection from '@/components/hero/Hero'
import { getTranslations, getMessages } from 'next-intl/server'
import { NextIntlClientProvider } from 'next-intl'
import { buildAlternates } from '@/lib/metadata-helpers'
import ResultsBand from '@/components/home/ResultsBand'
import ServicesBento from '@/components/home/ServicesBento'
import SelectedWork from '@/components/home/SelectedWork'
import SecureByDesign from '@/components/home/SecureByDesign'
import HowWeWork from '@/components/home/HowWeWork'
import WhereWeWork from '@/components/home/WhereWeWork'


export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const alternates = buildAlternates('/', locale)

  const isAr = locale === 'ar'
  const t = await getTranslations({ locale, namespace: 'HomePage' })
  // OpenGraph/Twitter text stays English on both locales (project convention)
  const tEn = await getTranslations({ locale: 'en', namespace: 'HomePage' })

  return {
    // Absolute: no layout template suffix on the homepage
    title: { absolute: t('metaTitle') },
    description: t('metaDescription'),
    robots: 'index, follow',
    alternates,
    openGraph: {
      title: tEn('metaTitle'),
      description: tEn('metaDescription'),
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
      locale: isAr ? 'ar_001' : 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: tEn('metaTitle'),
      description: tEn('metaDescription'),
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
  // Same keys as the visible FAQ preview; a6 rendered as plain text (link tag unwrapped)
  const faqPreview = [
    { question: t('faqPreview.q1'), answer: t('faqPreview.a1') },
    { question: t('faqPreview.q2'), answer: t('faqPreview.a2') },
    { question: t('faqPreview.q3'), answer: t('faqPreview.a3') },
    { question: t('faqPreview.q4'), answer: t('faqPreview.a4') },
    { question: t('faqPreview.q5'), answer: t('faqPreview.a5') },
    { question: t('faqPreview.q6'), answer: t.markup('faqPreview.a6', { pricingLink: (chunks) => chunks }) },
  ]
  const messages = await getMessages()
  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://www.blueteamafrica.com/#localbusiness",
    "name": "Blue Team Africa",
    "legalName": "Blue Team Ltd.",
    "url": "https://www.blueteamafrica.com",
    "logo": "https://www.blueteamafrica.com/logo.png",
    "image": "https://www.blueteamafrica.com/og-image.png",
    "telephone": "+254119402737",
    "email": "contact@blueteamafrica.com",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "RW"
    },
    "areaServed": [
      { "@type": "Country", "name": "Sudan" },
      { "@type": "Country", "name": "Rwanda" },
      { "@type": "Country", "name": "Uganda" },
      { "@type": "Country", "name": "Kenya" }
    ],
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
      <HomepageFAQSchema faqs={faqPreview} />

      <div className="w-full overflow-hidden">
        {/* HERO */}
        <NextIntlClientProvider messages={{ HomePage: messages.HomePage }}>
          <HeroSection />
        </NextIntlClientProvider>

        <ResultsBand />
        <ServicesBento />
        <SelectedWork />
        <SecureByDesign />
        <HowWeWork />
        <WhereWeWork />
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

              <details className="bg-white p-6 rounded-xl shadow-sm">
                <summary className="font-semibold cursor-pointer text-gray-900">
                  {t('faqPreview.q6')}
                </summary>
                <p className="mt-4 text-gray-600">
                  {t.rich('faqPreview.a6', {
                    pricingLink: (chunks) => (
                      <NextLink href="/blog/web-design-cost-in-rwanda-2026" className="text-primary hover:text-primary-dark hover:underline">{chunks}</NextLink>
                    ),
                  })}
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
