"use client";

import React, { FC } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

type GalleryProps = {
  images: { src: string; alt: string; hoverText?: string }[];
};

const Gallery: FC<GalleryProps> = ({ images }) => {
  // Animation variants
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      className="relative overflow-hidden bg-white bg-opacity-95"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f0f0f0' fill-opacity='0.4'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }}
    >
      {/* Background Shape */}
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -mb-24 ml-20 -translate-x-1/2"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src="/images/blurred-shape.svg"
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </div>

      {/* Gallery Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Heading */}
          <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.600),theme(colors.indigo.400),theme(colors.gray.500),theme(colors.indigo.500),theme(colors.gray.600))] bg-[length:200%_auto] bg-clip-text pb-8 font-nacelle text-3xl font-semibold text-transparent md:text-4xl text-center">
            Explore Our Creative Projects
          </h2>

          {/* Image Grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {images.map((image, index) => (
              <motion.div
                key={index}
                className="group relative overflow-hidden rounded-lg bg-white p-1 shadow-md transition-transform duration-300 hover:scale-105"
                variants={imageVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }} // Trigger animation once
              >
                {/* Image */}
                <Image
                  className="rounded-lg object-cover"
                  src={image.src}
                  alt={image.alt}
                  layout="responsive"
                  width={350}
                  height={250}
                />
                {/* Hover Text */}
                <div className="absolute bottom-0 left-0 w-full bg-gray-900/80 p-2 text-center text-sm text-gray-100 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {image.hoverText || "View Project"}
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div
            className="mt-10 flex justify-center"
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <Link href="/gallery">
              <button className="px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                More Projects →
              </button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;