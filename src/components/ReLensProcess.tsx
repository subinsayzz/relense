import React from 'react';
import { Send, FileText, Sparkles, Truck, Check, ArrowRight, ShieldCheck, HeartHandshake, Leaf } from 'lucide-react';
import { SITE_INFO } from '../data/content';

export const ReLensProcess: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Inquiry & Frame Selection',
      desc: 'Send us your beloved frames, bring them into our Freeport optical shop, or snap a photo for a quick evaluation by Mauricio.',
      icon: Send,
    },
    {
      step: '02',
      title: 'Prescription Verification',
      desc: 'Provide your Rx from your eye doctor, have us digitally read your existing lenses, or take a quick vision test on-site.',
      icon: FileText,
    },
    {
      step: '03',
      title: 'In-House Optical Crafting',
      desc: 'Our certified master opticians precision-cut and hand-mount your premium lenses with multi-layer AR and UV protection.',
      icon: Sparkles,
    },
    {
      step: '04',
      title: 'Delivery or Curbside Pickup',
      desc: 'Pick up your rejuvenated eyewear at our Freeport location, enjoy curbside delivery, or receive it nationwide via tracked shipping.',
      icon: Truck,
    },
  ];

  return (
    <section id="relensing" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Philosophy Callout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end mb-16">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cream-200 text-obsidian-900 text-xs font-semibold uppercase tracking-wider">
              <Leaf className="w-3.5 h-3.5 text-accent-teal" />
              <span>Sustainable & Cost-Effective</span>
            </div>
            
            <h2 className="font-serif text-4xl sm:text-5xl text-obsidian-900 leading-tight">
              What Makes Us — <br />
              <span className="italic font-normal">Use Your Existing Eyewear</span>
            </h2>

            <p className="text-base text-neutral-600 max-w-2xl leading-relaxed">
              {SITE_INFO.taglines.reLensPhilosophy}
            </p>
          </div>

          <div className="lg:col-span-5 bg-[#F6F5F2] p-6 rounded-3xl border border-black/5 flex flex-col justify-between space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                Patient Savings Guarantee
              </span>
              <span className="text-xs font-bold text-accent-teal bg-white px-2.5 py-1 rounded-full border border-black/5">
                Up to 70% Off Retail
              </span>
            </div>
            <div className="text-2xl font-serif text-obsidian-900">
              "We understand that sometimes you just love the frame you have."
            </div>
            <div className="text-xs text-neutral-500">
              Why pay hundreds of dollars for a new designer frame when your existing frame has years of life left?
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
                className="group relative bg-[#F7F6F2] hover:bg-white rounded-3xl p-7 transition-all duration-300 border border-black/5 hover:shadow-card hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-serif text-3xl text-neutral-300 group-hover:text-accent-gold transition">
                      {item.step}
                    </span>
                    <div className="w-10 h-10 rounded-2xl bg-white group-hover:bg-obsidian-900 group-hover:text-white transition flex items-center justify-center text-obsidian-900 shadow-sm border border-black/5">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-serif text-xl font-medium text-obsidian-900 mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-black/5 flex items-center text-xs font-semibold text-neutral-400 group-hover:text-obsidian-900 transition">
                  <span>Step {idx + 1} of 4</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats & Features Ribbon */}
        <div className="mt-14 p-8 rounded-3xl bg-obsidian-900 text-white shadow-elevated grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="space-y-1">
            <div className="font-serif text-3xl sm:text-4xl text-accent-gold">20+</div>
            <div className="text-xs uppercase tracking-wider text-cream-400 font-medium">
              Years of Experience
            </div>
          </div>
          <div className="space-y-1">
            <div className="font-serif text-3xl sm:text-4xl text-accent-gold">1 NY</div>
            <div className="text-xs uppercase tracking-wider text-cream-400 font-medium">
              Dedicated Lab & Shop
            </div>
          </div>
          <div className="space-y-1">
            <div className="font-serif text-3xl sm:text-4xl text-accent-gold">50 States</div>
            <div className="text-xs uppercase tracking-wider text-cream-400 font-medium">
              Nationwide Mail-In Service
            </div>
          </div>
          <div className="space-y-1">
            <div className="font-serif text-3xl sm:text-4xl text-accent-gold">100%</div>
            <div className="text-xs uppercase tracking-wider text-cream-400 font-medium">
              Satisfaction Guarantee
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
