import Image from 'next/image'
import { getTranslations } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import { container, sectionPad, focusRing, stretched, SectionHeader, BrowserFrame, LeadingFigure } from './shared'

/** CSS phone showing the offline field app (decorative; app UI stays in English) */
function PhoneMock() {
  return (
    <div aria-hidden="true" lang="en" dir="ltr" className="mx-auto mt-8 w-[210px] rounded-[30px] border-[7px] border-[#1E3346] bg-white p-3 text-start shadow-[0_16px_40px_rgba(0,0,0,0.35)]">
      <div className="mx-auto mb-3 h-1.5 w-14 rounded-full bg-[#D5DEE7]" />
      <p className="text-[13px] font-bold text-[#0B1B2B]">New record</p>
      <p className="mt-0.5 text-[11px] text-[#4A5868]">Distribution · Site 22</p>
      <div className="mt-3 space-y-2">
        {['w-full', 'w-4/5', 'w-full', 'w-3/5'].map((w, i) => (
          <div key={i} className="rounded-md border border-[#E3E9EF] px-2 py-1.5">
            <span className="block h-1.5 w-10 rounded-full bg-[#D5DEE7]" />
            <span className={`mt-1.5 block h-2 ${w} rounded-full bg-[#EAF4FB]`} />
          </div>
        ))}
      </div>
      <div className="mt-3 flex items-center gap-1.5 rounded-lg bg-[#FBEFE4] px-2 py-1.5 text-[10.5px] font-semibold text-[#B5621D]">
        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#D77828]" />
        Saved offline · will sync
      </div>
    </div>
  )
}

function Tag({ children, onDark = false }: { children: string; onDark?: boolean }) {
  return <p className={`text-[13px] font-semibold uppercase tracking-[0.06em] ${onDark ? 'text-[#8CC8EE]' : 'text-[#0D5A8A]'}`}>{children}</p>
}

export default async function SelectedWork() {
  const t = await getTranslations('HomePage.selectedWork')
  const tHeader = await getTranslations('Header')
  const tile = 'reveal group relative rounded-[24px] p-6 md:p-8 transition-shadow hover:shadow-[0_12px_32px_rgba(11,27,43,0.10)]'
  const h3 = 'mt-2 font-heading !text-[22px] font-bold !leading-snug md:!text-[24px]'

  return (
    <section aria-labelledby="work-heading" className={`bg-[#F6F8FA] ${sectionPad}`}>
      <div className={container}>
        <SectionHeader id="work-heading" eyebrow={t('eyebrow')} title={t('title')} link={{ href: '/portfolio', label: tHeader('allCases') }} />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {/* SudanFacts: span 2 */}
          <div className={`${tile} border border-[#E3E9EF] bg-white md:col-span-2`}>
            <Tag>{t('sfTag')}</Tag>
            <h3 className={`${h3} text-[#0B1B2B]`}>{t('sfTitle')}</h3>
            <p className="mt-2 text-[16px] leading-relaxed text-[#4A5868]">{t('sfDesc')}</p>
            <div className="mt-6 grid grid-cols-2 gap-3 md:gap-5">
              {(['en', 'ar'] as const).map((l) => (
                <BrowserFrame key={l}>
                  <div className="relative aspect-[16/10]">
                    <Image
                      src={`/images/work/sudanfacts-${l}.webp`}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 400px, (min-width: 768px) 45vw, 45vw"
                      className="object-cover object-top"
                    />
                  </div>
                </BrowserFrame>
              ))}
            </div>
            <a
              href="https://sudanfacts.org"
              target="_blank"
              rel="noopener noreferrer"
              className={`mt-6 inline-block rounded text-[16px] font-semibold text-[#0D5A8A] !no-underline group-hover:!underline ${stretched} ${focusRing}`}
            >
              {t('sfLink')}
            </a>
          </div>

          {/* Humanitarian: tall navy, col 3 rows 1–2 */}
          <div className={`${tile} flex flex-col bg-[#0B1B2B] text-white lg:col-start-3 lg:row-span-2 lg:row-start-1`}>
            <Tag onDark>{tHeader('card1Tag')}</Tag>
            <h3 className={h3}>
              <Link href="/portfolio/cslo-sudan" className={`rounded text-white !no-underline group-hover:!underline ${stretched} ${focusRing}`}>{t('csloTitle')}</Link>
            </h3>
            <p className="mt-2 text-[16px] leading-relaxed text-white/75">{t('csloDesc')}</p>
            <div className="mt-6 grid grid-cols-2 gap-4">
              {([['csloStat1', 'csloStat1Label'], ['csloStat2', 'csloStat2Label']] as const).map(([v, l]) => (
                <p key={v}>
                  <span dir="ltr" className="block font-heading text-[36px] font-bold leading-none text-[#F0A867] rtl:text-end">{t(v)}</span>
                  <span className="mt-1.5 block text-[14px] text-white/75">{t(l)}</span>
                </p>
              ))}
            </div>
            <div className="mt-auto">
              <PhoneMock />
            </div>
          </div>

          {/* NGO portal */}
          <div className={`${tile} border border-[#E3E9EF] bg-white`}>
            <Tag>{tHeader('card2Tag')}</Tag>
            <h3 className={`${h3} text-[#0B1B2B]`}>
              <Link href="/portfolio/ngo-portal" className={`rounded !no-underline group-hover:text-[#1C83C5] ${stretched} ${focusRing}`}>{tHeader('card2Title')}</Link>
            </h3>
            <p className="mt-2 text-[16px] leading-relaxed text-[#4A5868]">{t('ngoDesc')}</p>
            <p className="mt-5 font-heading text-[20px] font-bold text-[#1C83C5]"><LeadingFigure text={t('ngoStat')} /></p>
          </div>

          {/* E-commerce */}
          <div className={`${tile} bg-[#FBEFE4]`}>
            <Tag>{tHeader('card3Tag')}</Tag>
            <h3 className={`${h3} text-[#0B1B2B]`}>
              <Link href="/portfolio/ecommerce-shop" className={`rounded !no-underline group-hover:text-[#B5621D] ${stretched} ${focusRing}`}>{t('ecomTitle')}</Link>
            </h3>
            <p className="mt-2 text-[16px] leading-relaxed text-[#4A5868]">{t('ecomDesc')}</p>
            <p className="mt-5 font-heading text-[20px] font-bold text-[#B5621D]"><LeadingFigure text={t('ecomStat')} /></p>
          </div>
        </div>
      </div>
    </section>
  )
}
