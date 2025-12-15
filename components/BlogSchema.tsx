import { getBlogSchema } from '@/lib/schema'

interface BlogSchemaProps {
  blogTitle: string
  blogSlug: string
  datePublished: string
  dateModified?: string
}

export default function BlogSchema({ blogTitle, blogSlug, datePublished, dateModified }: BlogSchemaProps) {
  const schema = getBlogSchema(blogTitle, blogSlug, datePublished, dateModified)

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
