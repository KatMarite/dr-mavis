import { Link } from 'react-router-dom';

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
          <span className="text-terracotta font-semibold tracking-widest uppercase text-sm mb-4 block">Television • YouTube • Print</span>
          <h1 className="text-5xl lg:text-6xl font-serif leading-tight mb-6">
            In The Media
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed mb-10">
            Dr. Mavis Mazhura is a frequently featured expert on leadership, behavioural science, and executive performance across national and international media platforms.
          </p>
        </div>
      </section>

      {/* 2. Featured Television & Broadcasts */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 md:flex justify-between items-end border-b border-slate-200 pb-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-sage/20 text-navy rounded flex items-center justify-center font-bold font-serif text-xl">1</div>
                <h2 className="text-3xl md:text-4xl font-serif text-navy">Television & Broadcasts</h2>
              </div>
              <p className="text-slate-600">Expert commentary and feature interviews on leading news networks.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* CNBC Africa — Financial Literacy */}
            <article className="group">
              <a href="https://www.cnbcafrica.com/media/6068211222001/mavis-ureke-on-financial-literacy-and-money-management-in-womens-month" target="_blank" rel="noopener noreferrer" className="block">
                <div className="relative aspect-video rounded-2xl overflow-hidden mb-6 bg-slate-900 shadow-lg">
                  <img src={`https://img.youtube.com/vi/eJ4onoloX6I/maxresdefault.jpg`} alt="CNBC Africa — Financial Literacy" className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-terracotta/90 text-white rounded-full flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform shadow-lg pl-1">
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                    </div>
                  </div>
                  <div className="absolute top-4 left-4 bg-navy text-white text-xs font-bold px-3 py-1 uppercase tracking-wider rounded">CNBC Africa</div>
                </div>
                <h3 className="text-2xl font-serif text-navy mb-3 group-hover:text-terracotta transition-colors">Financial Literacy & Money Management in Women's Month</h3>
                <p className="text-slate-600 mb-4">Dr. Mavis Mazhura discusses financial literacy strategies and money management principles during Women's Month on CNBC Africa.</p>
              </a>
            </article>

            {/* Interview - Managing Emotions for Financial Freedom */}
            <article className="group">
              <a href="https://www.youtube.com/watch?v=CxbKpkMQzWk" target="_blank" rel="noopener noreferrer" className="block">
                <div className="relative aspect-video rounded-2xl overflow-hidden mb-6 bg-slate-900 shadow-lg">
                  <img src={`https://img.youtube.com/vi/CxbKpkMQzWk/hqdefault.jpg`} alt="Interview — Managing Emotions for Financial Freedom" className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-terracotta/90 text-white rounded-full flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform shadow-lg pl-1">
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                    </div>
                  </div>
                  <div className="absolute top-4 left-4 bg-navy text-white text-xs font-bold px-3 py-1 uppercase tracking-wider rounded">Interview</div>
                </div>
                <h3 className="text-2xl font-serif text-navy mb-3 group-hover:text-terracotta transition-colors">Managing Emotions for Financial Freedom</h3>
                <p className="text-slate-600 mb-4">Dr. Mavis discusses her book "Managing Emotions for Financial Freedom" in this featured interview.</p>
              </a>
            </article>

            {/* Interview - Navigating the Rapids and waves of Life */}
            <article className="group">
              <a href="https://www.youtube.com/watch?v=ILm2BMip2NQ" target="_blank" rel="noopener noreferrer" className="block">
                <div className="relative aspect-video rounded-2xl overflow-hidden mb-6 bg-slate-900 shadow-lg">
                  <img src={`https://img.youtube.com/vi/ILm2BMip2NQ/hqdefault.jpg`} alt="Interview — Navigating the Rapids" className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-terracotta/90 text-white rounded-full flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform shadow-lg pl-1">
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                    </div>
                  </div>
                  <div className="absolute top-4 left-4 bg-navy text-white text-xs font-bold px-3 py-1 uppercase tracking-wider rounded">Interview</div>
                </div>
                <h3 className="text-2xl font-serif text-navy mb-3 group-hover:text-terracotta transition-colors">Navigating the Rapids and Waves of Life</h3>
                <p className="text-slate-600 mb-4">International Human behaviour specialist and author Mavis Mazhura on her book Navigating the Rapids.</p>
              </a>
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
                <h2 className="text-3xl md:text-4xl font-serif text-navy">YouTube & Digital Content</h2>
              </div>
              <p className="text-slate-600">Keynotes, masterclass excerpts, and conference presentations.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* YouTube 1 — Career Resilience */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden group hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-slate-900 relative overflow-hidden">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/viY4QKeTzv8"
                  title="Career Resilience For Your Well-Being by Dr Mavis Mazhura"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-6 h-6 bg-red-600 rounded-sm flex items-center justify-center">
                    <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                  </div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">YouTube</span>
                </div>
                <h4 className="font-bold text-navy group-hover:text-terracotta transition-colors mb-2 line-clamp-2">Career Resilience For Your Well-Being</h4>
                <p className="text-sm text-slate-500 line-clamp-2">Dr Mavis Mazhura explores strategies for building career resilience and maintaining well-being in demanding professional environments.</p>
              </div>
            </div>

            {/* YouTube 2 — IPM Convention */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden group hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-slate-900 relative overflow-hidden">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/o_H793U3vpg"
                  title="IPM Convention 2018: Mavis Ureke - Emotions4Success"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-6 h-6 bg-red-600 rounded-sm flex items-center justify-center">
                    <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                  </div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">IPM Convention</span>
                </div>
                <h4 className="font-bold text-navy group-hover:text-terracotta transition-colors mb-2 line-clamp-2">Emotions4Success — IPM Convention 2018</h4>
                <p className="text-sm text-slate-500 line-clamp-2">Conference keynote on leveraging emotional intelligence for professional success and sustainable leadership outcomes.</p>
              </div>
            </div>

            {/* YouTube 3 — Yilungelo Lakho */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden group hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-slate-900 relative overflow-hidden">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/ANPDDDK8Chs"
                  title="Yilungelo Lakho | Property Investment"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-6 h-6 bg-red-600 rounded-sm flex items-center justify-center">
                    <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                  </div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Yilungelo Lakho</span>
                </div>
                <h4 className="font-bold text-navy group-hover:text-terracotta transition-colors mb-2 line-clamp-2">Property Investment</h4>
                <p className="text-sm text-slate-500 line-clamp-2">Featured segment on property investment strategies and financial empowerment for everyday South Africans.</p>
              </div>
            </div>

            {/* YouTube 4 — Financial Confidence */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden group hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-slate-900 relative overflow-hidden">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/eJ4onoloX6I"
                  title="Financial confidence among South Africans wanes further"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-6 h-6 bg-red-600 rounded-sm flex items-center justify-center">
                    <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                  </div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">News Feature</span>
                </div>
                <h4 className="font-bold text-navy group-hover:text-terracotta transition-colors mb-2 line-clamp-2">Financial Confidence Among South Africans</h4>
                <p className="text-sm text-slate-500 line-clamp-2">Analysis of declining financial confidence trends and actionable insights for building financial resilience.</p>
              </div>
            </div>

            {/* Vimeo — Creating Value */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden group hover:shadow-lg transition-shadow">
              <a href="https://vimeo.com/626294489" target="_blank" rel="noopener noreferrer" className="block h-full">
                <div className="aspect-video bg-slate-900 relative overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1542744094-3a31f272c490?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Creating Value & Harnessing Talent" className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-blue-500/90 text-white rounded-full flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform shadow-lg pl-1">
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-6 h-6 bg-blue-500 rounded-sm flex items-center justify-center">
                      <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M22.396 7.164c-.093 2.026-1.507 4.8-4.245 8.32C15.323 19.16 12.93 21 10.97 21c-1.214 0-2.24-1.12-3.08-3.36-.56-2.052-1.119-4.1-1.68-6.148-.653-2.426-1.585-3.64-2.8-3.64-.186 0-.7.28-1.54.84l-.934-1.214c1.026-.84 2.1-1.82 3.22-2.94 1.306-1.214 2.24-1.913 2.8-2.1 1.773-.56 2.94-.047 3.5 1.54.466 1.306.84 2.893 1.12 4.76.373 2.333.653 3.64.84 3.92.28.373.653.56 1.12.56.653 0 1.586-.7 2.8-2.1 1.213-1.4 1.913-2.52 2.1-3.36.28-1.214-.28-1.82-1.68-1.82-.653 0-1.306.187-1.96.56 1.213-3.733 3.64-5.413 7.28-5.04 2.52.28 3.36 1.96 2.52 5.04z"/></svg>
                    </div>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Vimeo</span>
                  </div>
                  <h4 className="font-bold text-navy group-hover:text-terracotta transition-colors mb-2 line-clamp-2">Creating Value & Harnessing Talent</h4>
                  <p className="text-sm text-slate-500 line-clamp-2">Speaking on creating value and harnessing the talent of temporary staff for organisational success.</p>
                </div>
              </a>
            </div>

            {/* YouTube — Psychological Safety */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden group hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-slate-900 relative overflow-hidden">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/SebV4qkPaGc"
                  title="Resilience and Reinvention: Psychological Safety in the Workplace"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-6 h-6 bg-red-600 rounded-sm flex items-center justify-center">
                    <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                  </div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">YouTube</span>
                </div>
                <h4 className="font-bold text-navy group-hover:text-terracotta transition-colors mb-2 line-clamp-2">Resilience and Reinvention</h4>
                <p className="text-sm text-slate-500 line-clamp-2">Speaking on Resilience and Reinvention: Psychological Safety in the Workplace.</p>
              </div>
            </div>

            {/* YouTube — Psychological Safety in Times of Change */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden group hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-slate-900 relative overflow-hidden">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/Fji_XG13U2s"
                  title="Psychological Safety in Times of Change"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-6 h-6 bg-red-600 rounded-sm flex items-center justify-center">
                    <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                  </div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">YouTube</span>
                </div>
                <h4 className="font-bold text-navy group-hover:text-terracotta transition-colors mb-2 line-clamp-2">Psychological Safety in Times of Change</h4>
                <p className="text-sm text-slate-500 line-clamp-2">A keynote focus on maintaining psychological safety and resilience during periods of transition.</p>
              </div>
            </div>

            {/* YouTube — Career Resilience */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden group hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-slate-900 relative overflow-hidden">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/rg2uJ1mCtE0"
                  title="Career Resilience for your Wellbeing- Dr Mavis Mazhura"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-6 h-6 bg-red-600 rounded-sm flex items-center justify-center">
                    <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                  </div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">YouTube</span>
                </div>
                <h4 className="font-bold text-navy group-hover:text-terracotta transition-colors mb-2 line-clamp-2">Career Resilience for your Wellbeing</h4>
                <p className="text-sm text-slate-500 line-clamp-2">Building capacity to navigate the changing workplace and safeguard your well-being.</p>
              </div>
            </div>


          </div>
        </div>
      </section>

      {/* 4. Press & Articles */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
           <div className="mb-16 md:flex justify-between items-end border-b border-slate-200 pb-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-sage/20 text-navy rounded flex items-center justify-center font-bold font-serif text-xl">3</div>
                <h2 className="text-3xl md:text-4xl font-serif text-navy">Press & Articles</h2>
              </div>
              <p className="text-slate-600">Featured profiles, interviews, and editorial mentions in print and digital publications.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
            {/* Speakers Magazine */}
            <a href="https://speakersmagazine.com/dr-mavis-mazhura/" target="_blank" rel="noopener noreferrer" className="flex flex-col sm:flex-row items-center sm:items-stretch bg-alabaster rounded-2xl border border-slate-200 overflow-hidden hover:border-sage hover:shadow-md transition-all group">
               <div className="w-full sm:w-48 h-48 bg-navy flex items-center justify-center flex-shrink-0 relative overflow-hidden">
                 <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent"></div>
                 <div className="relative z-10 text-center">
                   <svg className="w-10 h-10 text-sage mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path></svg>
                   <span className="text-sage/70 text-xs font-bold uppercase tracking-widest">Magazine</span>
                 </div>
               </div>
               <div className="p-6 flex flex-col justify-center">
                 <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Speakers Magazine</div>
                 <h4 className="text-xl font-bold text-navy group-hover:text-sage transition-colors mb-2">Dr. Mavis Mazhura — Featured Profile</h4>
                 <p className="text-sm text-slate-600">A comprehensive profile in Speakers Magazine covering Dr. Mazhura's expertise in leadership development, behavioural science, and executive coaching.</p>
                 <span className="text-terracotta font-semibold text-sm mt-4 inline-flex items-center">
                   Read Full Article <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                 </span>
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
          <Link to="/contact#contact-form" className="inline-block bg-terracotta text-white px-8 py-4 rounded font-bold hover:bg-[#c96c51] shadow-lg transition-all">
            Contact Media Team
          </Link>
        </div>
      </section>
    </main>
  );
}
