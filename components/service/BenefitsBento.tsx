import { container, Eyebrow, H2 } from '@/components/home/shared'

// The page's value cards as a bento: first card wide and light, second navy, third peach.
// One column on phones.

export interface Card { title: string; body: string }

const TONES = [
  'bg-[#F4F8FB] md:col-span-2',
  'bg-navy text-white',
  'bg-[#FBEFE4]',
]

export default function BenefitsBento({ eyebrow, title, cards }: { eyebrow: string; title: string; cards: Card[] }) {
  return (
    <section aria-labelledby="benefits-heading" className="bg-white py-14 md:py-20">
      <div className={container}>
        <div className="mb-10 max-w-3xl md:mb-12">
          <Eyebrow>{eyebrow}</Eyebrow>
          <H2 id="benefits-heading">{title}</H2>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {cards.map((c, i) => {
            const navy = i % 3 === 1
            return (
              <div key={c.title} className={`rounded-[24px] p-7 md:p-9 ${TONES[i % 3]}`}>
                <h3 className={`font-heading !text-[22px] font-bold !leading-snug md:!text-[24px] ${navy ? 'text-white' : 'text-navy'}`}>{c.title}</h3>
                <p className={`mt-3 max-w-[640px] text-[16px] leading-relaxed ${navy ? 'text-[#C5D2DE]' : 'text-[#4A5868]'}`}>{c.body}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
