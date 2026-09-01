import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Code, Megaphone, Merge } from 'lucide-react';

export const CodeMarketing = () => {
  const [convergence, setConvergence] = useState(50); // 0 (separated) to 100 (fully merged)
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const codeSteps = ['problem', 'logic', 'interface', 'product'];
  const marketingSteps = ['audience', 'message', 'experience', 'action'];

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto border-t border-[#ECE9DF] bg-[#ECE9DF]/20 rounded-3xl my-8 sm:my-12 overflow-hidden">
      <div className="text-center space-y-3 sm:space-y-4 max-w-2xl mx-auto mb-10 sm:mb-12">
        <span className="text-xs font-mono text-[#8BCF5B] uppercase tracking-wider font-semibold">
          THE INTERSECTION
        </span>
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-display font-bold text-[#20221F]">
          Code × Marketing
        </h2>
        <p className="text-xs sm:text-sm md:text-base text-[#686C63]">
          Drag the convergence slider below to see how technical implementation and market positioning merge into one seamless digital experience.
        </p>
      </div>

      {/* Interactive Convergence Control */}
      <div className="max-w-md mx-auto mb-12 sm:mb-16 px-2 space-y-2">
        <div className="flex justify-between text-[11px] sm:text-xs font-mono text-[#686C63]">
          <span>SEPARATED PERSPECTIVES</span>
          <span className="text-[#8BCF5B] font-bold">MERGED SYSTEM</span>
        </div>
        <input
          type="range"
          min="0"
          max="100"
          value={convergence}
          onChange={(e) => setConvergence(Number(e.target.value))}
          aria-label="Convergence level between code and marketing"
          className="w-full h-3 sm:h-2 bg-[#ECE9DF] rounded-lg appearance-none cursor-pointer accent-[#8BCF5B] touch-none"
          data-cursor="think"
          data-cursor-label="SLIDE"
        />
      </div>

      {/* Dynamic Visual Systems Stream */}
      <div className="relative min-h-[340px] sm:min-h-[380px] flex items-center justify-center max-w-5xl mx-auto px-2">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 relative">
          {/* CODE SIDE */}
          <motion.div
            style={{
              x: isMobile ? 0 : `${(100 - convergence) * -0.8}px`,
              opacity: 0.7 + (convergence / 100) * 0.3,
            }}
            className="bg-[#20221F] text-[#F7F5EF] p-5 sm:p-8 rounded-2xl shadow-lg border border-white/10 space-y-5"
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-3 sm:pb-4">
              <div className="flex items-center gap-2 text-xs font-mono text-[#8BCF5B]">
                <Code size={16} />
                <span>CODE SYSTEM</span>
              </div>
              <span className="text-[10px] font-mono bg-white/10 px-2 py-0.5 rounded text-gray-400">ENGINEERING</span>
            </div>

            <div className="space-y-3 sm:space-y-4 font-mono text-xs sm:text-sm">
              {codeSteps.map((step, idx) => (
                <React.Fragment key={step}>
                  <div className="flex items-center justify-between bg-white/5 p-2.5 sm:p-3 rounded-lg border border-white/5">
                    <span className="text-[#8BCF5B] font-semibold">{step}</span>
                    <span className="text-xs text-gray-400">0{idx + 1}</span>
                  </div>
                  {idx < codeSteps.length - 1 && (
                    <div className="text-center text-gray-500 text-xs">↓</div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </motion.div>

          {/* MARKETING SIDE */}
          <motion.div
            style={{
              x: isMobile ? 0 : `${(100 - convergence) * 0.8}px`,
              opacity: 0.7 + (convergence / 100) * 0.3,
            }}
            className="bg-[#F7F5EF] text-[#20221F] p-5 sm:p-8 rounded-2xl shadow-lg border border-[#ECE9DF] space-y-5"
          >
            <div className="flex items-center justify-between border-b border-[#ECE9DF] pb-3 sm:pb-4">
              <div className="flex items-center gap-2 text-xs font-mono text-[#FF8A65]">
                <Megaphone size={16} />
                <span>MARKETING SYSTEM</span>
              </div>
              <span className="text-[10px] font-mono bg-[#ECE9DF] px-2 py-0.5 rounded text-[#686C63]">STRATEGY</span>
            </div>

            <div className="space-y-3 sm:space-y-4 font-mono text-xs sm:text-sm">
              {marketingSteps.map((step, idx) => (
                <React.Fragment key={step}>
                  <div className="flex items-center justify-between bg-[#ECE9DF]/60 p-2.5 sm:p-3 rounded-lg border border-[#ECE9DF]">
                    <span className="text-[#FF8A65] font-semibold">{step}</span>
                    <span className="text-xs text-[#686C63]">0{idx + 1}</span>
                  </div>
                  {idx < marketingSteps.length - 1 && (
                    <div className="text-center text-[#686C63] text-xs">↓</div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Center Convergence Overlay Node */}
        {convergence > 40 && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="absolute z-20 bg-[#C9F36B] text-[#20221F] px-4 sm:px-6 py-3 sm:py-4 rounded-2xl shadow-2xl border-2 border-[#20221F] flex items-center gap-2 sm:gap-3 text-xs sm:text-sm font-bold font-display text-center max-w-[90%]"
          >
            <Merge size={18} className="text-[#20221F] shrink-0" />
            <span>UNIFIED PRODUCT DISCOVERY</span>
          </motion.div>
        )}
      </div>

      {/* Central Philosophy Banner */}
      <div className="mt-12 sm:mt-16 text-center max-w-3xl mx-auto p-6 sm:p-8 bg-[#20221F] text-[#F7F5EF] rounded-2xl space-y-3">
        <p className="text-lg sm:text-xl md:text-2xl font-display font-semibold text-[#F7F5EF]">
          "Code builds the experience. Context gives it a reason to exist."
        </p>
        <p className="text-xs font-mono text-[#8BCF5B]">
          Building without marketing context creates unused code. Marketing without solid code creates broken promises.
        </p>
      </div>
    </section>
  );
};
