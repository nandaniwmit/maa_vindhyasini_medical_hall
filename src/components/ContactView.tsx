/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, AlertTriangle } from 'lucide-react';

export default function ContactView() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    interest: 'Medicines Inquiry',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    // Form Validations
    if (!formData.name.trim()) {
      setErrorMessage('Please enter your name.');
      return;
    }
    if (!formData.phone.trim() || formData.phone.length < 10) {
      setErrorMessage('Please enter a valid 10-digit mobile number.');
      return;
    }
    if (!formData.message.trim()) {
      setErrorMessage('Please enter your query message.');
      return;
    }

    setLoading(true);

    // Simulate sending form to server
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({
        name: '',
        phone: '',
        email: '',
        interest: 'Medicines Inquiry',
        message: ''
      });
    }, 1500);
  };

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12 animate-fade-in transition-colors duration-300">
      
      {/* Contact Title */}
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider">
          <Mail className="w-3.5 h-3.5" />
          <span>Get in Touch</span>
        </div>
        <h1 className="text-3xl md:text-5xl font-sans font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
          Contact <span className="text-emerald-600 dark:text-emerald-400">Our Pharmacy</span>
        </h1>
        <p className="text-sm md:text-base text-slate-500 dark:text-slate-400 leading-relaxed">
          Have queries about medicine availability, orthopedic support sizes, or special vaccine storage? Reach out via form, call, or visit.
        </p>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Side: Store Coordinates */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-slate-950/85 dark:bg-slate-950/45 text-white rounded-2xl p-8 space-y-6 shadow-md border border-white/10 dark:border-slate-800/40 glass relative overflow-hidden">
            <div className="absolute -right-24 -bottom-24 w-64 h-64 bg-slate-800/40 rounded-full opacity-30 blur-2xl"></div>
            
            <h3 className="text-xl font-bold relative z-10">Maa Vindhyavasini Medical Hall</h3>
            <p className="text-slate-300 text-xs md:text-sm leading-relaxed relative z-10">
              Licensed pharmacy supporting Gaya patients with highest clinical storage standards and verified genuine drugs.
            </p>

            <div className="space-y-4 pt-4 relative z-10">
              
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="p-2.5 bg-slate-800 rounded-xl text-emerald-400 border border-slate-700 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="text-sm">
                  <h5 className="font-bold text-slate-150 mb-0.5">Physical Location</h5>
                  <p className="text-slate-350">RX2W+5M8, Tekari Rd, Chotki, Kharkhura, Delha, Gaya, Bihar 823002</p>
                  <a 
                    href="https://maps.google.com/?q=Maa+Vindhyavasini+Medical+Hall+Gaya+Bihar" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="text-xs text-emerald-400 hover:underline mt-1.5 inline-block font-semibold"
                  >
                    Get Directions on Google Maps →
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="p-2.5 bg-slate-800 rounded-xl text-emerald-400 border border-slate-700 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="text-sm">
                  <h5 className="font-bold text-slate-150 mb-0.5">Telephone Inquiries</h5>
                  <p className="text-slate-350">
                    Mobile: <a href="tel:09122118837" className="hover:text-emerald-400 font-bold transition-colors">09122118837</a>
                  </p>
                  <p className="text-[11px] text-slate-500">Available during operating hours for urgent stock inquiries.</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="p-2.5 bg-slate-800 rounded-xl text-emerald-400 border border-slate-700 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="text-sm">
                  <h5 className="font-bold text-slate-150 mb-0.5">Email Support</h5>
                  <p className="text-slate-350">contact@mvmedicalhall.com</p>
                </div>
              </div>

            </div>
          </div>

          {/* Opening Hours Block */}
          <div className="bg-white/40 dark:bg-slate-900/40 border border-white/20 dark:border-slate-800 glass p-6 rounded-2xl shadow-xs space-y-4">
            <h4 className="font-bold text-slate-950 dark:text-white flex items-center gap-2">
              <Clock className="w-5 h-5 text-emerald-500" />
              <span>Store Availability Times</span>
            </h4>
            <div className="grid grid-cols-2 gap-3 text-xs md:text-sm">
              <div className="text-slate-500 dark:text-slate-400">Monday - Friday:</div>
              <div className="text-slate-900 dark:text-white font-bold text-right">08:30 AM - 10:00 PM</div>
              <div className="text-slate-500 dark:text-slate-400">Saturday:</div>
              <div className="text-slate-900 dark:text-white font-bold text-right">08:30 AM - 10:00 PM</div>
              <div className="text-slate-500 dark:text-slate-400">Sunday:</div>
              <div className="text-emerald-600 dark:text-emerald-400 font-bold text-right">08:30 AM - 10:00 PM</div>
            </div>
            <div className="text-[11px] text-slate-400 text-center border-t border-gray-50 dark:border-gray-700 pt-3">
              *We remain open on public holidays to support neighborhood emergencies.
            </div>
          </div>

        </div>

        {/* Right Side: Contact Inquiry Form */}
        <div className="lg:col-span-7 bg-white/40 dark:bg-slate-900/40 border border-white/20 dark:border-slate-800 glass rounded-2xl p-6 md:p-8 shadow-xs">
          
          {submitted ? (
            <div className="py-12 text-center space-y-5 animate-fade-in">
              <div className="inline-flex p-4 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 rounded-full">
                <CheckCircle className="w-16 h-16" />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Query Submitted Successfully!</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 max-w-md mx-auto">
                  Thank you for reaching out to Maa Vindhyavasini Medical Hall. Our pharmacist will review your requirement and call you back shortly.
                </p>
              </div>
              <button
                onClick={() => setSubmitted(false)}
                className="px-6 py-2.5 rounded-xl bg-emerald-600 dark:bg-emerald-500 text-white font-bold text-sm hover:bg-emerald-700 transition-colors cursor-pointer"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="space-y-5">
              <div className="space-y-1">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Quick Inquiry Form</h3>
                <p className="text-xs text-slate-400">
                  Please fill in correct details so we can trace your medications or prescription quickly.
                </p>
              </div>

              {errorMessage && (
                <div className="flex items-center gap-2 p-3 bg-red-50 dark:bg-red-950/20 text-red-700 dark:text-red-400 text-xs rounded-xl border border-red-100 dark:border-red-900/40 font-medium">
                  <AlertTriangle className="w-4 h-4 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Name */}
                <div className="space-y-1.5">
                  <label htmlFor="name-input" className="text-xs font-bold text-slate-700 dark:text-slate-300">Your Full Name <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    id="name-input"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white text-sm focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-all"
                  />
                </div>

                {/* Phone */}
                <div className="space-y-1.5">
                  <label htmlFor="phone-input" className="text-xs font-bold text-slate-700 dark:text-slate-300">Your Phone / Mobile <span className="text-red-500">*</span></label>
                  <input
                    type="tel"
                    id="phone-input"
                    name="phone"
                    placeholder="Enter 10-digit number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white text-sm focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Email */}
                <div className="space-y-1.5">
                  <label htmlFor="email-input" className="text-xs font-bold text-slate-700 dark:text-slate-300">Email Address (Optional)</label>
                  <input
                    type="email"
                    id="email-input"
                    name="email"
                    placeholder="Enter email address"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white text-sm focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-all"
                  />
                </div>

                {/* Interest Dropdown */}
                <div className="space-y-1.5">
                  <label htmlFor="interest-select" className="text-xs font-bold text-slate-700 dark:text-slate-300">Topic of Interest</label>
                  <select
                    id="interest-select"
                    name="interest"
                    value={formData.interest}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white text-sm focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-all"
                  >
                    <option value="Medicines Inquiry">Medicines Stock Inquiry</option>
                    <option value="Diabetic Care Device">Diabetic Care & Strips</option>
                    <option value="Orthopedic Support">Orthopedic Belts/Braces</option>
                    <option value="Baby Care Products">Baby Products Stock</option>
                    <option value="Special Import Request">Special Medicine Request</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label htmlFor="message-input" className="text-xs font-bold text-slate-700 dark:text-slate-300">Your Query Message <span className="text-red-500">*</span></label>
                <textarea
                  id="message-input"
                  name="message"
                  rows={4}
                  placeholder="Mention medicine name, dosage, strip quantity required..."
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white text-sm focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-all resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 medical-gradient text-white font-bold text-sm rounded-xl transition-all shadow-md hover:scale-[1.01] active:scale-100 flex justify-center items-center gap-2 cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Submitting Message...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Submit Query Request</span>
                  </>
                )}
              </button>
            </form>
          )}

        </div>
      </div>

      {/* Embedded Google Map Section */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <span className="w-1.5 h-6 bg-emerald-500 rounded-full"></span>
          Our Store Map Location
        </h3>
        
        {/* Responsive map canvas */}
        <div className="w-full h-[400px] rounded-3xl overflow-hidden border border-white/20 dark:border-slate-800 glass shadow-xs bg-slate-100 dark:bg-slate-950/20">
          <iframe
            title="Maa Vindhyavasini Medical Hall Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115622.78496464531!2d84.92873136224354!3d24.81050212879989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f32bf48beea8ad%3A0xc6cf3fe7d37ef9ee!2sDelha%2C%20Gaya%2C%20Bihar%20823002!5e0!3m2!1sen!2sin!4v1720430000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

    </div>
  );
}
