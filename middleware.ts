import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Redirect old/wrong service page URLs to correct /services/ paths
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

  // Check if this path needs a redirect
  if (serviceRedirects[pathname]) {
    const redirectUrl = new URL(serviceRedirects[pathname], request.url)
    return NextResponse.redirect(redirectUrl, 301) // Permanent redirect
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - images, public files
     */
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)).*)',
  ],
}

