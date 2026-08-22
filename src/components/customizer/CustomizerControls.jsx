import React from 'react';
import { RotateCw, Box, Layers, Sparkles, Sliders, ToggleLeft, ToggleRight, ArrowRight } from 'lucide-react';
import { convertDimension } from '../../utils/priceCalculator';

export default function CustomizerControls({
  specs,
  setSpecs,
  isOpen,
  setIsOpen,
  autoRotate,
  setAutoRotate,
  onSyncToRFQ
}) {
  const handleUnitToggle = (newUnit) => {
    if (newUnit === specs.unit) return;
    const l = Math.round(convertDimension(specs.length, specs.unit, newUnit) * 10) / 10;
    const w = Math.round(convertDimension(specs.width, specs.unit, newUnit) * 10) / 10;
    const h = Math.round(convertDimension(specs.height, specs.unit, newUnit) * 10) / 10;
    setSpecs(prev => ({ ...prev, unit: newUnit, length: l, width: w, height: h }));
  };

  const handleFinishToggle = (finishId) => {
    setSpecs(prev => {
      const exists = prev.finishes.includes(finishId);
      return {
        ...prev,
        finishes: exists
          ? prev.finishes.filter(f => f !== finishId)
          : [...prev.finishes, finishId]
      };
    });
  };

  const boxTypes = [
    { id: 'duplex', name: 'Tuck-End Duplex', sub: 'Pharma / Cosmetics / Ortho', defaultGsm: 350 },
    { id: 'corrugated', name: 'Corrugated Master (RSC)', sub: '3-Ply / 5-Ply Shipping', defaultGsm: 400 },
    { id: 'mailer', name: 'E-Commerce Mailer', sub: 'Self-Locking Unboxing', defaultGsm: 380 },
    { id: 'rigid', name: 'Luxury Rigid Box', sub: 'Two-Piece Premium Gift', defaultGsm: 500 },
  ];

  const materials = [
    { name: 'White Duplex Board (350 GSM)', desc: 'Ultra-smooth coated board for sharp offset color printing' },
    { name: 'Natural Kraft Corrugated', desc: 'Eco-friendly high-burst virgin kraft with flute core' },
    { name: 'Luxury Matte Charcoal', desc: 'Deep black soft-touch texture for luxury & cosmetics' },
    { name: 'Bleached White Corrugated', desc: 'Clean white exterior for vibrant outer print mailers' }
  ];

  const finishesList = [
    { id: 'spot_uv', name: 'Spot UV Gloss', icon: '✨', desc: 'High-gloss raised shine on logo' },
    { id: 'gold_foil', name: 'Gold Foil Stamping', icon: '👑', desc: 'Metallic reflective hot foil' },
    { id: 'matte_lamination', name: 'Matte Lamination', icon: '🛡️', desc: 'Velvety scratch-resistant barrier' },
    { id: 'gloss_lamination', name: 'Gloss Lamination', icon: '🌟', desc: 'High-vibrancy optical glaze' },
    { id: 'embossing', name: 'Embossed Badge', icon: '⛰️', desc: 'Raised 3D tactile texture' },
  ];

  // Unit constraints for sliders
  const isMm = specs.unit === 'mm';
  const minL = isMm ? 50 : 2;
  const maxL = isMm ? 600 : 24;
  const minW = isMm ? 40 : 1.5;
  const maxW = isMm ? 450 : 18;
  const minH = isMm ? 25 : 1;
  const maxH = isMm ? 400 : 16;
  const step = isMm ? 5 : 0.25;

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl flex flex-col gap-6 text-slate-100">
      
      {/* Header with Unit Toggle and Action Controls */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4">
        <div>
          <h3 className="font-display font-bold text-lg text-white flex items-center gap-2">
            <Sliders className="w-5 h-5 text-brand-gold" />
            3D Studio Controls
          </h3>
          <p className="text-xs text-slate-400">Configure geometry, materials & finishes in real-time</p>
        </div>

        {/* Action buttons */}
        <div className="flex items-center gap-2">
          {/* Unit Toggle */}
          <div className="bg-slate-950 p-1 rounded-lg border border-slate-800 flex text-xs font-semibold">
            <button
              onClick={() => handleUnitToggle('mm')}
              className={`px-2.5 py-1 rounded transition ${specs.unit === 'mm' ? 'bg-brand-blue text-white shadow' : 'text-slate-400 hover:text-white'}`}
            >
              mm
            </button>
            <button
              onClick={() => handleUnitToggle('inch')}
              className={`px-2.5 py-1 rounded transition ${specs.unit === 'inch' ? 'bg-brand-blue text-white shadow' : 'text-slate-400 hover:text-white'}`}
            >
              inch
            </button>
          </div>

          <button
            onClick={() => setAutoRotate(!autoRotate)}
            title="Toggle 360° Auto-Rotation"
            className={`p-2 rounded-lg border text-xs flex items-center gap-1 transition ${autoRotate ? 'bg-amber-500/20 border-amber-500/50 text-amber-300' : 'bg-slate-800 border-slate-700 text-slate-400 hover:text-white'}`}
          >
            <RotateCw className={`w-4 h-4 ${autoRotate ? 'animate-spin' : ''}`} />
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`px-3 py-1.5 rounded-lg border text-xs font-medium transition ${isOpen ? 'bg-emerald-500/20 border-emerald-500/50 text-emerald-300' : 'bg-slate-800 border-slate-700 text-slate-300 hover:text-white'}`}
          >
            {isOpen ? 'Close Flap' : 'Open Flap'}
          </button>
        </div>
      </div>

      {/* 1. Box Style Selection */}
      <div>
        <label className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5 flex items-center gap-2">
          <Box className="w-4 h-4 text-brand-gold" />
          1. Packaging Format
        </label>
        <div className="grid grid-cols-2 gap-2.5">
          {boxTypes.map((type) => {
            const isSelected = specs.boxType === type.id;
            return (
              <button
                key={type.id}
                onClick={() => setSpecs(prev => ({ ...prev, boxType: type.id, gsm: type.defaultGsm }))}
                className={`p-3 rounded-xl border text-left transition-all ${
                  isSelected
                    ? 'bg-blue-600/20 border-blue-500 ring-1 ring-blue-500/50 shadow-md'
                    : 'bg-slate-950/60 border-slate-800 hover:border-slate-700 text-slate-300'
                }`}
              >
                <div className={`font-semibold text-xs sm:text-sm ${isSelected ? 'text-blue-300' : 'text-white'}`}>
                  {type.name}
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5">{type.sub}</div>
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. Dimensions Sliders */}
      <div className="space-y-4">
        <label className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center justify-between">
          <span className="flex items-center gap-2">
            <Sliders className="w-4 h-4 text-brand-gold" />
            2. Dimensions ({specs.unit})
          </span>
          <span className="text-[11px] font-normal text-amber-400">
            {specs.length} × {specs.width} × {specs.height} {specs.unit}
          </span>
        </label>

        {/* Length Slider */}
        <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800">
          <div className="flex justify-between text-xs mb-1.5">
            <span className="text-slate-400">Length (L)</span>
            <span className="font-bold text-white font-mono">{specs.length} {specs.unit}</span>
          </div>
          <input
            type="range"
            min={minL}
            max={maxL}
            step={step}
            value={specs.length}
            onChange={(e) => setSpecs(prev => ({ ...prev, length: parseFloat(e.target.value) }))}
            className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
          />
        </div>

        {/* Width Slider */}
        <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800">
          <div className="flex justify-between text-xs mb-1.5">
            <span className="text-slate-400">Width / Depth (W)</span>
            <span className="font-bold text-white font-mono">{specs.width} {specs.unit}</span>
          </div>
          <input
            type="range"
            min={minW}
            max={maxW}
            step={step}
            value={specs.width}
            onChange={(e) => setSpecs(prev => ({ ...prev, width: parseFloat(e.target.value) }))}
            className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
          />
        </div>

        {/* Height Slider */}
        <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800">
          <div className="flex justify-between text-xs mb-1.5">
            <span className="text-slate-400">Height (H)</span>
            <span className="font-bold text-white font-mono">{specs.height} {specs.unit}</span>
          </div>
          <input
            type="range"
            min={minH}
            max={maxH}
            step={step}
            value={specs.height}
            onChange={(e) => setSpecs(prev => ({ ...prev, height: parseFloat(e.target.value) }))}
            className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
          />
        </div>
      </div>

      {/* 3. Paper / Substrate Material */}
      <div>
        <label className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5 flex items-center gap-2">
          <Layers className="w-4 h-4 text-brand-gold" />
          3. Substrate / Material
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {materials.map((mat) => {
            const isSelected = specs.material === mat.name;
            return (
              <button
                key={mat.name}
                onClick={() => setSpecs(prev => ({ ...prev, material: mat.name }))}
                className={`p-2.5 rounded-xl border text-left transition ${
                  isSelected
                    ? 'bg-amber-500/15 border-amber-500/80 text-amber-200 ring-1 ring-amber-500/30'
                    : 'bg-slate-950/60 border-slate-800 text-slate-300 hover:border-slate-700'
                }`}
              >
                <div className="font-medium text-xs text-white">{mat.name}</div>
                <div className="text-[10px] text-slate-400 line-clamp-1 mt-0.5">{mat.desc}</div>
              </button>
            );
          })}
        </div>
      </div>

      {/* 4. Value-Add Finishes */}
      <div>
        <label className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5 flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-brand-gold" />
          4. Special Embellishments & Finishes
        </label>
        <div className="flex flex-wrap gap-2">
          {finishesList.map((f) => {
            const isSelected = specs.finishes.includes(f.id);
            return (
              <button
                key={f.id}
                onClick={() => handleFinishToggle(f.id)}
                className={`px-3 py-1.5 rounded-lg border text-xs font-medium flex items-center gap-1.5 transition ${
                  isSelected
                    ? 'bg-amber-500 text-slate-950 font-bold border-amber-400 shadow-glow-gold'
                    : 'bg-slate-950/60 border-slate-800 text-slate-300 hover:border-slate-700'
                }`}
              >
                <span>{f.icon}</span>
                <span>{f.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Action Footer: Sync to RFQ */}
      <div className="pt-2 border-t border-slate-800">
        <button
          onClick={onSyncToRFQ}
          className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 transition-all transform active:scale-[0.98]"
        >
          <span>Transfer 3D Specs to RFQ Estimator</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
}
