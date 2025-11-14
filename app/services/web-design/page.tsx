import { Metadata } from 'next'
import Link from 'next/link'
import { JsonLd } from '@/components/SEO'
import { generateServiceSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Web Design Company in Uganda — Fast, SEO-Ready Websites | Blue Team Africa',
  description: 'We craft websites that convert: responsive design, performance, and SEO for local search. Professional web design services in Uganda, Kenya, Rwanda, and Sudan.',
  keywords: ['web design company Uganda', 'website design', 'SEO website', 'responsive web design', 'web design services'],
  openGraph: {
    title: 'Web Design Company in Uganda — Fast, SEO-Ready Websites | Blue Team Africa',
    description: 'We craft websites that convert: responsive design, performance, and SEO for local search.',
  },
}

export default function WebDesignPage() {
  const serviceSchema = generateServiceSchema(
    'Web Design Services',
    'Professional web design and website design services for businesses in Uganda, Kenya, and Rwanda. We create beautiful, user-friendly, and SEO-optimized websites that drive results.',
    'Blue Team Africa',
    'https://blueteamafrica.com',
    'Web Design',
    ['Uganda', 'Kenya', 'Rwanda']
  )

  return (
    <>
      <JsonLd schema={serviceSchema} />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">Web Design Company in Uganda — Fast, SEO-Ready Websites</h1>
          
          <div className="prose prose-lg max-w-none mb-8">
            <p className="text-xl text-gray-700 mb-6">
              We craft websites that convert: responsive design, performance, and SEO for local search. 
              Our web design services help businesses across Uganda, Kenya, Rwanda, and Sudan establish 
              a strong online presence that drives measurable results.
            </p>

            <h2 className="text-3xl font-semibold mt-8 mb-4">Why Choose Our Web Design Services?</h2>
            <p className="text-gray-700 mb-4">
              As a leading web design company and website design company in the region, we understand 
              the unique needs of businesses in Uganda, Kenya, and Rwanda. Our web design agency brings 
              together Sudanese technical expertise with local market knowledge to deliver exceptional 
              website design services.
            </p>

            <h2 className="text-3xl font-semibold mt-8 mb-4">Our Web Design Process</h2>
            <p className="text-gray-700 mb-4">
              Our website design services follow a comprehensive process that ensures your web design 
              project meets your business objectives. We focus on creating web design solutions that 
              are not only visually appealing but also optimized for search engines through SEO website 
              design principles.
            </p>

            <h2 className="text-3xl font-semibold mt-8 mb-4">Web Design Services We Offer</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li>Custom website design tailored to your brand</li>
              <li>Responsive web design for all devices</li>
              <li>SEO-optimized web design (SEO website design)</li>
              <li>E-commerce website design</li>
              <li>Website redesign and optimization</li>
              <li>User experience (UX) design</li>
              <li>User interface (UI) design</li>
            </ul>

            <h2 className="text-3xl font-semibold mt-8 mb-4">Web Design in East Africa</h2>
            <p className="text-gray-700 mb-4">
              Our web design services are available across Uganda, Kenya, and Rwanda. Whether you're 
              looking for web design in Uganda, website design in Kenya, or web design services in Rwanda, 
              we have the expertise to deliver exceptional results.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
              <Link href="/uganda/web-design" className="bg-blue-50 p-6 rounded-lg hover:bg-blue-100 transition">
                <h3 className="text-xl font-semibold mb-2">Web Design Uganda</h3>
                <p className="text-gray-600">Professional web design services in Uganda</p>
              </Link>
              <Link href="/kenya/web-design" className="bg-blue-50 p-6 rounded-lg hover:bg-blue-100 transition">
                <h3 className="text-xl font-semibold mb-2">Web Design Kenya</h3>
                <p className="text-gray-600">Expert website design in Kenya</p>
              </Link>
              <Link href="/rwanda/web-design" className="bg-blue-50 p-6 rounded-lg hover:bg-blue-100 transition">
                <h3 className="text-xl font-semibold mb-2">Web Design Rwanda</h3>
                <p className="text-gray-600">Quality web design services in Rwanda</p>
              </Link>
            </div>

            <h2 className="text-3xl font-semibold mt-8 mb-4">Get Started with Our Web Design Services</h2>
            <p className="text-gray-700 mb-6">
              Ready to transform your online presence with professional web design? Contact Blue Team 
              Africa today to discuss your website design needs. As a trusted web design company and 
              website design agency, we're committed to delivering web design services that exceed 
              your expectations.
            </p>

            <div className="bg-blue-50 p-6 rounded-lg my-8">
              <p className="text-gray-700 mb-4">
                Our web design services are designed to help your business succeed online. From initial 
                consultation to final launch, we work closely with you to ensure your website design 
                reflects your brand and achieves your goals.
              </p>
              <Link 
                href="/contact" 
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition inline-block"
              >
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

