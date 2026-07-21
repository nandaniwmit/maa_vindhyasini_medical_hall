/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Shield, EyeOff, FileText, AlertOctagon } from 'lucide-react';

interface LegalModalsProps {
  modalType: 'privacy' | 'terms' | 'disclaimer' | null;
  onClose: () => void;
}

export default function LegalModals({ modalType, onClose }: LegalModalsProps) {
  if (!modalType) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white dark:bg-slate-900 border border-gray-150 dark:border-gray-800 rounded-3xl p-6 md:p-8 max-w-xl w-full max-h-[80vh] overflow-y-auto shadow-2xl relative animate-fade-in text-slate-800 dark:text-slate-300">
        
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-gray-100 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors cursor-pointer"
        >
          ✕
        </button>

        {modalType === 'privacy' && (
          <div className="space-y-4">
            <div className="flex items-center gap-3 border-b border-gray-100 dark:border-gray-800 pb-3">
              <div className="p-2.5 bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400 rounded-xl">
                <Shield className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-slate-900 dark:text-white leading-none">Privacy Policy</h3>
                <p className="text-[10px] text-slate-400 mt-1">Prescription Safety Protocols</p>
              </div>
            </div>

            <div className="text-xs md:text-sm leading-relaxed space-y-3 max-h-[450px] overflow-y-auto pr-1">
              <p className="font-bold text-slate-900 dark:text-white">1. Secure Prescription Storage</p>
              <p>
                At Maa Vindhyavasini Medical Hall, we prioritize the confidentiality of your health data. Any prescription files, images, or doctors slips uploaded through our web portal are processed purely to verify and compile your WhatsApp delivery draft. We never index, cache, sell, or publicize patient diagnosis details.
              </p>
              <p className="font-bold text-slate-900 dark:text-white">2. Personal Contact Information</p>
              <p>
                Your phone numbers, names, and home addresses are used exclusively for package routing and billing purposes. We maintain rigorous secure internal data structures.
              </p>
              <p className="font-bold text-slate-900 dark:text-white">3. Third-Party Analytics</p>
              <p>
                This website does not share patient lists with pharmaceutical companies or advertising agencies. All communication is directly encrypted between you and our licensed pharmacist.
              </p>
            </div>
          </div>
        )}

        {modalType === 'terms' && (
          <div className="space-y-4">
            <div className="flex items-center gap-3 border-b border-gray-100 dark:border-gray-800 pb-3">
              <div className="p-2.5 bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400 rounded-xl">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-slate-900 dark:text-white leading-none">Terms & Conditions</h3>
                <p className="text-[10px] text-slate-400 mt-1">Pharmacy Delivery & Sales Rules</p>
              </div>
            </div>

            <div className="text-xs md:text-sm leading-relaxed space-y-3 max-h-[450px] overflow-y-auto pr-1">
              <p className="font-bold text-slate-900 dark:text-white">1. Prescription Mandate</p>
              <p>
                Scheduled medications, psychiatric drugs, chemotherapy vials, and antibiotics cannot be dispensed without a valid prescription from a registered medical practitioner in India. Our pharmacist will verify the prescription authenticity prior to packaging.
              </p>
              <p className="font-bold text-slate-900 dark:text-white">2. Delivery Logistics</p>
              <p>
                Nearby home deliveries are executed around Delha, Gaya within 5-6km. In case of rain, traffic, or product out-of-stock, delivery timelines can shift, and we will update you on WhatsApp.
              </p>
              <p className="font-bold text-slate-900 dark:text-white">3. Return Policy</p>
              <p>
                Sealed, undamaged tablets strips can be returned with original billing within 7 days. Cold-chain items (vials/insulins) are strictly non-returnable to maintain therapeutic safety.
              </p>
            </div>
          </div>
        )}

        {modalType === 'disclaimer' && (
          <div className="space-y-4">
            <div className="flex items-center gap-3 border-b border-gray-100 dark:border-gray-800 pb-3">
              <div className="p-2.5 bg-red-50 dark:bg-red-950/30 text-red-600 dark:text-red-400 rounded-xl">
                <AlertOctagon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-slate-900 dark:text-white leading-none">Medical Disclaimer</h3>
                <p className="text-[10px] text-slate-400 mt-1">General Safety Information</p>
              </div>
            </div>

            <div className="text-xs md:text-sm leading-relaxed space-y-3 max-h-[450px] overflow-y-auto pr-1">
              <p className="font-bold text-slate-900 dark:text-white">1. Not Medical Advice</p>
              <p>
                The digital catalog, health awareness journals, and general daily tip previews displayed on Maa Vindhyavasini Medical Hall website are published solely for general informational and community awareness purposes.
              </p>
              <p className="font-bold text-slate-900 dark:text-white">2. Consult Professional Doctor</p>
              <p>
                They do NOT substitute professional medical consultations, disease diagnosis, treatment recommendations, or direct physician guidelines. Always consult your doctor before beginning any drug program, protein diet, or supplement course.
              </p>
              <p className="font-bold text-slate-900 dark:text-white">3. Emergency Situations</p>
              <p>
                This website is not designed to support real-time triage or emergency medical rescues. In critical health conditions or poisoning emergencies, please immediately visit nearest Gaya government or private hospitals.
              </p>
            </div>
          </div>
        )}

        {/* Action Button */}
        <div className="pt-4 border-t border-gray-100 dark:border-gray-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 bg-slate-900 hover:bg-emerald-600 text-white font-bold text-xs rounded-xl transition-all cursor-pointer"
          >
            I Understand
          </button>
        </div>

      </div>
    </div>
  );
}
