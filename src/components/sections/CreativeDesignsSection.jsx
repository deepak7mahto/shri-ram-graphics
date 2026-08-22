import React from 'react';
import { PenTool, Palette, Box, Layers, CheckCircle2, MessageCircle, Monitor, FileCode, Sparkles } from 'lucide-react';
import { companyInfo } from '../../data/companyInfo';

export default function CreativeDesignsSection({ theme = 'gold' }) {
  const isGold = theme === 'gold';

  const capabilities = [
    {
      title: "Box Structural 2D/3D Dieline Engineering",
      desc: "Custom CAD vector dielines for reverse-tuck, straight-tuck, auto-lock bottom duplex boxes, and corrugated master packaging boxes.",
      badge: "CAD Dieline"
    },
    {
      title: "Box Graphics & Brand Artwork Design",
      desc: "High-impact packaging artwork, product description layouts, color combinations, typography, and crisp barcode/QR code integration on boxes.",
      badge: "Artwork Design"
    },
    {
      title: "3D Digital Box Simulation & Previews",
      desc: "Photorealistic 3D box models showing realistic surface finishes (Spot UV, Foil Stamping, Matte Lamination) before physical cutting dies are made.",
      badge: "3D Virtual Mockup"
    },
    {
      title: "Pre-Press Calibration & Offset Plate Prep",
      desc: "Plate-ready pre-flighting, digital color curves, sharp micro-text rendering, and high-precision color separations for offset printing.",
      badge: "Plate Ready"
    },
    {
      title: "Sample Dummy Box Making & Fit Testing",
      desc: "Physical sample dummy boxes crafted to verify exact dimensions (Length × Width × Height), flap folding, and perfect product fitting.",
      badge: "Physical Box Testing"
    },
    {
      title: "Box Embellishment & Finish Planning",
      desc: "Strategic placement of Spot UV gloss, metallic hot foil stamping, and 3D embossing textures into the box artwork for maximum shelf impact.",
      badge: "Finish Planning"
    }
  ];

  return (
    <section id="creative-designs" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3 border ${
            isGold
              ? 'bg-amber-100 border-amber-200 text-amber-900'
              : 'bg-blue-100 border-blue-200 text-blue-900'
          }`}>
            <PenTool className="w-3.5 h-3.5" />
            Pillar 1: Creative Box Designing
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-black text-slate-900 tracking-tight">
            Custom Box Designing & Structural Dieline Engineering
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Guided by <em>"Imagine • Believe • Create"</em>, our design studio specializes in custom box structural engineering, CAD dielines, and eye-catching packaging artwork.
          </p>
        </div>

        {/* 6 Box Design Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {capabilities.map((cap, i) => (
            <div
              key={i}
              className="bg-slate-50 border border-slate-200 rounded-3xl p-7 space-y-3 hover:border-amber-400 hover:shadow-lg transition-all"
            >
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold text-amber-800 bg-amber-100 px-3 py-1 rounded-full border border-amber-200">
                  {cap.badge}
                </span>
                <Sparkles className="w-4 h-4 text-amber-500" />
              </div>

              <h3 className="text-lg font-display font-bold text-slate-900">
                {cap.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {cap.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Action Banner */}
        <div className="bg-slate-900 rounded-3xl p-7 sm:p-9 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1.5 text-left">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
              Need a Custom Box Design or Dieline?
            </span>
            <h3 className="text-xl sm:text-2xl font-display font-bold">
              Send Your Box Dimensions to Our Design Studio
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              We create custom CAD dielines and 3D digital box previews matching your exact box measurements.
            </p>
          </div>

          <a
            href={`https://wa.me/${companyInfo.phoneRaw}?text=${encodeURIComponent('Hi Shri Ram Graphics, I need custom box designing and dielines for my product.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm shadow-lg shrink-0 flex items-center gap-2 transition"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Consult Box Designers</span>
          </a>
        </div>

      </div>
    </section>
  );
}
