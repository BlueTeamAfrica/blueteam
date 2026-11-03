'use client'

import { useState } from 'react'
import { Link } from '@/i18n/navigation'
import { ChevronDown, ArrowRight } from 'lucide-react'
import type { FAQ } from '@/lib/faqs'

interface FAQSectionProps {
  showAll?: boolean
  maxItems?: number
  title?: string
  description?: string
  bgColor?: 'white' | 'gray'
  customFAQs: FAQ[]
  viewAllLabel?: string
}

export default function FAQSection({
  showAll = false,
  maxItems = 6,
  title,
  description,
  bgColor = 'white',
  customFAQs,
  viewAllLabel,
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const displayFAQs = showAll ? customFAQs : customFAQs.slice(0, maxItems)

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
              <div
                id={`faq-answer-${index}`}
                style={{
                  display: 'grid',
                  gridTemplateRows: openIndex === index ? '1fr' : '0fr',
                  transition: 'grid-template-rows 0.2s ease',
                  overflow: 'hidden',
                }}
              >
                <div style={{ overflow: 'hidden' }}>
                  <div className="px-6 py-4 text-gray-700 leading-relaxed border-t border-gray-100">
                    {faq.answer}
                  </div>
                </div>
              </div>
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
      </div>
    </section>
  )
}

