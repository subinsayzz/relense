import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, ExternalLink } from 'lucide-react';
import { SITE_INFO } from '../data/content';

export const ContactLocation: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Re-Lensing Existing Frames (From $49)',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: 'Re-Lensing Existing Frames (From $49)',
      message: '',
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-[#DFEDF8] via-[#E8F2FA] to-[#DFEDF8] relative overflow-hidden">
      
      {/* Soft Ambient Sky Blurs */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-blue-200/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-blue-200/60 shadow-xs text-xs font-semibold uppercase tracking-wider text-obsidian-900">
            <MapPin className="w-3.5 h-3.5 text-electric-600" />
            <span>Freeport, Long Island NY Optical Shop</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-obsidian-900 tracking-tight">
            Visit Our Optical Shop & Lab
          </h2>
          <p className="text-neutral-600 text-sm sm:text-base max-w-xl mx-auto">
            Conveniently located in Nassau County, NY. Walk-ins welcome for DMV exams, frame styling, and personalized lens fittings with Mauricio.
          </p>
        </div>

        {/* Authentic Storefront Showcase */}
        <div className="mb-14 rounded-3xl overflow-hidden border border-blue-100/80 shadow-elevated bg-[#0B131E] text-white group relative">
          
          {/* Ambient Glows matching real neon colors: electric cyan and vibrant emerald */}
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />

          {/* Top Bar: Live Location Info */}
          <div className="p-4 sm:p-6 border-b border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 relative z-10">
            <div>
              <div className="flex items-center space-x-2 text-xs text-blue-200">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-semibold uppercase tracking-wider text-[11px]">
                  Authentic Freeport Storefront & Optical Lab
                </span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal mt-0.5">
                37B Guy Lombardo Ave · Freeport, NY
              </h3>
            </div>
            <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs text-blue-100/90 self-start sm:self-auto">
              <MapPin className="w-3.5 h-3.5 text-cyan-400" />
              <span>Downtown Freeport, Long Island</span>
            </div>
          </div>

          {/* Main Display Area */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-4 sm:p-8 items-center relative z-10">
            
            {/* Left: Authentic Real Photo with Exact Proportional Border */}
            <div className="lg:col-span-6 flex justify-center items-center">
              <div className="relative rounded-2xl overflow-hidden border border-white/20 shadow-2xl group/img w-full max-w-[430px] aspect-[875/1024] bg-neutral-900">
                <img
                  src="/assets/relense_storefront_real.jpg"
                  alt="Authentic ReLense Storefront at 37B Guy Lombardo Ave in Freeport NY"
                  className="w-full h-full object-cover object-center group-hover/img:scale-102 transition-transform duration-700"
                />
                {/* Floating Real-World Tag */}
                <div className="absolute top-3 left-3 bg-black/75 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-semibold text-white border border-white/20 flex items-center space-x-1.5 shadow-md">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Authentic 37B Guy Lombardo Ave</span>
                </div>
              </div>
            </div>

            {/* Right: Rich Authentic Details */}
            <div className="lg:col-span-6 space-y-5">
              <div className="space-y-2">
                <span className="text-[10px] font-mono tracking-widest text-cyan-300 uppercase">
                  Signature Blue Canopy & Illuminated Window
                </span>
                <h4 className="font-serif text-3xl text-white font-medium leading-snug">
                  Storefront & Main Entrance
                </h4>
                <p className="text-xs sm:text-sm text-blue-100/80 leading-relaxed">
                  The official storefront of ReLense Optical at 37B Guy Lombardo Avenue in Freeport, NY. Featuring our signature royal blue awning, illuminated overhead canopy, luminous green LED window perimeter, red OPEN beacon, custom blue neon "Relense" sign, and Carl Zeiss precision optical certification.
                </p>
              </div>

              {/* Highlight Bullets with Real Elements */}
              <div className="space-y-2 pt-2 border-t border-white/10">
                <div className="text-[11px] font-bold text-blue-200 uppercase tracking-wider">
                  Verified Real-World Details
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-blue-100/90">
                  <div className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    <span>Signature Royal Blue Overhead Awning</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    <span>Warm Illuminated Canopy & Street Entrance</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    <span>Luminous Green LED Window Perimeter</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    <span>Handcrafted Blue Neon "Relense" Insignia</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    <span>Carl Zeiss Authorized Optical Partner</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    <span>Direct Phone: (347) 878-5064 (Hablamos Español)</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 flex flex-wrap items-center gap-3">
                <a
                  href={`tel:${SITE_INFO.phone}`}
                  className="px-5 py-2.5 rounded-full bg-electric-600 hover:bg-electric-500 text-white text-xs font-bold transition shadow-elevated flex items-center space-x-1.5"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Store: {SITE_INFO.phoneFormatted}</span>
                </a>
                <a
                  href="https://maps.google.com/?q=37+Guy+Lombardo+Ave+Freeport+NY+11520"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-xs font-semibold text-white transition flex items-center space-x-1.5"
                >
                  <MapPin className="w-3.5 h-3.5 text-cyan-300" />
                  <span>Get Directions</span>
                </a>
              </div>

            </div>

          </div>

        </div>

        {/* Two-Column Grid: Location & Details on Left, Message Form on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Contact Cards & Map Info */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="bg-white rounded-3xl p-8 border border-blue-100/80 shadow-card space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="font-serif text-2xl text-obsidian-900">
                  ReLense Eyewear
                </h3>
                <span className="text-[11px] font-semibold px-3 py-1 rounded-full bg-blue-50 text-electric-700 border border-blue-200/60">
                  Unit 1 · Freeport
                </span>
              </div>

              <div className="space-y-4 text-sm text-neutral-700">
                <div className="flex items-start space-x-3.5">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-electric-600 shadow-xs border border-blue-100/60 flex-shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-obsidian-900">Store & Lab Address</div>
                    <div className="text-neutral-600">{SITE_INFO.address}</div>
                    <div className="text-xs text-neutral-500 mt-0.5">Freeport, Nassau County, NY 11520</div>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-electric-600 shadow-xs border border-blue-100/60 flex-shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-obsidian-900">Telephone</div>
                    <a
                      href={`tel:${SITE_INFO.phone}`}
                      className="text-obsidian-900 hover:text-electric-600 font-medium transition"
                    >
                      {SITE_INFO.phoneFormatted}
                    </a>
                    <div className="text-xs text-neutral-500 mt-0.5">Call or text Mauricio directly</div>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-electric-600 shadow-xs border border-blue-100/60 flex-shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-obsidian-900">Email Desk</div>
                    <a
                      href={`mailto:${SITE_INFO.email}`}
                      className="text-obsidian-900 hover:text-electric-600 font-medium transition"
                    >
                      {SITE_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-electric-600 shadow-xs border border-blue-100/60 flex-shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-obsidian-900">Service Hours & Pickup</div>
                    <div className="text-neutral-600">Open for Inquiries 24/7</div>
                    <div className="text-xs text-neutral-500 mt-0.5">In-Store Shopping · Curbside Pickup · Delivery</div>
                  </div>
                </div>
              </div>

              {/* Order Contacts Banner */}
              <div className="pt-4 border-t border-neutral-100">
                <a
                  href={SITE_INFO.orderContactsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 rounded-2xl bg-blue-50/50 border border-blue-200/60 hover:border-blue-300 shadow-xs flex items-center justify-between group transition"
                >
                  <div className="text-left">
                    <div className="text-xs font-bold text-obsidian-900">Need Contact Lenses?</div>
                    <div className="text-[11px] text-neutral-500">Order online via our secure YourLens lab portal</div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-electric-600 transition-transform group-hover:translate-x-0.5" />
                </a>
              </div>

            </div>

            {/* Google Maps Visual Embed */}
            <div className="rounded-3xl overflow-hidden border border-blue-100/80 shadow-card h-64 relative">
              <iframe
                title="ReLense Freeport Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3027.854580556132!2d-73.58280622346618!3d40.63584807140513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c27b0ea7ee2885%3A0xc3b8fb359a35e709!2s37%20Guy%20Lombardo%20Ave%2C%20Freeport%2C%20NY%2011520!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-8 border border-blue-100/80 shadow-card space-y-5">
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-electric-600">
                Direct Optical Desk
              </span>
              <h3 className="font-serif text-2xl text-obsidian-900">
                Message Master Optician Mauricio
              </h3>
              <p className="text-xs text-neutral-500">
                Inquire about custom lenses, mail-in frame shipping, or ask a question about your prescription.
              </p>
            </div>

            {/* Direct Phone Call Strip */}
            <div className="p-3 rounded-2xl bg-blue-50/80 border border-blue-200/60 flex items-center justify-between">
              <div className="text-left">
                <div className="text-xs font-bold text-obsidian-900">Need Immediate Help?</div>
                <div className="text-[11px] text-neutral-600">Call or text our optical desk</div>
              </div>
              <a
                href={`tel:${SITE_INFO.phone}`}
                className="px-3.5 py-1.5 rounded-full bg-electric-600 hover:bg-electric-500 text-white text-xs font-bold transition flex items-center space-x-1.5 shadow-xs"
              >
                <Phone className="w-3 h-3 text-white" />
                <span>{SITE_INFO.phoneFormatted}</span>
              </a>
            </div>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4 pt-1">
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Jane Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#F8FAFD] border border-neutral-200 text-sm text-obsidian-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-electric-500"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jane@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#F8FAFD] border border-neutral-200 text-sm text-obsidian-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-electric-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      placeholder="(347) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#F8FAFD] border border-neutral-200 text-sm text-obsidian-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-electric-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">
                    Service You Need <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#F8FAFD] border border-neutral-200 text-sm text-obsidian-900 focus:outline-none focus:ring-2 focus:ring-electric-500 cursor-pointer"
                  >
                    <option>Re-Lensing Existing Frames (From $49)</option>
                    <option>Same-Day or 24h Emergency Glasses</option>
                    <option>Shamir Auto Intelligence™ Digital Progressives</option>
                    <option>Custom Magnetic Clip-On Sunglasses</option>
                    <option>Official 5-Minute NY DMV Vision Test ($25)</option>
                    <option>Children's Sports Goggles / Astigmatism</option>
                    <option>Frame Repair & Urgent Adjustment</option>
                    <option>General Question / Prescription Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">
                    Your Message / Frame Details
                  </label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Tell us about your frames or what kind of lenses you are looking for..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#F8FAFD] border border-neutral-200 text-sm text-obsidian-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-electric-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-obsidian-900 hover:bg-neutral-800 text-white font-bold text-xs uppercase tracking-wider transition shadow-elevated flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5 text-blue-200" />
                  <span>Send Message to Mauricio</span>
                </button>
              </form>
            ) : (
              <div className="py-8 text-center space-y-4 bg-blue-50/50 rounded-2xl border border-blue-200/60 p-6 animate-in fade-in">
                <div className="w-12 h-12 rounded-full bg-blue-100 text-electric-600 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-serif text-2xl text-obsidian-900">
                    Message Sent Successfully!
                  </h4>
                  <p className="text-xs text-neutral-600 max-w-sm mx-auto">
                    Thank you, {formData.name}. Mauricio will review your request for <strong>{formData.service}</strong> and reply to {formData.email} shortly.
                  </p>
                </div>

                <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
                  <a
                    href={`tel:${SITE_INFO.phone}`}
                    className="px-4 py-2 rounded-full bg-electric-600 hover:bg-electric-500 text-white font-bold text-xs transition flex items-center space-x-1.5"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call Directly: {SITE_INFO.phoneFormatted}</span>
                  </a>
                  <button
                    onClick={handleReset}
                    className="px-4 py-2 rounded-full bg-white border border-neutral-200 hover:border-neutral-300 text-obsidian-900 text-xs font-semibold transition"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            )}

            <div className="text-center pt-2 text-xs text-neutral-400">
              Prefer direct email? Reach our executive desk at{' '}
              <a href={`mailto:${SITE_INFO.email}`} className="text-obsidian-900 font-semibold underline hover:text-electric-600">
                {SITE_INFO.email}
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
