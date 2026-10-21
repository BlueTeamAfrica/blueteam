import { getTranslations } from 'next-intl/server'
import type { ReactNode } from 'react'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import ServiceSchema from '@/components/ServiceSchema'
import ServiceHero, { type ServiceFamily } from './ServiceHero'
import CaseResults, { type CaseStudyStrip } from './CaseResults'
import BenefitsBento from './BenefitsBento'
import { NumberedCards, CaseStudyCards } from './InfoSections'
import ServiceFaq from './ServiceFaq'
import RelatedServices from './RelatedServices'

// The six compact service pages (ui-ux, branding, custom-systems, crm, hosting, maintenance)
// share one body, all from the page's own message namespace: hero → results strip (when a
// linked case study has figures) → value cards → why choose us → FAQ → related services.
// No sidebar and no in-page CTA: the footer's CTA band follows.

const SITE = 'https://www.blueteamafrica.com'

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
  /** A further case study shown as a card: its portfolio-index item key, e.g. crmSystem */
  relatedCase?: { href: string; item: string }
}

export default async function CompactServicePage({ config, intro }: { config: CompactServiceConfig; intro?: ReactNode }) {
  const { namespace, slug, family, crumbKey, schemaCrumbName, schemaServiceName, related, caseStudy, relatedCase } = config
  const t = await getTranslations(namespace)
  const tTemplate = await getTranslations('ServiceTemplate')
  const tPf = await getTranslations('PortfolioPage')

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

      {caseStudy && <CaseResults {...caseStudy} />}

      <BenefitsBento
        eyebrow={t(crumbKey)}
        title={tTemplate('whatYouGet')}
        cards={[1, 2, 3].map((n) => ({ title: t(`pillar${n}Title`), body: t(`pillar${n}Body`) }))}
      />

      <NumberedCards
        id="why-heading"
        heading={t('whyTitle')}
        tone="light"
        items={[1, 2, 3].map((n) => ({ title: t(`why${n}Title`), body: t(`why${n}Body`) }))}
      />

      {relatedCase && (
        <CaseStudyCards
          id="related-case-heading"
          heading={tTemplate('relatedCase')}
          cases={[{
            href: relatedCase.href,
            tag: tPf(`item_${relatedCase.item}_cat`),
            title: tPf(`item_${relatedCase.item}_title`),
            body: [tPf(`item_${relatedCase.item}_desc`)],
          }]}
        />
      )}

      {/* With the white case-study band above, FAQ and related services swap tones */}
      <ServiceFaq tone={relatedCase ? 'light' : 'white'} title={t('faqTitle')} description={t('faqDescription')} items={faqs} viewAllLabel={t('faqViewAll')} />

      <RelatedServices tone={relatedCase ? 'white' : 'light'} title={t('relatedTitle')} links={related.map((r) => ({ href: r.href, label: t(r.key) }))} />
    </>
  )
}
