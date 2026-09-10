import React, { useState } from 'react';
import { Star, Quote, CheckCircle, Heart, ShieldCheck, Clock, Award, Phone, MapPin, Sparkles, ChevronDown, ChevronUp } from 'lucide-react';
import { TESTIMONIALS, SITE_INFO } from '../data/content';

export const Testimonials: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [showAll, setShowAll] = useState<boolean>(false);

  const categories = [
    { id: 'all', label: 'All Reviews (17)' },
    { id: 'speed', label: '24h & Emergency (6)' },
    { id: 'care', label: "Mauricio's Care (6)" },
    { id: 'optics', label: 'Shamir & Custom Optics (2)' },
    { id: 'family', label: 'Family & Kids (3)' },
  ];

  const filteredReviews = selectedCategory === 'all'
    ? TESTIMONIALS
    : TESTIMONIALS.filter((r) => r.category === selectedCategory);

  const displayedReviews = showAll ? filteredReviews : filteredReviews.slice(0, 6);

  return (
    <section id="reviews" className="py-20 bg-gradient-to-b from-[#DFEDF8] via-[#E8F2FA] to-[#DFEDF8] relative overflow-hidden">
      
      {/* Soft Ambient Sky Blurs */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-blue-200/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-white/60 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-blue-200/60 shadow-xs text-xs font-semibold uppercase tracking-wider text-obsidian-900">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span>100% 5-Star Rating · All 17 Google Reviews</span>
          </div>
          
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-obsidian-900 tracking-tight">
            Patient & Customer Stories
          </h2>

          <p className="text-neutral-600 text-sm sm:text-base max-w-xl mx-auto">
            Real feedback from local Long Island drivers, families, and eyewear collectors who trust Master Optician Mauricio for speed, precision, and honest care.
          </p>

          {/* Rating Badge Strip */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2 text-xs font-semibold text-obsidian-900">
            <div className="flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-white border border-blue-100/80 shadow-xs">
              <div className="flex space-x-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span>5.0 / 5.0 (All 17 Reviews)</span>
            </div>

            <div className="flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-white border border-blue-100/80 shadow-xs text-neutral-600">
              <Clock className="w-3.5 h-3.5 text-electric-600" />
              <span>Same-Day & 24h Emergency Turnarounds</span>
            </div>

            <div className="flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-white border border-blue-100/80 shadow-xs text-neutral-600">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>CareCredit Accepted</span>
            </div>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setSelectedCategory(cat.id);
                setShowAll(false);
              }}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition shadow-xs ${
                selectedCategory === cat.id
                  ? 'bg-obsidian-900 text-white shadow-elevated'
                  : 'bg-white hover:bg-neutral-50 text-neutral-700 border border-blue-100/80'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedReviews.map((review, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-7 border border-blue-100/80 shadow-card flex flex-col justify-between hover:shadow-elevated hover:-translate-y-1 transition-all duration-300 relative group"
            >
              <div>
                {/* Header: Stars + Tag + Time */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-blue-50 text-electric-700 border border-blue-200/60">
                    {review.tag}
                  </span>
                </div>

                {/* Review Text */}
                <p className="font-serif text-base sm:text-lg text-obsidian-900 leading-relaxed italic mb-6">
                  "{review.text}"
                </p>
              </div>

              {/* Reviewer Details */}
              <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
                <div>
                  <div className="font-bold text-sm text-obsidian-900 flex items-center">
                    <span>{review.name}</span>
                    <CheckCircle className="w-3.5 h-3.5 text-electric-600 ml-1.5 flex-shrink-0" />
                  </div>
                  <div className="text-[11px] text-neutral-400 flex items-center space-x-1 mt-0.5">
                    {review.isLocalGuide && (
                      <span className="font-semibold text-amber-600 mr-1">Local Guide ·</span>
                    )}
                    <span>{review.timeAgo}</span>
                  </div>
                </div>

                <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-electric-600 shadow-xs border border-blue-100/60">
                  <Quote className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Expand / Collapse Button */}
        {filteredReviews.length > 6 && (
          <div className="text-center pt-2">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-3 rounded-full bg-white hover:bg-neutral-50 text-obsidian-900 font-semibold text-xs border border-blue-200/80 shadow-xs inline-flex items-center space-x-2 transition"
            >
              <span>{showAll ? 'Show Fewer Reviews' : `View All ${filteredReviews.length} Reviews`}</span>
              {showAll ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
            </button>
          </div>
        )}

        {/* Master Optician Mauricio Spotlight Card */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-blue-100/80 shadow-elevated max-w-4xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8 relative overflow-hidden">
          
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />

          {/* Mauricio Patient Care Photo */}
          <div className="w-full sm:w-60 md:w-72 aspect-[4/3] rounded-3xl overflow-hidden border-2 border-blue-200/80 shadow-card flex-shrink-0 relative group bg-neutral-100">
            <img
              src="/assets/mauricio_hero.jpg"
              alt="Master Optician Mauricio fitting prescription eyewear at ReLense Optical Freeport NY"
              className="w-full h-full object-cover object-[60%_center] group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute bottom-3 inset-x-3 bg-black/75 backdrop-blur-md px-3 py-1.5 rounded-xl text-center border border-white/15">
              <div className="text-[11px] font-bold text-white leading-tight">Personal Fitting & Care</div>
              <div className="text-[9px] text-blue-200">Master Optician Mauricio</div>
            </div>
          </div>

          {/* Mauricio Bio & Highlights */}
          <div className="space-y-4 text-center md:text-left flex-1">
            <div className="space-y-1">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-50 text-electric-700 border border-blue-200/60 text-[11px] font-bold uppercase tracking-wider">
                <Award className="w-3.5 h-3.5" />
                <span>Master Optician & Owner · 20+ Years Freeport</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl text-obsidian-900 font-medium">
                Mauricio's Personal Care Commitment
              </h3>
            </div>

            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
              "We understand that whether you need an emergency 24-hour lens replacement, custom magnetic clip-ons, children's sports goggles, or high-tech Shamir Auto Intelligence progressive lenses, you deserve honest advice without any sales pressure. We treat every patient like our own family."
            </p>

            {/* Quick Trust Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 text-xs text-neutral-700">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-electric-600 flex-shrink-0" />
                <span>Same-Day & 24h Emergency Service</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-electric-600 flex-shrink-0" />
                <span>CareCredit Financing & HSA/FSA</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-electric-600 flex-shrink-0" />
                <span>Municipal Parking Across the Street</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-electric-600 flex-shrink-0" />
                <span>Hablamos Español Fluido</span>
              </div>
            </div>

            {/* Contact Actions */}
            <div className="pt-3 flex flex-wrap items-center justify-center md:justify-start gap-3">
              <a
                href={`tel:${SITE_INFO.phone}`}
                className="px-6 py-3 rounded-full bg-obsidian-900 hover:bg-neutral-800 text-white font-semibold text-xs transition shadow-elevated flex items-center space-x-2"
              >
                <Phone className="w-3.5 h-3.5 text-blue-200" />
                <span>Call or Text Mauricio: {SITE_INFO.phoneFormatted}</span>
              </a>

              <a
                href="#contact"
                className="px-5 py-3 rounded-full bg-white hover:bg-neutral-50 text-obsidian-900 border border-blue-200/80 font-semibold text-xs transition shadow-xs flex items-center space-x-1.5"
              >
                <MapPin className="w-3.5 h-3.5 text-electric-600" />
                <span>37B Guy Lombardo Ave, Freeport</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
