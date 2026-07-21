/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from 'react';
import { FAQS } from '../data/mockData';

interface SEOConfigProps {
  page: 'home' | 'about' | 'services' | 'gallery' | 'contact' | 'whatsapp-order';
}

export default function SEOConfig({ page }: SEOConfigProps) {
  useEffect(() => {
    // 1. Update Title and Meta Description Dynamically
    let title = 'Maa Vindhyavasini Medical Hall | Premium Pharmacy in Delha, Gaya';
    let description = 'Maa Vindhyavasini Medical Hall is Delha, Gaya\'s most trusted medical store for 100% genuine medicines, surgicals, diabetes care, baby care, and direct WhatsApp ordering.';

    switch (page) {
      case 'about':
        title = 'About Us | Maa Vindhyavasini Medical Hall - Trusted Gaya Pharmacy';
        description = 'Learn about the mission, values, and history of Maa Vindhyavasini Medical Hall, a trusted local medical store in Delha, Gaya, Bihar providing authentic medicines since inception.';
        break;
      case 'services':
        title = 'Our Healthcare Services | Maa Vindhyavasini Medical Hall';
        description = 'Explore our pharmaceutical services in Gaya, Bihar: prescription medicines, OTC drugs, health supplements, baby products, medical devices, and surgical essentials.';
        break;
      case 'gallery':
        title = 'Store Gallery & Photos | Maa Vindhyavasini Medical Hall';
        description = 'View pictures of our modern medical store in Gaya, Bihar. See our clean medicine racks, baby care section, diagnostic devices, and professional storefront.';
        break;
      case 'contact':
        title = 'Contact Us | Maa Vindhyavasini Medical Hall - Phone & Address';
        description = 'Contact Maa Vindhyavasini Medical Hall in Delha, Gaya, Bihar. Find our phone number (09122118837), Google Maps location, and working hours.';
        break;
      case 'whatsapp-order':
        title = 'Order Medicines Online via WhatsApp | Maa Vindhyavasini Medical Hall';
        description = 'Order genuine medicines online easily in Gaya. Upload your doctor\'s prescription or search medicines to place a direct delivery order on WhatsApp.';
        break;
    }

    document.title = title;

    // Update Meta Description
    let metaDescriptionEl = document.querySelector('meta[name="description"]');
    if (!metaDescriptionEl) {
      metaDescriptionEl = document.createElement('meta');
      metaDescriptionEl.setAttribute('name', 'description');
      document.head.appendChild(metaDescriptionEl);
    }
    metaDescriptionEl.setAttribute('content', description);

    // Update Open Graph Title
    let ogTitleEl = document.querySelector('meta[property="og:title"]');
    if (!ogTitleEl) {
      ogTitleEl = document.createElement('meta');
      ogTitleEl.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitleEl);
    }
    ogTitleEl.setAttribute('content', title);

    // Update Open Graph Description
    let ogDescEl = document.querySelector('meta[property="og:description"]');
    if (!ogDescEl) {
      ogDescEl = document.createElement('meta');
      ogDescEl.setAttribute('property', 'og:description');
      document.head.appendChild(ogDescEl);
    }
    ogDescEl.setAttribute('content', description);

    // 2. Inject JSON-LD Schema Markup
    const removeExistingSchema = () => {
      const schemas = document.querySelectorAll('script[type="application/ld+json"].dynamic-seo-schema');
      schemas.forEach(schema => schema.remove());
    };

    removeExistingSchema();

    // Base Pharmacy & Local Business Schema
    const pharmacySchema = {
      '@context': 'https://schema.org',
      '@type': 'Pharmacy',
      '@id': 'https://maa-vindhyavasini-medical.web.app/#pharmacy',
      'name': 'Maa Vindhyavasini Medical Hall',
      'image': 'https://images.unsplash.com/photo-1607619056574-7b8d304f3ced?auto=format&fit=crop&q=80&w=800',
      'description': 'Your Trusted Medical Store in Delha, Gaya, Bihar for genuine medicines, health supplements, baby care, surgical products, and easy WhatsApp prescription ordering.',
      'url': window.location.origin,
      'telephone': '09122118837',
      'priceRange': '$$',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': 'RX2W+5M8, Tekari Rd, Chotki, Kharkhura, Delha',
        'addressLocality': 'Gaya',
        'addressRegion': 'Bihar',
        'postalCode': '823002',
        'addressCountry': 'IN'
      },
      'geo': {
        '@type': 'GeoCoordinates',
        'latitude': '24.810502',
        'longitude': '84.996191'
      },
      'openingHoursSpecification': {
        '@type': 'OpeningHoursSpecification',
        'dayOfWeek': [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday'
        ],
        'opens': '08:30',
        'closes': '22:00'
      },
      'sameAs': [
        'https://wa.me/919122118837'
      ]
    };

    // FAQ Schema
    const faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': FAQS.map(faq => ({
        '@type': 'Question',
        'name': faq.question,
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': faq.answer
        }
      }))
    };

    // Breadcrumb Schema
    const breadcrumbs = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      'itemListElement': [
        {
          '@type': 'ListItem',
          'position': 1,
          'name': 'Home',
          'item': window.location.origin
        },
        {
          '@type': 'ListItem',
          'position': 2,
          'name': page.charAt(0).toUpperCase() + page.slice(1),
          'item': `${window.location.origin}#${page}`
        }
      ]
    };

    // Inject Schemas
    const injectSchemaScript = (schemaObj: object, className: string) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.className = `dynamic-seo-schema ${className}`;
      script.text = JSON.stringify(schemaObj);
      document.head.appendChild(script);
    };

    injectSchemaScript(pharmacySchema, 'schema-pharmacy');
    injectSchemaScript(faqSchema, 'schema-faq');
    injectSchemaScript(breadcrumbs, 'schema-breadcrumbs');

    return () => {
      removeExistingSchema();
    };
  }, [page]);

  return null;
}
