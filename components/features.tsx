"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import {
  FaBuilding,
  FaLightbulb,
  FaTools,
  FaChair,
  FaHome,
  FaCogs,
} from "react-icons/fa";

// Import your images
import OurServicesImage from "@/public/images/OurServices.jpg";

export default function SpecialtiesSection() {
  const containerRef = useRef(null);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.6, 0.05, 0.01, 0.9] },
    },
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const scaleIn = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: 0.2,
      },
    },
  };

  // Card hover animation
  const cardHover = {
    rest: {
      scale: 1,
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    },
    hover: {
      scale: 1.03,
      boxShadow: "0 10px 25px rgba(0, 0, 0, 0.12)",
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  // Icon hover animation
  const iconHover = {
    rest: { scale: 1 },
    hover: {
      scale: 1.15,
      rotate: 5,
      transition: { type: "spring", stiffness: 400, damping: 10 },
    },
  };

  // Service cards data
  const specialties = [
    {
      title: "Commercial Spaces",
      description:
        "Crafting inspiring workspaces and decor solutions that drive creativity and productivity.",
      icon: FaBuilding,
      color: "#4361ee",
    },
    {
      title: "Interior Design",
      description:
        "Providing proactive design solutions for today and tomorrow's built environments.",
      icon: FaLightbulb,
      color: "#3a86ff",
    },
    {
      title: "Turnkey Solutions",
      description:
        "Providing end-to-end solutions from concept design through execution to handover for hassle-free occupancy by our clients.",
      icon: FaTools,
      color: "#4cc9f0",
    },
    {
      title: "Joinery & Furniture",
      description:
        "Designing and creating bespoke joinery and furniture that flawlessly complement your space.",
      icon: FaChair,
      color: "#4895ef",
    },
    {
      title: "Renovation Projects",
      description:
        "Revitalizing spaces with modern upgrades and design transformations to meet contemporary needs.",
      icon: FaHome,
      color: "#560bad",
    },
    {
      title: "MEP Services",
      description:
        "Our technical design and execution team is proficient in MEP, IT, ELV and FLS systems.",
      icon: FaCogs,
      color: "#7209b7",
    },
  ];

  const DecorativePattern = ({
    className = "",
    opacity = "opacity-30",
    scale = true,
    rotate = "0",
  }) => (
    <div
      className={`absolute hidden md:block pointer-events-none ${className}`}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      <div
        className={`relative w-full h-full ${
          scale
            ? "transform transition-transform duration-700 hover:scale-105"
            : ""
        }`}
      >
        <Image
          src="/misbahPattern.png"
          alt="Decorative pattern"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className={`select-none pointer-events-none object-cover ${opacity} transition-opacity duration-300`}
          priority={false}
        />
      </div>
    </div>
  );

  return (
    <motion.section
      className="relative bg-gradient-to-b from-gray-50 to-gray-100 py-24 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      ref={containerRef}
    >
      {/* Decorative patterns strategically placed */}
      <DecorativePattern className="top-0 left-0 w-72 md:w-80 lg:w-96  h-72 md:h-80 lg:h-96 md:-translate-y-1/4 lg:-translate-y-1/3 md:translate-x-1/4 lg:translate-x-1/3" />
      <DecorativePattern
        className="bottom-0 right-0 w-64 h-64 translate-y-1/4 -translate-x-1/4"
        opacity="opacity-20"
      />
      <DecorativePattern
        className="top-1/2 right-0 w-72 h-72 -translate-y-1/2 translate-x-1/3"
        opacity="opacity-25"
      />
      <DecorativePattern
        className="bottom-10 left-10 w-48 h-48"
        opacity="opacity-15"
      />

      {/* Background gradient orbs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-96 h-96 rounded-full bg-indigo-200 blur-3xl opacity-20"
          animate={{
            x: [0, 30, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 20,
            ease: "easeInOut",
            repeat: Infinity,
          }}
          style={{ top: "10%", left: "5%" }}
        />
        <motion.div
          className="absolute w-80 h-80 rounded-full bg-indigo-300 blur-3xl opacity-20"
          animate={{
            x: [0, -40, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 18,
            ease: "easeInOut",
            repeat: Infinity,
          }}
          style={{ bottom: "5%", right: "10%" }}
        />
        <motion.div
          className="absolute w-72 h-72 rounded-full bg-blue-200 blur-3xl opacity-20"
          animate={{
            x: [0, 25, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 15,
            ease: "easeInOut",
            repeat: Infinity,
          }}
          style={{ bottom: "20%", left: "25%" }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          variants={fadeInUp}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-700 via-blue-600 to-indigo-800"
            style={{ backgroundSize: "200% auto" }}
            animate={{
              backgroundPosition: ["0% center", "200% center", "0% center"],
            }}
            transition={{
              duration: 15,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            Discover Our Specialties
          </motion.h2>

          <motion.p className="text-gray-600 text-lg" variants={fadeInUp}>
            We are a group of companies excelling in interior design, decor, and
            spatial transformation services.
          </motion.p>
        </motion.div>

        {/* Featured image */}
        <motion.div
          className="relative mb-24 mx-auto max-w-4xl"
          variants={scaleIn}
          whileInView="visible"
          initial="hidden"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="absolute inset-0 bg-indigo-500 rounded-lg transform rotate-1 scale-105 opacity-10"></div>
          <motion.div
            className="relative rounded-lg overflow-hidden shadow-2xl"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <Image
              src={OurServicesImage}
              width={900}
              height={500}
              alt="Our Services"
              className="object-cover w-full h-auto"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent">
              <div className="absolute bottom-6 left-6 right-6">
                <motion.div
                  className="h-1 w-20 bg-indigo-500 mb-4"
                  initial={{ width: 0 }}
                  whileInView={{ width: 80 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  viewport={{ once: true }}
                ></motion.div>
                <h3 className="text-white text-2xl font-bold">
                  Transforming Spaces
                </h3>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Specialties grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {specialties.map((specialty, index) => (
            <motion.div
              key={index}
              className="relative z-10"
              variants={fadeInUp}
            >
              <motion.div
                className="bg-white rounded-xl overflow-hidden p-6 h-full flex flex-col"
                variants={cardHover}
                initial="rest"
                whileHover="hover"
                animate="rest"
              >
                <motion.div
                  className="mb-5 flex items-center"
                  variants={iconHover}
                  initial="rest"
                  whileHover="hover"
                  style={{ originX: 0.5, originY: 0.5 }}
                >
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: `${specialty.color}20` }}
                  >
                    <specialty.icon
                      size={24}
                      style={{ color: specialty.color }}
                    />
                  </div>
                </motion.div>

                <h3 className="font-bold text-xl text-gray-800 mb-3">
                  {specialty.title}
                </h3>
                <p className="text-gray-600 flex-grow">
                  {specialty.description}
                </p>

                <motion.div
                  className="w-8 h-1 mt-4"
                  style={{ backgroundColor: specialty.color }}
                  whileHover={{ width: 40 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
