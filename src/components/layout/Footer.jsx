import React from 'react';
import { Phone, Mail, MapPin, ShieldCheck, MessageCircle } from 'lucide-react';
import { companyInfo } from '../../data/companyInfo';
import { trackWhatsAppClick, trackPhoneCall } from '../../utils/analytics';

export default function Footer({ theme = 'gold' }) {
  const currentYear = new Date().getFullYear();
  const currentLogo = theme === 'gold' ? companyInfo.logos.gold : companyInfo.logos.redblue;

  return (
    <footer className="bg-slate-900 text-slate-400 text-xs relative border-t border-slate-800">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand Col with Authentic Logo */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3.5">
              <div className="h-12 py-1 px-2.5 rounded-xl bg-slate-950 flex items-center justify-center border border-slate-800">
                <img
                  src={currentLogo}
                  alt="Shri Ram Graphics Logo"
                  className="h-10 w-auto object-contain"
                />
              </div>
              <div>
                <span className="font-display font-black text-base text-white block">
                  {companyInfo.name}
                </span>
                <span className="text-[10px] text-amber-400 font-bold uppercase tracking-wider block">
                  {companyInfo.tagline}
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Creative Designs & Quality Offset Printing Works | Manufacturers of Duplex & Corrugated Boxes based in New Delhi.
            </p>

            <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 space-y-1 max-w-sm">
              <div className="text-white font-semibold flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                <span>GSTIN: {companyInfo.gstin}</span>
              </div>
              <div className="text-[11px] text-slate-500">
                State & Jurisdiction: {companyInfo.stateCode}
              </div>
            </div>
          </div>

          {/* Registered Office Col */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider flex items-center gap-2">
              <MapPin className="w-4 h-4 text-amber-400" />
              Registered Office
            </h4>
            <div className="bg-slate-950/80 p-4 rounded-xl border border-slate-800 space-y-2">
              <div className="font-semibold text-slate-200">Corporate & Registered Head</div>
              <p className="text-slate-400 leading-relaxed font-mono text-xs">
                {companyInfo.registeredOffice.address}
              </p>
              <div className="text-[11px] text-slate-500">
                Badarpur, South Delhi - 110044
              </div>
            </div>
          </div>

          {/* Direct Contact Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider">
              Contact Desk
            </h4>
            <div className="space-y-3">
              <a
                href={`tel:${companyInfo.phoneRaw}`}
                onClick={trackPhoneCall}
                className="flex items-center gap-2 text-slate-200 hover:text-amber-400 transition"
              >
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="font-bold text-sm">{companyInfo.phone}</span>
              </a>
              <a
                href={`mailto:${companyInfo.email}`}
                className="flex items-center gap-2 text-slate-300 hover:text-white transition truncate block"
              >
                <Mail className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <span className="truncate">{companyInfo.email}</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {currentYear} <strong>Shri Ram Graphics</strong>. All rights reserved. Terms & Conditions: Subject to Delhi Jurisdiction.
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <a href="#home" className="hover:text-white transition">Home</a>
            <a href="#boxes-manufacturing" className="hover:text-white transition">Box Products</a>
            <a href="#offset-printing" className="hover:text-white transition">Offset Printing</a>
            <a href="#faq" className="hover:text-white transition">FAQ</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </div>
        </div>

      </div>

      {/* Floating WhatsApp Action Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href={`https://wa.me/${companyInfo.phoneRaw}?text=${encodeURIComponent('Hi Shri Ram Graphics team, I am interested in custom packaging box manufacturing.')}`}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackWhatsAppClick('Floating Button')}
          className="group flex items-center gap-2 px-4 py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full shadow-2xl shadow-emerald-600/40 transition transform hover:scale-105 active:scale-95 border-2 border-emerald-400/50"
        >
          <MessageCircle className="w-5 h-5 fill-current" />
          <span className="font-bold text-xs pr-1 hidden sm:inline-block">WhatsApp Inquiry</span>
        </a>
      </div>

    </footer>
  );
}
