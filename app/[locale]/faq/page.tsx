import { Link } from '@/i18n/navigation'
import { MessageCircle, ArrowRight } from 'lucide-react'
import FAQSection from '@/components/FAQSection'
import FAQSchema from '@/components/FAQSchema'
import InteriorHeader from '@/components/InteriorHeader'
import SectionWrapper from '@/components/SectionWrapper'
import { getTranslations } from 'next-intl/server'
import { buildAlternates } from '@/lib/metadata-helpers'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  return {
    title: 'Frequently Asked Questions',
    description: 'Common questions about our services, pricing, and processes.',
    alternates: buildAlternates('/faq', locale),
  }
}

export default async function FAQPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const t = await getTranslations('FAQPage')

  // Build translated Q&A array for AR locale only.
  // EN keeps lib/faqs.ts data (unchanged); FAQSchema always uses lib/faqs.ts (EN JSON-LD on both routes).
  const translatedFaqs =
    locale === 'ar'
      ? Array.from({ length: 20 }, (_, i) => {
          const n = String(i + 1).padStart(2, '0')
          return {
            question: t(`q${n}` as Parameters<typeof t>[0]),
            answer: t(`a${n}` as Parameters<typeof t>[0]),
          }
        })
      : undefined

  return (
    <>
      {/* JSON-LD Schema — always EN (lib/faqs.ts); no change to existing schema behaviour */}
      <FAQSchema />

      <InteriorHeader
        title={t('title')}
        breadcrumb={[
          { label: t('breadcrumbHome'), href: '/' },
          { label: t('breadcrumbFAQ') },
        ]}
      />

      {/* Subtitle tagline */}
      <SectionWrapper bgColor="white">
        <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto">
          {t('subtitle')}
        </p>
      </SectionWrapper>

      {/* Accordion — passes translated Q&As for AR; EN uses lib/faqs.ts directly */}
      <FAQSection
        showAll={true}
        showCTA={false}
        title=""
        description=""
        customFAQs={translatedFaqs}
      />

      {/* CTA */}
      <SectionWrapper bgColor="light">
        <div className="max-w-3xl mx-auto bg-white rounded-lg p-8 text-center shadow-sm">
          <h3 className="text-xl font-heading font-bold text-gray-900 mb-4">
            {t('ctaH3')}
          </h3>
          <p className="text-gray-700 mb-6">{t('ctaBody')}</p>
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
              className="inline-flex items-center gap-2 border-2 border-primary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary/10 transition"
            >
              {t('ctaContact')}
              <ArrowRight size={18} className="rtl:rotate-180" />
            </Link>
          </div>
        </div>
      </SectionWrapper>
    </>
  )
}
