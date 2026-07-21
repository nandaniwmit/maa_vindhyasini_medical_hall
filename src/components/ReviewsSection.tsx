/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Star, MessageSquare, Plus, Quote, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS } from '../data/mockData';
import { Testimonial } from '../types';

export default function ReviewsSection() {
  const [reviews, setReviews] = useState<Testimonial[]>(TESTIMONIALS);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newReview, setNewReview] = useState({
    name: '',
    rating: 5,
    text: '',
    role: 'Local Customer',
    location: 'Gaya, Bihar'
  });

  const [submittedReview, setSubmittedReview] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleRatingSelect = (stars: number) => {
    setNewReview((prev) => ({ ...prev, rating: stars }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewReview((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!newReview.name.trim()) {
      setErrorMsg('Please write your name.');
      return;
    }
    if (!newReview.text.trim() || newReview.text.length < 15) {
      setErrorMsg('Please write a genuine review (minimum 15 characters).');
      return;
    }

    const compiledReview: Testimonial = {
      id: `review-${Date.now()}`,
      name: newReview.name,
      rating: newReview.rating,
      text: newReview.text,
      date: 'Just Now',
      role: newReview.role,
      location: newReview.location
    };

    // Prepend new review
    setReviews((prev) => [compiledReview, ...prev]);
    setSubmittedReview(true);
    
    // Reset form
    setTimeout(() => {
      setShowAddForm(false);
      setSubmittedReview(false);
      setNewReview({
        name: '',
        rating: 5,
        text: '',
        role: 'Local Customer',
        location: 'Gaya, Bihar'
      });
    }, 2000);
  };

  return (
    <div className="py-12 max-w-7xl mx-auto space-y-12 transition-colors duration-300">
      
      {/* Title Header with Action Button */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-6 border-b border-white/10 dark:border-slate-800 pb-6">
        <div className="space-y-1.5 text-center sm:text-left">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider">
            <Quote className="w-3.5 h-3.5" />
            <span>Customer Opinions</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-sans font-bold text-slate-900 dark:text-white">
            Why Patients Trust Us
          </h2>
          <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 max-w-xl">
            Real feedback from local Gaya families about our medicines authenticity, discount programs, and home delivery support.
          </p>
        </div>

        <button
          onClick={() => {
            setShowAddForm(true);
            setErrorMsg('');
          }}
          className="px-4.5 py-2.5 rounded-xl medical-gradient text-white text-xs font-bold transition-all flex items-center gap-1.5 shadow-sm hover:scale-[1.02] active:scale-100 cursor-pointer shrink-0"
        >
          <Plus className="w-4 h-4" />
          <span>Write a Review</span>
        </button>
      </div>

      {/* Write review form overlay */}
      {showAddForm && (
        <div className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-white/95 dark:bg-slate-900/95 border border-white/20 dark:border-slate-800 glass rounded-3xl p-6 md:p-8 max-w-lg w-full shadow-2xl relative">
            
            <button
              onClick={() => setShowAddForm(false)}
              className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-gray-100 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors cursor-pointer"
            >
              ✕
            </button>

            {submittedReview ? (
              <div className="py-10 text-center space-y-4">
                <div className="inline-flex p-3 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 rounded-full animate-bounce">
                  <CheckCircle2 className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Review Submitted!</h3>
                <p className="text-xs text-slate-400 max-w-xs mx-auto">
                  Thank you for sharing your experience. Your feedback is added live at the top of our community wall.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmitReview} className="space-y-4">
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">Submit Patient Review</h3>
                  <p className="text-xs text-slate-400">Your opinion helps local Gaya patients make informed healthcare decisions.</p>
                </div>

                {errorMsg && (
                  <div className="p-2.5 bg-red-50 dark:bg-red-950/20 text-red-700 dark:text-red-400 text-xs rounded-xl border border-red-100 dark:border-red-900/40 font-medium">
                    {errorMsg}
                  </div>
                )}

                {/* Rating selection stars */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-350">Rate Your Experience</label>
                  <div className="flex items-center gap-2 pt-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => handleRatingSelect(star)}
                        className="text-amber-400 hover:scale-110 transition-transform cursor-pointer"
                      >
                        <Star className={`w-6 h-6 ${star <= newReview.rating ? 'fill-amber-400 text-amber-400' : 'text-slate-300 dark:text-slate-700'}`} />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Grid name, location */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 dark:text-slate-350">Your Name *</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="E.g., Sujit"
                      value={newReview.name}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white text-xs focus:border-emerald-500 outline-none transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 dark:text-slate-350">Your Area / Location</label>
                    <input
                      type="text"
                      name="location"
                      placeholder="E.g., Delha, Gaya"
                      value={newReview.location}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white text-xs focus:border-emerald-500 outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-350">Your Occupation / Role</label>
                  <input
                    type="text"
                    name="role"
                    placeholder="E.g., Retired Officer, Mother"
                    value={newReview.role}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white text-xs focus:border-emerald-500 outline-none transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-350">Review Text * (Min 15 chars)</label>
                  <textarea
                    name="text"
                    rows={3}
                    placeholder="Describe medicine availability, rates, cleanliness, or owner Mukesh's guidance..."
                    value={newReview.text}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white text-xs focus:border-emerald-500 outline-none transition-all resize-none"
                  />
                </div>

                <div className="pt-2 flex justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setShowAddForm(false)}
                    className="px-4 py-2 text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-xl text-xs font-bold"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 medical-gradient text-white rounded-xl text-xs font-bold shadow-xs cursor-pointer hover:scale-[1.01] active:scale-100 transition-all"
                  >
                    Post Review Live
                  </button>
                </div>
              </form>
            )}

          </div>
        </div>
      )}

      {/* Review Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((r) => (
          <div 
            key={r.id}
            className="bg-white/40 dark:bg-slate-900/40 p-6 rounded-2xl border border-white/20 dark:border-slate-800 glass card-hover cursor-default flex flex-col justify-between"
          >
            <div className="space-y-4">
              {/* Stars & Quote */}
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-0.5">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star 
                      key={star} 
                      className={`w-4 h-4 ${star <= r.rating ? 'fill-amber-400 text-amber-400' : 'text-slate-200'}`} 
                    />
                  ))}
                </div>
                <quote className="text-slate-100 dark:text-slate-700/80">
                  <MessageSquare className="w-5 h-5 text-emerald-100 dark:text-slate-700" />
                </quote>
              </div>

              {/* Text */}
              <p className="text-slate-600 dark:text-slate-400 text-xs md:text-sm leading-relaxed italic">
                "{r.text}"
              </p>
            </div>

            {/* Author */}
            <div className="mt-5 pt-4 border-t border-gray-50 dark:border-gray-700/50 flex justify-between items-end">
              <div>
                <h4 className="font-bold text-slate-800 dark:text-white text-xs">{r.name}</h4>
                <p className="text-[10px] text-slate-400">{r.role} - {r.location}</p>
              </div>
              <span className="text-[10px] font-mono text-slate-400 font-medium">
                {r.date}
              </span>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}
