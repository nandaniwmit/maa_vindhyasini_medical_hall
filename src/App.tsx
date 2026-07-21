/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Phone, MessageSquare } from 'lucide-react';

// Subcomponents
import Header from './components/Header';
import Footer from './components/Footer';
import SEOConfig from './components/SEOConfig';
import LegalModals from './components/LegalModals';

// Views
import Hero from './components/Hero';
import HomeView from './components/HomeView';
import AboutView from './components/AboutView';
import ServicesView from './components/ServicesView';
import GalleryView from './components/GalleryView';
import ContactView from './components/ContactView';
import WhatsAppOrderForm from './components/WhatsAppOrderForm';
import FAQSection from './components/FAQSection';
import ReviewsSection from './components/ReviewsSection';
import BlogTips from './components/BlogTips';

// Types
import { CartItem } from './types';

export default function App() {
  const [activeTab, setActiveTab] = useState<'home' | 'about' | 'services' | 'gallery' | 'contact' | 'whatsapp-order'>('home');
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [legalModal, setLegalModal] = useState<'privacy' | 'terms' | 'disclaimer' | null>(null);

  // Global Tracker Integration
  useEffect(() => {
    const TRACKING_ENDPOINT = 'https://tools.cprajapati.com/tracker/track.php';
    const urlParams = new URLSearchParams(window.location.search);
    let cid = urlParams.get('cid') || localStorage.getItem('wmit_active_cid');
    if (urlParams.get('cid')) {
      localStorage.setItem('wmit_active_cid', urlParams.get('cid')!);
    }
    if (!cid) return;

    let visitorId = localStorage.getItem('wmit_visitor_id') ||
      'wmit_' + Math.random().toString(36).substring(2, 15);
    localStorage.setItem('wmit_visitor_id', visitorId);

    let sessionId = sessionStorage.getItem('wmit_session_id') ||
      'wmit_' + Math.random().toString(36).substring(2, 15);
    sessionStorage.setItem('wmit_session_id', sessionId);

    const getPageName = () => {
      if (activeTab) {
        return activeTab === 'home' ? 'Home' : activeTab.charAt(0).toUpperCase() + activeTab.slice(1);
      }
      const path = window.location.pathname;
      const segment = path.replace(/\/$/, "").split("/").pop();
      return segment ? segment.split('?')[0] : 'Home';
    };

    const sendInitPayload = () => {
      const payload = {
        cid: cid,
        visitor_id: visitorId,
        session_id: sessionId,
        page_name: getPageName(),
        referrer: document.referrer || '',
        device: window.innerWidth < 768 ? 'Mobile' : 'Desktop',
        browser: navigator.userAgent,
        action: 'init'
      };
      fetch(TRACKING_ENDPOINT, {
        method: 'POST',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      }).catch(() => {});
    };

    const sendExitPayload = () => {
      const payload = {
        cid: cid,
        session_id: sessionId,
        page_name: getPageName(),
        action: 'page_change'
      };

      if (navigator.sendBeacon) {
        const blob = new Blob([JSON.stringify(payload)], { type: 'application/json' });
        navigator.sendBeacon(TRACKING_ENDPOINT, blob);
      } else {
        fetch(TRACKING_ENDPOINT, {
          method: 'POST',
          mode: 'cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
          keepalive: true
        }).catch(() => {});
      }
    };

    sendInitPayload();

    const handleLocationChange = () => {
      sendExitPayload();
      setTimeout(sendInitPayload, 100);
    };

    const handlePageHide = () => {
      sendExitPayload();
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        sendExitPayload();
      }
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('pagehide', handlePageHide);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      sendExitPayload();
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('pagehide', handlePageHide);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [activeTab]);

  // Read dark mode state from local storage on load
  useEffect(() => {
    const savedMode = localStorage.getItem('mv_dark_mode');
    if (savedMode === 'true') {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  // Sync dark mode state to local storage & document element
  const handleToggleDarkMode = (dark: boolean) => {
    setDarkMode(dark);
    if (dark) {
      localStorage.setItem('mv_dark_mode', 'true');
      document.documentElement.classList.add('dark');
    } else {
      localStorage.setItem('mv_dark_mode', 'false');
      document.documentElement.classList.remove('dark');
    }
  };

  // Calculate cart total count
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className={`min-h-screen flex flex-col justify-between bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-100 transition-colors duration-300 ${darkMode ? 'dark' : ''}`}>
      
      {/* 1. Dynamic SEO & Schema Injector */}
      <SEOConfig page={activeTab} />

      {/* 2. Sticky Header Nav */}
      <Header 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        darkMode={darkMode} 
        setDarkMode={handleToggleDarkMode}
        cartCount={cartCount}
      />

      {/* 3. Main Views Router */}
      <main className="flex-grow">
        
        {activeTab === 'home' && (
          <div className="space-y-4">
            <Hero setActiveTab={setActiveTab} cart={cart} setCart={setCart} />
            <HomeView setActiveTab={setActiveTab} cart={cart} setCart={setCart} />
            <ReviewsSection />
            <FAQSection />
            <BlogTips />
          </div>
        )}

        {activeTab === 'about' && (
          <div className="space-y-4">
            <AboutView />
            <FAQSection />
          </div>
        )}

        {activeTab === 'services' && (
          <div className="space-y-4">
            <ServicesView />
            <FAQSection />
          </div>
        )}

        {activeTab === 'gallery' && (
          <div className="space-y-4">
            <GalleryView />
          </div>
        )}

        {activeTab === 'contact' && (
          <div className="space-y-4">
            <ContactView />
            <FAQSection />
          </div>
        )}

        {activeTab === 'whatsapp-order' && (
          <div className="space-y-4">
            <WhatsAppOrderForm cart={cart} setCart={setCart} />
            <FAQSection />
          </div>
        )}

      </main>

      {/* 4. Footer */}
      <Footer setActiveTab={setActiveTab} openModal={setLegalModal} />

      {/* 5. Legal Terms/Privacy Modals Popups */}
      <LegalModals modalType={legalModal} onClose={() => setLegalModal(null)} />

      {/* 6. Floating Action Widgets */}
      <div className="fixed bottom-6 left-6 z-40 flex flex-col gap-3">
        {/* Floating Call Now Widget */}
        <a
          href="tel:09122118837"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-900/10 dark:bg-slate-800/15 border border-white/20 dark:border-slate-800 glass text-slate-900 dark:text-slate-100 shadow-xl hover:scale-110 active:scale-95 transition-all duration-300"
          title="Call Emergency Hotline"
          aria-label="Call Emergency Hotline"
        >
          <Phone className="w-5.5 h-5.5 text-emerald-500" />
        </a>

        {/* Floating WhatsApp Support Widget */}
        <a
          href="https://wa.me/919122118837"
          target="_blank"
          rel="noreferrer"
          className="relative flex h-12 w-12 items-center justify-center rounded-full bg-emerald-600 text-white shadow-xl border border-emerald-500/30 hover:bg-emerald-500 hover:scale-110 active:scale-95 transition-all duration-300"
          title="Chat on WhatsApp"
          aria-label="Chat on WhatsApp"
        >
          {/* Pulsing visual wave */}
          <span className="absolute inset-0 rounded-full bg-emerald-500/40 animate-ping"></span>
          <MessageSquare className="w-5.5 h-5.5 relative z-10" />
        </a>
      </div>

    </div>
  );
}
