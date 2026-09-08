import React, { useEffect, useState } from 'react';

export default function ContactUs() {
  // ── IMPORTANT: Apni asli email yahan paste karein ──
  const YOUR_EMAIL = "your-email@domain.com"; 

  // Simulation State for Live Animation Data
  const [livePrice, setLivePrice] = useState(2674.85);
  const [logs, setLogs] = useState([
    "INITIALIZING SECURE SOCKET...",
    "CONNECTED TO INSTITUTIONAL LP",
    "LIQUIDITY BRIDGE ACTIVE: $2M CAP"
  ]);

  // Terminal Simulator Loops
  useEffect(() => {
    const priceInterval = setInterval(() => {
      setLivePrice(prev => +(prev + (Math.random() * 4 - 2)).toFixed(2));
    }, 1200);

    const logMessages = [
      "INCOMING ROUTE SIGNAL CHECK...",
      "DATA LAYER RESYNC EXECUTED",
      "ORACLE FEED FEEDING NODE_04",
      "TRANSMISSION TUNNEL OPEN",
      "PING RESPONDING OPTIMAL: 12ms",
      "METRICS SYNCED TO PIPELINE"
    ];

    const logInterval = setInterval(() => {
      const randomLog = logMessages[Math.floor(Math.random() * logMessages.length)];
      const timestamp = new Date().toLocaleTimeString();
      setLogs(prev => [`[${timestamp}] ${randomLog}`, prev[0], prev[1]].slice(0, 4));
    }, 3000);

    return () => {
      clearInterval(priceInterval);
      clearInterval(logInterval);
    };
  }, []);

  return (
    <section className="relative w-full py-12 md:py-20 bg-white text-neutral-800 overflow-hidden min-h-screen flex items-center justify-center">
      
      {/* Background Grids */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000003_1px,transparent_1px),linear-gradient(to_bottom,#00000003_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-0"></div>
      <div className="absolute top-0 left-1/4 w-[50vw] h-[40vh] bg-gradient-to-b from-[#00cc00]/5 to-transparent rounded-b-[100%] pointer-events-none filter blur-3xl z-0"></div>

      {/* Main Container Wrapper */}
      <div className="max-w-7xl w-full mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* ── LEFT COLUMN: CYBER TRADING TERMINAL SIMULATOR ── */}
          <div className="lg:col-span-6 space-y-6 lg:pr-6">
            <div className="space-y-3">
              <span className="text-[11px] font-mono font-black tracking-widest text-[#00cc00] uppercase block">
                ⚡ LIVE NODE TELEMETRY
              </span>
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight leading-none text-neutral-900">
                Connect With Core Intelligence
              </h2>
              <p className="text-sm font-medium text-neutral-400 max-w-md leading-relaxed">
                FundedAly network parameters open directly to terminal admins. Send your encrypted structural payload logs instantly.
              </p>
            </div>

            {/* Terminal Window Graphic Container */}
            <div className="relative w-full rounded-2xl border border-neutral-900 bg-neutral-950 p-4 shadow-2xl overflow-hidden font-mono text-xs text-neutral-400">
              {/* Terminal Window Header Bar */}
              <div className="flex items-center justify-between pb-3 border-b border-neutral-800 mb-4">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#00cc00]/80 inline-block"></span>
                  <span className="text-[10px] text-neutral-500 ml-2 uppercase font-bold tracking-wider">SYSTEM_CORE_FEED.SH</span>
                </div>
                <span className="text-[9px] px-1.5 py-0.5 rounded bg-neutral-900 border border-neutral-800 text-[#00cc00] animate-pulse uppercase font-bold">
                  ● LIVE DATA
                </span>
              </div>

              {/* Graphical Moving Wave Grid Area */}
              <div className="h-32 relative border border-neutral-900/50 rounded-xl bg-neutral-900/30 overflow-hidden flex items-end mb-4">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:16px_16px]"></div>
                
                {/* Animated Trading Price Label */}
                <div className="absolute top-3 left-4 space-y-0.5">
                  <span className="text-[9px] uppercase font-bold tracking-widest text-neutral-500 block">INSTRUMENT ASSET PRICE</span>
                  <span className="text-xl font-black tracking-tight text-white block">${livePrice}</span>
                </div>

                {/* Simulated CSS Wavebars */}
                <div className="w-full flex items-end justify-between px-2 h-16 gap-1">
                  {[45, 60, 35, 70, 50, 85, 65, 40, 90, 55, 75, 40, 60, 80, 95, 50, 70, 60, 85].map((height, index) => (
                    <div 
                      key={index}
                      style={{ height: `${height}%` }}
                      className="w-full bg-neutral-800 rounded-t-sm transition-all duration-700 ease-in-out relative overflow-hidden group"
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-[#00cc00]/40 to-[#00cc00] opacity-30 animate-pulse"></div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Streaming Real-time System Logs */}
              <div className="space-y-1.5 p-3 bg-neutral-900/40 rounded-xl border border-neutral-900/80 min-h-[105px]">
                <span className="text-[9px] uppercase font-bold text-neutral-500 tracking-wider block mb-1">Terminal Stream Output:</span>
                {logs.map((log, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-[11px] leading-none whitespace-nowrap overflow-hidden text-ellipsis">
                    <span className="text-[#00cc00] font-black select-none">&gt;</span>
                    <span className={idx === 0 ? "text-white font-bold" : "text-neutral-500"}>{log}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── RIGHT COLUMN: CONTACT FORM ── */}
          <div className="lg:col-span-6 relative">
            {/* Outer dotted accent design frame */}
            <div className="absolute -inset-4 border border-dashed border-neutral-200 rounded-2xl pointer-events-none z-0"></div>

            <form 
              action={`https://formsubmit.co/${YOUR_EMAIL}`} 
              method="POST"
              className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-neutral-100 bg-white p-6 sm:p-8 space-y-6"
            >
              {/* FormSubmit Parameters */}
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />

              <div>
                <label className="block text-[10px] font-mono font-black text-neutral-400 uppercase tracking-widest mb-2">
                  Trader Identity Name
                </label>
                <input 
                  type="text" 
                  name="name"
                  required
                  className="w-full bg-neutral-50/50 border border-neutral-200 rounded-xl px-4 py-3.5 text-neutral-900 focus:outline-none focus:border-[#00cc00] focus:bg-white font-mono text-sm tracking-tight transition-all placeholder-neutral-300" 
                  placeholder="e.g. CORE_ENGINE_ALPHA" 
                />
              </div>

              <div>
                <label className="block text-[10px] font-mono font-black text-neutral-400 uppercase tracking-widest mb-2">
                  Routing Email Endpoint
                </label>
                <input 
                  type="email" 
                  name="email"
                  required
                  className="w-full bg-neutral-50/50 border border-neutral-200 rounded-xl px-4 py-3.5 text-neutral-900 focus:outline-none focus:border-[#00cc00] focus:bg-white font-mono text-sm tracking-tight transition-all placeholder-neutral-300" 
                  placeholder="trader@domain.com" 
                />
              </div>

              <div>
                <label className="block text-[10px] font-mono font-black text-neutral-400 uppercase tracking-widest mb-2">
                  Transmission Payload Message
                </label>
                <textarea 
                  name="message"
                  required
                  className="w-full bg-neutral-50/50 border border-neutral-200 rounded-xl px-4 py-3.5 text-neutral-900 focus:outline-none focus:border-[#00cc00] focus:bg-white font-mono text-sm tracking-tight transition-all placeholder-neutral-300 resize-none" 
                  rows="4" 
                  placeholder="Write your structural logs or messages here..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full bg-[#00cc00] hover:bg-[#00b300] text-white py-4 rounded-xl font-mono font-black uppercase text-xs tracking-widest shadow-lg shadow-[#00cc00]/20 transition-all duration-300 hover:scale-[1.01] active:scale-[0.99] cursor-pointer block text-center"
              >
                Broadcast Message ⚡
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}