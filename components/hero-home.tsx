"use client";

import { Poppins } from "next/font/google";
import { Slide } from "react-slideshow-image";
import Image from "next/image";
import "react-slideshow-image/dist/styles.css";

const slides = [
  {
    image: "/images/heroSection/5.jpeg",
    text: "SEAMLESS PARTITIONS & ELEGANT CEILINGS",
  },
  {
    image: "/images/heroSection/1.jpg",
    text: "BESPOKE JOINERY FOR DISTINCTIVE SPACES",
  },
  {
    image: "/images/heroSection/2.jpeg",
    text: "CURATED FURNITURE & FIXTURES",
  },
  {
    image: "/images/heroSection/3.jpeg",
    text: "PRECISION METAL & GLASS CRAFTSMANSHIP",
  },
  {
    image: "/images/heroSection/4.jpeg",
    text: "PREMIUM FINISHES, TIMELESS SOPHISTICATION",
  },

  {
    image: "/images/heroSection/6.jpeg",
    text: "CREATING LASTING IMPRESSIONS",
  },
];

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-poppins",
});

const DecorativePattern = ({ className = "" }) => (
  <div className={`absolute hidden md:block ${className}`}>
    <div className="relative w-full h-full transform transition-transform duration-700 hover:scale-105">
      <Image
        src="/misbahPattern.png"
        alt="Decorative pattern"
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="select-none pointer-events-none object-cover opacity-40 hover:opacity-50 transition-opacity duration-300"
        priority={false}
      />
    </div>
  </div>
);

export default function HeroHome() {
  return (
    <section
      className={`relative bg-white text-gray-900 overflow-hidden ${poppins.variable}`}
    >
      <DecorativePattern className="top-0 left-2 w-96 h-96 -translate-y-2/4 -translate-x-1/3" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="pb-12 text-center md:pb-16">
            <h1
              className="font-sans bg-gradient-to-r from-blue-700 via-blue-500 to-blue-700 bg-clip-text text-transparent text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl font-extrabold uppercase tracking-tight leading-none px-2"
              data-aos="fade-up"
            >
              Turnkey Solutions for the Built Environment
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="mt-3 md:mt-4 text-base sm:text-lg text-gray-700 md:text-xl font-sans"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                We specialize in creating thoughtfully designed spaces that
                foster creativity, productivity and success, tailored to meet
                the client's needs.
              </p>
              <div className="mt-6 md:mt-8 flex flex-col sm:flex-row justify-center gap-3 md:gap-4">
                <a
                  className="px-4 sm:px-6 py-2 sm:py-3 bg-blue-600 hover:bg-blue-700 transition-all text-white font-medium rounded-lg shadow-lg text-sm sm:text-base"
                  href="#workflows"
                  data-aos="fade-up"
                  data-aos-delay={400}
                >
                  Start Your Project →
                </a>
                <a
                  className="px-4 py-2 sm:px-6 sm:py-3 bg-gray-200 hover:bg-gray-300 transition-all text-gray-900 font-medium rounded-lg shadow-md text-sm sm:text-base"
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
          <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] rounded-xl overflow-hidden shadow-2xl glow-effect">
            <Slide
              duration={5000}
              transitionDuration={800}
              autoplay
              infinite
              indicators={false}
              arrows={true}
              prevArrow={
                <div className="absolute z-10 left-2 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white/30 backdrop-blur-sm rounded-full cursor-pointer hover:bg-white/50 transition-all">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m15 18-6-6 6-6" />
                  </svg>
                </div>
              }
              nextArrow={
                <div className="absolute z-10 right-2 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white/30 backdrop-blur-sm rounded-full cursor-pointer hover:bg-white/50 transition-all">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </div>
              }
            >
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]"
                >
                  <Image
                    src={slide.image}
                    alt={slide.text}
                    fill
                    className="rounded-xl object-cover"
                    priority={index === 0}
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <div className="px-6 w-full max-w-5xl">
                      <div className="text-center">
                        <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-wider uppercase shadow-text transition-transform duration-500 transform hover:scale-105">
                          {slide.text}
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slide>
          </div>
        </div>
      </div>

      {/* Tailwind Styles for Effects */}
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

        .shadow-text {
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
        }

        .progress-indicator {
          animation: progress 5000ms linear infinite;
          transform-origin: left;
          transform: scaleX(0);
        }

        @keyframes progress {
          0% {
            transform: scaleX(0);
          }
          100% {
            transform: scaleX(1);
          }
        }
      `}</style>
    </section>
  );
}
