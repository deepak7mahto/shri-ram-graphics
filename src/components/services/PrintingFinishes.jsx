import React from 'react';
import { Sparkles, Layers, ShieldCheck, Palette, Scissors, FileCheck } from 'lucide-react';

export default function PrintingFinishes() {
  const finishes = [
    {
      title: "Commercial Offset Printing",
      desc: "Multi-color sheetfed offset presses delivering razor-sharp text, vibrant CMYK graphics, and Pantone brand-color fidelity on Duplex, FBB, and White Kraft boards.",
      icon: Palette,
      badge: "High Resolution"
    },
    {
      title: "Spot UV & Drip-Off Varnish",
      desc: "Selective high-gloss UV coating that creates striking contrast against matte backgrounds, highlighting brand logos and key graphic accents with mirror shine.",
      icon: Sparkles,
      badge: "Luxury Contrast"
    },
    {
      title: "Thermal BOPP Lamination",
      desc: "Velvet Soft-Touch, Silky Matte, and High-Gloss BOPP thermal film lamination providing moisture barrier, scratch resistance, and premium hand-feel.",
      icon: Layers,
      badge: "Surface Barrier"
    },
    {
      title: "Hot Foil Stamping",
      desc: "Precision thermal foil transfer in Metallic Rich Gold, Silver, Copper, and Holographic foils for anti-counterfeit protection and high-end shelf presence.",
      icon: ShieldCheck,
      badge: "Metallic Shine"
    },
    {
      title: "Embossing & Debossing",
      desc: "High-pressure custom brass & magnesium dies that create 3D tactile textures, raised logos, and Braille lettering for pharmaceutical carton compliance.",
      icon: FileCheck,
      badge: "3D Tactile"
    },
    {
      title: "Auto Die-Punching & Creasing",
      desc: "High-speed automatic platen die-cutting ensuring micro-tolerance accuracy (±0.2mm), clean edges, and crack-free creasing along carton spine hinges.",
      icon: Scissors,
      badge: "Precision Cutting"
    }
  ];

  return (
    <section id="finishes" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 border border-amber-200 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-700" />
            Offset Printing & Value-Add Finishes
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-black text-slate-900 tracking-tight">
            Complete In-House Surface Embellishments
          </h2>
          <p className="mt-3 text-base text-slate-600">
            From raw board to high-gloss finished packaging, all value addition is performed under one roof at our Okhla Industrial facility for seamless quality control.
          </p>
        </div>

        {/* Finishes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {finishes.map((finish, i) => {
            const Icon = finish.icon;
            return (
              <div
                key={i}
                className="bg-slate-50 border border-slate-200 rounded-3xl p-7 space-y-4 hover:border-blue-300 hover:shadow-lg transition-all"
              >
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-blue-100/80 text-blue-700 flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-bold text-amber-800 bg-amber-100 px-3 py-1 rounded-full border border-amber-200">
                    {finish.badge}
                  </span>
                </div>

                <h3 className="text-xl font-display font-bold text-slate-900">
                  {finish.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {finish.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
