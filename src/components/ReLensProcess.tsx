import React from 'react';
import { Send, FileText, Sparkles, Truck, ArrowRight, ShieldCheck, HeartHandshake, Leaf, PackageCheck } from 'lucide-react';
import { SITE_INFO } from '../data/content';

export const ReLensProcess: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Inquiry & Frame Selection',
      desc: 'Bring your beloved frames to our Freeport optical boutique, snap a photo for quick evaluation, or request a prepaid shipping box.',
      icon: Send,
    },
    {
      step: '02',
      title: 'Prescription Verification',
      desc: 'Upload your Rx from your eye doctor, let our computerized lensometer read your current lenses, or take a quick vision test on-site.',
      icon: FileText,
    },
    {
      step: '03',
      title: 'In-House Optical Crafting',
      desc: 'Master Optician Mauricio precision-cuts and hand-bevels your custom digital lenses with multi-layer Diamond AR & UV400 coats.',
      icon: Sparkles,
    },
    {
      step: '04',
      title: 'Delivery or Curbside Pickup',
      desc: 'Pick up your rejuvenated glasses in Freeport, enjoy curbside fitting, or receive your frames securely delivered nationwide.',
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
              <a href="#calculator" className="font-bold text-electric-600 hover:text-electric-700 whitespace-nowrap ml-2">
                Quote Now →
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
