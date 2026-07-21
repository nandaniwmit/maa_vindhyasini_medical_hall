/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Phone, Mail, MapPin, Clock, ArrowUp, Heart } from 'lucide-react';
import { useEffect, useState } from 'react';

interface FooterProps {
  setActiveTab: (tab: 'home' | 'about' | 'services' | 'gallery' | 'contact' | 'whatsapp-order') => void;
  openModal: (type: 'privacy' | 'terms' | 'disclaimer') => void;
}

export default function Footer({ setActiveTab, openModal }: FooterProps) {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = (tabId: 'home' | 'about' | 'services' | 'gallery' | 'contact' | 'whatsapp-order') => {
    setActiveTab(tabId);
    scrollToTop();
  };

  return (
    <footer className="relative bg-slate-900 text-slate-300 dark:bg-black dark:text-slate-400 pt-16 pb-8 transition-colors duration-300">
      
      {/* Wave Decorative Line */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none transform -translate-y-full">
        <svg className="relative block w-full h-8 text-slate-900 dark:text-black fill-current" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M1200 120L0 120 0 0C171.7 41.7 343.3 62.5 515 62.5C686.7 62.5 858.3 41.7 1200 0L1200 120z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Card */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-emerald-500 text-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 10.5V20a2 2 0 01-2 2H7a2 2 0 01-2-2v-9.5m14 0a2 2 0 00-2-2H7a2 2 0 00-2 2m14 0V4a2 2 0 00-2-2H7a2 2 0 00-2 2v4.5m12 0h-4M9 14h6m-3-3v6" />
                </svg>
              </div>
              <span className="font-sans font-bold text-lg text-white">Maa Vindhyavasini MH</span>
            </div>
            
            <p className="text-sm leading-relaxed text-slate-400">
              Your trusted licensed neighborhood pharmacy in Delha, Gaya. We specialize in sourcing genuine therapeutic drugs, medical devices, surgical disposables, and personal health products at affordable rates.
            </p>

            <div className="flex flex-col gap-2.5 pt-2">
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Tekari Road, Delha, Gaya, Bihar 823002</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href="tel:09122118837" className="hover:text-white transition-colors">09122118837</a>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>contact@mvmedicalhall.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-base tracking-wider uppercase border-b-2 border-emerald-500 pb-2 w-12">Links</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button onClick={() => handleLinkClick('home')} className="hover:text-emerald-400 transition-all hover:translate-x-1 inline-flex items-center gap-1.5 cursor-pointer">
                  <span>→</span> Home
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('about')} className="hover:text-emerald-400 transition-all hover:translate-x-1 inline-flex items-center gap-1.5 cursor-pointer">
                  <span>→</span> About Store
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('services')} className="hover:text-emerald-400 transition-all hover:translate-x-1 inline-flex items-center gap-1.5 cursor-pointer">
                  <span>→</span> Services
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('gallery')} className="hover:text-emerald-400 transition-all hover:translate-x-1 inline-flex items-center gap-1.5 cursor-pointer">
                  <span>→</span> Store Gallery
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('contact')} className="hover:text-emerald-400 transition-all hover:translate-x-1 inline-flex items-center gap-1.5 cursor-pointer">
                  <span>→</span> Contact Us
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('whatsapp-order')} className="hover:text-emerald-400 transition-all hover:translate-x-1 inline-flex items-center gap-1.5 font-bold text-emerald-400 cursor-pointer">
                  <span>→</span> WhatsApp Order Form
                </button>
              </li>
            </ul>
          </div>

          {/* Top Categories & Products */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-base tracking-wider uppercase border-b-2 border-emerald-500 pb-2 w-12">Products</h3>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li className="flex justify-between items-center">
                <span>Prescription Medicines</span>
                <span className="text-[10px] bg-slate-800 text-emerald-400 px-1.5 py-0.5 rounded-sm">Genuine</span>
              </li>
              <li className="flex justify-between items-center">
                <span>Diabetes Care Essentials</span>
                <span className="text-[10px] bg-slate-800 text-emerald-400 px-1.5 py-0.5 rounded-sm">BP/Glucose</span>
              </li>
              <li className="flex justify-between items-center">
                <span>Orthopedic Knee Belts</span>
                <span className="text-[10px] bg-slate-800 text-slate-400 px-1.5 py-0.5 rounded-sm">Support</span>
              </li>
              <li className="flex justify-between items-center">
                <span>Baby Care & Formulas</span>
                <span className="text-[10px] bg-slate-800 text-slate-400 px-1.5 py-0.5 rounded-sm">Mild</span>
              </li>
              <li className="flex justify-between items-center">
                <span>Vitamins & Zinc Supplements</span>
                <span className="text-[10px] bg-slate-800 text-emerald-400 px-1.5 py-0.5 rounded-sm">Certified</span>
              </li>
              <li className="flex justify-between items-center">
                <span>Surgical Masks & Gloves</span>
                <span className="text-[10px] bg-slate-800 text-slate-400 px-1.5 py-0.5 rounded-sm">Sterile</span>
              </li>
            </ul>
          </div>

          {/* Business Hours & Map Link */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-base tracking-wider uppercase border-b-2 border-emerald-500 pb-2 w-12">Hours</h3>
            <div className="bg-white/5 dark:bg-white/5 p-4 rounded-xl border border-white/10 space-y-3 glass">
              <div className="flex items-center gap-2 text-white font-semibold text-sm">
                <Clock className="w-4.5 h-4.5 text-emerald-400" />
                <span>Store Operating Hours</span>
              </div>
              <ul className="text-xs space-y-2 text-slate-400">
                <li className="flex justify-between">
                  <span>Mon - Fri:</span>
                  <span className="text-white font-medium">08:30 AM - 10:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday:</span>
                  <span className="text-white font-medium">08:30 AM - 10:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday:</span>
                  <span className="text-white font-medium text-emerald-400">08:30 AM - 10:00 PM</span>
                </li>
              </ul>
              <div className="pt-2">
                <a 
                  href="https://maps.google.com/?q=Maa+Vindhyavasini+Medical+Hall+Delha+Gaya" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-xs text-emerald-400 hover:underline flex items-center gap-1"
                >
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Navigate with Google Maps</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Lower Footer */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© 2026 Maa Vindhyavasini Medical Hall. All Rights Reserved. Designed for premium trust. Developed by <a href="https://main.webmakerit.com" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 font-medium underline transition-colors">WMIT</a>.</p>
          
          <div className="flex flex-wrap gap-4 text-slate-400 font-medium">
            <button onClick={() => openModal('privacy')} className="hover:text-emerald-400 cursor-pointer">Privacy Policy</button>
            <span>•</span>
            <button onClick={() => openModal('terms')} className="hover:text-emerald-400 cursor-pointer">Terms & Conditions</button>
            <span>•</span>
            <button onClick={() => openModal('disclaimer')} className="hover:text-emerald-400 cursor-pointer">Medical Disclaimer</button>
          </div>
          
          <div className="flex items-center gap-1 text-[11px]">
            <span>Made with</span>
            <Heart className="w-3 h-3 text-red-500 fill-red-500 animate-pulse" />
            <span>for local Gaya healthcare.</span>
          </div>
        </div>
      </div>

      {/* Floating Back To Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-24 right-6 z-40 bg-slate-900/40 dark:bg-emerald-600/40 backdrop-blur-md hover:bg-emerald-600/90 text-white p-3.5 rounded-full shadow-lg border border-white/20 hover:scale-110 transition-all duration-300 cursor-pointer glass"
          aria-label="Scroll to Top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

    </footer>
  );
}
