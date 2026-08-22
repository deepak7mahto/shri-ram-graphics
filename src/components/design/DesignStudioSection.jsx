import React from 'react';
import { PenTool, Palette, Box, Sparkles, Layers, CheckCircle2, MessageCircle, FileCode, Monitor } from 'lucide-react';
import { companyInfo } from '../../data/companyInfo';

export default function DesignStudioSection({ theme = 'gold' }) {
  const isGold = theme === 'gold';

  const designCapabilities = [
    {
      title: "Structural 2D/3D Dieline Engineering",
      desc: "Custom CAD vector dielines for any packaging shape — tuck-end cartons, crash-lock auto bottoms, reverse tuck, sleeve boxes, and heavy-duty shipping containers.",
      icon: Box,
      badge: "CAD Engineering"
    },
    {
      title: "Creative Branding & Packaging Graphics",
      desc: "Eye-catching graphic artwork tailored for retail shelf appeal, including typography layout, pharma ingredient charts, barcode placement, and brand color harmonies.",
      icon: Palette,
      badge: "Visual Identity"
    },
    {
      title: "Photorealistic 3D Box Mockups",
      desc: "Complete 3D digital renderings showcasing real-life surface finishes (Spot UV, Gold Foil, Matte Velvet Lamination) so you can visualize the packaging before physical plate making.",
      icon: Monitor,
      badge: "Virtual Preview"
    },
    {
      title: "Pre-Press & Color Proofing",
      desc: "Digital CMYK & Pantone color matching, plate calibration, high-resolution vector pre-flighting, and regulatory compliance checks for healthcare and FMCG brands.",
      icon: FileCode,
      badge: "Pre-Press Ready"
    },
    {
      title: "Custom Sample Prototyping",
      desc: "Physical dummy boxes created for real-life fit-testing of bottles, blister strips, orthopedic devices, jars, and electronic components before commencing mass production.",
      icon: Layers,
      badge: "Fit Verification"
    },
    {
      title: "Anti-Counterfeit & Luxury Accents",
      desc: "Incorporating security foil stamping, blind embossing, holographic textures, and specialized varnishes into the structural design to protect and elevate your product.",
      icon: Sparkles,
      badge: "Value-Add Design"
    }
  ];

  return (
    <section id="design" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3 border ${
            isGold
              ? 'bg-amber-100 border-amber-200 text-amber-900'
              : 'bg-rose-100 border-rose-200 text-rose-900'
          }`}>
            <PenTool className="w-3.5 h-3.5" />
            Core Specialization: Creative Packaging Designing
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-black text-slate-900 tracking-tight">
            From Concept & Dielines to Finished Shelf-Ready Packaging
          </h2>
          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            At <strong>Shri Ram Graphics</strong>, packaging design is not an afterthought — it is our core passion. We conceptualize, engineer, and refine your box packaging to ensure structural integrity and maximum retail brand recall.
          </p>
        </div>

        {/* Design Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-14">
          {designCapabilities.map((cap, i) => {
            const Icon = cap.icon;
            return (
              <div
                key={i}
                className="bg-slate-50 border border-slate-200 rounded-3xl p-7 space-y-4 hover:border-amber-300 hover:shadow-lg transition-all"
              >
                <div className="flex items-center justify-between">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                    isGold ? 'bg-amber-100 text-amber-700' : 'bg-rose-100 text-rose-700'
                  }`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className={`text-[11px] font-bold px-3 py-1 rounded-full border ${
                    isGold
                      ? 'bg-amber-100 text-amber-900 border-amber-200'
                      : 'bg-blue-100 text-blue-900 border-blue-200'
                  }`}>
                    {cap.badge}
                  </span>
                </div>

                <h3 className="text-xl font-display font-bold text-slate-900">
                  {cap.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {cap.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Design Workflow Callout Banner */}
        <div className={`rounded-3xl p-8 sm:p-10 border shadow-md flex flex-col md:flex-row items-center justify-between gap-6 ${
          isGold
            ? 'bg-gradient-to-r from-amber-950 via-slate-900 to-amber-950 text-white border-amber-500/30'
            : 'bg-gradient-to-r from-blue-950 via-slate-900 to-rose-950 text-white border-blue-500/30'
        }`}>
          <div className="space-y-2 text-left">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
              Have a product that needs a custom box design?
            </span>
            <h3 className="text-2xl font-display font-bold">
              Let Our Design Team Create Your Packaging Dieline & Artwork
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
              Send us your product sample dimensions or existing brand assets. We will prepare custom 3D dieline templates and render 3D proofs within 24–48 hours.
            </p>
          </div>

          <a
            href={`https://wa.me/${companyInfo.phoneRaw}?text=${encodeURIComponent('Hi Shri Ram Graphics Design Team, I need custom packaging box designing for my product.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-lg shrink-0 flex items-center gap-2 transition"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            <span>Consult Design Team</span>
          </a>
        </div>

      </div>
    </section>
  );
}
