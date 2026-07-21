/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, Search, MessageCircle } from 'lucide-react';
import { FAQS } from '../data/mockData';

export default function FAQSection() {
  const [expandedId, setExpandedId] = useState<string | null>('faq-1');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<'All' | 'General' | 'Order' | 'Prescription' | 'Store'>('All');

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  const filteredFaqs = FAQS.filter((faq) => {
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = activeCategory === 'All' || faq.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="py-12 bg-white/40 dark:bg-slate-900/40 rounded-3xl border border-white/20 dark:border-slate-800 glass px-6 sm:px-10 lg:px-12 max-w-7xl mx-auto space-y-8 transition-colors duration-300">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-b border-white/10 dark:border-slate-800 pb-6">
        <div className="space-y-2 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-sans font-bold text-slate-900 dark:text-white flex justify-center md:justify-start items-center gap-2">
            <HelpCircle className="w-7 h-7 text-emerald-500 shrink-0" />
            <span>Frequently Asked Questions</span>
          </h2>
          <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 max-w-xl">
            Get clear guidance about prescriptions, WhatsApp orders, local home deliveries, payment systems, and medical stores storage codes.
          </p>
        </div>

        {/* Live Search */}
        <div className="relative w-full md:w-80">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-slate-400">
            <Search className="w-4 h-4" />
          </span>
          <input
            type="text"
            placeholder="Search our FAQ..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-white/10 dark:border-slate-800 bg-white/40 dark:bg-slate-900/40 text-slate-900 dark:text-white text-xs md:text-sm focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-all glass"
          />
        </div>
      </div>

      {/* Category Selection Tabs */}
      <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
        {(['All', 'General', 'Order', 'Prescription', 'Store'] as const).map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all duration-200 cursor-pointer ${
              activeCategory === cat
                ? 'bg-emerald-600 dark:bg-emerald-500 text-white shadow-xs'
                : 'bg-white/10 dark:bg-slate-900/20 text-slate-600 dark:text-slate-300 hover:bg-white/20 dark:hover:bg-slate-800/40 border border-white/10 dark:border-slate-800 glass'
            }`}
          >
            {cat} Section
          </button>
        ))}
      </div>

      {/* Accordion List */}
      <div className="space-y-4 max-w-4xl mx-auto">
        {filteredFaqs.length === 0 ? (
          <div className="py-12 text-center text-slate-400 dark:text-slate-500">
            <Search className="w-10 h-10 mx-auto opacity-30 mb-2" />
            <p className="text-xs">No matching answers found for your search.</p>
            <p className="text-[10px] mt-1 text-slate-400">Try searching general terms like "delivery", "payment", or "prescription".</p>
          </div>
        ) : (
          filteredFaqs.map((faq) => {
            const isOpen = expandedId === faq.id;
            return (
              <div 
                key={faq.id}
                className="bg-white/40 dark:bg-slate-900/40 rounded-2xl border border-white/20 dark:border-slate-800 glass overflow-hidden transition-all duration-200 hover:-translate-y-0.5 card-hover"
              >
                {/* Header Toggle */}
                <button
                  type="button"
                  onClick={() => toggleExpand(faq.id)}
                  className="w-full px-5 py-4 text-left flex justify-between items-center gap-4 hover:bg-slate-50/50 dark:hover:bg-slate-800/20 transition-colors cursor-pointer"
                >
                  <span className="font-sans font-bold text-xs sm:text-sm text-slate-900 dark:text-white leading-relaxed">
                    {faq.question}
                  </span>
                  <span className="text-slate-400 shrink-0">
                    {isOpen ? <ChevronUp className="w-4 h-4 text-emerald-500" /> : <ChevronDown className="w-4 h-4" />}
                  </span>
                </button>

                {/* Answer Content */}
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed border-t border-gray-50 dark:border-gray-800/50 animate-fade-in">
                    <p>{faq.answer}</p>
                    <div className="mt-3 flex items-center justify-between border-t border-gray-50 dark:border-gray-850 pt-2.5">
                      <span className="text-[10px] bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded-sm uppercase tracking-wider font-extrabold">
                        Topic: {faq.category}
                      </span>
                      
                      <a 
                        href={`https://wa.me/919122118837?text=Hi, I have a quick question about: "${faq.question}"`}
                        target="_blank" 
                        rel="noreferrer" 
                        className="inline-flex items-center gap-1 text-[10px] text-emerald-600 dark:text-emerald-400 hover:underline font-bold"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>Inquire more on WhatsApp</span>
                      </a>
                    </div>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>

    </div>
  );
}
