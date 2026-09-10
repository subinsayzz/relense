import React from 'react';
import { Sparkles, Eye, ShieldCheck, Plus, ArrowUpRight, Play, Laptop, Sun, CheckCircle2 } from 'lucide-react';

export const BentoFeatures: React.FC = () => {
  return (
    <section id="services" className="py-16 sm:py-20 bg-gradient-to-b from-[#E2EFF8] via-[#EBF3FA] to-[#DFEDF8] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Section 1 matching Bottom of Left Page: 'Take a closer look at your eyes' */}
        <div>
          
          {/* Top Designer Avatars Bar matching Screenshot */}
          <div className="flex items-center space-x-3 text-xs text-neutral-500 mb-8">
            <div className="flex -space-x-2 overflow-hidden">
              <img className="inline-block h-7 w-7 rounded-full ring-2 ring-white object-cover" src="/assets/hero_model.jpg" alt="Designer" />
              <img className="inline-block h-7 w-7 rounded-full ring-2 ring-white object-cover" src="/assets/hero_woman.jpg" alt="Designer" />
              <img className="inline-block h-7 w-7 rounded-full ring-2 ring-white object-cover" src="/assets/striped_shirt_model.jpg" alt="Designer" />
            </div>
            <span className="font-bold text-obsidian-900 uppercase tracking-wider text-[11px]">
              NEW FRAME STYLE DESIGNER
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-stretch">
            
            {/* Left Card: 'Smart comfort for sharp eyes' with Black Sunglasses matching Screenshot */}
            <div className="md:col-span-4 bg-white rounded-3xl p-6 sm:p-7 shadow-card border border-blue-100/80 cut-top-right flex flex-col justify-between">
              <div className="space-y-2">
                <h3 className="font-serif text-2xl sm:text-3xl text-obsidian-900 font-medium leading-snug">
                  Smart comfort <br />
                  for sharp eyes
                </h3>
                <a
                  href="#calculator"
                  className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-obsidian-900 hover:text-electric-600 transition"
                >
                  <span>UPGRADE VISION &gt;</span>
                </a>
                <p className="text-xs text-neutral-500 pt-1">
                  Offering crystal-clear vision for you
                </p>
              </div>

              <div className="my-4 aspect-[16/10] rounded-2xl bg-[#F5F9FD] p-3 flex items-center justify-center overflow-hidden">
                <img
                  src="/assets/smart_comfort_sunglasses.jpg"
                  alt="Smart comfort flat top sunglasses"
                  className="w-full h-full object-contain rounded-xl hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Center Card: Model in Striped Shirt matching Screenshot */}
            <div className="md:col-span-4 flex flex-col justify-between space-y-3">
              <p className="text-xs text-neutral-600 leading-relaxed px-1">
                See your world clearly. Master Optician Mauricio provides <strong className="text-obsidian-900">24-hour emergency glasses</strong>, severe astigmatism care, and official 5-minute NY DMV vision testing.
              </p>

              <div className="bg-white rounded-3xl p-3 shadow-card border border-blue-100/80 flex-1 flex flex-col justify-between">
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-cream-100">
                  <img
                    src="/assets/striped_shirt_model.jpg"
                    alt="4 Styles perfectly matched"
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                  />
                  {/* Bottom Pill matching screenshot: '[⛶] 4 Styles perfectly matched' */}
                  <div className="absolute bottom-3 inset-x-3 bg-white/95 backdrop-blur-md p-2.5 rounded-2xl border border-black/5 shadow-card flex items-center justify-center space-x-2">
                    <span className="font-serif text-xl font-bold text-obsidian-900">4</span>
                    <span className="text-xs font-bold text-obsidian-900">Styles perfectly matched</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Giant 'Take a closer look at your eyes' Title matching Screenshot */}
            <div className="md:col-span-4 flex flex-col justify-center space-y-6 md:pl-4">
              <h3 className="font-serif text-4xl sm:text-5xl text-obsidian-900 leading-tight">
                Take a closer <br />
                look at your eyes
              </h3>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="#best-sellers"
                  className="px-6 py-3.5 rounded-full bg-obsidian-900 text-white font-semibold text-xs hover:bg-neutral-800 transition shadow-elevated flex items-center space-x-1.5 group"
                >
                  <span>Check Eyewear</span>
                  <Play className="w-2.5 h-2.5 fill-white text-white transition-transform group-hover:translate-x-0.5" />
                </a>

                <span className="text-xs font-semibold text-neutral-600">
                  Get Free Shipping
                </span>
              </div>

              <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed max-w-xs">
                Thoughtfully crafted with smart design, timeless style, and the kind of everyday value.
              </p>

              {/* Floating Yellow Tag matching Screenshot */}
              <div className="inline-flex items-center space-x-2.5 p-2 px-3.5 rounded-full bg-amber-400 text-obsidian-900 shadow-card font-bold text-[11px] uppercase tracking-wider animate-float-slow w-max">
                <span className="w-5 h-5 rounded-full bg-black text-white flex items-center justify-center text-[10px]">
                  ↗
                </span>
                <span>THE FUTURE LOOKS GOOD ON YOU</span>
              </div>
            </div>

          </div>
        </div>

        {/* Section 2 matching Right Page: 'Designed to move built to feel' */}
        <div className="pt-12 border-t border-blue-200/60">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-obsidian-900 font-light">
              Designed to move built to feel
            </h2>

            <div className="flex items-center space-x-3">
              <a
                href="#calculator"
                className="px-4 py-2 rounded-full border border-black/15 bg-white text-obsidian-900 text-xs font-semibold hover:bg-neutral-50 transition shadow-xs flex items-center space-x-1"
              >
                <span>Customize</span>
                <Plus className="w-3.5 h-3.5 text-neutral-500" />
              </a>
            </div>
          </div>

          {/* Bento Grid matching Screenshot */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
            
            {/* Card 1: Instant style zero commitment (Left 3 cols) */}
            <div className="md:col-span-3 bg-white rounded-3xl p-6 shadow-card border border-blue-100/80 flex flex-col justify-between">
              <div className="space-y-1">
                <span className="text-[10px] text-neutral-400 font-medium uppercase tracking-wider">
                  A seamless fusion of style, innovation, & value
                </span>
                <h3 className="font-serif text-xl text-obsidian-900 font-medium pt-1">
                  Instant style zero commitment
                </h3>
              </div>

              <div className="my-6 aspect-square rounded-2xl bg-[#F5F9FD] p-3 flex items-center justify-center overflow-hidden">
                <img
                  src="/assets/stacked_pedestals_glasses.jpg"
                  alt="Stacked glasses on pedestals"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>

              <a
                href="#studio-3d"
                className="inline-flex items-center text-xs font-semibold text-electric-600 hover:text-electric-700 transition"
              >
                <span>Launch 3D Studio &gt;</span>
              </a>
            </div>

            {/* Card 2 & Specs: Center Column (4 cols) */}
            <div className="md:col-span-4 flex flex-col gap-5">
              
              {/* Eye Test Card with Macro Eyes Image */}
              <div className="bg-white rounded-3xl p-5 shadow-card border border-blue-100/80 flex-1 flex flex-col justify-between">
                <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-sky-50 mb-3">
                  <img
                    src="/assets/eyes_closeup.jpg"
                    alt="Radiant eyes close-up"
                    className="w-full h-full object-cover"
                  />
                  {/* Target button matching screenshot */}
                  <a
                    href="#dmv-section"
                    className="absolute bottom-2.5 right-2.5 w-8 h-8 rounded-full bg-electric-600 text-white flex items-center justify-center shadow-card hover:bg-electric-700 transition"
                    title="Start DMV Eye Exam"
                  >
                    <Play className="w-3.5 h-3.5 fill-white" />
                  </a>
                </div>

                <div className="space-y-1.5">
                  <h4 className="font-serif text-lg text-obsidian-900 font-medium">
                    Caring for your vision, one Test at a time
                  </h4>
                  <a
                    href="#dmv-section"
                    className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-obsidian-900 hover:text-electric-600 transition"
                  >
                    <span>GET TESTED &gt;</span>
                  </a>
                </div>
              </div>

              {/* Spec Pill: Shamir Auto Intelligence */}
              <div className="bg-white rounded-2xl p-4 shadow-card border border-blue-100/80 flex items-center space-x-3.5">
                <div className="w-9 h-9 rounded-xl bg-blue-50 text-electric-600 flex items-center justify-center flex-shrink-0 font-bold text-xs">
                  SAI
                </div>
                <div>
                  <div className="text-xs font-bold text-obsidian-900">Shamir Auto Intelligence™ ⌵</div>
                  <div className="text-[11px] text-neutral-500">High-tech digital progressive optics with zero edge blur</div>
                </div>
              </div>

              {/* Spec Pill: Glacier Expressions Anti-reflective */}
              <div className="bg-white rounded-2xl p-4 shadow-card border border-blue-100/80 flex items-center space-x-3.5">
                <div className="w-9 h-9 rounded-xl bg-blue-50 text-electric-600 flex items-center justify-center flex-shrink-0">
                  <Sun className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-obsidian-900">Glacier Expressions™ AR ⌵</div>
                  <div className="text-[11px] text-neutral-500">Eliminates headlight glares with 99.8% light transmission</div>
                </div>
              </div>

              {/* Spec Pill: Custom Magnetic Clip-Ons */}
              <div className="bg-white rounded-2xl p-4 shadow-card border border-blue-100/80 flex items-center space-x-3.5">
                <div className="w-9 h-9 rounded-xl bg-blue-50 text-electric-600 flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-obsidian-900">Custom Magnetic Clip-Ons ⌵</div>
                  <div className="text-[11px] text-neutral-500">Mirrored & polarized clip-ons custom-fit to your exact frame</div>
                </div>
              </div>

            </div>

            {/* Card 3: Electric Blue Card with Blond Man in Glasses (Right 5 cols) */}
            <div className="md:col-span-5 bg-white rounded-3xl p-6 sm:p-7 shadow-card border border-blue-100/80 flex flex-col justify-between overflow-hidden relative">
              <div className="space-y-3 z-10">
                <div className="flex items-center justify-between">
                  <div className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center text-obsidian-900">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] font-medium px-3 py-1 rounded-full bg-blue-50 text-electric-700 border border-blue-200/60">
                    Eco-conscious materials
                  </span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl text-obsidian-900 font-medium leading-snug">
                  Your look instantly with our real-time lab craft
                </h3>
              </div>

              <div className="my-5 aspect-[16/11] rounded-2xl overflow-hidden bg-neutral-50 shadow-xs">
                <img
                  src="/assets/young_man_glasses.jpg"
                  alt="Man wearing round optical glasses"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="text-xs text-neutral-500 z-10 flex items-center justify-between pt-2 border-t border-neutral-100">
                <span>Save your favorite frames</span>
                <span className="font-bold text-obsidian-900">Re-Lens from $49</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
