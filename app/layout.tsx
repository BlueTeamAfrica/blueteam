import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'
import WebSiteSchema from '@/components/WebSiteSchema'
import GoogleAnalytics from '@/components/GoogleAnalytics'

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
  const gaId = process.env.NEXT_PUBLIC_GA_ID

  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className={`${inter.className} bg-[#F8F9FC] text-gray-900 font-body antialiased`}>
        <WebSiteSchema />
        {gaId && <GoogleAnalytics gaId={gaId} />}
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  )
}
