'use client'

import { useLocale } from 'next-intl'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { routing } from '@/i18n/routing'
import { arabicFallbackFor } from '@/i18n/english-only'

/**
 * Write the next-intl locale cookie for the target locale before navigating.
 *
 * The proxy redirects unprefixed (EN) paths to /ar/... while NEXT_LOCALE=ar is
 * set, so a plain link to the EN path bounced straight back to Arabic.
 * Mirrors next-intl's cookie defaults (name NEXT_LOCALE, SameSite=lax,
 * path=/, session lifetime unless maxAge is configured) merged with any
 * routing.localeCookie overrides, like next-intl's own client-side sync.
 */
function setLocaleCookie(nextLocale: string) {
  if (routing.localeCookie === false) return
  const { name = 'NEXT_LOCALE', ...rest } = {
    sameSite: 'lax',
    path: '/',
    ...(typeof routing.localeCookie === 'object' ? routing.localeCookie : {}),
  }
  let cookie = `${name}=${nextLocale};`
  for (const [key, value] of Object.entries(rest)) {
    if (value === undefined || value === false) continue
    cookie += key === 'maxAge' ? 'max-age' : key
    if (value !== true) cookie += `=${value}`
    cookie += ';'
  }
  document.cookie = cookie
}

/**
 * Switches the current page between EN and AR while preserving the path.
 *
 * With localePrefix: 'as-needed':
 *   EN paths have no prefix:  /services/cybersecurity
 *   AR paths are prefixed:    /ar/services/cybersecurity
 *
 * usePathname() from next/navigation returns the raw path including the /ar
 * prefix when on an AR page, so we can manipulate it directly.
 *
 * English-only pages (see i18n/english-only.ts) link AR to /ar/blog or /ar.
 */
export default function LocaleSwitcher({ variant = 'pill' }: { variant?: 'pill' | 'segmented' }) {
  const locale = useLocale()
  const pathname = usePathname()

  const targetLocale = locale === 'en' ? 'ar' : 'en'
  // English-only pages have no Arabic version (their /ar/ URL redirects back to
  // English), so the AR option goes to the nearest real Arabic page instead.
  const targetPath =
    locale === 'en'
      ? arabicFallbackFor(pathname) ?? `/ar${pathname === '/' ? '' : pathname}`
      : pathname.replace(/^\/ar/, '') || '/'

  const ariaLabel = locale === 'en' ? 'Switch to Arabic' : 'Switch to English'
  // Arabic labels are the only Arabic on English pages; kept off Scheherazade New (87 KB at 700)
  // so English pages never download it (they render in the OS's Arabic font, as before)
  const latinOnly = locale === 'en' ? { fontFamily: 'var(--font-poppins-latin), sans-serif' } : undefined
  const focusRing = 'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary'

  if (variant === 'segmented') {
    const segment = 'flex-1 rounded-[10px] py-2.5 text-center text-[15px] font-semibold no-underline'
    const options = [
      { code: 'en', label: 'English', lang: 'en' },
      { code: 'ar', label: 'العربية', lang: 'ar' },
    ]
    return (
      <div className="flex gap-1 rounded-xl bg-[#F0F3F6] p-1" dir="ltr">
        {options.map((o) =>
          o.code === locale ? (
            <span key={o.code} lang={o.lang} aria-current="true" className={`${segment} bg-white text-[#0B1B2B] shadow-sm`}>
              {o.label}
            </span>
          ) : (
            <Link
              key={o.code}
              href={targetPath}
              prefetch={false}
              lang={o.lang}
              onClick={() => setLocaleCookie(targetLocale)}
              className={`${segment} text-[#4A5868] hover:text-[#0B1B2B] ${focusRing}`}
              style={o.code === 'ar' ? latinOnly : undefined}
            >
              {o.label}
            </Link>
          ),
        )}
      </div>
    )
  }

  // Header pill: عربي on English pages, EN on Arabic pages. !text-primary, not text-primary: globals.css
  // recolours a.text-primary to the darker link blue
  return (
    <Link
      href={targetPath}
      prefetch={false}
      onClick={() => setLocaleCookie(targetLocale)}
      aria-label={ariaLabel}
      lang={targetLocale}
      className={`inline-flex h-10 items-center rounded-full border border-[#D5DEE7] px-2.5 text-[14px] min-[380px]:px-4 min-[380px]:text-[15px] font-semibold !text-primary no-underline transition-colors hover:border-primary select-none ${focusRing}`}
      style={latinOnly}
    >
      {locale === 'en' ? 'عربي' : 'EN'}
    </Link>
  )
}
