/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Search, Phone, ShoppingCart, MapPin, CheckCircle, X, Plus, Sparkles, PlusCircle } from 'lucide-react';
import { Medicine, CartItem } from '../types';
import { MEDICINES } from '../data/mockData';

interface HeroProps {
  setActiveTab: (tab: 'home' | 'about' | 'services' | 'gallery' | 'contact' | 'whatsapp-order') => void;
  cart: CartItem[];
  setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
}

export default function Hero({ setActiveTab, cart, setCart }: HeroProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Medicine[]>([]);
  const [addedAnimationId, setAddedAnimationId] = useState<string | null>(null);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (!query.trim()) {
      setSearchResults([]);
      return;
    }

    const filtered = MEDICINES.filter(
      (med) =>
        med.name.toLowerCase().includes(query.toLowerCase()) ||
        med.category.toLowerCase().includes(query.toLowerCase()) ||
        med.description.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(filtered.slice(0, 5)); // show top 5 matches
  };

  const handleAddToCart = (medicine: Medicine) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.medicine.id === medicine.id);
      if (existing) {
        return prevCart.map((item) =>
          item.medicine.id === medicine.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { medicine, quantity: 1 }];
    });

    // Fire tiny confirmation animation
    setAddedAnimationId(medicine.id);
    setTimeout(() => setAddedAnimationId(null), 1500);
  };

  const clearSearch = () => {
    setSearchQuery('');
    setSearchResults([]);
  };

  return (
    <section className="relative bg-slate-50/50 dark:bg-slate-950/40 py-12 md:py-20 px-4 sm:px-6 lg:px-8 border-b border-white/20 dark:border-slate-800 transition-colors duration-300 overflow-hidden">
      
      {/* Decorative Hero Pattern */}
      <div className="absolute inset-0 hero-pattern pointer-events-none opacity-[0.06] dark:opacity-[0.03]"></div>

      {/* Decorative Blur Orbs */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Side: Text and Action CTAs */}
        <div className="lg:col-span-7 space-y-6 md:space-y-8">
          
          <div className="space-y-4">
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full status-pill text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Gaya's Certified Local Pharmacy</span>
            </div>
            
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-sans font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
              Maa Vindhyavasini <br />
              <span className="text-emerald-600 dark:text-emerald-400">Medical Hall</span>
            </h1>
            
            <h2 className="text-lg md:text-xl font-sans font-medium text-slate-700 dark:text-slate-300 italic">
              Your Trusted Pharmacy in Tekari Road, Delha
            </h2>

            <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm md:text-base leading-relaxed max-w-2xl">
              Providing 100% genuine medicines, specialized health supplements, surgical accessories, medical diagnostics, pediatric formulations, and skin hygiene items. Certified batch verification and pristine cold-chain climate storage guaranteed.
            </p>
          </div>

          {/* Search Box Integration */}
          <div className="relative max-w-lg">
            <label htmlFor="hero-search" className="sr-only">Search Medicines</label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-slate-400">
                <Search className="w-5 h-5 text-emerald-500" />
              </span>
              <input
                id="hero-search"
                type="text"
                placeholder="Search medicines: Paracetamol, Vitamin D3, BP Monitor..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="w-full pl-11 pr-10 py-3.5 rounded-2xl border border-white/20 dark:border-slate-800 glass text-slate-900 dark:text-white text-xs sm:text-sm font-semibold shadow-xs hover:border-emerald-500 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-all"
              />
              {searchQuery && (
                <button
                  onClick={clearSearch}
                  className="absolute inset-y-0 right-0 flex items-center pr-4 text-slate-400 hover:text-slate-600"
                >
                  <X className="w-4.5 h-4.5" />
                </button>
              )}
            </div>

            {/* Live Search Result Dropdown */}
            {searchResults.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-2 border border-white/20 dark:border-slate-800 glass rounded-2xl shadow-xl z-30 overflow-hidden divide-y divide-gray-150/40 dark:divide-slate-850/40 animate-fade-in">
                {searchResults.map((med) => {
                  const isAdded = addedAnimationId === med.id;
                  return (
                    <div 
                      key={med.id} 
                      className="p-3.5 flex items-center justify-between gap-4 hover:bg-white/30 dark:hover:bg-slate-800/10 transition-colors"
                    >
                      <div className="space-y-1 min-w-0">
                        <div className="flex items-center gap-1.5">
                          <span className="font-bold text-xs sm:text-sm text-slate-800 dark:text-white truncate">{med.name}</span>
                          <span className="text-[9px] bg-slate-100/60 dark:bg-slate-800/60 text-slate-400 px-1.5 py-0.5 rounded-sm shrink-0 uppercase tracking-wider">{med.form}</span>
                        </div>
                        <p className="text-[10px] text-slate-400 dark:text-slate-500 truncate">{med.description}</p>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        <span className="font-mono text-xs font-bold text-emerald-600 dark:text-emerald-400">₹{med.price || 'Inquire'}</span>
                        <button
                          onClick={() => handleAddToCart(med)}
                          className={`p-1.5 sm:px-3 sm:py-1 rounded-xl text-xs font-bold transition-all flex items-center gap-1 cursor-pointer ${
                            isAdded
                              ? 'bg-emerald-500 text-white shadow-xs'
                              : 'bg-emerald-50/60 hover:bg-emerald-100/60 dark:bg-emerald-950/20 text-emerald-600 dark:text-emerald-400 hover:scale-102 border border-emerald-150/40 dark:border-emerald-900/20'
                          }`}
                        >
                          {isAdded ? (
                            <>
                              <CheckCircle className="w-4 h-4" />
                              <span className="hidden sm:inline">Added</span>
                            </>
                          ) : (
                            <>
                              <PlusCircle className="w-4 h-4" />
                              <span className="hidden sm:inline">Add</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  );
                })}
                <div className="p-2.5 bg-white/20 dark:bg-slate-900/20 text-center text-[10px] text-slate-400">
                  Can't find a specific medicine? Type it directly in the <strong>WhatsApp Order Form</strong>
                </div>
              </div>
            )}
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <button
              onClick={() => {
                setActiveTab('whatsapp-order');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center justify-center gap-2.5 medical-gradient text-white font-bold text-sm px-6 py-3.5 rounded-xl transition-all shadow-md hover:scale-[1.01] active:scale-100 cursor-pointer"
            >
              <ShoppingCart className="w-4.5 h-4.5" />
              <span>WhatsApp Prescription Order</span>
            </button>

            <a
              href="tel:09122118837"
              className="flex items-center justify-center gap-2.5 bg-slate-900/10 dark:bg-slate-800/15 border border-white/20 dark:border-slate-800 glass text-slate-900 dark:text-slate-100 font-bold text-sm px-6 py-3.5 rounded-xl transition-all shadow-sm hover:scale-[1.01] active:scale-100"
            >
              <Phone className="w-4.5 h-4.5 text-emerald-500" />
              <span>Call: 09122118837</span>
            </a>

            <a
              href="https://maps.google.com/?q=Maa+Vindhyavasini+Medical+Hall+Gaya+Bihar"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 bg-slate-900/10 dark:bg-slate-800/15 border border-white/20 dark:border-slate-800 glass text-slate-900 dark:text-slate-100 font-bold text-sm px-6 py-3.5 rounded-xl transition-all shadow-xs hover:scale-[1.01] active:scale-100"
            >
              <MapPin className="w-4.5 h-4.5 text-red-500" />
              <span>Get Directions</span>
            </a>
          </div>

        </div>

        {/* Right Side: Visual Graphic Hero Block */}
        <div className="lg:col-span-5 relative hidden lg:block">
          
          {/* Framed Graphic Mockup */}
          <div className="relative rounded-3xl overflow-hidden border border-white/10 dark:border-slate-800 shadow-2xl aspect-1/1 bg-slate-100">
            <img
              src="https://images.unsplash.com/photo-1607619056574-7b8d304f3ced?auto=format&fit=crop&q=80&w=800"
              alt="Maa Vindhyavasini Medical Hall Storefront Graphic"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transform hover:scale-102 transition-transform duration-700"
            />
            
            {/* Visual Glass Card Overlays */}
            <div className="absolute top-6 left-6 p-4 glass rounded-2xl border border-white/20 shadow-lg flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl medical-gradient text-white flex items-center justify-center font-bold">
                ✓
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-950 dark:text-white leading-none">100% Genuine</h4>
                <p className="text-[10px] text-slate-400 mt-1.5 uppercase">Procured Direct</p>
              </div>
            </div>

            <div className="absolute bottom-6 right-6 p-4 glass rounded-2xl border border-white/15 shadow-lg flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl medical-gradient text-white flex items-center justify-center font-bold">
                ☎
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-900 dark:text-white leading-none">WhatsApp Delivery</h4>
                <p className="text-[10px] text-emerald-600 dark:text-emerald-400 mt-1.5 font-bold">Prompt Gaya dispatch</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
