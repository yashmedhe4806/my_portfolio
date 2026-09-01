import React from 'react';
import { motion } from 'framer-motion';
import { CharacterBuilder } from '../assets/characters/CharacterIllustrations';
import { ArrowDown } from 'lucide-react';

export const MainIntroSection = ({ onExplore }) => {
  return (
    <section className="min-h-[85vh] pt-28 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto flex flex-col justify-between relative">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center my-auto">
        {/* Left Editorial Statement */}
        <div className="lg:col-span-7 space-y-6 sm:space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#ECE9DF] text-xs font-mono text-[#686C63]"
          >
            <span className="w-2 h-2 rounded-full bg-[#8BCF5B]"></span>
            <span>PHILOSOPHY IN PRACTICE</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-[#20221F] leading-[1.12] tracking-tight"
          >
            I build websites.{' '}
            <span className="text-[#686C63] font-normal block mt-2 sm:mt-3">
              I think about the business behind them.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base sm:text-lg text-[#686C63] max-w-2xl leading-relaxed font-sans"
          >
            Sometimes the right solution is a website. Sometimes it is a simpler process, a clearer message, or a completely different approach.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4 sm:gap-6 pt-2 sm:pt-4"
          >
            <button
              onClick={() => onExplore('thinking')}
              className="px-6 py-3.5 bg-[#20221F] text-[#F7F5EF] font-semibold text-xs sm:text-sm rounded-xl hover:bg-[#8BCF5B] hover:text-[#20221F] transition-all flex items-center justify-center gap-3 group min-h-[48px]"
              aria-label="Explore the thinking process"
              data-cursor="think"
              data-cursor-label="EXPLORE"
            >
              <span>Explore the thinking process</span>
              <ArrowDown size={16} className="group-hover:translate-y-0.5 transition-transform" />
            </button>
          </motion.div>
        </div>

        {/* Right Fictional Character Visual Anchor */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="lg:col-span-5 flex justify-center relative mt-6 lg:mt-0"
        >
          <div className="w-full max-w-md bg-[#ECE9DF]/40 p-5 sm:p-8 rounded-3xl border border-[#ECE9DF] relative overflow-hidden group">
            <div className="absolute top-4 right-4 text-[10px] font-mono text-[#686C63] bg-[#F7F5EF] px-2.5 py-1 rounded-md border border-[#ECE9DF]">
              FIGURE 01 — YASH
            </div>
            <CharacterBuilder className="w-full h-auto max-h-[300px] sm:max-h-none object-contain" />
            <div className="mt-4 pt-4 border-t border-[#ECE9DF] flex items-center justify-between text-xs text-[#686C63]">
              <span>Code x Strategy</span>
              <span className="text-[#20221F] font-medium">Interdisciplinary Workspace</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Subtle Scroll Down Prompt */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="pt-8 sm:pt-12 flex items-center gap-4 text-xs font-mono text-[#686C63]"
      >
        <div className="w-8 h-[1px] bg-[#686C63]" />
        <span>SCROLL TO UNCOVER THE SYSTEM</span>
      </motion.div>
    </section>
  );
};
