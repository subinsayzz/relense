import React from 'react';
import { Sparkles, Eye, ShieldCheck, Heart, Leaf, Laptop, ArrowUpRight } from 'lucide-react';

export const BentoFeatures: React.FC = () => {
  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-accent-gold block mb-2">
              Optical Mastery
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl text-obsidian-900 leading-tight">
              Designed to move, built to feel
            </h2>
          </div>
          <a
            href="#calculator"
            className="inline-flex items-center text-xs font-semibold px-4 py-2 rounded-full border border-black/15 text-obsidian-900 hover:bg-black/5 transition"
          >
            <span>Customize Lenses</span>
            <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
          </a>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Bento Card 1: Instant style zero commitment (Left Column 4 cols) */}
          <div className="md:col-span-4 bg-[#F8F7F4] rounded-3xl p-6 border border-black/5 flex flex-col justify-between hover:shadow-card transition duration-300">
            <div className="space-y-2 mb-6">
              <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-400">
                A seamless fusion of style, innovation, & value
              </span>
              <h3 className="font-serif text-2xl text-obsidian-900">
                Instant style, zero commitment
              </h3>
              <p className="text-xs text-neutral-600">
                Swap your existing tinted lenses for crystal clear vision, or convert your clear glasses into dark polarized sunglasses.
              </p>
            </div>

            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-cream-200">
              <img
                src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=800&q=80"
                alt="Eyewear style"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Bento Card 2: Center Column (4 cols) */}
          <div className="md:col-span-4 flex flex-col gap-6">
            
            {/* Top Eye Care Card */}
            <div className="bg-[#FAF9F6] rounded-3xl p-6 border border-black/5 flex-1 flex flex-col justify-between hover:shadow-card transition duration-300">
              <div className="aspect-[16/9] rounded-2xl overflow-hidden bg-neutral-200 mb-4">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80"
                  alt="Close-up of radiant eyes"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-2">
                <h4 className="font-serif text-xl text-obsidian-900">
                  Caring for your vision, one test at a time
                </h4>
                <a
                  href="#dmv-section"
                  className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-obsidian-900 hover:text-accent-gold transition"
                >
                  <span>GET TESTED &gt;</span>
                </a>
              </div>
            </div>

            {/* Small Spec Card: OLE */}
            <div className="bg-[#F8F7F4] rounded-2xl p-5 border border-black/5 flex items-center space-x-4">
              <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-accent-gold shadow-sm border border-black/5 flex-shrink-0">
                <Laptop className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-obsidian-900">OLE Screen Guard</div>
                <div className="text-[11px] text-neutral-500">Protect your eyes from digital screen glare</div>
              </div>
            </div>

          </div>

          {/* Bento Card 3: Right Column (4 cols) */}
          <div className="md:col-span-4 flex flex-col gap-6">
            
            {/* Small Spec Card: Anti-reflective */}
            <div className="bg-[#F8F7F4] rounded-2xl p-5 border border-black/5 flex items-center space-x-4">
              <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-accent-teal shadow-sm border border-black/5 flex-shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-obsidian-900">Anti-Reflective 360°</div>
                <div className="text-[11px] text-neutral-500">Filters harmful reflections from all angles</div>
              </div>
            </div>

            {/* Bottom Wide Card: Your look instantly */}
            <div className="bg-[#FAF9F6] rounded-3xl p-6 border border-black/5 flex-1 flex flex-col justify-between hover:shadow-card transition duration-300">
              <div className="space-y-2 mb-4">
                <div className="inline-flex items-center space-x-1 text-[11px] font-bold uppercase tracking-wider text-accent-teal">
                  <Leaf className="w-3.5 h-3.5" />
                  <span>Eco-Conscious Re-Lensing</span>
                </div>
                <h4 className="font-serif text-2xl text-obsidian-900">
                  Your look instantly with our real-time lab craft
                </h4>
                <p className="text-xs text-neutral-600">
                  Reuse the high-quality acetate and metal frames you already paid for. ReLense updates your optics sustainably.
                </p>
              </div>

              <div className="aspect-[16/9] rounded-2xl overflow-hidden bg-neutral-200">
                <img
                  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80"
                  alt="Man wearing optical glasses"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
