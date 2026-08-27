import { Link } from '@/i18n/navigation'
import Image from 'next/image'
import { MessageCircle, ArrowRight, Shield, Search, AlertTriangle, Lock, Database, Users, Smartphone, Server } from 'lucide-react'
import InteriorHeader from '@/components/InteriorHeader'
import SectionWrapper from '@/components/SectionWrapper'
import ServiceSidebar from '@/components/ServiceSidebar'
import FAQSection from '@/components/FAQSection'
import type { Metadata } from 'next'
import type { FAQ } from '@/lib/faqs'
import { metadataCybersecurity } from '@/lib/service-metadata'
import ServiceSchema from '@/components/ServiceSchema'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import { getTranslations } from 'next-intl/server'
import { buildAlternates } from '@/lib/metadata-helpers'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const alternates = buildAlternates('/services/cybersecurity', locale)
  return {
    ...metadataCybersecurity,
    keywords: 'cybersecurity Uganda, cybersecurity Sudan, penetration testing East Africa, security audit Uganda, NGO cybersecurity, website security, data protection East Africa, cyber security services, Blue Team Africa',
    alternates,
    openGraph: {
      title: 'Cybersecurity Solutions for East African Businesses & NGOs',
      description: 'Enterprise-grade cybersecurity solutions including penetration testing, security audits, and secure operations for organizations across East Africa.',
      url: alternates.canonical,
      siteName: 'Blue Team Africa',
      images: [
        {
          url: '/images/services/cybersecurity/services-cybersecurity-hero-01.webp',
          width: 1200,
          height: 630,
          alt: 'Cybersecurity Solutions for East Africa',
        },
      ],
      type: 'website',
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Cybersecurity Solutions | Blue Team Africa',
      description: 'Protect your digital infrastructure with expert cybersecurity solutions for East Africa.',
      images: ['/images/services/cybersecurity/services-cybersecurity-hero-01.webp'],
    },
  }
}


export default async function CybersecurityPage() {
  const t = await getTranslations('CybersecurityPage')

  const displayFAQs: FAQ[] = [
    { question: t('faq1q'), answer: t('faq1a') },
    { question: t('faq2q'), answer: t('faq2a') },
    { question: t('faq3q'), answer: t('faq3a') },
    { question: t('faq4q'), answer: t('faq4a') },
    { question: t('faq5q'), answer: t('faq5a') },
    { question: t('faq6q'), answer: t('faq6a') },
    { question: t('faq7q'), answer: t('faq7a') },
    { question: t('faq8q'), answer: t('faq8a') },
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
        { name: 'Cybersecurity Solutions', url: 'https://www.blueteamafrica.com/services/cybersecurity' },
      ]} />
      <ServiceSchema serviceName="Cybersecurity" serviceSlug="cybersecurity" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <InteriorHeader
        title={t('interiorHeaderTitle')}
        breadcrumb={[
          { label: t('breadcrumbHome'), href: '/' },
          { label: t('breadcrumbServices'), href: '/services' },
          { label: t('breadcrumbCybersecurity') }
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
                  src="/images/services/cybersecurity/services-cybersecurity-hero-01.webp"
                  alt="Trusted Cybersecurity Solutions for East African Businesses & NGOs"
                  fill
                  className="object-cover"
                  sizes="100vw"
                  priority
                />
              </div>
            </section>

            {/* Section 1 — Why Cybersecurity Matters */}
            <SectionWrapper bgColor="white">
              <div className="max-w-4xl mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6 text-center">
                  {t('sec1H2')}
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  {t('sec1P1Pre')}<Link href="/locations/rwanda" className="text-primary hover:text-primary-dark hover:underline">{t('sec1P1LinkLabel')}</Link>{t('sec1P1Post')}
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  {t('sec1P2')}
                </p>
                <ul className="space-y-3 text-gray-700 mb-6">
                  <li className="flex items-start">
                    <span className="text-primary mr-3 font-bold">•</span>
                    <span>{t.rich('sec1Li1', {
                      sudanLink: (chunks) => (
                        <Link href="/locations/sudan" className="text-primary hover:text-primary-dark hover:underline">{chunks}</Link>
                      ),
                    })}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3 font-bold">•</span>
                    <span>{t('sec1Li2')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3 font-bold">•</span>
                    <span>{t('sec1Li3')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3 font-bold">•</span>
                    <span>{t('sec1Li4')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3 font-bold">•</span>
                    <span>{t('sec1Li5')}</span>
                  </li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  {t('sec1P3')}
                </p>
              </div>
            </SectionWrapper>

            {/* Section 2 — What We Secure */}
            <SectionWrapper bgColor="light">
              <div className="max-w-4xl mx-auto px-6">
                <h2 className="text-3xl font-heading font-bold text-gray-900 mb-8 text-center">
                  {t('sec2H2')}
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <div className="flex items-center mb-3">
                      <Server className="text-primary mr-3" size={24} />
                      <h3 className="text-xl font-semibold text-gray-900">{t('sec2Card1H3')}</h3>
                    </div>
                    <p className="text-gray-600">
                      {t('sec2Card1P')}
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <div className="flex items-center mb-3">
                      <Database className="text-primary mr-3" size={24} />
                      <h3 className="text-xl font-semibold text-gray-900">{t('sec2Card2H3')}</h3>
                    </div>
                    <p className="text-gray-600">
                      {t('sec2Card2P')}
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <div className="flex items-center mb-3">
                      <Shield className="text-primary mr-3" size={24} />
                      <h3 className="text-xl font-semibold text-gray-900">{t('sec2Card3H3')}</h3>
                    </div>
                    <p className="text-gray-600">
                      {t('sec2Card3P')}
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <div className="flex items-center mb-3">
                      <Smartphone className="text-primary mr-3" size={24} />
                      <h3 className="text-xl font-semibold text-gray-900">{t('sec2Card4H3')}</h3>
                    </div>
                    <p className="text-gray-600">
                      {t('sec2Card4P')}
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <div className="flex items-center mb-3">
                      <Users className="text-primary mr-3" size={24} />
                      <h3 className="text-xl font-semibold text-gray-900">{t('sec2Card5H3')}</h3>
                    </div>
                    <p className="text-gray-600">
                      {t('sec2Card5P')}
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <div className="flex items-center mb-3">
                      <Database className="text-primary mr-3" size={24} />
                      <h3 className="text-xl font-semibold text-gray-900">{t('sec2Card6H3')}</h3>
                    </div>
                    <p className="text-gray-600">
                      {t('sec2Card6P')}
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 md:col-span-2">
                    <div className="flex items-center mb-3">
                      <Lock className="text-primary mr-3" size={24} />
                      <h3 className="text-xl font-semibold text-gray-900">{t('sec2Card7H3')}</h3>
                    </div>
                    <p className="text-gray-600">
                      {t('sec2Card7P')}
                    </p>
                  </div>
                </div>
                <div className="mt-8 p-4 bg-[#EEF4FF] rounded-lg border border-primary/20">
                  <p className="text-gray-700">
                    <Link href="/services/website-development" className="text-primary hover:text-primary-dark font-medium underline">
                      {t('sec2LinkLabel')}
                    </Link>{' '}
                    {t('sec2LinkPost')}
                  </p>
                </div>
              </div>
            </SectionWrapper>

            {/* Section 3 — Our Cybersecurity Services */}
            <SectionWrapper bgColor="white">
              <div className="max-w-4xl mx-auto px-6">
                <h2 className="text-3xl font-heading font-bold text-gray-900 mb-8 text-center">
                  {t('sec3H2')}
                </h2>
                <div className="space-y-6">
                  <div className="bg-[#F8F9FC] p-6 rounded-lg border border-gray-200">
                    <div className="flex items-start mb-3">
                      <Shield className="text-primary mr-3 flex-shrink-0 mt-1" size={24} />
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('sec3Service1H3')}</h3>
                        <p className="text-gray-700">
                          {t('sec3Service1P')}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#F8F9FC] p-6 rounded-lg border border-gray-200">
                    <div className="flex items-start mb-3">
                      <Search className="text-primary mr-3 flex-shrink-0 mt-1" size={24} />
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('sec3Service2H3')}</h3>
                        <p className="text-gray-700">
                          {t('sec3Service2P')}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#F8F9FC] p-6 rounded-lg border border-gray-200">
                    <div className="flex items-start mb-3">
                      <AlertTriangle className="text-primary mr-3 flex-shrink-0 mt-1" size={24} />
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('sec3Service3H3')}</h3>
                        <p className="text-gray-700">
                          {t('sec3Service3P')}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#F8F9FC] p-6 rounded-lg border border-gray-200">
                    <div className="flex items-start mb-3">
                      <AlertTriangle className="text-primary mr-3 flex-shrink-0 mt-1" size={24} />
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('sec3Service4H3')}</h3>
                        <p className="text-gray-700">
                          {t('sec3Service4P')}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#F8F9FC] p-6 rounded-lg border border-gray-200">
                    <div className="flex items-start mb-3">
                      <Search className="text-primary mr-3 flex-shrink-0 mt-1" size={24} />
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('sec3Service5H3')}</h3>
                        <p className="text-gray-700">
                          {t('sec3Service5P')}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#F8F9FC] p-6 rounded-lg border border-gray-200">
                    <div className="flex items-start mb-3">
                      <Users className="text-primary mr-3 flex-shrink-0 mt-1" size={24} />
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('sec3Service6H3')}</h3>
                        <p className="text-gray-700">
                          {t('sec3Service6P')}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#F8F9FC] p-6 rounded-lg border border-gray-200">
                    <div className="flex items-start mb-3">
                      <Lock className="text-primary mr-3 flex-shrink-0 mt-1" size={24} />
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('sec3Service7H3')}</h3>
                        <p className="text-gray-700">
                          {t('sec3Service7P')}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#F8F9FC] p-6 rounded-lg border border-gray-200">
                    <div className="flex items-start mb-3">
                      <Smartphone className="text-primary mr-3 flex-shrink-0 mt-1" size={24} />
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('sec3Service8H3')}</h3>
                        <p className="text-gray-700">
                          {t('sec3Service8P')}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SectionWrapper>

            {/* Section 4 — Specialized for NGOs & High-Risk Zones */}
            <SectionWrapper bgColor="highlight">
              <div className="max-w-4xl mx-auto px-6">
                <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6 text-center">
                  {t('sec4H2')}
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  {t('sec4P1')}
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  {t('sec4P2')}
                </p>
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-white p-5 rounded-lg shadow-sm">
                    <h3 className="font-semibold text-gray-900 mb-2">{t('sec4Card1H3')}</h3>
                    <p className="text-gray-600 text-sm">{t('sec4Card1P')}</p>
                  </div>
                  <div className="bg-white p-5 rounded-lg shadow-sm">
                    <h3 className="font-semibold text-gray-900 mb-2">{t('sec4Card2H3')}</h3>
                    <p className="text-gray-600 text-sm">{t('sec4Card2P')}</p>
                  </div>
                  <div className="bg-white p-5 rounded-lg shadow-sm">
                    <h3 className="font-semibold text-gray-900 mb-2">{t('sec4Card3H3')}</h3>
                    <p className="text-gray-600 text-sm">{t('sec4Card3P')}</p>
                  </div>
                  <div className="bg-white p-5 rounded-lg shadow-sm">
                    <h3 className="font-semibold text-gray-900 mb-2">{t('sec4Card4H3')}</h3>
                    <p className="text-gray-600 text-sm">{t('sec4Card4P')}</p>
                  </div>
                  <div className="bg-white p-5 rounded-lg shadow-sm">
                    <h3 className="font-semibold text-gray-900 mb-2">{t('sec4Card5H3')}</h3>
                    <p className="text-gray-600 text-sm">{t('sec4Card5P')}</p>
                  </div>
                  <div className="bg-white p-5 rounded-lg shadow-sm">
                    <h3 className="font-semibold text-gray-900 mb-2">{t('sec4Card6H3')}</h3>
                    <p className="text-gray-600 text-sm">{t('sec4Card6P')}</p>
                  </div>
                </div>
                <div className="p-4 bg-white rounded-lg border border-primary/20">
                  <p className="text-gray-700">
                    <Link href="/services/erp" className="text-primary hover:text-primary-dark font-medium underline">
                      {t('sec4LinkLabel')}
                    </Link>{' '}
                    {t('sec4LinkPost')}
                  </p>
                </div>
              </div>
            </SectionWrapper>

            {/* Section 5 — Why Choose Blue Team Africa */}
            <SectionWrapper bgColor="white">
              <div className="max-w-4xl mx-auto px-6">
                <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6 text-center">
                  {t('sec5H2')}
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  {t('sec5P1')}
                </p>
                <p className="text-xl font-semibold text-gray-900 mb-8 text-center bg-[#EEF4FF] p-4 rounded-lg border border-primary/20">
                  {t('sec5Pullquote')}
                </p>
                <h3 className="text-2xl font-heading font-semibold text-gray-900 mb-6">{t('sec5H3')}</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-[#F8F9FC] p-5 rounded-lg border border-gray-200">
                    <h4 className="font-semibold text-gray-900 mb-2">{t('sec5Card1H4')}</h4>
                    <p className="text-gray-600 text-sm">{t('sec5Card1P')}</p>
                  </div>
                  <div className="bg-[#F8F9FC] p-5 rounded-lg border border-gray-200">
                    <h4 className="font-semibold text-gray-900 mb-2">{t('sec5Card2H4')}</h4>
                    <p className="text-gray-600 text-sm">{t('sec5Card2P')}</p>
                  </div>
                  <div className="bg-[#F8F9FC] p-5 rounded-lg border border-gray-200">
                    <h4 className="font-semibold text-gray-900 mb-2">{t('sec5Card3H4')}</h4>
                    <p className="text-gray-600 text-sm">{t('sec5Card3P')}</p>
                  </div>
                  <div className="bg-[#F8F9FC] p-5 rounded-lg border border-gray-200">
                    <h4 className="font-semibold text-gray-900 mb-2">{t('sec5Card4H4')}</h4>
                    <p className="text-gray-600 text-sm">{t('sec5Card4P')}</p>
                  </div>
                  <div className="bg-[#F8F9FC] p-5 rounded-lg border border-gray-200">
                    <h4 className="font-semibold text-gray-900 mb-2">{t('sec5Card5H4')}</h4>
                    <p className="text-gray-600 text-sm">{t('sec5Card5P')}</p>
                  </div>
                  <div className="bg-[#F8F9FC] p-5 rounded-lg border border-gray-200">
                    <h4 className="font-semibold text-gray-900 mb-2">{t('sec5Card6H4')}</h4>
                    <p className="text-gray-600 text-sm">{t('sec5Card6P')}</p>
                  </div>
                </div>
              </div>
            </SectionWrapper>

            {/* Section 6 — Our Cybersecurity Process */}
            <SectionWrapper bgColor="light">
              <div className="max-w-4xl mx-auto px-6">
                <h2 className="text-3xl font-heading font-bold text-gray-900 mb-8 text-center">
                  {t('sec6H2')}
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold mr-4">
                      1
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('sec6Step1H3')}</h3>
                      <p className="text-gray-700">{t('sec6Step1P')}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold mr-4">
                      2
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('sec6Step2H3')}</h3>
                      <p className="text-gray-700">{t('sec6Step2P')}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold mr-4">
                      3
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('sec6Step3H3')}</h3>
                      <p className="text-gray-700">{t('sec6Step3P')}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold mr-4">
                      4
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('sec6Step4H3')}</h3>
                      <p className="text-gray-700">{t('sec6Step4P')}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold mr-4">
                      5
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('sec6Step5H3')}</h3>
                      <p className="text-gray-700">{t('sec6Step5P')}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold mr-4">
                      6
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('sec6Step6H3')}</h3>
                      <p className="text-gray-700">{t('sec6Step6P')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </SectionWrapper>

            {/* Section 7 — FAQ */}
            <SectionWrapper bgColor="white">
              <FAQSection
                customFAQs={displayFAQs}
                showAll={true}
                showCTA={false}
                title={t('faqTitle')}
                description={t('faqDescription')}
                viewAllLabel={t('faqViewAll')}
              />
            </SectionWrapper>

            {/* Section 8 — Final CTA */}
            <SectionWrapper bgColor="highlight">
              <div className="max-w-4xl mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
                  {t('ctaTitle')}
                </h2>
                <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
                  {t('ctaSubtitle')}
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href="https://wa.me/254119402737?text=Hello!%20I%20would%20like%20to%20request%20a%20security%20assessment."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-dark transition shadow-lg"
                  >
                    <MessageCircle size={20} />
                    {t('ctaWhatsApp')}
                  </a>
                  <a
                    href="https://wa.me/254119402737"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border-2 border-primary text-primary px-8 py-4 rounded-lg font-semibold hover:bg-primary/10 transition"
                  >
                    <MessageCircle size={20} />
                    WhatsApp: +254 119 402 737
                  </a>
                </div>
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
