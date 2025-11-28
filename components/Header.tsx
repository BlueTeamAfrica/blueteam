'use client'

import Link from 'next/link'
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
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [aboutOpen, setAboutOpen] = useState(false)
  const [mobileDropdowns, setMobileDropdowns] = useState({ about: false, services: false })

  const servicesButtonRef = useRef<HTMLButtonElement>(null)
  const servicesDropdownRef = useRef<HTMLDivElement>(null)
  const aboutButtonRef = useRef<HTMLButtonElement>(null)
  const aboutDropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false)
        setServicesOpen(false)
        setAboutOpen(false)
      }
    }
    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [])

  useEffect(() => {
    setOpen(false)
    setMobileDropdowns({ about: false, services: false })
  }, [])

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        servicesOpen &&
        servicesDropdownRef.current &&
        !servicesDropdownRef.current.contains(e.target as Node) &&
        servicesButtonRef.current &&
        !servicesButtonRef.current.contains(e.target as Node)
      ) {
        setServicesOpen(false)
      }
      if (
        aboutOpen &&
        aboutDropdownRef.current &&
        !aboutDropdownRef.current.contains(e.target as Node) &&
        aboutButtonRef.current &&
        !aboutButtonRef.current.contains(e.target as Node)
      ) {
        setAboutOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [servicesOpen, aboutOpen])

  const toggleMobileDropdown = (dropdown: 'about' | 'services') => {
    setMobileDropdowns((prev) => ({ ...prev, [dropdown]: !prev[dropdown] }))
  }

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
      <header
        className={`w-full sticky top-0 left-0 right-0 z-50 transition-shadow duration-300 bg-white/95 backdrop-blur-sm border-b ${
          scrolled ? 'shadow-xl border-gray-200' : 'shadow-sm border-transparent'
        }`}
        role="banner"
      >
        {/* Top Info Bar - using site primary color variable (fallback to #2563EB) */}
        <div style={{ backgroundColor: 'var(--color-primary, #2563EB)' }} className="w-full text-white">
          <div className="max-w-7xl mx-auto px-4 md:px-6 py-2 flex items-center">
            <div className="flex-1" /> {/* left empty to push content to right */}
            <div className="flex items-center gap-4 text-sm">
              <a href="tel:+256765508131" className="font-semibold hover:underline">
                +256 765 508 131
              </a>
              <a href="mailto:contact@blueteamafrica.com" className="hidden sm:inline-block font-semibold hover:underline">
                contact@blueteamafrica.com
              </a>
            </div>
          </div>
        </div>

        {/* Main Navigation Row */}
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-3">
          <div className="flex items-center gap-6">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 flex-shrink-0">
              <div className="w-10 h-10 rounded-md bg-[color:var(--color-primary,#2563EB)] text-white flex items-center justify-center font-bold">
                BT
              </div>
              <span className="font-semibold text-gray-900">Blue Team Africa</span>
            </Link>

            {/* Center nav */}
            <div className="flex-1 flex justify-center">
              <nav className="hidden md:flex items-center gap-6 text-sm font-medium" aria-label="Main navigation">
                <Link href="/" className={`py-2 px-1 ${isActive('/') ? 'text-[color:var(--color-primary,#2563EB)] font-semibold' : 'text-gray-700 hover:text-[color:var(--color-primary,#2563EB)]'}`}>
                  Home
                </Link>

                {/* About dropdown */}
                <div className="relative">
                  <button
                    ref={aboutButtonRef}
                    onClick={() => {
                      setAboutOpen(!aboutOpen)
                      setServicesOpen(false)
                    }}
                    className={`flex items-center gap-1 py-2 px-1 ${isActive('/about') ? 'text-[color:var(--color-primary,#2563EB)] font-semibold' : 'text-gray-700 hover:text-[color:var(--color-primary,#2563EB)]'}`}
                    aria-haspopup="true"
                    aria-expanded={aboutOpen}
                    aria-controls="about-menu"
                  >
                    About
                    <ChevronDown size={14} className={`transition-transform ${aboutOpen ? 'rotate-180' : 'rotate-0'}`} />
                  </button>

                  <AnimatePresence>
                    {aboutOpen && (
                      <motion.div
                        ref={aboutDropdownRef}
                        id="about-menu"
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 0.18 }}
                        className="absolute left-0 top-full mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-100 p-3 z-50"
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
                    ref={servicesButtonRef}
                    onClick={() => {
                      setServicesOpen(!servicesOpen)
                      setAboutOpen(false)
                    }}
                    className={`flex items-center gap-1 py-2 px-1 ${isActive('/services') ? 'text-[color:var(--color-primary,#2563EB)] font-semibold' : 'text-gray-700 hover:text-[color:var(--color-primary,#2563EB)]'}`}
                    aria-haspopup="true"
                    aria-expanded={servicesOpen}
                    aria-controls="services-menu"
                  >
                    Services
                    <ChevronDown size={14} className={`transition-transform ${servicesOpen ? 'rotate-180' : 'rotate-0'}`} />
                  </button>

                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        ref={servicesDropdownRef}
                        id="services-menu"
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.18 }}
                        className="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-[880px] max-w-[calc(100vw-2rem)] bg-white rounded-xl shadow-2xl border border-gray-100 p-6 z-50"
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

                <Link href="/portfolio" className={`py-2 px-1 ${isActive('/portfolio') ? 'text-[color:var(--color-primary,#2563EB)] font-semibold' : 'text-gray-700 hover:text-[color:var(--color-primary,#2563EB)]'}`}>
                  Portfolio
                </Link>

                <Link href="/blog" className={`py-2 px-1 ${isActive('/blog') ? 'text-[color:var(--color-primary,#2563EB)] font-semibold' : 'text-gray-700 hover:text-[color:var(--color-primary,#2563EB)]'}`}>
                  Blog
                </Link>

                {/* Contact inline as part of nav */}
                <Link
                  href="/contact"
                  className="ml-2 inline-flex items-center gap-2 px-4 py-2 bg-[color:var(--color-primary,#2563EB)] text-white rounded-full text-sm font-semibold shadow-sm hover:bg-[color:var(--color-primary,#2563EB)]/90 transition"
                >
                  Contact
                </Link>
              </nav>
            </div>

            {/* Right area (desktop): WhatsApp icon + social icons */}
            <div className="hidden md:flex items-center gap-3 flex-shrink-0">
              {/* WhatsApp icon with default WhatsApp green */}
              <a
                href="https://wa.me/256765508131"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-md flex items-center justify-center transition hover:scale-105"
                aria-label="WhatsApp"
                title="Chat on WhatsApp"
                style={{ color: '#25D366' }}
              >
                {/* WhatsApp SVG (fill = currentColor) */}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M20.52 3.48A11.86 11.86 0 0012 .04C6.01.04.98 5.07.98 11.06c0 1.95.51 3.86 1.48 5.52L.03 24l7.7-2.02a11.02 11.02 0 004.28.86h.01c6 0 11.03-4.03 11.03-10.02 0-2.68-1.05-5.2-2.53-6.84zM12 21.02c-1.5 0-2.98-.4-4.24-1.12l-.3-.17-4.56 1.2 1.2-4.56-.18-.31A8.86 8.86 0 013.08 11.06c0-4.9 4.03-8.89 8.92-8.89 4.9 0 8.92 3.99 8.92 8.89 0 4.9-4.03 8.89-8.92 8.89z" />
                  <path d="M16.02 13.1c-.2-.1-1.1-.6-1.3-.6-.2-.1-.4-.1-.6.1l-.6.6c-.1.1-.4.1-.7 0-.3-.1-1.1-.4-2.1-1.3-.8-.7-1.3-1.5-1.4-1.8-.1-.3 0-.5.1-.7l.7-1.8c.1-.3 0-.5-.1-.6-.3-.3-.8-.7-1.2-1-.4-.3-1-.1-1.4.1-.5.3-1.7 1.2-1.7 3.1 0 1.8 1.2 3.8 2.6 5.1 1.4 1.3 3.1 2.2 4.9 2.5.7.1 1.4.1 2.1.1 1.3 0 3.2-.6 4-2.4.4-.9.4-1.9.3-2.2 0-.2 0-.4-.2-.5-.1-.2-.9-.5-1.1-.6z" />
                </svg>
              </a>

              {/* Social icons with hover brand color */}
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
                        el.style.color = '#6B7280'
                        el.style.backgroundColor = 'transparent'
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
              onClick={() => setOpen(!open)}
              type="button"
              aria-controls="mobile-menu"
              aria-expanded={open}
              className="md:hidden ml-auto p-2 rounded-lg border border-gray-200 text-gray-700 hover:text-[color:var(--color-primary,#2563EB)] hover:border-[color:var(--color-primary,#2563EB)] transition min-h-[44px] min-w-[44px]"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {open && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/40 z-40 md:hidden"
                onClick={() => setOpen(false)}
              />

              <motion.aside
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', damping: 30, stiffness: 300 }}
                className="fixed right-0 top-0 h-full w-[320px] bg-white shadow-2xl z-50 md:hidden"
                role="dialog"
                aria-label="Mobile navigation"
              >
                <div className="p-6 flex flex-col h-full">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-md bg-[color:var(--color-primary,#2563EB)] text-white flex items-center justify-center font-bold">BT</div>
                      <span className="font-semibold">Blue Team Africa</span>
                    </div>
                    <button onClick={() => setOpen(false)} className="p-2 rounded hover:bg-gray-100">
                      <X size={20} />
                    </button>
                  </div>

                  <nav className="flex-1 overflow-y-auto">
                    <Link href="/" onClick={() => setOpen(false)} className="block px-3 py-3 rounded hover:bg-gray-50">Home</Link>

                    {/* Mobile about */}
                    <div>
                      <button onClick={() => toggleMobileDropdown('about')} className="w-full flex items-center justify-between px-3 py-3 rounded hover:bg-gray-50">
                        About
                        <ChevronDown className={`${mobileDropdowns.about ? 'rotate-180' : ''}`} />
                      </button>
                      {mobileDropdowns.about && (
                        <div className="pl-4 mt-2 space-y-1">
                          {aboutLinks.map((l, i) => <Link key={i} href={l.href} onClick={() => setOpen(false)} className="block px-3 py-2 rounded hover:bg-gray-50 text-sm">{l.name}</Link>)}
                        </div>
                      )}
                    </div>

                    {/* Mobile services */}
                    <div className="mt-2">
                      <button onClick={() => toggleMobileDropdown('services')} className="w-full flex items-center justify-between px-3 py-3 rounded hover:bg-gray-50">
                        Services
                        <ChevronDown className={`${mobileDropdowns.services ? 'rotate-180' : ''}`} />
                      </button>

                      {mobileDropdowns.services && (
                        <div className="pl-4 mt-2 space-y-1">
                          {serviceColumns.map((col) => col.items.map((it, idx) => (
                            <Link key={idx} href={it.href} onClick={() => setOpen(false)} className="block px-3 py-2 rounded hover:bg-gray-50 text-sm">{it.name}</Link>
                          )))}
                        </div>
                      )}
                    </div>

                    <Link href="/portfolio" onClick={() => setOpen(false)} className="block px-3 py-3 rounded hover:bg-gray-50">Portfolio</Link>
                    <Link href="/blog" onClick={() => setOpen(false)} className="block px-3 py-3 rounded hover:bg-gray-50">Blog</Link>

                    <Link href="/contact" onClick={() => setOpen(false)} className="mt-3 inline-flex items-center justify-center gap-2 px-4 py-3 bg-[color:var(--color-primary,#2563EB)] text-white rounded-full">Contact</Link>

                    <div className="mt-6">
                      <a href="https://wa.me/256765508131" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-3 bg-gray-100 rounded-lg w-full justify-center">
                        {/* WhatsApp small icon */}
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="#25D366" xmlns="http://www.w3.org/2000/svg">
                          <path d="M20.52 3.48A11.86 11.86 0 0012 .04C6.01.04.98 5.07.98 11.06c0 1.95.51 3.86 1.48 5.52L.03 24l7.7-2.02a11.02 11.02 0 004.28.86h.01c6 0 11.03-4.03 11.03-10.02 0-2.68-1.05-5.2-2.53-6.84zM12 21.02c-1.5 0-2.98-.4-4.24-1.12l-.3-.17-4.56 1.2 1.2-4.56-.18-.31A8.86 8.86 0 013.08 11.06c0-4.9 4.03-8.89 8.92-8.89 4.9 0 8.92 3.99 8.92 8.89 0 4.9-4.03 8.89-8.92 8.89z"/>
                          <path d="M16.02 13.1c-.2-.1-1.1-.6-1.3-.6-.2-.1-.4-.1-.6.1l-.6.6c-.1.1-.4.1-.7 0-.3-.1-1.1-.4-2.1-1.3-.8-.7-1.3-1.5-1.4-1.8-.1-.3 0-.5.1-.7l.7-1.8c.1-.3 0-.5-.1-.6-.3-.3-.8-.7-1.2-1-.4-.3-1-.1-1.4.1-.5.3-1.7 1.2-1.7 3.1 0 1.8 1.2 3.8 2.6 5.1 1.4 1.3 3.1 2.2 4.9 2.5.7.1 1.4.1 2.1.1 1.3 0 3.2-.6 4-2.4.4-.9.4-1.9.3-2.2 0-.2 0-.4-.2-.5-.1-.2-.9-.5-1.1-.6z"/>
                        </svg>
                        WhatsApp Us
                      </a>
                    </div>
                  </nav>

                  <div className="mt-6 text-xs text-gray-500">
                    © {new Date().getFullYear()} Blue Team Africa
                  </div>
                </div>
              </motion.aside>
            </>
          )}
        </AnimatePresence>
      </header>
    </>
  )
}
