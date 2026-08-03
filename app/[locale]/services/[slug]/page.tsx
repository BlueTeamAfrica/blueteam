import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { allServices } from '../service-data'
import ServiceDetail from '../ServiceDetail'

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
      title: 'Service Not Found | Blue Team Africa',
      description: 'This service does not exist.',
    }
  }

  const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.blueteamafrica.com'
  const lp = locale === 'en' ? '' : `/${locale}`
  const canonical = `${base}${lp}/services/${service.slug}`

  return {
    title: `${service.title} | Blue Team Africa`,
    description: service.description,
    alternates: { canonical },
    openGraph: {
      title: `${service.title} | Blue Team Africa`,
      description: service.description,
      url: canonical,
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

