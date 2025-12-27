import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import ServiceCard from './ServiceCard'

export const metadata: Metadata = {
  title: 'Services — Blue Team Africa',
  description:
    'Web design, hosting, ERP/CRM, mobile apps and NGO solutions—SEO-first, performance-focused digital services for East Africa.',
}

export const services = [
  {
    id: 'web-design',
    title: 'Web Design & Development',
    excerpt:
      'Modern, fast, SEO-ready websites for NGOs and businesses in East Africa. Built with Next.js for performance and conversions.',
    href: '/services/web-design',
    icon: '/icons/web-design.svg',
  },
  {
    id: 'mobile-apps',
    title: 'Mobile App Development',
    excerpt:
      'Cross-platform mobile apps focused on usability and offline-first features for field teams and communities.',
    href: '/services/mobile-apps',
    icon: '/icons/mobile-app.svg',
  },
  {
    id: 'hosting',
    title: 'Hosting & Maintenance',
    excerpt:
      'Managed hosting, monitoring, automated backups and security updates — worry-free operations for your team.',
    href: '/services/hosting',
    icon: '/icons/hosting.svg',
  },
  {
    id: 'erp-crm',
    title: 'ERP & CRM',
    excerpt:
      'ERPNext / Odoo implementations and CRM integrations tailored to NGOs and small enterprises in East Africa.',
    href: '/services/erp-crm',
    icon: '/icons/erp.svg',
  },
  {
    id: 'm-and-e',
    title: 'M&E & Reporting',
    excerpt:
      'Monitoring & evaluation systems, dashboards, and automated reporting to make decisions faster and clearer.',
    href: '/services/monitoring-evaluation',
    icon: '/icons/analytics.svg',
  },
  {
    id: 'proposal-writing',
    title: 'Proposal Writing',
    excerpt:
      'Grant and project proposal support — technical writing aligned with donor requirements across the region.',
    href: '/services/proposal-writing',
    icon: '/icons/proposal.svg',
  },
]

const caseStudies = [
  {
    title: 'CSLO Sudan — ERPNext Implementation',
    excerpt: 'Custom ERP for field finance and logistics. Reduced monthly reporting time from 12 days to 2 days.',
    href: '/portfolio/cslo-sudan',
  },
  {
    title: 'NGO Management Portal',
    excerpt: 'Comprehensive platform for managing programs, beneficiaries, and donor relations.',
    href: '/portfolio/ngo-portal',
  },
  {
    title: 'E-commerce Platform',
    excerpt: 'Full-featured online store with mobile money integration and inventory management.',
    href: '/portfolio/ecommerce-shop',
  },
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* JSON-LD: Organization + FAQ for SEO (server-rendered in head would be better; included here to ensure presence) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'Organization',
                '@id': 'https://www.blueteamafrica.com/#organization',
                name: 'Blue Team Africa',
                url: 'https://www.blueteamafrica.com',
                logo: 'https://www.blueteamafrica.com/logo.png',
                sameAs: ['https://www.linkedin.com/company/blue-team-africa'],
                contactPoint: [
                  {
                    '@type': 'ContactPoint',
                    telephone: '+256765508131',
                    contactType: 'sales',
                    areaServed: ['UG', 'KE', 'RW', 'SD'],
                  },
                ],
              },
              {
                '@type': 'FAQPage',
                mainEntity: [
                  {
                    '@type': 'Question',
                    name: 'How long does a web design project take?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Typical projects take 3–8 weeks depending on scope. We provide a clear timeline at proposal stage.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'Do you offer hosting and maintenance?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Yes — managed hosting, backups, security updates and SLA options are available.',
                    },
                  },
                ],
              },
            ],
          }),
        }}
      />

      {/* HERO */}
      <section className="bg-gradient-to-b from-sky-50 to-white">
        <div className="max-w-6xl mx-auto px-6 py-12 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
                Digital solutions for NGOs, startups & enterprises in East Africa
              </h1>
              <p className="mt-4 text-lg sm:text-xl text-slate-600">
                Fast, SEO-first websites, mobile apps, hosting and business systems built for
                results — tailored to the needs of organizations across the region.
              </p>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-5 py-3 rounded-2xl bg-blue-600 text-white font-medium shadow hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  Get a Free Quote
                </a>

                <a
                  href="https://wa.me/256765508131"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-5 py-3 rounded-2xl border border-slate-200 text-slate-700 bg-white shadow-sm hover:bg-slate-50"
                >
                  Chat on WhatsApp
                </a>
              </div>

              <div className="mt-6 flex gap-4 text-sm text-slate-500">
                <div>⭐ Trusted by NGOs & startups across East Africa</div>
                <div className="hidden sm:block">•</div>
                <div className="hidden sm:block">Fast turnarounds & local expertise</div>
              </div>
            </div>

            <div className="order-first lg:order-last">
              <div className="relative w-full h-56 sm:h-64 lg:h-72 rounded-2xl overflow-hidden shadow">
                {/* Decorative hero image: use an optimized image in production */}
                <Image
                  src="/images/hero/hero-gradient-01.webp"
                  alt="Blue Team Africa services overview"
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="max-w-6xl mx-auto px-6 py-10 lg:py-16">
        <header className="mb-8">
          <h2 className="text-2xl font-bold">Service categories</h2>
          <p className="mt-2 text-slate-600">Grouped by outcome so you can find the right service fast.</p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <CategoryCard
            title="Web & Mobile"
            items={[
              { label: 'Web Design & Development', href: '/services/web-design' },
              { label: 'Mobile Apps', href: '/services/mobile-apps' },
              { label: 'Hosting & Maintenance', href: '/services/hosting' },
            ]}
          />

          <CategoryCard
            title="Business Systems"
            items={[
              { label: 'ERP & CRM', href: '/services/erp-crm' },
              { label: 'HRM & Payroll', href: '/services/hrm' },
              { label: 'Inventory & POS', href: '/services/inventory-pos' },
            ]}
          />

          <CategoryCard
            title="NGO & Data"
            items={[
              { label: 'M&E & Reporting', href: '/services/monitoring-evaluation' },
              { label: 'Proposal Writing', href: '/services/proposal-writing' },
              { label: 'Custom Integrations', href: '/services/integrations' },
            ]}
          />
        </div>
      </section>

      {/* SERVICE CARDS */}
      <div className="hidden sm:block">
        <section className="bg-slate-50">
          <div className="max-w-6xl mx-auto px-6 py-12 lg:py-16">
            <header className="mb-8">
              <h2 className="text-2xl font-bold">Our Services</h2>
              <p className="mt-2 text-slate-600">Detailed offerings with focused outcomes and pathway to engagement.</p>
            </header>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((s) => (
                <ServiceCard key={s.id} service={s} />
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* WHY CHOOSE US STRIP */}
      <section className="max-w-6xl mx-auto px-6 py-10 lg:py-14">
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 items-center">
          <div className="sm:col-span-2">
            <h3 className="text-xl font-bold">Why choose Blue Team Africa?</h3>
            <p className="mt-2 text-slate-600">Local teams, fast delivery, and systems built for NGOs and enterprises. We work with organizations across East Africa, providing <Link href="/web-design-rwanda" className="text-blue-600 hover:text-blue-700 hover:underline">professional web design services in Rwanda</Link> and <Link href="/web-development-rwanda" className="text-blue-600 hover:text-blue-700 hover:underline">comprehensive web development solutions for businesses in Rwanda</Link>.</p>
          </div>

          <FeatureItem title="Fast Delivery" desc="Lean teams and rapid iterations." />
          <FeatureItem title="SEO-first" desc="Performance and content strategies that rank." />
          <FeatureItem title="NGO-ready" desc="Experience with donor reporting and compliance." />
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="bg-slate-50">
        <div className="max-w-6xl mx-auto px-6 py-12 lg:py-16">
          <header className="mb-6">
            <h2 className="text-2xl font-bold">Case studies</h2>
            <p className="mt-2 text-slate-600">Real projects with measurable impact.</p>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {caseStudies.map((c) => (
              <a
                key={c.title}
                href={c.href}
                className="block rounded-2xl bg-white p-6 shadow-sm border border-slate-100 hover:shadow-md transition-transform transform-gpu hover:-translate-y-2"
              >
                <h4 className="font-semibold">{c.title}</h4>
                <p className="mt-2 text-sm text-slate-600">{c.excerpt}</p>
                <div className="mt-4 text-sm text-blue-600">Read case study →</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-6xl mx-auto px-6 py-12 lg:py-16">
        <header className="mb-6">
          <h2 className="text-2xl font-bold">Frequently asked questions</h2>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <FaqItem
            question="How long does a web design project take?"
            answer="Projects typically take 3–8 weeks depending on scope. We'll provide a detailed timeline in the proposal."
          />

          <FaqItem
            question="Do you offer hosting and maintenance?"
            answer="Yes. We provide managed hosting, backups, security updates and optional SLAs for mission-critical services."
          />

          <FaqItem
            question="Can you integrate ERP/CRM with mobile apps?"
            answer="Yes. We design APIs and mobile data flows so mobile apps sync with your ERP/CRM securely and efficiently."
          />

          <FaqItem
            question="Do you work across East Africa?"
            answer="Yes. We work with clients in Uganda, Kenya, Rwanda, Sudan and more — remote or on-the-ground."
          />
        </div>
      </section>

      {/* MOBILE-ONLY Our Services */}
      <div className="block sm:hidden">
        <section className="bg-slate-50">
          <div className="max-w-6xl mx-auto px-6 py-12 lg:py-16">
            <header className="mb-8">
              <h2 className="text-2xl font-bold">Our Services</h2>
              <p className="mt-2 text-slate-600">Detailed offerings with focused outcomes and pathway to engagement.</p>
            </header>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((s) => (
                <ServiceCard key={s.id} service={s} />
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* MOBILE STICKY CTA */}
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 sm:hidden z-50">
        <div className="flex gap-3 items-center bg-white rounded-full p-2 shadow-lg border border-slate-200">
          <a
            href="https://wa.me/256765508131"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500 text-white font-semibold hover:bg-green-600"
            aria-label="Chat on WhatsApp"
          >
            WhatsApp
          </a>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700"
            aria-label="Get a free quote"
          >
            Get Quote
          </a>
        </div>
      </div>

      <footer className="mt-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 py-10 text-slate-500 text-sm">© {new Date().getFullYear()} Blue Team Africa</div>
      </footer>
    </main>
  )
}

function CategoryCard({ title, items }: { title: string; items: { label: string; href: string }[] }) {
  return (
    <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
      <h4 className="font-semibold mb-3">{title}</h4>
      <ul className="space-y-2">
        {items.map((it) => (
          <li key={it.label}>
            <a href={it.href} className="text-slate-700 hover:text-blue-600">
              {it.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

function FeatureItem({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="flex items-start gap-4 p-4 rounded-xl border border-slate-100 bg-white">
      <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center">🚀</div>
      <div>
        <div className="font-semibold">{title}</div>
        <p className="text-sm text-slate-600">{desc}</p>
      </div>
    </div>
  )
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  return (
    <details className="group bg-white rounded-2xl p-4 border border-slate-100 shadow-sm" aria-expanded="false">
      <summary className="font-medium cursor-pointer list-none">{question}</summary>
      <div className="mt-2 text-sm text-slate-600">{answer}</div>
    </details>
  )
}
