import { describe, it, expect } from 'vitest';
import { calculateBoxEstimate, convertDimension } from '../src/utils/priceCalculator.js';

describe('priceCalculator', () => {
  it('converts dimensions between mm and inches accurately', () => {
    expect(convertDimension(25.4, 'mm', 'inch')).toBeCloseTo(1.0, 1);
    expect(convertDimension(2, 'inch', 'mm')).toBeCloseTo(50.8, 1);
  });

  it('calculates estimate for standard Duplex box', () => {
    const result = calculateBoxEstimate({
      length: 150, // mm
      width: 100,  // mm
      height: 50,  // mm
      unit: 'mm',
      boxType: 'duplex',
      gsm: 350,
      quantity: 5000,
      colors: 'cmyk',
      finishes: ['matte_lamination']
    });

    expect(result).toBeDefined();
    expect(result.unitPrice).toBeGreaterThan(0);
    expect(result.totalPrice).toBeGreaterThan(0);
    expect(result.totalPrice).toBe(Math.round(result.unitPrice * 5000));
    expect(result.areaSqInch).toBeGreaterThan(0);
  });

  it('gives volume discount for 50,000 quantity vs 1,000 quantity', () => {
    const quote1k = calculateBoxEstimate({
      length: 200,
      width: 150,
      height: 100,
      unit: 'mm',
      boxType: 'corrugated',
      gsm: 400,
      quantity: 1000,
      colors: 'single',
      finishes: []
    });

    const quote50k = calculateBoxEstimate({
      length: 200,
      width: 150,
      height: 100,
      unit: 'mm',
      boxType: 'corrugated',
      gsm: 400,
      quantity: 50000,
      colors: 'single',
      finishes: []
    });

    expect(quote50k.unitPrice).toBeLessThan(quote1k.unitPrice);
  });
});
