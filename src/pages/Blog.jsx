import React from 'react';
import { Link } from 'react-router-dom';

// BLOG_DATA mein humne har item ke liye 'slug' field add kar di hai
const BLOG_DATA = [
  {
    id: 1,
    title: "Top Reasons Why People Fail in Online Fundraising",
    slug: "top-reasons-why-people-fail-in-online-fundraising",
    content: "Not all campaigns succeed. Here’s why many fail: Common Mistakes. Crowdfunding relies heavily on active community building and relentless marketing rather than just launching a page and waiting. Many creators fail because they don't share a compelling personal story, neglect video content, or set unrealistic funding goals. Without an initial warm audience of friends, family, or early subscribers, campaigns struggle to build the trust needed to attract secondary backers. Building a robust pre-launch network and creating clear transparency about how funds are utilized are the ultimate shields against project stagnation.",
    date: "⚡ JULY 10, 2026",
    category: "CROWDFUNDING MISTAKES",
    author: "CAMPAIGN AUDIT CORE",
    image: "https://i.ibb.co/NntYsGH0/banner-7-jpg.jpg"
  },
  {
    id: 2,
    title: "7 Proven Tips to Run a Successful Funding Campaign",
    slug: "7-proven-tips-to-run-a-successful-funding-campaign",
    content: "Running a successful funding campaign is more than just posting a link—it’s about strategy. Top campaigns utilize multi-channel outreach, tiered reward structures, and high-impact visual storytelling to continuously drive momentum. Keeping your backers updated with real-time milestones builds an interactive feedback loop that turns passive donors into active brand ambassadors. Strategize your first 48 hours to secure at least 30% of your target, as early velocity triggers platform algorithms, maximizing your organic discoverability across global contributor pools.",
    date: "⚡ JULY 08, 2026",
    category: "FUNDRAISING STRATEGY",
    author: "STRATEGY TEAM ALPHA",
    image: "https://i.ibb.co/7JKJ0bx1/banner-6-jpg.jpg"
  },
  {
    id: 3,
    title: "What Is Crowdfunding? A Beginner’s Guide to Raising Money Online",
    slug: "what-is-crowdfunding-a-beginners-guide-to-raising-money-online",
    content: "Instead of relying on traditional banks or venture investors, crowdfunding shifts the fundraising paradigm by decentralized aggregation — raising capital directly from the internet crowd. Whether you are launching an innovative tech product, supporting a social cause, or financing a creative venture, digital platforms eliminate complex overhead gatekeepers. By mastering the core types of crowdfunding—reward-based, equity, or donation-based models—creators can bypass traditional corporate hurdles and connect directly with their true community.",
    date: "⚡ JULY 05, 2026",
    category: "MARKET EDUCATION",
    author: "EDUCATION HUB CORE",
    image: "https://i.ibb.co/JWdXnPFp/banner-5-jpg.jpg"
  }
];

export default function Blog() {
  return (
    <>
      <section>
        <div className="relative w-full pt-12 pb-24 md:pt-16 md:pb-32 bg-white text-neutral-800 overflow-hidden border-b border-neutral-100 min-h-screen">

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

          {/* ── MAIN CONTENT LAYER ── */}
          <div className="max-w-7xl mx-auto px-6 relative z-10">

            {/* Main Header */}
            <div className="text-center space-y-3 mb-14">
              <span className="text-[11px] font-mono font-black tracking-widest text-[#00cc00] uppercase block">
                ⚡ FUNDEDALY INSIGHTS
              </span>
              <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight leading-none text-neutral-900">
                Strategic Knowledge <br />
                <span className="text-[#00cc00]">For Funded Traders</span>
              </h2>
            </div>

            {/* 3-Column Grid Implementation */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-start max-w-6xl mx-auto">
              {BLOG_DATA.map((blog) => (
                <div key={blog.id} className="w-full relative group">

                  {/* Hover border line anchor effect */}
                  <div className="absolute -inset-1.5 border border-dashed border-neutral-300 rounded-xl pointer-events-none z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Micro Compact White Premium Card */}
                  <div className="relative z-10 rounded-xl overflow-hidden border border-neutral-200 bg-white/95 backdrop-blur-sm shadow-lg shadow-neutral-100/40 flex flex-col h-full hover:border-neutral-300 transition-all duration-300">

                    {/* Image Wrap (Sleek aspect-16/9) */}
                    <div className="relative overflow-hidden aspect-[16/9] bg-neutral-50 border-b border-neutral-100">
                      <img
                        src={blog.image}
                        alt={blog.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute top-2.5 left-2.5 bg-white/95 backdrop-blur-sm border border-neutral-200/80 px-2 py-0.5 rounded-md shadow-sm">
                        <span className="font-mono text-[7.5px] text-neutral-800 font-bold tracking-wider uppercase">{blog.category}</span>
                      </div>
                    </div>

                    {/* Content Area */}
                    <div className="p-4 flex flex-col flex-grow space-y-2.5">
                      <span className="text-[8.5px] font-mono font-bold text-neutral-400 tracking-wider block">{blog.date}</span>

                      <h3 className="text-base font-black uppercase text-neutral-900 tracking-tight leading-snug group-hover:text-[#00cc00] transition-colors duration-300">
                        {blog.title}
                      </h3>

                      <p className="text-[11px] text-neutral-500 font-medium leading-relaxed flex-grow">
                        {blog.excerpt}
                      </p>

                      {/* Action Button */}
                      <div className="pt-1">
                        {/* FIXED: URL path mein blog.id ki jagah blog.slug use kiya hai */}
                        <Link
                          to={`/blog/${blog.slug}`}
                          className="inline-flex items-center gap-1.5 bg-neutral-900 text-white font-mono text-[8.5px] font-black uppercase tracking-widest px-3.5 py-2 rounded-md hover:bg-[#00cc00] transition-all duration-300 hover:-translate-y-0.5 shadow-sm"
                        >
                          Read Analysis
                          <i className="bi bi-arrow-right text-[10px]"></i>
                        </Link>
                      </div>
                    </div>

                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>
    </>
  );
}