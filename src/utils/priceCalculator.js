export function convertDimension(value, fromUnit, toUnit) {
  if (fromUnit === toUnit) return value;
  if (fromUnit === 'mm' && toUnit === 'inch') {
    return value / 25.4;
  }
  if (fromUnit === 'inch' && toUnit === 'mm') {
    return value * 25.4;
  }
  return value;
}

export function calculateBoxEstimate({
  length = 150,
  width = 100,
  height = 50,
  unit = 'mm',
  boxType = 'duplex',
  gsm = 350,
  quantity = 5000,
  colors = 'cmyk',
  finishes = []
}) {
  // Convert dimensions to mm
  const l = unit === 'inch' ? length * 25.4 : length;
  const w = unit === 'inch' ? width * 25.4 : width;
  const h = unit === 'inch' ? height * 25.4 : height;

  // Calculate unrolled flat sheet blank dimensions in mm
  let flatLength = 0;
  let flatWidth = 0;

  switch (boxType) {
    case 'duplex':
      // Tuck-end box sheet
      flatLength = 2 * (l + w) + 15; // 15mm glue flap
      flatWidth = h + 2 * (Math.min(w, 40) + 15); // flaps and tucks
      break;
    case 'corrugated':
      // Regular Slotted Container (RSC)
      flatLength = 2 * (l + w) + 35; // 35mm stitch flap
      flatWidth = h + w + 10;
      break;
    case 'mailer':
      // E-commerce mailer
      flatLength = 2 * l + 2 * h + 40;
      flatWidth = w + 4 * h + 30;
      break;
    case 'rigid':
      // Two piece setup box (lid + base)
      flatLength = (l + 2 * h + 30) + (l + 2 * Math.min(h, 35) + 30);
      flatWidth = (w + 2 * h + 30);
      break;
    default:
      flatLength = 2 * (l + w) + 20;
      flatWidth = h + 2 * w;
  }

  // Calculate area in square meters and square inches
  const areaSqMm = flatLength * flatWidth;
  const areaSqM = areaSqMm / 1_000_000;
  const areaSqInch = areaSqMm / 645.16;

  // Paper Weight in Kg per box = Area(sq.m) * GSM / 1000
  const weightKg = areaSqM * (gsm / 1000);

  // Rate per kg based on material
  let paperRatePerKg = 60; // Base rate INR
  if (boxType === 'corrugated') paperRatePerKg = 45;
  if (boxType === 'rigid') paperRatePerKg = 75;

  const rawPaperCost = weightKg * paperRatePerKg;

  // Printing cost per piece
  let printCostPerUnit = 0.40;
  if (colors === 'cmyk') printCostPerUnit = 0.85;
  if (colors === 'pantone') printCostPerUnit = 1.40;

  // Finish additions
  let finishCostPerUnit = 0;
  if (finishes.includes('matte_lamination')) finishCostPerUnit += 0.45 * (areaSqInch / 100);
  if (finishes.includes('gloss_lamination')) finishCostPerUnit += 0.35 * (areaSqInch / 100);
  if (finishes.includes('spot_uv')) finishCostPerUnit += 0.60;
  if (finishes.includes('gold_foil')) finishCostPerUnit += 1.10;
  if (finishes.includes('embossing')) finishCostPerUnit += 0.50;

  // Setup / Die-punch amortization (Fixed initial tooling cost spread across qty)
  let dieAndPlateSetupCost = 3500;
  if (boxType === 'rigid') dieAndPlateSetupCost = 6000;
  if (boxType === 'corrugated') dieAndPlateSetupCost = 2800;

  const setupPerUnit = dieAndPlateSetupCost / Math.max(quantity, 500);

  // Conversion / Die cutting & Gluing cost
  let convertingCost = 0.65;
  if (boxType === 'corrugated') convertingCost = 1.20;
  if (boxType === 'rigid') convertingCost = 4.50;

  // Volume discount multiplier
  let volumeMultiplier = 1.0;
  if (quantity >= 50000) volumeMultiplier = 0.82;
  else if (quantity >= 25000) volumeMultiplier = 0.88;
  else if (quantity >= 10000) volumeMultiplier = 0.92;
  else if (quantity >= 5000) volumeMultiplier = 0.96;
  else if (quantity < 2000) volumeMultiplier = 1.12;

  const calculatedUnitPrice = (rawPaperCost + printCostPerUnit + finishCostPerUnit + setupPerUnit + convertingCost) * volumeMultiplier;
  
  // Clean rounding to 2 decimal places, minimum threshold
  const finalUnitPrice = Math.max(1.80, Math.round(calculatedUnitPrice * 100) / 100);
  const totalPrice = Math.round(finalUnitPrice * quantity);

  return {
    unitPrice: finalUnitPrice,
    totalPrice: totalPrice,
    areaSqInch: Math.round(areaSqInch * 10) / 10,
    areaSqMm: Math.round(areaSqMm),
    weightGrams: Math.round(weightKg * 1000),
    breakdown: {
      paperCost: Math.round(rawPaperCost * 100) / 100,
      printCost: Math.round(printCostPerUnit * 100) / 100,
      finishCost: Math.round(finishCostPerUnit * 100) / 100,
      setupCost: Math.round(setupPerUnit * 100) / 100,
      convertingCost: Math.round(convertingCost * 100) / 100,
    }
  };
}
