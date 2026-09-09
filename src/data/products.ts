export interface Product {
  id: string;
  name: string;
  subtitle: string;
  category: 'acetate' | 'cat-eye' | 'minimal' | 'retro' | 'blue-light' | 'sunglasses';
  price: number;
  originalPrice?: number;
  image: string;
  colors: { name: string; hex: string; frameColor3d: string }[];
  badge?: string;
  dimensions: string;
  description: string;
  tags: string[];
}

export const PRODUCTS: Product[] = [
  {
    id: 'italian-acetate',
    name: 'Italian Acetate',
    subtitle: 'Hand-Milled Tortoise Frame',
    category: 'acetate',
    price: 179,
    originalPrice: 220,
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=800&q=80',
    colors: [
      { name: 'Warm Amber Tortoise', hex: '#8C5428', frameColor3d: '#78461E' },
      { name: 'Matte Obsidian', hex: '#1C1C1E', frameColor3d: '#181A1D' },
      { name: 'Crystal Slate', hex: '#708090', frameColor3d: '#5B6875' }
    ],
    badge: 'Best Seller',
    dimensions: '51-19-145 mm',
    description: 'Carved from premium organic cellulose acetate with barrel hinges. Exceptional balance and subtle beveling on the brows.',
    tags: ['Italian Acetate', 'Handcrafted', 'Rx-Ready']
  },
  {
    id: 'vera-cat-eye',
    name: 'VERA – Soft Cat-Eye',
    subtitle: 'Sculpted Golden Profile',
    category: 'cat-eye',
    price: 299,
    image: 'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?auto=format&fit=crop&w=800&q=80',
    colors: [
      { name: 'Honey Amber', hex: '#D4A373', frameColor3d: '#C59A6F' },
      { name: 'Gloss Onyx', hex: '#111111', frameColor3d: '#121316' },
      { name: 'Champagne Nude', hex: '#E8D8C8', frameColor3d: '#DDD0C0' }
    ],
    badge: 'Editorial Favorite',
    dimensions: '53-18-140 mm',
    description: 'An architectural take on the 1960s cat-eye silhouette. Elevated temples with soft rounded corners that flatter every face shape.',
    tags: ['Soft Cat-Eye', 'Signature Curve', 'Lightweight']
  },
  {
    id: 'rove-round-minimal',
    name: 'ROVE – Round Minimal',
    subtitle: 'Pure Titanium Wireframe',
    category: 'minimal',
    price: 185,
    originalPrice: 215,
    image: 'https://images.unsplash.com/photo-1577803645773-f96470509666?auto=format&fit=crop&w=800&q=80',
    colors: [
      { name: 'Antique Bronze', hex: '#5D4037', frameColor3d: '#4E3629' },
      { name: 'Satin Silver', hex: '#B0BEC5', frameColor3d: '#90A4AE' },
      { name: 'Brushed Gold', hex: '#D4AF37', frameColor3d: '#C5A028' }
    ],
    badge: 'Featherlight',
    dimensions: '49-21-145 mm',
    description: 'Engineered from Japanese aerospace titanium weighing under 14 grams. Hypoallergenic silicone nose pads for all-day comfort.',
    tags: ['Round Minimal', 'Titanium', 'Ultra-Light']
  },
  {
    id: 'chrono-aviator',
    name: 'CHRONO – Pilot Navigator',
    subtitle: 'Double Bridge Vintage Lux',
    category: 'retro',
    price: 210,
    image: 'https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&w=800&q=80',
    colors: [
      { name: 'Polished Gold / Bottle Green', hex: '#CFB53B', frameColor3d: '#B89B2B' },
      { name: 'Gunmetal / Smoke', hex: '#2F4F4F', frameColor3d: '#263238' }
    ],
    badge: 'Retro Icon',
    dimensions: '56-16-145 mm',
    description: 'Precision double-bridge aviator updated with modernized angular lens contours and anti-reflective mineral glass.',
    tags: ['Retro Navigator', 'Double-Bridge', 'Polarized Option']
  },
  {
    id: 'lumina-blue-shield',
    name: 'LUMINA – Digital Defense',
    subtitle: '420nm Blue Light Filter',
    category: 'blue-light',
    price: 155,
    image: 'https://images.unsplash.com/photo-1591076482161-42ce6da69f67?auto=format&fit=crop&w=800&q=80',
    colors: [
      { name: 'Crystal Clear Ice', hex: '#E0E6ED', frameColor3d: '#D6DEE8' },
      { name: 'Smoky Charcoal', hex: '#374151', frameColor3d: '#1F2937' }
    ],
    badge: 'Screen Certified',
    dimensions: '52-19-142 mm',
    description: 'Designed specifically for heavy screen workers and gamers. Blocks 99.8% of harmful high-energy blue-violet light rays.',
    tags: ['Blue Light Shield', 'Zero Glare', 'Digital Fatigue']
  },
  {
    id: 'solstice-polar',
    name: 'SOLSTICE – Coastal Sun',
    subtitle: 'UV400 Polarized Optics',
    category: 'sunglasses',
    price: 225,
    image: 'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?auto=format&fit=crop&w=800&q=80',
    colors: [
      { name: 'Havana Sun Tortoise', hex: '#6D4C41', frameColor3d: '#5D4037' },
      { name: 'Jet Noir', hex: '#000000', frameColor3d: '#0F1012' }
    ],
    badge: 'Summer Essential',
    dimensions: '54-20-145 mm',
    description: 'Deep polarization eliminates blinding glare off water, pavement, and snow while preserving vibrant true-color contrast.',
    tags: ['Polarized Sun', 'UV400', 'Coastal Shield']
  }
];
