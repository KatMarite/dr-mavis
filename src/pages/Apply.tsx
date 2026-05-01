import { motion } from 'motion/react';
import { useState } from 'react';

export default function Apply() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <div className="bg-alabaster min-h-screen pt-32 pb-24 px-6 font-sans">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-terracotta font-semibold tracking-widest uppercase text-sm mb-3 block">Application</span>
          <h1 className="text-4xl md:text-5xl font-serif text-navy mb-6">Leadership for Women Process</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Please complete the application form below. Due to the intensive nature of this 12-week process, spaces are limited to ensure personalized attention and deep transformation.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-3xl shadow-xl border border-slate-100 p-8 md:p-12"
        >
          {isSuccess ? (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-sage/20 text-sage rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              </div>
              <h2 className="text-3xl font-serif text-navy mb-4">Application Received</h2>
              <p className="text-slate-600 mb-8 max-w-md mx-auto">
                Thank you for applying to the Leadership for Women Transformative Process. Dr. Mavis's team will review your application and be in touch within 48 hours to schedule a brief discovery call.
              </p>
              <button 
                onClick={() => window.history.back()}
                className="inline-block border-2 border-navy text-navy px-8 py-3 rounded font-bold hover:bg-navy hover:text-white transition-colors"
              >
                Return to Previous Page
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-sm font-semibold text-navy uppercase tracking-wider mb-2">First Name *</label>
                  <input type="text" required className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded focus:bg-white focus:border-terracotta focus:ring-1 focus:ring-terracotta outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-navy uppercase tracking-wider mb-2">Last Name *</label>
                  <input type="text" required className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded focus:bg-white focus:border-terracotta focus:ring-1 focus:ring-terracotta outline-none transition-all" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-sm font-semibold text-navy uppercase tracking-wider mb-2">Email Address *</label>
                  <input type="email" required className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded focus:bg-white focus:border-terracotta focus:ring-1 focus:ring-terracotta outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-navy uppercase tracking-wider mb-2">Phone Number *</label>
                  <input type="tel" required className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded focus:bg-white focus:border-terracotta focus:ring-1 focus:ring-terracotta outline-none transition-all" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-sm font-semibold text-navy uppercase tracking-wider mb-2">Current Job Title *</label>
                  <input type="text" required className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded focus:bg-white focus:border-terracotta focus:ring-1 focus:ring-terracotta outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-navy uppercase tracking-wider mb-2">Company / Organization *</label>
                  <input type="text" required className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded focus:bg-white focus:border-terracotta focus:ring-1 focus:ring-terracotta outline-none transition-all" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-navy uppercase tracking-wider mb-2">What is your primary motivation for joining this programme? *</label>
                <textarea required rows={4} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded focus:bg-white focus:border-terracotta focus:ring-1 focus:ring-terracotta outline-none transition-all resize-none"></textarea>
              </div>

              <div>
                <label className="block text-sm font-semibold text-navy uppercase tracking-wider mb-2">What is the biggest leadership challenge you are currently facing? *</label>
                <textarea required rows={4} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded focus:bg-white focus:border-terracotta focus:ring-1 focus:ring-terracotta outline-none transition-all resize-none"></textarea>
              </div>

              <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                <p className="text-sm text-slate-500 hidden sm:block">Your information is secure and confidential.</p>
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full sm:w-auto bg-navy text-white px-10 py-4 rounded font-bold hover:bg-slate-800 hover:shadow-lg transition-all disabled:opacity-70 flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  ) : "Submit Application"}
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </div>
  );
}
