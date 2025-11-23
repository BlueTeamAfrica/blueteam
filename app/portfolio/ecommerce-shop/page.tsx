import Link from 'next/link'
import Image from 'next/image'
import { MessageCircle, ArrowRight } from 'lucide-react'
import InteriorHeader from '@/components/InteriorHeader'

export const metadata = {
  title: 'E-commerce Platform - Case Study',
  description: 'Case study: Full-featured online store with mobile money integration and inventory management.',
}

export default function EcommerceShopCaseStudy() {
  return (
    <>
      <InteriorHeader
        title="E-commerce Platform"
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Portfolio', href: '/portfolio' },
          { label: 'E-commerce Platform' }
        ]}
      />

      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        {/* Project Image */}
        <section className="mb-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="relative h-96 bg-gray-200 rounded-lg overflow-hidden">
            <Image
              src="/images/portfolio/_legacy/t.webp"
              alt="E-commerce Platform"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">
            The Problem
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              A growing retail business wanted to expand beyond their physical store locations to 
              reach customers across East Africa. They needed an e-commerce platform that could 
              handle their diverse product catalog, integrate with local payment methods like mobile 
              money, and manage inventory across multiple locations.
            </p>
            <p>
              The existing manual order processing system couldn't scale, and the business was 
              missing opportunities to serve customers who preferred online shopping. They needed 
              a solution that would work seamlessly on mobile devices, since most of their target 
              customers shop via smartphones.
            </p>
            <p>
              Key requirements included support for mobile money payments (MTN, Airtel), real-time 
              inventory tracking, order management, shipping integration, and a user-friendly shopping 
              experience optimized for mobile devices.
            </p>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">
            Our Solution
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              We developed a custom e-commerce platform designed specifically for the East African 
              market. The solution includes a mobile-optimized storefront, comprehensive admin panel, 
              and integrations with popular payment gateways and shipping providers.
            </p>
            <p>
              Key features include:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Responsive design optimized for mobile shopping experiences</li>
              <li>Mobile money integration (MTN, Airtel, M-Pesa) for seamless payments</li>
              <li>Real-time inventory management across multiple warehouse locations</li>
              <li>Automated order processing and fulfillment workflows</li>
              <li>Multi-currency support for regional customers</li>
              <li>Customer account management with order history</li>
              <li>Email notifications for orders, shipping updates, and promotions</li>
              <li>Admin dashboard with sales analytics and reporting</li>
              <li>SEO optimization to drive organic traffic</li>
              <li>Integration with shipping providers for order tracking</li>
            </ul>
            <p>
              The platform was built with scalability in mind, ensuring it can handle growing traffic 
              and product catalogs as the business expands. Security features protect customer data 
              and payment information, building trust with online shoppers.
            </p>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">
            Results
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-primary mb-2">5x</div>
              <p className="text-gray-700">Increase in online sales</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-primary mb-2">80%</div>
              <p className="text-gray-700">Mobile money payment adoption</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-primary mb-2">3x</div>
              <p className="text-gray-700">Geographic reach expansion</p>
            </div>
          </div>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Within six months of launch, the e-commerce platform had achieved a 5x increase in 
              online sales compared to previous manual order processing. The mobile-optimized design 
              and mobile money integration made it easy for customers to shop and pay, resulting in 
              higher conversion rates.
            </p>
            <p>
              Mobile money payments quickly became the preferred payment method, with 80% of customers 
              choosing this option over traditional card payments. This local payment integration was 
              crucial for customer adoption in the East African market.
            </p>
            <p>
              The online store enabled the business to reach customers in regions where they didn't 
              have physical locations, expanding their geographic reach by 3x. Real-time inventory 
              management eliminated overselling issues and improved customer satisfaction with accurate 
              product availability information.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-heading font-bold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-gray-300 mb-6">
            Let's discuss how we can help launch your e-commerce store.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/256765508131"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition"
            >
              <MessageCircle size={20} />
              Chat on WhatsApp
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition"
            >
              Get a Quote
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
      </div>
    </>
  )
}

