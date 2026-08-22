import React, { useState } from 'react';
import { Package, Check, ArrowUpRight, Sparkles, MessageCircle, Layers } from 'lucide-react';
import { categories, products } from '../../data/products';
import { companyInfo } from '../../data/companyInfo';
import { generateWhatsAppRFQUrl } from '../../utils/whatsappFormatter';

export default function ProductShowcase() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProducts = products.filter(
    p => selectedCategory === 'all' || p.category === selectedCategory
  );

  return (
    <section id="products" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 border border-blue-200 text-blue-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Package className="w-3.5 h-3.5" />
            Product Portfolio & Packaging Solutions
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-black text-slate-900 tracking-tight">
            Manufactured for Durability, Aesthetic Appeal & Brand Impact
          </h2>
          <p className="mt-3 text-base text-slate-600">
            We manufacture a comprehensive range of custom folding cartons, corrugated shippers, and premium rigid boxes tailored to your brand's exact specifications.
          </p>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
                  selectedCategory === cat.id
                    ? 'bg-blue-700 text-white shadow-md shadow-blue-700/20'
                    : 'bg-white border border-slate-300 text-slate-700 hover:bg-slate-100'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => {
            const whatsappUrl = generateWhatsAppRFQUrl({
              boxType: product.name,
              dimensions: `${product.defaultSpecs.length} x ${product.defaultSpecs.width} x ${product.defaultSpecs.height} ${product.defaultSpecs.unit}`,
              material: product.defaultSpecs.material,
              quantity: product.moq,
              finishes: product.features,
              industry: product.idealFor,
              phoneNumber: companyInfo.phoneRaw
            });

            return (
              <div
                key={product.id}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Photo Header */}
                <div className="relative h-56 overflow-hidden bg-slate-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-blue-800 shadow-sm border border-slate-100">
                    {product.badge}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-xl font-display font-bold text-slate-900 group-hover:text-blue-700 transition">
                      {product.name}
                    </h3>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      {product.tagline}
                    </p>

                    {/* Specs Matrix */}
                    <div className="grid grid-cols-2 gap-2 mt-4 pt-4 border-t border-slate-100 text-xs">
                      <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                        <span className="text-slate-400 block text-[10px] uppercase font-bold">Paper Board</span>
                        <span className="text-slate-800 font-semibold truncate block mt-0.5">{product.gsmRange}</span>
                      </div>
                      <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                        <span className="text-slate-400 block text-[10px] uppercase font-bold">Minimum Batch</span>
                        <span className="text-amber-700 font-semibold block mt-0.5">{product.moq}</span>
                      </div>
                    </div>

                    {/* Features List */}
                    <div className="mt-4 space-y-1.5">
                      {product.features.map((feat, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-slate-600">
                          <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-4 bg-blue-50/70 p-3 rounded-xl border border-blue-100 text-[11px] text-blue-900">
                      <strong>Recommended for:</strong> {product.idealFor}
                    </div>
                  </div>

                  {/* Card Action Footer */}
                  <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md shadow-emerald-600/20 transition"
                    >
                      <MessageCircle className="w-4 h-4 fill-current" />
                      <span>Inquire on WhatsApp</span>
                    </a>

                    <a
                      href="#contact"
                      className="py-3 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs transition"
                    >
                      <span>Inquire</span>
                    </a>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
