import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, MessageCircle, ShieldCheck, CheckCircle2, Clock, ArrowUpRight } from 'lucide-react';
import { companyInfo } from '../../data/companyInfo';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    boxType: 'Duplex Mono-Carton (Pharma / FMCG)',
    quantity: '5,000 Pcs',
    dimensions: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const text = `📦 *NEW INQUIRY - SHRI RAM GRAPHICS*
────────────────────────
👤 *Client Name*: ${formData.name}
📞 *Phone*: ${formData.phone}
✉️ *Email*: ${formData.email || 'N/A'}
📋 *Box Type*: ${formData.boxType}
🔢 *Target Quantity*: ${formData.quantity}
📏 *Dimensions (L×W×H)*: ${formData.dimensions || 'Standard'}
${formData.message ? `📝 *Message*: ${formData.message}` : ''}

💬 *Sent via Shri Ram Graphics Website*`;

    const waUrl = `https://wa.me/${companyInfo.phoneRaw}?text=${encodeURIComponent(text)}`;
    window.open(waUrl, '_blank');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 border border-blue-200 text-blue-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Phone className="w-3.5 h-3.5" />
            Contact & Business Inquiries
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-black text-slate-900 tracking-tight">
            Get in Touch with Our Production Desk
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Discuss your packaging specifications, request custom dieline templates, or visit our manufacturing plant in Okhla Phase-I, New Delhi.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Col: Contact Information & Dual Addresses */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary Phone & WhatsApp Card */}
            <div className="bg-gradient-to-br from-blue-900 to-slate-900 text-white rounded-3xl p-7 shadow-xl space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400">Direct Inquiries</span>
                <MessageCircle className="w-5 h-5 text-emerald-400" />
              </div>
              
              <div>
                <div className="text-xs text-slate-400">Primary Mobile & WhatsApp:</div>
                <a href={`tel:${companyInfo.phoneRaw}`} className="text-2xl font-display font-extrabold text-white hover:text-amber-300 transition block mt-0.5">
                  {companyInfo.phone}
                </a>
              </div>

              <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-xs text-slate-300">
                <div>
                  <span className="text-slate-400 block text-[10px]">Plant Desk:</span>
                  <a href={`tel:${companyInfo.secondaryPhoneRaw}`} className="font-bold text-white hover:text-amber-300">
                    {companyInfo.secondaryPhone}
                  </a>
                </div>
                <div>
                  <span className="text-slate-400 block text-[10px]">Official Email:</span>
                  <a href={`mailto:${companyInfo.email}`} className="font-bold text-white hover:text-amber-300">
                    {companyInfo.email}
                  </a>
                </div>
              </div>

              <a
                href={`https://wa.me/${companyInfo.phoneRaw}?text=${encodeURIComponent('Hi Shri Ram Graphics team, I would like to inquire about box printing.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg transition"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Open Instant WhatsApp Chat</span>
              </a>
            </div>

            {/* Plant Facility Address Card */}
            <div className="bg-slate-50 rounded-3xl p-6 border border-slate-200 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-blue-700 uppercase tracking-wider flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" />
                  Factory & Plant
                </span>
                <a
                  href="https://maps.google.com/?q=A-1/1+Okhla+Industrial+Area+Phase+1+New+Delhi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-blue-700 font-bold hover:underline flex items-center gap-0.5"
                >
                  Map <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
              <div className="font-bold text-slate-900 text-sm">Okhla Works Unit</div>
              <p className="text-xs text-slate-600 leading-relaxed font-mono">
                {companyInfo.worksAddress.address}
              </p>
            </div>

            {/* Registered Office Address Card */}
            <div className="bg-slate-50 rounded-3xl p-6 border border-slate-200 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-amber-800 uppercase tracking-wider flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Registered Office
                </span>
                <span className="text-xs text-slate-500 font-mono">GST: {companyInfo.gstin}</span>
              </div>
              <div className="font-bold text-slate-900 text-sm">Badarpur Corporate Office</div>
              <p className="text-xs text-slate-600 leading-relaxed font-mono">
                {companyInfo.registeredOffice.address}
              </p>
            </div>

          </div>

          {/* Right Col: Clean Direct Inquiry Form */}
          <div className="lg:col-span-7 bg-slate-50 rounded-3xl p-8 border border-slate-200 shadow-sm">
            <h3 className="text-2xl font-display font-bold text-slate-900 mb-1">
              Send an Inquiry
            </h3>
            <p className="text-xs text-slate-500 mb-6">
              Fill in your requirement details and our team will get back with specifications and quotation.
            </p>

            {submitted && (
              <div className="mb-6 p-4 rounded-2xl bg-emerald-100 border border-emerald-300 text-emerald-900 text-xs font-semibold flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0" />
                <span>Thank you! Your inquiry was generated and sent. Our production desk will contact you shortly.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-700 font-bold uppercase tracking-wider mb-1.5">
                    Your Name / Company Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rajesh Kumar (Total Ortho Care)"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full bg-white border border-slate-300 text-slate-900 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-600"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 font-bold uppercase tracking-wider mb-1.5">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98102 54955"
                    value={formData.phone}
                    onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                    className="w-full bg-white border border-slate-300 text-slate-900 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-600"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-700 font-bold uppercase tracking-wider mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full bg-white border border-slate-300 text-slate-900 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-600"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 font-bold uppercase tracking-wider mb-1.5">
                    Packaging Format / Box Type
                  </label>
                  <select
                    value={formData.boxType}
                    onChange={(e) => setFormData(prev => ({ ...prev, boxType: e.target.value }))}
                    className="w-full bg-white border border-slate-300 text-slate-900 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-600"
                  >
                    <option>Duplex Mono-Carton (Pharma / FMCG)</option>
                    <option>Corrugated Master Shipping Box (3-Ply / 5-Ply)</option>
                    <option>E-Commerce Self-Locking Mailer</option>
                    <option>Two-Piece Luxury Rigid Box</option>
                    <option>Offset Commercial Printing & UV Finishing</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-700 font-bold uppercase tracking-wider mb-1.5">
                    Approximate Quantity (Pcs)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 2,500 / 5,000 / 25,000"
                    value={formData.quantity}
                    onChange={(e) => setFormData(prev => ({ ...prev, quantity: e.target.value }))}
                    className="w-full bg-white border border-slate-300 text-slate-900 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-600"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 font-bold uppercase tracking-wider mb-1.5">
                    Box Dimensions (L × W × H)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 180 x 100 x 45 mm or 8 x 5 x 2 inches"
                    value={formData.dimensions}
                    onChange={(e) => setFormData(prev => ({ ...prev, dimensions: e.target.value }))}
                    className="w-full bg-white border border-slate-300 text-slate-900 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-600"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-700 font-bold uppercase tracking-wider mb-1.5">
                  Message / Special Finishing Requirements
                </label>
                <textarea
                  rows={3}
                  placeholder="e.g. Need Spot UV on logo, matte lamination, existing dieline file available in AI format."
                  value={formData.message}
                  onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                  className="w-full bg-white border border-slate-300 text-slate-900 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-600"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 px-6 rounded-2xl bg-blue-700 hover:bg-blue-800 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-blue-700/25 transition transform active:scale-98"
              >
                <Send className="w-4 h-4" />
                <span>Submit Inquiry to Production Desk</span>
              </button>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
