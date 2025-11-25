'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Phone, Mail, ChevronDown, MessageCircle, Menu, X, Facebook, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react'
import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// ORACOM-STYLE EXACT DROPDOWN HEADER (React + Tailwind)
export default function Header() {
  const pathname = usePathname()
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
  
  // Helper function to check if a route is active
  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/'
    }
    return pathname.startsWith(href)
  }
  
  // Check if any service route is active (for Services dropdown button)
  const isServicesActive = () => {
    return pathname.startsWith('/services/')
  }
  
  // Check if any about route is active (for About dropdown button)
  const isAboutActive = () => {
    return pathname === '/about' || pathname.startsWith('/about/') || pathname === '/team' || pathname === '/process'
  }

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

  // X.com Icon Component (Twitter replacement) - Official X logo
  const XIcon = ({ size, className, style }: { size: number; className?: string; style?: React.CSSProperties }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} style={style} xmlns="http://www.w3.org/2000/svg">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  )

  const socialLinks = [
    { 
      label: 'Facebook', 
      href: 'https://facebook.com/blueteamafrica', 
      icon: Facebook,
      color: '#1877F2'
    },
    { 
      label: 'X (Twitter)', 
      href: 'https://twitter.com/blueteamafrica', 
      icon: XIcon,
      color: '#000000'
    },
    { 
      label: 'LinkedIn', 
      href: 'https://linkedin.com/company/blueteamafrica', 
      icon: Linkedin,
      color: '#0A66C2'
    },
    { 
      label: 'Instagram', 
      href: 'https://instagram.com/blueteamafrica', 
      icon: Instagram,
      color: '#E4405F'
    },
    { 
      label: 'YouTube', 
      href: 'https://youtube.com/@blueteamafrica', 
      icon: Youtube,
      color: '#FF0000'
    },
  ]

  return (
    <>
      <header
        className={`w-full bg-white fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'shadow-md' : 'shadow-sm'
        }`}
        role="banner"
      >
        {/* Top Bar (phone + email + social) - Oracom Style */}
        <div className="flex items-center justify-between md:justify-end px-4 md:px-6 py-2 md:py-2.5 text-white border-b" style={{ backgroundColor: 'var(--color-primary)', borderColor: 'var(--color-primary-dark)' }}>
          {/* Mobile Layout: Phone (left) + Social Icons (right) */}
          {/* Desktop Layout: Phone + Email (right only) */}
          <div className="flex items-center gap-3 md:gap-4 w-full md:w-auto">
            {/* Phone - Left on mobile, part of right group on desktop */}
            <a
              href="tel:+256765508131"
              className="flex items-center gap-1.5 md:gap-2 text-xs md:text-sm font-semibold hover:text-gray-100 transition-colors flex-shrink-0"
            >
              <Phone size={14} className="md:w-4 md:h-4 text-white" /> 
              <span className="font-bold">+256 765 508 131</span>
            </a>

            {/* Social Icons - Right on mobile, hidden on desktop */}
            <div className="flex items-center gap-1.5 md:hidden ml-auto">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded transition-all duration-300 hover:opacity-0 hover:scale-0"
                    aria-label={social.label}
                  >
                    {social.label === 'X (Twitter)' ? (
                      <XIcon size={16} className="text-white" />
                    ) : (
                      <Icon size={16} className="text-white" />
                    )}
                  </a>
                )
              })}
            </div>

            {/* Email - Hidden on mobile, visible on desktop */}
            <a
              href="mailto:contact@blueteamafrica.com"
              className="hidden md:flex items-center gap-2 text-sm font-semibold hover:text-gray-100 transition-colors"
            >
              <Mail size={16} className="text-white" /> 
              <span className="font-bold">contact@blueteamafrica.com</span>
            </a>
          </div>
        </div>

        {/* Main Navigation */}
        <div ref={containerRef} className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between relative">
          {/* Logo - Left */}
          <Link href="/" className="flex items-center gap-2 text-xl font-heading font-semibold text-gray-900 flex-shrink-0 h-full">
            <div className="w-10 h-10 bg-primary text-white flex items-center justify-center font-heading font-bold rounded-md">
              BT
            </div>
            Blue Team Africa
          </Link>

          {/* Nav - Center */}
          <nav
            ref={navRef}
            className="hidden md:flex items-center justify-center gap-6 text-sm text-gray-800 font-medium absolute left-1/2 transform -translate-x-1/2 h-full"
            role="navigation"
            aria-label="Main navigation"
          >
            <Link 
              href="/" 
              className={`navlink-underline whitespace-nowrap py-2.5 transition-colors hover:text-primary flex items-center ${
                isActive('/') ? 'text-primary active' : ''
              }`}
            >
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
                className={`navlink-underline flex items-center gap-1 py-2.5 transition-colors hover:text-primary select-none ${
                  isAboutActive() ? 'text-primary active' : ''
                }`}
                aria-haspopup="true"
                aria-expanded={aboutOpen}
                aria-controls="about-dropdown"
              >
                About
                <ChevronDown size={14} className={`mt-0.5 transition-transform duration-200 ${aboutOpen ? 'rotate-180' : ''}`} />
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
                    className="absolute left-0 top-full mt-2 w-[220px] bg-white shadow-2xl rounded-lg p-3 border border-gray-100 z-[60]"
                  >
                    <ul className="space-y-0.5" role="none">
                      {aboutLinks.map((link, idx) => (
                        <li key={idx} role="none">
                          <Link
                            href={link.href}
                            role="menuitem"
                            className={`navlink-underline text-gray-700 hover:text-primary transition-colors text-sm block py-2 px-3 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                              isActive(link.href) ? 'text-primary active' : ''
                            }`}
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
                className={`navlink-underline flex items-center gap-1 py-2.5 transition-colors hover:text-primary select-none ${
                  isServicesActive() ? 'text-primary active' : ''
                }`}
                aria-haspopup="true"
                aria-expanded={servicesOpen}
                aria-controls="services-dropdown"
              >
                Services
                <ChevronDown size={14} className={`mt-0.5 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
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
                    className="absolute left-0 top-full mt-2 w-[750px] max-w-[calc(100vw-2rem)] bg-white shadow-2xl rounded-lg p-5 flex flex-col md:flex-row gap-6 border border-gray-100 z-[60]"
                  >
                    {serviceColumns.map((col, i) => (
                      <div key={i} className="flex-1 min-w-0">
                        <p className="text-[10px] uppercase tracking-wider text-gray-500 mb-3 font-semibold">
                          {col.label}
                        </p>
                        <ul className="space-y-1.5" role="none">
                          {col.items.map((item, idx) => (
                            <li key={idx} role="none">
                              <Link
                                href={item.href}
                                role="menuitem"
                                className={`navlink-underline text-gray-700 hover:text-primary transition-colors text-sm block py-1.5 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded px-1 -mx-1 ${
                                  isActive(item.href) ? 'text-primary active' : ''
                                }`}
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

            <Link 
              href="/portfolio" 
              className={`navlink-underline whitespace-nowrap py-2.5 transition-colors hover:text-primary flex items-center ${
                isActive('/portfolio') ? 'text-primary active' : ''
              }`}
            >
              Portfolio
            </Link>
            <Link 
              href="/blog" 
              className={`navlink-underline whitespace-nowrap py-2.5 transition-colors hover:text-primary flex items-center ${
                isActive('/blog') ? 'text-primary active' : ''
              }`}
            >
              Blog
            </Link>
            <Link 
              href="/contact" 
              className={`navlink-underline whitespace-nowrap py-2.5 transition-colors hover:text-primary flex items-center ${
                isActive('/contact') ? 'text-primary active' : ''
              }`}
            >
              Contact
            </Link>
        </nav>

          {/* Social Icons - Desktop Only (Right Side) */}
          <div className="hidden md:flex items-center justify-center gap-2 flex-shrink-0 h-full">
            {socialLinks.map((social) => {
              const Icon = social.icon
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg transition-all duration-300 hover:scale-110 text-gray-600"
                  aria-label={social.label}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = social.color
                    e.currentTarget.style.backgroundColor = `${social.color}20`
                    // Update icon color for Lucide icons (use stroke)
                    const svg = e.currentTarget.querySelector('svg')
                    if (svg) {
                      svg.style.color = social.color
                      svg.style.stroke = social.color
                      // Update all paths inside (Lucide uses stroke)
                      svg.querySelectorAll('path').forEach((path) => {
                        if (path.getAttribute('fill') && path.getAttribute('fill') !== 'none') {
                          path.setAttribute('fill', social.color)
                        }
                        if (path.getAttribute('stroke') && path.getAttribute('stroke') !== 'none') {
                          path.setAttribute('stroke', social.color)
                        }
                      })
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#6B7280'
                    e.currentTarget.style.backgroundColor = 'transparent'
                    // Reset icon color
                    const svg = e.currentTarget.querySelector('svg')
                    if (svg) {
                      svg.style.color = '#6B7280'
                      svg.style.stroke = '#6B7280'
                      // Reset all paths inside
                      svg.querySelectorAll('path').forEach((path) => {
                        if (path.getAttribute('fill') && path.getAttribute('fill') !== 'none') {
                          path.setAttribute('fill', '#6B7280')
                        }
                        if (path.getAttribute('stroke') && path.getAttribute('stroke') !== 'none') {
                          path.setAttribute('stroke', '#6B7280')
                        }
                      })
                    }
                  }}
                >
                  {social.label === 'X (Twitter)' ? (
                    <XIcon size={18} style={{ fill: 'currentColor', color: '#6B7280' }} />
                  ) : (
                    <Icon 
                      size={18} 
                      strokeWidth={2} 
                      className="text-gray-600"
                      style={{ color: '#6B7280' }}
                    />
                  )}
                </a>
              )
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-lg border border-gray-300 text-gray-700 hover:border-primary hover:text-primary transition flex items-center justify-center h-full"
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
