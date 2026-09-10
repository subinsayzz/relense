import React from 'react';
import { ArrowUpRight, Play, Sparkles, Shield, Sun, Eye, Droplets, CheckCircle2 } from 'lucide-react';

export const VisionShield: React.FC = () => {
  return (
    <section id="vision-shield" className="py-16 sm:py-20 bg-gradient-to-b from-[#EAF3FA] to-[#E2EFF8] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* EYE PROTECT / VISION SHIELD Layout matching Screenshot */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Woman Model Card with 'Vision crafted by experience' matching Screenshot */}
          <div className="lg:col-span-4 flex flex-col">
            <div className="bg-white rounded-3xl overflow-hidden shadow-card border border-blue-100/80 flex-1 flex flex-col justify-between">
              
              {/* Model Image */}
              <div className="aspect-[4/4.5] overflow-hidden bg-sky-100">
                <img
                  src="/assets/hero_woman.jpg"
                  alt="Vision crafted by experience"
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Bottom Box matching Screenshot */}
              <div className="p-5 sm:p-6 space-y-1 bg-white text-obsidian-900 border-t border-neutral-100">
                <div className="flex items-center justify-between mb-1">
                  <div className="w-7 h-7 rounded-full bg-neutral-100 flex items-center justify-center text-obsidian-900">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-mono tracking-wider uppercase text-neutral-400">
                    Skin-friendly materials
                  </span>
                </div>
                <h3 className="font-serif text-xl sm:text-2xl text-obsidian-900 font-medium leading-snug">
                  Vision crafted by experience
                </h3>
              </div>

            </div>
          </div>

          {/* Right Column: Giant Faceted 'VISION SHIELD' Card matching Screenshot */}
          <div className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-10 shadow-card border border-blue-100/80 cut-top-left flex flex-col justify-between relative overflow-hidden">
            
            {/* Top Subtitle matching Screenshot */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-1.5 text-xs text-neutral-500 font-medium">
                <span className="text-electric-600">✦</span>
                <span>Elevate your vision</span>
              </div>
              <span className="text-[11px] font-mono tracking-widest text-neutral-400 uppercase">
                ReLense Lab Grade
              </span>
            </div>

            {/* Giant Title matching screenshot: 'VISION SHIELD' */}
            <div className="text-center my-4">
              <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl text-obsidian-900 tracking-tight font-light">
                VISION SHIELD
              </h2>
            </div>

            {/* Central Glasses Showcase with Exact Callout Pointers */}
            <div className="relative py-4 my-2 flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=1000&q=80"
                alt="Vision Shield Eyewear"
                className="w-full max-w-md h-auto object-cover rounded-2xl"
              />

              {/* Callout Left matching Screenshot: SLEEK METALS */}
              <div className="hidden sm:block absolute left-0 top-1/3 bg-white/95 backdrop-blur-md px-3.5 py-2.5 rounded-2xl shadow-card border border-blue-100/80 text-left max-w-[190px]">
                <div className="text-[10px] font-bold uppercase tracking-wider text-obsidian-900 flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-electric-600 mr-1.5" />
                  <span>SLEEK METALS</span>
                </div>
                <div className="text-[10px] text-neutral-500 mt-1 leading-tight">
                  Skin-friendly materials that blend style & endurance.
                </div>
              </div>

              {/* Callout Right matching Screenshot: CRYSTAL-CLEAR */}
              <div className="hidden sm:block absolute right-0 top-1/3 bg-white/95 backdrop-blur-md px-3.5 py-2.5 rounded-2xl shadow-card border border-blue-100/80 text-left max-w-[190px]">
                <div className="text-[10px] font-bold uppercase tracking-wider text-electric-600 flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-electric-600 mr-1.5" />
                  <span>CRYSTAL-CLEAR</span>
                </div>
                <div className="text-[10px] text-neutral-500 mt-1 leading-tight">
                  UV and blue light filtering with zero optical distortion.
                </div>
              </div>

              {/* Center Pill Button matching Screenshot: 'Test Your Eye' */}
              <div className="absolute inset-x-0 -bottom-3 flex justify-center">
                <a
                  href="#dmv-section"
                  className="px-6 py-2.5 rounded-full bg-obsidian-900 text-white text-xs font-semibold hover:bg-neutral-800 transition shadow-elevated flex items-center space-x-1.5 group"
                >
                  <span>Test Your Eye</span>
                  <Play className="w-2.5 h-2.5 fill-white text-white transition-transform group-hover:translate-x-0.5" />
                </a>
              </div>
            </div>

            {/* Mobile Callout Cards */}
            <div className="sm:hidden grid grid-cols-2 gap-2 mt-6 pt-2">
              <div className="bg-[#F5F9FD] p-2.5 rounded-xl text-left border border-blue-100">
                <div className="text-[10px] font-bold text-obsidian-900">SLEEK METALS</div>
                <div className="text-[10px] text-neutral-500 mt-0.5">Skin-friendly materials that blend style</div>
              </div>
              <div className="bg-[#F5F9FD] p-2.5 rounded-xl text-left border border-blue-100">
                <div className="text-[10px] font-bold text-electric-600">CRYSTAL-CLEAR</div>
                <div className="text-[10px] text-neutral-500 mt-0.5">UV and blue light filtering</div>
              </div>
            </div>

            {/* Bottom Mini Specs Strip - SEO Enriched */}
            <div className="pt-6 border-t border-blue-100 flex flex-wrap items-center justify-between text-xs text-neutral-500 gap-2 mt-4 font-medium">
              <span>Shamir Auto Intelligence™</span>
              <span>•</span>
              <span>Glacier Expressions™ AR</span>
              <span>•</span>
              <span>Custom Magnetic Clip-Ons</span>
              <span>•</span>
              <span>Severe Astigmatism Rx</span>
              <span>•</span>
              <span>Kids Sports Goggles</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
