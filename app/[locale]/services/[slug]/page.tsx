import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { allServices } from '../service-data'
import ServiceDetail from '../ServiceDetail'
import { buildAlternates } from '@/lib/metadata-helpers'

export async function generateStaticParams() {
  return allServices.map((service) => ({
    slug: service.slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}): Promise<Metadata> {
  const { locale, slug } = await params
  const service = allServices.find((s) => s.slug === slug)

  if (!service) {
    return {
      title: 'Service Not Found',
      description: 'This service does not exist.',
    }
  }

  const alternates = buildAlternates(`/services/${service.slug}`, locale)

  return {
    title: service.title,
    description: service.description,
    alternates,
    openGraph: {
      title: service.title,
      description: service.description,
      url: alternates.canonical,
    },
  }
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = allServices.find((s) => s.slug === slug)

  if (!service) {
    notFound()
  }

  return <ServiceDetail service={service} />
}

