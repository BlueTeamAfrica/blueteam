import type { Metadata } from 'next'
import Link from 'next/link'
import InteriorHeader from '@/components/InteriorHeader'
import { generateLocalBusinessSchema, generateServiceSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Website, Mobile App Development & Cybersecurity in Rwanda | Blue Team Africa',
  description: 'Website design, mobile app development, and cybersecurity services in Rwanda, serving NGOs and businesses in Kigali and nationwide.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://www.blueteamafrica.com/locations/rwanda',
  },
  keywords: [
    'website design Rwanda',
    'website development Rwanda',
    'mobile applications Rwanda',
    'mobile app development Rwanda',
    'cybersecurity services Rwanda',
    'web design Kigali',
    'website development Kigali',
    'mobile apps Kigali',
    'cybersecurity Kigali',
    'NGO website Rwanda',
    'business website Rwanda',
  ],
  openGraph: {
    title: 'Website, Mobile App Development & Cybersecurity in Rwanda | Blue Team Africa',
    description: 'Website design, mobile app development, and cybersecurity services in Rwanda, serving NGOs and businesses in Kigali and nationwide.',
    url: 'https://www.blueteamafrica.com/locations/rwanda',
    type: 'website',
  },
}

// Generate JSON-LD schemas
const localBusinessSchema = generateLocalBusinessSchema(
  'Blue Team Africa',
  'RW',
  'Kigali',
  'https://www.blueteamafrica.com/locations/rwanda',
  [
    'Website Design',
    'Website Development',
    'Mobile Applications',
    'Mobile App Development',
    'Cybersecurity Services',
  ]
)

const websiteDesignServiceSchema = generateServiceSchema(
  'Website Design Services in Rwanda',
  'Professional website design services for NGOs and businesses in Rwanda, with expertise serving organizations in Kigali and nationwide.',
  'Blue Team Africa',
  'https://www.blueteamafrica.com',
  'Website Design',
  ['Rwanda', 'Kigali']
)

const mobileAppServiceSchema = generateServiceSchema(
  'Mobile App Development Services in Rwanda',
  'Custom mobile application development for NGOs and businesses in Rwanda, including solutions for organizations in Kigali.',
  'Blue Team Africa',
  'https://www.blueteamafrica.com',
  'Mobile App Development',
  ['Rwanda', 'Kigali']
)

const cybersecurityServiceSchema = generateServiceSchema(
  'Cybersecurity Services in Rwanda',
  'Comprehensive cybersecurity solutions for NGOs and businesses in Rwanda, protecting organizations in Kigali and across the country.',
  'Blue Team Africa',
  'https://www.blueteamafrica.com',
  'Cybersecurity',
  ['Rwanda', 'Kigali']
)

export default function RwandaLocationPage() {
  return (
    <>
      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteDesignServiceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(mobileAppServiceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(cybersecurityServiceSchema) }}
      />

      <InteriorHeader
        title="Website, Mobile App Development & Cybersecurity in Rwanda"
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Locations', href: '#' },
          { label: 'Rwanda' },
        ]}
      />

      <div className="max-w-6xl mx-auto px-6 py-12 md:py-20">
        {/* Section 1: Rwanda Digital Overview */}
        <section className="mb-16" aria-labelledby="rwanda-overview">
          <h2 id="rwanda-overview" className="text-3xl md:text-4xl font-heading font-semibold mb-6 text-gray-900">
            Digital Solutions for NGOs and Businesses in Rwanda
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="mb-4">
              Rwanda has emerged as one of Africa's most dynamic digital ecosystems, with a strong focus on technology-driven development and innovation. The country's commitment to digital transformation has created unprecedented opportunities for NGOs, enterprises, and startups to leverage technology for growth and impact.
            </p>
            <p className="mb-4">
              Organizations across Rwanda are increasingly recognizing the need for professional digital solutions that can support their missions, whether they're humanitarian organizations working in remote areas, businesses expanding their market reach, or startups building their first online presence. The demand for reliable, secure, and scalable technology solutions has never been higher.
            </p>
            <p>
              Blue Team Africa brings deep expertise in serving East African organizations, understanding the unique challenges and opportunities that come with operating in Rwanda's growing digital landscape. From the bustling tech scene in Kigali to organizations working across the country, we provide comprehensive digital solutions tailored to the needs of NGOs and businesses alike.
            </p>
          </div>
        </section>

        {/* Section 2: Kigali Focus - CRITICAL */}
        <section className="mb-16 bg-gray-50 rounded-2xl p-8 md:p-10" aria-labelledby="kigali-focus">
          <h2 id="kigali-focus" className="text-3xl md:text-4xl font-heading font-semibold mb-6 text-gray-900">
            Serving Organizations and NGOs in Kigali
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="mb-4">
              Kigali stands at the heart of Rwanda's digital transformation, hosting a vibrant community of NGOs, international organizations, and growing businesses. The city's strategic position as East Africa's technology hub has attracted numerous organizations seeking to establish or expand their digital presence. Blue Team Africa has extensive experience working with organizations based in Kigali, understanding the specific needs and operational contexts that shape their technology requirements.
            </p>
            <p className="mb-4">
              For NGOs operating in Kigali, we provide specialized website design and development services that reflect their mission and reach their target audiences effectively. Our mobile application development solutions enable field teams to collect data, manage programs, and communicate seamlessly, even in areas with limited connectivity. Many institutions in Kigali also require robust cybersecurity services to protect sensitive data and ensure compliance with international standards.
            </p>
            <p>
              Companies and institutions throughout Kigali trust Blue Team Africa for comprehensive digital solutions that combine technical excellence with deep understanding of the local context. Whether you're an NGO managing multiple programs, a business expanding your online presence, or an institution requiring secure infrastructure, our team brings the expertise needed to deliver results that matter.
            </p>
          </div>
        </section>

        {/* Section 3: Services in Rwanda */}
        <section className="mb-16" aria-labelledby="services-rwanda">
          <h2 id="services-rwanda" className="text-3xl md:text-4xl font-heading font-semibold mb-8 text-gray-900">
            Our Services in Rwanda
          </h2>

          <div className="space-y-12">
            {/* Website Design & Development */}
            <div>
              <h3 className="text-2xl md:text-3xl font-heading font-semibold mb-4 text-gray-900">
                Website Design & Development
              </h3>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed mb-4">
                <p>
                  Professional website design and development services tailored for NGOs and businesses in Rwanda. We create modern, mobile-first websites that effectively communicate your mission, showcase your work, and engage your audience. Our development approach ensures fast loading times, secure hosting, and seamless user experiences across all devices.
                </p>
                <p>
                  Whether you need a simple informational website or a complex platform with custom functionality, our team combines design expertise with technical excellence to deliver solutions that work. We understand the importance of websites that perform well in Rwanda's digital environment, optimizing for local connectivity and user expectations.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/services/web-design"
                  className="inline-flex items-center text-primary font-semibold hover:text-primary-dark hover:underline"
                >
                  Learn more about Web Design →
                </Link>
                <Link
                  href="/services/website-development"
                  className="inline-flex items-center text-primary font-semibold hover:text-primary-dark hover:underline"
                >
                  Learn more about Website Development →
                </Link>
              </div>
            </div>

            {/* Mobile Applications & Mobile App Development */}
            <div>
              <h3 className="text-2xl md:text-3xl font-heading font-semibold mb-4 text-gray-900">
                Mobile Applications & Mobile App Development
              </h3>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed mb-4">
                <p>
                  Custom mobile application development for NGOs and businesses in Rwanda. We build native and cross-platform mobile apps that enable field teams to collect data, manage programs, and stay connected even in areas with limited internet connectivity. Our mobile applications integrate seamlessly with existing systems, providing real-time synchronization when connectivity is available.
                </p>
                <p>
                  From data collection apps for humanitarian organizations to business applications that streamline operations, our mobile app development services are designed to meet the specific needs of organizations operating in Rwanda. We prioritize offline functionality, data security, and user-friendly interfaces that work across different devices and network conditions.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/services/mobile-apps"
                  className="inline-flex items-center text-primary font-semibold hover:text-primary-dark hover:underline"
                >
                  Learn more about Mobile App Development →
                </Link>
              </div>
            </div>

            {/* Cybersecurity Services */}
            <div>
              <h3 className="text-2xl md:text-3xl font-heading font-semibold mb-4 text-gray-900">
                Cybersecurity Services
              </h3>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed mb-4">
                <p>
                  Comprehensive cybersecurity services to protect NGOs and businesses in Rwanda from digital threats. We provide security audits, penetration testing, secure hosting solutions, and ongoing monitoring to ensure your digital infrastructure remains protected. Our cybersecurity approach is tailored to the specific risks and compliance requirements that organizations face in Rwanda.
                </p>
                <p>
                  For NGOs handling sensitive beneficiary data and businesses managing customer information, robust cybersecurity is essential. We implement enterprise-grade security measures, including encryption, secure authentication, regular backups, and threat monitoring. Our team stays current with the latest security threats and best practices to keep your systems protected.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/services/cybersecurity"
                  className="inline-flex items-center text-primary font-semibold hover:text-primary-dark hover:underline"
                >
                  Learn more about Cybersecurity Services →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Why Blue Team Africa in Rwanda */}
        <section className="mb-16 bg-white rounded-2xl p-8 md:p-10 border border-gray-200" aria-labelledby="why-blue-team">
          <h2 id="why-blue-team" className="text-3xl md:text-4xl font-heading font-semibold mb-6 text-gray-900">
            Why Blue Team Africa in Rwanda
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="mb-4">
              Blue Team Africa brings unique expertise in serving NGOs and humanitarian organizations, with proven experience building systems that work in challenging environments. Our team understands the operational realities that organizations face in Rwanda, from connectivity challenges in remote areas to the need for secure, compliant systems that meet international standards.
            </p>
            <p className="mb-4">
              Our East Africa focus means we have deep knowledge of the regional context, understanding both the opportunities and constraints that shape technology adoption. We've built ERP systems, mobile data collection applications, and secure infrastructure for organizations working across the region, giving us practical experience with the types of solutions that NGOs and businesses in Rwanda need most.
            </p>
            <p className="mb-4">
              We prioritize security and scalability in everything we build, recognizing that organizations need solutions that can grow with them and protect sensitive information. Our approach combines modern technology with practical implementation, ensuring that systems are not only technically sound but also usable by teams with varying levels of technical expertise.
            </p>
            <p>
              Local understanding matters, and our experience working with organizations across East Africa has given us insights into the specific needs, preferences, and operational contexts that shape successful digital solutions in Rwanda. We're committed to building long-term partnerships with organizations, providing ongoing support and adapting solutions as needs evolve.
            </p>
          </div>
        </section>

        {/* Section 5: CTA */}
        <section className="text-center bg-primary/5 rounded-2xl p-8 md:p-12" aria-labelledby="cta-rwanda">
          <h2 id="cta-rwanda" className="text-3xl md:text-4xl font-heading font-semibold mb-4 text-gray-900">
            Start Your Digital Project in Rwanda
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Whether you're an NGO looking to improve your digital presence, a business expanding online, or an institution requiring secure infrastructure, we're here to help. Let's discuss how we can support your mission in Rwanda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-primary text-white rounded-lg hover:bg-primary-dark transition font-semibold"
            >
              Contact Us
            </Link>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 border-2 border-primary text-primary rounded-lg hover:bg-primary/5 transition font-semibold"
            >
              Request a Quote
            </Link>
          </div>
        </section>
      </div>
    </>
  )
}

