import React from 'react';
import { ArrowUp, Phone, MapPin, ExternalLink, Calculator, Instagram, Facebook } from 'lucide-react';
import { SITE_INFO } from '../data/content';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0B131E] text-slate-200 pt-16 pb-12 relative overflow-hidden">
      
      {/* Huge Subtle Watermark Typography */}
      <div className="absolute -bottom-8 left-0 right-0 flex items-center justify-center select-none pointer-events-none opacity-[0.05] overflow-hidden">
        <span className="font-serif text-[180px] sm:text-[260px] font-bold tracking-widest text-white whitespace-nowrap">
          ReLense.
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Direct Action Banner */}
        <div className="pb-12 border-b border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-6 space-y-3">
            <div className="flex items-center space-x-3">
              <img
                src="/assets/logo.png"
                alt="ReLense"
                className="h-9 w-auto object-contain brightness-0 invert"
              />
            </div>
            <p className="text-xs sm:text-sm text-slate-400 max-w-md leading-relaxed">
              {SITE_INFO.taglines.hero} Freeport, New York's dedicated precision optical laboratory and boutique showroom.
            </p>
          </div>

          {/* Quick Action Buttons */}
          <div className="lg:col-span-6 flex flex-wrap items-center gap-3 lg:justify-end">
            <a
              href={`tel:${SITE_INFO.phone}`}
              className="px-5 py-3 rounded-full bg-electric-600 hover:bg-electric-500 text-white font-bold text-xs uppercase tracking-wider transition shadow-elevated flex items-center space-x-2"
            >
              <Phone className="w-3.5 h-3.5 text-white" />
              <span>Call: {SITE_INFO.phoneFormatted}</span>
            </a>

            <a
              href="https://maps.google.com/?q=37+Guy+Lombardo+Ave+Freeport+NY+11520"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-xs uppercase tracking-wider transition flex items-center space-x-2"
            >
              <MapPin className="w-3.5 h-3.5 text-cyan-300" />
              <span>Directions</span>
            </a>

            <a
              href={SITE_INFO.orderContactsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-xs uppercase tracking-wider transition flex items-center space-x-2"
            >
              <ExternalLink className="w-3.5 h-3.5 text-blue-300" />
              <span>Order Contacts</span>
            </a>

            <a
              href="#calculator"
              className="px-5 py-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-xs uppercase tracking-wider transition flex items-center space-x-2"
            >
              <Calculator className="w-3.5 h-3.5 text-amber-300" />
              <span>Price Calculator</span>
            </a>
          </div>

        </div>

        {/* 4 Column Navigation Links */}
        <div className="py-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-xs">
          
          {/* Col 1: Core Navigation */}
          <div className="space-y-3">
            <div className="font-semibold text-white uppercase tracking-wider text-[11px]">
              Explore
            </div>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#services" className="hover:text-white transition">Specialized Services</a></li>
              <li><a href="#relensing" className="hover:text-white transition">How Re-Lensing Works</a></li>
              <li><a href="#calculator" className="hover:text-white transition">Price & Lens Calculator</a></li>
              <li><a href="#dmv-section" className="hover:text-white transition">NY DMV Vision Exams</a></li>
              <li><a href="#reviews" className="hover:text-white transition">Patient Google Reviews</a></li>
              <li><a href="#faq" className="hover:text-white transition">Help & FAQs</a></li>
            </ul>
          </div>

          {/* Col 2: Optical Services */}
          <div className="space-y-3">
            <div className="font-semibold text-white uppercase tracking-wider text-[11px]">
              Lab Services
            </div>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#services" className="hover:text-white transition">Same-Day & 24h Glasses</a></li>
              <li><a href="#calculator" className="hover:text-white transition">Shamir Digital Progressives</a></li>
              <li><a href="#calculator" className="hover:text-white transition">Custom Magnetic Clip-Ons</a></li>
              <li><a href="#services" className="hover:text-white transition">Children's Sports Goggles</a></li>
              <li><a href="#relensing" className="hover:text-white transition">Re-Lensing from $49</a></li>
              <li><a href="#services" className="hover:text-white transition">Severe Astigmatism Rx</a></li>
            </ul>
          </div>

          {/* Col 3: Patient Benefits */}
          <div className="space-y-3">
            <div className="font-semibold text-white uppercase tracking-wider text-[11px]">
              Patient Care
            </div>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#dmv-section" className="hover:text-white transition">5-Minute Walk-In DMV ($25)</a></li>
              <li><a href="#calculator" className="hover:text-white transition">CareCredit Financing</a></li>
              <li><a href="#calculator" className="hover:text-white transition">HSA & FSA Flex Accepted</a></li>
              <li><a href="#contact" className="hover:text-white transition">Free Municipal Parking</a></li>
              <li><a href="#contact" className="hover:text-white transition">Hablamos Español Fluido</a></li>
            </ul>
          </div>

          {/* Col 4: Freeport Lab & Contact */}
          <div className="space-y-3">
            <div className="font-semibold text-white uppercase tracking-wider text-[11px]">
              Freeport Lab
            </div>
            <ul className="space-y-2.5 text-slate-400">
              <li className="text-white font-medium">
                Mauricio · Master Optician (20+ Yrs)
              </li>
              <li>
                <a href={`tel:${SITE_INFO.phone}`} className="hover:text-white transition font-medium text-electric-400">
                  Direct Line: {SITE_INFO.phoneFormatted}
                </a>
              </li>
              <li>
                <span>{SITE_INFO.address}</span>
              </li>
              <li className="text-[11px] text-slate-400">
                Open 24/7 for Inquiries
              </li>
              <li className="text-[11px] text-emerald-400 font-medium">
                In-Store · Curbside · Delivery
              </li>
            </ul>
          </div>

        </div>

        {/* SEO Keyword Tag Cloud & Neighborhood Index */}
        <div className="py-6 border-t border-white/10 text-[11px] text-slate-400 leading-relaxed space-y-1">
          <div className="font-semibold text-slate-400 uppercase tracking-wider text-[10px]">
            Relense Optical Freeport NY · Local Search Index:
          </div>
          <p>
            Same-Day Glasses Freeport NY • 24-Hour Emergency Eyeglasses Replacement • Shamir Auto Intelligence Digital Progressive Lenses • Glacier Expressions Premium Anti-Reflective Coating • Custom Magnetic Mirrored Clip-On Sunglasses • Children’s Prescription Sports Goggles • Severe Astigmatism High-Cylinder Optics • Frame Swap for Existing Lenses • CareCredit Optical Financing Long Island • Authorized NY DMV Vision Registry Walk-In • 37B Guy Lombardo Ave, Nassau County, NY 11520.
          </p>
        </div>

        {/* Bottom Bar: Copyright, Back to Top & Socials */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} Relense Optical Store. Master Optician Mauricio. All rights reserved. Freeport, New York.
          </div>

          <div className="flex items-center space-x-3">
            {/* Back to Top Button */}
            <button
              onClick={scrollToTop}
              className="px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/15 transition flex items-center space-x-1.5 cursor-pointer text-xs"
              title="Scroll back to top"
            >
              <ArrowUp className="w-3.5 h-3.5 text-cyan-300" />
              <span>Back to Top</span>
            </button>

            {/* Social Links */}
            <a
              href={SITE_INFO.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/5 hover:bg-white/15 text-slate-300 hover:text-white transition"
              aria-label="Instagram"
              title="Follow ReLense on Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href={SITE_INFO.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/5 hover:bg-white/15 text-slate-300 hover:text-white transition"
              aria-label="Facebook"
              title="Follow ReLense on Facebook"
            >
              <Facebook className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
