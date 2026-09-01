import React from 'react';
import { Code, Lightbulb, CheckCircle2 } from 'lucide-react';

export const AboutSection = () => {
  const buildItems = ['Websites', 'Web Applications', 'Digital Experiences'];
  const thinkItems = ['Users', 'Business Goals', 'Communication', 'Conversion'];

  return (
    <section id="about" className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-[#ECE9DF]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Editorial Narrative */}
        <div className="lg:col-span-7 space-y-6">
          <span className="text-xs font-mono text-[#8BCF5B] uppercase tracking-wider font-semibold">
            ABOUT YASH
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-[#20221F] leading-tight">
            A little about the person behind the screen.
          </h2>
          <p className="text-base md:text-lg text-[#686C63] leading-relaxed font-sans">
            I work across coding, web and marketing because I enjoy seeing the whole picture. I care about how something is built, but also why it exists, who uses it and what happens after it goes live.
          </p>

          <div className="pt-4 border-t border-[#ECE9DF] flex flex-wrap gap-6 text-xs font-mono text-[#686C63]">
            <div>
              <span className="text-[#20221F] font-bold block">LOCATION</span>
              <span>Remote / Worldwide</span>
            </div>
            <div>
              <span className="text-[#20221F] font-bold block">DISCIPLINE</span>
              <span>Web Development & Strategy</span>
            </div>
            <div>
              <span className="text-[#20221F] font-bold block">FOCUS</span>
              <span>Interdisciplinary Problem-Solving</span>
            </div>
          </div>
        </div>

        {/* Right Editorial Visual Lists */}
        <div className="lg:col-span-5 bg-[#ECE9DF]/60 p-8 rounded-3xl border border-[#ECE9DF] space-y-8">
          {/* BUILD List */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono text-[#8BCF5B] font-bold">
              <Code size={16} />
              <span>BUILD</span>
            </div>
            <div className="space-y-2">
              {buildItems.map((item) => (
                <div key={item} className="flex items-center justify-between bg-[#F7F5EF] p-3 rounded-xl border border-[#ECE9DF] text-sm font-semibold text-[#20221F]">
                  <span>{item}</span>
                  <CheckCircle2 size={16} className="text-[#8BCF5B]" />
                </div>
              ))}
            </div>
          </div>

          {/* THINK ABOUT List */}
          <div className="space-y-4 pt-4 border-t border-[#ECE9DF]">
            <div className="flex items-center gap-2 text-xs font-mono text-[#20221F] font-bold">
              <Lightbulb size={16} />
              <span>THINK ABOUT</span>
            </div>
            <div className="space-y-2">
              {thinkItems.map((item) => (
                <div key={item} className="flex items-center justify-between bg-[#F7F5EF] p-3 rounded-xl border border-[#ECE9DF] text-sm font-semibold text-[#20221F]">
                  <span>{item}</span>
                  <span className="w-2 h-2 rounded-full bg-[#C9F36B]" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
