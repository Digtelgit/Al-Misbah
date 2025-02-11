"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const steps = [
  { 
    id: "01", 
    title: "BIDDING / PROPOSAL", 
    description: `
      During the tender stage, we closely liaise with the client representative/consultant to obtain specific requirements and technical aspects. 
      The bidding stage activities are illustrated below:
      
      - Reviewing project scope and technical specifications
      - Preparing competitive pricing and value engineering solutions
      - Conducting pre-bid meetings and clarifications
      - Submitting proposals with detailed breakdowns
    `
  },
  { 
    id: "02", 
    title: "DESIGN & APPROVALS", 
    description: `
      We provide final design drawings and 3D renderings approved by the client. Our responsibilities include:
      
      - Securing as-built documents from the landlord
      - Preparing shop drawings and obtaining consultant approvals
      - Submitting materials for review and client approval
      - Coordinating with authorities (DCD, DM, DDA, JAFZA, etc.)
      - Preparing a detailed project schedule for client review
    `
  },
  { 
    id: "03", 
    title: "INTERIOR FIT-OUT", 
    description: `
      Delivering the project within budget and time frame is our priority. We handle:
      
      - Site surveys and project mobilization
      - Health & Safety compliance measures
      - Partitioning, ceiling, and wall finishes
      - MEP installations, testing, and commissioning
      - Custom joinery, loose furniture, and metalwork
      - FF&E (Fixtures, Fittings & Equipment)
    `
  },
  { 
    id: "04", 
    title: "CLOSE-OUT & HANDOVER", 
    description: `
      The final stage includes:
      
      - Conducting final inspections with clients and consultants
      - Preparing and rectifying snag lists
      - Coordinating authority inspections and obtaining completion certificates
      - Ensuring successful handover with full documentation for client occupancy
    `
  },
];

export default function Timeline() {
  const [selectedStep, setSelectedStep] = useState<number | null>(null);

  return (
    <section className="bg-gradient-to-b from-gray-100 to-white text-gray-900 py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-teal-500 uppercase tracking-wide text-sm font-semibold">Our Process</p>
        <h2 className="text-3xl font-bold text-gray-800 mb-12">See How It Works</h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative text-center"
            >
              <div className="flex justify-center">
                <div className="w-20 h-20 flex items-center justify-center rounded-full border-4 border-blue-500 bg-white text-2xl font-bold shadow-lg">
                  {step.id}
                </div>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-700">{step.title}</h3>
              <button
                className="mt-3 bg-blue-600 hover:bg-blue-700 transition duration-300 px-6 py-2 rounded-md text-sm font-medium text-white shadow-md"
                onClick={() => setSelectedStep(index)}
              >
                Read More
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedStep !== null && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedStep(null)}
          >
            <motion.div
              className="bg-white rounded-lg p-8 max-w-3xl w-full text-left shadow-xl relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-2xl font-bold text-gray-800">{steps[selectedStep].title}</h3>
              <div className="mt-4 max-h-[60vh] overflow-y-auto px-2">
                <p className="text-gray-600 leading-relaxed whitespace-pre-line">{steps[selectedStep].description}</p>
              </div>
              <div className="mt-6 flex justify-end">
                <button
                  className="bg-red-500 hover:bg-red-600 px-6 py-2 rounded-md text-sm font-medium text-white shadow-md"
                  onClick={() => setSelectedStep(null)}
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
