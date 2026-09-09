import React from 'react';
import { Sparkles, Eye, ShieldCheck, Plus, ArrowUpRight, Play, Laptop, Sun, CheckCircle2 } from 'lucide-react';

export const BentoFeatures: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-[#E2EFF8] to-[#EBF3FA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section 1: Intelligent Style Comfort Header matching Screenshot */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-obsidian-900 font-light">
              Intelligent style comfort
            </h2>

            <div className="flex items-center space-x-3">
              <a
                href="#calculator"
                className="px-4 py-2 rounded-full border border-black/15 bg-white text-obsidian-900 text-xs font-semibold hover:bg-neutral-50 transition shadow-xs flex items-center space-x-1"
              >
                <span>Customize</span>
                <Plus className="w-3.5 h-3.5 text-neutral-500" />
              </a>

              <div className="px-4 py-2 rounded-full bg-white/80 border border-blue-200/60 text-xs font-medium text-neutral-600 flex items-center space-x-1.5 shadow-xs">
                <span>Luxury in Every Look</span>
                <span className="w-2 h-2 rounded-full bg-electric-600" />
              </div>
            </div>
          </div>

          {/* Bento Grid matching Screenshot */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
            
            {/* Card 1: Glasses Preview Mode (Left 4 cols) */}
            <div className="md:col-span-3 bg-white rounded-3xl p-6 shadow-card border border-blue-100/80 flex flex-col justify-between">
              <div className="space-y-1">
                <h3 className="font-serif text-xl text-obsidian-900 font-medium">
                  Glasses Preview Mode
                </h3>
                <p className="text-[11px] text-neutral-500">
                  Architectural plinth optical fitting
                </p>
              </div>

              <div className="my-6 aspect-[4/4.5] rounded-2xl bg-[#F5F9FD] p-3 flex items-center justify-center overflow-hidden">
                <img
                  src="/assets/glasses.jpg"
                  alt="Stacked glasses preview"
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

            {/* Card 2 & Specs: Center Column (5 cols) */}
            <div className="md:col-span-4 flex flex-col gap-5">
              
              {/* Eye Test Card with Macro Eyes Image */}
              <div className="bg-white rounded-3xl p-5 shadow-card border border-blue-100/80 flex-1 flex flex-col justify-between">
                <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-sky-50 mb-3">
                  <img
                    src="/assets/eyes_closeup.jpg"
                    alt="Radiant eyes close-up"
                    className="w-full h-full object-cover"
                  />
                  {/* Blue Play/Target button matching screenshot */}
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

              {/* Spec Pill: BLB */}
              <div className="bg-white rounded-2xl p-4 shadow-card border border-blue-100/80 flex items-center space-x-3.5">
                <div className="w-9 h-9 rounded-xl bg-blue-50 text-electric-600 flex items-center justify-center flex-shrink-0">
                  <Laptop className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-obsidian-900">BLB Filter</div>
                  <div className="text-[11px] text-neutral-500">Protect your eyes from digital screen strain</div>
                </div>
              </div>

              {/* Spec Pill: Anti-reflective */}
              <div className="bg-white rounded-2xl p-4 shadow-card border border-blue-100/80 flex items-center space-x-3.5">
                <div className="w-9 h-9 rounded-xl bg-blue-50 text-electric-600 flex items-center justify-center flex-shrink-0">
                  <Sun className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-obsidian-900">Anti-reflective Coating</div>
                  <div className="text-[11px] text-neutral-500">Blue light blocking lenses filter harmful screen rays</div>
                </div>
              </div>

            </div>

            {/* Card 3: Electric Blue Card matching Screenshot (Right 5 cols) */}
            <div className="md:col-span-5 bg-electric-600 rounded-3xl p-6 sm:p-7 text-white shadow-elevated flex flex-col justify-between overflow-hidden relative">
              <div className="space-y-3 z-10">
                <div className="flex items-center justify-between">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] font-medium px-3 py-1 rounded-full bg-white/15 text-blue-50">
                    Eco-conscious materials
                  </span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl text-white font-medium leading-snug">
                  Your look instantly with our real-time lab craft
                </h3>
              </div>

              <div className="my-5 aspect-[16/11] rounded-2xl overflow-hidden bg-white/10 shadow-card">
                <img
                  src="/assets/young_man_glasses.jpg"
                  alt="Man wearing round optical glasses"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="text-xs text-blue-100 z-10 flex items-center justify-between">
                <span>Save your favorite frames</span>
                <span className="font-bold text-white">Re-Lens from $49</span>
              </div>
            </div>

          </div>
        </div>

        {/* Section 2: 'Your eye deserve a closer look' matching Screenshot */}
        <div className="pt-8 border-t border-blue-200/50">
          
          {/* Top Designer Badge matching Screenshot */}
          <div className="flex items-center space-x-2 text-xs text-neutral-500 mb-8 max-w-2xl">
            <span className="font-bold text-obsidian-900 uppercase tracking-wider text-[11px]">
              NEW FRAME STYLE DESIGNER:
            </span>
            <span>Every frame we design combines precision craftsmanship with effortless style.</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            
            {/* Left Card: Tailored comfort for your eyes matching Screenshot */}
            <div className="md:col-span-4 bg-white rounded-3xl p-6 shadow-card border border-blue-100/80 cut-top-left space-y-4">
              <div className="space-y-1">
                <h3 className="font-serif text-2xl text-obsidian-900 font-medium">
                  Tailored comfort for your eyes
                </h3>
                <a
                  href="#calculator"
                  className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-electric-600 hover:underline"
                >
                  <span>UPGRADE VISION &gt;</span>
                </a>
              </div>

              <div className="aspect-[4/3] rounded-2xl bg-[#F5F9FD] p-4 flex items-center justify-center">
                <img
                  src="https://images.unsplash.com/photo-1577803645773-f96470509666?auto=format&fit=crop&w=600&q=80"
                  alt="Gold wire glasses"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>

            {/* Center Card: 4 Style perfectly matched */}
            <div className="md:col-span-4 bg-white rounded-3xl p-6 shadow-card border border-blue-100/80 flex flex-col justify-between">
              <div className="aspect-[4/4] rounded-2xl overflow-hidden bg-cream-100 mb-4">
                <img
                  src="/assets/hero_woman.jpg"
                  alt="Model wearing optical frames"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="flex items-center justify-center space-x-2 text-xs font-bold text-obsidian-900">
                <span className="text-electric-600 font-serif text-lg">4</span>
                <span>Style perfectly matched</span>
              </div>
            </div>

            {/* Right Column: Editorial Text & CTAs matching Screenshot */}
            <div className="md:col-span-4 space-y-5 md:pl-4">
              <h3 className="font-serif text-3xl sm:text-4xl text-obsidian-900 leading-tight">
                Your eye deserve a closer look
              </h3>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="#best-sellers"
                  className="px-6 py-3 rounded-full bg-obsidian-900 text-white font-semibold text-xs hover:bg-neutral-800 transition shadow-elevated flex items-center space-x-1.5 group"
                >
                  <span>Shop the Look</span>
                  <Play className="w-2.5 h-2.5 fill-white text-white transition-transform group-hover:translate-x-0.5" />
                </a>

                <span className="text-xs font-semibold text-neutral-600">
                  Get Free Shipping
                </span>
              </div>

              <p className="text-xs text-neutral-500 leading-relaxed">
                Thoughtfully crafted with smart design, timeless style, and the kind of everyday value.
              </p>

              {/* Floating Yellow Tag matching Screenshot */}
              <div className="inline-flex items-center space-x-2.5 p-2 px-3 rounded-full bg-amber-400 text-obsidian-900 shadow-card font-bold text-[11px] uppercase tracking-wider animate-float-slow">
                <span className="w-5 h-5 rounded-full bg-black text-white flex items-center justify-center text-[10px]">
                  ↗
                </span>
                <span>THE FUTURE LOOKS GOOD ON YOU</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
