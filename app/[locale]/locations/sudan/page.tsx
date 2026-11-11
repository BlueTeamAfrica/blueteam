import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import Image from 'next/image'
import { Link } from '@/i18n/navigation'
import { getTranslations } from 'next-intl/server'
import { buildAlternates, withSocialDefaults } from '@/lib/metadata-helpers'
import { getBilingualPost } from '@/lib/bilingual-blog'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import { container, focusRing, stretched, Eyebrow, H2, ArrowIcon, BrowserFrame } from '@/components/home/shared'
import { Ltr } from '@/components/Ltr'
import ServiceFaq from '@/components/service/ServiceFaq'
import { caseBySlug } from '@/components/case-study/cases'
import { SudanFlag } from '@/components/location/SudanFlag'
import SudanHeroVisual from '@/components/location/SudanHeroVisual'

// /locations/sudan: for NGOs and media working on Sudan. Hero → NGO tiles with the humanitarian
// ERP case and the field-data blog post → media websites (SudanFacts) → diaspora → conditions
// (navy) → FAQ. No in-page CTA: the footer's CTA band follows.

const SITE = 'https://www.blueteamafrica.com'
const CASE_SLUG = 'cslo-sudan'
const BLOG_SLUG = 'field-data-app-dashboard-sudan'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'LocationsSudanPage' })
  // OpenGraph/Twitter text stays English on both locales (project convention)
  const tEn = await getTranslations({ locale: 'en', namespace: 'LocationsSudanPage' })
  const alternates = buildAlternates('/locations/sudan', locale)
  return withSocialDefaults({
    title: t('metaTitle'),
    description: t('metaDescription'),
    robots: 'index, follow',
    alternates,
    keywords: [
      'technology solutions Sudan',
      'digital systems Sudan',
      'NGO technology Sudan',
      'humanitarian technology Sudan',
      'Sudanese organizations tech',
      'secure systems Sudan',
      'diaspora Sudan technology',
    ],
    openGraph: {
      title: tEn('metaTitle'),
      description: tEn('metaDescription'),
      url: alternates.canonical,
      type: 'website',
    },
  })
}

export async function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'ar' }]
}

/** Stroke icons for the NGO tiles (24px grid) */
const ICONS: Record<string, ReactNode> = {
  field: <><rect x="6" y="2" width="12" height="20" rx="2" /><path d="M10 18h4" /><path d="m9 8 2 2 4-4" /></>,
  records: <><circle cx="9" cy="8" r="3.5" /><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" /><rect x="15" y="9" width="7" height="8" rx="1.5" /></>,
  donor: <><path d="M4 20V10" /><path d="M10 20V4" /><path d="M16 20v-7" /><path d="M22 20H2" /></>,
  erp: <><rect x="3" y="3" width="8" height="8" rx="1.5" /><rect x="13" y="3" width="8" height="8" rx="1.5" /><rect x="3" y="13" width="8" height="8" rx="1.5" /><rect x="13" y="13" width="8" height="8" rx="1.5" /></>,
  hosting: <><path d="M12 2 20 6v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6Z" /><path d="M12 8v4l2.5 2" /></>,
  training: <><path d="m2 8 10-5 10 5-10 5Z" /><path d="M6 10.5V16c0 1.7 2.7 3 6 3s6-1.3 6-3v-5.5" /></>,
}

function TileIcon({ name, onDark = false }: { name: string; onDark?: boolean }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke={onDark ? '#8CC8EE' : '#1C83C5'} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-10 w-10">
      {ICONS[name]}
    </svg>
  )
}

export default async function SudanLocationPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const t = await getTranslations('LocationsSudanPage')
  const tEn = await getTranslations({ locale: 'en', namespace: 'LocationsSudanPage' })
  const tAbout = await getTranslations('AboutPage')
  const tHeader = await getTranslations('Header')
  const tTemplate = await getTranslations('ServiceTemplate')
  const caseStudy = caseBySlug(CASE_SLUG)
  const tCase = await getTranslations(caseStudy.namespace)
  const post = getBilingualPost(BLOG_SLUG, locale)!
  const ar = locale === 'ar'
  // Arabic on the English page stays off Scheherazade New (87 KB), as on /about
  const latinOnly = ar ? undefined : { fontFamily: 'var(--font-poppins-latin), sans-serif' }

  // Service schema stays English on both locales (project convention)
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Technology services for Sudanese organisations',
    description: tEn('metaDescription'),
    serviceType: ['Web development', 'ERP systems', 'Mobile app development', 'Cybersecurity', 'Cloud hosting'],
    areaServed: { '@type': 'Country', name: 'Sudan' },
    provider: { '@type': 'Organization', name: 'Blue Team Africa', url: SITE },
  }

  const tiles = [
    { icon: 'field', title: t('ngoFieldTitle'), body: t('ngoFieldBody') },
    { icon: 'records', title: t('ngoRecordsTitle'), body: t('ngoRecordsBody') },
    { icon: 'donor', title: t('ngoDonorTitle'), body: t('ngoDonorBody') },
    { icon: 'erp', title: t('ngoErpTitle'), body: t('ngoErpBody') },
    { icon: 'hosting', title: t('ngoHostingTitle'), body: t('ngoHostingBody'), dark: true },
    { icon: 'training', title: t('ngoTrainingTitle'), body: t('ngoTrainingBody') },
  ]
  const chip = 'rounded-full border px-3.5 py-1.5 text-[14px] font-semibold'
  const textLink = `inline-flex min-h-[44px] items-center gap-1.5 rounded font-semibold text-[#0D5A8A] !no-underline hover:!underline ${focusRing}`

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <BreadcrumbSchema items={[
        { name: t('breadcrumbHome'), url: ar ? `${SITE}/ar` : `${SITE}/` },
        { name: t('breadcrumbSudan'), url: `${SITE}${ar ? '/ar' : ''}/locations/sudan` },
      ]} />

      {/* Hero */}
      <section aria-labelledby="sudan-heading" className="bg-[#F6F8FA]">
        <div className={`${container} grid gap-10 pb-14 pt-8 md:pb-20 md:pt-12 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-14 lg:py-16`}>
          <div>
            <nav aria-label={tTemplate('breadcrumbNav')}>
              <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[14px] text-[#4A5868]">
                <li>
                  <Link href="/" className={`rounded !no-underline hover:!underline hover:text-navy ${focusRing}`}>{t('breadcrumbHome')}</Link>
                </li>
                <li className="flex items-center gap-2">
                  <span aria-hidden="true">{ar ? '‹' : '›'}</span>
                  <span>{t('breadcrumbLocations')}</span>
                </li>
                <li className="flex items-center gap-2">
                  <span aria-hidden="true">{ar ? '‹' : '›'}</span>
                  <span aria-current="page" className="font-semibold text-navy">{t('breadcrumbSudan')}</span>
                </li>
              </ol>
            </nav>

            <div className="mt-6 flex items-center gap-3">
              <SudanFlag className="h-[22px] w-[44px]" />
              <Eyebrow>{t('breadcrumbSudan')}</Eyebrow>
            </div>
            <h1 id="sudan-heading" className="mt-4 font-heading !text-[34px] font-bold !leading-[1.12] text-navy md:!text-[44px] lg:!text-[52px] rtl:!leading-[1.35]">
              {t('heroTitle')}
            </h1>
            <p className="mt-5 max-w-[600px] text-[17px] leading-relaxed text-[#3E4C5C] md:text-[19px]">{t('heroSubline')}</p>
            <ul className="mt-7 flex flex-wrap gap-2.5">
              <li className={`${chip} border-[#D5DEE7] bg-white text-navy`} style={latinOnly}>{tAbout('chipLanguages')}</li>
              <li className={`${chip} border-[#D5DEE7] bg-white text-navy`}>{tAbout('chipOffline')}</li>
              <li className={`${chip} border-[#F0C9A3] bg-[#FBEFE4] text-accent-strong`}>{t('chipEmergency')}</li>
            </ul>
          </div>
          <SudanHeroVisual />
        </div>
      </section>

      {/* For NGOs */}
      <section aria-labelledby="ngo-heading" className="bg-white py-16 md:py-[88px]">
        <div className={container}>
          <Eyebrow>{t('ngoEyebrow')}</Eyebrow>
          <H2 id="ngo-heading" className="max-w-3xl">{t('ngoTitle')}</H2>

          <ul className="mt-10 grid gap-4 md:grid-cols-2 md:gap-5 lg:grid-cols-3">
            {tiles.map((tile) => (
              <li key={tile.icon} className={`rounded-[22px] border p-6 md:p-7 ${tile.dark ? 'border-navy bg-navy text-white' : 'border-[#E3E9EF] bg-white'}`}>
                <TileIcon name={tile.icon} onDark={tile.dark} />
                <h3 className={`mt-4 font-heading !text-[19px] font-semibold !leading-snug md:!text-[20px] ${tile.dark ? 'text-white' : 'text-navy'}`}>{tile.title}</h3>
                <p className={`mt-2 text-[15px] leading-relaxed ${tile.dark ? 'text-[#C5D2DE]' : 'text-[#4A5868]'}`}>{tile.body}</p>
              </li>
            ))}
          </ul>

          <div className="mt-4 grid gap-4 md:mt-5 md:gap-5 lg:grid-cols-[1.4fr_1fr]">
            {/* Humanitarian ERP case: title, figures and labels from the case's own keys */}
            <div className="group relative grid gap-6 rounded-[22px] bg-primary-dark p-6 text-white md:p-8 xl:grid-cols-[1fr_auto] xl:items-center">
              <div>
                <p className="inline-block rounded-full bg-white/10 px-3 py-1 text-[13px] font-semibold">{tHeader('card1Tag')}</p>
                <h3 id="sudan-case-title" className="mt-3 font-heading !text-[21px] font-bold !leading-snug text-white md:!text-[22px]">{tCase('pageTitle')}</h3>
                <Link
                  href={`/portfolio/${caseStudy.slug}`}
                  aria-describedby="sudan-case-title"
                  className={`mt-4 inline-block rounded font-semibold text-white !no-underline group-hover:!underline ${stretched} focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white`}
                >
                  {tTemplate('readCase')}
                </Link>
              </div>
              <ul className="grid grid-cols-3 gap-4 xl:flex xl:gap-6">
                {caseStudy.values.map((value, i) => (
                  <li key={value + i} className="xl:max-w-[120px]">
                    <p dir="ltr" className="text-start font-heading text-[28px] font-bold leading-none md:text-[36px] rtl:text-end"><Ltr>{value}</Ltr></p>
                    <p className="mt-2 text-[13px] leading-snug text-white">{tCase(`stat${i + 1}Label`)}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Field-data blog post (/ar/blog/... on Arabic) */}
            <div className="group relative flex flex-col justify-between rounded-[22px] bg-[#EAF4FB] p-6 md:p-8">
              <div>
                <p className="text-[13px] font-semibold uppercase tracking-[0.06em] text-[#0D5A8A]">{tHeader('blog')}</p>
                <h3 id="sudan-post-title" className="mt-3 font-heading !text-[19px] font-bold !leading-snug text-navy md:!text-[20px]">{post.title}</h3>
              </div>
              <Link
                href={`/blog/${BLOG_SLUG}`}
                aria-describedby="sudan-post-title"
                className={`mt-5 inline-block self-start rounded font-semibold text-[#0D5A8A] !no-underline group-hover:!underline ${stretched} ${focusRing}`}
              >
                {tHeader('readArticle')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* For media houses */}
      <section aria-labelledby="media-heading" className="bg-[#F6F8FA] py-16 md:py-[88px]">
        <div className={`${container} grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-center lg:gap-14`}>
          <div>
            <p className="text-[14px] font-semibold uppercase tracking-[0.08em] text-accent-strong">{t('mediaEyebrow')}</p>
            <H2 id="media-heading">{t('mediaTitle')}</H2>
            <p className="mt-5 text-[17px] leading-relaxed text-[#3E4C5C]">{t('mediaBody')}</p>
            <ul className="mt-5 flex flex-wrap gap-2.5">
              <li className={`${chip} border-[#D5DEE7] bg-white text-[13px] text-navy`}>{t('mediaChipRtl')}</li>
              <li className={`${chip} border-[#D5DEE7] bg-white text-[13px] text-navy`}>{t('mediaChipSeo')}</li>
            </ul>
            <div className="mt-5 flex flex-col items-start">
              <a href="https://sudanfacts.org" target="_blank" rel="noopener noreferrer" className={textLink}>
                {t('mediaVisit')}
                <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className="h-4 w-4 rtl:-scale-x-100">
                  <path d="M5 11 11 5M6 5h5v5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <Link href="/services/web-design" className={textLink}>
                {t('mediaWebDesign')} <ArrowIcon />
              </Link>
            </div>
          </div>

          {/* The homepage Selected-work SudanFacts screenshots, overlapped */}
          <div className="pb-2">
            <BrowserFrame className="w-full lg:w-[86%]">
              <div className="relative aspect-[16/9]">
                <Image
                  src="/images/work/sudanfacts-en.webp"
                  alt={t('mediaShotEnAlt')}
                  fill
                  sizes="(min-width: 1280px) 600px, (min-width: 1024px) 50vw, 92vw"
                  className="object-cover object-top"
                />
              </div>
            </BrowserFrame>
            <BrowserFrame className="relative ms-auto -mt-[10%] w-[80%] lg:-mt-[22%] lg:w-[56%]">
              <div className="relative aspect-[16/10]">
                <Image
                  src="/images/work/sudanfacts-ar.webp"
                  alt={t('mediaShotArAlt')}
                  fill
                  sizes="(min-width: 1280px) 400px, (min-width: 1024px) 33vw, 74vw"
                  className="object-cover object-top"
                />
              </div>
            </BrowserFrame>
          </div>
        </div>
      </section>

      {/* Sudanese organisations abroad */}
      <section aria-labelledby="diaspora-heading" className="bg-white py-16 md:py-20">
        <div className={`${container} grid gap-6 lg:grid-cols-2 lg:items-center lg:gap-14`}>
          <div>
            <Eyebrow>{t('diasporaEyebrow')}</Eyebrow>
            <H2 id="diaspora-heading">{t('diasporaTitle')}</H2>
          </div>
          <p className="text-[17px] leading-relaxed text-[#3E4C5C]">{t('diasporaBody')}</p>
        </div>
      </section>

      {/* Built for Sudan's conditions */}
      <section aria-labelledby="conditions-heading" className="bg-navy py-16 text-white md:py-[88px]">
        <div className={container}>
          <p className="text-[14px] font-semibold uppercase tracking-[0.08em] text-[#F0A867]">{t('conditionsEyebrow')}</p>
          <H2 id="conditions-heading" onDark className="max-w-3xl">{t('realitiesTitle')}</H2>
          <p className="mt-5 max-w-[820px] text-[17px] leading-relaxed text-[#C5D2DE]">{t('realitiesPara')}</p>
          <ul className="mt-9 grid grid-cols-2 gap-3 md:gap-4 lg:grid-cols-4">
            {(['condLowTitle', 'condOfflineTitle', 'condRtlTitle', 'condSecurityTitle'] as const).map((k) => (
              <li key={k} className="rounded-[18px] bg-white/[0.06] p-4 md:p-6">
                <h3 className="font-heading !text-[16px] font-bold !leading-snug text-white md:!text-[18px]">{t(k)}</h3>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ServiceFaq
        title={t('faqTitle')}
        items={(['faq1', 'faq2', 'faq3', 'faq5', 'faqData'] as const).map((k) => ({ q: t(`${k}Q`), a: t(`${k}A`) }))}
      />
    </>
  )
}
