import { Metadata } from 'next'
import Link from 'next/link'
import { JsonLd } from '@/components/SEO'
import { generateServiceSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Web Development Company - Custom Web Development Services',
  description: 'Professional web development and web development company services in Uganda, Kenya, and Rwanda. Custom web development solutions built with modern technologies for businesses across East Africa.',
  keywords: ['web development', 'web development company', 'web development services', 'custom web development', 'Uganda', 'Kenya', 'Rwanda'],
  openGraph: {
    title: 'Web Development Company - Custom Web Development Services | Blue Team Africa',
    description: 'Professional web development services across East Africa.',
  },
}

export default function WebDevelopmentPage() {
  const serviceSchema = generateServiceSchema(
    'Web Development Services',
    'Professional web development and custom web development solutions for businesses in Uganda, Kenya, and Rwanda. We build fast, scalable, and secure web applications.',
    'Blue Team Africa',
    'https://blueteamafrica.com',
    'Web Development',
    ['Uganda', 'Kenya', 'Rwanda']
  )

  return (
    <>
      <JsonLd schema={serviceSchema} />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">Professional Web Development Services</h1>
          
          <div className="prose prose-lg max-w-none mb-8">
            <p className="text-xl text-gray-700 mb-6">
              As a leading web development company, Blue Team Africa provides custom web development 
              services to businesses across Uganda, Kenya, and Rwanda. Our web development team 
              specializes in building modern, scalable web applications using cutting-edge technologies.
            </p>

            <h2 className="text-3xl font-semibold mt-8 mb-4">Why Choose Our Web Development Company?</h2>
            <p className="text-gray-700 mb-4">
              Our web development services combine technical expertise with business understanding. 
              We deliver web development solutions that are not only technically sound but also 
              aligned with your business objectives. As a trusted web development company in East 
              Africa, we've helped numerous businesses transform their digital presence.
            </p>

            <h2 className="text-3xl font-semibold mt-8 mb-4">Web Development Technologies</h2>
            <p className="text-gray-700 mb-4">
              Our web development services utilize modern frameworks and technologies including:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li>React and Next.js for frontend web development</li>
              <li>Node.js and Python for backend web development</li>
              <li>Database design and optimization</li>
              <li>API development and integration</li>
              <li>Cloud-based web development solutions</li>
            </ul>

            <h2 className="text-3xl font-semibold mt-8 mb-4">Web Development Services</h2>
            <p className="text-gray-700 mb-4">
              Our web development company offers comprehensive web development services including:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li>Custom web application development</li>
              <li>E-commerce web development</li>
              <li>Progressive Web App (PWA) development</li>
              <li>Web application maintenance and support</li>
              <li>Legacy system modernization</li>
            </ul>

            <h2 className="text-3xl font-semibold mt-8 mb-4">Web Development in East Africa</h2>
            <p className="text-gray-700 mb-4">
              Our web development services are available across Uganda, Kenya, and Rwanda. Whether 
              you need web development in Uganda, custom web development in Kenya, or web development 
              services in Rwanda, our web development company is ready to help.
            </p>

            <div className="bg-blue-50 p-6 rounded-lg my-8">
              <p className="text-gray-700 mb-4">
                Ready to start your web development project? Contact our web development company 
                today to discuss your custom web development needs.
              </p>
              <Link 
                href="/contact" 
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition inline-block"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

