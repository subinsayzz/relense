import React, { useState } from 'react';
import {
  Star,
  CheckCircle2,
  CheckCircle,
  Award,
  Phone,
  ChevronDown,
  ChevronUp,
  ArrowUpRight,
} from 'lucide-react';
import { TESTIMONIALS, SITE_INFO } from '../data/content';

const GoogleIcon = ({ className = 'w-4 h-4' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24">
    <path
      fill="#4285F4"
      d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"
    />
    <path
      fill="#34A853"
      d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.34 24 12 24z"
    />
    <path
      fill="#FBBC05"
      d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.17 0 9.99 0 12s.45 3.83 1.25 5.42l4.03-3.15z"
    />
    <path
      fill="#EA4335"
      d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.34 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
    />
  </svg>
);

const AVATAR_COLORS = [
  'bg-blue-100 text-blue-700 border-blue-200',
  'bg-emerald-100 text-emerald-700 border-emerald-200',
  'bg-purple-100 text-purple-700 border-purple-200',
  'bg-amber-100 text-amber-700 border-amber-200',
  'bg-rose-100 text-rose-700 border-rose-200',
  'bg-indigo-100 text-indigo-700 border-indigo-200',
  'bg-teal-100 text-teal-700 border-teal-200',
  'bg-sky-100 text-sky-700 border-sky-200',
];

const formatName = (name: string) => {
  return name
    .toLowerCase()
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

const getInitials = (name: string) => {
  const parts = name.trim().split(/\s+/);
  if (parts.length >= 2) {
    return (parts[0][0] + parts[1][0]).toUpperCase();
  }
  return name.slice(0, 2).toUpperCase();
};

export const Testimonials: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [showAll, setShowAll] = useState<boolean>(false);

  const categories = [
    { id: 'all', label: 'All Reviews', count: 17 },
    { id: 'speed', label: '24h & Emergency', count: 6 },
    { id: 'care', label: "Mauricio's Care", count: 6 },
    { id: 'optics', label: 'Shamir & Custom Optics', count: 2 },
    { id: 'family', label: 'Family & Kids', count: 3 },
  ];

  const filteredReviews = selectedCategory === 'all'
    ? TESTIMONIALS
    : TESTIMONIALS.filter((r) => r.category === selectedCategory);

  const displayedReviews = showAll ? filteredReviews : filteredReviews.slice(0, 6);

  const googleMapsUrl =
    'https://maps.google.com/?q=ReLense+Optical+Store+37+Guy+Lombardo+Ave+Freeport+NY+11520';

  return (
    <section id="reviews" className="py-20 bg-gradient-to-b from-[#DFEDF8] via-[#E8F2FA] to-[#DFEDF8] relative overflow-hidden">
      
      {/* Soft Ambient Sky Blurs */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-blue-200/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-white/60 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-blue-200/60 shadow-xs text-xs font-semibold uppercase tracking-wider text-obsidian-900">
            <GoogleIcon className="w-3.5 h-3.5" />
            <span>100% 5-Star Rating · All 17 Google Reviews</span>
          </div>
          
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-obsidian-900 tracking-tight">
            Patient & Customer Stories
          </h2>

          <p className="text-neutral-600 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Real feedback from local Long Island drivers, families, and eyewear collectors who trust Master Optician Mauricio for speed, precision, and honest care.
          </p>

          {/* Premium Google Rating Summary Banner */}
          <div className="max-w-xl mx-auto bg-white/90 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-blue-100/90 shadow-card flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-3.5">
              <div className="w-12 h-12 rounded-xl bg-blue-50/80 border border-blue-100 flex items-center justify-center shadow-xs">
                <GoogleIcon className="w-6 h-6" />
              </div>
              <div className="text-left">
                <div className="flex items-center space-x-2">
                  <span className="text-xl font-bold text-obsidian-900 font-sans tracking-tight">5.0</span>
                  <div className="flex space-x-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>
                <div className="text-xs text-neutral-500 font-medium mt-0.5">
                  100% 5-Star Rating · All 17 Google Reviews
                </div>
              </div>
            </div>

            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full bg-obsidian-900 hover:bg-neutral-800 text-white font-semibold text-xs transition shadow-xs flex items-center space-x-1.5 whitespace-nowrap group"
            >
              <span>View on Google Maps</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
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
              className={`px-4 py-2 rounded-full text-xs font-semibold transition shadow-xs flex items-center space-x-1.5 ${
                selectedCategory === cat.id
                  ? 'bg-obsidian-900 text-white shadow-elevated'
                  : 'bg-white hover:bg-neutral-50 text-neutral-700 border border-blue-100/80'
              }`}
            >
              <span>{cat.label}</span>
              <span
                className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                  selectedCategory === cat.id
                    ? 'bg-white/20 text-white'
                    : 'bg-neutral-100 text-neutral-500'
                }`}
              >
                {cat.count}
              </span>
            </button>
          ))}
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedReviews.map((review, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-blue-100/90 shadow-card flex flex-col justify-between hover:shadow-elevated hover:-translate-y-1 transition-all duration-300 relative group"
            >
              <div>
                {/* Reviewer Header */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="flex items-center space-x-3">
                    <div
                      className={`w-11 h-11 rounded-full flex items-center justify-center font-bold text-xs border shadow-xs flex-shrink-0 ${
                        AVATAR_COLORS[idx % AVATAR_COLORS.length]
                      }`}
                    >
                      {getInitials(review.name)}
                    </div>
                    <div>
                      <div className="font-bold text-sm text-obsidian-900 flex items-center space-x-1.5">
                        <span>{formatName(review.name)}</span>
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 fill-blue-500/10 flex-shrink-0" />
                      </div>
                      <div className="flex items-center space-x-1.5 text-[11px] text-neutral-400 mt-0.5">
                        {review.isLocalGuide && (
                          <span className="font-semibold text-amber-600 flex items-center space-x-0.5">
                            <Star className="w-2.5 h-2.5 fill-amber-500 text-amber-500 inline mr-0.5" />
                            <span>Local Guide</span>
                            <span className="text-neutral-300 mx-1">·</span>
                          </span>
                        )}
                        <span>{review.timeAgo}</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-1.5 rounded-lg bg-neutral-50 border border-neutral-100 flex items-center justify-center group-hover:bg-blue-50/60 transition-colors">
                    <GoogleIcon className="w-4 h-4 flex-shrink-0" />
                  </div>
                </div>

                {/* Rating Stars & Service Tag */}
                <div className="flex items-center justify-between gap-2 mb-3.5">
                  <div className="flex space-x-0.5">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] font-semibold px-2.5 py-0.5 rounded-full bg-blue-50 text-electric-700 border border-blue-100 tracking-wide">
                    {review.tag}
                  </span>
                </div>

                {/* Review Text */}
                <p className="text-neutral-700 text-sm leading-relaxed mb-4">
                  "{review.text}"
                </p>
              </div>

              {/* Card Footer */}
              <div className="pt-3.5 border-t border-neutral-100 flex items-center justify-between text-[11px] text-neutral-400">
                <span className="flex items-center space-x-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span className="font-medium text-neutral-500">Verified Google Review</span>
                </span>
                <span className="text-[10px] font-medium text-neutral-400 uppercase tracking-wider">
                  Freeport, NY
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Expand / Collapse Button */}
        {filteredReviews.length > 6 && (
          <div className="text-center pt-2">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-3 rounded-full bg-white hover:bg-neutral-50 text-obsidian-900 font-semibold text-xs border border-blue-200/80 shadow-xs inline-flex items-center space-x-2 transition hover:shadow-card"
            >
              <span>{showAll ? 'Show Fewer Reviews' : `View All ${filteredReviews.length} Google Reviews`}</span>
              {showAll ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
            </button>
          </div>
        )}

        {/* Master Optician Mauricio Spotlight Card */}
        <div className="bg-white rounded-3xl p-7 sm:p-9 border border-blue-100/90 shadow-elevated max-w-4xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8 relative overflow-hidden">
          
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />

          {/* Mauricio Patient Care Photo */}
          <div className="w-full sm:w-60 md:w-68 aspect-[4/3] rounded-2xl overflow-hidden border border-blue-200/80 shadow-card flex-shrink-0 relative group bg-neutral-100">
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
              "Whether you need an emergency 24-hour lens replacement, custom magnetic clip-ons, children's sports goggles, or Shamir Auto Intelligence progressive lenses, you deserve honest guidance with zero sales pressure. Every frame is measured and cut right here on-site."
            </p>

            {/* Quick Trust Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 text-xs text-neutral-700">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-3.5 h-3.5 text-electric-600 flex-shrink-0" />
                <span>Same-Day & 24h Emergency Service</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-3.5 h-3.5 text-electric-600 flex-shrink-0" />
                <span>CareCredit Financing & HSA/FSA</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-3.5 h-3.5 text-electric-600 flex-shrink-0" />
                <span>Municipal Parking Across the Street</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-3.5 h-3.5 text-electric-600 flex-shrink-0" />
                <span>Hablamos Español Fluido</span>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-2 flex flex-wrap items-center justify-center md:justify-start gap-3">
              <a
                href="#contact"
                className="px-5 py-2.5 rounded-full bg-obsidian-900 hover:bg-neutral-800 text-white font-semibold text-xs transition shadow-elevated"
              >
                Visit Store & Lab
              </a>

              <a
                href={`tel:${SITE_INFO.phone}`}
                className="px-4 py-2.5 rounded-full bg-white hover:bg-neutral-50 text-obsidian-900 border border-blue-200/80 font-semibold text-xs transition shadow-xs flex items-center space-x-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-electric-600" />
                <span>Call: {SITE_INFO.phoneFormatted}</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
