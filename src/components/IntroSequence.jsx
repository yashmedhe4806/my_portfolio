import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { CharacterBuilder } from '../assets/characters/CharacterIllustrations';

export const IntroSequence = ({ onComplete }) => {
  const [scene, setScene] = useState(1);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) {
      // If user prefers reduced motion, complete intro immediately
      onComplete();
      return;
    }

    const sceneDurations = [
      1400, // Scene 1: Problem statements
      1200, // Scene 2: Thinking questions canvas
      1100, // Scene 3: Node connections -> Now we can build
      1000, // Scene 4: Code editor -> Browser interface
      1000, // Scene 5: Marketing concepts -> Thinking comes first
      1200, // Scene 6: Editorial Character reveal
      1200, // Scene 7: YASH title reveal
      1400, // Scene 8: Core philosophy statement & transition
    ];

    if (scene <= sceneDurations.length) {
      const timer = setTimeout(() => {
        setScene((prev) => prev + 1);
      }, sceneDurations[scene - 1]);
      return () => clearTimeout(timer);
    } else {
      onComplete();
    }
  }, [scene, onComplete, shouldReduceMotion]);

  const handleSkip = () => {
    onComplete();
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: 'easeInOut' } }}
      className="fixed inset-0 z-[100] bg-[#F7F5EF] flex flex-col items-center justify-center p-4 sm:p-6 select-none overflow-hidden"
    >
      {/* Skip Intro Control */}
      <button
        onClick={handleSkip}
        className="absolute top-4 sm:top-8 right-4 sm:right-8 text-xs font-semibold tracking-wider text-[#686C63] hover:text-[#20221F] bg-[#ECE9DF]/80 hover:bg-[#ECE9DF] px-4 py-2.5 rounded-full border border-[#ECE9DF] transition-all hover:border-[#8BCF5B] min-h-[44px] flex items-center justify-center z-10"
        style={{ marginTop: 'env(safe-area-inset-top, 0px)' }}
        aria-label="Skip Intro Sequence"
      >
        Skip intro →
      </button>

      {/* Dynamic Cinematic Container */}
      <div className="w-full max-w-4xl min-h-[360px] sm:min-h-[420px] flex items-center justify-center relative px-2">
        <AnimatePresence mode="wait">
          {/* SCENE 01 */}
          {scene === 1 && (
            <motion.div
              key="scene1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center text-center space-y-4 sm:space-y-6 max-w-lg px-2"
            >
              {/* Moving subtle green dot */}
              <motion.div
                animate={{ x: [-15, 15, -8, 0], y: [-4, 4, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="w-3 h-3 rounded-full bg-[#8BCF5B] shadow-[0_0_12px_rgba(139,207,91,0.6)]"
              />
              <div className="space-y-3 sm:space-y-4">
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="text-base sm:text-lg md:text-xl text-[#686C63] font-medium"
                >
                  A business has a problem.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  className="text-base sm:text-lg md:text-xl text-[#20221F] font-semibold"
                >
                  A website is usually not the problem.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.0, duration: 0.5 }}
                  className="text-lg sm:text-xl md:text-2xl text-[#20221F] font-bold tracking-tight underline decoration-[#8BCF5B] decoration-2 underline-offset-4"
                >
                  Understanding the problem is.
                </motion.p>
              </div>
            </motion.div>
          )}

          {/* SCENE 02 */}
          {scene === 2 && (
            <motion.div
              key="scene2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="w-full h-full relative min-h-[320px] sm:min-h-[350px] flex items-center justify-center"
            >
              <div className="absolute top-2 sm:top-4 left-2 sm:left-6 md:left-12 max-w-[85%] sm:max-w-none">
                <motion.span
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-xs sm:text-sm md:text-base text-[#20221F] font-medium font-mono bg-[#ECE9DF] px-3 py-1.5 rounded-lg inline-block shadow-sm"
                >
                  What are you actually trying to sell?
                </motion.span>
              </div>
              <div className="absolute top-20 sm:top-16 right-2 sm:right-6 md:right-16 max-w-[85%] sm:max-w-none">
                <motion.span
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-xs sm:text-sm md:text-base text-[#20221F] font-medium font-mono bg-[#ECE9DF] px-3 py-1.5 rounded-lg inline-block shadow-sm"
                >
                  Who are you trying to reach?
                </motion.span>
              </div>
              <div className="absolute bottom-16 sm:bottom-20 left-4 sm:left-10 md:left-24 max-w-[85%] sm:max-w-none">
                <motion.span
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-xs sm:text-sm md:text-base text-[#20221F] font-medium font-mono bg-[#ECE9DF] px-3 py-1.5 rounded-lg inline-block shadow-sm"
                >
                  Why should they care?
                </motion.span>
              </div>
              <div className="absolute bottom-2 sm:bottom-6 right-4 sm:right-10 md:right-28 max-w-[85%] sm:max-w-none">
                <motion.span
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="text-xs sm:text-sm md:text-base text-[#20221F] font-medium font-mono bg-[#C9F36B] text-[#20221F] px-3 py-1.5 rounded-lg font-bold inline-block shadow-sm"
                >
                  What should happen after they visit?
                </motion.span>
              </div>
            </motion.div>
          )}

          {/* SCENE 03 */}
          {scene === 3 && (
            <motion.div
              key="scene3"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col items-center space-y-6 sm:space-y-8 px-2"
            >
              {/* Minimal Node Diagram */}
              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 md:gap-6 max-w-full">
                {['Problem', 'People', 'Message', 'Experience', 'Action'].map((step, idx) => (
                  <React.Fragment key={step}>
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: idx * 0.12 }}
                      className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-semibold border ${
                        idx === 4 ? 'bg-[#20221F] text-[#F7F5EF] border-[#20221F]' : 'bg-[#ECE9DF] text-[#20221F] border-[#D3CEBF]'
                      }`}
                    >
                      {step}
                    </motion.div>
                    {idx < 4 && (
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: idx * 0.12 + 0.1 }}
                        className="text-[#8BCF5B] font-bold text-xs sm:text-sm"
                      >
                        →
                      </motion.span>
                    )}
                  </React.Fragment>
                ))}
              </div>
              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-[#20221F]"
              >
                Now we can build.
              </motion.h3>
            </motion.div>
          )}

          {/* SCENE 04 */}
          {scene === 4 && (
            <motion.div
              key="scene4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="w-full max-w-sm sm:max-w-md bg-[#20221F] text-[#F7F5EF] p-5 sm:p-6 rounded-2xl shadow-xl font-mono text-xs sm:text-sm space-y-4"
            >
              <div className="flex items-center gap-2 pb-3 border-b border-white/10 text-xs text-[#686C63]">
                <span className="w-3 h-3 rounded-full bg-[#FF8A65]" />
                <span className="w-3 h-3 rounded-full bg-[#C9F36B]" />
                <span className="w-3 h-3 rounded-full bg-[#8BCF5B]" />
                <span className="ml-2 text-gray-400">solution.config.js</span>
              </div>
              <div className="space-y-1 text-xs sm:text-sm">
                <p><span className="text-[#8BCF5B]">problem</span> ↓</p>
                <p><span className="text-[#ECE9DF]">understand</span> ↓</p>
                <p><span className="text-[#C9F36B]">design</span> ↓</p>
                <p><span className="text-[#FF8A65]">build</span> ↓</p>
                <p><span className="text-[#8BCF5B]">learn</span></p>
              </div>
              <div className="pt-2 border-t border-white/10 text-xs text-[#8BCF5B] font-sans italic">
                {"// code is a tool for solving a problem."}
              </div>
            </motion.div>
          )}

          {/* SCENE 05 */}
          {scene === 5 && (
            <motion.div
              key="scene5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col items-center text-center space-y-5 sm:space-y-6 px-4"
            >
              <div className="grid grid-cols-2 gap-3 max-w-xs sm:max-w-sm w-full">
                <div className="p-3 bg-[#ECE9DF] rounded-xl text-xs font-bold text-[#20221F]">Audience</div>
                <div className="p-3 bg-[#ECE9DF] rounded-xl text-xs font-bold text-[#20221F]">Message</div>
                <div className="p-3 bg-[#ECE9DF] rounded-xl text-xs font-bold text-[#20221F]">Experience</div>
                <div className="p-3 bg-[#8BCF5B] rounded-xl text-xs font-bold text-[#20221F]">Action</div>
              </div>
              <div className="space-y-1.5">
                <p className="text-base sm:text-lg md:text-xl text-[#686C63] font-medium">The website is only one part of it.</p>
                <p className="text-lg sm:text-xl md:text-2xl text-[#20221F] font-bold">The thinking comes first.</p>
              </div>
            </motion.div>
          )}

          {/* SCENE 06 */}
          {scene === 6 && (
            <motion.div
              key="scene6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center text-center px-4"
            >
              <CharacterBuilder className="w-56 sm:w-72 md:w-96 h-auto" />
              <span className="text-[11px] sm:text-xs font-mono text-[#686C63] tracking-wider uppercase mt-4 max-w-xs sm:max-w-none">
                Yash at work — bridging technology & market clarity
              </span>
            </motion.div>
          )}

          {/* SCENE 07 */}
          {scene === 7 && (
            <motion.div
              key="scene7"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center text-center space-y-3 sm:space-y-4 px-4"
            >
              <motion.h1
                initial={{ letterSpacing: '0.2em' }}
                animate={{ letterSpacing: '0.05em' }}
                transition={{ duration: 0.8 }}
                className="text-5xl sm:text-7xl md:text-8xl font-display font-bold tracking-tight text-[#20221F]"
              >
                YASH
              </motion.h1>
              <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-5 py-2 rounded-full bg-[#20221F] text-[#F7F5EF] font-mono text-xs md:text-sm font-semibold tracking-widest uppercase">
                <span>CODE</span>
                <span className="text-[#8BCF5B]">·</span>
                <span>WEB</span>
                <span className="text-[#8BCF5B]">·</span>
                <span>MARKETING</span>
              </div>
            </motion.div>
          )}

          {/* SCENE 08 */}
          {scene === 8 && (
            <motion.div
              key="scene8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center text-center max-w-xl space-y-4 sm:space-y-6 px-4"
            >
              <p className="text-lg sm:text-xl md:text-2xl font-display font-medium text-[#20221F] leading-relaxed">
                "I work with code and marketing, but I'm mostly interested in what happens between the two."
              </p>
              <p className="text-xs sm:text-sm md:text-base text-[#686C63] font-sans">
                The part where an idea becomes something people can actually use.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Progress Dots Indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((step) => (
          <div
            key={step}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              step === scene ? 'w-6 sm:w-8 bg-[#8BCF5B]' : 'w-1.5 bg-[#ECE9DF]'
            }`}
          />
        ))}
      </div>
    </motion.div>
  );
};
