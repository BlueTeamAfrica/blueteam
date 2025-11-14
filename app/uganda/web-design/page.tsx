import { Metadata } from 'next'
import Link from 'next/link'
import { JsonLd } from '@/components/SEO'
import { generateLocalBusinessSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Web Design Uganda - Professional Website Design Services in Uganda',
  description: 'Expert web design and website design services in Uganda. Professional web design company providing custom website design solutions for businesses across Uganda. SEO-optimized web design.',
  keywords: ['web design Uganda', 'website design Uganda', 'web design company Uganda', 'website design company Uganda', 'web design services Uganda', 'Uganda web design'],
  openGraph: {
    title: 'Web Design Uganda - Professional Website Design Services | Blue Team Africa',
    description: 'Expert web design and website design services in Uganda.',
  },
}

export default function UgandaWebDesignPage() {
  const localBusinessSchema = generateLocalBusinessSchema(
    'Blue Team Africa - Uganda',
    'UG',
    'Kampala',
    'https://blueteamafrica.com/uganda/web-design',
    ['Web Design', 'Website Design', 'Web Development']
  )

  return (
    <>
      <JsonLd schema={localBusinessSchema} />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">Professional Web Design Services in Uganda</h1>
          
          <div className="prose prose-lg max-w-none mb-8">
            <p className="text-xl text-gray-700 mb-6">
              Blue Team Africa provides expert web design and website design services to businesses 
              across Uganda. As a leading web design company in Uganda, we specialize in creating 
              professional, SEO-optimized websites that help Ugandan businesses establish a strong 
              online presence and reach their target audience.
            </p>

            <h2 className="text-3xl font-semibold mt-8 mb-4">Why Choose Our Web Design Services in Uganda?</h2>
            <p className="text-gray-700 mb-4">
              Our web design services in Uganda combine international expertise with local market 
              understanding. We are Sudanese tech experts who have brought our skills to East Africa, 
              and we understand the unique needs of businesses operating in Uganda. Our website 
              design services are tailored to help Ugandan businesses compete effectively in the 
              digital marketplace.
            </p>

            <h2 className="text-3xl font-semibold mt-8 mb-4">Web Design Services for Ugandan Businesses</h2>
            <p className="text-gray-700 mb-4">
              As a trusted web design company in Uganda, we offer comprehensive website design 
              services including:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li>Custom web design tailored for Ugandan market</li>
              <li>Responsive website design for all devices</li>
              <li>SEO-optimized web design for better search visibility</li>
              <li>E-commerce website design for online sales</li>
              <li>Website redesign and optimization</li>
              <li>Local SEO optimization for Uganda</li>
            </ul>

            <h2 className="text-3xl font-semibold mt-8 mb-4">Understanding the Ugandan Market</h2>
            <p className="text-gray-700 mb-4">
              Our web design services in Uganda are informed by deep understanding of the local 
              business environment. We create websites that resonate with Ugandan consumers while 
              maintaining international design standards. Our website design company approach 
              ensures that your web design project reflects both your brand identity and local 
              market preferences.
            </p>

            <h2 className="text-3xl font-semibold mt-8 mb-4">Web Design Success Stories in Uganda</h2>
            <p className="text-gray-700 mb-4">
              We've helped numerous businesses across Uganda improve their online presence through 
              professional web design. Our website design services have enabled Ugandan businesses 
              to increase their online visibility, attract more customers, and grow their revenue 
              through effective web design solutions.
            </p>

            <div className="bg-blue-50 p-6 rounded-lg my-8">
              <h3 className="text-2xl font-semibold mb-4">Ready to Transform Your Online Presence in Uganda?</h3>
              <p className="text-gray-700 mb-4">
                Contact Blue Team Africa today to discuss your web design needs in Uganda. As a 
                leading web design company in Uganda, we're committed to delivering website design 
                services that help your business succeed online.
              </p>
              <Link 
                href="/contact" 
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition inline-block"
              >
                Get Your Web Design Quote
              </Link>
            </div>

            <div className="mt-8">
              <h3 className="text-2xl font-semibold mb-4">Other Services in Uganda</h3>
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

