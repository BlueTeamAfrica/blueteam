import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WebSiteSchema from '@/components/WebSiteSchema'
import dynamic from 'next/dynamic'

// Dynamically import non-critical components to reduce initial JS payload (mobile optimization)
const WhatsAppFloat = dynamic(() => import('@/components/WhatsAppFloat'), {
  ssr: false, // Only load on client side
})

const GoogleAnalytics = dynamic(() => import('@/components/GoogleAnalytics'), {
  ssr: false, // Load analytics after page is interactive
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Blue Team Africa',
    template: '%s | Blue Team Africa'
  },
  description: 'Blue Team Africa - Professional web design, hosting, and enterprise systems for East Africa.',
  metadataBase: new URL('https://www.blueteamafrica.com'),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // GA4 Tracking ID - can be overridden with NEXT_PUBLIC_GA_ID env variable
  const gaId = process.env.NEXT_PUBLIC_GA_ID || 'G-PYJR1T65RQ'

  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className={`${inter.className} bg-[#F8F9FC] text-gray-900 font-body antialiased`}>
        <WebSiteSchema />
        <GoogleAnalytics gaId={gaId} />
        {/* Preload hero image for better LCP - Next.js Image priority prop handles this automatically */}
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  )
}
