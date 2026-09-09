import React from 'react';
import { Star, Quote, CheckCircle, Heart, ShieldCheck } from 'lucide-react';
import { TESTIMONIALS } from '../data/content';

export const Testimonials: React.FC = () => {
  return (
    <section id="reviews" className="py-20 bg-gradient-to-b from-[#DFEDF8] via-[#E8F2FA] to-[#DFEDF8] relative overflow-hidden">
      
      {/* Soft Ambient Sky Blurs */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-blue-200/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-blue-200/60 shadow-xs text-xs font-semibold uppercase tracking-wider text-obsidian-900">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span>Verified Patient & Customer Experiences</span>
          </div>
          
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-obsidian-900 tracking-tight">
            What Our Patients Say
          </h2>

          <div className="flex items-center justify-center space-x-2 pt-1">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-xs font-bold text-obsidian-900">5.0 Perfect Rating</span>
            <span className="text-neutral-400 text-xs">•</span>
            <span className="text-xs text-neutral-500">Freeport, NY Lab & Nationwide Orders</span>
          </div>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((review, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-8 border border-blue-100/80 shadow-card flex flex-col justify-between hover:shadow-elevated hover:-translate-y-1 transition duration-300 relative group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex space-x-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-blue-50 text-electric-700 border border-blue-200/60">
                    {review.tag}
                  </span>
                </div>

                <div className="font-serif text-lg sm:text-xl text-obsidian-900 leading-relaxed italic mb-6">
                  "{review.text}"
                </div>
              </div>

              <div className="pt-6 border-t border-neutral-100 flex items-center justify-between">
                <div>
                  <div className="font-bold text-sm text-obsidian-900 flex items-center">
                    {review.name}
                    <CheckCircle className="w-3.5 h-3.5 text-electric-600 ml-1.5" />
                  </div>
                  <div className="text-xs text-neutral-500">{review.location}</div>
                </div>

                <div className="w-9 h-9 rounded-full bg-blue-50 flex items-center justify-center text-electric-600 shadow-xs border border-blue-100/60">
                  <Quote className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Highlight Mauricio Note */}
        <div className="mt-12 bg-white rounded-3xl p-7 border border-blue-100/80 shadow-card max-w-2xl mx-auto text-center space-y-2">
          <div className="text-xs font-bold uppercase tracking-wider text-electric-600">
            Personal Care Promise from Mauricio
          </div>
          <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
            "We explain everything in detail and guarantee your new lenses fit your existing frames with micron precision. Whether you are re-lensing a favorite vintage frame or taking a quick NY DMV eye test, you are treated like family."
          </p>
        </div>

      </div>
    </section>
  );
};
