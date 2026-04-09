export default function Books() {
  return (
    <main>
      {/* 1. Hero Section */}
      <section className="pt-32 pb-16 lg:pt-48 lg:pb-24 bg-navy text-white text-center px-6 relative overflow-hidden">
        {/* Abstract glowing orb (Terracotta for the Books page) */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-terracotta/20 rounded-full blur-[100px] pointer-events-none"></div>
        
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
            <div className="aspect-[2/3] bg-gradient-to-br from-slate-800 to-slate-900 p-5 flex flex-col justify-between book-spine relative cursor-pointer">
              <div className="text-[10px] uppercase tracking-widest text-sage font-bold">Author</div>
              <div className="my-auto">
                <h4 className="font-serif text-lg leading-tight mb-2 text-white">Self-Leadership</h4>
              </div>
              <div className="text-xs text-slate-400 border-t border-slate-700 pt-3">Dr Mavis Mazhura</div>
            </div>

            {/* Book 2 */}
            <div className="aspect-[2/3] bg-gradient-to-br from-terracotta/90 to-red-900 p-5 flex flex-col justify-between book-spine relative cursor-pointer">
              <div className="text-[10px] uppercase tracking-widest text-white/70 font-bold">Author</div>
              <div className="my-auto">
                <h4 className="font-serif text-lg leading-tight mb-2 text-white">Navigating the Rapids and Waves of Life</h4>
              </div>
              <div className="text-xs text-white/70 border-t border-white/20 pt-3">Dr Mavis Mazhura</div>
            </div>

            {/* Book 3 */}
            <div className="aspect-[2/3] bg-gradient-to-br from-sage/80 to-emerald-900 p-5 flex flex-col justify-between book-spine relative cursor-pointer">
              <div className="text-[10px] uppercase tracking-widest text-white/70 font-bold">Author</div>
              <div className="my-auto">
                <h4 className="font-serif text-lg leading-tight mb-2 text-white">Managing Emotions for Financial Freedom</h4>
              </div>
              <div className="text-xs text-white/70 border-t border-white/20 pt-3">Dr Mavis Mazhura</div>
            </div>

            {/* Book 4 */}
            <div className="aspect-[2/3] bg-gradient-to-br from-slate-100 to-slate-300 p-5 flex flex-col justify-between book-spine relative cursor-pointer">
              <div className="text-[10px] uppercase tracking-widest text-terracotta font-bold">Author</div>
              <div className="my-auto">
                <h4 className="font-serif text-lg leading-tight mb-2 text-navy">ABC's of Emotions</h4>
              </div>
              <div className="text-xs text-slate-500 border-t border-slate-400 pt-3">Dr Mavis Mazhura</div>
            </div>

            {/* Book 5 */}
            <div className="aspect-[2/3] bg-gradient-to-br from-[#2a3b52] to-navy p-5 flex flex-col justify-between book-spine relative cursor-pointer">
              <div className="text-[10px] uppercase tracking-widest text-sage font-bold">Author</div>
              <div className="my-auto">
                <h4 className="font-serif text-lg leading-tight mb-2 text-white">Aspire, Awaken and Actualise</h4>
              </div>
              <div className="text-xs text-slate-400 border-t border-slate-700 pt-3">Dr Mavis Mazhura</div>
            </div>

            {/* Book 6 */}
            <div className="aspect-[2/3] bg-gradient-to-br from-red-900 to-[#4a1515] p-5 flex flex-col justify-between book-spine relative cursor-pointer">
              <div className="text-[10px] uppercase tracking-widest text-white/50 font-bold">Author</div>
              <div className="my-auto">
                <h4 className="font-serif text-lg leading-tight mb-2 text-white">The Change</h4>
              </div>
              <div className="text-xs text-white/50 border-t border-white/20 pt-3">Dr Mavis Mazhura</div>
            </div>
            
            {/* Book 7 */}
            <div className="aspect-[2/3] bg-gradient-to-br from-slate-700 to-slate-800 p-5 flex flex-col justify-between book-spine relative cursor-pointer">
              <div className="text-[10px] uppercase tracking-widest text-sage font-bold">Author</div>
              <div className="my-auto">
                <h4 className="font-serif text-lg leading-tight mb-2 text-white">Career Resilience</h4>
              </div>
              <div className="text-xs text-slate-400 border-t border-slate-600 pt-3">Dr Mavis Mazhura</div>
            </div>

            {/* Book 8 */}
            <div className="aspect-[2/3] bg-gradient-to-br from-rose-900 to-red-950 p-5 flex flex-col justify-between book-spine relative cursor-pointer">
              <div className="text-[10px] uppercase tracking-widest text-rose-200 font-bold">Author</div>
              <div className="my-auto">
                <h4 className="font-serif text-lg leading-tight mb-2 text-white">Heart Boundaries</h4>
              </div>
              <div className="text-xs text-rose-200 border-t border-rose-800 pt-3">Dr Mavis Mazhura</div>
            </div>

            {/* Book 9 */}
            <div className="aspect-[2/3] bg-gradient-to-br from-teal-900 to-slate-900 p-5 flex flex-col justify-between book-spine relative cursor-pointer">
              <div className="text-[10px] uppercase tracking-widest text-sage font-bold">Author</div>
              <div className="my-auto">
                <h4 className="font-serif text-lg leading-tight mb-2 text-white">Financial Confidence for Her Wellbeing</h4>
              </div>
              <div className="text-xs text-slate-400 border-t border-slate-700 pt-3">Dr Mavis Mazhura</div>
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
          <a href="#" className="inline-block bg-terracotta text-white px-10 py-4 rounded font-bold shadow-lg hover:bg-[#c96c51] hover:-translate-y-1 transition-all duration-300">
            Contact Our Team
          </a>
        </div>
      </section>
    </main>
  );
}
