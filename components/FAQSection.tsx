'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronDown, MessageCircle, ArrowRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export const faqs = [
  {
    question: 'How much does a website cost?',
    answer: 'Website costs vary depending on complexity, features, and requirements. Basic websites typically start around $500-$1,500, while custom web applications can range from $2,000 to $10,000 or more. We provide detailed quotes after understanding your specific needs.',
  },
  {
    question: 'How long does it take to build a website?',
    answer: 'Simple websites typically take 2-4 weeks, while more complex projects can take 6-12 weeks. Timeline depends on project scope, design complexity, and client feedback cycles. We provide detailed timelines during the discovery phase.',
  },
  {
    question: 'Do you offer hosting services?',
    answer: 'Yes, we provide reliable cloud hosting and domain services with 99.9% uptime guarantee. Our hosting solutions are optimized for African markets with local support and competitive pricing.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept bank transfers, mobile money (MTN, Airtel, M-Pesa), and international payment methods. Payment terms are flexible and discussed during project planning.',
  },
  {
    question: 'Do you provide ongoing maintenance and support?',
    answer: 'Yes, we offer various support packages from basic maintenance to comprehensive managed services. Ongoing support includes updates, security patches, backups, and technical assistance.',
  },
  {
    question: 'Can you integrate mobile money payments?',
    answer: 'Absolutely. We specialize in integrating local payment methods including MTN Mobile Money, Airtel Money, M-Pesa, and other regional payment gateways. This is essential for e-commerce and donation platforms in East Africa.',
  },
  {
    question: 'What is included in your ERP system?',
    answer: 'Our ERP systems typically include inventory management, sales, finance, HR, and production modules. We customize the solution to match your specific business processes and requirements.',
  },
  {
    question: 'How long does ERP implementation take?',
    answer: 'ERP implementation typically takes 8-16 weeks depending on complexity and customization needs. This includes discovery, design, development, data migration, testing, training, and deployment phases.',
  },
  {
    question: 'Do you provide training for ERP systems?',
    answer: 'Yes, comprehensive training is included with all ERP implementations. We train your team on system usage, workflows, and reporting. Ongoing training support is available as needed.',
  },
  {
    question: 'Can you develop mobile apps for both iOS and Android?',
    answer: 'Yes, we develop both native iOS and Android applications, as well as cross-platform solutions using React Native or Flutter. We help you choose the best approach based on your requirements and budget.',
  },
  {
    question: 'How long does mobile app development take?',
    answer: 'Simple mobile apps take 6-10 weeks, while more complex applications can take 12-20 weeks. Timeline includes design, development, testing, and app store submission.',
  },
  {
    question: 'What is the cost of mobile app development?',
    answer: 'Mobile app costs range from $3,000 for simple apps to $15,000+ for complex applications. Factors include features, platform (iOS, Android, or both), design complexity, and integrations.',
  },
  {
    question: 'Do you handle app store submission?',
    answer: 'Yes, we handle the entire app store submission process for both iOS App Store and Google Play Store, including preparing required materials and managing the approval process.',
  },
  {
    question: 'What hosting speed can I expect?',
    answer: 'Our hosting infrastructure is optimized for speed with CDN integration and modern technologies. Typical load times are under 2 seconds, though actual speeds depend on your website\'s optimization and user\'s internet connection.',
  },
  {
    question: 'Where are your servers located?',
    answer: 'We use cloud infrastructure with servers in multiple locations, including options in Africa where available. This reduces latency and improves performance for users in East Africa.',
  },
  {
    question: 'Can you help migrate my existing website?',
    answer: 'Yes, we provide website migration services including content transfer, data migration, DNS configuration, and testing. We ensure minimal downtime during the migration process.',
  },
  {
    question: 'Do you offer website redesign services?',
    answer: 'Yes, we offer complete website redesigns to modernize existing sites, improve user experience, and enhance functionality. We can work with your existing content or create new content as needed.',
  },
  {
    question: 'What technologies do you use?',
    answer: 'We use modern web technologies including Next.js, React, Node.js, and cloud platforms. For mobile apps, we use React Native, Flutter, and native development. We choose technologies that best fit each project\'s needs.',
  },
  {
    question: 'Do you work with NGOs and nonprofits?',
    answer: 'Yes, we have extensive experience working with NGOs and nonprofits across East Africa. We offer special pricing and understand the unique needs of mission-driven organizations.',
  },
  {
    question: 'What is your typical response time for support?',
    answer: 'Response times vary by support package. Priority support responds within 2-4 hours, standard support within 24 hours, and basic support within 48 hours. Emergency issues are addressed immediately.',
  },
]

export interface FAQ {
  question: string
  answer: string
}

interface FAQSectionProps {
  showAll?: boolean
  maxItems?: number
  showCTA?: boolean
  title?: string
  description?: string
  bgColor?: 'white' | 'gray'
  customFAQs?: FAQ[]
}

export default function FAQSection({ 
  showAll = false, 
  maxItems = 6,
  showCTA = true,
  title = 'Frequently Asked Questions',
  description = 'Common questions about our services, pricing, and processes',
  bgColor = 'white',
  customFAQs
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqsToDisplay = customFAQs || faqs
  const displayFAQs = showAll ? faqsToDisplay : faqsToDisplay.slice(0, maxItems)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className={`py-16 ${bgColor === 'gray' ? 'bg-gray-50' : 'bg-white'}`}>
      <div className="max-w-3xl mx-auto px-6">
        {title && (
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              {title}
            </h2>
            {description && (
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                {description}
              </p>
            )}
          </div>
        )}

        <div className="space-y-4">
          {displayFAQs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="font-semibold text-gray-900 pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  size={20}
                  className={`text-gray-600 flex-shrink-0 transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    id={`faq-answer-${index}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 py-4 text-gray-700 leading-relaxed border-t border-gray-100">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {!showAll && (
          <div className="mt-8 text-center">
            <Link
              href="/faq"
              className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-medium"
            >
              View All FAQs
              <ArrowRight size={18} />
            </Link>
          </div>
        )}

        {showCTA && showAll && (
          <div className="mt-12 bg-gray-50 rounded-lg p-8 text-center">
            <h3 className="text-xl font-heading font-bold text-gray-900 mb-4">
              Still Have Questions?
            </h3>
            <p className="text-gray-700 mb-6">
              We're here to help. Get in touch and we'll answer any questions you have.
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
                className="inline-flex items-center gap-2 border-2 border-primary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary/10 transition"
              >
                Contact Us
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

