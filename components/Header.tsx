'use client'

import Link from 'next/link'
import { Phone, Mail, ChevronDown, MessageCircle, Menu, X } from 'lucide-react'
import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// ORACOM-STYLE EXACT DROPDOWN HEADER (React + Tailwind)
export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [aboutOpen, setAboutOpen] = useState(false)
  const [mobileDropdowns, setMobileDropdowns] = useState({
    about: false,
    services: false,
  })
  const servicesButtonRef = useRef<HTMLButtonElement>(null)
  const servicesDropdownRef = useRef<HTMLDivElement>(null)
  const aboutButtonRef = useRef<HTMLButtonElement>(null)
  const aboutDropdownRef = useRef<HTMLDivElement>(null)
  const navRef = useRef<HTMLElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close dropdowns and mobile menu on ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (open) setOpen(false)
        if (servicesOpen) setServicesOpen(false)
        if (aboutOpen) setAboutOpen(false)
      }
    }
    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [open, servicesOpen, aboutOpen])

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false)
    setMobileDropdowns({ about: false, services: false })
  }, [])

  // Close dropdowns on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      // Close Services dropdown
      if (
        servicesOpen &&
        servicesDropdownRef.current &&
        !servicesDropdownRef.current.contains(e.target as Node) &&
        servicesButtonRef.current &&
        !servicesButtonRef.current.contains(e.target as Node)
      ) {
        setServicesOpen(false)
      }

      // Close About dropdown
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

  // Focus first item when Services dropdown opens
  useEffect(() => {
    if (servicesOpen && servicesDropdownRef.current) {
      const firstLink = servicesDropdownRef.current.querySelector<HTMLAnchorElement>('a[href]')
      if (firstLink) {
        setTimeout(() => firstLink.focus(), 100)
      }
    }
  }, [servicesOpen])

  // Focus first item when About dropdown opens
  useEffect(() => {
    if (aboutOpen && aboutDropdownRef.current) {
      const firstLink = aboutDropdownRef.current.querySelector<HTMLAnchorElement>('a[href]')
      if (firstLink) {
        setTimeout(() => firstLink.focus(), 100)
      }
    }
  }, [aboutOpen])

  const toggleMobileDropdown = (dropdown: 'about' | 'services') => {
    setMobileDropdowns((prev) => ({
      ...prev,
      [dropdown]: !prev[dropdown],
    }))
  }

  const serviceColumns = [
    {
      label: 'Development',
      items: [
        { name: 'Web Design & Development', href: '/services/web-design' },
        { name: 'Mobile App Development', href: '/services/mobile-apps' },
        { name: 'CRM Solutions', href: '/services/crm' },
      ],
    },
    {
      label: 'Cloud & Hosting',
      items: [
        { name: 'Cloud & Web Hosting', href: '/services/hosting' },
        { name: 'ERP Systems', href: '/services/erp' },
        { name: 'Cybersecurity', href: '/services/cybersecurity' },
      ],
    },
    {
      label: 'Digital Solutions',
      items: [
        { name: 'IT Consultancy', href: '/services/consulting' },
        { name: 'System Integration', href: '/services/system-integration' },
        { name: 'Digital Transformation', href: '/services/digital-transformation' },
      ],
    },
  ]

  const aboutLinks = [
    { name: 'Who We Are', href: '/about' },
    { name: 'Our Team', href: '/team' },
    { name: 'Our Process', href: '/process' },
  ]

  return (
    <>
      <header
        className={`w-full bg-white shadow-sm sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? 'shadow-md' : ''
        }`}
        role="banner"
      >
        {/* Top Bar (phone + email + WhatsApp) */}
        <div className="hidden md:flex items-center justify-end text-sm text-gray-600 px-6 py-2 bg-gray-50 border-b border-gray-200">
          <div className="flex items-center gap-6">
            <a
              href="tel:+256765508131"
              className="flex items-center gap-1 hover:text-primary transition"
            >
              <Phone size={14} /> +256 765 508 131
            </a>
            <a
              href="mailto:contact@blueteamafrica.com"
              className="flex items-center gap-1 hover:text-primary transition"
            >
              <Mail size={14} /> contact@blueteamafrica.com
            </a>
            <a
              href="https://wa.me/256765508131"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-primary text-white px-3 py-1.5 rounded-lg text-sm shadow hover:bg-primary-dark transition"
            >
              <MessageCircle size={15} /> WhatsApp Us
            </a>
          </div>
        </div>

        {/* Main Navigation */}
        <div ref={containerRef} className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between relative">
          {/* Logo - Left */}
          <Link href="/" className="flex items-center gap-2 text-xl font-heading font-semibold text-gray-900 flex-shrink-0">
            <div className="w-10 h-10 bg-primary text-white flex items-center justify-center font-heading font-bold rounded-md">
              BT
            </div>
            Blue Team Africa
          </Link>

          {/* Nav - Center */}
          <nav
            ref={navRef}
            className="hidden md:flex items-center gap-8 text-gray-800 font-medium absolute left-1/2 transform -translate-x-1/2"
            role="navigation"
            aria-label="Main navigation"
          >
            <Link href="/" className="hover:text-primary transition whitespace-nowrap">
              Home
            </Link>

            {/* About Dropdown */}
            <div className="relative">
              <button
                ref={aboutButtonRef}
                id="about-btn"
                onClick={() => {
                  setAboutOpen(!aboutOpen)
                  if (servicesOpen) setServicesOpen(false)
                }}
                className="flex items-center gap-1 hover:text-primary transition select-none"
                aria-haspopup="true"
                aria-expanded={aboutOpen}
                aria-controls="about-dropdown"
              >
                About
                <ChevronDown size={16} className={`mt-0.5 transition-transform duration-200 ${aboutOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {aboutOpen && (
                  <motion.div
                    ref={aboutDropdownRef}
                    id="about-dropdown"
                    role="menu"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2, ease: 'easeOut' }}
                    className="absolute left-0 top-full mt-3 w-[240px] bg-white shadow-2xl rounded-xl p-4 border border-gray-100 z-[60]"
                  >
                    <ul className="space-y-2" role="none">
                      {aboutLinks.map((link, idx) => (
                        <li key={idx} role="none">
                          <Link
                            href={link.href}
                            role="menuitem"
                            className="text-gray-800 hover:text-primary transition-colors text-sm block py-2 px-2 rounded-lg hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                            onClick={() => setAboutOpen(false)}
                          >
                            {link.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* SERVICES DROPDOWN - Click-based with animations */}
            <div className="relative">
              <button
                ref={servicesButtonRef}
                id="services-btn"
                onClick={() => {
                  setServicesOpen(!servicesOpen)
                  if (aboutOpen) setAboutOpen(false)
                }}
                className="flex items-center gap-1 hover:text-primary transition select-none"
                aria-haspopup="true"
                aria-expanded={servicesOpen}
                aria-controls="services-dropdown"
              >
                Services
                <ChevronDown size={16} className={`mt-0.5 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    ref={servicesDropdownRef}
                    id="services-dropdown"
                    role="menu"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2, ease: 'easeOut' }}
                    className="absolute left-0 top-full mt-3 w-[750px] max-w-[calc(100vw-2rem)] bg-white shadow-2xl rounded-xl p-6 flex flex-col md:flex-row gap-8 border border-gray-100 z-[60]"
                  >
                    {serviceColumns.map((col, i) => (
                      <div key={i} className="flex-1 min-w-0">
                        <p className="text-xs uppercase tracking-wide text-gray-500 mb-4 font-semibold">
                          {col.label}
                        </p>
                        <ul className="space-y-3" role="none">
                          {col.items.map((item, idx) => (
                            <li key={idx} role="none">
                              <Link
                                href={item.href}
                                role="menuitem"
                                className="text-gray-800 hover:text-blue-600 transition-colors text-sm block focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded px-1 py-0.5 -mx-1 -my-0.5"
                                onClick={() => setServicesOpen(false)}
                              >
                                {item.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/portfolio" className="hover:text-primary transition whitespace-nowrap">
              Portfolio
            </Link>
            <Link href="/blog" className="hover:text-primary transition whitespace-nowrap">
              Blog
            </Link>
            <Link href="/contact" className="hover:text-primary transition whitespace-nowrap">
            Contact
          </Link>
        </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-lg border border-gray-300 text-gray-700 hover:border-primary hover:text-primary transition"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu - Oracom Style (Slide in from right) */}
        <AnimatePresence>
          {open && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/50 z-40 md:hidden"
                onClick={() => setOpen(false)}
              />

              {/* Mobile Menu Panel */}
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', damping: 30, stiffness: 300 }}
                className="fixed top-0 right-0 h-full w-[320px] bg-white shadow-2xl z-50 md:hidden overflow-y-auto"
              >
                <div className="p-6">
                  {/* Mobile Menu Header */}
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-lg font-heading font-semibold text-gray-900">
                      Menu
                    </h2>
                    <button
                      onClick={() => setOpen(false)}
                      className="p-2 rounded-lg hover:bg-gray-100 transition"
                      aria-label="Close menu"
                    >
                      <X size={20} className="text-gray-700" />
                    </button>
      </div>

                  {/* Mobile Navigation */}
                  <nav className="flex flex-col gap-2">
                    <Link
                      href="/"
                      onClick={() => setOpen(false)}
                      className="px-4 py-3 text-gray-700 hover:text-primary hover:bg-blue-50 rounded-lg transition font-medium"
                    >
                      Home
                    </Link>

                    {/* About Dropdown in Mobile */}
                    <div>
                      <button
                        onClick={() => toggleMobileDropdown('about')}
                        className="w-full flex items-center justify-between px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition font-medium"
                      >
                        About
                        <ChevronDown
                          size={18}
                          className={`transition-transform ${
                            mobileDropdowns.about ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      {mobileDropdowns.about && (
                        <div className="pl-4 mt-2 space-y-1">
                          {aboutLinks.map((link, idx) => (
            <Link
                              key={idx}
              href={link.href}
                              onClick={() => setOpen(false)}
                              className="block px-4 py-2 text-sm text-gray-600 hover:text-primary hover:bg-blue-50 rounded-lg transition"
                            >
                              {link.name}
            </Link>
          ))}
                        </div>
                      )}
                    </div>

                    {/* Services Dropdown in Mobile */}
                    <div>
                      <button
                        onClick={() => toggleMobileDropdown('services')}
                        className="w-full flex items-center justify-between px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition font-medium"
                      >
                        Services
                        <ChevronDown
                          size={18}
                          className={`transition-transform ${
                            mobileDropdowns.services ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      {mobileDropdowns.services && (
                        <div className="pl-4 mt-2 space-y-1">
                          {serviceColumns.map((col) =>
                            col.items.map((item, idx) => (
                              <Link
                                key={idx}
                                href={item.href}
                                onClick={() => setOpen(false)}
                                className="block px-4 py-2 text-sm text-gray-600 hover:text-primary hover:bg-blue-50 rounded-lg transition"
                              >
                                {item.name}
                              </Link>
                            ))
                          )}
                        </div>
                      )}
                    </div>

                    <Link
                      href="/portfolio"
                      onClick={() => setOpen(false)}
                      className="px-4 py-3 text-gray-700 hover:text-primary hover:bg-blue-50 rounded-lg transition font-medium"
                    >
                      Portfolio
                    </Link>
                    <Link
                      href="/blog"
                      onClick={() => setOpen(false)}
                      className="px-4 py-3 text-gray-700 hover:text-primary hover:bg-blue-50 rounded-lg transition font-medium"
                    >
                      Blog
                    </Link>
          <Link
            href="/contact"
                      onClick={() => setOpen(false)}
                      className="px-4 py-3 text-gray-700 hover:text-primary hover:bg-blue-50 rounded-lg transition font-medium"
          >
            Contact
          </Link>

                    {/* WhatsApp CTA in Mobile */}
                    <a
                      href="https://wa.me/256765508131"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setOpen(false)}
                      className="mt-4 inline-flex items-center justify-center gap-2 bg-primary text-white px-4 py-3 rounded-lg hover:bg-primary-dark transition font-medium"
                    >
                      <MessageCircle size={18} />
                      WhatsApp Us
                    </a>
                  </nav>
        </div>
              </motion.div>
            </>
      )}
        </AnimatePresence>
    </header>
    </>
  )
}
