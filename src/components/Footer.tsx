import React, { useState } from 'react';
import { ArrowUpRight, Instagram, Facebook, Twitter, Mail, MapPin, Phone } from 'lucide-react';
import { SITE_INFO } from '../data/content';

export const Footer: React.FC = () => {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubscribed(true);
  };

  return (
    <footer className="bg-[#0B131E] text-slate-200 pt-16 pb-12 relative overflow-hidden">
      
      {/* Huge Subtle Watermark Typography matching Screenshot */}
      <div className="absolute -bottom-8 left-0 right-0 flex items-center justify-center select-none pointer-events-none opacity-[0.06] overflow-hidden">
        <span className="font-serif text-[180px] sm:text-[260px] font-bold tracking-widest text-white whitespace-nowrap">
          ReLense.
        </span>
      </div>

      {/* Floating 3D Optical Frame Asset in Footer matching Screenshot */}
      <div className="hidden lg:block absolute bottom-8 right-24 w-48 opacity-75 pointer-events-none animate-float-slow">
        <img
          src="/assets/glasses.jpg"
          alt="Floating optical frames"
          className="w-full h-auto object-contain rounded-2xl filter drop-shadow-2xl brightness-90"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Newsletter & Brand Banner matching Screenshot */}
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
              {SITE_INFO.taglines.hero} Freeport, New York's dedicated precision optical laboratory.
            </p>
          </div>

          <div className="lg:col-span-6">
            <div className="text-xs uppercase tracking-wider text-slate-400 font-medium mb-2">
              Your look instantly with our real-time updates
            </div>
            {!subscribed ? (
              <form onSubmit={handleSubscribe} className="flex items-center gap-2 max-w-md">
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-full bg-white/10 border border-white/15 text-base sm:text-xs text-white placeholder-slate-400/70 focus:outline-none focus:ring-2 focus:ring-electric-500"
                />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-full bg-white hover:bg-slate-100 text-obsidian-950 font-bold text-xs uppercase tracking-wider transition whitespace-nowrap shadow-sm"
                >
                  Subscribe
                </button>
              </form>
            ) : (
              <div className="text-xs text-blue-400 font-medium py-2">
                ✓ Thank you for subscribing to ReLense updates!
              </div>
            )}
          </div>

        </div>

        {/* 4 Column Navigation Links */}
        <div className="py-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-xs">
          
          {/* Col 1: Resources */}
          <div className="space-y-3">
            <div className="font-semibold text-white uppercase tracking-wider text-[11px]">
              Resources
            </div>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#services" className="hover:text-white transition">Optical Services</a></li>
              <li><a href="#calculator" className="hover:text-white transition">Pricing Calculator</a></li>
              <li><a href="#faq" className="hover:text-white transition">Help & FAQs</a></li>
              <li><a href="#contact" className="hover:text-white transition">Store Location & Lab</a></li>
            </ul>
          </div>

          {/* Col 2: Company */}
          <div className="space-y-3">
            <div className="font-semibold text-white uppercase tracking-wider text-[11px]">
              Company
            </div>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#relensing" className="hover:text-white transition">About Us</a></li>
              <li><a href="#relensing" className="hover:text-white transition">Why Choose Us</a></li>
              <li><a href="#contact" className="hover:text-white transition">Careers</a></li>
              <li><a href="#contact" className="hover:text-white transition">Press & Media</a></li>
            </ul>
          </div>

          {/* Col 3: Specialized Optical Services */}
          <div className="space-y-3">
            <div className="font-semibold text-white uppercase tracking-wider text-[11px]">
              Specialized Services
            </div>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#relensing" className="hover:text-white transition">⚡ Same-Day & 24h Emergency Glasses</a></li>
              <li><a href="#calculator" className="hover:text-white transition">🔬 Shamir Auto Intelligence™ Progressives</a></li>
              <li><a href="#calculator" className="hover:text-white transition">🕶️ Custom Magnetic Clip-On Lenses</a></li>
              <li><a href="#reviews" className="hover:text-white transition">👶 Children's Goggles & Astigmatism</a></li>
              <li><a href="#relensing" className="hover:text-white transition">♻️ Re-Lensing & Frame Swaps ($49)</a></li>
              <li><a href="#dmv-section" className="hover:text-white transition">🚗 5-Min NY DMV Vision Tests ($25)</a></li>
            </ul>
          </div>

          {/* Col 4: Freeport Lab & Master Optician */}
          <div className="space-y-3">
            <div className="font-semibold text-white uppercase tracking-wider text-[11px]">
              Freeport Lab & Mauricio
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
              <li className="text-[11px] text-emerald-400 font-medium">
                ✓ Municipal Parking Directly Across Street
              </li>
              <li className="text-[11px] text-blue-300">
                ✓ CareCredit & HSA/FSA Flex Accepted
              </li>
              <li className="text-[11px] text-slate-400">
                ✓ Hablamos Español Fluido
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

        {/* Bottom Bar & Socials */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} Relense Optical Store. Master Optician Mauricio. All rights reserved. Freeport, New York.
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            <a
              href={SITE_INFO.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/5 hover:bg-white/15 text-slate-300 hover:text-white transition"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href={SITE_INFO.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/5 hover:bg-white/15 text-slate-300 hover:text-white transition"
              aria-label="Facebook"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href={SITE_INFO.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/5 hover:bg-white/15 text-slate-300 hover:text-white transition"
              aria-label="Twitter"
            >
              <Twitter className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
