import React from 'react';
import { motion } from 'framer-motion';

export const EndingLoop = ({ onReplayIntro }) => {
  return (
    <footer className="py-16 sm:py-24 px-4 sm:px-6 md:px-12 bg-[#F7F5EF] border-t border-[#ECE9DF] relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center space-y-8 sm:space-y-10">
        {/* Returning Green Dot Visual Anchor */}
        <div className="flex justify-center">
          <motion.div
            animate={{ scale: [1, 1.4, 1], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            className="w-4 h-4 rounded-full bg-[#8BCF5B] shadow-[0_0_16px_rgba(139,207,91,0.8)]"
          />
        </div>

        {/* Closing Thoughtful Statement */}
        <div className="space-y-3 sm:space-y-4 max-w-xl mx-auto">
          <p className="text-xl sm:text-2xl md:text-3xl font-display font-medium text-[#20221F]">
            Still thinking about it?
          </p>
          <p className="text-lg sm:text-xl md:text-2xl font-display font-bold text-[#8BCF5B]">
            Good.
          </p>
          <p className="text-xs sm:text-sm md:text-base text-[#686C63]">
            That's usually where interesting ideas start.
          </p>
        </div>

        {/* Final Identity Branding */}
        <div className="pt-6 sm:pt-8 border-t border-[#ECE9DF] space-y-4">
          <button
            onClick={onReplayIntro}
            className="font-display font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight text-[#20221F] hover:text-[#8BCF5B] transition-colors focus:outline-none"
            aria-label="Replay Intro Sequence"
            data-cursor="nav"
            data-cursor-label="REPLAY"
          >
            YASH
          </button>

          <div className="flex items-center justify-center gap-2 sm:gap-3 font-mono text-[11px] sm:text-xs text-[#686C63] uppercase tracking-widest">
            <span>CODE</span>
            <span className="text-[#8BCF5B]">·</span>
            <span>WEB</span>
            <span className="text-[#8BCF5B]">·</span>
            <span>MARKETING</span>
          </div>
        </div>

        {/* Copyright & Replay Intro Button */}
        <div className="pt-6 text-xs font-mono text-[#686C63] flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#ECE9DF]/40">
          <span>© {new Date().getFullYear()} Yash. Designed with intent.</span>
          <button
            onClick={onReplayIntro}
            className="hover:text-[#20221F] underline underline-offset-4 decoration-[#8BCF5B] min-h-[44px] flex items-center justify-center"
          >
            Replay opening sequence ↺
          </button>
        </div>
      </div>
    </footer>
  );
};
