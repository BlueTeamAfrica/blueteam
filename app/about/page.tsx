import { Metadata } from 'next'
import Link from 'next/link'
import { JsonLd } from '@/components/SEO'
import { generateOrganizationSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'About Blue Team Africa — Our Story & Mission',
  description: 'From Sudan to Uganda: the Blue Team Africa story. We build tech for East Africa — web design, ERP, mobile apps and cybersecurity with purpose.',
  keywords: ['about Blue Team Africa', 'tech partner Uganda', 'IT company East Africa', 'Sudanese tech experts', 'MESL Solutions'],
  openGraph: {
    title: 'About Blue Team Africa — Our Story & Mission',
    description: 'From Sudan to Uganda: the Blue Team Africa story.',
  },
}

export default function AboutPage() {
  const organizationSchema = generateOrganizationSchema(
    'Blue Team Africa',
    'From Sudan to Uganda: the Blue Team Africa story. We build tech for East Africa — web design, ERP, mobile apps and cybersecurity with purpose.',
    'https://blueteamafrica.com',
    undefined,
    []
  )

  return (
    <>
      <JsonLd schema={organizationSchema} />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">Our Story — From Survival to Systems</h1>
          
          <div className="prose prose-lg max-w-none mb-8">
            <p className="text-xl text-gray-700 mb-6">
              Blue Team Africa began with a story few companies can claim: born from displacement, fuelled by resilience. 
              Our founder, Mohamed Eldaby, left Sudan after the conflict uprooted his life. Arriving in Uganda, he saw 
              not only the challenges of rebuilding, but the enormous potential for technology to empower organizations — 
              especially NGOs and companies serving vulnerable communities.
            </p>

            <p className="text-gray-700 mb-6">
              Mohamed founded MESL Solutions to deliver technical services to NGOs and humanitarian organizations. Over 
              time, the technical team and services migrated into Blue Team — a focused company that blends enterprise 
              reliability with mission-driven purpose. We combine product-grade engineering (ERP, CRM, secure cloud, mobile) 
              with the empathy and urgency that comes from working alongside humanitarian organizations.
            </p>

            <h2 className="text-3xl font-semibold mt-8 mb-4">What Drives Us</h2>
            <p className="text-gray-700 mb-6">
              We believe tech should be practical, secure, and accountable. Our mission is to remove friction from 
              operations so teams can focus on impact. Whether that's a fast website to increase donor reach, a CRM 
              that tracks case work, or an ERP that brings financial clarity to large programs — our work is measured 
              in outcomes.
            </p>

            <h2 className="text-3xl font-semibold mt-8 mb-4">Our Team & Values</h2>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">Integrity</h3>
                <p className="text-gray-700 text-sm">
                  Transparent pricing, documented processes, and clear SLAs.
                </p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">Empathy</h3>
                <p className="text-gray-700 text-sm">
                  We build with frontline teams, not for them.
                </p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">Quality</h3>
                <p className="text-gray-700 text-sm">
                  Secure, tested, and supported systems.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-semibold mt-8 mb-4">Our Commitment to East Africa</h2>
            <p className="text-gray-700 mb-6">
              We operate across Uganda, Kenya, Rwanda, and have a long-term commitment to Sudan. We're small enough to 
              care and large enough to deliver complex projects. Our local experience helps us understand the unique 
              challenges and opportunities in each market, allowing us to deliver solutions that are both globally 
              competitive and locally relevant.
            </p>

            <div className="bg-blue-50 p-6 rounded-lg my-8">
              <h3 className="text-2xl font-semibold mb-4">Partner With Us</h3>
              <p className="text-gray-700 mb-4">
                If you'd like to partner with us — for a website, automation, or a systems audit — contact us and 
                we'll start with a discovery call.
              </p>
              <Link 
                href="/contact?solution_interest=company" 
                className="btn-primary"
              >
                Contact Blue Team
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
