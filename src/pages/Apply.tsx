import React, { useState } from 'react';
import { motion } from 'motion/react';
import { submitToWeb3Forms } from '../utils/web3forms';

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

export default function Apply() {
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', email: '', phone: '',
    jobTitle: '', company: '', motivation: '', challenge: '',
  });
  const [status, setStatus] = useState<FormStatus>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const result = await submitToWeb3Forms({
        subject: `New Leadership Application — ${formData.firstName} ${formData.lastName}`,
        from_name: `${formData.firstName} ${formData.lastName}`,
        'First Name': formData.firstName, 'Last Name': formData.lastName,
        Email: formData.email, Phone: formData.phone,
        'Job Title': formData.jobTitle, 'Company': formData.company,
        'Primary Motivation': formData.motivation,
        'Leadership Challenge': formData.challenge,
      });
      if (result.success) {
        setStatus('success');
        setFormData({ firstName: '', lastName: '', email: '', phone: '', jobTitle: '', company: '', motivation: '', challenge: '' });
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const inputClass = "w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded focus:bg-white focus:border-terracotta focus:ring-1 focus:ring-terracotta outline-none transition-all";
  const labelClass = "block text-sm font-semibold text-navy uppercase tracking-wider mb-2";

  return (
    <div className="bg-alabaster min-h-screen pt-32 pb-24 px-6 font-sans">
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="text-terracotta font-semibold tracking-widest uppercase text-sm mb-3 block">Application</span>
          <h1 className="text-4xl md:text-5xl font-serif text-navy mb-6">Leadership for Women Process</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Please complete the application form below. Due to the intensive nature of this 12-week process, spaces are limited to ensure personalized attention and deep transformation.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="bg-white rounded-3xl shadow-xl border border-slate-100 p-8 md:p-12">
          {status === 'success' ? (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-sage/20 text-sage rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              </div>
              <h2 className="text-3xl font-serif text-navy mb-4">Application Received</h2>
              <p className="text-slate-600 mb-8 max-w-md mx-auto">
                Thank you for applying to the Leadership for Women Transformative Process. Dr. Mavis's team will review your application and be in touch within 48 hours to schedule a brief discovery call.
              </p>
              <button onClick={() => window.history.back()} className="inline-block border-2 border-navy text-navy px-8 py-3 rounded font-bold hover:bg-navy hover:text-white transition-colors">
                Return to Previous Page
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className={labelClass}>First Name *</label>
                  <input type="text" name="firstName" required value={formData.firstName} onChange={handleChange} className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Last Name *</label>
                  <input type="text" name="lastName" required value={formData.lastName} onChange={handleChange} className={inputClass} />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className={labelClass}>Email Address *</label>
                  <input type="email" name="email" required value={formData.email} onChange={handleChange} className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Phone Number *</label>
                  <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} className={inputClass} />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className={labelClass}>Current Job Title *</label>
                  <input type="text" name="jobTitle" required value={formData.jobTitle} onChange={handleChange} className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Company / Organization *</label>
                  <input type="text" name="company" required value={formData.company} onChange={handleChange} className={inputClass} />
                </div>
              </div>
              <div>
                <label className={labelClass}>What is your primary motivation for joining this programme? *</label>
                <textarea name="motivation" required rows={4} value={formData.motivation} onChange={handleChange} className={inputClass + " resize-none"}></textarea>
              </div>
              <div>
                <label className={labelClass}>What is the biggest leadership challenge you are currently facing? *</label>
                <textarea name="challenge" required rows={4} value={formData.challenge} onChange={handleChange} className={inputClass + " resize-none"}></textarea>
              </div>
              <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                <p className="text-sm text-slate-500 hidden sm:block">Your information is secure and confidential.</p>
                <button type="submit" disabled={status === 'loading'} className="w-full sm:w-auto bg-navy text-white px-10 py-4 rounded font-bold hover:bg-slate-800 hover:shadow-lg transition-all disabled:opacity-70 flex items-center justify-center gap-2">
                  {status === 'loading' ? (
                    <><svg className="animate-spin h-5 w-5" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> Submitting...</>
                  ) : status === 'error' ? 'Failed — Try Again' : 'Submit Application'}
                </button>
              </div>
              {status === 'error' && <p className="text-red-500 text-sm text-center">Something went wrong. Please try again.</p>}
            </form>
          )}
        </motion.div>
      </div>
    </div>
  );
}
