'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function HeroMobileFirst() {
  // Use the existing hero background image
  const poster = '/images/hero/hero-gradient-1.webp'

  return (
    <section className="relative bg-white overflow-hidden min-h-screen flex items-center">
      {/* responsive background media: image with overlay */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={poster}
          alt="Blue Team Africa — digital solutions for NGOs and East Africa"
          fill
          className="object-cover object-center"
          priority
          quality={90}
        />
        {/* translucent color overlay to keep text readable */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/40" />
      </div>

      {/* content container (mobile-first) */}
      <div className="relative z-10 px-5 py-8 max-w-xl mx-auto w-full text-white">
        {/* headline + paragraph + CTA */}
        <h1
          className="font-extrabold leading-tight text-white"
          style={{
            // mobile-first responsive headline using clamp
            fontSize: 'clamp(1.6rem, 6vw, 2.4rem)',
            lineHeight: 1.05,
          }}
        >
          Digital solutions for NGOs & East African businesses
        </h1>

        <p
          className="mt-3 text-white/90"
          style={{ fontSize: 'clamp(0.95rem, 3.2vw, 1rem)' }}
        >
          We're a Sudanese-led tech team working from Uganda to build websites, ERPs and secure infrastructure for NGOs and businesses in Uganda, Kenya, Rwanda and Sudan.
        </p>

        <div className="mt-5 grid gap-3">
          {/* CTA large enough for touch */}
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-xl py-3 px-4 bg-white text-gray-900 font-medium shadow-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white transition"
            style={{ minHeight: 48 }}
            aria-label="Get started with Blue Team Africa"
          >
            Get Started
          </Link>

          {/* secondary action */}
          <Link
            href="/portfolio"
            className="inline-flex items-center justify-center rounded-md py-2 px-3 border-2 border-white text-white bg-transparent hover:bg-white/10 transition"
            aria-label="See our portfolio"
          >
            See Our Work
          </Link>

          {/* WhatsApp link */}
          <a
            href="https://wa.me/256765508131"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center text-white underline text-sm hover:text-white/80 transition"
          >
            WhatsApp Us →
          </a>
        </div>

        {/* short feature list — compact for mobile */}
        <div className="mt-6 space-y-3">
          <div className="flex gap-3 items-start">
            <div className="w-10 h-10 rounded-md bg-white/20 backdrop-blur-sm flex items-center justify-center text-xl flex-shrink-0">
              🌐
            </div>
            <div>
              <div className="font-medium text-white">Web Design & Development</div>
              <div className="text-sm text-white/80">SEO-first, responsive sites</div>
            </div>
          </div>

          <div className="flex gap-3 items-start">
            <div className="w-10 h-10 rounded-md bg-white/20 backdrop-blur-sm flex items-center justify-center text-xl flex-shrink-0">
              ⚙️
            </div>
            <div>
              <div className="font-medium text-white">ERP & CRM</div>
              <div className="text-sm text-white/80">For NGOs and humanitarian workflows</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

