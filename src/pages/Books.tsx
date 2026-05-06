import { Link } from 'react-router-dom';

export default function Books() {
  return (
    <main>
      {/* 1. Hero Section */}
      <section className="pt-32 pb-16 lg:pt-48 lg:pb-24 bg-navy text-white text-center px-6 relative overflow-hidden">
        <img src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" alt="Library Books" className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/90 to-transparent"></div>
        {/* Abstract glowing orb (Terracotta for the Books page) */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-terracotta/20 rounded-full blur-[100px] pointer-events-none z-0"></div>
        
        <div className="max-w-3xl mx-auto relative z-10">
          <span className="text-terracotta font-semibold tracking-widest uppercase text-sm mb-4 block">The Library</span>
          <h1 className="text-5xl lg:text-6xl font-serif leading-tight mb-6">
            The Science of Leadership, Documented.
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed mb-10">
            Explore Dr. Mazhura's acclaimed published works on emotional intelligence, financial boundaries, and executive resilience.
          </p>
        </div>
      </section>

      {/* 2. The Library (Published Books) */}
      <section className="py-24 bg-alabaster">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 md:flex justify-between items-end border-b border-slate-200 pb-8">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-serif text-navy">Published Works</h2>
              <p className="text-slate-600 mt-4">Essential reading for modern leaders navigating complexity and burnout.</p>
            </div>
          </div>

          {/* CSS Bookshelf Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8 mb-20">
            
            {/* Book 1 */}
            <div className="flex flex-col gap-3 group">
              <div className="aspect-[2/3] rounded-md shadow-md overflow-hidden relative cursor-pointer group-hover:shadow-xl transition-all duration-300">
                <img src="/Self-leadership-matters.jpg" alt="Self-Leadership Matters Book Cover" className="absolute inset-0 w-full h-full object-cover rounded-md group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-slate-800 flex flex-col justify-between p-5 -z-10">
                  <div className="text-[10px] uppercase tracking-widest text-sage font-bold">Author</div>
                  <h4 className="font-serif text-lg leading-tight mb-2 text-white">Self-Leadership Matters</h4>
                  <div className="text-xs text-slate-400 border-t border-slate-700 pt-3">Dr Mavis Mazhura</div>
                </div>
              </div>
              <a href="https://www.amazon.com/Self-Leadership-Matters-Accepting-Responsibility-Accountability-ebook/dp/B074DB9Z9W" target="_blank" rel="noopener noreferrer" className="bg-terracotta text-white py-2 px-4 rounded text-center text-sm font-bold shadow hover:bg-[#c96c51] transition-colors mt-auto">Buy on Amazon</a>
            </div>

            {/* Book 2 */}
            <div className="flex flex-col gap-3 group">
              <div className="aspect-[2/3] rounded-md shadow-md overflow-hidden relative cursor-pointer group-hover:shadow-xl transition-all duration-300">
                <img src="/navigating-the-rapids.jpg" alt="Navigating the Rapids and Waves of Life Book Cover" className="absolute inset-0 w-full h-full object-cover rounded-md group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-terracotta/90 flex flex-col justify-between p-5 -z-10">
                  <div className="text-[10px] uppercase tracking-widest text-white/70 font-bold">Author</div>
                  <h4 className="font-serif text-lg leading-tight mb-2 text-white">Navigating the Rapids and Waves of Life</h4>
                  <div className="text-xs text-white/70 border-t border-white/20 pt-3">Dr Mavis Mazhura</div>
                </div>
              </div>
              <a href="https://www.amazon.com/Navigating-Rapids-Waves-Life-Managing-ebook/dp/B0792P2TLS" target="_blank" rel="noopener noreferrer" className="bg-terracotta text-white py-2 px-4 rounded text-center text-sm font-bold shadow hover:bg-[#c96c51] transition-colors mt-auto">Buy on Amazon</a>
            </div>

            {/* Book 3 */}
            <div className="flex flex-col gap-3 group">
              <div className="aspect-[2/3] rounded-md shadow-md overflow-hidden relative cursor-pointer group-hover:shadow-xl transition-all duration-300">
                <img src="/managing-emotions-for-financial-freedom.png" alt="Managing Emotions for Financial Freedom Book Cover" className="absolute inset-0 w-full h-full object-cover rounded-md group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-emerald-900 flex flex-col justify-between p-5 -z-10">
                  <div className="text-[10px] uppercase tracking-widest text-white/70 font-bold">Author</div>
                  <h4 className="font-serif text-lg leading-tight mb-2 text-white">Managing Emotions for Financial Freedom</h4>
                  <div className="text-xs text-white/70 border-t border-white/20 pt-3">Dr Mavis Mazhura</div>
                </div>
              </div>
              <a href="https://www.amazon.com/Managing-Emotions-Financial-Freedom-Invisible-ebook/dp/B019NEUYDQ" target="_blank" rel="noopener noreferrer" className="bg-terracotta text-white py-2 px-4 rounded text-center text-sm font-bold shadow hover:bg-[#c96c51] transition-colors mt-auto">Buy on Amazon</a>
            </div>

            {/* Book 4 */}
            <div className="flex flex-col gap-3 group">
              <div className="aspect-[2/3] rounded-md shadow-md overflow-hidden relative cursor-pointer group-hover:shadow-xl transition-all duration-300">
                <img src="/ABCs-of-emotions.jpg" alt="ABC's of Emotions Book Cover" className="absolute inset-0 w-full h-full object-cover rounded-md group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-slate-200 flex flex-col justify-between p-5 -z-10">
                  <div className="text-[10px] uppercase tracking-widest text-terracotta font-bold">Author</div>
                  <h4 className="font-serif text-lg leading-tight mb-2 text-navy">ABC's of Emotions</h4>
                  <div className="text-xs text-slate-500 border-t border-slate-400 pt-3">Dr Mavis Mazhura</div>
                </div>
              </div>
              <a href="#" target="_blank" rel="noopener noreferrer" className="bg-terracotta text-white py-2 px-4 rounded text-center text-sm font-bold shadow hover:bg-[#c96c51] transition-colors mt-auto">Buy on Amazon</a>
            </div>

            {/* Book 5 */}
            <div className="flex flex-col gap-3 group">
              <div className="aspect-[2/3] rounded-md shadow-md overflow-hidden relative cursor-pointer group-hover:shadow-xl transition-all duration-300">
                <img src="/aspire-awaken.jpg" alt="Aspire, Awaken and Actualise Book Cover" className="absolute inset-0 w-full h-full object-cover rounded-md group-hover:scale-105 transition-transform duration-500" />
                {/* Fallback overlay in case image goes missing temporarily */}
                <div className="absolute inset-0 bg-[#2a3b52] flex flex-col justify-between p-5 -z-10">
                  <div className="text-[10px] uppercase tracking-widest text-sage font-bold">Author</div>
                  <h4 className="font-serif text-lg leading-tight mb-2 text-white">Aspire, Awaken and Actualise</h4>
                  <div className="text-xs text-slate-400 border-t border-slate-700 pt-3">Dr Mavis Mazhura</div>
                </div>
              </div>
              <a href="https://www.amazon.com/Aspire-Awaken-Actualise-Journeys-Transformation-ebook/dp/B0791XHN73" target="_blank" rel="noopener noreferrer" className="bg-terracotta text-white py-2 px-4 rounded text-center text-sm font-bold shadow hover:bg-[#c96c51] transition-colors mt-auto">Buy on Amazon</a>
            </div>

            {/* Book 6 */}
            <div className="flex flex-col gap-3 group">
              <div className="aspect-[2/3] rounded-md shadow-md overflow-hidden relative cursor-pointer group-hover:shadow-xl transition-all duration-300">
                <img src="/the-change.png" alt="The Change Book Cover" className="absolute inset-0 w-full h-full object-cover rounded-md group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-red-900 flex flex-col justify-between p-5 -z-10">
                  <div className="text-[10px] uppercase tracking-widest text-white/50 font-bold">Author</div>
                  <h4 className="font-serif text-lg leading-tight mb-2 text-white">The Change</h4>
                  <div className="text-xs text-white/50 border-t border-white/20 pt-3">Dr Mavis Mazhura</div>
                </div>
              </div>
              <a href="#" target="_blank" rel="noopener noreferrer" className="bg-terracotta text-white py-2 px-4 rounded text-center text-sm font-bold shadow hover:bg-[#c96c51] transition-colors mt-auto">Buy on Amazon</a>
            </div>
            
            {/* Book 7 */}
            <div className="flex flex-col gap-3 group">
              <div className="aspect-[2/3] rounded-md shadow-md overflow-hidden relative cursor-pointer group-hover:shadow-xl transition-all duration-300">
                <img src="/career-resilience.jpg" alt="Career Resilience Book Cover" className="absolute inset-0 w-full h-full object-cover rounded-md group-hover:scale-105 transition-transform duration-500" />
                {/* Fallback overlay in case image goes missing temporarily */}
                <div className="absolute inset-0 bg-slate-700 flex flex-col justify-between p-5 -z-10">
                  <div className="text-[10px] uppercase tracking-widest text-sage font-bold">Author</div>
                  <h4 className="font-serif text-lg leading-tight mb-2 text-white">Career Resilience</h4>
                  <div className="text-xs text-slate-400 border-t border-slate-600 pt-3">Dr Mavis Mazhura</div>
                </div>
              </div>
              <a href="https://www.amazon.com/CAREER-RESILIENCE-WELL-BEING-MAVIS-MAZHURA/dp/1776335775" target="_blank" rel="noopener noreferrer" className="bg-terracotta text-white py-2 px-4 rounded text-center text-sm font-bold shadow hover:bg-[#c96c51] transition-colors mt-auto">Buy on Amazon</a>
            </div>

            {/* Book 8 */}
            <div className="flex flex-col gap-3 group">
              <div className="aspect-[2/3] rounded-md shadow-md overflow-hidden relative cursor-pointer group-hover:shadow-xl transition-all duration-300">
                <img src="/heart-boundaries.jpg" alt="Heart Boundaries Book Cover" className="absolute inset-0 w-full h-full object-cover rounded-md group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-rose-900 flex flex-col justify-between p-5 -z-10">
                  <div className="text-[10px] uppercase tracking-widest text-rose-200 font-bold">Author</div>
                  <h4 className="font-serif text-lg leading-tight mb-2 text-white">Heart Boundaries</h4>
                  <div className="text-xs text-rose-200 border-t border-rose-800 pt-3">Dr Mavis Mazhura</div>
                </div>
              </div>
              <a href="#" target="_blank" rel="noopener noreferrer" className="bg-terracotta text-white py-2 px-4 rounded text-center text-sm font-bold shadow hover:bg-[#c96c51] transition-colors mt-auto">Buy on Amazon</a>
            </div>

            {/* Book 9 */}
            <div className="flex flex-col gap-3 group">
              <div className="aspect-[2/3] rounded-md shadow-md overflow-hidden relative cursor-pointer group-hover:shadow-xl transition-all duration-300">
                <img src="/financial-confidence.jpg" alt="Financial Confidence for Her Wellbeing Book Cover" className="absolute inset-0 w-full h-full object-cover rounded-md group-hover:scale-105 transition-transform duration-500" />
                {/* Fallback overlay in case image goes missing temporarily */}
                <div className="absolute inset-0 bg-teal-900 flex flex-col justify-between p-5 -z-10">
                  <div className="text-[10px] uppercase tracking-widest text-sage font-bold">Author</div>
                  <h4 className="font-serif text-lg leading-tight mb-2 text-white">Financial Confidence for Her Wellbeing</h4>
                  <div className="text-xs text-slate-400 border-t border-slate-700 pt-3">Dr Mavis Mazhura</div>
                </div>
              </div>
              <a href="#" target="_blank" rel="noopener noreferrer" className="bg-terracotta text-white py-2 px-4 rounded text-center text-sm font-bold shadow hover:bg-[#c96c51] transition-colors mt-auto">Buy on Amazon</a>
            </div>

          </div>

        </div>
      </section>

      {/* 3. Upcoming Titles */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-navy text-white p-10 md:p-14 rounded-3xl border border-slate-800 shadow-xl">
            <div className="flex items-center gap-3 mb-10 border-b border-slate-700 pb-6">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sage opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-sage"></span>
              </span>
              <h3 className="text-3xl font-serif">Upcoming Titles</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="border-l-4 border-sage pl-6">
                <h4 className="font-serif text-2xl mb-3">Sustainable Leadership for Women</h4>
                <p className="text-slate-300 leading-relaxed mb-4">An expansion of the transformative flagship programme. A deep dive into redefining success, reducing emotional depletion, and establishing unshakeable internal authority.</p>
                <span className="text-xs font-bold uppercase tracking-widest text-sage">Status: In Development</span>
              </div>
              <div className="border-l-4 border-terracotta pl-6">
                <h4 className="font-serif text-2xl mb-3">Transforming Team Performance by Evolving Leadership Identity</h4>
                <p className="text-slate-300 leading-relaxed mb-4">An organizational manual exploring why leadership patterns shape team dynamics, and how resolving executive bottlenecks unlocks enterprise-wide potential.</p>
                <span className="text-xs font-bold uppercase tracking-widest text-terracotta">Status: In Development</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CTA Section */}
      <section id="inquire" className="py-24 bg-slate-100 border-t border-slate-200 text-center px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif text-navy mb-4">Equip Your Organization</h2>
          <p className="text-lg text-slate-600 mb-8">Inquire about bulk book orders, organizational licensing, or pairing a publication with a companion masterclass for your leadership team.</p>
          <Link to="/contact#contact-form" className="inline-block bg-terracotta text-white px-10 py-4 rounded font-bold shadow-lg hover:bg-[#c96c51] hover:-translate-y-1 transition-all duration-300">
            Contact Our Team
          </Link>
        </div>
      </section>
    </main>
  );
}
