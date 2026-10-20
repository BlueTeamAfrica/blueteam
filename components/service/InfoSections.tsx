import { Link } from '@/i18n/navigation'
import { container, focusRing, stretched, H2, Eyebrow } from '@/components/home/shared'

// Body sections for service pages. Each takes its heading and items as props (the page's own
// strings). NumberedCards is used by the compact pages; the others are for the long pages.

interface Item { title: string; body: string }

function Header({ id, title, eyebrow, onDark = false }: { id: string; title: string; eyebrow?: string; onDark?: boolean }) {
  return (
    <div className="mb-10 max-w-3xl md:mb-12">
      {eyebrow && <Eyebrow onDark={onDark}>{eyebrow}</Eyebrow>}
      <H2 id={id} onDark={onDark}>{title}</H2>
    </div>
  )
}

/** Cards numbered 01, 02, 03… */
export function NumberedCards({ id, title, eyebrow, items, tone = 'white' }: { id: string; title: string; eyebrow?: string; items: Item[]; tone?: 'white' | 'light' }) {
  return (
    <section aria-labelledby={id} className={`${tone === 'light' ? 'bg-[#F6F8FA]' : 'bg-white'} py-14 md:py-20`}>
      <div className={container}>
        <Header id={id} title={title} eyebrow={eyebrow} />
        <ol className="grid gap-5 md:grid-cols-3">
          {items.map((it, i) => (
            <li key={it.title} className={`rounded-[20px] border border-[#E3E9EF] p-7 ${tone === 'light' ? 'bg-white' : 'bg-[#F6F8FA]'}`}>
              <span aria-hidden="true" className="font-heading text-[28px] font-bold leading-none text-primary">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="mt-4 font-heading !text-[19px] font-bold !leading-snug text-navy">{it.title}</h3>
              <p className="mt-2 text-[16px] leading-relaxed text-[#4A5868]">{it.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

/** Navy band with four bordered columns */
export function DarkBand({ id, title, eyebrow, items }: { id: string; title: string; eyebrow?: string; items: Item[] }) {
  return (
    <section aria-labelledby={id} className="bg-[#0A1A2B] py-14 text-white md:py-20">
      <div className={container}>
        <Header id={id} title={title} eyebrow={eyebrow} onDark />
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => (
            <li key={it.title} className="rounded-[20px] border border-white/[0.14] p-6">
              <h3 className="font-heading !text-[18px] font-bold !leading-snug text-white">{it.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-[#C5D2DE]">{it.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

/** Numbered steps on a connecting line (the homepage How-we-work styling). The line is the
    list's ::before, so the <ol> holds only <li>s */
export function StepsTimeline({ id, title, eyebrow, items }: { id: string; title: string; eyebrow?: string; items: Item[] }) {
  return (
    <section aria-labelledby={id} className="bg-white py-14 md:py-20">
      <div className={container}>
        <Header id={id} title={title} eyebrow={eyebrow} />
        <ol className="relative grid gap-8 before:absolute before:bottom-6 before:start-6 before:top-6 before:w-0.5 before:bg-[#D5E6F3] md:auto-cols-fr md:grid-flow-col md:gap-6 md:before:bottom-auto md:before:end-[10%] md:before:start-[10%] md:before:h-0.5 md:before:w-auto">
          {items.map((s, i) => (
            <li key={s.title} className="relative flex gap-5 md:flex-col md:items-center md:gap-0 md:text-center">
              {/* 19px bold is large text, so white passes on primary (4.12:1) */}
              <span aria-hidden="true" className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary font-heading text-[19px] font-bold text-white ring-8 ring-white">
                {i + 1}
              </span>
              <div className="md:mt-5">
                <h3 className="font-heading !text-[19px] font-bold text-navy"><span className="sr-only">{i + 1}. </span>{s.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-[#4A5868]">{s.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

/** A heading and a row of chips (technologies, platforms, regions) */
export function ChipsRow({ id, title, eyebrow, chips }: { id: string; title: string; eyebrow?: string; chips: string[] }) {
  return (
    <section aria-labelledby={id} className="bg-[#F6F8FA] py-14 md:py-16">
      <div className={container}>
        <Header id={id} title={title} eyebrow={eyebrow} />
        <ul className="flex flex-wrap gap-3">
          {chips.map((c) => (
            <li key={c} className="rounded-full border border-[#D5DEE7] bg-white px-4 py-2 text-[15px] font-semibold text-navy">{c}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}

/** Cards linking to case studies */
export function CaseStudyCards({ id, title, eyebrow, cases }: { id: string; title: string; eyebrow?: string; cases: { href: string; tag: string; title: string; body: string }[] }) {
  return (
    <section aria-labelledby={id} className="bg-white py-14 md:py-20">
      <div className={container}>
        <Header id={id} title={title} eyebrow={eyebrow} />
        <ul className="grid gap-5 md:grid-cols-2">
          {cases.map((c) => (
            <li key={c.href} className="group relative rounded-[24px] border border-[#E3E9EF] p-7 transition-shadow hover:shadow-[0_12px_32px_rgba(11,27,43,0.10)]">
              <p className="text-[13px] font-semibold uppercase tracking-wide text-[#0D5A8A]">{c.tag}</p>
              <h3 className="mt-2 font-heading !text-[21px] font-bold !leading-snug text-navy">
                <Link href={c.href} className={`rounded !no-underline group-hover:text-primary-dark ${stretched} ${focusRing}`}>{c.title}</Link>
              </h3>
              <p className="mt-2 text-[16px] leading-relaxed text-[#4A5868]">{c.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
