import React from 'react';
import { Send, FileText, Sparkles, Truck, ArrowRight, ShieldCheck, HeartHandshake, Leaf, PackageCheck, Phone } from 'lucide-react';
import { SITE_INFO } from '../data/content';

export const ReLensProcess: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Frame Selection & Swaps',
      desc: 'Bring your beloved frames to 37B Guy Lombardo Ave, find new frames for existing lenses within minutes, or request a prepaid mail-in box.',
      icon: Send,
    },
    {
      step: '02',
      title: 'Rx & Lensometer Reading',
      desc: 'Upload your Rx, let Mauricio read your power with our computerized digital lensometer, or take an official 5-minute walk-in vision test.',
      icon: FileText,
    },
    {
      step: '03',
      title: 'In-House Precision Crafting',
      desc: 'Master Optician Mauricio cuts your lenses on-site — from Shamir progressive optics to custom magnetic clip-ons and Glacier Expressions AR.',
      icon: Sparkles,
    },
    {
      step: '04',
      title: '24h Pickup or Delivery',
      desc: 'Pick up your glasses in as fast as 24 hours with municipal parking right across the street, curbside fitting, or nationwide tracked shipping.',
      icon: Truck,
    },
  ];

  return (
    <section id="relensing" className="py-20 bg-gradient-to-b from-[#DFEDF8] via-[#E8F2FA] to-[#DFEDF8] relative overflow-hidden">
      
      {/* Soft Ambient Sky Blurs */}
      <div className="absolute top-0 right-10 w-96 h-96 bg-blue-200/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-white/60 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Philosophy Callout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end mb-16">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-blue-200/60 shadow-xs text-xs font-semibold uppercase tracking-wider text-obsidian-900">
              <Leaf className="w-3.5 h-3.5 text-electric-600" />
              <span>Sustainable & Cost-Effective Eyecare</span>
            </div>
            
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-obsidian-900 leading-tight">
              What Makes Us — <br />
              <span className="italic font-normal">Use Your Existing Eyewear</span>
            </h2>

            <p className="text-sm sm:text-base text-neutral-600 max-w-2xl leading-relaxed">
              {SITE_INFO.taglines.reLensPhilosophy}
            </p>
          </div>

          <div className="lg:col-span-5 bg-white rounded-3xl p-7 border border-blue-100/80 shadow-card flex flex-col justify-between space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                Optical Patient Savings
              </span>
              <span className="text-xs font-bold text-electric-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200/60">
                Save Up to 70% Off Retail
              </span>
            </div>
            <div className="text-xl sm:text-2xl font-serif text-obsidian-900 leading-snug">
              "We understand that sometimes you just love the frame you already have."
            </div>
            <div className="text-xs text-neutral-500 flex items-center justify-between pt-2 border-t border-neutral-100">
              <span>Why pay $400+ for designer frames when yours has years of life?</span>
              <a href="#contact" className="font-bold text-electric-600 hover:text-electric-700 whitespace-nowrap ml-2">
                Inquire Now →
              </a>
            </div>
          </div>
        </div>

        {/* 4 Steps Visual Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="group relative bg-white rounded-3xl p-7 transition-all duration-300 border border-blue-100/80 shadow-card hover:shadow-elevated hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-serif text-3xl font-light text-neutral-300 group-hover:text-electric-600 transition">
                      {item.step}
                    </span>
                    <div className="w-11 h-11 rounded-2xl bg-blue-50 group-hover:bg-obsidian-900 group-hover:text-white transition flex items-center justify-center text-electric-600 shadow-xs border border-blue-100/60">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-serif text-xl font-medium text-obsidian-900 mb-2.5">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between text-xs font-semibold text-neutral-400 group-hover:text-obsidian-900 transition">
                  <span>Step {idx + 1} of 4</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1 text-electric-600" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Master Optician Craftsmanship Feature Card */}
        <div className="mt-16 bg-white rounded-3xl overflow-hidden shadow-elevated border border-blue-100/80 grid grid-cols-1 lg:grid-cols-12 items-center">
          
          {/* Photo: Mauricio Inspecting Prescription Lenses */}
          <div className="lg:col-span-5 aspect-[4/3] lg:aspect-auto lg:h-full bg-neutral-100 relative overflow-hidden">
            <img
              src="/assets/mauricio_lens_craft.jpg"
              alt="Master Optician Mauricio inspecting prescription lenses at ReLense Optical Freeport NY"
              className="w-full h-full object-cover object-[center_25%] hover:scale-105 transition-transform duration-700"
            />
            <span className="absolute top-3 left-3 text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full bg-black/75 text-white backdrop-blur-xs flex items-center space-x-1.5 border border-white/15">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>In-House Precision Lab</span>
            </span>
          </div>

          {/* Details & Re-Lensing Guarantee */}
          <div className="lg:col-span-7 p-7 sm:p-10 space-y-4">
            <div className="space-y-1.5">
              <span className="text-xs font-bold uppercase tracking-wider text-electric-600">
                Master Optician Hands-On Care
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-obsidian-900 font-medium">
                Precision Hand-Beveling & Lens Edging
              </h3>
            </div>

            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
              Every pair of lenses is custom-measured, cut, and hand-inspected on-site by Master Optician Mauricio at 37B Guy Lombardo Ave in Freeport. Whether you are re-lensing your beloved vintage frames from $49, upgrading to Shamir Auto Intelligence™ digital progressives, or need urgent 24-hour emergency lenses, we guarantee exact prescription fidelity with zero edge distortion.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs">
              <div className="p-2.5 rounded-xl bg-blue-50/60 border border-blue-100 text-obsidian-900 font-medium text-center">
                Carl Zeiss Standards
              </div>
              <div className="p-2.5 rounded-xl bg-blue-50/60 border border-blue-100 text-obsidian-900 font-medium text-center">
                24h Emergency Service
              </div>
              <div className="p-2.5 rounded-xl bg-blue-50/60 border border-blue-100 text-obsidian-900 font-medium text-center">
                Zero Sales Pressure
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="px-5 py-2.5 rounded-full bg-obsidian-900 hover:bg-neutral-800 text-white font-semibold text-xs transition shadow-elevated"
              >
                Inquire & Visit Store
              </a>
              <a
                href={`tel:${SITE_INFO.phone}`}
                className="px-5 py-2.5 rounded-full bg-white border border-neutral-300 hover:border-neutral-400 text-obsidian-900 font-semibold text-xs transition shadow-xs flex items-center space-x-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-electric-600" />
                <span>Call: {SITE_INFO.phoneFormatted}</span>
              </a>
            </div>
          </div>

        </div>

        {/* Store Trust & Guarantees Ribbon */}
        <div className="mt-12 p-7 sm:p-8 rounded-3xl bg-obsidian-900 text-white shadow-elevated grid grid-cols-2 md:grid-cols-4 gap-6 text-center border border-white/10">
          <div className="space-y-1">
            <div className="font-serif text-3xl sm:text-4xl text-blue-200">20+</div>
            <div className="text-xs uppercase tracking-wider text-blue-100/70 font-medium">
              Years Freeport Optical Lab
            </div>
          </div>
          <div className="space-y-1">
            <div className="font-serif text-3xl sm:text-4xl text-blue-200">100%</div>
            <div className="text-xs uppercase tracking-wider text-blue-100/70 font-medium">
              Rx Accuracy Guarantee
            </div>
          </div>
          <div className="space-y-1">
            <div className="font-serif text-3xl sm:text-4xl text-blue-200">50 States</div>
            <div className="text-xs uppercase tracking-wider text-blue-100/70 font-medium">
              Mail-In & Store Pickup
            </div>
          </div>
          <div className="space-y-1">
            <div className="font-serif text-3xl sm:text-4xl text-blue-200">HSA / FSA</div>
            <div className="text-xs uppercase tracking-wider text-blue-100/70 font-medium">
              Eligible Optical Purchase
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
