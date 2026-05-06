/**
 * Web3Forms integration utility
 *
 * Centralises the Web3Forms API key and submission logic so every form
 * on the site goes through a single, consistent handler.
 *
 * To change the receiving inbox, update the ACCESS_KEY below.
 * Get your free key at https://web3forms.com
 */

const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';

// ✏️  Replace this with your own Web3Forms access key
const ACCESS_KEY = '30a79b40-94e8-4699-8ed4-33feca297c3d';

export interface Web3FormsPayload {
  /** Email subject line */
  subject: string;
  /** Sender display name shown in your inbox */
  from_name?: string;
  /** Arbitrary key/value pairs – every field is forwarded as-is */
  [key: string]: unknown;
}

export interface Web3FormsResult {
  success: boolean;
  message: string;
}

/**
 * Submit form data to Web3Forms.
 *
 * @example
 * const result = await submitToWeb3Forms({
 *   subject: 'New Contact Inquiry',
 *   from_name: 'Jane Doe',
 *   name: 'Jane Doe',
 *   email: 'jane@example.com',
 *   message: 'Hello!',
 * });
 */
export async function submitToWeb3Forms(
  payload: Web3FormsPayload,
): Promise<Web3FormsResult> {
  const response = await fetch(WEB3FORMS_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      access_key: ACCESS_KEY,
      ...payload,
    }),
  });

  const data = await response.json();

  return {
    success: Boolean(data.success),
    message: data.message ?? 'Something went wrong.',
  };
}
