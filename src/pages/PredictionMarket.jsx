import React from 'react';

export default function PredictionMarket() {
  return (
    <>
      <section className="relative w-full py-24 bg-white text-neutral-800 overflow-hidden border-b border-neutral-100">

        {/* BACKGROUND IMAGE - BRIGHT TECH GRAPHIC PATTERN */}
        <div className="absolute inset-0 z-0 opacity-15 pointer-events-none select-none">
          <img
            src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1600"
            alt="Abstract Technical Network Grid"
            className="w-full h-full object-cover scale-105"
          />
        </div>

        {/* Light Soft Gradient Vignette for perfect text visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/40 to-white z-0"></div>

        {/* Brand Accent Glowing Circles */}
        <div className="absolute top-12 left-1/4 w-[400px] h-[400px] bg-[#00cc00]/5 rounded-full filter blur-[120px] pointer-events-none z-0"></div>
        <div className="absolute bottom-12 right-1/4 w-[350px] h-[350px] bg-[#00cc00]/5 rounded-full filter blur-[100px] pointer-events-none z-0"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 mt-5">

          {/* TOP STATUS RIBBON */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2.5 bg-neutral-50 border border-neutral-200 px-4 py-2 rounded-full shadow-sm mt-5">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
              </span>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-700">
                Live Markets Open ! Every Arena. One Platform.
              </span>
            </div>
          </div>

          {/* MAIN LAYOUT SPLIT */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

            {/* LEFT SIDE: PREDICTIONS & OUTCOMES */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-4">
                <span className="text-[11px] font-mono font-black tracking-widest text-[#00cc00] uppercase block mt-5">
                  ⚡ Trade on What Happens Next
                </span>
                <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-neutral-900 leading-none mt-5">
                  The Market Doesn't Wait.<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-900 to-neutral-600">Neither Should You.</span>
                </h2>
                <p className="text-base md:text-lg text-neutral-600 font-medium leading-relaxed max-w-2xl mt-5">
                  FundedAly's Prediction Market lets you put your research to work — bet on real-world outcomes in finance, politics, sports, and macro events using funded capital.
                </p>
              </div>

              {/* VALUE PROPOSITION GRID */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 bg-white/80 border border-neutral-200/60 rounded-xl shadow-sm backdrop-blur-sm transition-all hover:border-[#00cc00]">
                  <div className="w-10 h-10 bg-neutral-50 rounded-lg flex items-center justify-center border border-neutral-200 mb-3 text-neutral-800">
                    <i className="bi bi-graph-up text-lg"></i>
                  </div>
                  <h4 className="text-sm font-black uppercase tracking-wider text-neutral-900 mb-1">Probability, Not Guesswork</h4>
                  <p className="text-xs text-neutral-500 font-medium leading-relaxed">Analyze actual statistical events and manage structured risks accurately.</p>
                </div>

                <div className="p-5 bg-white/80 border border-neutral-200/60 rounded-xl shadow-sm backdrop-blur-sm transition-all hover:border-[#00cc00]">
                  <div className="w-10 h-10 bg-neutral-50 rounded-lg flex items-center justify-center border border-neutral-200 mb-3 text-[#00cc00]">
                    <i className="bi bi-cash-stack text-lg"></i>
                  </div>
                  <h4 className="text-sm font-black uppercase tracking-wider text-neutral-900 mb-1">Turn Conviction Into Capital</h4>
                  <p className="text-xs text-neutral-500 font-medium leading-relaxed">Convert your solid macro opinions straight into direct real returns.</p>
                </div>
              </div>

              {/* ACTION BUTTONS GROUP */}
              <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
                <button className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#00cc00] text-white font-mono text-xs font-black uppercase tracking-widest px-8 py-4.5 rounded-xl shadow-lg shadow-[#00cc00]/20 hover:bg-neutral-900 transition-all duration-300 hover:-translate-y-0.5">
                  Start Your Prediction !
                  <i className="bi bi-arrow-right text-base group-hover:translate-x-1.5 transition-transform duration-300"></i>
                </button>

                <button className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-neutral-50 border border-neutral-200/80 text-neutral-800 font-mono text-xs font-bold uppercase tracking-widest px-8 py-4.5 rounded-xl shadow-sm hover:bg-white hover:border-neutral-400 transition-all duration-300">
                  Browse Open Markets
                </button>
              </div>
            </div>

            {/* RIGHT SIDE: LIVE CRYPTO EVENTS WIDGET BOX */}
            <div className="lg:col-span-5 w-full">
              <div className="relative bg-white/90 border border-neutral-200 rounded-2xl shadow-xl shadow-neutral-100 p-6 space-y-6 backdrop-blur-md">

                <div className="flex items-center justify-between border-b border-neutral-100 pb-4">
                  <div>
                    <span className="block text-[10px] font-mono text-neutral-400 uppercase tracking-wider font-bold">Available Markets</span>
                    <h3 className="text-base font-black text-neutral-900 uppercase tracking-tight">Crypto Headline Events</h3>
                  </div>
                  <span className="text-[11px] font-mono text-neutral-500 font-bold bg-neutral-50 border border-neutral-200 px-2.5 py-1 rounded-md">
                    BTC // ETH // ALTS
                  </span>
                </div>

                {/* LIVE TICKERS/ITEMS BOXES */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3.5 bg-neutral-50 border border-neutral-100 rounded-xl hover:border-neutral-200 transition-all">
                    <div className="flex items-center gap-3">
                      <i className="bi bi-currency-bitcoin text-amber-500 text-xl"></i>
                      <div>
                        <h4 className="text-xs font-black text-neutral-900 uppercase">Bitcoin Price Milestone</h4>
                        <p className="text-[10px] text-neutral-400 font-medium">Will BTC cross target resistance this week?</p>
                      </div>
                    </div>
                    <i className="bi bi-chevron-right text-neutral-400 text-xs"></i>
                  </div>

                  <div className="flex items-center justify-between p-3.5 bg-neutral-50 border border-neutral-100 rounded-xl hover:border-neutral-200 transition-all">
                    <div className="flex items-center gap-3">
                      <i className="bi bi-cpu-fill text-purple-500 text-lg"></i>
                      <div>
                        <h4 className="text-xs font-black text-neutral-900 uppercase">Ethereum Gas Surge</h4>
                        <p className="text-[10px] text-neutral-400 font-medium">Predicting Altcoin index flow spikes.</p>
                      </div>
                    </div>
                    <i className="bi bi-chevron-right text-neutral-400 text-xs"></i>
                  </div>
                </div>

                {/* TRUST COUNTER FOOTER INSIDE WIDGET */}
                <div className="bg-neutral-50 border border-neutral-100 p-4 rounded-xl flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#00cc00]/10 text-[#00cc00] flex items-center justify-center shrink-0">
                    <i className="bi bi-people-fill text-sm"></i>
                  </div>
                  <p className="text-xs text-neutral-600 font-medium leading-normal">
                    Hundreds of funded traders are already <strong className="text-neutral-900 font-bold">pricing the future</strong>. Join them today.
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>




      <section className="relative w-full py-24 md:py-32 bg-white text-neutral-800 overflow-hidden border-b border-neutral-100">

        {/* BACKGROUND ELEMENTS */}
        <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
          <div className="absolute -top-32 -right-20 w-[450px] h-[450px] bg-neutral-100 rounded-full border border-neutral-200/60"></div>
          <div className="absolute top-1/4 -right-16 w-[300px] h-[300px] bg-[#00cc00]/10 rounded-full border border-[#00cc00]/20"></div>
          <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] bg-neutral-50 rounded-full border border-neutral-200/50"></div>
          <div className="absolute bottom-10 left-12 w-24 h-24 bg-neutral-100 rounded-full border border-neutral-200"></div>
          <div className="absolute -bottom-16 right-1/3 w-[260px] h-[260px] bg-neutral-50 rounded-full border border-neutral-200/60"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* LEFT SIDE: TALLER CARD */}
            <div className="lg:col-span-6 w-full relative">
              <div className="absolute -inset-4 border border-dashed border-neutral-200 rounded-2xl pointer-events-none z-0"></div>

              {/* Changed aspect ratio to 5/4 to make the card significantly taller */}
              <div className="relative z-10 rounded-2xl overflow-hidden border border-neutral-200 bg-white aspect-[5/4] shadow-xl shadow-neutral-100 flex items-center justify-center">
                <img
                  src="/image/The Smartest.jpeg"
                  alt="Analytical Strategy and Predictive Framework"
                  className="w-full h-full object-contain transition-transform duration-700 hover:scale-105"
                />

                {/* Badge Overlay */}
                <div className="absolute bottom-6 left-6 right-6 p-5 bg-white/95 backdrop-blur-md border border-neutral-200/80 rounded-xl shadow-lg">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#00cc00] text-white flex items-center justify-center shrink-0">
                      <i className="bi bi-cpu text-lg"></i>
                    </div>
                    <div>
                      <span className="block font-mono text-[10px] text-neutral-400 uppercase tracking-widest font-bold">Execution Engine</span>
                      <span className="block text-sm font-black text-neutral-900 uppercase">Automated Resolution Loop</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE: CONTENT */}
            <div className="lg:col-span-6 space-y-8 text-left">
              <div className="space-y-3">
                <span className="text-[11px] font-mono font-black tracking-widest text-[#00cc00] uppercase block">
                  ⚡ ABOUT PREDICTION MARKET
                </span>
                <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight leading-none">
                  <span className="text-neutral-900">The Smartest Way to Trade</span> <br />
                  <span className="text-[#00cc00]">What You Already Know</span>
                </h2>
                <p className="text-base md:text-lg text-neutral-600 font-medium leading-relaxed">
                  FundedAly's Prediction Market gives funded traders a unique edge — convert your macro research into real positions. <span className="text-neutral-900 font-bold">No guesswork. Pure probability.</span>
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4 p-5 rounded-xl border border-neutral-200 bg-white/80 backdrop-blur-sm">
                  <div className="w-12 h-12 bg-[#00cc00]/10 text-[#00cc00] rounded-lg flex items-center justify-center shrink-0">
                    <i className="bi bi-globe2 text-xl"></i>
                  </div>
                  <div>
                    <h4 className="text-sm font-black uppercase tracking-wider text-neutral-900">Market Access</h4>
                    <p className="text-sm text-neutral-500">Trade real-world events across finance, politics & sports.</p>
                  </div>
                </div>
              </div>

              <button className="bg-[#00cc00] text-white font-mono text-xs font-black uppercase tracking-widest px-8 py-4 rounded-xl hover:bg-neutral-900 transition-all">
                More about markets
              </button>
            </div>

          </div>
        </div>
      </section>


      <section className="relative w-full py-24 md:py-32 bg-white text-neutral-800 overflow-hidden border-b border-neutral-100">

        {/* SOLID VISIBLE CIRCLE BACKGROUND BACKDROP */}
        <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
          <div className="absolute -top-32 -right-20 w-[450px] h-[450px] bg-neutral-100 rounded-full border border-neutral-200/60"></div>
          <div className="absolute top-1/4 -right-16 w-[300px] h-[300px] bg-[#00cc00]/10 rounded-full border border-[#00cc00]/20"></div>
          <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] bg-neutral-50 rounded-full border border-neutral-200/50"></div>
          <div className="absolute bottom-10 left-12 w-24 h-24 bg-neutral-100 rounded-full border border-neutral-200"></div>
          <div className="absolute -bottom-16 right-1/3 w-[260px] h-[260px] bg-neutral-50 rounded-full border border-neutral-200/60"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* LEFT SIDE: STRATEGIC TEXT & FEATURE BLOCKS */}
            <div className="lg:col-span-6 space-y-8 text-left">
              <div className="space-y-3">
                <span className="text-[11px] font-mono font-black tracking-widest text-[#00cc00] uppercase block">
                  ⚡ WHAT BENEFITS
                </span>
                <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-neutral-900 leading-none">
                  We make the most <br />
                  <span className="text-[#00cc00]">accurate prediction markets</span>
                </h2>
              </div>

              <div className="space-y-5 max-w-2xl">
                <div className="p-5 rounded-2xl border border-neutral-200 bg-neutral-50/50 backdrop-blur-sm transition-all hover:bg-white hover:border-neutral-300 hover:shadow-md">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="w-10 h-10 bg-[#00cc00]/10 text-[#00cc00] rounded-xl flex items-center justify-center shrink-0">
                      <i className="bi bi-lightning-charge-fill text-lg"></i>
                    </div>
                    <h3 className="text-base font-black uppercase tracking-wider text-neutral-900">Realtime Transaction</h3>
                  </div>
                  <p className="text-xs md:text-sm text-neutral-600 font-medium leading-relaxed pl-14">
                    Track every market movement the moment it happens. FundedAly processes live trades, volume shifts, and position changes in real-time.
                  </p>
                </div>

                <div className="p-5 rounded-2xl border border-neutral-200 bg-neutral-50/50 backdrop-blur-sm transition-all hover:bg-white hover:border-neutral-300 hover:shadow-md">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="w-10 h-10 bg-[#00cc00]/10 text-[#00cc00] rounded-xl flex items-center justify-center shrink-0">
                      <i className="bi bi-pie-chart-fill text-lg"></i>
                    </div>
                    <h3 className="text-base font-black uppercase tracking-wider text-neutral-900">Prediction Analysis</h3>
                  </div>
                  <p className="text-xs md:text-sm text-neutral-600 font-medium leading-relaxed pl-14">
                    Decode market sentiment with precision. Our AI-driven analysis tools break down crowd predictions and outcome probabilities.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <button className="group inline-flex items-center gap-2.5 bg-neutral-900 text-white font-mono text-xs font-black uppercase tracking-widest px-8 py-4 rounded-xl shadow-md hover:bg-[#00cc00] transition-all duration-300 hover:-translate-y-0.5">
                  Learn More
                  <i className="bi bi-arrow-right text-base group-hover:translate-x-1.5 transition-transform duration-300"></i>
                </button>
              </div>
            </div>

            {/* RIGHT SIDE: PREMIUM WIDER, LOWER CARD */}
            <div className="lg:col-span-6 w-full relative">
              <div className="absolute -inset-4 border border-dashed border-neutral-200 rounded-2xl pointer-events-none z-0"></div>

              {/* Aspect ratio changed to 16/10 for lower height */}
              <div className="relative z-10 rounded-2xl overflow-hidden border border-neutral-200 bg-neutral-50 aspect-[16/10] shadow-xl shadow-neutral-200/60 flex items-center justify-center">
                <img
                  src="/image/We make the most.jpeg"
                  alt="Realtime Analytical Prediction Performance Dashboard"
                  className="w-full h-full object-contain p-4 transition-transform duration-700 hover:scale-105"
                />

                {/* Bottom Analytics Badge */}
                <div className="absolute bottom-4 left-4 right-4 p-3 bg-white/95 backdrop-blur-md border border-neutral-200 rounded-xl shadow-lg">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#00cc00] animate-pulse"></div>
                      <span className="font-mono text-[10px] font-black text-neutral-900 uppercase">Live Feed Status</span>
                    </div>
                    <span className="text-[9px] font-mono font-bold text-[#00cc00] bg-[#00cc00]/10 px-2 py-0.5 rounded-md">99.8% Uptime</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>



      <section className="relative w-full py-24 md:py-32 bg-white text-neutral-800 overflow-hidden border-b border-neutral-100">

        {/* SOLID HIGHLY VISIBLE CIRCLE BACKGROUND BACKDROP */}
        <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
          {/* Large Decorative Top-Left Circle */}
          <div className="absolute -top-24 -left-20 w-[400px] h-[400px] bg-neutral-50 rounded-full border border-neutral-200/50"></div>
          {/* Large Brand Green Circle on Bottom-Right */}
          <div className="absolute -bottom-32 -right-16 w-[450px] h-[450px] bg-[#00cc00]/5 rounded-full border border-[#00cc00]/10"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">

          {/* CENTERED HEADER CONTENT */}
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
            <span className="text-[11px] font-mono font-black tracking-widest text-[#00cc00] uppercase block">
              ⚡ SIMPLE PROCESS
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-neutral-900 leading-tight">
              From Sign-Up to First Prediction <br />
              <span className="text-[#00cc00]">in Minutes</span>
            </h2>
          </div>

          {/* 3-STEP TIMELINE LAYOUT GRID */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 relative">

            {/* STEP 1 */}
            <div className="relative space-y-5 p-6 rounded-2xl border border-neutral-200/80 bg-white shadow-sm hover:shadow-md hover:border-neutral-300 transition-all group">

              {/* Step Counter Top Row */}
              <div className="flex items-center justify-between border-b border-neutral-100 pb-4">
                <div className="w-10 h-10 bg-[#00cc00]/10 text-[#00cc00] rounded-xl flex items-center justify-center font-mono font-black text-sm">
                  01
                </div>
                <span className="text-[10px] font-mono tracking-widest text-neutral-400 font-bold uppercase">Phase Alpha</span>
              </div>

              {/* Core Step Text Info */}
              <div className="space-y-2">
                <h3 className="text-lg font-black text-neutral-900 uppercase tracking-tight group-hover:text-[#00cc00] transition-colors">
                  Pick Your Market
                </h3>
                <span className="block font-mono text-[11px] font-black text-neutral-500 uppercase tracking-wide">
                  Choose What You Believe In
                </span>
                <p className="text-xs md:text-sm text-neutral-600 font-medium leading-relaxed pt-1">
                  Browse hundreds of live prediction markets — from crypto outcomes and geopolitical events to tech launches and economic indicators. Find your edge, place your conviction.
                </p>
              </div>
            </div>

            {/* STEP 2 */}
            <div className="relative space-y-5 p-6 rounded-2xl border border-neutral-200/80 bg-white shadow-sm hover:shadow-md hover:border-neutral-300 transition-all group">

              {/* Step Counter Top Row */}
              <div className="flex items-center justify-between border-b border-neutral-100 pb-4">
                <div className="w-10 h-10 bg-[#00cc00]/10 text-[#00cc00] rounded-xl flex items-center justify-center font-mono font-black text-sm">
                  02
                </div>
                <span className="text-[10px] font-mono tracking-widest text-neutral-400 font-bold uppercase">Phase Beta</span>
              </div>

              {/* Core Step Text Info */}
              <div className="space-y-2">
                <h3 className="text-lg font-black text-neutral-900 uppercase tracking-tight group-hover:text-[#00cc00] transition-colors">
                  Analyze & Decide
                </h3>
                <span className="block font-mono text-[11px] font-black text-neutral-500 uppercase tracking-wide">
                  Read the Crowd. Beat the Crowd.
                </span>
                <p className="text-xs md:text-sm text-neutral-600 font-medium leading-relaxed pt-1">
                  Dive into real-time odds, volume trends, and sentiment scores before you commit. Our smart analytics dashboard gives you everything you need to make an informed prediction — not a guess.
                </p>
              </div>
            </div>

            {/* STEP 3 */}
            <div className="relative space-y-5 p-6 rounded-2xl border border-neutral-200/80 bg-white shadow-sm hover:shadow-md hover:border-neutral-300 transition-all group">

              {/* Step Counter Top Row */}
              <div className="flex items-center justify-between border-b border-neutral-100 pb-4">
                <div className="w-10 h-10 bg-[#00cc00] text-white rounded-xl flex items-center justify-center font-mono font-black text-sm shadow-md shadow-[#00cc00]/20">
                  03
                </div>
                <span className="text-[10px] font-mono tracking-widest text-neutral-400 font-bold uppercase">Phase Launch</span>
              </div>

              {/* Core Step Text Info */}
              <div className="space-y-2">
                <h3 className="text-lg font-black text-neutral-900 uppercase tracking-tight group-hover:text-[#00cc00] transition-colors">
                  Trade & Win
                </h3>
                <span className="block font-mono text-[11px] font-black text-[#00cc00] uppercase tracking-wide">
                  Profit When You're Right
                </span>
                <p className="text-xs md:text-sm text-neutral-600 font-medium leading-relaxed pt-1">
                  Execute your prediction with one click. Track it live as events unfold, cash out early or ride it to resolution — your call, your gains.
                </p>
              </div>
            </div>

          </div>

          {/* BOTTOM GLOBAL ACTION INCENTIVE BUTTON */}
          <div className="flex justify-center pt-16">
            <button className="group inline-flex items-center justify-center gap-3 bg-neutral-900 text-white font-mono text-xs font-black uppercase tracking-widest px-10 py-5 rounded-xl shadow-lg hover:bg-[#00cc00] transition-all duration-300 hover:-translate-y-0.5">
              Create Your Account Now
              <i className="bi bi-arrow-right text-base group-hover:translate-x-1.5 transition-transform duration-300"></i>
            </button>
          </div>

        </div>
      </section>




      <section className="relative w-full py-24 bg-white text-neutral-800 overflow-hidden border-b border-neutral-100">

        {/* INJECTED INLINE KEYFRAMES */}
        <style dangerouslySetInnerHTML={{
          __html: `
        @keyframes inlineMarquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-inline-marquee {
          display: flex;
          gap: 1.5rem;
          animation: inlineMarquee 25s linear infinite;
          width: max-content;
        }
      `}} />

        {/* SOLID VISIBLE CIRCLE BACKGROUND BACKDROP */}
        <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
          <div className="absolute -top-24 -left-20 w-[450px] h-[450px] bg-neutral-50 rounded-full border border-neutral-200/50"></div>
          <div className="absolute bottom-12 -right-16 w-[350px] h-[350px] bg-[#00cc00]/10 rounded-full border border-[#00cc00]/20"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">

          {/* HEADER SECTION */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16 pb-8 border-b border-neutral-100">
            <div className="lg:col-span-8 space-y-3 text-left">
              <span className="text-[11px] font-mono font-black tracking-widest text-[#00cc00] uppercase block">
                ⚡ LIVE TESTIMONIALS
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-neutral-900 leading-none">
                What’s our satisfied <br />
                <span className="text-[#00cc00]">customers feedback about FundedAly</span>
              </h2>
            </div>

            {/* GOOGLE BADGE SUMMARY */}
            <div className="lg:col-span-4 flex lg:justify-end items-center gap-4 bg-neutral-50 border border-neutral-200 p-4 rounded-2xl w-fit lg:w-full max-w-sm">
              <div className="w-11 h-11 bg-white rounded-xl shadow-sm flex items-center justify-center border border-neutral-100 shrink-0">
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                </svg>
              </div>
              <div className="text-left">
                <div className="flex items-center gap-0.5 text-amber-500 mb-0.5">
                  <i className="bi bi-star-fill text-xs"></i>
                  <i className="bi bi-star-fill text-xs"></i>
                  <i className="bi bi-star-fill text-xs"></i>
                  <i className="bi bi-star-fill text-xs"></i>
                  <i className="bi bi-star-fill text-xs"></i>
                </div>
                <p className="text-[11px] font-black text-neutral-900 uppercase tracking-tight">
                  4.9/5 Rating <span className="text-neutral-400 font-bold font-mono lowercase">(1,240+ reviews)</span>
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* HORIZONTAL CONTINUOUS MARQUEE TRACK */}
        <div className="relative w-full overflow-hidden flex items-center">

          {/* Soft Faded Blur Edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none"></div>

          {/* Rolling Track Container */}
          <div className="animate-inline-marquee hover:[animation-play-state:paused]">

            {/* TRACK SET 1 - HARDCODED CARDS */}
            {/* Card 1 */}
            <div className="w-[340px] md:w-[360px] shrink-0 p-6 rounded-2xl border border-neutral-200 bg-white shadow-sm hover:border-neutral-300 hover:shadow-md transition-all text-left whitespace-normal select-none">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-0.5 text-amber-500">
                    <i className="bi bi-star-fill text-xs"></i><i className="bi bi-star-fill text-xs"></i><i className="bi bi-star-fill text-xs"></i><i className="bi bi-star-fill text-xs"></i><i className="bi bi-star-fill text-xs"></i>
                  </div>
                  <i className="bi bi-google text-neutral-300 text-xs"></i>
                </div>
                <p className="text-xs md:text-sm text-neutral-600 font-medium leading-relaxed min-h-[72px]">
                  "The accuracy of prediction matching loops inside FundedAly is unmatched. Using funded capital to trade macro events shifted my entire approach."
                </p>
              </div>
              <div className="flex items-center gap-3 pt-4 mt-4 border-t border-neutral-100">
                <div className="w-8 h-8 rounded-full bg-neutral-900 text-white font-mono font-black text-[11px] flex items-center justify-center shrink-0">AM</div>
                <div>
                  <h4 className="text-xs font-black text-neutral-900 uppercase tracking-tight">Alex Miller</h4>
                  <div className="flex items-center gap-1 text-[10px] text-[#00cc00] font-bold font-mono uppercase">
                    <i className="bi bi-patch-check-fill text-[10px]"></i> Verified Trader
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="w-[340px] md:w-[360px] shrink-0 p-6 rounded-2xl border border-neutral-200 bg-white shadow-sm hover:border-neutral-300 hover:shadow-md transition-all text-left whitespace-normal select-none">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-0.5 text-amber-500">
                    <i className="bi bi-star-fill text-xs"></i><i className="bi bi-star-fill text-xs"></i><i className="bi bi-star-fill text-xs"></i><i className="bi bi-star-fill text-xs"></i><i className="bi bi-star-fill text-xs"></i>
                  </div>
                  <i className="bi bi-google text-neutral-300 text-xs"></i>
                </div>
                <p className="text-xs md:text-sm text-neutral-600 font-medium leading-relaxed min-h-[72px]">
                  "Realtime transaction dashboard updates execution in milliseconds. The sentiment score analysis tools completely saved me from bad crypto choices."
                </p>
              </div>
              <div className="flex items-center gap-3 pt-4 mt-4 border-t border-neutral-100">
                <div className="w-8 h-8 rounded-full bg-[#00cc00] text-white font-mono font-black text-[11px] flex items-center justify-center shrink-0">SR</div>
                <div>
                  <h4 className="text-xs font-black text-neutral-900 uppercase tracking-tight">Siddharth Rao</h4>
                  <div className="flex items-center gap-1 text-[10px] text-[#00cc00] font-bold font-mono uppercase">
                    <i className="bi bi-patch-check-fill text-[10px]"></i> Verified Trader
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="w-[340px] md:w-[360px] shrink-0 p-6 rounded-2xl border border-neutral-200 bg-white shadow-sm hover:border-neutral-300 hover:shadow-md transition-all text-left whitespace-normal select-none">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-0.5 text-amber-500">
                    <i className="bi bi-star-fill text-xs"></i><i className="bi bi-star-fill text-xs"></i><i className="bi bi-star-fill text-xs"></i><i className="bi bi-star-fill text-xs"></i><i className="bi bi-star-fill text-xs"></i>
                  </div>
                  <i className="bi bi-google text-neutral-300 text-xs"></i>
                </div>
                <p className="text-xs md:text-sm text-neutral-600 font-medium leading-relaxed min-h-[72px]">
                  "No complicated sign-up structures or guesswork. Registered, ran through their data projections panel, and entered my first arena within 5 minutes."
                </p>
              </div>
              <div className="flex items-center gap-3 pt-4 mt-4 border-t border-neutral-100">
                <div className="w-8 h-8 rounded-full bg-neutral-100 border border-neutral-200 text-neutral-800 font-mono font-black text-[11px] flex items-center justify-center shrink-0">EK</div>
                <div>
                  <h4 className="text-xs font-black text-neutral-900 uppercase tracking-tight">Elena Keller</h4>
                  <div className="flex items-center gap-1 text-[10px] text-[#00cc00] font-bold font-mono uppercase">
                    <i className="bi bi-patch-check-fill text-[10px]"></i> Verified Trader
                  </div>
                </div>
              </div>
            </div>


            {/* TRACK SET 2 - REPEATED CARDS FOR SEAMLESS INFINITE LOOP CORRECTION */}
            {/* Card 1 Repeat */}
            <div className="w-[340px] md:w-[360px] shrink-0 p-6 rounded-2xl border border-neutral-200 bg-white shadow-sm hover:border-neutral-300 hover:shadow-md transition-all text-left whitespace-normal select-none">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-0.5 text-amber-500">
                    <i className="bi bi-star-fill text-xs"></i><i className="bi bi-star-fill text-xs"></i><i className="bi bi-star-fill text-xs"></i><i className="bi bi-star-fill text-xs"></i><i className="bi bi-star-fill text-xs"></i>
                  </div>
                  <i className="bi bi-google text-neutral-300 text-xs"></i>
                </div>
                <p className="text-xs md:text-sm text-neutral-600 font-medium leading-relaxed min-h-[72px]">
                  "The accuracy of prediction matching loops inside FundedAly is unmatched. Using funded capital to trade macro events shifted my entire approach."
                </p>
              </div>
              <div className="flex items-center gap-3 pt-4 mt-4 border-t border-neutral-100">
                <div className="w-8 h-8 rounded-full bg-neutral-900 text-white font-mono font-black text-[11px] flex items-center justify-center shrink-0">AM</div>
                <div>
                  <h4 className="text-xs font-black text-neutral-900 uppercase tracking-tight">Alex Miller</h4>
                  <div className="flex items-center gap-1 text-[10px] text-[#00cc00] font-bold font-mono uppercase">
                    <i className="bi bi-patch-check-fill text-[10px]"></i> Verified Trader
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 Repeat */}
            <div className="w-[340px] md:w-[360px] shrink-0 p-6 rounded-2xl border border-neutral-200 bg-white shadow-sm hover:border-neutral-300 hover:shadow-md transition-all text-left whitespace-normal select-none">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-0.5 text-amber-500">
                    <i className="bi bi-star-fill text-xs"></i><i className="bi bi-star-fill text-xs"></i><i className="bi bi-star-fill text-xs"></i><i className="bi bi-star-fill text-xs"></i><i className="bi bi-star-fill text-xs"></i>
                  </div>
                  <i className="bi bi-google text-neutral-300 text-xs"></i>
                </div>
                <p className="text-xs md:text-sm text-neutral-600 font-medium leading-relaxed min-h-[72px]">
                  "Realtime transaction dashboard updates execution in milliseconds. The sentiment score analysis tools completely saved me from bad crypto choices."
                </p>
              </div>
              <div className="flex items-center gap-3 pt-4 mt-4 border-t border-neutral-100">
                <div className="w-8 h-8 rounded-full bg-[#00cc00] text-white font-mono font-black text-[11px] flex items-center justify-center shrink-0">SR</div>
                <div>
                  <h4 className="text-xs font-black text-neutral-900 uppercase tracking-tight">Siddharth Rao</h4>
                  <div className="flex items-center gap-1 text-[10px] text-[#00cc00] font-bold font-mono uppercase">
                    <i className="bi bi-patch-check-fill text-[10px]"></i> Verified Trader
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 Repeat */}
            <div className="w-[340px] md:w-[360px] shrink-0 p-6 rounded-2xl border border-neutral-200 bg-white shadow-sm hover:border-neutral-300 hover:shadow-md transition-all text-left whitespace-normal select-none">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-0.5 text-amber-500">
                    <i className="bi bi-star-fill text-xs"></i><i className="bi bi-star-fill text-xs"></i><i className="bi bi-star-fill text-xs"></i><i className="bi bi-star-fill text-xs"></i><i className="bi bi-star-fill text-xs"></i>
                  </div>
                  <i className="bi bi-google text-neutral-300 text-xs"></i>
                </div>
                <p className="text-xs md:text-sm text-neutral-600 font-medium leading-relaxed min-h-[72px]">
                  "No complicated sign-up structures or guesswork. Registered, ran through their data projections panel, and entered my first arena within 5 minutes."
                </p>
              </div>
              <div className="flex items-center gap-3 pt-4 mt-4 border-t border-neutral-100">
                <div className="w-8 h-8 rounded-full bg-neutral-100 border border-neutral-200 text-neutral-800 font-mono font-black text-[11px] flex items-center justify-center shrink-0">EK</div>
                <div>
                  <h4 className="text-xs font-black text-neutral-900 uppercase tracking-tight">Elena Keller</h4>
                  <div className="flex items-center gap-1 text-[10px] text-[#00cc00] font-bold font-mono uppercase">
                    <i className="bi bi-patch-check-fill text-[10px]"></i> Verified Trader
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

    </>
  );
}