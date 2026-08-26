'use client'

import { useState } from 'react'
import { Link } from '@/i18n/navigation'
import { ChevronDown, MessageCircle, ArrowRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { faqs, type FAQ } from '@/lib/faqs'

export { faqs, type FAQ }

interface FAQSectionProps {
  showAll?: boolean
  maxItems?: number
  showCTA?: boolean
  title?: string
  description?: string
  bgColor?: 'white' | 'gray'
  customFAQs?: FAQ[]
  viewAllLabel?: string
  ctaTitle?: string
  ctaBody?: string
  ctaWhatsApp?: string
  ctaContact?: string
}

export default function FAQSection({
  showAll = false,
  maxItems = 6,
  showCTA = true,
  title = 'Frequently Asked Questions',
  description = 'Common questions about our services, pricing, and processes',
  bgColor = 'white',
  customFAQs,
  viewAllLabel = 'View All FAQs',
  ctaTitle = 'Still Have Questions?',
  ctaBody = "We're here to help. Get in touch and we'll answer any questions you have.",
  ctaWhatsApp = 'Chat on WhatsApp',
  ctaContact = 'Contact Us'
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
                className="w-full px-6 py-4 text-start flex items-center justify-between hover:bg-gray-50 transition-colors"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="font-semibold text-gray-900 pe-4">
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
              {viewAllLabel}
              <ArrowRight size={18} className="rtl:rotate-180" />
            </Link>
          </div>
        )}

        {showCTA && showAll && (
          <div className="mt-12 bg-gray-50 rounded-lg p-8 text-center">
            <h3 className="text-xl font-heading font-bold text-gray-900 mb-4">
              {ctaTitle}
            </h3>
            <p className="text-gray-700 mb-6">
              {ctaBody}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://wa.me/254119402737"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition"
              >
                <MessageCircle size={20} />
                {ctaWhatsApp}
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border-2 border-primary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary/10 transition"
              >
                {ctaContact}
                <ArrowRight size={18} className="rtl:rotate-180" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

