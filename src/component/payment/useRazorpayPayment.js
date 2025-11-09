import { useState } from "react";

export const useRazorpayPayment = (baseUrl) => {
  const [loading, setLoading] = useState(false);

  /**
   * Handles Razorpay payment
   * @param {Object} config - Payment configuration
   * @param {Number} config.amount - Payment amount
   * @param {Object} config.prefill - User prefill details { name, email, contact }
   * @param {String} config.description - Short description for payment window
   * @returns {Promise<Object>} Payment result { success, response, error }
   */
  const handlePayment = async ({ amount, prefill, description }) => {
    setLoading(true);
    try {
      // Step 1: Create Razorpay Order
      const res = await fetch(`${baseUrl}/api/payments/create`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId:prefill.userId,amount }),
      });

      const data = await res.json();
      if (!data.orderId) throw new Error("Failed to create payment order");

      // Step 2: Setup Razorpay
      return new Promise((resolve) => {
        const options = {
          key: data.key,
          amount: data.amount,
          currency: data.currency,
          name: "VTS Academy",
          description: description || "Payment",
          order_id: data.orderId,
          prefill: prefill,
          handler: async function (response) {
            try {
              // Step 3: Verify Payment
              const verifyRes = await fetch(`${baseUrl}/api/payments/verify`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(response),
              });

              const verifyData = await verifyRes.json();
              if (!verifyData.success) throw new Error("Verification failed");

              resolve({ success: true, response });
            } catch (err) {
              resolve({ success: false, error: err.message });
            } finally {
              setLoading(false);
            }
          },
        };

        const rzp = new window.Razorpay(options);
        rzp.on("payment.failed", (err) => {
          setLoading(false);
          resolve({ success: false, error: "Payment failed" });
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
