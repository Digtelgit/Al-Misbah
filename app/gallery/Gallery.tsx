"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface ImageData {
  src: string;
  alt: string;
  hoverText: string;
}

const Gallery = ({ images }: { images: ImageData[] }) => {
  return (
    <section className="bg-gray-900 text-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-gray-100">Project Gallery</h2>
          <p className="text-gray-400 mt-2">Showcasing our best projects</p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
          }}
        >
          {images.map((image, index) => (
            <motion.div 
              key={index} 
              className="relative group overflow-hidden rounded-xl shadow-lg"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={500}
                height={300}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <h3 className="text-lg font-semibold text-white">{image.hoverText}</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
