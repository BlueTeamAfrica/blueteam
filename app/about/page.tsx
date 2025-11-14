import { Metadata } from 'next'
import Link from 'next/link'
import { JsonLd } from '@/components/SEO'
import { generateOrganizationSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'About Us - Sudanese Tech Experts in East Africa',
  description: 'Learn about Blue Team Africa - Sudanese technology experts who fled conflict and now provide professional web design, development, and tech services across Uganda, Kenya, and Rwanda.',
  keywords: ['about Blue Team Africa', 'Sudanese tech experts', 'East Africa tech company', 'web design company', 'Uganda', 'Kenya', 'Rwanda'],
  openGraph: {
    title: 'About Us - Sudanese Tech Experts in East Africa | Blue Team Africa',
    description: 'Learn about Blue Team Africa and our mission to bring world-class tech services to East Africa.',
  },
}

export default function AboutPage() {
  const organizationSchema = generateOrganizationSchema(
    'Blue Team Africa',
    'Sudanese technology experts providing professional web design, development, and tech services across East Africa.',
    'https://blueteamafrica.com',
    undefined,
    []
  )

  return (
    <>
      <JsonLd schema={organizationSchema} />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">About Blue Team Africa</h1>
          
          <div className="prose prose-lg max-w-none mb-8">
            <p className="text-xl text-gray-700 mb-6">
              Blue Team Africa is a technology company founded by Sudanese experts who fled their 
              country after the war, bringing their expertise and passion for innovation to East 
              Africa. We are committed to providing world-class web design, development, and 
              technology services to businesses across Uganda, Kenya, and Rwanda.
            </p>

            <h2 className="text-3xl font-semibold mt-8 mb-4">Our Story</h2>
            <p className="text-gray-700 mb-4">
              Our journey began when a group of Sudanese technology professionals found themselves 
              displaced by conflict. Rather than letting adversity define us, we chose to channel 
              our expertise and resilience into building something meaningful in East Africa. 
              We established Blue Team Africa to bridge the gap between international technology 
              standards and the growing needs of businesses in Uganda, Kenya, and Rwanda.
            </p>

            <p className="text-gray-700 mb-4">
              As Sudanese tech experts, we bring a unique perspective to the East African market. 
              We combine deep technical knowledge with an understanding of local business needs, 
              creating solutions that are both globally competitive and locally relevant. Our 
              experience has taught us the value of adaptability, innovation, and unwavering 
              commitment to excellence.
            </p>

            <h2 className="text-3xl font-semibold mt-8 mb-4">Our Mission</h2>
            <p className="text-gray-700 mb-4">
              Our mission is to empower businesses across East Africa with professional web design, 
              development, and technology services that drive growth and success. We believe that 
              every business, regardless of size, deserves access to world-class technology solutions 
              that can transform their operations and expand their reach.
            </p>

            <h2 className="text-3xl font-semibold mt-8 mb-4">Our Values</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li><strong>Excellence:</strong> We strive for the highest standards in everything we do</li>
              <li><strong>Innovation:</strong> We embrace new technologies and creative solutions</li>
              <li><strong>Integrity:</strong> We build trust through honest, transparent partnerships</li>
              <li><strong>Resilience:</strong> We overcome challenges with determination and adaptability</li>
              <li><strong>Community:</strong> We are committed to contributing positively to East Africa</li>
            </ul>

            <h2 className="text-3xl font-semibold mt-8 mb-4">Our Services</h2>
            <p className="text-gray-700 mb-4">
              We specialize in providing comprehensive technology services including:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li>Professional web design and website design</li>
              <li>Custom web development solutions</li>
              <li>Reliable web hosting services</li>
              <li>Mobile and web app development</li>
              <li>SaaS solutions and cloud services</li>
            </ul>

            <h2 className="text-3xl font-semibold mt-8 mb-4">Serving East Africa</h2>
            <p className="text-gray-700 mb-4">
              We are proud to serve businesses across Uganda, Kenya, and Rwanda. Our team 
              understands the unique challenges and opportunities in each market, allowing us 
              to deliver solutions that are tailored to local needs while maintaining international 
              quality standards.
            </p>

            <div className="bg-blue-50 p-6 rounded-lg my-8">
              <h3 className="text-2xl font-semibold mb-4">Join Us on Our Journey</h3>
              <p className="text-gray-700 mb-4">
                Whether you're a startup looking to establish your online presence or an 
                established business seeking to modernize your technology infrastructure, we're 
                here to help. Let's work together to build something great.
              </p>
              <Link 
                href="/contact" 
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition inline-block"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

