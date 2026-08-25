import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import InteriorHeader from '@/components/InteriorHeader'
import { Code, Database, Zap, Shield, GitBranch, Server, Cloud } from 'lucide-react'
import { getTranslations } from 'next-intl/server'
import { buildAlternates } from '@/lib/metadata-helpers'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const alternates = buildAlternates('/web-development-rwanda', locale)
  return {
    title: 'Web Development Company in Rwanda | Scalable, Secure & Custom Solutions',
    description: 'Work with a trusted web development company in Rwanda delivering secure, scalable, and custom-built solutions for businesses and NGOs. Talk to our team today.',
    robots: 'index, follow',
    alternates,
    keywords: [
      'web development Rwanda',
      'website development Rwanda',
      'backend development Rwanda',
      'API development Rwanda',
      'database integration Rwanda',
      'web development Kigali',
      'custom web applications Rwanda',
      'scalable web development Rwanda',
    ],
    openGraph: {
      title: 'Web Development Company in Rwanda | Scalable, Secure & Custom Solutions',
      description: 'Trusted web development company in Rwanda. We deliver secure, scalable, custom solutions for businesses and NGOs. Talk to our team today.',
      url: alternates.canonical,
      type: 'website',
    },
  }
}

// JSON-LD schemas — stay English intentionally
const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://www.blueteamafrica.com/web-development-rwanda#business",
  "name": "Blue Team Africa – Web Development Company in Rwanda",
  "alternateName": "Blue Team for Digital Solutions",
  "url": "https://www.blueteamafrica.com/web-development-rwanda",
  "logo": "https://www.blueteamafrica.com/logo.png",
  "image": "https://www.blueteamafrica.com/og-image.png",
  "telephone": "+250798973375",
  "email": "contact@blueteamafrica.com",
  "priceRange": "$$",
  "description": "Professional web development company in Rwanda providing custom website development, backend systems, and scalable digital solutions for businesses and NGOs.",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "RW",
    "addressRegion": "Kigali City",
    "addressLocality": "Kigali"
  },
  "areaServed": {
    "@type": "Country",
    "name": "Rwanda"
  },
  "sameAs": [
    "https://www.linkedin.com/company/blue-team-africa",
    "https://www.facebook.com/profile.php?id=61585128246041",
    "https://www.instagram.com/blueteamafrica/",
    "https://x.com/BLUETEAMAFRICA"
  ],
  "serviceType": [
    "Web Development",
    "Website Development",
    "Backend Development",
    "Custom Software Development"
  ]
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What types of web applications do you build?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We build a wide range of web applications including custom business platforms, NGO management systems, e-commerce solutions, dashboards, CRM integrations, API-driven applications, and scalable cloud-based systems for organizations in Rwanda."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide custom software development?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We provide full-stack custom software development services, building tailored solutions from the ground up to meet specific business requirements, including backend systems, APIs, databases, and frontend interfaces."
      }
    },
    {
      "@type": "Question",
      "name": "Is your development scalable and secure?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. All our web development follows security best practices and is built with scalability in mind. We use modern frameworks, implement secure authentication, regular security updates, and architecture designed to grow with your business needs."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer ongoing support after development?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We provide ongoing technical support, maintenance, security updates, and system improvements after project delivery. Support packages are tailored to client needs, ensuring your application continues to perform optimally."
      }
    }
  ]
}

export default async function WebDevelopmentRwandaPage() {
  const t = await getTranslations('WebDevelopmentRwandaPage')

  return (
    <>
      {/* JSON-LD Schemas — stay English intentionally */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <InteriorHeader
        title={t('headerTitle')}
        breadcrumb={[
          { label: t('breadcrumbHome'), href: '/' },
          { label: t('breadcrumbWebDevRwanda') },
        ]}
      />

      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-br from-primary/10 via-primary/5 to-gray-50 py-16 md:py-24 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="fade-up">
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-gray-900 leading-tight">
                {t('headerTitle')}
              </h1>
              <p className="text-base md:text-lg text-gray-700 mb-4 leading-relaxed font-medium">
                {t('heroTrustLine')}
              </p>
              <p className="text-lg md:text-xl text-gray-700 mb-4 leading-relaxed">
                {t('heroPara1')}
              </p>
              <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
                {t('heroPara2')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-block px-8 py-4 bg-primary text-white rounded-lg hover:bg-primary-dark transition-all font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-center"
                >
                  {t('heroCtaPrimary')}
                </Link>
                <Link
                  href="/locations/rwanda"
                  className="inline-block px-8 py-4 border-2 border-primary text-primary rounded-lg hover:bg-primary/5 transition-all font-semibold text-center"
                >
                  {t('heroCtaSecondary')}
                </Link>
              </div>
            </div>
            <div className="fade-in">
              <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/services/website-development/services-websitedevelopment-website-development-hero-01.webp"
                  alt="Professional web development services for organizations in Rwanda"
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
        {/* Why Web Development Matters in Rwanda */}
        <section className="mb-16 fade-up" aria-labelledby="why-web-development">
          <h2 id="why-web-development" className="text-3xl md:text-4xl font-heading font-semibold mb-6 text-gray-900">
            {t('whyTitle')}
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="mb-4">{t('whyPara1')}</p>
            <p className="mb-4">{t('whyPara2')}</p>
            <p>{t('whyPara3')}</p>
          </div>
        </section>

        {/* Web Development for Businesses in Rwanda */}
        <section className="mb-16 fade-up" aria-labelledby="web-development-businesses-rwanda">
          <h2 id="web-development-businesses-rwanda" className="text-3xl md:text-4xl font-heading font-semibold mb-6 text-gray-900">
            {t('businessesTitle')}
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="mb-4">{t('businessesPara1')}</p>
            <p>
              {t.rich('businessesPara2', {
                webDesignLink: (chunks) => (
                  <Link href="/web-design-rwanda" className="text-primary hover:text-primary-dark hover:underline">{chunks}</Link>
                ),
              })}
            </p>
          </div>
        </section>

        {/* Technical Capabilities and Development Stack */}
        <section className="mb-16 bg-gray-50 rounded-2xl p-8 md:p-10 fade-up" aria-labelledby="technical-capabilities">
          <h2 id="technical-capabilities" className="text-3xl md:text-4xl font-heading font-semibold mb-8 text-gray-900">
            {t('techTitle')}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Code className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-4 text-gray-900">{t('frameworksTitle')}</h3>
              <p className="text-gray-700 leading-relaxed mb-4">{t('frameworksBody')}</p>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex items-start"><span className="text-primary mr-2">•</span><span>{t('frameworksBullet1')}</span></li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><span>{t('frameworksBullet2')}</span></li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><span>{t('frameworksBullet3')}</span></li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Database className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-4 text-gray-900">{t('databaseTitle')}</h3>
              <p className="text-gray-700 leading-relaxed mb-4">{t('databaseBody')}</p>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex items-start"><span className="text-primary mr-2">•</span><span>{t('databaseBullet1')}</span></li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><span>{t('databaseBullet2')}</span></li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><span>{t('databaseBullet3')}</span></li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <GitBranch className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-4 text-gray-900">{t('apiTitle')}</h3>
              <p className="text-gray-700 leading-relaxed mb-4">{t('apiBody')}</p>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex items-start"><span className="text-primary mr-2">•</span><span>{t('apiBullet1')}</span></li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><span>{t('apiBullet2')}</span></li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><span>{t('apiBullet3')}</span></li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Server className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-4 text-gray-900">{t('backendTitle')}</h3>
              <p className="text-gray-700 leading-relaxed mb-4">{t('backendBody')}</p>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex items-start"><span className="text-primary mr-2">•</span><span>{t('backendBullet1')}</span></li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><span>{t('backendBullet2')}</span></li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><span>{t('backendBullet3')}</span></li>
              </ul>
            </div>
          </div>
        </section>

        {/* Performance Optimization for Rwanda */}
        <section className="mb-16 fade-up" aria-labelledby="performance-optimization">
          <h2 id="performance-optimization" className="text-3xl md:text-4xl font-heading font-semibold mb-6 text-gray-900">
            {t('perfTitle')}
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="mb-4">{t('perfPara1')}</p>
            <p className="mb-4">{t('perfPara2')}</p>
            <p className="mb-4">{t('perfPara3')}</p>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-heading font-semibold mb-2 text-gray-900">{t('perfCard1Title')}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{t('perfCard1Body')}</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Cloud className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-heading font-semibold mb-2 text-gray-900">{t('perfCard2Title')}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{t('perfCard2Body')}</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-heading font-semibold mb-2 text-gray-900">{t('perfCard3Title')}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{t('perfCard3Body')}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Security Implementation */}
        <section className="mb-16 bg-gradient-to-br from-primary/5 to-gray-50 rounded-2xl p-8 md:p-10 fade-up" aria-labelledby="security-implementation">
          <h2 id="security-implementation" className="text-3xl md:text-4xl font-heading font-semibold mb-6 text-gray-900">
            {t('secTitle')}
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="mb-4">{t('secPara1')}</p>
            <p className="mb-4">{t('secPara2')}</p>
            <p className="mb-6">{t('secPara3')}</p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-heading font-semibold mb-3 text-gray-900">{t('secAuthTitle')}</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start"><span className="text-primary mr-2">✓</span><span>{t('secAuthBullet1')}</span></li>
                  <li className="flex items-start"><span className="text-primary mr-2">✓</span><span>{t('secAuthBullet2')}</span></li>
                  <li className="flex items-start"><span className="text-primary mr-2">✓</span><span>{t('secAuthBullet3')}</span></li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-heading font-semibold mb-3 text-gray-900">{t('secDataTitle')}</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start"><span className="text-primary mr-2">✓</span><span>{t('secDataBullet1')}</span></li>
                  <li className="flex items-start"><span className="text-primary mr-2">✓</span><span>{t('secDataBullet2')}</span></li>
                  <li className="flex items-start"><span className="text-primary mr-2">✓</span><span>{t('secDataBullet3')}</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Integration Capabilities */}
        <section className="mb-16 fade-up" aria-labelledby="integration-capabilities">
          <h2 id="integration-capabilities" className="text-3xl md:text-4xl font-heading font-semibold mb-6 text-gray-900">
            {t('intTitle')}
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="mb-4">{t('intPara1')}</p>
            <p className="mb-4">{t('intPara2')}</p>
            <p>{t('intPara3')}</p>
          </div>
        </section>

        {/* Industries We Serve in Rwanda */}
        <section className="mb-16 bg-white rounded-2xl p-8 md:p-10 border border-gray-200 fade-up" aria-labelledby="industries-rwanda">
          <h2 id="industries-rwanda" className="text-3xl md:text-4xl font-heading font-semibold mb-6 text-gray-900">
            {t('indTitle')}
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="mb-4">{t('indIntro')}</p>
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div>
                <h3 className="text-xl font-heading font-semibold mb-3 text-gray-900">{t('indHumanitarianTitle')}</h3>
                <p className="text-gray-700 leading-relaxed mb-3">{t('indHumanitarianBody')}</p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start"><span className="text-primary mr-2">•</span><span>{t('indHumanitarianBullet1')}</span></li>
                  <li className="flex items-start"><span className="text-primary mr-2">•</span><span>{t('indHumanitarianBullet2')}</span></li>
                  <li className="flex items-start"><span className="text-primary mr-2">•</span><span>{t('indHumanitarianBullet3')}</span></li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-heading font-semibold mb-3 text-gray-900">{t('indFintechTitle')}</h3>
                <p className="text-gray-700 leading-relaxed mb-3">{t('indFintechBody')}</p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start"><span className="text-primary mr-2">•</span><span>{t('indFintechBullet1')}</span></li>
                  <li className="flex items-start"><span className="text-primary mr-2">•</span><span>{t('indFintechBullet2')}</span></li>
                  <li className="flex items-start"><span className="text-primary mr-2">•</span><span>{t('indFintechBullet3')}</span></li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-heading font-semibold mb-3 text-gray-900">{t('indHealthcareTitle')}</h3>
                <p className="text-gray-700 leading-relaxed mb-3">{t('indHealthcareBody')}</p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start"><span className="text-primary mr-2">•</span><span>{t('indHealthcareBullet1')}</span></li>
                  <li className="flex items-start"><span className="text-primary mr-2">•</span><span>{t('indHealthcareBullet2')}</span></li>
                  <li className="flex items-start"><span className="text-primary mr-2">•</span><span>{t('indHealthcareBullet3')}</span></li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-heading font-semibold mb-3 text-gray-900">{t('indEducationTitle')}</h3>
                <p className="text-gray-700 leading-relaxed mb-3">{t('indEducationBody')}</p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start"><span className="text-primary mr-2">•</span><span>{t('indEducationBullet1')}</span></li>
                  <li className="flex items-start"><span className="text-primary mr-2">•</span><span>{t('indEducationBullet2')}</span></li>
                  <li className="flex items-start"><span className="text-primary mr-2">•</span><span>{t('indEducationBullet3')}</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Our Development Process */}
        <section className="mb-16 fade-up" aria-labelledby="development-process">
          <h2 id="development-process" className="text-3xl md:text-4xl font-heading font-semibold mb-6 text-gray-900">
            {t('processTitle')}
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="mb-6">{t('processIntro')}</p>
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h3 className="text-xl font-heading font-semibold mb-3 text-gray-900">{t('process1Title')}</h3>
                <p className="text-gray-700 leading-relaxed mb-3">{t('process1Body')}</p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start"><span className="text-primary mr-2">•</span><span>{t('process1Bullet1')}</span></li>
                  <li className="flex items-start"><span className="text-primary mr-2">•</span><span>{t('process1Bullet2')}</span></li>
                  <li className="flex items-start"><span className="text-primary mr-2">•</span><span>{t('process1Bullet3')}</span></li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h3 className="text-xl font-heading font-semibold mb-3 text-gray-900">{t('process2Title')}</h3>
                <p className="text-gray-700 leading-relaxed mb-3">{t('process2Body')}</p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start"><span className="text-primary mr-2">•</span><span>{t('process2Bullet1')}</span></li>
                  <li className="flex items-start"><span className="text-primary mr-2">•</span><span>{t('process2Bullet2')}</span></li>
                  <li className="flex items-start"><span className="text-primary mr-2">•</span><span>{t('process2Bullet3')}</span></li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h3 className="text-xl font-heading font-semibold mb-3 text-gray-900">{t('process3Title')}</h3>
                <p className="text-gray-700 leading-relaxed mb-3">{t('process3Body')}</p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start"><span className="text-primary mr-2">•</span><span>{t('process3Bullet1')}</span></li>
                  <li className="flex items-start"><span className="text-primary mr-2">•</span><span>{t('process3Bullet2')}</span></li>
                  <li className="flex items-start"><span className="text-primary mr-2">•</span><span>{t('process3Bullet3')}</span></li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h3 className="text-xl font-heading font-semibold mb-3 text-gray-900">{t('process4Title')}</h3>
                <p className="text-gray-700 leading-relaxed mb-3">{t('process4Body')}</p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start"><span className="text-primary mr-2">•</span><span>{t('process4Bullet1')}</span></li>
                  <li className="flex items-start"><span className="text-primary mr-2">•</span><span>{t('process4Bullet2')}</span></li>
                  <li className="flex items-start"><span className="text-primary mr-2">•</span><span>{t('process4Bullet3')}</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="mb-16 bg-gradient-to-br from-primary/5 to-gray-50 rounded-2xl p-8 md:p-10 fade-up" aria-labelledby="related-services">
          <h2 id="related-services" className="text-3xl md:text-4xl font-heading font-semibold mb-6 text-gray-900">
            {t('relatedTitle')}
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="mb-6">{t('relatedIntro')}</p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-heading font-semibold mb-3 text-gray-900">{t('relatedErpTitle')}</h3>
                <p className="text-gray-700 leading-relaxed mb-3">{t('relatedErpBody')}</p>
                <p className="text-gray-700 leading-relaxed text-sm">{t('relatedErpSub')}</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-heading font-semibold mb-3 text-gray-900">{t('relatedMobileTitle')}</h3>
                <p className="text-gray-700 leading-relaxed mb-3">{t('relatedMobileBody')}</p>
                <p className="text-gray-700 leading-relaxed text-sm">{t('relatedMobileSub')}</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-heading font-semibold mb-3 text-gray-900">{t('relatedCyberTitle')}</h3>
                <p className="text-gray-700 leading-relaxed mb-3">{t('relatedCyberBody')}</p>
                <p className="text-gray-700 leading-relaxed text-sm">{t('relatedCyberSub')}</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-heading font-semibold mb-3 text-gray-900">{t('relatedHostingTitle')}</h3>
                <p className="text-gray-700 leading-relaxed mb-3">{t('relatedHostingBody')}</p>
                <p className="text-gray-700 leading-relaxed text-sm">{t('relatedHostingSub')}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Blue Team Africa */}
        <section className="mb-16 bg-white rounded-2xl p-8 md:p-10 border border-gray-200 fade-up" aria-labelledby="why-choose">
          <h2 id="why-choose" className="text-3xl md:text-4xl font-heading font-semibold mb-8 text-gray-900">
            {t('whyChooseTitle')}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-heading font-semibold mb-3 text-gray-900">{t('whyChooseTechTitle')}</h3>
              <p className="text-gray-700 leading-relaxed">{t('whyChooseTechBody')}</p>
            </div>
            <div>
              <h3 className="text-xl font-heading font-semibold mb-3 text-gray-900">{t('whyChooseRwandaTitle')}</h3>
              <p className="text-gray-700 leading-relaxed">{t('whyChooseRwandaBody')}</p>
            </div>
            <div>
              <h3 className="text-xl font-heading font-semibold mb-3 text-gray-900">{t('whyChooseScaleTitle')}</h3>
              <p className="text-gray-700 leading-relaxed">{t('whyChooseScaleBody')}</p>
            </div>
            <div>
              <h3 className="text-xl font-heading font-semibold mb-3 text-gray-900">{t('whyChooseSupportTitle')}</h3>
              <p className="text-gray-700 leading-relaxed">{t('whyChooseSupportBody')}</p>
            </div>
          </div>
        </section>

        {/* Working with Organizations in Rwanda */}
        <section className="mb-16 fade-up" aria-labelledby="working-rwanda">
          <h2 id="working-rwanda" className="text-3xl md:text-4xl font-heading font-semibold mb-6 text-gray-900">
            {t('workingTitle')}
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="mb-4">{t('workingPara1')}</p>
            <p className="mb-4">{t('workingPara2')}</p>
            <p className="mb-6">{t('workingPara3')}</p>
            <div className="mt-8">
              <Link
                href="/locations/rwanda"
                className="inline-flex items-center text-primary font-semibold hover:text-primary-dark hover:underline"
              >
                {t('workingLink')}
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-16 fade-up" aria-labelledby="faq-section">
          <h2 id="faq-section" className="text-3xl md:text-4xl font-heading font-semibold mb-8 text-gray-900">
            {t('faqTitle')}
          </h2>
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
              <h3 className="text-xl font-heading font-semibold mb-3 text-gray-900">{t('faq1Title')}</h3>
              <p className="text-gray-700 leading-relaxed">{t('faq1Body')}</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
              <h3 className="text-xl font-heading font-semibold mb-3 text-gray-900">{t('faq2Title')}</h3>
              <p className="text-gray-700 leading-relaxed">{t('faq2Body')}</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
              <h3 className="text-xl font-heading font-semibold mb-3 text-gray-900">{t('faq3Title')}</h3>
              <p className="text-gray-700 leading-relaxed">{t('faq3Body')}</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
              <h3 className="text-xl font-heading font-semibold mb-3 text-gray-900">{t('faq4Title')}</h3>
              <p className="text-gray-700 leading-relaxed">{t('faq4Body')}</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-8 md:p-12 text-white fade-in shadow-2xl" aria-labelledby="cta-section">
          <h2 id="cta-section" className="text-3xl md:text-4xl font-heading font-semibold mb-4 text-white">
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
              {t('ctaPrimary')}
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
