import Link from 'next/link'
import Image from 'next/image'
import { MessageCircle, ArrowRight } from 'lucide-react'
import InteriorHeader from '@/components/InteriorHeader'
import { metadataCrmSystem } from '@/lib/portfolio-metadata'
import PortfolioSchema from '@/components/PortfolioSchema'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import { getTranslations } from 'next-intl/server'

export const metadata = metadataCrmSystem

export default async function CRMSystemCaseStudy() {
  const t = await getTranslations('CaseStudyCrmSystemPage')

  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://www.blueteamafrica.com/' },
        { name: 'Portfolio', url: 'https://www.blueteamafrica.com/portfolio' },
        { name: 'Sales CRM Platform', url: 'https://www.blueteamafrica.com/portfolio/crm-system' },
      ]} />
      <PortfolioSchema projectName="CRM System" projectSlug="crm-system" />
      <InteriorHeader
        title={t('pageTitle')}
        breadcrumb={[
          { label: t('breadcrumbHome'), href: '/' },
          { label: t('breadcrumbPortfolio'), href: '/portfolio' },
          { label: t('breadcrumbCurrent') }
        ]}
      />

      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        {/* Project Image */}
        <section className="mb-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="relative h-96 bg-gray-200 rounded-lg overflow-hidden">
            <Image
              src="/images/portfolio/portfolio-preview-01.webp"
              alt="Sales CRM Platform"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">
            {t('problemTitle')}
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>{t('problemP1')}</p>
            <p>{t('problemP2')}</p>
            <p>{t('problemP3')}</p>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">
            {t('solutionTitle')}
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>{t('solutionP1')}</p>
            <p>{t('solutionP2')}</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>{t('solutionBullet1')}</li>
              <li>{t('solutionBullet2')}</li>
              <li>{t('solutionBullet3')}</li>
              <li>{t('solutionBullet4')}</li>
              <li>{t('solutionBullet5')}</li>
              <li>{t('solutionBullet6')}</li>
              <li>{t('solutionBullet7')}</li>
              <li>{t('solutionBullet8')}</li>
              <li>{t('solutionBullet9')}</li>
              <li>{t('solutionBullet10')}</li>
            </ul>
            <p>{t('solutionP3')}</p>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">
            {t('resultsTitle')}
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-primary mb-2">45%</div>
              <p className="text-gray-700">{t('stat1Label')}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-primary mb-2">35%</div>
              <p className="text-gray-700">{t('stat2Label')}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-primary mb-2">60%</div>
              <p className="text-gray-700">{t('stat3Label')}</p>
            </div>
          </div>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>{t('resultsP1')}</p>
            <p>{t('resultsP2')}</p>
            <p>{t('resultsP3')}</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-heading font-bold mb-4">
            {t('ctaTitle')}
          </h2>
          <p className="text-gray-300 mb-6">
            {t('ctaBody')}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/254119402737"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition"
            >
              <MessageCircle size={20} />
              {t('ctaWhatsApp')}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition"
            >
              {t('ctaGetQuote')}
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
      </div>
    </>
  )
}
