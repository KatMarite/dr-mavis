export default function Keynotes() {
  return (
    <main>
      {/* 1. Hero Section */}
      <section className="pt-32 pb-16 lg:pt-48 lg:pb-24 bg-navy text-white text-center px-6 relative overflow-hidden">
        {/* Abstract glowing orb */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sage/10 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="max-w-3xl mx-auto relative z-10">
          <span className="text-sage font-semibold tracking-widest uppercase text-sm mb-4 block">For the Stage & Boardroom</span>
          <h1 className="text-5xl lg:text-6xl font-serif leading-tight mb-6">
            Shaping the Global Conversation on Leadership
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed mb-10">
            Dr. Mazhura brings her intersectional approach of behavioural science, identity, and performance to stages around the world.
          </p>
          <div className="flex justify-center gap-4">
            <a href="#signature" className="bg-sage text-navy px-8 py-4 rounded font-bold shadow-lg hover:bg-white transition-all duration-300">
              Explore Signature Talks
            </a>
          </div>
        </div>
      </section>

      {/* 2. Signature Keynotes */}
      <section id="signature" className="py-24 bg-alabaster">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 md:flex justify-between items-end border-b border-slate-200 pb-8">
            <div className="max-w-2xl">
              <span className="text-terracotta font-semibold tracking-widest uppercase text-sm mb-2 block">The Main Stage</span>
              <h2 className="text-3xl md:text-4xl font-serif text-navy">Signature Keynotes</h2>
            </div>
          </div>

          {/* Keynotes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Keynote 1 */}
            <article className="bg-white p-8 lg:p-10 rounded-2xl shadow-sm border border-slate-100 relative group overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-sage transition-all group-hover:w-3"></div>
              <span className="text-5xl font-serif text-slate-100 absolute top-4 right-6 pointer-events-none">01</span>
              <h3 className="text-2xl lg:text-3xl font-serif text-navy mb-4 relative z-10 pr-10">Sustainable Leadership: <br /><span className="text-slate-500 text-xl lg:text-2xl italic">From Capacity Depletion to Renewal</span></h3>
              <p className="text-slate-600 mb-8 leading-relaxed">How high-performing leaders rebuild energy, clarity, and long-term effectiveness without sacrificing operational results.</p>
              <a href="#book-dr-mavis" className="inline-flex items-center text-navy font-bold hover:text-sage transition-colors">
                Inquire about this topic <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </a>
            </article>

            {/* Keynote 2 */}
            <article className="bg-white p-8 lg:p-10 rounded-2xl shadow-sm border border-slate-100 relative group overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-terracotta transition-all group-hover:w-3"></div>
              <span className="text-5xl font-serif text-slate-100 absolute top-4 right-6 pointer-events-none">02</span>
              <h3 className="text-2xl lg:text-3xl font-serif text-navy mb-4 relative z-10 pr-10">The Overperformance Trap</h3>
              <p className="text-slate-600 mb-8 leading-relaxed">Why working harder is no longer the solution—and the behavioural science of what successful leaders must do instead to scale their impact.</p>
              <a href="#book-dr-mavis" className="inline-flex items-center text-navy font-bold hover:text-terracotta transition-colors">
                Inquire about this topic <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </a>
            </article>

            {/* Keynote 3 */}
            <article className="bg-white p-8 lg:p-10 rounded-2xl shadow-sm border border-slate-100 relative group overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-navy transition-all group-hover:w-3"></div>
              <span className="text-5xl font-serif text-slate-100 absolute top-4 right-6 pointer-events-none">03</span>
              <h3 className="text-2xl lg:text-3xl font-serif text-navy mb-4 relative z-10 pr-10">Leadership Identity Shift</h3>
              <p className="text-slate-600 mb-8 leading-relaxed">The critical psychological transition from doing the work to leading the strategic vision: stepping firmly into executive authority.</p>
              <a href="#book-dr-mavis" className="inline-flex items-center text-navy font-bold hover:text-slate-600 transition-colors">
                Inquire about this topic <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </a>
            </article>

            {/* Keynote 4 */}
            <article className="bg-white p-8 lg:p-10 rounded-2xl shadow-sm border border-slate-100 relative group overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-slate-300 transition-all group-hover:w-3"></div>
              <span className="text-5xl font-serif text-slate-100 absolute top-4 right-6 pointer-events-none">04</span>
              <h3 className="text-2xl lg:text-3xl font-serif text-navy mb-4 relative z-10 pr-10">Emotional Renewal as Leadership Infrastructure</h3>
              <p className="text-slate-600 mb-8 leading-relaxed">Why emotional regulation is not a "soft skill," but the foundational infrastructure required for elite leadership performance.</p>
              <a href="#book-dr-mavis" className="inline-flex items-center text-navy font-bold hover:text-slate-600 transition-colors">
                Inquire about this topic <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </a>
            </article>
          </div>
        </div>
      </section>

      {/* 3. Masterclasses & Workshops */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-terracotta font-semibold tracking-widest uppercase text-sm mb-2 block">Deep Dives</span>
            <h2 className="text-3xl md:text-4xl font-serif text-navy mb-4">Masterclasses & Workshops</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Interactive, framework-driven sessions designed for corporate offsites, executive retreats, and targeted team interventions.</p>
          </div>

          {/* Masterclass Scannable Grid */}
          <div className="bg-alabaster p-8 md:p-12 rounded-2xl border border-slate-100 shadow-sm">
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-8">
              {/* Highlighting the Flagship */}
              <li className="flex items-start col-span-1 md:col-span-2 lg:col-span-3 mb-4 pb-4 border-b border-slate-200">
                <svg className="w-5 h-5 text-terracotta mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                <span className="text-navy font-bold text-lg">Leadership for Women <span className="text-terracotta text-sm uppercase tracking-widest ml-2">(Flagship Masterclass)</span></span>
              </li>
              
              {/* Standard List */}
              <li className="flex items-start"><svg className="w-5 h-5 text-sage mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg><span className="text-slate-600 text-sm font-medium">Executive Emotional Intelligence</span></li>
              <li className="flex items-start"><svg className="w-5 h-5 text-sage mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg><span className="text-slate-600 text-sm font-medium">Psychological Safety & Wellbeing</span></li>
              <li className="flex items-start"><svg className="w-5 h-5 text-sage mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg><span className="text-slate-600 text-sm font-medium">Financial Resilience for Women Leaders</span></li>
              <li className="flex items-start"><svg className="w-5 h-5 text-sage mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg><span className="text-slate-600 text-sm font-medium">Leading Through Change & Complexity</span></li>
              <li className="flex items-start"><svg className="w-5 h-5 text-sage mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg><span className="text-slate-600 text-sm font-medium">Difficult Conversations & Conflict Mastery</span></li>
              <li className="flex items-start"><svg className="w-5 h-5 text-sage mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg><span className="text-slate-600 text-sm font-medium">Leading with Mental Health in Mind</span></li>
              <li className="flex items-start"><svg className="w-5 h-5 text-sage mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg><span className="text-slate-600 text-sm font-medium">Building & Maintaining Relationships</span></li>
              <li className="flex items-start"><svg className="w-5 h-5 text-sage mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg><span className="text-slate-600 text-sm font-medium">Career Resilience</span></li>
              <li className="flex items-start"><svg className="w-5 h-5 text-sage mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg><span className="text-slate-600 text-sm font-medium">Resilient Leadership</span></li>
              <li className="flex items-start"><svg className="w-5 h-5 text-sage mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg><span className="text-slate-600 text-sm font-medium">Fatigue, Stress & Energy Management</span></li>
              <li className="flex items-start"><svg className="w-5 h-5 text-sage mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg><span className="text-slate-600 text-sm font-medium">Making Sense of Depression</span></li>
              <li className="flex items-start"><svg className="w-5 h-5 text-sage mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg><span className="text-slate-600 text-sm font-medium">RESILIENT WOMEN: Personal Power</span></li>
              <li className="flex items-start"><svg className="w-5 h-5 text-sage mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg><span className="text-slate-600 text-sm font-medium">Diversity, Equity and Inclusion</span></li>
              <li className="flex items-start"><svg className="w-5 h-5 text-sage mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg><span className="text-slate-600 text-sm font-medium">Team Effectiveness</span></li>
            </ul>
          </div>
        </div>
      </section>

      {/* 4. CTA Section */}
      <section id="book-dr-mavis" className="py-24 bg-terracotta text-center px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-serif text-white mb-6">Bring Dr. Mazhura to your next event.</h2>
          <p className="text-lg text-white/90 mb-10">Whether it's a global conference keynote or an intimate corporate masterclass, start the conversation today.</p>
          <a href="#" className="inline-block bg-navy text-white px-10 py-5 rounded font-bold shadow-xl hover:bg-slate-800 hover:-translate-y-1 transition-all duration-300">
            Request a Proposal
          </a>
        </div>
      </section>
    </main>
  );
}
