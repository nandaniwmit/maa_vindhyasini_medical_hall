/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Sparkles, ArrowRight, BookOpen, Send, CheckCircle2, Ticket, Printer } from 'lucide-react';
import { HEALTH_TIPS } from '../data/mockData';
import { HealthTip } from '../types';

export default function BlogTips() {
  const [activeTip, setActiveTip] = useState<HealthTip | null>(null);
  const [newsEmail, setNewsEmail] = useState('');
  const [newsSubmitted, setNewsSubmitted] = useState(false);

  const handleNewsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsEmail.trim()) return;

    setNewsSubmitted(true);
    setTimeout(() => {
      setNewsSubmitted(false);
      setNewsEmail('');
    }, 2000);
  };

  const handlePrintReminder = () => {
    const printableContent = `
      =========================================
      PRESCRIPTION ORDER REMINDER CARD
      Maa Vindhyavasini Medical Hall, Delha, Gaya
      =========================================
      Phone: 09122118837
      WhatsApp: +91 91221 18837
      Location: Tekari Road, Delha, Gaya, Bihar

      HOW TO ORDER ON WHATSAPP:
      1. Snap a clear photo of your Doctor's Prescription.
      2. Visit our website and click "WhatsApp Order Form".
      3. Upload the photo and enter your patient name & address.
      4. Hit "Send via WhatsApp".
      
      Your medicines will be verified, packed, and delivered!
      Keep this card near your medicine cabinet.
      =========================================
    `;
    const printWindow = window.open('', '_blank');
    if (printWindow) {
      printWindow.document.write(`<pre style="font-family: monospace; padding: 20px;">${printableContent}</pre>`);
      printWindow.document.close();
      printWindow.print();
    }
  };

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16 animate-fade-in transition-colors duration-300">
      
      {/* 1. Offers & Discounts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-emerald-950/95 dark:bg-emerald-950/45 text-white rounded-3xl p-8 md:p-12 border border-white/10 dark:border-emerald-900/30 glass relative overflow-hidden shadow-xl">
        
        {/* Decorative elements */}
        <div className="absolute right-0 top-0 w-64 h-64 bg-emerald-800/20 rounded-full blur-2xl"></div>
        <div className="absolute -left-10 -bottom-10 w-64 h-64 bg-emerald-500/10 rounded-full blur-2xl"></div>

        <div className="space-y-6 relative z-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 border border-white/20 text-xs font-bold uppercase tracking-wider">
            <Ticket className="w-3.5 h-3.5 text-yellow-300" />
            <span>Monthly Saving Packs</span>
          </div>
          
          <h2 className="text-3xl font-sans font-extrabold tracking-tight leading-tight">
            Exclusive Health Offers <br />& Monthly Discounts
          </h2>
          
          <p className="text-slate-100 text-sm leading-relaxed max-w-md">
            Do you or your parents consume long-term cardiac, anti-diabetic, or thyroid drugs? Register your monthly prescriptions with us to unlock a flat <strong>15% Savings Guarantee</strong> and hassle-free automated monthly home delivery.
          </p>

          <ul className="space-y-2.5 text-xs text-slate-100 font-semibold">
            <li className="flex items-center gap-2">✓ Flat 15% discount on bulk thyroid/diabetic medicines</li>
            <li className="flex items-center gap-2">✓ Free diagnostic test reminder notifications</li>
            <li className="flex items-center gap-2">✓ Automated monthly refills before stock finishes</li>
          </ul>
        </div>

        {/* Right Side: Interactive Action Cards */}
        <div className="space-y-4 relative z-10">
          <div className="bg-white/5 dark:bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 space-y-3 glass">
            <h4 className="font-bold text-base text-yellow-300">Prescription Reminder Card</h4>
            <p className="text-xs text-slate-150 leading-relaxed">
              Print out our digital quick-reminder card. Keep it on your medicine drawer or refrigerator so family members can easily scan or dial us in healthcare emergencies.
            </p>
            <button
              onClick={handlePrintReminder}
              className="px-4 py-2.5 bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold text-xs rounded-xl transition-all flex items-center gap-2 shadow-md cursor-pointer hover:scale-[1.02] active:scale-100"
            >
              <Printer className="w-4 h-4" />
              <span>Print/Download Card</span>
            </button>
          </div>
        </div>

      </div>

      {/* 2. Latest Health Awareness Tips Section */}
      <div className="space-y-8">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/30 text-blue-700 dark:text-blue-300 text-xs font-bold uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Health & Prevention</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-sans font-bold text-slate-900 dark:text-white">
            Daily Health & Care Tips
          </h2>
          <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400">
            Empowering Gaya with critical knowledge about correct medicine storage, diabetic monitoring, and safety hygiene.
          </p>
        </div>

        {/* Grid health tips */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {HEALTH_TIPS.map((tip) => (
            <div
              key={tip.id}
              className="bg-white/40 dark:bg-slate-900/40 p-6 rounded-2xl border border-white/20 dark:border-slate-800 glass card-hover flex flex-col justify-between cursor-default"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-center text-[10px] font-mono text-slate-400">
                  <span>{tip.category}</span>
                  <span>{tip.readTime}</span>
                </div>
                
                <h4 className="font-bold text-base text-slate-900 dark:text-white leading-snug">
                  {tip.title}
                </h4>
                
                <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed line-clamp-3">
                  {tip.snippet}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-gray-50 dark:border-gray-700/50 flex justify-between items-center">
                <span className="text-[10px] text-slate-400">By {tip.author}</span>
                
                <button
                  onClick={() => setActiveTip(tip)}
                  className="text-xs text-emerald-600 dark:text-emerald-400 font-bold hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Lightbox for Article Full Reading */}
      {activeTip && (
        <div className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-white/95 dark:bg-slate-900/95 border border-white/20 dark:border-slate-800 glass rounded-3xl p-6 md:p-8 max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl relative">
            
            <button
              onClick={() => setActiveTip(null)}
              className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-gray-100 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors cursor-pointer"
            >
              ✕
            </button>

            <div className="space-y-5">
              <div className="space-y-2">
                <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">{activeTip.category}</span>
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white leading-snug">{activeTip.title}</h3>
                <div className="flex gap-4 text-xs text-slate-400 font-semibold pt-1">
                  <span>Published: {activeTip.date}</span>
                  <span>•</span>
                  <span>By: {activeTip.author}</span>
                </div>
              </div>

              <div className="border-t border-gray-100 dark:border-gray-800 pt-4 text-xs md:text-sm text-slate-650 dark:text-slate-300 leading-relaxed whitespace-pre-line space-y-4">
                <p>{activeTip.content}</p>
              </div>

              <div className="pt-4 border-t border-gray-100 dark:border-gray-800 flex justify-end">
                <button
                  onClick={() => setActiveTip(null)}
                  className="px-5 py-2.5 bg-slate-900/10 dark:bg-slate-800/15 text-slate-900 dark:text-slate-100 border border-white/20 dark:border-slate-800 glass font-bold text-xs rounded-xl hover:bg-emerald-600 dark:hover:bg-emerald-500 hover:text-white dark:hover:text-white transition-all cursor-pointer"
                >
                  Close Article
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* 3. Community Newsletter Subscription */}
      <div className="bg-white/40 dark:bg-slate-900/40 border border-white/20 dark:border-slate-800 glass rounded-3xl p-6 md:p-10 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="space-y-1 text-center md:text-left max-w-md">
          <h4 className="font-bold text-slate-900 dark:text-white text-lg">Subscribe to Healthy Gaya Alert</h4>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Receive vaccine arrivals, monthly discounts, health tip journals, and seasonal flu announcements. No spam.
          </p>
        </div>

        {newsSubmitted ? (
          <div className="flex items-center gap-2.5 bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-400 py-3 px-6 rounded-2xl border border-emerald-100 dark:border-emerald-900/50 text-xs font-bold animate-fade-in">
            <CheckCircle2 className="w-5 h-5 shrink-0" />
            <span>Successfully Subscribed to alerts!</span>
          </div>
        ) : (
          <form onSubmit={handleNewsSubmit} className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
            <label htmlFor="newsletter-email" className="sr-only">Email Address</label>
            <input
              id="newsletter-email"
              type="email"
              required
              placeholder="Enter your email address"
              value={newsEmail}
              onChange={(e) => setNewsEmail(e.target.value)}
              className="px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-xs md:text-sm focus:border-emerald-500 outline-none w-full sm:w-64 transition-all"
            />
            <button
              type="submit"
              className="px-5 py-2.5 medical-gradient text-white rounded-xl text-xs font-bold flex justify-center items-center gap-1.5 shadow-xs shrink-0 cursor-pointer hover:scale-[1.01] active:scale-100 transition-all"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Subscribe</span>
            </button>
          </form>
        )}
      </div>

    </div>
  );
}
