import Image from 'next/image'
import { getLocale, getTranslations } from 'next-intl/server'
import {
  Monitor,
  Code2,
  MousePointerClick,
  PenTool,
  ShoppingCart,
  Smartphone,
  Puzzle,
  BarChart3,
  Users,
  ShieldCheck,
  Server,
  Wrench,
  MapPin,
  Phone,
  Mail,
  ChevronRight,
  type LucideIcon,
} from 'lucide-react'
import type { ReactNode } from 'react'
import { Link } from '@/i18n/navigation'
import { Ltr } from '@/components/Ltr'
import LocaleSwitcher from '@/components/LocaleSwitcher'
import HeaderShell from '@/components/HeaderShell'
import { getLatestBilingualPost } from '@/lib/bilingual-blog'

// Server component: every panel and the mobile menu are rendered into the HTML (hidden until
// opened) so crawlers see all links. HeaderShell only adds open/close behaviour.

const PHONES = ['+254 119 402 737', '+250 798 973 375']
const EMAIL = 'contact@blueteamafrica.com'

type Tone = 'blue' | 'orange'
interface Item { href: string; title: string; desc: string; icon: LucideIcon; tone?: Tone }

const focusRing = 'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1C83C5]'

function IconTile({ icon: Icon, tone = 'blue' }: { icon: LucideIcon; tone?: Tone }) {
  return (
    <span
      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] ${
        tone === 'orange' ? 'bg-[#FBEFE4] text-[#B5621D]' : 'bg-[#EAF4FB] text-[#1C83C5]'
      }`}
      aria-hidden="true"
    >
      <Icon size={20} strokeWidth={1.75} />
    </span>
  )
}

function GroupHeading({ children }: { children: ReactNode }) {
  return <p className="mb-3 text-[13px] font-semibold uppercase tracking-wide text-[#4A5868]">{children}</p>
}

function PanelItem({ item }: { item: Item }) {
  return (
    <li>
      <Link href={item.href} className={`group -mx-2 flex gap-3 rounded-xl p-2 no-underline transition-colors hover:bg-[#F6F8FA] ${focusRing}`}>
        <IconTile icon={item.icon} tone={item.tone} />
        <span className="min-w-0">
          <span className="block text-[16px] font-semibold leading-snug text-[#0B1B2B] group-hover:text-[#1C83C5]">{item.title}</span>
          <span className="mt-0.5 block text-[14px] leading-snug text-[#4A5868]">{item.desc}</span>
        </span>
      </Link>
    </li>
  )
}

function Strip({ left, right }: { left: ReactNode; right: ReactNode }) {
  return (
    <div className="bg-[#F6F8FA]">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-8 py-4 text-[15px]">
        {left}
        {right}
      </div>
    </div>
  )
}

function StripLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link href={href} className={`rounded font-semibold text-[#1C83C5] no-underline hover:underline ${focusRing}`}>
      {children}
    </Link>
  )
}

function ContactLines({ className = '' }: { className?: string }) {
  return (
    <ul className={`space-y-2 text-[15px] ${className}`}>
      {PHONES.map((p) => (
        <li key={p}>
          <a href={`tel:${p.replace(/\s/g, '')}`} className={`inline-flex items-center gap-2 rounded font-semibold text-[#0B1B2B] no-underline hover:text-[#1C83C5] ${focusRing}`}>
            <Phone size={16} className="text-[#1C83C5]" aria-hidden="true" />
            <Ltr>{p}</Ltr>
          </a>
        </li>
      ))}
      <li>
        <a href={`mailto:${EMAIL}`} className={`inline-flex items-center gap-2 rounded font-semibold text-[#0B1B2B] no-underline hover:text-[#1C83C5] ${focusRing}`}>
          <Mail size={16} className="text-[#1C83C5]" aria-hidden="true" />
          <Ltr>{EMAIL}</Ltr>
        </a>
      </li>
    </ul>
  )
}

function MobileLink({ href, title, desc }: { href: string; title: string; desc?: string }) {
  return (
    <li>
      <Link href={href} className={`block rounded-lg py-2.5 no-underline ${focusRing}`}>
        <span className="block text-[17px] font-semibold text-[#0B1B2B]">{title}</span>
        {desc && <span className="mt-0.5 block text-[14px] leading-snug text-[#4A5868]">{desc}</span>}
      </Link>
    </li>
  )
}

function MobileGroup({ heading, children }: { heading: string; children: ReactNode }) {
  return (
    <div className="mb-6">
      <GroupHeading>{heading}</GroupHeading>
      <ul>{children}</ul>
    </div>
  )
}

export default async function Header() {
  const locale = await getLocale()
  const t = await getTranslations('Header')
  const tSvc = await getTranslations('ServiceSidebar')
  const tNav = await getTranslations('Navigation')
  const tPf = await getTranslations('PortfolioPage')
  const tSudan = await getTranslations('LocationsSudanPage')
  const tRwanda = await getTranslations('LocationsRwandaPage')
  const post = getLatestBilingualPost(locale)

  // Service titles reuse the existing ServiceSidebar names; ServiceSidebar lists ERP and CRM as
  // one entry, so those two come from Navigation.services
  const groups: { heading: string; items: Item[] }[] = [
    {
      heading: t('groupBuild'),
      items: [
        { href: '/services/web-design', title: tSvc('webDesign'), desc: t('descWebDesign'), icon: Monitor },
        { href: '/services/website-development', title: tSvc('websiteDev'), desc: t('descWebDev'), icon: Code2 },
        { href: '/services/ui-ux', title: tSvc('uiux'), desc: t('descUiUx'), icon: MousePointerClick },
        { href: '/services/branding', title: tSvc('branding'), desc: t('descBranding'), icon: PenTool },
      ],
    },
    {
      heading: t('groupSystems'),
      items: [
        { href: '/services/ecommerce', title: tSvc('ecommerce'), desc: t('descEcommerce'), icon: ShoppingCart },
        { href: '/services/mobile-apps', title: tSvc('mobileApps'), desc: t('descMobile'), icon: Smartphone },
        { href: '/services/custom-systems', title: tSvc('customSystems'), desc: t('descCustom'), icon: Puzzle },
        { href: '/services/erp', title: tNav('services.erp.name'), desc: t('descErp'), icon: BarChart3 },
        { href: '/services/crm', title: tNav('services.crm.name'), desc: t('descCrm'), icon: Users },
      ],
    },
    {
      heading: t('groupProtect'),
      items: [
        { href: '/services/cybersecurity', title: tSvc('cybersecurity'), desc: t('descSecurity'), icon: ShieldCheck, tone: 'orange' },
        { href: '/services/hosting', title: tSvc('hosting'), desc: t('descHosting'), icon: Server, tone: 'orange' },
        { href: '/services/maintenance', title: tSvc('maintenance'), desc: t('descMaintenance'), icon: Wrench, tone: 'orange' },
      ],
    },
  ]

  const cards = [
    { n: 1, href: '/portfolio/cslo-sudan', cls: 'bg-[#0B1B2B] text-white', sub: 'text-white/70' },
    { n: 2, href: '/portfolio/ngo-portal', cls: 'bg-[#1C83C5] text-white', sub: 'text-white/80' },
    { n: 3, href: '/portfolio/ecommerce-shop', cls: 'bg-[#FBEFE4] text-[#0B1B2B]', sub: 'text-[#4A5868]' },
  ].map((c) => ({
    ...c,
    tag: t(`card${c.n}Tag` as 'card1Tag'),
    title: t(`card${c.n}Title` as 'card1Title'),
    stat: t(`card${c.n}Stat` as 'card1Stat'),
    label: t(`card${c.n}Label` as 'card1Label'),
  }))

  const moreCases = [
    { href: '/portfolio/erp-integration', title: tPf('item_erpIntegration_title') },
    { href: '/portfolio/mobile-app', title: tPf('item_mobileApp_title') },
    { href: '/portfolio/crm-system', title: tPf('item_crmSystem_title') },
    { href: '/portfolio/cloud-migration', title: tPf('item_cloudMigration_title') },
  ]

  const aboutItems = [
    { href: '/about', title: t('about'), desc: t('aboutDesc') },
    { href: '/process', title: t('process'), desc: t('processDesc') },
    { href: '/mission', title: t('mission'), desc: t('missionDesc') },
    { href: '/team', title: t('team'), desc: t('teamDesc') },
    { href: '/faq', title: t('faq'), desc: t('faqDesc') },
  ]

  const whereItems = [
    { href: '/locations/sudan', title: tSudan('breadcrumbSudan'), desc: t('sudanDesc') },
    { href: '/locations/rwanda', title: tRwanda('breadcrumbRwanda'), desc: t('rwandaDesc') },
  ]

  const ctaClass = `inline-flex h-12 items-center justify-center whitespace-nowrap rounded-[12px] bg-[#1C83C5] px-6 font-heading text-[18px] font-bold text-white no-underline transition-colors hover:bg-[#166DA6] ${focusRing}`

  const logo = (
    <Link href="/" className={`flex shrink-0 items-center gap-1.5 rounded-lg no-underline min-[380px]:gap-2 lg:gap-2.5 ${focusRing}`} aria-label="Blue Team Africa">
      <Image src="/images/logo/logo-icon.png" alt="" width={44} height={44} className="h-8 w-8 min-[380px]:h-9 min-[380px]:w-9 lg:h-11 lg:w-11" priority />
      {/* Sized down below 380px so logo, language pill and menu button fit on one row at 320 */}
      <span dir="ltr" className="whitespace-nowrap font-heading text-[14px] font-bold leading-none min-[380px]:text-[18px] lg:text-[21px]">
        <span className="text-[#1C83C5]">Blue Team</span> <span className="text-[#D77828]">Africa</span>
      </span>
    </Link>
  )

  const servicesPanel = (
    <>
      <div className="mx-auto grid max-w-7xl grid-cols-4 gap-8 px-8 py-8">
        {groups.map((g) => (
          <div key={g.heading}>
            <GroupHeading>{g.heading}</GroupHeading>
            <ul className="space-y-1">
              {g.items.map((item) => <PanelItem key={item.href} item={item} />)}
            </ul>
          </div>
        ))}
        <Link
          href={`/blog/${post.slug}`}
          className={`group block self-start overflow-hidden rounded-2xl border border-[#E3E9EF] bg-white no-underline transition-shadow hover:shadow-md ${focusRing}`}
        >
          <Image src={post.image} alt={post.imageAlt} width={post.imageWidth} height={post.imageHeight} sizes="300px" className="h-auto w-full" />
          <span className="block p-4">
            <span className="block text-[12px] font-semibold uppercase tracking-wide text-[#B5621D]">{t('newOnBlog')}</span>
            <span className="mt-1.5 block text-[16px] font-semibold leading-snug text-[#0B1B2B] group-hover:text-[#1C83C5]">{post.title}</span>
            <span className="mt-3 block text-[14px] font-semibold text-[#1C83C5]">{t('readArticle')}</span>
          </span>
        </Link>
      </div>
      <Strip
        left={<StripLink href="/services">{t('allServices')}</StripLink>}
        right={<span className="text-[#4A5868]">{t('notSure')} <StripLink href="/contact">{t('tellUs')}</StripLink></span>}
      />
    </>
  )

  const workPanel = (
    <>
      <div className="mx-auto grid max-w-7xl grid-cols-4 gap-6 px-8 py-8">
        {cards.map((c) => (
          <Link key={c.href} href={c.href} className={`flex flex-col rounded-2xl p-5 no-underline transition-transform hover:-translate-y-0.5 ${c.cls} ${focusRing}`}>
            <span className={`text-[12px] font-semibold uppercase tracking-wide ${c.sub}`}>{c.tag}</span>
            <span className="mt-1 text-[16px] font-semibold leading-snug">{c.title}</span>
            <span className="mt-auto pt-6 font-heading text-[40px] font-bold leading-none"><Ltr>{c.stat}</Ltr></span>
            <span className={`mt-1.5 text-[14px] ${c.sub}`}>{c.label}</span>
          </Link>
        ))}
        <div>
          <GroupHeading>{t('moreCases')}</GroupHeading>
          <ul className="space-y-1">
            {moreCases.map((c) => (
              <li key={c.href}>
                <Link href={c.href} className={`-mx-2 flex items-center justify-between gap-2 rounded-lg px-2 py-2 text-[15px] font-medium text-[#0B1B2B] no-underline hover:bg-[#F6F8FA] hover:text-[#1C83C5] ${focusRing}`}>
                  {c.title}
                  <ChevronRight size={16} className="shrink-0 text-[#4A5868] rtl:rotate-180" aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Strip
        left={<StripLink href="/portfolio">{t('allCases')}</StripLink>}
        right={<span className="text-[#4A5868]">{t('wantResults')} <StripLink href="/contact">{t('startProject')}</StripLink></span>}
      />
    </>
  )

  const companyPanel = (
    <div className="mx-auto grid max-w-7xl grid-cols-12 gap-8 px-8 py-8">
      <div className="col-span-5">
        <GroupHeading>{t('groupAbout')}</GroupHeading>
        <ul className="grid grid-cols-2 gap-x-6 gap-y-1">
          {aboutItems.map((i) => (
            <li key={i.href}>
              <Link href={i.href} className={`group -mx-2 block rounded-xl p-2 no-underline hover:bg-[#F6F8FA] ${focusRing}`}>
                <span className="block text-[16px] font-semibold text-[#0B1B2B] group-hover:text-[#1C83C5]">{i.title}</span>
                <span className="mt-0.5 block text-[14px] text-[#4A5868]">{i.desc}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="col-span-3">
        <GroupHeading>{t('groupWhere')}</GroupHeading>
        <ul className="space-y-1">
          {whereItems.map((i) => <PanelItem key={i.href} item={{ ...i, icon: MapPin }} />)}
        </ul>
      </div>
      <div className="col-span-4 self-start rounded-2xl bg-[#EAF4FB] p-5">
        <p className="font-heading text-[18px] font-bold text-[#0B1B2B]">{t('talkTitle')}</p>
        <ContactLines className="mt-3" />
        <p className="mt-3 text-[14px] text-[#4A5868]">{t('talkLine')}</p>
        <Link href="/contact" className={`${ctaClass} mt-4 w-full !h-11 !text-[16px]`}>{t('cta')}</Link>
      </div>
    </div>
  )

  const mobileServices = (
    <>
      {groups.map((g) => (
        <MobileGroup key={g.heading} heading={g.heading}>
          {g.items.map((i) => <MobileLink key={i.href} href={i.href} title={i.title} desc={i.desc} />)}
        </MobileGroup>
      ))}
      <StripLink href="/services">{t('allServices')}</StripLink>
    </>
  )

  const mobileWork = (
    <>
      <ul className="mb-6">
        {cards.map((c) => (
          <li key={c.href}>
            <Link href={c.href} className={`block rounded-lg py-2.5 no-underline ${focusRing}`}>
              <span className="block text-[12px] font-semibold uppercase tracking-wide text-[#4A5868]">{c.tag}</span>
              <span className="block text-[17px] font-semibold text-[#0B1B2B]">{c.title}</span>
              <span className="block text-[14px] text-[#4A5868]"><Ltr>{c.stat}</Ltr> {c.label}</span>
            </Link>
          </li>
        ))}
      </ul>
      <MobileGroup heading={t('moreCases')}>
        {moreCases.map((c) => <MobileLink key={c.href} href={c.href} title={c.title} />)}
      </MobileGroup>
      <StripLink href="/portfolio">{t('allCases')}</StripLink>
    </>
  )

  const mobileCompany = (
    <>
      <MobileGroup heading={t('groupAbout')}>
        {aboutItems.map((i) => <MobileLink key={i.href} {...i} />)}
      </MobileGroup>
      <MobileGroup heading={t('groupWhere')}>
        {whereItems.map((i) => <MobileLink key={i.href} {...i} />)}
      </MobileGroup>
    </>
  )

  const mobileFooter = (
    <div className="space-y-4">
      <Link href="/contact" className={`${ctaClass} w-full`}>{t('cta')}</Link>
      <LocaleSwitcher variant="segmented" />
      <ContactLines />
    </div>
  )

  return (
    <HeaderShell
      labels={{
        services: t('services'),
        work: t('work'),
        company: t('company'),
        blog: t('blog'),
        cta: t('cta'),
        menu: t('menu'),
        openMenu: t('openMenu'),
        closeMenu: t('closeMenu'),
      }}
      logo={logo}
      ctaClass={ctaClass}
      panels={{ services: servicesPanel, work: workPanel, company: companyPanel }}
      mobileScreens={{ services: mobileServices, work: mobileWork, company: mobileCompany }}
      mobileFooter={mobileFooter}
    />
  )
}
