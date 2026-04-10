import { motion } from 'motion/react';

export default function About() {
  return (
    <main>
      {/* 1. Hero / Bio Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-24 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Image Column */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-5/12 relative"
          >
            <div className="absolute -inset-4 bg-sage/20 rounded-2xl transform -rotate-3 -z-10"></div>
            <img src="/hero-image.png" alt="Dr Mavis Mazhura Portrait" className="rounded-2xl shadow-xl w-full object-cover aspect-[4/5]" />
            
            {/* Credential Overlay */}
            <div className="absolute bottom-6 -right-6 md:-right-10 bg-navy p-5 rounded-xl shadow-2xl max-w-[220px] border-r-4 border-terracotta text-white">
              <p className="text-xs text-slate-400 font-medium uppercase tracking-wider mb-1">Credentials</p>
              <p className="font-bold text-sm leading-tight">Psy.D in Leadership Psychology</p>
              <div className="w-8 h-1 bg-sage my-3"></div>
              <p className="text-xs text-slate-300">Multiple award-winning facilitator & global coach.</p>
            </div>
          </motion.div>

          {/* Text Column */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-7/12"
          >
            <h1 className="text-5xl lg:text-6xl font-serif text-navy leading-[1.1] mb-6">
              Dr Mavis Mazhura
            </h1>
            <h2 className="text-xl text-terracotta font-medium mb-8">
              Leadership Psychologist, Behavioural Science & Performance Specialist, and Global Leadership Development Expert.
            </h2>
            
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              <p>
                Dr. Mazhura works at the intersection of <strong className="text-navy font-semibold">identity, emotional renewal, and leadership performance</strong>. She dedicates her practice to helping leaders—especially women—shift from overfunctioning and burnout into aligned, influential, and sustainable leadership.
              </p>
              <p>
                A multiple award-winning facilitator and coach, she is a licensed partner of <strong className="text-navy font-semibold">Leadership Management International (LMI)</strong>, where she has been recognised for excellence in leadership development across Africa and the Middle East.
              </p>
              <p>
                Having worked, studied, and delivered programmes globally—including across Africa, Europe, North America, Asia, and Australia—Dr. Mazhura brings a truly cosmopolitan and systems-aware leadership perspective to every engagement.
              </p>
            </div>
          </motion.div>

        </div>
      </section>

      {/* 2. The Philosophy Banner */}
      <section className="py-24 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 pattern-bg opacity-10"></div>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto px-6 text-center relative z-10"
        >
          <svg className="w-12 h-12 mx-auto text-sage mb-8 opacity-50" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
          <h2 className="text-3xl md:text-5xl font-serif text-white leading-tight mb-8">
            "Leadership is not just performance.<br />
            <span className="text-sage italic">It is identity. It is emotional capacity. It is sustainability.</span>"
          </h2>
          <div className="w-20 h-1 bg-terracotta mx-auto mb-8"></div>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            Using the Leadership for Women Transformative Process (LFWTP), Dr. Mazhura helps leaders build internal leadership systems, reduce emotional depletion, expand capacity without overworking, and lead with clarity, authority, and wellbeing.
          </p>
        </motion.div>
      </section>

      {/* 3. The Methodology (Integrations) */}
      <section className="py-24 bg-alabaster">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-terracotta font-semibold tracking-widest uppercase text-sm mb-3 block">Her Approach</span>
            <h2 className="text-4xl font-serif text-navy">The Science of Leadership</h2>
            <p className="text-slate-600 mt-4 max-w-2xl mx-auto">Her work integrates four distinct pillars to create measurable, sustainable behavioural change.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Pillar 1 */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow hover:border-sage border-b-4 border-transparent">
              <div className="w-12 h-12 bg-sage/20 rounded-full flex items-center justify-center mb-6 text-navy">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
              </div>
              <h3 className="text-lg font-bold text-navy mb-3">Adult Development Theory</h3>
              <p className="text-sm text-slate-500 leading-relaxed">Understanding how leaders construct meaning and evolve their psychological complexity over time.</p>
            </div>
            {/* Pillar 2 */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow hover:border-sage border-b-4 border-transparent">
              <div className="w-12 h-12 bg-sage/20 rounded-full flex items-center justify-center mb-6 text-navy">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
              </div>
              <h3 className="text-lg font-bold text-navy mb-3">Behavioural Science</h3>
              <p className="text-sm text-slate-500 leading-relaxed">Applying empirical research to understand habits, decision-making, and performance optimization.</p>
            </div>
            {/* Pillar 3 */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow hover:border-sage border-b-4 border-transparent">
              <div className="w-12 h-12 bg-sage/20 rounded-full flex items-center justify-center mb-6 text-navy">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
              </div>
              <h3 className="text-lg font-bold text-navy mb-3">Emotional Intelligence</h3>
              <p className="text-sm text-slate-500 leading-relaxed">Building emotional regulation as the foundational infrastructure for leadership capacity.</p>
            </div>
            {/* Pillar 4 */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow hover:border-sage border-b-4 border-transparent">
              <div className="w-12 h-12 bg-sage/20 rounded-full flex items-center justify-center mb-6 text-navy">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
              </div>
              <h3 className="text-lg font-bold text-navy mb-3">Neuroscience of Change</h3>
              <p className="text-sm text-slate-500 leading-relaxed">Leveraging brain plasticity to reshape ingrained patterns of overfunctioning and stress.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Global Footprint & Books Teaser */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Countries List */}
          <div>
            <span className="text-terracotta font-semibold tracking-widest uppercase text-sm mb-3 block">Global Impact</span>
            <h2 className="text-4xl font-serif text-navy mb-6">A Cosmopolitan Perspective</h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Dr. Mazhura’s systems-aware approach has been shaped by delivering coaching, consulting, and keynotes across diverse cultures and continents.
            </p>
            <div className="flex flex-wrap gap-2">
              {/* Badges for top countries to break up text visually */}
              <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded text-sm font-medium">South Africa</span>
              <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded text-sm font-medium">United Kingdom</span>
              <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded text-sm font-medium">United States</span>
              <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded text-sm font-medium">Canada</span>
              <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded text-sm font-medium">Australia</span>
              <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded text-sm font-medium">India</span>
              <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded text-sm font-medium">Netherlands</span>
              <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded text-sm font-medium">Kenya</span>
              <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded text-sm font-medium">Nigeria</span>
              <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded text-sm font-medium">+ 12 more nations</span>
            </div>
          </div>

          {/* Books Teaser */}
          <div className="bg-alabaster p-10 rounded-2xl border border-slate-200">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-navy text-white rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
              </div>
              <h3 className="text-2xl font-serif text-navy">Published Author</h3>
            </div>
            <p className="text-slate-600 mb-6">Dr. Mazhura has published multiple acclaimed works on emotional intelligence, resilience, and leadership, including:</p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start"><svg className="w-5 h-5 text-terracotta mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg><span className="text-sm font-medium text-navy italic">Self-Leadership</span></li>
              <li className="flex items-start"><svg className="w-5 h-5 text-terracotta mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg><span className="text-sm font-medium text-navy italic">Navigating the Rapids and Waves of Life</span></li>
              <li className="flex items-start"><svg className="w-5 h-5 text-terracotta mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg><span className="text-sm font-medium text-navy italic">Managing Emotions for Financial Freedom</span></li>
            </ul>
            <a href="#" className="text-navy font-bold underline decoration-sage decoration-2 hover:text-terracotta transition-colors">
              View All Books & Upcoming Titles
            </a>
          </div>

        </div>
      </section>
    </main>
  );
}
