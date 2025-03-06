"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useEffect, useState, Suspense } from "react";

interface ImageData {
  id: string;
  src: string;
  alt: string;
  hoverText: string;
}

const allImages = [
  {
    id: "1",
    src: "/images/gallery/egr1.jpeg",
    alt: "Image 1",
    hoverText: "EGR HOLDING OFFICE, Prestige Tower, Musaffah",
  },
  {
    id: "1",
    src: "/images/gallery/egr2.jpeg",
    alt: "Image 1",
    hoverText: "EGR HOLDING OFFICE, Prestige Tower, Musaffah",
  },
  {
    id: "1",
    src: "/images/gallery/egr3.jpeg",
    alt: "Image 1",
    hoverText: "EGR HOLDING OFFICE, Prestige Tower, Musaffah",
  },
  {
    id: "1",
    src: "/images/gallery/egr4.jpeg",
    alt: "Image 1",
    hoverText: "EGR HOLDING OFFICE, Prestige Tower, Musaffah",
  },
  {
    id: "1",
    src: "/images/gallery/egr5.jpeg",
    alt: "Image 1",
    hoverText: "EGR HOLDING OFFICE, Prestige Tower, Musaffah",
  },
  {
    id: "1",
    src: "/images/gallery/egr6.jpeg",
    alt: "Image 1",
    hoverText: "EGR HOLDING OFFICE, Prestige Tower, Musaffah",
  },
  {
    id: "2",
    src: "/images/gallery/benz1.jpeg",
    alt: "Image 2",
    hoverText: "MERCEDES BENZ EV Showroom",
  },
  {
    id: "2",
    src: "/images/gallery/benz2.jpeg",
    alt: "Image 2",
    hoverText: "MERCEDES BENZ EV Showroom",
  },
  {
    id: "2",
    src: "/images/gallery/benz3.jpeg",
    alt: "Image 2",
    hoverText: "MERCEDES BENZ EV Showroom",
  },
  {
    id: "2",
    src: "/images/gallery/benz4.jpeg",
    alt: "Image 2",
    hoverText: "MERCEDES BENZ EV Showroom",
  },
  {
    id: "2",
    src: "/images/gallery/benz5.jpeg",
    alt: "Image 2",
    hoverText: "MERCEDES BENZ EV Showroom",
  },
  {
    id: "3",
    src: "/images/gallery/rove1.jpeg",
    alt: "Image 2",
    hoverText: "ROVE HOTEL",
  },
  {
    id: "3",
    src: "/images/gallery/rove2.jpeg",
    alt: "Image 2",
    hoverText: "ROVE HOTEL",
  },
  {
    id: "3",
    src: "/images/gallery/rove3.jpeg",
    alt: "Image 2",
    hoverText: "ROVE HOTEL",
  },
];

const Gallery = () => {
  const searchParams = useSearchParams();
  const [filteredImages, setFilteredImages] = useState<ImageData[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const projectId = searchParams.get("project");
    if (projectId) {
      const filtered = allImages.filter((img) => img.id === projectId);
      setFilteredImages(filtered);
    } else {
      // Optional: show all images if no project ID is specified
      setFilteredImages(allImages);
    }
    setIsLoading(false);
  }, [searchParams]);

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

        {isLoading ? (
          <div className="text-center py-10">
            <p>Loading gallery...</p>
          </div>
        ) : filteredImages.length === 0 ? (
          <div className="text-center py-10">
            <p>No images found for this project.</p>
          </div>
        ) : (
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
            {filteredImages.map((image, index) => (
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
                  <h3 className="text-lg font-semibold text-white">
                    {image.hoverText}
                  </h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
};

const GalleryPage = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Gallery />
  </Suspense>
);

export default GalleryPage;