import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GitCommit, Cpu, Sparkles } from 'lucide-react';

export const HowIThink = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      step: "01",
      question: "What are we actually solving?",
      focus: "PROBLEM DEFINITION",
      desc: "Distill the symptom into the root business challenge. Is it low conversion, unclear message, or workflow friction?",
      outcome: "Single unified goal statement."
    },
    {
      step: "02",
      question: "Who is this for?",
      focus: "AUDIENCE & CONTEXT",
      desc: "Identify the primary user persona, their state of mind, their devices, and what they need to understand in 3 seconds.",
      outcome: "Target user profile and primary intent."
    },
    {
      step: "03",
      question: "Why should they care?",
      focus: "VALUE PROPOSITION",
      desc: "Translate technical features into immediate user benefit. Speak cleanly without jargon.",
      outcome: "Clear headline and positioning message."
    },
    {
      step: "04",
      question: "What should they do next?",
      focus: "CALL TO ACTION",
      desc: "Design a single, low-friction primary action path that guides the user forward naturally.",
      outcome: "Focused primary conversion point."
    },
    {
      step: "05",
      question: "How can technology make that easier?",
      focus: "ENGINEERING & EXECUTION",
      desc: "Choose the leanest tech stack, write clean React code, optimize assets, and automate secondary flows.",
      outcome: "Production code that delivers the experience."
    }
  ];

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto border-t border-[#ECE9DF]">
      <div className="space-y-3 sm:space-y-4 max-w-2xl mb-10 sm:mb-16">
        <span className="text-xs font-mono text-[#8BCF5B] uppercase tracking-wider font-semibold">
          SYSTEMIC DECISION FLOW
        </span>
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-display font-bold text-[#20221F] leading-tight">
          Before I write code, I ask better questions.
        </h2>
        <p className="text-xs sm:text-sm md:text-base text-[#686C63]">
          A visual decision tree for transforming raw requirements into intuitive digital products.
        </p>
      </div>

      {/* Decision System Canvas */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left Column: Interactive Vector Tree */}
        <div className="lg:col-span-6 space-y-3 sm:space-y-4 relative">
          <div className="absolute left-8 top-8 bottom-8 w-[2px] bg-[#ECE9DF] -z-10 hidden sm:block" />

          {steps.map((item, idx) => {
            const isActive = activeStep === idx;
            return (
              <motion.div
                key={item.step}
                onClick={() => setActiveStep(idx)}
                className={`cursor-pointer p-4 sm:p-5 rounded-2xl transition-all border flex items-center gap-3 sm:gap-4 min-h-[52px] ${
                  isActive
                    ? 'bg-[#20221F] text-[#F7F5EF] border-[#20221F] shadow-lg sm:translate-x-2'
                    : 'bg-[#F7F5EF] hover:bg-[#ECE9DF]/60 text-[#20221F] border-[#ECE9DF]'
                }`}
                data-cursor="think"
                data-cursor-label="NODE"
                role="button"
                tabIndex={0}
                aria-pressed={isActive}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    setActiveStep(idx);
                  }
                }}
              >
                <div
                  className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center text-xs font-mono font-bold shrink-0 transition-colors ${
                    isActive ? 'bg-[#8BCF5B] text-[#20221F]' : 'bg-[#ECE9DF] text-[#686C63]'
                  }`}
                >
                  {item.step}
                </div>

                <div className="flex-1 space-y-0.5 pr-1">
                  <span className={`text-[10px] font-mono tracking-wider uppercase block ${isActive ? 'text-[#8BCF5B]' : 'text-[#686C63]'}`}>
                    {item.focus}
                  </span>
                  <h3 className={`text-sm sm:text-base font-display font-semibold ${isActive ? 'text-[#F7F5EF]' : 'text-[#20221F]'}`}>
                    {item.question}
                  </h3>
                </div>

                <GitCommit
                  size={18}
                  className={`shrink-0 ${isActive ? 'text-[#8BCF5B]' : 'text-[#686C63] opacity-40'}`}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Right Column: Node Details Inspector */}
        <div className="lg:col-span-6 lg:sticky lg:top-28">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="bg-[#ECE9DF]/60 border border-[#ECE9DF] p-6 sm:p-8 rounded-3xl space-y-5 sm:space-y-6 relative overflow-hidden"
            >
              <div className="flex items-center justify-between border-b border-[#ECE9DF] pb-4">
                <span className="text-[11px] sm:text-xs font-mono text-[#686C63] uppercase tracking-wider flex items-center gap-1.5 sm:gap-2">
                  <Sparkles size={14} className="text-[#8BCF5B]" />
                  NODE {steps[activeStep].step}
                </span>
                <span className="text-[10px] sm:text-xs font-mono text-[#20221F] font-bold bg-[#C9F36B] px-3 py-1 rounded-full">
                  {steps[activeStep].focus}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-display font-bold text-[#20221F]">
                "{steps[activeStep].question}"
              </h3>

              <div className="space-y-4">
                <div className="space-y-1">
                  <span className="text-xs font-mono text-[#686C63] uppercase font-semibold">
                    Investigation Focus:
                  </span>
                  <p className="text-xs sm:text-sm md:text-base text-[#20221F] leading-relaxed">
                    {steps[activeStep].desc}
                  </p>
                </div>

                <div className="bg-[#F7F5EF] p-4 rounded-xl border border-[#ECE9DF] space-y-1">
                  <span className="text-xs font-mono text-[#8BCF5B] uppercase font-bold flex items-center gap-1.5">
                    <Cpu size={14} />
                    Target Output:
                  </span>
                  <p className="text-xs sm:text-sm text-[#20221F] font-semibold mt-1">
                    {steps[activeStep].outcome}
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-[#ECE9DF] flex items-center justify-between text-xs text-[#686C63] font-mono">
                <span>Step {activeStep + 1} of 5 in decision flow</span>
                <span>Yash · Thinking Engine</span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
