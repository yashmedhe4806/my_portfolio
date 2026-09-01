import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Palette, Check, X, Sparkles, RefreshCw } from 'lucide-react';

export const THEMES = [
  {
    id: 'default',
    name: 'Editorial Cream',
    type: 'light',
    desc: 'Original warm cream & lime accent',
    preview: {
      bg: '#F7F5EF',
      card: '#ECE9DF',
      text: '#20221F',
      accent: '#8BCF5B',
      accentSecondary: '#C9F36B',
    }
  },
  {
    id: 'obsidian',
    name: 'Dark Obsidian',
    type: 'dark',
    desc: 'Deep cyber midnight & emerald green',
    preview: {
      bg: '#0D0F12',
      card: '#181B20',
      text: '#F3F4F6',
      accent: '#10B981',
      accentSecondary: '#34D399',
    }
  },
  {
    id: 'nordic',
    name: 'Nordic Frost',
    type: 'light',
    desc: 'Ice blue & sky blue accents',
    preview: {
      bg: '#F0F4F8',
      card: '#D9E2EC',
      text: '#102A43',
      accent: '#0284C7',
      accentSecondary: '#38BDF8',
    }
  },
  {
    id: 'tokyo',
    name: 'Tokyo Night',
    type: 'dark',
    desc: 'Neon violet & cyberpunk rose',
    preview: {
      bg: '#1A1B26',
      card: '#24283B',
      text: '#C0CAF5',
      accent: '#7AA2F7',
      accentSecondary: '#BB9AF7',
    }
  },
  {
    id: 'terracotta',
    name: 'Warm Sand',
    type: 'light',
    desc: 'Terracotta, clay & warm earth tones',
    preview: {
      bg: '#FDFBF7',
      card: '#F3EFE6',
      text: '#2C221E',
      accent: '#C85A32',
      accentSecondary: '#E06D53',
    }
  },
  {
    id: 'emerald',
    name: 'Forest Emerald',
    type: 'dark',
    desc: 'Deep forest green & mint glow',
    preview: {
      bg: '#0B1B16',
      card: '#152C24',
      text: '#E6F4ED',
      accent: '#10B981',
      accentSecondary: '#34D399',
    }
  },
  {
    id: 'solarized',
    name: 'Solarized Paper',
    type: 'light',
    desc: 'Warm paper & solar teal',
    preview: {
      bg: '#FDF6E3',
      card: '#EEE8D5',
      text: '#073642',
      accent: '#2AA198',
      accentSecondary: '#859900',
    }
  },
  {
    id: 'monochrome',
    name: 'Monochrome Pure',
    type: 'light',
    desc: 'High-contrast black & white',
    preview: {
      bg: '#FFFFFF',
      card: '#F0F0F0',
      text: '#000000',
      accent: '#171717',
      accentSecondary: '#404040',
    }
  }
];

export const ThemeCustomizer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState('default');
  const [filterType, setFilterType] = useState('all'); // 'all', 'light', 'dark'

  useEffect(() => {
    // Load theme from localStorage on mount
    const savedTheme = localStorage.getItem('yash_portfolio_theme') || 'default';
    applyTheme(savedTheme, false);
  }, []);

  const applyTheme = (themeId, triggerTransition = true) => {
    const validTheme = THEMES.some(t => t.id === themeId) ? themeId : 'default';
    setCurrentTheme(validTheme);
    localStorage.setItem('yash_portfolio_theme', validTheme);

    if (triggerTransition) {
      document.body.classList.add('theme-transition');
      setTimeout(() => {
        document.body.classList.remove('theme-transition');
      }, 450);
    }

    document.documentElement.setAttribute('data-theme', validTheme);
  };

  const filteredThemes = THEMES.filter(t => {
    if (filterType === 'light') return t.type === 'light';
    if (filterType === 'dark') return t.type === 'dark';
    return true;
  });

  return (
    <>
      {/* Floating Theme Launcher Trigger */}
      <motion.button
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 left-6 z-[80] bg-[#20221F] text-[#F7F5EF] p-3.5 rounded-full shadow-2xl border border-[#ECE9DF]/40 flex items-center gap-2.5 group focus:outline-none hover:border-[#8BCF5B] transition-all"
        style={{
          backgroundColor: 'var(--bg-dark)',
          color: 'var(--text-light)',
          borderColor: 'var(--border-color)',
        }}
        aria-label="Customize Color Theme"
        data-cursor="nav"
        data-cursor-label="THEME"
      >
        <div className="w-6 h-6 rounded-full flex items-center justify-center bg-[#8BCF5B]/20 text-[#8BCF5B] group-hover:rotate-45 transition-transform" style={{ color: 'var(--accent-lime)' }}>
          <Palette size={16} />
        </div>
        <span className="hidden sm:inline-block font-mono text-xs font-semibold tracking-wider pr-1">
          THEME
        </span>
      </motion.button>

      {/* Theme Selection Modal / Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-[90] bg-black/40 backdrop-blur-sm"
            />

            {/* Selector Drawer */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.98 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="fixed bottom-4 sm:bottom-6 left-4 right-4 sm:left-auto sm:right-6 z-[100] w-auto sm:w-[420px] max-h-[85vh] bg-[#F7F5EF] text-[#20221F] rounded-3xl border border-[#ECE9DF] shadow-2xl p-5 sm:p-6 flex flex-col overflow-hidden"
              style={{
                backgroundColor: 'var(--bg-main)',
                color: 'var(--text-main)',
                borderColor: 'var(--border-color)',
              }}
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between pb-4 border-b border-[#ECE9DF]" style={{ borderColor: 'var(--border-color)' }}>
                <div className="flex items-center gap-2">
                  <Sparkles size={18} className="text-[#8BCF5B]" style={{ color: 'var(--accent-lime)' }} />
                  <div>
                    <h3 className="font-display font-bold text-base tracking-tight">Theme Customizer</h3>
                    <p className="text-[11px] font-mono text-[#686C63]" style={{ color: 'var(--text-muted)' }}>
                      8 curated color palettes
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-full hover:bg-[#ECE9DF] transition-colors focus:outline-none"
                  style={{ backgroundColor: 'var(--bg-cream)' }}
                  aria-label="Close theme customizer"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Filter Tabs (All / Light / Dark) */}
              <div className="flex items-center gap-2 py-3">
                {['all', 'light', 'dark'].map((type) => (
                  <button
                    key={type}
                    onClick={() => setFilterType(type)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium uppercase transition-all ${
                      filterType === type
                        ? 'bg-[#20221F] text-[#F7F5EF]'
                        : 'bg-[#ECE9DF] text-[#686C63] hover:text-[#20221F]'
                    }`}
                    style={
                      filterType === type
                        ? { backgroundColor: 'var(--bg-dark)', color: 'var(--text-light)' }
                        : { backgroundColor: 'var(--bg-cream)', color: 'var(--text-muted)' }
                    }
                  >
                    {type}
                  </button>
                ))}

                {currentTheme !== 'default' && (
                  <button
                    onClick={() => applyTheme('default')}
                    className="ml-auto text-[11px] font-mono text-[#686C63] hover:text-[#20221F] flex items-center gap-1"
                    style={{ color: 'var(--text-muted)' }}
                    title="Reset to default theme"
                  >
                    <RefreshCw size={12} />
                    Reset
                  </button>
                )}
              </div>

              {/* Theme Swatch List */}
              <div className="overflow-y-auto space-y-3 pr-1 py-1 max-h-[50vh] no-scrollbar">
                {filteredThemes.map((t) => {
                  const isSelected = currentTheme === t.id;
                  return (
                    <motion.div
                      key={t.id}
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      onClick={() => applyTheme(t.id)}
                      className={`p-3.5 rounded-2xl border cursor-pointer transition-all flex items-center justify-between gap-3 ${
                        isSelected
                          ? 'border-[#8BCF5B] ring-2 ring-[#8BCF5B]/30 shadow-md'
                          : 'border-[#ECE9DF] hover:border-[#8BCF5B]/50'
                      }`}
                      style={{
                        backgroundColor: t.preview.bg,
                        borderColor: isSelected ? t.preview.accent : 'var(--border-color)',
                      }}
                    >
                      <div className="flex items-center gap-3">
                        {/* Visual Color Swatch */}
                        <div
                          className="w-10 h-10 rounded-xl p-1 shadow-inner border border-black/10 flex flex-col justify-between"
                          style={{ backgroundColor: t.preview.card }}
                        >
                          <div className="flex gap-1">
                            <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: t.preview.accent }} />
                            <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: t.preview.accentSecondary }} />
                          </div>
                          <div className="w-full h-1.5 rounded-full" style={{ backgroundColor: t.preview.text }} />
                        </div>

                        <div>
                          <div className="flex items-center gap-2">
                            <h4 className="font-display font-bold text-sm" style={{ color: t.preview.text }}>
                              {t.name}
                            </h4>
                            <span
                              className="text-[9px] font-mono uppercase px-1.5 py-0.5 rounded font-semibold"
                              style={{
                                backgroundColor: t.preview.card,
                                color: t.preview.text,
                                opacity: 0.8
                              }}
                            >
                              {t.type}
                            </span>
                          </div>
                          <p className="text-[11px] font-sans" style={{ color: t.preview.text, opacity: 0.7 }}>
                            {t.desc}
                          </p>
                        </div>
                      </div>

                      {/* Selected Indicator */}
                      <div
                        className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 transition-transform ${
                          isSelected ? 'scale-100' : 'scale-0'
                        }`}
                        style={{ backgroundColor: t.preview.accent, color: t.preview.bg }}
                      >
                        <Check size={14} strokeWidth={3} />
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Drawer Footer Note */}
              <div className="pt-3 mt-2 border-t border-[#ECE9DF] text-[10px] font-mono text-center text-[#686C63]" style={{ borderColor: 'var(--border-color)', color: 'var(--text-muted)' }}>
                Selection auto-saved to browser storage
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
