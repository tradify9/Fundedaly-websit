import React, { useState } from "react";

export default function ExploreChallenges() {
  const [stepFilter, setStepFilter] = useState("one-step");
  

  return (
   <>
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
   </>
  );
}