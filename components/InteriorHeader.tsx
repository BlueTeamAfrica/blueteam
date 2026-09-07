"use client"

import { Fragment } from "react"
import Link from "next/link"

interface InteriorHeaderProps {
  title: string
  breadcrumb: { label: string; href?: string }[]
  headingLevel?: 'h1' | 'h2' | 'h3'
}

export default function InteriorHeader({ title, breadcrumb, headingLevel = 'h1' }: InteriorHeaderProps) {
  const HeadingTag = headingLevel

  return (
    <div className="relative w-full bg-[#F5F7FA]/80 backdrop-blur-md border-b border-gray-200 pt-[120px] md:pt-[140px] pb-12 md:pb-16 overflow-hidden">

      {/* Title */}
      <HeadingTag className="text-3xl md:text-4xl font-bold text-gray-900 text-center fade-up">
        {title}
      </HeadingTag>

      {/* Animated Underline */}
      <div className="h-[6px] w-[90px] bg-primary rounded-full mx-auto mt-4 fade-up delay-1" />

      {/* Breadcrumb */}
      <div className="flex justify-center mt-6 text-sm text-gray-600 gap-1 fade-up delay-2">
        {breadcrumb.map((item, index) => (
          <Fragment key={index}>
            <span className="flex items-center">
              {item.href ? (
                <Link href={item.href} className="hover:text-primary">
                  {item.label}
                </Link>
              ) : (
                <span className="text-gray-900 font-medium">{item.label}</span>
              )}
            </span>
            {index < breadcrumb.length - 1 && (
              <>
                <span aria-hidden="true" className="mx-2 text-gray-400 rtl:hidden">›</span>
                <span aria-hidden="true" className="mx-2 text-gray-400 ltr:hidden">‹</span>
              </>
            )}
          </Fragment>
        ))}
      </div>
    </div>
  )
}
