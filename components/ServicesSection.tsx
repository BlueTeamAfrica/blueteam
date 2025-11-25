'use client'

import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

interface Service {
  title: string;
  description: string;
}

interface ServicesSectionProps {
  services: Service[];
}

export default function ServicesSection({ services }: ServicesSectionProps) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      {services.map((service, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          whileHover={{ scale: 1.03 }}
          className="p-6 rounded-xl shadow-md bg-white dark:bg-neutral-900 transition-all"
        >
          <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            {service.description}
          </p>
        </motion.div>
      ))}
    </motion.div>
  );
}

