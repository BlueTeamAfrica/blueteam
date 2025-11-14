import { Metadata } from 'next'
import Link from 'next/link'
import { JsonLd } from '@/components/SEO'
import { generateServiceSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'SaaS Solutions - Custom Software as a Service Development',
  description: 'Professional SaaS solutions and custom Software-as-a-Service development for businesses in Uganda, Kenya, and Rwanda. Scalable SaaS platforms built for East African markets.',
  keywords: ['SaaS', 'SaaS solutions', 'Software as a Service', 'SaaS development', 'SaaS company', 'Uganda', 'Kenya', 'Rwanda'],
  openGraph: {
    title: 'SaaS Solutions - Custom Software as a Service Development | Blue Team Africa',
    description: 'Professional SaaS solutions across East Africa.',
  },
}

export default function SaaSPage() {
  const serviceSchema = generateServiceSchema(
    'SaaS Solutions',
    'Custom Software-as-a-Service (SaaS) solutions for businesses in Uganda, Kenya, and Rwanda. Scalable SaaS platforms tailored to your industry needs.',
    'Blue Team Africa',
    'https://blueteamafrica.com',
    'SaaS Solutions',
    ['Uganda', 'Kenya', 'Rwanda']
  )

  return (
    <>
      <JsonLd schema={serviceSchema} />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">Professional SaaS Solutions</h1>
          
          <div className="prose prose-lg max-w-none mb-8">
            <p className="text-xl text-gray-700 mb-6">
              Blue Team Africa develops custom SaaS (Software-as-a-Service) solutions for businesses 
              across Uganda, Kenya, and Rwanda. Our SaaS development services help businesses 
              transform their operations with scalable, cloud-based software solutions.
            </p>

            <h2 className="text-3xl font-semibold mt-8 mb-4">What Are SaaS Solutions?</h2>
            <p className="text-gray-700 mb-4">
              SaaS solutions provide businesses with software applications delivered over the internet 
              on a subscription basis. Our SaaS development services create custom SaaS platforms 
              tailored to your specific business needs and industry requirements.
            </p>

            <h2 className="text-3xl font-semibold mt-8 mb-4">Our SaaS Development Services</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li>Custom SaaS platform development</li>
              <li>SaaS architecture design and implementation</li>
              <li>Multi-tenant SaaS solutions</li>
              <li>SaaS integration with existing systems</li>
              <li>SaaS maintenance and scaling</li>
              <li>Subscription management systems</li>
            </ul>

            <div className="bg-blue-50 p-6 rounded-lg my-8">
              <p className="text-gray-700 mb-4">
                Interested in developing a custom SaaS solution? Contact us to discuss how our 
                SaaS development services can transform your business.
              </p>
              <Link 
                href="/contact" 
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition inline-block"
              >
                Discuss Your SaaS Project
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

