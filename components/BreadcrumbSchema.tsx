import { generateBreadcrumbSchema } from '@/lib/schema'

interface BreadcrumbSchemaProps {
  items: { name: string; url: string }[]
}

export default function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const breadcrumbSchema = JSON.stringify(generateBreadcrumbSchema(items))

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: breadcrumbSchema }}
    />
  )
}

