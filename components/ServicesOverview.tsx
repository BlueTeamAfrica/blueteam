'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const SERVICES = [
  { 
    name: 'Website Design', 
    href: '/web-design',
    description: 'Professional website design and development for businesses across East Africa',
    keyword: 'website design'
  },
  { 
    name: 'Website Build', 
    href: '/web-design',
    description: 'Rapid website build packages for fast launches and growth',
    keyword: 'website build'
  },
  { 
    name: 'Cloud Hosting', 
    href: '/hosting',
    description: 'Managed hosting with daily backups, SSL, and 24/7 monitoring',
    keyword: 'managed hosting'
  },
  { 
    name: 'ERP & CRM Systems', 
    href: '/erp',
    description: 'Enterprise resource planning and customer relationship management solutions',
    keyword: 'ERP CRM'
  },
  { 
    name: 'Mobile App Development', 
    href: '/mobile-apps',
    description: 'Native iOS and Android mobile applications for your business',
    keyword: 'mobile apps'
  },
  { 
    name: 'Cyber Security', 
    href: '/cybersecurity',
    description: 'Comprehensive cyber security solutions including penetration testing and security audits',
    keyword: 'cyber security'
  },
]

export default function ServicesOverview() {
  return (
    <section 
      className="py-16 bg-gray-50"
      aria-labelledby="services-overview"
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          id="services-overview"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-heading text-dark mb-8 text-center"
        >
          Our Services
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
                {s.description}
              </p>
              <Link
                href={s.href}
                className="mt-4 inline-block text-primary hover:text-primary-dark font-medium"
                aria-label={`Learn more about ${s.keyword} services`}
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

