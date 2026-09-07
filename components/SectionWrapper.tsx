'use client'

import { ReactNode, useRef, useState, useEffect } from 'react'

interface SectionWrapperProps {
  children: ReactNode
  bgColor?: 'white' | 'light' | 'highlight'
  className?: string
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

export default function SectionWrapper({
  children,
  bgColor = 'white',
  className = '',
}: SectionWrapperProps) {
  const { ref, inView } = useInViewOnce('-100px')

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
      <div className={inView ? 'fade-up' : 'opacity-0'}>
        {children}
      </div>
    </section>
  )
}
