import React from 'react';
import { Shield, Sparkles, Sun, Eye, Droplets, CheckCircle, ArrowUpRight } from 'lucide-react';

export const VisionShield: React.FC = () => {
  return (
    <section id="vision-shield" className="py-20 bg-[#F6F5F2] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white border border-black/5 text-xs font-semibold uppercase tracking-wider text-obsidian-900 shadow-sm">
            <Shield className="w-3.5 h-3.5 text-accent-gold" />
            <span>Optical Engineering</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl text-obsidian-900">
            Vision Shield Technology
          </h2>
          <p className="text-neutral-600 text-sm sm:text-base">
            Every lens crafted in our Freeport lab features surgical anti-reflective, UV400, and hydrophobic nano-coatings.
          </p>
        </div>

        {/* Big Vision Shield Banner Card matching Screenshot Layout */}
        <div className="relative bg-white rounded-3xl p-8 sm:p-12 shadow-card border border-black/5 overflow-hidden">
          
          {/* Subtle Background Watermark Typography */}
          <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none opacity-[0.03]">
            <span className="font-serif text-[180px] font-black tracking-widest text-black">
              SHIELD
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left Column: Vision Crafted by Experience Mini Card */}
            <div className="lg:col-span-4 bg-[#FAF9F6] rounded-2xl p-5 border border-black/5 space-y-4">
              <div className="aspect-[4/3] rounded-xl overflow-hidden bg-neutral-200">
                <img
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80"
                  alt="Woman with stylish optical glasses"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-1">
                <h3 className="font-serif text-2xl text-obsidian-900">
                  Vision crafted by experience
                </h3>
                <p className="text-xs text-neutral-500">
                  Over two decades of precision optical surfacing in Long Island, NY.
                </p>
              </div>
              <div className="pt-2 flex items-center space-x-2 text-xs font-semibold text-accent-teal">
                <CheckCircle className="w-4 h-4" />
                <span>Certified Optician Lab Inspection</span>
              </div>
            </div>

            {/* Center & Right: Large Schematic Frame with Callout Pointers */}
            <div className="lg:col-span-8 space-y-8">
              
              {/* Giant Serif Title */}
              <div className="text-center lg:text-left">
                <h3 className="font-serif text-4xl sm:text-6xl text-obsidian-900 tracking-tight">
                  VISION SHIELD
                </h3>
                <p className="text-xs sm:text-sm text-neutral-500 mt-1 uppercase tracking-widest font-mono">
                  Multi-Spectrum Anti-Glare & Molecular Hard Coat
                </p>
              </div>

              {/* Large Frame Image on clean white backdrop with callout pointers */}
              <div className="relative py-6 flex items-center justify-center">
                <img
                  src="/assets/glasses.jpg"
                  alt="Vision Shield Eyewear"
                  className="w-full max-w-xl h-auto object-cover rounded-2xl shadow-soft"
                />

                {/* Callout Left: Sleek Metals */}
                <div className="hidden sm:block absolute left-2 top-10 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-elevated border border-black/5 text-left max-w-[200px]">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-obsidian-900">
                    Sleek Metals & Acetate
                  </div>
                  <div className="text-[11px] text-neutral-500 mt-0.5">
                    Skin-friendly, hypoallergenic materials that blend style & strength.
                  </div>
                </div>

                {/* Callout Right: Coastal Clear */}
                <div className="hidden sm:block absolute right-2 bottom-10 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-elevated border border-black/5 text-left max-w-[200px]">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-accent-teal">
                    Coastal Clear Coating
                  </div>
                  <div className="text-[11px] text-neutral-500 mt-0.5">
                    UV400 defense + 99.8% blue-light filtration from digital displays.
                  </div>
                </div>

                {/* Callout Center Button: Test Your Eyes */}
                <div className="absolute inset-x-0 bottom-0 flex justify-center">
                  <a
                    href="#dmv-section"
                    className="px-6 py-2.5 rounded-full bg-obsidian-900 text-white text-xs font-semibold hover:bg-neutral-800 transition shadow-elevated flex items-center space-x-1.5"
                  >
                    <Eye className="w-3.5 h-3.5 text-accent-gold" />
                    <span>Test Your Eyes / DMV Exam</span>
                  </a>
                </div>
              </div>

              {/* 4 Feature Pillars */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-black/5 text-center">
                <div className="space-y-1">
                  <div className="w-8 h-8 rounded-full bg-cream-200 mx-auto flex items-center justify-center text-obsidian-900">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div className="text-xs font-bold text-obsidian-900">Diamond AR</div>
                  <div className="text-[11px] text-neutral-500">Zero glare night driving</div>
                </div>

                <div className="space-y-1">
                  <div className="w-8 h-8 rounded-full bg-cream-200 mx-auto flex items-center justify-center text-obsidian-900">
                    <Sun className="w-4 h-4" />
                  </div>
                  <div className="text-xs font-bold text-obsidian-900">100% UV400</div>
                  <div className="text-[11px] text-neutral-500">Broad spectrum protection</div>
                </div>

                <div className="space-y-1">
                  <div className="w-8 h-8 rounded-full bg-cream-200 mx-auto flex items-center justify-center text-obsidian-900">
                    <Droplets className="w-4 h-4" />
                  </div>
                  <div className="text-xs font-bold text-obsidian-900">Oleophobic</div>
                  <div className="text-[11px] text-neutral-500">Smudge & water repellent</div>
                </div>

                <div className="space-y-1">
                  <div className="w-8 h-8 rounded-full bg-cream-200 mx-auto flex items-center justify-center text-obsidian-900">
                    <Shield className="w-4 h-4" />
                  </div>
                  <div className="text-xs font-bold text-obsidian-900">Hard Coated</div>
                  <div className="text-[11px] text-neutral-500">Scratch resistant shield</div>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
