import { Link } from '@/i18n/navigation'
import Image from 'next/image'
import InteriorHeader from '@/components/InteriorHeader'
import SectionWrapper from '@/components/SectionWrapper'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import { getTranslations } from 'next-intl/server'
import type { Metadata } from 'next'
import { buildAlternates } from '@/lib/metadata-helpers'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  return {
    title: 'Portfolio',
    description: 'Explore our portfolio of successful projects - web design, mobile apps, ERP systems, and more for clients across East Africa.',
    alternates: buildAlternates('/portfolio', locale),
  }
}

const portfolioIds = [
  { id: 'cslo-sudan',      image: '/images/portfolio/cslo-sudan/case-cslo-cslo-01.webp' },
  { id: 'ngo-portal',      image: '/images/portfolio/portfolio-preview-01.webp' },
  { id: 'erp-integration', image: '/images/portfolio/portfolio-preview-02.webp' },
  { id: 'ecommerce-shop',  image: '/images/portfolio/portfolio-preview-03.webp' },
  { id: 'mobile-app',      image: '/images/portfolio/portfolio-preview-04.webp' },
  { id: 'crm-system',      image: '/images/portfolio/portfolio-preview-05.webp' },
  { id: 'cloud-migration', image: '/images/portfolio/portfolio-preview-01.webp' },
] as const

type PortfolioId = typeof portfolioIds[number]['id']

// Maps portfolio id to translation key prefix
const keyOf = (id: PortfolioId) =>
  ({
    'cslo-sudan':      'item_csloSudan',
    'ngo-portal':      'item_ngoPortal',
    'erp-integration': 'item_erpIntegration',
    'ecommerce-shop':  'item_ecommerceShop',
    'mobile-app':      'item_mobileApp',
    'crm-system':      'item_crmSystem',
    'cloud-migration': 'item_cloudMigration',
  } as const)[id]

export default async function PortfolioPage() {
  const t = await getTranslations('PortfolioPage')

  const breadcrumbItems = [
    { name: 'Home', url: 'https://www.blueteamafrica.com/' },
    { name: 'Portfolio', url: 'https://www.blueteamafrica.com/portfolio' },
  ]

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <InteriorHeader
        title={t('pageTitle')}
        breadcrumb={[
          { label: t('breadcrumbHome'), href: '/' },
          { label: t('breadcrumbPortfolio') }
        ]}
      />

      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        {/* Portfolio Grid */}
        <SectionWrapper bgColor="white">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioIds.map(({ id, image }) => {
              const prefix = keyOf(id)
              return (
                <Link
                  key={id}
                  href={`/portfolio/${id}`}
                  className="group block bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100"
                >
                  <div className="relative h-48 bg-gray-200 overflow-hidden">
                    <Image
                      src={image}
                      alt={t(`${prefix}_title` as Parameters<typeof t>[0])}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-xs uppercase tracking-wide text-primary font-semibold">
                      {t(`${prefix}_cat` as Parameters<typeof t>[0])}
                    </span>
                    <h3 className="text-xl font-semibold text-gray-900 mt-2 mb-2 group-hover:text-primary transition-colors">
                      {t(`${prefix}_title` as Parameters<typeof t>[0])}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {t(`${prefix}_desc` as Parameters<typeof t>[0])}
                    </p>
                    <div className="mt-4 flex items-center text-primary font-medium text-sm group-hover:gap-2 transition-all">
                      {t('viewCaseStudy')}
                      <svg
                        className="w-4 h-4 ms-1 rtl:rotate-180 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </SectionWrapper>

        {/* CTA */}
        <SectionWrapper bgColor="light">
          <div className="text-center">
            <h2 className="text-2xl font-heading font-bold text-gray-900 mb-4">
              {t('ctaTitle')}
            </h2>
            <p className="text-gray-700 mb-6">
              {t('ctaBody')}
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition"
            >
              {t('ctaButton')}
              <svg
                className="w-5 h-5 rtl:rotate-180"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </SectionWrapper>
      </div>
    </>
  )
}
