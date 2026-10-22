import { getTranslations } from 'next-intl/server'
import type { ReactNode } from 'react'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import PortfolioSchema from '@/components/PortfolioSchema'
import ServiceHero from '@/components/service/ServiceHero'
import ResultsStrip from '@/components/service/ResultsStrip'
import RelatedServices from '@/components/service/RelatedServices'
import CaseSection from './CaseSection'
import NextCase from './NextCase'
import { caseBySlug } from './cases'
import { SERVICES, getServiceNames } from '@/components/service/services'

// A case study, top to bottom: hero (category chips, title, the portfolio card's summary, the
// family visual) → its own figures → Challenge → Solution (tinted) → Results → related
// services → next case study. No in-page CTA: the footer's CTA band follows. The six pages
// with the shared Problem / Solution / Results keys render through here; cslo-sudan composes
// the same parts itself.

const SITE = 'https://www.blueteamafrica.com'

/** Links to services by slug, named as the header and footer name them */
export async function serviceLinks(slugs: string[]) {
  const serviceName = await getServiceNames()
  return slugs.map((slug) => ({ href: `/services/${slug}`, label: serviceName(SERVICES.find((svc) => svc.slug === slug)!) }))
}

export async function CaseHero({ slug }: { slug: string }) {
  const c = caseBySlug(slug)
  const t = await getTranslations(c.namespace)
  const tPf = await getTranslations('PortfolioPage')
  return (
    <ServiceHero
      family={c.family}
      title={t('pageTitle')}
      intro={tPf(`item_${c.item}_desc`)}
      pills={[tPf(`item_${c.item}_cat`)]}
      actions={false}
      breadcrumb={[
        { label: t('breadcrumbHome'), href: '/' },
        { label: t('breadcrumbPortfolio'), href: '/portfolio' },
        { label: t('breadcrumbCurrent') },
      ]}
    />
  )
}

export async function CaseResultsStrip({ slug }: { slug: string }) {
  const c = caseBySlug(slug)
  const t = await getTranslations(c.namespace)
  const tTemplate = await getTranslations('CaseStudyTemplate')
  return (
    <ResultsStrip
      label={tTemplate('keyResults')}
      stats={c.values.map((value, i) => ({ value, label: t(`stat${i + 1}Label`) }))}
    />
  )
}

export default async function CaseStudyPage({ slug, crumbName, projectName, solutionBullets, children }: {
  slug: string
  /** BreadcrumbList and PortfolioSchema names, unchanged from the old page */
  crumbName: string
  projectName: string
  solutionBullets: number
  children?: ReactNode
}) {
  const c = caseBySlug(slug)
  const t = await getTranslations(c.namespace)
  const tTemplate = await getTranslations('ServiceTemplate')
  const keys = (prefix: string, n: number) => Array.from({ length: n }, (_, i) => t(`${prefix}${i + 1}`))

  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: `${SITE}/` },
        { name: 'Portfolio', url: `${SITE}/portfolio` },
        { name: crumbName, url: `${SITE}/portfolio/${slug}` },
      ]} />
      <PortfolioSchema projectName={projectName} projectSlug={slug} />

      <CaseHero slug={slug} />
      <CaseResultsStrip slug={slug} />

      <CaseSection id="challenge-heading" step="01" heading={t('problemTitle')} paragraphs={keys('problemP', 3)} />
      <CaseSection
        id="solution-heading"
        step="02"
        tone="light"
        heading={t('solutionTitle')}
        paragraphs={[t('solutionP1'), t('solutionP2')]}
        list={keys('solutionBullet', solutionBullets)}
        closing={[t('solutionP3')]}
      />
      <CaseSection id="results-heading" step="03" heading={t('resultsTitle')} paragraphs={keys('resultsP', 3)} />

      {children}

      <RelatedServices title={tTemplate('relatedServices')} links={await serviceLinks(c.related)} />
      <NextCase slug={slug} />
    </>
  )
}
