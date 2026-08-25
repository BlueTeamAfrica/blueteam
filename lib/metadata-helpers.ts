const BASE = 'https://www.blueteamafrica.com'

/**
 * Builds locale-aware `alternates` for Next.js metadata.
 * pagePath must start with / and must NOT include the locale prefix.
 * Examples: '/', '/services/erp', '/blog/some-slug'
 */
export function buildAlternates(pagePath: string, locale: string) {
  const isHome = pagePath === '/'
  const enUrl = isHome ? `${BASE}/` : `${BASE}${pagePath}`
  const arUrl = isHome ? `${BASE}/ar` : `${BASE}/ar${pagePath}`
  const canonical = locale === 'en' ? enUrl : arUrl

  return {
    canonical,
    languages: {
      en: enUrl,
      ar: arUrl,
      'x-default': enUrl,
    },
  }
}
