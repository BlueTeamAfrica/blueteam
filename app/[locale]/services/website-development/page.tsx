import type { Metadata } from "next";
import Image from "next/image";
import InteriorHeader from "@/components/InteriorHeader";
import ServiceSidebar from "@/components/ServiceSidebar";
import SectionWrapper from "@/components/SectionWrapper";
import Link from "next/link";
import { metadataWebsiteDevelopment } from '@/lib/service-metadata'
import ServiceSchema from '@/components/ServiceSchema'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import FAQSection from '@/components/FAQSection'
import type { FAQ } from '@/lib/faqs'
import { getTranslations } from 'next-intl/server'

const websiteDevelopmentFAQs: FAQ[] = [
  {
    question: 'What types of websites and systems do you build?',
    answer: 'We build corporate and organizational websites, NGO platforms, client and staff portals, content management systems, and web applications that replace manual processes. From straightforward marketing sites to complex multi-role portals, our builds are designed to perform under real conditions across East Africa.',
  },
  {
    question: 'What technology stack do you use, and why does it matter?',
    answer: 'We build primarily on Next.js and React, which deliver fast-loading, SEO-friendly sites that scale well. For content-managed sites we integrate CMS platforms like Sanity or Contentful. The stack choice means your website is maintainable by any competent developer, not locked to a proprietary builder.',
  },
  {
    question: 'How long does a website development project take?',
    answer: 'Straightforward websites typically take three to six weeks. Web applications with user authentication, dashboards, or database integrations run eight to sixteen weeks depending on complexity. We provide a timeline estimate after scoping, with milestones agreed before development begins.',
  },
  {
    question: 'Do you handle everything — design, development, and launch?',
    answer: 'Yes. We manage the full delivery: UI/UX design, front-end and back-end development, hosting setup, domain configuration, and post-launch testing. For organizations that already have a design, we can work from provided assets. For those starting from scratch, design and development are coordinated internally.',
  },
  {
    question: 'Can you build platforms for NGOs with donor reporting or beneficiary management features?',
    answer: 'Yes — this is work we do regularly. We have built portals for humanitarian organizations that include secure beneficiary registration, donor-facing reporting dashboards, multilingual interfaces, and offline-capable data entry. We understand the compliance and data-sensitivity requirements that NGO platforms carry.',
  },
  {
    question: 'What is included in handover, and do you offer ongoing maintenance?',
    answer: 'Handover includes the deployed site or application, codebase access, documentation, and a walkthrough session. We offer ongoing maintenance plans covering security updates, dependency management, performance monitoring, and content changes — so the system stays current without requiring your team to manage the technical details.',
  },
]

function WebsiteDevelopmentFAQSchema() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: websiteDevelopmentFAQs.map((faq) => ({
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
  const canonical = `https://www.blueteamafrica.com${lp}/services/website-development`
  return {
    ...metadataWebsiteDevelopment,
    keywords: [
      'website development',
      'web development',
      'custom web applications',
      'NGO website development',
      'business website development',
      'e-commerce development',
      'web application development',
      'scalable web development',
      'secure website development',
      'full-stack development',
    ],
    alternates: { canonical },
    openGraph: {
      title: 'Professional Web Development Services',
      description: 'Fast, secure, and scalable website development for businesses and NGOs. Custom web applications, backend systems, and enterprise solutions.',
      url: canonical,
      images: ['/images/hero/hero-og-01.webp'],
    },
  }
}

export default async function WebsiteDevelopmentPage() {
  const t = await getTranslations('WebsiteDevelopmentPage')

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
        { name: 'Professional Web Development Services', url: 'https://www.blueteamafrica.com/services/website-development' },
      ]} />
      <WebsiteDevelopmentFAQSchema />
      <ServiceSchema serviceName="Website Development" serviceSlug="website-development" />
      <InteriorHeader
        title={t('title')}
        breadcrumb={[
          { label: t('breadcrumbHome'), href: '/' },
          { label: t('breadcrumbServices'), href: '/services' },
          { label: t('breadcrumbWebsiteDevelopment') }
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
                  src="/images/services/website-development/services-websitedevelopment-website-development-hero-01.webp"
                  alt="Professional Website Development Services"
                  fill
                  className="object-cover"
                  sizes="100vw"
                  priority
                />
              </div>
            </section>

            {/* Introduction */}
            <SectionWrapper>
              <p className="text-lg text-gray-700 leading-relaxed">
                {t('introP1')}
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mt-4">
                {t('introPre')}
                <Link href="/web-development-rwanda" className="text-primary hover:text-primary-dark hover:underline">
                  {t('introLinkLabel')}
                </Link>
                {t('introPost')}
              </p>
            </SectionWrapper>

            {/* Why Website Development Matters */}
            <SectionWrapper>
              <h2 className="text-2xl font-heading font-bold text-gray-900 mb-6">
                {t('whyTitle')}
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                {t('whyP1Pre')}<strong>{t('whyP1Bold')}</strong>{t('whyP1Post')}
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                {t('whyP2')}
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span><strong>{t('whyBullet1Bold')}</strong>{t('whyBullet1Rest')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span><strong>{t('whyBullet2')}</strong></span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span><strong>{t('whyBullet3Bold')}</strong>{t('whyBullet3Rest')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span><strong>{t('whyBullet4Bold')}</strong>{t('whyBullet4Rest')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span><strong>{t('whyBullet5')}</strong></span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span><strong>{t('whyBullet6')}</strong></span>
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                {t('whyConclusion')}
              </p>
            </SectionWrapper>

            {/* What We Build */}
            <SectionWrapper>
              <h2 className="text-2xl font-heading font-bold text-gray-900 mb-6">
                {t('buildTitle')}
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {t('build1Title')}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {t('build1Desc')}
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {t('build2Title')}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {t('build2Desc')}
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {t('build3Title')}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {t('build3Desc')}
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {t('build4Title')}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {t('build4Desc')}
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {t('build5Title')}
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    {t('build5Intro')}
                  </p>
                  <ul className="space-y-2 text-gray-700 ml-4">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>{t('build5Bullet1')}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>{t('build5Bullet2')}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>{t('build5Bullet3')}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>{t('build5Bullet4')}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>{t('build5Bullet5')}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </SectionWrapper>

            {/* Real Case Example */}
            <SectionWrapper bgColor="highlight">
              <h2 className="text-2xl font-heading font-bold text-gray-900 mb-6">
                {t('caseTitle')}
              </h2>
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900">
                  {t('caseH3')}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {t('caseP1')}
                </p>
                <p className="text-gray-700 leading-relaxed">
                  {t('caseP2')}
                </p>
                <p className="text-gray-700 leading-relaxed">
                  {t('caseP3')}
                </p>
                <p className="text-gray-700 leading-relaxed font-semibold">
                  {t('caseP4')}
                </p>
                <Link
                  href="/portfolio/cslo-sudan"
                  className="inline-block mt-4 text-primary hover:text-primary-dark font-semibold"
                >
                  {t('caseViewStudy')}
                </Link>
              </div>
            </SectionWrapper>

            {/* Why Choose Blue Team Africa */}
            <SectionWrapper>
              <h2 className="text-2xl font-heading font-bold text-gray-900 mb-6">
                {t('whyChooseTitle')}
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                {t('whyChooseP1')}
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                {t('whyChooseP2')}
              </p>
            </SectionWrapper>

            {/* Service Highlights */}
            <SectionWrapper>
              <h2 className="text-2xl font-heading font-bold text-gray-900 mb-6">
                {t('highlightsTitle')}
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>{t('highlight1')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>{t('highlight2')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>{t('highlight3')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>{t('highlight4')}</span>
                  </li>
                </ul>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>{t('highlight5')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>{t('highlight6')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>{t('highlight7')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>{t('highlight8')}</span>
                  </li>
                </ul>
              </div>
            </SectionWrapper>

            {/* Related Services */}
            <SectionWrapper>
              <h2 className="text-2xl font-heading font-bold text-gray-900 mb-6">
                {t('relatedTitle')}
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Link
                  href="/services/web-design"
                  className="block p-4 border border-gray-200 rounded-lg hover:border-primary hover:shadow-md transition-all"
                >
                  <h3 className="font-semibold text-gray-900 mb-1">{t('related1Title')}</h3>
                  <p className="text-sm text-gray-600">{t('related1Desc')}</p>
                </Link>
                <Link
                  href="/services/mobile-apps"
                  className="block p-4 border border-gray-200 rounded-lg hover:border-primary hover:shadow-md transition-all"
                >
                  <h3 className="font-semibold text-gray-900 mb-1">{t('related2Title')}</h3>
                  <p className="text-sm text-gray-600">{t('related2Desc')}</p>
                </Link>
                <Link
                  href="/services/cybersecurity"
                  className="block p-4 border border-gray-200 rounded-lg hover:border-primary hover:shadow-md transition-all"
                >
                  <h3 className="font-semibold text-gray-900 mb-1">{t('related3Title')}</h3>
                  <p className="text-sm text-gray-600">{t('related3Desc')}</p>
                </Link>
                <Link
                  href="/services/erp"
                  className="block p-4 border border-gray-200 rounded-lg hover:border-primary hover:shadow-md transition-all"
                >
                  <h3 className="font-semibold text-gray-900 mb-1">{t('related4Title')}</h3>
                  <p className="text-sm text-gray-600">{t('related4Desc')}</p>
                </Link>
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

            {/* Call to Action */}
            <SectionWrapper>
              <div className="text-center space-y-4 p-8 bg-gray-50 rounded-lg">
                <h2 className="text-2xl font-bold text-gray-900">
                  {t('ctaTitle')}
                </h2>
                <p className="text-gray-700 leading-relaxed max-w-2xl mx-auto">
                  {t('ctaSubtitle')}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                  <a
                    href="tel:+254119402737"
                    className="inline-flex items-center px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors"
                  >
                    📞 +254 119 402 737
                  </a>
                  <a
                    href="mailto:contact@blueteamafrica.com"
                    className="inline-flex items-center px-6 py-3 bg-white text-primary font-semibold rounded-lg border-2 border-primary hover:bg-gray-50 transition-colors"
                  >
                    {t('ctaGetStarted')}
                  </a>
                </div>
                <p className="text-sm text-gray-600 pt-2">
                  {t('ctaWhatsAppNote')}
                </p>
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
  );
}
