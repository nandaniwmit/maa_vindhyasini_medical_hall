/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { ZoomIn, ZoomOut, X, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/mockData';

export default function GalleryView() {
  const [activeFilter, setActiveFilter] = useState<'All' | 'Store' | 'Products' | 'Equipment' | 'Front'>('All');
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [isZoomed, setIsZoomed] = useState(false);

  const filterTabs = [
    { id: 'All', label: 'All Photos' },
    { id: 'Front', label: 'Store Front' },
    { id: 'Store', label: 'Medicine Racks' },
    { id: 'Products', label: 'Baby & Personal' },
    { id: 'Equipment', label: 'Devices' },
  ] as const;

  const filteredItems = GALLERY_ITEMS.filter((item) => {
    if (activeFilter === 'All') return true;
    return item.category === activeFilter;
  });

  // Keyboard navigation for Lightbox
  useEffect(() => {
    if (selectedImageIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowRight') {
        navigateNext();
      } else if (e.key === 'ArrowLeft') {
        navigatePrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImageIndex]);

  const openLightbox = (id: string) => {
    const index = GALLERY_ITEMS.findIndex((item) => item.id === id);
    if (index !== -1) {
      setSelectedImageIndex(index);
      setIsZoomed(false);
    }
  };

  const closeLightbox = () => {
    setSelectedImageIndex(null);
    setIsZoomed(false);
  };

  const navigateNext = () => {
    if (selectedImageIndex === null) return;
    setIsZoomed(false);
    setSelectedImageIndex((prevIndex) => {
      if (prevIndex === null) return null;
      return (prevIndex + 1) % GALLERY_ITEMS.length;
    });
  };

  const navigatePrev = () => {
    if (selectedImageIndex === null) return;
    setIsZoomed(false);
    setSelectedImageIndex((prevIndex) => {
      if (prevIndex === null) return null;
      return (prevIndex - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length;
    });
  };

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12 animate-fade-in transition-colors duration-300">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider">
          <ImageIcon className="w-3.5 h-3.5" />
          <span>Visual Store Tour</span>
        </div>
        <h1 className="text-3xl md:text-5xl font-sans font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
          Our Pharmacy <span className="text-emerald-600 dark:text-emerald-400">Gallery</span>
        </h1>
        <p className="text-sm md:text-base text-slate-500 dark:text-slate-400 leading-relaxed">
          Take a look at our hygienic medical shelves, modern customer counter, diagnostic devices, and authentic product layouts in Gaya, Bihar.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center items-center gap-2 border-b border-white/10 dark:border-slate-800 pb-4">
        {filterTabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => {
              setActiveFilter(tab.id);
              setIsZoomed(false);
            }}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-250 cursor-pointer ${
              activeFilter === tab.id
                ? 'bg-emerald-600 dark:bg-emerald-500 text-white shadow-xs'
                : 'bg-white/10 dark:bg-slate-850/40 text-slate-600 dark:text-slate-300 border border-white/10 dark:border-slate-800 glass hover:bg-white/20 dark:hover:bg-slate-750'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Masonry / Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredItems.map((item) => (
          <div 
            key={item.id}
            onClick={() => openLightbox(item.id)}
            className="group relative overflow-hidden rounded-2xl bg-white/40 dark:bg-slate-900/40 border border-white/20 dark:border-slate-800 glass cursor-pointer card-hover"
          >
            {/* Image Frame */}
            <div className="aspect-4/3 overflow-hidden bg-slate-100 dark:bg-slate-900">
              <img
                src={item.imageUrl}
                alt={item.title}
                referrerPolicy="no-referrer"
                loading="lazy"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
              <h4 className="text-white font-bold text-sm leading-snug">{item.title}</h4>
              <p className="text-[11px] text-emerald-300 mt-0.5">{item.category} Section</p>
            </div>

            {/* Subtle Standard Footer Info for fallback viewability */}
            <div className="p-3.5 block group-hover:bg-emerald-50/10 dark:group-hover:bg-slate-800/40 transition-colors">
              <h4 className="text-slate-800 dark:text-slate-100 font-bold text-xs leading-none truncate">
                {item.title}
              </h4>
              <p className="text-[10px] text-slate-400 dark:text-slate-500 mt-1 uppercase tracking-wider font-semibold">
                Category: {item.category}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Overlay */}
      {selectedImageIndex !== null && (
        <div className="fixed inset-0 z-50 bg-slate-950/98 backdrop-blur-md flex flex-col justify-between p-4 md:p-6 animate-fade-in">
          
          {/* Top Panel Controls */}
          <div className="flex justify-between items-center text-white relative z-10">
            <div className="flex flex-col">
              <span className="font-mono text-xs text-slate-400 font-bold">
                Image {selectedImageIndex + 1} of {GALLERY_ITEMS.length}
              </span>
              <span className="text-sm font-bold text-emerald-400">
                {GALLERY_ITEMS[selectedImageIndex].title}
              </span>
            </div>
            
            <div className="flex items-center gap-3">
              {/* Zoom Action */}
              <button
                onClick={() => setIsZoomed(!isZoomed)}
                className="p-2.5 rounded-full hover:bg-white/10 text-slate-300 hover:text-white transition-colors cursor-pointer"
                title={isZoomed ? "Zoom Out" : "Zoom In"}
              >
                {isZoomed ? <ZoomOut className="w-5.5 h-5.5" /> : <ZoomIn className="w-5.5 h-5.5" />}
              </button>
              
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="p-2.5 rounded-full hover:bg-white/10 text-slate-300 hover:text-white transition-colors cursor-pointer"
                title="Close (Esc)"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Main Stage Frame */}
          <div className="relative flex-1 flex items-center justify-center overflow-hidden">
            
            {/* Left Nav Button */}
            <button
              onClick={navigatePrev}
              className="absolute left-2 md:left-6 p-3 rounded-full bg-black/40 hover:bg-black/60 text-white/80 hover:text-white border border-white/10 hover:scale-105 transition-all z-20 cursor-pointer"
              title="Previous (Left Arrow)"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Active Display Image */}
            <div className="max-w-4xl max-h-[70vh] flex items-center justify-center overflow-hidden select-none">
              <img
                src={GALLERY_ITEMS[selectedImageIndex].imageUrl}
                alt={GALLERY_ITEMS[selectedImageIndex].title}
                referrerPolicy="no-referrer"
                className={`max-w-full max-h-[70vh] object-contain rounded-lg shadow-2xl transform transition-transform duration-350 ${
                  isZoomed ? 'scale-135 cursor-zoom-out' : 'scale-100 cursor-zoom-in'
                }`}
                onClick={() => setIsZoomed(!isZoomed)}
              />
            </div>

            {/* Right Nav Button */}
            <button
              onClick={navigateNext}
              className="absolute right-2 md:right-6 p-3 rounded-full bg-black/40 hover:bg-black/60 text-white/80 hover:text-white border border-white/10 hover:scale-105 transition-all z-20 cursor-pointer"
              title="Next (Right Arrow)"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

          </div>

          {/* Bottom Panel Description */}
          <div className="max-w-2xl mx-auto text-center text-slate-300 space-y-1 pb-4 relative z-10">
            <p className="text-xs md:text-sm leading-relaxed font-medium">
              {GALLERY_ITEMS[selectedImageIndex].description}
            </p>
            <p className="text-[10px] text-emerald-400 font-bold uppercase tracking-widest mt-1">
              Store Area: {GALLERY_ITEMS[selectedImageIndex].category}
            </p>
          </div>

        </div>
      )}

    </div>
  );
}
