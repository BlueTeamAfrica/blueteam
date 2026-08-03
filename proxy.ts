import createIntlMiddleware from 'next-intl/middleware'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { routing } from './i18n/routing'

const intlMiddleware = createIntlMiddleware(routing)

const serviceRedirects: Record<string, string> = {
  '/web-design': '/services/web-design',
  '/website-development': '/services/website-development',
  '/hosting': '/services/hosting',
  '/mobile-apps': '/services/mobile-apps',
  '/mobile-app': '/services/mobile-apps',
  '/erp': '/services/erp',
  '/crm': '/services/crm',
  '/cybersecurity': '/services/cybersecurity',
  '/ecommerce': '/services/ecommerce',
  '/custom-systems': '/services/custom-systems',
  '/maintenance': '/services/maintenance',
  '/branding': '/services/branding',
  '/ui-ux': '/services/ui-ux',
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Legacy service URL redirects (strip locale prefix first for matching)
  const strippedPath = pathname.replace(/^\/(en|ar)/, '') || '/'
  const redirectTarget = serviceRedirects[strippedPath]
  if (redirectTarget) {
    const locale = pathname.startsWith('/ar') ? '/ar' : ''
    const redirectUrl = new URL(`${locale}${redirectTarget}`, request.url)
    return NextResponse.redirect(redirectUrl, 301)
  }

  // Locale detection and routing via next-intl
  return intlMiddleware(request)
}

export const config = {
  matcher: [
    '/((?!_next|_vercel|api|.*\\..*).*)',
  ],
}
