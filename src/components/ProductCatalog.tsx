import React, { useState } from 'react';
import { ShoppingBag, Eye, ArrowUpRight, Check, Sparkles } from 'lucide-react';
import { PRODUCTS, Product } from '../data/products';

interface ProductCatalogProps {
  onSelectProductFor3D?: (product: Product) => void;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({ onSelectProductFor3D }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const CATEGORIES = [
    { id: 'all', label: 'All' },
    { id: 'retro', label: 'Retro Revival' },
    { id: 'acetate', label: 'Classic' },
    { id: 'blue-light', label: 'Blue Light' },
    { id: 'sunglasses', label: 'Sunglass' },
  ];

  // Specific 3 showcase cards matching screenshot
  const showcaseProducts = [
    {
      id: 'italian-acetate',
      name: 'Italian acetate',
      styleTag: '3x Style',
      price: 179,
      image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=800&q=80',
      category: 'acetate',
      desc: 'Hand-milled organic Italian acetate with barrel hinges and anti-scratch coating.',
    },
    {
      id: 'vera-cat-eye',
      name: 'VERA – Soft cat-eye',
      styleTag: '2x Style',
      price: 199,
      image: 'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?auto=format&fit=crop&w=800&q=80',
      category: 'retro',
      desc: 'Sculpted cat-eye silhouette with warm amber tortoise and lightweight temples.',
      featured: true,
    },
    {
      id: 'rove-round-minimal',
      name: 'ROVE – Round minimal',
      styleTag: '3x Style',
      price: 185,
      image: 'https://images.unsplash.com/photo-1591076482161-42ce6da69f67?auto=format&fit=crop&w=800&q=80',
      category: 'blue-light',
      desc: 'Translucent crystal slate profile with blue light digital screen filter.',
    },
  ];

  const filtered = activeCategory === 'all'
    ? showcaseProducts
    : showcaseProducts.filter((p) => p.category === activeCategory || activeCategory === 'all');

  return (
    <section id="best-sellers" className="py-16 sm:py-20 bg-gradient-to-b from-[#DFEDF8] to-[#EAF3FA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header matching Screenshot layout */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          
          {/* Left Title */}
          <div>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-obsidian-900 tracking-tight leading-none">
              Best – <br />
              <span>selling Glasses</span>
            </h2>
          </div>

          {/* Center / Filter Pills matching Screenshot with ↗ button */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
            <button
              onClick={() => setActiveCategory('all')}
              className="w-9 h-9 rounded-full bg-electric-600 text-white flex items-center justify-center flex-shrink-0 shadow-xs hover:bg-electric-700 transition"
              title="All Styles"
            >
              <ArrowUpRight className="w-4 h-4" />
            </button>

            {CATEGORIES.slice(1).map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all whitespace-nowrap flex-shrink-0 ${
                  activeCategory === cat.id
                    ? 'bg-obsidian-900 text-white shadow-sm'
                    : 'bg-white/80 hover:bg-white text-neutral-700 border border-blue-200/60'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Right Subtitle matching Screenshot */}
          <div className="max-w-xs text-xs sm:text-sm text-neutral-500 font-normal leading-relaxed">
            A unique <strong className="font-semibold text-obsidian-900">blend of elegance</strong>, cutting-edge tech and affordability.
          </div>

        </div>

        {/* 3 Product Cards with Chamfered Angled Cut Corners matching Screenshot */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
          {showcaseProducts.map((prod) => (
            <div
              key={prod.id}
              className="group bg-white rounded-3xl p-6 sm:p-7 shadow-card border border-blue-100/80 hover:shadow-elevated transition-all duration-300 flex flex-col justify-between cut-top-right relative"
            >
              <div>
                {/* Top Style Tag matching Screenshot */}
                <div className="text-center pb-2">
                  <span className="text-xs font-medium text-neutral-400">
                    — {prod.styleTag}
                  </span>
                </div>

                {/* Glasses Product Image */}
                <div
                  onClick={() => setSelectedProduct(prod as any)}
                  className="cursor-pointer relative aspect-[16/11] rounded-2xl bg-[#F5F9FD] p-4 flex items-center justify-center overflow-hidden my-4 group-hover:bg-[#EBF3FA] transition-colors"
                >
                  <img
                    src={prod.image}
                    alt={prod.name}
                    className="w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  {/* Quick Action Preview */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 backdrop-blur-[2px]">
                    <a
                      href="#studio-3d"
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectProductFor3D?.(prod as any);
                      }}
                      className="px-3.5 py-1.5 rounded-full bg-white text-obsidian-900 text-xs font-semibold shadow-elevated flex items-center space-x-1"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>3D View</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Product Info & Shopping Bag Icon Button */}
              <div className="pt-2 flex items-end justify-between">
                <div>
                  <h3 className="font-serif text-lg sm:text-xl font-medium text-obsidian-900">
                    {prod.name}
                  </h3>
                  <div className="font-bold text-obsidian-900 text-sm mt-0.5">
                    ${prod.price}
                  </div>
                </div>

                <a
                  href="#calculator"
                  className={`w-9 h-9 rounded-2xl flex items-center justify-center transition-all shadow-sm ${
                    prod.featured
                      ? 'bg-obsidian-900 text-white hover:bg-electric-600 ring-2 ring-electric-500/20'
                      : 'bg-neutral-100 text-neutral-700 hover:bg-obsidian-900 hover:text-white'
                  }`}
                  title="Configure with prescription"
                >
                  <ShoppingBag className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Details */}
        {selectedProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in">
            <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-elevated relative space-y-5">
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-5 right-5 text-neutral-400 hover:text-black p-2 rounded-full hover:bg-black/5 transition"
              >
                ✕
              </button>
              <div className="aspect-[16/10] rounded-2xl overflow-hidden bg-blue-50">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-2xl text-obsidian-900">
                    {selectedProduct.name}
                  </h3>
                  <span className="text-xl font-bold text-obsidian-900">
                    ${selectedProduct.price}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  Available for in-store fitting in our Freeport NY lab or with brand-new custom lenses shipped nationwide.
                </p>
              </div>
              <div className="pt-3 border-t border-black/10 flex items-center justify-end space-x-3">
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="px-5 py-2.5 rounded-full border border-black/15 text-xs font-semibold hover:bg-black/5 transition"
                >
                  Close
                </button>
                <a
                  href="#calculator"
                  onClick={() => setSelectedProduct(null)}
                  className="px-6 py-2.5 rounded-full bg-obsidian-900 text-white text-xs font-semibold hover:bg-neutral-800 transition"
                >
                  Configure Lenses
                </a>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
