'use client'

import { motion } from 'framer-motion'
import { CheckCircle, Target, Zap, Users } from 'lucide-react'

const features = [
  {
    icon: Target,
    title: 'Mission-Driven Approach',
    description:
      'We understand the unique needs of NGOs and mission-driven organizations across East Africa.',
    color: 'text-[#2563EB]',
  },
  {
    icon: Zap,
    title: 'Fast Delivery',
    description:
      'Agile development process ensures rapid delivery without compromising quality.',
    color: 'text-[#D97706]',
  },
  {
    icon: CheckCircle,
    title: 'Proven Track Record',
    description:
      'Years of experience delivering successful projects for businesses and organizations.',
    color: 'text-green-600',
  },
  {
    icon: Users,
    title: 'Expert Team',
    description:
      'Skilled developers and designers with deep expertise in modern technologies.',
    color: 'text-purple-600',
  },
]

export default function FeaturesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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

