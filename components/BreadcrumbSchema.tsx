'use client'

import { generateBreadcrumbSchema } from '@/lib/schema'

interface BreadcrumbSchemaProps {
  items: { name: string; url: string }[]
}

export default function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const breadcrumbSchema = generateBreadcrumbSchema(items)

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
    />
  )
}

