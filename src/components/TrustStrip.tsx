const items = [
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" aria-hidden="true">
        <rect width="48" height="48" rx="24" fill="#f1f5f9"/>
        <path d="M10 18h28M10 18v16a2 2 0 002 2h24a2 2 0 002-2V18M10 18l4-6h20l4 6" stroke="#334155" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M20 30l3 3 6-6" stroke="#334155" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    heading: 'Free Shipping',
    body: 'Every order ships free — no minimum, no catch. Straight to your door.',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" aria-hidden="true">
        <rect width="48" height="48" rx="24" fill="#f1f5f9"/>
        <rect x="8" y="20" width="26" height="16" rx="2" stroke="#334155" strokeWidth="2"/>
        <path d="M34 26h4a2 2 0 012 2v6a2 2 0 01-2 2h-4" stroke="#334155" strokeWidth="2"/>
        <circle cx="14" cy="39" r="2.5" fill="#f1f5f9" stroke="#334155" strokeWidth="2"/>
        <circle cx="28" cy="39" r="2.5" fill="#f1f5f9" stroke="#334155" strokeWidth="2"/>
        <path d="M8 24l4-8h14" stroke="#334155" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    heading: 'Fast Delivery',
    body: 'Dispatched in 1–2 business days. Arrives in 4–7 business days.',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" aria-hidden="true">
        <rect width="48" height="48" rx="24" fill="#f1f5f9"/>
        <rect x="8" y="15" width="32" height="20" rx="3" stroke="#334155" strokeWidth="2"/>
        <path d="M8 21h32" stroke="#334155" strokeWidth="2"/>
        <rect x="12" y="26" width="8" height="4" rx="1" fill="#334155"/>
      </svg>
    ),
    heading: 'Secure Payments',
    body: 'Checkout with Visa, Mastercard, Amex, PayPal, or Shop Pay — 100% encrypted.',
  },
];

export default function TrustStrip() {
  return (
    <section className="border-y border-slate-200 bg-white py-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-slate-200">
          {items.map((item, i) => (
            <div key={i} className="flex flex-col items-center text-center gap-3 px-6 py-6 sm:py-2">
              {item.icon}
              <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wide">{item.heading}</h4>
              <p className="text-slate-500 text-xs leading-relaxed max-w-xs">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
