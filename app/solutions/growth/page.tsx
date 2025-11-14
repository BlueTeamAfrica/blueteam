import { Metadata } from 'next'
import Link from 'next/link'
import { JsonLd } from '@/components/SEO'
import { generateServiceSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'eCommerce & CRM Solutions Uganda — Blue Team Africa',
  description: 'Build eCommerce, CRM and marketing automation that increases revenue and reduces manual work. Payment gateways, local mobile money, and CRM integrations.',
  keywords: ['ecommerce website developer Uganda', 'CRM systems East Africa', 'marketing automation Uganda', 'mobile money integration'],
  openGraph: {
    title: 'eCommerce & CRM Solutions Uganda — Blue Team Africa',
    description: 'Build eCommerce, CRM and marketing automation that increases revenue.',
  },
}

export default function GrowthPage() {
  const serviceSchema = generateServiceSchema(
    'eCommerce & CRM Solutions',
    'Build eCommerce, CRM and marketing automation that increases revenue and reduces manual work. Payment gateways, local mobile money, and CRM integrations.',
    'Blue Team Africa',
    'https://blueteamafrica.com',
    'eCommerce & CRM',
    ['Uganda', 'Kenya', 'Rwanda', 'Sudan']
  )

  return (
    <>
      <JsonLd schema={serviceSchema} />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">Growth Systems — eCommerce, CRM & Marketing Automation</h1>
          
          <div className="prose prose-lg max-w-none mb-8">
            <p className="text-xl text-gray-700 mb-6">
              We build systems that convert visitors into buyers and automate manual tasks so your team spends 
              time selling, not fixing. From repeatable eCommerce experiences to CRM-driven sales pipelines and 
              automated marketing sequences — Blue Team configures the stack that grows your revenue.
            </p>

            <h2 className="text-3xl font-semibold mt-8 mb-4">eCommerce Solutions</h2>
            <p className="text-gray-700 mb-4">
              We build online stores that convert. Our eCommerce solutions include platform options (WooCommerce, 
              Shopify, custom), payment gateway integration with local mobile money support, and seamless product 
              & inventory management flows.
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li>Storefront design optimized for conversion</li>
              <li>Product catalog and inventory management</li>
              <li>Payment integration (cards, mobile money, bank transfers)</li>
              <li>Order management and fulfillment tracking</li>
              <li>Customer accounts and order history</li>
              <li>Shipping and delivery integration</li>
            </ul>

            <h2 className="text-3xl font-semibold mt-8 mb-4">CRM Implementation</h2>
            <p className="text-gray-700 mb-4">
              We configure CRM systems (HubSpot, custom Firestore CRM, or integrations to existing stacks) that 
              capture leads, score them automatically, and drive pipeline automation. Your sales team gets a 
              single source of truth for all customer interactions.
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li>Lead capture from website and forms</li>
              <li>Automated lead scoring and qualification</li>
              <li>Sales pipeline management</li>
              <li>Customer relationship tracking</li>
              <li>Integration with email and communication tools</li>
              <li>Reporting and analytics dashboards</li>
            </ul>

            <h2 className="text-3xl font-semibold mt-8 mb-4">Marketing Automation</h2>
            <p className="text-gray-700 mb-4">
              Automate your marketing to nurture leads and retain customers. We set up email flows, SMS campaigns, 
              retargeting, and analytics that measure ROI.
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li>Email marketing automation and sequences</li>
              <li>SMS campaigns and notifications</li>
              <li>Retargeting and ad campaign integration</li>
              <li>Customer segmentation and personalization</li>
              <li>Analytics and conversion tracking</li>
            </ul>

            <h2 className="text-3xl font-semibold mt-8 mb-4">Expected Outcomes</h2>
            <div className="bg-blue-50 p-6 rounded-lg mb-6">
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Increase online conversion by 30–50% with optimized eCommerce experiences</li>
                <li>Reduce manual lead handling time by 60–80% with CRM workflows</li>
                <li>Improve customer retention through automated nurturing campaigns</li>
                <li>Gain real-time visibility into sales pipeline and marketing ROI</li>
              </ul>
            </div>

            <h2 className="text-3xl font-semibold mt-8 mb-4">Timeline</h2>
            <p className="text-gray-700 mb-6">
              Typical Growth Systems projects take 4–8 weeks from discovery to launch, depending on complexity 
              and integration requirements.
            </p>

            <div className="bg-blue-50 p-6 rounded-lg my-8">
              <h3 className="text-2xl font-semibold mb-4">Ready to Scale Your Revenue?</h3>
              <p className="text-gray-700 mb-4">
                Book a Growth Discovery Call to discuss your eCommerce, CRM, and marketing automation needs.
              </p>
              <Link href="/contact?solution_interest=T2" className="btn-primary">
                Book a Growth Discovery Call
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

