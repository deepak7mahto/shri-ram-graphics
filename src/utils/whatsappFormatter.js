export function formatRFQSummary({
  boxType = 'Custom Packaging Box',
  dimensions = '150 x 100 x 50 mm',
  material = 'White Duplex Board (350 GSM)',
  quantity = '5,000 Pcs',
  finishes = [],
  industry = 'General Packaging',
  estimatedUnitRate = null,
  estimatedTotal = null,
  clientName = '',
  clientPhone = '',
  deliveryCity = 'Delhi NCR',
  notes = ''
}) {
  const finishList = finishes.length > 0 ? finishes.join(', ') : 'Standard Finishing';

  return `📦 *SHRI RAM GRAPHICS - PACKAGING RFQ*
────────────────────────
🏭 *Destination*: Shri Ram Graphics Production Desk (Okhla Plant)
👤 *Client*: ${clientName || 'Inquiry via Website'} ${clientPhone ? `(${clientPhone})` : ''}
📍 *Delivery Hub*: ${deliveryCity || 'Delhi NCR'}

📋 *SPECIFICATIONS:*
• *Box Category*: ${boxType}
• *Dimensions (L×W×H)*: ${dimensions}
• *Substrate / Material*: ${material}
• *Target Quantity*: ${quantity}
• *Selected Finishes*: ${finishList}
• *Industry Application*: ${industry}
${estimatedUnitRate ? `• *Ballpark Unit Est.*: ₹${estimatedUnitRate} / pc` : ''}
${estimatedTotal ? `• *Estimated Total*: ₹${estimatedTotal.toLocaleString('en-IN')}` : ''}
${notes ? `\n📝 *Special Requirements*: ${notes}` : ''}

💬 *Please review our dieline requirements & share formal proforma quotation.*`;
}

export function generateWhatsAppRFQUrl({
  boxType,
  dimensions,
  material,
  quantity,
  finishes = [],
  industry,
  estimatedUnitRate,
  estimatedTotal,
  clientName,
  clientPhone,
  deliveryCity,
  notes,
  phoneNumber = '919810254955'
}) {
  const messageText = formatRFQSummary({
    boxType,
    dimensions,
    material,
    quantity,
    finishes,
    industry,
    estimatedUnitRate,
    estimatedTotal,
    clientName,
    clientPhone,
    deliveryCity,
    notes
  });

  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(messageText)}`;
}
