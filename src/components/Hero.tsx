import React from 'react';
import { ArrowUpRight, Sparkles, ShieldCheck, CheckCircle2, Play, Glasses } from 'lucide-react';
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
              
              {/* Floating Badge: Upper-Left 'PRO LENS - The Ultimate Duo - Clarity & Confidence' */}
              <div className="absolute -top-5 -left-3 sm:-left-6 z-30 bg-white/95 backdrop-blur-md px-3.5 py-2.5 rounded-2xl shadow-card border border-blue-100/80 flex items-center space-x-2.5 animate-float-slow">
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-100 text-electric-700 tracking-wider">
                  PRO LENS
                </span>
                <div className="text-left">
                  <div className="text-[10px] text-neutral-400 font-medium leading-none">The Ultimate Duo —</div>
                  <div className="text-[11px] font-bold text-obsidian-900 mt-0.5">Clarity & Confidence</div>
                </div>
              </div>

              {/* Floating Badge: Lower-Left Circular Avatar 'PRECISION IN MOTION, ELEGANCE IN FORM.' */}
              <div className="absolute -bottom-4 -left-3 sm:-left-6 z-30 bg-white/95 backdrop-blur-md px-3 py-2 rounded-2xl shadow-card border border-blue-100/80 flex items-center space-x-2 animate-float-delayed">
                <div className="w-7 h-7 rounded-full overflow-hidden border border-black/10 flex-shrink-0">
                  <img
                    src="/assets/striped_shirt_model.jpg"
                    alt="Optician"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-[9px] font-mono tracking-wider text-neutral-600 uppercase font-semibold">
                  PRECISION IN MOTION, <br />
                  ELEGANCE IN FORM.
                </div>
              </div>

              {/* Main Model Photo with Chamfered Top-Left Cut Corner matching screenshot */}
              <div className="relative rounded-[32px] p-2 bg-gradient-to-b from-white to-blue-50/60 shadow-elevated">
                <div className="relative overflow-hidden rounded-[26px] cut-top-left bg-neutral-100 aspect-[4/5]">
                  <img
                    src="/assets/hero_model.jpg"
                    alt="Model wearing titanium prescription eyewear"
                    className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
                  />
                  {/* Soft Light Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />

                  {/* Overlaid Bottom Card Badge */}
                  <div className="absolute bottom-3 inset-x-3 bg-white/90 backdrop-blur-md p-2.5 sm:p-3 rounded-2xl border border-black/5 shadow-card flex items-center justify-between">
                    <div>
                      <div className="text-[10px] font-bold tracking-wider uppercase text-neutral-400">
                        In-House Optician
                      </div>
                      <div className="text-xs font-bold text-obsidian-900">
                        Mauricio's Precision Fitting
                      </div>
                    </div>
                    <span className="text-[10px] font-semibold px-2.5 py-0.5 rounded-full bg-blue-100 text-electric-700">
                      Freeport, NY
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Headlines & Actions matching screenshot */}
          <div className="lg:col-span-6 space-y-6 z-10">
            
            {/* Tag matching screenshot: '✦ EYE HEALTH AT 30'S' */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-blue-200/60 shadow-xs text-xs font-semibold tracking-wider uppercase text-obsidian-900">
              <span className="text-electric-600 font-bold">✦</span>
              <span>EYE HEALTH AT 30'S</span>
            </div>

            {/* Giant Headline matching screenshot: 'SEE THE 👓 DIFFERENCE' */}
            <div className="relative space-y-2">
              <div className="flex items-center gap-4">
                <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight text-obsidian-900 leading-[1.05]">
                  SEE THE
                </h1>
                {/* Minimalist Wireframe Glasses Vector Accent matching screenshot */}
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

              {/* Subtitle matching screenshot */}
              <p className="pt-2 text-sm sm:text-base text-neutral-600 max-w-lg font-normal leading-relaxed">
                Not just eyewear — a unique <strong className="font-semibold text-obsidian-900">blend of elegance</strong>, cutting-edge tech and affordability. Put brand-new custom lenses into your existing frames or explore our curated optics.
              </p>
            </div>

            {/* Action Buttons matching screenshot: 'Explore Glasses ►' + 'Starts From $9.99' */}
            <div className="flex flex-wrap items-center gap-4 pt-1">
              <a
                href="#relensing"
                className="px-6 py-3.5 rounded-full bg-obsidian-900 text-white font-semibold text-xs sm:text-sm hover:bg-neutral-800 transition shadow-elevated flex items-center space-x-2 group"
              >
                <span>Explore Glasses</span>
                <Play className="w-3 h-3 fill-white text-white transition-transform group-hover:translate-x-0.5" />
              </a>

              <div className="text-xs sm:text-sm text-neutral-500 font-medium">
                Starts From <span className="font-bold text-obsidian-900 text-sm sm:text-base">$49</span>
              </div>

              <a
                href="#calculator"
                className="px-5 py-3.5 rounded-full bg-white/80 hover:bg-white border border-blue-200/80 font-semibold text-xs sm:text-sm text-obsidian-900 transition shadow-xs"
              >
                Re-Lens Calculator
              </a>
            </div>

            {/* Micro Trust Pills */}
            <div className="pt-2 flex flex-wrap items-center gap-3 text-xs text-neutral-500">
              <span className="flex items-center space-x-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-electric-600" />
                <span>Save Up to 70%</span>
              </span>
              <span>•</span>
              <span className="flex items-center space-x-1">
                <ShieldCheck className="w-3.5 h-3.5 text-electric-600" />
                <span>20+ Yrs Freeport Lab</span>
              </span>
              <span>•</span>
              <span className="flex items-center space-x-1">
                <Sparkles className="w-3.5 h-3.5 text-electric-600" />
                <span>NY DMV Walk-Ins</span>
              </span>
            </div>

          </div>

        </div>

        {/* Mid-Hero Banner Section matching screenshot */}
        <div className="mt-16 pt-10 border-t border-blue-200/60">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Box: '$9 / $49' Pill + 'Revolutionizing vision with trend setting eyewear that speaks your style. 👓' */}
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-white shadow-xs border border-blue-200/60 text-xs font-bold text-obsidian-900">
                <Glasses className="w-3.5 h-3.5 text-electric-600" />
                <span>$49</span>
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-obsidian-900 leading-snug">
                Revolutionizing vision with <br />
                trend setting eyewear that <br />
                speaks your style.{' '}
                <span className="inline-block text-xl">👓</span>
              </h2>

              <p className="text-xs sm:text-sm text-neutral-500 max-w-md leading-relaxed">
                Handcrafted accuracy cut by Master Optician Mauricio in our Freeport lab with diamond anti-glare coatings.
              </p>
            </div>

            {/* Center Box: White Pedestals Display with 3 Pairs of Eyewear matching screenshot */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="relative w-full max-w-xs rounded-3xl overflow-hidden bg-white p-2 shadow-card border border-blue-100/80 group">
                <div className="aspect-square rounded-2xl overflow-hidden bg-[#F4F9FD]">
                  <img
                    src="/assets/stacked_pedestals_glasses.jpg"
                    alt="Eyewear on museum pedestals"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-3 text-center">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-neutral-400">
                    Artisan Frames & Lenses
                  </span>
                  <div className="text-xs font-bold text-obsidian-900 mt-0.5">
                    Curated Freeport Collection
                  </div>
                </div>
              </div>
            </div>

            {/* Right Box: 'Eye Protecting Tools' with Leather Box Case matching screenshot */}
            <div className="lg:col-span-3 flex justify-center lg:justify-end">
              <div className="w-full max-w-[220px] bg-white rounded-3xl p-4 shadow-card border border-blue-100/80 space-y-3">
                <div className="text-xs font-bold text-neutral-700 flex items-center justify-between">
                  <span>Eye Protecting Tools</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-electric-600" />
                </div>
                <div className="aspect-[4/3] rounded-xl overflow-hidden bg-cream-100">
                  <img
                    src="/assets/eyewear_case.jpg"
                    alt="Leather eyewear case tools"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-[11px] text-neutral-500 text-center">
                  Full protective case & microfiber kit with every order
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
