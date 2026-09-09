import React, { useState } from 'react';
import { ArrowUpRight, Instagram, Facebook, Twitter, Mail, MapPin, Phone, ShieldCheck, Heart } from 'lucide-react';
import { SITE_INFO } from '../data/content';

export const Footer: React.FC = () => {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubscribed(true);
  };

  return (
    <footer className="bg-obsidian-900 text-cream-200 pt-16 pb-12 border-t border-white/10 relative overflow-hidden">
      {/* Subtle Ambient Glow */}
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-accent-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Newsletter & Brand Banner matching Dribbble inspiration */}
        <div className="pb-12 border-b border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-6 space-y-3">
            <div className="flex items-center space-x-3">
              <img
                src="/assets/logo.png"
                alt="ReLense"
                className="h-10 w-auto object-contain brightness-0 invert"
              />
            </div>
            <p className="text-xs sm:text-sm text-cream-400 max-w-md leading-relaxed">
              {SITE_INFO.taglines.hero} Freeport, New York's premier re-lensing optical boutique and laboratory.
            </p>
          </div>

          <div className="lg:col-span-6">
            <div className="text-xs uppercase tracking-wider text-cream-400 font-semibold mb-2">
              Stay in Focus — Exclusive Patient Perks & Optical Tips
            </div>
            {!subscribed ? (
              <form onSubmit={handleSubscribe} className="flex items-center gap-2 max-w-md">
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-full bg-white/10 border border-white/15 text-xs text-white placeholder-cream-400/60 focus:outline-none focus:ring-2 focus:ring-accent-gold"
                />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-full bg-accent-gold hover:bg-[#d8a87b] text-obsidian-900 font-bold text-xs uppercase tracking-wider transition whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            ) : (
              <div className="text-xs text-accent-teal font-medium py-2">
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
            <ul className="space-y-2 text-cream-400">
              <li><a href="#relensing" className="hover:text-white transition">How Re-Lensing Works</a></li>
              <li><a href="#calculator" className="hover:text-white transition">Prescription Calculator</a></li>
              <li><a href="#vision-shield" className="hover:text-white transition">Lens Coatings Guide</a></li>
              <li><a href={SITE_INFO.orderContactsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition">YourLens Order Portal</a></li>
              <li><a href="#reviews" className="hover:text-white transition">Patient Testimonials</a></li>
            </ul>
          </div>

          {/* Col 2: Company */}
          <div className="space-y-3">
            <div className="font-semibold text-white uppercase tracking-wider text-[11px]">
              Company
            </div>
            <ul className="space-y-2 text-cream-400">
              <li><a href="#relensing" className="hover:text-white transition">About Mauricio & Lab</a></li>
              <li><a href="#relensing" className="hover:text-white transition">20+ Years Heritage</a></li>
              <li><a href="#contact" className="hover:text-white transition">Hablamos Español</a></li>
              <li><a href="#contact" className="hover:text-white transition">Freeport Location</a></li>
              <li><a href="#relensing" className="hover:text-white transition">Sustainability Mission</a></li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div className="space-y-3">
            <div className="font-semibold text-white uppercase tracking-wider text-[11px]">
              Services
            </div>
            <ul className="space-y-2 text-cream-400">
              <li><a href="#relensing" className="hover:text-white transition">Re-Lens Existing Frames</a></li>
              <li><a href="#dmv-section" className="hover:text-white transition">NY DMV Vision Registry Tests</a></li>
              <li><a href="#best-sellers" className="hover:text-white transition">Designer Frames & Optics</a></li>
              <li><a href="#vision-shield" className="hover:text-white transition">Blue Light & UV400 Shields</a></li>
              <li><a href="#contact" className="hover:text-white transition">Nationwide Mail-In Lab</a></li>
            </ul>
          </div>

          {/* Col 4: Contact & Support */}
          <div className="space-y-3">
            <div className="font-semibold text-white uppercase tracking-wider text-[11px]">
              Contact & Support
            </div>
            <ul className="space-y-2.5 text-cream-400">
              <li className="flex items-center space-x-2">
                <Phone className="w-3.5 h-3.5 text-accent-gold" />
                <a href={`tel:${SITE_INFO.phone}`} className="hover:text-white transition">{SITE_INFO.phoneFormatted}</a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-3.5 h-3.5 text-accent-gold" />
                <a href={`mailto:${SITE_INFO.email}`} className="hover:text-white transition">{SITE_INFO.email}</a>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="w-3.5 h-3.5 text-accent-gold mt-0.5 flex-shrink-0" />
                <span>{SITE_INFO.address}</span>
              </li>
              <li className="pt-2 text-[11px] text-cream-400">
                In-store shopping · Curbside pickup · Delivery
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar & Socials */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cream-400">
          <div>
            © {new Date().getFullYear()} ReLense Optical. All rights reserved. Freeport, New York.
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            <a
              href={SITE_INFO.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/5 hover:bg-white/15 text-cream-300 hover:text-white transition"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href={SITE_INFO.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/5 hover:bg-white/15 text-cream-300 hover:text-white transition"
              aria-label="Facebook"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href={SITE_INFO.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/5 hover:bg-white/15 text-cream-300 hover:text-white transition"
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
