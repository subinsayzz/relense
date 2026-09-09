export interface Testimonial {
  name: string;
  location: string;
  rating: number;
  text: string;
  tag: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'Process' | 'Frames' | 'Prescriptions' | 'Shipping';
}

export const SITE_INFO = {
  name: 'ReLense',
  locationCity: 'Freeport, New York',
  address: '37 Guy Lombardo Ave Unit 1, Freeport, NY 11520',
  phone: '347-878-5064',
  phoneFormatted: '(347) 878-5064',
  email: 'ceo@relense.com',
  orderContactsUrl: 'https://secure.yourlens.com/DID52349/',
  experienceYears: '20+',
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
    id: 'relensing',
    title: 'Precision Re-Lensing',
    description: 'Breathe new life into your cherished frames. We cut and mount brand new custom prescription or tinted lenses in-house.',
    badge: 'Eco-Friendly & Budget-Smart',
    icon: 'RefreshCw',
    startingAt: '$49',
  },
  {
    id: 'dmv-exams',
    title: 'NY DMV Eye Exams',
    description: 'Fast, seamless driver license renewal eye test. Administered on-site by Mauricio with instant electronic reporting to NY DMV.',
    badge: 'Walk-Ins Welcome',
    icon: 'Eye',
    startingAt: '$25',
  },
  {
    id: 'designer-frames',
    title: 'Curated Eyewear & Optics',
    description: 'Hand-selected Italian acetate, titanium minimal wire frames, and bespoke sunglasses tailored to your facial geometry.',
    badge: 'Bespoke Fit',
    icon: 'Glasses',
    startingAt: '$119',
  },
  {
    id: 'repair-adjustments',
    title: 'Frame Repairs & Tune-Ups',
    description: 'Laser hinge welding, screw replacement, ultrasonic deep cleaning, and precision temple adjustment for flawless comfort.',
    badge: 'Expert Craft',
    icon: 'Wrench',
    startingAt: '$20',
  },
  {
    id: 'nationwide-shipping',
    title: 'Nationwide Mail-In Lab',
    description: 'Live outside Long Island? Mail your frames safely from anywhere in the US. We inspect, fit new lenses, and ship back tracked.',
    badge: 'Coast-to-Coast',
    icon: 'PackageCheck',
    startingAt: 'Free Shipping Over $99',
  },
  {
    id: 'contact-lenses',
    title: 'Contact Lens Ordering',
    description: 'Order daily, bi-weekly, or monthly contact lenses delivered straight to your door via our secure YourLens optical portal.',
    badge: 'Direct Portal',
    icon: 'Sparkles',
    startingAt: 'Direct Lab Pricing',
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Elizabeth P.',
    location: 'Bay Shore, NY',
    rating: 5,
    text: 'These guys are awesome!!! They offer so many options for sunglasses too. The lenses are high quality and the turn around time is wonderful. I highly recommend!',
    tag: 'Sunglasses & Turnaround'
  },
  {
    name: 'Mary S.',
    location: 'Freeport, NY',
    rating: 5,
    text: 'Mauricio was great. Took care of us right away. Fast easy drivers license eye test. Would highly recommend.',
    tag: 'DMV Vision Test'
  },
  {
    name: 'Jenny M.',
    location: 'Freeport, NY',
    rating: 5,
    text: 'I could not be happier with my new lenses and the attention that Mauricio provides. He explains everything in detail and makes sure your new glasses fit perfectly.',
    tag: 'Custom Re-Lensing'
  }
];

export const FAQS: FAQItem[] = [
  {
    question: 'What does the re-lensing process cost?',
    answer: 'Patient costs vary depending on your prescription (single vision, bifocal, progressive) and the lens treatments you select (anti-reflective, blue light shield, high-index, or polarized sunglasses). Because every order is customized in our lab, use our interactive calculator below or contact Mauricio for a quick personalized quote.',
    category: 'Process'
  },
  {
    question: 'What types of frames can be relensed?',
    answer: 'Patients can place new lenses into almost any eyeglasses or Rx-able sunglasses—including acetate, horn, metal wire, semi-rimless, and luxury designer frames you already own and love.',
    category: 'Frames'
  },
  {
    question: 'What if my frames are very old or vintage?',
    answer: 'Patients with older or delicate vintage frames will have their frame evaluated by our master opticians to ensure structural integrity before cutting. You can easily send a photo or video to ceo@relense.com or text (347) 878-5064 prior to visiting or mailing.',
    category: 'Frames'
  },
  {
    question: 'Can you fix or polish scratched lenses?',
    answer: 'Unfortunately, optical lenses cannot be buffed or polished once scratched, as polishing alters the optical curvature and prescription accuracy. Relense will gladly fabricate a brand new pair of scratch-resistant coated lenses directly fitted to your frame.',
    category: 'Process'
  },
  {
    question: 'Can I purchase lenses if I do not have a physical copy of my prescription?',
    answer: 'Yes! Contact us directly. We can assist in contacting your doctor, reading the prescription off your existing lenses using our digital lensometer, or scheduling a visit to verify your vision.',
    category: 'Prescriptions'
  },
  {
    question: 'Do you offer NY DMV eye tests for driver licenses?',
    answer: 'Yes! We administer fast, official NY DMV vision tests in our Freeport shop. No appointments are mandatory—walk-ins are welcome, and we upload your test results directly to the NY State DMV system instantly.',
    category: 'Process'
  }
];
