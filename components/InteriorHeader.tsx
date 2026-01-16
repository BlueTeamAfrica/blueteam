"use client"

import { motion } from "framer-motion"
import Link from "next/link"

interface InteriorHeaderProps {
  title: string
  breadcrumb: { label: string; href?: string }[]
  headingLevel?: 'h1' | 'h2' | 'h3'
}

export default function InteriorHeader({ title, breadcrumb, headingLevel = 'h1' }: InteriorHeaderProps) {
  const HeadingTag = headingLevel === 'h2' ? motion.h2 : headingLevel === 'h3' ? motion.h3 : motion.h1
  
  return (
    <div className="relative w-full bg-[#F5F7FA]/80 backdrop-blur-md border-b border-gray-200 pt-[120px] md:pt-[140px] pb-12 md:pb-16 overflow-hidden">

      {/* Title */}
      <HeadingTag
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-bold text-gray-900 text-center"
      >
        {title}
      </HeadingTag>

      {/* Animated Underline (Style A – Thick Oracom style) */}
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "90px" }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="h-[6px] bg-primary rounded-full mx-auto mt-4"
      />

      {/* Breadcrumb */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.4 }}
        className="flex justify-center mt-6 text-sm text-gray-600 gap-1"
      >
        {breadcrumb.map((item, index) => (
          <span key={index} className="flex items-center">
            {item.href ? (
              <Link href={item.href} className="hover:text-primary">
                {item.label}
              </Link>
            ) : (
              <span className="text-gray-900 font-medium">{item.label}</span>
            )}

            {index < breadcrumb.length - 1 && (
              <span className="mx-2 text-gray-400">›</span>
            )}
          </span>
        ))}
      </motion.div>
    </div>
  )
}

