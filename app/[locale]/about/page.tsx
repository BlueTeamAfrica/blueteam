import type { ReactNode } from 'react'
import { getLocale, getTranslations } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import { buildAlternates } from '@/lib/metadata-helpers'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import { Flag } from '@/components/Flag'
import { Ltr } from '@/components/Ltr'
import { container, focusRing, stretched, Eyebrow, H2, ArrowIcon } from '@/components/home/shared'
import WhereWeWork from '@/components/home/WhereWeWork'
import { caseBySlug } from '@/components/case-study/cases'
import { inlineLink } from '@/components/service/styles'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'AboutPage' })
  // OpenGraph/Twitter text stays English on both locales (project convention)
  const tEn = await getTranslations({ locale: 'en', namespace: 'AboutPage' })
  return {
    title: t('metaTitle'),
    description: t('metaDescription'),
    alternates: buildAlternates('/about', locale),
    openGraph: {
      title: tEn('metaTitle'),
      description: tEn('metaDescription'),
    },
  }
}

const SITE = 'https://www.blueteamafrica.com'
// Owner-approved facts
const FOUNDED = '2023'
const COUNTRIES = [
  { code: 'sd', key: 'sudan' },
  { code: 'ug', key: 'uganda' },
  { code: 'rw', key: 'rwanda' },
  { code: 'ke', key: 'kenya' },
] as const

// On the navy card: white focus ring
const cardLink = `rounded !no-underline ${stretched} focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white`

export default async function AboutPage() {
  const t = await getTranslations('AboutPage')
  const tHeader = await getTranslations('Header')
  const tWhere = await getTranslations('HomePage.whereWeWork')
  const tSecure = await getTranslations('HomePage.secureByDesign')
  const tHow = await getTranslations('HomePage.howWeWork')
  const tPf = await getTranslations('PortfolioPage')
  const tTemplate = await getTranslations('ServiceTemplate')
  const locale = await getLocale()
  // The Arabic in the language chip stays off Scheherazade New on English pages
  const latinOnly = locale === 'en' ? { fontFamily: 'var(--font-poppins-latin), sans-serif' } : undefined

  const cslo = caseBySlug('cslo-sudan')
  const tCase = await getTranslations(cslo.namespace)
  const csloFigures = cslo.values.map((value, i) => ({ value, label: tCase(`stat${i + 1}Label`) }))

  const serviceLink = (href: string, label: string) => (
    <li key={href}><Link href={href} className={`inline-flex items-center gap-1.5 rounded text-[16px] font-semibold text-[#0D5A8A] !no-underline hover:!underline ${focusRing}`}>{label} <ArrowIcon /></Link></li>
  )
  const groups: { title: string; links: ReactNode[] }[] = [
    { title: t('digitalServicesH3'), links: [serviceLink('/services/web-design', t('gridWebDesign')), serviceLink('/services/website-development', t('gridWebDev')), serviceLink('/services/ecommerce', t('gridEcommerce'))] },
    { title: t('businessSystemsH3'), links: [serviceLink('/services/erp', t('gridERP')), serviceLink('/services/crm', t('gridCRM')), serviceLink('/services/mobile-apps', t('gridMobile'))] },
    { title: t('securityHostingH3'), links: [serviceLink('/services/cybersecurity', t('gridCybersecurity')), serviceLink('/services/hosting', t('gridHosting'))] },
  ]
  const howCards = [
    { title: tSecure('card1Title'), body: tSecure('card1Body') },
    { title: t('cardLowConnectivityTitle'), body: t('sudanPara3') },
    { title: t('cardBilingualTitle'), body: t('cardBilingualBody') },
  ]

  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: `${SITE}/` },
        { name: 'About Us', url: `${SITE}/about` },
      ]} />

      {/* Hero */}
      <section aria-labelledby="about-heading" className="bg-white">
        <div className={`${container} grid gap-10 pb-14 pt-8 md:pb-20 md:pt-12 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:items-center lg:gap-14`}>
          <div>
            <nav aria-label={tTemplate('breadcrumbNav')}>
              <ol className="flex flex-wrap items-center gap-2 text-[14px] text-[#4A5868]">
                <li><Link href="/" className={`rounded !no-underline hover:!underline hover:text-navy ${focusRing}`}>{t('breadcrumbHome')}</Link></li>
                <li aria-hidden="true">{locale === 'ar' ? '‹' : '›'}</li>
                <li aria-current="page" className="text-navy">{t('breadcrumbAbout')}</li>
              </ol>
            </nav>
            <div className="mt-6"><Eyebrow>{tHeader('company')}</Eyebrow></div>
            <h1 id="about-heading" className="mt-3 font-heading !text-[38px] font-bold !leading-[1.1] text-navy md:!text-[52px] rtl:!leading-[1.35]">{t('title')}</h1>
            <p className="mt-5 max-w-[640px] text-[17px] leading-relaxed text-[#4A5868] md:text-[18px]">{t('whoWeArePara1Intro')}</p>
          </div>

          <div className="rounded-[28px] bg-[#0A1A2B] p-7 text-white md:p-9">
            <dl className="grid grid-cols-2 gap-6">
              <div>
                <dt className="text-[14px] font-semibold uppercase tracking-[0.08em] text-[#8CC8EE]">{t('heroFoundedLabel')}</dt>
                <dd className="mt-1 font-heading text-[44px] font-extrabold leading-none"><Ltr>{FOUNDED}</Ltr></dd>
              </div>
              <div>
                <dt className="text-[14px] font-semibold uppercase tracking-[0.08em] text-[#8CC8EE]">{t('heroCountriesLabel')}</dt>
                <dd className="mt-1 font-heading text-[44px] font-extrabold leading-none"><Ltr>{COUNTRIES.length}</Ltr></dd>
              </div>
            </dl>
            <ul className="mt-7 grid grid-cols-2 gap-x-4 gap-y-3 border-t border-white/[0.14] pt-6">
              {COUNTRIES.map((c) => (
                <li key={c.code} className="flex items-center gap-2.5 text-[16px] font-semibold">
                  <Flag code={c.code} />
                  {tWhere(`${c.key}.name`)}
                </li>
              ))}
            </ul>
            <ul aria-hidden="true" className="mt-7 flex flex-wrap gap-2">
              {[tSecure('card1Title'), t('chipOffline')].map((c) => (
                <li key={c} className="rounded-full border border-white/[0.16] bg-white/[0.08] px-3 py-1 text-[13px] font-semibold">{c}</li>
              ))}
              <li className="rounded-full border border-white/[0.16] bg-white/[0.08] px-3 py-1 text-[13px] font-semibold" style={latinOnly}>{t('chipLanguages')}</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Our story: paragraph 3 is the quote, so it is not printed again below it */}
      <section aria-labelledby="story-heading" className="bg-white pb-14 md:pb-20">
        <div className={`${container} grid gap-8 border-t border-[#E3E9EF] pt-14 md:pt-20 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16`}>
          <div>
            <Eyebrow>{t('storyLabel')}</Eyebrow>
            <H2 id="story-heading">{t('whoWeAreH2')}</H2>
          </div>
          <div>
            <blockquote className="border-s-4 border-accent ps-6 font-heading text-[22px] font-semibold leading-snug text-navy md:text-[26px]">
              {t('whoWeArePara3')}
            </blockquote>
            <p className="mt-8 text-[17px] leading-relaxed text-[#4A5868]">{t('whoWeArePara2')}</p>
          </div>
        </div>
      </section>

      {/* Humanitarian work */}
      <section aria-labelledby="sudan-heading" className="bg-[#F6F8FA] py-14 md:py-20">
        <div className={`${container} grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14`}>
          <div>
            <H2 id="sudan-heading" className="!mt-0">{t('sudanH2')}</H2>
            <p className="mt-6 text-[17px] leading-relaxed text-[#4A5868]">
              {t('sudanPara1Intro')}{' '}
              <Link href="/services/erp" className={inlineLink}>{t('sudanLinkERP')}</Link>,{' '}
              <strong className="text-navy">{t('sudanDonor')}</strong>{t('listAndSeparator')}{' '}
              <Link href="/services/mobile-apps" className={inlineLink}>{t('sudanLinkMobile')}</Link>.
            </p>
            <Link href="/locations/sudan" className={`mt-6 inline-block rounded text-[16px] font-semibold text-[#0D5A8A] !no-underline hover:!underline ${focusRing}`}>
              {t('sudanLink')}
            </Link>
          </div>

          {/* The CSLO case study: the whole card is one link, named by its text */}
          <article className="group relative flex gap-6 rounded-[24px] bg-[#0A1A2B] p-7 text-white md:p-9">
            <div className="flex-1">
              <p className="text-[13px] font-semibold uppercase tracking-[0.08em] text-[#8CC8EE]">{tPf(`item_${cslo.item}_cat`)}</p>
              <h3 className="mt-3 font-heading !text-[24px] font-bold !leading-snug text-white">
                <Link href={`/portfolio/${cslo.slug}`} className={`${cardLink} group-hover:underline`}>{tPf(`item_${cslo.item}_title`)}</Link>
              </h3>
              <ul className="mt-6 space-y-4">
                {csloFigures.map((f) => (
                  <li key={f.label}>
                    <p dir="ltr" className="text-start font-heading text-[32px] font-extrabold leading-none rtl:text-end"><Ltr>{f.value}</Ltr></p>
                    <p className="mt-1 text-[14px] font-semibold text-[#C5D2DE]">{f.label}</p>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-[15px] font-semibold text-[#8CC8EE]">{tTemplate('readCase')}</p>
            </div>
            {/* Decorative phone */}
            <div aria-hidden="true" className="hidden w-[120px] shrink-0 self-center rounded-[20px] border-[5px] border-white/20 bg-white p-2 sm:block">
              <div className="rounded-md bg-primary-strong px-2 py-2"><span className="block h-1.5 w-12 rounded-full bg-white/80" /><span className="mt-1 block h-1 w-16 rounded-full bg-white/50" /></div>
              {[0, 1, 2].map((i) => <span key={i} className="mt-2 block h-5 rounded border border-[#E3E9EF] bg-[#F6F8FA]" />)}
              <span className="mt-2 block h-3 rounded-full bg-[#E3F6EA]" />
            </div>
          </article>
        </div>
      </section>

      {/* How we work */}
      <section aria-labelledby="how-heading" className="bg-white py-14 md:py-20">
        <div className={container}>
          <H2 id="how-heading" className="!mt-0 mb-10 md:mb-12">{tHow('eyebrow')}</H2>
          <ul className="grid gap-5 md:grid-cols-3">
            {howCards.map((c, i) => (
              <li key={c.title} className={`rounded-[24px] p-7 ${i === 1 ? 'bg-[#0A1A2B] text-white' : i === 2 ? 'bg-[#FBEFE4]' : 'bg-[#F4F8FB]'}`}>
                <h3 className={`font-heading !text-[21px] font-bold !leading-snug ${i === 1 ? 'text-white' : 'text-navy'}`}>{c.title}</h3>
                <p className={`mt-3 text-[16px] leading-relaxed ${i === 1 ? 'text-[#C5D2DE]' : 'text-[#4A5868]'}`}>{c.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* What we specialize in */}
      <section aria-labelledby="specialize-heading" className="bg-[#F6F8FA] py-14 md:py-20">
        <div className={container}>
          <H2 id="specialize-heading" className="!mt-0 mb-10 md:mb-12">{t('specializeH2')}</H2>
          <div className="grid gap-5 md:grid-cols-3">
            {groups.map((g) => (
              <div key={g.title} className="rounded-[24px] border border-[#E3E9EF] bg-white p-7">
                <h3 className="font-heading !text-[20px] font-bold text-navy">{g.title}</h3>
                <ul className="mt-4 space-y-3">{g.links}</ul>
              </div>
            ))}
          </div>
          <p className="mt-10 max-w-3xl text-[16px] leading-relaxed text-[#4A5868]">
            {t.rich('rwandaPara', {
              webDesignLink: (chunks) => <Link href="/web-design-rwanda" className={inlineLink}>{chunks}</Link>,
              webDevLink: (chunks) => <Link href="/web-development-rwanda" className={inlineLink}>{chunks}</Link>,
            })}
          </p>
        </div>
      </section>

      {/* Where we work: the homepage section, with when and how widely */}
      <WhereWeWork note={t('whereNote')} tone="white" />
    </>
  )
}
