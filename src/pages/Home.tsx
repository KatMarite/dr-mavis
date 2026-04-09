export default function Home() {
  return (
    <main>
      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 rounded-full bg-sage/20 blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-96 h-96 rounded-full bg-terracotta/10 blur-3xl -z-10"></div>

        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="w-full lg:w-1/2 text-left z-10">
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
              <a href="#services" className="w-full sm:w-auto text-center bg-navy text-white px-8 py-4 rounded font-medium hover:bg-slate-800 hover:shadow-xl transition-all duration-300">
                Work With Me
              </a>
              <a href="#flagship" className="w-full sm:w-auto text-center border-2 border-slate-300 text-navy px-8 py-4 rounded font-medium hover:border-navy transition-all duration-300">
                Leadership for Women
              </a>
            </div>
          </div>

          <div className="w-full lg:w-1/2 relative mt-10 lg:mt-0">
            <div className="relative w-full aspect-[4/5] sm:aspect-square lg:aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Dr Mavis Mazhura" className="object-cover w-full h-full object-top" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/30 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -left-4 sm:left-[-2rem] bg-white p-5 shadow-xl rounded-xl max-w-[240px] border-l-4 border-sage animate-float z-20">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-navy"><path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" /></svg>
                </div>
                <h3 className="text-sm font-bold text-navy leading-tight">LMI Licensed Partner</h3>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">Recognised for excellence in leadership development across Africa & Middle East.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Trust Bar */}
      <section className="bg-white py-10 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-xs font-semibold text-slate-400 uppercase tracking-widest mb-6">Trusted by global organisations</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="text-xl font-bold font-serif text-slate-800 flex items-center gap-1"><div className="w-3 h-3 rounded-full bg-red-500"></div><div className="w-3 h-3 rounded-full bg-yellow-500 -ml-2 mix-blend-multiply"></div><span className="ml-1">Mastercard</span></div>
            <div className="text-xl font-black tracking-tighter text-green-700">NEDBANK</div>
            <div className="text-lg font-serif italic text-slate-800">Allan Gray</div>
            <div className="text-xl font-bold tracking-widest text-slate-700">ASTRON</div>
            <div className="text-lg font-bold text-blue-600">RAND WATER</div>
          </div>
        </div>
      </section>

      {/* 3. The Philosophy Section */}
      <section className="py-24 bg-alabaster">
        <div className="max-w-4xl mx-auto px-6 text-center">
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
              <div className="w-10 h-10 bg-sage/20 rounded-lg flex items-center justify-center mb-4 text-navy font-bold">1</div>
              <h3 className="font-semibold text-navy mb-2">Adult Development Theory</h3>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-sm border border-slate-100">
              <div className="w-10 h-10 bg-sage/20 rounded-lg flex items-center justify-center mb-4 text-navy font-bold">2</div>
              <h3 className="font-semibold text-navy mb-2">Behavioural Science</h3>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-sm border border-slate-100">
              <div className="w-10 h-10 bg-sage/20 rounded-lg flex items-center justify-center mb-4 text-navy font-bold">3</div>
              <h3 className="font-semibold text-navy mb-2">Emotional Intelligence</h3>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-sm border border-slate-100">
              <div className="w-10 h-10 bg-sage/20 rounded-lg flex items-center justify-center mb-4 text-navy font-bold">4</div>
              <h3 className="font-semibold text-navy mb-2">Neuroscience & Change</h3>
            </div>
          </div>
        </div>
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
            <div className="bg-alabaster p-10 rounded-2xl hover:shadow-xl transition-shadow group border-t-4 border-transparent hover:border-sage">
              <h3 className="text-2xl font-serif text-navy mb-4 group-hover:text-terracotta transition-colors">Leadership Coaching</h3>
              <p className="text-slate-600 mb-8 leading-relaxed">Process-driven, neuroscience-informed programmes designed to create lasting behavioural change with measurable ROI.</p>
              <ul className="space-y-3 mb-8 text-sm text-slate-600">
                <li className="flex items-center"><svg className="w-4 h-4 text-sage mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> Weekly coaching sessions</li>
                <li className="flex items-center"><svg className="w-4 h-4 text-sage mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> Action plans & frameworks</li>
              </ul>
              <a href="#" className="text-navy font-semibold inline-flex items-center group-hover:text-terracotta">
                View Programmes <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </a>
            </div>

            {/* Card 2 */}
            <div className="bg-alabaster p-10 rounded-2xl hover:shadow-xl transition-shadow group border-t-4 border-transparent hover:border-terracotta">
              <h3 className="text-2xl font-serif text-navy mb-4 group-hover:text-terracotta transition-colors">Organisational Dev.</h3>
              <p className="text-slate-600 mb-8 leading-relaxed">Supporting organisations to build high-performing, psychologically safe, and aligned leadership teams.</p>
              <ul className="space-y-3 mb-8 text-sm text-slate-600">
                <li className="flex items-center"><svg className="w-4 h-4 text-terracotta mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> Organisational diagnostics</li>
                <li className="flex items-center"><svg className="w-4 h-4 text-terracotta mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> Culture & change management</li>
              </ul>
              <a href="#" className="text-navy font-semibold inline-flex items-center group-hover:text-terracotta">
                View Consulting <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </a>
            </div>

            {/* Card 3 */}
            <div className="bg-navy p-10 rounded-2xl hover:shadow-xl transition-shadow group border-t-4 border-sage">
              <h3 className="text-2xl font-serif text-white mb-4">Keynotes & Masterclasses</h3>
              <p className="text-slate-300 mb-8 leading-relaxed">Signature keynotes on The Overperformance Trap, Emotional Renewal, and Leadership Identity Shifts.</p>
              <ul className="space-y-3 mb-8 text-sm text-slate-300">
                <li className="flex items-center"><svg className="w-4 h-4 text-sage mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> Corporate events & summits</li>
                <li className="flex items-center"><svg className="w-4 h-4 text-sage mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> Bespoke masterclasses</li>
              </ul>
              <a href="#" className="text-sage font-semibold inline-flex items-center hover:text-white transition-colors">
                Book Dr. Mazhura <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Flagship Teaser */}
      <section id="flagship" className="py-24 bg-[#E27D60]/5 border-y border-terracotta/10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2">
            <img src="https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Women in Leadership" className="rounded-2xl shadow-xl w-full object-cover aspect-[4/3]" />
          </div>
          <div className="w-full lg:w-1/2">
            <span className="inline-block px-3 py-1 bg-navy text-white text-xs font-bold uppercase tracking-wider rounded mb-6">Flagship Programme</span>
            <h2 className="text-4xl font-serif text-navy mb-6">Leadership for Women Transformative Process</h2>
            <p className="text-lg text-slate-600 mb-6">
              A structured 12-week leadership process designed for senior women leaders ready to rebuild executive presence, internal authority, and balance empathy with the "hard" requirements of B2B leadership.
            </p>
            <div className="flex items-center gap-4 mb-10 text-slate-600 font-medium">
              <span className="flex items-center"><svg className="w-5 h-5 text-terracotta mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg> Overfunctioning to Ownership</span>
              <span className="flex items-center"><svg className="w-5 h-5 text-terracotta mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg> Burnout to Sustainability</span>
            </div>
            <a href="#" className="inline-block border-2 border-navy text-navy px-8 py-3 rounded font-bold hover:bg-navy hover:text-white transition-colors">
              Explore the Programme
            </a>
          </div>
        </div>
      </section>

      {/* 6. Scorecard Lead Gen */}
      <section id="scorecard" className="py-24 bg-navy relative overflow-hidden">
        {/* Abstract graphics */}
        <div className="absolute top-0 right-0 w-64 h-64 border-[40px] border-white/5 rounded-full -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 border-[60px] border-sage/10 rounded-full -ml-40 -mb-40"></div>
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">Are you carrying too much?</h2>
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
            Always "on", delivering results, but feeling emotionally exhausted? Discover your baseline and learn what needs to shift.
          </p>
          <a href="#" className="inline-block bg-sage text-navy px-10 py-5 rounded-md font-bold text-lg shadow-[0_0_20px_rgba(134,239,172,0.3)] hover:bg-white hover:shadow-xl transition-all duration-300">
            Take the Sustainable Leadership Scorecard
          </a>
          <p className="mt-6 text-slate-400 text-sm">Takes less than 3 minutes. Receive immediate actionable insights.</p>
        </div>
      </section>
    </main>
  );
}
