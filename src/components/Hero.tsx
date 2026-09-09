import React, { useState } from 'react';
import { ArrowUpRight, Sparkles, ShieldCheck, CheckCircle2, ChevronRight, ChevronLeft, Play, Eye } from 'lucide-react';
import { SITE_INFO } from '../data/content';

export const Hero: React.FC = () => {
  const [carouselIndex, setCarouselIndex] = useState(0);

  const previewFrames = [
    { name: 'ROVE Wireframe', color: 'Titanium Slate', img: 'https://images.unsplash.com/photo-1577803645773-f96470509666?auto=format&fit=crop&w=600&q=80' },
    { name: 'VERA Soft Cat-Eye', color: 'Honey Amber', img: 'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?auto=format&fit=crop&w=600&q=80' },
  ];

  return (
    <section className="relative pt-6 pb-16 lg:pt-10 lg:pb-20 overflow-hidden bg-gradient-to-b from-[#EBF3FA] via-[#E4F0F9] to-[#DFEDF8]">
      
      {/* Soft Ambient Sky Blur */}
      <div className="absolute -top-10 right-1/4 w-[500px] h-[500px] bg-blue-200/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-white/60 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Hero Layout: Left Typography & Right Framed Model Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & Actions */}
          <div className="lg:col-span-6 space-y-6 z-10">
            
            {/* Tag matching screenshot: '✦ 👁 Eye health at 30's' */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-blue-200/60 shadow-xs text-xs font-semibold tracking-wide text-obsidian-900">
              <span className="text-electric-600 font-bold">✦</span>
              <span className="text-sm">👁</span>
              <span>Eye health at 30's</span>
            </div>

            {/* Giant Bold Headline: 'OPTICS ELEVATION' */}
            <div className="relative">
              <div className="flex items-center gap-3">
                <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight text-obsidian-900 leading-[1.05]">
                  OPTICS <br />
                  <span className="font-normal tracking-wide flex items-center">
                    ELEVATION
                  </span>
                </h1>
                {/* 3D Glass Iris Sphere Accent matching screenshot */}
                <div className="hidden sm:flex w-14 h-14 rounded-full bg-gradient-to-br from-blue-300 via-sky-500 to-indigo-700 p-0.5 shadow-card animate-float-slow items-center justify-center">
                  <div className="w-full h-full rounded-full bg-white/30 backdrop-blur-xs flex items-center justify-center border border-white/60">
                    <div className="w-5 h-5 rounded-full bg-obsidian-900 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-sky-200" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Subtitle matching screenshot */}
              <p className="mt-5 text-sm sm:text-base text-neutral-600 max-w-lg font-normal leading-relaxed">
                Not just eyewear — a unique <strong className="font-semibold text-obsidian-900">blend of elegance</strong>, cutting-edge tech and affordability. Put brand-new custom lenses into your existing frames or explore our curated optics.
              </p>
            </div>

            {/* Action Buttons matching Screenshot: 'Starts From $9.99' + 'Discover Glasses ►' */}
            <div className="flex flex-wrap items-center gap-4 pt-1">
              <div className="text-xs sm:text-sm text-neutral-500 font-medium">
                Starts From <span className="font-bold text-obsidian-900 text-sm sm:text-base">$49</span>
              </div>

              <a
                href="#relensing"
                className="px-6 py-3.5 rounded-full bg-obsidian-900 text-white font-semibold text-xs sm:text-sm hover:bg-neutral-800 transition shadow-elevated flex items-center space-x-2 group"
              >
                <span>Discover Glasses</span>
                <Play className="w-3 h-3 fill-white text-white transition-transform group-hover:translate-x-0.5" />
              </a>

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

          {/* Right Column matching Screenshot: Cut-Corner Card with Curly-Haired Model & Floating Badges */}
          <div className="lg:col-span-6 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[460px]">
              
              {/* Floating Badge: Top Right 'The Ultimate Duo - Clarity & Confidence' */}
              <div className="absolute -top-4 -right-2 sm:-right-4 z-30 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl shadow-card border border-blue-100/80 flex items-center space-x-2 animate-float-slow">
                <div className="w-6 h-6 rounded-full bg-electric-500/15 flex items-center justify-center text-electric-600 font-bold text-xs">
                  RL
                </div>
                <div className="text-left">
                  <div className="text-[10px] text-neutral-400 font-medium">The Ultimate Duo —</div>
                  <div className="text-[11px] font-bold text-obsidian-900">Clarity & Confidence</div>
                </div>
              </div>

              {/* Main Model Photo with Top-Left Cut Corner */}
              <div className="relative rounded-[32px] p-2 bg-gradient-to-b from-white to-blue-50/60 shadow-elevated">
                <div className="relative overflow-hidden rounded-[26px] cut-corner-card-alt bg-neutral-100 aspect-[4/5]">
                  <img
                    src="/assets/hero_woman.jpg"
                    alt="Woman wearing stylish optical eyeglasses"
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                  />
                  {/* Soft Light Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />

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
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-blue-100 text-electric-700">
                      Freeport, NY
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Card: Right Side 'Eye Protecting Tools' matching Screenshot */}
              <div className="absolute top-1/2 -right-3 sm:-right-8 -translate-y-1/2 z-30 bg-white/95 backdrop-blur-md p-2.5 rounded-2xl shadow-elevated border border-blue-100/80 w-36 sm:w-40 space-y-1.5 animate-float-delayed">
                <div className="text-[10px] font-bold uppercase tracking-wider text-neutral-400">
                  Eye Protecting Tools
                </div>
                <div className="aspect-[4/3] rounded-xl overflow-hidden bg-cream-100">
                  <img
                    src="/assets/eyewear_case.jpg"
                    alt="Eye Protecting Tools Box"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Bottom Caption matching Screenshot */}
              <div className="mt-3 text-right">
                <span className="text-[10px] sm:text-xs font-mono font-medium tracking-widest text-neutral-500 uppercase">
                  PRECISION IN MOTION, ELEGANCE IN FORM.
                </span>
              </div>

            </div>
          </div>

        </div>

        {/* Lower Banner Strip matching Screenshot */}
        <div className="mt-14 pt-8 border-t border-blue-200/50">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            
            {/* Left Box: 'Your Eyecare Solutions' with Blue Cloth & Glasses Photo */}
            <div className="md:col-span-4 bg-white rounded-2xl p-4 shadow-card border border-blue-100/80 flex items-center justify-between cut-top-right group hover:shadow-elevated transition">
              <div className="space-y-1">
                <div className="flex items-center space-x-1 text-xs font-bold text-obsidian-900">
                  <span>Your Eyecare Solutions</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-electric-600 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
                <p className="text-[11px] text-neutral-500">
                  Custom lab cutting for any frame
                </p>
              </div>
              <div className="w-16 h-16 rounded-xl overflow-hidden bg-blue-50 flex-shrink-0 ml-3">
                <img
                  src="/assets/blue_cloth_glasses.jpg"
                  alt="Eyecare solutions cloth"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Center Text: 'Transforming vision with fast-forward eyewear that defines your style.' */}
            <div className="md:col-span-4 space-y-2 text-center md:text-left px-2">
              <h3 className="font-serif text-lg sm:text-xl text-obsidian-900 leading-snug">
                Transforming vision with fast-forward eyewear that defines your style.
              </h3>
              <a
                href="#calculator"
                className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-electric-600 hover:text-electric-700 transition"
              >
                <span>CHOICE LENS &gt;</span>
              </a>
            </div>

            {/* Right Box: Minimal Wire Frame Preview with Carousel Arrows */}
            <div className="md:col-span-4 bg-white rounded-2xl p-4 shadow-card border border-blue-100/80 flex items-center justify-between">
              <div className="space-y-0.5">
                <div className="text-xs font-bold text-obsidian-900">
                  {previewFrames[carouselIndex].name}
                </div>
                <div className="text-[11px] text-neutral-500">
                  {previewFrames[carouselIndex].color}
                </div>
              </div>

              <div className="w-20 h-12 rounded-lg overflow-hidden bg-neutral-50 flex items-center justify-center">
                <img
                  src={previewFrames[carouselIndex].img}
                  alt={previewFrames[carouselIndex].name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex items-center space-x-1 pl-2">
                <button
                  onClick={() => setCarouselIndex((carouselIndex + 1) % previewFrames.length)}
                  className="w-6 h-6 rounded-full bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center text-neutral-700 transition"
                  aria-label="Previous frame"
                >
                  <ChevronLeft className="w-3 h-3" />
                </button>
                <button
                  onClick={() => setCarouselIndex((carouselIndex + 1) % previewFrames.length)}
                  className="w-6 h-6 rounded-full bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center text-neutral-700 transition"
                  aria-label="Next frame"
                >
                  <ChevronRight className="w-3 h-3" />
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
