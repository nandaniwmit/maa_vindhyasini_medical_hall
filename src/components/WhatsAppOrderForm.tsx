/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef, useEffect } from 'react';
import { ShoppingCart, Upload, Trash2, Calendar, Phone, Plus, Minus, FileText, CheckCircle2, AlertCircle } from 'lucide-react';
import { Medicine, CartItem } from '../types';
import { MEDICINES } from '../data/mockData';

interface WhatsAppOrderFormProps {
  cart: CartItem[];
  setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
}

export default function WhatsAppOrderForm({ cart, setCart }: WhatsAppOrderFormProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [prescriptionAttached, setPrescriptionAttached] = useState<boolean>(false);
  const [prescriptionFile, setPrescriptionFile] = useState<{ name: string; size: string; preview: string } | null>(null);
  const [message, setMessage] = useState('');
  const [deliveryTime, setDeliveryTime] = useState('09:00 AM - 01:00 PM (Morning)');
  
  // Custom manual medicine add
  const [customMedName, setCustomMedName] = useState('');
  const [customMedNotes, setCustomMedNotes] = useState('');

  // Drag and drop states
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [formError, setFormError] = useState('');

  // Update item quantity
  const updateQuantity = (medId: string, delta: number) => {
    setCart((prevCart) =>
      prevCart
        .map((item) => {
          if (item.medicine.id === medId) {
            const newQty = item.quantity + delta;
            return { ...item, quantity: Math.max(1, newQty) };
          }
          return item;
        })
    );
  };

  // Remove item from cart
  const removeItem = (medId: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.medicine.id !== medId));
  };

  // Handle Prescription File Selection
  const processPrescriptionFile = (file: File) => {
    if (!file) return;
    
    // Create local object URL for instant high-fidelity rendering if it is an image
    let previewUrl = '';
    if (file.type.startsWith('image/')) {
      previewUrl = URL.createObjectURL(file);
    }

    setPrescriptionFile({
      name: file.name,
      size: (file.size / 1024).toFixed(1) + ' KB',
      preview: previewUrl
    });
    setPrescriptionAttached(true);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files[0]) {
      processPrescriptionFile(files[0]);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const files = e.dataTransfer.files;
    if (files && files[0]) {
      processPrescriptionFile(files[0]);
    }
  };

  const triggerFileSelect = () => {
    fileInputRef.current?.click();
  };

  const clearFile = () => {
    setPrescriptionFile(null);
    setPrescriptionAttached(false);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  // Add custom manual medicine to cart
  const handleAddCustomMedicine = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customMedName.trim()) return;

    const pseudoMedicine: Medicine = {
      id: `custom-${Date.now()}`,
      name: customMedName,
      category: 'Special Request',
      form: 'Other',
      price: 0, // Inquired
      description: customMedNotes || 'Custom required item details',
      inStock: true
    };

    setCart((prev) => [...prev, { medicine: pseudoMedicine, quantity: 1, instructions: customMedNotes }]);
    setCustomMedName('');
    setCustomMedNotes('');
  };

  // Formatting final WhatsApp message URL
  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');

    if (!name.trim()) {
      setFormError('Please enter your full name.');
      return;
    }
    if (!phone.trim() || phone.length < 10) {
      setFormError('Please enter a valid 10-digit mobile number.');
      return;
    }
    if (!address.trim()) {
      setFormError('Please provide your delivery/address details.');
      return;
    }
    if (cart.length === 0 && !prescriptionAttached) {
      setFormError('Please either select some medicines or upload a prescription slip.');
      return;
    }

    // Build Formatted Message
    let msg = `Hello Maa Vindhyavasini Medical Hall,\n\n`;
    msg += `I would like to place a medicine order.\n\n`;
    msg += `*--- CUSTOMER INFO ---*\n`;
    msg += `*Name:* ${name.trim()}\n`;
    msg += `*Phone:* ${phone.trim()}\n`;
    if (email.trim()) msg += `*Email:* ${email.trim()}\n`;
    msg += `*Delivery Address:* ${address.trim()}\n\n`;

    msg += `*--- MEDICAL REQUIREMENTS ---*\n`;
    if (cart.length > 0) {
      cart.forEach((item, idx) => {
        msg += `${idx + 1}. *${item.medicine.name}* (Qty: ${item.quantity})`;
        if (item.medicine.packageSize) msg += ` - [${item.medicine.packageSize}]`;
        if (item.instructions) msg += `\n   Note: ${item.instructions}`;
        msg += `\n`;
      });
    } else {
      msg += `Medicines: (See attached prescription)\n`;
    }
    msg += `\n`;

    msg += `*--- DISPATCH & VERIFICATION ---*\n`;
    msg += `*Prescription Attached:* ${prescriptionAttached ? '✅ Yes' : '❌ No (Only OTC items required)'}\n`;
    if (prescriptionFile) msg += `*File Name:* ${prescriptionFile.name}\n`;
    msg += `*Preferred Delivery Time:* ${deliveryTime}\n`;
    if (message.trim()) msg += `*Additional Notes:* ${message.trim()}\n\n`;

    msg += `Please confirm the order, total cost, and estimated delivery time. Thank you!`;

    const encodedText = encodeURIComponent(msg);
    const whatsappUrl = `https://wa.me/919122118837?text=${encodedText}`;

    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto animate-fade-in transition-colors duration-300">
      
      {/* Title */}
      <div className="text-center max-w-2xl mx-auto space-y-4 mb-10">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider">
          <ShoppingCart className="w-3.5 h-3.5" />
          <span>Automated Ordering System</span>
        </div>
        <h1 className="text-3xl md:text-5xl font-sans font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
          WhatsApp <span className="text-emerald-600 dark:text-emerald-400">Order Form</span>
        </h1>
        <p className="text-sm md:text-base text-slate-500 dark:text-slate-400 leading-relaxed">
          Select medicines or upload your prescription below. We will bundle your requirements and transfer you instantly to WhatsApp to coordinate secure home delivery in Gaya.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Hand: Order Contents Constructor */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Section: Selected Medicine List */}
          <div className="bg-white/40 dark:bg-slate-900/40 border border-white/20 dark:border-slate-800 glass p-6 rounded-2xl shadow-xs space-y-4">
            <div className="flex justify-between items-center pb-3 border-b border-gray-50 dark:border-gray-700">
              <h4 className="font-bold text-slate-900 dark:text-white text-base flex items-center gap-2">
                <span className="w-1.5 h-5 bg-emerald-500 rounded-full"></span>
                <span>My Selected Items</span>
              </h4>
              <span className="bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 text-xs font-bold px-2.5 py-1 rounded-full border border-emerald-100 dark:border-emerald-900">
                {cart.length} Items
              </span>
            </div>

            {cart.length === 0 ? (
              <div className="py-8 text-center text-slate-400 dark:text-slate-500 space-y-2">
                <ShoppingCart className="w-10 h-10 mx-auto opacity-40" />
                <p className="text-xs">No medicines selected yet.</p>
                <p className="text-[10px] text-slate-400 max-w-xs mx-auto">
                  You can search/add items from the home screen, or type custom requirements below, or upload a medical prescription file directly.
                </p>
              </div>
            ) : (
              <div className="divide-y divide-gray-50 dark:divide-gray-700/50 max-h-[350px] overflow-y-auto pr-1">
                {cart.map((item) => (
                  <div key={item.medicine.id} className="py-3 flex items-center justify-between gap-4">
                    <div className="space-y-1 min-w-0">
                      <h5 className="font-bold text-xs text-slate-800 dark:text-slate-100 truncate">
                        {item.medicine.name}
                      </h5>
                      <p className="text-[10px] text-slate-400 truncate">
                        {item.medicine.packageSize || 'Special Order Requirement'}
                      </p>
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                      {/* Qty selectors */}
                      <div className="flex items-center bg-slate-50 dark:bg-slate-900 rounded-lg p-1 border border-gray-150 dark:border-gray-800">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.medicine.id, -1)}
                          className="p-1 rounded-sm text-slate-500 hover:bg-white dark:hover:bg-slate-800 transition-colors"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="px-2.5 font-mono text-xs font-bold text-slate-800 dark:text-white">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.medicine.id, 1)}
                          className="p-1 rounded-sm text-slate-500 hover:bg-white dark:hover:bg-slate-800 transition-colors"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <button
                        type="button"
                        onClick={() => removeItem(item.medicine.id)}
                        className="p-1.5 rounded-lg text-slate-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-950/20 transition-colors cursor-pointer"
                        title="Remove Item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Section: Add Custom Medicine */}
          <div className="bg-white/40 dark:bg-slate-900/40 border border-white/20 dark:border-slate-800 glass p-6 rounded-2xl shadow-xs">
            <h4 className="font-bold text-slate-900 dark:text-white text-base mb-4 flex items-center gap-2">
              <span className="w-1.5 h-5 bg-emerald-500 rounded-full"></span>
              <span>Add Custom Medicine</span>
            </h4>
            
            <form onSubmit={handleAddCustomMedicine} className="space-y-3">
              <div className="space-y-1">
                <input
                  type="text"
                  placeholder="Enter medicine name (e.g., Crocin, Lipitor)"
                  value={customMedName}
                  onChange={(e) => setCustomMedName(e.target.value)}
                  className="w-full px-4 py-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white text-xs md:text-sm focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-all"
                />
              </div>

              <div className="space-y-1">
                <input
                  type="text"
                  placeholder="E.g., 2 strips, morning dose notes (Optional)"
                  value={customMedNotes}
                  onChange={(e) => setCustomMedNotes(e.target.value)}
                  className="w-full px-4 py-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white text-xs focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-all"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2.5 medical-gradient text-white font-bold text-xs rounded-xl hover:scale-[1.01] transition-all flex justify-center items-center gap-1.5 cursor-pointer"
              >
                <Plus className="w-4 h-4" />
                <span>Add to My Order List</span>
              </button>
            </form>
          </div>

          {/* Special Delivery Info Banner */}
          <div className="bg-emerald-50/50 dark:bg-emerald-950/10 border border-emerald-100 dark:border-emerald-900/40 rounded-2xl p-4 flex gap-3 text-xs">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <h5 className="font-bold text-emerald-800 dark:text-emerald-300">Gaya Home Delivery Rules</h5>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
                We deliver locally within a 5-6km radius of Delha, Gaya. Deliveries are scheduled twice daily. Standard prescription verification occurs prior to dispatch.
              </p>
            </div>
          </div>

        </div>

        {/* Right Hand: Detailed Delivery / Upload Form */}
        <div className="lg:col-span-7 bg-white/40 dark:bg-slate-900/40 border border-white/20 dark:border-slate-800 glass rounded-2xl p-6 md:p-8 shadow-xs">
          
          <form onSubmit={handleSendWhatsApp} className="space-y-6">
            
            <div className="space-y-1">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Delivery Details & Prescription</h3>
              <p className="text-xs text-slate-400">
                Please compile your contact address and upload your prescription.
              </p>
            </div>

            {formError && (
              <div className="flex items-center gap-2.5 p-3 bg-red-50 dark:bg-red-950/20 text-red-700 dark:text-red-400 text-xs rounded-xl border border-red-100 dark:border-red-900/30 font-bold animate-pulse">
                <AlertCircle className="w-4.5 h-4.5 shrink-0" />
                <span>{formError}</span>
              </div>
            )}

            {/* Inputs: Name, Phone, Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label htmlFor="order-name-input" className="text-xs font-bold text-slate-700 dark:text-slate-300">Patient / Customer Name <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  id="order-name-input"
                  placeholder="Enter full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white text-sm focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-all"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="order-phone-input" className="text-xs font-bold text-slate-700 dark:text-slate-300">WhatsApp Mobile Number <span className="text-red-500">*</span></label>
                <input
                  type="tel"
                  id="order-phone-input"
                  placeholder="10-digit WhatsApp number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white text-sm focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label htmlFor="order-email-input" className="text-xs font-bold text-slate-700 dark:text-slate-300">Email Address (Optional)</label>
                <input
                  type="email"
                  id="order-email-input"
                  placeholder="Enter email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white text-sm focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-all"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="order-delivery-time" className="text-xs font-bold text-slate-700 dark:text-slate-300">Preferred Delivery Slot</label>
                <select
                  id="order-delivery-time"
                  value={deliveryTime}
                  onChange={(e) => setDeliveryTime(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white text-sm focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-all"
                >
                  <option value="09:00 AM - 01:00 PM (Morning)">09:00 AM - 01:00 PM (Morning Slot)</option>
                  <option value="02:00 PM - 05:00 PM (Afternoon)">02:00 PM - 05:00 PM (Afternoon Slot)</option>
                  <option value="06:00 PM - 09:30 PM (Evening)">06:00 PM - 09:30 PM (Evening Slot)</option>
                </select>
              </div>
            </div>

            {/* Input: Full Address */}
            <div className="space-y-1.5">
              <label htmlFor="order-address-input" className="text-xs font-bold text-slate-700 dark:text-slate-300">Gaya Delivery Address / Landmark <span className="text-red-500">*</span></label>
              <textarea
                id="order-address-input"
                rows={2}
                placeholder="E.g., House No 12, near Delha Chauraha, Delha, Gaya"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white text-sm focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-all resize-none"
              />
            </div>

            {/* Drag & Drop Prescription Section */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300 flex justify-between">
                <span>Upload Doctor Prescription Slip</span>
                <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold">*Required for Scheduled medications</span>
              </label>

              {prescriptionFile ? (
                <div className="border border-emerald-500/30 bg-emerald-50/15 dark:bg-emerald-950/20 p-4 rounded-2xl flex items-center justify-between gap-4 animate-fade-in">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="p-2.5 bg-emerald-500 text-white rounded-xl shrink-0">
                      <FileText className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <h5 className="font-bold text-xs text-slate-800 dark:text-white truncate">
                        {prescriptionFile.name}
                      </h5>
                      <p className="text-[10px] text-slate-400 font-mono">{prescriptionFile.size}</p>
                    </div>
                  </div>

                  {/* Render Thumbnail Preview if image URL exists */}
                  {prescriptionFile.preview && (
                    <div className="w-12 h-12 rounded-lg overflow-hidden border border-emerald-500/20 shrink-0 hidden sm:block">
                      <img src={prescriptionFile.preview} alt="Prescription preview" className="w-full h-full object-cover" />
                    </div>
                  )}

                  <button
                    type="button"
                    onClick={clearFile}
                    className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-950/20 rounded-full transition-colors cursor-pointer shrink-0"
                    title="Remove File"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              ) : (
                <div
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                  onClick={triggerFileSelect}
                  className={`border-2 border-dashed rounded-2xl p-6 text-center cursor-pointer transition-all duration-200 ${
                    isDragging
                      ? 'border-emerald-500 bg-emerald-50/20 dark:bg-emerald-950/20 scale-[0.99]'
                      : 'border-white/25 dark:border-slate-800 hover:border-emerald-500/50 bg-white/10 dark:bg-slate-900/10 hover:bg-white/20 dark:hover:bg-slate-900/20'
                  }`}
                >
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    accept="image/*,application/pdf"
                    className="hidden"
                  />
                  <Upload className="w-8 h-8 mx-auto text-slate-400 dark:text-slate-500 mb-2.5 animate-pulse" />
                  <p className="text-xs font-bold text-slate-700 dark:text-slate-300">
                    Drag & Drop prescription photo here, or <span className="text-emerald-600 dark:text-emerald-400 underline">Browse files</span>
                  </p>
                  <p className="text-[10px] text-slate-400 mt-1">
                    Supports JPG, PNG, or PDF files. Max size 5MB.
                  </p>
                </div>
              )}
            </div>

            {/* Input: Additional Directions */}
            <div className="space-y-1.5">
              <label htmlFor="order-msg-input" className="text-xs font-bold text-slate-700 dark:text-slate-300">Special Requests / Message (Optional)</label>
              <textarea
                id="order-msg-input"
                rows={2}
                placeholder="Mention sugar-free alternatives, brand substitutions, or secondary emergency contact numbers..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white text-sm focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-all resize-none"
              />
            </div>

            {/* Send via WhatsApp and Call Now */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <button
                type="submit"
                className="py-3.5 medical-gradient text-white font-bold text-sm rounded-xl transition-all shadow-md hover:scale-[1.01] active:scale-100 flex justify-center items-center gap-2 cursor-pointer"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.45L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.97C16.528 2.016 14.069.99 11.45.99c-5.438 0-9.863 4.373-9.868 9.8a9.66 9.66 0 001.523 5.176l-.991 3.616 3.784-.978-.152-.25zM17.18 13.9c-.29-.145-1.716-.848-1.982-.945-.266-.096-.46-.144-.653.146-.193.289-.747.945-.916 1.137-.168.193-.337.217-.627.072-1.29-.646-2.144-1.144-2.993-2.6-.22-.379.22-.35.63-1.173.067-.145.033-.271-.017-.373-.05-.101-.46-1.109-.63-1.52-.166-.402-.349-.348-.48-.348-.125-.002-.27-.002-.413-.002s-.377.053-.574.265c-.198.212-.754.737-.754 1.798 0 1.06.772 2.083.88 2.228.107.145 1.518 2.318 3.678 3.25.513.22 1.144.354 1.536.478.514.161.981.139 1.35.084.412-.061 1.717-.702 1.958-1.382.242-.68.242-1.263.17-1.383-.073-.12-.266-.192-.556-.338z" />
                </svg>
                <span>Send Order via WhatsApp</span>
              </button>

              <a
                href="tel:09122118837"
                className="py-3.5 bg-slate-900/10 dark:bg-slate-800/15 border border-white/20 dark:border-slate-800 glass text-slate-900 dark:text-slate-100 font-bold text-sm rounded-xl transition-all shadow-md hover:scale-[1.01] flex justify-center items-center gap-2"
              >
                <Phone className="w-4.5 h-4.5 text-emerald-500" />
                <span>Call: 09122118837</span>
              </a>
            </div>

          </form>

        </div>
      </div>

    </div>
  );
}
