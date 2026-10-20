import type { CSSProperties } from 'react'
import { Ltr } from '@/components/Ltr'

// The service hero's right-hand visual, one per family. Static and decorative (the wrapper in
// ServiceHero is aria-hidden). Drawn in container units (cqw), so each scales with its column
// and keeps its proportions on phones; logical properties, so it mirrors on /ar.
// Every text colour passes 4.5:1 on what it sits on (axe checks aria-hidden text too).

const box = 'relative mx-auto aspect-[6/5] w-full max-w-[560px] [container-type:inline-size]'
// Arabic on English pages stays off Scheherazade New (see LocaleSwitcher), so no 87 KB font load
const latinOnly: CSSProperties = { fontFamily: 'var(--font-poppins-latin), sans-serif' }

export interface DesignStrings { headline: string; performanceTarget: string; devices: string; latinAr: boolean }
export interface SystemsStrings { phoneTitle: string; phoneSubtitle: string; synced: string; recordsBySite: string; live: string; illustrativeData: string }
export interface ProtectStrings {
  securityEvents: string; monitored: string; events: [string, string][]; illustrative: string; tags: string[]
}

/** A, Design & build: a tilted browser showing a fictional NGO site */
export function DesignVisual({ s }: { s: DesignStrings }) {
  return (
    <div className={box}>
      <div className="absolute start-[3%] top-[11%] w-[82%] -rotate-3 overflow-hidden rounded-[2.4cqw] border border-[#E3E9EF] bg-white shadow-[0_3cqw_7cqw_rgba(11,27,43,0.14)] rtl:rotate-3">
        <div dir="ltr" className="flex items-center gap-[1.2cqw] bg-[#F0F3F6] px-[2.6cqw] py-[2cqw]">
          {['#FF6159', '#FFBD2E', '#28C941'].map((c) => <span key={c} className="h-[1.8cqw] w-[1.8cqw] rounded-full" style={{ background: c }} />)}
          <span className="ms-[2cqw] rounded-full bg-white px-[2.4cqw] py-[0.6cqw] text-[2.3cqw] text-[#4A5868]">client-site.org</span>
        </div>
        <div className="p-[4cqw]">
          <div className="flex items-center gap-[2cqw]">
            <span className="h-[3cqw] w-[3cqw] rounded-[0.8cqw] bg-primary" />
            <span className="h-[1.2cqw] w-[11cqw] rounded-full bg-[#C9D3DD]" />
            <span className="flex-1" />
            {[0, 1, 2].map((i) => <span key={i} className="h-[1cqw] w-[6cqw] rounded-full bg-[#D5DEE7]" />)}
          </div>
          <p className="mt-[5cqw] max-w-[44cqw] font-heading text-[4.4cqw] font-bold leading-[1.2] text-navy">{s.headline}</p>
          <span className="mt-[2.4cqw] block h-[1.2cqw] w-[40cqw] rounded-full bg-[#D5DEE7]" />
          <span className="mt-[1.4cqw] block h-[1.2cqw] w-[30cqw] rounded-full bg-[#D5DEE7]" />
          <span className="mt-[3.4cqw] block h-[5cqw] w-[17cqw] rounded-[1.2cqw] bg-accent" />
          <div className="mt-[4.4cqw] grid grid-cols-3 gap-[2cqw]">
            {[0, 1, 2].map((i) => (
              <span key={i} className="rounded-[1.4cqw] border border-[#E3E9EF] p-[1.6cqw]">
                <span className="block h-[7cqw] rounded-[0.8cqw] bg-[#EAF4FB]" />
                <span className="mt-[1.4cqw] block h-[1cqw] w-3/4 rounded-full bg-[#D5DEE7]" />
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute end-[1%] top-[2%] rounded-[2.4cqw] bg-navy px-[3.4cqw] py-[2.6cqw] text-white shadow-[0_2cqw_5cqw_rgba(11,27,43,0.25)]">
        <p className="text-[2.4cqw] font-semibold uppercase tracking-wide text-[#C5D2DE]">{s.performanceTarget}</p>
        <p className="mt-[0.6cqw] font-heading text-[7cqw] font-bold leading-none"><Ltr>90+</Ltr></p>
      </div>

      <div dir="ltr" className="absolute bottom-[14%] start-[0%] flex gap-[1cqw] rounded-full border border-[#E3E9EF] bg-white p-[1cqw] text-[2.6cqw] font-semibold shadow-[0_1.6cqw_4cqw_rgba(11,27,43,0.12)]">
        <span className="rounded-full bg-primary-strong px-[2.6cqw] py-[0.8cqw] text-white">EN</span>
        <span lang="ar" className="rounded-full px-[2.6cqw] py-[0.8cqw] text-[#4A5868]" style={s.latinAr ? latinOnly : undefined}>عربي</span>
      </div>

      <span className="absolute bottom-[3%] end-[5%] rounded-full border border-[#E3E9EF] bg-white px-[3cqw] py-[1.4cqw] text-[2.6cqw] font-semibold text-[#4A5868] shadow-[0_1.6cqw_4cqw_rgba(11,27,43,0.10)]">
        {s.devices}
      </span>
    </div>
  )
}

/** B, Apps & systems: a field phone syncing to a dashboard */
export function SystemsVisual({ s }: { s: SystemsStrings }) {
  const bars = [46, 70, 58]
  return (
    <div className={box}>
      {/* Dashed path from the phone to the dashboard, with the lock halfway */}
      <svg viewBox="0 0 600 500" preserveAspectRatio="none" className="absolute inset-0 h-full w-full rtl:-scale-x-100">
        <line x1="210" y1="250" x2="330" y2="190" stroke="#1C83C5" strokeWidth="3" strokeDasharray="10 11" strokeLinecap="round" opacity="0.6" />
      </svg>
      <span className="absolute start-[42%] top-[33%] flex h-[8cqw] w-[8cqw] items-center justify-center rounded-full border border-[#D6E6F2] bg-white text-primary shadow-[0_1.6cqw_4cqw_rgba(11,27,43,0.16)]">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="h-[4cqw] w-[4cqw]">
          <rect x="4.5" y="10.5" width="15" height="10" rx="2.5" /><path d="M8 10.5V7.5a4 4 0 0 1 8 0v3" />
        </svg>
      </span>

      <div className="absolute start-[4%] top-[6%] w-[36%] overflow-hidden rounded-[5cqw] border-[1.4cqw] border-navy bg-white shadow-[0_3cqw_7cqw_rgba(11,27,43,0.18)]">
        <div className="bg-primary-strong px-[3cqw] pb-[3cqw] pt-[2.4cqw] text-white">
          <p dir="ltr" className="text-[2.2cqw] font-semibold"><Ltr>9:41</Ltr></p>
          <p className="mt-[2cqw] text-[3.6cqw] font-bold leading-tight">{s.phoneTitle}</p>
          <p className="mt-[0.6cqw] text-[2.5cqw] leading-snug">{s.phoneSubtitle}</p>
        </div>
        <div className="space-y-[2.6cqw] p-[3cqw]">
          {[60, 40, 70].map((w, i) => (
            <span key={i} className="block">
              <span className="block h-[1.1cqw] rounded-full bg-[#D5DEE7]" style={{ width: `${w * 0.4}cqw` }} />
              <span className="mt-[1cqw] block h-[5cqw] rounded-[1.2cqw] border border-[#E3E9EF] bg-[#F6F8FA]" />
            </span>
          ))}
          <p className="mt-[3cqw] rounded-full bg-[#E3F6EA] px-[2cqw] py-[1.2cqw] text-center text-[2.4cqw] font-semibold text-[#1B7A3F]">{s.synced}</p>
        </div>
      </div>

      <div className="absolute end-[2%] top-[14%] w-[50%] rounded-[3cqw] bg-navy p-[4cqw] text-white shadow-[0_3cqw_7cqw_rgba(11,27,43,0.22)]">
        <div className="flex items-baseline justify-between gap-[2cqw]">
          <p className="text-[2.7cqw] text-[#C5D2DE]">{s.recordsBySite}</p>
          <p className="text-[2.4cqw] font-semibold text-[#4ADE80]">{s.live}</p>
        </div>
        <div className="mt-[4cqw] flex h-[18cqw] items-end gap-[3cqw]">
          {bars.map((h, i) => (
            <span key={i} className={`flex-1 rounded-t-[1.2cqw] ${i === bars.length - 1 ? 'bg-accent' : 'bg-primary'}`} style={{ height: `${h}%` }} />
          ))}
        </div>
      </div>

      <span dir="ltr" className="absolute bottom-[12%] end-[4%] rounded-full border border-[#E3E9EF] bg-white px-[3cqw] py-[1.4cqw] text-[2.6cqw] font-semibold text-[#4A5868] shadow-[0_1.6cqw_4cqw_rgba(11,27,43,0.10)]">
        ERPNext · Frappe CRM · Flutter
      </span>
      <p className="absolute bottom-[3%] end-[4%] text-[2.4cqw] text-[#4A5868]">{s.illustrativeData}</p>
    </div>
  )
}

/** C, Protect & run: a shield and a monitored security-events feed, on the navy hero */
export function ProtectVisual({ s }: { s: ProtectStrings }) {
  return (
    <div className={box}>
      <div className="absolute start-[2%] top-[14%] flex h-[40cqw] w-[40cqw] items-center justify-center">
        <span className="absolute inset-[12%] rounded-full bg-primary opacity-30 blur-[6cqw]" />
        <svg viewBox="0 0 120 140" className="relative h-[32cqw] w-[28cqw] drop-shadow-[0_0_4cqw_rgba(140,200,238,0.45)]">
          <defs>
            <linearGradient id="svc-shield" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#4DA3D9" /><stop offset="1" stopColor="#1B7CBB" />
            </linearGradient>
          </defs>
          <path d="M60 6 108 24v40c0 32-21 57-48 70C33 121 12 96 12 64V24Z" fill="url(#svc-shield)" stroke="#8CC8EE" strokeWidth="2" />
          <path d="m40 70 14 14 28-30" fill="none" stroke="#fff" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      <div className="absolute end-[1%] top-[6%] w-[58%] rounded-[3cqw] border border-white/[0.12] bg-white/[0.08] p-[4cqw] shadow-[0_3cqw_8cqw_rgba(0,0,0,0.3)] backdrop-blur-md">
        <div className="flex items-baseline justify-between gap-[2cqw]">
          <p className="text-[2.9cqw] font-semibold text-white">{s.securityEvents}</p>
          <p className="text-[2.4cqw] font-semibold text-[#4ADE80]">{s.monitored}</p>
        </div>
        <ul className="mt-[3cqw] space-y-[2.4cqw]">
          {s.events.map(([label, time]) => (
            <li key={label} className="flex items-center gap-[2cqw] border-t border-white/[0.12] pt-[2.4cqw] text-[2.6cqw]">
              <span className="h-[1.6cqw] w-[1.6cqw] shrink-0 rounded-full bg-[#4ADE80]" />
              <span className="flex-1 text-[#C5D2DE]">{label}</span>
              <span dir="ltr" className="font-semibold text-[#8CC8EE]">{time}</span>
            </li>
          ))}
        </ul>
        <p className="mt-[3cqw] text-[2.2cqw] text-[#9FB0C0]">{s.illustrative}</p>
      </div>

      <ul className="absolute bottom-[4%] start-[4%] flex flex-wrap gap-[1.6cqw]">
        {s.tags.map((tag) => (
          <li key={tag} className="rounded-full border border-white/[0.16] bg-white/[0.08] px-[2.8cqw] py-[1.2cqw] text-[2.6cqw] font-semibold text-white">{tag}</li>
        ))}
      </ul>
    </div>
  )
}
