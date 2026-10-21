import { Link } from '@/i18n/navigation'
import FaqAccordion from '@/components/home/FaqAccordion'
import { container, focusRing, H2, ArrowIcon } from '@/components/home/shared'

// The page's FAQ: the homepage accordion, and the FAQPage JSON-LD built from the same items,
// so the structured data is the visible text, byte for byte.

export interface FaqItem { q: string; a: string }

export default function ServiceFaq({ title, description, items, viewAllLabel, tone = 'white', schema: withSchema = true }: {
  title: string
  description: string
  items: FaqItem[]
  /** Link to /faq; left out where the page never showed one */
  viewAllLabel?: string
  tone?: 'white' | 'light'
  /** FAQPage JSON-LD; off where a page never had it (its JSON-LD stays as it was) */
  schema?: boolean
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }
  return (
    <section aria-labelledby="faq-heading" className={`${tone === 'light' ? 'bg-[#F6F8FA]' : 'bg-white'} py-14 md:py-20`}>
      {withSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />}
      <div className={`${container} grid gap-10 md:grid-cols-3 md:gap-12`}>
        <div>
          <H2 id="faq-heading" className="!mt-0">{title}</H2>
          <p className="mt-5 text-[16px] leading-relaxed text-[#4A5868]">{description}</p>
          {viewAllLabel && (
            <Link href="/faq" className={`mt-5 inline-flex items-center gap-1.5 rounded font-semibold text-[#0D5A8A] !no-underline hover:!underline ${focusRing}`}>
              {viewAllLabel} <ArrowIcon />
            </Link>
          )}
        </div>
        <div className="md:col-span-2">
          <FaqAccordion items={items} />
        </div>
      </div>
    </section>
  )
}
