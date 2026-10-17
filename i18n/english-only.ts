// English-only pages (blog posts, privacy, terms, cookies). Shared by the proxy and
// LocaleSwitcher; their /ar/ URLs redirect to English in next.config.js, which keeps
// its own copy of these paths (a plain .js config can't import this file).
export const englishOnlyPath = /^\/(blog\/[^/]+|privacy|terms|cookies)\/?$/

/**
 * The nearest real Arabic page for an English-only path, or null if the path has an
 * Arabic version. Blog posts fall back to the Arabic blog listing, everything else
 * to the Arabic home page.
 */
export function arabicFallbackFor(pathname: string): string | null {
  if (!englishOnlyPath.test(pathname)) return null
  return pathname.startsWith('/blog/') ? '/ar/blog' : '/ar'
}
