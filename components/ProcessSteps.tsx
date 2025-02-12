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
    <section className="bg-gradient-to-b from-gray-900 to-blue-950 text-white py-16">
  <div className="max-w-6xl mx-auto px-6 text-center">
    <p className="text-blue-400 uppercase tracking-wide text-sm font-semibold">Our Process</p>
    <h2 className="text-3xl font-bold text-white mb-12">See How It Works</h2>

    <VerticalTimeline>
      {steps.map((step, index) => (
        <VerticalTimelineElement
          key={step.id}
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#1E3A8A", color: "#E0E7FF", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.3)" }}
          contentArrowStyle={{ borderRight: "7px solid #1E3A8A" }}
          date={`Step ${step.id}`}
          iconStyle={{ background: "#1E3A8A", color: "#E0E7FF" }}
          icon={step.icon}
        >
          <h3 className="text-xl font-bold text-white">{step.title}</h3>
          <p className="text-sm text-gray-300 whitespace-pre-line">{step.description}</p>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  </div>
</section>

  );
}