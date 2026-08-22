import React from 'react';
import { Sparkles, ArrowUpRight, Check, Layers, Clock, Box } from 'lucide-react';
import { generateWhatsAppRFQUrl } from '../../utils/whatsappFormatter';
import { companyInfo } from '../../data/companyInfo';

export default function ProductCard({ product, onLoadIn3D }) {
  const whatsappUrl = generateWhatsAppRFQUrl({
    boxType: product.name,
    dimensions: `${product.defaultSpecs.length} x ${product.defaultSpecs.width} x ${product.defaultSpecs.height} ${product.defaultSpecs.unit}`,
    material: product.defaultSpecs.material,
    quantity: product.moq,
    finishes: ['Standard In-House Finishing'],
    industry: product.idealFor,
    phoneNumber: companyInfo.phoneRaw
  });

  return (
    <div className="bg-slate-900/90 border border-slate-800 rounded-2xl overflow-hidden shadow-xl hover:border-slate-700 transition flex flex-col group">
      
      {/* Image Container */}
      <div className="relative h-52 overflow-hidden bg-slate-950">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition duration-500 opacity-85 group-hover:opacity-100"
        />
        
        {/* Badge */}
        <div className="absolute top-3 left-3 bg-slate-900/90 backdrop-blur-md px-3 py-1 rounded-full border border-slate-700 text-[11px] font-bold text-brand-gold">
          {product.badge}
        </div>

        {/* Category Pill */}
        <div className="absolute bottom-3 left-3 bg-slate-950/80 backdrop-blur-md px-2.5 py-1 rounded-lg text-[10px] uppercase font-bold tracking-wider text-slate-300">
          {product.category}
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
        
        <div>
          <h3 className="font-display font-bold text-lg text-white group-hover:text-brand-gold transition">
            {product.name}
          </h3>
          <p className="text-xs text-slate-400 mt-1 line-clamp-2">
            {product.tagline}
          </p>

          {/* Quick Specs Grid */}
          <div className="mt-4 pt-3 border-t border-slate-800/80 grid grid-cols-2 gap-2 text-xs">
            <div className="bg-slate-950/60 p-2 rounded-lg border border-slate-800/60">
              <span className="text-slate-500 block text-[10px] uppercase font-bold">Paper Board</span>
              <span className="text-slate-200 font-semibold text-[11px] truncate block">{product.gsmRange}</span>
            </div>
            <div className="bg-slate-950/60 p-2 rounded-lg border border-slate-800/60">
              <span className="text-slate-500 block text-[10px] uppercase font-bold">Standard MOQ</span>
              <span className="text-amber-400 font-semibold text-[11px] block">{product.moq}</span>
            </div>
          </div>

          {/* Key Features */}
          <div className="mt-3 space-y-1.5">
            {product.features.slice(0, 3).map((feat, i) => (
              <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span className="truncate">{feat}</span>
              </div>
            ))}
          </div>

          <div className="mt-3 text-[11px] text-slate-400 bg-slate-950/40 px-3 py-1.5 rounded-lg border border-slate-800/50">
            <strong className="text-slate-300">Ideal for:</strong> {product.idealFor}
          </div>
        </div>

        {/* Card Actions */}
        <div className="pt-2 border-t border-slate-800/80 flex items-center gap-2">
          <button
            onClick={() => onLoadIn3D(product.defaultSpecs)}
            className="flex-1 py-2.5 px-3 rounded-xl bg-blue-600/20 hover:bg-blue-600/30 border border-blue-500/40 text-blue-300 text-xs font-bold flex items-center justify-center gap-1.5 transition"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Load in 3D</span>
          </button>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center gap-1 transition"
          >
            <span>Quote</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>

    </div>
  );
}
