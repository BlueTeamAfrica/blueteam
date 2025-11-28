'use client'

import { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

interface InteriorPageLayoutProps {
  title: string
  subtitle?: string
  children: ReactNode
  sidebar?: ReactNode
  showSidebar?: boolean
}

export default function InteriorPageLayout({
  title,
  subtitle,
  children,
  sidebar,
  showSidebar = false,
}: InteriorPageLayoutProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <div className="min-h-screen bg-[#F8F9FC]">
      {/* Page Title Block - Standardized: 80-100px below fixed header */}
      <section 
        ref={ref}
        className="bg-[#F8F9FC] pt-[150px] md:pt-[180px] pb-8"
      >
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight font-heading text-gray-900">
              {title}
            </h1>
            {subtitle && (
              <p className="text-lg text-gray-600 mt-4 max-w-3xl">
                {subtitle}
              </p>
            )}
          </motion.div>
        </div>
      </section>

      {/* Content Area */}
      <div className="max-w-6xl mx-auto px-6 pb-16">
        <div className={`grid ${showSidebar ? 'md:grid-cols-[1fr_300px]' : 'grid-cols-1'} gap-8`}>
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          >
            {children}
          </motion.div>

          {/* Sidebar */}
          {showSidebar && sidebar && (
            <aside className="hidden md:block">
              <div className="sticky top-[140px]">
                {sidebar}
              </div>
            </aside>
          )}
        </div>
      </div>
    </div>
  )
}

