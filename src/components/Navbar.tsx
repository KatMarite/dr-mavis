import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { totalItems, setIsCartOpen } = useCart();

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
          <img src="/mavislogo.png" alt="Dr Mavis Mazhura Logo" className="h-24 lg:h-28 w-auto" />
        </Link>
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/about" className={`text-sm transition-colors ${isAbout ? 'font-bold text-terracotta' : 'font-medium text-slate-600 hover:text-terracotta'}`}>About</Link>
          <Link to="/services" className={`text-sm transition-colors ${isServices ? 'font-bold text-terracotta' : 'font-medium text-slate-600 hover:text-terracotta'}`}>Services</Link>
          <Link to="/keynotes" className={`text-sm transition-colors ${isKeynotes ? 'font-bold text-terracotta' : 'font-medium text-slate-600 hover:text-terracotta'}`}>Keynotes</Link>
          <Link to="/books" className={`text-sm transition-colors ${isBooks ? 'font-bold text-terracotta' : 'font-medium text-slate-600 hover:text-terracotta'}`}>Books</Link>
          <Link to="/media" className={`text-sm transition-colors ${isMedia ? 'font-bold text-terracotta' : 'font-medium text-slate-600 hover:text-terracotta'}`}>Media</Link>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden md:block">
            {isAbout ? (
              <Link to="/contact#contact-form" className="bg-navy text-white text-sm font-semibold px-5 py-2.5 rounded shadow-md hover:bg-slate-800 transition-all">
                Work With Me
              </Link>
            ) : isServices ? (
              <Link to="/contact#contact-form" className="bg-navy text-white text-sm font-semibold px-5 py-2.5 rounded shadow-md hover:bg-slate-800 transition-all">
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
              <Link to="/scorecard" className="bg-navy text-white text-sm font-semibold px-5 py-2.5 rounded shadow-md hover:shadow-lg hover:bg-slate-800 transition-all">
                Take the Scorecard
              </Link>
            )}
          </div>
          
          <button 
            onClick={() => setIsCartOpen(true)}
            className="relative p-2 text-slate-600 hover:text-terracotta transition-colors"
            aria-label="Open cart"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </svg>
            {totalItems > 0 && (
              <span className="absolute top-0 right-0 inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-terracotta rounded-full -translate-y-1/4 translate-x-1/4">
                {totalItems}
              </span>
            )}
          </button>

          <button className="md:hidden text-navy p-2" onClick={toggleMobileMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"} />
            </svg>
          </button>
        </div>
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
                <Link to="/contact#contact-form" onClick={closeMobileMenu} className="block w-full text-center bg-navy text-white text-lg font-semibold px-5 py-3 rounded shadow-md hover:bg-slate-800 transition-all">
                  Work With Me
                </Link>
              ) : isServices ? (
                <Link to="/contact#contact-form" onClick={closeMobileMenu} className="block w-full text-center bg-navy text-white text-lg font-semibold px-5 py-3 rounded shadow-md hover:bg-slate-800 transition-all">
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
                <Link to="/scorecard" onClick={closeMobileMenu} className="block w-full text-center bg-navy text-white text-lg font-semibold px-5 py-3 rounded shadow-md hover:bg-slate-800 transition-all">
                  Take the Scorecard
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
