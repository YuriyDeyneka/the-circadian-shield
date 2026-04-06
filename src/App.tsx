import Navbar from './components/Navbar';
import ProductBuyBox from './components/ProductBuyBox';
import TrustStrip from './components/TrustStrip';
import UseCaseBanner from './components/UseCaseBanner';
import Features from './components/Features';
import Beliefs from './components/Beliefs';
import Reviews from './components/Reviews';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-slate-200 selection:text-slate-900">
      <Navbar />
      <ProductBuyBox />
      <TrustStrip />
      <UseCaseBanner />
      <Features />
      <Beliefs />
      <Reviews />
      <FAQ />
      <Footer />
    </div>
  );
}
