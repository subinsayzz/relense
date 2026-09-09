import React from 'react';
import { Star, Quote, CheckCircle, Heart } from 'lucide-react';
import { TESTIMONIALS } from '../data/content';

export const Testimonials: React.FC = () => {
  return (
    <section id="reviews" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-cream-200 text-obsidian-900 text-xs font-semibold uppercase tracking-wider">
            <Star className="w-3.5 h-3.5 fill-accent-amber text-accent-amber" />
            <span>Verified Patient Experiences</span>
          </div>
          
          <h2 className="font-serif text-4xl sm:text-5xl text-obsidian-900">
            What Our Patients Say
          </h2>

          <div className="flex items-center justify-center space-x-2 pt-1">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-accent-amber text-accent-amber" />
              ))}
            </div>
            <span className="text-xs font-bold text-obsidian-900">5.0 Star Rating</span>
            <span className="text-neutral-400 text-xs">•</span>
            <span className="text-xs text-neutral-500">Freeport, NY & Beyond</span>
          </div>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((review, idx) => (
            <div
              key={idx}
              className="bg-[#FAF9F6] rounded-3xl p-8 border border-black/5 flex flex-col justify-between hover:shadow-card hover:-translate-y-1 transition duration-300 relative group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex space-x-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-accent-amber text-accent-amber" />
                    ))}
                  </div>
                  <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-white text-neutral-600 border border-black/5">
                    {review.tag}
                  </span>
                </div>

                <div className="font-serif text-lg sm:text-xl text-obsidian-900 leading-relaxed italic mb-6">
                  "{review.text}"
                </div>
              </div>

              <div className="pt-6 border-t border-black/5 flex items-center justify-between">
                <div>
                  <div className="font-bold text-sm text-obsidian-900 flex items-center">
                    {review.name}
                    <CheckCircle className="w-3.5 h-3.5 text-accent-teal ml-1.5" />
                  </div>
                  <div className="text-xs text-neutral-500">{review.location}</div>
                </div>

                <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-accent-gold shadow-sm border border-black/5">
                  <Quote className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Highlight Mauricio Note */}
        <div className="mt-12 bg-cream-100 rounded-2xl p-6 border border-black/5 max-w-2xl mx-auto text-center space-y-2">
          <div className="text-xs font-bold uppercase tracking-wider text-accent-gold">
            Personal Care Promise
          </div>
          <p className="text-xs sm:text-sm text-neutral-700">
            "Mauricio explains everything in detail and makes sure your new glasses fit perfectly. Whether it's custom lenses, repairs, or a quick DMV eye test, you're treated like family."
          </p>
        </div>

      </div>
    </section>
  );
};
