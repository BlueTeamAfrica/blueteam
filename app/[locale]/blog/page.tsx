// Plain next/link: English-only posts are linked at /blog/<slug> from /ar/blog too;
// bilingual posts (lib/bilingual-blog.ts) link to the current locale's version.
import Link from 'next/link'
import Image from 'next/image'
import InteriorHeader from '@/components/InteriorHeader'
import SectionWrapper from '@/components/SectionWrapper'
import type { Metadata } from 'next'
import { buildAlternates } from '@/lib/metadata-helpers'
import { getTranslations } from 'next-intl/server'
import { bilingualPostSlugs, getBilingualPost } from '@/lib/bilingual-blog'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'BlogPage' })
  // OpenGraph/Twitter text stays English on both locales (project convention)
  const tEn = await getTranslations({ locale: 'en', namespace: 'BlogPage' })
  return {
    title: t('metaTitle'),
    description: t('metaDescription'),
    alternates: buildAlternates('/blog', locale),
    openGraph: {
      title: tEn('metaTitle'),
      description: tEn('metaDescription'),
    },
  }
}

const englishOnlyPosts = [
  {
    slug: 'best-web-design-companies-in-rwanda',
    title: 'Best Web Design Companies in Rwanda',
    excerpt: 'A comparison of leading web design companies in Rwanda and how to choose the right partner for your business or NGO.',
    date: '2026-01-16',
    categoryKey: 'categoryWebDesign',
    image: '/blog/choosing-web-design-company-rwanda.webp',
  },
  {
    slug: 'web-design-cost-in-rwanda-2026',
    title: 'Website Design Cost in Rwanda (2026 Guide)',
    excerpt: 'Complete guide to website design costs in Rwanda for 2026. Understand pricing factors, package options, and what to expect when investing in a professional website.',
    date: '2026-01-22',
    categoryKey: 'categoryWebDesign',
    image: '/blog/blog-thumbnail-06.webp',
  },
  {
    slug: 'web-development-companies-in-rwanda-what-to-look-for-2026',
    title: 'Web Development Companies in Rwanda: What to Look For in 2026',
    excerpt: 'Looking for reliable web development companies in Rwanda? Learn how to choose the right partner for your business in 2026.',
    date: '2025-01-20',
    categoryKey: 'categoryWebDevelopment',
    image: '/blog/web-development-companies-rwanda-2026.webp',
  },
  {
    slug: 'choosing-a-web-design-company-in-rwanda-what-businesses-should-know',
    title: 'Choosing a Web Design Partner: A Guide for Rwandan Businesses',
    excerpt: 'A guide to selecting a web design partner in Rwanda, covering key factors businesses should consider when making this important decision.',
    date: '2024-12-20',
    categoryKey: 'categoryWebDesign',
    image: '/blog/choosing-web-design-company-rwanda.webp',
  },
  {
    slug: 'how-to-choose-the-right-website-for-your-ngo',
    title: 'How to Choose the Right Website for Your NGO',
    excerpt: 'A comprehensive guide to selecting the best website solution for your nonprofit organization, including key features and considerations.',
    date: '2024-01-15',
    categoryKey: 'categoryWebDevelopment',
    image: '/blog/choosing-website-for-ngo.webp',
  },
  {
    slug: 'why-hosting-speed-matters-in-africa',
    title: 'Why Hosting Speed Matters in Africa',
    excerpt: 'Understanding the importance of fast hosting speeds for African businesses and how it impacts user experience and conversions.',
    date: '2024-01-10',
    categoryKey: 'categoryHosting',
    image: '/blog/hosting-speed-matters-africa.webp',
  },
  {
    slug: 'erp-for-african-smes-a-complete-guide',
    title: 'ERP for African SMEs: A Complete Guide',
    excerpt: 'Everything small and medium enterprises in Africa need to know about implementing ERP systems to streamline operations.',
    date: '2024-01-05',
    categoryKey: 'categoryErpSystems',
    image: '/blog/erp-african-smes-guide.webp',
  },
] as const

// Bilingual posts first (newest), then the English-only posts
function postsFor(locale: string, t: (key: (typeof englishOnlyPosts)[number]['categoryKey']) => string) {
  const bilingual = bilingualPostSlugs.map((slug) => {
    const post = getBilingualPost(slug, locale)!
    return {
      slug,
      href: locale === 'ar' ? `/ar/blog/${slug}` : `/blog/${slug}`,
      title: post.title,
      excerpt: post.excerpt,
      date: post.datePublished,
      category: post.category,
      image: post.image,
    }
  })
  return [
    ...bilingual,
    ...englishOnlyPosts.map(({ categoryKey, ...post }) => ({
      ...post,
      category: t(categoryKey),
      href: `/blog/${post.slug}`,
    })),
  ]
}

export default async function BlogPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations('BlogPage')
  const blogPosts = postsFor(locale, t)
  const blogListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": blogPosts.map((post, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "BlogPosting",
        "url": `https://www.blueteamafrica.com${post.href}`,
        "name": post.title,
      },
    })),
  }
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogListSchema) }}
      />
      <InteriorHeader
        title={t('heading')}
        breadcrumb={[
          { label: t('breadcrumbHome'), href: '/' },
          { label: t('breadcrumbBlog') }
        ]}
      />

      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        {/* Blog Posts Grid */}
        <SectionWrapper bgColor="white">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={post.href}
                className="group block bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100"
              >
                <div className="relative h-48 bg-gray-200 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={400}
                    height={256}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs uppercase tracking-wide text-primary-dark font-semibold">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-500">
                      {new Date(post.date).toLocaleDateString(locale === 'ar' ? 'ar-u-nu-latn' : 'en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center text-primary-dark font-medium text-sm group-hover:gap-2 transition-all">
                    {t('readMore')}
                    <svg
                      className="w-4 h-4 ms-1 rtl:rotate-180 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </SectionWrapper>
      </div>
    </>
  )
}
