import { getTranslations } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import { container, ArrowIcon } from '@/components/home/shared'
import { nextCase } from './cases'

// Navy band linking the next case study in portfolio order (wraps from the last to the first)

export default async function NextCase({ slug }: { slug: string }) {
  const t = await getTranslations('CaseStudyTemplate')
  const tPf = await getTranslations('PortfolioPage')
  const next = nextCase(slug)
  const title = tPf(`item_${next.item}_title`)
  return (
    <section aria-label={t('nextCase')} className="bg-[#0A1A2B] text-white">
      <div className={container}>
        <Link
          href={`/portfolio/${next.slug}`}
          aria-label={`${t('nextCase')}: ${title}`}
          className="group flex flex-col gap-4 rounded py-12 !no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white md:flex-row md:items-center md:justify-between md:py-16"
        >
          <div>
            <p className="text-[14px] font-semibold uppercase tracking-[0.08em] text-[#8CC8EE]">{t('nextCase')}</p>
            <p className="mt-3 font-heading text-[28px] font-bold leading-tight text-white group-hover:underline md:text-[36px]">{title}</p>
            <p className="mt-2 max-w-2xl text-[16px] leading-relaxed text-[#C5D2DE]">{tPf(`item_${next.item}_desc`)}</p>
          </div>
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-white/30 text-white transition-colors group-hover:bg-white group-hover:text-navy">
            <ArrowIcon className="h-6 w-6" />
          </span>
        </Link>
      </div>
    </section>
  )
}
