import React from 'react';
import { Building2, Award, ShieldCheck, Factory, CheckCircle2, PenTool, Printer, Box } from 'lucide-react';
import { companyInfo } from '../../data/companyInfo';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Building2 className="w-3.5 h-3.5 text-blue-700" />
            About Shri Ram Graphics
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-black text-slate-900 tracking-tight">
            Creative Designs & Quality Offset Printing Works
          </h2>
          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            <strong>Shri Ram Graphics</strong> operates under the core motto: <em>"Imagine • Believe • Create"</em>. We are premier manufacturers of <strong>Duplex Boxes (Mono-Cartons)</strong> and <strong>Corrugated Master Shipping Boxes</strong> with an integrated packaging design studio and commercial offset printing works based in South Delhi.
          </p>
        </div>

        {/* 3 Core Pillars: Design, Print, Box Manufacturing */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          
          {/* 1. Creative Packaging Design */}
          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-7 space-y-4 hover:border-amber-400 hover:shadow-lg transition duration-300">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
              <PenTool className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-display font-bold text-slate-900">
              1. Creative Box & Dieline Designing
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              We specialize in custom structural packaging design, precision CAD vector dielines, and eye-catching branding graphics for <strong>Orthopedic & Healthcare products</strong> (e.g. Wrist Binders, Knee Supports), Pharma cartons, Cosmetics, and FMCG packaging.
            </p>
          </div>

          {/* 2. Quality Offset Printing */}
          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-7 space-y-4 hover:border-blue-400 hover:shadow-lg transition duration-300">
            <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-800 flex items-center justify-center font-bold">
              <Printer className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-display font-bold text-slate-900">
              2. Quality Offset Printing Works
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Commercial multi-color sheetfed offset presses ensuring exact CMYK color calibration, sharp typography, barcode legibility, and premium finishes including Spot UV, Thermal BOPP Lamination, Gold Foil Stamping, and Embossing.
            </p>
          </div>

          {/* 3. Duplex & Corrugated Box Manufacturing */}
          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-7 space-y-4 hover:border-emerald-400 hover:shadow-lg transition duration-300">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
              <Box className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-display font-bold text-slate-900">
              3. Duplex & Corrugated Manufacturing
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              High-speed automatic platen die-punching, crack-free creasing, and automated folder-gluer lines manufacturing folding cartons (HSN 48192020) and heavy-duty 3-ply/5-ply corrugated master cartons at our Okhla Phase-I facility.
            </p>
          </div>

        </div>

        {/* Corporate Trust & Credentials Banner */}
        <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 rounded-3xl p-8 sm:p-10 text-white shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-3">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">Verified Business Credentials</span>
              <h3 className="text-2xl sm:text-3xl font-display font-bold">
                Trusted Manufacturing & Design Partner for Leading Brands
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed max-w-2xl">
                Serving top medical, orthopedic care, healthcare, cosmetic, and industrial enterprises across Delhi NCR and nationwide. All invoices backed by verified GST compliance (<strong>{companyInfo.gstin}</strong>) under Delhi Jurisdiction.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
              <a
                href="#contact"
                className="px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm text-center shadow-lg transition"
              >
                Request Custom Quotation
              </a>
              <a
                href={`tel:${companyInfo.phoneRaw}`}
                className="px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-bold text-sm text-center transition"
              >
                Call Office: {companyInfo.phone}
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
