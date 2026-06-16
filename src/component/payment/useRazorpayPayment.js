import { useState } from "react";
import { buildRazorpayCheckoutOptions } from "../../constants/razorpayConfig";

export const useRazorpayPayment = (baseUrl) => {
  const [loading, setLoading] = useState(false);

  /**
   * Handles Razorpay payment
   * @param {Object} config - Payment configuration
   * @param {Number} config.amount - Payment amount
   * @param {Object} config.prefill - User prefill details { name, email, contact, userId }
   * @param {String} config.description - Short description for payment window
   * @param {Object} [config.meta] - Extra notes attached to the payment
   * @returns {Promise<Object>} Payment result { success, response, error }
   */
  const handlePayment = async ({ amount, prefill, description, meta }) => {
    setLoading(true);
    try {
      const res = await fetch(`${baseUrl}/api/payments/create`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId: prefill.userId,
          amount,
          meta: meta || undefined,
        }),
      });

      const data = await res.json();
      if (!data.orderId) throw new Error("Failed to create payment order");

      return new Promise((resolve) => {
        const finish = (result) => {
          setLoading(false);
          resolve(result);
        };

        const options = buildRazorpayCheckoutOptions({
          key: data.key,
          amount: data.amount,
          currency: data.currency,
          orderId: data.orderId,
          description,
          prefill,
          meta,
          onDismiss: () => finish({ success: false, error: "Payment cancelled" }),
          handler: async function (response) {
            try {
              const verifyRes = await fetch(`${baseUrl}/api/payments/verify`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(response),
              });

              const verifyData = await verifyRes.json();
              if (!verifyData.success) throw new Error("Verification failed");

              finish({ success: true, response });
            } catch (err) {
              finish({ success: false, error: err.message });
            }
          },
        });

        const rzp = new window.Razorpay(options);
        rzp.on("payment.failed", () => {
          finish({ success: false, error: "Payment failed" });
        });

        rzp.open();
      });
    } catch (err) {
      setLoading(false);
      return { success: false, error: err.message };
    }
  };

  return { handlePayment, loading };
};
