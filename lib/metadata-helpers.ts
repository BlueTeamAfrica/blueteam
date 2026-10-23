import type { Metadata } from 'next'

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

/** The site's default social card (1200×630), used wherever a page sets no image of its own */
export const DEFAULT_OG_IMAGE = {
  url: '/images/hero/hero-og-1200x630.jpg',
  width: 1200,
  height: 630,
  alt: 'Blue Team Africa',
}

/**
 * Next.js merges `openGraph` and `twitter` shallowly, so a page that sets either one drops
 * any image inherited from above. Every page passes its metadata through here: it keeps
 * the page's own images, adds the default where there are none, and makes the Twitter
 * card large with the same image.
 */
export function withSocialDefaults(metadata: Metadata): Metadata {
  const openGraph = metadata.openGraph ?? {}
  const ogImages = openGraph.images ?? [DEFAULT_OG_IMAGE]
  const twitter = metadata.twitter ?? {}
  const firstOg = [ogImages].flat()[0]
  const fallbackTwitterImage = typeof firstOg === 'string' || firstOg instanceof URL ? firstOg : firstOg.url
  return {
    ...metadata,
    openGraph: { ...openGraph, images: ogImages },
    twitter: { ...twitter, card: 'summary_large_image', images: twitter.images ?? [fallbackTwitterImage] },
  }
}
