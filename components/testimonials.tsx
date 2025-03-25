"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import AboutUsImage from "@/public/images/aboutUs.jpg";
import SlotCounter from "react-slot-counter";

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

  const statsVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { delay: 0.6, duration: 0.5, staggerChildren: 0.15 },
    },
  };

  const statItemVariants = {
    hidden: { opacity: 0, x: 15 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4 },
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
      {/* Background decorative elements - made responsive */}
      <div className="absolute top-0 right-0 w-48 md:w-64 h-48 md:h-64 bg-indigo-50 rounded-full -mr-24 md:-mr-32 -mt-24 md:-mt-32 opacity-70"></div>
      <div className="absolute bottom-0 left-0 w-72 md:w-96 h-72 md:h-96 bg-indigo-50 rounded-full -ml-36 md:-ml-48 -mb-36 md:-mb-48 opacity-70"></div>

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          {/* Content Side */}
          <motion.div className="w-full lg:w-1/2" variants={fadeInVariants}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-800 via-indigo-700 to-indigo-600 bg-clip-text text-transparent">
              About Us
            </h2>

            <motion.div
              className="prose prose-lg max-w-none space-y-4 md:space-y-6"
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
            <motion.div className="mt-6 md:mt-8" variants={fadeInVariants}>
              <a
                href="#services"
                className="px-5 py-2.5 sm:px-6 sm:py-3 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 transition-all duration-300 transform hover:-translate-y-1"
              >
                Discover Our Services
              </a>
            </motion.div>
          </motion.div>

          {/* Image Side with improved responsive stats alignment */}
          <motion.div
            className="w-full lg:w-1/2 relative mt-10 lg:mt-0"
            variants={imageVariants}
          >
            <div className="relative z-10 mx-4 sm:mx-8 lg:mx-0">
              {/* Decorative frame - reduced dimensions on smaller screens */}
              <div className="absolute -inset-2 sm:-inset-3 md:-inset-4 border-2 border-indigo-200 rounded-xl"></div>

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

              {/* Responsive approach for stats positioning */}
              {/* On small screens (mobile), stats appear as a row under the image */}
              <motion.div
                className="flex lg:hidden justify-center gap-2 sm:gap-4 mt-4"
                variants={statsVariants}
              >
                {/* Stat 1: 20+ Years - small screen */}
                <motion.div
                  className="bg-white p-2 rounded-lg shadow-lg flex flex-col items-center justify-center w-24 sm:w-28"
                  variants={statItemVariants}
                >
                  <SlotCounter
                    value={20}
                    duration={1.5}
                    charClassName="text-2xl font-bold text-indigo-600"
                    sequentialAnimation={true}
                  />
                  <p className="text-xs text-gray-600 text-center">Years</p>
                </motion.div>

                {/* Stat 2: 1000+ Projects - small screen */}
                <motion.div
                  className="bg-white p-2 rounded-lg shadow-lg flex flex-col items-center justify-center w-24 sm:w-28"
                  variants={statItemVariants}
                >
                  <SlotCounter
                    value={1000}
                    duration={1.5}
                    charClassName="text-2xl font-bold text-indigo-600"
                    sequentialAnimation={true}
                    padStartLen={3}
                  />
                  <p className="text-xs text-gray-600 text-center">Projects</p>
                </motion.div>

                {/* Stat 3: 100% Customer Satisfaction - small screen */}
                <motion.div
                  className="bg-white p-2 rounded-lg shadow-lg flex flex-col items-center justify-center w-24 sm:w-28"
                  variants={statItemVariants}
                >
                  <SlotCounter
                    value={100}
                    duration={1.5}
                    charClassName="text-2xl font-bold text-indigo-600"
                    sequentialAnimation={true}
                    padStartLen={3}
                  />
                  <p className="text-xs text-gray-600 text-center">
                    Satisfaction
                  </p>
                </motion.div>
              </motion.div>

              {/* On larger screens (desktop), stats appear vertically on the right side */}
              <motion.div
                className="hidden lg:flex flex-col absolute top-0 -right-12 h-full py-8 justify-center gap-4"
                variants={statsVariants}
              >
                {/* Stat 1: 20+ Years - large screen */}
                <motion.div
                  className="bg-white p-3 rounded-lg shadow-xl flex flex-col items-center justify-center w-24"
                  variants={statItemVariants}
                >
                  <SlotCounter
                    value={20}
                    duration={1.5}
                    charClassName="text-2xl font-bold text-indigo-600"
                    sequentialAnimation={true}
                  />
                  <p className="text-xs text-gray-600 text-center">+ Years </p>
                </motion.div>

                {/* Stat 2: 1000+ Projects - large screen */}
                <motion.div
                  className="bg-white p-3 rounded-lg shadow-xl flex flex-col items-center justify-center w-24"
                  variants={statItemVariants}
                >
                  <SlotCounter
                    value={1000}
                    duration={1.5}
                    charClassName="text-2xl font-bold text-indigo-600"
                    sequentialAnimation={true}
                    padStartLen={3}
                  />
                  <p className="text-xs text-gray-600 text-center">+ Projects</p>
                </motion.div>

                {/* Stat 3: 100% Customer Satisfaction - large screen */}
                <motion.div
                  className="bg-white p-3 rounded-lg shadow-xl flex flex-col items-center justify-center w-24"
                  variants={statItemVariants}
                >
                  <SlotCounter
                    value={100}
                    duration={1.5}
                    charClassName="text-2xl font-bold text-indigo-600"
                    sequentialAnimation={true}
                    padStartLen={3}
                  />
                  <p className="text-xs text-gray-600 text-center">
                  %  Satisfaction
                  </p>
                </motion.div>
              </motion.div>
            </div>

            {/* Background decorative elements - made responsive */}
            <div className="absolute top-1/2 -right-8 sm:-right-10 md:-right-12 w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 bg-indigo-100 rounded-full"></div>
            <div className="absolute -top-4 sm:-top-5 md:-top-6 left-4 sm:left-5 md:left-6 w-10 sm:w-12 md:w-16 h-10 sm:h-12 md:h-16 bg-indigo-100 rounded-full"></div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}