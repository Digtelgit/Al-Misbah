"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import AboutUsImage from "@/public/images/aboutUs.jpg";

export default function AboutUs() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 },
    },
  };

  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      className="relative bg-gradient-to-br from-gray-50 to-gray-100 py-20 md:py-28 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-50 rounded-full -mr-32 -mt-32 opacity-70"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-50 rounded-full -ml-48 -mb-48 opacity-70"></div>

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Content Side */}
          <motion.div className="lg:w-1/2" variants={fadeInVariants}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-800 via-indigo-700 to-indigo-600 bg-clip-text text-transparent">
              About Us
            </h2>

            <motion.div
              className="prose prose-lg max-w-none space-y-6"
              variants={fadeInVariants}
            >
              <p className="text-gray-800 leading-relaxed">
                Al Misbah Décor is proud and passionate to present ourselves as
                the leading turnkey solutions provider for the built
                environment. We are dedicated to provide creative, efficient and
                high quality interior design, fit-out, retrofit, facility
                enhancement and maintenance solutions for your premises.
              </p>

              <p className="text-gray-800 leading-relaxed">
                We offer high-quality design and execution, as well as
                meticulous attention to detail and a tailor-made approach to
                each client's goals and premises needs.
              </p>

              <p className="text-gray-800 leading-relaxed">
                We prioritize your vision, ensuring seamless project execution
                from concept to completion.
              </p>
            </motion.div>

            {/* Call to action */}
            <motion.div className="mt-8" variants={fadeInVariants}>
              <button className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 transition-all duration-300 transform hover:-translate-y-1">
                Discover Our Services
              </button>
            </motion.div>
          </motion.div>

          {/* Image Side with decorative elements */}
          <motion.div className="lg:w-1/2 relative" variants={imageVariants}>
            <div className="relative z-10">
              {/* Decorative frame */}
              <div className="absolute -inset-4 border-2 border-indigo-200 rounded-xl"></div>

              <div className="relative rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src={AboutUsImage}
                  alt="Al Misbah Décor Interiors"
                  width={600}
                  height={500}
                  className="w-full h-auto object-cover"
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-900/20 to-transparent opacity-60"></div>
              </div>

              {/* Stats card */}
              <motion.div
                className="absolute -bottom-8 -right-8 bg-white p-4 rounded-lg shadow-xl"
                variants={{
                  hidden: { opacity: 0, x: 20 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: { delay: 0.6, duration: 0.5 },
                  },
                }}
              >
                <div className="flex gap-6">
                  <div className="text-center">
                    <p className="text-4xl font-bold text-indigo-600">
                      Trusted
                    </p>
                    <p className="text-sm text-gray-600">By Many Clients</p>
                  </div>
                  <div className="text-center">
                    <p className="text-4xl font-bold text-indigo-600">100%</p>
                    <p className="text-sm text-gray-600">Client Satisfaction</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Background decorative elements */}
            <div className="absolute top-1/2 -right-12 w-24 h-24 bg-indigo-100 rounded-full"></div>
            <div className="absolute -top-6 left-6 w-16 h-16 bg-indigo-100 rounded-full"></div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
