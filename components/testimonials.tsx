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
      className="relative"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <motion.div className="mx-auto max-w-3xl pb-10 text-center" variants={fadeUpVariants}>
            <h2 className="bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-3xl font-semibold text-transparent md:text-4xl">
              About Us
            </h2>
            <p className="text-lg text-gray-400 mt-4">
              Crafting spaces with creativity, precision, and expertise.
            </p>
          </motion.div>

          {/* Content */}
          <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center" variants={containerVariants}>
            {/* Image */}
            <motion.div variants={imageVariants}>
              <Image className="rounded-lg object-cover" src={AboutUsImage} alt="About Us" width={600} height={400} />
            </motion.div>

            {/* Text Content */}
            <motion.div variants={fadeUpVariants}>
              <h3 className="text-2xl font-semibold text-gray-200">Why Misbah?</h3>
              <p className="text-gray-400 mt-4">
                We prioritize your vision, ensuring seamless project execution from concept to completion.
              </p>
              <p className="text-gray-400 mt-4">
                Our expertise minimizes delays, so you focus on what matters most.
              </p>
              <p className="text-gray-400 mt-4">
                Let’s create impactful spaces, together.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
