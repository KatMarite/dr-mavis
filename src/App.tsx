/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Keynotes from './pages/Keynotes';
import Books from './pages/Books';

export default function App() {
  return (
    <Router>
      <div className="font-sans antialiased selection:bg-sage selection:text-navy min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/keynotes" element={<Keynotes />} />
            <Route path="/books" element={<Books />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
