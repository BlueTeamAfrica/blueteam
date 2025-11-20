'use client'

import { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

interface SectionWrapperProps {
  children: ReactNode
  bgColor?: 'white' | 'light' | 'highlight'
  className?: string
}

export default function SectionWrapper({ 
  children, 
  bgColor = 'white',
  className = '' 
}: SectionWrapperProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const bgColors = {
    white: 'bg-white',
    light: 'bg-[#F8F9FC]',
    highlight: 'bg-[#EEF4FF]',
  }

  return (
    <section
      ref={ref}
      className={`py-12 md:py-16 ${bgColors[bgColor]} ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        {children}
      </motion.div>
    </section>
  )
}

