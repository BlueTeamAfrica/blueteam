import { getTranslations } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import { container, focusRing, NetworkLines } from './shared'

// Figures from the case studies: CSLO Sudan (−70% entry, 50% faster reporting), NGO portal
// (−75% admin time), e-commerce shop (2× sales in 90 days)
const STATS = [
  { value: '70%', key: 'stat1Label' },
  { value: '50%', key: 'stat2Label' },
  { value: '75%', key: 'stat3Label' },
  { value: '2×', key: 'stat4Label' },
] as const

export default async function ResultsBand() {
  const t = await getTranslations('HomePage.results')
  return (
    <section aria-labelledby="results-heading" className="relative overflow-hidden bg-primary-strong text-white">
      <NetworkLines className="absolute -top-10 end-0 hidden w-[420px] text-white opacity-[0.14] sm:block" />
      <div className={`${container} relative py-14 md:py-20`}>
        <ul className="reveal grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <li key={s.key} className={`border-s-2 ps-5 md:ps-6 ${i === STATS.length - 1 ? 'border-[#F0A867]' : 'border-white/40'}`}>
              <p dir="ltr" className="text-start font-heading text-[44px] font-extrabold leading-none md:text-[64px] rtl:text-end">{s.value}</p>
              <p className="mt-3 text-[16px] font-bold leading-snug md:text-[19px] rtl:leading-[1.6]">{t(s.key)}</p>
            </li>
          ))}
        </ul>
        <div className="mt-12 flex flex-col gap-3 border-t border-white/20 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <h2 id="results-heading" className="!text-[17px] font-semibold md:!text-[19px]">{t('line')}</h2>
          <Link href="/portfolio" className={`rounded font-semibold text-white !no-underline underline-offset-4 hover:!underline ${focusRing}`}>
            {t('link')}
          </Link>
        </div>
      </div>
    </section>
  )
}
