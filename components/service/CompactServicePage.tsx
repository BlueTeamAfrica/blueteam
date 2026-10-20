import { getTranslations } from 'next-intl/server'
import type { ReactNode } from 'react'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import ServiceSchema from '@/components/ServiceSchema'
import ServiceHero, { type ServiceFamily } from './ServiceHero'
import ResultsStrip from './ResultsStrip'
import BenefitsBento from './BenefitsBento'
import { NumberedCards } from './InfoSections'
import ServiceFaq from './ServiceFaq'
import RelatedServices from './RelatedServices'

// The six compact service pages (ui-ux, branding, custom-systems, crm, hosting, maintenance)
// share one body, all from the page's own message namespace: hero → results strip (when a
// linked case study has figures) → value cards → why choose us → FAQ → related services.
// No sidebar and no in-page CTA: the footer's CTA band follows.

const SITE = 'https://www.blueteamafrica.com'

export interface CaseStudyStrip {
  href: string
  /** The case-study page's namespace; its pageTitle and stat labels are used as they are */
  namespace: string
  /** Values exactly as that page shows them, one per stat1Label… key */
  values: string[]
}

export interface CompactServiceConfig {
  namespace: string
  slug: string
  family: ServiceFamily
  /** The page's breadcrumb key for its own name, e.g. breadcrumbHosting */
  crumbKey: string
  /** BreadcrumbList and Service JSON-LD names, unchanged from the old pages */
  schemaCrumbName: string
  schemaServiceName: string
  related: { href: string; key: string }[]
  caseStudy?: CaseStudyStrip
}

export default async function CompactServicePage({ config, intro }: { config: CompactServiceConfig; intro?: ReactNode }) {
  const { namespace, slug, family, crumbKey, schemaCrumbName, schemaServiceName, related, caseStudy } = config
  const t = await getTranslations(namespace)
  const tTemplate = await getTranslations('ServiceTemplate')
  const tCase = caseStudy ? await getTranslations(caseStudy.namespace) : null

  const faqs = [1, 2, 3, 4, 5, 6].map((n) => ({ q: t(`faq${n}q`), a: t(`faq${n}a`) }))

  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: `${SITE}/` },
        { name: 'Services', url: `${SITE}/services` },
        { name: schemaCrumbName, url: `${SITE}/services/${slug}` },
      ]} />
      <ServiceSchema serviceName={schemaServiceName} serviceSlug={slug} />

      <ServiceHero
        family={family}
        title={t('title')}
        intro={intro ?? t('intro')}
        breadcrumb={[
          { label: t('breadcrumbHome'), href: '/' },
          { label: t('breadcrumbServices'), href: '/services' },
          { label: t(crumbKey) },
        ]}
      />

      {caseStudy && tCase && (
        <ResultsStrip
          label={tTemplate('fromCase', { name: tCase('pageTitle') })}
          stats={caseStudy.values.map((value, i) => ({ value, label: tCase(`stat${i + 1}Label`) }))}
          href={caseStudy.href}
          linkLabel={tTemplate('readCase')}
        />
      )}

      <BenefitsBento
        eyebrow={t(crumbKey)}
        title={tTemplate('whatYouGet')}
        cards={[1, 2, 3].map((n) => ({ title: t(`pillar${n}Title`), body: t(`pillar${n}Body`) }))}
      />

      <NumberedCards
        id="why-heading"
        title={t('whyTitle')}
        tone="light"
        items={[1, 2, 3].map((n) => ({ title: t(`why${n}Title`), body: t(`why${n}Body`) }))}
      />

      <ServiceFaq title={t('faqTitle')} description={t('faqDescription')} items={faqs} viewAllLabel={t('faqViewAll')} />

      <RelatedServices title={t('relatedTitle')} links={related.map((r) => ({ href: r.href, label: t(r.key) }))} />
    </>
  )
}
