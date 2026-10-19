import type { ReactNode } from 'react'
import { Link } from '@/i18n/navigation'
import { Ltr } from '@/components/Ltr'

// Building blocks shared by the homepage sections (app/[locale]/page.tsx). Server components.

export const container = 'mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'
export const sectionPad = 'py-16 md:py-[112px]'
export const focusRing = 'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1C83C5]'
// Makes the whole card clickable through one real link (put it on the card's main link)
export const stretched = "after:absolute after:inset-0 after:rounded-[inherit] after:content-['']"

export function Eyebrow({ children, onDark = false }: { children: ReactNode; onDark?: boolean }) {
  // #0D5A8A fails contrast on navy, so dark sections use a light blue
  return (
    <p className={`text-[14px] font-semibold uppercase tracking-[0.08em] ${onDark ? 'text-[#8CC8EE]' : 'text-[#0D5A8A]'}`}>
      {children}
    </p>
  )
}

export function H2({ id, children, onDark = false, className = '' }: { id: string; children: ReactNode; onDark?: boolean; className?: string }) {
  return (
    <h2 id={id} className={`mt-3 font-heading !text-[32px] font-bold !leading-[1.15] md:!text-[48px] ${onDark ? 'text-white' : 'text-[#0B1B2B]'} ${className}`}>
      {children}
    </h2>
  )
}

/** Eyebrow + H2 on the start side, optional "All …" link on the end side */
export function SectionHeader({ id, eyebrow, title, link, onDark = false }: {
  id: string; eyebrow: string; title: string; link?: { href: string; label: string }; onDark?: boolean
}) {
  return (
    <div className="mb-10 flex flex-col gap-4 md:mb-14 md:flex-row md:items-end md:justify-between md:gap-10">
      <div className="max-w-3xl">
        <Eyebrow onDark={onDark}>{eyebrow}</Eyebrow>
        <H2 id={id} onDark={onDark}>{title}</H2>
      </div>
      {link && (
        <Link href={link.href} className={`shrink-0 rounded text-[16px] font-semibold text-[#0D5A8A] !no-underline hover:!underline ${focusRing}`}>
          {link.label}
        </Link>
      )}
    </div>
  )
}

/** Faint network of nodes and lines, the brand motif. Decorative; mirrors in RTL. */
export function NetworkLines({ className = '', stroke = 'currentColor', accent }: { className?: string; stroke?: string; accent?: string }) {
  const nodes: [number, number][] = [[40, 60], [130, 20], [210, 90], [300, 40], [380, 110], [90, 160], [190, 200], [280, 170], [360, 250], [150, 280], [250, 290]]
  const edges: [number, number][] = [[0, 1], [1, 2], [2, 3], [3, 4], [0, 5], [5, 2], [2, 6], [6, 7], [7, 3], [7, 4], [7, 8], [6, 9], [9, 10], [10, 7], [5, 6], [10, 8]]
  return (
    <svg viewBox="0 0 420 320" fill="none" aria-hidden="true" className={`pointer-events-none rtl:-scale-x-100 ${className}`}>
      {edges.map(([a, b]) => (
        <line key={`${a}-${b}`} x1={nodes[a][0]} y1={nodes[a][1]} x2={nodes[b][0]} y2={nodes[b][1]} stroke={stroke} strokeWidth="1.5" />
      ))}
      {nodes.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={i === 7 && accent ? 7 : 4.5} fill={i === 7 && accent ? accent : stroke} />
      ))}
    </svg>
  )
}

export function CheckIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className={`h-5 w-5 shrink-0 ${className}`}>
      <circle cx="10" cy="10" r="10" fill="currentColor" opacity="0.18" />
      <path d="m6 10.2 2.6 2.6L14 7.4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

/** Arrow for composed link labels (strings that carry their own → / ← don't need it) */
export function ArrowIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className={`inline-block h-4 w-4 rtl:rotate-180 ${className}`}>
      <path d="M3 8h10m-4-4 4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

/** Minimal browser chrome around a screenshot or a CSS mock page */
export function BrowserFrame({ children, className = '', dark = false }: { children: ReactNode; className?: string; dark?: boolean }) {
  return (
    <div className={`overflow-hidden rounded-xl border shadow-[0_12px_32px_rgba(11,27,43,0.18)] ${dark ? 'border-white/15 bg-[#0B1B2B]' : 'border-[#E3E9EF] bg-white'} ${className}`}>
      <div className={`flex h-7 items-center gap-1.5 px-3 ${dark ? 'bg-white/10' : 'bg-[#F0F3F6]'}`} dir="ltr">
        <span className="h-2 w-2 rounded-full bg-[#FF6159]" />
        <span className="h-2 w-2 rounded-full bg-[#FFBD2E]" />
        <span className="h-2 w-2 rounded-full bg-[#28C941]" />
        <span className={`ms-2 h-3.5 flex-1 rounded-full ${dark ? 'bg-white/10' : 'bg-white'}`} />
      </div>
      {children}
    </div>
  )
}

/** Keeps a leading figure ("−75%", "2×") in LTR order inside Arabic text, where the minus
    sign would otherwise land on the wrong side of the number */
export function LeadingFigure({ text }: { text: string }) {
  const m = text.match(/^([−-]?\d[\d.,]*[%×]?)(\s[\s\S]*)$/)
  if (!m) return <>{text}</>
  return <><Ltr>{m[1]}</Ltr>{m[2]}</>
}
