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
      {/* Page Title Section */}
      <section 
        ref={ref}
        className="bg-[#F8F9FC] pt-[70px] pb-[30px] md:pt-[100px]"
      >
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <h1 className="text-[36px] font-heading font-bold text-gray-900 mb-2">
              {title}
            </h1>
            {subtitle && (
              <p className="text-lg text-gray-600 mt-2">
                {subtitle}
              </p>
            )}
          </motion.div>
        </div>
      </section>

      {/* Content Area */}
      <div className="max-w-6xl mx-auto px-6">
        <div className={`grid ${showSidebar ? 'md:grid-cols-[1fr_300px]' : 'grid-cols-1'} gap-8 pb-12`}>
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          >
            {children}
          </motion.div>

          {/* Sidebar */}
          {showSidebar && sidebar && (
            <aside className="hidden md:block">
              <div className="sticky top-[120px]">
                {sidebar}
              </div>
            </aside>
          )}
        </div>
      </div>
    </div>
  )
}

