import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export const Navbar = ({ activeSection, onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'work', label: 'WORK' },
    { id: 'thinking', label: 'THINKING' },
    { id: 'about', label: 'ABOUT' },
    { id: 'services', label: 'SERVICES' },
    { id: 'contact', label: 'CONTACT' },
  ];

  const handleLinkClick = (id) => {
    setMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-[#F7F5EF]/90 backdrop-blur-md border-b border-[#ECE9DF] py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleLinkClick('top')}
            className="group flex items-center gap-2 text-left focus:outline-none"
            data-cursor="nav"
            data-cursor-label="TOP"
          >
            <span className="font-display font-bold text-xl tracking-tight text-[#20221F] group-hover:text-[#8BCF5B] transition-colors">
              YASH
            </span>
            <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-[#8BCF5B]"></span>
            <span className="hidden md:inline-block text-xs text-[#686C63] font-medium tracking-wide">
              CODE · WEB · MARKETING
            </span>
          </button>

          {/* Availability Status */}
          <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#ECE9DF]/60 border border-[#ECE9DF] text-xs font-medium text-[#20221F]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#8BCF5B] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#8BCF5B]"></span>
            </span>
            Available for selected projects
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleLinkClick(item.id)}
                className={`text-xs font-semibold tracking-wider transition-colors relative py-1 ${
                  activeSection === item.id ? 'text-[#20221F]' : 'text-[#686C63] hover:text-[#20221F]'
                }`}
                data-cursor="nav"
                data-cursor-label="GO"
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.span
                    layoutId="activeIndicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#8BCF5B]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#20221F] focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-[#F7F5EF] pt-24 px-8 flex flex-col justify-between pb-12 md:hidden"
          >
            <div className="space-y-6">
              <div className="flex items-center gap-2 pb-6 border-b border-[#ECE9DF] text-xs text-[#686C63]">
                <span className="w-2 h-2 rounded-full bg-[#8BCF5B]"></span>
                Available for selected projects
              </div>
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleLinkClick(item.id)}
                    className="text-left font-display text-2xl font-bold tracking-tight text-[#20221F] hover:text-[#8BCF5B] flex items-center justify-between py-2 border-b border-[#ECE9DF]/40"
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight size={20} className="text-[#686C63]" />
                  </button>
                ))}
              </div>
            </div>

            <div className="text-xs text-[#686C63] space-y-1">
              <p className="font-semibold text-[#20221F]">YASH — CODE · WEB · MARKETING</p>
              <p>Understanding the problem before writing the code.</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
