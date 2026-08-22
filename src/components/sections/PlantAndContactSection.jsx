import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, MessageCircle, ShieldCheck, CheckCircle2, Building2, ArrowUpRight } from 'lucide-react';
import { companyInfo } from '../../data/companyInfo';

export default function PlantAndContactSection({ theme = 'gold' }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    serviceRequired: 'Duplex Box Manufacturing (Mono-Cartons)',
    boxType: 'Orthopedic / Healthcare Duplex Box',
    quantity: '5,000 Pcs',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const text = `📦 *INQUIRY - SHRI RAM GRAPHICS*
────────────────────────
👤 *Client*: ${formData.name}
📞 *Phone*: ${formData.phone}
✉️ *Email*: ${formData.email || 'N/A'}
🎯 *Service Needed*: ${formData.serviceRequired}
📦 *Box Type*: ${formData.boxType}
🔢 *Target Quantity*: ${formData.quantity}
${formData.message ? `📝 *Requirements*: ${formData.message}` : ''}

💬 *Sent via Shri Ram Graphics Web Portal*`;

    const waUrl = `https://wa.me/${companyInfo.phoneRaw}?text=${encodeURIComponent(text)}`;
    window.open(waUrl, '_blank');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 border border-amber-200 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
            <Building2 className="w-3.5 h-3.5" />
            Registered Office & Inquiries
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-black text-slate-900 tracking-tight">
            Connect with Shri Ram Graphics
          </h2>
          <p className="mt-3 text-base text-slate-600">
            For custom printed Duplex Mono-Cartons, Corrugated Master Boxes, and commercial offset printing works.
          </p>
        </div>

        {/* Registered Office Banner Card */}
        <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm mb-12 max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-5 mb-5">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                <Building2 className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold text-amber-800 uppercase tracking-wider">Corporate & Registered Office</span>
                <h3 className="text-xl font-display font-bold text-slate-900">Shri Ram Graphics</h3>
              </div>
            </div>
            <div className="text-xs text-slate-700 font-mono bg-slate-100 px-3.5 py-2 rounded-xl border border-slate-200 shrink-0 self-start sm:self-auto">
              GSTIN: <strong className="text-slate-900">{companyInfo.gstin}</strong>
            </div>
          </div>

          <p className="text-sm text-slate-800 font-mono bg-slate-50 p-4 rounded-2xl border border-slate-200 leading-relaxed">
            📍 <strong>Reg. Off.:</strong> {companyInfo.registeredOffice.address}
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs text-slate-600 pt-4">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>GST Registered</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Delhi Jurisdiction</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Accounts Desk</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>PAN-India Logistics</span>
            </div>
          </div>
        </div>

        {/* Contact & Inquiry Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-5xl mx-auto">
          
          {/* Quick Contact Desk */}
          <div className="lg:col-span-5 bg-slate-900 text-white rounded-3xl p-8 shadow-xl space-y-6 flex flex-col justify-between">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-2">
                Direct Contact & Support
              </div>
              <h3 className="text-2xl font-display font-bold text-white mb-2">
                Talk with Our Team
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-6">
                Have a packaging question or require urgent custom carton batch delivery? Call our team directly.
              </p>

              <div className="space-y-4 text-xs text-slate-200">
                <div className="bg-slate-800/90 p-4 rounded-2xl border border-slate-700">
                  <div className="text-slate-400 text-[10px] uppercase font-bold">Mobile & WhatsApp</div>
                  <a href={`tel:${companyInfo.phoneRaw}`} className="text-lg font-bold text-amber-400 hover:underline block mt-1">
                    {companyInfo.phone}
                  </a>
                </div>

                <div className="bg-slate-800/90 p-4 rounded-2xl border border-slate-700">
                  <div className="text-slate-400 text-[10px] uppercase font-bold">Official Email</div>
                  <a href={`mailto:${companyInfo.email}`} className="text-sm font-bold text-white hover:underline block mt-1">
                    {companyInfo.email}
                  </a>
                </div>
              </div>
            </div>

            <a
              href={`https://wa.me/${companyInfo.phoneRaw}?text=${encodeURIComponent('Hi Shri Ram Graphics, I want to discuss duplex and corrugated box manufacturing.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 px-4 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg transition mt-4"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>Instant WhatsApp Inquiry</span>
            </a>
          </div>

          {/* Inquiry Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
            <h3 className="text-2xl font-display font-bold text-slate-900 mb-1">
              Submit Quotation Inquiry
            </h3>
            <p className="text-xs text-slate-500 mb-6">
              Fill in your box specifications and our team will get back with pricing proforma.
            </p>

            {submitted && (
              <div className="mb-6 p-4 rounded-2xl bg-emerald-100 border border-emerald-300 text-emerald-900 text-xs font-semibold flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0" />
                <span>Inquiry submitted! Our team will contact you shortly.</span>
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
                    placeholder="e.g. Total Ortho Care"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full bg-slate-50 border border-slate-300 text-slate-900 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-slate-900"
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
                    className="w-full bg-slate-50 border border-slate-300 text-slate-900 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-slate-900"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-700 font-bold uppercase tracking-wider mb-1.5">
                    Primary Product Needed
                  </label>
                  <select
                    value={formData.serviceRequired}
                    onChange={(e) => setFormData(prev => ({ ...prev, serviceRequired: e.target.value }))}
                    className="w-full bg-slate-50 border border-slate-300 text-slate-900 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-slate-900"
                  >
                    <option>Duplex Box Manufacturing (Mono-Cartons)</option>
                    <option>Corrugated Box Manufacturing (3/5-Ply)</option>
                    <option>Quality Offset Printing on Boxes</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-700 font-bold uppercase tracking-wider mb-1.5">
                    Target Quantity (Pcs)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 2,500 / 5,000 / 17,500"
                    value={formData.quantity}
                    onChange={(e) => setFormData(prev => ({ ...prev, quantity: e.target.value }))}
                    className="w-full bg-slate-50 border border-slate-300 text-slate-900 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-slate-900"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-700 font-bold uppercase tracking-wider mb-1.5">
                  Box Dimensions / Specifications / Notes
                </label>
                <textarea
                  rows={3}
                  placeholder="e.g. Orthopedic Wrist Binder Duplex Box (180 x 100 x 45 mm) with Matte Lamination & Spot UV."
                  value={formData.message}
                  onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                  className="w-full bg-slate-50 border border-slate-300 text-slate-900 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-slate-900"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 px-6 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg transition"
              >
                <Send className="w-4 h-4" />
                <span>Submit Inquiry</span>
              </button>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
