"use client";

import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaClipboardList, FaDraftingCompass, FaTools, FaCheckCircle } from "react-icons/fa";
import Image from "next/image";

const steps = [
  { 
    id: "01", 
    title: "BIDDING / PROPOSAL", 
    description: `
      - Reviewing project scope and technical specifications
      - Preparing competitive pricing and value engineering solutions
      - Conducting pre-bid meetings and clarifications
      - Submitting proposals with detailed breakdowns
    `,
    icon: <FaClipboardList />,
    color: "#3B82F6", 
  },
  { 
    id: "02",
    title: "DESIGN & APPROVALS", 
    description: `
      - Securing as-built documents from the landlord
      - Preparing shop drawings and obtaining consultant approvals
      - Submitting materials for review and client approval
      - Coordinating with authorities (DCD, DM, DDA, JAFZA, etc.)
      - Preparing a detailed project schedule for client review
    `,
    icon: <FaDraftingCompass />,
    color: "#EC4899", 
  },
  { 
    id: "03", 
    title: "INTERIOR FIT-OUT", 
    description: `
      - Site surveys and project mobilization
      - Health & Safety compliance measures
      - Partitioning, ceiling, and wall finishes
      - MEP installations, testing, and commissioning
      - Custom joinery, loose furniture, and metalwork
      - FF&E (Fixtures, Fittings & Equipment)
    `,
    icon: <FaTools />,
    color: "#10B981",
  },
  { 
    id: "04", 
    title: "CLOSE-OUT & HANDOVER", 
    description: `
      - Conducting final inspections with clients and consultants
      - Preparing and rectifying snag lists
      - Coordinating authority inspections and obtaining completion certificates
      - Ensuring successful handover with full documentation for client occupancy
    `,
    icon: <FaCheckCircle />,
    color: "#F59E0B", 
  },
];

const DecorativePattern = ({ className = "" }) => (
  <div className={`absolute ${className}`}>
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

export default function Timeline() {
  return (
    <section className="relative bg-gradient-to-br from-white via-slate-50 to-white text-gray-900 py-24 font-sans overflow-hidden">
      {/* Decorative Patterns with improved positioning and animations */}
      <DecorativePattern className="top-0 right-0 w-96 h-96 -translate-y-1/3 translate-x-1/3 rotate-45" />
      <DecorativePattern className="top-1/2 left-0 w-80 h-80 -translate-x-1/3 -translate-y-1/2 -rotate-12" />
      <DecorativePattern className="bottom-0 right-0 w-72 h-72 translate-x-1/4 translate-y-1/4 rotate-90" />
      <DecorativePattern className="bottom-0 left-0 w-64 h-64 -translate-x-1/4 translate-y-1/4 -rotate-45" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-3xl mx-auto mb-16">
          <p className="text-blue-600 uppercase tracking-wider text-sm font-semibold mb-3 animate-fade-in">
            Our Process
          </p>
          <h2 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
            See How It Works
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full" />
        </div>

        <VerticalTimeline animate={true}>
          {steps.map((step) => (
            <VerticalTimelineElement
              key={step.id}
              className="vertical-timeline-element--work"
              contentStyle={{ 
                background: "rgba(255, 255, 255, 0.9)", 
                color: "#1F2937", 
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(229, 231, 235, 0.5)",
                borderRadius: "1rem"
              }}
              contentArrowStyle={{ 
                borderRight: "7px solid rgba(255, 255, 255, 0.9)" 
              }}
              date={`Step ${step.id}`}
              iconStyle={{ 
                background: step.color, 
                color: "#FFFFFF",
                boxShadow: `0 0 0 4px #fff, inset 0 2px 0 rgba(0,0,0,.08), 0 3px 0 4px rgba(0,0,0,.05)`
              }}
              icon={step.icon}
            >
              <div className="group hover:transform hover:scale-[1.02] transition-all duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-700 whitespace-pre-line leading-relaxed">
                  {step.description}
                </p>
              </div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
}