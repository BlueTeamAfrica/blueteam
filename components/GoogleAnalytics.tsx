'use client'

import Script from 'next/script'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

interface GoogleAnalyticsProps {
  gaId: string
}

export default function GoogleAnalytics({ gaId }: GoogleAnalyticsProps) {
  const pathname = usePathname()
  const [shouldLoad, setShouldLoad] = useState(false)

  useEffect(() => {
    const FALLBACK_MS = 5000
    const timer = setTimeout(() => setShouldLoad(true), FALLBACK_MS)

    const onInteract = () => {
      setShouldLoad(true)
      clearTimeout(timer)
    }

    const events = ['scroll', 'click', 'mousemove', 'touchstart', 'keydown'] as const
    events.forEach(e => window.addEventListener(e, onInteract, { once: true, passive: true }))

    return () => {
      clearTimeout(timer)
      events.forEach(e => window.removeEventListener(e, onInteract))
    }
  }, [])

  useEffect(() => {
    if (shouldLoad && typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', gaId, { page_path: pathname })
    }
  }, [pathname, gaId, shouldLoad])

  if (!shouldLoad) return null

  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
      />
      <Script
        id="google-analytics"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaId}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  )
}
