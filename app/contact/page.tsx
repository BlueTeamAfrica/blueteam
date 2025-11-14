import { Metadata } from 'next'
import { JsonLd } from '@/components/SEO'
import { generateOrganizationSchema } from '@/lib/schema'
import ContactForm from '@/components/ContactForm'

// This is a server component - metadata export is allowed

export const metadata: Metadata = {
  title: 'Contact Us - Get in Touch with Blue Team Africa',
  description: 'Contact Blue Team Africa for web design, development, and technology services in Uganda, Kenya, and Rwanda. Get a free quote for your project.',
  keywords: ['contact Blue Team Africa', 'web design contact', 'Uganda', 'Kenya', 'Rwanda'],
  openGraph: {
    title: 'Contact Us - Get in Touch | Blue Team Africa',
    description: 'Contact Blue Team Africa for professional web design and development services.',
  },
}

export default function ContactPage() {
  const organizationSchema = generateOrganizationSchema(
    'Blue Team Africa',
    'Contact Blue Team Africa for web design, development, and technology services.',
    'https://blueteamafrica.com',
    undefined,
    []
  )

  return (
    <>
      <JsonLd schema={organizationSchema} />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-semibold mb-6">Get in Touch</h2>
              <p className="text-gray-700 mb-6">
                Ready to start your project? Contact Blue Team Africa today to discuss your 
                web design, development, or technology needs. We serve businesses across 
                Uganda, Kenya, and Rwanda.
              </p>

              <div className="space-y-4 mb-8">
                <div>
                  <h3 className="font-semibold mb-2">Email</h3>
                  <p className="text-gray-600">info@blueteamafrica.com</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Service Areas</h3>
                  <p className="text-gray-600">Uganda, Kenya, Rwanda</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Response Time</h3>
                  <p className="text-gray-600">We typically respond within 24 hours</p>
                </div>
              </div>
            </div>

            <div>
              <ContactForm />
            </div>
          </div>

          <div className="mt-12 bg-gray-50 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">Why Contact Us?</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Free consultation and project assessment</li>
              <li>Customized quotes tailored to your needs</li>
              <li>Expert advice on web design and development</li>
              <li>Fast response time and dedicated support</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
