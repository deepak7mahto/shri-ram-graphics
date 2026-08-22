import React from 'react';
import { ShieldCheck, Award, CheckCircle2, Truck, RefreshCw, Layers } from 'lucide-react';
import { companyInfo } from '../../data/companyInfo';

export default function QualityBadges() {
  return (
    <section className="py-14 bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {companyInfo.trustPillars.map((pillar, i) => (
            <div key={i} className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 space-y-2">
              <div className="flex items-center gap-2 text-brand-gold font-bold text-sm">
                <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0" />
                <span>{pillar.title}</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
