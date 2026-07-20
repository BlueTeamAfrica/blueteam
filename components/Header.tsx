'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import {
  Menu,
  X,
  Facebook,
  Linkedin,
  Instagram,
  Youtube,
  ArrowRight,
} from 'lucide-react'
import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// ── Nav data ────────────────────────────────────────────────────────────────

const services = [
  { name: 'Web Design',             href: '/services/web-design',          desc: 'Custom, fast-loading websites built for African connectivity' },
  { name: 'Website Development',    href: '/services/website-development', desc: 'Full-stack builds on Next.js, React, and WordPress' },
  { name: 'ERP Systems',            href: '/services/erp',                 desc: 'Inventory, accounting, and operations in one system' },
  { name: 'CRM Solutions',          href: '/services/crm',                 desc: 'Manage leads, clients, and relationships in one place' },
  { name: 'Mobile App Development', href: '/services/mobile-apps',         desc: 'iOS and Android apps for your team or your customers' },
  { name: 'Cloud & Web Hosting',    href: '/services/hosting',             desc: 'Secure, reliable hosting built for East Africa' },
  { name: 'Cybersecurity',          href: '/services/cybersecurity',       desc: 'Protect your systems, your data, and your reputation' },
  { name: 'E-commerce Development', href: '/services/ecommerce',           desc: 'Sell online, with mobile money integration built in' },
  { name: 'UI/UX Design',           href: '/services/ui-ux',               desc: 'Interfaces people actually want to use' },
]

const aboutLinks = [
  { name: 'About Us',    href: '/about',   desc: 'Who we are and why we do this work' },
  { name: 'Our Team',    href: '/team',    desc: 'The people building your project' },
  { name: 'Our Mission', href: '/mission', desc: "Technology built for East Africa's real conditions" },
  { name: 'Our Process', href: '/process', desc: 'How a project actually goes from idea to launch' },
]

const resourceLinks = [
  { name: 'Blog', href: '/blog', desc: 'Guides on web design, ERP, hosting, and more for East African teams' },
  { name: 'FAQ',  href: '/faq',  desc: 'Straight answers to the questions we get most' },
]

const socialLinks = [
  { label: 'Facebook',    href: 'https://www.facebook.com/profile.php?id=61585128246041', icon: Facebook, color: '#1877F2' },
  { label: 'X (Twitter)', href: 'https://x.com/BLUETEAMAFRICA',                          icon: X,         color: '#000000' },
  { label: 'LinkedIn',    href: 'https://www.linkedin.com/company/blue-team-africa',      icon: Linkedin,  color: '#0A66C2' },
  { label: 'Instagram',   href: 'https://www.instagram.com/blueteamafrica/',              icon: Instagram, color: '#E4405F' },
  { label: 'YouTube',     href: 'https://youtube.com/@BLUETEAMAFRICA',                    icon: Youtube,   color: '#FF0000' },
]

const WHATSAPP = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.52 3.48A11.86 11.86 0 0012 .04C6.01.04.98 5.07.98 11.06c0 1.95.51 3.86 1.48 5.52L.03 24l7.7-2.02a11.02 11.02 0 004.28.86h.01c6 0 11.03-4.03 11.03-10.02 0-2.68-1.05-5.2-2.53-6.84zM12 21.02c-1.5 0-2.98-.4-4.24-1.12l-.3-.17-4.56 1.2 1.2-4.56-.18-.31A8.86 8.86 0 013.08 11.06c0-4.9 4.03-8.89 8.92-8.89 4.9 0 8.92 3.99 8.92 8.89 0 4.9-4.03 8.89-8.92 8.89z" />
    <path d="M16.02 13.1c-.2-.1-1.1-.6-1.3-.6-.2-.1-.4-.1-.6.1l-.6.6c-.1.1-.4.1-.7 0-.3-.1-1.1-.4-2.1-1.3-.8-.7-1.3-1.5-1.4-1.8-.1-.3 0-.5.1-.7l.7-1.8c.1-.3 0-.5-.1-.6-.3-.3-.8-.7-1.2-1-.4-.3-1-.1-1.4.1-.5.3-1.7 1.2-1.7 3.1 0 1.8 1.2 3.8 2.6 5.1 1.4 1.3 3.1 2.2 4.9 2.5.7.1 1.4.1 2.1.1 1.3 0 3.2-.6 4-2.4.4-.9.4-1.9.3-2.2 0-.2 0-.4-.2-.5-.1-.2-.9-.5-1.1-.6z" />
  </svg>
)

// ── Section heading ──────────────────────────────────────────────────────────

function PanelSection({ label }: { label: string }) {
  return (
    <p className="text-[11px] font-bold uppercase tracking-widest text-[color:var(--color-primary,#1982c4)] mb-4 border-b border-gray-100 pb-2">
      {label}
    </p>
  )
}

// ── Nav link with description ────────────────────────────────────────────────

function NavItem({
  name, href, desc, onClick,
}: { name: string; href: string; desc: string; onClick: () => void }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="group block no-underline rounded-lg px-3 py-2.5 -mx-3 hover:bg-gray-50 transition-colors"
    >
      <span className="block text-sm font-semibold text-gray-900 group-hover:text-[color:var(--color-primary,#1982c4)] transition-colors">
        {name}
      </span>
      <span className="block text-xs text-gray-500 mt-0.5 leading-relaxed">
        {desc}
      </span>
    </Link>
  )
}

// ── Main component ───────────────────────────────────────────────────────────

export default function Header() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled]  = useState(false)

  const closeMenu = useCallback(() => setMenuOpen(false), [])

  // Shadow on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') closeMenu() }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [closeMenu])

  // Lock body scroll while panel is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  // Close on route change
  useEffect(() => { closeMenu() }, [pathname, closeMenu])

  return (
    <>
      {/* ── Top info bar ───────────────────────────────────────────────── */}
      <div
        style={{ backgroundColor: 'var(--color-primary, #1982c4)' }}
        className="w-full text-white fixed top-0 left-0 right-0 z-[60]"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-1.5 flex items-center justify-between md:justify-end">
          {/* Social icons — mobile left */}
          <div className="flex items-center gap-2 md:hidden">
            {socialLinks.map((s) => {
              const Icon = s.icon
              return (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-md text-white hover:opacity-80 transition-opacity"
                  aria-label={s.label}
                >
                  <Icon size={15} />
                </a>
              )
            })}
          </div>

          {/* Contact info — right */}
          <div className="flex items-center gap-2 md:gap-3 text-xs md:text-sm flex-wrap justify-end">
            <a href="tel:+254119402737" className="font-semibold no-underline whitespace-nowrap hidden md:inline text-white hover:opacity-80 transition-opacity">
              +254 119 402 737
            </a>
            <span className="text-white/60 hidden sm:inline">|</span>
            <a href="tel:+250798973375" className="font-semibold no-underline whitespace-nowrap text-white hover:opacity-80 transition-opacity">
              +250 798 973 375
            </a>
            <a href="mailto:contact@blueteamafrica.com" className="hidden lg:inline-block font-semibold no-underline ml-2 text-white hover:opacity-80 transition-opacity">
              contact@blueteamafrica.com
            </a>
          </div>
        </div>
      </div>

      {/* ── Main header ────────────────────────────────────────────────── */}
      <header
        className={`w-full sticky top-[38px] md:top-[42px] left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b transition-shadow duration-300 ${
          scrolled ? 'shadow-xl border-gray-200' : 'shadow-sm border-transparent'
        }`}
        role="banner"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-2 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0 h-16 no-underline" aria-label="Blue Team Africa — home">
            <Image
              src="/images/logo/logo-lockup.png"
              alt="Blue Team Africa"
              width={210}
              height={90}
              className="h-16 w-auto"
              priority
            />
          </Link>

          {/* Right: Contact + Menu trigger */}
          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold text-white no-underline transition-opacity hover:opacity-90"
              style={{ backgroundColor: 'var(--color-primary, #1982c4)' }}
            >
              Contact
            </Link>

            <button
              onClick={() => setMenuOpen((v) => !v)}
              aria-expanded={menuOpen}
              aria-controls="mega-menu-panel"
              aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              className="flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 transition-colors text-gray-800"
            >
              <AnimatePresence mode="wait" initial={false}>
                {menuOpen ? (
                  <motion.span key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                    <X size={20} />
                  </motion.span>
                ) : (
                  <motion.span key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                    <Menu size={20} />
                  </motion.span>
                )}
              </AnimatePresence>
              <span className="text-sm font-medium hidden sm:inline select-none">Menu</span>
            </button>
          </div>
        </div>
      </header>

      {/* ── Mega-menu panel ────────────────────────────────────────────── */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/40"
              aria-hidden="true"
              onClick={closeMenu}
            />

            {/* Panel — sits between the backdrop (z-40) and the header (z-50) */}
            <motion.div
              key="panel"
              id="mega-menu-panel"
              role="dialog"
              aria-modal="true"
              aria-label="Navigation menu"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
              className="fixed inset-x-0 top-0 z-[45] bg-white shadow-2xl overflow-y-auto"
              style={{ paddingTop: 'calc(38px + 80px)', maxHeight: '100dvh' }}
            >
              {/* md: paddingTop accounts for 42px top-bar + 80px header */}
              <style>{`@media(min-width:768px){#mega-menu-panel{padding-top:calc(42px + 80px)}}`}</style>

              <div className="max-w-7xl mx-auto px-6 md:px-10 py-8 pb-14">

                {/* ── SERVICES ── */}
                <section className="mb-10">
                  <PanelSection label="Services" />
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-1">
                    {services.map((s) => (
                      <NavItem key={s.href} {...s} onClick={closeMenu} />
                    ))}
                  </div>
                </section>

                {/* ── PORTFOLIO ── */}
                <section className="mb-10">
                  <PanelSection label="Portfolio" />
                  <Link
                    href="/portfolio"
                    onClick={closeMenu}
                    className="group inline-flex items-center gap-2 no-underline text-gray-800 hover:text-[color:var(--color-primary,#1982c4)] transition-colors"
                  >
                    <span className="text-sm font-medium">See the real problems we&apos;ve solved for real clients</span>
                    <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </section>

                {/* ── ABOUT + RESOURCES ── */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
                  <section>
                    <PanelSection label="About" />
                    <div className="space-y-1">
                      {aboutLinks.map((l) => (
                        <NavItem key={l.href} {...l} onClick={closeMenu} />
                      ))}
                    </div>
                  </section>

                  <section>
                    <PanelSection label="Resources" />
                    <div className="space-y-1">
                      {resourceLinks.map((l) => (
                        <NavItem key={l.href} {...l} onClick={closeMenu} />
                      ))}
                    </div>
                  </section>
                </div>

                {/* ── Bottom bar ── */}
                <div className="border-t border-gray-100 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  {/* Social icons */}
                  <div className="flex items-center gap-1">
                    <a
                      href="https://wa.me/254119402737"
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-md text-gray-500 hover:text-[#25D366] transition-colors"
                      aria-label="WhatsApp"
                    >
                      {WHATSAPP}
                    </a>
                    {socialLinks.map((s) => {
                      const Icon = s.icon
                      return (
                        <a
                          key={s.label}
                          href={s.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-md text-gray-500 hover:opacity-90 transition-colors"
                          aria-label={s.label}
                          style={{ ['--hover' as string]: s.color }}
                          onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = s.color }}
                          onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = '' }}
                        >
                          <Icon size={18} />
                        </a>
                      )
                    })}
                  </div>

                  {/* Repeated Contact button */}
                  <Link
                    href="/contact"
                    onClick={closeMenu}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white no-underline transition-opacity hover:opacity-90"
                    style={{ backgroundColor: 'var(--color-primary, #1982c4)' }}
                  >
                    Get in touch
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
