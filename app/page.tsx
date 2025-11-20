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
        url: '/images/og-home-hero.webp',
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
    images: ['/images/og-home-hero.webp'],
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

        {/* INTRO - This section can be removed or merged since hero now has expanded content */}

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
                    src="/images/home/e.webp"
                    alt="website design Uganda mobile-first UX"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <h3 className="text-xl font-semibold">Web Design & Development</h3>
                <p className="mt-2 text-gray-600">
                  We design modern, responsive, and user-friendly websites tailored to NGOs, businesses, and startups in East Africa. Every project includes SEO, security, performance optimization, and analytics.
                </p>
                <Link href="/web-design" className="mt-4 inline-block text-primary font-medium hover:text-primary-dark">
                  Learn more →
                </Link>
              </article>

              {/* CARD 2 - Web Hosting & Management */}
              <article className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
                <div className="relative w-full h-44 mb-4 rounded-md overflow-hidden">
                  <Image
                    src="/images/home/services/hosting.webp"
                    alt="web hosting Uganda secure managed hosting"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <h3 className="text-xl font-semibold">Web Hosting & Management</h3>
                <p className="mt-2 text-gray-600">
                  Fast, secure, and reliable hosting on global-grade servers. Includes domain integration, security monitoring, uptime tracking, automatic backups, and 24/7 technical support.
                </p>
                <Link href="/hosting" className="mt-4 inline-block text-primary font-medium hover:text-primary-dark">
                  Learn more →
                </Link>
              </article>

              {/* CARD 3 - Digital Transformation Solutions */}
              <article className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
                <div className="relative w-full h-44 mb-4 rounded-md overflow-hidden">
                  <Image
                    src="/images/home/services/crm-erp.webp"
                    alt="digital transformation ERP CRM systems Uganda"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <h3 className="text-xl font-semibold">Digital Transformation Solutions</h3>
                <p className="mt-2 text-gray-600">
                  We help organizations modernize their operations with enterprise tools — including CRM systems, ERP integrations, automation, and cloud workflows powered by Google AI Studio.
                </p>
                <Link href="/erp" className="mt-4 inline-block text-primary font-medium hover:text-primary-dark">
                  Learn more →
                </Link>
              </article>

              {/* CARD 4 - Branding & Visual Identity */}
              <article className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
                <div className="relative w-full h-44 mb-4 rounded-md overflow-hidden">
                  <Image
                    src="/images/home/services/mobile-apps.webp"
                    alt="branding logo design visual identity Uganda"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <h3 className="text-xl font-semibold">Branding & Visual Identity</h3>
                <p className="mt-2 text-gray-600">
                  Logo design, brand guidelines, digital assets, and messaging frameworks that reflect your mission, values, and audience.
                </p>
                <Link href="/branding" className="mt-4 inline-block text-primary font-medium hover:text-primary-dark">
                  Learn more →
                </Link>
              </article>

              {/* CARD 5 - NGO & Humanitarian Digital Support */}
              <article className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
                <div className="relative w-full h-44 mb-4 rounded-md overflow-hidden">
                  <Image
                    src="/images/portfolio/i.webp"
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
                <Link href="/web-design" className="mt-4 inline-block text-primary font-medium hover:text-primary-dark">
                  Learn more →
                </Link>
              </article>

              {/* CARD 6 - Cybersecurity */}
              <article className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
                <div className="relative w-full h-44 mb-4 rounded-md overflow-hidden">
                  <Image
                    src="/images/home/services/cybersecurity.webp"
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
                <Link href="/cybersecurity" className="mt-4 inline-block text-primary font-medium hover:text-primary-dark">
                  Learn more →
                </Link>
              </article>
            </div>
        </div>
      </section>

        {/* WHY CHOOSE */}
        <section className="py-20 bg-white" aria-labelledby="why-choose-heading">
          <div className="max-w-6xl mx-auto px-6">
            <h2 id="why-choose-heading" className="text-3xl font-heading font-semibold text-center mb-6">
              Why Organizations Choose Blue Team Africa
            </h2>
            <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
              Our approach blends technical excellence with deep understanding of the East African market. We don't just build websites — we build systems that support your operations, improve trust, and unlock new opportunities.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-3">Lightning-Fast Performance</h3>
                <p className="text-gray-600">
                  We build fully optimized websites with clean structure, compressed assets, CDN delivery, and high Lighthouse scores — ensuring your site loads instantly even on slow connections.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">SEO Built Into Every Page</h3>
                <p className="text-gray-600">
                  From metadata to content structure, keyword targeting, schema, and internal linking — your website is engineered to rank on page 1 in Uganda, Kenya, Rwanda, and the broader region.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">High-Security Hosting</h3>
                <p className="text-gray-600">
                  We host your systems on global-grade infrastructure with automatic backups, SSL, firewalls, and AI-powered threat detection.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Affordable & Scalable Packages</h3>
                <p className="text-gray-600">
                  From small organizations to large regional NGOs, our packages adapt to your operations, budget, and long-term growth plans.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Psylo-Driven Creativity</h3>
                <p className="text-gray-600">
                  Your brand deserves something unique. Psylo is our creative philosophy — blending precision, clarity, and elegant simplicity into every design.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Regional Expertise</h3>
                <p className="text-gray-600">
                  Deep understanding of East African UX, mobile money, low-bandwidth systems, and donor reporting requirements.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* REGIONAL SEO SECTION */}
        <section className="py-20 bg-gray-50" aria-labelledby="regional-heading">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 id="regional-heading" className="text-3xl font-heading font-semibold mb-6">
              Serving NGOs & Businesses Across East Africa
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Blue Team Africa supports organizations operating across <strong>Uganda</strong>, <strong>Kenya</strong>, <strong>Rwanda</strong>, and <strong>Sudan</strong>. We understand the unique challenges of the region — from infrastructure to donor reporting — and deliver solutions that work in real field conditions. Whether you need <strong>Uganda web design</strong>, <strong>Kenya SEO services</strong>, <strong>Rwanda hosting</strong>, <strong>Sudan humanitarian tech</strong>, or <strong>East Africa NGOs digital support</strong> — our team has the expertise to deliver results.
            </p>
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
                    src="/images/home/portfolio/regional-logistics.webp"
                    alt="ERP integration Uganda case study"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold">Regional Logistics — ERP Integration</h3>
                  <p className="text-sm text-gray-600 mt-2">
                    70% reduction in inventory discrepancies.
                    <Link href="/portfolio/erp-integration" className="text-primary ml-1 hover:text-primary-dark">
                      Read case study →
                    </Link>
                  </p>
                </div>
              </article>

              <article className="rounded-2xl overflow-hidden shadow bg-white">
                <div className="relative w-full h-48">
                  <Image
                    src="/images/home/portfolio/ngo-portal.jpg"
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
                    src="/images/home/portfolio/retail-ecommerce.webp"
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
                  How long does a website take?
                </summary>
                <p className="mt-4 text-gray-600">
                  Standard websites take 7–21 days depending on features. Quick-build packages are ready in 3–5 days.
                </p>
              </details>

              <details className="bg-gray-50 p-6 rounded-xl">
                <summary className="font-semibold cursor-pointer">
                  Do you build eCommerce websites?
                </summary>
                <p className="mt-4 text-gray-600">
                  Yes — including mobile money, card payments and regional gateways.
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

              <details className="bg-gray-50 p-6 rounded-xl">
                <summary className="font-semibold cursor-pointer">
                  Can you integrate ERP or CRM systems?
                </summary>
                <p className="mt-4 text-gray-600">
                  Absolutely. We integrate finance, inventory and sales systems for NGOs and enterprises.
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
                href="/web-design"
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
