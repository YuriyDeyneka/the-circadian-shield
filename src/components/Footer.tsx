const shopLinks = [
  'All Products',
  'The Solo Shield',
  'The Dual Shield',
  'The Family Shield',
  'Best Sellers',
];

const helpLinks = [
  'About Us',
  'FAQs',
  'Track My Order',
  'Contact Us',
  'Refund Policy',
  'Shipping Policy',
];

// Payment brand SVGs (inline, no external deps)
const paymentIcons = [
  // Visa
  { label: 'Visa', svg: (
    <svg viewBox="0 0 50 16" className="h-5" aria-label="Visa">
      <text x="0" y="13" fontFamily="Arial,sans-serif" fontWeight="700" fontSize="14" fill="#1A1F71">VISA</text>
    </svg>
  )},
  // Mastercard
  { label: 'Mastercard', svg: (
    <svg viewBox="0 0 38 24" className="h-5" aria-label="Mastercard">
      <circle cx="14" cy="12" r="10" fill="#EB001B"/>
      <circle cx="24" cy="12" r="10" fill="#F79E1B"/>
      <path d="M19 4.8a10 10 0 000 14.4A10 10 0 0019 4.8z" fill="#FF5F00"/>
    </svg>
  )},
  // Amex
  { label: 'Amex', svg: (
    <svg viewBox="0 0 50 16" className="h-5" aria-label="American Express">
      <rect width="50" height="16" rx="2" fill="#2557D6"/>
      <text x="4" y="12" fontFamily="Arial,sans-serif" fontWeight="700" fontSize="9" fill="#fff">AMEX</text>
    </svg>
  )},
  // PayPal
  { label: 'PayPal', svg: (
    <svg viewBox="0 0 60 16" className="h-5" aria-label="PayPal">
      <text x="0" y="13" fontFamily="Arial,sans-serif" fontWeight="700" fontSize="13" fill="#003087">Pay</text>
      <text x="24" y="13" fontFamily="Arial,sans-serif" fontWeight="700" fontSize="13" fill="#009CDE">Pal</text>
    </svg>
  )},
  // Shop Pay
  { label: 'Shop Pay', svg: (
    <svg viewBox="0 0 68 16" className="h-5" aria-label="Shop Pay">
      <rect width="68" height="16" rx="3" fill="#5A31F4"/>
      <text x="6" y="12" fontFamily="Arial,sans-serif" fontWeight="700" fontSize="9" fill="#fff">Shop Pay</text>
    </svg>
  )},
  // Apple Pay
  { label: 'Apple Pay', svg: (
    <svg viewBox="0 0 50 16" className="h-5" aria-label="Apple Pay">
      <text x="0" y="12" fontFamily="Arial,sans-serif" fontWeight="600" fontSize="10" fill="#000">Apple Pay</text>
    </svg>
  )},
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400">

      {/* Main columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="lg:col-span-2">
            <h5 className="text-white font-bold text-xl uppercase tracking-tight mb-3">Circadian Shield</h5>
            <p className="text-sm leading-relaxed max-w-sm mb-6">
              The biological override for your racing mind. Clinically-mapped white noise and red-spectrum light for deeper sleep, sharper focus, and zero distractions.
            </p>
            {/* Social */}
            <div className="flex gap-4">
              {/* Facebook */}
              <a href="#" aria-label="Facebook" className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
              </a>
              {/* Instagram */}
              <a href="#" aria-label="Instagram" className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              {/* YouTube */}
              <a href="#" aria-label="YouTube" className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white"><path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#1a1a1a"/></svg>
              </a>
              {/* TikTok */}
              <a href="#" aria-label="TikTok" className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.78a4.85 4.85 0 01-1.01-.09z"/></svg>
              </a>
            </div>
          </div>

          {/* Shop links */}
          <div>
            <h6 className="text-white font-bold text-xs uppercase tracking-widest mb-4">Shop</h6>
            <ul className="space-y-3">
              {shopLinks.map(link => (
                <li key={link}>
                  <a href="#" className="text-sm hover:text-white transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Help links */}
          <div>
            <h6 className="text-white font-bold text-xs uppercase tracking-widest mb-4">Help</h6>
            <ul className="space-y-3">
              {helpLinks.map(link => (
                <li key={link}>
                  <a href="#" className="text-sm hover:text-white transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">

          {/* Legal */}
          <div className="text-xs text-center md:text-left space-y-1">
            <p>&copy; {new Date().getFullYear()} Circadian Shield. All rights reserved.</p>
            <p className="text-slate-500">*These statements have not been evaluated by the FDA. This product is not intended to diagnose, treat, cure, or prevent any disease.</p>
          </div>

          {/* Payment icons */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            {paymentIcons.map(({ label, svg }) => (
              <div
                key={label}
                title={label}
                className="bg-white rounded px-2 py-1 flex items-center justify-center h-8 min-w-[44px]"
              >
                {svg}
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
