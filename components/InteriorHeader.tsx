"use client"

import { Fragment } from "react"
import NextLink from "next/link"
import { Link } from "@/i18n/navigation"

interface InteriorHeaderProps {
  title: string
  breadcrumb: { label: string; href?: string }[]
  /** false when the page has its own H1: the title is then not a heading at all */
  titleIsHeading?: boolean
}

export default function InteriorHeader({ title, breadcrumb, titleIsHeading = true }: InteriorHeaderProps) {
  // The non-heading title takes .section-title, which shares h2's phone size and Arabic line
  // height in globals.css, so it renders exactly as the h2 it replaced
  const TitleTag = titleIsHeading ? 'h1' : 'div'
  const titleClass = titleIsHeading ? '' : 'section-title '

  return (
    <div className="relative w-full bg-[#F5F7FA]/80 backdrop-blur-md border-b border-gray-200 pt-[120px] md:pt-[140px] pb-12 md:pb-16 overflow-hidden">

      {/* Title */}
      <TitleTag className={`${titleClass}text-3xl md:text-4xl font-bold text-gray-900 text-center fade-up`}>
        {title}
      </TitleTag>

      {/* Animated Underline */}
      <div className="h-[6px] w-[90px] bg-primary rounded-full mx-auto mt-4 fade-up delay-1" />

      {/* Breadcrumb */}
      <div className="flex justify-center mt-6 text-sm text-gray-600 gap-1 fade-up delay-2">
        {breadcrumb.map((item, index) => (
          <Fragment key={index}>
            <span className="flex items-center">
              {item.href ? (
                item.href.startsWith("/") ? (
                  // Locale-aware: on /ar pages "/" -> "/ar", "/services" -> "/ar/services"
                  <Link href={item.href} className="hover:text-primary">
                    {item.label}
                  </Link>
                ) : (
                  // Non-path hrefs (e.g. "#") stay as-is
                  <NextLink href={item.href} className="hover:text-primary">
                    {item.label}
                  </NextLink>
                )
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
