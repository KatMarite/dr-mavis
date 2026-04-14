import { motion } from 'motion/react';

export default function Media() {
  return (
    <main className="bg-alabaster min-h-screen">
      {/* 1. Hero Section */}
      <section className="pt-32 pb-16 lg:pt-48 lg:pb-24 bg-navy text-white text-center px-6 relative overflow-hidden">
        <img src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" alt="Microphone in studio" className="absolute inset-0 w-full h-full object-cover opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/90 to-transparent"></div>
        {/* Abstract pattern */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-terracotta/10 rounded-full blur-[80px] pointer-events-none -mt-40 -mr-40 z-0"></div>
        
        <div className="max-w-3xl mx-auto relative z-10">
          <span className="text-terracotta font-semibold tracking-widest uppercase text-sm mb-4 block">Television • Radio • Print</span>
          <h1 className="text-5xl lg:text-6xl font-serif leading-tight mb-6">
            In The Media
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed mb-10">
            Dr. Mavis Mazhura is a frequently featured expert on leadership, behavioural science, and executive performance across national and international media platforms.
          </p>
        </div>
      </section>

      {/* 2. Featured Television */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 md:flex justify-between items-end border-b border-slate-200 pb-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-sage/20 text-navy rounded flex items-center justify-center font-bold font-serif text-xl">1</div>
                <h2 className="text-3xl md:text-4xl font-serif text-navy">Television & Broadcasts</h2>
              </div>
              <p className="text-slate-600">Expert commentary and full-length feature interviews on leading news networks.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* TV Feature 1 */}
            <article className="group cursor-pointer">
              <div className="relative aspect-video rounded-2xl overflow-hidden mb-6 bg-slate-900 shadow-lg">
                <img src="https://images.unsplash.com/photo-1626544827763-d516dce335e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="TV set" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-terracotta/90 text-white rounded-full flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform shadow-lg pl-1">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                  </div>
                </div>
                <div className="absolute top-4 left-4 bg-navy text-white text-xs font-bold px-3 py-1 uppercase tracking-wider rounded">SABC News</div>
              </div>
              <h3 className="text-2xl font-serif text-navy mb-3 group-hover:text-terracotta transition-colors">The Psychology of National Leadership</h3>
              <p className="text-slate-600 mb-4">A deep dive into the behavioural patterns required to lead organizations through complex economic transitions on morning television.</p>
            </article>

            {/* TV Feature 2 */}
            <article className="group cursor-pointer">
              <div className="relative aspect-video rounded-2xl overflow-hidden mb-6 bg-slate-900 shadow-lg">
                <img src="https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="TV broadcast" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-terracotta/90 text-white rounded-full flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform shadow-lg pl-1">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                  </div>
                </div>
                <div className="absolute top-4 left-4 bg-navy text-white text-xs font-bold px-3 py-1 uppercase tracking-wider rounded">eNCA</div>
              </div>
              <h3 className="text-2xl font-serif text-navy mb-3 group-hover:text-terracotta transition-colors">Overcoming Executive Burnout in SA</h3>
              <p className="text-slate-600 mb-4">Discussing why high-performing executives hit the burnout wall and actionable systemic shifts they must make to restore capacity.</p>
            </article>
          </div>
        </div>
      </section>

      {/* 3. YouTube & Digital Content */}
      <section className="py-24 bg-alabaster">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 md:flex justify-between items-end border-b border-slate-200 pb-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-sage/20 text-navy rounded flex items-center justify-center font-bold font-serif text-xl">2</div>
                <h2 className="text-3xl md:text-4xl font-serif text-navy">YouTube Series & Shorts</h2>
              </div>
              <p className="text-slate-600">Actionable insights, masterclass excerpts, and digital leadership training content.</p>
            </div>
            <a href="#" className="hidden md:inline-flex items-center text-terracotta font-semibold hover:text-navy transition-colors mb-2">
              Visit Official Channel <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* YouTube 1 */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden group">
              <div className="aspect-video bg-slate-200 relative">
                <img src="https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Digital Talk" className="w-full h-full object-cover" />
                <div className="absolute bottom-3 right-3 bg-black/80 text-white text-xs px-2 py-1 rounded font-medium">12:45</div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-navy/20">
                  <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center shadow-lg pl-1">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                  </div>
                </div>
              </div>
              <div className="p-5">
                <h4 className="font-bold text-navy group-hover:text-terracotta transition-colors mb-2 line-clamp-2">The Hidden Cost of Overfunctioning in Leadership</h4>
                <p className="text-sm text-slate-500 mb-4 line-clamp-2">Discover the breaking point of the high-performer and how to step back without dropping the ball.</p>
              </div>
            </div>

            {/* YouTube 2 */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden group">
              <div className="aspect-video bg-slate-200 relative">
                <img src="https://images.unsplash.com/photo-1531545514251-b159ce8bf590?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Seminar" className="w-full h-full object-cover" />
                <div className="absolute bottom-3 right-3 bg-black/80 text-white text-xs px-2 py-1 rounded font-medium">45:20</div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-navy/20">
                  <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center shadow-lg pl-1">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                  </div>
                </div>
              </div>
              <div className="p-5">
                <h4 className="font-bold text-navy group-hover:text-terracotta transition-colors mb-2 line-clamp-2">Masterclass: Reframing Organisational Conflict</h4>
                <p className="text-sm text-slate-500 mb-4 line-clamp-2">Full recording of the exclusive masterclass on psychological safety and processing conflict as an executive.</p>
              </div>
            </div>

             {/* YouTube 3 */}
             <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden group">
              <div className="aspect-video bg-slate-200 relative">
                <img src="https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Speaking" className="w-full h-full object-cover" />
                <div className="absolute bottom-3 right-3 bg-black/80 text-white text-xs px-2 py-1 rounded font-medium">08:15</div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-navy/20">
                  <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center shadow-lg pl-1">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                  </div>
                </div>
              </div>
              <div className="p-5">
                <h4 className="font-bold text-navy group-hover:text-terracotta transition-colors mb-2 line-clamp-2">Why Attitude Outperforms Talent</h4>
                <p className="text-sm text-slate-500 mb-4 line-clamp-2">A short excerpt exploring the critical importance of adaptable attitude models in turbulent markets.</p>
              </div>
            </div>
          </div>
          
          <div className="text-center md:hidden">
             <a href="#" className="inline-flex items-center text-terracotta font-semibold hover:text-navy transition-colors">
              Visit Official Channel <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </a>
          </div>
        </div>
      </section>

      {/* 4. Radio & Podcasts */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
           <div className="mb-16 md:flex justify-between items-end border-b border-slate-200 pb-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-sage/20 text-navy rounded flex items-center justify-center font-bold font-serif text-xl">3</div>
                <h2 className="text-3xl md:text-4xl font-serif text-navy">Radio & Podcasts</h2>
              </div>
              <p className="text-slate-600">Conversations on human behavior, identity, and personal empowerment.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
            <a href="#" className="flex flex-col sm:flex-row items-center sm:items-stretch bg-alabaster rounded-2xl border border-slate-200 overflow-hidden hover:border-sage hover:shadow-md transition-all group">
               <div className="w-full sm:w-40 h-40 bg-navy flex items-center justify-center flex-shrink-0 relative overflow-hidden">
                 <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent"></div>
                 <svg className="w-12 h-12 text-sage relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path></svg>
               </div>
               <div className="p-6 flex flex-col justify-center">
                 <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Radio 702</div>
                 <h4 className="text-xl font-bold text-navy group-hover:text-sage transition-colors mb-2">Navigating The Corporate Ladder As A Woman</h4>
                 <p className="text-sm text-slate-600">A 30-minute roundtable discussion on the subtle biases and identity shifts required to secure your seat at the table.</p>
               </div>
            </a>

            <a href="#" className="flex flex-col sm:flex-row items-center sm:items-stretch bg-alabaster rounded-2xl border border-slate-200 overflow-hidden hover:border-sage hover:shadow-md transition-all group">
               <div className="w-full sm:w-40 h-40 bg-terracotta flex items-center justify-center flex-shrink-0 relative overflow-hidden">
                 <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent"></div>
                 <svg className="w-12 h-12 text-white relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path></svg>
               </div>
               <div className="p-6 flex flex-col justify-center">
                 <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">The Leadership Blueprint Podcast</div>
                 <h4 className="text-xl font-bold text-navy group-hover:text-terracotta transition-colors mb-2">Episode 45: The End of Burnout</h4>
                 <p className="text-sm text-slate-600">Guest appearance discussing the false necessity of burnout culture and how to lead effectively without running empty.</p>
               </div>
            </a>

          </div>
        </div>
      </section>

      {/* 5. CTA Area */}
      <section className="py-20 bg-slate-900 text-center px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-serif text-white mb-4">Media Inquiries & Interviews</h2>
          <p className="text-slate-400 mb-8">Dr. Mazhura is available for expert commentary, podcast interviews, and television appearances covering human behavior and executive performance.</p>
          <a href="mailto:mavism@tb2b.co.za" className="inline-block bg-terracotta text-white px-8 py-4 rounded font-bold hover:bg-[#c96c51] shadow-lg transition-all">
            Contact Media Team
          </a>
        </div>
      </section>
    </main>
  );
}
