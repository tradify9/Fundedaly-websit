import React from 'react';

const PrivacyPolicy = () => {

  // 15 alag-alag lines create karne ke liye array
  const linesCount = 15;
  const lines = Array.from({ length: linesCount });
  return (
   <section className="relative w-full min-h-screen bg-slate-50 overflow-hidden select-none font-sans">
      
      {/* ─── HIGH-QUALITY VECTOR WAVES LAYER (GREEN) ────────────────────── */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1920 1080"
        preserveAspectRatio="xMaxYMid meet"
      >
        <g fill="none" stroke="#38f852" strokeWidth="1.2" strokeOpacity="0.25">
          {/* Group 1: Bottom Left Smooth Flowing Waves */}
          {lines.map((_, i) => {
            const offset = i * 16;
            return (
              <path
                key={`wave1-${i}`}
                d={`M -100 ${1050 - offset * 0.4} 
                   C 450 ${980 - offset}, 750 ${1050 - offset * 0.8}, 1150 ${850 - offset} 
                   C 1450 ${680 - offset}, 1650 ${450 - offset * 1.3}, 2000 ${520 - offset}`}
              />
            );
          })}

          {/* Group 2: Right Corner Curved Grid Twist */}
          {lines.map((_, i) => {
            const offset = i * 18;
            return (
              <path
                key={`wave2-${i}`}
                stroke="#38f852"
                strokeWidth="1.6"
                strokeOpacity="0.32"
                d={`M ${950 + offset * 0.6} 1150 
                   C ${1200 + offset} 900, ${1400 + offset * 0.2} 700, ${1550 + offset * 0.1} 500 
                   C ${1750} 250, ${1700 - offset * 0.4} 50, ${1900 - offset * 0.1} -100`}
              />
            );
          })}

          {/* Group 3: Intersecting Fine Grid Mesh */}
          {lines.map((_, i) => {
            const offset = i * 15;
            return (
              <path
                key={`wave3-${i}`}
                stroke="#38f852"
                strokeWidth="1.0"
                strokeOpacity="0.22"
                d={`M ${1250 + offset} 1150 
                   C ${1450 + offset * 0.4} 850, ${1800} 650, ${2000 - offset * 0.1} 400
                   C 2100 200, ${1930 - offset} 80, 1650 -100`}
              />
            );
          })}
        </g>
      </svg>

      {/* ─── MAIN CONTENT LAYER ────────────────────────────────────────── */}
      <div className="relative z-10 py-12 px-4 sm:px-6 lg:px-8 backdrop-blur-[1px] min-h-screen flex items-center justify-center">
        
        <div className="max-w-4xl w-full bg-white/95 backdrop-blur-md p-8 rounded-2xl shadow-xl shadow-slate-200/40 border border-slate-100/80">
          
          {/* Header Section */}
          <div className="text-center border-b border-slate-100 pb-6 mb-8">
            <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight sm:text-4xl">
              Privacy Policy
            </h1>
            <p className="mt-2 text-sm text-slate-500">
              Last Updated: July 2026
            </p>
            <p className="mt-4 text-md text-slate-600 max-w-2xl mx-auto">
              Welcome to <span className="font-semibold text-indigo-600">FundedAly</span>. We are committed to protecting your privacy and ensuring the security of your personal and financial data.
            </p>
          </div>

          {/* Content Section */}
          <div className="space-y-8 text-slate-700 leading-relaxed">
            
            {/* Section 1 */}
            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center">
                <span className="bg-indigo-50 text-indigo-600 w-8 h-8 rounded-lg flex items-center justify-center text-sm mr-3 font-mono">1</span>
                Information We Collect
              </h2>
              <p className="mb-3 text-slate-600">To provide you with our trading and evaluation services, we collect the following types of information:</p>
              <ul className="list-disc pl-6 space-y-2 text-slate-600">
                <li><strong className="text-slate-800">Account Information:</strong> Full name, email address, phone number, and country of residence upon registration.</li>
                <li><strong className="text-slate-800">Verification Data (KYC):</strong> Government-issued ID or proof of address required for compliance and payout verifications.</li>
                <li><strong className="text-slate-800">Financial & Transaction Data:</strong> Billing address, payment details, and transaction history (processed securely via encrypted third-party gateways).</li>
                <li><strong className="text-slate-800">Trading Activity:</strong> Data related to your trading performance, platform usage, account balance, and risk metrics.</li>
              </ul>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center">
                <span className="bg-indigo-50 text-indigo-600 w-8 h-8 rounded-lg flex items-center justify-center text-sm mr-3 font-mono">2</span>
                How We Use Your Information
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-slate-600">
                <li>To create, manage, and verify your evaluation trading accounts.</li>
                <li>To evaluate trading performance and process payouts/rewards seamlessly.</li>
                <li>To prevent financial fraud and comply with international anti-money laundering (AML) regulations.</li>
                <li>To provide customer support and improve our platform's UI/UX.</li>
              </ul>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center">
                <span className="bg-indigo-50 text-indigo-600 w-8 h-8 rounded-lg flex items-center justify-center text-sm mr-3 font-mono">3</span>
                Data Sharing & Security
              </h2>
              <p className="text-slate-600 mb-3">
                We do not sell or rent your personal data. We only share information with trusted trading platform providers, secure payment gateways, and identity verification partners.
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg">
                <p className="text-sm text-amber-800 font-medium">
                  Security Priority: We implement industry-standard SSL encryption and secure servers to protect your trading metrics and personal logs.
                </p>
              </div>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center">
                <span className="bg-indigo-50 text-indigo-600 w-8 h-8 rounded-lg flex items-center justify-center text-sm mr-3 font-mono">4</span>
                Cookies & Your Rights
              </h2>
              <p className="text-slate-600">
                We use cookies to maintain your dashboard sessions. Depending on your jurisdiction, you have the right to access, update, or request deletion of your account data at any time.
              </p>
            </section>

            {/* Contact Section */}
            <div className="mt-10 pt-8 border-t border-slate-100 bg-slate-50 p-6 rounded-xl">
              <h3 className="text-lg font-bold text-slate-900 mb-2">Contact Us</h3>
              <p className="text-sm text-slate-600 mb-4">
                If you have any questions or compliance inquiries regarding this Privacy Policy, feel free to reach out:
              </p>
              <div className="space-y-1 text-sm font-medium text-slate-800">
                <p>📩 Email: <a href="mailto:support@fundedaly.com" className="text-indigo-600 hover:underline">support@fundedaly.com</a></p>
                <p>🌐 Website: <a href="https://fundedaly.com" target="_blank" rel="noreferrer" className="text-indigo-600 hover:underline">https://fundedaly.com</a></p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;