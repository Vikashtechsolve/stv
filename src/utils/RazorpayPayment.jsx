import React from "react";

const RazorpayPayment = ({ 
  amount = 0, 
  userId = "6719b0c2f13e7b14eaa5b501", 
  onSuccess, 
  onFailure 
}) => {
  const baseUrl = "https://vitiligoid-hierogrammatical-flo.ngrok-free.dev/api/payments";

  const handlePayment = async () => {
    if (!amount || amount <= 0) {
      alert("⚠️ Please provide a valid amount!");
      return;
    }

    try {
      // Step 1️⃣: Create order from backend
      const res = await fetch(`${baseUrl}/create`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId, amount }),
      });
      const data = await res.json();
      console.log("Order Data:", data);

      if (data.error) {
        if (onFailure) onFailure({ error: data.error });
        return;
      }

      // Step 2️⃣: Handle zero-amount (free plan)
      if (!data.orderId) {
        if (onSuccess) onSuccess({ message: "Free plan activated successfully!" });
        return;
      }

      // Step 3️⃣: Razorpay options
      const options = {
        key: data.key,
        amount: data.amount,
        currency: data.currency,
        name: "VTS Test Store",
        description: "Test Transaction",
        order_id: data.orderId,
        prefill: {
          name: "Test User",
          email: "test@example.com",
          contact: "9999999999",
        },
        theme: { color: "#3399cc" },

        handler: async function (response) {
          console.log("Payment Success:", response);

          // Step 4️⃣: Verify payment on backend
          const verifyRes = await fetch(`${baseUrl}/verify`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(response),
          });
          const verifyData = await verifyRes.json();
          console.log("Server Verification:", verifyData);

          if (verifyData.success) {
            if (onSuccess) onSuccess(response);
          } else {
            if (onFailure) onFailure({ error: "Payment verification failed" });
          }
        },

        modal: {
          ondismiss: function () {
            if (onFailure) onFailure({ error: "Payment popup closed by user" });
          },
        },
      };

      // Step 5️⃣: Open Razorpay popup
      const rzp = new window.Razorpay(options);
      rzp.open();

      rzp.on("payment.failed", function (response) {
        console.error("Payment Failed:", response.error);
        if (onFailure) onFailure(response.error);
      });

    } catch (err) {
      console.error("Error:", err);
      if (onFailure) onFailure(err);
    }
  };

  return (
    <button
      onClick={handlePayment}
      style={{
        padding: "10px 20px",
        fontSize: "16px",
        cursor: "pointer",
        backgroundColor: "#3399cc",
        color: "#fff",
        border: "none",
        borderRadius: "5px",
      }}
    >
      Pay ₹{amount}
    </button>
  );
};

export default RazorpayPayment;
