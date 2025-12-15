import { getServiceSchema } from '@/lib/schema'

interface ServiceSchemaProps {
  serviceName: string
  serviceSlug: string
}

export default function ServiceSchema({ serviceName, serviceSlug }: ServiceSchemaProps) {
  const schema = getServiceSchema(serviceName, serviceSlug)

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
