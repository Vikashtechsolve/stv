/** Gen AI pricing (must match online-course-backend/constants/genAiFees.js). */
export const GENAI_REGISTRATION_FEE = 99;
export const GENAI_COURSE_FEE = 4999;

export function genAiFullPaymentAmount() {
  return GENAI_COURSE_FEE;
}

export const GENAI_PAYMENT_PLANS = {
  seat_booking: {
    id: "seat_booking",
    title: "Book your seat",
    subtitle: "Pay ₹99 registration fee now",
    payNow: GENAI_REGISTRATION_FEE,
    balanceAtJoining: GENAI_COURSE_FEE,
    badge: "Flexible",
    description:
      "Reserve your seat with a ₹99 registration fee. Pay the ₹4,999 course fee when you join the batch.",
  },
  full_payment: {
    id: "full_payment",
    title: "Pay in full",
    subtitle: "No registration fee",
    payNow: genAiFullPaymentAmount(),
    balanceAtJoining: 0,
    badge: "Best value",
    description:
      "Pay ₹4,999 in one go and confirm your registration immediately. No separate registration fee.",
  },
};

export const VTS_SUPPORT = {
  email: "support@vikastechsolutions.com",
  phone: "+91 98765 43210",
  website: "https://www.vikashtechsolution.com",
};
