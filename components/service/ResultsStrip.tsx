import { Link } from '@/i18n/navigation'
import { Ltr } from '@/components/Ltr'
import { container } from '@/components/home/shared'

// Figures from one case study, linking to it. Only figures stated on that /portfolio page,
// verbatim (values as the page shows them, labels from its own message keys); a service page
// without a matching case study leaves the strip out.

export interface Stat { value: string; label: string }

export default function ResultsStrip({ label, stats, href, linkLabel }: {
  label: string
  stats: Stat[]
  /** Link to the case study; left out on the case-study page itself */
  href?: string
  linkLabel?: string
}) {
  return (
    <section aria-label={label} className="bg-primary-strong text-white">
      <div className={`${container} flex flex-col gap-8 py-10 md:py-12 lg:flex-row lg:items-center lg:justify-between lg:gap-12`}>
        <p className="text-[14px] font-semibold uppercase tracking-[0.08em] text-white lg:max-w-[220px]">{label}</p>
        <ul className="grid flex-1 gap-6 sm:grid-cols-3">
          {stats.map((s) => (
            <li key={s.label} className="border-s-2 border-white/40 ps-5">
              <p dir="ltr" className="text-start font-heading text-[40px] font-extrabold leading-none md:text-[48px] rtl:text-end">
                <Ltr>{s.value}</Ltr>
              </p>
              <p className="mt-2 text-[16px] font-semibold leading-snug text-white">{s.label}</p>
            </li>
          ))}
        </ul>
        {href && <Link
          href={href}
          className="shrink-0 rounded font-semibold text-white !no-underline underline-offset-4 hover:!underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          {linkLabel}
        </Link>}
      </div>
    </section>
  )
}
