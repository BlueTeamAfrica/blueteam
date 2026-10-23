import type { Metadata } from 'next'
import type { CSSProperties } from 'react'
import { getLocale, getTranslations } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import { Ltr } from '@/components/Ltr'
import { buildAlternates, withSocialDefaults } from '@/lib/metadata-helpers'
import { container, focusRing, stretched, NetworkLines, Eyebrow, H2, SectionHeader, ArrowIcon } from '@/components/home/shared'
import HowWeWork from '@/components/home/HowWeWork'
import { FamilyVisual } from '@/components/service/ServiceHero'
import ServiceFaq from '@/components/service/ServiceFaq'
import { FAMILIES, SERVICES, getServiceNames, type Family, type Service } from '@/components/service/services'
import { caseBySlug } from '@/components/case-study/cases'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'ServicesPage' })
  // OpenGraph/Twitter text stays English on both locales (project convention)
  const tEn = await getTranslations({ locale: 'en', namespace: 'ServicesPage' })
  return withSocialDefaults({
    title: t('metaTitle'),
    description: t('metaDescription'),
    alternates: buildAlternates('/services', locale),
    openGraph: {
      title: tEn('metaTitle'),
      description: tEn('metaDescription'),
      images: ['/images/hero/hero-og-1200x630.jpg'],
    },
  })
}

// The services hub: hero with a jump-nav to the three families → one band per family (white,
// light, navy) listing its services as full-width rows, each with one results figure where a
// case study states one → selected work → how we work → FAQ. No in-page CTA: the footer's CTA
// band follows. Everything comes from the shared service list (components/service/services.ts).

const SITE = 'https://www.blueteamafrica.com'

const BAND = {
  design: { bg: 'bg-white', divide: 'divide-[#E3E9EF] border-[#E3E9EF]', title: 'text-navy group-hover:text-primary-dark', desc: 'text-[#4A5868]', num: 'text-primary-dark', label: 'text-[#4A5868]', icon: 'bg-[#EAF4FB] text-primary', arrow: 'text-primary-dark', ring: focusRing },
  systems: { bg: 'bg-[#F6F8FA]', divide: 'divide-[#D5DEE7] border-[#D5DEE7]', title: 'text-navy group-hover:text-primary-dark', desc: 'text-[#4A5868]', num: 'text-primary-dark', label: 'text-[#4A5868]', icon: 'bg-white text-primary', arrow: 'text-primary-dark', ring: focusRing },
  protect: { bg: 'bg-navy', divide: 'divide-white/[0.14] border-white/[0.14]', title: 'text-white group-hover:text-[#8CC8EE]', desc: 'text-[#C5D2DE]', num: 'text-accent', label: 'text-[#C5D2DE]', icon: 'bg-white/10 text-accent', arrow: 'text-[#8CC8EE]', ring: 'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white' },
} as const

const TILE = {
  design: 'border border-[#D5DEE7] bg-white text-navy',
  systems: 'border border-transparent bg-[#F6F8FA] text-navy',
  protect: 'border border-transparent bg-navy text-white',
} as const

export default async function ServicesPage() {
  const locale = await getLocale()
  const t = await getTranslations('ServicesPage')
  const tHeader = await getTranslations('Header')
  const tAbout = await getTranslations('AboutPage')
  const tTemplate = await getTranslations('ServiceTemplate')
  const tPf = await getTranslations('PortfolioPage')
  const tFaq = await getTranslations('WebDesignPage')
  const serviceName = await getServiceNames()
  // The language chip's Arabic stays off Scheherazade New on English pages, as on /about
  const latinOnly: CSSProperties | undefined = locale === 'en' ? { fontFamily: 'var(--font-poppins-latin), sans-serif' } : undefined

  // Each figure's label is its case page's own stat key; the case is named by its portfolio card
  const caseLabels = new Map<string, { label: string; caseName: string }>()
  for (const s of SERVICES) {
    if (!s.figure) continue
    const tCase = await getTranslations(s.figure.namespace)
    caseLabels.set(s.slug, { label: tCase(s.figure.labelKey), caseName: tPf(`item_${caseBySlug(s.figure.caseSlug).item}_title`) })
  }

  const work = [
    { slug: 'cslo-sudan', card: 'bg-navy text-white', meta: 'text-[#8CC8EE]', num: 'text-[#F0A867]', sub: 'text-[#C5D2DE]', link: 'text-white', ring: BAND.protect.ring },
    { slug: 'ngo-portal', card: 'bg-[#EAF4FB] text-navy', meta: 'text-[#0D5A8A]', num: 'text-primary-dark', sub: 'text-[#4A5868]', link: 'text-[#0D5A8A]', ring: focusRing },
    { slug: 'ecommerce-shop', card: 'bg-[#FBEFE4] text-navy', meta: 'text-accent-strong', num: 'text-accent-strong', sub: 'text-[#4A5868]', link: 'text-accent-strong', ring: focusRing },
  ]
  const workCards = await Promise.all(work.map(async (w) => {
    const c = caseBySlug(w.slug)
    const tCase = await getTranslations(c.namespace)
    return { ...w, href: `/portfolio/${c.slug}`, cat: tPf(`item_${c.item}_cat`), title: tPf(`item_${c.item}_title`), value: c.values[0], label: tCase('stat1Label') }
  }))

  const faqs = [1, 2, 3, 4].map((n) => ({ q: t(`faq${n}Q`), a: t(`faq${n}A`) }))

  const breadcrumbItems = [
    { name: 'Home', url: `${SITE}/` },
    { name: 'Services', url: `${SITE}/services` },
  ]

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      {/* HERO */}
      <section aria-labelledby="services-heading" className="relative overflow-hidden bg-white">
        <NetworkLines className="absolute -bottom-10 -end-24 w-[420px] text-primary opacity-[0.10] lg:-top-12 lg:bottom-auto lg:end-0 lg:w-[560px]" />
        <div className={`${container} relative grid gap-10 pb-14 pt-8 md:pb-20 md:pt-12 lg:grid-cols-[minmax(0,1fr)_440px] lg:items-center lg:gap-16 lg:py-16`}>
          <div>
            <nav aria-label={tTemplate('breadcrumbNav')}>
              <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[14px] text-[#4A5868]">
                <li className="flex items-center gap-2">
                  <Link href="/" className={`rounded !no-underline hover:!underline hover:text-navy ${focusRing}`}>{tPf('breadcrumbHome')}</Link>
                </li>
                <li className="flex items-center gap-2">
                  <span aria-hidden="true">{locale === 'ar' ? '‹' : '›'}</span>
                  <span aria-current="page" className="text-navy">{tHeader('services')}</span>
                </li>
              </ol>
            </nav>
            <h1 id="services-heading" className="mt-6 font-heading !text-[34px] font-bold !leading-[1.12] text-navy md:!text-[44px] lg:!text-[50px] rtl:!leading-[1.35]">
              {t('heroTitle')}
            </h1>
            <p className="mt-5 max-w-[600px] text-[17px] leading-relaxed text-[#4A5868] md:text-[18px]">{t('metaDescription')}</p>
            <ul className="mt-6 flex flex-wrap gap-2">
              <li className="rounded-full bg-[#EAF4FB] px-3 py-1 text-[13px] font-semibold text-[#0D5A8A]">{t('chipCount', { count: SERVICES.length })}</li>
              <li className="rounded-full bg-[#EAF4FB] px-3 py-1 text-[13px] font-semibold text-[#0D5A8A]" style={latinOnly}>{tAbout('chipLanguages')}</li>
              <li className="rounded-full bg-[#EAF4FB] px-3 py-1 text-[13px] font-semibold text-[#0D5A8A]">{tAbout('cardLowConnectivityTitle')}</li>
            </ul>
          </div>

          <nav aria-label={t('categoriesTitle')}>
            <ul className="grid gap-3">
              {FAMILIES.map((f) => {
                const Icon = f.icon
                const dark = f.id === 'protect'
                return (
                  <li key={f.id}>
                    <a
                      href={`#${f.anchor}`}
                      className={`group flex items-center gap-4 rounded-[18px] px-5 py-4 !no-underline transition-shadow hover:shadow-[0_8px_24px_rgba(11,27,43,0.10)] ${TILE[f.id]} ${dark ? BAND.protect.ring : focusRing}`}
                    >
                      <span aria-hidden="true" className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-[12px] ${dark ? 'bg-white/10 text-accent' : f.id === 'systems' ? 'bg-white text-primary' : 'bg-[#EAF4FB] text-primary'}`}>
                        <Icon size={22} strokeWidth={1.75} />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="flex items-baseline justify-between gap-3">
                          <span className="font-heading text-[17px] font-bold">{tHeader(f.headingKey)}</span>
                          <span className={`shrink-0 text-[13px] font-semibold ${dark ? 'text-[#8CC8EE]' : 'text-[#0D5A8A]'}`}>{t('chipCount', { count: f.services.length })}</span>
                        </span>
                        <span className={`mt-1 block text-[13px] leading-snug ${dark ? 'text-[#C5D2DE]' : 'text-[#4A5868]'}`}>
                          {f.services.map((s) => serviceName(s)).join(' · ')}
                        </span>
                      </span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </nav>
        </div>
      </section>

      {/* FAMILY BANDS */}
      {FAMILIES.map((f, i) => (
        <FamilyBand
          key={f.id}
          family={f}
          eyebrow={t('familyEyebrow', { num: String(i + 1).padStart(2, '0'), count: f.services.length })}
          heading={tHeader(f.headingKey)}
          rows={f.services.map((s) => ({ service: s, name: serviceName(s), desc: tHeader(s.descKey), figure: caseLabels.get(s.slug) }))}
        />
      ))}

      {/* SELECTED WORK */}
      <section aria-labelledby="work-heading" className="bg-white py-14 md:py-20">
        <div className={container}>
          <SectionHeader id="work-heading" eyebrow={t('workEyebrow')} title={t('workTitle')} link={{ href: '/portfolio', label: tHeader('allCases') }} />
          <ul className="grid gap-5 md:grid-cols-3">
            {workCards.map((c) => (
              <li key={c.slug} className={`group relative flex flex-col rounded-[24px] p-6 transition-shadow hover:shadow-[0_12px_32px_rgba(11,27,43,0.12)] md:p-8 ${c.card}`}>
                <p className={`text-[13px] font-semibold uppercase tracking-[0.06em] ${c.meta}`}>{c.cat}</p>
                <h3 className="mt-2 font-heading !text-[22px] font-bold !leading-snug">
                  <Link href={c.href} className={`rounded !no-underline group-hover:!underline ${stretched} ${c.ring}`}>{c.title}</Link>
                </h3>
                <p dir="ltr" className={`mt-6 text-start font-heading text-[44px] font-extrabold leading-none rtl:text-end ${c.num}`}><Ltr>{c.value}</Ltr></p>
                <p className={`mt-2 text-[15px] leading-snug ${c.sub}`}>{c.label}</p>
                <p aria-hidden="true" className={`mt-auto pt-6 text-[15px] font-semibold ${c.link}`}>{tTemplate('readCase')}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <HowWeWork />

      <ServiceFaq tone="light" title={t('faqTitle')} items={faqs} viewAllLabel={tFaq('faqViewAll')} />
    </>
  )
}

interface Row {
  service: Service
  name: string
  desc: string
  figure?: { label: string; caseName: string }
}

/** One family: eyebrow, heading and mockup on the start side; a full-width row per service */
function FamilyBand({ family, eyebrow, heading, rows }: { family: Family; eyebrow: string; heading: string; rows: Row[] }) {
  const b = BAND[family.id]
  const dark = family.id === 'protect'
  const headingId = `${family.anchor}-heading`
  return (
    <section id={family.anchor} aria-labelledby={headingId} className={`scroll-mt-16 py-14 md:py-20 lg:scroll-mt-[88px] ${b.bg}`}>
      <div className={`${container} grid gap-10 lg:grid-cols-[340px_minmax(0,1fr)] lg:gap-16`}>
        <div>
          <Eyebrow onDark={dark}>{eyebrow}</Eyebrow>
          <H2 id={headingId} onDark={dark}>{heading}</H2>
          <div aria-hidden="true" className="mt-8 max-w-[340px]">
            <FamilyVisual family={family.id} />
          </div>
        </div>

        <ul className={`divide-y border-y ${b.divide} lg:self-start`}>
          {rows.map(({ service, name, desc, figure }) => {
            const Icon = service.icon
            return (
              <li key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  className={`group grid grid-cols-[44px_minmax(0,1fr)_20px] items-center gap-x-4 gap-y-2 rounded py-6 !no-underline [grid-template-areas:'icon_title_arrow'_'desc_desc_desc'_'fig_fig_fig'] lg:grid-cols-[44px_minmax(0,190px)_minmax(0,1fr)_minmax(0,190px)_20px] lg:gap-x-6 lg:[grid-template-areas:'icon_title_desc_fig_arrow'] ${b.ring}`}
                >
                  <span aria-hidden="true" className={`flex h-11 w-11 items-center justify-center rounded-[12px] [grid-area:icon] ${b.icon}`}>
                    <Icon size={22} strokeWidth={1.75} />
                  </span>
                  <h3 className={`font-heading !text-[18px] font-semibold !leading-snug transition-colors [grid-area:title] ${b.title}`}>{name}</h3>
                  <p className={`text-[15px] leading-snug [grid-area:desc] ${b.desc}`}>{desc}</p>
                  {figure && service.figure && (
                    <p className="mt-1 [grid-area:fig] lg:mt-0 lg:text-end">
                      <span dir="ltr" className={`block text-start font-heading text-[28px] font-extrabold leading-none lg:text-end rtl:text-end lg:rtl:text-start ${b.num}`}><Ltr>{service.figure.value}</Ltr></span>
                      <span className={`mt-1.5 block text-[14px] leading-snug ${b.label}`}>{figure.label}</span>
                      <span className={`mt-0.5 block text-[13px] leading-snug ${b.label}`}>{figure.caseName}</span>
                    </p>
                  )}
                  <ArrowIcon className={`justify-self-end [grid-area:arrow] ${b.arrow}`} />
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
