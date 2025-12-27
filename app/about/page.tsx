import Link from 'next/link'
import Image from 'next/image'
import InteriorHeader from '@/components/InteriorHeader'
import PsyloLinks from '@/components/seo/PsyloLinks'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'

export const metadata = {
  title: 'About BlueTeam Africa — Web Design & Technology Experts in East Africa',
  description: 'BlueTeam Africa is a Sudanese-founded digital agency delivering world-class web design, hosting, mobile apps, and ICT solutions across East Africa.',
  alternates: {
    canonical: 'https://www.blueteamafrica.com/about',
  },
}

export default function AboutPage() {
  const breadcrumbItems = [
    { name: 'Home', url: 'https://www.blueteamafrica.com/' },
    { name: 'About Us', url: 'https://www.blueteamafrica.com/about' },
  ]

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <main className="bg-white text-gray-800">
        <InteriorHeader
          title="About Blue Team Africa"
          breadcrumb={[
            { label: 'Home', href: '/' },
            { label: 'About Us' }
          ]}
        />

      {/* Hero Section */}
      <section className="relative w-full overflow-hidden">
        <div className="relative w-full" style={{ clipPath: 'inset(15% 0 12% 0)' }}>
          <Image
            src="/images/about/about-team-01.webp"
            alt="Blue Team Africa Team"
            width={1920}
            height={1080}
            className="w-full h-auto"
            priority
            sizes="100vw"
          />
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 container mx-auto px-6 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              A Digital Team Built for East Africa & Humanitarian Work
            </h2>
            <p className="text-lg leading-relaxed mb-4">
              Blue Team Africa is a technology company serving Uganda, Kenya,
              Rwanda, and Sudan — empowering NGOs, businesses, and community-driven
              organizations with modern digital solutions. Our work spans{" "}
              <Link href="/services/web-design" className="text-primary hover:underline font-semibold">website design</Link>,{" "}
              <Link href="/services/mobile-apps" className="text-primary hover:underline font-semibold">mobile app development</Link>,{" "}
              <Link href="/services/cybersecurity" className="text-primary hover:underline font-semibold">cybersecurity solutions</Link>,{" "}
              <Link href="/services/hosting" className="text-primary hover:underline font-semibold">website hosting</Link>,{" "}
              <Link href="/services/erp" className="text-primary hover:underline font-semibold">ERP systems</Link>, and{" "}
              <Link href="/services/crm" className="text-primary hover:underline font-semibold">CRM automation</Link>.
            </p>

            <p className="text-lg leading-relaxed mb-4">
              We operate with a mission-driven mindset, building reliable,
              long-lasting systems that help organizations function with
              efficiency, transparency, and data security — especially those
              working in fragile environments.
            </p>

            <p className="text-lg leading-relaxed">
              Our approach blends practical field experience, deep technical
              knowledge, and strong regional understanding — making us a trusted
              partner for organizations across East Africa.
            </p>
          </div>

          <div>
            <Image
              src="/images/about/about-office-01.webp"
              alt="Blue Team Africa Office"
              width={600}
              height={400}
              className="rounded-xl shadow-lg w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Sudan Case Story */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <Image
                src="/images/about/about-story-01.webp"
                alt="Field Operations"
                width={600}
                height={400}
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our Humanitarian Technology Work in Sudan
              </h2>
              <p className="text-lg leading-relaxed mb-4">
                One of our most impactful projects was partnering with a Sudanese
                humanitarian organization to build a full{" "}
                <Link href="/services/erp" className="text-primary hover:underline font-semibold">ERP system</Link>,{" "}
                <strong>donor reporting dashboard</strong>, and{" "}
                <Link href="/services/mobile-apps" className="text-primary hover:underline font-semibold">mobile field data collection app</Link>.
              </p>

              <p className="text-lg leading-relaxed mb-4">
                The system enabled transparent procurement, automated HR workflow,
                real-time program insights, and secure communication across teams
                working in high-risk regions.
              </p>

              <p className="text-lg leading-relaxed">
                This experience shaped our signature approach: designing technology
                that remains reliable even in conflict zones, rural areas, and
                low-connectivity environments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Overview (SEO + Psylo Linking) */}
      <section className="py-20 container mx-auto px-6 max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
          What We Specialize In
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <h3 className="font-semibold text-xl mb-2">Digital Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/web-design" className="text-primary hover:underline">Website Design</Link>
              </li>
              <li>
                <Link href="/services/website-development" className="text-primary hover:underline">Website Development</Link>
              </li>
              <li>
                <Link href="/services/ecommerce" className="text-primary hover:underline">E-commerce Systems</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-xl mb-2">Business Systems</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/erp" className="text-primary hover:underline">ERP Solutions</Link>
              </li>
              <li>
                <Link href="/services/crm" className="text-primary hover:underline">CRM Automation</Link>
              </li>
              <li>
                <Link href="/services/mobile-apps" className="text-primary hover:underline">Mobile App Development</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-xl mb-2">Security & Hosting</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/cybersecurity" className="text-primary hover:underline">Cybersecurity Solutions</Link>
              </li>
              <li>
                <Link href="/services/maintenance" className="text-primary hover:underline">Hosting & Maintenance</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-gray-700 leading-relaxed">
          <p>
            We support organizations across Rwanda with professional <Link href="/web-design-rwanda" className="text-primary hover:text-primary-dark hover:underline">web design services in Rwanda</Link> and comprehensive <Link href="/web-development-rwanda" className="text-primary hover:text-primary-dark hover:underline">web development solutions for businesses and NGOs</Link>. Our team combines technical expertise with regional knowledge to deliver digital solutions that work for Rwandan organizations.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#F5F7FA]/80 backdrop-blur-md border-b border-gray-200 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
          Ready to Work with a Team That Understands Your Mission?
        </h2>
        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto px-6 text-gray-700">
          Whether you're a business, NGO, or startup — we build technology that
          supports your growth and impact.
        </p>
        <Link 
          href="/contact" 
          className="inline-block bg-primary text-white px-10 py-3 font-semibold rounded-lg shadow hover:bg-primary-dark transition"
        >
          Contact Us
        </Link>
      </section>

      {/* Psylo Links for SEO */}
      <PsyloLinks />
      </main>
    </>
  )
}
