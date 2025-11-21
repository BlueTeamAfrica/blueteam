import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import OrganizationSchema from '@/components/OrganizationSchema'
import HomepageFAQSchema from '@/components/HomepageFAQSchema'
import HeroClient from '@/components/HeroClient'

export const metadata: Metadata = {
  title: 'Website Design & Cyber Security Solutions | Blue Team Africa',
  description: 'Professional website design, website development, and cyber security solutions for businesses in Uganda, Kenya & Rwanda. Enterprise-grade web design and security services.',
  openGraph: {
    title: 'Website Design & Cyber Security Solutions | Blue Team Africa',
    description: 'Professional website design, website development, and cyber security solutions for businesses in Uganda, Kenya & Rwanda.',
    url: 'https://blueteamafrica.com',
    siteName: 'Blue Team Africa',
    images: [
      {
        url: '/images/hero/hero-banner-og-image-v01.webp',
        width: 1200,
        height: 630,
        alt: 'Blue Team Africa hero — enterprise web design and cyber security',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Website Design & Cyber Security Solutions | Blue Team Africa',
    description: 'Professional website design, website development, and cyber security solutions for businesses in Uganda, Kenya & Rwanda.',
    images: ['/images/hero/hero-banner-og-image-v01.webp'],
  },
  keywords: [
    'website design',
    'web design',
    'website development',
    'website build',
    'cyber security',
    'cybersecurity',
    'website design Uganda',
    'website development Kenya',
    'cyber security Rwanda',
    'web design East Africa',
  ],
}

export default function Home() {
  return (
    <>
      {/* JSON-LD Schemas */}
      <OrganizationSchema />
      <HomepageFAQSchema />

      <div className="w-full overflow-hidden">
        {/* HERO */}
        <HeroClient />

        {/* FEATURED CASE STUDY - CSLO Sudan */}
        <section className="py-20 bg-white" aria-labelledby="case-study-heading">
          <div className="max-w-6xl mx-auto px-6">
            <h2 id="case-study-heading" className="text-3xl font-heading font-semibold text-center mb-8">
              Digital Transformation for CSLO Sudan
            </h2>
            <div className="bg-gray-50 rounded-2xl p-8 md:p-10">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Blue Team implemented a complete ERPNext + Frappe CRM system for CSLO Sudan, enabling real-time project tracking, automated reporting, secure data storage, and a custom mobile app for field officers working in crisis-affected areas.
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
        <section id="services" className="py-20 bg-gray-50" aria-labelledby="services-heading">
        <div className="max-w-6xl mx-auto px-6">
            <h2 id="services-heading" className="text-3xl font-heading font-semibold text-center mb-12">
              What We Do
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* CARD 1 - Web Design & Development */}
              <article className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
                <div className="relative w-full h-44 mb-4 rounded-md overflow-hidden">
                  <Image
                    src="/images/home/services/web-design-icon-layout-v01.webp"
                    alt="website design Uganda mobile-first UX"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <h3 className="text-xl font-semibold">Web Design & Development</h3>
                <p className="mt-2 text-gray-600">
                  Modern, fast-loading websites optimized for visibility in East African markets and designed to convert visitors into partners, donors and clients.
                </p>
                <Link href="/services/web-design" className="mt-4 inline-block text-primary font-medium hover:text-primary-dark">
                  Learn more →
                </Link>
              </article>

              {/* CARD 2 - Web Hosting & Management */}
              <article className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
                <div className="relative w-full h-44 mb-4 rounded-md overflow-hidden">
                  <Image
                    src="/images/home/services/erp-systems-icon-dashboard-v01.webp"
                    alt="web hosting Uganda secure managed hosting"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <h3 className="text-xl font-semibold">ERP & CRM Systems (ERPNext/Frappe)</h3>
                <p className="mt-2 text-gray-600">
                  Powerful, customizable systems for donor reporting, project tracking, HR, finance and inventory—tailored for NGOs and businesses.
                </p>
                <Link href="/services/erp" className="mt-4 inline-block text-primary font-medium hover:text-primary-dark">
                  Learn more →
                </Link>
              </article>

              {/* CARD 3 - Mobile App Development */}
              <article className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
                <div className="relative w-full h-44 mb-4 rounded-md overflow-hidden">
                  <Image
                    src="/images/home/services/mobile-apps-icon-phone-v01.webp"
                    alt="mobile app development for field teams"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <h3 className="text-xl font-semibold">Mobile App Development</h3>
                <p className="mt-2 text-gray-600">
                  Offline-first mobile apps for field teams, assessments, surveys and project monitoring. Syncs directly to your ERP or CRM.
                </p>
                <Link href="/services/mobile-apps" className="mt-4 inline-block text-primary font-medium hover:text-primary-dark">
                  Learn more →
                </Link>
              </article>

              {/* CARD 4 - Hosting & Cloud Infrastructure */}
              <article className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
                <div className="relative w-full h-44 mb-4 rounded-md overflow-hidden">
                  <Image
                    src="/images/home/services/cloud-hosting-icon-server-v01.webp"
                    alt="secure cloud hosting infrastructure"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <h3 className="text-xl font-semibold">Hosting & Cloud Infrastructure</h3>
                <p className="mt-2 text-gray-600">
                  Secure cloud hosting built for speed, reliability and data protection.
                </p>
                <Link href="/services/hosting" className="mt-4 inline-block text-primary font-medium hover:text-primary-dark">
                  Learn more →
                </Link>
              </article>

              {/* CARD 5 - NGO & Humanitarian Digital Support */}
              <article className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
                <div className="relative w-full h-44 mb-4 rounded-md overflow-hidden">
                  <Image
                    src="/images/portfolio/cslo-sudan/portfolio-project-cslo-erp-system-v01.webp"
                    alt="NGO humanitarian digital support portals Uganda"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <h3 className="text-xl font-semibold">NGO & Humanitarian Digital Support</h3>
                <p className="mt-2 text-gray-600">
                  Specialized digital services for NGOs, community organizations, and humanitarian entities — including portals, reporting tools, M&E dashboards, and donor-focused digital assets.
                </p>
                <Link href="/services/erp" className="mt-4 inline-block text-primary font-medium hover:text-primary-dark">
                  Learn more →
                </Link>
              </article>

              {/* CARD 6 - Cybersecurity */}
              <article className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
                <div className="relative w-full h-44 mb-4 rounded-md overflow-hidden">
                  <Image
                    src="/images/home/services/cybersecurity-icon-shield-v01.webp"
                    alt="cyber security Uganda penetration testing"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <h3 className="text-xl font-semibold">Cybersecurity</h3>
                <p className="mt-2 text-gray-600">
                  Security audits, penetration testing, infrastructure hardening & incident response for SMEs and NGOs.
                </p>
                <Link href="/services/cybersecurity" className="mt-4 inline-block text-primary font-medium hover:text-primary-dark">
                  Learn more →
                </Link>
              </article>
            </div>
        </div>
      </section>

        {/* WHY NGOs TRUST US */}
        <section className="py-20 bg-white" aria-labelledby="why-trust-heading">
          <div className="max-w-6xl mx-auto px-6">
            <h2 id="why-trust-heading" className="text-3xl font-heading font-semibold text-center mb-6">
              Trusted Technology Partner for NGOs in Sudan, Uganda, Kenya & Rwanda
            </h2>
            <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
              We specialize in digital tools for humanitarian organizations—including ERP systems, CRM platforms, monitoring tools, website portals and mobile data-collection apps. Our solutions are built to work in difficult environments, with limited connectivity and high security needs.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-3">Proven experience with East African NGOs</h3>
                <p className="text-gray-600">
                  We've successfully implemented digital solutions for humanitarian organizations across the region.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">ERPNext & Frappe specialists</h3>
                <p className="text-gray-600">
                  Deep expertise in open-source ERP and CRM platforms tailored for NGOs and humanitarian operations.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Mobile apps for field reporting</h3>
                <p className="text-gray-600">
                  Offline-first mobile applications that sync seamlessly with your backend systems.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Secure, audited cloud hosting</h3>
                <p className="text-gray-600">
                  Enterprise-grade infrastructure with encryption, backups, and compliance standards.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Fast delivery powered by AI pipelines</h3>
                <p className="text-gray-600">
                  Streamlined development processes that accelerate time-to-market without compromising quality.
                </p>
              </div>
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
            {/* Country logos/icons can be added here */}
            <div className="flex items-center justify-center gap-8 flex-wrap mt-8">
              <div className="text-gray-600 font-semibold">Sudan</div>
              <div className="text-gray-600 font-semibold">Uganda</div>
              <div className="text-gray-600 font-semibold">Kenya</div>
              <div className="text-gray-600 font-semibold">Rwanda</div>
            </div>
          </div>
        </section>

        {/* TECH STACK */}
        <section className="py-12 bg-gray-50 border-t border-gray-200">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <p className="text-gray-600 mb-4">We build using:</p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-gray-700 font-medium">
              <span>ERPNext</span>
              <span>•</span>
              <span>Frappe</span>
              <span>•</span>
              <span>React</span>
              <span>•</span>
              <span>Next.js</span>
              <span>•</span>
              <span>Flutter</span>
              <span>•</span>
              <span>Firebase</span>
              <span>•</span>
              <span>Vercel</span>
              <span>•</span>
              <span>Tailwind</span>
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
                    src="/images/portfolio/cslo-sudan/portfolio-project-cslo-erp-system-v01.webp"
                    alt="CSLO Sudan ERPNext and CRM implementation case study"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
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
                    src="/images/home/portfolio/portfolio-mockup-ngo-portal-v01.jpg"
                    alt="NGO portal Uganda"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
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
                    src="/images/home/portfolio/portfolio-mockup-retail-ecommerce-v01.webp"
                    alt="Ecommerce Uganda case study"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
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

        {/* FAQ PREVIEW */}
        <section className="py-20 bg-gray-50" aria-labelledby="faq-heading">
          <div className="max-w-5xl mx-auto px-6">
            <h2 id="faq-heading" className="text-3xl font-heading font-semibold text-center mb-12">
              FAQ
            </h2>

            <div className="space-y-6">
              <details className="bg-gray-50 p-6 rounded-xl">
                <summary className="font-semibold cursor-pointer">
                  Do you build ERP systems for NGOs in Sudan?
                </summary>
                <p className="mt-4 text-gray-600">
                  Yes. We specialize in ERPNext and CRM solutions tailored for NGOs working in crisis-affected and low-connectivity regions.
                </p>
              </details>

              <details className="bg-gray-50 p-6 rounded-xl">
                <summary className="font-semibold cursor-pointer">
                  Can you connect mobile apps directly to our ERP?
                </summary>
                <p className="mt-4 text-gray-600">
                  Absolutely. We build secure mobile apps that sync directly with ERPNext and Frappe databases.
                </p>
              </details>

              <details className="bg-gray-50 p-6 rounded-xl">
                <summary className="font-semibold cursor-pointer">
                  How fast can you deliver a new website?
                </summary>
                <p className="mt-4 text-gray-600">
                  Most NGO or business websites go live within 7–14 days.
                </p>
              </details>

              <details className="bg-gray-50 p-6 rounded-xl">
                <summary className="font-semibold cursor-pointer">
                  Do you offer hosting & maintenance?
                </summary>
                <p className="mt-4 text-gray-600">
                  Yes — managed hosting with backups, SSL, CDN and uptime monitoring.
                </p>
              </details>
            </div>

            <div className="mt-10 text-center">
              <Link href="/faq" className="text-primary underline hover:text-primary-dark">
                View Full FAQ →
              </Link>
            </div>
          </div>
        </section>

        {/* BOTTOM CTA */}
        <section className="py-20 bg-[#F8FAFF] text-center" aria-labelledby="cta-heading">
          <div className="max-w-4xl mx-auto px-6">
            <h3 id="cta-heading" className="text-3xl font-heading font-semibold">
              Book a Free Consultation
            </h3>
            <p className="mt-3 text-gray-600">
              Let's discuss your project and build a solution tailored to your mission.
            </p>
            <div className="mt-8 flex items-center justify-center gap-4 flex-wrap">
              <Link
                href="/contact"
                className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition"
                aria-label="Book a free consultation"
              >
                Book a Free Consultation
              </Link>
              <Link
                href="/services/web-design"
                className="px-6 py-3 border border-gray-300 rounded-lg text-gray-800 hover:bg-gray-50 transition"
                aria-label="Explore our services"
              >
                Explore Our Services
              </Link>
          </div>
        </div>
      </section>
      </div>
    </>
  )
}
