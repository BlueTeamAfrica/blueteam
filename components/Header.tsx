'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import {
  Phone,
  Mail,
  ChevronDown,
  Menu,
  X,
  Facebook,
  Linkedin,
  Instagram,
  Youtube,
} from 'lucide-react'
import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Header() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [aboutOpen, setAboutOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const mobilePanelRef = useRef<HTMLDivElement | null>(null)
  const servicesDropdownRef = useRef<HTMLDivElement | null>(null)
  const aboutDropdownRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close on ESC
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileOpen(false)
        setServicesOpen(false)
        setAboutOpen(false)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  // Click outside dropdowns to close (desktop)
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const t = e.target as Node
      if (servicesDropdownRef.current && !servicesDropdownRef.current.contains(t)) {
        setServicesOpen(false)
      }
      if (aboutDropdownRef.current && !aboutDropdownRef.current.contains(t)) {
        setAboutOpen(false)
      }
    }
    document.addEventListener('mousedown', onClick)
    return () => document.removeEventListener('mousedown', onClick)
  }, [])

  // Prevent body scroll when mobile menu open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname?.startsWith(href)
  }

  const serviceColumns = [
    {
      label: 'Development',
      items: [
        { name: 'Web Design', href: '/services/web-design' },
        { name: 'Website Development', href: '/services/website-development' },
        { name: 'Mobile App Development', href: '/services/mobile-apps' },
        { name: 'E-commerce Development', href: '/services/ecommerce' },
      ],
    },
    {
      label: 'Enterprise Systems',
      items: [
        { name: 'ERP Systems', href: '/services/erp' },
        { name: 'CRM Solutions', href: '/services/crm' },
        { name: 'Custom Systems', href: '/services/custom-systems' },
      ],
    },
    {
      label: 'Infrastructure & Design',
      items: [
        { name: 'Cloud & Web Hosting', href: '/services/hosting' },
        { name: 'Cybersecurity', href: '/services/cybersecurity' },
        { name: 'UI/UX Design', href: '/services/ui-ux' },
        { name: 'Branding', href: '/services/branding' },
      ],
    },
  ]

  const aboutLinks = [
    { name: 'Who We Are', href: '/about' },
    { name: 'Our Team', href: '/team' },
    { name: 'Our Process', href: '/process' },
  ]

  const socialLinks = [
    { label: 'Facebook', href: 'https://facebook.com/blueteamafrica', icon: Facebook, color: '#1877F2' },
    { label: 'LinkedIn', href: 'https://linkedin.com/company/blueteamafrica', icon: Linkedin, color: '#0A66C2' },
    { label: 'Instagram', href: 'https://instagram.com/blueteamafrica', icon: Instagram, color: '#E4405F' },
    { label: 'YouTube', href: 'https://youtube.com/@blueteamafrica', icon: Youtube, color: '#FF0000' },
  ]

  return (
    <>
      {/* Top Info Bar - Fixed at the very top, always visible */}
      <div 
        style={{ backgroundColor: 'var(--color-primary, #2563EB)' }} 
        className="w-full text-white fixed top-0 left-0 right-0 z-[60]"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-1.5 flex items-center justify-between md:justify-end">
          {/* Social Media Icons - Mobile Only (Left Side) */}
          <div className="flex items-center gap-2 md:hidden">
            {socialLinks.map((s) => {
              const Icon = s.icon
              return (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-md transition-all duration-200 text-white hover:opacity-80"
                  aria-label={s.label}
                >
                  <Icon size={16} />
                </a>
              )
            })}
          </div>

          {/* Contact Info - Right Side */}
          <div className="flex items-center gap-2 md:gap-3 text-xs md:text-sm flex-wrap justify-end">
            <a href="tel:+256765508131" className="font-semibold hover:underline whitespace-nowrap hidden md:inline">
              +256 765 508 131
            </a>
            <span className="text-white/60 hidden sm:inline">|</span>
            <a href="tel:+250798973375" className="font-semibold hover:underline whitespace-nowrap">
              +250 798 973 375
            </a>
            <a href="mailto:contact@blueteamafrica.com" className="hidden lg:inline-block font-semibold hover:underline ml-2">
              contact@blueteamafrica.com
            </a>
          </div>
        </div>
      </div>

      {/* Main Header - Sticky below the fixed blue bar */}
      <header
        className={`w-full sticky top-[38px] md:top-[42px] left-0 right-0 z-50 transition-shadow duration-300 bg-white/95 backdrop-blur-sm border-b ${
          scrolled ? 'shadow-xl border-gray-200' : 'shadow-sm border-transparent'
        }`}
        role="banner"
      >

        {/* Main Navigation Row (reduced padding) */}
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-1">
          <div className="flex items-center gap-4">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 flex-shrink-0 h-10">
              <div className="w-10 h-10 rounded-md bg-[color:var(--color-primary,#2563EB)] text-white flex items-center justify-center font-bold">
                BT
              </div>
              <span className="font-semibold text-gray-900">Blue Team Africa</span>
            </Link>

            {/* Center nav (desktop) */}
            <div className="flex-1 flex justify-center">
              <nav className="hidden md:flex items-center gap-6 text-sm font-medium" aria-label="Main navigation">
                <Link
                  href="/"
                  className={`py-1 px-1 ${isActive('/') ? 'text-[color:var(--color-primary,#2563EB)] font-semibold' : 'text-gray-700 hover:text-[color:var(--color-primary,#2563EB)]'}`}
                >
                  Home
                </Link>

                {/* About dropdown */}
                <div className="relative">
                  <button
                    onClick={() => {
                      setAboutOpen(!aboutOpen)
                      setServicesOpen(false)
                    }}
                    className={`flex items-center gap-1 py-1 px-1 ${isActive('/about') ? 'text-[color:var(--color-primary,#2563EB)] font-semibold' : 'text-gray-700 hover:text-[color:var(--color-primary,#2563EB)]'}`}
                    aria-haspopup="true"
                    aria-expanded={aboutOpen}
                  >
                    About
                    <ChevronDown size={14} className={`transition-transform ${aboutOpen ? 'rotate-180' : 'rotate-0'}`} />
                  </button>

                  <AnimatePresence>
                    {aboutOpen && (
                      <motion.div
                        ref={aboutDropdownRef}
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 0.18 }}
                        className="absolute left-0 top-full mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-100 p-3 z-60"
                      >
                        {aboutLinks.map((l, i) => (
                          <Link
                            key={i}
                            href={l.href}
                            className={`block px-3 py-2 text-sm rounded hover:bg-gray-50 ${isActive(l.href) ? 'text-[color:var(--color-primary,#2563EB)] font-semibold' : 'text-gray-700'}`}
                            onClick={() => setAboutOpen(false)}
                          >
                            {l.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Services mega dropdown */}
                <div className="relative">
                  <button
                    onClick={() => {
                      setServicesOpen(!servicesOpen)
                      setAboutOpen(false)
                    }}
                    className={`flex items-center gap-1 py-1 px-1 ${isActive('/services') ? 'text-[color:var(--color-primary,#2563EB)] font-semibold' : 'text-gray-700 hover:text-[color:var(--color-primary,#2563EB)]'}`}
                    aria-haspopup="true"
                    aria-expanded={servicesOpen}
                  >
                    Services
                    <ChevronDown size={14} className={`transition-transform ${servicesOpen ? 'rotate-180' : 'rotate-0'}`} />
                  </button>

                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        ref={servicesDropdownRef}
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.18 }}
                        className="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-[880px] max-w-[calc(100vw-2rem)] bg-white rounded-xl shadow-2xl border border-gray-100 p-6 z-60"
                      >
                        <div className="grid grid-cols-3 gap-6">
                          {serviceColumns.map((col, i) => (
                            <div key={i}>
                              <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-2">{col.label}</p>
                              <ul className="space-y-1">
                                {col.items.map((it, idx) => (
                                  <li key={idx}>
                                    <Link
                                      href={it.href}
                                      className={`block px-2 py-1 rounded hover:bg-gray-50 text-sm ${isActive(it.href) ? 'text-[color:var(--color-primary,#2563EB)] font-semibold' : 'text-gray-700'}`}
                                      onClick={() => setServicesOpen(false)}
                                    >
                                      {it.name}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link href="/portfolio" className={`py-1 px-1 ${isActive('/portfolio') ? 'text-[color:var(--color-primary,#2563EB)] font-semibold' : 'text-gray-700 hover:text-[color:var(--color-primary,#2563EB)]'}`}>
                  Portfolio
                </Link>
                <Link href="/blog" className={`py-1 px-1 ${isActive('/blog') ? 'text-[color:var(--color-primary,#2563EB)] font-semibold' : 'text-gray-700 hover:text-[color:var(--color-primary,#2563EB)]'}`}>
                  Blog
                </Link>

                {/* Contact inline as part of nav */}
                <Link
                  href="/contact"
                  className="ml-2 inline-flex items-center gap-2 px-3 py-1 bg-[color:var(--color-primary,#2563EB)] text-white rounded-full text-sm font-semibold shadow-sm hover:bg-[color:var(--color-primary,#2563EB)]/90 transition"
                >
                  Contact
                </Link>
              </nav>
            </div>

            {/* Right area (desktop): WhatsApp + social */}
            <div className="hidden md:flex items-center gap-3 flex-shrink-0">
              <a
                href="https://wa.me/256765508131"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-md flex items-center justify-center transition hover:scale-105"
                aria-label="WhatsApp"
                title="Chat on WhatsApp"
                style={{ color: '#25D366' }}
              >
                {/* WhatsApp inline svg (keeps same green color) */}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M20.52 3.48A11.86 11.86 0 0012 .04C6.01.04.98 5.07.98 11.06c0 1.95.51 3.86 1.48 5.52L.03 24l7.7-2.02a11.02 11.02 0 004.28.86h.01c6 0 11.03-4.03 11.03-10.02 0-2.68-1.05-5.2-2.53-6.84zM12 21.02c-1.5 0-2.98-.4-4.24-1.12l-.3-.17-4.56 1.2 1.2-4.56-.18-.31A8.86 8.86 0 013.08 11.06c0-4.9 4.03-8.89 8.92-8.89 4.9 0 8.92 3.99 8.92 8.89 0 4.9-4.03 8.89-8.92 8.89z" />
                  <path d="M16.02 13.1c-.2-.1-1.1-.6-1.3-.6-.2-.1-.4-.1-.6.1l-.6.6c-.1.1-.4.1-.7 0-.3-.1-1.1-.4-2.1-1.3-.8-.7-1.3-1.5-1.4-1.8-.1-.3 0-.5.1-.7l.7-1.8c.1-.3 0-.5-.1-.6-.3-.3-.8-.7-1.2-1-.4-.3-1-.1-1.4.1-.5.3-1.7 1.2-1.7 3.1 0 1.8 1.2 3.8 2.6 5.1 1.4 1.3 3.1 2.2 4.9 2.5.7.1 1.4.1 2.1.1 1.3 0 3.2-.6 4-2.4.4-.9.4-1.9.3-2.2 0-.2 0-.4-.2-.5-.1-.2-.9-.5-1.1-.6z" />
                </svg>
              </a>

              <div className="flex items-center gap-2">
                {socialLinks.map((s) => {
                  const Icon = s.icon
                  return (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-md transition-all duration-200 text-gray-600"
                      aria-label={s.label}
                      onMouseEnter={(e) => {
                        const el = e.currentTarget as HTMLElement
                        el.style.color = s.color
                        el.style.backgroundColor = `${s.color}15`
                      }}
                      onMouseLeave={(e) => {
                        const el = e.currentTarget as HTMLElement
                        el.style.color = ''
                        el.style.backgroundColor = ''
                      }}
                    >
                      <Icon size={18} />
                    </a>
                  )
                })}
              </div>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.aside
            ref={mobilePanelRef}
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-y-0 left-0 w-80 max-w-[85vw] bg-white shadow-2xl z-50 md:hidden overflow-y-auto"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation menu"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <Link href="/" className="flex items-center gap-3" onClick={() => setMobileOpen(false)}>
                  <div className="w-10 h-10 rounded-md bg-[color:var(--color-primary,#2563EB)] text-white flex items-center justify-center font-bold">
                    BT
                  </div>
                  <span className="font-semibold text-gray-900">Blue Team Africa</span>
                </Link>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 rounded-md text-gray-700 hover:bg-gray-100"
                  aria-label="Close menu"
                >
                  <X size={24} />
                </button>
              </div>

              <nav className="space-y-4">
                <Link
                  href="/"
                  className={`block py-2 px-3 rounded-md ${isActive('/') ? 'text-[color:var(--color-primary,#2563EB)] font-semibold bg-blue-50' : 'text-gray-700 hover:bg-gray-50'}`}
                  onClick={() => setMobileOpen(false)}
                >
                  Home
                </Link>

                <div>
                  <button
                    onClick={() => setAboutOpen(!aboutOpen)}
                    className={`w-full flex items-center justify-between py-2 px-3 rounded-md ${isActive('/about') ? 'text-[color:var(--color-primary,#2563EB)] font-semibold bg-blue-50' : 'text-gray-700 hover:bg-gray-50'}`}
                  >
                    About
                    <ChevronDown size={16} className={`transition-transform ${aboutOpen ? 'rotate-180' : 'rotate-0'}`} />
                  </button>
                  <AnimatePresence>
                    {aboutOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="pl-4 space-y-2 mt-2">
                          {aboutLinks.map((l, i) => (
                            <Link
                              key={i}
                              href={l.href}
                              className={`block py-2 px-3 rounded-md text-sm ${isActive(l.href) ? 'text-[color:var(--color-primary,#2563EB)] font-semibold bg-blue-50' : 'text-gray-600 hover:bg-gray-50'}`}
                              onClick={() => {
                                setMobileOpen(false)
                                setAboutOpen(false)
                              }}
                            >
                              {l.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div>
                  <button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className={`w-full flex items-center justify-between py-2 px-3 rounded-md ${isActive('/services') ? 'text-[color:var(--color-primary,#2563EB)] font-semibold bg-blue-50' : 'text-gray-700 hover:bg-gray-50'}`}
                  >
                    Services
                    <ChevronDown size={16} className={`transition-transform ${servicesOpen ? 'rotate-180' : 'rotate-0'}`} />
                  </button>
                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="pl-4 space-y-2 mt-2">
                          {serviceColumns.map((col, colIdx) => (
                            <div key={colIdx} className="mb-4">
                              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 px-3">
                                {col.label}
                              </p>
                              {col.items.map((it, idx) => (
                                <Link
                                  key={idx}
                                  href={it.href}
                                  className={`block py-2 px-3 rounded-md text-sm ${isActive(it.href) ? 'text-[color:var(--color-primary,#2563EB)] font-semibold bg-blue-50' : 'text-gray-600 hover:bg-gray-50'}`}
                                  onClick={() => {
                                    setMobileOpen(false)
                                    setServicesOpen(false)
                                  }}
                                >
                                  {it.name}
                                </Link>
                              ))}
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link
                  href="/portfolio"
                  className={`block py-2 px-3 rounded-md ${isActive('/portfolio') ? 'text-[color:var(--color-primary,#2563EB)] font-semibold bg-blue-50' : 'text-gray-700 hover:bg-gray-50'}`}
                  onClick={() => setMobileOpen(false)}
                >
                  Portfolio
                </Link>

                <Link
                  href="/blog"
                  className={`block py-2 px-3 rounded-md ${isActive('/blog') ? 'text-[color:var(--color-primary,#2563EB)] font-semibold bg-blue-50' : 'text-gray-700 hover:bg-gray-50'}`}
                  onClick={() => setMobileOpen(false)}
                >
                  Blog
                </Link>

                <Link
                  href="/contact"
                  className="block py-2 px-3 rounded-md bg-[color:var(--color-primary,#2563EB)] text-white font-semibold text-center hover:bg-[color:var(--color-primary,#2563EB)]/90 transition"
                  onClick={() => setMobileOpen(false)}
                >
                  Contact
                </Link>

                <div className="pt-4 border-t border-gray-200">
                  <div className="flex items-center gap-3 mb-4">
                    <a
                      href="https://wa.me/256765508131"
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-md flex items-center justify-center transition hover:scale-105"
                      aria-label="WhatsApp"
                      style={{ color: '#25D366' }}
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path d="M20.52 3.48A11.86 11.86 0 0012 .04C6.01.04.98 5.07.98 11.06c0 1.95.51 3.86 1.48 5.52L.03 24l7.7-2.02a11.02 11.02 0 004.28.86h.01c6 0 11.03-4.03 11.03-10.02 0-2.68-1.05-5.2-2.53-6.84zM12 21.02c-1.5 0-2.98-.4-4.24-1.12l-.3-.17-4.56 1.2 1.2-4.56-.18-.31A8.86 8.86 0 013.08 11.06c0-4.9 4.03-8.89 8.92-8.89 4.9 0 8.92 3.99 8.92 8.89 0 4.9-4.03 8.89-8.92 8.89z" />
                        <path d="M16.02 13.1c-.2-.1-1.1-.6-1.3-.6-.2-.1-.4-.1-.6.1l-.6.6c-.1.1-.4.1-.7 0-.3-.1-1.1-.4-2.1-1.3-.8-.7-1.3-1.5-1.4-1.8-.1-.3 0-.5.1-.7l.7-1.8c.1-.3 0-.5-.1-.6-.3-.3-.8-.7-1.2-1-.4-.3-1-.1-1.4.1-.5.3-1.7 1.2-1.7 3.1 0 1.8 1.2 3.8 2.6 5.1 1.4 1.3 3.1 2.2 4.9 2.5.7.1 1.4.1 2.1.1 1.3 0 3.2-.6 4-2.4.4-.9.4-1.9.3-2.2 0-.2 0-.4-.2-.5-.1-.2-.9-.5-1.1-.6z" />
                      </svg>
                    </a>
                    {socialLinks.map((s) => {
                      const Icon = s.icon
                      return (
                        <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="p-2 rounded-md text-gray-600 hover:opacity-90" style={{ transition: 'all .12s' }}>
                          <Icon size={18} />
                        </a>
                      )
                    })}
                  </div>

                  <div className="mt-6 text-xs text-gray-500">
                    © {new Date().getFullYear()} Blue Team Africa
                  </div>
                </div>
              </nav>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  )
}
