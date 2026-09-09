import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ReLensProcess } from './components/ReLensProcess';
import { Eyewear3DViewer } from './components/Eyewear3DViewer';
import { ProductCatalog } from './components/ProductCatalog';
import { VisionShield } from './components/VisionShield';
import { BentoFeatures } from './components/BentoFeatures';
import { ReLensCalculator } from './components/ReLensCalculator';
import { DmvExamSection } from './components/DmvExamSection';
import { Testimonials } from './components/Testimonials';
import { FaqSection } from './components/FaqSection';
import { ContactLocation } from './components/ContactLocation';
import { Footer } from './components/Footer';
import { Product } from './data/products';
import { Sparkles, Phone, Eye, ArrowUpRight } from 'lucide-react';
import { SITE_INFO } from './data/content';

export const App: React.FC = () => {
  const [selected3DProduct, setSelected3DProduct] = useState<Product | null>(null);

  const handleSelectProductFor3D = (prod: Product) => {
    setSelected3DProduct(prod);
    const studioEl = document.getElementById('studio-3d');
    if (studioEl) {
      studioEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F6F5F2] text-[#141618] selection:bg-obsidian-900 selection:text-white pb-20 sm:pb-0">
      {/* Top Header */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Editorial Hero */}
        <Hero />

        {/* 4-Step Re-Lensing Process */}
        <ReLensProcess />

        {/* Interactive 3D Eyewear Studio */}
        <section id="studio-3d" className="py-20 bg-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cream-200 text-obsidian-900 text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-accent-gold" />
                <span>Precision 3D Interactive Lab</span>
              </div>
              <h2 className="font-serif text-4xl sm:text-5xl text-obsidian-900">
                Experience Eyewear in 360°
              </h2>
              <p className="text-neutral-600 text-sm sm:text-base">
                Drag to rotate the frame, switch between Italian acetate tones, and explore real-time anti-reflective, blue-light, and polarized sunglass lens technologies.
              </p>
            </div>

            <Eyewear3DViewer />
          </div>
        </section>

        {/* Best-Selling Glasses Catalog */}
        <ProductCatalog onSelectProductFor3D={handleSelectProductFor3D} />

        {/* Vision Shield Lens Technology */}
        <VisionShield />

        {/* Bento Features Grid */}
        <BentoFeatures />

        {/* Interactive Prescription & Pricing Calculator */}
        <ReLensCalculator />

        {/* NY DMV Driver License Vision Exams */}
        <DmvExamSection />

        {/* Verified Patient Reviews */}
        <Testimonials />

        {/* Frequently Asked Questions */}
        <FaqSection />

        {/* Optical Shop Location & Direct Contact */}
        <ContactLocation />
      </main>

      {/* Editorial Luxury Dark Footer */}
      <Footer />

      {/* Floating Mobile Quick Action Pill */}
      <div className="sm:hidden fixed bottom-5 inset-x-4 z-40 flex items-center justify-between bg-obsidian-900/95 backdrop-blur-md text-white p-2 rounded-full shadow-elevated border border-white/10">
        <a
          href={`tel:${SITE_INFO.phone}`}
          className="flex-1 flex items-center justify-center space-x-1.5 py-2.5 text-xs font-semibold border-r border-white/15"
        >
          <Phone className="w-3.5 h-3.5 text-accent-gold" />
          <span>Call Mauricio</span>
        </a>
        <a
          href="#calculator"
          className="flex-1 flex items-center justify-center space-x-1.5 py-2.5 text-xs font-semibold text-accent-gold"
        >
          <Eye className="w-3.5 h-3.5" />
          <span>Get Quote</span>
        </a>
      </div>
    </div>
  );
};

export default App;
