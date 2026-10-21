import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { Link } from '@/i18n/navigation'
import PortfolioSchema from '@/components/PortfolioSchema'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import { getTranslations } from 'next-intl/server'
import { buildAlternates } from '@/lib/metadata-helpers'
import { CaseHero, CaseResultsStrip } from '@/components/case-study/CaseStudyPage'
import CaseSection from '@/components/case-study/CaseSection'
import NextCase from '@/components/case-study/NextCase'
import ServiceFaq from '@/components/service/ServiceFaq'
import RelatedServices from '@/components/service/RelatedServices'
import { inlineLink } from '@/components/service/styles'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'CaseStudyCsloSudanPage' })
  // OpenGraph/Twitter text stays English on both locales (project convention)
  const tEn = await getTranslations({ locale: 'en', namespace: 'CaseStudyCsloSudanPage' })
  return {
    title: t('metaTitle'),
    description: t('metaDescription'),
    keywords: 'ERPNext Sudan, CRM Sudan, NGO ERP system, humanitarian data management Sudan, CSLO Sudan ERP, East Africa technology solutions',
    alternates: buildAlternates('/portfolio/cslo-sudan', locale),
    openGraph: {
      title: tEn('metaTitle'),
      description: tEn('metaDescription'),
      url: 'https://www.blueteamafrica.com/portfolio/cslo-sudan',
      siteName: 'Blue Team Africa',
      images: [
        {
          url: '/images/hero/hero-og-1200x630.jpg',
          width: 1200,
          height: 630,
          alt: 'CSLO Sudan ERPNext and CRM Implementation',
        },
      ],
      type: 'article',
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: tEn('metaTitle'),
      description: tEn('metaDescription'),
      images: ['/images/hero/hero-og-1200x630.jpg'],
    },
  }
}

export default async function CSLOSudanCaseStudy() {
  const t = await getTranslations('CaseStudyCsloSudanPage')
  const to = (href: string) => (chunks: ReactNode) => <Link href={href} className={inlineLink}>{chunks}</Link>
  const bold = { b: (chunks: ReactNode) => <strong>{chunks}</strong> }
  const nums = (n: number) => Array.from({ length: n }, (_, i) => i + 1)
  // The related-link strings start with "→ "; the cards draw their own arrow
  const label = (s: string) => s.replace(/^→\s*/, '')

  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://www.blueteamafrica.com/' },
        { name: 'Portfolio', url: 'https://www.blueteamafrica.com/portfolio' },
        { name: 'ERP & CRM Implementation for CSLO Sudan', url: 'https://www.blueteamafrica.com/portfolio/cslo-sudan' },
      ]} />
      <PortfolioSchema projectName="CSLO Sudan" projectSlug="cslo-sudan" />

      <CaseHero slug="cslo-sudan" />
      <CaseResultsStrip slug="cslo-sudan" />

      <CaseSection
        id="challenge-heading"
        step="01"
        heading={t('problemTitle')}
        paragraphs={[t('problemP1'), t('problemP2')]}
        list={nums(6).map((n) => t(`problemBullet${n}`))}
        listStyle="dot"
        closing={[t('problemP3')]}
      />
      <CaseSection
        id="solution-heading"
        step="02"
        tone="light"
        heading={t('solutionTitle')}
        paragraphs={[
          t.rich('solutionP1', { erpLink: to('/services/erp'), mobileLink: to('/services/mobile-apps') }),
          t('solutionP2'),
        ]}
        list={nums(8).map((n) => t.rich(`solutionBullet${n}`, bold))}
        closing={[
          t('solutionP3'),
          t.rich('solutionP4', { erpDevLink: to('/services/erp'), crmLink: to('/services/crm') }),
        ]}
      />
      <CaseSection id="results-heading" step="03" heading={t('resultsTitle')} paragraphs={nums(4).map((n) => t(`resultsP${n}`))} />

      {/* The page's FAQ, as before without FAQPage JSON-LD */}
      <ServiceFaq tone="light" schema={false} title={t('faqTitle')} items={nums(5).map((n) => ({ q: t(`faq${n}Q`), a: t(`faq${n}A`) }))} />

      <RelatedServices
        tone="white"
        title={t('relatedTitle')}
        intro={t('relatedBody')}
        links={[
          { href: '/services/erp', label: label(t('relatedLink1')) },
          { href: '/services/crm', label: label(t('relatedLink2')) },
          { href: '/services/mobile-apps', label: label(t('relatedLink3')) },
        ]}
      />
      <NextCase slug="cslo-sudan" />
    </>
  )
}
