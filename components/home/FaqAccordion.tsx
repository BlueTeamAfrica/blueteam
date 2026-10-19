'use client'

import { useState, type ReactNode } from 'react'
import { Plus } from 'lucide-react'

// Answers are always in the HTML (closed ones use the hidden attribute) so crawlers and the
// FAQ JSON-LD see the same text. First question starts open.
export default function FaqAccordion({ items }: { items: { q: string; a: ReactNode }[] }) {
  const [open, setOpen] = useState<number | null>(0)
  return (
    <div className="divide-y divide-[#E3E9EF] border-y border-[#E3E9EF]">
      {items.map((item, i) => {
        const isOpen = open === i
        return (
          <div key={i}>
            <h3 className="!text-[17px] md:!text-[18px]">
              <button
                type="button"
                id={`faq-q-${i}`}
                aria-expanded={isOpen}
                aria-controls={`faq-a-${i}`}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 py-5 text-start font-heading font-semibold text-navy hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                <span data-faq-q>{item.q}</span>
                <span
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-transform duration-200 motion-reduce:transition-none ${isOpen ? 'rotate-45 bg-primary text-white' : 'bg-[#EAF4FB] text-primary'}`}
                  aria-hidden="true"
                >
                  <Plus size={18} />
                </span>
              </button>
            </h3>
            <div id={`faq-a-${i}`} role="region" aria-labelledby={`faq-q-${i}`} hidden={!isOpen}>
              <p data-faq-a className="pb-6 pe-12 text-[16px] leading-relaxed text-[#4A5868]">{item.a}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
