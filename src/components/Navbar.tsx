import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, ArrowUpRight, Plus, Eye, ShoppingBag, Mail } from 'lucide-react';
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
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#EBF3FA]/90 backdrop-blur-md shadow-sm border-b border-blue-200/50 py-3'
          : 'bg-[#EBF3FA]/70 backdrop-blur-xs py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Logo */}
        <a href="#" className="flex items-center group">
          <img
            src="/assets/logo.png"
            alt="ReLense"
            className="h-8 sm:h-9 w-auto object-contain transition-transform group-hover:scale-[1.02]"
          />
          <span className="sr-only">ReLense</span>
        </a>

        {/* Center Minimal Navigation Links matching Screenshot */}
        <nav className="hidden md:flex items-center space-x-9 text-[13px] font-medium tracking-wide text-neutral-700">
          <a href="#best-sellers" className="hover:text-electric-600 transition">
            Shop
          </a>
          <a href="#relensing" className="hover:text-electric-600 transition">
            Services
          </a>
          <a href="#studio-3d" className="hover:text-electric-600 transition">
            Eyewear
          </a>
          <a href="#vision-shield" className="hover:text-electric-600 transition">
            Glasses
          </a>
          <a href="#reviews" className="hover:text-electric-600 transition">
            About
          </a>
        </nav>

        {/* Right Actions matching Screenshot: 'Customize +' pill + circle icon */}
        <div className="hidden sm:flex items-center space-x-3">
          <a
            href={SITE_INFO.orderContactsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-medium text-neutral-600 hover:text-electric-600 transition px-2 py-1"
          >
            Order Contacts
          </a>

          <div className="flex items-center space-x-2">
            <a
              href="#contact"
              className="px-5 py-2 text-xs font-semibold rounded-full border border-black/15 bg-white text-obsidian-900 hover:border-black/40 hover:bg-neutral-50 transition tracking-wide shadow-xs"
            >
              Contact
            </a>

            <a
              href={`mailto:${SITE_INFO.email}`}
              className="w-8 h-8 rounded-full bg-obsidian-900 text-white flex items-center justify-center hover:bg-neutral-800 transition shadow-sm"
              title={`Email Mauricio: ${SITE_INFO.email}`}
            >
              <Mail className="w-3.5 h-3.5 text-white" />
            </a>

            <a
              href="#best-sellers"
              className="px-3.5 py-2 rounded-full bg-white border border-blue-200/80 hover:border-blue-300 transition flex items-center space-x-1.5 shadow-xs text-xs font-semibold text-obsidian-900 ml-1"
              title="Store Cart"
            >
              <ShoppingBag className="w-3.5 h-3.5 text-electric-600" />
              <span className="text-[11px] font-mono">0</span>
            </a>
          </div>
        </div>

        {/* Mobile Menu Trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-xl text-neutral-800 hover:bg-white/60 transition"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Slide-Down Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#EBF3FA] border-b border-blue-200/60 px-6 py-6 space-y-4 shadow-elevated animate-in fade-in slide-in-from-top-2">
          <nav className="flex flex-col space-y-3 text-sm font-medium text-neutral-800">
            <a
              href="#best-sellers"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-electric-600 transition py-1"
            >
              Shop Eyewear
            </a>
            <a
              href="#relensing"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-electric-600 transition py-1"
            >
              Services & Re-Lensing
            </a>
            <a
              href="#studio-3d"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-electric-600 transition py-1"
            >
              3D Eyewear Studio
            </a>
            <a
              href="#vision-shield"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-electric-600 transition py-1"
            >
              Eye Protect Tech
            </a>
            <a
              href="#calculator"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-electric-600 transition py-1"
            >
              Prescription & Pricing Calculator
            </a>
            <a
              href="#dmv-section"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-electric-600 transition py-1"
            >
              NY DMV Vision Exams
            </a>
            <a
              href="#reviews"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-electric-600 transition py-1"
            >
              Patient Reviews
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-electric-600 transition py-1"
            >
              Contact & Location
            </a>
          </nav>

          <div className="pt-4 border-t border-blue-200/60 flex flex-col gap-2.5">
            <a
              href={`tel:${SITE_INFO.phone}`}
              className="w-full text-center py-2.5 rounded-full bg-obsidian-900 text-white font-semibold text-xs flex items-center justify-center space-x-2"
            >
              <Phone className="w-3.5 h-3.5 text-accent-gold" />
              <span>Call Mauricio ({SITE_INFO.phoneFormatted})</span>
            </a>
            <a
              href={SITE_INFO.orderContactsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-2.5 rounded-full bg-white border border-black/15 font-semibold text-xs text-obsidian-900 flex items-center justify-center"
            >
              Order Contacts Online
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
