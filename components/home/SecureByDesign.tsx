import Image from 'next/image'
import { getTranslations } from 'next-intl/server'
import { ShieldCheck, HeartHandshake, Layers, type LucideIcon } from 'lucide-react'
import { container, sectionPad, Eyebrow, H2, NetworkLines } from './shared'

// Simple Icons logos, self-hosted in public/images/tech (see its README)
const STACK = [
  { name: 'ERPNext', icon: 'erpnext' },
  { name: 'Frappe', icon: 'frappe' },
  { name: 'React', icon: 'react' },
  { name: 'Next.js', icon: 'nextdotjs' },
  { name: 'Flutter', icon: 'flutter' },
  { name: 'Firebase', icon: 'firebase' },
  { name: 'Vercel', icon: 'vercel' },
  { name: 'Tailwind', icon: 'tailwindcss' },
]

export default async function SecureByDesign() {
  const t = await getTranslations('HomePage.secureByDesign')
  const cards: { icon: LucideIcon; title: string; body: string; orange?: boolean }[] = [
    { icon: ShieldCheck, title: t('card1Title'), body: t('card1Body') },
    { icon: HeartHandshake, title: t('card2Title'), body: t('card2Body') },
    { icon: Layers, title: t('card3Title'), body: t('card3Body'), orange: true },
  ]

  return (
    <section aria-labelledby="secure-heading" className={`relative overflow-hidden bg-[#0A1A2B] text-white ${sectionPad}`}>
      <NetworkLines className="absolute -top-6 end-0 w-[520px] text-primary opacity-40" accentNode />
      <div className={`${container} relative`}>
        <div className="max-w-3xl">
          <Eyebrow onDark>{t('eyebrow')}</Eyebrow>
          <H2 id="secure-heading" onDark>{t('title')}</H2>
          <p className="mt-5 text-[17px] leading-relaxed text-white/75 md:text-[18px]">{t('intro')}</p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {cards.map((c) => (
            <div key={c.title} className="reveal rounded-[20px] border border-white/10 bg-white/[0.06] p-7 backdrop-blur-sm">
              <span
                className={`flex h-12 w-12 items-center justify-center rounded-[14px] ${c.orange ? 'bg-accent/20 text-[#F0A867]' : 'bg-primary/25 text-[#8CC8EE]'}`}
                aria-hidden="true"
              >
                <c.icon size={24} strokeWidth={1.75} />
              </span>
              <h3 className="mt-5 font-heading !text-[20px] font-bold">{c.title}</h3>
              <p className="mt-2 text-[16px] leading-relaxed text-white/70">{c.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-4 md:flex-row md:items-center md:gap-6">
          <p className="shrink-0 text-[15px] font-semibold text-white/80">{t('buildWith')}</p>
          <ul className="flex flex-wrap gap-2.5">
            {STACK.map((s) => (
              <li key={s.name} className="inline-flex h-10 items-center gap-2 rounded-full bg-white px-4 text-[14px] font-semibold text-navy">
                <Image src={`/images/tech/${s.icon}.svg`} alt="" width={18} height={18} unoptimized className="h-[18px] w-[18px]" />
                {s.name}
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-10 max-w-4xl text-[15px] leading-relaxed text-white/55">{t('seoLine')}</p>
      </div>
    </section>
  )
}
