import { getLocale, getTranslations } from 'next-intl/server'
import type { ReactNode } from 'react'
import { Link } from '@/i18n/navigation'
import { container, NetworkLines } from '@/components/home/shared'
import WhatsAppIcon from '@/components/WhatsAppIcon'
import { DesignVisual, SystemsVisual, ProtectVisual } from './HeroVisuals'

// Top of every service page: breadcrumb, group pill, the page's H1 and intro, two buttons, and
// the family's visual. A (Design & build) and B (Apps & systems) are light; C (Protect & run)
// is navy. The BreadcrumbList JSON-LD stays on the page; this is only the visible trail.

export type ServiceFamily = 'design' | 'systems' | 'protect'
const GROUP_KEY = { design: 'groupBuild', systems: 'groupSystems', protect: 'groupProtect' } as const
const WHATSAPP = 'https://wa.me/254119402737'

export interface Crumb { label: string; href?: string }

export default async function ServiceHero({ family, title, intro, breadcrumb }: {
  family: ServiceFamily
  title: string
  /** The page's intro paragraph content (may include links) */
  intro: ReactNode
  breadcrumb: Crumb[]
}) {
  const locale = await getLocale()
  const t = await getTranslations('ServiceTemplate')
  const tHeader = await getTranslations('Header')
  const tFooter = await getTranslations('Footer')
  const tHero = await getTranslations('Hero')
  const dark = family === 'protect'

  const focusRing = `focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${dark ? 'focus-visible:outline-white' : 'focus-visible:outline-primary'}`
  const button = `inline-flex min-h-[52px] w-full items-center justify-center gap-2 whitespace-nowrap rounded-[12px] px-7 font-heading text-[17px] font-semibold !no-underline transition-colors sm:w-auto ${focusRing}`

  return (
    <section aria-labelledby="service-heading" className={`relative overflow-hidden ${dark ? 'bg-[#0A1A2B] text-white' : family === 'systems' ? 'bg-[#F6F8FA]' : 'bg-white'}`}>
      {/* Top-end from lg; on phones at the bottom, behind the visual, so no node sits under the H1 */}
      {family !== 'systems' && (
        <NetworkLines accentNode={dark} className={`absolute -bottom-10 -end-24 w-[420px] lg:-top-12 lg:bottom-auto lg:end-0 lg:w-[560px] ${dark ? 'text-[#1B7CBB] opacity-[0.25]' : 'text-primary opacity-[0.10]'}`} />
      )}
      <div className={`${container} relative grid gap-10 pb-14 pt-8 md:pb-20 md:pt-12 lg:grid-cols-2 lg:items-center lg:gap-12 lg:py-16`}>
        <div>
          <nav aria-label={t('breadcrumbNav')}>
            <ol className={`flex flex-wrap items-center gap-x-2 gap-y-1 text-[14px] ${dark ? 'text-[#C5D2DE]' : 'text-[#4A5868]'}`}>
              {breadcrumb.map((c, i) => (
                <li key={c.label} className="flex items-center gap-2">
                  {i > 0 && <span aria-hidden="true">{locale === 'ar' ? '‹' : '›'}</span>}
                  {c.href ? (
                    <Link href={c.href} className={`rounded !no-underline hover:!underline ${dark ? 'hover:text-white' : 'hover:text-navy'} ${focusRing}`}>{c.label}</Link>
                  ) : (
                    <span aria-current="page" className={dark ? 'text-white' : 'text-navy'}>{c.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>

          <p className={`mt-6 inline-flex rounded-full px-3 py-1 text-[13px] font-semibold ${dark ? 'bg-white/10 text-[#8CC8EE]' : 'bg-[#EAF4FB] text-[#0D5A8A]'}`}>
            {tHeader(GROUP_KEY[family])}
          </p>
          <h1 id="service-heading" className={`mt-4 font-heading !text-[34px] font-bold !leading-[1.12] md:!text-[44px] lg:!text-[50px] rtl:!leading-[1.35] ${dark ? 'text-white' : 'text-navy'}`}>
            {title}
          </h1>
          <p className={`mt-5 max-w-[600px] text-[17px] leading-relaxed md:text-[18px] ${dark ? 'text-[#C5D2DE] [&_a]:text-[#8CC8EE] [&_a]:underline' : 'text-[#4A5868] [&_a]:text-[#0D5A8A] [&_a]:underline'}`}>
            {intro}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
            <Link
              href="/contact"
              className={`${button} ${dark ? 'bg-white text-navy hover:bg-[#EAF4FB]' : 'bg-primary-strong text-white hover:bg-primary-strong-hover'}`}
            >
              {t('getQuote')}
            </Link>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className={`${button} border-2 ${dark ? 'border-white text-white hover:bg-white/10' : 'border-primary text-[#0D5A8A] hover:bg-[#EAF4FB]'}`}
            >
              <WhatsAppIcon />
              {tFooter('ctaWhatsApp')}
            </a>
          </div>
        </div>

        <div aria-hidden="true">
          {family === 'design' && (
            <DesignVisual s={{ headline: t('browserHeadline'), performanceTarget: t('performanceTarget'), devices: t('devices'), latinAr: locale === 'en' }} />
          )}
          {family === 'systems' && (
            <SystemsVisual s={{
              phoneTitle: tHero('phoneTitle'), phoneSubtitle: tHero('phoneSubtitle'), synced: tHero('statusSynced'),
              recordsBySite: t('recordsBySite'), live: t('live'), illustrativeData: tHero('dashNote'),
            }} />
          )}
          {family === 'protect' && (
            <ProtectVisual s={{
              securityEvents: t('securityEvents'), monitored: t('monitored'), illustrative: t('illustrative'),
              events: [[t('eventBlocked'), '02:14'], [t('eventCertificate'), '06:00'], [t('eventBackup'), '06:30'], [t('eventPatch'), '09:12']],
              tags: [t('tagEncrypted'), t('tagBackedUp'), t('tag247')],
            }} />
          )}
        </div>
      </div>
    </section>
  )
}
