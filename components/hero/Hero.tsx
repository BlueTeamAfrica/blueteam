import { getLocale, getTranslations } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import { container, focusRing, NetworkLines } from '@/components/home/shared'
import HeroLoop from './HeroLoop'
import HeroStage, { Captions, type StageStrings } from './HeroStage'
import s from './hero.module.css'

// Homepage hero. The real <h1> is in the page's language; an aria-hidden copy of the other
// language's H1 shares its grid cell and crossfades in at step 4 of the loop (HeroLoop), while
// the stage (HeroStage) tells the offline-sync story. Phones get a compact stage.

/** "First sentence. Second sentence." → both halves (the second is drawn in blue) */
function splitTitle(title: string): [string, string] {
  const m = title.match(/^(.+?[.:؛!?])\s+(.+)$/)
  return m ? [m[1], ` ${m[2]}`] : [title, '']
}

/** Intro paragraph → first sentence and the rest (phones show the first sentence only) */
function splitIntro(text: string): [string, string] {
  const m = text.match(/^(.+?[.!?؟])\s+([\s\S]+)$/)
  return m ? [m[1], ` ${m[2]}`] : [text, '']
}

const TYPE = {
  en: 'font-heading font-bold !text-[34px] !leading-[1.15] tracking-[-0.01em] md:!text-[46px] xl:!text-[54px]',
  ar: 'font-heading font-bold !text-[40px] !leading-[1.4] md:!text-[48px] xl:!text-[54px]',
}

export default async function HeroSection() {
  const locale = (await getLocale()) === 'ar' ? 'ar' : 'en'
  const other = locale === 'ar' ? 'en' : 'ar'
  const t = await getTranslations('HomePage.hero')
  const tOther = await getTranslations({ locale: other, namespace: 'HomePage.hero' })
  const h = await getTranslations('Hero')
  const hOther = await getTranslations({ locale: other, namespace: 'Hero' })

  const [title1, title2] = splitTitle(t('title'))
  const [other1, other2] = splitTitle(tOther('title'))
  const [intro1, intro2] = splitIntro(t('subtitle'))
  // Arabic on the English page stays off Scheherazade New until the loop shows it (hero.module.css)
  const otherLazy = other === 'ar' ? s.lazyAr : ''
  // The عربي pill on the English page: the Latin-only stack, like the header's language pill
  const latinOnly = locale === 'en' ? { fontFamily: 'var(--font-poppins-latin), sans-serif' } : undefined

  const stage: StageStrings = {
    phoneTitle: h('phoneTitle'),
    phoneSubtitle: h('phoneSubtitle'),
    fields: [
      [h('field1Label'), h('field1Value')],
      [h('field2Label'), h('field2Value')],
      [h('field3Label'), h('field3Value')],
    ],
    status: [h('statusSaving'), h('statusOffline'), h('statusSyncing'), h('statusSynced')],
    dashTitle: h('dashTitle'),
    dashSynced: h('dashSynced'),
    dashNote: h('dashNote'),
    captions: [1, 2, 3, 4, 5, 6].map((i) => h(`caption${i}`)),
  }
  const site = (l: 'en' | 'ar', heading: string) => ({
    lang: l, dir: l === 'ar' ? 'rtl' : 'ltr', url: `client-site.org/${l}`, heading, lazyAr: l === 'ar' && locale === 'en',
  } as const)
  const sites = [site(locale, h('siteHeading')), site(other, hOther('siteHeading'))] as const

  const pills = [
    { l: locale, cls: s.pillPage },
    { l: other, cls: s.pillOther },
  ]
  const button = `inline-flex min-h-[52px] w-full items-center justify-center whitespace-nowrap rounded-[12px] px-7 font-heading text-[18px] font-bold !no-underline transition-colors md:w-auto ${focusRing}`

  return (
    <HeroLoop labelledBy="hero-heading" className="relative overflow-hidden bg-white">
      <NetworkLines className="absolute -top-12 end-0 w-[560px] text-primary opacity-[0.10]" />
      <div className={`${container} relative grid gap-10 pb-14 pt-10 md:pb-20 md:pt-16 lg:grid-cols-[minmax(0,560fr)_minmax(0,600fr)] lg:items-center lg:gap-12 lg:py-20`}>
        <div className="max-w-[640px] lg:max-w-[560px]">
          <p className="inline-flex flex-wrap items-center gap-x-2 gap-y-1 rounded-[18px] border border-[#D6E6F2] bg-[#F4F8FB] py-1 pe-3 ps-1 text-[13px] font-medium text-[#33475B] sm:gap-x-2.5 sm:pe-4 sm:text-[14px]">
            <span className="rounded-full bg-primary px-2.5 py-1 text-[12px] font-semibold text-white sm:px-3 sm:text-[13px]">{h('eyebrowChip')}</span>
            {h('eyebrowText')}
          </p>

          <div className={`mt-6 ${s.layers}`}>
            <h1 id="hero-heading" className={`${s.layerPage} ${TYPE[locale]} text-navy`}>
              {title1}
              <span className="text-primary">{title2}</span>
            </h1>
            <p aria-hidden="true" lang={other} dir={other === 'ar' ? 'rtl' : 'ltr'} className={`${s.layerOther} ${TYPE[other]} ${otherLazy} text-start text-navy`}>
              {other1}
              <span className="text-primary">{other2}</span>
            </p>
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2">
            <span aria-hidden="true" className="inline-flex items-center gap-1.5 text-[13px] font-semibold">
              {pills.map((p, i) => (
                <span key={p.l} className="contents">
                  {i === 1 && <span className="text-[#8A99A8]">⇄</span>}
                  <span lang={p.l} className={`${s.pill} ${p.cls} rounded-full px-3 py-1`} style={p.l === 'ar' ? latinOnly : undefined}>
                    {p.l === 'ar' ? 'عربي' : 'EN'}
                  </span>
                </span>
              ))}
            </span>
            <span className="text-[14px] text-[#4A5868]">{h('bilingualLine')}</span>
          </div>

          <p className="mt-6 text-[17px] leading-relaxed text-[#4A5868] md:text-[18px]">
            {intro1}
            <span className="hidden md:inline">{intro2}</span>
          </p>

          <div className="mt-8 flex flex-col gap-3 md:flex-row md:flex-wrap md:gap-4">
            <Link href="/contact" className={`${button} bg-primary !text-white hover:!bg-[#166DA6]`}>
              {t('ctaPrimary')}
            </Link>
            <Link href="/services" className={`${button} border-2 border-primary !text-[#0D5A8A] hover:bg-[#EAF4FB]`}>
              {t('ctaSecondary')}
            </Link>
          </div>
        </div>

        {/* Tablet and desktop: the full stage */}
        <div className="mx-auto hidden w-full max-w-[600px] md:block">
          <HeroStage t={stage} sites={[sites[0], sites[1]]} />
        </div>

        {/* Phones: phone + dashboard + lock on a light panel, caption below */}
        <div className="md:hidden">
          <div className="mx-auto max-w-[420px] rounded-[24px] bg-[#F4F8FB] p-4">
            <HeroStage t={stage} sites={[sites[0], sites[1]]} compact />
          </div>
          <p aria-hidden="true" className={`mt-3 text-center text-[14px] leading-snug text-[#4A5868] ${s.layers}`}>
            <Captions captions={stage.captions} />
          </p>
        </div>
      </div>
    </HeroLoop>
  )
}
