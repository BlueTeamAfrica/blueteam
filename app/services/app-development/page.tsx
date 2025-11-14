import { Metadata } from 'next'
import Link from 'next/link'
import { JsonLd } from '@/components/SEO'
import { generateServiceSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'App Development Services - Mobile & Web App Development',
  description: 'Professional app development services in Uganda, Kenya, and Rwanda. Custom mobile app development, web app development, and cross-platform solutions for businesses across East Africa.',
  keywords: ['app development', 'mobile app development', 'web app development', 'app development company', 'Uganda', 'Kenya', 'Rwanda'],
  openGraph: {
    title: 'App Development Services - Mobile & Web App Development | Blue Team Africa',
    description: 'Professional app development services across East Africa.',
  },
}

export default function AppDevelopmentPage() {
  const serviceSchema = generateServiceSchema(
    'App Development Services',
    'Professional mobile and web app development services for businesses in Uganda, Kenya, and Rwanda. Custom app solutions built for iOS, Android, and web platforms.',
    'Blue Team Africa',
    'https://blueteamafrica.com',
    'App Development',
    ['Uganda', 'Kenya', 'Rwanda']
  )

  return (
    <>
      <JsonLd schema={serviceSchema} />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">Professional App Development Services</h1>
          
          <div className="prose prose-lg max-w-none mb-8">
            <p className="text-xl text-gray-700 mb-6">
              Blue Team Africa offers comprehensive app development services to businesses across 
              Uganda, Kenya, and Rwanda. Our app development team creates custom mobile and web 
              applications that help businesses engage with customers and streamline operations.
            </p>

            <h2 className="text-3xl font-semibold mt-8 mb-4">Our App Development Services</h2>
            <p className="text-gray-700 mb-4">
              As a leading app development company, we provide end-to-end app development services 
              including:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li>iOS app development (Native Swift)</li>
              <li>Android app development (Native Kotlin/Java)</li>
              <li>Cross-platform app development (React Native, Flutter)</li>
              <li>Web app development</li>
              <li>Progressive Web Apps (PWA)</li>
              <li>App maintenance and updates</li>
            </ul>

            <h2 className="text-3xl font-semibold mt-8 mb-4">Why Choose Our App Development Company?</h2>
            <p className="text-gray-700 mb-4">
              Our app development services combine technical expertise with user-centered design. 
              We create apps that are not only functional but also provide excellent user experiences. 
              Our app development team understands the unique needs of businesses in Uganda, Kenya, 
              and Rwanda.
            </p>

            <div className="bg-blue-50 p-6 rounded-lg my-8">
              <p className="text-gray-700 mb-4">
                Ready to build your app? Contact our app development company today to discuss 
                your mobile or web app development project.
              </p>
              <Link 
                href="/contact" 
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition inline-block"
              >
                Start Your App Project
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

