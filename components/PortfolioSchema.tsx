import { getPortfolioSchema } from '@/lib/schema'

interface PortfolioSchemaProps {
  projectName: string
  projectSlug: string
}

export default function PortfolioSchema({ projectName, projectSlug }: PortfolioSchemaProps) {
  const schema = getPortfolioSchema(projectName, projectSlug)

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
