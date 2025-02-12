"use client";

import { Poppins } from "next/font/google";
import { Slide } from "react-slideshow-image";
import Image from "next/image";
import "react-slideshow-image/dist/styles.css";

const images = [
  "/images/heroSection/1.jpeg",
  "/images/heroSection/2.jpeg",
  "/images/heroSection/3.jpeg",
  "/images/heroSection/4.jpeg",
  "/images/heroSection/5.jpeg",
  "/images/heroSection/6.jpeg",
];

const poppins = Poppins({
  subsets: ["latin"],
  weight:["400","600"],
  variable: "--font-poppins",
})

export default function HeroHome() {
  return (
    <section className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-gray-100">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero Content */}
        <div className="py-12 md:py-20">
          {/* Section Header */}
          <div className="pb-12 text-center md:pb-20">
            <h1
              className={`${poppins.className} bg-gradient-to-r from-indigo-400 via-indigo-200 to-indigo-400 bg-clip-text text-transparent text-5xl md:text-6xl font-semibold`}
              data-aos="fade-up"
            >
              Turnkey Solutions for the Built Environment
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="mt-4 text-lg text-gray-300 md:text-xl"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                We specialize in creating thoughtfully designed spaces that foster
                creativity, productivity, and success—tailored to meet every client’s needs.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
                <a
                  className="px-6 py-3 bg-indigo-500 hover:bg-indigo-600 transition-all text-white font-medium rounded-lg shadow-lg"
                  href="#services"
                  data-aos="fade-up"
                  data-aos-delay={400}
                >
                  Start Your Project →
                </a>
                <a
                  className="px-6 py-3 bg-gray-700 hover:bg-gray-600 transition-all text-white font-medium rounded-lg shadow-md"
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
              duration={5000}
              transitionDuration={700}
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
                    priority={index === 0}
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
