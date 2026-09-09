import React, { useState } from 'react';
import { ShoppingBag, Eye, Sparkles, Filter, Check, ArrowUpRight } from 'lucide-react';
import { PRODUCTS, Product } from '../data/products';

interface ProductCatalogProps {
  onSelectProductFor3D?: (product: Product) => void;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({ onSelectProductFor3D }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const CATEGORIES = [
    { id: 'all', label: 'All Styles' },
    { id: 'acetate', label: 'Italian Acetate' },
    { id: 'cat-eye', label: 'Soft Cat-Eye' },
    { id: 'minimal', label: 'Round Minimal' },
    { id: 'retro', label: 'Retro Navigator' },
    { id: 'blue-light', label: 'Blue Light Shield' },
    { id: 'sunglasses', label: 'Polarized Sun' },
  ];

  const filteredProducts =
    activeCategory === 'all'
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === activeCategory);

  return (
    <section id="best-sellers" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cream-200 text-obsidian-900 text-xs font-semibold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-accent-gold" />
              <span>Curated Eyewear Archive</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl text-obsidian-900 leading-tight">
              Best-Selling Glasses
            </h2>
            <p className="text-neutral-500 text-sm mt-2 max-w-lg">
              A unique blend of elegance, cutting-edge tech, and affordability. Available with custom prescription lenses fitted in our New York lab.
            </p>
          </div>

          {/* Filter Pills with Horizontal Swipe on Mobile */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2 sm:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 sm:px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all whitespace-nowrap flex-shrink-0 ${
                  activeCategory === cat.id
                    ? 'bg-obsidian-900 text-white shadow-sm ring-2 ring-black/10'
                    : 'bg-[#F6F5F2] text-neutral-600 hover:bg-neutral-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid matching Dribbble inspiration */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-[#FAF9F6] rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-black/5 hover:border-black/15 transition-all duration-300 hover:shadow-elevated flex flex-col justify-between relative overflow-hidden"
            >
              {/* Top Card Badge */}
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-neutral-400">
                  Rx Style
                </span>
                {product.badge && (
                  <span className="text-[10px] sm:text-[11px] font-bold px-2 sm:px-2.5 py-0.5 rounded-full bg-white text-obsidian-900 border border-black/5 shadow-sm">
                    {product.badge}
                  </span>
                )}
              </div>

              {/* Product Image on clean pedestal backdrop */}
              <div
                onClick={() => setSelectedProduct(product)}
                className="cursor-pointer relative aspect-[16/11] rounded-xl sm:rounded-2xl bg-white p-3 sm:p-4 flex items-center justify-center overflow-hidden mb-4 sm:mb-6 group-hover:bg-[#F2EFE9] transition-colors"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover rounded-lg sm:rounded-xl transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Floating Quick Actions (Hover on Desktop) */}
                <div className="hidden sm:flex absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity items-center justify-center gap-3 backdrop-blur-[2px]">
                  <a
                    href="#studio-3d"
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectProductFor3D?.(product);
                    }}
                    className="p-3 rounded-full bg-white text-obsidian-900 hover:bg-accent-gold hover:text-white transition shadow-elevated font-medium text-xs flex items-center space-x-1.5"
                    title="Inspect in 3D"
                  >
                    <Eye className="w-4 h-4" />
                    <span>3D View</span>
                  </a>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProduct(product);
                    }}
                    className="p-3 rounded-full bg-obsidian-900 text-white hover:bg-black transition shadow-elevated font-medium text-xs flex items-center space-x-1.5"
                  >
                    <span>Details</span>
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="space-y-2">
                <div className="flex items-baseline justify-between">
                  <h3 className="font-serif text-xl font-medium text-obsidian-900">
                    {product.name}
                  </h3>
                  <div className="text-right">
                    <span className="font-bold text-obsidian-900 text-base">
                      ${product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-xs text-neutral-400 line-through ml-1.5">
                        ${product.originalPrice}
                      </span>
                    )}
                  </div>
                </div>

                <p className="text-xs text-neutral-500">{product.subtitle}</p>

                {/* Color dots & dimensions */}
                <div className="pt-3 border-t border-black/5 flex items-center justify-between">
                  <div className="flex items-center space-x-1.5">
                    {product.colors.map((c) => (
                      <span
                        key={c.name}
                        className="w-3.5 h-3.5 rounded-full border border-black/10 shadow-xs"
                        style={{ backgroundColor: c.hex }}
                        title={c.name}
                      />
                    ))}
                  </div>
                  <span className="text-[11px] font-mono text-neutral-400">
                    {product.dimensions}
                  </span>
                </div>

                {/* Mobile-only Quick Action Buttons */}
                <div className="sm:hidden pt-3 mt-1 border-t border-black/5 flex items-center gap-2">
                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="flex-1 py-2 rounded-xl bg-obsidian-900 text-white text-xs font-semibold text-center"
                  >
                    View Specs
                  </button>
                  <a
                    href="#studio-3d"
                    onClick={() => onSelectProductFor3D?.(product)}
                    className="px-3 py-2 rounded-xl border border-black/15 text-obsidian-900 text-xs font-semibold flex items-center justify-center"
                    title="Try in 3D"
                  >
                    <Eye className="w-3.5 h-3.5 mr-1 text-accent-gold" />
                    <span>3D</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Product Details Modal */}
        {selectedProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in">
            <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-elevated relative space-y-6">
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-5 right-5 text-neutral-400 hover:text-black p-2 rounded-full hover:bg-black/5 transition"
              >
                ✕
              </button>

              <div className="aspect-[16/10] rounded-2xl overflow-hidden bg-cream-100">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-3xl text-obsidian-900">
                    {selectedProduct.name}
                  </h3>
                  <span className="text-2xl font-bold text-obsidian-900">
                    ${selectedProduct.price}
                  </span>
                </div>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  {selectedProduct.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {selectedProduct.tags.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-full bg-cream-200 text-xs font-semibold text-neutral-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-black/10 flex items-center justify-end space-x-3">
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
                  Configure with Prescription
                </a>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
