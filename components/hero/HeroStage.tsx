import type { CSSProperties } from 'react'
import { Ltr } from '@/components/Ltr'
import s from './hero.module.css'

// The hero's "product story" (decorative, aria-hidden): a field worker's phone saves a record
// offline, it syncs to the dashboard once the signal is back, then the client's website switches
// language. Server component; HeroLoop's data-* attributes on the section drive every change
// (hero.module.css). Logical properties throughout, so the whole stage mirrors on /ar.

export interface StageStrings {
  phoneTitle: string
  phoneSubtitle: string
  fields: [label: string, value: string][]
  status: [saving: string, offline: string, syncing: string, synced: string]
  dashTitle: string
  dashSynced: string
  dashNote: string
  captions: string[]
}

export interface SiteLayer {
  lang: string
  dir: 'ltr' | 'rtl'
  url: string
  heading: string
  /** Arabic on the English page: kept off Scheherazade New until the loop shows it */
  lazyAr: boolean
}

const v = (vars: Record<string, string | number>) => vars as CSSProperties

// Bar heights in design units; the last (orange) one grows when the new record lands
const BARS = [34, 50, 42, 60, 38]

function Signal() {
  return (
    <svg viewBox="0 0 20 16" fill="none" className={s.signal}>
      <g className={s.signalBars} fill="currentColor">
        <rect x="1" y="11" width="3" height="4" rx="1" />
        <rect x="6" y="8" width="3" height="7" rx="1" />
        <rect x="11" y="5" width="3" height="10" rx="1" />
        <rect x="16" y="1" width="3" height="14" rx="1" />
      </g>
      <path className={s.signalCross} d="M2 1l16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

function LockIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4.5" y="10.5" width="15" height="10" rx="2.5" />
      <path d="M8 10.5V7.5a4 4 0 0 1 8 0v3" />
    </svg>
  )
}

/** Captions for steps 0–5, stacked; only the current step's shows */
export function Captions({ captions }: { captions: string[] }) {
  return (
    <>
      {captions.map((c, i) => (
        <span key={i} className={`${s.stepLayer} ${s[`on${i}`]}`}>{c}</span>
      ))}
    </>
  )
}

export default function HeroStage({ t, sites, compact = false }: {
  t: StageStrings
  /** The website panel's layers: the page's language first, then the other one */
  sites: [SiteLayer, SiteLayer]
  compact?: boolean
}) {
  const [p0, p2] = compact ? [[178, 234], [310, 164]] : [[244, 330], [540, 224]]
  const [w, h] = compact ? [340, 368] : [600, 660]
  return (
    <div className={s.stageWrap} aria-hidden="true">
      <div className={`${s.stage} ${compact ? s.compact : ''}`}>
        <svg className={s.path} viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="none">
          <line x1={p0[0]} y1={p0[1]} x2={p2[0]} y2={p2[1]} stroke="currentColor" strokeWidth="2" strokeDasharray="6 7" strokeLinecap="round" opacity="0.55" vectorEffect="non-scaling-stroke" />
        </svg>

        {/* Dashboard */}
        <div className={`${s.item} ${s.dash}`}>
          <div className={s.dashHead}>
            <span className={s.dashTitle}>{t.dashTitle}</span>
            <span className={s.dashNote}>{t.dashNote}</span>
          </div>
          <div className={`${s.count} ${s.layers}`}>
            <span className={s.countOld}>1,247</span>
            <span className={s.countNew}>1,248</span>
          </div>
          <div className={s.bars}>
            {BARS.map((b, i) => (
              <span key={i} className={`${s.bar} ${i === BARS.length - 1 ? s.barLast : ''}`} style={{ height: `calc(${b} * var(--k))` }} />
            ))}
          </div>
          <span className={s.synced}>{t.dashSynced}</span>
        </div>

        {/* Phone */}
        <div className={`${s.item} ${s.phone}`}>
          <div className={s.phoneHead}>
            <div className={s.phoneBar}>
              <Ltr>9:41</Ltr>
              <Signal />
            </div>
            <p className={s.phoneTitle}>{t.phoneTitle}</p>
            <p className={s.phoneSub}>{t.phoneSubtitle}</p>
          </div>
          <div className={s.fields}>
            {t.fields.map(([label, value]) => (
              <div key={label}>
                <p className={s.label}>{label}</p>
                <p className={s.value}>{value}</p>
              </div>
            ))}
          </div>
          <div className={`${s.status} ${s.layers}`}>
            <span className={`${s.stepLayer} ${s.on0}`}>{t.status[0]}</span>
            <span className={`${s.stepLayer} ${s.on1}`}>{t.status[1]}</span>
            <span className={`${s.stepLayer} ${s.on2}`}>{t.status[2]}</span>
            <span className={`${s.stepLayer} ${s.onSynced}`}>{t.status[3]}</span>
          </div>
        </div>

        {/* Website panel (full stage only): the client's site, switching language at step 4 */}
        {!compact && (
          <div className={`${s.item} ${s.site}`}>
            <div className={s.chrome} dir="ltr">
              <span className={s.dot} style={{ background: '#FF6159' }} />
              <span className={s.dot} style={{ background: '#FFBD2E' }} />
              <span className={s.dot} style={{ background: '#28C941' }} />
              <span className={`${s.url} ${s.layers}`}>
                {sites.map((l, i) => (
                  <span key={l.lang} className={i ? s.layerOther : s.layerPage}>{l.url}</span>
                ))}
              </span>
            </div>
            <div className={s.layers}>
              {sites.map((l, i) => (
                <div key={l.lang} lang={l.lang} dir={l.dir} className={`${s.mini} ${i ? s.layerOther : s.layerPage}`}>
                  <div className={s.miniNav}>
                    <span className={s.block} style={v({ '--bw': 14, '--bh': 14, '--bc': '#1C83C5' })} />
                    <span className={s.block} style={v({ '--bw': 46, '--bh': 6, '--bc': '#C9D3DD' })} />
                    <span className="flex-1" />
                    <span className={s.block} style={v({ '--bw': 22, '--bh': 5 })} />
                    <span className={s.block} style={v({ '--bw': 22, '--bh': 5 })} />
                    <span className={s.block} style={v({ '--bw': 22, '--bh': 5 })} />
                  </div>
                  <p className={`${s.miniHeading} ${l.lazyAr ? s.lazyAr : ''}`}>{l.heading}</p>
                  <span className={`${s.block} ${s.miniLine}`} style={v({ '--bw': 230, '--bh': 6 })} />
                  <span className={`${s.block} ${s.miniLine}`} style={v({ '--bw': 170, '--bh': 6 })} />
                  <span className={`${s.block} ${s.miniLine}`} style={v({ '--bw': 84, '--bh': 22, '--bc': '#1C83C5' })} />
                  <div className={s.miniCards}><span /><span /><span /></div>
                </div>
              ))}
            </div>
          </div>
        )}

        <span className={s.lock}><LockIcon /></span>

        {!compact && (
          <p className={`${s.caption} ${s.layers}`}>
            <Captions captions={t.captions} />
          </p>
        )}
      </div>
    </div>
  )
}
