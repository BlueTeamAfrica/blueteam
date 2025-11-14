import { Metadata } from 'next'
import Link from 'next/link'
import { JsonLd } from '@/components/SEO'
import { generateLocalBusinessSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Web Design Rwanda - Professional Website Design Services in Rwanda',
  description: 'Expert web design and website design services in Rwanda. Professional web design company providing custom website design solutions for businesses across Rwanda. SEO-optimized web design.',
  keywords: ['web design Rwanda', 'website design Rwanda', 'web design company Rwanda', 'website design company Rwanda', 'web design services Rwanda', 'Rwanda web design'],
  openGraph: {
    title: 'Web Design Rwanda - Professional Website Design Services | Blue Team Africa',
    description: 'Expert web design and website design services in Rwanda.',
  },
}

export default function RwandaWebDesignPage() {
  const localBusinessSchema = generateLocalBusinessSchema(
    'Blue Team Africa - Rwanda',
    'RW',
    'Kigali',
    'https://blueteamafrica.com/rwanda/web-design',
    ['Web Design', 'Website Design', 'Web Development']
  )

  return (
    <>
      <JsonLd schema={localBusinessSchema} />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">Professional Web Design Services in Rwanda</h1>
          
          <div className="prose prose-lg max-w-none mb-8">
            <p className="text-xl text-gray-700 mb-6">
              Blue Team Africa offers expert web design and website design services to businesses 
              throughout Rwanda. As a leading web design company in Rwanda, we specialize in 
              creating professional, conversion-focused websites that help Rwandan businesses 
              establish a compelling online presence and reach their business objectives.
            </p>

            <h2 className="text-3xl font-semibold mt-8 mb-4">Why Choose Our Web Design Services in Rwanda?</h2>
            <p className="text-gray-700 mb-4">
              Our web design services in Rwanda blend international design excellence with 
              understanding of the Rwandan market. We are Sudanese technology professionals who 
              have brought our expertise to East Africa, and we understand the specific needs 
              of businesses operating in Rwanda. Our website design services are crafted to help 
              Rwandan businesses excel in the digital economy.
            </p>

            <h2 className="text-3xl font-semibold mt-8 mb-4">Web Design Services for Rwandan Businesses</h2>
            <p className="text-gray-700 mb-4">
              As a trusted web design company in Rwanda, we deliver comprehensive website design 
              services including:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li>Custom web design tailored for Rwandan market</li>
              <li>Fully responsive website design</li>
              <li>SEO-optimized web design for search visibility</li>
              <li>E-commerce website design solutions</li>
              <li>Website redesign and conversion optimization</li>
              <li>Local SEO optimization for Rwanda</li>
            </ul>

            <h2 className="text-3xl font-semibold mt-8 mb-4">Understanding the Rwandan Market</h2>
            <p className="text-gray-700 mb-4">
              Our web design services in Rwanda are informed by comprehensive knowledge of the 
              local business landscape. We create websites that resonate with Rwandan consumers 
              while adhering to international design best practices. Our website design company 
              methodology ensures your web design project reflects both your brand identity and 
              Rwandan market preferences.
            </p>

            <h2 className="text-3xl font-semibold mt-8 mb-4">Web Design Success in Rwanda</h2>
            <p className="text-gray-700 mb-4">
              We've successfully assisted numerous businesses across Rwanda in enhancing their 
              digital presence through professional web design. Our website design services have 
              enabled Rwandan businesses to increase their online visibility, attract quality 
              leads, and achieve sustainable growth through strategic web design solutions.
            </p>

            <div className="bg-blue-50 p-6 rounded-lg my-8">
              <h3 className="text-2xl font-semibold mb-4">Ready to Strengthen Your Digital Presence in Rwanda?</h3>
              <p className="text-gray-700 mb-4">
                Contact Blue Team Africa today to discuss your web design requirements in Rwanda. 
                As a leading web design company in Rwanda, we're committed to providing website 
                design services that deliver measurable results for your business.
              </p>
              <Link 
                href="/contact" 
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition inline-block"
              >
                Get Your Web Design Quote
              </Link>
            </div>

            <div className="mt-8">
              <h3 className="text-2xl font-semibold mb-4">Other Services in Rwanda</h3>
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

