import React, { useState, useEffect } from 'react';
import { Phone, ExternalLink, Menu, X, ArrowUpRight, Sparkles, MapPin } from 'lucide-react';
import { SITE_INFO } from '../data/content';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Utility Bar */}
      <div className="bg-obsidian-900 text-cream-200 text-xs py-2 px-4 border-b border-white/10 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <span className="flex items-center text-cream-300">
              <MapPin className="w-3.5 h-3.5 mr-1 text-accent-gold" />
              {SITE_INFO.address}
            </span>
            <span className="text-white/20">•</span>
            <span className="text-accent-gold font-medium">Hablamos Español</span>
            <span className="text-white/20">•</span>
            <span className="text-cream-400">20+ Years of Optical Excellence</span>
          </div>

          <div className="flex items-center space-x-5">
            <a
              href={`tel:${SITE_INFO.phone}`}
              className="flex items-center hover:text-accent-gold transition font-medium"
            >
              <Phone className="w-3 h-3 mr-1 text-accent-gold" />
              {SITE_INFO.phoneFormatted}
            </a>
            <a
              href={SITE_INFO.orderContactsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-accent-gold hover:underline font-semibold"
            >
              Order Contacts Portal
              <ExternalLink className="w-3 h-3 ml-1" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Glassmorphic Navigation */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#F6F5F2]/90 backdrop-blur-md shadow-sm border-b border-black/5 py-3'
            : 'bg-transparent py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center group">
            <div className="relative">
              <img
                src="/assets/logo.png"
                alt="ReLense"
                className="h-9 sm:h-11 w-auto object-contain transition-transform group-hover:scale-[1.02]"
              />
            </div>
            <span className="sr-only">ReLense Optical</span>
          </a>

          {/* Center Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-8 text-[13px] font-medium tracking-wide text-neutral-700">
            <a href="#relensing" className="hover:text-black transition">
              Re-Lense
            </a>
            <a href="#studio-3d" className="hover:text-black transition flex items-center">
              <Sparkles className="w-3 h-3 mr-1 text-accent-gold" />
              3D Studio
            </a>
            <a href="#best-sellers" className="hover:text-black transition">
              Eyewear
            </a>
            <a href="#vision-shield" className="hover:text-black transition">
              Lens Tech
            </a>
            <a href="#calculator" className="hover:text-black transition">
              Pricing Calculator
            </a>
            <a href="#dmv-section" className="hover:text-black transition">
              DMV Exams
            </a>
            <a href="#reviews" className="hover:text-black transition">
              Reviews
            </a>
            <a href="#contact" className="hover:text-black transition">
              Contact
            </a>
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center space-x-3">
            <a
              href={SITE_INFO.orderContactsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-xs font-semibold rounded-full border border-black/15 text-obsidian-900 hover:bg-black/5 transition flex items-center"
            >
              Order Contacts
              <ExternalLink className="w-3 h-3 ml-1.5 opacity-70" />
            </a>

            <a
              href="#calculator"
              className="px-5 py-2 text-xs font-semibold rounded-full bg-obsidian-900 text-white hover:bg-neutral-800 transition flex items-center shadow-sm group"
            >
              <span>Re-Lens Now</span>
              <ArrowUpRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-neutral-800 hover:bg-black/5 transition"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#F6F5F2] border-b border-black/10 px-6 py-6 space-y-4 shadow-elevated animate-in fade-in slide-in-from-top-4">
            <nav className="flex flex-col space-y-3 text-base font-medium text-neutral-800">
              <a
                href="#relensing"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-accent-gold transition py-1"
              >
                Re-Lense Your Frames
              </a>
              <a
                href="#studio-3d"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-accent-gold transition py-1 flex items-center"
              >
                <Sparkles className="w-4 h-4 mr-2 text-accent-gold" />
                3D Eyewear Studio
              </a>
              <a
                href="#best-sellers"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-accent-gold transition py-1"
              >
                Best-Selling Frames
              </a>
              <a
                href="#vision-shield"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-accent-gold transition py-1"
              >
                Vision Shield Technology
              </a>
              <a
                href="#calculator"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-accent-gold transition py-1"
              >
                Prescription & Pricing Calculator
              </a>
              <a
                href="#dmv-section"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-accent-gold transition py-1"
              >
                NY DMV Eye Exams
              </a>
              <a
                href="#reviews"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-accent-gold transition py-1"
              >
                Patient Reviews
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-accent-gold transition py-1"
              >
                Visit & Contact Us
              </a>
            </nav>

            <div className="pt-4 border-t border-black/10 flex flex-col gap-3">
              <a
                href={`tel:${SITE_INFO.phone}`}
                className="w-full text-center py-2.5 rounded-full border border-black/15 font-semibold text-sm flex items-center justify-center text-obsidian-900"
              >
                <Phone className="w-4 h-4 mr-2 text-accent-gold" />
                Call Mauricio: {SITE_INFO.phoneFormatted}
              </a>
              <a
                href={SITE_INFO.orderContactsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-2.5 rounded-full bg-obsidian-900 text-white font-semibold text-sm flex items-center justify-center"
              >
                Order Contacts Online
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
