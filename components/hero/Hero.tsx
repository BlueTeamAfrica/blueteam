'use client'
import { useState, useEffect } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";

// Dynamically import framer-motion only for desktop to reduce mobile JS payload
const MotionDiv = dynamic(
  () => import('framer-motion').then((mod) => mod.motion.div),
  { 
    ssr: false,
    loading: () => <div className="mt-4 text-2xl md:text-3xl font-semibold text-orange-400" />
  }
);

const MotionA = dynamic(
  () => import('framer-motion').then((mod) => mod.motion.a),
  { 
    ssr: false 
  }
);

export default function HeroSection() {
  const services = [
    "Mobile Apps",
    "Stunning Websites",
    "Cloud Hosting Solutions",
    "Cybersecurity Defenses",
    "AI-Powered Chatbots",
    "Enterprise IT Systems",
    "ERP Systems",
    "CRM Platforms",
    "SEO Optimization",
    "Brand Identity Design",
    "Social Media Growth",
    "E-Commerce Solutions",
    "Custom Business Software",
  ];

  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect mobile on client side
    setIsMobile(window.innerWidth < 768);
    
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % services.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [services.length]);

  return (
    <section className="relative w-full h-[90vh] flex items-center justify-center text-white overflow-hidden">
      
      {/* Background Image - Using next/image with priority for LCP */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero/hero-bg-01.webp"
          alt="Blue Team Africa web and software solutions"
          fill
          priority
          className="object-cover"
          sizes="100vw"
          quality={90}
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Text */}
      <div className="relative z-10 max-w-3xl px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
        Your Digital Transformation Partner
        </h1>

        <p className="text-lg md:text-xl opacity-90">
          Web design, mobile apps, cloud hosting, cybersecurity & full-stack enterprise solutions — built for East Africa and beyond.
        </p>

        {/* Rotating Services - Use CSS animation on mobile, Framer Motion on desktop */}
        {isMobile ? (
          <div 
            key={index}
            className="mt-4 text-2xl md:text-3xl font-semibold text-orange-400 animate-fade-in"
          >
            {services[index]}
          </div>
        ) : (
          <MotionDiv
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mt-4 text-2xl md:text-3xl font-semibold text-orange-400"
          >
            {services[index]}
          </MotionDiv>
        )}

        {/* Buttons - Use CSS transitions on mobile, Framer Motion on desktop */}
        {isMobile ? (
          <div className="relative z-10 mt-8 flex flex-col sm:flex-row items-center gap-4 justify-center animate-fade-in-up">
            <a
              href="/contact"
              className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-all shadow-md hover:shadow-lg active:scale-95"
            >
              Start Your Project
            </a>

            <a
              href="/services"
              className="px-6 py-3 bg-white/90 hover:bg-white text-black font-semibold rounded-lg transition-all shadow-md hover:shadow-lg active:scale-95"
            >
              Explore Our Services
            </a>
          </div>
        ) : (
          <MotionDiv
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-10 mt-8 flex flex-col sm:flex-row items-center gap-4 justify-center"
          >
            <MotionA
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              href="/contact"
              className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-shadow shadow-md hover:shadow-lg"
            >
              Start Your Project
            </MotionA>

            <MotionA
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              href="/services"
              className="px-6 py-3 bg-white/90 hover:bg-white text-black font-semibold rounded-lg transition-shadow shadow-md hover:shadow-lg"
            >
              Explore Our Services
            </MotionA>
          </MotionDiv>
        )}
      </div>

    </section>
  );
}
