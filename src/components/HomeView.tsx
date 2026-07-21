/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ShieldCheck, Users, HelpCircle, Zap, FileText, Sparkles, Award, MessageSquare, Pill, HeartPulse, ClipboardCheck, ArrowRight, Phone, CheckCircle } from 'lucide-react';
import { Medicine, CartItem } from '../types';
import { MEDICINES } from '../data/mockData';

interface HomeViewProps {
  setActiveTab: (tab: 'home' | 'about' | 'services' | 'gallery' | 'contact' | 'whatsapp-order') => void;
  cart: CartItem[];
  setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
}

export default function HomeView({ setActiveTab, cart, setCart }: HomeViewProps) {
  
  const whyChooseUs = [
    {
      title: '100% Genuine Medicines',
      desc: 'Procured strictly from certified drug manufacturers and authorized clinical distributors.',
      icon: <ShieldCheck className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
    },
    {
      title: 'Experienced Staff',
      desc: 'Double-checking dosages, verifying scripts, and explaining patient usage instructions carefully.',
      icon: <Users className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
    },
    {
      title: 'Affordable Prices',
      desc: 'Providing significant direct discounts on high-cost chronic prescriptions and healthcare packages.',
      icon: <Award className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
    },
    {
      title: 'Fast Service',
      desc: 'Instant counter dispensing or prompt local home deliveries right to your doorstep near Gaya.',
      icon: <Zap className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
    },
    {
      title: 'Prescription Medicines',
      desc: 'Deep stock counts of specialty cardiac, neurological, diabetic, and respiratory medications.',
      icon: <HeartPulse className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
    },
    {
      title: 'Healthcare Products',
      desc: 'Surgical dressings, sanitizers, N95 respiratory shields, baby formulas, and skin care gels.',
      icon: <Sparkles className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
    },
    {
      title: 'Trusted Local Pharmacy',
      desc: 'Serving families of Delha, Kharkhura, and Gaya with years of integrity and care.',
      icon: <CheckCircle className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
    },
    {
      title: 'Easy WhatsApp Support',
      desc: 'Order effortlessly. Simply upload a prescription photo or enter the name to place a dispatch.',
      icon: <MessageSquare className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
    }
  ];

  const featuredCategories = [
    { name: 'Tablets', desc: 'Standard pain-killers, antibiotics, cardiac & BP medications', count: '100+ Brands' },
    { name: 'Capsules', desc: 'Acidity, multivitamins, and specialty therapeutic caps', count: '50+ Brands' },
    { name: 'Syrups', desc: 'Mint-gels, cough relief, dry/wet expectorants, pediatric syrups', count: '40+ Brands' },
    { name: 'Injection', desc: 'Basal insulin pens, emergency vials, single-use syringes', count: '15+ Types' },
    { name: 'Medical Equipment', desc: 'Clinical BP cuffs, nebulizers, vaporizers, digital thermometers', count: '10+ Devices' },
    { name: 'Protein Supplements', desc: 'Premium body whey isolates, calcium, multivitamin powders', count: '25+ Items' },
    { name: 'Vitamins', desc: 'Vitamin D3 caps, Zinc health boosters, immunity chewable tabs', count: '30+ Types' },
    { name: 'Skin Care', desc: 'Moisturizers, dermatological SPF 50+ sunblocks, medicated soaps', count: '45+ Items' },
    { name: 'Baby Products', desc: 'Nourishing oils, diapers, mild baby lotions, infant cereals', count: '30+ Brands' },
    { name: 'Personal Hygiene', desc: 'Antiseptic solutions, clinical sanitizing sprays, N95 masks', count: '20+ Items' },
    { name: 'Orthopedic Support', desc: 'Adjustable back LS support belts, knee compression cuffs', count: '15+ Models' },
    { name: 'Diabetic Care', desc: 'Glucometer devices, test strips, lancing pens, sugar-free meals', count: '20+ Products' },
  ];

  const trustFactors = [
    { title: 'Experienced Pharmacy', text: 'Managed by licensed, safety-first pharmacologists.' },
    { title: 'Quality Medicines', text: 'Rigid batch controls and dry temperature-controlled shelves.' },
    { title: 'Quick Service', text: 'Minimizing queue waiting times with prompt dispatch systems.' },
    { title: 'Friendly Staff', text: 'Patient, understanding guidance regarding medicine schedules.' },
    { title: 'Reasonable Pricing', text: 'Maximum rebates on expensive long-term chronic prescriptions.' },
    { title: 'Convenient Location', text: 'Directly on Tekari Road near Delha Chauraha, Gaya.' }
  ];

  const workingProcess = [
    { step: '01', title: 'Visit Store / Website', desc: 'Walk into our Delha store or search medicines on this web page from your home.' },
    { step: '02', title: 'Share Prescription', desc: 'Submit your hospital prescription sheet physically or snap and upload on our WhatsApp form.' },
    { step: '03', title: 'Get Medicines', desc: 'Our licensed staff double-checks the dosage, packs items hygienically, and prepares your order.' },
    { step: '04', title: 'Easy Payment', desc: 'Pay instantly at our store counter or during delivery via GPay, PhonePe, Paytm, or Cash.' }
  ];

  const handleQuickCategoryQuery = (categoryName: string) => {
    // Generate a quick pre-populated WhatsApp message about a category
    const msg = `Hello Maa Vindhyavasini Medical Hall, I am looking for medicines/products in your *${categoryName}* category. Please guide me on stock availability.`;
    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/919122118837?text=${encoded}`, '_blank');
  };

  return (
    <div className="space-y-20 pb-16">
      
      {/* 1. Why Choose Us */}
      <section className="py-4 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <h2 className="text-2xl md:text-3xl font-sans font-extrabold text-slate-900 dark:text-white">
            Why Choose Maa Vindhyavasini
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-xs md:text-sm">
            We prioritize patient wellness and prescription purity over commercial retail margins.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyChooseUs.map((w, index) => (
            <div 
              key={index} 
              className="bg-white/40 dark:bg-slate-900/40 border border-white/20 dark:border-slate-800/60 p-6 rounded-2xl glass card-hover flex flex-col cursor-default"
            >
              <div className="mb-4 inline-flex p-3 rounded-xl bg-emerald-50/60 dark:bg-emerald-950/20 w-fit">
                {w.icon}
              </div>
              <h4 className="font-bold text-slate-900 dark:text-white text-base mb-1.5">{w.title}</h4>
              <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed">{w.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 2. Featured Categories Directory */}
      <section className="bg-slate-50 dark:bg-slate-900/30 border-y border-gray-150 dark:border-slate-800 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <h2 className="text-2xl md:text-3xl font-sans font-extrabold text-slate-900 dark:text-white">
              Featured Categories
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-xs md:text-sm">
              We stock authentic product lines to support your family daily wellness needs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredCategories.map((c, idx) => (
              <div 
                key={idx}
                onClick={() => handleQuickCategoryQuery(c.name)}
                className="group cursor-pointer bg-white/40 dark:bg-slate-900/40 border border-white/20 dark:border-slate-800/60 p-6 rounded-2xl glass card-hover flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 font-mono tracking-wider">
                      {c.count}
                    </span>
                    <span className="p-1 rounded-full bg-slate-50 dark:bg-slate-900 group-hover:bg-emerald-50 dark:group-hover:bg-emerald-950 text-slate-400 group-hover:text-emerald-500 transition-colors">
                      →
                    </span>
                  </div>
                  
                  <h4 className="font-bold text-slate-900 dark:text-white text-base group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {c.name}
                  </h4>
                  <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed">
                    {c.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Why Customers Trust Us */}
      <section className="py-4 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <h2 className="text-2xl md:text-3xl font-sans font-extrabold text-slate-900 dark:text-white">
            Why Customers Trust Us
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-xs md:text-sm">
            What sets our store apart as Gaya\'s preferred local pharmacy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trustFactors.map((t, idx) => (
            <div 
              key={idx}
              className="bg-white/40 dark:bg-slate-900/40 p-6 rounded-2xl border border-white/20 dark:border-slate-800/50 glass card-hover cursor-default"
            >
              <h4 className="font-bold text-slate-900 dark:text-white text-sm md:text-base flex items-center gap-2 mb-2">
                <span className="h-2 w-2 rounded-full medical-gradient"></span>
                <span>{t.title}</span>
              </h4>
              <p className="text-slate-500 dark:text-slate-400 text-xs md:text-sm leading-relaxed pl-4">
                {t.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Working Process */}
      <section className="bg-slate-950/85 dark:bg-slate-950/45 text-white rounded-3xl py-12 px-6 sm:px-10 lg:px-12 max-w-7xl mx-auto space-y-10 border border-white/10 dark:border-slate-800/40 glass relative overflow-hidden shadow-lg">
        <div className="absolute right-0 top-0 w-80 h-80 bg-slate-800/40 rounded-full opacity-30 blur-3xl"></div>
        
        <div className="text-center max-w-xl mx-auto space-y-2 relative z-10">
          <span className="text-[10px] font-mono tracking-widest text-emerald-400 uppercase font-bold">Seamless Healthcare Delivery</span>
          <h2 className="text-2xl md:text-3xl font-sans font-extrabold">
            Our Working Process
          </h2>
          <p className="text-slate-400 text-xs">
            Simple steps to get your medications verified, prepared, and dispatched in Gaya.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
          {workingProcess.map((step, idx) => (
            <div key={idx} className="space-y-4 text-center md:text-left relative">
              <div className="flex flex-col md:flex-row items-center gap-3">
                <span className="font-mono text-3xl font-extrabold text-emerald-500 leading-none">
                  {step.step}
                </span>
                <span className="hidden md:block h-0.5 bg-slate-800 flex-1"></span>
              </div>
              <h4 className="font-bold text-white text-base leading-snug">{step.title}</h4>
              <p className="text-slate-400 text-xs leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Contact CTA Section */}
      <section className="py-4 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto text-center space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl md:text-4xl font-sans font-extrabold text-slate-900 dark:text-white">
            Need Medicines?
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm max-w-lg mx-auto">
            Get your medications immediately. Call us directly or place a home delivery order on WhatsApp.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="tel:09122118837"
            className="flex items-center justify-center gap-2 bg-slate-900/10 dark:bg-slate-800/15 border border-white/20 dark:border-slate-800 glass text-slate-900 dark:text-slate-100 px-6 py-3.5 rounded-xl font-bold text-sm shadow-sm hover:scale-[1.01] active:scale-100 transition-all"
          >
            <Phone className="w-4.5 h-4.5 text-emerald-500" />
            <span>Call: 09122118837</span>
          </a>

          <button
            onClick={() => {
              setActiveTab('whatsapp-order');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center justify-center gap-2 medical-gradient text-white px-6 py-3.5 rounded-xl font-bold text-sm shadow-md hover:scale-[1.01] active:scale-100 transition-all cursor-pointer"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.45L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.97C16.528 2.016 14.069.99 11.45.99c-5.438 0-9.863 4.373-9.868 9.8a9.66 9.66 0 001.523 5.176l-.991 3.616 3.784-.978-.152-.25zM17.18 13.9c-.29-.145-1.716-.848-1.982-.945-.266-.096-.46-.144-.653.146-.193.289-.747.945-.916 1.137-.168.193-.337.217-.627.072-1.29-.646-2.144-1.144-2.993-2.6-.22-.379.22-.35.63-1.173.067-.145.033-.271-.017-.373-.05-.101-.46-1.109-.63-1.52-.166-.402-.349-.348-.48-.348-.125-.002-.27-.002-.413-.002s-.377.053-.574.265c-.198.212-.754.737-.754 1.798 0 1.06.772 2.083.88 2.228.107.145 1.518 2.318 3.678 3.25.513.22 1.144.354 1.536.478.514.161.981.139 1.35.084.412-.061 1.717-.702 1.958-1.382.242-.68.242-1.263.17-1.383-.073-.12-.266-.192-.556-.338z" />
            </svg>
            <span>Order medicines on WhatsApp</span>
          </button>
        </div>
      </section>

    </div>
  );
}
