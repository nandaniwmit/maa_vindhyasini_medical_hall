/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Menu, X, Phone, ShoppingCart, Sun, Moon } from 'lucide-react';

interface HeaderProps {
  activeTab: 'home' | 'about' | 'services' | 'gallery' | 'contact' | 'whatsapp-order';
  setActiveTab: (tab: 'home' | 'about' | 'services' | 'gallery' | 'contact' | 'whatsapp-order') => void;
  darkMode: boolean;
  setDarkMode: (dark: boolean) => void;
  cartCount: number;
}

export default function Header({ activeTab, setActiveTab, darkMode, setDarkMode, cartCount }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact' },
  ] as const;

  const handleNavClick = (tabId: 'home' | 'about' | 'services' | 'gallery' | 'contact' | 'whatsapp-order') => {
    setActiveTab(tabId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/30 dark:border-slate-800 glass transition-colors duration-300">
      {/* Top Banner with emergency warning / special offer */}
      <div className="medical-gradient text-white text-xs md:text-sm px-4 py-2 text-center font-medium flex justify-center items-center gap-2">
        <span className="inline-flex h-2 w-2 rounded-full bg-red-400 animate-ping"></span>
        <span>⚡ Need Emergency Medicines? Call Direct: <strong>09122118837</strong> | Opening Hours: 08:30 AM to 10:00 PM</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo & Brand Name */}
          <div 
            className="flex items-center gap-3 cursor-pointer select-none"
            onClick={() => handleNavClick('home')}
          >
            {/* Elegant Healthcare Vector Logo */}
            <div className="relative flex items-center justify-center w-12 h-12 rounded-xl medical-gradient text-white shadow-md transform transition-transform hover:scale-105">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 10.5V20a2 2 0 01-2 2H7a2 2 0 01-2-2v-9.5m14 0a2 2 0 00-2-2H7a2 2 0 00-2 2m14 0V4a2 2 0 00-2-2H7a2 2 0 00-2 2v4.5m12 0h-4M9 14h6m-3-3v6" />
              </svg>
              <div className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-red-500 border-2 border-white dark:border-slate-900 rounded-full"></div>
            </div>
            
            <div className="flex flex-col">
              <span className="font-sans font-bold text-lg md:text-xl tracking-tight text-slate-900 dark:text-white leading-none">
                Maa Vindhyavasini
              </span>
              <span className="font-sans font-medium text-xs tracking-wider text-emerald-600 dark:text-emerald-400 mt-1 uppercase">
                Medical Hall
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  activeTab === item.id
                    ? 'text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/30'
                    : 'text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-slate-50 dark:hover:bg-slate-800'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Action Toolbar */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2.5 rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* Live WhatsApp Cart Order Badge */}
            <button
              onClick={() => handleNavClick('whatsapp-order')}
              className={`relative flex items-center gap-2 px-4 py-2.5 rounded-xl border font-bold text-sm transition-all duration-300 cursor-pointer ${
                activeTab === 'whatsapp-order'
                  ? 'medical-gradient border-transparent text-white shadow-lg'
                  : 'bg-white/40 dark:bg-slate-850/40 border-white/20 dark:border-slate-800 glass text-slate-700 dark:text-slate-200 hover:border-emerald-500 hover:text-emerald-600 dark:hover:text-emerald-400'
              }`}
            >
              <ShoppingCart className="w-4.5 h-4.5" />
              <span>WhatsApp Order</span>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-extrabold text-white ring-2 ring-white dark:ring-slate-900 animate-bounce">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Direct Telephone Action */}
            <a
              href="tel:09122118837"
              className="flex items-center gap-2 medical-gradient text-white px-4 py-2.5 rounded-xl font-bold text-sm shadow-sm hover:scale-[1.02] active:scale-100 transition-all duration-300"
            >
              <Phone className="w-4 h-4" />
              <span>09122118837</span>
            </a>
          </div>

          {/* Mobile Utilities (Dark Mode + Phone + Menu) */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            <button
              onClick={() => handleNavClick('whatsapp-order')}
              className="p-2 relative rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <ShoppingCart className="w-5.5 h-5.5" />
              {cartCount > 0 && (
                <span className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[9px] font-extrabold text-white ring-1 ring-white">
                  {cartCount}
                </span>
              )}
            </button>

            <a
              href="tel:09122118837"
              className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <Phone className="w-5 h-5" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle Mobile Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-100 dark:border-gray-800 bg-white dark:bg-slate-900 px-4 pt-2 pb-6 space-y-2 animate-fade-in transition-colors duration-300">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`w-full text-left px-4 py-3 rounded-xl text-base font-semibold transition-all duration-200 ${
                activeTab === item.id
                  ? 'text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/20'
                  : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
              }`}
            >
              {item.label}
            </button>
          ))}
          
          <button
            onClick={() => handleNavClick('whatsapp-order')}
            className={`w-full text-left flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold transition-all duration-200 ${
              activeTab === 'whatsapp-order'
                ? 'text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/20'
                : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
            }`}
          >
            <div className="flex items-center gap-2">
              <ShoppingCart className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              <span>WhatsApp Order Form</span>
            </div>
            {cartCount > 0 && (
              <span className="bg-red-500 text-white text-xs font-bold px-2.5 py-0.5 rounded-full">
                {cartCount} Items
              </span>
            )}
          </button>

          <div className="pt-4 border-t border-gray-100 dark:border-gray-800 flex flex-col gap-3">
            <a
              href="tel:09122118837"
              className="flex items-center justify-center gap-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 py-3 rounded-xl font-bold text-sm shadow-xs"
            >
              <Phone className="w-4.5 h-4.5" />
              <span>Call: 09122118837</span>
            </a>
            
            <a
              href="https://wa.me/919122118837"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-xl font-bold text-sm shadow-xs"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.45L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.97C16.528 2.016 14.069.99 11.45.99c-5.438 0-9.863 4.373-9.868 9.8a9.66 9.66 0 001.523 5.176l-.991 3.616 3.784-.978-.152-.25zM17.18 13.9c-.29-.145-1.716-.848-1.982-.945-.266-.096-.46-.144-.653.146-.193.289-.747.945-.916 1.137-.168.193-.337.217-.627.072-1.29-.646-2.144-1.144-2.993-2.6-.22-.379.22-.35.63-1.173.067-.145.033-.271-.017-.373-.05-.101-.46-1.109-.63-1.52-.166-.402-.349-.348-.48-.348-.125-.002-.27-.002-.413-.002s-.377.053-.574.265c-.198.212-.754.737-.754 1.798 0 1.06.772 2.083.88 2.228.107.145 1.518 2.318 3.678 3.25.513.22 1.144.354 1.536.478.514.161.981.139 1.35.084.412-.061 1.717-.702 1.958-1.382.242-.68.242-1.263.17-1.383-.073-.12-.266-.192-.556-.338z" />
              </svg>
              <span>Instant WhatsApp Chat</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
