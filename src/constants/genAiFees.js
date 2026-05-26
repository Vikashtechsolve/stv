/** Gen AI pricing (must match online-course-backend/constants/genAiFees.js). */
export const GENAI_REGISTRATION_FEE = 99;
export const GENAI_COURSE_FEE = 5999;
export const GENAI_FULL_PAY_DISCOUNT_PERCENT = 10;

export function genAiFullPaymentAmount() {
  return Math.round(
    GENAI_COURSE_FEE * (1 - GENAI_FULL_PAY_DISCOUNT_PERCENT / 100)
  );
}

export const GENAI_PAYMENT_PLANS = {
  seat_booking: {
    id: "seat_booking",
    title: "Book your seat",
    subtitle: "Pay registration fee now",
    payNow: GENAI_REGISTRATION_FEE,
    balanceAtJoining: GENAI_COURSE_FEE,
    badge: "Flexible",
    description:
      "Pay ₹99 today to reserve your seat. Pay the remaining course fee when you join the batch.",
  },
  full_payment: {
    id: "full_payment",
    title: "Pay in full",
    subtitle: `${GENAI_FULL_PAY_DISCOUNT_PERCENT}% discount applied`,
    payNow: genAiFullPaymentAmount(),
    balanceAtJoining: 0,
    badge: "Best value",
    description:
      "Pay once and confirm your registration. Get 10% off the full course fee.",
  },
};

export const VTS_SUPPORT = {
  email: "support@vikastechsolutions.com",
  phone: "+91 98765 43210",
  website: "https://www.vikashtechsolution.com",
};
