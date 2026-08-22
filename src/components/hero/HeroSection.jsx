import React from 'react';
import { ArrowRight, CheckCircle2, Phone, ShieldCheck, Box, MessageCircle, Sparkles, Printer, Building } from 'lucide-react';
import { companyInfo } from '../../data/companyInfo';
import { trackWhatsAppClick } from '../../utils/analytics';

export default function HeroSection({ theme = 'gold' }) {
  const isGold = theme === 'gold';

  const pillars = [
    {
      title: "Duplex & Corrugated Boxes",
      tag: "Box Manufacturing",
      desc: "Custom printed Duplex Mono-Cartons (HSN 48192020) and 3-ply/5-ply corrugated master cartons.",
      href: "#boxes-manufacturing",
      icon: Box,
      color: "emerald"
    },
    {
      title: "Quality Offset Printing Works",
      tag: "Commercial Press Works",
      desc: "Multi-color CMYK offset presses, Spot UV, thermal BOPP lamination, foil stamping & embossing on boxes.",
      href: "#offset-printing",
      icon: Printer,
      color: "blue"
    },
    {
      title: "Direct Inquiry & Quotation",
      tag: "Registered Office Desk",
      desc: "Fast quotation proformas and instant WhatsApp support from our South Delhi team.",
      href: "#contact",
      icon: Building,
      color: "amber"
    }
  ];

  return (
    <section id="home" className={`relative py-16 sm:py-20 border-b border-slate-200 overflow-hidden ${
      isGold
        ? 'bg-gradient-to-b from-amber-50/60 via-white to-slate-50'
        : 'bg-gradient-to-b from-blue-50/50 via-white to-slate-50'
    }`}>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Hero Header */}
        <div className="text-center max-w-4xl mx-auto space-y-5">
          
          {/* Brand Pill Tag */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 text-white text-xs font-bold uppercase tracking-wider shadow-sm">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <span>Imagine • Believe • Create</span>
          </div>

          {/* Core Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-black text-slate-900 tracking-tight leading-[1.15]">
            Creative Designs & <span className={isGold ? 'text-amber-600' : 'text-blue-700'}>Quality Offset Printing Works</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl font-bold text-slate-800 font-display">
            Manufacturers of Duplex & Corrugated Boxes
          </p>

          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Delivering high-quality <strong>Duplex Mono-Cartons</strong> for Orthopedic/Healthcare products and heavy-duty <strong>Corrugated Master Boxes</strong> with in-house commercial offset printing in New Delhi.
          </p>

          {/* Main Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href={`https://wa.me/${companyInfo.phoneRaw}?text=${encodeURIComponent('Hi Shri Ram Graphics, I want to inquire about duplex and corrugated box manufacturing.')}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick('Hero Section CTA')}
              className="px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md shadow-emerald-600/20 transition flex items-center gap-2 transform active:scale-95"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>WhatsApp Production Desk: {companyInfo.phone}</span>
            </a>

            <a
              href="#boxes-manufacturing"
              className="px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm shadow-md transition flex items-center gap-2 transform active:scale-95"
            >
              <span>Explore Box Products</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

        </div>

        {/* Core Pillars Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <a
                key={pillar.title}
                href={pillar.href}
                className="bg-white rounded-3xl p-7 border border-slate-200 shadow-sm hover:shadow-xl hover:border-amber-400 transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-slate-100 group-hover:bg-amber-100 text-slate-800 group-hover:text-amber-800 flex items-center justify-center transition">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                      {pillar.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-display font-bold text-slate-900 group-hover:text-amber-700 transition">
                    {pillar.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs font-bold text-blue-700 group-hover:text-amber-700 transition">
                  <span>View Details & Inquire</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
            );
          })}
        </div>

      </div>

    </section>
  );
}
