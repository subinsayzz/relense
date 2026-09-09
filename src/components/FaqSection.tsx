import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Phone } from 'lucide-react';
import { FAQS, SITE_INFO } from '../data/content';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-[#F6F5F2] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-14 space-y-3">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-white border border-black/5 text-xs font-semibold uppercase tracking-wider text-obsidian-900 shadow-sm">
            <HelpCircle className="w-3.5 h-3.5 text-accent-gold" />
            <span>Common Optical Inquiries</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl text-obsidian-900">
            Frequently Asked Questions
          </h2>
          <p className="text-neutral-600 text-sm">
            Everything you need to know about re-lensing your frames, prescriptions, and our Freeport lab.
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
                  isOpen ? 'border-black/20 shadow-card' : 'border-black/5 hover:border-black/15'
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
                    className={`w-7 h-7 rounded-full bg-cream-200 flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-obsidian-900 text-white' : 'text-obsidian-900'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-neutral-600 leading-relaxed border-t border-black/5 animate-in fade-in duration-200">
                    <p>{faq.answer}</p>
                    {idx === 2 && (
                      <div className="mt-3 p-3 rounded-xl bg-cream-100 text-xs text-neutral-700 flex items-center justify-between">
                        <span>Have vintage frames? Email a photo to <strong>{SITE_INFO.email}</strong></span>
                        <a href={`mailto:${SITE_INFO.email}`} className="text-accent-gold font-bold underline">
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
          <a href={`tel:${SITE_INFO.phone}`} className="font-bold text-obsidian-900 hover:underline">
            {SITE_INFO.phoneFormatted}
          </a>{' '}
          or visit us in Freeport, NY.
        </div>

      </div>
    </section>
  );
};
