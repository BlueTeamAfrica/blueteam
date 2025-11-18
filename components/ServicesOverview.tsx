'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const SERVICES = [
  { name: 'Web Design & Development', href: '/services/web-design' },
  { name: 'Mobile App Development', href: '/services/mobile-apps' },
  { name: 'UI/UX Design', href: '/services/ui-ux' },
  { name: 'SEO & Digital Marketing', href: '/services/seo' },
  { name: 'Branding & Logo Design', href: '/services/branding' },
  { name: 'Cloud Hosting & Domain Services', href: '/services/hosting' },
  { name: 'CRM & ERP Systems', href: '/services/crm-erp' },
  { name: 'E-commerce Development', href: '/services/ecommerce' },
  { name: 'Custom Software Development', href: '/services/software-dev' },
  { name: 'IT Maintenance & Support', href: '/services/maintenance' },
  { name: 'Tech Consultancy', href: '/services/consultancy' },
]

export default function ServicesOverview() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-heading text-dark mb-8 text-center"
        >
          What We Offer
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.href}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-gray-800">{s.name}</h3>
              <p className="text-gray-600 mt-2">
                Learn how we can help with {s.name.toLowerCase()}.
              </p>
              <Link
                href={s.href}
                className="mt-4 inline-block text-primary hover:text-primary-dark font-medium"
              >
                Learn more →
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

