const createNextIntlPlugin = require('next-intl/plugin')
const withNextIntl = createNextIntlPlugin('./i18n/request.ts')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Explicitly set workspace root to silence Turbopack warning
  turbopack: {
    root: __dirname,
  },
  // Compiler options for modern JavaScript (reduces legacy polyfills)
  compiler: {
    // Remove console.log in production
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error', 'warn'],
    } : false,
  },
  // Transpile only what's necessary for modern browsers
  transpilePackages: [],
  // Note: SWC minification is enabled by default in Next.js 13+ (no need for swcMinify option)
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.simpleicons.org',
        pathname: '/**',
      },
    ],
    // Optimize images for better performance
    minimumCacheTTL: 60,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Enable image optimization
    dangerouslyAllowSVG: true, // Allow SVG for simpleicons
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  // Enable compression
  compress: true,
  // SWC minification is enabled by default in Next.js 16+
  // Performance optimizations
  poweredByHeader: false,
  async redirects() {
    return [
      { source: '/erp-crm',               destination: '/services/erp', permanent: true },
      { source: '/hrm',                   destination: '/services/erp', permanent: true },
      { source: '/inventory-pos',         destination: '/services/erp', permanent: true },
      { source: '/monitoring-evaluation', destination: '/services',     permanent: true },
      { source: '/proposal-writing',      destination: '/contact',      permanent: true },
      // English-only pages; runs before the next-intl proxy. /ar/blog (listing) is not matched.
      // Blog slugs duplicate englishOnlyBlogSlugs in i18n/english-only.ts (a plain .js config
      // can't import it); keep both lists in sync. Posts with an Arabic version are not listed.
      { source: '/ar/blog/how-to-choose-the-right-website-for-your-ngo', destination: '/blog/how-to-choose-the-right-website-for-your-ngo', permanent: true },
      { source: '/ar/blog/why-hosting-speed-matters-in-africa', destination: '/blog/why-hosting-speed-matters-in-africa', permanent: true },
      { source: '/ar/blog/erp-for-african-smes-a-complete-guide', destination: '/blog/erp-for-african-smes-a-complete-guide', permanent: true },
      { source: '/ar/blog/choosing-a-web-design-company-in-rwanda-what-businesses-should-know', destination: '/blog/choosing-a-web-design-company-in-rwanda-what-businesses-should-know', permanent: true },
      { source: '/ar/blog/web-development-companies-in-rwanda-what-to-look-for-2026', destination: '/blog/web-development-companies-in-rwanda-what-to-look-for-2026', permanent: true },
      { source: '/ar/blog/web-design-cost-in-rwanda-2026', destination: '/blog/web-design-cost-in-rwanda-2026', permanent: true },
      { source: '/ar/blog/best-web-design-companies-in-rwanda', destination: '/blog/best-web-design-companies-in-rwanda', permanent: true },
      { source: '/ar/privacy',            destination: '/privacy',      permanent: true },
      { source: '/ar/terms',              destination: '/terms',        permanent: true },
      { source: '/ar/cookies',            destination: '/cookies',      permanent: true },
    ]
  },
  // Headers for security and performance
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          },
        ],
      },
    ]
  },
}

module.exports = withNextIntl(nextConfig)

