import { motion } from 'motion/react';

export default function Contact() {
  return (
    <main className="bg-alabaster min-h-screen">
      {/* 1. Hero Section */}
      <section className="pt-32 pb-16 lg:pt-48 lg:pb-24 bg-navy text-white text-center px-6 relative overflow-hidden">
        <img src="https://images.unsplash.com/photo-1516387938699-a93567ec168e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" alt="Contact Background" className="absolute inset-0 w-full h-full object-cover opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/90 to-transparent"></div>
        {/* Abstract pattern */}
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-terracotta/10 rounded-full blur-[80px] pointer-events-none -mt-40 -ml-40 z-0"></div>
        
        <div className="max-w-3xl mx-auto relative z-10">
          <span className="text-terracotta font-semibold tracking-widest uppercase text-sm mb-4 block">Get In Touch</span>
          <h1 className="text-5xl lg:text-6xl font-serif leading-tight mb-6">
            Start the Conversation
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Whether you are inquiring about a keynote speech, a sustainable leadership programme, or executive capacity coaching, we are here to assist you.
          </p>
        </div>
      </section>

      {/* 2. Main Content */}
      <section id="contact-form" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Contact Details (Left Column) */}
          <div className="lg:col-span-5">
            <h2 className="text-3xl md:text-4xl font-serif text-navy mb-6">Contact Details</h2>
            <p className="text-slate-600 mb-10 leading-relaxed">
              Dr. Mavis Mazhura partners with global organisations and executives. Reach out directly using the information below or submit a formal inquiry via our secure contact form.
            </p>

            <div className="space-y-8">
              {/* Email Block */}
              <div className="flex items-start">
                <div className="w-12 h-12 bg-sage/20 text-navy rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Direct Email</h4>
                  <a href="mailto:mavism@tb2b.co.za" className="text-xl font-bold text-navy hover:text-terracotta transition-colors break-all">
                    mavism@tb2b.co.za
                  </a>
                </div>
              </div>

              {/* Office Block */}
              <div className="flex items-start">
                <div className="w-12 h-12 bg-terracotta/10 text-terracotta rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Office Representation</h4>
                  <p className="text-lg text-navy font-medium leading-relaxed">
                    TB2B Corporate Consulting<br />
                    Johannesburg, South Africa
                  </p>
                </div>
              </div>

              {/* Quick Action Links */}
              <div className="pt-8 mt-8 border-t border-slate-100 flex flex-col gap-3">
                <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">Helpful Links</p>
                <a href="/services" className="text-navy font-semibold inline-flex items-center hover:text-sage transition-colors">
                  Review Leadership Programmes <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </a>
                <a href="/media" className="text-navy font-semibold inline-flex items-center hover:text-sage transition-colors">
                  View Media Kit <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form (Right Column) */}
          <div className="lg:col-span-7 bg-alabaster p-8 md:p-12 rounded-2xl shadow-sm border border-slate-200">
            <h3 className="text-2xl font-serif text-navy mb-2">Send an Inquiry</h3>
            <p className="text-slate-500 mb-8">Please fill out the form below and a representative will get back to you within 24-48 business hours.</p>
            
            <form action="https://formsubmit.co/katmarite@gmail.com" method="POST" className="space-y-6">
              <input type="hidden" name="_subject" value="New Website Inquiry!" />
              {/* Optional: Add a hidden next URL to redirect back after submission if desired */}
              {/* <input type="hidden" name="_next" value="https://yourwebsite.com/contact" /> */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-semibold text-navy mb-2">First Name</label>
                  <input type="text" id="firstName" name="First Name" required className="w-full bg-white border border-slate-300 rounded-lg px-4 py-3 text-slate-700 focus:outline-none focus:border-sage focus:ring-1 focus:ring-sage transition-colors" placeholder="Jane" />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-semibold text-navy mb-2">Last Name</label>
                  <input type="text" id="lastName" name="Last Name" required className="w-full bg-white border border-slate-300 rounded-lg px-4 py-3 text-slate-700 focus:outline-none focus:border-sage focus:ring-1 focus:ring-sage transition-colors" placeholder="Doe" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-navy mb-2">Email Address</label>
                  <input type="email" id="email" name="Email" required className="w-full bg-white border border-slate-300 rounded-lg px-4 py-3 text-slate-700 focus:outline-none focus:border-sage focus:ring-1 focus:ring-sage transition-colors" placeholder="jane@company.com" />
                </div>
                <div>
                  <label htmlFor="organization" className="block text-sm font-semibold text-navy mb-2">Organization</label>
                  <input type="text" id="organization" name="Organization" className="w-full bg-white border border-slate-300 rounded-lg px-4 py-3 text-slate-700 focus:outline-none focus:border-sage focus:ring-1 focus:ring-sage transition-colors" placeholder="Company Name" />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-navy mb-2">Nature of Inquiry</label>
                <select id="subject" name="Inquiry Type" required className="w-full bg-white border border-slate-300 rounded-lg px-4 py-3 text-slate-700 focus:outline-none focus:border-sage focus:ring-1 focus:ring-sage transition-colors">
                  <option>Book a Keynote</option>
                  <option>Leadership Training Proposal</option>
                  <option>Executive Coaching</option>
                  <option>Media or Press Request</option>
                  <option>Other Inquiry</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-navy mb-2">Message Details</label>
                <textarea id="message" name="Message" required rows={5} className="w-full bg-white border border-slate-300 rounded-lg px-4 py-3 text-slate-700 focus:outline-none focus:border-sage focus:ring-1 focus:ring-sage transition-colors resize-none" placeholder="How can we assist you?"></textarea>
              </div>

              <button type="submit" className="w-full sm:w-auto bg-navy text-white px-10 py-4 rounded font-bold hover:bg-slate-800 hover:shadow-lg transition-all duration-300">
                Submit Inquiry
              </button>
            </form>
          </div>

        </div>
      </section>
    </main>
  );
}
