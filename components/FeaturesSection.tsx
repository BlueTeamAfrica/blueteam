'use client'

import { motion } from 'framer-motion'
import { CheckCircle, Target, Users } from 'lucide-react'

const features = [
  {
    icon: Target,
    title: 'Outcome-First',
    description:
      'We focus on delivering measurable results that drive business growth and success for our clients across East Africa.',
    color: 'text-primary',
  },
  {
    icon: Users,
    title: 'Regional Expertise',
    description:
      'Deep understanding of East African markets, business practices, and technical infrastructure requirements.',
    color: 'text-primary',
  },
  {
    icon: CheckCircle,
    title: 'Security & Reliability',
    description:
      'Enterprise-grade security practices, reliable hosting, and comprehensive data protection for your business.',
    color: 'text-green-600',
  },
]

export default function FeaturesSection() {
  return (
    <section 
      className="py-20 bg-white"
      aria-labelledby="why-choose-us"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="why-choose-us" className="text-3xl font-heading font-bold text-gray-900 mb-12 text-center">
          Why Choose Blue Team Africa
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
                  <Icon className={`w-8 h-8 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

