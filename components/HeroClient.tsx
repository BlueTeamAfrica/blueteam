'use client'

import { Play } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'

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
      <section className="relative w-full min-h-screen flex items-center justify-center bg-black text-white pt-16 md:pt-[72px]">
        <div className="absolute inset-0">
          <Image
            src="/images/hero/hero-gradient-abstract.webp"
            alt="website design and cyber security services in Uganda"
            fill
            className="object-cover opacity-90"
            priority
            sizes="100vw"
          />
        </div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>

        <div className="relative z-10 text-center max-w-3xl px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-heading font-bold leading-tight"
          >
            Enterprise Website Design,
            <span className="block text-[#60A5FA]">Web Development & Cyber Security</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-6 text-lg md:text-xl text-gray-200"
          >
            Modern, fast and secure digital systems built for NGOs, SMEs and enterprises across Uganda, Kenya and Rwanda.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/contact"
              className="px-6 py-3 bg-primary rounded-lg text-white hover:bg-primary-dark transition"
              aria-label="Start your website design and development project"
            >
              Start Your Project
            </Link>

            {/* Animated Play Button */}
            <motion.button
              onClick={handleVideoPlay}
              initial={{ scale: 1 }}
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ repeat: Infinity, duration: 1.8 }}
              className="flex items-center gap-3 px-4 py-3 rounded-full bg-white/20 border border-white/30 text-white backdrop-blur hover:bg-white/30 transition-all duration-300"
              aria-label="Play introduction video"
            >
              <Play className="w-5 h-5 fill-white" />
              <span className="font-medium">Watch Video</span>
            </motion.button>
          </motion.div>
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

