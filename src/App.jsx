import React, { useState, useEffect } from 'react';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { ThemeCustomizer } from './components/ThemeCustomizer';
import { IntroSequence } from './components/IntroSequence';
import { MainIntroSection } from './sections/MainIntroSection';
import { FiguringOut } from './sections/FiguringOut';
import { CodeMarketing } from './sections/CodeMarketing';
import { MoreThanBrief } from './sections/MoreThanBrief';
import { SelectedWork } from './sections/SelectedWork';
import { HowIThink } from './sections/HowIThink';
import { AboutSection } from './sections/AboutSection';
import { ServicesSection } from './sections/ServicesSection';
import { ContactSection } from './sections/ContactSection';
import { EndingLoop } from './sections/EndingLoop';

export default function App() {
  const [introActive, setIntroActive] = useState(true);
  const [activeSection, setActiveSection] = useState('top');

  // Handle section navigation smooth scroll
  const handleNavigate = (sectionId) => {
    if (sectionId === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setActiveSection('top');
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
    }
  };

  // Scroll observer to update active section link
  useEffect(() => {
    if (introActive) return;

    const sections = ['work', 'thinking', 'about', 'services', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [introActive]);

  return (
    <div className="min-h-screen bg-[var(--bg-main)] text-[var(--text-main)] font-sans relative selection:bg-[var(--accent-lime)] selection:text-[var(--bg-dark)]">
      {/* Desktop Custom Cursor */}
      <CustomCursor />

      {/* Persistent Theme Customizer */}
      <ThemeCustomizer />

      {/* Opening 8-Scene Cinematic Sequence */}
      {introActive ? (
        <IntroSequence onComplete={() => setIntroActive(false)} />
      ) : (
        <>
          {/* Minimal Desktop & Mobile Navigation */}
          <Navbar activeSection={activeSection} onNavigate={handleNavigate} />

          {/* Main Website Flow */}
          <main className="w-full">
            <MainIntroSection onExplore={handleNavigate} />
            <FiguringOut />
            <CodeMarketing />
            <MoreThanBrief />
            <SelectedWork />
            <HowIThink />
            <AboutSection />
            <ServicesSection />
            <ContactSection />
          </main>

          {/* Ending Loop & Footer */}
          <EndingLoop onReplayIntro={() => {
            window.scrollTo({ top: 0, behavior: 'instant' });
            setIntroActive(true);
          }} />
        </>
      )}
    </div>
  );
}
