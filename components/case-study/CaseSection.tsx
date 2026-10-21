import type { ReactNode } from 'react'
import { container } from '@/components/home/shared'
import { CheckItems } from '@/components/service/InfoSections'

// One part of the story (challenge, solution, results): the step number and the page's own
// heading on the start side, its text on the other. Lists render as dot bullets (problems)
// or a two-column checklist (what was built).

export default function CaseSection({ id, step, heading, paragraphs, list, listStyle = 'check', closing, tone = 'white' }: {
  id: string
  step: string
  heading: ReactNode
  paragraphs: ReactNode[]
  list?: ReactNode[]
  listStyle?: 'check' | 'dot'
  closing?: ReactNode[]
  tone?: 'white' | 'light'
}) {
  return (
    <section aria-labelledby={id} className={`${tone === 'light' ? 'bg-[#F6F8FA]' : 'bg-white'} py-14 md:py-20`}>
      <div className={`${container} grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:gap-16`}>
        <div>
          {/* 28px bold is large text: primary passes 3:1 on white and #F6F8FA */}
          <p aria-hidden="true" className="font-heading text-[28px] font-bold leading-none text-primary">{step}</p>
          <h2 id={id} className="mt-3 font-heading !text-[30px] font-bold !leading-[1.15] text-navy md:!text-[36px]">{heading}</h2>
        </div>
        <div className="space-y-4 text-[17px] leading-relaxed text-[#4A5868]">
          {paragraphs.map((p, i) => <p key={i}>{p}</p>)}
          {list && listStyle === 'check' && <div className="pt-2"><CheckItems items={list.map((body) => ({ body }))} tone={tone} /></div>}
          {list && listStyle === 'dot' && (
            <ul className="space-y-2 ps-1">
              {list.map((b, i) => (
                <li key={i} className="flex gap-3"><span aria-hidden="true" className="mt-[0.65em] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />{b}</li>
              ))}
            </ul>
          )}
          {closing?.map((p, i) => <p key={i}>{p}</p>)}
        </div>
      </div>
    </section>
  )
}
