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
    "StunningWebsites",
    "Cloud Hosting Solutions",
    "cybersecurity defenses",
    "AI-powered chatbots",
    "enterprise IT systems",
    "ERP systems",
    "CRM platforms",
    "SEO Optimization",
    "brand identities",
    "social media presence",
    "e-commerce solutions",
    "Custom Business Systems",
  ],
  prefixText = 'deliver',
  className = '',
}: AnimatedCTASectionProps) {
  const services = rotatingWords
  
  const [rotatingText, setRotatingText] = useState(services[0])
  const [fade, setFade] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false)
      setTimeout(() => {
        setRotatingText((prev) => {
          const nextIndex = (services.indexOf(prev) + 1) % services.length
          return services[nextIndex]
        })
        setFade(true)
      }, 300)
    }, 4000) // 4 second interval

    return () => clearInterval(interval)
  }, [services])

  return (
    <div className={`relative py-20 flex flex-col items-center justify-center overflow-hidden ${className}`}>
      {/* Gradient Wave Background */}
      <div 
        className="absolute inset-0 -z-10 opacity-90 animate-gradient-wave"
        style={{
          background: 'linear-gradient(-45deg, #f97316, #ef4444, #dc2626, #991b1b, #dc2626, #ef4444, #f97316)',
        }}
      ></div>

      {/* Animated Rotating Text */}
      <h1 className="text-4xl md:text-6xl font-bold text-white text-center">
        We <span className="text-white opacity-80">{prefixText}</span>
        <span
          className={`ml-3 text-white transition-opacity duration-700 ease-in-out ${
            fade ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {rotatingText}
        </span>
      </h1>
    </div>
  )
}

