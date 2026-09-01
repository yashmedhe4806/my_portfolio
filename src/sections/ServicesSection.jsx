import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export const ServicesSection = () => {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const services = [
    {
      title: "Websites",
      subtitle: "Editorial, high-performance web presences",
      desc: "Cleanly structured React & modern HTML/CSS websites tailored to clearly communicate your business message, load instantly, and guide visitors naturally.",
      deliverables: ["Custom React Architecture", "Tailwind Design System", "Responsive Layout Optimization", "SEO & Metadata Best Practices"]
    },
    {
      title: "Web Applications",
      subtitle: "Functional interfaces built for clarity",
      desc: "Interactive web applications designed with lean state management, accessible UI components, and intuitive UX flows to solve core operational or customer problems.",
      deliverables: ["React 19 Application Development", "Custom Ant Design UI Integration", "API & Data Flow Engineering", "State & Flow Architecture"]
    },
    {
      title: "Marketing Strategy",
      subtitle: "Positioning & message alignment",
      desc: "Analyzing user intent, refining core value messaging, and structuring digital user journeys so visitors understand why your offer matters.",
      deliverables: ["User Intent Audit", "Message & Copy Structuring", "Conversion Friction Reduction", "Funnel Flow Optimization"]
    },
    {
      title: "Process Automation",
      subtitle: "Simplifying redundant workflows",
      desc: "Building lightweight digital tools, forms, and scripts that reduce repetitive manual tasks between customer interaction and backend workflows.",
      deliverables: ["Custom Form Pipelines", "Third-party Service Integration", "Data Validation & Handoff", "Lean Scripting"]
    },
    {
      title: "Digital Experiences",
      subtitle: "Interactive storytelling & visual systems",
      desc: "Unique visual experiences that combine smooth motion, custom SVG visuals, and dynamic interaction to leave a memorable impression.",
      deliverables: ["Framer Motion Storytelling", "Custom Vector SVG Art", "Interactive Micro-animations", "Accessible Motion Systems"]
    }
  ];

  return (
    <section id="services" className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-[#ECE9DF]">
      <div className="space-y-4 max-w-2xl mb-16">
        <span className="text-xs font-mono text-[#8BCF5B] uppercase tracking-wider font-semibold">
          CAPABILITIES
        </span>
        <h2 className="text-3xl md:text-5xl font-display font-bold text-[#20221F]">
          Services & Capabilities
        </h2>
        <p className="text-sm md:text-base text-[#686C63]">
          Click or hover over any service below to explore how engineering and marketing context work together.
        </p>
      </div>

      {/* Expandable Visual List */}
      <div className="space-y-4 max-w-4xl">
        {services.map((s, idx) => {
          const isExpanded = expandedIndex === idx;
          return (
            <div
              key={s.title}
              className={`rounded-2xl transition-all border ${
                isExpanded ? 'bg-[#20221F] text-[#F7F5EF] border-[#20221F] shadow-lg' : 'bg-[#F7F5EF] text-[#20221F] border-[#ECE9DF] hover:border-[#8BCF5B]'
              }`}
            >
              <button
                onClick={() => setExpandedIndex(isExpanded ? null : idx)}
                className="w-full p-6 text-left flex items-center justify-between focus:outline-none"
                data-cursor="nav"
                data-cursor-label={isExpanded ? 'CLOSE' : 'OPEN'}
              >
                <div className="flex items-center gap-4">
                  <span className={`text-xs font-mono font-bold ${isExpanded ? 'text-[#8BCF5B]' : 'text-[#686C63]'}`}>
                    0{idx + 1}
                  </span>
                  <div>
                    <h3 className="text-xl md:text-2xl font-display font-bold">
                      {s.title}
                    </h3>
                    <p className={`text-xs md:text-sm font-sans ${isExpanded ? 'text-gray-300' : 'text-[#686C63]'}`}>
                      {s.subtitle}
                    </p>
                  </div>
                </div>

                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform ${isExpanded ? 'bg-[#8BCF5B] text-[#20221F] rotate-180' : 'bg-[#ECE9DF] text-[#20221F]'}`}>
                  <ChevronDown size={18} />
                </div>
              </button>

              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden px-6 pb-6 pt-2 border-t border-white/10"
                  >
                    <p className="text-sm md:text-base text-gray-300 leading-relaxed mb-6">
                      {s.desc}
                    </p>

                    <div className="space-y-2">
                      <span className="text-xs font-mono text-[#8BCF5B] uppercase font-bold">
                        Key Deliverables:
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                        {s.deliverables.map((item) => (
                          <div key={item} className="flex items-center gap-2 text-xs font-mono text-gray-200 bg-white/5 px-3 py-2 rounded-lg border border-white/5">
                            <span className="text-[#8BCF5B] font-bold">•</span>
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
};
