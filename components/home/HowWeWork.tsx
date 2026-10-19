import { getTranslations } from 'next-intl/server'
import { container, sectionPad, SectionHeader } from './shared'

export default async function HowWeWork() {
  const t = await getTranslations('HomePage.howWeWork')
  const tProcess = await getTranslations('HomePage.process')
  const steps = [1, 2, 3, 4, 5].map((n) => ({
    n,
    title: tProcess(`step${n}Title` as 'step1Title'),
    body: t(`step${n}` as 'step1'),
  }))

  return (
    <section aria-labelledby="how-heading" className={`bg-white ${sectionPad}`}>
      <div className={container}>
        <SectionHeader id="how-heading" eyebrow={t('eyebrow')} title={t('title')} />

        <ol className="relative grid gap-8 md:grid-cols-5 md:gap-6">
          {/* Connecting line: horizontal through the circles from md, vertical on phones */}
          <span aria-hidden="true" className="absolute bottom-6 start-6 top-6 w-0.5 bg-[#D5E6F3] md:bottom-auto md:end-[10%] md:start-[10%] md:top-6 md:h-0.5 md:w-auto" />
          {steps.map((s) => (
            <li key={s.n} className="reveal relative flex gap-5 md:flex-col md:items-center md:gap-0 md:text-center">
              <span
                className={`relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full font-heading text-[18px] font-bold text-white ring-8 ring-white ${s.n === 5 ? 'bg-accent' : 'bg-primary'}`}
                aria-hidden="true"
              >
                {s.n}
              </span>
              <div className="md:mt-5">
                <h3 className="font-heading !text-[19px] font-bold text-navy">
                  <span className="sr-only">{s.n}. </span>{s.title}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-[#4A5868]">{s.body}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="reveal mt-14 flex flex-col gap-3 rounded-[20px] bg-[#F4F8FB] px-6 py-5 md:flex-row md:items-center md:gap-8 md:px-8">
          <p className="text-[15px] font-bold text-navy">{t('timelinesTitle')}</p>
          <ul className="flex flex-col gap-2 text-[15px] text-[#4A5868] md:flex-row md:flex-wrap md:gap-x-8">
            {(['timeline1', 'timeline2', 'timeline3'] as const).map((k) => (
              <li key={k} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                {t(k)}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
