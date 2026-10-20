import type { ReactNode } from 'react'
import { Link } from '@/i18n/navigation'
import { container, focusRing, stretched, ArrowIcon } from '@/components/home/shared'

// Bordered link cards to neighbouring services (the page's own related links, with their
// descriptions where the page has them)

export default function RelatedServices({ title, intro, links, tone = 'light' }: {
  title: string
  intro?: ReactNode
  links: { href: string; label: string; desc?: string }[]
  tone?: 'white' | 'light'
}) {
  return (
    <section aria-labelledby="related-heading" className={`${tone === 'light' ? 'bg-[#F6F8FA]' : 'bg-white'} py-14 md:py-16`}>
      <div className={container}>
        <h2 id="related-heading" className="font-heading !text-[28px] font-bold !leading-[1.15] text-navy md:!text-[36px]">{title}</h2>
        {intro && <p className="mt-4 max-w-3xl text-[16px] leading-relaxed text-[#4A5868]">{intro}</p>}
        <ul className={`mt-8 grid gap-4 md:grid-cols-2 ${links.length === 4 ? 'lg:grid-cols-4' : 'lg:grid-cols-3'}`}>
          {links.map((l) => (
            <li key={l.href} className={`group relative flex items-center justify-between gap-4 rounded-[18px] border border-[#D5DEE7] px-6 py-5 transition-colors hover:border-primary ${tone === 'light' ? 'bg-white' : 'bg-[#F6F8FA]'}`}>
              <div>
                <h3 className="font-heading !text-[18px] font-semibold !leading-snug text-navy">
                  <Link href={l.href} className={`rounded !no-underline group-hover:text-primary-dark ${stretched} ${focusRing}`}>{l.label}</Link>
                </h3>
                {l.desc && <p className="mt-1 text-[15px] leading-snug text-[#4A5868]">{l.desc}</p>}
              </div>
              <ArrowIcon className="shrink-0 text-primary-dark" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
