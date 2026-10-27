const response = (status, message) => Response.json({ message }, { status, headers: { 'Cache-Control': 'no-store' } });

export async function POST(request) {
  const contentType = request.headers.get('content-type') || '';
  if (!contentType.toLowerCase().includes('application/json')) return response(415, 'Please send a valid enquiry.');
  let data;
  try {
    const raw = await request.text();
    if (raw.length > 12000) return response(413, 'Your enquiry is too long.');
    data = JSON.parse(raw);
  } catch { return response(400, 'Please check your enquiry and try again.'); }
  if (!data || typeof data !== 'object' || Array.isArray(data)) return response(400, 'Please check your enquiry and try again.');
  const field = (value, max) => typeof value === 'string' ? value.trim().slice(0, max) : '';
  const name = field(data.name, 120);
  const email = field(data.email, 254);
  const phone = field(data.phone, 50);
  const product = field(data.product, 50);
  const message = field(data.message, 5000);
  const allowedProducts = ['Aluminum Products', 'Iron Products', 'Glass Products', 'Interior Products', 'Other Enquiry'];
  if (field(data.website, 200)) return response(200, 'Thank you. Your enquiry has been submitted.');
  if (!name || !message || !allowedProducts.includes(product) || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || /[\r\n]/.test(email)) {
    return response(400, 'Please complete your name, valid email, product and message.');
  }
  const apiKey = process.env.RESEND_API_KEY;
  const sender = process.env.CONTACT_FROM_EMAIL;
  if (!apiKey || !sender) return response(503, 'The enquiry service is not configured yet. Please email info@alexometals.com.');
  const lines = ['New Alexo Metals website enquiry', '', `Name: ${name}`, `Email: ${email}`, `Phone: ${phone || 'Not provided'}`, `Product / service: ${product}`, '', 'Requirements:', message];
  try {
    const result = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ from: sender, to: ['info@alexometals.com'], reply_to: email, subject: 'New website enquiry — Alexo Metals', text: lines.join('\n') })
    });
    if (!result.ok) { console.error('Email provider rejected enquiry:', result.status); return response(502, 'We could not send your enquiry. Please email info@alexometals.com.'); }
    return response(200, 'Thank you. Your enquiry has been submitted.');
  } catch { return response(502, 'We could not send your enquiry. Please email info@alexometals.com.'); }
}
