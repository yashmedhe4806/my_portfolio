import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ArrowRight, Sparkles } from 'lucide-react';

export const FiguringOut = () => {
  const [activeNode, setActiveNode] = useState(0);

  const questions = [
    {
      id: 0,
      question: "Why isn't this website converting?",
      category: "CONVERSION & FRICTION",
      insight: "Often visitors leave not because they lack interest, but because the next step requires too much cognitive effort or trust isn't established early enough.",
      solution: "Streamline navigation, simplify value clarity above the fold, and align user intent with low-friction entry points."
    },
    {
      id: 1,
      question: "Why does this product feel complicated?",
      category: "UX & INFORMATION ARCHITECTURE",
      insight: "Complexity is usually caused by solving every feature requirement at once instead of prioritizing the core workflow the user actually cares about.",
      solution: "Progressive disclosure: show only what's necessary right now, hide secondary tools until needed."
    },
    {
      id: 2,
      question: "Why are people leaving here?",
      category: "USER RETENTION & FLOW",
      insight: "High drop-off on a key page usually indicates a disconnect between what the user expected when clicking and what the page presented.",
      solution: "Audit copy alignment, eliminate dead-ends, and provide clear narrative direction."
    },
    {
      id: 3,
      question: "What should this business actually say?",
      category: "BRAND POSITIONING & COPY",
      insight: "Jargon hides weak positioning. Great messaging says what the product does for the customer in plain, quiet words.",
      solution: "Focus on the outcome, remove buzzwords, and speak directly to the target buyer's frustration."
    },
    {
      id: 4,
      question: "Can this process be simpler?",
      category: "SYSTEM & AUTOMATION",
      insight: "Many manual steps exist only because nobody questioned why they were added in the first place.",
      solution: "Integrate lean code, automate backend handoffs, and keep interface steps minimal."
    }
  ];

  return (
    <section id="thinking" className="py-16 sm:py-24 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto border-t border-[#ECE9DF]">
      <div className="space-y-3 sm:space-y-4 max-w-2xl mb-10 sm:mb-16">
        <span className="text-xs font-mono text-[#8BCF5B] uppercase tracking-wider font-semibold">
          PROBLEM-FIRST THINKING
        </span>
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-display font-bold text-[#20221F]">
          Things I like figuring out.
        </h2>
        <p className="text-xs sm:text-sm md:text-base text-[#686C63]">
          Skills and syntax change constantly. The ability to diagnose what's actually holding a digital product back remains essential.
        </p>
      </div>

      {/* Interactive Thinking Canvas */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left Node Map */}
        <div className="lg:col-span-6 space-y-3 sm:space-y-4 relative">
          <div className="absolute left-6 top-6 bottom-6 w-[2px] bg-[#ECE9DF] -z-10 hidden sm:block" />

          {questions.map((q, idx) => {
            const isActive = activeNode === idx;
            return (
              <motion.div
                key={q.id}
                onClick={() => setActiveNode(idx)}
                className={`cursor-pointer p-4 sm:p-5 rounded-2xl transition-all relative border flex items-start gap-3 sm:gap-4 min-h-[52px] ${
                  isActive
                    ? 'bg-[#20221F] text-[#F7F5EF] border-[#20221F] shadow-lg sm:translate-x-2'
                    : 'bg-[#F7F5EF] hover:bg-[#ECE9DF]/60 text-[#20221F] border-[#ECE9DF]'
                }`}
                data-cursor="think"
                data-cursor-label="UNCOVER"
                role="button"
                tabIndex={0}
                aria-pressed={isActive}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    setActiveNode(idx);
                  }
                }}
              >
                <div
                  className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs font-mono font-bold shrink-0 transition-colors ${
                    isActive ? 'bg-[#8BCF5B] text-[#20221F]' : 'bg-[#ECE9DF] text-[#686C63]'
                  }`}
                >
                  0{idx + 1}
                </div>
                <div className="space-y-1 pr-2">
                  <span className={`text-[10px] font-mono tracking-wider uppercase block ${isActive ? 'text-[#8BCF5B]' : 'text-[#686C63]'}`}>
                    {q.category}
                  </span>
                  <h3 className={`text-sm sm:text-base md:text-lg font-display font-semibold ${isActive ? 'text-[#F7F5EF]' : 'text-[#20221F]'}`}>
                    "{q.question}"
                  </h3>
                </div>
                <ArrowRight
                  size={18}
                  className={`ml-auto self-center shrink-0 transition-transform ${
                    isActive ? 'text-[#8BCF5B] translate-x-1' : 'text-[#686C63] opacity-40'
                  }`}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Right Expansion Workspace Node */}
        <div className="lg:col-span-6 lg:sticky lg:top-28">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeNode}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="bg-[#ECE9DF]/50 border border-[#ECE9DF] p-6 sm:p-8 rounded-3xl space-y-5 sm:space-y-6 relative overflow-hidden"
            >
              <div className="flex items-center justify-between border-b border-[#ECE9DF] pb-4">
                <span className="text-xs font-mono text-[#686C63] uppercase tracking-wider flex items-center gap-2">
                  <Sparkles size={14} className="text-[#8BCF5B]" />
                  ANALYSIS CANVAS
                </span>
                <span className="text-xs font-mono font-bold text-[#20221F] bg-[#C9F36B] px-3 py-1 rounded-full">
                  NODE 0{activeNode + 1}
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg sm:text-xl md:text-2xl font-display font-bold text-[#20221F]">
                  "{questions[activeNode].question}"
                </h3>
              </div>

              <div className="space-y-4 pt-1">
                <div className="space-y-1">
                  <span className="text-xs font-mono text-[#686C63] uppercase tracking-wider font-semibold">
                    Core Observation:
                  </span>
                  <p className="text-xs sm:text-sm md:text-base text-[#20221F] leading-relaxed">
                    {questions[activeNode].insight}
                  </p>
                </div>

                <div className="space-y-1 bg-[#F7F5EF] p-4 rounded-xl border border-[#ECE9DF]">
                  <span className="text-xs font-mono text-[#8BCF5B] uppercase tracking-wider font-bold">
                    Strategic Direction:
                  </span>
                  <p className="text-xs sm:text-sm text-[#20221F] font-medium leading-relaxed mt-1">
                    {questions[activeNode].solution}
                  </p>
                </div>
              </div>

              <div className="pt-3 flex items-center justify-between text-xs text-[#686C63] font-mono border-t border-[#ECE9DF]">
                <span>Select nodes above or on the left</span>
                <HelpCircle size={14} />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
