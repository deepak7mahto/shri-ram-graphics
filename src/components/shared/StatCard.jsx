import React from 'react';

export default function StatCard({ label, value, unit, icon: Icon, highlight = false }) {
  return (
    <div className={`p-5 rounded-2xl border transition-all ${
      highlight
        ? 'bg-gradient-to-br from-amber-500/10 via-slate-900 to-slate-900 border-amber-500/40 shadow-lg shadow-amber-500/5'
        : 'bg-slate-900/70 border-slate-800/80 hover:border-slate-700'
    }`}>
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">{label}</span>
        {Icon && <Icon className={`w-4 h-4 ${highlight ? 'text-brand-gold' : 'text-slate-500'}`} />}
      </div>
      <div className="flex items-baseline gap-1.5">
        <span className="text-2xl sm:text-3xl font-display font-extrabold text-white tracking-tight">{value}</span>
        {unit && <span className="text-xs text-slate-400 font-medium">{unit}</span>}
      </div>
    </div>
  );
}
