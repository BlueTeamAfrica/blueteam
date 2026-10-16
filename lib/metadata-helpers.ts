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

/**
 * Alternates for English-only pages (blog posts): canonical is always the
 * English URL and no `ar` alternate is declared (/ar/blog/:slug redirects).
 */
export function buildEnglishOnlyAlternates(pagePath: string) {
  const enUrl = `${BASE}${pagePath}`

  return {
    canonical: enUrl,
    languages: {
      en: enUrl,
      'x-default': enUrl,
    },
  }
}
