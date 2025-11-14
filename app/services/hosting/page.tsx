import { Metadata } from 'next'
import Link from 'next/link'
import { JsonLd } from '@/components/SEO'
import { generateServiceSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Web Hosting Services - Reliable Hosting Solutions in East Africa',
  description: 'Professional web hosting services in Uganda, Kenya, and Rwanda. Reliable hosting solutions with excellent uptime, fast performance, and local support for businesses across East Africa.',
  keywords: ['web hosting', 'hosting services', 'website hosting', 'Uganda hosting', 'Kenya hosting', 'Rwanda hosting', 'East Africa hosting'],
  openGraph: {
    title: 'Web Hosting Services - Reliable Hosting Solutions | Blue Team Africa',
    description: 'Professional web hosting services across East Africa.',
  },
}

export default function HostingPage() {
  const serviceSchema = generateServiceSchema(
    'Web Hosting Services',
    'Reliable web hosting services for businesses in Uganda, Kenya, and Rwanda. Fast, secure hosting with excellent uptime and local support.',
    'Blue Team Africa',
    'https://blueteamafrica.com',
    'Web Hosting',
    ['Uganda', 'Kenya', 'Rwanda']
  )

  return (
    <>
      <JsonLd schema={serviceSchema} />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">Professional Web Hosting Services</h1>
          
          <div className="prose prose-lg max-w-none mb-8">
            <p className="text-xl text-gray-700 mb-6">
              Blue Team Africa provides reliable web hosting services to businesses across Uganda, 
              Kenya, and Rwanda. Our hosting solutions offer excellent uptime, fast performance, 
              and dedicated local support to keep your website running smoothly.
            </p>

            <h2 className="text-3xl font-semibold mt-8 mb-4">Why Choose Our Hosting Services?</h2>
            <p className="text-gray-700 mb-4">
              As one of the leading hosting providers in East Africa, we understand the importance 
              of reliable web hosting for your business. Our hosting services are designed to deliver 
              maximum uptime and performance, ensuring your website is always accessible to your 
              customers in Uganda, Kenya, Rwanda, and beyond.
            </p>

            <h2 className="text-3xl font-semibold mt-8 mb-4">Hosting Services We Offer</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li>Shared hosting for small to medium websites</li>
              <li>VPS hosting for growing businesses</li>
              <li>Dedicated server hosting for high-traffic sites</li>
              <li>Cloud hosting with scalable resources</li>
              <li>WordPress hosting optimized for WordPress sites</li>
              <li>Email hosting services</li>
              <li>SSL certificate installation and management</li>
            </ul>

            <h2 className="text-3xl font-semibold mt-8 mb-4">Hosting in East Africa</h2>
            <p className="text-gray-700 mb-4">
              Our hosting services are optimized for businesses in Uganda, Kenya, and Rwanda, 
              with local support and understanding of regional requirements. Whether you need 
              hosting in Uganda, Kenya, or Rwanda, we provide reliable hosting solutions tailored 
              to your needs.
            </p>

            <div className="bg-blue-50 p-6 rounded-lg my-8">
              <p className="text-gray-700 mb-4">
                Looking for reliable hosting services? Contact us today to discuss your hosting 
                needs and find the perfect hosting solution for your business.
              </p>
              <Link 
                href="/contact" 
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition inline-block"
              >
                Get Hosting Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

