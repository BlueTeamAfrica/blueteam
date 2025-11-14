import { Metadata } from 'next'
import Link from 'next/link'
import { JsonLd } from '@/components/SEO'
import { generateServiceSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Web Design Company Uganda — Affordable & SEO-ready | Blue Team Africa',
  description: 'High-performing websites and reliable hosting for East African businesses. Starter to Professional packages, fast launch and local support.',
  keywords: ['web design company Uganda', 'website design', 'website hosting Uganda', 'affordable web design', 'SEO website'],
  openGraph: {
    title: 'Web Design Company Uganda — Affordable & SEO-ready | Blue Team Africa',
    description: 'High-performing websites and reliable hosting for East African businesses.',
  },
}

export default function FoundationalPage() {
  const serviceSchema = generateServiceSchema(
    'Web Design & Hosting Services',
    'High-performing websites and reliable hosting for East African businesses. Fast launch with responsive design, SEO optimization, and local support.',
    'Blue Team Africa',
    'https://blueteamafrica.com',
    'Web Design',
    ['Uganda', 'Kenya', 'Rwanda', 'Sudan']
  )

  return (
    <>
      <JsonLd schema={serviceSchema} />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">Affordable, High-Performing Websites & Hosting</h1>
          
          <div className="prose prose-lg max-w-none mb-8">
            <p className="text-xl text-gray-700 mb-6">
              A website should convert visitors into customers and supporters. Our T1 packages deliver modern, 
              responsive, and SEO-friendly websites built for speed and accessibility. We help NGOs, startups 
              and SMEs launch with clear messaging, secure hosting and performance that meets Google's Core Web Vitals. 
              Choose a package, launch quickly, and scale into automation and integrations when you're ready.
            </p>

            <h2 className="text-3xl font-semibold mt-8 mb-4" id="packages">Packages</h2>

            {/* Starter Package */}
            <div className="bg-white border border-gray-200 rounded-xl p-8 mb-6">
              <h3 className="text-2xl font-bold mb-4">Starter Package</h3>
              <p className="text-gray-700 mb-4">Perfect for small businesses and NGOs getting started online.</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>1–3 pages</li>
                <li>Basic SEO optimization</li>
                <li>Contact form</li>
                <li>Analytics setup (GA4)</li>
                <li>SSL certificate</li>
                <li>Basic training</li>
              </ul>
              <p className="font-semibold text-gray-700 mb-4">Timeline: 1–2 weeks</p>
              <Link href="/contact?package=starter" className="btn-primary">
                Choose Starter Package
              </Link>
            </div>

            {/* Professional Package */}
            <div className="bg-white border-2 border-blue-600 rounded-xl p-8 mb-6">
              <div className="bg-blue-600 text-white px-4 py-2 rounded-lg inline-block mb-4">
                <span className="font-semibold">Most Popular</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Professional Package</h3>
              <p className="text-gray-700 mb-4">Ideal for growing businesses needing comprehensive web presence.</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>5–10 pages</li>
                <li>Content support</li>
                <li>Speed & accessibility optimizations</li>
                <li>Advanced SEO</li>
                <li>CMS training</li>
                <li>Social media integration</li>
                <li>1-month maintenance included</li>
              </ul>
              <p className="font-semibold text-gray-700 mb-4">Timeline: 2–4 weeks</p>
              <Link href="/contact?package=professional" className="btn-primary">
                Choose Professional Package
              </Link>
            </div>

            {/* Business Package */}
            <div className="bg-white border border-gray-200 rounded-xl p-8 mb-6">
              <h3 className="text-2xl font-bold mb-4">Business Package</h3>
              <p className="text-gray-700 mb-4">For businesses ready to sell online and integrate with business systems.</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>eCommerce-ready</li>
                <li>Payment setup</li>
                <li>Product pages</li>
                <li>Basic CRM connects</li>
                <li>Inventory management</li>
                <li>Advanced analytics</li>
                <li>3-month maintenance included</li>
              </ul>
              <p className="font-semibold text-gray-700 mb-4">Timeline: 3–6 weeks</p>
              <Link href="/contact?package=business" className="btn-primary">
                Choose Business Package
              </Link>
            </div>

            <h2 className="text-3xl font-semibold mt-8 mb-4">Technical Specifications</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li><strong>Platform:</strong> WordPress + Phlox or Next.js + headless CMS options</li>
              <li><strong>Hosting:</strong> Vercel (Next.js) or managed WordPress hosting</li>
              <li><strong>Security:</strong> SSL, daily backups, security monitoring</li>
              <li><strong>SEO:</strong> GA4 setup, sitemap.xml, robots.txt, schema.org basics</li>
              <li><strong>Performance:</strong> Optimized for Core Web Vitals</li>
            </ul>

            <div className="bg-blue-50 p-6 rounded-lg my-8">
              <h3 className="text-2xl font-semibold mb-4">Ready to Get Started?</h3>
              <p className="text-gray-700 mb-4">
                Choose a package that fits your needs, or contact us for a custom quote tailored to your business.
              </p>
              <Link href="/contact?package=custom" className="btn-primary">
                Get a Custom Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

