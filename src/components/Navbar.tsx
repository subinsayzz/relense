import React, { useState, useEffect } from 'react';
import { Mail, Phone, Menu, X, ArrowUpRight } from 'lucide-react';
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
          ? 'bg-[#F6F5F2]/90 backdrop-blur-md shadow-sm border-b border-black/5 py-3'
          : 'bg-[#F6F5F2]/60 backdrop-blur-xs py-4 sm:py-5'
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

        {/* Minimal Editorial Navigation Links matching Dribbble inspiration */}
        <nav className="hidden md:flex items-center space-x-8 text-[13px] font-medium tracking-wide text-neutral-600">
          <a href="#relensing" className="hover:text-black transition">
            Services
          </a>
          <a href="#best-sellers" className="hover:text-black transition">
            Eyewear
          </a>
          <a href="#studio-3d" className="hover:text-black transition">
            3D Studio
          </a>
          <a href="#vision-shield" className="hover:text-black transition">
            Vision Shield
          </a>
          <a href="#dmv-section" className="hover:text-black transition">
            DMV Exams
          </a>
          <a href="#reviews" className="hover:text-black transition">
            About
          </a>
        </nav>

        {/* Right Actions matching Screenshot: Sleek Pill + Circle Icon */}
        <div className="hidden sm:flex items-center space-x-3">
          <a
            href={SITE_INFO.orderContactsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-medium text-neutral-600 hover:text-black transition px-2 py-1"
          >
            Order Contacts
          </a>

          <div className="flex items-center space-x-1.5">
            <a
              href="#contact"
              className="px-5 py-2 text-xs font-semibold rounded-full border border-black/15 text-obsidian-900 hover:border-black/40 hover:bg-black/5 transition tracking-wide"
            >
              Contact
            </a>
            <a
              href={`tel:${SITE_INFO.phone}`}
              className="w-8 h-8 rounded-full bg-obsidian-900 text-white flex items-center justify-center hover:bg-neutral-800 transition shadow-sm"
              title={`Call Mauricio: ${SITE_INFO.phoneFormatted}`}
            >
              <Phone className="w-3.5 h-3.5 text-accent-gold" />
            </a>
          </div>
        </div>

        {/* Mobile Menu Trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-xl text-neutral-800 hover:bg-black/5 transition"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Slide-Down Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#F6F5F2] border-b border-black/10 px-6 py-6 space-y-4 shadow-elevated animate-in fade-in slide-in-from-top-2">
          <nav className="flex flex-col space-y-3 text-sm font-medium text-neutral-800">
            <a
              href="#relensing"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-accent-gold transition py-1"
            >
              Services & Re-Lensing
            </a>
            <a
              href="#best-sellers"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-accent-gold transition py-1"
            >
              Eyewear Collection
            </a>
            <a
              href="#studio-3d"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-accent-gold transition py-1"
            >
              3D Eyewear Studio
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
              NY DMV Vision Exams
            </a>
            <a
              href="#reviews"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-accent-gold transition py-1"
            >
              Patient Testimonials
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-accent-gold transition py-1"
            >
              Contact & Location
            </a>
          </nav>

          <div className="pt-4 border-t border-black/10 flex flex-col gap-2.5">
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
              className="w-full text-center py-2.5 rounded-full border border-black/15 font-semibold text-xs text-obsidian-900 flex items-center justify-center"
            >
              Order Contacts Portal
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
