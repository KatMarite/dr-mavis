import { motion } from 'motion/react';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

export default function ShippingPolicy() {
  return (
    <main>
      {/* Hero */}
      <section className="relative pt-32 pb-16 lg:pt-48 lg:pb-20 overflow-hidden bg-navy">
        <div className="absolute inset-0 pattern-bg opacity-10"></div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto px-6 text-center relative z-10"
        >
          <span className="text-sage font-semibold tracking-widest uppercase text-sm mb-4 block">
            Dr Mavis Mazhura
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-tight mb-6">
            Shipping &amp; Returns Policy
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about delivery, returns, and refunds for
            physical products purchased through our website.
          </p>
        </motion.div>
      </section>

      {/* Policy Content */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 space-y-16">
          {/* ── Shipping Policy ── */}
          <motion.div {...fadeUp}>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-navy/10 flex items-center justify-center text-navy flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                </svg>
              </div>
              <h2 className="text-3xl font-serif text-navy">Shipping Policy</h2>
            </div>
          </motion.div>

          {/* Shipping Area */}
          <motion.div {...fadeUp} className="space-y-4">
            <h3 className="text-xl font-semibold text-navy flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-terracotta inline-block"></span>
              Shipping Area
            </h3>
            <div className="pl-5 border-l-2 border-sage/30 space-y-3 text-slate-600 leading-relaxed">
              <p>
                We currently deliver physical products within{' '}
                <strong className="text-navy font-semibold">South Africa</strong> only.
              </p>
              <p>
                At this time, we do not offer international shipping through our
                website.
              </p>
            </div>
          </motion.div>

          {/* Order Processing */}
          <motion.div {...fadeUp} className="space-y-4">
            <h3 className="text-xl font-semibold text-navy flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-terracotta inline-block"></span>
              Order Processing
            </h3>
            <div className="pl-5 border-l-2 border-sage/30 space-y-3 text-slate-600 leading-relaxed">
              <p>
                Orders are processed once payment has been successfully received
                and confirmed.
              </p>
              <p>
                Please allow{' '}
                <strong className="text-navy font-semibold">1–3 business days</strong>{' '}
                for your order to be processed and prepared for dispatch.
              </p>
              <p>
                Orders placed over weekends or South African public holidays will
                be processed on the next business day.
              </p>
            </div>
          </motion.div>

          {/* Delivery Timeframes */}
          <motion.div {...fadeUp} className="space-y-4">
            <h3 className="text-xl font-semibold text-navy flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-terracotta inline-block"></span>
              Delivery Timeframes
            </h3>
            <div className="pl-5 border-l-2 border-sage/30 space-y-4 text-slate-600 leading-relaxed">
              <p>
                Once your order has been dispatched, estimated delivery times are:
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-slate-50 rounded-xl p-5 border border-slate-100">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">
                    Major Metropolitan Areas
                  </p>
                  <p className="text-navy font-semibold text-lg">2–5 business days</p>
                </div>
                <div className="bg-slate-50 rounded-xl p-5 border border-slate-100">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">
                    Regional &amp; Outlying Areas
                  </p>
                  <p className="text-navy font-semibold text-lg">3–7 business days</p>
                </div>
              </div>

              <p className="text-sm text-slate-500 italic">
                These delivery periods are estimates and may vary depending on
                your location, courier availability, public holidays, or
                circumstances outside our reasonable control.
              </p>
            </div>
          </motion.div>

          {/* Divider */}
          <div className="flex items-center gap-4">
            <div className="flex-1 h-px bg-slate-200"></div>
            <div className="w-2 h-2 rounded-full bg-terracotta"></div>
            <div className="flex-1 h-px bg-slate-200"></div>
          </div>

          {/* ── Refund & Returns Policy ── */}
          <motion.div {...fadeUp}>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-navy/10 flex items-center justify-center text-navy flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
                </svg>
              </div>
              <h2 className="text-3xl font-serif text-navy">Refund &amp; Returns Policy</h2>
            </div>
            <p className="text-slate-600 leading-relaxed">
              We want you to be satisfied with your purchase. This Refund and
              Returns Policy applies to physical products purchased through our
              website.
            </p>
          </motion.div>

          {/* Returns */}
          <motion.div {...fadeUp} className="space-y-4">
            <h3 className="text-xl font-semibold text-navy flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-terracotta inline-block"></span>
              Returns
            </h3>
            <div className="pl-5 border-l-2 border-sage/30 space-y-4 text-slate-600 leading-relaxed">
              <p>
                If you are not satisfied with your purchase, you may request a
                return within{' '}
                <strong className="text-navy font-semibold">14 days</strong> of
                receiving your order.
              </p>
              <p>To be eligible for a return, the product must be:</p>

              <ul className="space-y-3">
                {[
                  'Unused and in its original condition',
                  'Free from damage, markings, or signs of use',
                  'Returned in its original packaging, where applicable',
                  'Accompanied by proof of purchase or your order confirmation',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-5 h-5 text-sage flex-shrink-0 mt-0.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Contact CTA */}
          <motion.div
            {...fadeUp}
            className="bg-navy rounded-2xl p-8 md:p-10 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 pattern-bg opacity-10"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-serif text-white mb-3">
                Have questions about your order?
              </h3>
              <p className="text-slate-300 mb-6 max-w-md mx-auto text-sm leading-relaxed">
                If you need to request a return, enquire about shipping, or have
                any other questions, our team is here to help.
              </p>
              <a
                href="/contact"
                className="inline-block bg-terracotta text-white px-8 py-3 rounded font-bold shadow-lg hover:bg-[#c96c51] transition-all text-sm"
              >
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
