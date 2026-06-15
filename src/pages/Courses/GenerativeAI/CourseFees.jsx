import React from "react";
import {
  GENAI_COURSE_FEE,
  GENAI_REGISTRATION_FEE,
  genAiFullPaymentAmount,
  GENAI_PAYMENT_PLANS,
} from "../../../constants/genAiFees";

function formatInr(n) {
  return `₹ ${n.toLocaleString("en-IN")}`;
}

const PAYMENT_OPTIONS = [
  {
    plan: GENAI_PAYMENT_PLANS.seat_booking,
    total: GENAI_REGISTRATION_FEE + GENAI_COURSE_FEE,
    highlight: false,
  },
  {
    plan: GENAI_PAYMENT_PLANS.full_payment,
    total: genAiFullPaymentAmount(),
    highlight: true,
    savings: GENAI_REGISTRATION_FEE,
  },
];

export default function CourseFees({ onEnrollClick }) {
  return (
    <section className="bg-[#f5f2f1] py-14 md:py-20 px-4 md:px-6">
      <div className="text-center mb-8 md:mb-12">
        <h2 className="text-2xl md:text-3xl font-medium">
          <span className="text-red-700 underline underline-offset-4">Course</span>
          <span className="ml-2 text-black">Fees Structure</span>
        </h2>
        <p className="text-gray-600 text-sm mt-3 max-w-2xl mx-auto">
          Choose a flexible payment plan — book your seat with a small registration
          fee, or pay the full course fee in one go with no registration charge.
        </p>
      </div>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-5 md:gap-6">
        {PAYMENT_OPTIONS.map(({ plan, total, highlight, savings }) => (
          <div
            key={plan.id}
            className={`relative p-[1.5px] rounded-2xl md:rounded-[28px] ${
              highlight
                ? "bg-[linear-gradient(180deg,#B11C20_0%,#FFFFFF_100%)]"
                : "bg-[linear-gradient(180deg,#B11C20_0%,#F9DEDF_100%)]"
            }`}
          >
            <div className="bg-white rounded-2xl md:rounded-[28px] overflow-hidden shadow-[2px_2px_8px_0px_#F9DEDF] h-full flex flex-col">
              <div className="px-5 py-4 border-b border-gray-200 bg-[linear-gradient(180deg,#FBEAEB_0%,#FFFFFF_100%)]">
                <span className="text-[10px] font-bold uppercase tracking-wide text-[#B11C20]">
                  {plan.badge}
                </span>
                <h3 className="font-semibold text-lg text-gray-900 mt-1">{plan.title}</h3>
                <p className="text-xs text-gray-500 mt-0.5">{plan.subtitle}</p>
              </div>

              <div className="p-5 md:p-6 flex-1 flex flex-col">
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-600">Pay now</span>
                    <span className="font-serif text-xl font-semibold text-[#B11C20]">
                      {formatInr(plan.payNow)}
                    </span>
                  </div>
                  {plan.balanceAtJoining > 0 ? (
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-600">Due at joining</span>
                      <span className="font-medium text-gray-900">
                        {formatInr(plan.balanceAtJoining)}
                      </span>
                    </div>
                  ) : (
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-600">Registration fee</span>
                      <span className="font-medium text-green-700">Waived</span>
                    </div>
                  )}
                  <div className="flex justify-between items-center pt-3 border-t border-gray-200 text-sm">
                    <span className="font-medium text-gray-800">Total program cost</span>
                    <span className="font-serif text-lg font-semibold text-gray-900">
                      {formatInr(total)}
                    </span>
                  </div>
                </div>

                <p className="text-xs text-gray-600 leading-relaxed flex-1">
                  {plan.description}
                </p>

                {savings > 0 && (
                  <p className="text-[11px] text-green-700 font-medium mt-3">
                    Save {formatInr(savings)} — no registration fee on full payment
                  </p>
                )}

                {onEnrollClick && (
                  <button
                    type="button"
                    onClick={() => onEnrollClick()}
                    className={`cursor-pointer w-full mt-5 px-5 py-3 rounded-xl font-semibold transition ${
                      highlight
                        ? "bg-[#B11C20] text-white hover:bg-red-800 shadow-md"
                        : "bg-white border-2 border-[#B11C20] text-[#B11C20] hover:bg-red-50"
                    }`}
                  >
                    {highlight
                      ? `Pay in full · ${formatInr(plan.payNow)}`
                      : `Book seat · ${formatInr(plan.payNow)}`}
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <p className="text-center text-[11px] text-gray-500 mt-6 max-w-xl mx-auto">
        All fees are non-refundable. Secure online payments via Razorpay.
      </p>
    </section>
  );
}
