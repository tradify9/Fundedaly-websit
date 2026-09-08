import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

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

export default function BlogDetail() {
  // useParams se jo bhi key mile (chahe 'slug' ho ya 'id')
  const params = useParams();
  
  // Dynamic Selector: Yeh slug aur ID dono ko handle karega taaki error na aaye
  const urlParam = params.slug || params.id;

  const blog = BLOG_DATA.find((item) => {
    return item.slug === urlParam || item.id.toString() === urlParam;
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [urlParam]);

  // Agar fir bhi na mile toh safely pehla blog dikha do fallback mein (Blank Screen se behtar hai)
  const activeBlog = blog || BLOG_DATA[0];

  // Sidebar filtering logic
  const sidebarBlogs = BLOG_DATA.filter((item) => item.id !== activeBlog.id);

  return (
    <>
    <section>
      <div className="relative w-full pt-12 pb-24 md:pt-16 md:pb-32 bg-white text-neutral-800 overflow-hidden border-b border-neutral-100 min-h-screen">
        
        {/* ── TRADING PATTERN BACKGROUND ELEMENTS ── */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000007_1px,transparent_1px),linear-gradient(to_bottom,#00000007_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-0"></div>

        <svg className="absolute top-12 left-0 w-full h-[60vh] opacity-[0.12] pointer-events-none stroke-neutral-800 fill-none z-0" viewBox="0 0 1440 400">
          <path d="M0,200 L150,180 L250,260 L400,120 L550,190 L700,90 L900,230 L1100,140 L1250,290 L1440,180" strokeWidth="2" />
          <path d="M0,250 L200,210 L350,310 L500,150 L650,280 L800,110 L1000,290 L1200,190 L1440,320" strokeWidth="1.5" strokeDasharray="4 4" />
        </svg>

        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100vw] h-[35vh] bg-gradient-to-b from-[#00cc00]/12 to-transparent rounded-b-[100%] pointer-events-none filter blur-3xl z-0"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          
          <div className="mb-8">
            <Link to="/" className="inline-flex items-center gap-2 text-[11px] font-mono font-black tracking-widest text-neutral-400 hover:text-[#00cc00] uppercase transition-colors">
              <i className="bi bi-arrow-left"></i> Wapas Blog List Par Jayein
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* MAIN CONTENT */}
            <div className="lg:col-span-9 space-y-8">
              
              <div className="space-y-4">
                <span className="text-[11px] font-mono font-black tracking-widest text-[#00cc00] uppercase block">
                  ⚡ {activeBlog.category}
                </span>
                <h1 className="text-2xl sm:text-3xl md:text-5xl font-black uppercase tracking-tight leading-none text-neutral-900">
                  {activeBlog.title}
                </h1>
                <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-neutral-400 pt-2 border-b border-neutral-100 pb-4">
                  <span className="text-neutral-900 font-bold">{activeBlog.author}</span>
                  <span>•</span>
                  <span>{activeBlog.date}</span>
                </div>
              </div>

              <div className="relative w-full rounded-xl overflow-hidden border border-neutral-200 bg-neutral-50 h-[250px] sm:h-[350px] md:h-[450px] shadow-lg shadow-neutral-100/50">
                <img src={activeBlog.image} alt={activeBlog.title} className="w-full h-full object-cover" />
              </div>

              <div className="text-sm sm:text-base md:text-lg text-neutral-600 font-medium leading-relaxed max-w-none space-y-6 pt-2">
                <p className="first-letter:text-5xl first-letter:font-black first-letter:text-[#00cc00] first-letter:mr-3 first-letter:float-left first-letter:leading-none">
                  {activeBlog.content}
                </p>
              </div>

            </div>

            {/* SIDEBAR RECENT DEEP DIVES */}
            <div className="lg:col-span-3 border-t lg:border-t-0 lg:border-l border-neutral-100 pt-10 lg:pt-0 lg:pl-8 space-y-6">
              <div className="pb-3 border-b border-neutral-200">
                <h3 className="text-xs font-mono font-black tracking-widest text-neutral-900 uppercase flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-[#00cc00] rounded-full inline-block animate-pulse"></span>
                  Recent Deep Dives
                </h3>
              </div>

              <div className="space-y-5">
                {sidebarBlogs.map((item) => (
                  <Link 
                    key={item.id} 
                    to={`/blog/${item.slug}`}
                    className="flex items-start gap-3 group block focus:outline-none"
                  >
                    <div className="w-16 h-16 rounded-lg overflow-hidden border border-neutral-200 bg-neutral-50 flex-shrink-0">
                      <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="space-y-1 min-w-0">
                      <span className="text-[8px] font-mono font-black tracking-wider text-[#00cc00] uppercase block">{item.category}</span>
                      <h4 className="text-xs font-black uppercase tracking-tight text-neutral-800 line-clamp-2 group-hover:text-[#00cc00] transition-colors leading-tight">{item.title}</h4>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
    </>
  );
}