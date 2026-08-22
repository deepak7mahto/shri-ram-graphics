import React, { useState } from 'react';
import { X, Gift, Check, Send, Sparkles, MapPin, Building, Phone } from 'lucide-react';
import { companyInfo } from '../../data/companyInfo';

export default function SampleKitModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    phone: '',
    email: '',
    shippingAddress: '',
    pincode: '',
    industry: 'Pharma / Healthcare',
    selectedItems: ['Duplex Swatches (300-450 GSM)', 'Flute Board Caliper Kit', 'Spot UV & Foil Finish Swatches']
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const availableKitItems = [
    'Duplex Swatches (300-450 GSM)',
    'Flute Board Caliper Kit (E/B/3-Ply/5-Ply)',
    'Spot UV & Foil Finish Swatches',
    'Pharma/Ortho Mono-Carton Sample',
    'E-Commerce Mailer Sample Box',
    'Embossing & Texture Samples'
  ];

  const handleToggleItem = (item) => {
    setFormData(prev => {
      const exists = prev.selectedItems.includes(item);
      return {
        ...prev,
        selectedItems: exists
          ? prev.selectedItems.filter(i => i !== item)
          : [...prev.selectedItems, item]
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Build WhatsApp message for Sample Kit dispatch
    const text = `📦 *SAMPLE KIT REQUEST - SHRI RAM GRAPHICS*
────────────────────────
👤 *Company*: ${formData.companyName}
🙋 *Contact Person*: ${formData.contactPerson}
📞 *Phone*: ${formData.phone}
✉️ *Email*: ${formData.email || 'N/A'}
📍 *Shipping Address*: ${formData.shippingAddress}, PIN: ${formData.pincode}
🏭 *Industry*: ${formData.industry}

📋 *Requested Sample Kit Items*:
${formData.selectedItems.map(i => `• ${i}`).join('\n')}

🚀 *Please arrange physical sample swatch courier dispatch.*`;

    const waUrl = `https://wa.me/${companyInfo.phoneRaw}?text=${encodeURIComponent(text)}`;
    window.open(waUrl, '_blank');
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 4000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white transition"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-5">
          <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-brand-gold">
            <Gift className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-display font-bold text-white">
              Request Free Sample Kit
            </h3>
            <p className="text-xs text-slate-400">
              Delivered directly to your office / factory address
            </p>
          </div>
        </div>

        {submitted ? (
          <div className="py-8 text-center space-y-3">
            <div className="w-14 h-14 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto">
              <Check className="w-8 h-8" />
            </div>
            <h4 className="text-lg font-bold text-white">Sample Kit Request Sent!</h4>
            <p className="text-xs text-slate-300">
              Our Okhla dispatch desk is processing your sample box swatch kit. We will notify you with the courier tracking details.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-xs">
            
            {/* Kit Selection checkboxes */}
            <div>
              <label className="block font-bold text-slate-300 uppercase tracking-wider mb-2">
                Select Kit Contents
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {availableKitItems.map((item) => {
                  const isSelected = formData.selectedItems.includes(item);
                  return (
                    <button
                      type="button"
                      key={item}
                      onClick={() => handleToggleItem(item)}
                      className={`p-2.5 rounded-xl border text-left flex items-center gap-2 transition ${
                        isSelected
                          ? 'bg-amber-500/15 border-amber-500/70 text-amber-200 font-semibold'
                          : 'bg-slate-950/60 border-slate-800 text-slate-400'
                      }`}
                    >
                      <div className={`w-4 h-4 rounded flex items-center justify-center shrink-0 ${isSelected ? 'bg-brand-gold text-slate-950' : 'border border-slate-700'}`}>
                        {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                      </div>
                      <span className="text-[11px] leading-tight">{item}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Input Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div>
                <label className="block text-slate-400 font-medium mb-1">Company / Brand Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Total Ortho Care"
                  value={formData.companyName}
                  onChange={(e) => setFormData(prev => ({ ...prev, companyName: e.target.value }))}
                  className="w-full bg-slate-950 border border-slate-800 text-white rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-brand-blue"
                />
              </div>

              <div>
                <label className="block text-slate-400 font-medium mb-1">Contact Person *</label>
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  value={formData.contactPerson}
                  onChange={(e) => setFormData(prev => ({ ...prev, contactPerson: e.target.value }))}
                  className="w-full bg-slate-950 border border-slate-800 text-white rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-brand-blue"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-slate-400 font-medium mb-1">Phone / WhatsApp *</label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                  className="w-full bg-slate-950 border border-slate-800 text-white rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-brand-blue"
                />
              </div>

              <div>
                <label className="block text-slate-400 font-medium mb-1">Email Address</label>
                <input
                  type="email"
                  placeholder="name@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  className="w-full bg-slate-950 border border-slate-800 text-white rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-brand-blue"
                />
              </div>
            </div>

            <div>
              <label className="block text-slate-400 font-medium mb-1">Courier Delivery Address *</label>
              <textarea
                rows={2}
                required
                placeholder="Full office/factory address for sample box kit courier"
                value={formData.shippingAddress}
                onChange={(e) => setFormData(prev => ({ ...prev, shippingAddress: e.target.value }))}
                className="w-full bg-slate-950 border border-slate-800 text-white rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-brand-blue"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 transition-all transform active:scale-98"
            >
              <Send className="w-4 h-4" />
              <span>Submit & Dispatch Sample Kit</span>
            </button>

          </form>
        )}

      </div>
    </div>
  );
}
