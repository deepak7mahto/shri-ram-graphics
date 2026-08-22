import React from 'react';
import { Phone, ShieldCheck, Building2 } from 'lucide-react';
import { companyInfo } from '../../data/companyInfo';

export default function TopBar() {
  return (
    <div className="bg-slate-950 text-slate-300 text-[11px] sm:text-xs py-1.5 sm:py-2 px-3 sm:px-6 lg:px-8 border-b border-slate-800">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-1.5 sm:gap-2">
        
        {/* Full Registered Office Detail */}
        <div className="flex items-start sm:items-center gap-1.5 text-slate-300 text-[10px] sm:text-xs leading-tight">
          <Building2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-400 shrink-0 mt-0.5 sm:mt-0" />
          <span>
            <strong className="text-white font-semibold">Reg. Off.:</strong> Building No.-7, GF, Street No.-26C1, Molarband Extn., Badarpur, New Delhi-110044
          </span>
        </div>

        {/* GSTIN & Phone */}
        <div className="flex items-center justify-between md:justify-end gap-3 sm:gap-4 text-[10px] sm:text-xs shrink-0 pt-1 sm:pt-0 border-t border-slate-800/80 md:border-0">
          <div className="flex items-center gap-1 text-slate-400">
            <ShieldCheck className="w-3 h-3 text-blue-400 shrink-0" />
            <span>GSTIN: <strong className="text-white font-mono">{companyInfo.gstin}</strong></span>
          </div>

          <span className="text-slate-700 hidden sm:inline">•</span>

          <a
            href={`tel:${companyInfo.phoneRaw}`}
            className="flex items-center gap-1 text-amber-400 hover:text-amber-300 font-bold transition whitespace-nowrap"
          >
            <Phone className="w-3 h-3 shrink-0" />
            <span>{companyInfo.phone}</span>
          </a>
        </div>

      </div>
    </div>
  );
}
