/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { FileText, Pill, Sparkles, Baby, Activity, Scissors, ShieldAlert, HeartPulse, CheckCircle, HelpCircle, Phone } from 'lucide-react';
import { SERVICES } from '../data/mockData';

// Dynamic Lucide Icon Mapper
const getIcon = (name: string) => {
  switch (name) {
    case 'FileText': return <FileText className="w-6 h-6" />;
    case 'Pill': return <Pill className="w-6 h-6" />;
    case 'Sparkles': return <Sparkles className="w-6 h-6" />;
    case 'Baby': return <Baby className="w-6 h-6" />;
    case 'Activity': return <Activity className="w-6 h-6" />;
    case 'Scissors': return <Scissors className="w-6 h-6" />;
    case 'ShieldAlert': return <ShieldAlert className="w-6 h-6" />;
    case 'HeartPulse': return <HeartPulse className="w-6 h-6" />;
    default: return <CheckCircle className="w-6 h-6" />;
  }
};

export default function ServicesView() {
  const handleServiceInquiry = (serviceTitle: string) => {
    const formattedMessage = `Hello Maa Vindhyavasini Medical Hall, I would like to inquire about your services regarding: *${serviceTitle}*. Please guide me on stock availability and process.`;
    const encodedText = encodeURIComponent(formattedMessage);
    window.open(`https://wa.me/919122118837?text=${encodedText}`, '_blank');
  };

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16 animate-fade-in transition-colors duration-300">
      
      {/* Services Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider">
          <Activity className="w-3.5 h-3.5" />
          <span>Professional Pharmacy Solutions</span>
        </div>
        <h1 className="text-3xl md:text-5xl font-sans font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
          Comprehensive <span className="text-emerald-600 dark:text-emerald-400">Healthcare Offerings</span>
        </h1>
        <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
          At Maa Vindhyavasini Medical Hall, we stock and source healthcare items with clinical precision. Browse our dedicated services below.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SERVICES.map((s) => (
          <div 
            key={s.id}
            className="flex flex-col justify-between bg-white/40 dark:bg-slate-900/40 p-8 rounded-2xl border border-white/20 dark:border-slate-800 glass card-hover cursor-default"
          >
            <div className="space-y-5">
              {/* Icon Frame */}
              <div className="inline-flex p-3.5 bg-emerald-50/60 dark:bg-emerald-950/20 text-emerald-600 dark:text-emerald-400 rounded-xl border border-emerald-100/40 dark:border-emerald-900/30 w-fit">
                {getIcon(s.iconName)}
              </div>
              
              <div className="space-y-2">
                <h3 className="text-xl font-sans font-bold text-slate-900 dark:text-white">
                  {s.title}
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-xs md:text-sm leading-relaxed">
                  {s.description}
                </p>
              </div>

              {/* Sub-features Checklist */}
              <div className="pt-3 border-t border-gray-150/40 dark:border-gray-700/50 space-y-2">
                <h5 className="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Features & Guarantees</h5>
                <ul className="grid grid-cols-1 gap-1.5">
                  {s.features.map((feat, index) => (
                    <li key={index} className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full medical-gradient"></span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Quick Inquiry Call to Action */}
            <div className="pt-6 mt-6 border-t border-gray-150/40 dark:border-gray-700/50">
              <button
                onClick={() => handleServiceInquiry(s.title)}
                className="w-full py-2.5 rounded-xl bg-slate-900/5 hover:bg-emerald-50/60 dark:bg-slate-800/25 dark:hover:bg-emerald-950/20 text-slate-700 hover:text-emerald-600 dark:text-slate-300 dark:hover:text-emerald-400 border border-white/20 dark:border-slate-850 glass text-xs font-bold transition-all duration-200 cursor-pointer flex justify-center items-center gap-1.5"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.45L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.97C16.528 2.016 14.069.99 11.45.99c-5.438 0-9.863 4.373-9.868 9.8a9.66 9.66 0 001.523 5.176l-.991 3.616 3.784-.978-.152-.25zM17.18 13.9c-.29-.145-1.716-.848-1.982-.945-.266-.096-.46-.144-.653.146-.193.289-.747.945-.916 1.137-.168.193-.337.217-.627.072-1.29-.646-2.144-1.144-2.993-2.6-.22-.379.22-.35.63-1.173.067-.145.033-.271-.017-.373-.05-.101-.46-1.109-.63-1.52-.166-.402-.349-.348-.48-.348-.125-.002-.27-.002-.413-.002s-.377.053-.574.265c-.198.212-.754.737-.754 1.798 0 1.06.772 2.083.88 2.228.107.145 1.518 2.318 3.678 3.25.513.22 1.144.354 1.536.478.514.161.981.139 1.35.084.412-.061 1.717-.702 1.958-1.382.242-.68.242-1.263.17-1.383-.073-.12-.266-.192-.556-.338z" />
                </svg>
                <span>WhatsApp Inquiry</span>
              </button>
            </div>

          </div>
        ))}
      </div>

      {/* Emergency Call-Out */}
      <div className="bg-slate-950/85 dark:bg-slate-950/45 text-white rounded-3xl p-8 md:p-12 border border-white/10 dark:border-slate-800/40 glass relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
        <div className="absolute right-0 bottom-0 w-80 h-80 bg-slate-800/40 rounded-full opacity-30 blur-3xl"></div>
        
        <div className="space-y-4 max-w-xl relative z-10 text-center md:text-left">
          <span className="text-[10px] uppercase font-mono tracking-widest bg-emerald-600/30 border border-emerald-500/30 px-3 py-1 rounded-full text-emerald-400">
            Critical Healthcare Dispatch
          </span>
          <h3 className="text-2xl md:text-3xl font-sans font-bold leading-tight">
            Can't find a specialized medicine in Gaya?
          </h3>
          <p className="text-xs md:text-sm text-slate-400">
            Tell us which brand/molecule you are searching for. We coordinate with major distributors in Patna/Gaya to arrange rare chemotherapy, neurological, or pediatric formulations on a special demand timeline.
          </p>
        </div>

        <div className="relative z-10 flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
          <a
            href="tel:09122118837"
            className="flex items-center justify-center gap-2 medical-gradient text-white py-3.5 px-6 rounded-xl font-bold text-sm shadow-md hover:scale-[1.02] active:scale-100 transition-all"
          >
            <Phone className="w-4.5 h-4.5" />
            <span>Call Store Direct</span>
          </a>
          <a
            href="https://wa.me/919122118837"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-slate-200 py-3.5 px-6 rounded-xl border border-white/10 glass font-bold text-sm hover:scale-[1.02] active:scale-100 transition-all"
          >
            <HelpCircle className="w-4.5 h-4.5 text-emerald-400" />
            <span>Special Demand Booking</span>
          </a>
        </div>
      </div>

    </div>
  );
}
