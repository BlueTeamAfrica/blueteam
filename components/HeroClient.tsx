'use client'

import { Play } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'

// Rotating Text Animation Component (Pure Tailwind + CSS)
function RotatingTextAnimation() {
  const rotatingWords = [
    "Modern Websites",
    "Website Development",
    "Cybersecurity Solutions",
    "ERP Systems",
    "CRM Systems",
    "Mobile Apps",
    "E-commerce Platforms",
    "NGO Digital Solutions",
    "Hosting & Domain Management",
    "Branding & UI/UX"
  ]
  
  const [index, setIndex] = useState(0)
  const [fade, setFade] = useState(true)
  
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false)
      
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % rotatingWords.length)
        setFade(true)
      }, 300)
    }, 2000) // Change every 2 seconds
    
    return () => clearInterval(interval)
  }, [rotatingWords.length])
  
  return (
    <div className="hero-animation-slot flex items-center justify-center overflow-hidden">
      <div className="relative inline-block text-center lg:text-left w-full px-2 sm:px-4">
        <span className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold font-heading leading-tight break-words hyphens-auto">
          We Build{" "}
          <span
            className={`inline-block text-white font-extrabold transition-opacity duration-300 break-words ${
              fade ? "opacity-100" : "opacity-0"
            }`}
          >
            {rotatingWords[index]}
          </span>
        </span>
      </div>
    </div>
  )
}

export default function HeroClient() {
  const [isVideoOpen, setIsVideoOpen] = useState(false)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const modalRef = useRef<HTMLDivElement>(null)

  // Close on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isVideoOpen) {
        setIsVideoOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isVideoOpen])

  // Focus trap for accessibility
  useEffect(() => {
    if (isVideoOpen && closeButtonRef.current) {
      closeButtonRef.current.focus()
    }
  }, [isVideoOpen])

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        setIsVideoOpen(false)
      }
    }
    if (isVideoOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.body.style.overflow = 'unset'
    }
  }, [isVideoOpen])

  const handleVideoPlay = () => {
    setIsVideoOpen(true)
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'video_play', {
        event_category: 'engagement',
        event_label: 'hero_video',
      })
    }
  }

  return (
    <>
      {/* Header Spacer - Prevents overlap with sticky header */}
      <div className="bta-hero-header-spacer"></div>

      <section className="bta-hero">
        {/* Hero Background Image - Using Next.js Image for better performance */}
        <div className="bta-hero-background">
          <Image
            src="/images/hero/hero-gradient-01.webp"
            alt=""
            fill
            priority
            quality={90}
            sizes="100vw"
            className="bta-hero-background-image"
            style={{
              objectFit: 'cover',
              objectPosition: 'center',
            }}
            aria-hidden="true"
          />
          {/* Dark overlay for text contrast (WCAG compliant) */}
          <div className="bta-hero-overlay" aria-hidden="true"></div>
        </div>

        {/* Hero Inner Container */}
        <div className="bta-hero-inner">
          <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
            {/* Left Column - Content */}
            <div className="bta-hero-left">
              <h1>
                Digital solutions for NGOs & East African businesses
              </h1>

              <p>
                We are a team of Sudanese digital professionals working from Uganda to empower NGOs, startups and companies across Uganda, Kenya, Rwanda and Sudan.
              </p>

              {/* CTA Buttons */}
              <div className="bta-hero-ctas">
                <Link
                  href="/contact"
                  className="bta-btn-primary"
                  aria-label="Get started with your project"
                >
                  Get Started
                </Link>

                <Link
                  href="/portfolio"
                  className="bta-btn-secondary"
                  aria-label="See our portfolio"
                >
                  See Our Work
                </Link>
              </div>

              {/* WhatsApp Link */}
              <a
                href="https://wa.me/256765508131"
                target="_blank"
                rel="noopener noreferrer"
                className="bta-hero-whatsapp"
              >
                WhatsApp Us →
              </a>
            </div>

            {/* Right Column - Rotating Text Animation */}
            <div className="bta-hero-right">
              <RotatingTextAnimation />
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            role="dialog"
            aria-modal="true"
            aria-labelledby="video-modal-title"
          >
            <motion.div
              ref={modalRef}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="w-full max-w-5xl bg-black/95 rounded-lg overflow-hidden shadow-2xl"
            >
              <div className="relative pb-[56.25%]">
                <iframe
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&rel=0"
                  title="Blue Team Africa — Introduction Video"
                  id="video-modal-title"
                  className="absolute inset-0 w-full h-full"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="p-4 text-right bg-black/50">
                <button
                  ref={closeButtonRef}
                  onClick={() => setIsVideoOpen(false)}
                  className="inline-flex items-center gap-2 rounded-md bg-white px-4 py-2 text-gray-900 hover:bg-gray-100 transition font-medium"
                  aria-label="Close video modal"
                >
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
