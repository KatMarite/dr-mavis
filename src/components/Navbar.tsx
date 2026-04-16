import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);
  const isAbout = location.pathname === '/about';
  const isServices = location.pathname === '/services';
  const isKeynotes = location.pathname === '/keynotes';
  const isBooks = location.pathname === '/books';
  const isMedia = location.pathname === '/media';
  const isContact = location.pathname === '/contact';

  return (
    <nav className="fixed w-full z-50 transition-all duration-300 bg-alabaster/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center" onClick={closeMobileMenu}>
          <img src="/logo.png" alt="Dr Mavis Mazhura Logo" className="h-[72px] lg:h-20 w-auto" />
        </Link>
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/about" className={`text-sm transition-colors ${isAbout ? 'font-bold text-terracotta' : 'font-medium text-slate-600 hover:text-terracotta'}`}>About</Link>
          <Link to="/services" className={`text-sm transition-colors ${isServices ? 'font-bold text-terracotta' : 'font-medium text-slate-600 hover:text-terracotta'}`}>Services</Link>
          <Link to="/keynotes" className={`text-sm transition-colors ${isKeynotes ? 'font-bold text-terracotta' : 'font-medium text-slate-600 hover:text-terracotta'}`}>Keynotes</Link>
          <Link to="/books" className={`text-sm transition-colors ${isBooks ? 'font-bold text-terracotta' : 'font-medium text-slate-600 hover:text-terracotta'}`}>Books</Link>
          <Link to="/media" className={`text-sm transition-colors ${isMedia ? 'font-bold text-terracotta' : 'font-medium text-slate-600 hover:text-terracotta'}`}>Media</Link>
        </div>
        <div className="hidden md:block">
          {isAbout ? (
            <Link to="/contact" className="bg-navy text-white text-sm font-semibold px-5 py-2.5 rounded shadow-md hover:bg-slate-800 transition-all">
              Work With Me
            </Link>
          ) : isServices ? (
            <Link to="/contact" className="bg-navy text-white text-sm font-semibold px-5 py-2.5 rounded shadow-md hover:bg-slate-800 transition-all">
              Request Proposal
            </Link>
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
        <button className="md:hidden text-navy p-2" onClick={toggleMobileMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"} />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-200 absolute w-full left-0 shadow-xl">
          <div className="flex flex-col px-6 py-4 space-y-4">
            <Link to="/about" onClick={closeMobileMenu} className={`text-lg transition-colors ${isAbout ? 'font-bold text-terracotta' : 'font-medium text-slate-600 hover:text-terracotta'}`}>About</Link>
            <Link to="/services" onClick={closeMobileMenu} className={`text-lg transition-colors ${isServices ? 'font-bold text-terracotta' : 'font-medium text-slate-600 hover:text-terracotta'}`}>Services</Link>
            <Link to="/keynotes" onClick={closeMobileMenu} className={`text-lg transition-colors ${isKeynotes ? 'font-bold text-terracotta' : 'font-medium text-slate-600 hover:text-terracotta'}`}>Keynotes</Link>
            <Link to="/books" onClick={closeMobileMenu} className={`text-lg transition-colors ${isBooks ? 'font-bold text-terracotta' : 'font-medium text-slate-600 hover:text-terracotta'}`}>Books</Link>
            <Link to="/media" onClick={closeMobileMenu} className={`text-lg transition-colors ${isMedia ? 'font-bold text-terracotta' : 'font-medium text-slate-600 hover:text-terracotta'}`}>Media</Link>
            <div className="pt-4 border-t border-slate-100">
              {isAbout ? (
                <Link to="/contact" onClick={closeMobileMenu} className="block w-full text-center bg-navy text-white text-lg font-semibold px-5 py-3 rounded shadow-md hover:bg-slate-800 transition-all">
                  Work With Me
                </Link>
              ) : isServices ? (
                <Link to="/contact" onClick={closeMobileMenu} className="block w-full text-center bg-navy text-white text-lg font-semibold px-5 py-3 rounded shadow-md hover:bg-slate-800 transition-all">
                  Request Proposal
                </Link>
              ) : isKeynotes ? (
                <a href="#book-dr-mavis" onClick={closeMobileMenu} className="block w-full text-center bg-navy text-white text-lg font-semibold px-5 py-3 rounded shadow-md hover:bg-slate-800 transition-all">
                  Book for an Event
                </a>
              ) : isBooks ? (
                <a href="#inquire" onClick={closeMobileMenu} className="block w-full text-center bg-navy text-white text-lg font-semibold px-5 py-3 rounded shadow-md hover:bg-slate-800 transition-all">
                  Bulk Orders
                </a>
              ) : (
                <a href="#scorecard" onClick={closeMobileMenu} className="block w-full text-center bg-navy text-white text-lg font-semibold px-5 py-3 rounded shadow-md hover:bg-slate-800 transition-all">
                  Take the Scorecard
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
