import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <main>
      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 rounded-full bg-sage/20 blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-96 h-96 rounded-full bg-terracotta/10 blur-3xl -z-10"></div>

        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 text-left z-10"
          >
            <span className="text-terracotta font-semibold tracking-widest uppercase text-xs sm:text-sm mb-5 block">
              Leadership Psychologist & Behavioural Science Expert
            </span>
            <h1 className="text-navy text-5xl sm:text-6xl lg:text-7xl font-serif leading-[1.1] mb-6">
              From Overfunctioning to <span className="italic text-slate-600 font-light relative">
                Sustainable
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-sage" viewBox="0 0 100 10" preserveAspectRatio="none" fill="currentColor"><path d="M0 5 Q 50 10 100 5 L 100 10 L 0 10 Z"></path></svg>
              </span> Leadership
            </h1>
            <p className="text-slate-600 text-lg lg:text-xl mb-10 leading-relaxed max-w-lg">
              Developing Sustainable Leadership in organisations. Shift from burnout and overperformance into aligned, influential, and sustainable leadership.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 items-start sm:items-center">
              <Link to="/contact#contact-form" className="w-full sm:w-auto text-center bg-navy text-white px-8 py-4 rounded font-medium hover:bg-slate-800 hover:shadow-xl transition-all duration-300">
                Work With Me
              </Link>
              <Link to="/leadership-for-women" className="w-full sm:w-auto text-center border-2 border-slate-300 text-navy px-8 py-4 rounded font-medium hover:border-navy transition-all duration-300">
                Leadership for Women
              </Link>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2 relative mt-10 lg:mt-0"
          >
            <div className="relative w-full aspect-[4/5] sm:aspect-square lg:aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <img src="/hero-image.png" alt="Dr Mavis Mazhura" className="object-cover w-full h-full object-top" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/30 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -left-4 sm:left-[-2rem] bg-white p-5 shadow-xl rounded-xl max-w-[240px] border-l-4 border-sage animate-float z-20">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 flex items-center justify-center shrink-0">
                  <img src="/logos/lmi logo.png" alt="LMI Logo" className="w-full h-full object-contain" />
                </div>
                <h3 className="text-sm font-bold text-navy leading-tight">LMI Licensed Partner</h3>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">Recognised for excellence in leadership development across Africa & Middle East.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Trust Bar — Scrolling Logo Marquee */}
      <section className="bg-white py-10 border-y border-slate-100 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-center text-xs font-semibold text-slate-400 uppercase tracking-widest mb-8 px-6">Trusted by global organisations</p>
          <div className="relative w-full overflow-hidden">
            {/* Scrolling track — duplicated for seamless loop */}
            <div className="flex animate-marquee hover:[animation-play-state:paused]">
              {[0, 1].map((set) => (
                <div key={set} className="flex shrink-0 items-center gap-16 px-8">
                  {[
                    { src: '/logos/Allan gray logo.png', alt: 'Allan Gray' },
                    { src: '/logos/CAA logo.png', alt: 'CAA' },
                    { src: '/logos/GP logo.png', alt: 'Gauteng Province' },
                    { src: '/logos/NBCRFLI logo.png', alt: 'NBCRFLI' },
                    { src: '/logos/lactalis logo.png', alt: 'Lactalis' },
                    { src: '/logos/lmi logo.png', alt: 'LMI' },
                    { src: '/logos/rand park logo.png', alt: 'Rand Park' },
                    { src: '/logos/teta logo.png', alt: 'TETA' },
                    { src: '/logos/thungela logo.png', alt: 'Thungela' },
                  ].map((logo) => (
                    <img
                      key={`${set}-${logo.alt}`}
                      src={logo.src}
                      alt={logo.alt}
                      className="h-12 md:h-14 w-auto object-contain transition-all duration-500"
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* 3. The Philosophy Section */}
      <section className="py-24 bg-alabaster overflow-hidden">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto px-6 text-center"
        >
          <svg className="w-10 h-10 mx-auto text-terracotta mb-6 opacity-50" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
          <h2 className="text-3xl md:text-5xl font-serif text-navy leading-tight mb-8">
            Leadership is not just performance.<br />
            <span className="italic text-slate-500">It is identity. It is emotional capacity. It is sustainability.</span>
          </h2>
          <p className="text-lg text-slate-600 mb-16 max-w-2xl mx-auto">
            Working at the intersection of identity, emotional renewal, and leadership performance, we help leaders build internal systems to reduce emotional depletion and expand capacity without overworking.
          </p>

          {/* Foundation Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
            <div className="p-6 bg-white rounded-xl shadow-sm border border-slate-100">
              <div className="w-10 h-10 bg-sage/20 rounded-lg flex items-center justify-center mb-4 text-navy">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
              </div>
              <h3 className="font-semibold text-navy mb-2">Adult Development Theory</h3>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-sm border border-slate-100">
              <div className="w-10 h-10 bg-sage/20 rounded-lg flex items-center justify-center mb-4 text-navy">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>
              </div>
              <h3 className="font-semibold text-navy mb-2">Behavioural Science</h3>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-sm border border-slate-100">
              <div className="w-10 h-10 bg-sage/20 rounded-lg flex items-center justify-center mb-4 text-navy">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
              </div>
              <h3 className="font-semibold text-navy mb-2">Emotional Intelligence</h3>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-sm border border-slate-100">
              <div className="w-10 h-10 bg-sage/20 rounded-lg flex items-center justify-center mb-4 text-navy">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"/><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"/><path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"/><path d="M17.599 6.5a3 3 0 0 0 .399-1.375"/><path d="M6.002 5.125A3 3 0 0 0 6.401 6.5"/><path d="M3.477 10.896a4 4 0 0 1 .585-.396"/><path d="M19.938 10.5a4 4 0 0 1 .585.396"/><path d="M6 18a4 4 0 0 1-1.967-.516"/><path d="M19.967 17.484A4 4 0 0 1 18 18"/></svg>
              </div>
              <h3 className="font-semibold text-navy mb-2">Neuroscience & Change</h3>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 4. Core Services Teaser */}
      <section id="services" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-terracotta font-semibold tracking-widest uppercase text-sm mb-3 block">How We Work</span>
            <h2 className="text-4xl font-serif text-navy">Transforming Individuals & Organisations</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-alabaster p-10 rounded-2xl hover:shadow-xl transition-shadow group border-t-4 border-transparent hover:border-sage"
            >
              <h3 className="text-2xl font-serif text-navy mb-4 group-hover:text-terracotta transition-colors">Leadership Coaching</h3>
              <p className="text-slate-600 mb-8 leading-relaxed">Process-driven, neuroscience-informed programmes designed to create lasting behavioural change with measurable ROI.</p>
              <ul className="space-y-3 mb-8 text-sm text-slate-600">
                <li className="flex items-center"><svg className="w-4 h-4 text-sage mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> Weekly coaching sessions</li>
                <li className="flex items-center"><svg className="w-4 h-4 text-sage mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> Action plans & frameworks</li>
              </ul>
              <Link to="/services" className="text-navy font-semibold inline-flex items-center group-hover:text-terracotta">
                View Programmes <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </Link>
            </motion.div>

            {/* Card 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-alabaster p-10 rounded-2xl hover:shadow-xl transition-shadow group border-t-4 border-transparent hover:border-terracotta"
            >
              <h3 className="text-2xl font-serif text-navy mb-4 group-hover:text-terracotta transition-colors">Organisational Dev.</h3>
              <p className="text-slate-600 mb-8 leading-relaxed">Supporting organisations to build high-performing, psychologically safe, and aligned leadership teams.</p>
              <ul className="space-y-3 mb-8 text-sm text-slate-600">
                <li className="flex items-center"><svg className="w-4 h-4 text-terracotta mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> Organisational diagnostics</li>
                <li className="flex items-center"><svg className="w-4 h-4 text-terracotta mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> Culture & change management</li>
              </ul>
              <Link to="/services" className="text-navy font-semibold inline-flex items-center group-hover:text-terracotta">
                View Consulting <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </Link>
            </motion.div>

            {/* Card 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-navy p-10 rounded-2xl hover:shadow-xl transition-shadow group border-t-4 border-sage"
            >
              <h3 className="text-2xl font-serif text-white mb-4">Keynotes & Masterclasses</h3>
              <p className="text-slate-300 mb-8 leading-relaxed">Signature keynotes on The Overperformance Trap, Emotional Renewal, and Leadership Identity Shifts.</p>
              <ul className="space-y-3 mb-8 text-sm text-slate-300">
                <li className="flex items-center"><svg className="w-4 h-4 text-sage mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> Corporate events & summits</li>
                <li className="flex items-center"><svg className="w-4 h-4 text-sage mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> Bespoke masterclasses</li>
              </ul>
              <Link to="/contact" className="text-sage font-semibold inline-flex items-center hover:text-white transition-colors">
                Book Dr. Mazhura <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. Flagship Teaser */}
      <section id="flagship" className="py-24 bg-[#E27D60]/5 border-y border-terracotta/10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <img src="/transformative-process.jpg" alt="Women in Leadership" className="rounded-2xl shadow-xl w-full object-cover aspect-[4/3]" />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2"
          >
            <span className="inline-block px-3 py-1 bg-navy text-white text-xs font-bold uppercase tracking-wider rounded mb-6">Flagship Programme</span>
            <h2 className="text-4xl font-serif text-navy mb-6">Leadership for Women Transformative Process</h2>
            <p className="text-lg text-slate-600 mb-6">
              A structured 12-week leadership process designed for senior women leaders ready to rebuild executive presence, internal authority, and balance empathy with the "hard" requirements of B2B leadership.
            </p>
            <div className="flex items-center gap-4 mb-10 text-slate-600 font-medium">
              <span className="flex items-center"><svg className="w-5 h-5 text-terracotta mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg> Overfunctioning to Ownership</span>
              <span className="flex items-center"><svg className="w-5 h-5 text-terracotta mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg> Burnout to Sustainability</span>
            </div>
            <Link to="/leadership-for-women" className="inline-block border-2 border-navy text-navy px-8 py-3 rounded font-bold hover:bg-navy hover:text-white transition-colors">
              Explore the Programme
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 6. Scorecard Lead Gen */}
      <section id="scorecard" className="py-24 bg-navy relative overflow-hidden">
        {/* Abstract graphics */}
        <div className="absolute top-0 right-0 w-64 h-64 border-[40px] border-white/5 rounded-full -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 border-[60px] border-sage/10 rounded-full -ml-40 -mb-40"></div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto px-6 text-center relative z-10"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">Are you carrying too much?</h2>
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
            Always "on", delivering results, but feeling emotionally exhausted? Discover your baseline and learn what needs to shift.
          </p>
          <Link to="/scorecard" className="inline-block bg-sage text-navy px-10 py-5 rounded-md font-bold text-lg shadow-[0_0_20px_rgba(134,239,172,0.3)] hover:bg-white hover:shadow-xl transition-all duration-300">
            Take the Sustainable Leadership Scorecard
          </Link>
          <p className="mt-6 text-slate-400 text-sm">Takes less than 3 minutes. Receive immediate actionable insights.</p>
        </motion.div>
      </section>
    </main>
  );
}
