import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Phone } from 'lucide-react';
import { FAQS, SITE_INFO } from '../data/content';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-[#DFEDF8] via-[#E8F2FA] to-[#DFEDF8] relative overflow-hidden">
      
      {/* Soft Ambient Sky Blurs */}
      <div className="absolute top-10 right-1/4 w-96 h-96 bg-blue-200/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-14 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-blue-200/60 shadow-xs text-xs font-semibold uppercase tracking-wider text-obsidian-900">
            <HelpCircle className="w-3.5 h-3.5 text-electric-600" />
            <span>Common Optical & Re-Lensing Inquiries</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-obsidian-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-neutral-600 text-sm max-w-xl mx-auto">
            Everything you need to know about mail-in re-lensing, prescription guarantees, and our Freeport, NY optical laboratory.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`bg-white rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen ? 'border-electric-400/80 shadow-card ring-1 ring-electric-500/15' : 'border-blue-100/80 hover:border-blue-200 shadow-xs'
                }`}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="font-serif text-lg sm:text-xl text-obsidian-900 font-medium">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-obsidian-900 text-white' : 'bg-blue-50 text-electric-600'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-neutral-600 leading-relaxed border-t border-neutral-100 animate-in fade-in duration-200">
                    <p>{faq.answer}</p>
                    {idx === 2 && (
                      <div className="mt-3 p-3 rounded-xl bg-blue-50 border border-blue-200/60 text-xs text-neutral-700 flex items-center justify-between">
                        <span>Have vintage frames? Email a photo to <strong>{SITE_INFO.email}</strong></span>
                        <a href={`mailto:${SITE_INFO.email}`} className="text-electric-600 font-bold hover:underline">
                          Send Photo
                        </a>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Help CTA */}
        <div className="mt-12 text-center text-xs text-neutral-500">
          Still have questions? Give Mauricio a call at{' '}
          <a href={`tel:${SITE_INFO.phone}`} className="font-bold text-obsidian-900 hover:text-electric-600 underline">
            {SITE_INFO.phoneFormatted}
          </a>{' '}
          or stop by our Freeport, NY optical shop.
        </div>

      </div>
    </section>
  );
};
