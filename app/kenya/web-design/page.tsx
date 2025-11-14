import { Metadata } from 'next'
import Link from 'next/link'
import { JsonLd } from '@/components/SEO'
import { generateLocalBusinessSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Web Design Kenya - Professional Website Design Services in Kenya',
  description: 'Expert web design and website design services in Kenya. Professional web design company providing custom website design solutions for businesses across Kenya. SEO-optimized web design.',
  keywords: ['web design Kenya', 'website design Kenya', 'web design company Kenya', 'website design company Kenya', 'web design services Kenya', 'Kenya web design'],
  openGraph: {
    title: 'Web Design Kenya - Professional Website Design Services | Blue Team Africa',
    description: 'Expert web design and website design services in Kenya.',
  },
}

export default function KenyaWebDesignPage() {
  const localBusinessSchema = generateLocalBusinessSchema(
    'Blue Team Africa - Kenya',
    'KE',
    'Nairobi',
    'https://blueteamafrica.com/kenya/web-design',
    ['Web Design', 'Website Design', 'Web Development']
  )

  return (
    <>
      <JsonLd schema={localBusinessSchema} />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">Professional Web Design Services in Kenya</h1>
          
          <div className="prose prose-lg max-w-none mb-8">
            <p className="text-xl text-gray-700 mb-6">
              Blue Team Africa delivers expert web design and website design services to businesses 
              throughout Kenya. As a leading web design company in Kenya, we create professional, 
              high-performing websites that help Kenyan businesses establish a strong digital presence 
              and connect with their target audience effectively.
            </p>

            <h2 className="text-3xl font-semibold mt-8 mb-4">Why Choose Our Web Design Services in Kenya?</h2>
            <p className="text-gray-700 mb-4">
              Our web design services in Kenya combine cutting-edge design expertise with deep 
              understanding of the Kenyan market. We are Sudanese technology experts who have 
              established ourselves in East Africa, bringing international standards of website 
              design to Kenyan businesses. Our website design services are specifically tailored 
              to help businesses in Kenya thrive in the competitive digital landscape.
            </p>

            <h2 className="text-3xl font-semibold mt-8 mb-4">Web Design Services for Kenyan Businesses</h2>
            <p className="text-gray-700 mb-4">
              As a trusted web design company in Kenya, we provide comprehensive website design 
              services including:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li>Custom web design optimized for Kenyan market</li>
              <li>Mobile-responsive website design</li>
              <li>SEO-optimized web design for better rankings</li>
              <li>E-commerce website design for online retail</li>
              <li>Website redesign and performance optimization</li>
              <li>Local SEO for Kenyan businesses</li>
            </ul>

            <h2 className="text-3xl font-semibold mt-8 mb-4">Understanding the Kenyan Market</h2>
            <p className="text-gray-700 mb-4">
              Our web design services in Kenya are designed with the Kenyan business environment 
              in mind. We create websites that appeal to Kenyan consumers while maintaining 
              world-class design standards. Our website design company approach ensures your web 
              design project captures both your brand essence and local market dynamics in Kenya.
            </p>

            <h2 className="text-3xl font-semibold mt-8 mb-4">Web Design Success in Kenya</h2>
            <p className="text-gray-700 mb-4">
              We've successfully helped numerous businesses across Kenya enhance their online 
              presence through professional web design. Our website design services have enabled 
              Kenyan businesses to improve their online visibility, attract more customers, and 
              achieve significant growth through effective web design strategies.
            </p>

            <div className="bg-blue-50 p-6 rounded-lg my-8">
              <h3 className="text-2xl font-semibold mb-4">Ready to Elevate Your Online Presence in Kenya?</h3>
              <p className="text-gray-700 mb-4">
                Contact Blue Team Africa today to discuss your web design needs in Kenya. As a 
                leading web design company in Kenya, we're dedicated to delivering website design 
                services that drive real results for your business.
              </p>
              <Link 
                href="/contact" 
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition inline-block"
              >
                Get Your Web Design Quote
              </Link>
            </div>

            <div className="mt-8">
              <h3 className="text-2xl font-semibold mb-4">Other Services in Kenya</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link href="/services/web-development" className="text-blue-600 hover:underline">
                  Web Development Services →
                </Link>
                <Link href="/services/hosting" className="text-blue-600 hover:underline">
                  Hosting Services →
                </Link>
                <Link href="/services/app-development" className="text-blue-600 hover:underline">
                  App Development →
                </Link>
                <Link href="/services/cloud" className="text-blue-600 hover:underline">
                  Cloud Services →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

