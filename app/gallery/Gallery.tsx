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
    hoverText: "EGR HOLDING CORPORATE OFFICE, MUSAFFA, ABU DHABI",
  },
  {
    id: "1",
    src: "/images/gallery/egr2.jpeg",
    alt: "Image 1",
    hoverText: "EGR HOLDING CORPORATE OFFICE, MUSAFFA, ABU DHABI",
  },
  {
    id: "1",
    src: "/images/gallery/egr3.jpeg",
    alt: "Image 1",
    hoverText: "EGR HOLDING CORPORATE OFFICE, MUSAFFA, ABU DHABI",
  },
  {
    id: "1",
    src: "/images/gallery/egr4.jpeg",
    alt: "Image 1",
    hoverText: "EGR HOLDING CORPORATE OFFICE, MUSAFFA, ABU DHABI",
  },
  {
    id: "1",
    src: "/images/gallery/egr5.jpeg",
    alt: "Image 1",
    hoverText: "EGR HOLDING CORPORATE OFFICE, MUSAFFA, ABU DHABI",
  },
  {
    id: "1",
    src: "/images/gallery/egr6.jpeg",
    alt: "Image 1",
    hoverText: "EEGR HOLDING CORPORATE OFFICE, MUSAFFA, ABU DHABI",
  },
  {
    id: "2",
    src: "/images/gallery/benz1.jpeg",
    alt: "Image 2",
    hoverText: "MERCIDEZ BENZ SHOWROOM, DUBAI DESIGN DISTRICT",
  },
  {
    id: "2",
    src: "/images/gallery/benz2.jpeg",
    alt: "Image 2",
    hoverText: "MERCIDEZ BENZ SHOWROOM, DUBAI DESIGN DISTRICT",
  },
  {
    id: "2",
    src: "/images/gallery/benz3.jpeg",
    alt: "Image 2",
    hoverText: "MERCIDEZ BENZ SHOWROOM, DUBAI DESIGN DISTRICT",
  },
  {
    id: "2",
    src: "/images/gallery/benz4.jpeg",
    alt: "Image 2",
    hoverText: "MERCIDEZ BENZ SHOWROOM, DUBAI DESIGN DISTRICT",
  },
  {
    id: "2",
    src: "/images/gallery/benz5.jpeg",
    alt: "Image 2",
    hoverText: "MERCIDEZ BENZ SHOWROOM, DUBAI DESIGN DISTRICT",
  },
  {
    id: "2",
    src: "/images/gallery/benz6.jpeg",
    alt: "Image 2",
    hoverText: "MERCIDEZ BENZ SHOWROOM, DUBAI DESIGN DISTRICT",
  },
  {
    id: "3",
    src: "/images/gallery/rove1.jpeg",
    alt: "Image 2",
    hoverText: "ROVE HOTEL & APARTMENTS, JBR",
  },
  {
    id: "3",
    src: "/images/gallery/rove2.jpeg",
    alt: "Image 2",
    hoverText: "ROVE HOTEL & APARTMENTS, JBR",
  },
  {
    id: "3",
    src: "/images/gallery/rove3.jpeg",
    alt: "Image 2",
    hoverText: "ROVE HOTEL & APARTMENTS, JBR",
  },
  {
    id: "4",
    src: "/images/gallery/Publicis1.jpeg",
    alt: "Image 3",
    hoverText: "PUBLICIS SAPIENT OFFICE, DUBAI MEDIA CITY",
  },
  {
    id: "4",
    src: "/images/gallery/Publicis2.jpeg",
    alt: "Image 3",
    hoverText: "PUBLICIS SAPIENT OFFICE, DUBAI MEDIA CITY",
  },
  {
    id: "4",
    src: "/images/gallery/Publicis3.jpeg",
    alt: "Image 3",
    hoverText: "PUBLICIS SAPIENT OFFICE, DUBAI MEDIA CITY",
  },
  {
    id: "4",
    src: "/images/gallery/Publicis4.jpeg",
    alt: "Image 3",
    hoverText: "PUBLICIS SAPIENT OFFICE, DUBAI MEDIA CITY",
  },
  {
    id: "4",
    src: "/images/gallery/Publicis5.jpeg",
    alt: "Image 3",
    hoverText: "PUBLICIS SAPIENT OFFICE, DUBAI MEDIA CITY",
  },
  {
    id: "4",
    src: "/images/gallery/Publicis6.jpeg",
    alt: "Image 3",
    hoverText: "PUBLICIS SAPIENT OFFICE, DUBAI MEDIA CITY",
  },
  {
    id: "4",
    src: "/images/gallery/Publicis7.jpeg",
    alt: "Image 3",
    hoverText: "PUBLICIS SAPIENT OFFICE, DUBAI MEDIA CITY",
  },
  {
    id: "4",
    src: "/images/gallery/Publicis8.jpeg",
    alt: "Image 3",
    hoverText: "PUBLICIS SAPIENT OFFICE, DUBAI MEDIA CITY",
  },
  {
    id: "4",
    src: "/images/gallery/Publicis9.jpeg",
    alt: "Image 3",
    hoverText: "PUBLICIS SAPIENT OFFICE, DUBAI MEDIA CITY",
  },
  {
    id: "4",
    src: "/images/gallery/Publicis10.jpeg",
    alt: "Image 3",
    hoverText: "PUBLICIS SAPIENT OFFICE, DUBAI MEDIA CITY",
  },
  {
    id: "4",
    src: "/images/gallery/Publicis11.jpeg",
    alt: "Image 3",
    hoverText: "PUBLICIS SAPIENT OFFICE, DUBAI MEDIA CITY",
  },
  {
    id: "4",
    src: "/images/gallery/Publicis12.jpeg",
    alt: "Image 3",
    hoverText: "PUBLICIS SAPIENT OFFICE, DUBAI MEDIA CITY",
  },
  {
    id: "5",
    src: "/images/gallery/Esproses1.jpg",
    alt: "Image 3",
    hoverText: "ESPROSES CAFÉ & FLORAL BOUTIQUE, AL AIN CENTRE",
  },
  {
    id: "5",
    src: "/images/gallery/Esproses2.jpg",
    alt: "Image 3",
    hoverText: "ESPROSES CAFÉ & FLORAL BOUTIQUE, AL AIN CENTRE",
  },
  {
    id: "5",
    src: "/images/gallery/Esproses3.jpg",
    alt: "Image 3",
    hoverText: "ESPROSES CAFÉ & FLORAL BOUTIQUE, AL AIN CENTRE",
  },
  {
    id: "5",
    src: "/images/gallery/Esproses4.jpg",
    alt: "Image 3",
    hoverText: "ESPROSES CAFÉ & FLORAL BOUTIQUE, AL AIN CENTRE",
  },
  {
    id: "5",
    src: "/images/gallery/Esproses5.jpeg",
    alt: "Image 3",
    hoverText: "ESPROSES CAFÉ & FLORAL BOUTIQUE, AL AIN CENTRE",
  },
  {
    id: "5",
    src: "/images/gallery/Esproses6.jpg",
    alt: "Image 3",
    hoverText: "ESPROSES CAFÉ & FLORAL BOUTIQUE, AL AIN CENTRE",
  },
  {
    id: "5",
    src: "/images/gallery/Esproses7.jpg",
    alt: "Image 3",
    hoverText: "ESPROSES CAFÉ & FLORAL BOUTIQUE, AL AIN CENTRE",
  },
  {
    id: "5",
    src: "/images/gallery/Esproses8.jpg",
    alt: "Image 3",
    hoverText: "ESPROSES CAFÉ & FLORAL BOUTIQUE, AL AIN CENTRE",
  },
  {
    id: "6",
    src: "/images/gallery/Otaku1.jpg",
    alt: "Image 6",
    hoverText: "OTAKU JAPANESE RESTAURANT, AL GURM, ABU DHABI",
  },
  {
    id: "6",
    src: "/images/gallery/Otaku2.jpg",
    alt: "Image 6",
    hoverText: "OTAKU JAPANESE RESTAURANT, AL GURM, ABU DHABI",
  },
  {
    id: "6",
    src: "/images/gallery/Otaku3.jpg",
    alt: "Image 6",
    hoverText: "OTAKU JAPANESE RESTAURANT, AL GURM, ABU DHABI",
  },
  {
    id: "6",
    src: "/images/gallery/Otaku4.jpg",
    alt: "Image 6",
    hoverText: "OTAKU JAPANESE RESTAURANT, AL GURM, ABU DHABI",
  },
  {
    id: "6",
    src: "/images/gallery/Otaku5.jpg",
    alt: "Image 6",
    hoverText: "OTAKU JAPANESE RESTAURANT, AL GURM, ABU DHABI",
  },
  {
    id: "6",
    src: "/images/gallery/Otaku6.jpg",
    alt: "Image 6",
    hoverText: "OTAKU JAPANESE RESTAURANT, AL GURM, ABU DHABI",
  },
  {
    id: "7",
    src: "/images/gallery/Bournhall1.jpg",
    alt: "Image 7",
    hoverText: "BOURN HALL CLINIC, AL GARHOUD, DUBAI",
  },
  {
    id: "7",
    src: "/images/gallery/Bournhall2.jpg",
    alt: "Image 7",
    hoverText: "BOURN HALL CLINIC, AL GARHOUD, DUBAI",
  },
  {
    id: "7",
    src: "/images/gallery/Bournhall3.jpg",
    alt: "Image 7",
    hoverText: "BOURN HALL CLINIC, AL GARHOUD, DUBAI",
  },
  {
    id: "7",
    src: "/images/gallery/Bournhall4.jpg",
    alt: "Image 7",
    hoverText: "BOURN HALL CLINIC, AL GARHOUD, DUBAI",
  },
  {
    id: "8",
    src: "/images/gallery/Building1.jpeg",
    alt: "Image 8",
    hoverText: "MOHA TDC FACILITY, SHARJAH",
  },
  {
    id: "8",
    src: "/images/gallery/Building2.jpeg",
    alt: "Image 8",
    hoverText: "MOHA TDC FACILITY, SHARJAH",
  },
  {
    id: "8",
    src: "/images/gallery/Building3.jpeg",
    alt: "Image 8",
    hoverText: "MOHA TDC FACILITY, SHARJAH",
  },
  {
    id: "8",
    src: "/images/gallery/Building4.jpeg",
    alt: "Image 8",
    hoverText: "MOHA TDC FACILITY, SHARJAH",
  },
  {
    id: "8",
    src: "/images/gallery/Building5.jpeg",
    alt: "Image 8",
    hoverText: "MOHA TDC FACILITY, SHARJAH",
  },
  {
    id: "8",
    src: "/images/gallery/Building6.jpeg",
    alt: "Image 8",
    hoverText: "MOHA TDC FACILITY, SHARJAH",
  },
  // {
  //   id: "8",
  //   src: "/images/gallery/Building7.jpeg",
  //   alt: "Image 8",
  //   hoverText: "MOHA TDC FACILITY, SHARJAH",
  // },
  // {
  //   id: "8",
  //   src: "/images/gallery/Building8.jpeg",
  //   alt: "Image 8",
  //   hoverText: "MOHA TDC FACILITY, SHARJAH",
  // },
  {
    id: "9",
    src: "/images/gallery/Private1.jpg",
    alt: "Image 9",
    hoverText: "Private villa , Dubai and Sharjah",
  },
  {
    id: "9",
    src: "/images/gallery/Private2.jpg",
    alt: "Image 9",
    hoverText: "Private villa , Dubai and Sharjah",
  },
  {
    id: "9",
    src: "/images/gallery/Private3.jpg",
    alt: "Image 9",
    hoverText: "Private villa , Dubai and Sharjah",
  },
  {
    id: "9",
    src: "/images/gallery/Private4.jpg",
    alt: "Image 9",
    hoverText: "Private villa , Dubai and Sharjah",
  },
  {
    id: "9",
    src: "/images/gallery/Private5.jpg",
    alt: "Image 9",
    hoverText: "Private villa , Dubai and Sharjah",
  },
  {
    id: "9",
    src: "/images/gallery/Private6.jpg",
    alt: "Image 9",
    hoverText: "Private villa , Dubai and Sharjah",
  },
  {
    id: "9",
    src: "/images/gallery/Private7.jpg",
    alt: "Image 9",
    hoverText: "Private villa , Dubai and Sharjah",
  },
];

const Gallery = () => {
  const searchParams = useSearchParams();
  const [filteredImages, setFilteredImages] = useState<ImageData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [projectLocation, setProjectLocation] = useState<string | null>(null);

  useEffect(() => {
    const projectId = searchParams.get("project");
    if (projectId) {
      const filtered = allImages.filter((img) => img.id === projectId);
      setFilteredImages(filtered);
      setProjectLocation(filtered[0].hoverText);
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
          {projectLocation && (
            <h3 className="text-2xl font-semibold text-blue-800 text-center mb-4">
              {projectLocation}
            </h3>
          )}
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
                {/* <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <h3 className="text-lg font-semibold text-white">
                    {image.hoverText}
                  </h3>
                </div> */}
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
