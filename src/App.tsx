/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Keynotes from './pages/Keynotes';
import Books from './pages/Books';
import Media from './pages/Media';
import LeadershipForWomen from './pages/LeadershipForWomen';

const IS_COMING_SOON = true;

function ComingSoon() {
  return (
    <div className="min-h-screen bg-navy flex flex-col items-center justify-center p-6 text-center relative overflow-hidden font-sans">
      {/* Background aesthetics */}
      <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" alt="Background" className="absolute inset-0 w-full h-full object-cover opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/90 to-navy/80"></div>
      
      <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
        <img src="/logo.png" alt="Dr Mavis Mazhura" className="h-28 w-auto mb-8 bg-white p-4 rounded-xl shadow-2xl" />
        <span className="text-sage font-semibold tracking-widest uppercase text-sm mb-4 block">Dr Mavis Mazhura</span>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-white leading-tight mb-6">
          Something extraordinary is coming.
        </h1>
        <p className="text-xl text-slate-300 leading-relaxed mb-10 max-w-xl">
          We are currently upgrading our digital experience to bring you unparalleled resources in Sustainable Leadership and Behavioural Science.
        </p>
        <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/10 shadow-xl max-w-md w-full">
          <p className="text-white font-medium mb-6">Get in touch in the meantime:</p>
          <a href="mailto:mavism@tb2b.co.za" className="inline-block w-full bg-terracotta text-white px-8 py-4 rounded font-bold shadow-lg hover:bg-[#c96c51] transition-all text-lg">
            Contact Dr. Mavis
          </a>
        </div>
      </div>
    </div>
  );
}

function AppLayout() {
  const location = useLocation();
  const isLandingPage = location.pathname === '/leadership-for-women';

  if (IS_COMING_SOON) {
    return <ComingSoon />;
  }

  if (isLandingPage) {
    return (
      <Routes>
        <Route path="/leadership-for-women" element={<LeadershipForWomen />} />
      </Routes>
    );
  }

  return (
    <div className="font-sans antialiased selection:bg-sage selection:text-navy min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/keynotes" element={<Keynotes />} />
          <Route path="/books" element={<Books />} />
          <Route path="/media" element={<Media />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
}
