import Image from 'next/image'
import { Link } from '@/i18n/navigation'
import type { Metadata } from 'next'
import ServiceCard from './ServiceCard'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import { getTranslations } from 'next-intl/server'
import { buildAlternates } from '@/lib/metadata-helpers'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  return {
    title: 'Services',
    description: 'Web design, hosting, ERP/CRM, mobile apps and NGO solutions—SEO-first, performance-focused digital services for East Africa.',
    alternates: buildAlternates('/services', locale),
  }
}

// Kept exported for ServiceDetail.tsx — English only, not rendered directly
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
    id: 'erp',
    title: 'ERP Systems',
    excerpt:
      'ERPNext implementations for finance, procurement, HR, and program management in NGOs and enterprises.',
    href: '/services/erp',
    icon: '/icons/erp.svg',
  },
  {
    id: 'crm',
    title: 'CRM Solutions',
    excerpt:
      'Customer relationship management systems to track leads, manage pipelines, and support your sales team.',
    href: '/services/crm',
    icon: '/icons/erp.svg',
  },
  {
    id: 'ecommerce',
    title: 'E-commerce Solutions',
    excerpt:
      'Mobile-first online stores with mobile money integration, inventory sync, and payment gateway support.',
    href: '/services/ecommerce',
    icon: '/icons/web-design.svg',
  },
]

const caseStudyHrefs = [
  '/portfolio/cslo-sudan',
  '/portfolio/ngo-portal',
  '/portfolio/ecommerce-shop',
]

export default async function ServicesPage() {
  const t = await getTranslations('ServicesPage')

  const breadcrumbItems = [
    { name: 'Home', url: 'https://www.blueteamafrica.com/' },
    { name: 'Services', url: 'https://www.blueteamafrica.com/services' },
  ]

  const translatedServices = [
    { ...services[0], title: t('cardWebDesignTitle'), excerpt: t('cardWebDesignExcerpt') },
    { ...services[1], title: t('cardMobileAppsTitle'), excerpt: t('cardMobileAppsExcerpt') },
    { ...services[2], title: t('cardHostingTitle'), excerpt: t('cardHostingExcerpt') },
    { ...services[3], title: t('cardErpTitle'), excerpt: t('cardErpExcerpt') },
    { ...services[4], title: t('cardCrmTitle'), excerpt: t('cardCrmExcerpt') },
    { ...services[5], title: t('cardEcommerceTitle'), excerpt: t('cardEcommerceExcerpt') },
  ]

  const caseStudies = [
    { title: t('case1Title'), excerpt: t('case1Excerpt'), href: caseStudyHrefs[0] },
    { title: t('case2Title'), excerpt: t('case2Excerpt'), href: caseStudyHrefs[1] },
    { title: t('case3Title'), excerpt: t('case3Excerpt'), href: caseStudyHrefs[2] },
  ]

  return (
    <>
    <BreadcrumbSchema items={breadcrumbItems} />
    <main className="min-h-screen bg-white text-slate-900">
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
                    telephone: '+254119402737',
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
                {t('heroTitle')}
              </h1>
              <p className="mt-4 text-lg sm:text-xl text-slate-600">
                {t('heroSubtitle')}
              </p>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-5 py-3 rounded-2xl bg-blue-600 text-white font-medium shadow hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  {t('ctaQuote')}
                </a>

                <a
                  href="https://wa.me/254119402737"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-5 py-3 rounded-2xl border border-slate-200 text-slate-700 bg-white shadow-sm hover:bg-slate-50"
                >
                  {t('ctaWhatsApp')}
                </a>
              </div>

              <div className="mt-6 flex gap-4 text-sm text-slate-500">
                <div>{t('trustBadge1')}</div>
                <div className="hidden sm:block">•</div>
                <div className="hidden sm:block">{t('trustBadge2')}</div>
              </div>
            </div>

            <div className="order-first lg:order-last">
              <div className="relative w-full h-56 sm:h-64 lg:h-72 rounded-2xl overflow-hidden shadow">
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
          <h2 className="text-2xl font-bold">{t('categoriesTitle')}</h2>
          <p className="mt-2 text-slate-600">{t('categoriesSubtitle')}</p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <CategoryCard
            title={t('catWebMobile')}
            items={[
              { label: t('catItemWebDesign'), href: '/services/web-design' },
              { label: t('catItemMobileApps'), href: '/services/mobile-apps' },
              { label: t('catItemHosting'), href: '/services/hosting' },
            ]}
          />

          <CategoryCard
            title={t('catBusinessSystems')}
            items={[
              { label: t('catItemErp'), href: '/services/erp' },
              { label: t('catItemCrm'), href: '/services/crm' },
              { label: t('catItemCustomSystems'), href: '/services/custom-systems' },
            ]}
          />

          <CategoryCard
            title={t('catDigitalSecurity')}
            items={[
              { label: t('catItemEcommerce'), href: '/services/ecommerce' },
              { label: t('catItemCybersecurity'), href: '/services/cybersecurity' },
              { label: t('catItemUiux'), href: '/services/ui-ux' },
            ]}
          />
        </div>
      </section>

      {/* SERVICE CARDS — desktop */}
      <div className="hidden sm:block">
        <section className="bg-slate-50">
          <div className="max-w-6xl mx-auto px-6 py-12 lg:py-16">
            <header className="mb-8">
              <h2 className="text-2xl font-bold">{t('servicesTitle')}</h2>
              <p className="mt-2 text-slate-600">{t('servicesSubtitle')}</p>
            </header>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {translatedServices.map((s) => (
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
            <h3 className="text-xl font-bold">{t('whyTitle')}</h3>
            <p className="mt-2 text-slate-600">
              {t.rich('whyBody', {
                rwandaDesign: (chunks) => (
                  <Link href="/web-design-rwanda" className="text-blue-600 hover:text-blue-700 hover:underline">{chunks}</Link>
                ),
                rwandaDev: (chunks) => (
                  <Link href="/web-development-rwanda" className="text-blue-600 hover:text-blue-700 hover:underline">{chunks}</Link>
                ),
              })}
            </p>
          </div>

          <FeatureItem title={t('featureDeliveryTitle')} desc={t('featureDeliveryDesc')} />
          <FeatureItem title={t('featureSeoTitle')} desc={t('featureSeoDesc')} />
          <FeatureItem title={t('featureNgoTitle')} desc={t('featureNgoDesc')} />
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="bg-slate-50">
        <div className="max-w-6xl mx-auto px-6 py-12 lg:py-16">
          <header className="mb-6">
            <h2 className="text-2xl font-bold">{t('caseTitle')}</h2>
            <p className="mt-2 text-slate-600">{t('caseSubtitle')}</p>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {caseStudies.map((c) => (
              <a
                key={c.href}
                href={c.href}
                className="block rounded-2xl bg-white p-6 shadow-sm border border-slate-100 hover:shadow-md transition-transform transform-gpu hover:-translate-y-2"
              >
                <h4 className="font-semibold">{c.title}</h4>
                <p className="mt-2 text-sm text-slate-600">{c.excerpt}</p>
                <div className="mt-4 text-sm text-blue-600">{t('readCaseStudy')}</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-6xl mx-auto px-6 py-12 lg:py-16">
        <header className="mb-6">
          <h2 className="text-2xl font-bold">{t('faqTitle')}</h2>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <FaqItem question={t('faq1Q')} answer={t('faq1A')} />
          <FaqItem question={t('faq2Q')} answer={t('faq2A')} />
          <FaqItem question={t('faq3Q')} answer={t('faq3A')} />
          <FaqItem question={t('faq4Q')} answer={t('faq4A')} />
        </div>
      </section>

      {/* SERVICE CARDS — mobile only */}
      <div className="block sm:hidden">
        <section className="bg-slate-50">
          <div className="max-w-6xl mx-auto px-6 py-12 lg:py-16">
            <header className="mb-8">
              <h2 className="text-2xl font-bold">{t('servicesTitle')}</h2>
              <p className="mt-2 text-slate-600">{t('servicesSubtitle')}</p>
            </header>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {translatedServices.map((s) => (
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
            href="https://wa.me/254119402737"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500 text-white font-semibold hover:bg-green-600"
            aria-label={t('ctaWhatsApp')}
          >
            {t('mobileCtaWhatsapp')}
          </a>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700"
            aria-label="Get a free quote"
          >
            {t('mobileCtaQuote')}
          </a>
        </div>
      </div>

      <footer className="mt-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 py-10 text-slate-500 text-sm">© {new Date().getFullYear()} Blue Team Africa</div>
      </footer>
    </main>
    </>
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
