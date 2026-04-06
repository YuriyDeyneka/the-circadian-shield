import { useState } from 'react';
import { Star, ShieldCheck, Leaf, PlugZap, ChevronDown, ChevronUp, Truck, RotateCcw } from 'lucide-react';
import productImg from '../whitenoise-ad.jpg';
import productImg2 from '../doubleadWhiteNoise.png';
import productImg3 from '../gemini-bedroom.png';
import productImg4 from '../whitenoisead4.jpeg';
import productImg5 from '../gemini-lifestyle.png';

const bundles = [
  {
    id: 'solo',
    name: 'The Solo Shield',
    subtitle: 'For the individual sleeper',
    price: 27,
    regularPrice: 49,
    badge: null,
    includes: '1x Circadian Shield Device'
  },
  {
    id: 'duo',
    name: 'The Dual Shield',
    subtitle: 'Bedroom + Office / Nursery',
    price: 47,
    regularPrice: 98,
    badge: 'Save $51',
    includes: '2x Circadian Shield Devices'
  },
  {
    id: 'family',
    name: 'The Family Shield',
    subtitle: 'Whole home coverage',
    price: 64,
    regularPrice: 147,
    badge: 'Best Value — Save $83',
    includes: '3x Circadian Shield Devices'
  }
];

const gallery = [
  { src: productImg,  alt: 'The Circadian Shield — White Noise Device',          benefit: 'Clinically-mapped frequencies for deep sleep' },
  { src: productImg2, alt: 'Circadian Shield — lifestyle',                        benefit: 'Works in any room — bedroom, office, nursery' },
  { src: productImg3, alt: 'Circadian Shield — bedroom nightstand',               benefit: 'Compact design fits any bedside table' },
  { src: productImg4, alt: 'Circadian Shield — peaceful sleep',                   benefit: 'Fall asleep faster, wake up refreshed' },
  { src: productImg5, alt: 'Circadian Shield — red-spectrum light for relaxation', benefit: 'Biological red-spectrum glow signals sleep mode to your brain' },
];

export default function ProductBuyBox() {
  const [selectedBundle, setSelectedBundle] = useState(bundles[1]);
  const [openAccordion, setOpenAccordion] = useState<string | null>('details');
  const [activeImage, setActiveImage] = useState(0);

  const toggleAccordion = (section: string) => {
    setOpenAccordion(openAccordion === section ? null : section);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
        
        {/* Left: Image Gallery */}
        <div className="space-y-4">
          {/* Main image */}
          <div className="relative aspect-square bg-slate-50 rounded-2xl overflow-hidden border border-slate-200">
            <img
              key={activeImage}
              src={gallery[activeImage].src}
              alt={gallery[activeImage].alt}
              className="w-full h-full object-cover transition-opacity duration-300"
            />
            {/* Benefit caption */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/70 to-transparent px-4 py-4">
              <p className="text-white text-sm font-medium text-center">{gallery[activeImage].benefit}</p>
            </div>
            {/* Prev / Next arrows */}
            <button
              onClick={() => setActiveImage((activeImage - 1 + gallery.length) % gallery.length)}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full w-8 h-8 flex items-center justify-center shadow transition-colors text-slate-700 font-bold"
              aria-label="Previous image"
            >‹</button>
            <button
              onClick={() => setActiveImage((activeImage + 1) % gallery.length)}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full w-8 h-8 flex items-center justify-center shadow transition-colors text-slate-700 font-bold"
              aria-label="Next image"
            >›</button>
          </div>
          {/* Thumbnails */}
          <div className="grid grid-cols-5 gap-2">
            {gallery.map((img, i) => (
              <button
                key={i}
                onClick={() => setActiveImage(i)}
                className={`aspect-square bg-slate-50 rounded-xl overflow-hidden border-2 transition-all ${
                  activeImage === i ? 'border-slate-900 scale-105' : 'border-slate-200 hover:border-slate-400'
                }`}
              >
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Right: Product Details & Buy Box */}
        <div className="flex flex-col">
          {/* Reviews */}
          <div className="flex items-center gap-2 mb-4">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
            </div>
            <span className="text-sm text-slate-600 underline cursor-pointer">4.9/5 (1,284 Reviews)</span>
          </div>

          {/* Title & Price */}
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-2">The Circadian Shield</h1>
          <p className="text-lg text-slate-600 mb-2">Finally, The "Off Switch" For Your Racing Mind.</p>
          <p className="text-sm text-slate-500 mb-6">White noise for deeper sleep <span className="mx-1 text-slate-300">·</span> cleaner focus <span className="mx-1 text-slate-300">·</span> zero distractions</p>
          
          <div className="flex items-end gap-3 mb-8">
            <span className="text-3xl font-bold text-slate-900">${selectedBundle.price}.00</span>
            <span className="text-lg text-slate-400 line-through mb-1">${selectedBundle.regularPrice}.00</span>
            {selectedBundle.badge && (
              <span className="text-sm font-bold text-red-600 bg-red-50 px-2 py-1 rounded mb-1 ml-2">
                Sale
              </span>
            )}
          </div>

          {/* Bundle Selector */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-semibold text-slate-900">Select Bundle</h3>
            </div>
            <div className="space-y-3">
              {bundles.map((bundle) => (
                <div 
                  key={bundle.id}
                  onClick={() => setSelectedBundle(bundle)}
                  className={`relative p-4 rounded-xl border-2 cursor-pointer transition-all ${
                    selectedBundle.id === bundle.id 
                      ? 'border-slate-900 bg-slate-50' 
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  {bundle.badge && (
                    <div className="absolute -top-2.5 right-4 bg-slate-900 text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full">
                      {bundle.badge}
                    </div>
                  )}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                        selectedBundle.id === bundle.id ? 'border-slate-900' : 'border-slate-300'
                      }`}>
                        {selectedBundle.id === bundle.id && <div className="w-2.5 h-2.5 bg-slate-900 rounded-full" />}
                      </div>
                      <div>
                        <p className="font-bold text-slate-900">{bundle.name}</p>
                        <p className="text-xs text-slate-500">{bundle.includes}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-slate-900">${bundle.price}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Add to Cart */}
          <button className="w-full bg-slate-900 hover:bg-slate-800 text-white py-4 rounded-xl font-bold text-lg transition-colors mb-6 shadow-lg shadow-slate-900/20">
            Add to Cart - ${selectedBundle.price}.00
          </button>

          {/* Trust Badges */}
          <div className="grid grid-cols-3 gap-2 mb-10 border-y border-slate-200 py-6">
            <div className="flex flex-col items-center text-center gap-2">
              <ShieldCheck className="w-6 h-6 text-slate-700" />
              <span className="text-xs font-medium text-slate-600">90-Night<br/>Guarantee</span>
            </div>
            <div className="flex flex-col items-center text-center gap-2">
              <Leaf className="w-6 h-6 text-slate-700" />
              <span className="text-xs font-medium text-slate-600">Sleep &amp; Focus<br/>Proven</span>
            </div>
            <div className="flex flex-col items-center text-center gap-2">
              <PlugZap className="w-6 h-6 text-slate-700" />
              <span className="text-xs font-medium text-slate-600">Zero<br/>Configuration</span>
            </div>
          </div>

          {/* Accordions */}
          <div className="border-t border-slate-200">
            <div className="border-b border-slate-200">
              <button 
                onClick={() => toggleAccordion('details')}
                className="w-full py-4 flex justify-between items-center font-semibold text-slate-900"
              >
                Product Details
                {openAccordion === 'details' ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </button>
              {openAccordion === 'details' && (
                <div className="pb-4 text-sm text-slate-600 leading-relaxed">
                  Mute the 21st century. Use clinically-mapped sound frequencies and red-spectrum light to "flip the switch" into deep sleep in under 5 minutes—without the melatonin hangover. Features 12 soundscapes and adjustable biological red-spectrum glow.
                </div>
              )}
            </div>
            <div className="border-b border-slate-200">
              <button 
                onClick={() => toggleAccordion('shipping')}
                className="w-full py-4 flex justify-between items-center font-semibold text-slate-900"
              >
                <div className="flex items-center gap-2">
                  <Truck className="w-4 h-4" /> Shipping
                </div>
                {openAccordion === 'shipping' ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </button>
              {openAccordion === 'shipping' && (
                <div className="pb-4 text-sm text-slate-600 leading-relaxed">
                  Free priority shipping on all bundle orders. Standard orders process within 24 hours and typically arrive within 3-5 business days.
                </div>
              )}
            </div>
            <div className="border-b border-slate-200">
              <button 
                onClick={() => toggleAccordion('returns')}
                className="w-full py-4 flex justify-between items-center font-semibold text-slate-900"
              >
                <div className="flex items-center gap-2">
                  <RotateCcw className="w-4 h-4" /> Returns
                </div>
                {openAccordion === 'returns' ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </button>
              {openAccordion === 'returns' && (
                <div className="pb-4 text-sm text-slate-600 leading-relaxed">
                  Protected by our 90-Night Deep Sleep Guarantee. If you don't experience the best sleep of your life, return it for a full refund. We'll even cover the return shipping.
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
