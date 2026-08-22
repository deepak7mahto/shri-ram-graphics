import { describe, it, expect } from 'vitest';
import { generateWhatsAppRFQUrl, formatRFQSummary } from '../src/utils/whatsappFormatter.js';

describe('whatsappFormatter', () => {
  it('formats clean RFQ text summary with all parameters', () => {
    const summary = formatRFQSummary({
      boxType: 'Duplex Mono-Carton',
      dimensions: '180 x 100 x 50 mm',
      material: '350 GSM Cyber Premium White Duplex',
      quantity: '5,000 Pcs',
      finishes: ['Matte Lamination', 'Spot UV'],
      industry: 'Pharma / Healthcare',
      clientName: 'Dr. Sharma',
      clientPhone: '9876543210'
    });

    expect(summary).toContain('SHRI RAM GRAPHICS - PACKAGING RFQ');
    expect(summary).toContain('Duplex Mono-Carton');
    expect(summary).toContain('180 x 100 x 50 mm');
    expect(summary).toContain('5,000 Pcs');
    expect(summary).toContain('Spot UV');
  });

  it('generates valid WhatsApp URL targeting Shri Ram Graphics official number', () => {
    const url = generateWhatsAppRFQUrl({
      boxType: 'Corrugated Master Box',
      dimensions: '300 x 200 x 200 mm',
      material: '5-Ply Kraft Corrugated',
      quantity: '2,500 Pcs',
      finishes: ['Single Color Flexo'],
      phoneNumber: '919810254955'
    });

    expect(url).toContain('https://wa.me/919810254955?text=');
    expect(url).toContain(encodeURIComponent('SHRI RAM GRAPHICS - PACKAGING RFQ'));
  });
});
