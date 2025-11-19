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

        {/* INTRO */}
        <section className="py-20 bg-white" aria-labelledby="intro-heading">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h2 id="intro-heading" className="text-3xl font-heading font-semibold">
              Digital Systems Built for East African Organisations
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Blue Team Africa builds fast, secure websites and fully integrated digital systems for NGOs, startups and enterprises.
              Our solutions reduce operational friction, speed up reporting, strengthen security and increase online revenue.
              Explore how our work in website design, website development, ERP systems and cyber security is transforming digital operations across the region.
            </p>
            <div className="mt-6 flex items-center justify-center gap-4 flex-wrap">
              <Link href="/web-design" className="text-primary underline hover:text-primary-dark">
                Website Design
              </Link>
              <Link href="/cybersecurity" className="text-primary underline hover:text-primary-dark">
                Cyber Security
              </Link>
              <Link href="/portfolio" className="text-primary underline hover:text-primary-dark">
                Portfolio
              </Link>
            </div>
          </div>
        </section>

        {/* SERVICES GRID */}
        <section id="services" className="py-20 bg-gray-50" aria-labelledby="services-heading">
        <div className="max-w-6xl mx-auto px-6">
            <h2 id="services-heading" className="text-3xl font-heading font-semibold text-center mb-12">
              Our Services — Website Design, Development & Security
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* CARD 1 */}
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
                <h3 className="text-xl font-semibold">Website Design & Development</h3>
                <p className="mt-2 text-gray-600">
                  Mobile-first, SEO-ready websites built for NGOs & SMEs in Uganda, Kenya and Rwanda.
                </p>
                <Link href="/web-design" className="mt-4 inline-block text-primary font-medium hover:text-primary-dark">
                  Learn more →
                </Link>
              </article>

              {/* CARD 2 */}
              <article className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
                <div className="relative w-full h-44 mb-4 rounded-md overflow-hidden">
                  <Image
                    src="/images/portfolio/i.webp"
                    alt="website build fast launch package Uganda"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <h3 className="text-xl font-semibold">Quick Website Build</h3>
                <p className="mt-2 text-gray-600">
                  Launch a fast, secure website in days using our rapid build framework.
                </p>
                <Link href="/web-design" className="mt-4 inline-block text-primary font-medium hover:text-primary-dark">
                  Learn more →
                </Link>
              </article>

              {/* CARD 3 */}
              <article className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
                <div className="relative w-full h-44 mb-4 rounded-md overflow-hidden">
                  <Image
                    src="/images/home/services/hosting.webp"
                    alt="managed hosting Uganda secure"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <h3 className="text-xl font-semibold">Managed Hosting</h3>
                <p className="mt-2 text-gray-600">
                  Secure hosting with backups, SSL, CDN and 99.9% uptime monitoring.
                </p>
                <Link href="/hosting" className="mt-4 inline-block text-primary font-medium hover:text-primary-dark">
                  Learn more →
                </Link>
              </article>

              {/* CARD 4 */}
              <article className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
                <div className="relative w-full h-44 mb-4 rounded-md overflow-hidden">
                  <Image
                    src="/images/home/services/crm-erp.webp"
                    alt="ERP CRM systems Uganda"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <h3 className="text-xl font-semibold">CRM & ERP Systems</h3>
                <p className="mt-2 text-gray-600">
                  Connect finance, sales and operations into one integrated system.
                </p>
                <Link href="/erp" className="mt-4 inline-block text-primary font-medium hover:text-primary-dark">
                  Learn more →
                </Link>
              </article>

              {/* CARD 5 */}
              <article className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
                <div className="relative w-full h-44 mb-4 rounded-md overflow-hidden">
                  <Image
                    src="/images/home/services/mobile-apps.webp"
                    alt="mobile app development Uganda"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <h3 className="text-xl font-semibold">Mobile App Development</h3>
                <p className="mt-2 text-gray-600">
                  Field apps and customer apps built for low-bandwidth environments.
                </p>
                <Link href="/mobile-apps" className="mt-4 inline-block text-primary font-medium hover:text-primary-dark">
                  Learn more →
                </Link>
              </article>

              {/* CARD 6 */}
              <article className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
                <div className="relative w-full h-44 mb-4 rounded-md overflow-hidden">
                  <Image
                    src="/images/home/services/cybersecurity.webp"
                    alt="cyber security Uganda"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <h3 className="text-xl font-semibold">Cyber Security</h3>
                <p className="mt-2 text-gray-600">
                  Pen testing, incident response and complete security hardening.
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
            <h2 id="why-choose-heading" className="text-3xl font-heading font-semibold text-center mb-12">
              Why Organisations Choose Blue Team Africa
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
              <div>
                <h3 className="text-xl font-semibold">Outcome-first Approach</h3>
                <p className="mt-2 text-gray-600">
                  We focus on measurable results — reduced errors, faster reporting and increased conversions.
                </p>
                <Link href="/portfolio" className="text-primary underline mt-3 inline-block hover:text-primary-dark">
                  See Projects
                </Link>
              </div>

              <div>
                <h3 className="text-xl font-semibold">Regional Expertise</h3>
                <p className="mt-2 text-gray-600">
                  Deep understanding of East African UX, mobile money and low-bandwidth systems.
                </p>
                <Link href="/mobile-apps" className="text-primary underline mt-3 inline-block hover:text-primary-dark">
                  Learn More
                </Link>
              </div>

              <div>
                <h3 className="text-xl font-semibold">Security & Reliability</h3>
                <p className="mt-2 text-gray-600">
                  Built-in hosting, backups, monitoring and penetration testing.
                </p>
                <Link href="/cybersecurity" className="text-primary underline mt-3 inline-block hover:text-primary-dark">
                  Cyber Security
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* PORTFOLIO PREVIEW */}
        <section id="portfolio" className="py-20 bg-gray-50" aria-labelledby="portfolio-heading">
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
        <section className="py-20 bg-white" aria-labelledby="faq-heading">
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
              Ready to remove operational friction?
            </h3>
            <p className="mt-3 text-gray-600">
              Book a free systems audit and get a prioritized digital roadmap.
            </p>
            <div className="mt-8 flex items-center justify-center gap-4 flex-wrap">
              <Link
                href="/contact"
                className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition"
                aria-label="Book a free systems audit"
              >
                Book Audit
              </Link>
              <a
                href="https://wa.me/256765508131"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-gray-300 rounded-lg text-gray-800 hover:bg-gray-50 transition"
                aria-label="Contact us on WhatsApp"
              >
                WhatsApp Us
              </a>
          </div>
        </div>
      </section>
      </div>
    </>
  )
}
