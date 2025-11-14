import { Metadata } from 'next'
import { LocalBusinessSchema, ServiceSchema, OrganizationSchema, BreadcrumbSchema, FAQPageSchema } from '@/lib/schema'

interface SEOProps {
  title: string
  description: string
  keywords?: string[]
  canonical?: string
  ogImage?: string
  schema?: LocalBusinessSchema | ServiceSchema | OrganizationSchema | BreadcrumbSchema | FAQPageSchema
  noindex?: boolean
}

export function generateMetadata({
  title,
  description,
  keywords,
  canonical,
  ogImage,
  noindex = false,
}: Omit<SEOProps, 'schema'>): Metadata {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://blueteamafrica.com'
  const fullTitle = title.includes('Blue Team Africa') ? title : `${title} | Blue Team Africa`

  return {
    title: fullTitle,
    description,
    keywords: keywords?.join(', '),
    alternates: {
      canonical: canonical || baseUrl,
    },
    openGraph: {
      title: fullTitle,
      description,
      url: canonical || baseUrl,
      siteName: 'Blue Team Africa',
      images: ogImage ? [{ url: ogImage }] : [],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: ogImage ? [ogImage] : [],
    },
    robots: {
      index: !noindex,
      follow: !noindex,
      googleBot: {
        index: !noindex,
        follow: !noindex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }
}

export function JsonLd({ schema }: { schema: LocalBusinessSchema | ServiceSchema | OrganizationSchema | BreadcrumbSchema | FAQPageSchema }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

