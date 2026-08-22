import React from 'react';
import { Printer, Sparkles, Layers, ShieldCheck, Palette, Scissors, FileCheck } from 'lucide-react';
import { companyInfo } from '../../data/companyInfo';

export default function OffsetPrintingSection({ theme = 'gold' }) {
  const isGold = theme === 'gold';

  const printingProcesses = [
    {
      title: "Commercial Offset Presses for Boxes",
      desc: "High-speed sheetfed offset presses delivering sharp CMYK and special Pantone color fidelity on Duplex Boards and White Kraft liners up to 28 x 40 inch sheet sizes.",
      badge: "Commercial Offset"
    },
    {
      title: "Spot UV & Drip-Off Varnish on Boxes",
      desc: "Precision spot gloss coating and matte drip-off texture contrast that highlights brand logos, typography, and box artwork with mirror-like shine.",
      badge: "Spot UV Coated"
    },
    {
      title: "Thermal BOPP Lamination (Matte & Gloss)",
      desc: "Silky Velvet Soft-Touch, Scuff-Free Matte, and High-Gloss BOPP thermal lamination providing moisture resistance, tear protection, and premium hand feel on boxes.",
      badge: "Lamination"
    },
    {
      title: "Metallic Hot Foil Stamping on Boxes",
      desc: "Precision thermal transfer of Rich Gold, Silver, Rose Gold, and Holographic foils for anti-counterfeiting and striking shelf appeal on packaging boxes.",
      badge: "Foil Stamped"
    },
    {
      title: "Blind & Registered 3D Embossing",
      desc: "Raised 3D tactile textures and compliant Braille embossing on custom printed duplex and packaging boxes.",
      badge: "3D Embossed"
    },
    {
      title: "Automatic Die-Punching & Creasing",
      desc: "Micro-cutting tolerance within ±0.2mm ensuring clean edges and crack-free creasing along box folding spines during high-speed packing line runs.",
      badge: "Auto Converting"
    }
  ];

  return (
    <section id="offset-printing" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 border border-blue-200 text-blue-900 text-xs font-bold uppercase tracking-wider mb-3">
            <Printer className="w-3.5 h-3.5" />
            Pillar 2: Quality Offset Printing Works
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-black text-slate-900 tracking-tight">
            Commercial Offset Presses & In-House Surface Value Addition
          </h2>
          <p className="mt-3 text-base text-slate-600">
            From sharp 4-color process printing to high-end spot UV and thermal laminations, all box printing and finishing is executed with strict quality control.
          </p>
        </div>

        {/* 6 Printing & Finishes Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {printingProcesses.map((proc, i) => (
            <div
              key={i}
              className="bg-white border border-slate-200 rounded-3xl p-7 space-y-3 hover:border-blue-400 hover:shadow-lg transition-all"
            >
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold text-blue-800 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                  {proc.badge}
                </span>
                <Printer className="w-4 h-4 text-blue-600" />
              </div>

              <h3 className="text-lg font-display font-bold text-slate-900">
                {proc.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {proc.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
