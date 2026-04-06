import { ShoppingCart, Menu, Search } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-slate-200">
      {/* Announcement Bar */}
      <div className="bg-slate-900 text-white text-center py-2 text-xs font-medium tracking-wide uppercase">
        White noise for deeper sleep &amp; sharper focus — Free Priority Shipping on all Bundle Orders
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-4">
            <button className="p-2 -ml-2 text-slate-600 hover:text-slate-900 lg:hidden">
              <Menu className="w-6 h-6" />
            </button>
            <Search className="w-5 h-5 text-slate-600 hidden lg:block cursor-pointer hover:text-slate-900" />
          </div>

          <div className="flex-1 flex justify-center">
            <a href="#" className="text-xl font-bold tracking-tight text-slate-900 uppercase">
              Circadian Shield
            </a>
          </div>

          <div className="flex items-center gap-4">
            <button className="p-2 -mr-2 text-slate-600 hover:text-slate-900 relative">
              <ShoppingCart className="w-6 h-6" />
              <span className="absolute top-1 right-1 w-4 h-4 bg-red-500 text-white text-[10px] font-bold flex items-center justify-center rounded-full">
                1
              </span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
