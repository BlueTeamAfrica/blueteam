import NextLink from 'next/link'
import { getTranslations } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import HomepageFAQSchema from '@/components/HomepageFAQSchema'
import FaqAccordion from './FaqAccordion'
import { container, sectionPad, focusRing, Eyebrow, H2 } from './shared'

const KEYS = [1, 2, 3, 4, 5, 6] as const

export default async function FaqSection() {
  const t = await getTranslations('HomePage.faqPreview')
  // Visible accordion and FAQ JSON-LD come from the same keys; a6 carries a link, which the
  // JSON-LD gets as plain text
  const pricingLink = (chunks: React.ReactNode) => (
    // Blog posts are English-only: link straight to /blog/<slug> (no /ar prefix, no redirect hop)
    <NextLink href="/blog/web-design-cost-in-rwanda-2026" className={`rounded text-[#0D5A8A] underline hover:text-[#1C83C5] ${focusRing}`}>{chunks}</NextLink>
  )
  const items = KEYS.map((n) => ({
    q: t(`q${n}`),
    a: n === 6 ? t.rich('a6', { pricingLink }) : t(`a${n}`),
  }))
  const schemaItems = KEYS.map((n) => ({
    question: t(`q${n}`),
    answer: n === 6 ? t.markup('a6', { pricingLink: (chunks) => chunks }) : t(`a${n}`),
  }))

  return (
    <section aria-labelledby="faq-heading" className={`bg-white ${sectionPad}`}>
      <HomepageFAQSchema faqs={schemaItems} />
      <div className={`${container} grid gap-10 md:grid-cols-3 md:gap-12`}>
        <div>
          <Eyebrow>{t('eyebrow')}</Eyebrow>
          <H2 id="faq-heading">{t('title')}</H2>
          <p className="mt-5 text-[16px] text-[#4A5868]">
            {t.rich('contactLine', {
              link: (chunks) => (
                <Link href="/contact" className={`rounded font-semibold text-[#0D5A8A] !no-underline hover:!underline ${focusRing}`}>{chunks}</Link>
              ),
            })}
          </p>
        </div>
        <div className="md:col-span-2">
          <FaqAccordion items={items} />
        </div>
      </div>
    </section>
  )
}
