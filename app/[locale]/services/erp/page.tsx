import Link from 'next/link'
import Image from 'next/image'
import { MessageCircle } from 'lucide-react'
import InteriorHeader from '@/components/InteriorHeader'
import SectionWrapper from '@/components/SectionWrapper'
import ServiceSidebar from '@/components/ServiceSidebar'
import type { Metadata } from 'next'
import { metadataERP } from '@/lib/service-metadata'
import ServiceSchema from '@/components/ServiceSchema'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import FAQSection from '@/components/FAQSection'
import type { FAQ } from '@/lib/faqs'
import { getTranslations } from 'next-intl/server'

const erpFAQs: FAQ[] = [
  {
    question: 'Which ERP platform do you implement?',
    answer: 'We specialise in ERPNext, an open-source enterprise platform built on the Frappe framework. It covers finance, HR, procurement, inventory, project management, and donor reporting in one system. Because it is open-source, there are no per-user licence fees — you own and control the installation.',
  },
  {
    question: 'How long does ERP implementation take?',
    answer: 'For most organizations, implementation runs eight to sixteen weeks. This covers discovery and requirements mapping, system configuration, custom module development, data migration, staff training, and go-live support. Complex multi-site or multi-currency deployments sit at the longer end of that range.',
  },
  {
    question: 'Can you build NGO-specific modules — donor reporting, grant tracking, M&E?',
    answer: 'Yes. This is a core part of what we do. We have implemented donor reporting dashboards, grant budget tracking, beneficiary management, and monitoring and evaluation (M&E) modules for humanitarian organizations working in Sudan, Uganda, and the wider East Africa region. These are custom modules built on top of the standard ERPNext core.',
  },
  {
    question: 'How does ERP connect with field operations in low-connectivity environments?',
    answer: 'We pair ERP systems with a dedicated mobile app that works offline. Field staff collect assessments, beneficiary records, and incident reports on the device, then sync automatically when connectivity is restored. All submitted data flows directly into the ERP for real-time dashboards and program oversight — no manual re-entry.',
  },
  {
    question: 'Does the ERP include cybersecurity and access controls?',
    answer: 'Role-based access control is standard in ERPNext and we configure it carefully during implementation — each user sees only the data and functions their role requires. We also apply server-level hardening, encrypted backups, and can integrate the system with our cybersecurity monitoring services for organizations that handle sensitive or confidential data.',
  },
  {
    question: 'What ongoing support is provided after go-live?',
    answer: 'We offer tiered maintenance and support plans covering system updates, bug resolution, user additions, and module adjustments as your organization evolves. Training for new staff and report customization are included in most support agreements.',
  },
]

function ERPFAQSchema() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: erpFAQs.map((faq) => ({
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
  const canonical = `https://www.blueteamafrica.com${lp}/services/erp`
  return {
    ...metadataERP,
    keywords: 'ERP systems, ERPNext, ERP solutions Uganda, ERP for NGOs, ERP for humanitarian organizations, ERPNext implementation, enterprise resource planning East Africa, NGO ERP systems',
    alternates: { canonical },
    openGraph: {
      title: 'ERP Solutions for NGOs, Companies & Humanitarian Organizations',
      description: 'Modern, scalable, and secure ERP systems powered by ERPNext for organizations across East Africa.',
      url: canonical,
      siteName: 'Blue Team Africa',
      images: [
        {
          url: '/images/services/erp-crm/services-erpcrm-erp-crm-dashboard-01.webp',
          width: 1200,
          height: 630,
          alt: 'ERP Solutions for NGOs and Companies',
        },
      ],
      type: 'website',
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'ERP Solutions | Blue Team Africa',
      description: 'Streamline operations with ERPNext-powered ERP systems for NGOs and companies.',
      images: ['/images/services/erp-crm/services-erpcrm-erp-crm-dashboard-01.webp'],
    },
  }
}

export default async function ERPPage() {
  const t = await getTranslations('ErpPage')

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
        { name: 'ERP Solutions', url: 'https://www.blueteamafrica.com/services/erp' },
      ]} />
      <ERPFAQSchema />
      <ServiceSchema serviceName="ERP" serviceSlug="erp" />
      <InteriorHeader
        title={t('title')}
        breadcrumb={[
          { label: t('breadcrumbHome'), href: '/' },
          { label: t('breadcrumbServices'), href: '/services' },
          { label: t('breadcrumbErp') }
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
                  src="/images/services/erp-crm/services-erpcrm-erp-crm-dashboard-01.webp"
                  alt="ERP Systems"
                  fill
                  className="object-cover"
                  sizes="100vw"
                  priority
                />
              </div>
            </section>

            {/* Hero Intro */}
            <SectionWrapper bgColor="white">
              <div className="max-w-5xl mx-auto">
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                  {t('introPre')}
                  <strong>
                    <Link href="/services/erp" className="text-primary hover:underline">
                      {t('introLinkLabel')}
                    </Link>
                  </strong>
                  {t('introPost')}
                </p>
              </div>
            </SectionWrapper>

            {/* Centralize / Why ERP Section */}
            <SectionWrapper bgColor="light">
              <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
                  {t('whyTitle')}
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  {t('whyBodyPre')}
                  <strong>
                    <Link href="/services/erp" className="text-primary hover:underline">
                      {t('whyBodyLinkLabel')}
                    </Link>
                  </strong>
                  {t('whyBodyPost')}
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-800 text-lg">
                  {(['whyBullet1','whyBullet2','whyBullet3','whyBullet4','whyBullet5','whyBullet6','whyBullet7','whyBullet8'] as const).map((key) => (
                    <li key={key} className="flex items-start">
                      <span className="text-primary mr-3 font-bold">•</span>
                      <span>{t(key)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </SectionWrapper>

            {/* Sudan Case Study Section */}
            <SectionWrapper bgColor="highlight">
              <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
                  {t('caseTitle')}
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  {t('caseBody1')}
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  {t('caseBody2Pre')}
                  <strong>
                    <Link href="/services/mobile-apps" className="text-primary hover:underline">
                      {t('caseBody2LinkLabel')}
                    </Link>
                  </strong>
                  {t('caseBody2Post')}
                </p>
                <div className="flex flex-wrap gap-4 mt-2">
                  <Link href="/portfolio/cslo-sudan" className="text-primary hover:text-primary-dark font-medium">
                    {t('caseStudyLink1')} →
                  </Link>
                  <Link href="/portfolio/erp-integration" className="text-primary hover:text-primary-dark font-medium">
                    {t('caseStudyLink2')} →
                  </Link>
                </div>
              </div>
            </SectionWrapper>

            {/* Mobile App Integration */}
            <SectionWrapper bgColor="white">
              <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
                  {t('mobileTitle')}
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  {t('mobileBodyPre')}
                  <Link href="/services/mobile-apps" className="text-primary hover:underline">
                    {t('mobileBodyLinkLabel')}
                  </Link>
                  {t('mobileBodyPost')}
                </p>
                <ul className="space-y-4 text-gray-800 text-lg mb-8">
                  {(['mobileBullet1','mobileBullet2','mobileBullet3','mobileBullet4','mobileBullet5'] as const).map((key) => (
                    <li key={key} className="flex items-start">
                      <span className="text-primary mr-3 font-bold">•</span>
                      <span>{t(key)}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-lg text-gray-700">
                  {t('mobileClosing')}
                </p>
              </div>
            </SectionWrapper>

            {/* Key Features Section */}
            <SectionWrapper bgColor="light">
              <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
                  {t('featuresTitle')}
                </h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-800 text-lg">
                  <li className="flex items-start">
                    <span className="text-primary mr-3 font-bold">•</span>
                    <span>{t('feature1')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3 font-bold">•</span>
                    <span>
                      {t('feature2Pre')}
                      <Link href="/services/hosting" className="text-primary hover:underline">{t('feature2LinkLabel')}</Link>
                      {t('feature2Post')}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3 font-bold">•</span>
                    <span>{t('feature3')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3 font-bold">•</span>
                    <span>{t('feature4')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3 font-bold">•</span>
                    <span>{t('feature5')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3 font-bold">•</span>
                    <span>{t('feature6')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3 font-bold">•</span>
                    <span>
                      {t('feature7Pre')}
                      <Link href="/services/web-design" className="text-primary hover:underline">{t('feature7Link1')}</Link>
                      {t('feature7Mid')}
                      <Link href="/services/mobile-apps" className="text-primary hover:underline">{t('feature7Link2')}</Link>
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3 font-bold">•</span>
                    <span>
                      {t('feature8Pre')}
                      <Link href="/services/maintenance" className="text-primary hover:underline">{t('feature8LinkLabel')}</Link>
                      {t('feature8Post')}
                    </span>
                  </li>
                </ul>
              </div>
            </SectionWrapper>

            {/* Related Services */}
            <SectionWrapper bgColor="white">
              <div className="max-w-5xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 mb-6">
                  {t('relatedTitle')}
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {t('relatedBodyPre')}
                  <Link href="/services/web-design" className="text-primary hover:underline">{t('relatedLink1')}</Link>
                  {t('relatedMid1')}
                  <Link href="/services/mobile-apps" className="text-primary hover:underline">{t('relatedLink2')}</Link>
                  {t('relatedMid2')}
                  <Link href="/services/cybersecurity" className="text-primary hover:underline">{t('relatedLink3')}</Link>
                  {t('relatedPost')}
                </p>
              </div>
            </SectionWrapper>

            {/* 3 Value Pillars */}
            <SectionWrapper bgColor="light">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('pillar1Title')}</h3>
                  <p className="text-gray-600">{t('pillar1Body')}</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('pillar2Title')}</h3>
                  <p className="text-gray-600">{t('pillar2Body')}</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('pillar3Title')}</h3>
                  <p className="text-gray-600">{t('pillar3Body')}</p>
                </div>
              </div>
            </SectionWrapper>

            {/* Why Choose Blue Team Africa */}
            <SectionWrapper bgColor="white">
              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-8">
                {t('whyChooseTitle')}
              </h2>
              <div className="space-y-6 text-gray-700">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">{t('why1Title')}</h3>
                  <p>
                    {t('why1BodyPre')}
                    <Link href="/services/erp" className="text-primary hover:underline">ERPNext</Link>
                    {t('why1BodyMid')}
                    <Link href="/services/crm" className="text-primary hover:underline">Frappe</Link>
                    {t('why1BodyPost')}
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">{t('why2Title')}</h3>
                  <p>
                    {t('why2BodyPre')}
                    <Link href="/services/mobile-apps" className="text-primary hover:underline">{t('why2BodyLinkLabel')}</Link>
                    {t('why2BodyPost')}
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">{t('why3Title')}</h3>
                  <p>
                    {t('why3BodyPre')}
                    <Link href="/services/maintenance" className="text-primary hover:underline">{t('why3BodyLinkLabel')}</Link>
                    {t('why3BodyPost')}
                  </p>
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
                  href="https://wa.me/254119402737?text=Hello!%20I%20would%20like%20to%20discuss%20ERP%20solutions%20for%20my%20organization."
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
