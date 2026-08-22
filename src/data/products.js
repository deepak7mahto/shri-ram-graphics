export const categories = [
  { id: 'all', name: 'All Box Offerings' },
  { id: 'duplex', name: 'Duplex Boxes (Mono-Cartons)' },
  { id: 'corrugated', name: 'Corrugated Boxes (Cartons)' },
  { id: 'printing', name: 'Offset Printing Works' },
];

export const products = [
  {
    id: 'duplex-printed-box',
    name: 'Custom Printed Duplex Box (Mono-Carton)',
    category: 'duplex',
    badge: 'Core Product',
    tagline: 'High-Quality Offset Printed Duplex Paperboard Box (HSN 48192020)',
    gsmRange: '300 - 450 GSM White Duplex Board',
    moq: '2,500 Pcs',
    leadTime: '3-4 Days',
    features: [
      'Reverse & Straight Tuck-End Structure',
      'Multi-Color High-Definition Offset Printing',
      'Matte / Gloss Thermal BOPP Lamination',
      'Clean Automatic Die-Punching & Creasing'
    ],
    idealFor: 'Custom Box Packaging for Orthopedic Goods & Retail Brands',
    defaultSpecs: { length: 180, width: 100, height: 45, unit: 'mm', boxType: 'duplex', gsm: 350, material: 'White Duplex Board' },
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'ortho-wrist-binder-duplex-box',
    name: 'Orthopedic Product Duplex Box',
    category: 'duplex',
    badge: 'Specialized Box',
    tagline: 'Custom Dimension Duplex Box for Orthopedic & Medical Items',
    gsmRange: '350 - 400 GSM Cyber XL Duplex Board',
    moq: '2,500 Pcs',
    leadTime: '3-5 Days',
    features: [
      'Tuck-End / Lock-Bottom Box Format',
      'Accurate Product Fitting Dimensions',
      'High-Clarity Graphic & Text Offset Printing',
      'Spine Creasing with Zero Paper Cracking'
    ],
    idealFor: 'Wrist Binder Boxes, Orthopedic Braces & Healthcare Packaging',
    defaultSpecs: { length: 180, width: 100, height: 45, unit: 'mm', boxType: 'duplex', gsm: 350, material: 'White Duplex Board' },
    image: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'corrugated-3ply-box',
    name: '3-Ply Corrugated Packaging Box',
    category: 'corrugated',
    badge: 'Transit Grade',
    tagline: 'Lightweight & Sturdy 3-Ply Fluted Corrugated Box',
    gsmRange: '120 - 180 GSM Kraft Paper Liners',
    moq: '500 Pcs',
    leadTime: '2-4 Days',
    features: [
      'Regular Slotted Container (RSC) Design',
      'Single-Wall E-Flute / B-Flute Construction',
      'Custom Outer Flexo / Offset Brand Printing',
      'Strong Edge Crush & Impact Resistance'
    ],
    idealFor: 'Inner Box Packing, Retail Shipping, and Product Protection',
    defaultSpecs: { length: 300, width: 220, height: 180, unit: 'mm', boxType: 'corrugated', gsm: 380, material: 'Kraft Corrugated Board' },
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'corrugated-5ply-master-box',
    name: '5-Ply Heavy-Duty Master Carton',
    category: 'corrugated',
    badge: 'Heavy Duty',
    tagline: 'Double-Wall 5-Ply Corrugated Shipping & Stacking Box',
    gsmRange: '140 - 250 GSM Virgin Kraft Paper (18 - 32 BF)',
    moq: '500 Pcs',
    leadTime: '2-4 Days',
    features: [
      'Double-Wall Flute Core for High Stacking Load',
      'Stitched / Heavy Industrial Glued Joints',
      'Moisture & Compression Resistant',
      'Custom Handling Marks & Brand Label Printing'
    ],
    idealFor: 'Bulk Master Dispatch, Export Shipping, and Heavy Item Packing',
    defaultSpecs: { length: 450, width: 320, height: 280, unit: 'mm', boxType: 'corrugated', gsm: 450, material: 'Kraft Corrugated Board' },
    image: 'https://images.unsplash.com/photo-1530587191325-3db32d826c18?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'offset-printing-box-finishes',
    name: 'Offset Printing & Box Value Finishes',
    category: 'printing',
    badge: 'In-House Finish',
    tagline: 'Multi-Color Offset Printing, Lamination & Spot UV on Boxes',
    gsmRange: 'Applied on Duplex & Corrugated Paperboards',
    moq: '1,000 Boxes',
    leadTime: '2-3 Days',
    features: [
      'Multi-Color CMYK & Pantone Offset Printing',
      'Matte & Gloss BOPP Thermal Lamination',
      'Spot UV Gloss Highlights on Logos',
      'Metallic Foil Stamping & Embossing'
    ],
    idealFor: 'Custom Offset Printed Boxes with Premium Surface Finishes',
    defaultSpecs: { length: 200, width: 150, height: 75, unit: 'mm', boxType: 'duplex', gsm: 350, material: 'White Duplex Board' },
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80'
  }
];
