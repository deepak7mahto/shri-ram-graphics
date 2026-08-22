import React from 'react';
import { Factory, Cpu, ShieldCheck, MapPin, CheckCircle2, Award } from 'lucide-react';
import { machinery } from '../../data/machinery';
import { companyInfo } from '../../data/companyInfo';

export default function FactoryInfrastructure() {
  return (
    <section id="factory" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 border border-blue-200 text-blue-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Factory className="w-3.5 h-3.5" />
            Factory & Infrastructure
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-black text-slate-900 tracking-tight">
            Advanced Converting Plant in Okhla Phase-I
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Our 12,000+ sq. ft manufacturing plant in South Delhi houses state-of-the-art commercial printing, converting, and quality testing equipment.
          </p>
        </div>

        {/* Dual Facilities Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
          
          {/* Okhla Works Plant */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center">
                <Factory className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">Manufacturing Unit</span>
                <h3 className="text-xl font-display font-bold text-slate-900">Okhla Works Facility</h3>
              </div>
            </div>

            <p className="text-sm text-slate-700 font-mono bg-slate-50 p-4 rounded-2xl border border-slate-200 leading-relaxed">
              📍 {companyInfo.worksAddress.address}
            </p>

            <div className="grid grid-cols-2 gap-3 text-xs text-slate-600 pt-2">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>50,000+ Daily Output</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>In-House Testing Lab</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Auto Folder-Gluers</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>PAN-India Logistics</span>
              </div>
            </div>
          </div>

          {/* Badarpur Registered Office */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold text-amber-800 uppercase tracking-wider">Corporate Headquarters</span>
                <h3 className="text-xl font-display font-bold text-slate-900">Badarpur Registered Office</h3>
              </div>
            </div>

            <p className="text-sm text-slate-700 font-mono bg-slate-50 p-4 rounded-2xl border border-slate-200 leading-relaxed">
              📍 {companyInfo.registeredOffice.address}
            </p>

            <div className="grid grid-cols-2 gap-3 text-xs text-slate-600 pt-2">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>GST: {companyInfo.gstin}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Client Accounts Desk</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Delhi Jurisdiction</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Dedicated Relationship Mgr</span>
              </div>
            </div>
          </div>

        </div>

        {/* Machinery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {machinery.map((mach) => (
            <div key={mach.name} className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold text-blue-800 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                  {mach.location}
                </span>
                <Cpu className="w-4 h-4 text-slate-400" />
              </div>

              <h4 className="font-display font-bold text-lg text-slate-900">
                {mach.name}
              </h4>
              <div className="text-xs font-semibold text-blue-700">
                {mach.type}
              </div>

              <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-100 text-xs text-slate-600 space-y-1.5">
                <div><strong className="text-slate-800">Capability:</strong> {mach.specs}</div>
                <div><strong className="text-slate-800">Application:</strong> {mach.application}</div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
