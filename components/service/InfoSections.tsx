import type { ReactNode } from 'react'
import { Link } from '@/i18n/navigation'
import { container, focusRing, stretched, H2, Eyebrow, CheckIcon, ArrowIcon } from '@/components/home/shared'

// Body sections for service pages. Each takes its heading, items and optional lead/closing
// paragraphs as props (the page's own strings, rich where the copy carries links). `tone`
// picks the band: white, light (#F6F8FA) or dark (navy), so pages can alternate them.

export type Tone = 'white' | 'light' | 'dark'
export interface Item { title?: ReactNode; body: ReactNode; bullets?: ReactNode[] }

const BAND: Record<Tone, string> = { white: 'bg-white', light: 'bg-[#F6F8FA]', dark: 'bg-[#0A1A2B] text-white' }
// Cards sit on the opposite light tone, so they read as cards on either light band
const CARD: Record<Tone, string> = { white: 'bg-[#F6F8FA]', light: 'bg-white', dark: 'border-white/[0.14]' }
const body = (tone: Tone) => (tone === 'dark' ? 'text-[#C5D2DE]' : 'text-[#4A5868]')
const title = (tone: Tone) => (tone === 'dark' ? 'text-white' : 'text-navy')
// Links inside dark-band copy: the light blue used on navy elsewhere
const darkLinks = '[&_a]:text-[#8CC8EE] [&_a]:underline'

/** Section shell: band, eyebrow + H2, optional lead paragraphs, content, optional closing */
export function Band({ id, tone = 'white', heading, eyebrow, lead, children, closing }: {
  id: string; tone?: Tone; heading: ReactNode; eyebrow?: string; lead?: ReactNode[]; children: ReactNode; closing?: ReactNode[]
}) {
  const dark = tone === 'dark'
  return (
    <section aria-labelledby={id} className={`${BAND[tone]} py-14 md:py-20`}>
      <div className={`${container} ${dark ? darkLinks : ''}`}>
        <div className="mb-10 max-w-3xl md:mb-12">
          {eyebrow && <Eyebrow onDark={dark}>{eyebrow}</Eyebrow>}
          <H2 id={id} onDark={dark} className={eyebrow ? '' : '!mt-0'}>{heading}</H2>
          {lead?.map((p, i) => <p key={i} className={`mt-5 text-[17px] leading-relaxed ${body(tone)}`}>{p}</p>)}
        </div>
        {children}
        {closing?.map((p, i) => <p key={i} className={`mt-8 max-w-3xl text-[16px] leading-relaxed ${body(tone)}`}>{p}</p>)}
      </div>
    </section>
  )
}

function Bullets({ items, tone }: { items: ReactNode[]; tone: Tone }) {
  return (
    <ul className={`mt-3 space-y-1.5 text-[15px] leading-relaxed ${body(tone)}`}>
      {items.map((b, i) => (
        <li key={i} className="flex gap-2"><span aria-hidden="true" className="mt-[0.6em] h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />{b}</li>
      ))}
    </ul>
  )
}

/** Cards numbered 01, 02, 03… With a subheading (an h3 above the grid) the cards are h4s */
export function NumberedCards({ id, heading, eyebrow, lead, closing, subheading, items, tone = 'white' }: {
  id: string; heading: ReactNode; eyebrow?: string; lead?: ReactNode[]; closing?: ReactNode[]; subheading?: ReactNode; items: Item[]; tone?: Tone
}) {
  const H = subheading ? 'h4' : 'h3'
  return (
    <Band id={id} tone={tone} heading={heading} eyebrow={eyebrow} lead={lead} closing={closing}>
      {subheading && <h3 className={`mb-6 font-heading !text-[22px] font-bold !leading-snug ${title(tone)}`}>{subheading}</h3>}
      <ol className={`grid gap-5 md:grid-cols-2 ${items.length % 3 === 0 || items.length > 4 ? 'lg:grid-cols-3' : ''}`}>
        {items.map((it, i) => (
          <li key={i} className={`rounded-[20px] border p-7 ${tone === 'dark' ? CARD.dark : `border-[#E3E9EF] ${CARD[tone]}`}`}>
            {/* 28px bold is large text: primary passes 3:1 on these light cards */}
            <span aria-hidden="true" className={`font-heading text-[28px] font-bold leading-none ${tone === 'dark' ? 'text-[#8CC8EE]' : 'text-primary'}`}>{String(i + 1).padStart(2, '0')}</span>
            <H className={`mt-4 font-heading !text-[19px] font-bold !leading-snug ${title(tone)}`}>{it.title}</H>
            <p className={`mt-2 text-[16px] leading-relaxed ${body(tone)}`}>{it.body}</p>
            {it.bullets && <Bullets items={it.bullets} tone={tone} />}
          </li>
        ))}
      </ol>
    </Band>
  )
}

/** Navy band of bordered columns (four across on wide screens, three when there are six) */
export function DarkBand({ id, heading, eyebrow, lead, closing, items }: {
  id: string; heading: ReactNode; eyebrow?: string; lead?: ReactNode[]; closing?: ReactNode[]; items: Item[]
}) {
  return (
    <Band id={id} tone="dark" heading={heading} eyebrow={eyebrow} lead={lead} closing={closing}>
      <ul className={`grid gap-5 sm:grid-cols-2 ${items.length % 3 === 0 ? 'lg:grid-cols-3' : 'lg:grid-cols-4'}`}>
        {items.map((it, i) => (
          <li key={i} className="rounded-[20px] border border-white/[0.14] p-6">
            <h3 className="font-heading !text-[18px] font-bold !leading-snug text-white">{it.title}</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-[#C5D2DE]">{it.body}</p>
          </li>
        ))}
      </ul>
    </Band>
  )
}

/** Numbered steps on a connecting line (the homepage How-we-work styling). The line is the
    list's ::before, so the <ol> holds only <li>s. Across from md, or `vertical` (one column,
    for steps with long descriptions) */
export function StepsTimeline({ id, heading, eyebrow, lead, items, tone = 'white', vertical = false }: {
  id: string; heading: ReactNode; eyebrow?: string; lead?: ReactNode[]; items: Item[]; tone?: Exclude<Tone, 'dark'>; vertical?: boolean
}) {
  const ring = tone === 'light' ? 'ring-[#F6F8FA]' : 'ring-white'
  // Across from md; with more than five steps from lg, so columns don't get too narrow
  const wide = items.length > 5
  const across = vertical ? '' : wide
    ? 'lg:auto-cols-fr lg:grid-flow-col lg:gap-6 lg:before:bottom-auto lg:before:end-[8%] lg:before:start-[8%] lg:before:h-0.5 lg:before:w-auto'
    : 'md:auto-cols-fr md:grid-flow-col md:gap-6 md:before:bottom-auto md:before:end-[8%] md:before:start-[8%] md:before:h-0.5 md:before:w-auto'
  const item = vertical ? '' : wide ? 'lg:flex-col lg:items-center lg:gap-0 lg:text-center' : 'md:flex-col md:items-center md:gap-0 md:text-center'
  const textBox = vertical ? 'pt-2.5' : wide ? 'lg:mt-5' : 'md:mt-5'
  return (
    <Band id={id} tone={tone} heading={heading} eyebrow={eyebrow} lead={lead}>
      <ol className={`relative grid gap-8 before:absolute before:bottom-6 before:start-6 before:top-6 before:w-0.5 before:bg-[#D5E6F3] ${vertical ? 'max-w-3xl' : ''} ${across}`}>
        {items.map((s, i) => (
          <li key={i} className={`relative flex gap-5 ${item}`}>
            {/* 19px bold is large text, so white passes on primary (4.12:1) */}
            <span aria-hidden="true" className={`relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary font-heading text-[19px] font-bold text-white ring-8 ${ring}`}>
              {i + 1}
            </span>
            <div className={textBox}>
              <h3 className="font-heading !text-[18px] font-bold !leading-snug text-navy"><span className="sr-only">{i + 1}. </span>{s.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-[#4A5868]">{s.body}</p>
            </div>
          </li>
        ))}
      </ol>
    </Band>
  )
}

/** A row of chips; items with a body render as chip-titled cards so no copy is dropped */
export function ChipsRow({ id, heading, eyebrow, lead, items, tone = 'light' }: {
  id: string; heading: ReactNode; eyebrow?: string; lead?: ReactNode[]; items: Item[]; tone?: Exclude<Tone, 'dark'>
}) {
  const withBodies = items.some((it) => it.title)
  return (
    <Band id={id} tone={tone} heading={heading} eyebrow={eyebrow} lead={lead}>
      {withBodies ? (
        <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <li key={i} className={`rounded-[20px] border border-[#E3E9EF] p-6 ${CARD[tone]}`}>
              <h3 className="inline-flex rounded-full bg-[#EAF4FB] px-3.5 py-1 font-heading !text-[15px] font-semibold !leading-snug text-[#0D5A8A]">{it.title}</h3>
              <p className="mt-3 text-[16px] leading-relaxed text-[#4A5868]">{it.body}</p>
            </li>
          ))}
        </ul>
      ) : (
        <ul className="flex flex-wrap gap-3">
          {items.map((it, i) => (
            <li key={i} className="rounded-full border border-[#D5DEE7] bg-white px-4 py-2 text-[15px] font-semibold text-navy">{it.body}</li>
          ))}
        </ul>
      )}
    </Band>
  )
}

/** The checklist grid on its own, for a list that belongs to another section */
export function CheckItems({ items, tone = 'white' }: { items: Item[]; tone?: Tone }) {
  return (
    <ul className="grid gap-x-10 gap-y-5 md:grid-cols-2">
      {items.map((it, i) => (
        <li key={i} className="flex gap-3">
          <CheckIcon className={`mt-0.5 ${tone === 'dark' ? 'text-[#8CC8EE]' : 'text-primary'}`} />
          <div className={`text-[16px] leading-relaxed ${body(tone)}`}>
            {it.title && <h3 className={`mb-1 font-heading !text-[17px] font-semibold !leading-snug ${title(tone)}`}>{it.title}</h3>}
            {it.body}
          </div>
        </li>
      ))}
    </ul>
  )
}

/** Two-column list with check icons, for long bullet lists. Items may carry a bold title */
export function Checklist({ id, heading, eyebrow, lead, closing, items, tone = 'white' }: {
  id: string; heading: ReactNode; eyebrow?: string; lead?: ReactNode[]; closing?: ReactNode[]; items: Item[]; tone?: Tone
}) {
  return (
    <Band id={id} tone={tone} heading={heading} eyebrow={eyebrow} lead={lead} closing={closing}>
      <CheckItems items={items} tone={tone} />
    </Band>
  )
}

export interface CaseCard { href: string; tag?: string; title: ReactNode; body: ReactNode[]; linkLabel?: string }

/** Cards linking to case studies; the whole card is the link */
export function CaseStudyCards({ id, heading, eyebrow, lead, cases, allLink, tone = 'white' }: {
  id: string; heading: ReactNode; eyebrow?: string; lead?: ReactNode[]; cases: CaseCard[]; allLink?: { href: string; label: string }; tone?: Exclude<Tone, 'dark'>
}) {
  return (
    <Band id={id} tone={tone} heading={heading} eyebrow={eyebrow} lead={lead}>
      <ul className={`grid gap-5 ${cases.length > 1 ? 'md:grid-cols-2' : ''}`}>
        {cases.map((c) => (
          <li key={c.href} className={`group relative rounded-[24px] border border-[#E3E9EF] p-7 transition-shadow hover:shadow-[0_12px_32px_rgba(11,27,43,0.10)] md:p-8 ${CARD[tone]}`}>
            {c.tag && <p className="text-[13px] font-semibold uppercase tracking-wide text-[#0D5A8A]">{c.tag}</p>}
            <h3 className="mt-2 font-heading !text-[21px] font-bold !leading-snug text-navy">
              <Link href={c.href} className={`rounded !no-underline group-hover:text-primary-dark ${stretched} ${focusRing}`}>{c.title}</Link>
            </h3>
            {c.body.map((p, i) => <p key={i} className="mt-3 text-[16px] leading-relaxed text-[#4A5868]">{p}</p>)}
            {c.linkLabel && (
              <p className="mt-5 inline-flex items-center gap-1.5 font-semibold text-[#0D5A8A]" aria-hidden="true">{c.linkLabel}</p>
            )}
          </li>
        ))}
      </ul>
      {allLink && (
        <Link href={allLink.href} className={`mt-8 inline-flex items-center gap-1.5 rounded font-semibold text-[#0D5A8A] !no-underline hover:!underline ${focusRing}`}>
          {allLink.label} <ArrowIcon />
        </Link>
      )}
    </Band>
  )
}
