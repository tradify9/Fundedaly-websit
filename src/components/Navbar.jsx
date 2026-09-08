import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';

export default function TailwindNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/challenges', label: 'Explore Challenges' },
    { path: '/market', label: 'Prediction Market' },
    { path: '/blog', label: 'Blog' },
    { path: '/about', label: 'About Us' },
    { path: '/contact', label: 'Contact Us' }
  ];

  return (
    <>

      {/* Custom Marquee Style */}
      <style>{`
  @keyframes marquee {
    0% { transform: translateX(0%); }
    100% { transform: translateX(-50%); }
  }
  .animate-marquee {
    display: flex;
    width: max-content;
    animation: marquee 25s linear infinite;
  }
  .animate-marquee:hover {
    animation-play-state: paused;
  }
`}</style>

      <div className="relative w-full overflow-hidden bg-[#00cc00] text-white font-semibold py-3 shadow-md select-none z-50">
        <div className="animate-marquee flex items-center gap-16">

          {/* सेट 1 */}
          <div className="flex items-center gap-16 whitespace-nowrap">
            <span>⚡ Fundedaly — Proprietary Trading Capital</span>
            <a href="mailto:support@fundedaly.com" className="text-white hover:underline flex items-center gap-2">
              <i className="bi bi-envelope-fill"></i> support@fundedaly.com
            </a>
            <div className="flex items-center gap-4">
              <span>Follow Us:</span>
              <a href="#" className="text-white hover:scale-110 transition-transform"><i className="bi bi-twitter-x text-lg"></i></a>
              <a href="#" className="text-white hover:scale-110 transition-transform"><i className="bi bi-instagram text-lg"></i></a>
              <a href="#" className="text-white hover:scale-110 transition-transform"><i className="bi bi-linkedin text-lg"></i></a>
              <a href="#" className="text-white hover:scale-110 transition-transform"><i className="bi bi-telegram text-lg"></i></a>
            </div>
          </div>

          {/* सेट 2 (लूपिंग के लिए डुप्लीकेट) */}
          <div className="flex items-center gap-16 whitespace-nowrap" aria-hidden="true">
            <span>⚡ Fundedaly — Proprietary Trading Capital</span>
            <a href="mailto:support@fundedaly.com" className="text-white hover:underline flex items-center gap-2">
              <i className="bi bi-envelope-fill"></i> support@fundedaly.com
            </a>
            <div className="flex items-center gap-4">
              <span>Follow Us:</span>
              <a href="#" className="text-white hover:scale-110 transition-transform"><i className="bi bi-twitter-x text-lg"></i></a>
              <a href="#" className="text-white hover:scale-110 transition-transform"><i className="bi bi-instagram text-lg"></i></a>
              <a href="#" className="text-white hover:scale-110 transition-transform"><i className="bi bi-linkedin text-lg"></i></a>
              <a href="#" className="text-white hover:scale-110 transition-transform"><i className="bi bi-telegram text-lg"></i></a>
            </div>
          </div>

        </div>
      </div>




      <nav className="bg-white/75 backdrop-blur-xl border-b border-neutral-200/80 sticky top-0 z-50 px-6 py-4 transition-all duration-300">
  <div className="max-w-7xl mx-auto flex justify-between items-center">
    
    {/* Brand Logo - Fixed Container */}
    <div className="flex items-center">
      <Link
        to="/"
        className="flex items-center h-10 overflow-visible no-underline bg-transparent"
      >
        <img
          src="/image/logo.png"
          alt="Fundedaly Logo"
          className="h-20 w-auto object-contain bg-transparent"
        />
      </Link>
    </div>

    {/* Mobile Menu Button - Right side */}
    <button
      onClick={() => setIsOpen(!isOpen)}
      className="lg:hidden text-neutral-500 hover:text-black focus:outline-none cursor-pointer p-2 rounded-lg hover:bg-neutral-100 transition-colors ml-auto"
    >
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        {isOpen ? (
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
        ) : (
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
        )}
      </svg>
    </button>

    {/* Links & CTA Container */}
    <div className={`${isOpen ? 'max-h-[500px] opacity-100 mt-4' : 'max-h-0 opacity-0 lg:max-h-none lg:opacity-100 mt-0'} w-full lg:flex lg:w-auto lg:items-center overflow-hidden lg:overflow-visible transition-all duration-300 ease-in-out absolute lg:static top-full left-0 bg-white lg:bg-transparent px-6 lg:px-0 shadow-lg lg:shadow-none`}>

      {/* Navigation Links */}
      <ul className="flex flex-col lg:flex-row lg:space-x-6 space-y-2 lg:space-y-0 text-left list-none p-0 mb-4 lg:mb-0">
        {navLinks.map((link) => (
          <li key={link.path}>
            <NavLink
              to={link.path}
              onClick={() => setIsOpen(!isOpen)}
              className={({ isActive }) =>
                `block text-sm font-medium py-2 lg:py-1 px-3 rounded-md transition-all duration-200 no-underline ${isActive
                  ? 'text-black bg-[#00cc00]/15 font-black border border-[#00cc00]/20'
                  : 'text-neutral-600 hover:text-black hover:bg-neutral-100'
                }`
              }
            >
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      <div className="lg:ml-6 pt-2 lg:pt-0 border-t border-neutral-100 lg:border-t-0 pb-4 lg:pb-0">
        <a
          href="https://trade.fundedaly.com/login"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full lg:w-auto bg-[#00cc00] hover:bg-[#00b300] text-black font-black px-5 py-2.5 rounded-xl text-xs tracking-wider uppercase shadow-md shadow-[#00cc00]/30 transition-all transform active:scale-95 cursor-pointer text-center"
        >
          Start Challenge
        </a>
      </div>
    </div>
  </div>
</nav>
    </>
  );
}