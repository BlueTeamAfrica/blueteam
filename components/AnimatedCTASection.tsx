'use client'

import { useState, useEffect } from 'react'

interface AnimatedCTASectionProps {
  rotatingWords?: string[]
  prefixText?: string
  className?: string
}

export default function AnimatedCTASection({
  rotatingWords = [
    "Mobile Apps",
    "Stunning Websites",
    "Cloud Hosting Solutions",
    "Cybersecurity Solutions",
    "AI-powered Chatbots",
    "Enterprise IT Systems",
    "ERP Systems",
    "CRM Platforms",
    "SEO Optimization",
    "Brand Identities",
    "Social Media Presence",
    "E-commerce Solutions",
    "Custom Business Systems",
  ],
  prefixText = 'deliver',
  className = '',
}: AnimatedCTASectionProps) {
  const services = rotatingWords

  const [rotatingText, setRotatingText] = useState<string>(services[0])
  const [fade, setFade] = useState(true)

  useEffect(() => {
    // Safety: ensure services not empty
    if (!services || services.length === 0) return

    const interval = setInterval(() => {
      setFade(false)
      setTimeout(() => {
        setRotatingText((prev) => {
          const idx = services.indexOf(prev)
          const nextIndex = (idx === -1 ? 0 : (idx + 1) % services.length)
          return services[nextIndex]
        })
        setFade(true)
      }, 350) // fade-out/fade-in gap
    }, 4000) // 4 second interval

    return () => clearInterval(interval)
  }, [services])

  return (
    <div className={`relative py-20 flex flex-col items-center justify-center overflow-hidden ${className}`}>
      {/* Gradient Wave Background */}
      <div
        className="absolute inset-0 -z-10 opacity-80 animate-gradient-wave rounded-3xl"
        style={{
          background:
            'linear-gradient(-45deg, #ff7a2a 0%, #ef4444 25%, #dc2626 50%, #991b1b 75%, #ef4444 100%)',
          filter: 'saturate(1.05) blur(6px)',
          transform: 'scale(1.2)',
        }}
        aria-hidden="true"
      ></div>

      {/* Animated Rotating Text */}
      <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white text-center leading-tight px-4">
        We <span className="text-white opacity-90">{prefixText}</span>
        <span
          className={`ml-3 inline-block text-white transition-opacity duration-700 ease-in-out ${
            fade ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {rotatingText}
        </span>
      </h1>
    </div>
  )
}
