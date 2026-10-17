// English-only pages (the blog posts below, privacy, terms, cookies). Shared by the proxy
// and LocaleSwitcher; their /ar/ URLs redirect to English in next.config.js, which keeps
// its own copy of these paths (a plain .js config can't import this file).
// Blog posts are listed by slug: a post with an Arabic version must not appear here.
export const englishOnlyBlogSlugs = [
  'how-to-choose-the-right-website-for-your-ngo',
  'why-hosting-speed-matters-in-africa',
  'erp-for-african-smes-a-complete-guide',
  'choosing-a-web-design-company-in-rwanda-what-businesses-should-know',
  'web-development-companies-in-rwanda-what-to-look-for-2026',
  'web-design-cost-in-rwanda-2026',
  'best-web-design-companies-in-rwanda',
] as const

export const englishOnlyPath = new RegExp(
  `^/(blog/(${englishOnlyBlogSlugs.join('|')})|privacy|terms|cookies)/?$`
)

/**
 * The nearest real Arabic page for an English-only path, or null if the path has an
 * Arabic version. Blog posts fall back to the Arabic blog listing, everything else
 * to the Arabic home page.
 */
export function arabicFallbackFor(pathname: string): string | null {
  if (!englishOnlyPath.test(pathname)) return null
  return pathname.startsWith('/blog/') ? '/ar/blog' : '/ar'
}
