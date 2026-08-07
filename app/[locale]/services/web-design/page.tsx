import Link from 'next/link'
import Image from 'next/image'
import { MessageCircle, ArrowRight } from 'lucide-react'
import InteriorHeader from '@/components/InteriorHeader'
import SectionWrapper from '@/components/SectionWrapper'
import ServiceSidebar from '@/components/ServiceSidebar'

import type { Metadata } from 'next'
import { metadataWebDesign } from '@/lib/service-metadata'
import ServiceSchema from '@/components/ServiceSchema'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import FAQSection from '@/components/FAQSection'
import type { FAQ } from '@/lib/faqs'
import { getTranslations } from 'next-intl/server'

const webDesignFAQs: FAQ[] = [
  {
    question: 'What types of websites do you design?',
    answer: 'We design corporate and marketing websites, NGO and humanitarian organization sites, landing pages, portfolio sites, and content-heavy informational sites. For businesses that need e-commerce functionality, that is handled through our dedicated e-commerce service, which integrates directly with web design.',
  },
  {
    question: 'How much does a website design project cost?',
    answer: 'Pricing depends on the number of pages, design complexity, and whether custom features like animations or e-commerce are needed. We provide a detailed, no-obligation quote after a short discovery call — reach out via WhatsApp or our contact form for pricing specific to your project.',
  },
  {
    question: 'Is the website SEO-ready from day one?',
    answer: 'Yes. SEO fundamentals are built into every project: semantic HTML structure, meta titles and descriptions, canonical URLs, structured data (JSON-LD), performance-optimized images, and mobile-responsive layouts. We also configure your sitemap and robots.txt correctly on delivery.',
  },
  {
    question: 'How is your web design different from a website builder like Wix or Squarespace?',
    answer: 'Builder platforms lock you into their infrastructure and impose limits on performance, custom code, and ownership. We build on frameworks like Next.js, giving you a fully custom codebase you own, faster load times, and the flexibility to scale. We also handle hosting separately so you are not tied to one vendor.',
  },
  {
    question: 'Do you design websites for NGOs operating in East Africa?',
    answer: 'We have significant experience with NGOs across Sudan, Uganda, Kenya, and Rwanda, including humanitarian organizations with multilingual needs, donor-facing reporting pages, and strict data-handling requirements. We understand what these organizations need and can work within NGO budget realities.',
  },
  {
    question: 'What happens after launch — do you offer maintenance?',
    answer: 'We offer maintenance and support plans that cover security updates, content changes, performance monitoring, and technical fixes. For organizations that want ongoing hosting alongside maintenance, we bundle both through our hosting and maintenance services.',
  },
]

function WebDesignFAQSchema() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: webDesignFAQs.map((faq) => ({
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
  const canonical = `https://www.blueteamafrica.com${lp}/services/web-design`
  return {
    ...metadataWebDesign,
    alternates: { canonical },
  }
}

export default async function WebDesignPage() {
  const t = await getTranslations('WebDesignPage')

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
        { name: 'Professional Web Design Services', url: 'https://www.blueteamafrica.com/services/web-design' },
      ]} />
      <WebDesignFAQSchema />
      <ServiceSchema serviceName="Web Design" serviceSlug="web-design" />
      <InteriorHeader
        title={t('title')}
        breadcrumb={[
          { label: t('breadcrumbHome'), href: '/' },
          { label: t('breadcrumbServices'), href: '/services' },
          { label: t('breadcrumbWebDesign') }
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
                  src="/images/services/web-design/services-webdesign-web-design-hero-01.webp"
                  alt="Professional Web Design Services"
                  fill
                  className="object-cover"
                  sizes="100vw"
                  priority
                />
              </div>
            </section>

            {/* Intro Text Section */}
            <SectionWrapper bgColor="white">
              <div className="max-w-3xl mx-auto px-6">
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  {t('intro')}
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  For businesses in Rwanda looking for local web design expertise, visit our{' '}
                  <Link href="/web-design-rwanda" className="text-primary hover:text-primary-dark hover:underline">
                    professional web design services in Rwanda
                  </Link>{' '}
                  page.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Not sure which type of website your organization needs? Read our guide on{' '}
                  <Link href="/blog/how-to-choose-the-right-website-for-your-ngo" className="text-primary hover:text-primary-dark hover:underline">
                    how to choose the right website for your NGO
                  </Link>{' '}
                  — it covers the questions to ask before you brief an agency.
                </p>
              </div>
            </SectionWrapper>

            {/* 3 Value Pillars */}
            <SectionWrapper bgColor="light">
              <div className="max-w-6xl mx-auto px-6">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('responsiveDesign')}</h3>
                    <p className="text-gray-600">
                      {t('responsiveDesignBody')}
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('fastPerformance')}</h3>
                    <p className="text-gray-600">
                      {t('fastPerformanceBody')}
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('seoReady')}</h3>
                    <p className="text-gray-600">
                      {t('seoReadyBody')}
                    </p>
                  </div>
                </div>
              </div>
            </SectionWrapper>

            {/* Types of Websites We Build */}
            <SectionWrapper bgColor="white">
              <div className="max-w-4xl mx-auto px-6">
                <h2 className="text-3xl font-heading font-bold text-gray-900 mb-8">
                  {t('customDesign')}
                </h2>
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('customDesignBody')}</h3>
                    <p className="text-gray-700 leading-relaxed">
                      {t('corporateBody')}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('secureHosting')}</h3>
                    <p className="text-gray-700 leading-relaxed">
                      {t('ngoBody')}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('secureHostingBody')}</h3>
                    <p className="text-gray-700 leading-relaxed">
                      {t('landingBody')}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('cmsIntegration')}</h3>
                    <p className="text-gray-700 leading-relaxed">
                      {t('portfolioBody')}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('cmsIntegrationBody')}</h3>
                    <p className="text-gray-700 leading-relaxed">
                      {t('contentBody')}
                    </p>
                  </div>
                </div>
              </div>
            </SectionWrapper>

            {/* Technology Stack */}
            <SectionWrapper bgColor="light">
              <div className="max-w-4xl mx-auto px-6">
                <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">
                  {t('servicesTitle')}
                </h2>
                <p className="text-gray-700 leading-relaxed mb-8">
                  {t('techIntro')}
                </p>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">{t('loadSpeedTitle')}</h3>
                    <p className="text-gray-700 leading-relaxed">
                      {t('loadSpeedBody')}
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">{t('seoStructureTitle')}</h3>
                    <p className="text-gray-700 leading-relaxed">
                      {t('seoStructureBody')}
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">{t('vendorLockTitle')}</h3>
                    <p className="text-gray-700 leading-relaxed">
                      {t('vendorLockBody')}
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">{t('maintainableTitle')}</h3>
                    <p className="text-gray-700 leading-relaxed">
                      {t('maintainableBody')}
                    </p>
                  </div>
                </div>
              </div>
            </SectionWrapper>

            {/* Delivery Process */}
            <SectionWrapper bgColor="white">
              <div className="max-w-4xl mx-auto px-6">
                <h2 className="text-3xl font-heading font-bold text-gray-900 mb-8">
                  {t('corporateSites')}
                </h2>
                <div className="space-y-6">
                  <div className="border-l-4 border-primary pl-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('corporateSitesBody')}</h3>
                    <p className="text-gray-700 leading-relaxed">
                      {t('discoveryBody')}
                    </p>
                  </div>
                  <div className="border-l-4 border-primary pl-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('ngoWebsites')}</h3>
                    <p className="text-gray-700 leading-relaxed">
                      {t('designBody')}
                    </p>
                  </div>
                  <div className="border-l-4 border-primary pl-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('ngoWebsitesBody')}</h3>
                    <p className="text-gray-700 leading-relaxed">
                      {t('developmentBody')}
                    </p>
                  </div>
                  <div className="border-l-4 border-primary pl-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('ecommerceSites')}</h3>
                    <p className="text-gray-700 leading-relaxed">
                      {t('qaBody')}
                    </p>
                  </div>
                  <div className="border-l-4 border-primary pl-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('ecommerceSitesBody')}</h3>
                    <p className="text-gray-700 leading-relaxed">
                      {t('launchBody')}
                    </p>
                  </div>
                </div>
              </div>
            </SectionWrapper>

            {/* Industries We Serve */}
            <SectionWrapper bgColor="light">
              <div className="max-w-4xl mx-auto px-6">
                <h2 className="text-3xl font-heading font-bold text-gray-900 mb-8">
                  {t('portfolioSites')}
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">{t('portfolioSitesBody')}</h3>
                    <p className="text-gray-700 leading-relaxed">
                      {t('ngoSectorBody')}
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">{t('rwandaTitle')}</h3>
                    <p className="text-gray-700 leading-relaxed">
                      {t('startupBody')}
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">{t('rwandaBody')}</h3>
                    <p className="text-gray-700 leading-relaxed">
                      {t('profServicesBody')}
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">{t('industriesTitle')}</h3>
                    <p className="text-gray-700 leading-relaxed">
                      {t('educationBody')}
                    </p>
                  </div>
                </div>
              </div>
            </SectionWrapper>

            {/* See Our Work */}
            <SectionWrapper bgColor="white">
              <div className="max-w-4xl mx-auto px-6">
                <h2 className="text-3xl font-heading font-bold text-gray-900 mb-8">
                  {t('seeOurWorkTitle')}
                </h2>
                <div className="space-y-6 mb-8">
                  <div className="border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      <Link href="/portfolio/ngo-portal" className="text-primary hover:text-primary-dark hover:underline">
                        {t('ngoPortalTitle')} →
                      </Link>
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {t('ngoPortalBody')}
                    </p>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      <Link href="/portfolio/ecommerce-shop" className="text-primary hover:text-primary-dark hover:underline">
                        {t('ecommercePlatformTitle')} →
                      </Link>
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {t('ecommercePlatformBody')}
                    </p>
                  </div>
                </div>
                <Link href="/portfolio" className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-semibold hover:underline">
                  {t('ngos')}
                  <ArrowRight size={16} />
                </Link>
              </div>
            </SectionWrapper>

            {/* Related Services */}
            <SectionWrapper bgColor="highlight">
              <div className="max-w-4xl mx-auto px-6">
                <h2 className="text-2xl font-heading font-bold text-gray-900 mb-6">{t('relatedTitle')}</h2>
                <div className="flex flex-wrap gap-4">
                  <Link href="/services/hosting" className="text-primary hover:text-primary-dark font-medium">
                    {t('relatedHosting')} →
                  </Link>
                  <Link href="/services/ecommerce" className="text-primary hover:text-primary-dark font-medium">
                    {t('relatedEcommerce')} →
                  </Link>
                  <Link href="/services/branding" className="text-primary hover:text-primary-dark font-medium">
                    {t('relatedBranding')} →
                  </Link>
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

            {/* CTA Strip */}
            <section className="py-12 bg-primary text-white">
              <div className="max-w-4xl mx-auto px-6 text-center">
                <h2 className="text-2xl font-heading font-bold mb-4">{t('government')}</h2>
                <p className="text-primary-100 mb-6">{t('education')}</p>
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
