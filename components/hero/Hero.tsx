'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen bg-black flex items-center overflow-hidden">

      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/hero/hero-gradient-01.webp"
          alt="Blue Team Africa"
          fill
          priority
          quality={90}
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10 w-full max-w-lg mx-auto px-5 py-10 text-white">

        <h1
          className="font-extrabold leading-tight text-white"
          style={{ fontSize: "clamp(1.8rem, 7vw, 2.8rem)", lineHeight: 1.1 }}
        >
          Digital solutions for NGOs & East African businesses
        </h1>

        <p
          className="mt-4 text-white/90"
          style={{ fontSize: "clamp(1rem, 3.2vw, 1.15rem)" }}
        >
          Websites, ERPs, mobile apps, SEO, branding and digital systems for Uganda, Kenya, Rwanda and Sudan.
        </p>

        <div className="mt-6 grid gap-3">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-xl py-3 px-4 bg-white text-gray-900 font-semibold shadow-lg hover:bg-gray-200 transition"
          >
            Get Started
          </Link>

          <Link
            href="/portfolio"
            className="inline-flex items-center justify-center rounded-lg py-3 px-4 border-2 border-white text-white hover:bg-white/10 transition"
          >
            See Our Work
          </Link>

          <a
            href="https://wa.me/256765508131"
            target="_blank"
            className="text-white underline text-center hover:text-white/80"
          >
            WhatsApp Us →
          </a>
        </div>
      </div>

    </section>
  )
}

