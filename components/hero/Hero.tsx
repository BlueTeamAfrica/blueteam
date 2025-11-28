'use client'
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

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

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % services.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[90vh] flex items-center justify-center text-white overflow-hidden">
      
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/hero/hero-bg-01.webp')"
        }}
      />

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

        {/* Rotating Services */}
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-4 text-2xl md:text-3xl font-semibold text-orange-400"
        >
          {services[index]}
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 mt-8 flex flex-col sm:flex-row items-center gap-4 justify-center"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            href="/contact"
            className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-shadow shadow-md hover:shadow-lg"
          >
            Start Your Project
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            href="/services"
            className="px-6 py-3 bg-white/90 hover:bg-white text-black font-semibold rounded-lg transition-shadow shadow-md hover:shadow-lg"
          >
            Explore Our Services
          </motion.a>
        </motion.div>
      </div>

    </section>
  );
}
