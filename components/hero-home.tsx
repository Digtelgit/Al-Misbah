"use client";

import { Poppins } from "next/font/google";
import { Slide } from "react-slideshow-image";
import Image from "next/image";
import "react-slideshow-image/dist/styles.css";

const slides = [
  {
    image: "/images/heroSection/5.jpeg",
    text: "Seamless Partitions & Elegant Ceilings",
  },
  {
    image: "/images/heroSection/1.jpg",
    text: "Bespoke Joinery for Distinctive Spaces",
  },
  {
    image: "/images/heroSection/2.jpeg",
    text: "Curated Furniture & Fixtures",
  },
  {
    image: "/images/heroSection/3.jpeg",
    text: "Precision Metal & Glass Craftsmanship",
  },
  {
    image: "/images/heroSection/4.jpeg",
    text: "Premium Finishes, Timeless Sophistication",
  },
  {
    image: "/images/heroSection/6.jpeg",
    text: "Creating Lasting Impressions",
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

// Diamond-shaped indicator component
const DiamondIndicator = ({ active, onClick }) => (
  <div 
    className={`diamond-indicator ${active ? 'active' : ''}`} 
    onClick={onClick}
  />
);

export default function HeroHome() {
  return (
    <section
      className={`relative bg-white text-gray-900 overflow-hidden ${poppins.variable}`}
    >
      <DecorativePattern className="top-0 left-2 w-96 h-96 -translate-y-2/4 -translate-x-1/3" />

      <div className="relative w-full">
        <div className="py-12 md:py-20">
          <div className="pb-12 text-center md:pb-16">
            <h1
              className="font-sans text-blue-700 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl font-extrabold tracking-tight leading-none px-2"
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

          {/* Full-screen Slideshow Section */}
          <div className="relative w-full h-screen overflow-hidden shadow-2xl">
            <Slide
              duration={5000}
              transitionDuration={800}
              autoplay
              infinite
              indicators={true}
              arrows={true}
              prevArrow={
                <div className="absolute z-10 left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white/30 rounded-full cursor-pointer hover:bg-white/50 transition-all">
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
                <div className="absolute z-10 right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white/30 backdrop-blur-sm rounded-full cursor-pointer hover:bg-white/50 transition-all">
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
              customIndicator={(index, active, onChange) => (
                <DiamondIndicator 
                  active={active} 
                  key={index} 
                  onClick={() => onChange(index)}
                />
              )}
              indicatorClassName="diamond-indicator-container"
            >
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className="relative w-full h-screen"
                >
                  <Image
                    src={slide.image}
                    alt={slide.text}
                    fill
                    className="object-cover w-full"
                    priority={index === 0}
                    sizes="100vw"
                  />
                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-center pb-20">
                    <div className="bg-black/40 backdrop-blur-sm px-6 py-4 rounded-lg">
                      <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-light tracking-wider">
                        {slide.text}
                      </h2>
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
        .diamond-indicator-container {
          display: flex;
          justify-content: center;
          gap: 10px;
          position: absolute;
          bottom: 20px;
          width: 100%;
          z-index: 20;
        }

        .diamond-indicator {
          width: 12px;
          height: 12px;
          background-color: rgba(255, 255, 255, 0.5);
          transform: rotate(45deg);
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .diamond-indicator.active {
          background-color: white;
          box-shadow: 0 0 8px rgba(255, 255, 255, 0.8);
        }

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