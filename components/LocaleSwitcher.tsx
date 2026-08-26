'use client'

import { useLocale } from 'next-intl'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

/**
 * Switches the current page between EN and AR while preserving the path.
 *
 * With localePrefix: 'as-needed':
 *   EN paths have no prefix:  /services/cybersecurity
 *   AR paths are prefixed:    /ar/services/cybersecurity
 *
 * usePathname() from next/navigation returns the raw path including the /ar
 * prefix when on an AR page, so we can manipulate it directly.
 */
export default function LocaleSwitcher({ variant = 'header' }: { variant?: 'header' | 'panel' }) {
  const locale = useLocale()
  const pathname = usePathname()

  const targetPath =
    locale === 'en'
      ? `/ar${pathname === '/' ? '' : pathname}`
      : pathname.replace(/^\/ar/, '') || '/'

  const label = locale === 'en' ? 'عربي' : 'EN'
  const ariaLabel = locale === 'en' ? 'Switch to Arabic' : 'Switch to English'

  if (variant === 'panel') {
    return (
      <Link
        href={targetPath}
        aria-label={ariaLabel}
        className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold border border-gray-200 bg-white hover:bg-gray-50 hover:border-gray-300 text-gray-600 hover:text-gray-900 transition-all no-underline select-none"
      >
        {label}
      </Link>
    )
  }

  // header variant — matches the existing Contact button style but outlined
  return (
    <Link
      href={targetPath}
      aria-label={ariaLabel}
      className="inline-flex items-center px-3 py-2 rounded-full text-sm font-semibold border border-current no-underline transition-opacity hover:opacity-70 select-none"
      style={{ color: 'var(--color-primary, #1982c4)' }}
    >
      {label}
    </Link>
  )
}
