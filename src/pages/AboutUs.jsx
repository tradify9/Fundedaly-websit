import React from 'react';

export default function AboutUs() {
  return (
   <>
      <section className="relative bg-[#ffffff] text-neutral-800 font-sans py-24 px-6 overflow-hidden">
      
      {/* ── TRADING PATTERN BACKGROUND ELEMENTS (DARK PATTERNS ON WHITE BG) ── */}
      {/* Professional Subtle Grid Backdrop - Made Darker & Visible on White */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

      {/* Abstract Trading Chart Lines in Background - Made stroke-neutral-900 (Dark) */}
      <svg className="absolute top-12 left-0 w-full h-[60vh] opacity-[0.12] pointer-events-none stroke-neutral-900 fill-none" viewBox="0 0 1440 400">
        <path d="M0,200 L150,180 L250,260 L400,120 L550,190 L700,90 L900,230 L1100,140 L1250,290 L1440,180" strokeWidth="2" />
        <path d="M0,250 L200,210 L350,310 L500,150 L650,280 L800,110 L1000,290 L1200,190 L1440,320" strokeWidth="1.5" strokeDasharray="4 4" />
        {/* Micro Candlestick Vectors - Made Dark */}
        <rect x="145" y="160" width="10" height="40" className="fill-neutral-900/20 stroke-none" />
        <line x1="150" y1="140" x2="150" y2="220" className="stroke-neutral-500" />
        <rect x="395" y="100" width="10" height="50" className="fill-neutral-900/20 stroke-none" />
        <line x1="400" y1="80" x2="400" y2="170" className="stroke-neutral-500" />
        <rect x="695" y="70" width="10" height="40" className="fill-neutral-900/20 stroke-none" />
        <line x1="700" y1="50" x2="700" y2="130" className="stroke-neutral-500" />
      </svg>

      {/* Top Subtle Green Arc Glow (Keeps it premium) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100vw] h-[35vh] bg-gradient-to-b from-[#00cc00]/5 to-transparent rounded-b-[100%] pointer-events-none filter blur-3xl"></div>


      {/* ── CONTENT BODY ── */}
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* ── LEFT COLUMN: STATS COLLAGE ── */}
          <div className="lg:col-span-5 relative flex flex-col sm:flex-row gap-6 justify-center items-center">
            
            {/* Stat Card 1: 36 Years Experience */}
            <div className="relative bg-white/80 backdrop-blur-md border border-neutral-200/80 rounded-2xl p-6 md:p-8 w-full sm:w-64 transition-all duration-300 hover:border-neutral-300 hover:shadow-xl hover:-translate-y-1 shadow-sm text-center sm:text-left">
              <div className="flex items-baseline justify-center sm:justify-start mb-2">
                <span className="text-7xl font-black text-neutral-900 tracking-tighter">36</span>
                <span className="text-[#00cc00] text-3xl font-black ml-1">+</span>
              </div>
              <p className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-1">Years of</p>
              <p className="text-sm font-black text-neutral-900 uppercase tracking-tight">Pro Experiences</p>
            </div>

            {/* Stat Card 2: 100+ Award Winning */}
            <div className="relative bg-white border-2 border-[#00cc00] rounded-2xl p-6 md:p-8 w-full sm:w-64 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 shadow-md shadow-[#00cc00]/5 ring-1 ring-[#00cc00]/20 sm:mt-12 text-center sm:text-left">
              <span className="absolute -top-3 left-6 bg-[#00cc00] text-black font-black text-[10px] tracking-widest uppercase px-3 py-1 rounded-md shadow-sm">
                Award Winning
              </span>
              <div className="flex items-baseline justify-center sm:justify-start mb-2">
                <span className="text-7xl font-black text-neutral-900 tracking-tighter">100</span>
                <span className="text-[#00cc00] text-3xl font-black ml-1">+</span>
              </div>
              <p className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-1">Company Status</p>
              <p className="text-sm font-black text-neutral-900 uppercase tracking-tight">Award Winning Company</p>
            </div>

          </div>

          {/* ── RIGHT COLUMN: CONTENT ── */}
          <div className="lg:col-span-7 text-left">
            
            {/* Top Badges / Sub-headline */}
            <div className="flex flex-wrap gap-3 mb-4 text-xs font-mono uppercase tracking-widest text-neutral-500">
              <span className="text-[#00cc00] font-bold">ABOUT Funded Aly</span>
              <span className="text-[#00cc00] font-bold">•</span>
              <span>A Real Trading Partner</span>
            </div>

            {/* Section Heading */}
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-neutral-900 uppercase mb-6 leading-tight">
              Not Just Another Prop Firm. <br />
              <span className="bg-gradient-to-r from-neutral-900 to-[#00cc00] bg-clip-text text-transparent">
                A Real Trading Partner.
              </span>
            </h2>

            {/* Core Message / Pitch */}
            <p className="text-md font-bold text-neutral-900 mb-4 max-w-2xl">
              FundedAly wasn’t built to sell challenges. It was built to solve a problem.
            </p>

            {/* Supporting Paragraph */}
            <p className="text-neutral-600 text-sm md:text-base leading-relaxed mb-8 max-w-3xl">
              Most traders don’t fail because they lack skill. They fail because they never get access to real capital, or worse — they get stuck in systems designed to make them fail. 
              <br /><br />
              That’s where FundedAly is different. We exist for traders who are serious about performance — not gambling, not chasing hype, but building something consistent and long-term.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              {/* Primary Button */}
              <button className="px-8 py-3.5 rounded-xl font-black text-xs uppercase tracking-widest transition-all duration-200 bg-neutral-900 text-white hover:bg-black active:scale-[0.98] cursor-pointer shadow-sm">
                More About Us
              </button>
              
              {/* Secondary Outline Button */}
              <button className="px-8 py-3.5 rounded-xl font-black text-xs uppercase tracking-widest transition-all duration-200 bg-white text-neutral-900 border border-neutral-300 hover:border-neutral-900 hover:bg-neutral-50 active:scale-[0.98] cursor-pointer shadow-sm">
                Contact Us
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>


    <section className="relative bg-[#ffffff] text-neutral-800 font-sans py-20 px-6 overflow-hidden border-t border-neutral-100">
      
      {/* ── CSS KEYFRAMES INLINE (ताकि बिना tailwind.config के भी 100% मूव करे) ── */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-pure-marquee {
          animation: marquee 25s linear infinite;
        }
      `}</style>
      
      {/* ── TRADING PATTERN BACKGROUND ELEMENTS ── */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

      {/* Center Subtle Green Glow for Tech Look */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[80vw] h-[20vh] bg-[#00cc00]/5 pointer-events-none filter blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10 text-center">
        
        {/* Top Badges / Sub-headline */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-6 mb-4 text-xs font-mono uppercase tracking-widest text-neutral-500">
          <span>Broker Backed</span>
          <span className="text-[#00cc00] font-bold">•</span>
          <span>No Time Limit</span>
          <span className="text-[#00cc00] font-bold">•</span>
          <span>Leading Platforms</span>
          <span className="text-[#00cc00] font-bold">•</span>
          <span>Up to $2,000,000 in Sim</span>
        </div>

        {/* Main Heading */}
        <h2 className="text-2xl md:text-4xl font-black tracking-tight text-neutral-900 uppercase mb-12">
          Trade On Industry <span className="bg-gradient-to-r from-neutral-900 to-[#00cc00] bg-clip-text text-transparent">Leading Platforms</span>
        </h2>

        {/* ── INFINITE MOVING TICKER CONTAINER ── */}
        <div className="relative w-full overflow-hidden py-4 before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-20 md:before:w-40 before:bg-gradient-to-r before:from-white before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-20 md:after:w-40 after:bg-gradient-to-l after:from-white after:to-transparent">
          
          {/* Moving Track - Custom Pure CSS Animation Class Applied */}
          <div className="flex w-max gap-12 items-center animate-pure-marquee whitespace-nowrap">
            
            {/* ── SET 1: LOGOS ── */}
            <div className="flex items-center justify-center px-8 py-4 bg-white/50 backdrop-blur-sm border border-neutral-200/60 rounded-xl shadow-sm hover:border-neutral-300 transition-all duration-200 grayscale hover:grayscale-0">
              <img src="https://placehold.co/150x50/171717/00cc00?text=MT4" alt="MetaTrader 4" className="h-8 md:h-10 w-auto object-contain" />
            </div>
            <div className="flex items-center justify-center px-8 py-4 bg-white/50 backdrop-blur-sm border border-neutral-200/60 rounded-xl shadow-sm hover:border-neutral-300 transition-all duration-200 grayscale hover:grayscale-0">
              <img src="https://placehold.co/150x50/171717/00cc00?text=MT5" alt="MetaTrader 5" className="h-8 md:h-10 w-auto object-contain" />
            </div>
            <div className="flex items-center justify-center px-8 py-4 bg-white/50 backdrop-blur-sm border border-neutral-200/60 rounded-xl shadow-sm hover:border-neutral-300 transition-all duration-200 grayscale hover:grayscale-0">
              <img src="https://placehold.co/150x50/171717/00cc00?text=cTrader" alt="cTrader" className="h-8 md:h-10 w-auto object-contain" />
            </div>
            <div className="flex items-center justify-center px-8 py-4 bg-white/50 backdrop-blur-sm border border-neutral-200/60 rounded-xl shadow-sm hover:border-neutral-300 transition-all duration-200 grayscale hover:grayscale-0">
              <img src="https://placehold.co/150x50/171717/00cc00?text=TradingView" alt="TradingView" className="h-8 md:h-10 w-auto object-contain" />
            </div>
            <div className="flex items-center justify-center px-8 py-4 bg-white/50 backdrop-blur-sm border border-neutral-200/60 rounded-xl shadow-sm hover:border-neutral-300 transition-all duration-200 grayscale hover:grayscale-0">
              <img src="https://placehold.co/150x50/171717/00cc00?text=MatchTrader" alt="MatchTrader" className="h-8 md:h-10 w-auto object-contain" />
            </div>
            <div className="flex items-center justify-center px-8 py-4 bg-white/50 backdrop-blur-sm border border-neutral-200/60 rounded-xl shadow-sm hover:border-neutral-300 transition-all duration-200 grayscale hover:grayscale-0">
              <img src="https://placehold.co/150x50/171717/00cc00?text=DXTrade" alt="DXTrade" className="h-8 md:h-10 w-auto object-contain" />
            </div>

            {/* ── SET 2: DUPLICATE LOGOS (Endless Loop Continuity) ── */}
            <div className="flex items-center justify-center px-8 py-4 bg-white/50 backdrop-blur-sm border border-neutral-200/60 rounded-xl shadow-sm hover:border-neutral-300 transition-all duration-200 grayscale hover:grayscale-0">
              <img src="https://placehold.co/150x50/171717/00cc00?text=MT4" alt="MetaTrader 4" className="h-8 md:h-10 w-auto object-contain" />
            </div>
            <div className="flex items-center justify-center px-8 py-4 bg-white/50 backdrop-blur-sm border border-neutral-200/60 rounded-xl shadow-sm hover:border-neutral-300 transition-all duration-200 grayscale hover:grayscale-0">
              <img src="https://placehold.co/150x50/171717/00cc00?text=MT5" alt="MetaTrader 5" className="h-8 md:h-10 w-auto object-contain" />
            </div>
            <div className="flex items-center justify-center px-8 py-4 bg-white/50 backdrop-blur-sm border border-neutral-200/60 rounded-xl shadow-sm hover:border-neutral-300 transition-all duration-200 grayscale hover:grayscale-0">
              <img src="https://placehold.co/150x50/171717/00cc00?text=cTrader" alt="cTrader" className="h-8 md:h-10 w-auto object-contain" />
            </div>
            <div className="flex items-center justify-center px-8 py-4 bg-white/50 backdrop-blur-sm border border-neutral-200/60 rounded-xl shadow-sm hover:border-neutral-300 transition-all duration-200 grayscale hover:grayscale-0">
              <img src="https://placehold.co/150x50/171717/00cc00?text=TradingView" alt="TradingView" className="h-8 md:h-10 w-auto object-contain" />
            </div>
            <div className="flex items-center justify-center px-8 py-4 bg-white/50 backdrop-blur-sm border border-neutral-200/60 rounded-xl shadow-sm hover:border-neutral-300 transition-all duration-200 grayscale hover:grayscale-0">
              <img src="https://placehold.co/150x50/171717/00cc00?text=MatchTrader" alt="MatchTrader" className="h-8 md:h-10 w-auto object-contain" />
            </div>
            <div className="flex items-center justify-center px-8 py-4 bg-white/50 backdrop-blur-sm border border-neutral-200/60 rounded-xl shadow-sm hover:border-neutral-300 transition-all duration-200 grayscale hover:grayscale-0">
              <img src="https://placehold.co/150x50/171717/00cc00?text=DXTrade" alt="DXTrade" className="h-8 md:h-10 w-auto object-contain" />
            </div>

          </div>
        </div>

      </div>
    </section>


    <section className="relative bg-[#ffffff] text-neutral-800 font-sans py-24 px-6 overflow-hidden border-t border-neutral-100">
      
      {/* ── TRADING PATTERN BACKGROUND ELEMENTS ── */}
      {/* Professional Subtle Grid Backdrop */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

      {/* Abstract Trading Chart Line (Only Main Zigzag Line to match previous section) */}
      <svg className="absolute bottom-12 left-0 w-full h-[40vh] opacity-[0.08] pointer-events-none stroke-neutral-900 fill-none" viewBox="0 0 1440 400">
        <path d="M0,300 L200,240 L450,320 L600,150 L850,280 L1100,110 L1440,250" strokeWidth="2" />
      </svg>

      {/* Subtle Green Glow */}
      <div className="absolute top-1/2 right-0 w-[50vw] h-[50vh] bg-gradient-to-l from-[#00cc00]/5 to-transparent pointer-events-none filter blur-3xl rounded-full"></div>


      {/* ── MAIN CONTENT ROW ── */}
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          
          {/* LEFT COLUMN: TEXT CONTENT (55% Width on Desktop) */}
          <div className="w-full lg:w-[55%] text-left">
            
            {/* Top Badge */}
            <div className="flex items-center gap-3 mb-4 text-xs font-mono uppercase tracking-widest text-neutral-500">
              <span className="text-[#00cc00] font-bold">Why FundedAly Exists</span>
              <span className="text-neutral-300">•</span>
              <span>Built for Scale</span>
            </div>

            {/* Main Title */}
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-neutral-900 uppercase mb-6 leading-tight">
              The prop trading industry <br />
              <span className="bg-gradient-to-r from-neutral-900 to-[#00cc00] bg-clip-text text-transparent">
                is full of noise.
              </span>
            </h2>

            {/* Paragraph 1 */}
            <p className="text-neutral-600 text-sm md:text-base leading-relaxed mb-6">
              Hidden rules. Delayed payouts. Changing conditions mid-way. Platforms that feel like traps instead of opportunities. We’ve seen it all. FundedAly was created with a simple belief: If a trader is profitable, they deserve to scale — not struggle. So instead of building barriers, we built infrastructure that actually supports traders.
            </p>

            {/* Paragraph 2 - Highlighted */}
            <div className="border-l-2 border-[#00cc00] pl-4 my-6">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#00a300] font-bold mb-1">Who We Work With?</h4>
              <p className="text-neutral-900 font-bold text-base">
                FundedAly is for traders who take this seriously.
              </p>
            </div>

            {/* Paragraph 3 */}
            <p className="text-neutral-600 text-sm md:text-base leading-relaxed mb-8">
              Trading is hard. Getting funded shouldn’t be. FundedAly exists to remove friction — not create it. So if you’re ready to stop chasing prop firms and start working with one that actually supports you… Welcome to FundedAly.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              {/* Primary Button */}
              <button className="px-8 py-3.5 rounded-xl font-black text-xs uppercase tracking-widest transition-all duration-200 bg-neutral-900 text-white hover:bg-black active:scale-[0.98] cursor-pointer shadow-sm">
                Start Challenge
              </button>
              
              {/* Secondary Outline Button */}
              <button className="px-8 py-3.5 rounded-xl font-black text-xs uppercase tracking-widest transition-all duration-200 bg-white text-neutral-900 border border-neutral-300 hover:border-neutral-900 hover:bg-neutral-50 active:scale-[0.98] cursor-pointer shadow-sm">
                Meet Our Team
              </button>
            </div>

          </div>

          {/* RIGHT COLUMN: PREMIUM TRADING IMAGE (45% Width on Desktop) */}
          <div className="w-full lg:w-[45%] relative">
            
            {/* Outer Box / Decorative Frame to match Pricing Cards Style */}
            <div className="relative bg-white/80 backdrop-blur-md border border-neutral-200/80 rounded-2xl p-4 transition-all duration-300 hover:border-neutral-300 hover:shadow-2xl hover:-translate-y-1 shadow-md">
              
              {/* Small Recommended Style Accent Badge on Image Container */}
              <span className="absolute -top-3 right-6 bg-neutral-950 text-[#00cc00] font-mono text-[9px] tracking-widest uppercase px-2.5 py-1 rounded-md shadow-sm border border-neutral-800">
                LIVE TERMINAL
              </span>

              {/* Trading Image Placeholder (Replace src with your actual image path) */}
              <div className="overflow-hidden rounded-xl bg-neutral-900 aspect-[4/3] flex items-center justify-center border border-neutral-800">
                <img 
                  src="/image/The prop.jpeg" 
                  alt="FundedAly Trading Infrastructure" 
                  className="w-full h-full object-cover opacity-90 transition-transform duration-500 hover:scale-105"
                />
              </div>

            </div>

            {/* Extra Decorative Layer - Back Dot Grid Shadow */}
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-[radial-gradient(#00cc00_1px,transparent_1px)] bg-[size:12px_12px] opacity-20 -z-10"></div>
          </div>

        </div>
      </div>
    </section>
   </>
  );
}