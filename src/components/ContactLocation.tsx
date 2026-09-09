import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, ExternalLink, MessageSquare } from 'lucide-react';
import { SITE_INFO } from '../data/content';

export const ContactLocation: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-cream-200 text-obsidian-900 text-xs font-semibold uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5 text-accent-gold" />
            <span>Freeport, Long Island NY</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl text-obsidian-900">
            Visit Our Optical Shop & Lab
          </h2>
          <p className="text-neutral-600 text-sm">
            Conveniently located in Nassau County, NY. Walk-ins welcome for DMV exams and frame consultations.
          </p>
        </div>

        {/* Two-Column Grid: Location & Details on Left, Message Form on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Contact Cards & Map Info */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="bg-[#FAF9F6] rounded-3xl p-8 border border-black/5 space-y-6">
              <h3 className="font-serif text-2xl text-obsidian-900">
                ReLense Eyewear
              </h3>

              <div className="space-y-4 text-sm text-neutral-700">
                <div className="flex items-start space-x-3.5">
                  <div className="w-9 h-9 rounded-xl bg-white flex items-center justify-center text-accent-gold shadow-sm border border-black/5 flex-shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-obsidian-900">Store & Lab Address</div>
                    <div className="text-neutral-600">{SITE_INFO.address}</div>
                    <div className="text-xs text-neutral-500 mt-0.5">Freeport, Nassau County, NY 11520</div>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="w-9 h-9 rounded-xl bg-white flex items-center justify-center text-accent-gold shadow-sm border border-black/5 flex-shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-obsidian-900">Telephone</div>
                    <a
                      href={`tel:${SITE_INFO.phone}`}
                      className="text-neutral-900 hover:text-accent-gold font-medium"
                    >
                      {SITE_INFO.phoneFormatted}
                    </a>
                    <div className="text-xs text-neutral-500 mt-0.5">Call or text Mauricio directly</div>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="w-9 h-9 rounded-xl bg-white flex items-center justify-center text-accent-gold shadow-sm border border-black/5 flex-shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-obsidian-900">Email Inquiry</div>
                    <a
                      href={`mailto:${SITE_INFO.email}`}
                      className="text-neutral-900 hover:text-accent-gold font-medium"
                    >
                      {SITE_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="w-9 h-9 rounded-xl bg-white flex items-center justify-center text-accent-gold shadow-sm border border-black/5 flex-shrink-0">
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
              <div className="pt-4 border-t border-black/10">
                <a
                  href={SITE_INFO.orderContactsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-2xl bg-white border border-black/10 hover:border-black/30 shadow-sm flex items-center justify-between group transition"
                >
                  <div className="text-left">
                    <div className="text-xs font-bold text-obsidian-900">Need Contact Lenses?</div>
                    <div className="text-[11px] text-neutral-500">Order online via our secure YourLens lab portal</div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-accent-gold transition-transform group-hover:translate-x-0.5" />
                </a>
              </div>

            </div>

            {/* Google Maps Visual Embed */}
            <div className="rounded-3xl overflow-hidden border border-black/5 shadow-card h-52 relative">
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
          <div className="lg:col-span-6 bg-[#FAF9F6] rounded-3xl p-8 border border-black/5 space-y-6">
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-accent-gold">
                Send a Message
              </span>
              <h3 className="font-serif text-2xl text-obsidian-900">
                Contact Mauricio & The Lab
              </h3>
              <p className="text-xs text-neutral-500">
                Inquire about custom lenses, mail-in frame shipping, or ask a question about your prescription.
              </p>
            </div>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
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
                    className="w-full px-4 py-3 rounded-xl bg-white border border-black/10 text-base sm:text-xs text-obsidian-900 focus:outline-none focus:ring-2 focus:ring-obsidian-900"
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
                      className="w-full px-4 py-3 rounded-xl bg-white border border-black/10 text-base sm:text-xs text-obsidian-900 focus:outline-none focus:ring-2 focus:ring-obsidian-900"
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
                      className="w-full px-4 py-3 rounded-xl bg-white border border-black/10 text-base sm:text-xs text-obsidian-900 focus:outline-none focus:ring-2 focus:ring-obsidian-900"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">
                    How can we help? (Frame details, prescription, etc.)
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us about your frames or what kind of lenses you are looking for..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-black/10 text-base sm:text-xs text-obsidian-900 focus:outline-none focus:ring-2 focus:ring-obsidian-900"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-obsidian-900 text-white font-semibold text-xs uppercase tracking-wider hover:bg-black transition shadow-elevated flex items-center justify-center space-x-2"
                >
                  <Send className="w-3.5 h-3.5 text-accent-gold" />
                  <span>Submit Message to ReLense</span>
                </button>
              </form>
            ) : (
              <div className="py-12 text-center space-y-3 bg-white rounded-2xl border border-black/5 p-6 animate-in fade-in">
                <div className="w-12 h-12 rounded-full bg-accent-teal/15 text-accent-teal mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="font-serif text-2xl text-obsidian-900">
                  Your message was sent successfully!
                </h4>
                <p className="text-xs text-neutral-600 max-w-sm mx-auto">
                  Thank you, {formData.name}. Mauricio will review your inquiry and get back to you shortly at {formData.email}.
                </p>
              </div>
            )}

            <div className="text-center pt-2 text-xs text-neutral-400">
              Prefer direct email? Reach our executive desk at{' '}
              <a href={`mailto:${SITE_INFO.email}`} className="text-obsidian-900 font-semibold underline">
                {SITE_INFO.email}
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
