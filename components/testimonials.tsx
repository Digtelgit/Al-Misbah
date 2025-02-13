"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import AboutUsImage from "@/public/images/aboutUs.jpg";

export default function AboutUs() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.4, delayChildren: 0.2 },
    },
  };

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, delay: 0.3, ease: "easeOut" } },
  };

  return (
    <motion.section
      className="relative bg-gray-100/80 py-16 md:py-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none bg-[url('/images/pattern-light.svg')] opacity-10"></div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <motion.div className="relative" variants={imageVariants}>
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-indigo-100 rounded-full opacity-30"></div>
            <Image
              className="rounded-xl shadow-lg"
              src={AboutUsImage}
              alt="About Us"
              width={600}
              height={400}
            />
          </motion.div>

          {/* Text Content */}
          <motion.div className="text-gray-800" variants={fadeUpVariants}>
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              About Us
            </h2>
            <p className="text-lg text-gray-600 mt-4">
              Crafting spaces with creativity, precision, and expertise.
            </p>
            <div className="mt-6 space-y-4">
              <div className="p-4 border-l-4 border-indigo-500 bg-white/60 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900">Why Misbah?</h3>
                <p className="text-gray-600">
                  We prioritize your vision, ensuring seamless project execution from concept to completion.
                </p>
              </div>
              <div className="p-4 border-l-4 border-indigo-500 bg-white/60 rounded-lg shadow-sm">
                <p className="text-gray-600">
                  Our expertise minimizes delays, so you focus on what matters most.
                </p>
              </div>
              <div className="p-4 border-l-4 border-indigo-500 bg-white/60 rounded-lg shadow-sm">
                <p className="text-gray-600">
                  Let’s create impactful spaces, together.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
