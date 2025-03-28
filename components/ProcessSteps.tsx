"use client";
import React from "react";

import { ReactNode, useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import {
  BsCurrencyDollar,
  BsRulers,
  BsFillBuildingsFill,
} from "react-icons/bs";
import { FaHandshake } from "react-icons/fa";
import { GrDocumentText } from "react-icons/gr";
import DesingPng from "../public/Design.png";

// Container animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

// Step item animation variants
const stepVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

const steps = [
  {
    id: 1,
    title: "BIDDING & PROPOSAL",
    content: [
      "Review of project scope and technical specifications",
      "Preparation of competitive pricing and value engineering solutions",
      "Conduct pre-bid coordination meetings, compliance and clarifications",
      "Submit necessary proposals with detailed breakdowns, renderings etc.",
    ],
    icon: <GrDocumentText size={44} />,
    color: "#3B82F6",
  },
  {
    id: 2,
    title: "DESIGN & APPROVAL",
    content: [
      "Secure necessary as-built documents and drawings from the Landlord",
      "Preparation of shop drawings and obtaining consultant / Landlord approval",
      "Submitting material samples and datasheets for acceptance by client",
      "Liaising with required local regulatory authorities for obtaining approvals",
      "Preparation of a detailed project work schedule for client review and approval",
    ],
    icon: <Image src={DesingPng} alt="Design Icon" width={44} height={44} />,

    color: "#EC4899",
  },
  {
    id: 3,
    title: "FIT-OUT WORKS",
    content: [
      "Survey, mobilization, protection and HSE measures",
      "Construction / modifications of partitions, ceiling and walls",
      "MEP & FLS installations, testing and commissioning",
      "Partition, ceiling and wall finishes and fixtures",
      "Glass, metal, joinery and loose furniture installations",
    ],
    icon: <BsFillBuildingsFill size={44} />,
    color: "#10B981",
  },
  {
    id: 4,
    title: "CLOSE-OUT & HANDOVER",
    content: [
      "Conduct final inspections with Client and Landlord",
      "Preparation of snag list and rectification of the snag points",
      "Arrange authority inspections and obtaining NOC / Completion Certificates",
      "Prepare and submit all As-built / warranty documents",
      "Ensure safe and timely occupancy of the premises by the client",
    ],
    icon: <FaHandshake size={44} />,
    color: "#F59E0B",
  },
];

const DecorativePattern = ({ className = "" }) => (
  <div className={`absolute hidden md:block ${className}`}>
    <motion.div
      className="relative w-full h-full"
      initial={{ opacity: 0.3, scale: 0.95 }}
      animate={{ opacity: 0.4, scale: 1 }}
      transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
    >
      <Image
        src="/misbahPattern.png"
        alt="Decorative pattern"
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="select-none pointer-events-none object-cover"
        priority={false}
      />
    </motion.div>
  </div>
);

interface Step {
  id: number;
  title: string;
  content: string[];
  icon: ReactNode;
  color: string;
}

interface TimelineStepProps {
  step: Step;
  isEven: boolean;
  isLast: boolean;
  index: number;
}

const TimelineStep: React.FC<TimelineStepProps> = ({
  step,
  isEven,
  isLast,
  index,
}) => {
  const ref = useRef(null);
  const contentRef = useRef(null);
  const iconRef = useRef(null);
  const topLineRef = useRef(null);
  const bottomLineRef = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const topLineInView = useInView(topLineRef, { once: true, amount: 0.1 });
  const bottomLineInView = useInView(bottomLineRef, {
    once: true,
    amount: 0.1,
  });

  // Determine if this is step 2 or 3 (index 1 or 2)
  const isMiddleIcon = index === 1 || index === 2;
  // First step only has bottom line
  const isFirstStep = index === 0;
  // Last step only has top line
  const isLastStep = index === steps.length - 1;

  return (
    <motion.div
      ref={ref}
      variants={stepVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={`flex flex-col md:flex-row items-stretch gap-6 md:gap-10 mb-16 last:mb-0 ${
        isEven ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Timeline line and icon container - now using items-stretch */}
      <div className="flex flex-col items-center">
        {/* Top line - for all steps except the first */}
        {!isFirstStep && (
          <motion.div
            ref={topLineRef}
            className="w-1 bg-gray-200 relative overflow-hidden"
            style={{
              height: isMiddleIcon ? "6rem" : "3rem",
            }}
          >
            <motion.div
              className="absolute top-0 left-0 right-0 bg-blue-500"
              initial={{ height: 0 }}
              animate={topLineInView ? { height: "100%" } : { height: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              style={{ backgroundColor: step.color }}
            />
          </motion.div>
        )}

        {/* Icon - now with flex-grow to match content height */}
        <motion.div
          ref={iconRef}
          className="w-16 flex-grow rounded-md flex items-center justify-center shadow-lg z-10"
          style={{ backgroundColor: step.color, minHeight: "100%" }}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <div className="flex flex-col items-center justify-center py-6">
            {step.icon}
          </div>
        </motion.div>

        {/* Bottom line - for all steps except the last */}
        {!isLastStep && (
          <motion.div
            ref={bottomLineRef}
            className="w-1 bg-gray-200 relative overflow-hidden"
            style={{
              height: isMiddleIcon ? "6rem" : "3rem",
            }}
          >
            <motion.div
              className="absolute top-0 left-0 right-0 bg-blue-500"
              initial={{ height: 0 }}
              animate={bottomLineInView ? { height: "100%" } : { height: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              style={{ backgroundColor: step.color }}
            />
          </motion.div>
        )}
      </div>

      {/* Content */}
      <div
        ref={contentRef}
        className={`bg-white rounded-xl p-6 shadow-md w-full md:w-3/4 border border-gray-100 hover:shadow-lg transition-shadow duration-300 ${
          isEven ? "md:text-right" : "md:text-left"
        }`}
      >
        <div className="flex items-center gap-4 mb-4 justify-start">
          <h3 className="text-xl font-bold text-black">{step.title}</h3>
        </div>
        <ul
          className={`space-y-2 ${
            isEven ? "text-left md:text-right" : "text-left md:text-left"
          }`}
        >
          {step.content.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <div className="w-2 h-2 rounded-full bg-gray-400 mt-2 flex-shrink-0"></div>
              <p className="text-gray-700 text-left">{item}</p>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default function Timeline() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    <section
      ref={sectionRef}
      className="relative bg-gradient-to-br from-white via-slate-50 to-white py-24 overflow-hidden"
    >
      {/* Decorative Patterns */}
      <DecorativePattern className="top-0 right-0 w-72 md:w-80 lg:w-96 h-72 md:h-80 lg:h-96 md:-translate-y-1/4 lg:-translate-y-1/3 md:translate-x-1/4 lg:translate-x-1/3" />
      <DecorativePattern className="top-1/2 left-0 w-80 h-80 -translate-x-1/3 -translate-y-1/2" />
      <DecorativePattern className="bottom-0 right-0 w-72 h-72 translate-x-1/4 translate-y-1/4" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <motion.div
          className="max-w-3xl mx-auto mb-16 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-4xl font-bold text-gray-900 mb-6 leading-tight"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Our Project Delivery Process
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-blue-600 mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={isInView ? { width: 96 } : { width: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          />
        </motion.div>

        {/* Timeline steps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative pl-4 sm:pl-0"
        >
          {steps.map((step, index) => (
            <TimelineStep
              key={step.id}
              step={step}
              isEven={index % 2 === 1}
              isLast={index === steps.length - 1}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
