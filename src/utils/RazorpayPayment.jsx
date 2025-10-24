import React from "react";

const RazorpayPayment = ({ 
  amount, 
  userId = "6719b0c2f13e7b14eaa5b501", 
  buttonText="pay", 
  buttonStyle,
  onSuccess,
  onFailure
}) => {
 // const baseUrl =   `${process.env.REACT_APP_API_URL}/payments`;
  const baseUrl =   "https://vts-backend-ms7k.onrender.com/payments"

  // const onSuccess = (res) => {
  //  alert("✅ Payment successful! ID: " + res.razorpay_payment_id);
  // };

  // const onFailure = (err) => {
  //   alert("❌ Payment failed! " + (err.description || err.error || err));
  // };

  const startPayment = async () => {
    if (!amount || amount <= 0) {
      if (onFailure) onFailure({ error: "Invalid amount" });
      return;
    }

    try {
      // 1️⃣ Create order
      const res = await fetch(`${baseUrl}/create`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId, amount }),
      });
      const data = await res.json();

      if (data.error) {
        if (onFailure) onFailure({ error: data.error });
        return;
      }

      if (!data.orderId) {
        if (onSuccess) onSuccess({ message: "Free plan activated!" });
        return;
      }

      // 2️⃣ Razorpay options
      const options = {
        key: data.key,
        amount: data.amount,
        currency: data.currency,
        name: "VTS Test Store",
        description: "Payment",
        order_id: data.orderId,
        prefill: {
          name: "Test User",
          email: "test@example.com",
          contact: "9999999999",
        },
        theme: { color: "#ED0331" },

        handler: async function (response) {
          // 3️⃣ Verify payment
          const verifyRes = await fetch(`${baseUrl}/verify`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(response),
          });
          const verifyData = await verifyRes.json();

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

      // 4️⃣ Open Razorpay
      const rzp = new window.Razorpay(options);
      rzp.open();

      rzp.on("payment.failed", function (response) {
        if (onFailure) onFailure(response.error);
      });

    } catch (err) {
      if (onFailure) onFailure(err);
    }
  };

  return (
    <button
     style={buttonStyle}
      onClick={startPayment}
    >
      {buttonText}
    </button>
  );
};

export default RazorpayPayment;
