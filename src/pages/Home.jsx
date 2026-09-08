import React, { useState } from "react";

export default function Home({ setCurrentPage }) {
  // Toggle State for switching between One Step and Two Step plans
  const [stepFilter, setStepFilter] = useState("one-step");
  return (
    <>
      <section>
        <div className="relative min-h-screen bg-[#ffffff] text-neutral-800 font-sans overflow-hidden flex flex-col justify-between ">

          {/* ─── 1. NEON GREEN ARC GRID (LIGHT MODE WITH #00cc00) ─── */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[180vw] md:w-[130vw] lg:w-[110vw] h-[65vh] md:h-[75vh] bg-gradient-to-b from-[#00cc00]/10 via-[#00cc00]/5 to-transparent rounded-b-[100%] border-b border-[#00cc00]/20 z-0 pointer-events-none select-none">

            {/* #00cc00 Glow Accent on the curve line */}
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#00cc00]/60 to-transparent shadow-[0_1px_30px_rgba(0,204,0,0.5)]"></div>

            {/* Cyber Grid Pattern Inside the Arc */}
            <div
              className="absolute inset-0 opacity-[0.06] rounded-b-[100%]"
              style={{
                backgroundImage: `linear-gradient(#00cc00 1px, transparent 1px), linear-gradient(90deg, #00cc00 1px, transparent 1px)`,
                backgroundSize: '45px 45px',
                backgroundPosition: 'center top'
              }}
            ></div>

            {/* Core Radial Green Center Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center_top,_var(--tw-gradient-stops))] from-[#00cc00]/15 via-transparent to-transparent filter blur-[90px]"></div>
          </div>

          {/* Side Aura Ambient Lights */}
          <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-[#00cc00]/5 rounded-full filter blur-[100px] pointer-events-none"></div>
          <div className="absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-[#00cc00]/5 rounded-full filter blur-[100px] pointer-events-none"></div>

          {/* ─── 2. MAIN HERO BODY (UPDATED WITH FUNDEDALY CONTENT) ─── */}
          <main className="relative z-10 max-w-5xl mx-auto text-center px-6 pt-20 md:pt-28 flex-1 flex flex-col items-center justify-center">

            {/* Dynamic Professional Badge */}
            <div className="inline-flex items-center gap-2 bg-white/80 border border-neutral-200/80 rounded-full px-4 py-1 mb-8 shadow-sm backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00cc00] animate-pulse"></span>
              <span className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase">Live Funding Program:</span>
              <span className="text-[10px] font-bold text-neutral-900 tracking-wider uppercase">
                Up to $200K Real Capital
              </span>
            </div>

            {/* Ultra Bold Clean Heading (YOUR EDGE. Our Capital. YOUR PROFIT.) */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight leading-[1.1] max-w-4xl text-neutral-900 uppercase">
              YOUR EDGE. <br className="md:hidden" />
              <span className="font-extrabold text-neutral-400">Our Capital.</span> <br />
              <span className="font-black bg-gradient-to-r from-neutral-900 via-neutral-800 to-[#00cc00] bg-clip-text text-transparent drop-shadow-[0_2px_15px_rgba(0,204,0,0.1)]">
                YOUR PROFIT.
              </span>
            </h1>

            {/* Crisp Description (FundedAly core value proposition) */}
            <p className="mt-8 text-neutral-600 text-sm md:text-base lg:text-lg max-w-2xl leading-relaxed tracking-wide">
              <strong className="text-neutral-900 font-bold">FundedAly</strong> backs disciplined traders with up to $200K in real capital. Pass the challenge, trade with freedom, and keep up to <span className="text-neutral-950 font-black underline decoration-[#00cc00] decoration-2">90% of your profits</span>.
            </p>

            {/* Button Layout (Get Funded CTA) */}
            <div className="mt-10 flex flex-row justify-center gap-4 relative z-20 w-full sm:w-auto">
              <button className="w-full sm:w-auto bg-[#00cc00] hover:bg-[#00b300] text-black font-black px-8 py-4 rounded-xl text-xs uppercase tracking-widest transition-all duration-300 shadow-lg shadow-[#00cc00]/20 hover:shadow-[#00cc00]/40 transform active:scale-95">
                Get Funded
              </button>
            </div>
          </main>

          {/* ─── 3. ADVANCED TRADING TERMINAL MOCKUP WITH GRAPH (DARK MODE GLASS) ─── */}
          <div className="relative z-10 max-w-4xl w-full mx-auto px-6 mt-16 md:mt-20 pointer-events-none select-none">

            {/* Floating Neon Green & Purple Ambient Glows */}
            <div className="absolute top-[-50px] right-24 w-40 h-40 bg-[#00cc00]/15 filter blur-3xl rounded-full animate-pulse duration-[6000ms]"></div>
            <div className="absolute bottom-[-20px] left-12 w-36 h-36 bg-purple-600/15 filter blur-3xl rounded-full animate-pulse duration-[8000ms]"></div>

            {/* Main Terminal Box */}
            <div className="w-full h-auto bg-neutral-950/80 border border-white/10 rounded-t-xl shadow-[0_-20px_50px_rgba(0,0,0,0.6)] p-4 md:p-6 backdrop-blur-2xl relative">

              {/* Header Controls & Status */}
              <div className="flex justify-between items-center mb-5 border-b border-white/5 pb-3">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/70"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#00cc00]/70"></div>
                </div>
                <div className="text-[11px] font-mono text-neutral-400 tracking-widest flex items-center gap-2">
                  <span>FUNDEDALY_TERMINAL.sh</span>
                  <span className="text-neutral-600">|</span>
                  <span className="text-[#00cc00] animate-pulse flex items-center gap-1">
                    <span className="inline-block w-1.5 h-1.5 bg-[#00cc00] rounded-full"></span> LIVE_MARKET
                  </span>
                </div>
                <div className="text-[10px] font-mono text-neutral-500 hidden sm:block">VOL: $4.2B</div>
              </div>

              {/* Live Trading Layout */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-[12px]">

                {/* Column 1 & 2: Main Trading Graph Panel */}
                <div className="md:col-span-2 flex flex-col justify-between border-r border-white/5 pr-0 md:pr-4 h-[180px] md:h-[220px]">
                  <div className="flex justify-between items-center mb-2">
                    <div className="text-neutral-400 text-[11px] font-bold uppercase tracking-wider">BTC / USDT 1m Chart</div>
                    <div className="text-[#00cc00] text-[11px] font-bold bg-[#00cc00]/10 px-2 py-0.5 rounded border border-[#00cc00]/20">67,410.25 (+2.4%)</div>
                  </div>

                  {/* Real SVG Graph Area */}
                  <div className="w-full flex-1 relative min-h-[100px] mt-2">
                    {/* Graph Grid Lines */}
                    <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-20">
                      <div className="w-full border-b border-white/10 h-0"></div>
                      <div className="w-full border-b border-white/10 h-0"></div>
                      <div className="w-full border-b border-white/10 h-0"></div>
                      <div className="w-full border-b border-white/10 h-0"></div>
                    </div>

                    {/* SVG Trend Line */}
                    <svg className="w-full h-full overflow-visible" viewBox="0 0 300 100" preserveAspectRatio="none">
                      <defs>
                        {/* Gradient for area under the curve */}
                        <linearGradient id="chart-gradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#00cc00" stopOpacity="0.25" />
                          <stop offset="100%" stopColor="#00cc00" stopOpacity="0.0" />
                        </linearGradient>
                      </defs>
                      {/* Fill Path */}
                      <path d="M 0,90 Q 30,70 60,85 T 120,40 T 180,60 T 240,20 T 300,30 L 300,100 L 0,100 Z" fill="url(#chart-gradient)" />
                      {/* Stroke Line */}
                      <path d="M 0,90 Q 30,70 60,85 T 120,40 T 180,60 T 240,20 T 300,30" fill="none" stroke="#00cc00" strokeWidth="2" strokeLinecap="round" />
                      {/* Live Pulsing Price Dot */}
                      <circle cx="300" cy="30" r="3" fill="#00cc00" className="animate-ping origin-center" />
                      <circle cx="300" cy="30" r="2" fill="#00cc00" />
                    </svg>
                  </div>

                  {/* Volume Bars at the Bottom of Graph */}
                  <div className="h-8 w-full flex items-end gap-[3px] opacity-40 mt-2 border-t border-white/5 pt-1">
                    <div className="w-full h-3 bg-[#00cc00] rounded-t-[1px]"></div>
                    <div className="w-full h-5 bg-[#00cc00] rounded-t-[1px]"></div>
                    <div className="w-full h-2 bg-red-500 rounded-t-[1px]"></div>
                    <div className="w-full h-4 bg-[#00cc00] rounded-t-[1px]"></div>
                    <div className="w-full h-6 bg-[#00cc00] rounded-t-[1px]"></div>
                    <div className="w-full h-8 bg-red-500 rounded-t-[1px]"></div>
                    <div className="w-full h-5 bg-[#00cc00] rounded-t-[1px]"></div>
                    <div className="w-full h-7 bg-[#00cc00] rounded-t-[1px]"></div>
                  </div>
                </div>

                {/* Column 3: Order Book */}
                <div className="space-y-3 flex flex-col justify-between h-[180px] md:h-[220px]">
                  <div>
                    <div className="text-neutral-500 text-[10px] uppercase tracking-wider mb-2">Live Order Book</div>

                    {/* Asks (Sells) */}
                    <div className="space-y-1">
                      <div className="flex justify-between text-red-400/80 text-[11px] bg-red-500/5 p-1 rounded border border-red-500/10">
                        <span>67,420.50</span>
                        <span className="text-neutral-400">1.45 BTC</span>
                      </div>
                      <div className="flex justify-between text-red-400/80 text-[11px] p-1">
                        <span>67,415.00</span>
                        <span className="text-neutral-500">0.82 BTC</span>
                      </div>
                    </div>
                  </div>

                  {/* Current Mid Price */}
                  <div className="py-1 border-y border-white/5 text-center my-1">
                    <span className="text-white font-bold text-[13px] tracking-wide animate-pulse">67,410.25</span>
                    <span className="text-[9px] text-[#00cc00] ml-1">▲</span>
                  </div>

                  {/* Bids (Buys) */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-[#00cc00]/80 text-[11px] p-1">
                      <span>67,405.10</span>
                      <span className="text-neutral-500">2.11 BTC</span>
                    </div>
                    <div className="flex justify-between text-[#00cc00]/80 text-[11px] bg-[#00cc00]/5 p-1 rounded border border-[#00cc00]/10">
                      <span>67,398.00</span>
                      <span className="text-neutral-400">0.95 BTC</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Internal Top Edge Glass Reflection Line */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent"></div>
            </div>
          </div>

        </div>
      </section>

      <section className="relative bg-[#ffffff] text-neutral-800 font-sans py-24 px-6 overflow-hidden">

        {/* ── TRADING PATTERN BACKGROUND ELEMENTS (DARKER MODE) ── */}

        {/* Professional Grid Backdrop - Darkened (Opacity badhayi: from 03 to 10) */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000010_1px,transparent_1px),linear-gradient(to_bottom,#00000010_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

        {/* Abstract Trading Chart Lines - Darkened (Opacity badhayi: from 0.06 to 0.20) */}
        <svg className="absolute top-12 left-0 w-full h-[60vh] opacity-[0.20] pointer-events-none stroke-neutral-900 fill-none" viewBox="0 0 1440 400">
          <path d="M0,200 L150,180 L250,260 L400,120 L550,190 L700,90 L900,230 L1100,140 L1250,290 L1440,180" strokeWidth="2" />
          <path d="M0,250 L200,210 L350,310 L500,150 L650,280 L800,110 L1000,290 L1200,190 L1440,320" strokeWidth="1.5" strokeDasharray="4 4" />
          {/* Micro Candlestick Vectors - Darkened (Fill opacity badhayi) */}
          <rect x="145" y="160" width="10" height="40" className="fill-neutral-900/25 stroke-none" />
          <line x1="150" y1="140" x2="150" y2="220" className="stroke-neutral-600" />
          <rect x="395" y="100" width="10" height="50" className="fill-neutral-900/25 stroke-none" />
          <line x1="400" y1="80" x2="400" y2="170" className="stroke-neutral-600" />
          <rect x="695" y="70" width="10" height="40" className="fill-neutral-900/25 stroke-none" />
          <line x1="700" y1="50" x2="700" y2="130" className="stroke-neutral-600" />
        </svg>

        {/* Top Green Arc Glow - Darkened/Vibrant (Opacity badhayi: from 5 to 15) */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100vw] h-[35vh] bg-gradient-to-b from-[#00cc00]/15 to-transparent rounded-b-[100%] pointer-events-none filter blur-3xl"></div>

        <div className="max-w-7xl mx-auto relative z-10 text-center">

          {/* Top Badges / Sub-headline */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-6 mb-4 text-xs font-mono uppercase tracking-widest text-neutral-500">
            <span>Broker Backed</span>
            <span className="text-[#00cc00] font-bold">•</span>
            <span>No Time Limit</span>
            <span className="text-[#00cc00] font-bold">•</span>
            <span>Up to $2,000,000 in Sim Capital</span>
          </div>

          {/* Section Heading */}
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-neutral-900 uppercase mb-12">
            Choose Your Path to <span className="bg-gradient-to-r from-neutral-900 to-[#00cc00] bg-clip-text text-transparent">Funding</span>
          </h2>

          {/* Step Toggles */}
          <div className="inline-flex p-1 bg-neutral-100 rounded-xl mb-16 border border-neutral-200 shadow-sm">
            <button
              onClick={() => setStepFilter('one-step')}
              className={`px-6 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${stepFilter === 'one-step' ? 'bg-neutral-950 text-white shadow-md' : 'text-neutral-500 hover:text-neutral-900'}`}
            >
              One Step
            </button>
            <button
              onClick={() => setStepFilter('two-step')}
              className={`px-6 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${stepFilter === 'two-step' ? 'bg-neutral-950 text-white shadow-md' : 'text-neutral-500 hover:text-neutral-900'}`}
            >
              Two Step
            </button>
          </div>

          {/* Section Secondary Title */}
          <p className="text-xs font-mono tracking-widest uppercase text-neutral-400 mb-8">
            Choose Your Account Size
          </p>

          {/* ─── CONDITIONAL CARDS GRID DISPLAY ─── */}

          {/* ONE STEP CONTENT */}
          {stepFilter === 'one-step' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">

              {/* CARD 1: $10K Starter */}
              <div className="relative bg-white/80 backdrop-blur-md border border-neutral-200/80 rounded-2xl p-6 md:p-8 transition-all duration-300 hover:border-neutral-300 hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between shadow-sm">
                <div>
                  <div className="flex justify-between items-baseline mb-4">
                    <h3 className="text-3xl md:text-4xl font-black text-neutral-900 tracking-tight">$10K</h3>
                    <div className="text-right">
                      <span className="text-2xl font-black text-neutral-900">$99</span>
                      <p className="text-[10px] text-neutral-400 font-mono uppercase tracking-tighter">one-time fee</p>
                    </div>
                  </div>
                  <p className="text-xs font-mono uppercase text-[#00a300] font-bold tracking-wide mb-6 pb-4 border-b border-neutral-100">Starter Account</p>
                  <ul className="space-y-3.5 mb-8 text-sm font-medium text-neutral-600 list-none p-0">
                    <li className="flex justify-between"><span className="text-neutral-400">Profit Target</span><span className="text-neutral-900 font-bold">10%</span></li>
                    <li className="flex justify-between"><span className="text-neutral-400">Daily Drawdown</span><span className="text-neutral-900 font-bold">5%</span></li>
                    <li className="flex justify-between"><span className="text-neutral-400">Max Drawdown</span><span className="text-neutral-900 font-bold">10%</span></li>
                    <li className="flex justify-between"><span className="text-neutral-400">Profit Split</span><span className="text-[#00a300] font-black">80%</span></li>
                    <li className="flex justify-between"><span className="text-neutral-400">Payout Cycle</span><span className="text-neutral-900 font-semibold">Bi-Weekly</span></li>
                    <li className="flex justify-between"><span className="text-neutral-400">Trading Assets</span><span className="text-neutral-900 font-semibold">All Instruments</span></li>
                  </ul>
                </div>
                <button className="w-full py-3.5 rounded-xl font-black text-xs uppercase tracking-widest transition-all duration-200 bg-neutral-900 text-white hover:bg-black active:scale-[0.98] cursor-pointer shadow-sm">
                  Start Challenge
                </button>
              </div>

              {/* CARD 2: $50K Pro (Recommended) */}
              <div className="relative bg-white border-2 border-[#00cc00] rounded-2xl p-6 md:p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between shadow-md shadow-[#00cc00]/5 ring-1 ring-[#00cc00]/20">
                <span className="absolute -top-3 left-6 bg-[#00cc00] text-black font-black text-[10px] tracking-widest uppercase px-3 py-1 rounded-md shadow-sm">Recommended</span>
                <div>
                  <div className="flex justify-between items-baseline mb-4">
                    <h3 className="text-3xl md:text-4xl font-black text-neutral-900 tracking-tight">$50K</h3>
                    <div className="text-right">
                      <span className="text-2xl font-black text-neutral-900">$199</span>
                      <p className="text-[10px] text-neutral-400 font-mono uppercase tracking-tighter">one-time fee</p>
                    </div>
                  </div>
                  <p className="text-xs font-mono uppercase text-[#00a300] font-bold tracking-wide mb-6 pb-4 border-b border-neutral-100">Pro Account</p>
                  <ul className="space-y-3.5 mb-8 text-sm font-medium text-neutral-700 list-none p-0">
                    <li className="flex justify-between"><span className="text-neutral-400">Profit Target</span><span className="text-neutral-900 font-bold">10%</span></li>
                    <li className="flex justify-between"><span className="text-neutral-400">Daily Drawdown</span><span className="text-neutral-900 font-bold">5%</span></li>
                    <li className="flex justify-between"><span className="text-neutral-400">Max Drawdown</span><span className="text-neutral-900 font-bold">10%</span></li>
                    <li className="flex justify-between"><span className="text-neutral-400">Profit Split</span><span className="text-[#00a300] font-black">85%</span></li>
                    <li className="flex justify-between"><span className="text-neutral-400">Payout Cycle</span><span className="text-neutral-900 font-semibold">Weekly Payouts</span></li>
                    <li className="flex justify-between"><span className="text-neutral-400">Trading Assets</span><span className="text-neutral-900 font-semibold">All Instruments</span></li>
                  </ul>
                </div>
                <button className="w-full py-3.5 rounded-xl font-black text-xs uppercase tracking-widest transition-all duration-200 bg-[#00cc00] hover:bg-[#00b300] text-black shadow-lg shadow-[#00cc00]/10 active:scale-[0.98] cursor-pointer">
                  Start Challenge
                </button>
              </div>

              {/* CARD 3: $100K Elite */}
              <div className="relative bg-white/80 backdrop-blur-md border border-neutral-200/80 rounded-2xl p-6 md:p-8 transition-all duration-300 hover:border-neutral-300 hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between shadow-sm">
                <div>
                  <div className="flex justify-between items-baseline mb-4">
                    <h3 className="text-3xl md:text-4xl font-black text-neutral-900 tracking-tight">$100K</h3>
                    <div className="text-right">
                      <span className="text-2xl font-black text-neutral-900">$299</span>
                      <p className="text-[10px] text-neutral-400 font-mono uppercase tracking-tighter">one-time fee</p>
                    </div>
                  </div>
                  <p className="text-xs font-mono uppercase text-[#00a300] font-bold tracking-wide mb-6 pb-4 border-b border-neutral-100">Elite Account</p>
                  <ul className="space-y-3.5 mb-8 text-sm font-medium text-neutral-600 list-none p-0">
                    <li className="flex justify-between"><span className="text-neutral-400">Profit Target</span><span className="text-neutral-900 font-bold">10%</span></li>
                    <li className="flex justify-between"><span className="text-neutral-400">Daily Drawdown</span><span className="text-neutral-900 font-bold">5%</span></li>
                    <li className="flex justify-between"><span className="text-neutral-400">Max Drawdown</span><span className="text-neutral-900 font-bold">10%</span></li>
                    <li className="flex justify-between"><span className="text-neutral-400">Profit Split</span><span className="text-[#00a300] font-black">85%</span></li>
                    <li className="flex justify-between"><span className="text-neutral-400">Payout Cycle</span><span className="text-neutral-900 font-semibold">Daily Support</span></li>
                    <li className="flex justify-between"><span className="text-neutral-400">Trading Assets</span><span className="text-neutral-900 font-semibold">All Instruments</span></li>
                  </ul>
                </div>
                <button className="w-full py-3.5 rounded-xl font-black text-xs uppercase tracking-widest transition-all duration-200 bg-neutral-900 text-white hover:bg-black active:scale-[0.98] cursor-pointer shadow-sm">
                  Start Challenge
                </button>
              </div>

            </div>
          )}

          {/* TWO STEP CONTENT */}
          {stepFilter === 'two-step' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">

              {/* CARD 1: Two Step $10K */}
              <div className="relative bg-white/80 backdrop-blur-md border border-neutral-200/80 rounded-2xl p-6 md:p-8 transition-all duration-300 hover:border-neutral-300 hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between shadow-sm">
                <div>
                  <div className="flex justify-between items-baseline mb-4">
                    <h3 className="text-3xl md:text-4xl font-black text-neutral-900 tracking-tight">$10K</h3>
                    <div className="text-right">
                      <span className="text-2xl font-black text-neutral-900">$79</span>
                      <p className="text-[10px] text-neutral-400 font-mono uppercase tracking-tighter">one-time fee</p>
                    </div>
                  </div>
                  <p className="text-xs font-mono uppercase text-[#00a300] font-bold tracking-wide mb-6 pb-4 border-b border-neutral-100">Starter Account</p>
                  <ul className="space-y-3.5 mb-8 text-sm font-medium text-neutral-600 list-none p-0">
                    <li className="flex justify-between"><span className="text-neutral-400">Step 1 Target</span><span className="text-neutral-900 font-semibold">8%</span></li>
                    <li className="flex justify-between"><span className="text-neutral-400">Step 2 Target</span><span className="text-neutral-900 font-semibold">5%</span></li>
                    <li className="flex justify-between"><span className="text-neutral-400">Daily Drawdown</span><span className="text-neutral-900 font-semibold">5%</span></li>
                    <li className="flex justify-between"><span className="text-neutral-400">Max Drawdown</span><span className="text-neutral-900 font-semibold">10%</span></li>
                    <li className="flex justify-between"><span className="text-neutral-400">Support Hours</span><span className="text-[#00a300] font-bold">24 Hours Support</span></li>
                  </ul>
                </div>
                <button className="w-full py-3.5 rounded-xl font-black text-xs uppercase tracking-widest transition-all duration-200 bg-neutral-900 text-white hover:bg-black active:scale-[0.98] cursor-pointer shadow-sm">
                  Join the Plan
                </button>
              </div>

              {/* CARD 2: Two Step $50K */}
              <div className="relative bg-white/80 backdrop-blur-md border border-neutral-200/80 rounded-2xl p-6 md:p-8 transition-all duration-300 hover:border-neutral-300 hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between shadow-sm">
                <div>
                  <div className="flex justify-between items-baseline mb-4">
                    <h3 className="text-3xl md:text-4xl font-black text-neutral-900 tracking-tight">$50K</h3>
                    <div className="text-right">
                      <span className="text-2xl font-black text-neutral-900">$179</span>
                      <p className="text-[10px] text-neutral-400 font-mono uppercase tracking-tighter">one-time fee</p>
                    </div>
                  </div>
                  <p className="text-xs font-mono uppercase text-[#00a300] font-bold tracking-wide mb-6 pb-4 border-b border-neutral-100">Pro Account</p>
                  <ul className="space-y-3.5 mb-8 text-sm font-medium text-neutral-600 list-none p-0">
                    <li className="flex justify-between"><span className="text-neutral-400">Step 1 Target</span><span className="text-neutral-900 font-semibold">8%</span></li>
                    <li className="flex justify-between"><span className="text-neutral-400">Step 2 Target</span><span className="text-neutral-900 font-semibold">5%</span></li>
                    <li className="flex justify-between"><span className="text-neutral-400">Daily Drawdown</span><span className="text-neutral-900 font-semibold">5%</span></li>
                    <li className="flex justify-between"><span className="text-neutral-400">Max Drawdown</span><span className="text-neutral-900 font-semibold">10%</span></li>
                    <li className="flex justify-between"><span className="text-neutral-400">Support Hours</span><span className="text-[#00a300] font-bold">24 Hours Support</span></li>
                  </ul>
                </div>
                <button className="w-full py-3.5 rounded-xl font-black text-xs uppercase tracking-widest transition-all duration-200 bg-neutral-900 text-white hover:bg-black active:scale-[0.98] cursor-pointer shadow-sm">
                  Join the Plan
                </button>
              </div>

              {/* CARD 3: Two Step $200K */}
              <div className="relative bg-white/80 backdrop-blur-md border border-neutral-200/80 rounded-2xl p-6 md:p-8 transition-all duration-300 hover:border-neutral-300 hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between shadow-sm">
                <div>
                  <div className="flex justify-between items-baseline mb-4">
                    <h3 className="text-3xl md:text-4xl font-black text-neutral-900 tracking-tight">$200K</h3>
                    <div className="text-right">
                      <span className="text-2xl font-black text-neutral-900">$449</span>
                      <p className="text-[10px] text-neutral-400 font-mono uppercase tracking-tighter">one-time fee</p>
                    </div>
                  </div>
                  <p className="text-xs font-mono uppercase text-[#00a300] font-bold tracking-wide mb-6 pb-4 border-b border-neutral-100">Elite Account</p>
                  <ul className="space-y-3.5 mb-8 text-sm font-medium text-neutral-600 list-none p-0">
                    <li className="flex justify-between"><span className="text-neutral-400">Step 1 Target</span><span className="text-neutral-900 font-semibold">8%</span></li>
                    <li className="flex justify-between"><span className="text-neutral-400">Step 2 Target</span><span className="text-neutral-900 font-semibold">5%</span></li>
                    <li className="flex justify-between"><span className="text-neutral-400">Daily Drawdown</span><span className="text-neutral-900 font-semibold">5%</span></li>
                    <li className="flex justify-between"><span className="text-neutral-400">Max Drawdown</span><span className="text-neutral-900 font-semibold">10%</span></li>
                    <li className="flex justify-between"><span className="text-neutral-400">Support Hours</span><span className="text-[#00a300] font-bold">24 Hours Support</span></li>
                  </ul>
                </div>
                <button className="w-full py-3.5 rounded-xl font-black text-xs uppercase tracking-widest transition-all duration-200 bg-neutral-900 text-white hover:bg-black active:scale-[0.98] cursor-pointer shadow-sm">
                  Join the Plan
                </button>
              </div>

            </div>
          )}

        </div>
      </section>



      <section className="relative bg-[#ffffff] text-neutral-800 font-sans py-24 px-6 overflow-hidden">

        {/* Subtle Light-Mode Trading Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000002_1px,transparent_1px),linear-gradient(to_bottom,#00000002_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10">

          {/* Upper Header Layout */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-neutral-100">
            <div>
              {/* Top Badges */}
              <div className="flex flex-wrap gap-3 mb-4 text-xs font-mono uppercase tracking-widest text-neutral-400">
                <span>Broker Backed</span>
                <span className="text-[#00cc00]">•</span>
                <span>No Time Limit</span>
                <span className="text-[#00cc00]">•</span>
                <span>Leading Platforms</span>
                <span className="text-[#00cc00]">•</span>
                <span className="text-neutral-600 font-bold">Up to $2,000,000 Sim</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-neutral-900">
                Start earning in only <span className="text-[#00cc00]">3 steps</span>
              </h2>
            </div>
            <a href="#services" className="mt-6 md:mt-0 inline-block px-6 py-3 border border-neutral-900 rounded-xl text-xs font-mono uppercase tracking-widest font-bold text-neutral-900 hover:bg-neutral-900 hover:text-white transition-all text-center shadow-sm active:scale-95 select-none">
              View All Services →
            </a>
          </div>

          {/* Dynamic 2-Column Interface */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

            {/* LEFT: All Steps Visible Constantly */}
            <div className="lg:col-span-5 space-y-6">

              {/* STEP 1 CARD */}
              <div className="relative border rounded-2xl p-6 bg-neutral-900 border-neutral-900 text-white shadow-xl shadow-neutral-900/10">
                <div className="absolute top-0 bottom-0 left-0 w-1.5 bg-[#00cc00] rounded-l-2xl"></div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-bold uppercase px-2.5 py-1 rounded-md bg-neutral-800 text-[#00cc00]">
                      Step 1
                    </span>
                    <h3 className="text-xl font-black uppercase tracking-tight">Prove It</h3>
                  </div>
                </div>
                <div className="mt-5 opacity-100">
                  <p className="text-[10px] font-mono uppercase tracking-wider text-[#00cc00] mb-3">Phase 1 Evaluation</p>
                  <div className="space-y-2.5 text-xs text-neutral-300">
                    <p><strong className="text-white font-semibold">The Goal:</strong> Hit a 10% profit target within 30 days.</p>
                    <p><strong className="text-white font-semibold">The Rules:</strong> Daily drawdown must stay within 5%, with a maximum total drawdown of 10%.</p>
                    <p className="pt-2 border-t border-neutral-800 text-neutral-400 italic"><strong className="text-[#00cc00] not-italic font-bold">The Promise:</strong> Simple, fair, and completely transparent rules.</p>
                  </div>
                  <a href="#learn-more" className="inline-block mt-4 text-[11px] font-mono uppercase tracking-widest text-white font-bold underline decoration-[#00cc00] underline-offset-4 hover:text-[#00cc00] transition-colors">
                    Learn More
                  </a>
                </div>
              </div>

              {/* STEP 2 CARD */}
              <div className="relative border rounded-2xl p-6 bg-white border-neutral-200 text-neutral-800 hover:border-neutral-400 transition-colors">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-bold uppercase px-2.5 py-1 rounded-md bg-neutral-100 text-neutral-500">
                      Step 2
                    </span>
                    <h3 className="text-xl font-black uppercase tracking-tight">Trade It</h3>
                  </div>
                </div>
                <div className="mt-5 opacity-100">
                  <p className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 mb-3">Phase 2 Consistency</p>
                  <div className="space-y-2.5 text-xs text-neutral-600">
                    <p><strong className="text-neutral-900 font-semibold">The Goal:</strong> Hit a 5% target in Phase 2.</p>
                    <p><strong className="text-neutral-900 font-semibold">The Objective:</strong> Prove consistency across execution frames.</p>
                    <p className="pt-2 border-t border-neutral-100 text-neutral-500 italic"><strong className="text-[#00cc00] not-italic font-bold">The Objective:</strong> The platform looks for process-driven traders.</p>
                  </div>
                  <a href="#learn-more" className="inline-block mt-4 text-[11px] font-mono uppercase tracking-widest text-neutral-900 font-bold underline decoration-[#00cc00] underline-offset-4 hover:text-[#00cc00] transition-colors">
                    Learn More
                  </a>
                </div>
              </div>

              {/* STEP 3 CARD */}
              <div className="relative border rounded-2xl p-6 bg-white border-neutral-200 text-neutral-800 hover:border-neutral-400 transition-colors">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-bold uppercase px-2.5 py-1 rounded-md bg-neutral-100 text-neutral-500">
                      Step 3
                    </span>
                    <h3 className="text-xl font-black uppercase tracking-tight">Scale It</h3>
                  </div>
                </div>
                <div className="mt-5 opacity-100">
                  <p className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 mb-3">Live Funded Account</p>
                  <div className="space-y-2.5 text-xs text-neutral-600">
                    <p><strong className="text-neutral-900 font-semibold">The Reward:</strong> Funded account activated. Trade with up to a 90% profit split.</p>
                    <p><strong className="text-neutral-900 font-semibold">The Payout:</strong> Request your payouts anytime after 14 days.</p>
                  </div>
                  <a href="#learn-more" className="inline-block mt-4 text-[11px] font-mono uppercase tracking-widest text-neutral-900 font-bold underline decoration-[#00cc00] underline-offset-4 hover:text-[#00cc00] transition-colors">
                    Learn More
                  </a>
                </div>
              </div>

            </div>

            {/* RIGHT: High-End Stacked Screen Display (White/Light Theme) */}
            <div className="lg:col-span-7 space-y-6 lg:sticky lg:top-6">
              <div className="relative bg-white p-3 rounded-2xl border border-neutral-200 shadow-xl shadow-neutral-200/50 overflow-hidden aspect-[4/3]">

                {/* Window Header Layout - White Theme */}
                <div className="flex items-center justify-between px-3 py-2 bg-neutral-50 rounded-t-xl border-b border-neutral-200/80">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                  </div>
                  <div className="text-[10px] font-mono text-neutral-400 tracking-wider font-semibold">PRO-TRADER SYSTEM // DASHBOARD</div>
                  <div className="w-4"></div>
                </div>

                {/* View Showcase - Container size automatically fits the Image aspect ratio */}
                <div className="relative w-full h-auto overflow-hidden rounded-b-xl bg-white">
                  {/* Light subtle vignette just for bottom content readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-transparent to-transparent z-10 pointer-events-none"></div>

                  {/* Clear Image - FIXED: w-full and h-auto makes the container match the image's exact dimensions */}
                  <img
                    src="/image/Start earning.jpeg"
                    alt="Trading Dashboard"
                    className="w-full h-auto block"
                  />

                  {/* Light Glassmorphism Floating Badge over Image */}
                 
                </div>

                {/* Tech Outlines (Kept green as brand identity overlay) */}
                <div className="absolute top-14 right-6 w-12 h-12 border-t-2 border-r-2 border-[#00cc00]/40 rounded-tr pointer-events-none z-30"></div>
                <div className="absolute bottom-6 left-6 w-12 h-12 border-b-2 border-l-2 border-[#00cc00]/40 rounded-bl pointer-events-none z-30"></div>
              </div>
            </div>

          </div>

        </div>
      </section>


      <section className="relative bg-[#ffffff] text-neutral-800 font-sans py-24 px-6 overflow-hidden">
        {/* ── TRADING PATTERN BACKGROUND ELEMENTS (DARKER MODE) ── */}

        {/* Professional Grid Backdrop - Darkened (Opacity badhayi: from 03 to 10) */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000010_1px,transparent_1px),linear-gradient(to_bottom,#00000010_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

        {/* Abstract Trading Chart Lines - Darkened (Opacity badhayi: from 0.06 to 0.20) */}
        <svg className="absolute top-12 left-0 w-full h-[60vh] opacity-[0.20] pointer-events-none stroke-neutral-900 fill-none" viewBox="0 0 1440 400">
          <path d="M0,200 L150,180 L250,260 L400,120 L550,190 L700,90 L900,230 L1100,140 L1250,290 L1440,180" strokeWidth="2" />
          <path d="M0,250 L200,210 L350,310 L500,150 L650,280 L800,110 L1000,290 L1200,190 L1440,320" strokeWidth="1.5" strokeDasharray="4 4" />
          {/* Micro Candlestick Vectors - Darkened (Fill opacity badhayi) */}
          <rect x="145" y="160" width="10" height="40" className="fill-neutral-900/25 stroke-none" />
          <line x1="150" y1="140" x2="150" y2="220" className="stroke-neutral-600" />
          <rect x="395" y="100" width="10" height="50" className="fill-neutral-900/25 stroke-none" />
          <line x1="400" y1="80" x2="400" y2="170" className="stroke-neutral-600" />
          <rect x="695" y="70" width="10" height="40" className="fill-neutral-900/25 stroke-none" />
          <line x1="700" y1="50" x2="700" y2="130" className="stroke-neutral-600" />
        </svg>

        {/* Top Green Arc Glow - Darkened/Vibrant (Opacity badhayi: from 5 to 15) */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100vw] h-[35vh] bg-gradient-to-b from-[#00cc00]/15 to-transparent rounded-b-[100%] pointer-events-none filter blur-3xl"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

            {/* LEFT COLUMN: Premium Copywriting & Text Details */}
            <div className="lg:col-span-6 space-y-8">
              <div className="flex flex-wrap items-center gap-3 text-[10px] font-mono uppercase tracking-widest text-neutral-400">
                <span className="px-2.5 py-1 bg-neutral-50 border border-neutral-200 rounded-md text-[#00aa00] font-bold shadow-inner">
                  SINCE 2020
                </span>
                <span className="text-neutral-300">//</span>
                <span>Funding Since A Decade</span>
              </div>

              <div className="space-y-3">
                <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight leading-none text-neutral-900">
                  SCALING <span className="text-[#00aa00]">PLAN</span>
                </h2>
                <div className="h-1 w-20 bg-gradient-to-r from-[#00aa00] to-blue-600 rounded-full"></div>
              </div>

              <p className="text-neutral-600 text-sm md:text-base leading-relaxed font-medium max-w-xl">
                At <span className="text-neutral-900 font-semibold">FundedAly</span>, we understand that trading isn’t a one-time achievement — it’s a continuous process of growth. That’s why we empower our earning account traders with the opportunity to scale their capital as they progress.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 bg-neutral-50 border border-neutral-200 rounded-xl bg-white/80 backdrop-blur-sm">
                  <div className="text-xs font-mono text-[#00aa00] mb-1.5">// ELIGIBILITY CRITERIA</div>
                  <p className="text-xs text-neutral-600 leading-normal">
                    Achieve a minimum of <span className="text-neutral-900 font-bold">10% net profit</span> over three consecutive months.
                  </p>
                </div>
                <div className="p-4 bg-neutral-50 border border-neutral-200 rounded-xl bg-white/80 backdrop-blur-sm">
                  <div className="text-xs font-mono text-blue-600 mb-1.5">// FREQUENCY & PAYOUTS</div>
                  <p className="text-xs text-neutral-600 leading-normal">
                    Qualify every 3 months with at least <span className="text-neutral-900 font-bold">4 successful payouts</span> processed.
                  </p>
                </div>
              </div>

              <div className="space-y-3 border-t border-neutral-100 pt-6">
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-[#00aa00] rounded-full"></div>
                  <span className="text-xs font-mono uppercase tracking-wider text-neutral-600">
                    Upgraded Profit Split of up to <span className="text-neutral-900 font-bold font-sans text-sm">90%</span>
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-[#00aa00] rounded-full"></div>
                  <span className="text-xs font-mono uppercase tracking-wider text-neutral-600">
                    Most powerful and expert team backing you
                  </span>
                </div>
              </div>

              <div className="pt-4">
                <a href="#contact" className="inline-flex items-center gap-3 px-8 py-4 bg-neutral-900 text-white font-mono text-xs uppercase tracking-widest font-black rounded-xl hover:bg-[#00aa00] hover:text-white transition-all group shadow-md active:scale-95 select-none">
                  Contact With Us
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </div>

            {/* RIGHT COLUMN: Image Display */}
            <div className="lg:col-span-6 relative group">
              <div className="absolute -top-3 -left-3 w-10 h-10 border-t-2 border-l-2 border-[#00aa00]/30 rounded-tl pointer-events-none"></div>
              <div className="absolute -bottom-3 -right-3 w-10 h-10 border-b-2 border-r-2 border-blue-500/30 rounded-br pointer-events-none"></div>

              {/* Image Container */}
              <div className="relative bg-neutral-100 border border-neutral-200 rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
                <img
                  src="/image/SCALING.png"
                  alt="Scaling Plan Visualization"
                  className="w-full h-full object-contain"
                />

                {/* Badge Overlay */}
                <div className="absolute top-4 right-4 text-[10px] font-mono text-[#00cc00] bg-white/90 backdrop-blur px-2 py-0.5 rounded border border-[#00cc00]/20 font-bold shadow-sm">
                  90% SPLIT ACTIVE
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>



      <section className="bg-white text-neutral-800 font-sans py-24 px-6 relative overflow-hidden">

        {/* ── TRADING PATTERN BACKGROUND ELEMENTS (DARKER MODE) ── */}

        {/* Professional Grid Backdrop - Darkened (Opacity badhayi: from 03 to 10) */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000010_1px,transparent_1px),linear-gradient(to_bottom,#00000010_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

        {/* Abstract Trading Chart Lines - Darkened (Opacity badhayi: from 0.06 to 0.20) */}
        <svg className="absolute top-12 left-0 w-full h-[60vh] opacity-[0.20] pointer-events-none stroke-neutral-900 fill-none" viewBox="0 0 1440 400">
          <path d="M0,200 L150,180 L250,260 L400,120 L550,190 L700,90 L900,230 L1100,140 L1250,290 L1440,180" strokeWidth="2" />
          <path d="M0,250 L200,210 L350,310 L500,150 L650,280 L800,110 L1000,290 L1200,190 L1440,320" strokeWidth="1.5" strokeDasharray="4 4" />
          {/* Micro Candlestick Vectors - Darkened (Fill opacity badhayi) */}
          <rect x="145" y="160" width="10" height="40" className="fill-neutral-900/25 stroke-none" />
          <line x1="150" y1="140" x2="150" y2="220" className="stroke-neutral-600" />
          <rect x="395" y="100" width="10" height="50" className="fill-neutral-900/25 stroke-none" />
          <line x1="400" y1="80" x2="400" y2="170" className="stroke-neutral-600" />
          <rect x="695" y="70" width="10" height="40" className="fill-neutral-900/25 stroke-none" />
          <line x1="700" y1="50" x2="700" y2="130" className="stroke-neutral-600" />
        </svg>

        {/* Top Green Arc Glow - Darkened/Vibrant (Opacity badhayi: from 5 to 15) */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100vw] h-[35vh] bg-gradient-to-b from-[#00cc00]/15 to-transparent rounded-b-[100%] pointer-events-none filter blur-3xl"></div>

        <div className="max-w-7xl mx-auto relative z-10">

          {/* HEADER SECTION */}
          <div className="space-y-3 mb-16">
            <div className="text-[10px] font-mono uppercase tracking-widest text-[#00cc00] font-bold">
              ⚡ FUNDEDALY PREMIUM ADVANTAGES
            </div>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-neutral-900">
              EVERYTHING YOU NEED TO TRADE <br className="hidden md:block" />
              WITH <span className="text-[#00cc00]">CONFIDENCE</span>
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-[#00cc00] to-neutral-200 rounded-full"></div>
          </div>

          {/* ROW-BASED GRID SYSTEM (White & Hex #00cc00 Custom Layout) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* CARD 1: On-Demand Payout System */}
            <div className="group h-full border border-emerald-100 bg-gradient-to-br from-white to-emerald-50/40 rounded-2xl p-6 md:p-8 flex flex-col justify-between transition-all duration-300 hover:to-emerald-100/50 hover:border-[#00cc00] hover:shadow-xl hover:-translate-y-1.5">
              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="text-xs font-mono font-bold px-3 py-1 rounded-md bg-white border border-emerald-100 text-[#00cc00] group-hover:bg-[#00cc00] group-hover:text-white transition-colors">
                    001.
                  </span>
                  <div className="w-12 h-[1px] bg-emerald-100 group-hover:bg-[#00cc00] group-hover:w-20 transition-all"></div>
                </div>
                <h3 className="text-xl font-black uppercase tracking-tight mb-4 text-neutral-900 group-hover:text-[#00cc00] transition-colors">
                  On-Demand Payout System
                </h3>
                <p className="text-xs md:text-sm leading-relaxed font-medium text-neutral-600 group-hover:text-neutral-800 transition-colors">
                  Access your profits whenever you need them. We prioritize your earnings with a swift 24 to 48-hour processing window. No unnecessary paperwork or delays.
                </p>
              </div>
              <div className="pt-8 border-t border-emerald-100 group-hover:border-emerald-200 mt-6 flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-wider font-bold text-neutral-400 group-hover:text-[#00cc00]">
                  EXPLORE CORE →
                </span>
                <div className="w-2 h-2 rounded-full bg-emerald-200 group-hover:bg-[#00cc00] group-hover:animate-pulse"></div>
              </div>
            </div>

            {/* CARD 2: Premium 90% Profit Sharing */}
            <div className="group h-full border border-emerald-100 bg-gradient-to-br from-white to-emerald-50/40 rounded-2xl p-6 md:p-8 flex flex-col justify-between transition-all duration-300 hover:to-emerald-100/50 hover:border-[#00cc00] hover:shadow-xl hover:-translate-y-1.5">
              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="text-xs font-mono font-bold px-3 py-1 rounded-md bg-white border border-emerald-100 text-[#00cc00] group-hover:bg-[#00cc00] group-hover:text-white transition-colors">
                    002.
                  </span>
                  <div className="w-12 h-[1px] bg-emerald-100 group-hover:bg-[#00cc00] group-hover:w-20 transition-all"></div>
                </div>
                <h3 className="text-xl font-black uppercase tracking-tight mb-4 text-neutral-900 group-hover:text-[#00cc00] transition-colors">
                  Premium 90% Profit Sharing
                </h3>
                <p className="text-xs md:text-sm leading-relaxed font-medium text-neutral-600 group-hover:text-neutral-800 transition-colors">
                  Maximize your take-home pay with our industry-leading splits. As you advance to our Elite accounts, you can retain up to 90% of your trading profits.
                </p>
              </div>
              <div className="pt-8 border-t border-emerald-100 group-hover:border-emerald-200 mt-6 flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-wider font-bold text-neutral-400 group-hover:text-[#00cc00]">
                  EXPLORE CORE →
                </span>
                <div className="w-2 h-2 rounded-full bg-emerald-200 group-hover:bg-[#00cc00] group-hover:animate-pulse"></div>
              </div>
            </div>

            {/* CARD 3: Rapid Capital Scaling */}
            <div className="group h-full border border-emerald-100 bg-gradient-to-br from-white to-emerald-50/40 rounded-2xl p-6 md:p-8 flex flex-col justify-between transition-all duration-300 hover:to-emerald-100/50 hover:border-[#00cc00] hover:shadow-xl hover:-translate-y-1.5">
              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="text-xs font-mono font-bold px-3 py-1 rounded-md bg-white border border-emerald-100 text-[#00cc00] group-hover:bg-[#00cc00] group-hover:text-white transition-colors">
                    003.
                  </span>
                  <div className="w-12 h-[1px] bg-emerald-100 group-hover:bg-[#00cc00] group-hover:w-20 transition-all"></div>
                </div>
                <h3 className="text-xl font-black uppercase tracking-tight mb-4 text-neutral-900 group-hover:text-[#00cc00] transition-colors">
                  Rapid Capital Scaling
                </h3>
                <p className="text-xs md:text-sm leading-relaxed font-medium text-neutral-600 group-hover:text-neutral-800 transition-colors">
                  Grow your trading power exponentially. For every 10% profit you achieve, we boost your account size by 25%. Scale all the way up to $2,000,000.
                </p>
              </div>
              <div className="pt-8 border-t border-emerald-100 group-hover:border-emerald-200 mt-6 flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-wider font-bold text-neutral-400 group-hover:text-[#00cc00]">
                  EXPLORE CORE →
                </span>
                <div className="w-2 h-2 rounded-full bg-emerald-200 group-hover:bg-[#00cc00] group-hover:animate-pulse"></div>
              </div>
            </div>

            {/* CARD 4: Zero-Cost Evaluation */}
            <div className="group h-full border border-emerald-100 bg-gradient-to-br from-white to-emerald-50/40 rounded-2xl p-6 md:p-8 flex flex-col justify-between transition-all duration-300 hover:to-emerald-100/50 hover:border-[#00cc00] hover:shadow-xl hover:-translate-y-1.5">
              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="text-xs font-mono font-bold px-3 py-1 rounded-md bg-white border border-emerald-100 text-[#00cc00] group-hover:bg-[#00cc00] group-hover:text-white transition-colors">
                    004.
                  </span>
                  <div className="w-12 h-[1px] bg-emerald-100 group-hover:bg-[#00cc00] group-hover:w-20 transition-all"></div>
                </div>
                <h3 className="text-xl font-black uppercase tracking-tight mb-4 text-neutral-900 group-hover:text-[#00cc00] transition-colors">
                  Zero-Cost Evaluation
                </h3>
                <p className="text-xs md:text-sm leading-relaxed font-medium text-neutral-600 group-hover:text-neutral-800 transition-colors">
                  We view your challenge fee as a security deposit. Upon successfully passing your evaluation, your very first payout will include a 100% refund.
                </p>
              </div>
              <div className="pt-8 border-t border-emerald-100 group-hover:border-emerald-200 mt-6 flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-wider font-bold text-neutral-400 group-hover:text-[#00cc00]">
                  EXPLORE CORE →
                </span>
                <div className="w-2 h-2 rounded-full bg-emerald-200 group-hover:bg-[#00cc00] group-hover:animate-pulse"></div>
              </div>
            </div>

            {/* CARD 5: Transparent Market Execution */}
            <div className="group h-full border border-emerald-100 bg-gradient-to-br from-white to-emerald-50/40 rounded-2xl p-6 md:p-8 flex flex-col justify-between transition-all duration-300 hover:to-emerald-100/50 hover:border-[#00cc00] hover:shadow-xl hover:-translate-y-1.5">
              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="text-xs font-mono font-bold px-3 py-1 rounded-md bg-white border border-emerald-100 text-[#00cc00] group-hover:bg-[#00cc00] group-hover:text-white transition-colors">
                    005.
                  </span>
                  <div className="w-12 h-[1px] bg-emerald-100 group-hover:bg-[#00cc00] group-hover:w-20 transition-all"></div>
                </div>
                <h3 className="text-xl font-black uppercase tracking-tight mb-4 text-neutral-900 group-hover:text-[#00cc00] transition-colors">
                  Transparent Market Execution
                </h3>
                <p className="text-xs md:text-sm leading-relaxed font-medium text-neutral-600 group-hover:text-neutral-800 transition-colors">
                  Experience true market conditions with authentic ECN pricing on MT4, MT5, and cTrader. We guarantee a fair environment with no manipulation.
                </p>
              </div>
              <div className="pt-8 border-t border-emerald-100 group-hover:border-emerald-200 mt-6 flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-wider font-bold text-neutral-400 group-hover:text-[#00cc00]">
                  EXPLORE CORE →
                </span>
                <div className="w-2 h-2 rounded-full bg-emerald-200 group-hover:bg-[#00cc00] group-hover:animate-pulse"></div>
              </div>
            </div>

            {/* CARD 6: Human-Led Support 24/5 */}
            <div className="group h-full border border-emerald-100 bg-gradient-to-br from-white to-emerald-50/40 rounded-2xl p-6 md:p-8 flex flex-col justify-between transition-all duration-300 hover:to-emerald-100/50 hover:border-[#00cc00] hover:shadow-xl hover:-translate-y-1.5">
              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="text-xs font-mono font-bold px-3 py-1 rounded-md bg-white border border-emerald-100 text-[#00cc00] group-hover:bg-[#00cc00] group-hover:text-white transition-colors">
                    006.
                  </span>
                  <div className="w-12 h-[1px] bg-emerald-100 group-hover:bg-[#00cc00] group-hover:w-20 transition-all"></div>
                </div>
                <h3 className="text-xl font-black uppercase tracking-tight mb-4 text-neutral-900 group-hover:text-[#00cc00] transition-colors">
                  Human-Led Support 24/5
                </h3>
                <p className="text-xs md:text-sm leading-relaxed font-medium text-neutral-600 group-hover:text-neutral-800 transition-colors">
                  Connect with expert traders, not automated bots. Our dedicated support team is available 24 hours a day, 5 days a week via live terminal chat.
                </p>
              </div>
              <div className="pt-8 border-t border-emerald-100 group-hover:border-emerald-200 mt-6 flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-wider font-bold text-neutral-400 group-hover:text-[#00cc00]">
                  EXPLORE CORE →
                </span>
                <div className="w-2 h-2 rounded-full bg-emerald-200 group-hover:bg-[#00cc00] group-hover:animate-pulse"></div>
              </div>
            </div>

          </div>

        </div>
      </section>

       


      <section className="py-24 bg-white text-neutral-800 relative overflow-hidden">
        {/* Subtle Eco-Trading Background Glow */}
        <div className="absolute inset-0 pointer-events-none select-none z-0">
          <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-[#00cc00]/5 rounded-full filter blur-[120px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* LEFT SIDE: STRATEGIC CONTENT */}
            <div className="space-y-8">
              <div className="space-y-3">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#00cc00] font-bold block">
                  ⚡ WHY FUNDEDALY
                </span>
                <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-neutral-900 leading-none">
                  Serious capital for traders <br />
                  backed by <span className="text-[#00cc00] underline decoration-wavy decoration-1 offset-4">real-market integrity</span>
                </h2>
                <p className="text-base md:text-lg text-neutral-600 font-medium pt-2">
                  The only prop firm built around your growth — <span className="text-red-500 font-bold">not your failure</span>.
                </p>
              </div>

              {/* FEATURE LIST (Using Pure Bootstrap Icons Classes) */}
              <div className="space-y-4">

                {/* Feature 1: Transparent Rules */}
                <div className="group flex items-start gap-4 p-4 rounded-2xl border border-neutral-100 bg-neutral-50/50 transition-all duration-300 hover:bg-white hover:border-[#00cc00] hover:shadow-lg">
                  <div className="bg-[#00cc00]/10 text-[#00cc00] w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors group-hover:bg-[#00cc00] group-hover:text-white">
                    {/* Native Bootstrap Icon Class */}
                    <i className="bi bi-shield-check text-2xl"></i>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-wider text-neutral-900 mb-1">Transparent Rules</h4>
                    <p className="text-xs md:text-sm text-neutral-500 font-medium leading-relaxed">
                      Zero hidden clauses, no malicious gotchas, and completely clear target milestones.
                    </p>
                  </div>
                </div>

                {/* Feature 2: 100% Risk-Free Passing */}
                <div className="group flex items-start gap-4 p-4 rounded-2xl border border-neutral-100 bg-neutral-50/50 transition-all duration-300 hover:bg-white hover:border-[#00cc00] hover:shadow-lg">
                  <div className="bg-[#00cc00]/10 text-[#00cc00] w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors group-hover:bg-[#00cc00] group-hover:text-white">
                    {/* Native Bootstrap Icon Class */}
                    <i className="bi bi-currency-exchange text-2xl"></i>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-wider text-neutral-900 mb-1">100% Risk-Free Passing</h4>
                    <p className="text-xs md:text-sm text-neutral-500 font-medium leading-relaxed">
                      Your challenge fee is fully refunded straight into your balance on your very first payout.
                    </p>
                  </div>
                </div>

                {/* Feature 3: Exponential Scaling */}
                <div className="group flex items-start gap-4 p-4 rounded-2xl border border-neutral-100 bg-neutral-50/50 transition-all duration-300 hover:bg-white hover:border-[#00cc00] hover:shadow-lg">
                  <div className="bg-[#00cc00]/10 text-[#00cc00] w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors group-hover:bg-[#00cc00] group-hover:text-white">
                    {/* Native Bootstrap Icon Class */}
                    <i className="bi bi-graph-up-arrow text-2xl"></i>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-wider text-neutral-900 mb-1">Exponential Scaling</h4>
                    <p className="text-xs md:text-sm text-neutral-500 font-medium leading-relaxed">
                      Scale seamlessly from $10K all the way to $2,000,000 based on a single consistent track record.
                    </p>
                  </div>
                </div>

              </div>

              {/* ACTION BUTTON */}
              <div className="pt-2">
                <button className="group flex items-center gap-2 bg-[#00cc00] text-white font-mono text-xs font-bold uppercase tracking-widest px-6 py-4 rounded-xl shadow-lg shadow-[#00cc00]/20 hover:bg-neutral-900 transition-all hover:-translate-y-0.5">
                  Start Your Challenge
                  {/* Native Bootstrap Icon Class */}
                  <i className="bi bi-arrow-right text-base group-hover:translate-x-1 transition-transform"></i>
                </button>
              </div>
            </div>

            {/* RIGHT SIDE: PREMIUM IMAGE SLIDE PLACEHOLDER */}
            <div className="relative">
              {/* Decorative outer rings */}
              <div className="absolute -inset-4 border border-dashed border-neutral-200 rounded-2xl pointer-events-none z-0"></div>

              {/* FIXED: Background white rakha hai aur aspect ratio ko auto kiya hai taaki crop na ho */}
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-neutral-100 bg-white w-full h-auto max-h-[600px] flex flex-col justify-between">

                {/* Image wrapper - pb-24 se bottom badge ke liye safe space banegi aur trading data nahi chhipega */}
                <div className="w-full h-full p-2 pb-24 flex items-center justify-center overflow-hidden bg-white">
                  <img
                    src="/image/Serious capital.jpeg"
                    alt="FundedAly Premium Trading Metrics Platform"
                    className="w-full h-auto object-contain max-h-[450px] transition-transform duration-700 hover:scale-105"
                  />
                </div>

                {/* Institutional Terminal Badge Overlay */}
                <div className="absolute bottom-4 left-4 right-4 p-4 bg-neutral-900/95 backdrop-blur-md rounded-xl border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2 z-20 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#00cc00] animate-pulse"></div>
                    <span className="font-mono text-[10px] text-white uppercase tracking-wider font-bold">
                      Institutional Liquidity Connected
                    </span>
                  </div>
                  <span className="font-mono text-[10px] text-[#00cc00] font-bold">
                    MAX CAP: $2M
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>



      <section className="relative w-full py-14 md:py-16 bg-white text-neutral-800 overflow-hidden flex items-center justify-center border-y border-neutral-100">

        {/* BACKGROUND IMAGE - FULL WIDTH EDGE TO EDGE */}
        <div className="absolute inset-0 z-0 opacity-95 pointer-events-none select-none">
          <img
            src="https://apploye.com/blog/content/images/2025/10/employee-monitoring-signs.webp"
            alt="Trading Operations Background"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Soft Center Vignette Gradient for text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/70 to-white/85 z-0"></div>

        {/* Subtle Ambient Brand Center Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-[#00cc00]/10 rounded-full filter blur-[120px] pointer-events-none z-0"></div>

        {/* Centered Content Container */}
        <div className="w-full max-w-4xl mx-auto px-6 relative z-10 text-center space-y-6">

          {/* Short Live Indicator */}
          <div className="inline-flex items-center gap-2 bg-white/95 border border-neutral-200/80 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00cc00] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00cc00]"></span>
            </span>
            <span className="text-[11px] font-mono tracking-wide text-neutral-600">
              Join <strong className="text-neutral-900 font-bold">4,200+ traders</strong> globally
            </span>
          </div>

          {/* Banner Main Line */}
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-neutral-900 leading-tight">
            READY TO TRADE <span className="text-[#00cc00] drop-shadow-[0_2px_10px_rgba(0,204,0,0.2)]">WITH REAL MONEY?</span>
          </h2>

          {/* Banner Descriptive Subtitle */}
          <p className="text-sm md:text-base text-neutral-800 font-semibold max-w-2xl mx-auto bg-white/40 backdrop-blur-[1px] p-1 rounded-lg">
            Your journey from challenge to institutional capital starts today with <span className="text-neutral-900 font-bold underline decoration-[#00cc00] decoration-2">FundedAly</span>.
          </p>

          {/* Horizontal Feature Indicators (Centered Row) */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-1">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-neutral-900 bg-white/80 border border-neutral-200/60 px-3 py-1.5 rounded-lg shadow-sm">
              <i className="bi bi-patch-check-fill text-[#00cc00]"></i> Up to $2M Scaling
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-neutral-900 bg-white/80 border border-neutral-200/60 px-3 py-1.5 rounded-lg shadow-sm">
              <i className="bi bi-lightning-charge-fill text-[#00cc00]"></i> Bi-Weekly Payouts
            </span>
          </div>

          {/* ACTION BUTTON BLOCK (Centered) */}
          <div className="pt-2">
            <button className="group inline-flex items-center justify-center gap-3 bg-[#00cc00] text-white font-mono text-xs font-black uppercase tracking-widest px-8 py-4 rounded-xl shadow-lg shadow-[#00cc00]/20 hover:bg-neutral-900 transition-all duration-300 hover:-translate-y-0.5">
              Claim Your Capital Now
              <i className="bi bi-arrow-right text-base group-hover:translate-x-1.5 transition-transform duration-300"></i>
            </button>
          </div>

        </div>
      </section>
    </>
  );
}          