/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ShieldCheck, Heart, Users, Award, Eye, Rocket, CheckCircle } from 'lucide-react';

export default function AboutView() {
  const values = [
    {
      icon: <ShieldCheck className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />,
      title: '100% Genuine Medicines',
      desc: 'We strictly audit our inventory batch by batch. Zero-tolerance policies for sub-standard or counterfeit medicines.'
    },
    {
      icon: <Heart className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />,
      title: 'Patient-First Ethics',
      desc: 'Our customer relationship is built on medical integrity. We explain dosages patiently and verify prescriptions meticulously.'
    },
    {
      icon: <Users className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />,
      title: 'Local Gaya Loyalty',
      desc: 'Deeply committed to the families of Delha, Gaya, Tekari Road, and Kharkhura with reliable emergency support.'
    },
    {
      icon: <Award className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />,
      title: 'Reasonable & Honest Pricing',
      desc: 'We pass maximum commercial margins down to our customers, ensuring expensive chronic care remains highly affordable.'
    }
  ];

  const timelineSteps = [
    {
      year: '2016',
      title: 'Humble Foundations',
      desc: 'Opened a small medicine counter near Tekari Road to supply essential primary medicines to local Delha residents.'
    },
    {
      year: '2019',
      title: 'Inventory Expansion',
      desc: 'Broadened stock lines to introduce specialized orthopedic supports, surgical consumables, and advanced diagnostics like glucometers.'
    },
    {
      year: '2022',
      title: 'Cold-Chain Integration',
      desc: 'Installed dedicated advanced medical refrigerators to store high-efficacy vaccines, insulins, and critical specialty syrups safely.'
    },
    {
      year: '2026',
      title: 'Going Digital-First',
      desc: 'Introduced direct web searching and seamless WhatsApp automated order placement to deliver medicines at home nearby.'
    }
  ];

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16 animate-fade-in transition-colors duration-300">
      
      {/* Intro Hero Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider">
          <Award className="w-3.5 h-3.5" />
          <span>Our Business Story</span>
        </div>
        <h1 className="text-3xl md:text-5xl font-sans font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
          Serving Gaya with <span className="text-emerald-600 dark:text-emerald-400">Trust & Transparency</span>
        </h1>
        <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
          For years, Maa Vindhyavasini Medical Hall has stood as a beacon of health, quality medicines, and warm community service in Gaya, Bihar.
        </p>
      </div>

      {/* Story & Message from Owner */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
        {/* Story */}
        <div className="lg:col-span-7 bg-white/40 dark:bg-slate-900/40 p-8 rounded-2xl border border-white/20 dark:border-slate-800 glass flex flex-col justify-between">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <span className="w-1.5 h-6 bg-emerald-500 rounded-full"></span>
              The Pillar of Local Healthcare
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              At Maa Vindhyavasini Medical Hall, we believe that health is not a business, but a sacred human priority. Nestled in the heart of Delha, Gaya (near Tekari Road), our store was founded with a straightforward promise: to make sure no local family has to search far and wide or pay exorbitant prices for authentic, life-saving medicines.
            </p>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              We work tirelessly to coordinate with certified distributors to maintain stock consistency. From pediatric baby drops to critical insulin vials and complex orthopedic support belts, our inventory is curated keeping your daily and emergency requirements in mind. Our licensed pharmacist is always on standby to guide you with clear directions, precautions, and authentic guidelines.
            </p>
          </div>
          <div className="mt-6 p-4 rounded-xl bg-emerald-50/50 dark:bg-emerald-950/10 border border-emerald-100 dark:border-emerald-900/30">
            <h4 className="text-emerald-800 dark:text-emerald-300 font-bold text-sm">Nearby Areas We Support Daily:</h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Delha Chauraha, Chotki Kharkhura, Tekari Road, Delha Thana Area, and Gaya Bypass Road localities.
            </p>
          </div>
        </div>

        {/* Message from Owner */}
        <div className="lg:col-span-5 bg-emerald-950/95 dark:bg-emerald-950/45 text-white p-8 rounded-2xl border border-white/10 dark:border-emerald-900/30 glass flex flex-col justify-between relative overflow-hidden shadow-lg">
          {/* Subtle graphic accent */}
          <div className="absolute -right-16 -bottom-16 w-48 h-48 bg-emerald-800/40 rounded-full opacity-30 blur-2xl"></div>
          
          <div className="space-y-6 relative z-10">
            <svg className="w-10 h-10 text-emerald-300 opacity-60" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <p className="italic text-emerald-100 text-sm leading-relaxed">
              "We understand the immense trust patients place in us when they bring in their family prescriptions. A small mistake in dispensing can impact a life. That is why we personally double-check every dosage, verify expiration dates, and prioritize counseling over sales. Our online presence via WhatsApp is built to save you time and fatigue in stressful moments."
            </p>
          </div>
          
          <div className="mt-8 relative z-10 flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-emerald-800/80 border border-emerald-700 flex items-center justify-center font-bold text-lg text-emerald-200">
              M
            </div>
            <div>
              <h4 className="font-bold text-sm text-white">Mukesh Kumar</h4>
              <p className="text-[11px] text-emerald-300">Proprietor & Chief Pharmacist</p>
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white/40 dark:bg-slate-900/40 p-8 rounded-2xl border border-white/20 dark:border-slate-800 glass card-hover flex items-start gap-4">
          <div className="p-3 medical-gradient rounded-xl text-white">
            <Rocket className="w-6 h-6" />
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Our Mission</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              To supply and dispense only high-efficacy, genuine medicines and high-standard medical devices, maintaining clinical storage standards, and providing empathetic patient guidance to improve life quality in Gaya.
            </p>
            <ul className="text-xs text-slate-500 dark:text-slate-400 space-y-1 pt-2">
              <li className="flex items-center gap-1.5"><CheckCircle className="w-3.5 h-3.5 text-emerald-500" /> Authorized Distributor Sourcing</li>
              <li className="flex items-center gap-1.5"><CheckCircle className="w-3.5 h-3.5 text-emerald-500" /> Accurate Dosage Education</li>
            </ul>
          </div>
        </div>

        <div className="bg-white/40 dark:bg-slate-900/40 p-8 rounded-2xl border border-white/20 dark:border-slate-800 glass card-hover flex items-start gap-4">
          <div className="p-3 medical-gradient rounded-xl text-white">
            <Eye className="w-6 h-6" />
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Our Vision</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              To bridge the gap between complex therapeutic prescriptions and local families. We envision a healthy, disease-aware community in Gaya that enjoys seamless access to healthcare products at standard honest pricing.
            </p>
            <ul className="text-xs text-slate-500 dark:text-slate-400 space-y-1 pt-2">
              <li className="flex items-center gap-1.5"><CheckCircle className="w-3.5 h-3.5 text-emerald-500" /> Digital WhatsApp Delivery Networks</li>
              <li className="flex items-center gap-1.5"><CheckCircle className="w-3.5 h-3.5 text-emerald-500" /> Diagnostic Empowerment at Home</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="space-y-8">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">Our Core Pharmacy Values</h2>
          <p className="text-slate-500 dark:text-slate-400 text-xs md:text-sm">
            These values govern every medicine we pack and every consultation we provide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <div 
              key={i} 
              className="bg-white/40 dark:bg-slate-900/40 p-6 rounded-2xl border border-white/20 dark:border-slate-800 glass card-hover flex flex-col justify-between cursor-default"
            >
              <div className="mb-4">{v.icon}</div>
              <h4 className="font-bold text-base text-slate-900 dark:text-white mb-2">{v.title}</h4>
              <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Historic Timeline */}
      <div className="space-y-8">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">Our Journey</h2>
          <p className="text-slate-500 dark:text-slate-400 text-xs md:text-sm">
            Milestones of growth, dedicated to enhancing Gaya\'s pharmaceutical access.
          </p>
        </div>

        <div className="relative border-l border-slate-200 dark:border-slate-800 max-w-3xl mx-auto pl-6 space-y-8">
          {timelineSteps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Timeline dot */}
              <div className="absolute -left-[31px] top-1.5 w-4.5 h-4.5 rounded-full bg-white dark:bg-slate-950 border-4 border-emerald-500 group-hover:bg-emerald-500 transition-colors duration-300"></div>
              
              <div className="space-y-1">
                <span className="font-mono text-emerald-600 dark:text-emerald-400 font-extrabold text-sm tracking-wider">
                  {step.year}
                </span>
                <h4 className="font-bold text-base text-slate-900 dark:text-white">
                  {step.title}
                </h4>
                <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed max-w-2xl">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
