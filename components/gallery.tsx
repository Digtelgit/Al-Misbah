"use client";

import React, { FC } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

type GalleryProps = {
  images: { id: number; src: string; alt: string; hoverText?: string }[];
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
    <section className="relative overflow-hidden bg-white bg-opacity-95">
      {/* Background Shape */}
      <div
        className="absolute bottom-0 left-1/2 -z-10 -mb-24 ml-20 -translate-x-1/2"
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
          <h2 className="font-sans animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.600),theme(colors.indigo.400),theme(colors.gray.500),theme(colors.indigo.500),theme(colors.gray.600))] bg-[length:200%_auto] bg-clip-text pb-8 text-3xl font-semibold text-transparent md:text-4xl text-center">
            Explore Our Creative Projects
          </h2>

          {/* Centered Image Grid */}
          <div className="flex justify-center">
            <div className="grid grid-cols-3 gap-8 place-items-center">
              {images.map((image, index) => (
                <motion.div
                  key={index}
                  className="group relative overflow-hidden rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
                  variants={imageVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <Link href={`/gallery?project=${image.id}`} className="block">
                    <div className="relative w-full aspect-[4/3]">
                      <Image
                        className="rounded-lg object-cover w-full h-full"
                        src={image.src}
                        alt={image.alt}
                        fill
                      />
                    </div>
                  </Link>

                  {/* Hover Text */}
                  <div className="absolute bottom-0 left-0 w-full bg-gray-900/80 p-2 text-center text-sm text-gray-100 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    {image.hoverText || "View Project"}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
