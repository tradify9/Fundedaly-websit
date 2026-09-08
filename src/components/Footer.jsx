import React from 'react';

export default function Footer({ setCurrentPage }) {
 

  return (
    <footer className="bg-neutral-950 border-t border-neutral-900 text-neutral-400 py-16 px-6 relative overflow-hidden">

      {/* 3D ISOMETRIC FLOATING DIAMOND ARCHITECTURE MATRIX */}
      <style dangerouslySetInnerHTML={{
        __html: `
        .isometric-diamond-bg {
          background-color: #0a0a0a;
          background-image: 
            linear-gradient(30deg, #161616 12%, transparent 12.5%, transparent 87%, #161616 87.5%, #161616),
            linear-gradient(150deg, #161616 12%, transparent 12.5%, transparent 87%, #161616 87.5%, #161616),
            linear-gradient(30deg, #161616 12%, transparent 12.5%, transparent 87%, #161616 87.5%, #161616),
            linear-gradient(150deg, #161616 12%, transparent 12.5%, transparent 87%, #161616 87.5%, #161616),
            linear-gradient(60deg, #1f1f1f 25%, transparent 25.5%, transparent 75%, #1f1f1f 75.5%, #1f1f1f),
            linear-gradient(60deg, #1f1f1f 25%, transparent 25.5%, transparent 75%, #1f1f1f 75.5%, #1f1f1f);
          background-size: 40px 70px;
          background-position: 0 0, 0 0, 20px 35px, 20px 35px, 0 0, 20px 35px;
        }
      `}} />

      {/* ISOMETRIC MESH OVERLAY */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-25 isometric-diamond-bg"></div>

      {/* GRADIENT SHADOW FADER (Sleek dark masking setup) */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-b from-neutral-950 via-transparent to-neutral-950"></div>
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-[#00cc00]/5 rounded-full blur-[120px] pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto relative z-10 space-y-12">

        {/* TOP BRAND AND NAVIGATION ROW GRID */}
       <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-neutral-900/60 bg-neutral-950 p-6 sm:p-12">

      {/* Brand Concept Segment */}
      <div className="md:col-span-4 space-y-4">
        <div className="flex items-center gap-3">
          {/* Floating Diamond Block Token */}
          <div className="relative w-8 h-8 flex items-center justify-center shrink-0">
            <div className="absolute inset-0 bg-[#00cc00]/20 rounded-md transform rotate-45 border border-[#00cc00] animate-pulse"></div>
            <div className="absolute w-4 h-4 bg-[#00cc00] rounded-sm transform rotate-45 shadow-lg shadow-[#00cc00]/50"></div>
          </div>
          <h4 className="text-white font-black text-xl uppercase tracking-tighter">
            Funded<span className="text-[#00cc00]">aly</span>
          </h4>
        </div>
        
        <p className="text-xs text-neutral-500 font-medium leading-relaxed max-w-sm">
          Next-generation algorithmic live prediction backing mechanics. Dive into dynamic live odds, scale analysis tools, and maximize trading liquidity channels seamlessly.
        </p>

        {/* Social System Connect Links */}
        <div className="flex items-center space-x-3 pt-2">
          <a href="https://x.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-xl bg-neutral-900 border border-neutral-800/80 flex items-center justify-center text-neutral-400 hover:text-white hover:border-neutral-700 hover:scale-105 transition-all text-xs text-decoration-none">
            <i className="bi bi-twitter-x"></i>
          </a>
          <a href="https://discord.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-xl bg-neutral-900 border border-neutral-800/80 flex items-center justify-center text-neutral-400 hover:text-white hover:border-neutral-700 hover:scale-105 transition-all text-xs text-decoration-none">
            <i className="bi bi-discord"></i>
          </a>
          <a href="https://t.me" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-xl bg-neutral-900 border border-neutral-800/80 flex items-center justify-center text-neutral-400 hover:text-white hover:border-neutral-700 hover:scale-105 transition-all text-xs text-decoration-none">
            <i className="bi bi-telegram"></i>
          </a>
        </div>
      </div>

      {/* Navigation Column 1 */}
      <div className="md:col-span-2 space-y-4 text-left">
        <h5 className="text-[10px] font-mono font-black tracking-widest text-[#00cc00] uppercase m-0">
          // HUB GATEWAYS
        </h5>
        <ul className="space-y-2.5 text-xs font-bold text-neutral-500 list-none p-0 m-0">
          <li>
            <a href="/live-markets" className="text-neutral-400 hover:text-white text-decoration-none transition-colors uppercase font-mono tracking-wide block">
              Live Markets
            </a>
          </li>
          <li>
            <a href="/dashboard" className="text-neutral-400 hover:text-white text-decoration-none transition-colors uppercase font-mono tracking-wide block">
              Dashboard
            </a>
          </li>
          <li>
            <a href="/analytics" className="text-neutral-400 hover:text-white text-decoration-none transition-colors uppercase font-mono tracking-wide block">
              Smart Analytics
            </a>
          </li>
        </ul>
      </div>

      {/* Navigation Column 2 */}
      <div className="md:col-span-2 space-y-4 text-left">
        <h5 className="text-[10px] font-mono font-black tracking-widest text-[#00cc00] uppercase m-0">
          // REGULATORY
        </h5>
        <ul className="space-y-2.5 text-xs font-bold text-neutral-500 list-none p-0 m-0">
          <li>
            <a href="/PrivacyPolicy" className="text-neutral-400 hover:text-white text-decoration-none transition-colors uppercase font-mono tracking-wide block">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="/ReportCover" className="text-neutral-400 hover:text-white text-decoration-none transition-colors uppercase font-mono tracking-wide block">
              ReportCover
            </a>
          </li>
          <li>
            <a href="/rules" className="text-neutral-400 hover:text-white text-decoration-none transition-colors uppercase font-mono tracking-wide block">
              Trading Rules
            </a>
          </li>
        </ul>
      </div>

      {/* Premium Newsletter Box Callout Panel */}
      <div className="md:col-span-4 space-y-4 text-left">
        <h5 className="text-[10px] font-mono font-black tracking-widest text-neutral-400 uppercase m-0">
          Subscribe to Updates
        </h5>
        <p className="text-xs text-neutral-500 font-medium leading-relaxed">
          Get the latest alpha odds, data alerts, and system updates directly inside your inbox.
        </p>
        <div className="flex items-center gap-2 bg-neutral-900/90 border border-neutral-800 p-1.5 rounded-xl backdrop-blur-sm">
          <input
            type="email"
            placeholder="Enter email address"
            className="bg-transparent border-0 outline-none text-xs text-white px-3 py-1.5 w-full font-medium placeholder-neutral-600 focus:ring-0"
          />
          <button className="bg-[#00cc00] hover:bg-[#00aa00] text-neutral-950 font-mono text-[10px] font-black uppercase tracking-wider px-4 py-2 rounded-lg transition-all shrink-0 border-0 cursor-pointer">
            Join
          </button>
        </div>
      </div>

    </div>

        {/* BOTTOM METADATA & SYSTEM MONITOR STATUS ROW */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
          <div className="space-y-1">
            <p className="text-xs font-mono font-bold text-neutral-500 uppercase tracking-wide">
              © 2026 Fundedaly. A property of Protech FZE LLC.
            </p>
            <p className="text-[10px] text-neutral-600 font-medium">
              Powered by Premium Isometric Matrix Architecture Layout. Seamless Integration Hook.
            </p>
          </div>

          {/* Status Hex-Node Indicator */}
          <div className="flex items-center gap-2.5 bg-neutral-900/40 border border-neutral-800/60 px-3.5 py-2 rounded-xl">
            <div className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00cc00] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00cc00]"></span>
            </div>
            <span className="text-[10px] font-mono font-black text-neutral-400 uppercase tracking-widest">
              Secure Terminal Encrypted
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}