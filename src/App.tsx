import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ReLensProcess } from './components/ReLensProcess';
import { DmvExamSection } from './components/DmvExamSection';
import { Testimonials } from './components/Testimonials';
import { FaqSection } from './components/FaqSection';
import { ContactLocation } from './components/ContactLocation';
import { Footer } from './components/Footer';
import { Phone, MapPin, Glasses } from 'lucide-react';
import { SITE_INFO } from './data/content';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#EBF3FA] text-[#0D1520] selection:bg-obsidian-900 selection:text-white pb-20 sm:pb-0 antialiased">
      {/* Top Header */}
      <Navbar />

      {/* Main Content Sections - Structured for a straightforward, high-converting optical store */}
      <main className="flex-grow">
        {/* Editorial Hero with Master Optician Mauricio & Store Branding */}
        <Hero />

        {/* 4-Step Re-Lensing & Lens Replacement Process */}
        <ReLensProcess />

        {/* Official NY DMV Driver License Vision Exams ($25 Walk-In) */}
        <DmvExamSection />

        {/* Verified Patient Reviews (17 Authentic Google Reviews & Mauricio Bio) */}
        <Testimonials />

        {/* Frequently Asked Questions */}
        <FaqSection />

        {/* Authentic Storefront, Direction Map, Hours & Inquiries */}
        <ContactLocation />
      </main>

      {/* Luxury Footer */}
      <Footer />

      {/* Floating Mobile Quick Action Pill */}
      <div className="sm:hidden fixed bottom-5 inset-x-4 z-40 flex items-center justify-between bg-obsidian-900/95 backdrop-blur-md text-white p-2 rounded-full shadow-elevated border border-white/10">
        <a
          href={`tel:${SITE_INFO.phone}`}
          className="flex-1 flex items-center justify-center space-x-1.5 py-2.5 text-xs font-semibold border-r border-white/15"
        >
          <Phone className="w-3.5 h-3.5 text-electric-400" />
          <span>Call Mauricio</span>
        </a>
        <a
          href="#relensing"
          className="flex-1 flex items-center justify-center space-x-1.5 py-2.5 text-xs font-semibold text-cyan-300 border-r border-white/15"
        >
          <Glasses className="w-3.5 h-3.5" />
          <span>Re-Lensing $49</span>
        </a>
        <a
          href="#contact"
          className="flex-1 flex items-center justify-center space-x-1.5 py-2.5 text-xs font-semibold text-neutral-300 hover:text-white"
        >
          <MapPin className="w-3.5 h-3.5" />
          <span>Visit Store</span>
        </a>
      </div>
    </div>
  );
};

export default App;
