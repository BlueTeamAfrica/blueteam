import { Link } from '@/i18n/navigation'
import Image from 'next/image'
import { getLocale, getTranslations } from 'next-intl/server'
import type { Metadata } from 'next'
import { buildAlternates } from '@/lib/metadata-helpers'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import { Ltr } from '@/components/Ltr'
import { container, focusRing, stretched, Eyebrow, BrowserFrame, ArrowIcon } from '@/components/home/shared'
import { CASES, caseBySlug } from '@/components/case-study/cases'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'PortfolioPage' })
  // OpenGraph/Twitter text stays English on both locales (project convention)
  const tEn = await getTranslations({ locale: 'en', namespace: 'PortfolioPage' })
  return {
    title: t('metaTitle'),
    description: t('metaDescription'),
    alternates: buildAlternates('/portfolio', locale),
    openGraph: {
      title: tEn('metaTitle'),
      description: tEn('metaDescription'),
    },
  }
}

const SITE = 'https://www.blueteamafrica.com'

// Tile figures: each case page's own figures, exactly as it shows them (cases.ts), with its
// own label keys. The hero's three headline figures are the first figure of three cases.
const HEADLINE = ['cslo-sudan', 'ngo-portal', 'ecommerce-shop']

type Tone = 'navy' | 'tinted' | 'peach' | 'white'
const TONE: Record<Tone, string> = {
  navy: 'bg-[#0A1A2B] text-white',
  tinted: 'bg-[#F4F8FB] border border-[#E3E9EF]',
  peach: 'bg-[#FBEFE4]',
  white: 'bg-white border border-[#E3E9EF]',
}

/** Small CSS mockups for the tiles (decorative) */
function Mock({ kind }: { kind: 'dashboard' | 'store' | 'phone' }) {
  if (kind === 'phone') {
    return (
      <div aria-hidden="true" className="mx-auto w-[110px] rounded-[18px] border-[5px] border-navy bg-white p-2 shadow-[0_10px_24px_rgba(11,27,43,0.18)]">
        <div className="rounded-md bg-primary-strong px-2 py-2"><span className="block h-1.5 w-10 rounded-full bg-white/80" /><span className="mt-1 block h-1 w-14 rounded-full bg-white/50" /></div>
        {[0, 1, 2].map((i) => <span key={i} className="mt-2 block h-4 rounded border border-[#E3E9EF] bg-[#F6F8FA]" />)}
        <span className="mt-2 block h-3 rounded-full bg-[#E3F6EA]" />
      </div>
    )
  }
  return (
    <BrowserFrame className="w-full">
      <div aria-hidden="true" className="p-3">
        {kind === 'dashboard' ? (
          <div className="flex h-16 items-end gap-2">
            {[40, 65, 50, 80, 58].map((h, i) => <span key={i} className={`flex-1 rounded-t ${i === 3 ? 'bg-accent' : 'bg-primary'}`} style={{ height: `${h}%` }} />)}
          </div>
        ) : (
          <div className="grid grid-cols-3 gap-2">
            {[0, 1, 2].map((i) => (
              <span key={i} className="block rounded border border-[#E3E9EF] p-1.5">
                <span className="block h-8 rounded bg-[#FBEFE4]" /><span className="mt-1.5 block h-1.5 w-3/4 rounded-full bg-[#D5DEE7]" />
                <span className="mt-1.5 block h-3 w-1/2 rounded bg-accent" />
              </span>
            ))}
          </div>
        )}
      </div>
    </BrowserFrame>
  )
}

export default async function PortfolioPage() {
  const t = await getTranslations('PortfolioPage')
  const tHeader = await getTranslations('Header')
  const tTemplate = await getTranslations('ServiceTemplate')
  const tWork = await getTranslations('HomePage.selectedWork')
  const locale = await getLocale()
  // The SudanFacts title carries Arabic; on English pages keep it off Scheherazade New
  const latinOnly = locale === 'en' ? { fontFamily: 'var(--font-poppins-latin), sans-serif' } : undefined

  // Each case's figures and labels, from its own page namespace
  const figures = Object.fromEntries(await Promise.all(CASES.map(async (c) => {
    const tc = await getTranslations(c.namespace)
    return [c.slug, c.values.map((value, i) => ({ value, label: tc(`stat${i + 1}Label`) }))] as const
  })))
  const item = (slug: string) => {
    const c = caseBySlug(slug)
    return { href: `/portfolio/${slug}`, cat: t(`item_${c.item}_cat`), title: t(`item_${c.item}_title`), desc: t(`item_${c.item}_desc`) }
  }

  function Tile({ slug, tone, figureCount = 1, mock, className = '' }: { slug: string; tone: Tone; figureCount?: number; mock?: 'dashboard' | 'store' | 'phone'; className?: string }) {
    const it = item(slug), dark = tone === 'navy'
    return (
      <article className={`group relative flex flex-col rounded-[24px] p-6 transition-shadow hover:shadow-[0_12px_32px_rgba(11,27,43,0.12)] md:p-7 ${TONE[tone]} ${className}`}>
        <p className={`self-start rounded-full px-3 py-1 text-[13px] font-semibold ${dark ? 'bg-white/10 text-[#8CC8EE]' : 'bg-white text-[#0D5A8A]'}`}>{it.cat}</p>
        <h2 className={`mt-4 font-heading !text-[22px] font-bold !leading-snug md:!text-[24px] ${dark ? 'text-white' : 'text-navy'}`}>
          <Link href={it.href} className={`rounded !no-underline group-hover:underline ${stretched} ${dark ? 'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white' : focusRing}`}>{it.title}</Link>
        </h2>
        <p className={`mt-2 text-[16px] leading-relaxed ${dark ? 'text-[#C5D2DE]' : 'text-[#4A5868]'}`}>{it.desc}</p>
        {mock && <div className="mt-6"><Mock kind={mock} /></div>}
        <ul className="mt-auto flex flex-wrap gap-x-8 gap-y-4 pt-6">
          {figures[slug].slice(0, figureCount).map((f) => (
            <li key={f.label}>
              {/* 36px bold is large text: primary passes 3:1 on white and the tinted tiles */}
              <p dir="ltr" className={`text-start font-heading text-[36px] font-extrabold leading-none rtl:text-end ${dark ? 'text-white' : 'text-primary'}`}><Ltr>{f.value}</Ltr></p>
              <p className={`mt-1.5 text-[14px] font-semibold ${dark ? 'text-[#C5D2DE]' : 'text-[#4A5868]'}`}>{f.label}</p>
            </li>
          ))}
        </ul>
        <p aria-hidden="true" className={`mt-5 inline-flex items-center gap-1.5 text-[15px] font-semibold ${dark ? 'text-[#8CC8EE]' : 'text-[#0D5A8A]'}`}>{t('viewCaseStudy')} <ArrowIcon /></p>
      </article>
    )
  }

  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: `${SITE}/` },
        { name: 'Portfolio', url: `${SITE}/portfolio` },
      ]} />

      {/* Hero */}
      <section aria-labelledby="portfolio-heading" className="bg-white">
        <div className={`${container} grid gap-10 pb-12 pt-8 md:pb-16 md:pt-12 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] lg:items-end lg:gap-14`}>
          <div>
            <nav aria-label={tTemplate('breadcrumbNav')}>
              <ol className="flex flex-wrap items-center gap-2 text-[14px] text-[#4A5868]">
                <li><Link href="/" className={`rounded !no-underline hover:!underline hover:text-navy ${focusRing}`}>{t('breadcrumbHome')}</Link></li>
                <li aria-hidden="true">{locale === 'ar' ? '‹' : '›'}</li>
                <li aria-current="page" className="text-navy">{t('breadcrumbPortfolio')}</li>
              </ol>
            </nav>
            <div className="mt-6"><Eyebrow>{tHeader('work')}</Eyebrow></div>
            <h1 id="portfolio-heading" className="mt-3 font-heading !text-[38px] font-bold !leading-[1.1] text-navy md:!text-[52px] rtl:!leading-[1.35]">{t('pageTitle')}</h1>
            <p className="mt-5 max-w-[680px] text-[17px] leading-relaxed text-[#4A5868] md:text-[18px]">{t('intro')}</p>
          </div>
          <ul className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {HEADLINE.map((slug) => {
              const f = figures[slug][0]
              return (
                <li key={slug} className="rounded-[18px] border border-[#E3E9EF] bg-[#F6F8FA] px-5 py-4">
                  <p dir="ltr" className="text-start font-heading text-[34px] font-extrabold leading-none text-primary rtl:text-end"><Ltr>{f.value}</Ltr></p>
                  <p className="mt-1.5 text-[15px] font-semibold text-navy">{f.label}</p>
                  <p className="mt-0.5 text-[14px] text-[#4A5868]">{item(slug).title}</p>
                </li>
              )
            })}
          </ul>
        </div>
      </section>

      {/* Tiles: 1 column below md, 2 from md, 3 from lg */}
      <section className="bg-[#F6F8FA] py-12 md:py-16">
        <div className={`${container} grid gap-5 md:grid-cols-2 lg:grid-cols-3`}>
          {/* SudanFacts: no case page; links to the live site */}
          <article className={`group relative rounded-[24px] p-6 md:col-span-2 md:p-7 ${TONE.white}`}>
            <ul className="flex flex-wrap gap-2">
              <li className="rounded-full bg-[#EAF4FB] px-3 py-1 text-[13px] font-semibold text-[#0D5A8A]">{t('sfChipCategory')}</li>
              <li className="rounded-full bg-[#E3F6EA] px-3 py-1 text-[13px] font-semibold text-[#1B7A3F]">{t('sfChipLive')}</li>
            </ul>
            <h2 className="mt-4 font-heading !text-[22px] font-bold !leading-snug text-navy md:!text-[24px]" style={latinOnly}>{tWork('sfTitle')}</h2>
            <p className="mt-2 text-[16px] leading-relaxed text-[#4A5868]">{tWork('sfDesc')}</p>
            <div className="mt-6 grid grid-cols-2 gap-3 md:gap-5">
              {(['en', 'ar'] as const).map((l) => (
                <BrowserFrame key={l}>
                  <div className="relative aspect-[16/10]">
                    <Image src={`/images/work/sudanfacts-${l}.webp`} alt="" fill sizes="(min-width: 1024px) 380px, (min-width: 768px) 45vw, 45vw" className="object-cover object-top" />
                  </div>
                </BrowserFrame>
              ))}
            </div>
            <a
              href="https://sudanfacts.org"
              target="_blank"
              rel="noopener"
              aria-label={`${tWork('sfTitle')} — ${tWork('sfLink')}`}
              className={`mt-6 inline-block rounded text-[16px] font-semibold text-[#0D5A8A] !no-underline group-hover:!underline ${stretched} ${focusRing}`}
            >
              {tWork('sfLink')}
            </a>
          </article>

          <Tile slug="cslo-sudan" tone="navy" figureCount={2} mock="phone" className="lg:col-start-3 lg:row-span-2 lg:row-start-1" />
          <Tile slug="ngo-portal" tone="tinted" mock="dashboard" />
          <Tile slug="ecommerce-shop" tone="peach" mock="store" />
          <Tile slug="crm-system" tone="white" />
          <Tile slug="cloud-migration" tone="navy" />
          <Tile slug="erp-integration" tone="white" />
          <Tile slug="mobile-app" tone="tinted" className="md:col-span-2 lg:col-span-3" />
        </div>
      </section>
    </>
  )
}
