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
  weight: ["400", "600"],
  variable: "--font-poppins",
});

export default function HeroHome() {
  return (
    <section className="relative bg-white text-gray-900 overflow-hidden">
      {/* Decorative Pattern Elements */}
      {/* <Image
        src="/misbahPattern.png"
        alt="Pattern"
        width={350}
        height={350}
        className="absolute top-10 left-1 opacity-70 rotate-65 scale-150"
      /> */}
      <Image
        src="/misbahPattern.png"
        alt="Pattern"
        width={450}
        height={350}
        className="hidden md:block absolute top-1/3 left-52 opacity-50 rotate-45 scale-x-150"
      />
      <Image
        src="/misbahPattern.png"
        alt="Pattern"
        width={450}
        height={350}
        className="hidden md:block absolute top-1/3 right-52 opacity-50 -rotate-45 scale-x-150"
      />
      {/* <Image
        src="/misbahPattern.png"
        alt="Pattern"
        width={350}
        height={350}
        className="absolute bottom-10 right-20 opacity-70"
      /> */}
      {/* <Image
        src="/misbahPattern.png"
        alt="Pattern"
        width={340}
        height={450}
        className="absolute top-1/3 right-52 opacity-40 scale-150 -rotate-45"
      /> */}
      {/* <Image
        src="/misbahPattern.png"
        alt="Pattern"
        width={200}
        height={200}
        className="absolute bottom-1/4 left-20 opacity-70 -rotate-12"
      /> */}

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="pb-12 text-center md:pb-20">
            <h1
              className="font-sans bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600 bg-clip-text text-transparent text-5xl md:text-6xl font-semibold uppercase"
              data-aos="fade-up"
            >
              Turnkey Solutions for the Built Environment
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="mt-4 text-lg text-gray-700 md:text-xl font-sans"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                We specialize in creating thoughtfully designed spaces that
                foster creativity, productivity, and success—tailored to meet
                every client's needs.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
                <a
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 transition-all text-white font-medium rounded-lg shadow-lg"
                  href="#workflows"
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

          {/* Slideshow Section */}
          <div className="relative w-full h-[500px] rounded-xl overflow-hidden shadow-2xl glow-effect">
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

      {/* Tailwind Styles for Glow Effect */}
      <style jsx>{`
        .glow-effect {
          position: relative;
        }

        .glow-effect::before {
          content: "";
          position: absolute;
          top: -10px;
          left: -10px;
          right: -10px;
          bottom: -10px;
          background: radial-gradient(
            circle,
            rgba(59, 130, 246, 0.4) 0%,
            rgba(59, 130, 246, 0.2) 50%,
            rgba(59, 130, 246, 0) 100%
          );
          border-radius: 20px;
          z-index: -1;
          animation: glow 3s infinite ease-in-out;
        }

        @keyframes glow {
          0% {
            opacity: 0.6;
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0.6;
          }
        }
      `}</style>
    </section>
  );
}
