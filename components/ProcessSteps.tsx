"use client";

import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaClipboardList, FaDraftingCompass, FaTools, FaCheckCircle } from "react-icons/fa";

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

export default function Timeline() {
  return (
    <section className="relative bg-gradient-to-b from-gray-100 to-gray-200 text-gray-900 py-16 font-sans overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-16 w-12 h-12 bg-[#0FAFB6] opacity-40 transform rotate-45"></div>
        <div className="absolute top-1/3 right-20 w-10 h-10 bg-[#BBB4B4] opacity-50 transform rotate-45"></div>
        <div className="absolute top-2/3 right-32 w-16 h-16 bg-[#0FAFB6] opacity-30 transform rotate-45"></div>
        <div className="absolute top-1/5 left-1/4 w-12 h-12 bg-[#BBB4B4] opacity-40 transform rotate-45"></div>
        <div className="absolute bottom-20 left-10 w-14 h-14 bg-[#0FAFB6] opacity-30 transform rotate-45"></div>
        <div className="absolute top-1/4 left-1/3 w-14 h-14 bg-[#BBB4B4] opacity-50 transform rotate-45"></div>
        <div className="absolute bottom-40 right-1/4 w-11 h-11 bg-[#BBB4B4] opacity-40 transform rotate-45"></div>
        <div className="absolute bottom-10 right-1/6 w-13 h-13 bg-[#0FAFB6] opacity-35 transform rotate-45"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        <p className="text-blue-600 uppercase tracking-wide text-sm font-semibold">Our Process</p>
        <h2 className="text-3xl font-bold text-gray-900 mb-12">See How It Works</h2>

        <VerticalTimeline>
          {steps.map((step) => (
            <VerticalTimelineElement
              key={step.id}
              className="vertical-timeline-element--work relative"
              contentStyle={{ background: "#F8FAFC", color: "#1F2937", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}
              contentArrowStyle={{ borderRight: "7px solid #F8FAFC" }}
              date={`Step ${step.id}`}
              iconStyle={{ background: step.color, color: "#FFFFFF" }}
              icon={step.icon}
            >
              <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
              <p className="text-sm text-gray-700 whitespace-pre-line">{step.description}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
}
