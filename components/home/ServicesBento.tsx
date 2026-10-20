import { getTranslations } from 'next-intl/server'
import { Smartphone, BarChart3, ShieldCheck, Server, type LucideIcon } from 'lucide-react'
import { Link } from '@/i18n/navigation'
import { container, sectionPad, focusRing, stretched, SectionHeader, BrowserFrame, CheckIcon } from './shared'

/** CSS-only page mock inside the web tile's browser frame */
function MockSite() {
  return (
    <BrowserFrame className="mt-8 max-w-[440px]" >
      <div className="space-y-3 p-4" aria-hidden="true">
        <div className="flex items-center justify-between">
          <span className="h-2.5 w-16 rounded-full bg-primary" />
          <span className="flex gap-1.5"><span className="h-2 w-8 rounded-full bg-[#D5DEE7]" /><span className="h-2 w-8 rounded-full bg-[#D5DEE7]" /><span className="h-2 w-8 rounded-full bg-[#D5DEE7]" /></span>
        </div>
        <div className="rounded-lg bg-[#EAF4FB] p-4">
          <span className="block h-3 w-3/4 rounded-full bg-navy/80" />
          <span className="mt-2 block h-2 w-1/2 rounded-full bg-[#4A5868]/40" />
          <span className="mt-4 inline-block h-5 w-20 rounded-md bg-accent" />
        </div>
        <div className="grid grid-cols-3 gap-2">
          {[0, 1, 2].map((i) => (
            <span key={i} className="block rounded-md border border-[#E3E9EF] p-2">
              <span className="block h-6 rounded bg-[#F4F8FB]" />
              <span className="mt-2 block h-1.5 w-3/4 rounded-full bg-[#D5DEE7]" />
            </span>
          ))}
        </div>
      </div>
    </BrowserFrame>
  )
}

function SmallTile({ href, icon: Icon, title, desc, tone = 'light', wide = false }: {
  href: string; icon: LucideIcon; title: string; desc: string; tone?: 'light' | 'peach'; wide?: boolean
}) {
  const peach = tone === 'peach'
  return (
    <div className={`reveal group relative flex flex-col rounded-[24px] p-7 transition-shadow hover:shadow-[0_12px_32px_rgba(11,27,43,0.10)] ${peach ? 'bg-[#FBEFE4]' : 'bg-[#F4F8FB]'} ${wide ? 'md:col-span-2 md:flex-row md:items-center md:gap-6' : ''}`}>
      <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-[14px] ${peach ? 'bg-[#F7DCC4] text-[#B5621D]' : 'bg-[#DCEBF6] text-primary'}`} aria-hidden="true">
        <Icon size={24} strokeWidth={1.75} />
      </span>
      <div className={wide ? 'mt-5 md:mt-0' : 'mt-5'}>
        <h3 className="font-heading !text-[21px] font-bold text-navy">
          <Link href={href} className={`rounded !no-underline group-hover:text-primary ${stretched} ${focusRing}`}>{title}</Link>
        </h3>
        <p className="mt-2 text-[16px] leading-relaxed text-[#4A5868]">{desc}</p>
      </div>
    </div>
  )
}

export default async function ServicesBento() {
  const t = await getTranslations('HomePage.servicesBento')
  const tHeader = await getTranslations('Header')
  const ngoItems = ['ngoItem1', 'ngoItem2', 'ngoItem3', 'ngoItem4'] as const

  return (
    <section aria-labelledby="services-heading" className={`bg-white ${sectionPad}`}>
      <div className={container}>
        <SectionHeader id="services-heading" eyebrow={t('eyebrow')} title={t('title')} link={{ href: '/services', label: tHeader('allServices') }} />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {/* Web design & development: 2×2 */}
          <div className="reveal group relative flex flex-col overflow-hidden rounded-[24px] bg-primary p-8 text-white md:col-span-2 lg:row-span-2 md:p-10">
            <span className="self-start rounded-full bg-navy/20 px-3 py-1 text-[13px] font-semibold">{t('webBadge')}</span>
            <h3 className="mt-5 font-heading !text-[28px] font-bold !leading-tight md:!text-[34px]">{t('webTitle')}</h3>
            <p className="mt-3 max-w-[460px] text-[17px] leading-relaxed text-white/85">{t('webDesc')}</p>
            <Link href="/services/web-design" className={`mt-6 self-start rounded text-[16px] font-semibold text-white !no-underline group-hover:!underline ${stretched} ${focusRing}`}>
              {t('webLink')}
            </Link>
            <div className="mt-auto">
              <MockSite />
            </div>
          </div>

          {/* Built for NGOs: cols 3–4, row 1 */}
          <div className="reveal relative flex flex-col rounded-[24px] bg-navy p-8 text-white md:col-span-2 md:p-10">
            <span className="self-start rounded-full bg-[#FBEFE4] px-3 py-1 text-[13px] font-semibold text-accent-strong">{t('ngoBadge')}</span>
            <h3 className="mt-5 font-heading !text-[26px] font-bold !leading-tight md:!text-[30px]">{t('ngoTitle')}</h3>
            <p className="mt-3 text-[16px] leading-relaxed text-white/75">{t('ngoIntro')}</p>
            <ul className="mt-6 grid gap-x-6 gap-y-3 sm:grid-cols-2">
              {ngoItems.map((k) => (
                <li key={k} className="flex items-start gap-2.5 text-[15px] font-medium">
                  <CheckIcon className="mt-0.5 text-[#F0A867]" />
                  {t(k)}
                </li>
              ))}
            </ul>
            <Link href="/contact" className={`mt-8 inline-flex h-12 items-center justify-center self-start rounded-[12px] bg-white px-6 text-[16px] font-semibold text-navy !no-underline transition-colors hover:bg-[#EAF4FB] ${focusRing}`}>
              {t('ngoCta')}
            </Link>
          </div>

          <SmallTile href="/services/mobile-apps" icon={Smartphone} title={t('mobileTitle')} desc={t('mobileDesc')} />
          <SmallTile href="/services/erp" icon={BarChart3} title={t('erpTitle')} desc={t('erpDesc')} />
          <SmallTile href="/services/cybersecurity" icon={ShieldCheck} title={t('cyberTitle')} desc={t('cyberDesc')} tone="peach" wide />
          <SmallTile href="/services/hosting" icon={Server} title={t('hostingTitle')} desc={t('hostingDesc')} wide />
        </div>
      </div>
    </section>
  )
}
