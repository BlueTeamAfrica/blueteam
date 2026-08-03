import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import { notFound } from 'next/navigation'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { routing } from '@/i18n/routing'
import '../globals.css'
import '../styles/animations.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WebSiteSchema from '@/components/WebSiteSchema'
import ClientComponents from '@/components/ClientComponents'

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
    template: '%s | Blue Team Africa',
  },
  description:
    'Blue Team Africa - Professional web design, hosting, and enterprise systems for East Africa.',
  metadataBase: new URL('https://www.blueteamafrica.com'),
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
    shortcut: '/favicon.ico',
  },
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  if (!(routing.locales as readonly string[]).includes(locale)) {
    notFound()
  }

  const messages = await getMessages()
  const dir = locale === 'ar' ? 'rtl' : 'ltr'
  const gaId = process.env.NEXT_PUBLIC_GA_ID || 'G-PYJR1T65RQ'

  return (
    <html lang={locale} dir={dir} className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      </head>
      <body className={`${inter.className} bg-[#F8F9FC] text-gray-900 font-body antialiased`}>
        <NextIntlClientProvider messages={messages}>
          <WebSiteSchema />
          <ClientComponents gaId={gaId} />
          <Header />
          <main className="pt-[39px] md:pt-[32px]">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
