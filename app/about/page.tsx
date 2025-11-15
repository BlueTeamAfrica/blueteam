import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
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
      
      {/* Hero Section - White Peak Digital Style */}
      <section className="relative min-h-[400px] md:min-h-[500px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/about/5.webp"
            alt="Blue Team Africa - Our Story"
            fill
            className="object-cover"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/75 via-blue-800/70 to-blue-900/80"></div>
        </div>
        
        {/* Content */}
        <div className="container mx-auto px-4 relative z-10 py-20 md:py-24">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Our Story — From Survival to Systems
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 font-light max-w-3xl mx-auto">
              Blue Team Africa began with a story few companies can claim: born from displacement, fuelled by resilience.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Founder Section with Image */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-16 items-center">
            <div className="order-2 md:order-1">
              <div className="relative w-full h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/images/about/6.webp"
                  alt="Mohamed Eldaby - Founder of Blue Team Africa"
                  fill
                  className="object-cover"
                  quality={90}
                />
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Mohamed Eldaby</h2>
              <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                Our founder, Mohamed Eldaby, left Sudan after the conflict uprooted his life. Arriving in Uganda, he saw 
                not only the challenges of rebuilding, but the enormous potential for technology to empower organizations — 
                especially NGOs and companies serving vulnerable communities.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Mohamed founded MESL Solutions to deliver technical services to NGOs and humanitarian organizations. Over 
                time, the technical team and services migrated into Blue Team — a focused company that blends enterprise 
                reliability with mission-driven purpose. We combine product-grade engineering (ERP, CRM, secure cloud, mobile) 
                with the empathy and urgency that comes from working alongside humanitarian organizations.
              </p>
            </div>
          </div>

          <div className="prose prose-lg max-w-none mb-12">

            {/* What Drives Us Section with Image */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-semibold mb-6">What Drives Us</h2>
                <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                  We believe tech should be practical, secure, and accountable. Our mission is to remove friction from 
                  operations so teams can focus on impact. Whether that's a fast website to increase donor reach, a CRM 
                  that tracks case work, or an ERP that brings financial clarity to large programs — our work is measured 
                  in outcomes.
                </p>
              </div>
              <div className="relative w-full h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/images/about/7.webp"
                  alt="Blue Team Africa - What Drives Us"
                  fill
                  className="object-cover"
                  quality={90}
                />
              </div>
            </div>

            {/* Our Team & Values */}
            <h2 className="text-3xl md:text-4xl font-semibold mt-12 mb-8 text-center">Our Team & Values</h2>
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-blue-50 p-8 rounded-xl border border-blue-100 hover:shadow-lg transition">
                <h3 className="font-bold text-xl mb-3 text-blue-900">Integrity</h3>
                <p className="text-gray-700">
                  Transparent pricing, documented processes, and clear SLAs.
                </p>
              </div>
              <div className="bg-blue-50 p-8 rounded-xl border border-blue-100 hover:shadow-lg transition">
                <h3 className="font-bold text-xl mb-3 text-blue-900">Empathy</h3>
                <p className="text-gray-700">
                  We build with frontline teams, not for them.
                </p>
              </div>
              <div className="bg-blue-50 p-8 rounded-xl border border-blue-100 hover:shadow-lg transition">
                <h3 className="font-bold text-xl mb-3 text-blue-900">Quality</h3>
                <p className="text-gray-700">
                  Secure, tested, and supported systems.
                </p>
              </div>
            </div>

            {/* Our Commitment Section with Image */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-16 items-center">
              <div className="relative w-full h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-xl order-2 md:order-1">
                <Image
                  src="/images/about/8.webp"
                  alt="Blue Team Africa - Our Commitment to East Africa"
                  fill
                  className="object-cover"
                  quality={90}
                />
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-3xl md:text-4xl font-semibold mb-6">Our Commitment to East Africa</h2>
                <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                  We operate across Uganda, Kenya, Rwanda, and have a long-term commitment to Sudan. We're small enough to 
                  care and large enough to deliver complex projects. Our local experience helps us understand the unique 
                  challenges and opportunities in each market, allowing us to deliver solutions that are both globally 
                  competitive and locally relevant.
                </p>
              </div>
            </div>

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
