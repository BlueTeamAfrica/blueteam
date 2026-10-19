'use client'

import { usePathname } from 'next/navigation'
import { ChevronDown, ChevronRight, ChevronLeft, Menu, X } from 'lucide-react'
import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react'
import { Link } from '@/i18n/navigation'
import LocaleSwitcher from '@/components/LocaleSwitcher'

type PanelKey = 'services' | 'work' | 'company'
const PANELS: PanelKey[] = ['services', 'work', 'company']

interface Props {
  labels: Record<PanelKey | 'blog' | 'cta' | 'menu' | 'openMenu' | 'closeMenu', string>
  logo: ReactNode
  ctaClass: string
  panels: Record<PanelKey, ReactNode>
  mobileScreens: Record<PanelKey, ReactNode>
  mobileFooter: ReactNode
}

const OPEN_DELAY = 150
const CLOSE_DELAY = 200
const focusRing = 'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary'
const FOCUSABLE = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'

// Open/close behaviour for the server-rendered header (components/Header.tsx). Panels and the
// mobile menu are always in the DOM and toggled with display, so their links are in the HTML.
export default function HeaderShell({ labels, logo, ctaClass, panels, mobileScreens, mobileFooter }: Props) {
  const pathname = usePathname()
  const [open, setOpen] = useState<PanelKey | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileSub, setMobileSub] = useState<PanelKey | null>(null)
  const [scrolled, setScrolled] = useState(false)

  const headerRef = useRef<HTMLElement>(null)
  const triggerRefs = useRef<Partial<Record<PanelKey, HTMLButtonElement | null>>>({})
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const mobileRef = useRef<HTMLDivElement>(null)
  const timer = useRef<ReturnType<typeof setTimeout>>()
  const hoverOpenedAt = useRef(0)

  const clearTimer = () => clearTimeout(timer.current)
  const closeAll = useCallback(() => {
    clearTimeout(timer.current)
    setOpen(null)
    setMobileOpen(false)
    setMobileSub(null)
  }, [])

  // Close on route change
  useEffect(() => { closeAll() }, [pathname, closeAll])

  // Shadow once scrolled
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Escape closes and returns focus to whatever opened it; outside click closes the panel
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return
      if (mobileOpen) {
        closeAll()
        menuButtonRef.current?.focus()
      } else if (open) {
        const key = open
        closeAll()
        triggerRefs.current[key]?.focus()
      }
    }
    const onPointer = (e: PointerEvent) => {
      if (open && headerRef.current && !headerRef.current.contains(e.target as Node)) closeAll()
    }
    document.addEventListener('keydown', onKey)
    document.addEventListener('pointerdown', onPointer)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('pointerdown', onPointer)
    }
  }, [open, mobileOpen, closeAll])

  // Mobile menu: lock page scroll, focus the close button, close if the viewport becomes desktop
  useEffect(() => {
    if (!mobileOpen) return
    const html = document.documentElement
    const prev = html.style.overflow
    html.style.overflow = 'hidden'
    mobileRef.current?.querySelector<HTMLElement>('[data-hdr-close]')?.focus()
    const mq = window.matchMedia('(min-width: 1024px)')
    const onMq = () => mq.matches && closeAll()
    mq.addEventListener('change', onMq)
    return () => {
      html.style.overflow = prev
      mq.removeEventListener('change', onMq)
    }
  }, [mobileOpen, closeAll])

  // Moving between the menu and a sub-screen keeps focus inside the visible screen
  useEffect(() => {
    if (!mobileOpen) return
    const screen = mobileRef.current?.querySelector<HTMLElement>(mobileSub ? `[data-hdr-sub="${mobileSub}"]` : '[data-hdr-main]')
    screen?.querySelector<HTMLElement>(mobileSub ? '[data-hdr-back]' : '[data-hdr-close]')?.focus()
  }, [mobileSub, mobileOpen])

  const trapFocus = (e: React.KeyboardEvent) => {
    if (e.key !== 'Tab' || !mobileRef.current) return
    const items = [...mobileRef.current.querySelectorAll<HTMLElement>(FOCUSABLE)].filter((el) => el.offsetParent !== null)
    if (!items.length) return
    const first = items[0]
    const last = items[items.length - 1]
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus() }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus() }
  }

  // Desktop hover intent (mouse only; touch uses click)
  const hoverIn = (key: PanelKey) => (e: React.PointerEvent) => {
    if (e.pointerType !== 'mouse') return
    clearTimer()
    if (open === key) return
    timer.current = setTimeout(() => { hoverOpenedAt.current = Date.now(); setOpen(key) }, OPEN_DELAY)
  }
  const hoverOut = (e: React.PointerEvent) => {
    if (e.pointerType !== 'mouse') return
    clearTimer()
    timer.current = setTimeout(() => setOpen(null), CLOSE_DELAY)
  }
  const toggle = (key: PanelKey) => {
    clearTimer()
    // A click right after hover opened the panel is the same intent, not a request to close it
    if (open === key && Date.now() - hoverOpenedAt.current < 500) return
    hoverOpenedAt.current = 0
    setOpen((cur) => (cur === key ? null : key))
  }

  // Clicking any link inside a panel or the mobile menu closes it (also when it is the current page)
  const closeOnLink = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest('a')) closeAll()
  }

  const navButton = `inline-flex items-center gap-1 rounded-lg px-3 py-2 text-[16px] font-semibold text-[#0B1B2B] transition-colors hover:text-primary ${focusRing}`

  return (
    <>
      <header
        ref={headerRef}
        className={`sticky top-0 z-50 w-full bg-white transition-shadow duration-200 ${scrolled || open ? 'shadow-[0_4px_16px_rgba(11,27,43,0.08)]' : ''}`}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-2 px-3 min-[380px]:gap-3 min-[380px]:px-4 lg:h-[88px] lg:gap-6 lg:px-8">
          {logo}

          {/* Desktop navigation */}
          <nav aria-label={labels.menu} className="hidden lg:block">
            <ul className="flex items-center gap-1 xl:gap-2">
              {PANELS.map((key) => (
                <li key={key} onPointerEnter={hoverIn(key)} onPointerLeave={hoverOut}>
                  <button
                    ref={(el) => { triggerRefs.current[key] = el }}
                    type="button"
                    className={`${navButton} ${open === key ? 'text-primary' : ''}`}
                    aria-expanded={open === key}
                    aria-controls={`hdr-panel-${key}`}
                    onClick={() => toggle(key)}
                  >
                    {labels[key]}
                    <ChevronDown size={16} aria-hidden="true" className={`transition-transform duration-150 ${open === key ? 'rotate-180' : ''}`} />
                  </button>
                  {/* Panel follows its trigger in the DOM so Tab moves from the button into it.
                      Positioned against the header (the li is static) */}
                  <nav
                    id={`hdr-panel-${key}`}
                    aria-label={labels[key]}
                    data-hdr-panel={key}
                    onClick={closeOnLink}
                    className={`absolute inset-x-0 top-full max-h-[calc(100dvh-88px)] overflow-y-auto border-t border-[#E3E9EF] bg-white shadow-[0_16px_32px_rgba(11,27,43,0.12)] ${
                      open === key ? 'hdr-in block' : 'hidden'
                    }`}
                  >
                    {panels[key]}
                  </nav>
                </li>
              ))}
              <li>
                <Link href="/blog" className={navButton}>{labels.blog}</Link>
              </li>
            </ul>
          </nav>

          <div className="flex items-center gap-1.5 min-[380px]:gap-2 lg:gap-3">
            <LocaleSwitcher />
            <Link href="/contact" data-hdr-cta className={`${ctaClass} hidden lg:inline-flex`}>{labels.cta}</Link>
            <button
              ref={menuButtonRef}
              type="button"
              className={`flex h-11 w-11 items-center justify-center rounded-[10px] border border-[#D5DEE7] text-[#0B1B2B] lg:hidden ${focusRing}`}
              aria-expanded={mobileOpen}
              aria-controls="hdr-mobile"
              aria-label={labels.openMenu}
              onClick={() => { setMobileSub(null); setMobileOpen(true) }}
            >
              <Menu size={22} aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      {/* Dims the page behind an open desktop panel; clicks on it close the panel (outside click) */}
      <div
        aria-hidden="true"
        className={`fixed inset-0 z-40 hidden bg-[rgba(11,27,43,0.55)] transition-opacity duration-150 lg:block ${open ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
      />

      {/* Mobile menu */}
      <div
        id="hdr-mobile"
        ref={mobileRef}
        role="dialog"
        aria-modal="true"
        aria-label={labels.menu}
        data-hdr-mobile
        onKeyDown={trapFocus}
        onClick={closeOnLink}
        className={`fixed inset-0 z-[70] overflow-y-auto bg-white lg:hidden ${mobileOpen ? 'hdr-in block' : 'hidden'}`}
      >
        <div data-hdr-main className={mobileSub ? 'hidden' : 'flex min-h-full flex-col'}>
          <div className="flex h-16 shrink-0 items-center justify-between gap-2 px-3 min-[380px]:gap-3 min-[380px]:px-4">
            {logo}
            <CloseButton label={labels.closeMenu} onClick={() => { closeAll(); menuButtonRef.current?.focus() }} />
          </div>
          <nav aria-label={labels.menu} className="px-4 pt-2">
            <ul className="border-t border-[#E3E9EF]">
              {PANELS.map((key) => (
                <li key={key} className="border-b border-[#E3E9EF]">
                  <button
                    type="button"
                    className={`flex w-full items-center justify-between py-4 text-start text-[22px] font-semibold text-[#0B1B2B] ${focusRing}`}
                    aria-controls={`hdr-sub-${key}`}
                    onClick={() => setMobileSub(key)}
                  >
                    {labels[key]}
                    <ChevronRight size={22} className="text-[#4A5868] rtl:rotate-180" aria-hidden="true" />
                  </button>
                </li>
              ))}
              <li className="border-b border-[#E3E9EF]">
                <Link href="/blog" className={`block py-4 text-[22px] font-semibold text-[#0B1B2B] no-underline ${focusRing}`}>{labels.blog}</Link>
              </li>
            </ul>
          </nav>
          <div className="mt-auto px-4 pb-8 pt-8">{mobileFooter}</div>
        </div>

        {PANELS.map((key) => (
          <div key={key} id={`hdr-sub-${key}`} data-hdr-sub={key} className={mobileSub === key ? 'hdr-slide block' : 'hidden'}>
            <div className="flex h-16 items-center justify-between gap-3 px-4">
              <button
                type="button"
                data-hdr-back
                className={`-ms-2 inline-flex h-11 items-center gap-1 rounded-lg px-2 text-[16px] font-semibold text-primary ${focusRing}`}
                onClick={() => setMobileSub(null)}
              >
                <ChevronLeft size={20} className="rtl:rotate-180" aria-hidden="true" />
                {labels.menu}
              </button>
              <CloseButton label={labels.closeMenu} onClick={() => { closeAll(); menuButtonRef.current?.focus() }} />
            </div>
            <nav aria-label={labels[key]} className="px-4 pb-10">
              <p className="mb-4 text-[26px] font-bold text-[#0B1B2B]">{labels[key]}</p>
              {mobileScreens[key]}
            </nav>
          </div>
        ))}
      </div>
    </>
  )
}

function CloseButton({ label, onClick }: { label: string; onClick: () => void }) {
  return (
    <button
      type="button"
      data-hdr-close
      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-[10px] border border-[#D5DEE7] text-[#0B1B2B] ${focusRing}`}
      aria-label={label}
      onClick={onClick}
    >
      <X size={22} aria-hidden="true" />
    </button>
  )
}
