import React from 'react';
import { Factory, Cpu, ShieldCheck, MapPin, CheckCircle } from 'lucide-react';
import { machinery } from '../../data/machinery';
import { companyInfo } from '../../data/companyInfo';

export default function FactoryTour() {
  return (
    <section id="factory" className="py-20 bg-slate-900 relative border-t border-slate-800">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-brand-gold text-xs font-bold uppercase tracking-wider mb-4">
            <Factory className="w-3.5 h-3.5" />
            Manufacturing Infrastructure
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
            High-Capacity Plant in Okhla Industrial Area
          </h2>
          <p className="mt-3 text-base text-slate-400">
            Equipped with multi-color commercial offset printing presses, automatic die-punching machines, and automated high-speed carton converting lines in South Delhi.
          </p>
        </div>

        {/* Dual Facilities Info Banner */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          
          {/* Okhla Plant Card */}
          <div className="bg-slate-950/80 border-2 border-brand-blue/40 rounded-2xl p-6 sm:p-7 shadow-xl relative overflow-hidden">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400">
                <Factory className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-bold text-blue-400 uppercase tracking-wider">Manufacturing Unit</span>
                <h3 className="text-lg font-bold text-white">Okhla Works Plant</h3>
              </div>
            </div>
            <p className="text-xs text-slate-300 font-mono bg-slate-900/90 p-3 rounded-xl border border-slate-800">
              {companyInfo.worksAddress.address}
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-slate-400">
              <span className="flex items-center gap-1"><CheckCircle className="w-3.5 h-3.5 text-emerald-400" /> 50k+ Daily Box Capacity</span>
              <span className="flex items-center gap-1"><CheckCircle className="w-3.5 h-3.5 text-emerald-400" /> 12,000 Sq. Ft Floor</span>
            </div>
          </div>

          {/* Badarpur Registered Office Card */}
          <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-6 sm:p-7 shadow-xl">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider">Corporate & Registered Head</span>
                <h3 className="text-lg font-bold text-white">Badarpur Office</h3>
              </div>
            </div>
            <p className="text-xs text-slate-300 font-mono bg-slate-900/90 p-3 rounded-xl border border-slate-800">
              {companyInfo.registeredOffice.address}
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-slate-400">
              <span className="flex items-center gap-1"><CheckCircle className="w-3.5 h-3.5 text-emerald-400" /> GST: {companyInfo.gstin}</span>
              <span className="flex items-center gap-1"><CheckCircle className="w-3.5 h-3.5 text-emerald-400" /> Client Account Desk</span>
            </div>
          </div>

        </div>

        {/* Machinery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {machinery.map((mach) => (
            <div key={mach.name} className="bg-slate-950/60 border border-slate-800/80 rounded-2xl p-6 hover:border-slate-700 transition space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-slate-900 text-brand-gold border border-slate-800">
                  {mach.location}
                </span>
                <Cpu className="w-4 h-4 text-slate-500" />
              </div>

              <h4 className="font-display font-bold text-base text-white">
                {mach.name}
              </h4>
              <div className="text-xs text-blue-400 font-medium">
                {mach.type}
              </div>
              
              <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800 text-xs text-slate-300 space-y-1.5">
                <div><strong className="text-slate-400">Capability:</strong> {mach.specs}</div>
                <div><strong className="text-slate-400">Product Role:</strong> {mach.application}</div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
