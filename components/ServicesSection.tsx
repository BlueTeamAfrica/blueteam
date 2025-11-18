'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  Globe,
  Smartphone,
  Cloud,
  Database,
  Shield,
  ShoppingCart,
} from 'lucide-react'

const services = [
  {
    icon: Globe,
    title: 'Web Design & Development',
    description:
      'Custom websites and web applications built with modern technologies for optimal performance and user experience.',
    href: '/web-design',
    color: 'bg-primary-100 text-primary',
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description:
      'Native and cross-platform mobile applications for iOS and Android that engage your users.',
    href: '/mobile-apps',
    color: 'bg-green-100 text-green-600',
  },
  {
    icon: Cloud,
    title: 'Cloud & Web Hosting',
    description:
      'Reliable cloud infrastructure and web hosting with 99.9% uptime guarantee and 24/7 monitoring.',
    href: '/hosting',
    color: 'bg-purple-100 text-purple-600',
  },
  {
    icon: Database,
    title: 'ERP Systems',
    description:
      'Enterprise resource planning solutions that streamline your operations and boost productivity.',
    href: '/erp',
    color: 'bg-orange-100 text-orange-600',
  },
  {
    icon: ShoppingCart,
    title: 'CRM Solutions',
    description:
      'Customer relationship management systems to automate sales, track leads, and grow your business.',
    href: '/crm',
    color: 'bg-pink-100 text-pink-600',
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    description:
      'Comprehensive security solutions including penetration testing, audits, and secure operations.',
    href: '/cybersecurity',
    color: 'bg-red-100 text-red-600',
  },
]

export default function ServicesSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive digital solutions tailored for businesses across East
            Africa. From web development to enterprise systems.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link
                  href={service.href}
                  className="block bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 h-full group border border-gray-100 hover:border-primary/20"
                >
                  <div className={`w-12 h-12 rounded-lg ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="mt-4 flex items-center text-primary font-medium text-sm group-hover:gap-2 transition-all">
                    Learn more
                    <svg
                      className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

