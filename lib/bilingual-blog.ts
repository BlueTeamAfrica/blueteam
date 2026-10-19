// Blog posts published in both English and Arabic, served at /blog/<slug> and
// /ar/blog/<slug>. English-only posts live in the blog/[slug] page and are listed in
// i18n/english-only.ts; a slug must not appear in both places.
import { parseFrontmatter, markdownToHtml } from '@/lib/markdown'
import fieldDataEn from '@/content/blog/field-data-app-dashboard-sudan.en'
import fieldDataAr from '@/content/blog/field-data-app-dashboard-sudan.ar'

export type BilingualLocale = 'en' | 'ar'

export interface BilingualPost {
  slug: string
  locale: BilingualLocale
  title: string
  metaTitle: string
  metaDescription: string
  author: string
  image: string
  imageWidth: number
  imageHeight: number
  imageAlt: string
  datePublished: string
  category: string
  excerpt: string
  html: string
}

const sources: Record<string, { datePublished: string; category: Record<BilingualLocale, string>; en: string; ar: string }> = {
  'field-data-app-dashboard-sudan': {
    datePublished: '2026-10-17',
    // Arabic category reuses the existing PortfolioPage.item_mobileApp_cat translation
    category: { en: 'Mobile Apps', ar: 'تطبيقات الجوال' },
    en: fieldDataEn,
    ar: fieldDataAr,
  },
}

export const bilingualPostSlugs = Object.keys(sources)

export function getBilingualPost(slug: string, locale: string): BilingualPost | null {
  const source = sources[slug]
  if (!source) return null
  const postLocale: BilingualLocale = locale === 'ar' ? 'ar' : 'en'
  const { data, body } = parseFrontmatter(source[postLocale])

  return {
    slug,
    locale: postLocale,
    title: data.title,
    metaTitle: data.metaTitle,
    metaDescription: data.metaDescription,
    author: data.author,
    image: data.image,
    imageWidth: Number(data.imageWidth),
    imageHeight: Number(data.imageHeight),
    imageAlt: data.imageAlt,
    datePublished: source.datePublished,
    category: source.category[postLocale],
    excerpt: data.metaDescription,
    html: markdownToHtml(body),
  }
}

export type BilingualPostCard = Pick<BilingualPost, 'slug' | 'title' | 'image' | 'imageWidth' | 'imageHeight' | 'imageAlt'>

/** The most recently published bilingual post, without rendering its body (header featured card). */
export function getLatestBilingualPost(locale: string): BilingualPostCard {
  const [slug, source] = Object.entries(sources).sort(([, a], [, b]) => b.datePublished.localeCompare(a.datePublished))[0]
  const { data } = parseFrontmatter(source[locale === 'ar' ? 'ar' : 'en'])
  return {
    slug,
    title: data.title,
    image: data.image,
    imageWidth: Number(data.imageWidth),
    imageHeight: Number(data.imageHeight),
    imageAlt: data.imageAlt,
  }
}
