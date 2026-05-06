import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { submitToWeb3Forms } from '../utils/web3forms';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subStatus, setSubStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleNewsletter = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubStatus('loading');

    try {
      const result = await submitToWeb3Forms({
        subject: 'New Newsletter Subscriber',
        from_name: 'Newsletter Signup',
        Email: email,
        Source: 'Footer Newsletter Form',
      });

      if (result.success) {
        setSubStatus('success');
        setEmail('');
        setTimeout(() => setSubStatus('idle'), 5000);
      } else {
        setSubStatus('error');
        setTimeout(() => setSubStatus('idle'), 4000);
      }
    } catch {
      setSubStatus('error');
      setTimeout(() => setSubStatus('idle'), 4000);
    }
  };

  return (
    <footer className="bg-slate-900 pt-20 pb-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
        
        {/* Brand Column */}
        <div className="md:col-span-4">
          <img src="/mavislogo.png" alt="Dr Mavis Mazhura Logo" className="h-32 w-auto mb-6 bg-white p-3 rounded-xl" />
          <p className="text-slate-400 text-sm leading-relaxed mb-6">
            Leadership Psychologist, Behavioural Science & Performance Specialist, helping leaders shift from burnout into aligned, sustainable leadership.
          </p>
          {/* Social Icons */}
          <div className="flex space-x-4">
            <a href="#" className="text-slate-400 hover:text-sage transition-colors"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg></a>
            <a href="#" className="text-slate-400 hover:text-sage transition-colors"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg></a>
            <a href="#" className="text-slate-400 hover:text-sage transition-colors"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg></a>
          </div>
        </div>

        {/* Links Column */}
        <div className="md:col-span-3 md:col-start-6">
          <h4 className="text-white font-semibold mb-4">Explore</h4>
          <ul className="space-y-3 text-sm text-slate-400">
            <li><Link to="/about" className="hover:text-terracotta transition-colors">About Dr. Mazhura</Link></li>
            <li><Link to="/services" className="hover:text-terracotta transition-colors">Leadership Programmes</Link></li>
            <li><Link to="/keynotes" className="hover:text-terracotta transition-colors">Book a Keynote</Link></li>
            <li><Link to="/books" className="hover:text-terracotta transition-colors">Published Books</Link></li>
            <li><Link to="/media" className="hover:text-terracotta transition-colors">In The Media</Link></li>
            <li><Link to="/contact" className="hover:text-terracotta transition-colors">Contact Us</Link></li>
            <li><Link to="/contact#contact-form" className="hover:text-terracotta transition-colors">Request a Proposal</Link></li>
          </ul>
        </div>

        {/* Newsletter Column */}
        <div className="md:col-span-4">
          <h4 className="text-white font-semibold mb-2">Newsletter & Monthly Webinar</h4>
          <p className="text-sm text-slate-400 mb-4 italic">"Stay in the Work. Stay in the Process. Stay in Your Power."</p>
          <form onSubmit={handleNewsletter} className="flex flex-col gap-3">
            <input
              type="email"
              required
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-slate-800 text-white border border-slate-700 px-4 py-3 rounded text-sm focus:outline-none focus:border-sage transition-colors"
            />
            <button
              type="submit"
              disabled={subStatus === 'loading' || subStatus === 'success'}
              className={`font-semibold px-4 py-3 rounded text-sm transition-colors disabled:opacity-70 ${
                subStatus === 'success'
                  ? 'bg-sage text-white'
                  : subStatus === 'error'
                    ? 'bg-red-500 text-white'
                    : 'bg-terracotta text-white hover:bg-[#c96c51]'
              }`}
            >
              {subStatus === 'loading' ? 'Subscribing...'
                : subStatus === 'success' ? '✓ Subscribed!'
                : subStatus === 'error' ? 'Failed — Try Again'
                : 'Subscribe Now'}
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-slate-800 text-center md:text-left flex flex-col md:flex-row justify-between items-center">
        <p className="text-slate-500 text-xs mb-4 md:mb-0">&copy; 2026 Dr Mavis Mazhura. All rights reserved.</p>
        <div className="flex space-x-6 text-xs text-slate-500">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
