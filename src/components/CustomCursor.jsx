import React, { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export const CustomCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [cursorState, setCursorState] = useState({ type: 'default', label: '' });
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    // Detect touch device
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      setIsTouchDevice(true);
      return;
    }

    document.body.classList.add('custom-cursor-enabled');

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseOver = (e) => {
      const target = e.target.closest('[data-cursor]');
      if (target) {
        const type = target.getAttribute('data-cursor');
        const label = target.getAttribute('data-cursor-label') || '';
        setCursorState({ type, label });
      } else if (e.target.closest('a, button, input, select, textarea, [role="button"]')) {
        setCursorState({ type: 'hover', label: '' });
      } else {
        setCursorState({ type: 'default', label: '' });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      document.body.classList.remove('custom-cursor-enabled');
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, [isVisible]);

  if (isTouchDevice || shouldReduceMotion || !isVisible) return null;

  const variants = {
    default: {
      width: 12,
      height: 12,
      backgroundColor: '#8BCF5B',
      border: '0px solid transparent',
      borderRadius: '50%',
    },
    hover: {
      width: 28,
      height: 28,
      backgroundColor: 'rgba(139, 207, 91, 0.25)',
      border: '1.5px solid #8BCF5B',
      borderRadius: '50%',
    },
    project: {
      width: 64,
      height: 64,
      backgroundColor: '#20221F',
      color: '#F7F5EF',
      border: '1px solid #8BCF5B',
      borderRadius: '50%',
    },
    nav: {
      width: 52,
      height: 52,
      backgroundColor: '#C9F36B',
      color: '#20221F',
      borderRadius: '50%',
    },
    think: {
      width: 60,
      height: 60,
      backgroundColor: '#FF8A65',
      color: '#20221F',
      borderRadius: '50%',
    }
  };

  const getLabel = () => {
    if (cursorState.label) return cursorState.label;
    if (cursorState.type === 'project') return 'VIEW';
    if (cursorState.type === 'nav') return 'OPEN';
    if (cursorState.type === 'think') return 'THINK';
    return '';
  };

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] flex items-center justify-center font-sans text-[10px] font-bold tracking-wider uppercase select-none shadow-sm"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        translateX: '-50%',
        translateY: '-50%',
      }}
      animate={cursorState.type in variants ? cursorState.type : 'default'}
      variants={variants}
      transition={{ type: 'spring', damping: 28, stiffness: 350, mass: 0.5 }}
    >
      {getLabel()}
    </motion.div>
  );
};
