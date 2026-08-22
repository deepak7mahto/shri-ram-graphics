import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Sparkles, MessageCircle } from 'lucide-react';
import { companyInfo } from '../../data/companyInfo';

export default function FAQSection({ theme = 'gold' }) {
  const [openIndex, setOpenIndex] = useState(0);

  const isGold = theme === 'gold';

  const faqs = [
    {
      q: "What types of boxes does Shri Ram Graphics manufacture?",
      a: "Shri Ram Graphics manufactures custom printed Duplex Boxes (Mono-Cartons, HSN 48192020) and Corrugated Master Shipping Boxes (3-Ply and 5-Ply). We specialize in packaging for orthopedic healthcare products (such as wrist binders, knee supports, and braces), medical devices, and retail consumer goods."
    },
    {
      q: "Where is Shri Ram Graphics located and what is your service area?",
      a: "Our Registered Office is located at Building No.-7, GF, Street No.-26C1, Molarband Extn., Badarpur, New Delhi - 110044. We provide fast vehicle dispatch across Delhi NCR (including Noida, Gurugram, Faridabad, Ghaziabad) and nationwide shipping across India."
    },
    {
      q: "What is the Minimum Order Quantity (MOQ) for custom boxes?",
      a: "For custom printed Duplex Boxes (Mono-Cartons), our standard MOQ is 2,500 pieces per size/artwork. For 3-Ply and 5-Ply Corrugated Master Cartons, our MOQ starts at 500 pieces."
    },
    {
      q: "What offset printing and surface finishes are available in-house?",
      a: "We operate commercial sheetfed multi-color offset printing presses offering high-definition CMYK and Pantone printing. Available surface value additions include Thermal BOPP Lamination (Matte & Gloss), Spot UV gloss coating, metallic hot foil stamping, 3D embossing/debossing, and precision automatic die-cutting."
    },
    {
      q: "Can you design custom CAD dielines for new product packaging?",
      a: "Yes. We create customized 2D/3D CAD vector dielines (CDR, AI, PDF) tailored to your exact product dimensions (Length × Width × Height), ensuring flawless flap folding, lock-bottom strength, and snug product fit."
    },
    {
      q: "Is Shri Ram Graphics GST registered and compliant?",
      a: "Yes. Shri Ram Graphics is fully GST registered with GSTIN 07IWWPD8374Q1Z5 under Delhi State Jurisdiction (State Code: 07). All commercial dispatches are accompanied by verified GST tax invoices."
    },
    {
      q: "How can I get an instant quotation for box manufacturing?",
      a: "You can send your box dimensions, board GSM, and quantity directly to our production desk via WhatsApp at +91-9810254955 or email shriramgraphics.rp@gmail.com for same-day quotation proformas."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3 border ${
            isGold
              ? 'bg-amber-100 border-amber-200 text-amber-900'
              : 'bg-blue-100 border-blue-200 text-blue-900'
          }`}>
            <HelpCircle className="w-3.5 h-3.5" />
            B2B Procurement & Box Guide
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-black text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Clear specifications on box types, minimum batches, offset printing processes, and ordering with Shri Ram Graphics.
          </p>
        </div>

        {/* Accordion FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={`border rounded-2xl transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'border-amber-400 bg-amber-50/40 shadow-sm'
                    : 'border-slate-200 bg-slate-50/70 hover:border-slate-300'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 font-display font-bold text-slate-900 text-base sm:text-lg focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 shrink-0 text-slate-500 transition-transform duration-200 ${
                      isOpen ? 'transform rotate-180 text-amber-700' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-amber-200/50">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Quick Help Banner */}
        <div className="mt-12 text-center bg-slate-900 text-white p-7 rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left space-y-1">
            <h3 className="font-display font-bold text-base text-white">
              Have a custom box query not listed above?
            </h3>
            <p className="text-xs text-slate-400">
              Speak directly with our packaging specialists on WhatsApp.
            </p>
          </div>

          <a
            href={`https://wa.me/${companyInfo.phoneRaw}?text=${encodeURIComponent('Hi Shri Ram Graphics, I have a specific box packaging query.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center gap-2 shrink-0 shadow-md transition"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Chat on WhatsApp: {companyInfo.phone}</span>
          </a>
        </div>

      </div>
    </section>
  );
}
