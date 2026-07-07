'use client'

import Link from 'next/link'
import { Phone, Mail, MapPin, Facebook, X, Linkedin, Instagram, Youtube } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const aboutLinks = [
    { label: 'About Us', href: '/about' },
    { label: 'Our Team', href: '/team' },
    { label: 'Our Mission', href: '/mission' },
    { label: 'Our Process', href: '/process' },
  ]

  const servicesLinks = [
    { label: 'Web Design', href: '/services/web-design' },
    { label: 'Web Design in Rwanda', href: '/web-design-rwanda' },
    { label: 'Web Development in Rwanda', href: '/web-development-rwanda' },
    { label: 'Mobile App Development', href: '/services/mobile-apps' },
    { label: 'Cloud & Web Hosting', href: '/services/hosting' },
    { label: 'ERP Systems', href: '/services/erp' },
    { label: 'CRM Solutions', href: '/services/crm' },
    { label: 'Cybersecurity', href: '/services/cybersecurity' },
    { label: 'E-commerce Development', href: '/services/ecommerce' },
    { label: 'UI/UX Design', href: '/services/ui-ux' },
  ]

  const quickLinks = [
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Blog', href: '/blog' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Contact', href: '/contact' },
  ]

  const legalLinks = [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Cookie Policy', href: '/cookies' },
  ]

  const socialLinks = [
    { 
      label: 'Facebook', 
      href: 'https://www.facebook.com/profile.php?id=61585128246041', 
      icon: Facebook 
    },
    { 
      label: 'X (Twitter)', 
      href: 'https://x.com/BLUETEAMAFRICA', 
      icon: X 
    },
    { 
      label: 'LinkedIn', 
      href: 'https://www.linkedin.com/company/blue-team-africa', 
      icon: Linkedin 
    },
    { 
      label: 'Instagram', 
      href: 'https://www.instagram.com/blueteamafrica/', 
      icon: Instagram 
    },
    { 
      label: 'YouTube', 
      href: 'https://youtube.com/@BLUETEAMAFRICA', 
      icon: Youtube 
    },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Column 1: Company Info with Logo & Tagline */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4 hover:opacity-90 transition-opacity">
              <div className="w-12 h-12 rounded-lg bg-primary text-white flex items-center justify-center font-heading font-bold text-lg shadow-lg">
                BT
              </div>
              <span className="text-xl font-heading font-semibold">
                Blue Team Africa
              </span>
            </Link>
            <p className="text-gray-400 mb-4 leading-relaxed text-sm">
              Blue Team Africa provides high-performance web design, hosting, branding, and digital solutions for NGOs, companies, and startups across East Africa. Built with precision, powered by technology, and crafted with psylo.
            </p>
            
            {/* Location */}
            <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
              <MapPin className="w-4 h-4 flex-shrink-0" />
              <span>Kigali, Rwanda</span>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg bg-gray-800 hover:bg-primary flex items-center justify-center transition-colors group"
                    aria-label={`Follow us on ${social.label}`}
                  >
                    <Icon 
                      className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" 
                      aria-hidden="true"
                    />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Column 2: About */}
          <div>
            <h3 className="text-white font-semibold text-base mb-5">About</h3>
            <ul className="space-y-3">
              {aboutLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="navlink-underline text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="text-white font-semibold text-base mb-5">Services</h3>
            <ul className="space-y-3">
              {servicesLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="navlink-underline text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Quick Links & Contact */}
          <div>
            <h3 className="text-white font-semibold text-base mb-5">Quick Links</h3>
            <ul className="space-y-3 mb-6">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="navlink-underline text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Contact Info */}
            <div className="space-y-3">
              <a
                href="tel:+254119402737"
                className="flex items-center gap-2 text-gray-400 hover:text-primary transition-colors text-sm group"
              >
                <Phone className="w-4 h-4 flex-shrink-0 group-hover:text-primary" />
                <span>+254 119 402 737</span>
              </a>
              <a
                href="tel:+250798973375"
                className="flex items-center gap-2 text-gray-400 hover:text-primary transition-colors text-sm group"
              >
                <Phone className="w-4 h-4 flex-shrink-0 group-hover:text-primary" />
                <span>+250 798 973 375</span>
              </a>
              <a
                href="mailto:contact@blueteamafrica.com"
                className="flex items-center gap-2 text-gray-400 hover:text-primary transition-colors text-sm group"
              >
                <Mail className="w-4 h-4 flex-shrink-0 group-hover:text-primary" />
                <span className="break-all">contact@blueteamafrica.com</span>
              </a>
              <a
                href="https://wa.me/254119402737"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] text-white px-4 py-2 rounded-lg hover:bg-[#20BA5A] transition-colors text-sm font-medium mt-2"
              >
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M21.7 4.3A11.9 11.9 0 0012 .1C5.5.1.6 5 .6 11.5c0 2.1.6 4.1 1.8 5.9L.1 24l6.8-1.8c1.6 1 3.6 1.6 5.6 1.6 6.5 0 11.4-4.9 11.4-11.4 0-3.1-1.2-6-3.2-8.1z" />
                </svg>
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Trust / Recognition Section */}
        <div className="border-t border-gray-800 pt-8 pb-6">
          <p className="text-gray-400 text-sm text-center mb-4">Trusted by industry research platforms</p>
          <div className="flex justify-center">
            <a
              href="https://www.goodfirms.co/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GoodFirms verified digital solutions company in East Africa"
              className="inline-block"
            >
              <img
                src="/images/Goodfirms-newlogo-kit/PNG/gf-logo-horizontal-light.png"
                alt="GoodFirms verified digital solutions company in East Africa"
                width={180}
                height={50}
                loading="lazy"
                className="opacity-90 hover:opacity-100 transition"
              />
            </a>
          </div>
        </div>

        {/* Bottom Bar: Legal Links & Copyright */}
        <div className="border-t border-gray-800 pt-8">
          <p className="text-gray-400 text-sm text-center mb-4">Serving businesses and NGOs across Rwanda. Explore our <Link href="/web-development-rwanda" className="text-gray-300 hover:text-white transition-colors underline">Web Development in Rwanda</Link> services.</p>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-gray-400 text-sm text-center md:text-left">
              &copy; {currentYear} Blue Team Africa. All rights reserved.
            </p>

            {/* Legal Links */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
              {legalLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="navlink-underline text-gray-400 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
