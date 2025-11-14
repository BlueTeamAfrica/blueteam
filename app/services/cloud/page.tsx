import { Metadata } from 'next'
import Link from 'next/link'
import { JsonLd } from '@/components/SEO'
import { generateServiceSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Cloud Services - Cloud Solutions & Migration Services',
  description: 'Professional cloud services and cloud solutions for businesses in Uganda, Kenya, and Rwanda. Cloud migration, infrastructure, and managed cloud services across East Africa.',
  keywords: ['cloud services', 'cloud solutions', 'cloud migration', 'cloud infrastructure', 'cloud computing', 'Uganda', 'Kenya', 'Rwanda'],
  openGraph: {
    title: 'Cloud Services - Cloud Solutions & Migration Services | Blue Team Africa',
    description: 'Professional cloud services across East Africa.',
  },
}

export default function CloudPage() {
  const serviceSchema = generateServiceSchema(
    'Cloud Services',
    'Comprehensive cloud services and cloud solutions for businesses in Uganda, Kenya, and Rwanda. Cloud migration, infrastructure setup, and managed cloud services.',
    'Blue Team Africa',
    'https://blueteamafrica.com',
    'Cloud Services',
    ['Uganda', 'Kenya', 'Rwanda']
  )

  return (
    <>
      <JsonLd schema={serviceSchema} />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">Professional Cloud Services</h1>
          
          <div className="prose prose-lg max-w-none mb-8">
            <p className="text-xl text-gray-700 mb-6">
              Blue Team Africa provides comprehensive cloud services to businesses across Uganda, 
              Kenya, and Rwanda. Our cloud solutions help businesses scale efficiently, reduce 
              infrastructure costs, and improve operational flexibility.
            </p>

            <h2 className="text-3xl font-semibold mt-8 mb-4">Our Cloud Services</h2>
            <p className="text-gray-700 mb-4">
              We offer a full range of cloud services including:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li>Cloud infrastructure setup and management</li>
              <li>Cloud migration services</li>
              <li>Cloud security and compliance</li>
              <li>Managed cloud services</li>
              <li>Cloud cost optimization</li>
              <li>Disaster recovery and backup solutions</li>
            </ul>

            <h2 className="text-3xl font-semibold mt-8 mb-4">Why Choose Our Cloud Services?</h2>
            <p className="text-gray-700 mb-4">
              Our cloud services are designed to help businesses in Uganda, Kenya, and Rwanda 
              leverage the power of cloud computing. We provide cloud solutions that are secure, 
              scalable, and cost-effective, helping you focus on your core business while we 
              manage your cloud infrastructure.
            </p>

            <div className="bg-blue-50 p-6 rounded-lg my-8">
              <p className="text-gray-700 mb-4">
                Ready to move to the cloud? Contact us today to discuss your cloud services needs 
                and learn how our cloud solutions can benefit your business.
              </p>
              <Link 
                href="/contact" 
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition inline-block"
              >
                Get Cloud Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

