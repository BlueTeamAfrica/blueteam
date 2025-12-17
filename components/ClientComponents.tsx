'use client'

import dynamic from 'next/dynamic'

// Client-side only components - these need ssr: false
const WhatsAppFloat = dynamic(() => import('@/components/WhatsAppFloat'), {
  ssr: false,
})

const GoogleAnalytics = dynamic(() => import('@/components/GoogleAnalytics'), {
  ssr: false,
})

interface ClientComponentsProps {
  gaId: string
}

export default function ClientComponents({ gaId }: ClientComponentsProps) {
  return (
    <>
      <GoogleAnalytics gaId={gaId} />
      <WhatsAppFloat />
    </>
  )
}

