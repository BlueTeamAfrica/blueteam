'use client'

import { ReactNode, useRef, useState, useEffect } from 'react'

interface InteriorPageLayoutProps {
  title: string
  subtitle?: string
  children: ReactNode
  sidebar?: ReactNode
  showSidebar?: boolean
}

function useInViewOnce(margin = '-100px') {
  const ref = useRef<HTMLElement | null>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { rootMargin: margin }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [margin])

  return { ref, inView }
}

export default function InteriorPageLayout({
  title,
  subtitle,
  children,
  sidebar,
  showSidebar = false,
}: InteriorPageLayoutProps) {
  const { ref, inView } = useInViewOnce('-100px')

  return (
    <div className="min-h-screen bg-[#F8F9FC]">
      {/* Page Title Block */}
      <section
        ref={ref}
        className="bg-[#F8F9FC] pt-[150px] md:pt-[180px] pb-8"
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className={inView ? 'fade-up' : 'opacity-0'}>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight font-heading text-gray-900">
              {title}
            </h1>
            {subtitle && (
              <p className="text-lg text-gray-600 mt-4 max-w-3xl">
                {subtitle}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Content Area */}
      <div className="max-w-6xl mx-auto px-6 pb-16">
        <div className={`grid ${showSidebar ? 'md:grid-cols-[1fr_300px]' : 'grid-cols-1'} gap-8`}>
          <div className={inView ? 'fade-up delay-1' : 'opacity-0'}>
            {children}
          </div>

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
