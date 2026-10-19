import type { Metadata } from 'next'
import localFont from 'next/font/local'
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

// Self-hosted (app/fonts, see its README for sources) so builds never fetch from Google.
// next/font only accepts literals here, hence the repetition. unicode-range is Google's "latin"
// subset, so the same characters (arrows, ✓, emoji) fall through to the next font as before.
const poppins = localFont({
  src: [
    { path: '../fonts/poppins/poppins-latin-400-normal.woff2', weight: '400', style: 'normal' },
    { path: '../fonts/poppins/poppins-latin-500-normal.woff2', weight: '500', style: 'normal' },
    { path: '../fonts/poppins/poppins-latin-600-normal.woff2', weight: '600', style: 'normal' },
    { path: '../fonts/poppins/poppins-latin-700-normal.woff2', weight: '700', style: 'normal' },
  ],
  variable: '--font-poppins',
  display: 'swap',
  declarations: [
    { prop: 'unicode-range', value: 'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD' },
  ],
})

// Arabic blocks only: Latin never matches it, and pages without Arabic text never download it.
// Scheherazade New draws its letters smaller than Latin at the same font-size, so size-adjust
// scales the Arabic glyphs alone; rem-based spacing and Latin text on /ar keep their sizes.
const scheherazade = localFont({
  src: [
    { path: '../fonts/scheherazade-new/scheherazade-new-arabic-400-normal.woff2', weight: '400', style: 'normal' },
    { path: '../fonts/scheherazade-new/scheherazade-new-arabic-700-normal.woff2', weight: '700', style: 'normal' },
  ],
  display: 'swap',
  preload: false,
  adjustFontFallback: false,
  declarations: [
    { prop: 'unicode-range', value: 'U+0600-06FF, U+0750-077F, U+0870-089F, U+08A0-08FF, U+FB50-FDFF, U+FE70-FEFC' },
    { prop: 'size-adjust', value: '115%' },
  ],
})

// next/font's family is "'<face>', '<face> Fallback'", the fallback being a local Arial with
// metric overrides. Windows' Arial has Arabic glyphs, so Scheherazade goes between the two;
// after the fallback it would never be reached on Windows.
function withArabic(font: { style: { fontFamily: string } }) {
  const [face, ...fallback] = font.style.fontFamily.split(', ')
  return [face, scheherazade.style.fontFamily, ...fallback].join(', ')
}

// The body and heading stacks in globals.css and tailwind.config.ts are built on these.
// --font-poppins-latin leaves Scheherazade out, for Arabic that must not pull the font onto
// English pages
const fontVariables = {
  '--font-poppins': withArabic(poppins),
  '--font-poppins-latin': poppins.style.fontFamily,
} as React.CSSProperties

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
  const layoutMessages = { Footer: messages.Footer, ServiceSidebar: messages.ServiceSidebar }
  const dir = locale === 'ar' ? 'rtl' : 'ltr'
  const gaId = process.env.NEXT_PUBLIC_GA_ID || 'G-PYJR1T65RQ'

  return (
    <html lang={locale} dir={dir} style={fontVariables}>
      <head>
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      </head>
      <body className="bg-[#F8F9FC] text-gray-900 font-body antialiased">
        <NextIntlClientProvider messages={layoutMessages}>
          <WebSiteSchema />
          <ClientComponents gaId={gaId} />
          <Header />
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
