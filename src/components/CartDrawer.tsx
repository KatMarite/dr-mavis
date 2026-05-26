import { useRef, useEffect, useState } from 'react';
import { useCart } from '../context/CartContext';
import { submitToWeb3Forms } from '../utils/web3forms';

export default function CartDrawer() {
  const { isCartOpen, setIsCartOpen, items, updateQuantity, removeFromCart, totalPrice } = useCart();
  const formRef = useRef<HTMLFormElement>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [showCheckoutForm, setShowCheckoutForm] = useState(false);

  // Payfast credentials
  const MERCHANT_ID = "11267024";
  const MERCHANT_KEY = "k76vmk6gnvkwm";

  // Lock body scroll when cart is open
  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      // Reset checkout form when cart closes
      setShowCheckoutForm(false);
      setIsProcessing(false);
    }
    return () => { document.body.style.overflow = ''; };
  }, [isCartOpen]);

  if (!isCartOpen) return null;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isProcessing) return;

    setIsProcessing(true);
    
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name_first') as string;
    const email = formData.get('email_address') as string;
    const phone = formData.get('cell_number') as string;
    const address = formData.get('custom_str1') as string;

    const cartSummary = items.map(item => `${item.quantity}x ${item.title} (R ${item.price.toFixed(2)})`).join('\n');

    try {
      await submitToWeb3Forms({
        subject: `New Book Order from ${name}`,
        from_name: name,
        email: email,
        phone: phone,
        address: address,
        order_total: `R ${totalPrice.toFixed(2)}`,
        items: cartSummary,
        message: 'A new order has been initiated. Waiting for PayFast payment confirmation.',
      });
    } catch (error) {
      console.error("Failed to send order notification:", error);
    }

    if (formRef.current) {
      formRef.current.submit();
    }
  };

  const returnUrl = window.location.origin + "/books?payment=success";
  const cancelUrl = window.location.origin + "/books?payment=cancel";

  return (
    <div className="fixed inset-0 z-[10000] flex justify-end">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-navy/60 backdrop-blur-sm transition-opacity"
        onClick={() => setIsCartOpen(false)}
      ></div>

      {/* Drawer */}
      <div className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col animate-slide-in-right">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-200">
          <h2 className="text-2xl font-serif text-navy">
            {showCheckoutForm ? 'Checkout' : 'Your Cart'}
          </h2>
          <button 
            onClick={() => setIsCartOpen(false)}
            className="p-2 text-slate-400 hover:text-navy transition-colors"
            aria-label="Close cart"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Cart Items (hidden when checkout form is showing) */}
        {!showCheckoutForm && (
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {items.length === 0 ? (
              <div className="text-center text-slate-500 py-10">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 mx-auto mb-4 opacity-50">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                </svg>
                <p>Your cart is empty.</p>
              </div>
            ) : (
              items.map((item) => (
                <div key={item.id} className="flex gap-4 border-b border-slate-100 pb-4">
                  <div className="w-20 h-28 flex-shrink-0 rounded bg-slate-100 overflow-hidden relative">
                     {item.cover ? (
                       <img src={item.cover} alt={item.title} className="w-full h-full object-cover" />
                     ) : (
                       <div className="w-full h-full bg-slate-200"></div>
                     )}
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-bold text-navy leading-tight">{item.title}</h3>
                      <p className="text-terracotta font-semibold mt-1">R {item.price.toFixed(2)}</p>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center border border-slate-200 rounded">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="px-3 py-1 text-slate-600 hover:bg-slate-50"
                        >-</button>
                        <span className="px-3 py-1 text-sm font-medium border-x border-slate-200">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="px-3 py-1 text-slate-600 hover:bg-slate-50"
                        >+</button>
                      </div>
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="text-sm text-slate-400 hover:text-red-500 transition-colors"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        )}

        {/* Step 1: Cart Footer with Proceed to Checkout */}
        {items.length > 0 && !showCheckoutForm && (
          <div className="p-6 border-t border-slate-200 bg-slate-50 flex-shrink-0">
            <div className="flex justify-between items-center mb-4">
              <span className="text-slate-600 font-medium">Subtotal</span>
              <span className="text-xl font-bold text-navy">R {totalPrice.toFixed(2)}</span>
            </div>

            <button
              onClick={() => setShowCheckoutForm(true)}
              className="w-full bg-terracotta text-white font-bold py-3.5 rounded shadow-md transition-colors hover:bg-[#c96c51]"
            >
              Proceed to Checkout
            </button>
          </div>
        )}

        {/* Step 2: Checkout Form */}
        {items.length > 0 && showCheckoutForm && (
          <div className="flex-1 overflow-y-auto p-6 bg-slate-50">
            {/* Back to Cart link */}
            <button
              onClick={() => setShowCheckoutForm(false)}
              className="flex items-center gap-1.5 text-sm text-slate-500 hover:text-navy transition-colors mb-5"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
              Back to Cart
            </button>

            {/* Order Summary */}
            <div className="bg-white rounded-lg border border-slate-200 p-4 mb-5">
              <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-3">Order Summary</h4>
              {items.map((item) => (
                <div key={item.id} className="flex justify-between text-sm py-1.5 border-b border-slate-100 last:border-0">
                  <span className="text-slate-700">{item.quantity}x {item.title}</span>
                  <span className="text-slate-600 font-medium">R {(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
              <div className="flex justify-between items-center mt-3 pt-3 border-t border-slate-200">
                <span className="text-slate-700 font-semibold">Total</span>
                <span className="text-lg font-bold text-navy">R {totalPrice.toFixed(2)}</span>
              </div>
            </div>

            {/* Delivery Details Form */}
            <h3 className="text-navy font-semibold mb-4 text-lg">Delivery Details</h3>
            <form ref={formRef} action="https://www.payfast.co.za/eng/process" method="post" className="flex flex-col gap-3" onSubmit={handleSubmit}>
              <input type="hidden" name="merchant_id" value={MERCHANT_ID} />
              <input type="hidden" name="merchant_key" value={MERCHANT_KEY} />
              {window.location.hostname !== 'localhost' && (
                <>
                  <input type="hidden" name="return_url" value={returnUrl} />
                  <input type="hidden" name="cancel_url" value={cancelUrl} />
                </>
              )}
              <input type="hidden" name="amount" value={totalPrice.toFixed(2)} />
              <input type="hidden" name="item_name" value="Dr Mavis Books Order" />

              <div>
                <input type="text" name="name_first" required placeholder="Full Name *" className="w-full border border-slate-300 rounded p-2 text-sm outline-none focus:border-navy focus:ring-1 focus:ring-navy" />
              </div>
              <div>
                <input type="email" name="email_address" required placeholder="Email Address *" className="w-full border border-slate-300 rounded p-2 text-sm outline-none focus:border-navy focus:ring-1 focus:ring-navy" />
              </div>
              <div>
                <input type="tel" name="cell_number" required placeholder="Phone Number *" className="w-full border border-slate-300 rounded p-2 text-sm outline-none focus:border-navy focus:ring-1 focus:ring-navy" />
              </div>
              <div>
                <textarea name="custom_str1" required placeholder="Delivery Address *" className="w-full border border-slate-300 rounded p-2 text-sm outline-none focus:border-navy focus:ring-1 focus:ring-navy resize-none" rows={2}></textarea>
              </div>

              <button
                type="submit"
                disabled={isProcessing}
                className={`w-full bg-terracotta text-white font-bold py-3.5 rounded shadow-md transition-colors mt-2 ${isProcessing ? 'opacity-70 cursor-not-allowed' : 'hover:bg-[#c96c51]'}`}
              >
                {isProcessing ? 'Processing Order...' : 'Pay with PayFast'}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
