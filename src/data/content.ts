export interface Testimonial {
  name: string;
  timeAgo: string;
  location?: string;
  rating: number;
  text: string;
  tag: string;
  isLocalGuide?: boolean;
  category: 'speed' | 'care' | 'optics' | 'family';
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'Process' | 'Frames' | 'Prescriptions' | 'Shipping';
}

export const SITE_INFO = {
  name: 'Relense Optical Store',
  keyContact: 'Mauricio',
  role: 'Master Optician & Owner',
  ratingText: '5.0 / 5.0 Stars',
  ratingCount: 17,
  locationCity: 'Freeport, New York',
  address: '37B Guy Lombardo Ave, Freeport, NY 11520',
  parkingNote: 'Convenient municipal parking right across the street',
  phone: '347-878-5064',
  phoneFormatted: '(347) 878-5064',
  email: 'ceo@relense.com',
  orderContactsUrl: 'https://secure.yourlens.com/DID52349/',
  experienceYears: '20+',
  financing: 'CareCredit Accepted · HSA / FSA Eligible',
  specialties: [
    'Same-Day & 24-Hour Emergency Turnaround',
    'Shamir Auto Intelligence™ Digital Progressives',
    'Glacier Expressions™ Anti-Reflective Coatings',
    'Custom Magnetic Mirrored Clip-On Lenses',
    'Children’s Prescription Sports Goggles & Severe Astigmatism',
    'Official NY DMV 5-Minute Vision Registry',
    'Hablamos Español Fluido',
  ],
  locationsCount: '1 NY Location',
  hours: 'Open 24/7 for Inquiries · In-Store Shopping · Curbside Pickup · Delivery',
  social: {
    instagram: 'https://www.instagram.com/official_relense/?hl=en',
    facebook: 'https://www.facebook.com/relense/',
    twitter: 'https://twitter.com/officialrelense',
  },
  taglines: {
    hero: 'Save money. We want to save our patients money.',
    subhero: 'Revolutionizing vision with trend-setting eyewear that speaks your style. Put brand new custom prescription lenses into your favorite frames, or explore our handcrafted new optics.',
    reLensBadge: 'Use an Existing Pair of Eyewear',
    reLensPhilosophy: 'We give our patients the option to utilize an existing pair of eyewear they already own. Not only is this significantly cost-effective, it is also environmentally responsible and sustainable.',
  }
};

export const SERVICES = [
  {
    id: 'emergency-repairs',
    title: 'Same-Day & 24h Emergency Repairs',
    description: 'Broke your glasses or lost a pair? Mauricio delivers replacement lenses and urgent frame repairs within 24 hours or same day at the best prices.',
    badge: 'Lightning 24h Service',
    icon: 'Clock',
    startingAt: '$25',
  },
  {
    id: 'shamir-progressives',
    title: 'Shamir Auto Intelligence™ Progressives',
    description: 'High-tech digital progressive optics with Glacier Expressions anti-reflective coating for seamless distance, computer, and reading vision.',
    badge: 'Advanced Optical Tech',
    icon: 'Sparkles',
    startingAt: '$149',
  },
  {
    id: 'custom-clipons',
    title: 'Custom Magnetic Clip-On Lenses',
    description: 'Precision custom-fabricated magnetic sunglasses clip-ons, polarized filters, and mirrored tints tailored specifically to your frames.',
    badge: 'Custom Fabricated',
    icon: 'Sun',
    startingAt: '$55',
  },
  {
    id: 'kids-goggles',
    title: 'Children’s Goggles & Severe Astigmatism',
    description: 'Dedicated patient guidance on high-index cylinder corrections for severe astigmatism and impact-resistant sports goggles for children.',
    badge: 'Pediatric & Sports Optics',
    icon: 'ShieldCheck',
    startingAt: '$69',
  },
  {
    id: 'relensing',
    title: 'Precision Re-Lensing & Frame Swaps',
    description: 'Keep the frames you love. We hand-bevel and fit new digital lenses into your existing frames, saving up to 70% off retail.',
    badge: 'Eco-Friendly & Budget-Smart',
    icon: 'RefreshCw',
    startingAt: '$49',
  },
  {
    id: 'dmv-exams',
    title: 'Official NY DMV Eye Exams',
    description: 'Skip long DMV lines! Mauricio conducts your 5-minute official driver license eye exam with instant electronic registry sync.',
    badge: '5-Minute Walk-Ins',
    icon: 'Eye',
    startingAt: '$25',
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Dwayne',
    timeAgo: '1 month ago',
    rating: 5,
    text: 'Highly recommends the shop for fast service (glasses ready in 24 hours) and great customer service.',
    tag: '24-Hour Turnaround',
    category: 'speed',
  },
  {
    name: 'REYNALDO MUNOZ',
    timeAgo: '3 months ago',
    rating: 5,
    text: 'Had an emergency and received replacement glasses within 24 hours at the best prices.',
    tag: 'Emergency Glasses',
    category: 'speed',
  },
  {
    name: 'Dina alfaro',
    timeAgo: '5 months ago',
    rating: 5,
    text: 'Mauricio provided fast, kind, and patient assistance to replace lost glasses for her daughter with severe astigmatism.',
    tag: 'Severe Astigmatism',
    category: 'family',
  },
  {
    name: 'Alysha Edelman',
    timeAgo: '5 months ago',
    rating: 5,
    isLocalGuide: true,
    text: 'Praised Mauricio for being knowledgeable, honest, patient, and providing dedicated one-on-one care without rushing.',
    tag: 'Dedicated 1-on-1 Care',
    category: 'care',
  },
  {
    name: 'Carmela Travers',
    timeAgo: '6 months ago',
    rating: 5,
    isLocalGuide: true,
    text: 'Originally went in for a quick frame repair and ended up buying two pairs within her budget. Appreciated the neighborly service and convenient municipal parking across the street.',
    tag: 'Frame Repair & Budget',
    category: 'care',
  },
  {
    name: 'Ronald James',
    timeAgo: '6 months ago',
    rating: 5,
    text: 'Rated 10/10 for excellent frame selection, clear communication, and customer service. Plans to return for backup frames.',
    tag: '10/10 Frame Selection',
    category: 'care',
  },
  {
    name: 'Frances Sendrowitz',
    timeAgo: '8 months ago',
    rating: 5,
    text: 'Felt welcomed immediately; highlighted the great frame selection, affordable pricing, and accommodating service.',
    tag: 'Affordable & Welcoming',
    category: 'care',
  },
  {
    name: 'Andree Louissaint',
    timeAgo: '9 months ago',
    rating: 5,
    text: 'Longtime customer whose broken glasses were fixed overnight. Describes Mauricio as quick, reliable, and trustworthy for the whole family.',
    tag: 'Overnight Repair',
    category: 'speed',
  },
  {
    name: 'Steph Gutt.',
    timeAgo: '9 months ago',
    rating: 5,
    text: 'Excellent experience purchasing children’s eye goggles with precise, patient, and clear guidance on fit.',
    tag: 'Children’s Eye Goggles',
    category: 'family',
  },
  {
    name: 'obineche nwade',
    timeAgo: '9 months ago',
    rating: 5,
    text: 'Personal recommendation for Mauricio, highlighting his family-like treatment, attentiveness to vision needs, and willingness to go above and beyond.',
    tag: 'Family-Like Treatment',
    category: 'care',
  },
  {
    name: 'Jenny Lazare',
    timeAgo: '10 months ago',
    rating: 5,
    text: 'Fast and professional service. Noted that the store accepts CareCredit and appreciated Mauricio taking the time to explain lens add-ons.',
    tag: 'CareCredit & Honesty',
    category: 'care',
  },
  {
    name: 'ira stengel',
    timeAgo: '10 months ago',
    rating: 5,
    text: 'Found new frames for existing lenses within minutes at a very reasonable price.',
    tag: 'New Frames for Lenses',
    category: 'speed',
  },
  {
    name: 'Jamaican Rudy',
    timeAgo: '1 year ago',
    rating: 5,
    isLocalGuide: true,
    text: 'Received same-day service on new glasses and lenses at a great price.',
    tag: 'Same-Day Glasses',
    category: 'speed',
  },
  {
    name: 'M Sofia',
    timeAgo: '1 year ago',
    rating: 5,
    text: 'Came in on her family\'s long-standing recommendation after getting a new prescription and had a fantastic experience.',
    tag: 'Family Recommendation',
    category: 'family',
  },
  {
    name: 'Aidan Alfaro',
    timeAgo: '1 year ago',
    rating: 5,
    text: 'Repeat customer praising Mauricio’s attention to detail, specifically highlighting custom-made clip-on lenses.',
    tag: 'Custom Clip-On Lenses',
    category: 'optics',
  },
  {
    name: 'David Kurman',
    timeAgo: '1 year ago',
    rating: 5,
    isLocalGuide: true,
    text: 'Mauricio saw him within an hour of calling to resolve a problem with loose lenses promptly and clearly.',
    tag: 'Seen Within 1 Hour',
    category: 'speed',
  },
  {
    name: 'L Colon Bomani',
    timeAgo: '2 years ago',
    rating: 5,
    isLocalGuide: true,
    text: 'Praised Mauricio’s professional care and praised high-tech optics, including Shamir progressive lenses with Glacier Expressions anti-reflective coating and custom magnetic mirrored clip-ons.',
    tag: 'Shamir High-Tech Optics',
    category: 'optics',
  },
];

export const FAQS: FAQItem[] = [
  {
    question: 'How fast can I get replacement glasses or emergency repairs?',
    answer: 'Mauricio specializes in same-day and 24-hour turnaround for urgent frame repairs and replacement prescription lenses. Call (347) 878-5064 or walk in to 37B Guy Lombardo Ave in Freeport for immediate emergency care.',
    category: 'Process'
  },
  {
    question: 'Do you offer Shamir progressive lenses and anti-reflective coatings?',
    answer: 'Yes! We craft high-tech progressive optics including Shamir Auto Intelligence™ with Glacier Expressions™ premium anti-reflective and scratch-resistant coatings for supreme optical clarity.',
    category: 'Prescriptions'
  },
  {
    question: 'Do you make custom magnetic clip-on lenses and sports goggles?',
    answer: 'Yes. Mauricio custom-fabricates magnetic mirrored clip-ons tailored to your exact frame shape, as well as impact-resistant children\'s prescription sports goggles and specialized lenses for severe astigmatism.',
    category: 'Frames'
  },
  {
    question: 'What payment and financing methods do you accept?',
    answer: 'We accept CareCredit financing, FSA/HSA flex spending debit cards, all major credit cards, and cash. We pride ourselves on budget-friendly, transparent optical pricing with zero pressure.',
    category: 'Process'
  },
  {
    question: 'Where can I park when visiting the Freeport optical store?',
    answer: 'There is very convenient municipal parking located directly across the street from our shop at 37B Guy Lombardo Ave in Freeport, NY, as well as direct curbside pickup.',
    category: 'Shipping'
  },
  {
    question: 'Do you administer official NY DMV vision tests?',
    answer: 'Yes! Mauricio is an authorized NY DMV Vision Registry Provider. We administer official 5-minute vision tests for $25 on a walk-in basis with immediate electronic reporting to the NY DMV registry.',
    category: 'Process'
  }
];
