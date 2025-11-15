import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'

export const metadata: Metadata = {
  title: {
    default: 'Blue Team Africa — Websites, Hosting & Enterprise Systems',
    template: '%s | Blue Team Africa'
  },
  description: 'Blue Team Africa builds high-performance websites, secure hosting and enterprise systems for East African NGOs, startups and businesses.',
  keywords: ['web design', 'website design', 'web development', 'Uganda', 'Kenya', 'Rwanda', 'East Africa', 'hosting services', 'app development'],
  authors: [{ name: 'Blue Team Africa' }],
  creator: 'Blue Team Africa',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://blueteamafrica.com',
    siteName: 'Blue Team Africa',
    title: 'Blue Team Africa - Professional Web Design & Development Services',
    description: 'Expert web design and development services in Uganda, Kenya, and Rwanda.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blue Team Africa - Professional Web Design & Development Services',
    description: 'Expert web design and development services in East Africa.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-background text-dark font-body">
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  )
}

