import { useRef, useEffect } from 'react';
import { useCart } from '../context/CartContext';

export default function CartDrawer() {
  const { isCartOpen, setIsCartOpen, items, updateQuantity, removeFromCart, totalPrice } = useCart();
  const formRef = useRef<HTMLFormElement>(null);

  // Payfast credentials
  const MERCHANT_ID = "11267024";
  const MERCHANT_KEY = "k76vmk6gnvkwm";

  // Lock body scroll when cart is open
  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isCartOpen]);

  if (!isCartOpen) return null;

  const handleCheckout = () => {
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
          <h2 className="text-2xl font-serif text-navy">Your Cart</h2>
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

        {/* Cart Items */}
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

        {/* Footer / Checkout */}
        {items.length > 0 && (
          <div className="p-6 border-t border-slate-200 bg-slate-50">
            <div className="flex justify-between items-center mb-6">
              <span className="text-lg text-slate-600">Subtotal</span>
              <span className="text-2xl font-bold text-navy">R {totalPrice.toFixed(2)}</span>
            </div>

            <form ref={formRef} action="https://www.payfast.co.za/eng/process" method="post" className="hidden">
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
            </form>

            <button
              onClick={handleCheckout}
              className="w-full bg-terracotta text-white font-bold py-4 rounded shadow-lg hover:bg-[#c96c51] transition-colors"
            >
              Checkout with Payfast
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
