/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [],
  },
  // Disable webpack cache to save disk space
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.cache = false
    }
    return config
  },
  // Reduce cache usage
  experimental: {
    webpackBuildWorker: false,
  },
}

module.exports = nextConfig

