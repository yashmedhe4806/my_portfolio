import React from 'react';
import { HelpCircle, CheckCircle } from 'lucide-react';

export const MoreThanBrief = () => {
  const questions = [
    "Who is it for?",
    "What are they looking for?",
    "What should they understand first?",
    "What should they do next?",
    "What can be simplified?"
  ];

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto border-t border-[#ECE9DF]">
      <div className="max-w-3xl space-y-4 sm:space-y-6 mb-10 sm:mb-16">
        <span className="text-xs font-mono text-[#8BCF5B] uppercase tracking-wider font-semibold">
          DEEPER ALIGNMENT
        </span>
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-display font-bold text-[#20221F] leading-tight">
          You asked for a website.{' '}
          <span className="block text-[#686C63] font-normal mt-2">
            I started asking why.
          </span>
        </h2>
        <p className="text-xs sm:text-sm md:text-base text-[#686C63] leading-relaxed">
          A client request is usually a symptom of a business goal. Uncovering the goal behind the request ensures we build the right thing the first time.
        </p>
      </div>

      {/* Visual Node Flow (Request -> Questions -> Outcome) */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-stretch max-w-5xl mx-auto">
        {/* Step 1: Initial Request */}
        <div className="md:col-span-3 bg-[#ECE9DF]/60 p-5 sm:p-6 rounded-2xl border border-[#ECE9DF] flex flex-col justify-between space-y-4">
          <div className="space-y-2">
            <span className="text-[10px] font-mono text-[#686C63] tracking-widest uppercase">01 · THE INPUT</span>
            <h3 className="text-base sm:text-lg font-display font-bold text-[#20221F]">REQUEST</h3>
          </div>
          <div className="bg-[#F7F5EF] p-3.5 sm:p-4 rounded-xl border border-[#ECE9DF] text-xs font-mono text-[#20221F] italic">
            "Build us a website."
          </div>
          <span className="text-xs text-[#686C63]">The starting point provided by the client or team.</span>
        </div>

        {/* Mobile Arrow Connector */}
        <div className="flex md:hidden items-center justify-center text-[#8BCF5B] font-bold text-lg py-1">
          ↓
        </div>
        {/* Desktop Arrow Connector */}
        <div className="hidden md:flex md:col-span-1 items-center justify-center text-[#8BCF5B] font-bold text-xl">
          →
        </div>

        {/* Step 2: Critical Questions */}
        <div className="md:col-span-4 bg-[#20221F] text-[#F7F5EF] p-5 sm:p-6 rounded-2xl border border-[#20221F] space-y-4 shadow-xl">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <span className="text-[10px] font-mono text-[#8BCF5B] tracking-widest uppercase">02 · DISCOVERY</span>
            <HelpCircle size={14} className="text-[#8BCF5B]" />
          </div>
          <h3 className="text-base sm:text-lg font-display font-bold text-[#F7F5EF]">QUESTIONS ASKED</h3>
          <ul className="space-y-2 text-xs font-mono">
            {questions.map((q, idx) => (
              <li key={idx} className="flex items-center gap-2 text-gray-300">
                <span className="text-[#8BCF5B] font-bold">?</span>
                <span>{q}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Arrow Connector */}
        <div className="flex md:hidden items-center justify-center text-[#8BCF5B] font-bold text-lg py-1">
          ↓
        </div>
        {/* Desktop Arrow Connector */}
        <div className="hidden md:flex md:col-span-1 items-center justify-center text-[#8BCF5B] font-bold text-xl">
          →
        </div>

        {/* Step 3: Clear Outcome */}
        <div className="md:col-span-3 bg-[#C9F36B] text-[#20221F] p-5 sm:p-6 rounded-2xl border border-[#20221F] flex flex-col justify-between space-y-4 shadow-lg">
          <div className="space-y-2">
            <span className="text-[10px] font-mono text-[#20221F] tracking-widest uppercase font-bold">03 · RESULT</span>
            <h3 className="text-base sm:text-lg font-display font-bold text-[#20221F]">OUTCOME</h3>
          </div>
          <div className="bg-[#20221F] text-[#F7F5EF] p-3.5 sm:p-4 rounded-xl text-xs font-semibold font-display">
            A better digital experience that serves a clear purpose.
          </div>
          <div className="flex items-center gap-1.5 text-xs font-bold text-[#20221F]">
            <CheckCircle size={14} />
            <span>Problem Solved</span>
          </div>
        </div>
      </div>
    </section>
  );
};
