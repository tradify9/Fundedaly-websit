import React from 'react';

export default function GeometricDiamondBg() {
  return (
    /* Main Section - Isko transparent rakha hai taaki piche ka background backdrop block na ho */
    <section className="relative w-full min-h-screen bg-transparent overflow-hidden flex items-center">
      
      {/* ========================================================================= */}
      {/* BACKGROUND LAYER (Aapki image ka Diamond/Rhombus pattern yahan bg me hai) */}
      {/* ========================================================================= */}
      <div className="absolute inset-0 w-full h-full pointer-events-none select-none z-0">
        
        {/* SVG Container - Poori screen par smoothly fit hone ke liye */}
        <svg 
          className="absolute right-0 top-0 w-full md:w-[65%] h-full object-cover translate-x-12 translate-y-4 scale-105" 
          viewBox="0 0 500 700" 
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Group for all shapes, rotated to create the perfect diamond/rhombus flow */}
          <g transform="rotate(-40, 350, 350)">
            
            {/* --- WIREFRAME OUTLINES (Khali dappe jo lines dikha rahe hain) --- */}
            <g strokeWidth="2" fill="none" opacity="0.7">
              <rect x="180" y="50" width="90" height="90" stroke="#D35400" /> {/* Orange Outline Top */}
              <rect x="290" y="120" width="110" height="110" stroke="#6C3483" /> {/* Purple Outline */}
              <rect x="100" y="240" width="130" height="130" stroke="#E67E22" /> {/* Light Orange Mid */}
              <rect x="220" y="420" width="100" height="100" stroke="#BA4A00" /> {/* Brownish Outline */}
            </g>

            {/* --- SOLID COLORED OVERLAYS (Colored Squares with Transparency) --- */}
            {/* Opacity aur Multiply mix mode se waisa hi glassmorphism/transparent look aayega */}
            <g style={{ mixBlendMode: 'multiply' }}>
              
              {/* Top Soft Orange/Beige */}
              <rect x="250" y="-20" width="120" height="120" fill="#E59866" opacity="0.8" />
              <rect x="340" y="40" width="90" height="90" fill="#D5F5E3" opacity="0.5" />
              
              {/* Mid Brown/Khaki Square */}
              <rect x="260" y="150" width="125" height="125" fill="#9A7D0A" opacity="0.65" />
              
              {/* Vibrant Muted Purple */}
              <rect x="360" y="200" width="140" height="140" fill="#7D6608" opacity="0.4" />
              <rect x="330" y="290" width="120" height="120" fill="#7D3C98" opacity="0.5" />

              {/* Center Bright Orange Square */}
              <rect x="180" y="220" width="130" height="130" fill="#E74C3C" opacity="0.85" />
              
              {/* Center Large Slate Blue Square */}
              <rect x="160" y="370" width="145" height="145" fill="#5499C7" opacity="0.8" />
              
              {/* Big Bottom Dusty Pink/Purple Square */}
              <rect x="260" y="440" width="180" height="180" fill="#A16978" opacity="0.75" />
              
              {/* Bottom Corner Colors */}
              <rect x="120" y="540" width="100" height="100" fill="#E59866" opacity="0.8" />
              <rect x="280" y="620" width="130" height="130" fill="#6C3483" opacity="0.9" />
              <rect x="380" y="640" width="110" height="110" fill="#F39C12" opacity="0.95" />
              
            </g>
            
          </g>
        </svg>

        {/* Soft fading effect to blend into the left content white area */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-transparent to-transparent pointer-events-none" />
      </div>

      {/* ========================================================================= */}
      {/* FOREGROUND CONTENT LAYER (Iske upar aap apna text/buttons likhein) */}
      {/* ========================================================================= */}
      <div className="relative w-full max-w-7xl mx-auto px-8 md:px-16 z-10 pointer-events-auto">
        <div className="max-w-xl">
          <span className="text-xs font-bold uppercase tracking-widest text-orange-600 bg-orange-50 px-3 py-1 rounded-md">
            New Concept Art
          </span>
          <h1 className="text-5xl md:text-6xl font-black text-slate-800 mt-4 tracking-tight leading-none">
            Abstract <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-orange-500">
              Rhombus Overlay
            </span>
          </h1>
          <p className="mt-4 text-slate-600 text-base leading-relaxed">
            Yeh design ab aapke section ke background me perfectly chal raha hai. Aap shifts, text, inputs, ya cards iske upar bina kisi alignment issue ke daal sakte hain.
          </p>
          <div className="mt-8 flex items-center space-x-4">
            <button className="px-6 py-3 bg-slate-900 text-white font-medium rounded-xl shadow-lg hover:bg-slate-800 transition">
              Explore Portfolio
            </button>
            <button className="px-6 py-3 border border-slate-300 text-slate-700 font-medium rounded-xl hover:bg-slate-50 transition">
              View Analytics
            </button>
          </div>
        </div>
      </div>

    </section>
  );
}