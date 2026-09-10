import React, { useState } from 'react';
import { Calculator, Check, ArrowRight, ShieldCheck, Sparkles, Send, Phone } from 'lucide-react';
import { SITE_INFO } from '../data/content';

export const ReLensCalculator: React.FC = () => {
  const [frameOption, setFrameOption] = useState<'existing' | 'new'>('existing');
  const [rxType, setRxType] = useState('single');
  const [lensMaterial, setLensMaterial] = useState('cr39');
  const [selectedTreatments, setSelectedTreatments] = useState<string[]>(['ar']);
  const [submitted, setSubmitted] = useState(false);
  const [customerName, setCustomerName] = useState('');
  const [customerContact, setCustomerContact] = useState('');

  const RX_OPTIONS = [
    { id: 'single', name: 'Single Vision', desc: 'Distance correction or dedicated reading lenses', price: 49 },
    { id: 'progressive', name: 'Standard Progressive No-Line', desc: 'Seamless multi-focal transition from distance to reading', price: 139 },
    { id: 'shamir', name: 'Shamir Auto Intelligence™ Digital Progressive', desc: 'Supreme wide-corridor high-tech digital optics with zero edge distortion', price: 189 },
    { id: 'bifocal', name: 'Lined Bifocal FT-28', desc: 'Traditional split line for distance and reading power', price: 89 },
    { id: 'plano', name: 'Plano / Non-Prescription', desc: 'Fashion frames, blue light protection, or pure sun lenses', price: 39 },
  ];

  const MATERIAL_OPTIONS = [
    { id: 'cr39', name: 'Standard Optical Resin (1.50)', desc: 'Ideal for mild prescriptions (up to +/- 2.00)', price: 0 },
    { id: 'poly', name: 'Polycarbonate Impact-Proof (1.59)', desc: '10x more impact resistant, shatter-proof for sports & kids', price: 35 },
    { id: 'highindex', name: 'Ultra-Thin High Index (1.67)', desc: '35% thinner & lighter for strong prescriptions (+/- 4.00+)', price: 65 },
  ];

  const TREATMENT_OPTIONS = [
    { id: 'ar', name: 'Diamond Anti-Reflective', desc: 'Cuts night driving glares and reflection in photos', price: 25 },
    { id: 'glacier', name: 'Glacier Expressions™ AR', desc: 'High-tech anti-reflective with maximum light transmission & oleophobic shield', price: 45 },
    { id: 'clipon', name: 'Custom Magnetic Mirrored Clip-On', desc: 'Precision hand-fabricated magnetic clip-on sun lenses tailored to your frame', price: 55 },
    { id: 'bluelight', name: 'Digital Blue Light Filter', desc: 'Filters 420nm high-energy blue-violet rays', price: 30 },
    { id: 'polarized', name: 'Polarized Sunglasses Tint', desc: '100% UV400 shield with glare elimination', price: 45 },
    { id: 'transitions', name: 'Photochromic Transitions', desc: 'Clear indoors, automatically turns dark under UV sunlight', price: 55 },
  ];

  const toggleTreatment = (id: string) => {
    if (selectedTreatments.includes(id)) {
      setSelectedTreatments(selectedTreatments.filter((item) => item !== id));
    } else {
      setSelectedTreatments([...selectedTreatments, id]);
    }
  };

  // Calculate Total
  const frameCost = frameOption === 'existing' ? 0 : 129;
  const rxCost = RX_OPTIONS.find((r) => r.id === rxType)?.price || 0;
  const materialCost = MATERIAL_OPTIONS.find((m) => m.id === lensMaterial)?.price || 0;
  const treatmentsCost = selectedTreatments.reduce((acc, currId) => {
    const treat = TREATMENT_OPTIONS.find((t) => t.id === currId);
    return acc + (treat?.price || 0);
  }, 0);

  const totalPrice = frameCost + rxCost + materialCost + treatmentsCost;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="calculator" className="py-20 bg-gradient-to-b from-[#DFEDF8] via-[#E8F2FA] to-[#DFEDF8] relative overflow-hidden">
      
      {/* Soft Ambient Sky Blurs */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-blue-200/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-white/60 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-blue-200/60 shadow-xs text-xs font-semibold uppercase tracking-wider text-obsidian-900">
            <Calculator className="w-3.5 h-3.5 text-electric-600" />
            <span>Transparent Lab Pricing & Calculator</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-obsidian-900 tracking-tight">
            Customize Lenses & Store Pricing
          </h2>
          <p className="text-neutral-600 text-sm sm:text-base max-w-xl mx-auto">
            Direct New York optical laboratory pricing with zero retail markup. Choose your frame, select digital prescription power, and lock in your price.
          </p>
        </div>

        {/* Two-Column Grid: Configurator on Left, Live Summary on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Configurator Form */}
          <div className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-8 shadow-card border border-blue-100/80 space-y-8">
            
            {/* Step 1: Frame Source */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                  Step 1 · Frame Selection
                </span>
                <span className="text-xs font-semibold text-electric-700 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200/60">
                  {frameOption === 'existing' ? 'Most Popular: $0 Frame Fee' : 'Boutique Handcrafted Frame'}
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => setFrameOption('existing')}
                  className={`p-4 rounded-2xl border text-left transition-all ${
                    frameOption === 'existing'
                      ? 'border-electric-600 bg-blue-50/60 ring-2 ring-electric-500/20'
                      : 'border-neutral-200 hover:border-blue-200 bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-sm text-obsidian-900">Re-Lens My Own Frame</span>
                    <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-blue-100 text-electric-700">
                      $0 Fee
                    </span>
                  </div>
                  <p className="text-xs text-neutral-500 mt-1">
                    Send or bring any eyeglasses or sunglasses you already own to our Freeport lab.
                  </p>
                </button>

                <button
                  type="button"
                  onClick={() => setFrameOption('new')}
                  className={`p-4 rounded-2xl border text-left transition-all ${
                    frameOption === 'new'
                      ? 'border-electric-600 bg-blue-50/60 ring-2 ring-electric-500/20'
                      : 'border-neutral-200 hover:border-blue-200 bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-sm text-obsidian-900">Choose New Boutique Frame</span>
                    <span className="text-xs font-bold text-obsidian-900">+$129</span>
                  </div>
                  <p className="text-xs text-neutral-500 mt-1">
                    Select from our Italian acetate and featherweight titanium boutique collection.
                  </p>
                </button>
              </div>
            </div>

            {/* Step 2: Prescription Type */}
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-neutral-400 block mb-3">
                Step 2 · Prescription Vision Power
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {RX_OPTIONS.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setRxType(item.id)}
                    className={`p-4 rounded-2xl border text-left transition-all flex flex-col justify-between ${
                      rxType === item.id
                        ? 'border-electric-600 bg-blue-50/60 ring-2 ring-electric-500/20'
                        : 'border-neutral-200 hover:border-blue-200 bg-white'
                    }`}
                  >
                    <div className="flex items-center justify-between w-full mb-1">
                      <span className="font-semibold text-sm text-obsidian-900">{item.name}</span>
                      <span className="text-xs font-bold text-obsidian-900">${item.price}</span>
                    </div>
                    <p className="text-xs text-neutral-500">{item.desc}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Lens Material */}
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-neutral-400 block mb-3">
                Step 3 · Optical Lens Material Index
              </span>
              <div className="grid grid-cols-1 gap-3">
                {MATERIAL_OPTIONS.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setLensMaterial(item.id)}
                    className={`p-4 rounded-2xl border text-left transition-all flex items-center justify-between ${
                      lensMaterial === item.id
                        ? 'border-electric-600 bg-blue-50/60 ring-2 ring-electric-500/20'
                        : 'border-neutral-200 hover:border-blue-200 bg-white'
                    }`}
                  >
                    <div>
                      <div className="font-semibold text-sm text-obsidian-900">{item.name}</div>
                      <div className="text-xs text-neutral-500">{item.desc}</div>
                    </div>
                    <span className="text-xs font-bold text-obsidian-900 ml-4 flex-shrink-0">
                      {item.price === 0 ? 'Included' : `+$${item.price}`}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 4: Coatings & Treatments */}
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-neutral-400 block mb-3">
                Step 4 · Advanced Protective Coatings (Multi-Select)
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {TREATMENT_OPTIONS.map((item) => {
                  const isSelected = selectedTreatments.includes(item.id);
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => toggleTreatment(item.id)}
                      className={`p-4 rounded-2xl border text-left transition-all flex items-start justify-between ${
                        isSelected
                          ? 'border-electric-600 bg-blue-50/70 ring-1 ring-electric-500/30'
                          : 'border-neutral-200 hover:border-blue-200 bg-white'
                      }`}
                    >
                      <div className="space-y-0.5">
                        <div className="flex items-center space-x-2">
                          <div
                            className={`w-4 h-4 rounded flex items-center justify-center border transition ${
                              isSelected
                                ? 'bg-electric-600 border-electric-600 text-white'
                                : 'border-neutral-300'
                            }`}
                          >
                            {isSelected && <Check className="w-3 h-3" />}
                          </div>
                          <span className="font-semibold text-xs sm:text-sm text-obsidian-900">
                            {item.name}
                          </span>
                        </div>
                        <p className="text-[11px] text-neutral-500 pl-6">{item.desc}</p>
                      </div>
                      <span className="text-xs font-bold text-obsidian-900 flex-shrink-0">
                        +${item.price}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Sticky Summary Card */}
          <div className="lg:col-span-4 sticky top-28 space-y-4">
            <div className="bg-obsidian-900 text-white rounded-3xl p-6 sm:p-7 shadow-elevated border border-white/10 space-y-6">
              
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div>
                  <span className="text-xs uppercase tracking-wider text-blue-200/80 font-medium">
                    Estimated Lab Total
                  </span>
                  <div className="font-serif text-4xl sm:text-5xl text-white mt-1">
                    ${totalPrice}
                  </div>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-blue-200">
                  <Sparkles className="w-6 h-6" />
                </div>
              </div>

              {/* Breakdown List */}
              <div className="space-y-2.5 text-xs text-blue-100/70">
                <div className="flex justify-between">
                  <span>Frame:</span>
                  <span className="text-white font-medium">
                    {frameOption === 'existing' ? 'Customer Frame ($0)' : 'Boutique Frame ($129)'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Vision Type:</span>
                  <span className="text-white font-medium">
                    {RX_OPTIONS.find((r) => r.id === rxType)?.name} (${rxCost})
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Material:</span>
                  <span className="text-white font-medium">
                    {MATERIAL_OPTIONS.find((m) => m.id === lensMaterial)?.name} (${materialCost})
                  </span>
                </div>
                {selectedTreatments.length > 0 && (
                  <div className="flex justify-between">
                    <span>Coatings ({selectedTreatments.length}):</span>
                    <span className="text-white font-medium">+${treatmentsCost}</span>
                  </div>
                )}
              </div>

              {/* Quick Inquiry Form */}
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-3 pt-4 border-t border-white/10">
                  <div className="text-xs font-semibold text-white">Lock In Quote & Request Mail-In Kit</div>
                  <input
                    type="text"
                    required
                    placeholder="Your Full Name"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 text-sm focus:outline-none focus:ring-2 focus:ring-electric-500"
                  />
                  <input
                    type="text"
                    required
                    placeholder="Phone or Email Address"
                    value={customerContact}
                    onChange={(e) => setCustomerContact(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 text-sm focus:outline-none focus:ring-2 focus:ring-electric-500"
                  />
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-electric-600 hover:bg-electric-500 text-white font-bold text-xs uppercase tracking-wider transition shadow-elevated flex items-center justify-center space-x-2"
                  >
                    <span>Request Lab Box & Quote</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              ) : (
                <div className="p-4 rounded-2xl bg-white/10 border border-white/20 text-center space-y-2 animate-in fade-in">
                  <div className="text-blue-200 font-bold text-sm">Quote Requested!</div>
                  <p className="text-xs text-blue-100/70">
                    Thank you {customerName}! Mauricio will contact you at {customerContact} to finalize frame details and send your prepaid kit.
                  </p>
                </div>
              )}

              {/* Direct Phone Call */}
              <div className="pt-2 text-center">
                <a
                  href={`tel:${SITE_INFO.phone}`}
                  className="inline-flex items-center text-xs text-blue-200/80 hover:text-white transition"
                >
                  <Phone className="w-3 h-3 mr-1.5 text-electric-400" />
                  Call Mauricio directly: {SITE_INFO.phoneFormatted}
                </a>
              </div>

            </div>

            {/* ReLense Guarantee badges */}
            <div className="bg-white rounded-2xl p-4 border border-blue-100/80 shadow-card space-y-2 text-xs text-neutral-600">
              <div className="flex items-center space-x-2.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>CareCredit Financing & HSA/FSA Flex Accepted</span>
              </div>
              <div className="flex items-center space-x-2.5 text-neutral-500">
                <Sparkles className="w-4 h-4 text-electric-600 flex-shrink-0" />
                <span>1-Year Lab Warranty · Convenient Municipal Parking Across Street</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
