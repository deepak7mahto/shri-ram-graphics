import React, { useState } from 'react';
import { Box, Check, MessageCircle, Package, Layers } from 'lucide-react';
import { products, categories } from '../../data/products';
import { companyInfo } from '../../data/companyInfo';
import { generateWhatsAppRFQUrl } from '../../utils/whatsappFormatter';

export default function BoxesManufacturingSection({ theme = 'gold' }) {
  const [activeTab, setActiveTab] = useState('all');

  const filteredProducts = products.filter(
    p => activeTab === 'all' || p.category === activeTab
  );

  return (
    <section id="boxes-manufacturing" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-900 text-xs font-bold uppercase tracking-wider mb-3">
            <Box className="w-3.5 h-3.5" />
            Core Offerings
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-black text-slate-900 tracking-tight">
            Duplex & Corrugated Box Manufacturing
          </h2>
          <p className="mt-3 text-base text-slate-600">
            From precision folding Duplex Mono-Cartons (HSN 48192020) for medical & orthopedic goods to heavy-duty 3-ply and 5-ply corrugated master cartons.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
                  activeTab === cat.id
                    ? 'bg-slate-900 text-white shadow-md'
                    : 'bg-slate-100 border border-slate-200 text-slate-700 hover:bg-slate-200'
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
                className="bg-slate-50 rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Photo Header */}
                <div className="relative h-56 overflow-hidden bg-slate-900 flex items-center justify-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80';
                    }}
                  />
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-slate-900 shadow-sm border border-slate-200">
                    {product.badge}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-xl font-display font-bold text-slate-900 group-hover:text-amber-700 transition">
                      {product.name}
                    </h3>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      {product.tagline}
                    </p>

                    {/* Specs Matrix */}
                    <div className="grid grid-cols-2 gap-2 mt-4 pt-4 border-t border-slate-200 text-xs">
                      <div className="bg-white p-2.5 rounded-xl border border-slate-200">
                        <span className="text-slate-400 block text-[10px] uppercase font-bold">Substrate</span>
                        <span className="text-slate-800 font-semibold truncate block mt-0.5">{product.gsmRange}</span>
                      </div>
                      <div className="bg-white p-2.5 rounded-xl border border-slate-200">
                        <span className="text-slate-400 block text-[10px] uppercase font-bold">Minimum Batch</span>
                        <span className="text-emerald-700 font-semibold block mt-0.5">{product.moq}</span>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="mt-4 space-y-1.5">
                      {product.features.map((feat, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-slate-600">
                          <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-4 bg-amber-50/80 p-3 rounded-xl border border-amber-100 text-[11px] text-amber-900">
                      <strong>Application:</strong> {product.idealFor}
                    </div>
                  </div>

                  {/* Card Action */}
                  <div className="pt-4 border-t border-slate-200">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md shadow-emerald-600/20 transition"
                    >
                      <MessageCircle className="w-4 h-4 fill-current" />
                      <span>Inquire on WhatsApp</span>
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
