import React from 'react';
import { ArrowUpRight, Sparkles, ShieldCheck, CheckCircle2, Play, Glasses, Star, Phone } from 'lucide-react';
import { SITE_INFO } from '../data/content';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-6 pb-16 lg:pt-10 lg:pb-20 overflow-hidden bg-gradient-to-b from-[#EBF3FA] via-[#E4F0F9] to-[#DFEDF8]">
      
      {/* Soft Ambient Sky Blurs */}
      <div className="absolute -top-10 left-1/4 w-[500px] h-[500px] bg-blue-200/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-white/60 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Hero Layout matching screenshot: Model on LEFT, Headline on RIGHT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Chamfered Card with Male Model & Floating Badges */}
          <div className="lg:col-span-6 relative flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[460px]">
              
              {/* Floating Badge: Upper-Left 'MASTER OPTICIAN - In-House Optical Lab - Mauricio's Custom Fitting' */}
              <div className="absolute -top-5 -left-3 sm:-left-6 z-30 bg-white/95 backdrop-blur-md px-3.5 py-2.5 rounded-2xl shadow-card border border-blue-100/80 flex items-center space-x-2.5 animate-float-slow">
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-100 text-electric-700 tracking-wider">
                  MASTER OPTICIAN
                </span>
                <div className="text-left">
                  <div className="text-[10px] text-neutral-400 font-medium leading-none">In-House Optical Lab —</div>
                  <div className="text-[11px] font-bold text-obsidian-900 mt-0.5">Mauricio's Precision Craft</div>
                </div>
              </div>

              {/* Floating Badge: Lower-Left Status Badge */}
              <div className="absolute -bottom-4 -left-3 sm:-left-6 z-30 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl shadow-card border border-blue-100/80 flex items-center space-x-2 animate-float-delayed">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <div className="text-[10px] font-mono tracking-wider text-neutral-700 uppercase font-bold">
                  Freeport Flagship Lab · 37B Guy Lombardo
                </div>
              </div>

              {/* Main Photo: Master Optician Mauricio at Storefront Entrance */}
              <div className="relative rounded-[32px] p-2 bg-gradient-to-b from-white to-blue-50/60 shadow-elevated">
                <div className="relative overflow-hidden rounded-[26px] cut-top-left bg-neutral-100 aspect-[4/5] sm:aspect-[4/5]">
                  <img
                    src="/assets/mauricio_storefront_portrait.jpg"
                    alt="Master Optician Mauricio outside ReLense Optical at 37B Guy Lombardo Ave Freeport NY"
                    className="w-full h-full object-cover object-[center_18%] hover:scale-105 transition-transform duration-700"
                  />
                  {/* Soft Light Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

                  {/* Overlaid Bottom Card Badge */}
                  <div className="absolute bottom-3 inset-x-3 bg-white/95 backdrop-blur-md p-2.5 sm:p-3 rounded-2xl border border-black/5 shadow-card flex items-center justify-between">
                    <div>
                      <div className="text-[10px] font-bold tracking-wider uppercase text-neutral-400">
                        Master Optician & Owner
                      </div>
                      <div className="text-xs font-bold text-obsidian-900">
                        Mauricio · 20+ Yrs Freeport
                      </div>
                    </div>
                    <span className="text-[10px] font-semibold px-2.5 py-0.5 rounded-full bg-blue-100 text-electric-700 flex items-center space-x-1">
                      <span>Freeport, NY</span>
                      <span>•</span>
                      <span className="flex items-center">
                        <Star className="w-2.5 h-2.5 fill-electric-700 text-electric-700 mr-0.5" />
                        5.0
                      </span>
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Headlines & Actions matching screenshot */}
          <div className="lg:col-span-6 space-y-6 z-10">
            
            {/* Tag: 'IN-HOUSE OPTICAL LAB & BOUTIQUE' */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-blue-200/60 shadow-xs text-xs font-semibold tracking-wider uppercase text-obsidian-900">
              <Sparkles className="w-3 h-3 text-electric-600" />
              <span>IN-HOUSE PRECISION LAB & RE-LENSING</span>
            </div>

            {/* Giant Headline: 'SEE THE DIFFERENCE' */}
            <div className="relative space-y-2">
              <div className="flex items-center gap-4">
                <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight text-obsidian-900 leading-[1.05]">
                  SEE THE
                </h1>
                {/* Minimalist Wireframe Glasses Vector Accent */}
                <div className="hidden sm:inline-flex items-center justify-center px-2 py-1 rounded-full border border-obsidian-900/40 text-obsidian-900">
                  <svg className="w-12 h-6 text-obsidian-900" viewBox="0 0 48 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="14" cy="12" r="8" />
                    <circle cx="34" cy="12" r="8" />
                    <path d="M22 12h4" />
                    <path d="M6 12L2 9" />
                    <path d="M42 12l4-3" />
                  </svg>
                </div>
              </div>
              <div className="font-serif text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight text-obsidian-900 leading-[1.05]">
                DIFFERENCE
              </div>

              {/* Subtitle - enriched with SEO keywords */}
              <p className="pt-2 text-sm sm:text-base text-neutral-600 max-w-lg font-normal leading-relaxed">
                Freeport’s top-rated optical laboratory. Put brand-new custom lenses into your favorite frames, get <strong className="font-semibold text-obsidian-900">24-hour emergency glasses</strong>, or explore <strong className="font-semibold text-obsidian-900">Shamir digital progressives</strong> & custom magnetic clip-ons with Master Optician Mauricio.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href="#relensing"
                className="px-6 py-3.5 rounded-full bg-obsidian-900 text-white font-semibold text-xs sm:text-sm hover:bg-neutral-800 transition shadow-elevated flex items-center space-x-2 group"
              >
                <span>Explore Re-Lensing</span>
                <Play className="w-3 h-3 fill-white text-white transition-transform group-hover:translate-x-0.5" />
              </a>

              <a
                href="#contact"
                className="px-5 py-3.5 rounded-full bg-white/90 hover:bg-white border border-blue-200/80 font-semibold text-xs sm:text-sm text-obsidian-900 transition shadow-xs"
              >
                Visit Store & Lab
              </a>

              <a
                href={`tel:${SITE_INFO.phone}`}
                className="px-4 py-3.5 rounded-full bg-white/90 hover:bg-white border border-blue-200/80 text-obsidian-900 font-semibold text-xs sm:text-sm transition shadow-xs flex items-center space-x-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-electric-600" />
                <span>{SITE_INFO.phoneFormatted}</span>
              </a>
            </div>

            {/* Micro Trust Pills */}
            <div className="pt-2 flex flex-wrap items-center gap-3 text-xs text-neutral-500">
              <span className="flex items-center space-x-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-electric-600" />
                <span>24h Emergency Glasses</span>
              </span>
              <span>•</span>
              <span className="flex items-center space-x-1">
                <ShieldCheck className="w-3.5 h-3.5 text-electric-600" />
                <span>5.0 Star Rated (17 Reviews)</span>
              </span>
              <span>•</span>
              <span className="flex items-center space-x-1">
                <Sparkles className="w-3.5 h-3.5 text-electric-600" />
                <span>CareCredit & HSA/FSA</span>
              </span>
            </div>

          </div>

        </div>

        {/* Streamlined Services Ribbon */}
        <div className="mt-14 pt-8 border-t border-blue-200/60 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <div className="bg-white/80 backdrop-blur-xs p-4 rounded-2xl border border-blue-100/80 shadow-xs space-y-1">
            <div className="text-xs font-bold text-obsidian-900">Same-Day & 24h Service</div>
            <div className="text-[11px] text-neutral-500">Emergency lens cut & frame repairs</div>
          </div>
          <div className="bg-white/80 backdrop-blur-xs p-4 rounded-2xl border border-blue-100/80 shadow-xs space-y-1">
            <div className="text-xs font-bold text-obsidian-900">Re-Lens from $49</div>
            <div className="text-[11px] text-neutral-500">New lenses in your existing frames</div>
          </div>
          <div className="bg-white/80 backdrop-blur-xs p-4 rounded-2xl border border-blue-100/80 shadow-xs space-y-1">
            <div className="text-xs font-bold text-obsidian-900">Shamir Digital Progressives</div>
            <div className="text-[11px] text-neutral-500">Auto Intelligence™ & custom clip-ons</div>
          </div>
          <div className="bg-white/80 backdrop-blur-xs p-4 rounded-2xl border border-blue-100/80 shadow-xs space-y-1">
            <div className="text-xs font-bold text-obsidian-900">5-Min NY DMV Exam ($25)</div>
            <div className="text-[11px] text-neutral-500">Walk-in with instant registry upload</div>
          </div>
        </div>

      </div>
    </section>
  );
};
