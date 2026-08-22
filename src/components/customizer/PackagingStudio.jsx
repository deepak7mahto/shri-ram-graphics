import React, { useState } from 'react';
import Box3DViewer from './Box3DViewer';
import CustomizerControls from './CustomizerControls';
import { Box, Sparkles, CheckCircle2 } from 'lucide-react';

export default function PackagingStudio({ onSyncToRFQ, externalSpecs }) {
  const [specs, setSpecs] = useState(externalSpecs || {
    length: 180,
    width: 100,
    height: 45,
    unit: 'mm',
    boxType: 'duplex',
    gsm: 350,
    material: 'White Duplex Board (350 GSM)',
    finishes: ['matte_lamination', 'spot_uv']
  });

  const [isOpen, setIsOpen] = useState(false);
  const [autoRotate, setAutoRotate] = useState(false);
  const [syncedNotification, setSyncedNotification] = useState(false);

  const presets = [
    {
      name: 'Ortho Wrist Binder Duplex',
      specs: { length: 180, width: 100, height: 45, unit: 'mm', boxType: 'duplex', gsm: 350, material: 'White Duplex Board (350 GSM)', finishes: ['matte_lamination'] }
    },
    {
      name: 'E-Com Mailer Box',
      specs: { length: 280, width: 200, height: 75, unit: 'mm', boxType: 'mailer', gsm: 380, material: 'Natural Kraft Corrugated', finishes: ['matte_lamination'] }
    },
    {
      name: '5-Ply Master Shipping Carton',
      specs: { length: 450, width: 320, height: 280, unit: 'mm', boxType: 'corrugated', gsm: 450, material: 'Natural Kraft Corrugated', finishes: [] }
    },
    {
      name: 'Luxury Rigid Perfume Box',
      specs: { length: 120, width: 120, height: 180, unit: 'mm', boxType: 'rigid', gsm: 500, material: 'Luxury Matte Charcoal', finishes: ['gold_foil', 'spot_uv'] }
    }
  ];

  const handleSync = () => {
    if (onSyncToRFQ) {
      onSyncToRFQ(specs);
    }
    setSyncedNotification(true);
    setTimeout(() => setSyncedNotification(false), 4000);

    // Smooth scroll to RFQ section
    const rfqElement = document.getElementById('rfq-calculator');
    if (rfqElement) {
      rfqElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="3d-studio" className="py-20 bg-slate-950 relative overflow-hidden border-t border-slate-800/80">
      
      {/* Background Glow Ambience */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[300px] bg-amber-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-gold/10 border border-brand-gold/30 text-brand-gold text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Interactive 3D Packaging Studio
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
            Design, Scale & Preview Your Boxes in Real-Time
          </h2>
          <p className="mt-3 text-base text-slate-400">
            Adjust exact length, width, and height millimeter dimensions, inspect structural fold flaps, and simulate luxury print embellishments before manufacturing at our Okhla plant.
          </p>

          {/* Quick Presets */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            <span className="text-xs text-slate-500 font-medium mr-1">Quick Presets:</span>
            {presets.map((p) => (
              <button
                key={p.name}
                onClick={() => setSpecs(p.specs)}
                className="text-xs px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-300 hover:border-brand-gold/50 hover:text-brand-gold transition"
              >
                {p.name}
              </button>
            ))}
          </div>
        </div>

        {/* Studio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: 3D WebGL Canvas */}
          <div className="lg:col-span-7 space-y-4">
            <Box3DViewer
              length={specs.length}
              width={specs.width}
              height={specs.height}
              boxType={specs.boxType}
              material={specs.material}
              finishes={specs.finishes}
              isOpen={isOpen}
              autoRotate={autoRotate}
            />

            {/* Quick Specs HUD below Canvas */}
            <div className="grid grid-cols-3 gap-3 bg-slate-900/60 p-4 rounded-xl border border-slate-800/80 text-center">
              <div>
                <div className="text-[11px] text-slate-400 uppercase font-bold tracking-wider">Substrate</div>
                <div className="text-xs sm:text-sm font-semibold text-white mt-0.5 truncate">{specs.material.split('(')[0]}</div>
              </div>
              <div>
                <div className="text-[11px] text-slate-400 uppercase font-bold tracking-wider">Format</div>
                <div className="text-xs sm:text-sm font-semibold text-brand-gold mt-0.5 uppercase">{specs.boxType}</div>
              </div>
              <div>
                <div className="text-[11px] text-slate-400 uppercase font-bold tracking-wider">Active Finishes</div>
                <div className="text-xs sm:text-sm font-semibold text-white mt-0.5">{specs.finishes.length > 0 ? `${specs.finishes.length} Selected` : 'Standard'}</div>
              </div>
            </div>

            {/* Success Sync Banner */}
            {syncedNotification && (
              <div className="p-3 bg-emerald-500/10 border border-emerald-500/40 rounded-xl text-emerald-300 text-xs font-medium flex items-center justify-between animate-fadeIn">
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Specifications transferred! Calculating instant quotation below...
                </span>
                <a href="#rfq-calculator" className="underline font-bold hover:text-emerald-200">View Quote ↓</a>
              </div>
            )}
          </div>

          {/* Right Column: Customizer Controls */}
          <div className="lg:col-span-5">
            <CustomizerControls
              specs={specs}
              setSpecs={setSpecs}
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              autoRotate={autoRotate}
              setAutoRotate={setAutoRotate}
              onSyncToRFQ={handleSync}
            />
          </div>

        </div>

      </div>
    </section>
  );
}
