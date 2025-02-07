import React, { FC } from "react";
import Image from "next/image";

type GalleryProps = {
  images: { src: string; alt: string; hoverText?: string }[]; 
};

const Gallery: FC<GalleryProps> = ({ images }) => (
  <section className="relative overflow-hidden">
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
        <h2
          className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-8 font-nacelle text-3xl font-semibold text-transparent md:text-4xl text-center"
        >
          Explore Our Creative Projects
        </h2>

        {/* Image Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg bg-gray-800 p-1 transition-transform duration-300 hover:scale-105"
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
                {image.hoverText || "Default Hover Text"}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Gallery;
