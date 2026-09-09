import React from 'react';
import { ArrowUpRight, Sparkles, ShieldCheck, CheckCircle2, ChevronRight } from 'lucide-react';
import { SITE_INFO } from '../data/content';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-6 pb-16 lg:pt-12 lg:pb-24 overflow-hidden">
      {/* Ambient background glow & subtle grid */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent-gold/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-accent-teal/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Hero Layout: Left Editorial Typography & Right Cut-Corner Model Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Headline & Actions */}
          <div className="lg:col-span-6 space-y-6 lg:space-y-8 z-10">
            {/* Top Pill Tag */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white border border-black/5 shadow-sm text-xs font-semibold uppercase tracking-wider text-obsidian-800">
              <span className="w-2 h-2 rounded-full bg-accent-gold animate-pulse" />
              <span>NY OPTICAL LAB · FREEPORT, NY</span>
              <span className="text-black/20">|</span>
              <span className="text-neutral-500 font-normal">EST. 2004</span>
            </div>

            {/* Headline with 3D Lens Accents */}
            <div className="relative">
              <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight text-obsidian-900 leading-[1.08]">
                SEE THE <br />
                <span className="italic font-normal relative inline-block">
                  DIFFERENCE
                  {/* Decorative 3D Lens Wireframe Element */}
                  <span className="hidden sm:inline-block ml-3 align-middle w-14 h-7 rounded-full border-2 border-accent-gold/70 bg-gradient-to-r from-accent-gold/20 to-transparent backdrop-blur-sm shadow-sm transform -rotate-12 animate-float-slow" />
                </span>
              </h1>

              {/* Subtitle */}
              <p className="mt-5 text-base sm:text-lg text-neutral-600 max-w-xl font-normal leading-relaxed">
                Not just eyewear — a unique <strong className="font-semibold text-neutral-900">blend of elegance, cutting-edge optics, and affordability</strong>. Send us your existing frames to be fitted with brand new precision lenses, or discover our bespoke collection.
              </p>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#relensing"
                className="px-7 py-3.5 rounded-full bg-obsidian-900 text-white font-medium text-sm hover:bg-neutral-800 transition shadow-elevated flex items-center group"
              >
                <span>Re-Lens Existing Frames</span>
                <div className="ml-2.5 w-6 h-6 rounded-full bg-white/10 flex items-center justify-center transition-transform group-hover:translate-x-0.5">
                  <ArrowUpRight className="w-3.5 h-3.5 text-white" />
                </div>
              </a>

              <a
                href="#best-sellers"
                className="px-6 py-3.5 rounded-full bg-white border border-black/10 font-medium text-sm text-neutral-800 hover:border-black/30 transition shadow-sm flex items-center"
              >
                <span>Explore Eyewear</span>
              </a>

              <div className="flex items-center space-x-1.5 text-xs text-neutral-500 font-medium pl-1">
                <span>Starts From</span>
                <span className="font-bold text-obsidian-900 text-sm">$49</span>
              </div>
            </div>

            {/* Floating Brand Trust Badges */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 border-t border-black/10 text-xs text-neutral-600">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-accent-teal flex-shrink-0" />
                <span>Save Up to 70%</span>
              </div>
              <div className="flex items-center space-x-2">
                <ShieldCheck className="w-4 h-4 text-accent-gold flex-shrink-0" />
                <span>20+ Yrs Lab Craft</span>
              </div>
              <div className="flex items-center space-x-2 col-span-2 sm:col-span-1">
                <Sparkles className="w-4 h-4 text-accent-amber flex-shrink-0" />
                <span>Fast NY DMV Tests</span>
              </div>
            </div>
          </div>

          {/* Right Column: Inspired by Dribbble Screen (Cut-Corner Card, Model Portrait, Badges) */}
          <div className="lg:col-span-6 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[480px]">
              
              {/* Floating Badge: Top Left '✦ PRO LENS' */}
              <div className="absolute -top-4 -left-4 sm:-left-8 z-30 bg-white/90 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-card border border-black/5 animate-float-slow">
                <div className="flex items-center space-x-1.5 text-[11px] font-bold text-accent-sky uppercase tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-accent-sky animate-ping" />
                  <span>PRO LENS LAB</span>
                </div>
                <div className="text-xs font-semibold text-obsidian-900 mt-0.5">
                  The Ultimate Duo — Clarity & Confidence
                </div>
              </div>

              {/* Floating Price Pill: '$49' */}
              <div className="absolute top-28 -left-6 z-30 bg-obsidian-900 text-white px-3.5 py-1.5 rounded-full shadow-elevated text-xs font-bold border border-white/10 animate-float-delayed">
                From $49
              </div>

              {/* Main Model Photo with Cut-Corner Chamfer Polygon */}
              <div className="relative rounded-[32px] p-2 bg-gradient-to-b from-white to-[#E8E4DC] shadow-elevated">
                <div className="relative overflow-hidden rounded-[26px] cut-corner-card bg-neutral-200 aspect-[4/5]">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=85"
                    alt="Man wearing stylish prescription frames"
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                  />
                  {/* Subtle Gradient Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

                  {/* Overlaid Bottom Card Badge */}
                  <div className="absolute bottom-4 inset-x-4 bg-white/90 backdrop-blur-md p-3.5 rounded-2xl border border-black/5 shadow-card flex items-center justify-between">
                    <div>
                      <div className="text-[11px] font-bold tracking-wider uppercase text-neutral-500">
                        In-House Optician
                      </div>
                      <div className="text-xs font-bold text-obsidian-900">
                        Mauricio's Precision Fitting
                      </div>
                    </div>
                    <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-accent-gold/15 text-neutral-900">
                      Freeport, NY
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Badge: Bottom Right 'Precision in Motion' */}
              <div className="absolute -bottom-6 -right-2 sm:-right-6 z-30 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-elevated border border-black/5 max-w-[220px]">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-full bg-accent-gold/20 flex items-center justify-center text-accent-gold font-bold text-xs">
                    RL
                  </div>
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-wider text-neutral-400">
                      Signature Craft
                    </div>
                    <div className="text-xs font-bold text-neutral-900">
                      Precision in Motion, Elegance in Form
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Lower Editorial Banner matching Dribbble layout */}
        <div className="mt-16 pt-10 border-t border-black/10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Tagline snippet */}
            <div className="md:col-span-5 space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-accent-gold">
                ReLense Concept
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-obsidian-900 leading-snug">
                Revolutionizing vision with trend-setting eyewear that speaks your style.
              </h2>
              <p className="text-xs sm:text-sm text-neutral-600">
                {SITE_INFO.taglines.hero} Keep your beloved frames out of landfills while enjoying ultra-crisp custom prescription clarity.
              </p>
            </div>

            {/* Pedestal display preview card */}
            <div className="md:col-span-7 bg-white rounded-3xl p-5 sm:p-6 shadow-card border border-black/5 flex flex-col sm:flex-row items-center gap-6">
              <div className="relative w-full sm:w-1/2 aspect-[4/3] rounded-2xl overflow-hidden bg-cream-200">
                <img
                  src="/assets/glasses.jpg"
                  alt="Crafted Eyewear"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-full bg-obsidian-900/80 text-white text-[10px] font-medium backdrop-blur-sm">
                  Eye Protecting Tools
                </div>
              </div>

              <div className="w-full sm:w-1/2 space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                  Precision Optics
                </div>
                <h3 className="font-serif text-xl font-medium text-obsidian-900">
                  Take a closer look at your eyes
                </h3>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Our advanced optical edging lab gives your eyesight the surgical focus and care it deserves.
                </p>
                <div className="pt-1 flex items-center gap-3">
                  <a
                    href="#studio-3d"
                    className="inline-flex items-center text-xs font-bold text-obsidian-900 hover:text-accent-gold transition"
                  >
                    <span>Try 3D Studio</span>
                    <ChevronRight className="w-3.5 h-3.5 ml-0.5" />
                  </a>
                  <span className="text-black/15">•</span>
                  <a
                    href="#calculator"
                    className="inline-flex items-center text-xs font-bold text-accent-teal hover:underline"
                  >
                    <span>Instant Price Quote</span>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
