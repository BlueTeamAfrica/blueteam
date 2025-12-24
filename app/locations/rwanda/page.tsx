import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import InteriorHeader from '@/components/InteriorHeader'
import { generateLocalBusinessSchema, generateServiceSchema } from '@/lib/schema'
import { Globe, Smartphone, Shield, Code } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Technology Solutions Provider in Rwanda | Blue Team Africa',
  description: 'Website design, mobile app development, and cybersecurity services in Rwanda, serving NGOs and businesses in Kigali and nationwide.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://www.blueteamafrica.com/locations/rwanda',
  },
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
    url: 'https://www.blueteamafrica.com/locations/rwanda',
    type: 'website',
  },
}

// Generate JSON-LD schemas
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

export default function RwandaLocationPage() {
  return (
    <>
      {/* JSON-LD Schemas */}
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

      {/* LocalBusiness Schema for Rwanda - Google Business Profile Ready */}
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
              {
                "@type": "Country",
                "name": "Rwanda"
              },
              {
                "@type": "City",
                "name": "Kigali"
              }
            ],
            "sameAs": [
              "https://www.linkedin.com/company/blue-team-africa",
              "https://x.com/BLUETEAMAFRICA"
            ],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Technology Services in Rwanda",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Website Design in Rwanda"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Mobile App Development in Rwanda"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Cybersecurity Services in Rwanda"
                  }
                }
              ]
            }
          })
        }}
      />

      {/* FAQPage Schema for Rwanda */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Do you provide website design services in Kigali, Rwanda?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. Blue Team Africa provides professional website design services in Kigali and across Rwanda for NGOs, startups, and businesses, focusing on performance, security, and scalability."
                }
              },
              {
                "@type": "Question",
                "name": "Do you offer mobile app development services in Rwanda?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We develop custom Android and iOS mobile applications for organizations in Rwanda, including NGOs and SMEs, tailored to local user needs and infrastructure."
                }
              },
              {
                "@type": "Question",
                "name": "Can NGOs in Rwanda work with Blue Team Africa remotely?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Absolutely. We work with NGOs and organizations across Rwanda using secure remote collaboration, while maintaining local context and regional experience in East Africa."
                }
              },
              {
                "@type": "Question",
                "name": "Do you provide cybersecurity services for organizations in Rwanda?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. We offer cybersecurity solutions for organizations in Rwanda, including system hardening, secure hosting, data protection, and ongoing technical support."
                }
              },
              {
                "@type": "Question",
                "name": "How much does website design cost in Rwanda?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Website design costs in Rwanda depend on project scope and requirements. We offer flexible solutions suitable for NGOs, startups, and growing businesses operating in Rwanda."
                }
              }
            ]
          })
        }}
      />

      <InteriorHeader
        title="Serving Organizations Across Rwanda"
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Locations', href: '#' },
          { label: 'Rwanda' },
        ]}
      />

      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-br from-primary/10 via-primary/5 to-gray-50 py-16 md:py-24 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="fade-up">
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-gray-900 leading-tight">
                Serving Organizations Across Rwanda
              </h1>
              <p className="text-lg md:text-xl text-gray-700 mb-4 leading-relaxed">
                Blue Team Africa is a technology company providing professional website design, mobile app development, and cybersecurity services in Rwanda. We work with NGOs, startups, and businesses in Kigali and across Rwanda to build secure, scalable, and high-performance digital solutions. With strong experience supporting organizations in East Africa, we help our clients grow online through modern websites, custom mobile applications, and reliable technology systems tailored to local needs.
              </p>
              <p className="text-lg md:text-xl text-gray-700 mb-6 font-semibold">
                Serving Kigali and organizations across Rwanda and East Africa.
              </p>
              <Link
                href="/contact"
                className="inline-block px-8 py-4 bg-primary text-white rounded-lg hover:bg-primary-dark transition-all font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Start Your Project in Rwanda
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
            Digital Solutions for NGOs and Businesses in Rwanda
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="mb-4">
              Rwanda has emerged as one of Africa's most dynamic digital ecosystems, with a strong focus on technology-driven development and innovation. The country's commitment to digital transformation has created unprecedented opportunities for NGOs, enterprises, and startups to leverage technology for growth and impact.
            </p>
            <p className="mb-4">
              Organizations across Rwanda are increasingly recognizing the need for professional digital solutions that can support their missions, whether they're humanitarian organizations working in remote areas, businesses expanding their market reach, or startups building their first online presence. The demand for reliable, secure, and scalable technology solutions has never been higher.
            </p>
            <p>
              Blue Team Africa brings deep expertise in serving East African organizations, understanding the unique challenges and opportunities that come with operating in Rwanda's growing digital landscape. From the bustling tech scene in Kigali to organizations working across the country, we provide comprehensive digital solutions tailored to the needs of NGOs and businesses alike.
            </p>
          </div>
        </section>

        {/* Section 2: Kigali Focus - CRITICAL */}
        <section className="mb-16 bg-gray-50 rounded-2xl p-8 md:p-10 fade-up" aria-labelledby="kigali-focus">
          <h2 id="kigali-focus" className="text-3xl md:text-4xl font-heading font-semibold mb-6 text-gray-900">
            Serving Organizations and NGOs in Kigali
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="mb-4">
              Kigali stands at the heart of Rwanda's digital transformation, hosting a vibrant community of NGOs, international organizations, and growing businesses. The city's strategic position as East Africa's technology hub has attracted numerous organizations seeking to establish or expand their digital presence. Blue Team Africa has extensive experience working with organizations based in Kigali, understanding the specific needs and operational contexts that shape their technology requirements.
            </p>
            <p className="mb-4">
              For NGOs operating in Kigali, we provide specialized website design and development services that reflect their mission and reach their target audiences effectively. Our mobile application development solutions enable field teams to collect data, manage programs, and communicate seamlessly, even in areas with limited connectivity. Many institutions in Kigali also require robust cybersecurity services to protect sensitive data and ensure compliance with international standards.
            </p>
            <p>
              Companies and institutions throughout Kigali trust Blue Team Africa for comprehensive digital solutions that combine technical excellence with deep understanding of the local context. Whether you're an NGO managing multiple programs, a business expanding your online presence, or an institution requiring secure infrastructure, our team brings the expertise needed to deliver results that matter.
            </p>
          </div>
        </section>

        {/* Section 3: Services in Rwanda - Card Layout */}
        <section className="mb-16 fade-up" aria-labelledby="services-rwanda">
          <h2 id="services-rwanda" className="text-3xl md:text-4xl font-heading font-semibold mb-8 text-gray-900">
            Our Services in Rwanda
          </h2>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {/* Website Design */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all border border-gray-100 fade-up delay-1">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3 text-gray-900">
                Website Design
              </h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                Professional website design services tailored for NGOs and businesses in Rwanda. Modern, mobile-first websites that effectively communicate your mission.
              </p>
              <Link
                href="/services/web-design"
                className="text-primary font-semibold hover:text-primary-dark hover:underline text-sm inline-flex items-center"
              >
                Learn more →
              </Link>
            </div>

            {/* Website Development */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all border border-gray-100 fade-up delay-2">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Code className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3 text-gray-900">
                Website Development
              </h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                Custom website development with fast loading times, secure hosting, and seamless user experiences across all devices.
              </p>
              <Link
                href="/services/website-development"
                className="text-primary font-semibold hover:text-primary-dark hover:underline text-sm inline-flex items-center"
              >
                Learn more →
              </Link>
            </div>

            {/* Mobile App Development */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all border border-gray-100 fade-up delay-3">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Smartphone className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3 text-gray-900">
                Mobile App Development
              </h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                Custom mobile applications for NGOs and businesses. Offline-capable apps that work even in areas with limited connectivity.
              </p>
              <Link
                href="/services/mobile-apps"
                className="text-primary font-semibold hover:text-primary-dark hover:underline text-sm inline-flex items-center"
              >
                Learn more →
              </Link>
            </div>

            {/* Cybersecurity */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all border border-gray-100 fade-up">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3 text-gray-900">
                Cybersecurity
              </h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                Comprehensive cybersecurity services including security audits, penetration testing, and secure hosting solutions.
              </p>
              <Link
                href="/services/cybersecurity"
                className="text-primary font-semibold hover:text-primary-dark hover:underline text-sm inline-flex items-center"
              >
                Learn more →
              </Link>
            </div>
          </div>

          {/* Detailed Service Descriptions (Keep all SEO content) */}
          <div className="space-y-12 mt-12">
            {/* Website Design & Development */}
            <div>
              <h3 className="text-2xl md:text-3xl font-heading font-semibold mb-4 text-gray-900">
                Website Design & Development
              </h3>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed mb-4">
                <p>
                  Professional website design and development services tailored for NGOs and businesses in Rwanda. We create modern, mobile-first websites that effectively communicate your mission, showcase your work, and engage your audience. Our development approach ensures fast loading times, secure hosting, and seamless user experiences across all devices.
                </p>
                <p>
                  Whether you need a simple informational website or a complex platform with custom functionality, our team combines design expertise with technical excellence to deliver solutions that work. We understand the importance of websites that perform well in Rwanda's digital environment, optimizing for local connectivity and user expectations.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/services/web-design"
                  className="inline-flex items-center text-primary font-semibold hover:text-primary-dark hover:underline"
                >
                  Learn more about Web Design →
                </Link>
                <Link
                  href="/services/website-development"
                  className="inline-flex items-center text-primary font-semibold hover:text-primary-dark hover:underline"
                >
                  Learn more about Website Development →
                </Link>
              </div>
            </div>

            {/* Mobile Applications & Mobile App Development */}
            <div>
              <h3 className="text-2xl md:text-3xl font-heading font-semibold mb-4 text-gray-900">
                Mobile Applications & Mobile App Development
              </h3>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed mb-4">
                <p>
                  Custom mobile application development for NGOs and businesses in Rwanda. We build native and cross-platform mobile apps that enable field teams to collect data, manage programs, and stay connected even in areas with limited internet connectivity. Our mobile applications integrate seamlessly with existing systems, providing real-time synchronization when connectivity is available.
                </p>
                <p>
                  From data collection apps for humanitarian organizations to business applications that streamline operations, our mobile app development services are designed to meet the specific needs of organizations operating in Rwanda. We prioritize offline functionality, data security, and user-friendly interfaces that work across different devices and network conditions.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/services/mobile-apps"
                  className="inline-flex items-center text-primary font-semibold hover:text-primary-dark hover:underline"
                >
                  Learn more about Mobile App Development →
                </Link>
              </div>
            </div>

            {/* Cybersecurity Services */}
            <div>
              <h3 className="text-2xl md:text-3xl font-heading font-semibold mb-4 text-gray-900">
                Cybersecurity Services
              </h3>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed mb-4">
                <p>
                  Comprehensive cybersecurity services to protect NGOs and businesses in Rwanda from digital threats. We provide security audits, penetration testing, secure hosting solutions, and ongoing monitoring to ensure your digital infrastructure remains protected. Our cybersecurity approach is tailored to the specific risks and compliance requirements that organizations face in Rwanda.
                </p>
                <p>
                  For NGOs handling sensitive beneficiary data and businesses managing customer information, robust cybersecurity is essential. We implement enterprise-grade security measures, including encryption, secure authentication, regular backups, and threat monitoring. Our team stays current with the latest security threats and best practices to keep your systems protected.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/services/cybersecurity"
                  className="inline-flex items-center text-primary font-semibold hover:text-primary-dark hover:underline"
                >
                  Learn more about Cybersecurity Services →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-16 fade-up" aria-labelledby="faq-rwanda">
          <h2 id="faq-rwanda" className="text-3xl md:text-4xl font-heading font-semibold mb-8 text-gray-900">
            Frequently Asked Questions About Our Services in Rwanda
          </h2>
          <div className="space-y-6">
            <details className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <summary className="font-heading font-semibold cursor-pointer text-gray-900 text-lg mb-2">
                Do you provide website design services in Kigali, Rwanda?
              </summary>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Yes. Blue Team Africa provides professional website design services in Kigali and across Rwanda for NGOs, startups, and businesses, focusing on performance, security, and scalability.
              </p>
            </details>

            <details className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <summary className="font-heading font-semibold cursor-pointer text-gray-900 text-lg mb-2">
                Do you offer mobile app development services in Rwanda?
              </summary>
              <p className="mt-4 text-gray-700 leading-relaxed">
                We develop custom Android and iOS mobile applications for organizations in Rwanda, including NGOs and SMEs, tailored to local user needs and infrastructure.
              </p>
            </details>

            <details className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <summary className="font-heading font-semibold cursor-pointer text-gray-900 text-lg mb-2">
                Can NGOs in Rwanda work with Blue Team Africa remotely?
              </summary>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Absolutely. We work with NGOs and organizations across Rwanda using secure remote collaboration, while maintaining local context and regional experience in East Africa.
              </p>
            </details>

            <details className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <summary className="font-heading font-semibold cursor-pointer text-gray-900 text-lg mb-2">
                Do you provide cybersecurity services for organizations in Rwanda?
              </summary>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Yes. We offer cybersecurity solutions for organizations in Rwanda, including system hardening, secure hosting, data protection, and ongoing technical support.
              </p>
            </details>

            <details className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <summary className="font-heading font-semibold cursor-pointer text-gray-900 text-lg mb-2">
                How much does website design cost in Rwanda?
              </summary>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Website design costs in Rwanda depend on project scope and requirements. We offer flexible solutions suitable for NGOs, startups, and growing businesses operating in Rwanda.
              </p>
            </details>
          </div>
        </section>

        {/* Trust Signals Section */}
        <section className="mb-16 fade-up" aria-labelledby="trust-signals">
          <h2 id="trust-signals" className="text-3xl md:text-4xl font-heading font-semibold mb-6 text-gray-900">
            Trusted by Organizations in Rwanda and East Africa
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed mb-6">
            <p className="mb-4">
              Blue Team Africa works with NGOs, startups, and growing organizations across Rwanda and East Africa. Our experience includes supporting humanitarian organizations, digital platforms, and internal systems used by teams operating in challenging environments.
            </p>
            <p>
              We focus on long-term partnerships, secure systems, and solutions that scale as organizations grow.
            </p>
          </div>
          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-700">Experience working with NGOs and humanitarian organizations</p>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-700">Projects supporting teams in Rwanda and East Africa</p>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-700">Secure, performance-focused development approach</p>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-700">Remote-first collaboration with local context understanding</p>
            </li>
          </ul>
          <div className="mt-6">
            <Link
              href="/portfolio"
              className="inline-flex items-center text-primary font-semibold hover:text-primary-dark hover:underline"
            >
              View selected projects in our portfolio →
            </Link>
          </div>
        </section>

        {/* Trust & Credibility Section */}
        <section className="mb-16 bg-gradient-to-br from-primary/5 to-gray-50 rounded-2xl p-8 md:p-12 fade-up" aria-labelledby="trust-section">
          <div className="max-w-4xl mx-auto text-center">
            <h2 id="trust-section" className="text-3xl md:text-4xl font-heading font-semibold mb-6 text-gray-900">
              Trusted by NGOs and Organizations in Rwanda
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mt-10">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">5+</div>
                <p className="text-gray-700 font-semibold">Years of Experience</p>
                <p className="text-sm text-gray-600 mt-2">Serving East African organizations</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <p className="text-gray-700 font-semibold">NGO Projects</p>
                <p className="text-sm text-gray-600 mt-2">Specialized humanitarian focus</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">4</div>
                <p className="text-gray-700 font-semibold">Countries Served</p>
                <p className="text-sm text-gray-600 mt-2">Uganda, Kenya, Rwanda, Sudan</p>
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

        {/* Section 4: Why Blue Team Africa in Rwanda */}
        <section className="mb-16 bg-white rounded-2xl p-8 md:p-10 border border-gray-200 fade-up" aria-labelledby="why-blue-team">
          <h2 id="why-blue-team" className="text-3xl md:text-4xl font-heading font-semibold mb-6 text-gray-900">
            Why Blue Team Africa in Rwanda
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="mb-4">
              Blue Team Africa brings unique expertise in serving NGOs and humanitarian organizations, with proven experience building systems that work in challenging environments. Our team understands the operational realities that organizations face in Rwanda, from connectivity challenges in remote areas to the need for secure, compliant systems that meet international standards.
            </p>
            <p className="mb-4">
              Our East Africa focus means we have deep knowledge of the regional context, understanding both the opportunities and constraints that shape technology adoption. We've built ERP systems, mobile data collection applications, and secure infrastructure for organizations working across the region, giving us practical experience with the types of solutions that NGOs and businesses in Rwanda need most.
            </p>
            <p className="mb-4">
              We prioritize security and scalability in everything we build, recognizing that organizations need solutions that can grow with them and protect sensitive information. Our approach combines modern technology with practical implementation, ensuring that systems are not only technically sound but also usable by teams with varying levels of technical expertise.
            </p>
            <p>
              Local understanding matters, and our experience working with organizations across East Africa has given us insights into the specific needs, preferences, and operational contexts that shape successful digital solutions in Rwanda. We're committed to building long-term partnerships with organizations, providing ongoing support and adapting solutions as needs evolve.
            </p>
          </div>
        </section>

        {/* Section 5: Enhanced CTA */}
        <section className="text-center bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-8 md:p-12 text-white fade-in shadow-2xl" aria-labelledby="cta-rwanda">
          <h2 id="cta-rwanda" className="text-3xl md:text-4xl font-heading font-semibold mb-4 text-white">
            Start Your Website or Mobile App Project in Rwanda Today
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Whether you're an NGO looking to improve your digital presence, a business expanding online, or an institution requiring secure infrastructure, we're here to help. Let's discuss how we can support your mission in Rwanda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-white text-primary rounded-lg hover:bg-gray-100 transition-all font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Contact Us
            </Link>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white/10 transition-all font-semibold"
            >
              Request a Quote
            </Link>
          </div>
        </section>
      </div>
    </>
  )
}

