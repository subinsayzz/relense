import React, { useState } from 'react';
import { Eye, CheckCircle2, Clock, MapPin, Phone, Calendar, ArrowRight } from 'lucide-react';
import { SITE_INFO } from '../data/content';

export const DmvExamSection: React.FC = () => {
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [preferredTime, setPreferredTime] = useState('Today / Walk-In');

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingConfirmed(true);
  };

  return (
    <section id="dmv-section" className="py-20 bg-[#F6F5F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-obsidian-900 text-white rounded-3xl p-8 sm:p-12 shadow-elevated border border-white/10 overflow-hidden relative">
          
          {/* Subtle Background Glow */}
          <div className="absolute -right-20 -top-20 w-96 h-96 bg-accent-gold/15 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            
            {/* Left Column: DMV Info */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-semibold uppercase tracking-wider text-accent-gold">
                <Eye className="w-3.5 h-3.5" />
                <span>Authorized NY DMV Vision Registry Provider</span>
              </div>

              <h2 className="font-serif text-4xl sm:text-5xl text-white leading-tight">
                Fast NY Driver's License <br />
                <span className="italic text-cream-300 font-normal">Vision Exams in Freeport</span>
              </h2>

              <p className="text-cream-300 text-sm sm:text-base leading-relaxed max-w-xl">
                Renewing your New York driver's license? Skip the long lines at the DMV. Mauricio conducts your official vision test in just 5 minutes and submits your results electronically to the NY State DMV registry immediately.
              </p>

              {/* DMV Benefits Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2 text-xs sm:text-sm text-cream-200">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-accent-teal flex-shrink-0" />
                  <span>Instant Electronic DMV Sync</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-accent-teal flex-shrink-0" />
                  <span>No Appointment Necessary (Walk-ins)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-accent-teal flex-shrink-0" />
                  <span>Only $25 Official Exam Fee</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-accent-teal flex-shrink-0" />
                  <span>Hablamos Español fluido</span>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4 text-xs text-cream-300">
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 text-accent-gold mr-1.5" />
                  <span>37 Guy Lombardo Ave, Freeport, NY</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 text-accent-gold mr-1.5" />
                  <span>5 Minutes In & Out</span>
                </div>
              </div>

            </div>

            {/* Right Column: Quick Reservation Card */}
            <div className="lg:col-span-5 bg-white text-obsidian-900 rounded-3xl p-6 sm:p-8 shadow-card space-y-6">
              
              <div className="space-y-1 border-b border-black/10 pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-accent-gold">
                  Reserve or Notify Mauricio
                </span>
                <h3 className="font-serif text-2xl font-semibold text-obsidian-900">
                  Walk-In or Schedule
                </h3>
                <p className="text-xs text-neutral-500">
                  Let us know you are on your way or pick a preferred time.
                </p>
              </div>

              {!bookingConfirmed ? (
                <form onSubmit={handleBooking} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-black/15 text-base sm:text-xs text-obsidian-900 focus:outline-none focus:ring-2 focus:ring-obsidian-900"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1">
                      Cell Phone Number
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="(347) 000-0000"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-black/15 text-base sm:text-xs text-obsidian-900 focus:outline-none focus:ring-2 focus:ring-obsidian-900"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1">
                      When would you like to come in?
                    </label>
                    <select
                      value={preferredTime}
                      onChange={(e) => setPreferredTime(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-black/15 text-base sm:text-xs text-obsidian-900 focus:outline-none focus:ring-2 focus:ring-obsidian-900 bg-white"
                    >
                      <option>Today / Walk-In</option>
                      <option>Tomorrow Morning (10am - 1pm)</option>
                      <option>Tomorrow Afternoon (1pm - 5pm)</option>
                      <option>This Weekend</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-obsidian-900 text-white font-semibold text-xs uppercase tracking-wider hover:bg-black transition shadow-sm flex items-center justify-center space-x-1.5"
                  >
                    <span>Confirm DMV Check-In ($25)</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <div className="text-center pt-1">
                    <a
                      href={`tel:${SITE_INFO.phone}`}
                      className="inline-flex items-center text-xs text-neutral-600 hover:text-black font-medium"
                    >
                      <Phone className="w-3 h-3 mr-1 text-accent-gold" />
                      Or call directly: {SITE_INFO.phoneFormatted}
                    </a>
                  </div>
                </form>
              ) : (
                <div className="py-6 text-center space-y-3 animate-in fade-in">
                  <div className="w-12 h-12 rounded-full bg-accent-teal/15 text-accent-teal mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif text-xl text-obsidian-900">
                    See You Soon, {name}!
                  </h4>
                  <p className="text-xs text-neutral-600">
                    Mauricio has been notified for your DMV vision test ({preferredTime}). Bring your NY Driver License or Client ID to 37 Guy Lombardo Ave Unit 1, Freeport, NY.
                  </p>
                </div>
              )}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
