'use client'
import { useState, useEffect } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useTranslations } from 'next-intl';

// Dynamically import framer-motion only for desktop to reduce mobile JS payload
const MotionDiv = dynamic(
  () => import('framer-motion').then((mod) => mod.motion.div),
  {
    ssr: false,
    // Empty div — wrapper below provides the reserved height to prevent layout shift
    loading: () => <div />
  }
);

const MotionA = dynamic(
  () => import('framer-motion').then((mod) => mod.motion.a),
  {
    ssr: false
  }
);

export default function HeroSection() {
  const t = useTranslations('HomePage');

  const services = [
    t('rotatingServices.mobileApps'),
    t('rotatingServices.stunningWebsites'),
    t('rotatingServices.cloudHosting'),
    t('rotatingServices.cybersecurity'),
    t('rotatingServices.aiChatbots'),
    t('rotatingServices.enterpriseIT'),
    t('rotatingServices.erp'),
    t('rotatingServices.crm'),
    t('rotatingServices.seo'),
    t('rotatingServices.brandIdentity'),
    t('rotatingServices.socialMedia'),
    t('rotatingServices.ecommerce'),
    t('rotatingServices.customSoftware'),
  ];

  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
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
          fetchPriority="high"
          className="object-cover"
          sizes="100vw"
          quality={75}
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Text */}
      <div className="relative z-10 max-w-3xl px-6 text-center">
        <h1 className="text-3xl md:text-4xl font-medium leading-snug mb-4">
          {t('hero.title')}
        </h1>

        <p className="text-lg md:text-xl opacity-90">
          {t('hero.subtitle')}
        </p>

        {/* Rotating Services — min-h reserves space before framer-motion hydrates, preventing CLS */}
        <div className="mt-4 min-h-[2rem] md:min-h-[2.25rem] flex items-center justify-center">
          {isMobile ? (
            <div
              key={index}
              className="text-2xl md:text-3xl font-semibold text-orange-400 animate-fade-in"
            >
              {services[index]}
            </div>
          ) : (
            <MotionDiv
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-2xl md:text-3xl font-semibold text-orange-400"
            >
              {services[index]}
            </MotionDiv>
          )}
        </div>

        {/* Buttons - Use CSS transitions on mobile, Framer Motion on desktop */}
        {isMobile ? (
          <div className="relative z-10 mt-8 flex flex-col sm:flex-row items-center gap-4 justify-center animate-fade-in-up">
            <a
              href="/contact"
              className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-all shadow-md hover:shadow-lg active:scale-95"
            >
              {t('hero.ctaPrimary')}
            </a>

            <a
              href="/services"
              className="px-6 py-3 bg-white/90 hover:bg-white text-black font-semibold rounded-lg transition-all shadow-md hover:shadow-lg active:scale-95"
            >
              {t('hero.ctaSecondary')}
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
              {t('hero.ctaPrimary')}
            </MotionA>

            <MotionA
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              href="/services"
              className="px-6 py-3 bg-white/90 hover:bg-white text-black font-semibold rounded-lg transition-shadow shadow-md hover:shadow-lg"
            >
              {t('hero.ctaSecondary')}
            </MotionA>
          </MotionDiv>
        )}
      </div>

    </section>
  );
}
