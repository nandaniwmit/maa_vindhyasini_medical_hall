/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Medicine {
  id: string;
  name: string;
  category: string;
  form: 'Tablet' | 'Capsule' | 'Syrup' | 'Injection' | 'Equipment' | 'Supplement' | 'Cream' | 'Device' | 'Orthopedic' | 'Personal Care' | 'Baby Care' | 'Other';
  price: number;
  description: string;
  inStock: boolean;
  dosage?: string;
  packageSize?: string;
}

export interface CartItem {
  medicine: Medicine;
  quantity: number;
  instructions?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'Order' | 'Prescription' | 'Store';
}

export interface HealthTip {
  id: string;
  title: string;
  category: string;
  snippet: string;
  content: string;
  date: string;
  readTime: string;
  author: string;
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  text: string;
  date: string;
  role: string;
  location: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  features: string[];
  iconName: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Store' | 'Products' | 'Equipment' | 'Front';
  imageUrl: string;
  description: string;
}
