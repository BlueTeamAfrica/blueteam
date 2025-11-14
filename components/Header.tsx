'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/solutions', label: 'Solutions' },
  { href: '/about', label: 'About' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/blog', label: 'Blog' },
  { href: '/faq', label: 'FAQ' },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50 backdrop-blur-sm bg-white/95">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-2xl md:text-3xl font-bold text-blue-600 hover:text-blue-700 transition"
            onClick={closeMenu}
          >
            Blue Team Africa
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-gray-700 hover:text-blue-600 transition font-medium ${
                  pathname === link.href ? 'text-blue-600' : ''
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition shadow-md hover:shadow-lg"
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-700 hover:text-blue-600 transition"
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

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-white border border-gray-100 rounded-lg shadow-lg p-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block text-gray-700 font-medium hover:text-blue-600 transition ${
                  pathname === link.href ? 'text-blue-600' : ''
                }`}
                onClick={closeMenu}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="block text-center bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition shadow-md hover:shadow-lg"
              onClick={closeMenu}
            >
              Contact
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}

