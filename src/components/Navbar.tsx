import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
  const isAbout = location.pathname === '/about';
  const isServices = location.pathname === '/services';
  const isKeynotes = location.pathname === '/keynotes';
  const isBooks = location.pathname === '/books';

  return (
    <nav className="fixed w-full z-50 transition-all duration-300 bg-alabaster/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img src="/logo.png" alt="Dr Mavis Mazhura Logo" className="h-[72px] lg:h-20 w-auto" />
        </Link>
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/about" className={`text-sm transition-colors ${isAbout ? 'font-bold text-terracotta' : 'font-medium text-slate-600 hover:text-terracotta'}`}>About</Link>
          <Link to="/services" className={`text-sm transition-colors ${isServices ? 'font-bold text-terracotta' : 'font-medium text-slate-600 hover:text-terracotta'}`}>Services</Link>
          <Link to="/keynotes" className={`text-sm transition-colors ${isKeynotes ? 'font-bold text-terracotta' : 'font-medium text-slate-600 hover:text-terracotta'}`}>Keynotes</Link>
          <Link to="/books" className={`text-sm transition-colors ${isBooks ? 'font-bold text-terracotta' : 'font-medium text-slate-600 hover:text-terracotta'}`}>Books</Link>
        </div>
        <div className="hidden md:block">
          {isAbout ? (
            <a href="#contact" className="bg-navy text-white text-sm font-semibold px-5 py-2.5 rounded shadow-md hover:bg-slate-800 transition-all">
              Work With Me
            </a>
          ) : isServices ? (
            <a href="#quote" className="bg-navy text-white text-sm font-semibold px-5 py-2.5 rounded shadow-md hover:bg-slate-800 transition-all">
              Request Proposal
            </a>
          ) : isKeynotes ? (
            <a href="#book-dr-mavis" className="bg-navy text-white text-sm font-semibold px-5 py-2.5 rounded shadow-md hover:bg-slate-800 transition-all">
              Book for an Event
            </a>
          ) : isBooks ? (
            <a href="#inquire" className="bg-navy text-white text-sm font-semibold px-5 py-2.5 rounded shadow-md hover:bg-slate-800 transition-all">
              Bulk Orders
            </a>
          ) : (
            <a href="#scorecard" className="bg-navy text-white text-sm font-semibold px-5 py-2.5 rounded shadow-md hover:shadow-lg hover:bg-slate-800 transition-all">
              Take the Scorecard
            </a>
          )}
        </div>
        <button className="md:hidden text-navy p-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>
    </nav>
  );
}
