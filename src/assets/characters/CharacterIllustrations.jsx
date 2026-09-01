import React from 'react';

/**
 * Editorial SVG Fictional Characters:
 * - Character A: Yash / Builder at Thinking Desk (laptop, code nodes, sketch diagrams)
 * - Character B: Business Owner (analyzing problem nodes, strategy metrics)
 * - Character C: Marketing & Communication Strategist (connecting audience with message)
 */

export const CharacterBuilder = ({ className = "w-full max-w-md h-auto" }) => {
  return (
    <svg viewBox="0 0 500 400" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="deskGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ECE9DF" />
          <stop offset="100%" stopColor="#E2DEC9" />
        </linearGradient>
        <linearGradient id="screenGlow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#C9F36B" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#8BCF5B" stopOpacity="0.1" />
        </linearGradient>
      </defs>
      
      {/* Background Soft Shadow Circle */}
      <circle cx="250" cy="200" r="160" fill="#ECE9DF" opacity="0.5" />

      {/* Desk */}
      <rect x="70" y="270" width="360" height="12" rx="6" fill="url(#deskGrad)" />
      <rect x="90" y="282" width="12" height="70" fill="#D3CEBF" />
      <rect x="390" y="282" width="12" height="70" fill="#D3CEBF" />

      {/* Laptop & Screen */}
      <rect x="180" y="190" width="140" height="80" rx="6" fill="#20221F" />
      <rect x="186" y="196" width="128" height="68" rx="4" fill="#141513" />
      <rect x="186" y="196" width="128" height="68" rx="4" fill="url(#screenGlow)" />
      
      {/* Minimal Code Lines on Laptop */}
      <line x1="196" y1="208" x2="240" y2="208" stroke="#8BCF5B" strokeWidth="3" strokeLinecap="round" />
      <line x1="246" y1="208" x2="280" y2="208" stroke="#686C63" strokeWidth="3" strokeLinecap="round" />
      <line x1="206" y1="218" x2="260" y2="218" stroke="#ECE9DF" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="206" y1="226" x2="290" y2="226" stroke="#FF8A65" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="196" y1="236" x2="230" y2="236" stroke="#8BCF5B" strokeWidth="3" strokeLinecap="round" />
      <rect x="150" y="270" width="200" height="6" rx="3" fill="#D3CEBF" />

      {/* Character Figure (Mature Editorial Silhouette) */}
      {/* Head */}
      <circle cx="250" cy="115" r="24" fill="#20221F" />
      <path d="M 234 110 Q 250 90 266 110 Q 250 120 234 110 Z" fill="#686C63" opacity="0.3" />
      
      {/* Torso & Shoulders */}
      <path d="M 205 190 Q 210 150 250 148 Q 290 150 295 190 Z" fill="#20221F" />
      {/* Soft Sweater Layer */}
      <path d="M 220 190 Q 225 156 250 154 Q 275 156 280 190 Z" fill="#323630" />
      
      {/* Thinking Glasses & Subtle Facial Geometry */}
      <circle cx="242" cy="115" r="6" stroke="#8BCF5B" strokeWidth="1.5" fill="none" />
      <circle cx="258" cy="115" r="6" stroke="#8BCF5B" strokeWidth="1.5" fill="none" />
      <line x1="248" y1="115" x2="252" y2="115" stroke="#8BCF5B" strokeWidth="1.5" />

      {/* Floating Diagram Nodes (Thinking Process Visuals) */}
      {/* Node 1: Code */}
      <g className="animate-pulse">
        <circle cx="120" cy="130" r="22" fill="#F7F5EF" stroke="#8BCF5B" strokeWidth="2" />
        <text x="120" y="134" textAnchor="middle" fill="#20221F" fontSize="10" fontFamily="Space Grotesk" fontWeight="600">&lt;code&gt;</text>
      </g>

      {/* Node 2: Business Problem */}
      <g>
        <circle cx="380" cy="120" r="26" fill="#F7F5EF" stroke="#FF8A65" strokeWidth="2" />
        <text x="380" y="124" textAnchor="middle" fill="#20221F" fontSize="10" fontFamily="Space Grotesk" fontWeight="600">why?</text>
      </g>

      {/* Node 3: Strategy */}
      <g>
        <rect x="310" y="60" width="70" height="28" rx="14" fill="#C9F36B" />
        <text x="345" y="77" textAnchor="middle" fill="#20221F" fontSize="9" fontFamily="Space Grotesk" fontWeight="700">market</text>
      </g>

      {/* Connecting Dotted Vector Lines */}
      <path d="M 142 130 C 180 130, 200 115, 226 115" stroke="#8BCF5B" strokeWidth="1.5" strokeDasharray="4 4" fill="none" />
      <path d="M 354 120 C 310 120, 290 115, 274 115" stroke="#FF8A65" strokeWidth="1.5" strokeDasharray="4 4" fill="none" />
      <path d="M 345 88 L 345 110" stroke="#686C63" strokeWidth="1.5" strokeDasharray="3 3" fill="none" />
    </svg>
  );
};

export const CharacterBusinessOwner = ({ className = "w-full max-w-sm h-auto" }) => {
  return (
    <svg viewBox="0 0 400 350" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="200" cy="175" r="140" fill="#ECE9DF" opacity="0.4" />
      
      {/* Business Owner Figure */}
      <circle cx="200" cy="110" r="26" fill="#20221F" />
      <path d="M 155 190 Q 160 146 200 144 Q 240 146 245 190 Z" fill="#20221F" />
      <path d="M 175 190 L 200 156 L 225 190 Z" fill="#ECE9DF" opacity="0.8" />

      {/* Desk & Analytics Board */}
      <rect x="60" y="190" width="280" height="8" rx="4" fill="#20221F" />
      
      {/* Visual Chart Nodes */}
      <rect x="90" y="210" width="100" height="70" rx="8" fill="#F7F5EF" stroke="#686C63" strokeWidth="1.5" />
      <line x1="110" y1="260" x2="130" y2="235" stroke="#FF8A65" strokeWidth="3" strokeLinecap="round" />
      <line x1="130" y1="235" x2="150" y2="250" stroke="#FF8A65" strokeWidth="3" strokeLinecap="round" />
      <line x1="150" y1="250" x2="170" y2="225" stroke="#8BCF5B" strokeWidth="3" strokeLinecap="round" />

      <rect x="210" y="210" width="100" height="70" rx="8" fill="#F7F5EF" stroke="#686C63" strokeWidth="1.5" />
      <circle cx="260" cy="245" r="18" fill="none" stroke="#20221F" strokeWidth="3" />
      <path d="M 260 245 L 260 227 A 18 18 0 0 1 278 245 Z" fill="#8BCF5B" />

      <text x="200" y="60" textAnchor="middle" fill="#686C63" fontSize="11" fontFamily="Space Grotesk" fontWeight="500">"What are we actually solving?"</text>
    </svg>
  );
};

export const CharacterMarketingStrategist = ({ className = "w-full max-w-sm h-auto" }) => {
  return (
    <svg viewBox="0 0 400 350" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="200" cy="175" r="140" fill="#ECE9DF" opacity="0.4" />
      
      {/* Strategist Figure */}
      <circle cx="200" cy="105" r="24" fill="#20221F" />
      <path d="M 160 180 Q 165 140 200 138 Q 235 140 240 180 Z" fill="#686C63" />
      
      {/* Connected Audience Nodes */}
      <circle cx="100" cy="100" r="18" fill="#C9F36B" />
      <text x="100" y="104" textAnchor="middle" fill="#20221F" fontSize="9" fontFamily="Space Grotesk" fontWeight="700">Audience</text>

      <circle cx="300" cy="100" r="18" fill="#FF8A65" />
      <text x="300" y="104" textAnchor="middle" fill="#20221F" fontSize="9" fontFamily="Space Grotesk" fontWeight="700">Value</text>

      <path d="M 118 100 L 176 105" stroke="#20221F" strokeWidth="1.5" strokeDasharray="3 3" />
      <path d="M 224 105 L 282 100" stroke="#20221F" strokeWidth="1.5" strokeDasharray="3 3" />

      <rect x="130" y="200" width="140" height="45" rx="22.5" fill="#20221F" />
      <text x="200" y="227" textAnchor="middle" fill="#F7F5EF" fontSize="11" fontFamily="Space Grotesk" fontWeight="600">The Message</text>
    </svg>
  );
};
