import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Blue Team Africa - Professional Web Design & Development Services in East Africa',
    template: '%s | Blue Team Africa'
  },
  description: 'Expert web design and development services in Uganda, Kenya, and Rwanda. Sudanese tech experts providing web design, hosting, app development, SaaS, and cloud solutions across East Africa.',
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
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

