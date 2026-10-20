import { getTranslations } from 'next-intl/server'
import ResultsStrip from './ResultsStrip'

// A ResultsStrip filled from one case study: its pageTitle names it and its own stat labels
// sit under the values, which are given exactly as that /portfolio page shows them.

export interface CaseStudyStrip {
  href: string
  /** The case-study page's namespace */
  namespace: string
  /** Values exactly as that page shows them, one per stat1Label… key (the first n stats) */
  values: string[]
}

export default async function CaseResults({ href, namespace, values }: CaseStudyStrip) {
  const t = await getTranslations('ServiceTemplate')
  const tCase = await getTranslations(namespace)
  return (
    <ResultsStrip
      label={t('fromCase', { name: tCase('pageTitle') })}
      stats={values.map((value, i) => ({ value, label: tCase(`stat${i + 1}Label`) }))}
      href={href}
      linkLabel={t('readCase')}
    />
  )
}
