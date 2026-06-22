import { VTS_SUPPORT } from "./vtsSupport";

/** Display name on the Razorpay checkout modal. */
export const RAZORPAY_COMPANY_NAME = "Vikash Tech Solution";

/** Company logo shown at the top of the Razorpay checkout. */
export const RAZORPAY_LOGO_URL =
  import.meta.env.VITE_RAZORPAY_LOGO_URL ||
  "https://www.vikashtechsolution.com/assets/logo-BWnQA1FG.png";

/** Primary brand color — buttons, links, and highlights in checkout. */
export const RAZORPAY_BRAND_COLOR = "#B11C20";

export const RAZORPAY_THEME = {
  color: RAZORPAY_BRAND_COLOR,
  backdrop_color: "#F5F0F0",
};

/**
 * Shared Razorpay Standard Checkout options. Per-payment fields (order, amount, handler) are merged in.
 */
export function buildRazorpayCheckoutOptions({
  key,
  amount,
  currency,
  orderId,
  description,
  prefill,
  meta,
  handler,
  onDismiss,
}) {
  const { userId, ...customerPrefill } = prefill || {};

  const notes = {
    company: RAZORPAY_COMPANY_NAME,
    website: VTS_SUPPORT.website,
    support: VTS_SUPPORT.email,
  };

  if (userId) notes.user_id = String(userId);
  if (meta && typeof meta === "object") {
    Object.entries(meta).forEach(([k, v]) => {
      if (v != null && v !== "") notes[k] = String(v);
    });
  }

  return {
    key,
    amount,
    currency,
    name: RAZORPAY_COMPANY_NAME,
    image: RAZORPAY_LOGO_URL,
    description: description || "Secure payment — Vikash Tech Solution",
    order_id: orderId,
    prefill: {
      name: customerPrefill.name || "",
      email: customerPrefill.email || "",
      contact: customerPrefill.contact || "",
    },
    notes,
    theme: RAZORPAY_THEME,
    remember_customer: true,
    retry: {
      enabled: true,
      max_count: 3,
    },
    modal: {
      backdropclose: false,
      escape: true,
      confirm_close: true,
      ondismiss: onDismiss,
    },
    handler,
  };
}
