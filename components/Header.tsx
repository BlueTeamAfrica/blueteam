'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/solutions', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/about', label: 'About' },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-3" onClick={closeMenu}>
            <div className="h-10 w-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-heading font-bold text-lg">BT</span>
            </div>
            <span className="font-heading text-lg text-dark">Blue Team Africa</span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-gray-700 hover:text-primary transition font-medium ${
                pathname === link.href ? 'text-primary' : ''
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="text-gray-700 hover:text-primary transition font-medium"
          >
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="https://wa.me/256765508131"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-3 rounded-full px-4 py-2 bg-primary text-white hover:bg-primary-dark transition"
            aria-label="Chat with Blue Team on WhatsApp +256 765 508 131"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M21.7 4.3A11.9 11.9 0 0012 .1C5.5.1.6 5 .6 11.5c0 2.1.6 4.1 1.8 5.9L.1 24l6.8-1.8c1.6 1 3.6 1.6 5.6 1.6 6.5 0 11.4-4.9 11.4-11.4 0-3.1-1.2-6-3.2-8.1zM12 21.1c-1.7 0-3.4-.5-4.8-1.4l-.3-.2-4.1 1.1 1.1-4.1-.2-.3A8.4 8.4 0 013.6 11.5C3.6 6.7 7.2 3.1 12 3.1c4.9 0 8.4 3.6 8.4 8.4 0 4.9-3.5 8.4-8.4 8.4z"/>
              <path d="M16.1 13.5c-.2-.1-1.1-.6-1.3-.6-.2-.1-.4-.1-.6.1l-.6.6c-.1.1-.4.1-.7 0-.3-.1-1.1-.4-2.1-1.3-.8-.7-1.3-1.5-1.4-1.8-.1-.3 0-.5.1-.7l.7-1.8c.1-.3 0-.5-.1-.6-.3-.3-.8-.7-1.2-1-.4-.3-1-.1-1.4.1-.5.3-1.7 1.2-1.7 3.1 0 1.8 1.2 3.8 2.6 5.1 1.4 1.3 3.1 2.2 4.9 2.5.7.1 1.4.1 2.1.1 1.3 0 3.2-.6 4-2.4.4-.9.4-1.9.3-2.2 0-.2 0-.4-.2-.5-.1-.2-.9-.5-1.1-.6z" />
            </svg>
            <span className="text-sm">+256 765 508 131</span>
          </a>

          <a
            href="tel:+256765508131"
            className="inline-flex items-center justify-center w-11 h-11 rounded-full border border-gray-100 bg-surface text-primary shadow-sm md:hidden"
            aria-label="Call Blue Team +256 765 508 131"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M6.6 10.2c1.1 2.1 2.9 3.9 5 4.9l1.3-.7c.3-.2.7-.2 1 .1l2.2 2.2c-1.5 1-3.3 1.5-5.3 1.5C7.4 18.2 2 12.8 2 6.1 2 4.1 2.5 2.3 3.6 1L5.8 3.2c.3.3.3.8.1 1.1l-.7 1.3z" />
            </svg>
          </a>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-700 hover:text-primary transition"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block text-gray-700 font-medium hover:text-primary transition ${
                pathname === link.href ? 'text-primary' : ''
              }`}
              onClick={closeMenu}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="block text-gray-700 font-medium hover:text-primary transition"
            onClick={closeMenu}
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  )
}

