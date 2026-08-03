import Link from 'next/link'
import type { Metadata } from 'next'

// Prevent search engines from indexing 404 pages
export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
}

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">404</h1>
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link 
          href="/" 
          className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition inline-block"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  )
}

