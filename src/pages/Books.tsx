import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';

interface Book {
  id: number;
  title: string;
  cover: string;
  amazonUrl: string;
  synopsis: string;
  year?: string;
  fallbackBg: string;
  fallbackLabelColor: string;
  fallbackTitleColor: string;
  fallbackMetaColor: string;
  fallbackBorderColor: string;
}

const books: Book[] = [
  {
    id: 1,
    title: 'Self-Leadership Matters',
    cover: '/Self-leadership-matters.jpg',
    amazonUrl: 'https://www.amazon.com/Self-Leadership-Matters-Accepting-Responsibility-Accountability-ebook/dp/B074DB9Z9W',
    synopsis: 'A transformative guide on accepting responsibility and accountability for your own growth. This book explores how self-leadership is the foundation of all great leadership — equipping readers with frameworks to master their inner world before leading others.',
    year: '2017',
    fallbackBg: 'bg-slate-800',
    fallbackLabelColor: 'text-sage',
    fallbackTitleColor: 'text-white',
    fallbackMetaColor: 'text-slate-400',
    fallbackBorderColor: 'border-slate-700',
  },
  {
    id: 2,
    title: 'Navigating the Rapids and Waves of Life',
    cover: '/navigating-the-rapids.jpg',
    amazonUrl: 'https://www.amazon.com/Navigating-Rapids-Waves-Life-Managing-ebook/dp/B0792P2TLS',
    synopsis: 'Life is unpredictable. This book provides practical strategies for managing the turbulent seasons of change, loss, and uncertainty. Learn how to stay grounded, build resilience, and emerge stronger from every challenge.',
    year: '2018',
    fallbackBg: 'bg-terracotta/90',
    fallbackLabelColor: 'text-white/70',
    fallbackTitleColor: 'text-white',
    fallbackMetaColor: 'text-white/70',
    fallbackBorderColor: 'border-white/20',
  },
  {
    id: 3,
    title: 'Managing Emotions for Financial Freedom',
    cover: '/managing-emotions-for-financial-freedom.png',
    amazonUrl: 'https://www.amazon.com/Managing-Emotions-Financial-Freedom-Invisible-ebook/dp/B019NEUYDQ',
    synopsis: 'Discover the invisible barriers between you and financial freedom. Dr. Mazhura reveals how unmanaged emotions drive poor financial decisions and offers a proven path to breaking free from self-sabotaging money patterns.',
    year: '2015',
    fallbackBg: 'bg-emerald-900',
    fallbackLabelColor: 'text-white/70',
    fallbackTitleColor: 'text-white',
    fallbackMetaColor: 'text-white/70',
    fallbackBorderColor: 'border-white/20',
  },
  {
    id: 4,
    title: "ABC's of Emotions",
    cover: '/ABCs-of-emotions.jpg',
    amazonUrl: '#',
    synopsis: 'An accessible and insightful guide to understanding the full spectrum of human emotions. From anger to zeal, Dr. Mazhura breaks down the emotional alphabet and teaches readers how to identify, process, and channel their feelings constructively.',
    fallbackBg: 'bg-slate-200',
    fallbackLabelColor: 'text-terracotta',
    fallbackTitleColor: 'text-navy',
    fallbackMetaColor: 'text-slate-500',
    fallbackBorderColor: 'border-slate-400',
  },
  {
    id: 5,
    title: 'Aspire, Awaken and Actualise',
    cover: '/aspire-awaken.jpg',
    amazonUrl: 'https://www.amazon.com/Aspire-Awaken-Actualise-Journeys-Transformation-ebook/dp/B0791XHN73',
    synopsis: 'Journeys of transformation unfold in this powerful anthology. Through real stories and research-backed insights, this book guides readers through the three stages of personal evolution — aspiring for more, awakening to their potential, and actualising their purpose.',
    year: '2018',
    fallbackBg: 'bg-[#2a3b52]',
    fallbackLabelColor: 'text-sage',
    fallbackTitleColor: 'text-white',
    fallbackMetaColor: 'text-slate-400',
    fallbackBorderColor: 'border-slate-700',
  },
  {
    id: 6,
    title: 'The Change',
    cover: '/the-change.png',
    amazonUrl: '#',
    synopsis: 'A compelling exploration of what it truly takes to change — not just behaviour, but identity. Dr. Mazhura draws on psychology, neuroscience, and leadership theory to present a roadmap for lasting personal and professional transformation.',
    fallbackBg: 'bg-red-900',
    fallbackLabelColor: 'text-white/50',
    fallbackTitleColor: 'text-white',
    fallbackMetaColor: 'text-white/50',
    fallbackBorderColor: 'border-white/20',
  },
  {
    id: 7,
    title: 'Career Resilience & Well-Being',
    cover: '/career-resilience.jpg',
    amazonUrl: 'https://www.amazon.com/CAREER-RESILIENCE-WELL-BEING-MAVIS-MAZHURA/dp/1776335775',
    synopsis: 'In an era of burnout and constant disruption, career resilience is not optional — it is essential. This book provides leaders and professionals with evidence-based strategies to sustain performance, protect well-being, and thrive through organisational change.',
    year: '2020',
    fallbackBg: 'bg-slate-700',
    fallbackLabelColor: 'text-sage',
    fallbackTitleColor: 'text-white',
    fallbackMetaColor: 'text-slate-400',
    fallbackBorderColor: 'border-slate-600',
  },
  {
    id: 8,
    title: 'Heart Boundaries',
    cover: '/heart-boundaries.jpg',
    amazonUrl: '#',
    synopsis: 'Boundaries are the architecture of healthy relationships. This book teaches readers how to set, communicate, and maintain boundaries without guilt — protecting their emotional energy while deepening authentic connection.',
    fallbackBg: 'bg-rose-900',
    fallbackLabelColor: 'text-rose-200',
    fallbackTitleColor: 'text-white',
    fallbackMetaColor: 'text-rose-200',
    fallbackBorderColor: 'border-rose-800',
  },
  {
    id: 9,
    title: 'Financial Confidence for Her Wellbeing',
    cover: '/financial-confidence.jpg',
    amazonUrl: '#',
    synopsis: 'Written specifically for women navigating the intersection of financial health and emotional well-being. Dr. Mazhura provides a holistic framework for building financial confidence, overcoming money anxiety, and creating sustainable wealth.',
    fallbackBg: 'bg-teal-900',
    fallbackLabelColor: 'text-sage',
    fallbackTitleColor: 'text-white',
    fallbackMetaColor: 'text-slate-400',
    fallbackBorderColor: 'border-slate-700',
  },
];

export default function Books() {
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const openPreview = (book: Book) => {
    setSelectedBook(book);
    // Small delay to allow the element to mount before animating in
    requestAnimationFrame(() => setIsModalVisible(true));
  };

  const closePreview = useCallback(() => {
    setIsModalVisible(false);
    setTimeout(() => setSelectedBook(null), 300); // match transition duration
  }, []);

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && selectedBook) closePreview();
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [selectedBook, closePreview]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedBook) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [selectedBook]);

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
            {books.map((book) => (
              <div key={book.id} className="flex flex-col gap-3 group">
                <div
                  className="aspect-[2/3] rounded-md shadow-md overflow-hidden relative cursor-pointer group-hover:shadow-xl transition-all duration-300"
                  onClick={() => openPreview(book)}
                  role="button"
                  tabIndex={0}
                  aria-label={`Preview ${book.title}`}
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') openPreview(book); }}
                >
                  <img src={book.cover} alt={`${book.title} Book Cover`} className="absolute inset-0 w-full h-full object-cover rounded-md group-hover:scale-105 transition-transform duration-500" />
                  {/* Fallback overlay */}
                  <div className={`absolute inset-0 ${book.fallbackBg} flex flex-col justify-between p-5 -z-10`}>
                    <div className={`text-[10px] uppercase tracking-widest ${book.fallbackLabelColor} font-bold`}>Author</div>
                    <h4 className={`font-serif text-lg leading-tight mb-2 ${book.fallbackTitleColor}`}>{book.title}</h4>
                    <div className={`text-xs ${book.fallbackMetaColor} border-t ${book.fallbackBorderColor} pt-3`}>Dr Mavis Mazhura</div>
                  </div>
                  {/* Hover hint */}
                  <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/40 transition-colors duration-300 flex items-center justify-center pointer-events-none">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 text-navy text-xs font-bold px-4 py-2 rounded-full shadow-lg backdrop-blur-sm">
                      Preview
                    </span>
                  </div>
                </div>
                <a
                  href={book.amazonUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-terracotta text-white py-2 px-4 rounded text-center text-sm font-bold shadow hover:bg-[#c96c51] transition-colors mt-auto"
                >
                  Buy on Amazon
                </a>
              </div>
            ))}
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

      {/* ── Book Preview Modal ── */}
      {selectedBook && (
        <div
          className={`fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-8 transition-all duration-300 ${isModalVisible ? 'opacity-100' : 'opacity-0'}`}
          onClick={closePreview}
          role="dialog"
          aria-modal="true"
          aria-label={`${selectedBook.title} preview`}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-navy/80 backdrop-blur-md"></div>

          {/* Modal Content */}
          <div
            className={`relative bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto transition-all duration-300 ${isModalVisible ? 'scale-100 translate-y-0' : 'scale-95 translate-y-4'}`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={closePreview}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-colors group"
              aria-label="Close preview"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-slate-600 group-hover:text-navy transition-colors">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="flex flex-col md:flex-row">
              {/* Book Cover — left column */}
              <div className="md:w-2/5 p-6 md:p-8 flex items-start justify-center bg-slate-50 rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none">
                <div className="w-full max-w-[240px] aspect-[2/3] rounded-lg shadow-xl overflow-hidden relative">
                  <img
                    src={selectedBook.cover}
                    alt={`${selectedBook.title} Book Cover`}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  {/* Fallback */}
                  <div className={`absolute inset-0 ${selectedBook.fallbackBg} flex flex-col justify-between p-5 -z-10`}>
                    <div className={`text-[10px] uppercase tracking-widest ${selectedBook.fallbackLabelColor} font-bold`}>Author</div>
                    <h4 className={`font-serif text-lg leading-tight mb-2 ${selectedBook.fallbackTitleColor}`}>{selectedBook.title}</h4>
                    <div className={`text-xs ${selectedBook.fallbackMetaColor} border-t ${selectedBook.fallbackBorderColor} pt-3`}>Dr Mavis Mazhura</div>
                  </div>
                </div>
              </div>

              {/* Details — right column */}
              <div className="md:w-3/5 p-6 md:p-8 flex flex-col">
                <span className="text-terracotta font-semibold tracking-widest uppercase text-xs mb-2 block">
                  Dr Mavis Mazhura{selectedBook.year ? ` · ${selectedBook.year}` : ''}
                </span>
                <h3 className="text-2xl md:text-3xl font-serif text-navy leading-tight mb-5">
                  {selectedBook.title}
                </h3>

                <div className="h-px bg-slate-200 mb-5"></div>

                <p className="text-slate-600 leading-relaxed mb-8 flex-1">
                  {selectedBook.synopsis}
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={selectedBook.amazonUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-terracotta text-white px-6 py-3 rounded-lg font-bold shadow-lg hover:bg-[#c96c51] hover:-translate-y-0.5 transition-all duration-300 text-sm"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                    Buy on Amazon
                  </a>
                  <button
                    onClick={closePreview}
                    className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-bold text-sm border border-slate-200 text-slate-600 hover:bg-slate-50 hover:border-slate-300 transition-all duration-300"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
