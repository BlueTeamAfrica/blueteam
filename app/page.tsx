import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import OrganizationSchema from '@/components/OrganizationSchema'
import HomepageFAQSchema from '@/components/HomepageFAQSchema'
import HeroSection from '@/components/hero/Hero'
import dynamic from 'next/dynamic'

// Dynamically import non-critical components to reduce initial JS payload (mobile optimization)
// These will still be code-split and loaded lazily, improving initial bundle size

const MobileMoveOurServices = dynamic(() => import('@/components/MobileMoveOurServices'))

export const metadata: Metadata = {
  title: 'Blue Team Africa | Web Design & Development Company',
  description: 'Professional web design, website development, hosting, SEO and digital solutions for NGOs, companies, and startups in Uganda, Kenya & East Africa.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://www.blueteamafrica.com/',
  },
  openGraph: {
    title: 'BlueTeam Africa — Web Design & Digital Solutions',
    description: 'High-quality website design, hosting, SEO, and development services across East Africa.',
    url: 'https://www.blueteamafrica.com/',
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
    locale: 'en_US',
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

export default function Home() {
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
              Looking for a reliable <Link href="/web-design-rwanda" className="text-primary hover:text-primary-dark hover:underline">professional web design services in Rwanda</Link>? Explore our local web design services.
            </p>
            <h2 id="case-study-heading" className="text-3xl font-heading font-semibold text-center mb-8">
              Digital Transformation for CSLO Sudan
            </h2>
            <div className="bg-gray-50 rounded-2xl p-8 md:p-10">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Blue Team implemented a complete <Link href="/services/erp" className="text-primary hover:underline">ERPNext</Link> + <Link href="/services/crm" className="text-primary hover:underline">Frappe CRM</Link> system for CSLO Sudan, enabling real-time project tracking, automated reporting, secure data storage, and a custom <Link href="/services/mobile-apps" className="text-primary hover:underline">mobile app</Link> for field officers working in crisis-affected areas.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">Centralized beneficiaries, projects & inventory</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">Automated workflows and reporting dashboards</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">Mobile app for field data collection (even in low network zones)</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">Full integration with their website</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">100% secure cloud hosting</p>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <Link
                  href="/portfolio/cslo-sudan"
                  className="inline-block text-primary font-semibold hover:text-primary-dark underline"
                >
                  See full case study →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES GRID */}
        <section id="services" data-our-services="top" className="py-20 bg-gray-50" aria-labelledby="services-heading">
        <div className="max-w-6xl mx-auto px-6">
            <h2 id="services-heading" className="text-3xl font-heading font-semibold text-center mb-4">
              Our Core Digital Services
            </h2>
            <p className="text-center text-gray-600 max-w-2xl mx-auto mb-4">
              We combine design, engineering, and cybersecurity to deliver complete digital solutions.
            </p>
            <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
              Learn more about <Link href="/blog/web-design-cost-in-rwanda-2026" className="text-primary hover:text-primary-dark hover:underline">how much website design costs in Rwanda</Link> in our comprehensive pricing guide.
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
                <h3 className="text-xl font-semibold">Web Design (SEO-Ready Websites)</h3>
                <p className="mt-2 text-gray-600">
                  Modern, mobile-first website design optimized for speed, ranking, and user experience.
                </p>
                <Link href="/services/web-design" className="mt-4 inline-block text-primary font-medium hover:text-primary-dark">
                  Learn more →
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
                <h3 className="text-xl font-semibold">Website Development (Fast, Secure, Custom)</h3>
                <p className="mt-2 text-gray-600">
                  Custom Next.js websites, portals, dashboards, and enterprise systems tailored for your workflow.
                </p>
                <Link href="/services/website-development" className="mt-4 inline-block text-primary font-medium hover:text-primary-dark">
                  Learn more →
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
                <h3 className="text-xl font-semibold">Cyber Security Services</h3>
                <p className="mt-2 text-gray-600">
                  Full protection: penetration testing, threat monitoring, audits, backups, secure hosting, and compliance.
                </p>
                <Link href="/services/cybersecurity" className="mt-4 inline-block text-primary font-medium hover:text-primary-dark">
                  Learn more →
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
                <h3 className="text-xl font-semibold">Mobile App Development (NGO Field Data Applications)</h3>
                <p className="mt-2 text-gray-600">
                  We build offline-capable Android & iOS apps that sync directly with your ERP, CRM, or database.
                </p>
                <Link href="/services/mobile-apps" className="mt-4 inline-block text-primary font-medium hover:text-primary-dark">
                  Learn more →
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
                <h3 className="text-xl font-semibold">ERP & CRM Systems for NGOs (Powered by ERPNext)</h3>
                <p className="mt-2 text-gray-600">
                  End-to-end NGO management systems: finance, HR, logistics, reporting, and field tracking.
                </p>
                <Link href="/services/erp" className="mt-4 inline-block text-primary font-medium hover:text-primary-dark">
                  Learn more →
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
                <h3 className="text-xl font-semibold">Digital Marketing</h3>
                <p className="mt-2 text-gray-600">
                  SEO, content, analytics, social media management, and lead-generation funnels.
                </p>
                <Link href="/services/web-design" className="mt-4 inline-block text-primary font-medium hover:text-primary-dark">
                  Learn more →
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
                Serving Rwanda & East Africa
              </h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                We provide website design, mobile app development, and cybersecurity services to NGOs and businesses in Rwanda, including Kigali. For organizations seeking <Link href="/web-development-rwanda" className="text-primary hover:text-primary-dark hover:underline">professional web development services in Rwanda</Link>, we offer custom backend systems, API integrations, and scalable web applications.
              </p>
              <Link
                href="/locations/rwanda"
                className="text-primary font-semibold hover:text-primary-dark hover:underline inline-flex items-center"
              >
                Explore our services in Rwanda →
              </Link>
            </div>
          </div>
        </section>

        {/* WHY CHOOSE BLUE TEAM AFRICA */}
        <section className="py-20 bg-white" aria-labelledby="why-trust-heading">
          <div className="max-w-6xl mx-auto px-6">
            <h2 id="why-trust-heading" className="text-3xl font-heading font-semibold text-center mb-6">
              A Digital Team Shaped by Real-World Challenges
            </h2>
            <p className="text-center text-gray-700 max-w-3xl mx-auto mb-8 leading-relaxed">
              Blue Team Africa was formed by a group of Sudanese technology professionals who rebuilt their careers after the war. Today, operating from Uganda, our mission is to provide reliable, affordable, and secure digital solutions for organizations across East Africa.
            </p>
            <p className="text-center text-gray-700 max-w-3xl mx-auto mb-8 leading-relaxed">
              We specialize in building systems for NGOs, companies, startups, and institutions that operate in difficult environments — where reliability, security, and performance are not optional.
            </p>
            <p className="text-center text-gray-700 max-w-3xl mx-auto mb-12 leading-relaxed">
              Blue Team Africa is a Rwanda-based digital solutions company providing web design and web development services for businesses and NGOs across East Africa. Founded in 2023, the company focuses on performance-driven websites, scalable systems, and long-term search visibility rather than template-based solutions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Security First</h3>
                <p className="text-gray-600">
                  Every website and system follows cybersecurity best practices.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">NGO Experience</h3>
                <p className="text-gray-600">
                  We've built ERP, CRM & field-data systems for humanitarian organizations.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Scalable Technology</h3>
                <p className="text-gray-600">
                  Modern stack → Next.js, ERPNext, Flutter, Firebase, Linux.
                </p>
              </div>
            </div>
        </div>
      </section>

        {/* NGO DIGITAL SOLUTIONS */}
        <section className="py-20 bg-white" aria-labelledby="ngo-solutions-heading">
          <div className="max-w-6xl mx-auto px-6">
            <h2 id="ngo-solutions-heading" className="text-3xl font-heading font-semibold text-center mb-6">
              Reliable Digital Systems for NGOs Working in Challenging Environments
            </h2>
            <p className="text-center text-gray-700 max-w-3xl mx-auto mb-8 leading-relaxed">
              We understand the unique challenges NGOs face in Sudan, South Sudan, and Uganda — connectivity issues, data security risks, field-level reporting, and resource constraints. Our team builds tools that work even in difficult conditions:
            </p>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-10">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700"><Link href="/services/erp" className="text-primary hover:underline">ERPNext</Link> NGO Modules (finance, HR, programs, logistics)</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700"><Link href="/services/crm" className="text-primary hover:underline">CRM systems</Link> for beneficiary & donor management</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700"><Link href="/services/mobile-apps" className="text-primary hover:underline">Mobile apps</Link> for field staff (offline data capture → automatic sync)</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700">Secure cloud deployment</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700">Training & continuous support</p>
              </div>
            </div>

            <div className="text-center">
              <Link
                href="/contact"
                className="inline-block px-8 py-4 bg-primary text-white rounded-lg hover:bg-primary-dark transition font-semibold"
              >
                Request an NGO System Demo
              </Link>
            </div>
          </div>
        </section>

        {/* OUR PROCESS */}
        <section className="py-20 bg-gray-50" aria-labelledby="process-heading">
          <div className="max-w-6xl mx-auto px-6">
            <h2 id="process-heading" className="text-3xl font-heading font-semibold text-center mb-12">
              Our Process
            </h2>
            <div className="grid md:grid-cols-5 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">1</div>
                <h3 className="text-lg font-semibold mb-2">Discovery</h3>
                <p className="text-gray-600 text-sm">
                  We analyze your operations, workflows and reporting needs.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">2</div>
                <h3 className="text-lg font-semibold mb-2">Prototype</h3>
                <p className="text-gray-600 text-sm">
                  We design a clear system layout before development begins.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">3</div>
                <h3 className="text-lg font-semibold mb-2">Development</h3>
                <p className="text-gray-600 text-sm">
                  We build your website, app or ERP using clean, scalable architecture.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">4</div>
                <h3 className="text-lg font-semibold mb-2">Deployment</h3>
                <p className="text-gray-600 text-sm">
                  We migrate data, configure hosting and train your team.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">5</div>
                <h3 className="text-lg font-semibold mb-2">Support</h3>
                <p className="text-gray-600 text-sm">
                  We monitor performance, updates and security—24/7.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* REGIONAL IMPACT */}
        <section className="py-20 bg-white" aria-labelledby="regional-impact-heading">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 id="regional-impact-heading" className="text-3xl font-heading font-semibold mb-6">
              Serving Organizations Across East Africa
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
              From Sudan to Uganda, Kenya and Rwanda, we support NGOs, startups and growing businesses with digital solutions that improve operations, accountability and service delivery.
            </p>
            {/* Country flags */}
            <div className="flex items-center justify-center gap-8 flex-wrap mt-8">
              <div className="text-gray-700 font-semibold text-lg flex items-center gap-2">
                <span className="text-3xl">🇸🇩</span>
                <span>Sudan</span>
              </div>
              <div className="text-gray-700 font-semibold text-lg flex items-center gap-2">
                <span className="text-3xl">🇺🇬</span>
                <span>Uganda</span>
              </div>
              <div className="text-gray-700 font-semibold text-lg flex items-center gap-2">
                <span className="text-3xl">🇰🇪</span>
                <span>Kenya</span>
              </div>
              <div className="text-gray-700 font-semibold text-lg flex items-center gap-2">
                <span className="text-3xl">🇷🇼</span>
                <span>Rwanda</span>
              </div>
            </div>
          </div>
        </section>

        {/* SEO KEYWORD BLOCK */}
        <section className="py-16 bg-gray-50" aria-labelledby="seo-keyword-heading">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 id="seo-keyword-heading" className="text-3xl font-heading font-semibold mb-6">
              Trusted Website Design & Cyber Security Company in Uganda
            </h2>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Blue Team Africa provides web design, web development, cybersecurity, mobile app development, ERP systems, and SEO services to businesses and NGOs in Kampala, Juba, Khartoum, Nairobi, and across East Africa. Our solutions are built for speed, reliability, and long-term growth.
            </p>
          </div>
        </section>

        {/* TECH STACK */}
        <section className="py-12 bg-gray-50 border-t border-gray-200">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <p className="text-gray-600 mb-6">We build using:</p>
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
              Selected Projects — Measurable Results
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
                  <h3 className="font-semibold">CSLO Sudan — ERP & CRM Digital Transformation</h3>
                  <p className="text-sm text-gray-600 mt-2">
                    Complete ERPNext + Frappe CRM system with mobile field reporting for humanitarian operations.
                    <Link href="/portfolio/cslo-sudan" className="text-primary ml-1 hover:text-primary-dark">
                      Read case study →
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
                  <h3 className="font-semibold">NGO Portal — Website & CRM</h3>
                  <p className="text-sm text-gray-600 mt-2">
                    40% faster donor reporting.
                    <Link href="/portfolio/ngo-portal" className="text-primary ml-1 hover:text-primary-dark">
                      Read case study →
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
                  <h3 className="font-semibold">Retail eCommerce — Rapid Build</h3>
                  <p className="text-sm text-gray-600 mt-2">
                    2× online sales in 90 days.
                    <Link href="/portfolio/ecommerce-shop" className="text-primary ml-1 hover:text-primary-dark">
                      Read case study →
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
                View All Case Studies
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
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              <details className="bg-white p-6 rounded-xl shadow-sm">
                <summary className="font-semibold cursor-pointer text-gray-900">
                  How long does it take to design a website?
                </summary>
                <p className="mt-4 text-gray-600">
                  Most websites take 7–14 days depending on requirements.
                </p>
              </details>

              <details className="bg-white p-6 rounded-xl shadow-sm">
                <summary className="font-semibold cursor-pointer text-gray-900">
                  Do you offer hosting and maintenance?
                </summary>
                <p className="mt-4 text-gray-600">
                  Yes — secure hosting, backups, monitoring, and updates.
                </p>
              </details>

              <details className="bg-white p-6 rounded-xl shadow-sm">
                <summary className="font-semibold cursor-pointer text-gray-900">
                  Can you build systems for NGOs?
                </summary>
                <p className="mt-4 text-gray-600">
                  Yes. We build ERP, CRM, dashboards, and field-data apps.
                </p>
              </details>

              <details className="bg-white p-6 rounded-xl shadow-sm">
                <summary className="font-semibold cursor-pointer text-gray-900">
                  How secure are your websites?
                </summary>
                <p className="mt-4 text-gray-600">
                  All websites include encryption, server hardening, and threat protection.
                </p>
              </details>

              <details className="bg-white p-6 rounded-xl shadow-sm">
                <summary className="font-semibold cursor-pointer text-gray-900">
                  Can you migrate my old website?
                </summary>
                <p className="mt-4 text-gray-600">
                  Yes — we migrate from WordPress, Joomla, Wix, or custom systems.
                </p>
              </details>
            </div>

            <div className="mt-10 text-center">
              <Link href="/contact" className="text-primary underline hover:text-primary-dark font-semibold">
                Have more questions? Contact us →
              </Link>
            </div>
          </div>
        </section>

        {/* BOTTOM CTA */}
        <section className="py-20 bg-[#F8FAFF] text-center" aria-labelledby="cta-heading">
          <div className="max-w-4xl mx-auto px-6">
            <h3 id="cta-heading" className="text-3xl font-heading font-semibold text-gray-900">
              Ready to start your project?
            </h3>
            <p className="mt-3 text-lg text-gray-700">
              Let's design your next digital solution — secure, fast, and built to scale.
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
                Contact Us on WhatsApp
              </a>
              <Link
                href="/contact"
                className="px-8 py-4 border-2 border-primary rounded-lg text-primary hover:bg-primary/5 transition font-semibold"
                aria-label="Get a free quote"
              >
                Get a Free Quote
              </Link>
          </div>
        </div>
      </section>
      </div>
      
      {/* Psylo Links for SEO */}
    </>
  )
}
