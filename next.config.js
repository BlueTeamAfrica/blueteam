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

module.exports = nextConfig

