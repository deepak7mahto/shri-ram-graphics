import React, { useState } from 'react';
import { Menu, X, MessageCircle, Sparkles } from 'lucide-react';
import { companyInfo } from '../../data/companyInfo';

export default function Navbar({ theme = 'gold', setTheme }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Box Products', href: '#boxes-manufacturing' },
    { name: 'Offset Printing Works', href: '#offset-printing' },
    { name: 'Contact & Office', href: '#contact' },
  ];

  const currentLogo = theme === 'gold' ? companyInfo.logos.gold : companyInfo.logos.redblue;
  const isGold = theme === 'gold';

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Brand Logo & Name (Visible on Mobile & Desktop) */}
          <a href="#home" className="flex items-center gap-2.5 sm:gap-3.5 group shrink-0 min-w-0">
            <div className="h-10 sm:h-12 py-1 px-2 rounded-xl bg-slate-950 flex items-center justify-center border border-slate-800 shadow-sm shrink-0">
              <img
                src={currentLogo}
                alt="Shri Ram Graphics Logo"
                className="h-8 sm:h-10 w-auto object-contain"
              />
            </div>
            
            <div className="leading-tight truncate">
              <span className="font-display font-black text-xs sm:text-lg lg:text-xl text-slate-900 tracking-tight block truncate group-hover:text-amber-700 transition">
                SHRI RAM GRAPHICS
              </span>
              <span className={`text-[8px] sm:text-[10px] lg:text-[11px] font-bold tracking-wider uppercase block truncate ${
                isGold ? 'text-amber-600' : 'text-rose-600'
              }`}>
                Imagine • Believe • Create
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 xl:gap-9">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-bold text-slate-700 hover:text-amber-700 transition whitespace-nowrap"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Right Actions */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            
            {/* Theme Toggle */}
            <div className="bg-slate-100 p-1 rounded-xl border border-slate-200 flex items-center gap-1 text-xs">
              <button
                onClick={() => setTheme('gold')}
                className={`px-2.5 py-1 rounded-lg font-bold flex items-center gap-1 transition ${
                  isGold
                    ? 'bg-amber-500 text-slate-950 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
                title="Gold Logo Theme"
              >
                <Sparkles className="w-3 h-3" />
                <span>Gold</span>
              </button>

              <button
                onClick={() => setTheme('redblue')}
                className={`px-2.5 py-1 rounded-lg font-bold flex items-center gap-1 transition ${
                  !isGold
                    ? 'bg-blue-700 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
                title="Red & Blue Logo Theme"
              >
                <span>Red/Blue</span>
              </button>
            </div>

            {/* WhatsApp CTA */}
            <a
              href={`https://wa.me/${companyInfo.phoneRaw}?text=${encodeURIComponent('Hi Shri Ram Graphics, I would like to inquire about custom box manufacturing and printing.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-md shadow-emerald-600/20 transition flex items-center gap-1.5 whitespace-nowrap"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>WhatsApp Inquiry</span>
            </a>
          </div>

          {/* Mobile Right Actions */}
          <div className="flex lg:hidden items-center gap-1.5 sm:gap-2">
            <button
              onClick={() => setTheme(isGold ? 'redblue' : 'gold')}
              className={`px-2 py-1 rounded-lg text-[10px] sm:text-xs font-bold border transition ${
                isGold
                  ? 'bg-amber-100 text-amber-900 border-amber-300'
                  : 'bg-blue-100 text-blue-900 border-blue-300'
              }`}
              title="Switch Logo Theme"
            >
              {isGold ? '✨ Gold' : '🎨 Red/Blue'}
            </button>
            
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 sm:p-2 rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 transition"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-5 space-y-2.5 shadow-xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-xl text-sm font-bold text-slate-800 hover:bg-amber-50 hover:text-amber-800 transition"
            >
              {link.name}
            </a>
          ))}

          <div className="pt-2 border-t border-slate-200 space-y-2">
            <a
              href={`https://wa.me/${companyInfo.phoneRaw}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 rounded-xl bg-emerald-600 text-white text-xs font-bold text-center flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>WhatsApp: +91 9810254955</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
