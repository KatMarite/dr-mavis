/**
 * Vercel Serverless Function: POST /api/checkout
 *
 * Generates the PayFast payment form data server-side so that
 * merchant credentials are never exposed in the client bundle.
 *
 * Required Vercel Environment Variables:
 *   PAYFAST_MERCHANT_ID
 *   PAYFAST_MERCHANT_KEY
 */

export default function handler(req, res) {
  // Only allow POST
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { amount, item_name, name_first, email_address, cell_number, custom_str1, origin } = req.body;

  // Basic validation
  if (!amount || !item_name || !name_first || !email_address) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const MERCHANT_ID = process.env.PAYFAST_MERCHANT_ID;
  const MERCHANT_KEY = process.env.PAYFAST_MERCHANT_KEY;

  if (!MERCHANT_ID || !MERCHANT_KEY) {
    console.error('PayFast credentials not configured in environment variables');
    return res.status(500).json({ error: 'Payment configuration error' });
  }

  const siteOrigin = origin || 'https://drmavismazhura.com';

  const paymentData = {
    merchant_id: MERCHANT_ID,
    merchant_key: MERCHANT_KEY,
    return_url: `${siteOrigin}/books?payment=success`,
    cancel_url: `${siteOrigin}/books?payment=cancel`,
    amount: parseFloat(amount).toFixed(2),
    item_name,
    name_first,
    email_address,
    cell_number: cell_number || '',
    custom_str1: custom_str1 || '',
  };

  return res.status(200).json({
    action: 'https://www.payfast.co.za/eng/process',
    fields: paymentData,
  });
}
