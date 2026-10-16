import { getBlogSchema, type BlogSchemaImage } from '@/lib/schema'

interface BlogSchemaProps {
  blogTitle: string
  blogSlug: string
  datePublished: string
  image: BlogSchemaImage
  dateModified?: string
}

export default function BlogSchema({ blogTitle, blogSlug, datePublished, image, dateModified }: BlogSchemaProps) {
  const schema = getBlogSchema(blogTitle, blogSlug, datePublished, image, dateModified)

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
