import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CharacterBuilder, CharacterBusinessOwner, CharacterMarketingStrategist } from '../assets/characters/CharacterIllustrations';
import { Code, Eye, Lightbulb, BookOpen } from 'lucide-react';

export const SelectedWork = () => {
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      id: 'fintech-onboarding',
      title: 'Frictionless Onboarding Architecture',
      category: 'FINTECH & UX REDESIGN',
      shortDesc: 'Re-evaluating a multi-step user registration flow to eliminate drop-off points while preserving compliance.',
      character: CharacterBusinessOwner,
      problem: 'Users were abandoning registration on step 3 because mandatory compliance forms were presented before users understood the value proposition.',
      whatIBuilt: 'A lightweight React onboarding application featuring dynamic step validation, inline guidance tooltips, and background data pre-fetching.',
      thinkingAbout: 'How can we defer heavy identity verification until after the user has experienced the initial product preview?',
      learned: 'Simplifying a workflow isn\'t always about removing fields; it is often about re-sequencing when fields appear so momentum isn\'t lost.',
      previewUI: {
        type: 'form-preview',
        tag: 'Onboarding Engine v2.4',
        steps: ['01. Intent', '02. Soft Auth', '03. Value Preview', '04. Verification'],
      }
    },
    {
      id: 'saas-analytics-messaging',
      title: 'SaaS Value & Pricing Architecture',
      category: 'WEB APP & POSITIONING',
      shortDesc: 'Restructuring complex tier offerings into an intuitive decision framework for prospective B2B buyers.',
      character: CharacterMarketingStrategist,
      problem: 'Prospects struggled to choose between 4 pricing tiers with 35 listed feature toggles, causing sales call fatigue.',
      whatIBuilt: 'An interactive tier selector app with real-time usage cost sliders and custom feature comparison matrix.',
      thinkingAbout: 'How do buyers actually evaluate enterprise software? They look for immediate ROI signals, not exhaustive bullet lists.',
      learned: 'Positioning pricing around buyer outcomes rather than feature counts reduced decision paralysis significantly.',
      previewUI: {
        type: 'pricing-matrix',
        tag: 'Pricing Architecture',
        steps: ['Starter', 'Growth (Recommended)', 'Custom Enterprise'],
      }
    },
    {
      id: 'content-discovery-hub',
      title: 'Editorial Knowledge & Search Interface',
      category: 'WEB APPLICATION',
      shortDesc: 'A fast, searchable digital publication engine built to index and surface complex technical documentation cleanly.',
      character: CharacterBuilder,
      problem: 'Technical readers were struggling to find actionable implementation guides inside a fragmented PDF repository.',
      whatIBuilt: 'A full-text search web application with instant filter facets, inline code playgrounds, and clean typography.',
      thinkingAbout: 'Reading online is scanning. How can hierarchy, search latency, and typography make technical documents effortless to digest?',
      learned: 'Sub-100ms client search response times completely transform how users interact with documentation.',
      previewUI: {
        type: 'doc-search',
        tag: 'Search System',
        steps: ['Instant Search [Ctrl+K]', 'Categorized Facets', 'Syntax Highlight'],
      }
    }
  ];

  const project = projects[activeProject];
  const CharacterComp = project.character;

  return (
    <section id="work" className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-[#ECE9DF]">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div className="space-y-4 max-w-xl">
          <span className="text-xs font-mono text-[#8BCF5B] uppercase tracking-wider font-semibold">
            CASE STUDIES
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-[#20221F]">
            Selected work
          </h2>
          <p className="text-sm md:text-base text-[#686C63]">
            A breakdown of real problem-solving exercises across code structure, interface design, and user intent.
          </p>
        </div>

        {/* Project Selector Tabs */}
        <div className="flex items-center gap-2 bg-[#ECE9DF]/60 p-1.5 rounded-xl border border-[#ECE9DF] overflow-x-auto">
          {projects.map((p, idx) => (
            <button
              key={p.id}
              onClick={() => setActiveProject(idx)}
              className={`px-4 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                activeProject === idx
                  ? 'bg-[#20221F] text-[#F7F5EF]'
                  : 'text-[#686C63] hover:text-[#20221F]'
              }`}
              data-cursor="project"
              data-cursor-label="CASE"
            >
              0{idx + 1}. {p.title.split(' ')[0]}
            </button>
          ))}
        </div>
      </div>

      {/* Case Study Container */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeProject}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
        >
          {/* Left Column: Case Breakdown */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-mono text-[#8BCF5B] font-bold bg-[#ECE9DF] px-3 py-1 rounded-full">
                {project.category}
              </span>
              <h3 className="text-2xl md:text-4xl font-display font-bold text-[#20221F]">
                {project.title}
              </h3>
              <p className="text-base text-[#686C63] leading-relaxed">
                {project.shortDesc}
              </p>
            </div>

            {/* 4 Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              {/* Problem */}
              <div className="bg-[#F7F5EF] p-5 rounded-2xl border border-[#ECE9DF] space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono text-[#FF8A65] font-bold">
                  <Eye size={14} />
                  <span>THE PROBLEM</span>
                </div>
                <p className="text-xs md:text-sm text-[#20221F] leading-relaxed">
                  {project.problem}
                </p>
              </div>

              {/* What I Built */}
              <div className="bg-[#F7F5EF] p-5 rounded-2xl border border-[#ECE9DF] space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono text-[#8BCF5B] font-bold">
                  <Code size={14} />
                  <span>WHAT I BUILT</span>
                </div>
                <p className="text-xs md:text-sm text-[#20221F] leading-relaxed">
                  {project.whatIBuilt}
                </p>
              </div>

              {/* What I Was Thinking About */}
              <div className="bg-[#F7F5EF] p-5 rounded-2xl border border-[#ECE9DF] space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono text-[#20221F] font-bold">
                  <Lightbulb size={14} />
                  <span>WHAT I WAS THINKING ABOUT</span>
                </div>
                <p className="text-xs md:text-sm text-[#20221F] leading-relaxed">
                  {project.thinkingAbout}
                </p>
              </div>

              {/* What I Learned */}
              <div className="bg-[#C9F36B]/20 p-5 rounded-2xl border border-[#C9F36B]/50 space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono text-[#20221F] font-bold">
                  <BookOpen size={14} />
                  <span>WHAT I LEARNED</span>
                </div>
                <p className="text-xs md:text-sm text-[#20221F] leading-relaxed font-medium">
                  {project.learned}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Browser Mockup & Fictional Character Story Anchor */}
          <div className="lg:col-span-5 space-y-6 sticky top-28">
            {/* Browser Interface Mockup */}
            <div className="bg-[#20221F] text-[#F7F5EF] p-6 rounded-3xl shadow-xl border border-white/10 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs font-mono">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF8A65]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#C9F36B]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#8BCF5B]" />
                </div>
                <span className="text-gray-400">{project.previewUI.tag}</span>
              </div>

              {/* UI Mockup Fragment */}
              <div className="bg-[#141513] p-5 rounded-xl border border-white/5 space-y-3">
                <div className="text-xs font-mono text-[#8BCF5B] flex justify-between">
                  <span>INTERFACE WORKFLOW</span>
                  <span>PREVIEW MODE</span>
                </div>

                <div className="space-y-2">
                  {project.previewUI.steps.map((step, sIdx) => (
                    <div key={sIdx} className="flex items-center justify-between bg-white/5 px-3 py-2 rounded text-xs font-mono text-gray-300">
                      <span>{step}</span>
                      <span className="text-[#8BCF5B]">✓</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Character Story Anchor */}
            <div className="bg-[#ECE9DF]/60 p-6 rounded-3xl border border-[#ECE9DF] flex items-center gap-4">
              <CharacterComp className="w-28 h-auto shrink-0" />
              <div className="text-xs text-[#686C63] space-y-1">
                <span className="font-mono text-[#20221F] font-bold block uppercase">STORY PERSPECTIVE</span>
                <p>"Understanding user intent before writing code ensures every element serves a purpose."</p>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
};
