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

// A case study, top to bottom: hero (category chips, title, the portfolio card's summary, the
// family visual) → its own figures → Challenge → Solution (tinted) → Results → related
// services → next case study. No in-page CTA: the footer's CTA band follows. The six pages
// with the shared Problem / Solution / Results keys render through here; cslo-sudan composes
// the same parts itself.

const SITE = 'https://www.blueteamafrica.com'

/** Service names as the header and footer show them: [namespace, key] per service slug */
export const SERVICE_NAME: Record<string, [string, string]> = {
  'web-design': ['ServiceSidebar', 'webDesign'],
  'website-development': ['ServiceSidebar', 'websiteDev'],
  'ui-ux': ['ServiceSidebar', 'uiux'],
  branding: ['ServiceSidebar', 'branding'],
  ecommerce: ['ServiceSidebar', 'ecommerce'],
  'mobile-apps': ['ServiceSidebar', 'mobileApps'],
  'custom-systems': ['ServiceSidebar', 'customSystems'],
  erp: ['Navigation', 'services.erp.name'],
  crm: ['Navigation', 'services.crm.name'],
  cybersecurity: ['ServiceSidebar', 'cybersecurity'],
  hosting: ['ServiceSidebar', 'hosting'],
  maintenance: ['ServiceSidebar', 'maintenance'],
}

export async function serviceLinks(slugs: string[]) {
  const tSvc = await getTranslations('ServiceSidebar')
  const tNav = await getTranslations('Navigation')
  return slugs.map((s) => {
    const [ns, key] = SERVICE_NAME[s]
    return { href: `/services/${s}`, label: ns === 'Navigation' ? tNav(key) : tSvc(key) }
  })
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
