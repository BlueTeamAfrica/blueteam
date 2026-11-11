import { getBlogSchema, type BlogSchemaImage } from '@/lib/schema'

interface BlogSchemaProps {
  blogTitle: string
  blogSlug: string
  datePublished: string
  image: BlogSchemaImage
  dateModified?: string
  /** A city the post is about, e.g. "Kigali" for the Rwanda posts */
  place?: string
}

export default function BlogSchema({ blogTitle, blogSlug, datePublished, image, dateModified, place }: BlogSchemaProps) {
  const schema = getBlogSchema(blogTitle, blogSlug, datePublished, image, dateModified, place)

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
