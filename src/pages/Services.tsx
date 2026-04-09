export default function Services() {
  return (
    <main>
      {/* 1. Services Hero */}
      <section className="pt-32 pb-16 lg:pt-48 lg:pb-24 bg-white text-center px-6 border-b border-slate-200">
        <div className="max-w-3xl mx-auto">
          <span className="text-terracotta font-semibold tracking-widest uppercase text-sm mb-4 block">Practice Areas</span>
          <h1 className="text-5xl lg:text-6xl font-serif text-navy leading-tight mb-6">
            Transforming Leaders & Organisations
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Process-driven, neuroscience-informed methodologies designed to create lasting behavioural change, high-performing teams, and measurable ROI.
          </p>
        </div>
      </section>

      {/* 2. Leadership Coaching Programmes */}
      <section className="py-24 bg-alabaster">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 md:flex justify-between items-end border-b border-slate-200 pb-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-sage/20 text-navy rounded flex items-center justify-center font-bold font-serif text-xl">1</div>
                <h2 className="text-3xl md:text-4xl font-serif text-navy">Leadership Coaching Programmes</h2>
              </div>
              <p className="text-slate-600">Our structured programmes are not just training events; they are comprehensive change processes that include:</p>
            </div>
          </div>

          {/* The Process Features */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm flex flex-col items-center text-center">
              <svg className="w-8 h-8 text-terracotta mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
              <h4 className="font-bold text-navy text-sm mb-2">Weekly Coaching</h4>
              <p className="text-xs text-slate-500">Consistent, structured guidance over time.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm flex flex-col items-center text-center">
              <svg className="w-8 h-8 text-terracotta mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path></svg>
              <h4 className="font-bold text-navy text-sm mb-2">Action Plans</h4>
              <p className="text-xs text-slate-500">Practical frameworks for daily implementation.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm flex flex-col items-center text-center">
              <svg className="w-8 h-8 text-terracotta mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
              <h4 className="font-bold text-navy text-sm mb-2">Multi-Sensory Learning</h4>
              <p className="text-xs text-slate-500">Manuals, audio, and robust reflection tools.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm flex flex-col items-center text-center">
              <svg className="w-8 h-8 text-terracotta mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"></path></svg>
              <h4 className="font-bold text-navy text-sm mb-2">Measurable ROI</h4>
              <p className="text-xs text-slate-500">Behavioural tracking to prove tangible growth.</p>
            </div>
          </div>

          {/* Core Programmes Grid */}
          <h3 className="text-xl font-serif text-navy mb-6">Core Programmes</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-5 bg-white border border-slate-200 rounded-lg hover:border-sage hover:shadow-md transition-all group cursor-pointer relative overflow-hidden">
              <div className="absolute top-0 right-0 w-2 h-full bg-terracotta"></div>
              <h4 className="font-bold text-navy group-hover:text-terracotta transition-colors">Leadership for Women (Flagship)</h4>
            </div>
            <div className="p-5 bg-white border border-slate-200 rounded-lg hover:border-sage hover:shadow-md transition-all group cursor-pointer">
              <h4 className="font-bold text-navy group-hover:text-terracotta transition-colors">Effective Strategic Leadership</h4>
            </div>
            <div className="p-5 bg-white border border-slate-200 rounded-lg hover:border-sage hover:shadow-md transition-all group cursor-pointer">
              <h4 className="font-bold text-navy group-hover:text-terracotta transition-colors">Effective Personal Leadership</h4>
            </div>
            <div className="p-5 bg-white border border-slate-200 rounded-lg hover:border-sage hover:shadow-md transition-all group cursor-pointer">
              <h4 className="font-bold text-navy group-hover:text-terracotta transition-colors">Effective Team Dynamics</h4>
            </div>
            <div className="p-5 bg-white border border-slate-200 rounded-lg hover:border-sage hover:shadow-md transition-all group cursor-pointer">
              <h4 className="font-bold text-navy group-hover:text-terracotta transition-colors">Attitude is Everything</h4>
            </div>
            <div className="p-5 bg-white border border-slate-200 rounded-lg hover:border-sage hover:shadow-md transition-all group cursor-pointer">
              <h4 className="font-bold text-navy group-hover:text-terracotta transition-colors">Effective Personal Productivity</h4>
            </div>
            <div className="p-5 bg-white border border-slate-200 rounded-lg hover:border-sage hover:shadow-md transition-all group cursor-pointer">
              <h4 className="font-bold text-navy group-hover:text-terracotta transition-colors">Grand Masters of Success</h4>
            </div>
            <div className="p-5 bg-white border border-slate-200 rounded-lg hover:border-sage hover:shadow-md transition-all group cursor-pointer">
              <h4 className="font-bold text-navy group-hover:text-terracotta transition-colors">Effective Leadership Development</h4>
            </div>
            <div className="p-5 bg-white border border-slate-200 rounded-lg hover:border-sage hover:shadow-md transition-all group cursor-pointer">
              <h4 className="font-bold text-navy group-hover:text-terracotta transition-colors">Effective Coaching & Empowerment</h4>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Organisational Development Consulting */}
      <section className="py-24 bg-navy text-white relative overflow-hidden">
        {/* Abstract shape */}
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full border-[60px] border-white/5 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="mb-16 md:flex justify-between items-end border-b border-slate-700 pb-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-terracotta text-white rounded flex items-center justify-center font-bold font-serif text-xl">2</div>
                <h2 className="text-3xl md:text-4xl font-serif">Organisational Development Consulting</h2>
              </div>
              <p className="text-slate-300">Supporting organisations to build high-performing, psychologically safe, and aligned teams across all levels of the enterprise.</p>
            </div>
          </div>

          {/* Interventions List */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
            <div>
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-4 text-sage">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"></path></svg>
              </div>
              <h4 className="text-lg font-bold mb-2">Organisational Diagnostics</h4>
              <p className="text-sm text-slate-400">Deep-dive assessments of culture, engagement, and leadership effectiveness.</p>
            </div>
            
            <div>
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-4 text-sage">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
              </div>
              <h4 className="text-lg font-bold mb-2">Leadership Frameworks</h4>
              <p className="text-sm text-slate-400">Customized development pathways tailored to your specific organizational goals.</p>
            </div>

            <div>
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-4 text-sage">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
              </div>
              <h4 className="text-lg font-bold mb-2">Strategic Planning</h4>
              <p className="text-sm text-slate-400">Facilitating alignment between executive vision and team execution.</p>
            </div>

            <div>
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-4 text-sage">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
              </div>
              <h4 className="text-lg font-bold mb-2">Change Management</h4>
              <p className="text-sm text-slate-400">Guiding teams through transitions with structural and psychological support.</p>
            </div>

            <div>
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-4 text-sage">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
              </div>
              <h4 className="text-lg font-bold mb-2">Talent Development</h4>
              <p className="text-sm text-slate-400">Identifying and nurturing internal potential for future succession.</p>
            </div>

            <div>
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-4 text-sage">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
              </div>
              <h4 className="text-lg font-bold mb-2">Team Effectiveness</h4>
              <p className="text-sm text-slate-400">Interventions to resolve bottlenecks and optimize collaboration.</p>
            </div>

            <div className="md:col-span-2">
              <div className="w-12 h-12 bg-terracotta/20 rounded-full flex items-center justify-center mb-4 text-terracotta">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
              </div>
              <h4 className="text-lg font-bold mb-2">Safe Spaces & Sense-Making Sessions</h4>
              <p className="text-sm text-slate-400 max-w-sm">Facilitated dialogues designed to build psychological safety, resolve conflict, and process organizational complexity collectively.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Leadership Diagnostics & Tools */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 border-b border-slate-200 pb-8 text-center max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-10 h-10 bg-slate-100 text-slate-500 rounded flex items-center justify-center font-bold font-serif text-xl">3</div>
              <h2 className="text-3xl md:text-4xl font-serif text-navy">Leadership Diagnostics & Tools</h2>
            </div>
            <p className="text-slate-600">Empirical, data-driven assessments designed to provide a baseline for personal reflection and organizational strategy.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-alabaster p-8 rounded-2xl flex items-start gap-6 border border-slate-200 hover:border-terracotta transition-colors group">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-sm flex-shrink-0 text-navy group-hover:text-terracotta transition-colors">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
              </div>
              <div>
                <h4 className="text-xl font-bold text-navy mb-2 group-hover:text-terracotta transition-colors">Sustainable Leadership Scorecard</h4>
                <p className="text-sm text-slate-600 mb-4">Measure your current levels of capacity, burnout risk, and systemic leadership habits.</p>
                <a href="#" className="text-sm font-semibold text-navy underline decoration-sage decoration-2">Take the Scorecard</a>
              </div>
            </div>

            <div className="bg-alabaster p-8 rounded-2xl flex items-start gap-6 border border-slate-200 hover:border-terracotta transition-colors group">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-sm flex-shrink-0 text-navy group-hover:text-terracotta transition-colors">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <div>
                <h4 className="text-xl font-bold text-navy mb-2 group-hover:text-terracotta transition-colors">Emotional Patterns Diagnostic</h4>
                <p className="text-sm text-slate-600">Identify underlying emotional triggers and behavioral loops impacting your performance.</p>
              </div>
            </div>

            <div className="bg-alabaster p-8 rounded-2xl flex items-start gap-6 border border-slate-200 hover:border-terracotta transition-colors group">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-sm flex-shrink-0 text-navy group-hover:text-terracotta transition-colors">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <div>
                <h4 className="text-xl font-bold text-navy mb-2 group-hover:text-terracotta transition-colors">Financial Confidence Diagnostic</h4>
                <p className="text-sm text-slate-600">Analyze the psychological boundaries and beliefs affecting your wealth and decision-making.</p>
              </div>
            </div>

            <div className="bg-alabaster p-8 rounded-2xl flex items-start gap-6 border border-slate-200 hover:border-terracotta transition-colors group">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-sm flex-shrink-0 text-navy group-hover:text-terracotta transition-colors">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
              </div>
              <div>
                <h4 className="text-xl font-bold text-navy mb-2 group-hover:text-terracotta transition-colors">Team Dynamics Assessment</h4>
                <p className="text-sm text-slate-600">A comprehensive look at trust, conflict resolution, and alignment within your team.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA Footer */}
      <section id="quote" className="py-20 bg-slate-100 border-t border-slate-200 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl font-serif text-navy mb-4">Ready to implement Sustainable Leadership?</h2>
          <p className="text-slate-600 mb-8">Let's discuss how we can tailor our programmes or consulting services for your specific organizational needs.</p>
          <a href="#" className="inline-block bg-terracotta text-white px-8 py-4 rounded font-bold hover:bg-[#c96c51] shadow-lg transition-all">
            Request a Proposal
          </a>
        </div>
      </section>
    </main>
  );
}
