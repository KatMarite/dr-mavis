import { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function LeadershipForWomen() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <div className="bg-[#F8FAFC] text-navy min-h-screen">
      {/* Navigation Bar (Simplified for Landing Page focus) */}
      <nav className="fixed w-full z-50 transition-all duration-300 bg-alabaster/95 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center" onClick={closeMobileMenu}>
            <img src="/mavislogo.png" alt="Dr Mavis Mazhura Logo" className="h-24 lg:h-28 w-auto" />
          </Link>
          <div className="hidden md:flex items-center space-x-6">
            <a href="#overview" className="text-sm font-medium text-slate-600 hover:text-terracotta transition-colors">Overview</a>
            <a href="#the-shift" className="text-sm font-medium text-slate-600 hover:text-terracotta transition-colors">The Shift</a>
            <a href="#process" className="text-sm font-medium text-slate-600 hover:text-terracotta transition-colors">The Process</a>
            <a href="#testimonials" className="text-sm font-medium text-slate-600 hover:text-terracotta transition-colors">Success Stories</a>
          </div>
          <div className="flex items-center">
            <Link to="/apply" className="hidden md:inline-block bg-terracotta text-white text-sm font-semibold px-6 py-2.5 rounded shadow hover:bg-[#c96c51] transition-all">
              Apply Now
            </Link>
            <button className="md:hidden text-navy p-2 ml-4" onClick={toggleMobileMenu}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"} />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-200 absolute w-full left-0 shadow-xl">
            <div className="flex flex-col px-6 py-4 space-y-4">
              <a href="#overview" onClick={closeMobileMenu} className="text-lg font-medium text-slate-600 hover:text-terracotta transition-colors">Overview</a>
              <a href="#the-shift" onClick={closeMobileMenu} className="text-lg font-medium text-slate-600 hover:text-terracotta transition-colors">The Shift</a>
              <a href="#process" onClick={closeMobileMenu} className="text-lg font-medium text-slate-600 hover:text-terracotta transition-colors">The Process</a>
              <a href="#testimonials" onClick={closeMobileMenu} className="text-lg font-medium text-slate-600 hover:text-terracotta transition-colors">Success Stories</a>
              <div className="pt-4 border-t border-slate-100">
                <Link to="/apply" onClick={closeMobileMenu} className="block w-full text-center bg-terracotta text-white text-base font-semibold px-5 py-3 rounded shadow-md transition-all">
                  Apply Now
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* 1. Landing Page Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 bg-navy overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute top-0 right-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
          <div className="absolute -top-40 -right-40 w-[800px] h-[800px] rounded-full border-[100px] border-white"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16 relative z-10">
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-3/5 text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-sage/20 text-sage border border-sage/30 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
              <span className="w-2 h-2 rounded-full bg-sage"></span> Flagship Programme
            </div>
            <h1 className="text-white text-5xl sm:text-6xl lg:text-7xl font-serif leading-[1.1] mb-6">
              Leadership for Women <span className="italic text-sage font-light">Transformative</span> Process
            </h1>
            <p className="text-slate-300 text-lg lg:text-xl mb-10 leading-relaxed max-w-2xl">
              A structured 12-week leadership process designed for senior women leaders ready to rebuild executive presence, internal authority, and balance empathy with the "hard" requirements of B2B leadership.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 items-center">
              <Link to="/apply" className="w-full sm:w-auto text-center bg-sage text-navy px-8 py-4 rounded font-bold hover:bg-white hover:shadow-lg transition-all duration-300">
                Apply Now
              </Link>
              <a href="mailto:mavism@tb2b.co.za" className="w-full sm:w-auto text-center border-2 border-slate-500 text-white px-8 py-4 rounded font-medium hover:border-white transition-all duration-300">
                Book a Discovery Call
              </a>
            </div>
            <div className="mt-6">
              <a href="#" className="text-slate-400 text-sm flex items-center hover:text-white transition-colors">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                Download Programme Overview (PDF)
              </a>
            </div>
          </motion.div>

          {/* Image/Visual */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-2/5"
          >
            <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Senior Woman Leader" className="rounded-2xl shadow-2xl object-cover aspect-[3/4] border-4 border-slate-800" />
          </motion.div>
        </div>
      </section>

      {/* 2. The Empathy Block (The Problem) */}
      <section id="overview" className="py-24 bg-white border-b border-slate-100">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto px-6 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-serif text-navy mb-6">The reality of high performance.</h2>
          <p className="text-xl text-slate-500 mb-16">You are delivering exceptional results, but behind the scenes, you are:</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            {/* Pain Point Cards */}
            <div className="bg-alabaster p-8 rounded-xl border border-slate-200 flex items-start">
              <div className="bg-terracotta/10 p-3 rounded-full mr-4 text-terracotta">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path></svg>
              </div>
              <div>
                <h4 className="text-lg font-bold text-navy mb-2">Carrying Too Much</h4>
                <p className="text-slate-600 text-sm leading-relaxed">Shouldering the operational weight of your team while trying to maintain strategic vision.</p>
              </div>
            </div>
            
            <div className="bg-alabaster p-8 rounded-xl border border-slate-200 flex items-start">
              <div className="bg-terracotta/10 p-3 rounded-full mr-4 text-terracotta">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <div>
                <h4 className="text-lg font-bold text-navy mb-2">Always "On"</h4>
                <p className="text-slate-600 text-sm leading-relaxed">Unable to disconnect. The boundaries between leadership responsibility and personal recovery have blurred.</p>
              </div>
            </div>

            <div className="bg-alabaster p-8 rounded-xl border border-slate-200 flex items-start">
              <div className="bg-terracotta/10 p-3 rounded-full mr-4 text-terracotta">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
              </div>
              <div>
                <h4 className="text-lg font-bold text-navy mb-2">Emotionally Exhausted</h4>
                <p className="text-slate-600 text-sm leading-relaxed">Experiencing capacity depletion. Empathy and team management are draining your personal reserves.</p>
              </div>
            </div>

            <div className="bg-alabaster p-8 rounded-xl border border-slate-200 flex items-start">
              <div className="bg-terracotta/10 p-3 rounded-full mr-4 text-terracotta">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.904 0-.715.211-1.413.608-2.008L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5"></path></svg>
              </div>
              <div>
                <h4 className="text-lg font-bold text-navy mb-2">Not Feeling in Control</h4>
                <p className="text-slate-600 text-sm leading-relaxed">You are highly successful on paper, but internally, the system feels fragile and heavily reliant on your constant intervention.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 3. The Shift (The Solution) */}
      <section id="the-shift" className="py-24 bg-alabaster border-b border-slate-200 relative">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto px-6"
        >
          <div className="text-center mb-16">
            <span className="text-terracotta font-semibold tracking-widest uppercase text-sm mb-3 block">The Transformation</span>
            <h2 className="text-4xl font-serif text-navy">What This Programme Shifts</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-8 md:gap-y-0 items-center bg-white rounded-2xl shadow-sm border border-slate-100 p-8 md:p-12">
            {/* From Column (Pain) */}
            <div className="space-y-8 text-center md:text-right">
              <div>
                <p className="text-slate-400 font-medium uppercase text-xs tracking-widest mb-1">From</p>
                <p className="text-2xl font-serif text-slate-500 line-through decoration-terracotta/50 decoration-2">Overfunctioning</p>
              </div>
              <div>
                <p className="text-slate-400 font-medium uppercase text-xs tracking-widest mb-1">From</p>
                <p className="text-2xl font-serif text-slate-500 line-through decoration-terracotta/50 decoration-2">Firefighting</p>
              </div>
              <div>
                <p className="text-slate-400 font-medium uppercase text-xs tracking-widest mb-1">From</p>
                <p className="text-2xl font-serif text-slate-500 line-through decoration-terracotta/50 decoration-2">Self-doubt</p>
              </div>
              <div>
                <p className="text-slate-400 font-medium uppercase text-xs tracking-widest mb-1">From</p>
                <p className="text-2xl font-serif text-slate-500 line-through decoration-terracotta/50 decoration-2">Burnout</p>
              </div>
            </div>

            {/* Arrows Column */}
            <div className="flex flex-col space-y-8 items-center justify-center text-sage hidden md:flex">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </div>
            {/* Mobile Arrow */}
            <div className="flex justify-center md:hidden text-sage my-4">
               <svg className="w-8 h-8 transform rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </div>

            {/* To Column (Gain) */}
            <div className="space-y-8 text-center md:text-left">
              <div>
                <p className="text-sage font-bold uppercase text-xs tracking-widest mb-1">To</p>
                <p className="text-3xl font-serif text-navy">Ownership</p>
              </div>
              <div>
                <p className="text-sage font-bold uppercase text-xs tracking-widest mb-1">To</p>
                <p className="text-3xl font-serif text-navy">Strategic Focus</p>
              </div>
              <div>
                <p className="text-sage font-bold uppercase text-xs tracking-widest mb-1">To</p>
                <p className="text-3xl font-serif text-navy">Executive Presence</p>
              </div>
              <div>
                <p className="text-sage font-bold uppercase text-xs tracking-widest mb-1">To</p>
                <p className="text-3xl font-serif text-navy">Sustainable Performance</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 4. The Process & Outcomes */}
      <section id="process" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Process List */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-terracotta font-semibold tracking-widest uppercase text-sm mb-3 block">12-Week Transformation</span>
            <h2 className="text-4xl font-serif text-navy mb-8">The Process</h2>
            <div className="space-y-6">
              <div className="flex items-center p-4 bg-alabaster rounded-lg border-l-4 border-navy">
                <div className="bg-white w-10 h-10 flex items-center justify-center rounded shadow-sm font-serif font-bold text-navy mr-4">1</div>
                <h4 className="text-lg font-semibold text-navy">Weekly Coaching</h4>
              </div>
              <div className="flex items-center p-4 bg-alabaster rounded-lg border-l-4 border-navy">
                <div className="bg-white w-10 h-10 flex items-center justify-center rounded shadow-sm font-serif font-bold text-navy mr-4">2</div>
                <h4 className="text-lg font-semibold text-navy">Behavioural Tools</h4>
              </div>
              <div className="flex items-center p-4 bg-alabaster rounded-lg border-l-4 border-navy">
                <div className="bg-white w-10 h-10 flex items-center justify-center rounded shadow-sm font-serif font-bold text-navy mr-4">3</div>
                <h4 className="text-lg font-semibold text-navy">Identity Work</h4>
              </div>
              <div className="flex items-center p-4 bg-alabaster rounded-lg border-l-4 border-navy">
                <div className="bg-white w-10 h-10 flex items-center justify-center rounded shadow-sm font-serif font-bold text-navy mr-4">4</div>
                <h4 className="text-lg font-semibold text-navy">Emotional Renewal Practices</h4>
              </div>
              <div className="flex items-center p-4 bg-alabaster rounded-lg border-l-4 border-navy">
                <div className="bg-white w-10 h-10 flex items-center justify-center rounded shadow-sm font-serif font-bold text-navy mr-4">5</div>
                <h4 className="text-lg font-semibold text-navy">Leadership System Design</h4>
              </div>
            </div>
          </motion.div>

          {/* Outcomes List */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-navy p-10 md:p-14 rounded-2xl shadow-xl text-white"
          >
            <span className="text-sage font-semibold tracking-widest uppercase text-sm mb-3 block">The ROI of Your Leadership</span>
            <h2 className="text-4xl font-serif mb-8">Your Outcomes</h2>
            <ul className="space-y-6">
              <li className="flex items-start">
                <svg className="w-6 h-6 text-sage mr-4 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <p className="text-lg text-slate-300"><strong className="text-white">Lead with calm authority.</strong> Navigate complexity without emotional turbulence.</p>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-sage mr-4 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <p className="text-lg text-slate-300"><strong className="text-white">Build high-performing teams.</strong> Empower others without over-reliance on your constant input.</p>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-sage mr-4 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <p className="text-lg text-slate-300"><strong className="text-white">Regain energy and clarity.</strong> Restore the boundary between professional output and personal wellbeing.</p>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-sage mr-4 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <p className="text-lg text-slate-300"><strong className="text-white">Create sustainable success.</strong> Transition from momentary wins to long-term systemic leadership.</p>
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* 5. Testimonials */}
      <section id="testimonials" className="py-24 bg-[#E27D60]/5 border-y border-terracotta/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-navy mb-4">Stories of Transformation</h2>
            <p className="text-slate-600 text-lg">Hear from women who have rebuilt their internal authority.</p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start"
          >
            {/* Review 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 row-span-2">
              <span className="font-serif text-terracotta text-6xl leading-none block mb-2">"</span>
              <p className="text-slate-600 italic mb-6 leading-relaxed">
                I realised how much I had grown over 10 weeks. My manuscript is in edit, I’m exercising again, and I’m delegating effectively. This journey reconnected me to strategic leadership and to myself.
              </p>
              <div>
                <p className="font-bold text-navy">Pam</p>
                <p className="text-xs text-slate-500 uppercase tracking-wide">Director, School of Medicine</p>
              </div>
            </div>

            {/* Review 2 */}
            <div className="bg-navy text-white p-8 rounded-2xl shadow-md border border-slate-800">
              <span className="font-serif text-sage text-5xl leading-none block mb-2">"</span>
              <p className="text-slate-300 italic mb-6 text-sm leading-relaxed">
                I didn’t think I needed this programme. I thought I knew goal setting and time management — until I had to write my mission statement. Leadership and business success is a continuous process.
              </p>
              <div>
                <p className="font-bold text-white">Namhla</p>
                <p className="text-xs text-sage uppercase tracking-wide">Wellbeing Executive</p>
              </div>
            </div>

            {/* Review 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <span className="font-serif text-terracotta text-5xl leading-none block mb-2">"</span>
              <p className="text-slate-600 italic mb-6 text-sm leading-relaxed">
                My confidence is restored. I’m more vocal, more assertive, and taking the lead. I connect with my team at a human level.
              </p>
              <div>
                <p className="font-bold text-navy">Sweetness</p>
                <p className="text-xs text-slate-500 uppercase tracking-wide">Marketing Manager</p>
              </div>
            </div>

            {/* Review 4 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 md:col-span-2 lg:col-span-1">
              <span className="font-serif text-terracotta text-5xl leading-none block mb-2">"</span>
              <p className="text-slate-600 italic mb-6 text-sm leading-relaxed">
                This course helped me face internal barriers. The biggest takeaway was crystallising my thinking. In corporate, structure is given — this helped me define the impact I want to make.
              </p>
              <div>
                <p className="font-bold text-navy">Caroline</p>
                <p className="text-xs text-slate-500 uppercase tracking-wide">Leadership Development Executive</p>
              </div>
            </div>

            {/* Review 5 */}
            <div className="bg-alabaster p-8 rounded-2xl shadow-sm border border-slate-200">
              <span className="font-serif text-slate-300 text-5xl leading-none block mb-2">"</span>
              <p className="text-slate-600 italic mb-6 font-medium text-lg">
                How I wish I had learnt this 20 years ago.
              </p>
              <div>
                <p className="font-bold text-navy">Nomsa</p>
                <p className="text-xs text-slate-500 uppercase tracking-wide">General Manager</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 6. Bottom CTA (Apply Now) */}
      <section id="apply" className="py-24 bg-terracotta text-center px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">Ready to lead with calm authority?</h2>
          <p className="text-xl text-white/90 mb-10">
            Join the Leadership for Women Transformative Process and build the internal system required for sustainable success.
          </p>
          
          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-2xl max-w-xl mx-auto inline-block w-full">
            <p className="text-slate-500 mb-8 font-medium">Choose how you'd like to begin your journey:</p>
            <div className="flex flex-col gap-4">
              <Link to="/apply" className="w-full bg-navy text-white px-8 py-4 rounded font-bold text-lg hover:bg-slate-800 transition-colors">
                Apply Now
              </Link>
              <div className="relative flex items-center py-2">
                <div className="flex-grow border-t border-slate-200"></div>
                <span className="flex-shrink-0 mx-4 text-slate-400 text-sm font-semibold uppercase">Or</span>
                <div className="flex-grow border-t border-slate-200"></div>
              </div>
              <a href="mailto:mavism@tb2b.co.za" className="w-full border-2 border-slate-300 text-navy px-8 py-4 rounded font-bold hover:border-navy transition-colors">
                Book a Discovery Call
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Simplified Footer */}
      <footer className="bg-slate-900 py-8 text-center border-t border-slate-800">
        <p className="text-slate-500 text-sm">&copy; 2026 Dr Mavis Mazhura. All rights reserved.</p>
      </footer>
    </div>
  );
}
