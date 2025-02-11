"use client";

import { Slide } from "react-slideshow-image";
import Image from "next/image";
import "react-slideshow-image/dist/styles.css";

const images = [
  "/images/hero-image-01.jpg",
  "/images/Marquee/20.jpg",
  "/images/hero-image-02.jpg",
];

export default function HeroHome() {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white text-gray-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero Content */}
        <div className="py-12 md:py-20">
          {/* Section Header */}
          <div className="pb-12 text-center md:pb-20">
            <h1
              className="bg-gradient-to-r from-gray-800 via-gray-600 to-gray-800 bg-clip-text text-transparent text-4xl md:text-5xl font-semibold"
              data-aos="fade-up"
            >
              Turnkey Solutions for the Built Environment
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="mt-4 text-lg text-gray-700 md:text-xl"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                We specialize in creating thoughtfully designed spaces that foster
                creativity, productivity, and success—tailored to meet every client’s needs.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
                <a
                  className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 transition-all text-white font-medium rounded-lg shadow-lg"
                  href="#services"
                  data-aos="fade-up"
                  data-aos-delay={400}
                >
                  Start Your Project →
                </a>
                <a
                  className="px-6 py-3 bg-gray-200 hover:bg-gray-300 transition-all text-gray-900 font-medium rounded-lg shadow-md"
                  href="/contact"
                  data-aos="fade-up"
                  data-aos-delay={600}
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>

          {/* Image Slider */}
          <div className="relative w-full h-[500px] rounded-xl overflow-hidden shadow-2xl">
            <Slide
              duration={5000} // Slower transitions (5s)
              transitionDuration={700} // Smooth transition (0.7s)
              autoplay
              infinite
              indicators
              arrows
            >
              {images.map((src, index) => (
                <div key={index} className="relative w-full h-[500px]">
                  <Image
                    src={src}
                    alt={`Slide ${index + 1}`}
                    fill
                    className="rounded-xl object-cover"
                    priority={index === 0} // Prioritize first image
                  />
                </div>
              ))}
            </Slide>
          </div>
        </div>
      </div>
    </section>
  );
}
