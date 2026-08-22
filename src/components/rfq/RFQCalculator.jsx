import React, { useState, useEffect } from 'react';
import { MessageSquare, Calculator, Send, Copy, Check, Info, FileText, ArrowRight, ShieldCheck } from 'lucide-react';
import { calculateBoxEstimate } from '../../utils/priceCalculator';
import { generateWhatsAppRFQUrl, formatRFQSummary } from '../../utils/whatsappFormatter';
import { companyInfo } from '../../data/companyInfo';

export default function RFQCalculator({ customizerSpecs }) {
  const [formData, setFormData] = useState({
    length: 180,
    width: 100,
    height: 45,
    unit: 'mm',
    boxType: 'duplex',
    gsm: 350,
    material: 'White Duplex Board (350 GSM)',
    quantity: 5000,
    colors: 'cmyk',
    finishes: ['matte_lamination'],
    industry: 'Pharma / Healthcare',
    clientName: '',
    clientPhone: '',
    deliveryCity: 'Delhi NCR',
    notes: ''
  });

  const [copied, setCopied] = useState(false);

  // Sync when customizerSpecs changes from 3D studio
  useEffect(() => {
    if (customizerSpecs) {
      setFormData(prev => ({
        ...prev,
        length: customizerSpecs.length,
        width: customizerSpecs.width,
        height: customizerSpecs.height,
        unit: customizerSpecs.unit,
        boxType: customizerSpecs.boxType,
        gsm: customizerSpecs.gsm || prev.gsm,
        material: customizerSpecs.material,
        finishes: customizerSpecs.finishes
      }));
    }
  }, [customizerSpecs]);

  // Calculate live estimate
  const estimate = calculateBoxEstimate({
    length: formData.length,
    width: formData.width,
    height: formData.height,
    unit: formData.unit,
    boxType: formData.boxType,
    gsm: formData.gsm,
    quantity: formData.quantity,
    colors: formData.colors,
    finishes: formData.finishes
  });

  const quantityBrackets = [1000, 2500, 5000, 10000, 25000, 50000];

  const industries = [
    'Pharma / Healthcare & Ortho',
    'Cosmetics & Beauty',
    'FMCG & Confectionery',
    'E-Commerce & D2C Brands',
    'Electronics & Gadgets',
    'Industrial & Automotive'
  ];

  const colorOptions = [
    { id: 'single', name: '1-Color Print', sub: 'Single ink flexo/offset' },
    { id: 'cmyk', name: '4-Color CMYK', sub: 'Full color high-definition' },
    { id: 'pantone', name: 'CMYK + Special Pantone', sub: 'Brand match + metallic ink' },
  ];

  const handleCopy = () => {
    const text = formatRFQSummary({
      boxType: formData.boxType.toUpperCase() + ' BOX',
      dimensions: `${formData.length} x ${formData.width} x ${formData.height} ${formData.unit}`,
      material: formData.material,
      quantity: `${formData.quantity.toLocaleString('en-IN')} Pcs`,
      finishes: formData.finishes,
      industry: formData.industry,
      estimatedUnitRate: estimate.unitPrice,
      estimatedTotal: estimate.totalPrice,
      clientName: formData.clientName,
      clientPhone: formData.clientPhone,
      deliveryCity: formData.deliveryCity,
      notes: formData.notes
    });

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const whatsappUrl = generateWhatsAppRFQUrl({
    boxType: formData.boxType.toUpperCase() + ' BOX',
    dimensions: `${formData.length} x ${formData.width} x ${formData.height} ${formData.unit}`,
    material: formData.material,
    quantity: `${formData.quantity.toLocaleString('en-IN')} Pcs`,
    finishes: formData.finishes,
    industry: formData.industry,
    estimatedUnitRate: estimate.unitPrice,
    estimatedTotal: estimate.totalPrice,
    clientName: formData.clientName,
    clientPhone: formData.clientPhone,
    deliveryCity: formData.deliveryCity,
    notes: formData.notes,
    phoneNumber: companyInfo.phoneRaw
  });

  return (
    <section id="rfq-calculator" className="py-20 bg-slate-900 relative border-t border-slate-800">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Calculator className="w-3.5 h-3.5" />
            Instant RFQ & WhatsApp Generator
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
            Transparent Ballpark Estimator & Direct Factory Inquiry
          </h2>
          <p className="mt-3 text-base text-slate-400">
            Configure your order batch size, print process, and delivery requirements to generate an instant estimate and send a structured inquiry directly to our Okhla production team.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Form: Parameter Controls */}
          <div className="lg:col-span-7 bg-slate-950/80 border border-slate-800 p-6 sm:p-8 rounded-2xl shadow-xl space-y-6">
            
            {/* Quantity Selector */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-3">
                1. Order Quantity (Pieces)
              </label>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                {quantityBrackets.map((qty) => {
                  const isSelected = formData.quantity === qty;
                  return (
                    <button
                      key={qty}
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, quantity: qty }))}
                      className={`py-2 px-1 text-center rounded-xl border text-xs font-bold transition ${
                        isSelected
                          ? 'bg-brand-blue text-white border-blue-500 shadow-md ring-1 ring-blue-400/50'
                          : 'bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                      }`}
                    >
                      {qty >= 1000 ? `${qty / 1000}k` : qty}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Printing Colors */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-3">
                2. Print Process & Color Depth
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {colorOptions.map((opt) => {
                  const isSelected = formData.colors === opt.id;
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, colors: opt.id }))}
                      className={`p-3 rounded-xl border text-left transition ${
                        isSelected
                          ? 'bg-blue-600/20 border-blue-500 text-blue-200 ring-1 ring-blue-500/40'
                          : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700'
                      }`}
                    >
                      <div className="font-semibold text-xs text-white">{opt.name}</div>
                      <div className="text-[10px] text-slate-400 mt-0.5">{opt.sub}</div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Industry Application */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                3. Industry & End-Use
              </label>
              <select
                value={formData.industry}
                onChange={(e) => setFormData(prev => ({ ...prev, industry: e.target.value }))}
                className="w-full bg-slate-900 border border-slate-800 text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-blue"
              >
                {industries.map(ind => (
                  <option key={ind} value={ind}>{ind}</option>
                ))}
              </select>
            </div>

            {/* Buyer Contact Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-slate-800/80">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                  Your Name / Company
                </label>
                <input
                  type="text"
                  placeholder="e.g. Total Ortho Care / Apollo"
                  value={formData.clientName}
                  onChange={(e) => setFormData(prev => ({ ...prev, clientName: e.target.value }))}
                  className="w-full bg-slate-900 border border-slate-800 text-white placeholder-slate-500 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:border-brand-blue"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                  Contact Phone / WhatsApp
                </label>
                <input
                  type="tel"
                  placeholder="+91 98765 43210"
                  value={formData.clientPhone}
                  onChange={(e) => setFormData(prev => ({ ...prev, clientPhone: e.target.value }))}
                  className="w-full bg-slate-900 border border-slate-800 text-white placeholder-slate-500 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:border-brand-blue"
                />
              </div>
            </div>

            {/* Delivery Destination */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                Delivery Location / Pincode
              </label>
              <input
                type="text"
                placeholder="e.g. Delhi NCR, Okhla, Badarpur, Mumbai, Bengaluru"
                value={formData.deliveryCity}
                onChange={(e) => setFormData(prev => ({ ...prev, deliveryCity: e.target.value }))}
                className="w-full bg-slate-900 border border-slate-800 text-white placeholder-slate-500 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:border-brand-blue"
              />
            </div>

            {/* Custom Notes */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                Special Notes / Existing Dieline Artwork Available?
              </label>
              <textarea
                rows={2}
                placeholder="e.g. Need window die-cut on front flap, ready CDR/AI file available"
                value={formData.notes}
                onChange={(e) => setFormData(prev => ({ ...prev, notes: e.target.value }))}
                className="w-full bg-slate-900 border border-slate-800 text-white placeholder-slate-500 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:border-brand-blue"
              />
            </div>

          </div>

          {/* Right Summary Card: Live Estimate & Action Buttons */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 border-2 border-brand-gold/40 rounded-2xl p-6 sm:p-7 shadow-2xl relative overflow-hidden">
              
              {/* Top Accent Stripe */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600" />
              
              <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-5">
                <div>
                  <div className="text-xs text-brand-gold font-bold uppercase tracking-wider">Ballpark Quotation</div>
                  <h3 className="text-xl font-display font-bold text-white mt-0.5">Estimated Unit Cost</h3>
                </div>
                <div className="text-right">
                  <span className="text-3xl font-display font-extrabold text-brand-gold">
                    ₹{estimate.unitPrice.toFixed(2)}
                  </span>
                  <span className="text-xs text-slate-400 ml-1">/ piece</span>
                </div>
              </div>

              {/* Total Summary */}
              <div className="bg-slate-900/90 rounded-xl p-4 border border-slate-800/80 mb-5 space-y-2 text-sm">
                <div className="flex justify-between text-slate-300">
                  <span>Batch Volume:</span>
                  <span className="font-bold text-white font-mono">{formData.quantity.toLocaleString('en-IN')} pcs</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Estimated Total:</span>
                  <span className="font-bold text-brand-gold text-base font-mono">
                    ₹{estimate.totalPrice.toLocaleString('en-IN')}
                  </span>
                </div>
                <div className="flex justify-between text-slate-400 text-xs">
                  <span>Flat Blank Sheet Area:</span>
                  <span>{estimate.areaSqInch} sq. inch (~{estimate.weightGrams}g/box)</span>
                </div>
                <div className="flex justify-between text-slate-400 text-xs">
                  <span>GST (18% / 12%):</span>
                  <span>Calculated on formal proforma</span>
                </div>
              </div>

              {/* Specification Snapshot */}
              <div className="space-y-2 text-xs text-slate-300 border-t border-slate-800 pt-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-slate-500">Box Style:</span>
                  <span className="font-semibold text-white uppercase">{formData.boxType}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Dimensions:</span>
                  <span className="font-semibold text-white">{formData.length} × {formData.width} × {formData.height} {formData.unit}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Substrate:</span>
                  <span className="font-semibold text-white truncate max-w-[200px]">{formData.material}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Finishes:</span>
                  <span className="font-semibold text-amber-300">{formData.finishes.length > 0 ? formData.finishes.join(', ') : 'Standard'}</span>
                </div>
              </div>

              {/* CTA 1: 1-Click WhatsApp Button */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm flex items-center justify-center gap-2.5 shadow-lg shadow-emerald-600/25 transition-all transform active:scale-[0.98] mb-3"
              >
                <MessageSquare className="w-5 h-5 fill-current" />
                <span>Send RFQ via WhatsApp to Production Desk</span>
              </a>

              {/* Secondary Action Buttons */}
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={handleCopy}
                  className="py-2.5 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700/80 text-slate-200 text-xs font-semibold flex items-center justify-center gap-1.5 transition"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Specs</span>
                    </>
                  )}
                </button>

                <a
                  href={`mailto:${companyInfo.email}?subject=Packaging RFQ - ${encodeURIComponent(formData.boxType)}&body=${encodeURIComponent(formatRFQSummary({
                    boxType: formData.boxType,
                    dimensions: `${formData.length} x ${formData.width} x ${formData.height} ${formData.unit}`,
                    material: formData.material,
                    quantity: `${formData.quantity} Pcs`,
                    finishes: formData.finishes,
                    industry: formData.industry,
                    estimatedUnitRate: estimate.unitPrice,
                    estimatedTotal: estimate.totalPrice,
                    clientName: formData.clientName,
                    clientPhone: formData.clientPhone,
                    deliveryCity: formData.deliveryCity,
                    notes: formData.notes
                  }))}`}
                  className="py-2.5 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700/80 text-slate-200 text-xs font-semibold flex items-center justify-center gap-1.5 transition"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Email RFQ</span>
                </a>
              </div>

              {/* Trust Tag */}
              <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center gap-2 text-[11px] text-slate-400">
                <ShieldCheck className="w-4 h-4 text-brand-gold shrink-0" />
                <span>Formal proforma invoices issued with verified GST ({companyInfo.gstin}).</span>
              </div>

            </div>

            {/* Quick Hotline Card */}
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 flex items-center justify-between text-xs">
              <div>
                <div className="text-slate-400">Need immediate technical help?</div>
                <div className="text-white font-bold text-sm mt-0.5">{companyInfo.phone}</div>
              </div>
              <a
                href={`tel:${companyInfo.phoneRaw}`}
                className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold transition"
              >
                Call Plant
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
