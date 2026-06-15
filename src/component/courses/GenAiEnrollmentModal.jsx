import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  CheckCircle2,
  CreditCard,
  Mail,
  Phone,
  Sparkles,
  XCircle,
} from "lucide-react";
import MobileNumberInput from "../common/MobileNumberInput";
import LoadingOverlay from "../common/LoadingOverlay";
import { useRazorpayPayment } from "../payment/useRazorpayPayment";
import { vtsBackendApi } from "../../config/env";
import {
  fetchActiveIntakeBatch,
  initPaidCourseRegistration,
  completePaidCourseRegistration,
} from "../../utils/courseLeadsPublic";
import {
  GENAI_PAYMENT_PLANS,
  VTS_SUPPORT,
  GENAI_COURSE_FEE,
  GENAI_REGISTRATION_FEE,
} from "../../constants/genAiFees";
const PAYMENT_USER_ID =
  import.meta.env.VITE_COURSE_PAYMENT_USER_ID || "6730b6d8e29f4b001f6f91d1";

const PLANS = [GENAI_PAYMENT_PLANS.seat_booking, GENAI_PAYMENT_PLANS.full_payment];

function formatInr(n) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(n);
}

export default function GenAiEnrollmentModal({ open, onClose, courseTitle }) {
  const { handlePayment, loading: paymentLoading } = useRazorpayPayment(vtsBackendApi);

  const [step, setStep] = useState(1);
  const [batch, setBatch] = useState(null);
  const [loadError, setLoadError] = useState("");
  const [loadingBatch, setLoadingBatch] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState("");
  const [paymentPlan, setPaymentPlan] = useState("seat_booking");
  const [successData, setSuccessData] = useState(null);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [fullMobile, setFullMobile] = useState("");
  const [city, setCity] = useState("");
  const [currentStatus, setCurrentStatus] = useState("");
  const [howHeard, setHowHeard] = useState("");
  const [message, setMessage] = useState("");
  const [consentMarketing, setConsentMarketing] = useState(false);

  const selectedPlan = GENAI_PAYMENT_PLANS[paymentPlan];
  const busy = submitting || paymentLoading;

  useEffect(() => {
    if (!open) return;
    setStep(1);
    setPaymentPlan("seat_booking");
    setLoadError("");
    setBatch(null);
    setSuccessData(null);
    setFormError("");
    setLoadingBatch(true);
    fetchActiveIntakeBatch("generative_ai")
      .then((b) => setBatch(b))
      .catch((e) =>
        setLoadError(e.message || "Registrations are not open right now.")
      )
      .finally(() => setLoadingBatch(false));
  }, [open]);

  const resetForm = () => {
    setStep(1);
    setFormError("");
    setFullName("");
    setEmail("");
    setMobile("");
    setFullMobile("");
    setCity("");
    setCurrentStatus("");
    setHowHeard("");
    setMessage("");
    setConsentMarketing(false);
    setPaymentPlan("seat_booking");
  };

  const handleClose = () => {
    if (busy) return;
    resetForm();
    setSuccessData(null);
    onClose();
  };

  const validateStep1 = () => {
    if (!fullName.trim()) return "Please enter your full name.";
    if (!email.trim()) return "Please enter your email.";
    if (!/\S+@\S+\.\S+/.test(email.trim())) return "Please enter a valid email.";
    if (!fullMobile || mobile.replace(/\D/g, "").length < 10) {
      return "Please enter a valid mobile number.";
    }
    return null;
  };

  const validateStep3 = () => {
    if (!consentMarketing) {
      return "Please agree to be contacted and complete payment.";
    }
    return null;
  };

  const handlePayAndRegister = async () => {
    const err1 = validateStep1();
    if (err1) {
      setFormError(err1);
      setStep(1);
      return;
    }
    const err3 = validateStep3();
    if (err3) {
      setFormError(err3);
      return;
    }
    if (!batch?._id) return;

    setSubmitting(true);
    setFormError("");

    try {
      const init = await initPaidCourseRegistration({
        intakeBatchId: batch._id,
        program: "standard",
        paymentPlan,
        fullName: fullName.trim(),
        email: email.trim(),
        phone: fullMobile,
        city: city.trim(),
        currentStatus: currentStatus.trim(),
        howHeard: howHeard.trim(),
        message: message.trim(),
        consentMarketing: true,
      });

      const paymentResult = await handlePayment({
        amount: init.amount,
        prefill: {
          userId: PAYMENT_USER_ID,
          name: fullName.trim(),
          email: email.trim(),
          contact: fullMobile,
        },
        description: `${courseTitle || "Generative AI"} — ${selectedPlan.title}`,
        meta: {
          registrationId: init.registrationId,
          paymentPlan,
          courseType: "generative_ai",
        },
      });

      if (!paymentResult.success) {
        throw new Error(paymentResult.error || "Payment was not completed");
      }

      const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
        paymentResult.response;

      const completed = await completePaidCourseRegistration({
        registrationId: init.registrationId,
        razorpay_order_id,
        razorpay_payment_id,
        razorpay_signature,
      });

      const registration = {
        ...completed.registration,
        email: email.trim(),
        phone: fullMobile,
        emailSent: completed.emailSent,
        emailError: completed.emailError,
      };

      setSuccessData(registration);
      resetForm();
    } catch (e) {
      const msg = e.message || "Registration could not be completed.";
      if (e.refunded) {
        setFormError(msg);
      } else if (e.paymentId) {
        setFormError(
          `${msg} If money was deducted, save payment ID ${e.paymentId} and email ${e.supportEmail || VTS_SUPPORT.email}.`
        );
      } else {
        setFormError(msg);
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[1100] flex cursor-pointer items-start justify-center px-4 pt-[max(5.5rem,env(safe-area-inset-top,0px)+4.5rem)] pb-8 sm:pt-24 md:pt-28 bg-black/55 overflow-y-auto overscroll-contain"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={(e) => e.target === e.currentTarget && !busy && handleClose()}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="cursor-default bg-white rounded-2xl shadow-2xl w-full max-w-xl max-h-[min(88dvh,calc(100dvh-6rem))] flex flex-col my-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="shrink-0 p-4 sm:p-6 border-b border-gray-100 flex justify-between items-start gap-3">
                <div className="min-w-0">
                  <h2 className="text-lg sm:text-xl font-serif font-bold text-gray-900">
                    {successData ? "Registration confirmed" : "Enroll in Generative AI"}
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-600 mt-1 line-clamp-2">
                    {courseTitle}
                  </p>
                  {batch?.displayName && !successData && (
                    <p className="text-xs text-[#B11C20] font-medium mt-1">
                      Batch: {batch.displayName}
                    </p>
                  )}
                  {!successData && !loadingBatch && batch && !loadError && (
                    <p className="text-[11px] text-gray-500 mt-2">
                      Step {step} of 3
                      {step === 1 && " · Your details"}
                      {step === 2 && " · Choose payment"}
                      {step === 3 && " · Confirm & pay"}
                    </p>
                  )}
                </div>
                <button
                  type="button"
                  onClick={handleClose}
                  disabled={busy}
                  className="cursor-pointer shrink-0 text-gray-400 hover:text-gray-700 text-2xl leading-none p-1 disabled:opacity-40"
                  aria-label="Close"
                >
                  ×
                </button>
              </div>

              <div className="flex-1 min-h-0 overflow-y-auto p-4 sm:p-6">
                {loadingBatch && (
                  <p className="text-sm text-gray-500 text-center py-8">Loading batch…</p>
                )}

                {!loadingBatch && loadError && (
                  <div className="text-sm text-red-700 bg-red-50 border border-red-100 rounded-xl p-4 flex gap-2">
                    <XCircle className="w-5 h-5 shrink-0" />
                    <span>{loadError}</span>
                  </div>
                )}

                {successData && (
                  <div className="space-y-5">
                    <div className="flex flex-col items-center text-center py-2">
                      <CheckCircle2 className="w-14 h-14 text-green-600 mb-3" />
                      <p className="text-base font-semibold text-gray-900">
                        Payment successful
                      </p>
                      <p className="text-sm text-gray-600 mt-1 max-w-sm">
                        Thank you, {successData.fullName}. Your registration is confirmed
                        {successData.emailSent !== false ? (
                          <>
                            {" "}
                            and a confirmation email was sent to{" "}
                            <span className="font-medium">{successData.email}</span>.
                          </>
                        ) : (
                          <>
                            . We could not send the confirmation email automatically;
                            our team will contact you at{" "}
                            <span className="font-medium">{successData.email}</span>.
                          </>
                        )}
                      </p>
                    </div>

                    <div className="rounded-xl border border-green-100 bg-green-50/80 p-4 text-sm space-y-2">
                      <div className="flex justify-between gap-2">
                        <span className="text-gray-600">Payment plan</span>
                        <span className="font-medium text-gray-900 text-right">
                          {successData.paymentPlanLabel}
                        </span>
                      </div>
                      <div className="flex justify-between gap-2">
                        <span className="text-gray-600">Amount paid</span>
                        <span className="font-semibold text-[#B11C20]">
                          {formatInr(successData.amountPaid)}
                        </span>
                      </div>
                      <div className="flex justify-between gap-2">
                        <span className="text-gray-600">Balance at joining</span>
                        <span className="font-medium text-gray-900">
                          {formatInr(successData.balanceDue)}
                        </span>
                      </div>
                      {successData.razorpayPaymentId && (
                        <div className="flex justify-between gap-2 text-xs pt-1 border-t border-green-200/80">
                          <span className="text-gray-500">Payment ID</span>
                          <span className="font-mono text-gray-700 truncate max-w-[180px]">
                            {successData.razorpayPaymentId}
                          </span>
                        </div>
                      )}
                    </div>

                    <div className="rounded-xl border border-gray-200 bg-gray-50 p-4 text-sm">
                      <p className="font-semibold text-gray-900 mb-2">Support</p>
                      <a
                        href={`mailto:${VTS_SUPPORT.email}`}
                        className="flex items-center gap-2 text-[#B11C20] hover:underline mb-2"
                      >
                        <Mail className="w-4 h-4" />
                        {VTS_SUPPORT.email}
                      </a>
                      <a
                        href={`tel:${VTS_SUPPORT.phone.replace(/\s/g, "")}`}
                        className="flex items-center gap-2 text-[#B11C20] hover:underline"
                      >
                        <Phone className="w-4 h-4" />
                        {VTS_SUPPORT.phone}
                      </a>
                    </div>

                    <button
                      type="button"
                      onClick={handleClose}
                      className="cursor-pointer w-full bg-[#B11C20] text-white py-3 rounded-xl font-semibold hover:bg-red-800 transition"
                    >
                      Done
                    </button>
                  </div>
                )}

                {!loadingBatch && batch && !successData && (
                  <>
                    {formError && (
                      <div
                        role="alert"
                        className="text-sm text-red-700 bg-red-50 border border-red-100 rounded-xl px-3 py-2.5 mb-4"
                      >
                        {formError}
                      </div>
                    )}

                    {step === 1 && (
                      <div className="space-y-4">
                        <div>
                          <label className="block text-xs font-medium text-gray-500 mb-1">
                            Full name *
                          </label>
                          <input
                            value={fullName}
                            onChange={(e) => {
                              setFullName(e.target.value);
                              setFormError("");
                            }}
                            className="w-full border-2 border-[#ECF0F3] rounded-xl px-4 py-3 text-sm bg-[#FAFBFC]"
                            placeholder="Your name"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-gray-500 mb-1">
                            Email *
                          </label>
                          <input
                            type="email"
                            value={email}
                            onChange={(e) => {
                              setEmail(e.target.value);
                              setFormError("");
                            }}
                            className="w-full border-2 border-[#ECF0F3] rounded-xl px-4 py-3 text-sm bg-[#FAFBFC]"
                            placeholder="you@example.com"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-gray-500 mb-1">
                            Mobile *
                          </label>
                          <MobileNumberInput
                            value={{ mobile, fullMobile }}
                            onChange={({ mobile: m, fullMobile: fm }) => {
                              setMobile(m);
                              setFullMobile(fm);
                              setFormError("");
                            }}
                          />
                        </div>
                        <button
                          type="button"
                          onClick={() => {
                            const err = validateStep1();
                            if (err) setFormError(err);
                            else {
                              setFormError("");
                              setStep(2);
                            }
                          }}
                          className="cursor-pointer w-full bg-[#B11C20] text-white py-3 rounded-xl font-semibold hover:bg-red-800 transition"
                        >
                          Continue
                        </button>
                      </div>
                    )}

                    {step === 2 && (
                      <div className="space-y-4">
                        <p className="text-sm text-gray-600">
                          Choose how you would like to pay. Amounts are fixed and secure
                          via Razorpay.
                        </p>
                        <div className="space-y-3">
                          {PLANS.map((plan) => {
                            const active = paymentPlan === plan.id;
                            return (
                              <button
                                key={plan.id}
                                type="button"
                                onClick={() => {
                                  setPaymentPlan(plan.id);
                                  setFormError("");
                                }}
                                className={`cursor-pointer w-full text-left rounded-2xl border-2 p-4 transition ${
                                  active
                                    ? "border-[#B11C20] bg-red-50/60 shadow-md"
                                    : "border-gray-200 bg-white hover:border-red-200"
                                }`}
                              >
                                <div className="flex justify-between items-start gap-2">
                                  <div>
                                    <span className="text-[10px] font-bold uppercase tracking-wide text-[#B11C20]">
                                      {plan.badge}
                                    </span>
                                    <h3 className="font-semibold text-gray-900 mt-1">
                                      {plan.title}
                                    </h3>
                                    <p className="text-xs text-gray-500">{plan.subtitle}</p>
                                  </div>
                                  <div className="text-right shrink-0">
                                    <p className="text-lg font-bold text-[#B11C20]">
                                      {formatInr(plan.payNow)}
                                    </p>
                                    <p className="text-[10px] text-gray-500">pay now</p>
                                  </div>
                                </div>
                                <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                                  {plan.description}
                                </p>
                                {plan.balanceAtJoining > 0 && (
                                  <p className="text-xs font-medium text-amber-800 mt-2">
                                    + {formatInr(plan.balanceAtJoining)} due at joining
                                  </p>
                                )}
                              </button>
                            );
                          })}
                        </div>
                        <div className="flex gap-2">
                          <button
                            type="button"
                            onClick={() => setStep(1)}
                            className="cursor-pointer flex-1 border-2 border-gray-200 py-3 rounded-xl font-semibold text-gray-800 hover:bg-gray-50"
                          >
                            Back
                          </button>
                          <button
                            type="button"
                            onClick={() => {
                              setFormError("");
                              setStep(3);
                            }}
                            className="cursor-pointer flex-1 bg-[#B11C20] text-white py-3 rounded-xl font-semibold hover:bg-red-800"
                          >
                            Continue
                          </button>
                        </div>
                      </div>
                    )}

                    {step === 3 && (
                      <div className="space-y-4">
                        <div className="rounded-xl bg-gray-50 border border-gray-200 p-4 text-sm">
                          <div className="flex justify-between mb-1">
                            <span className="text-gray-600">You pay now</span>
                            <span className="font-bold text-[#B11C20]">
                              {formatInr(selectedPlan.payNow)}
                            </span>
                          </div>
                          {selectedPlan.balanceAtJoining > 0 ? (
                            <div className="flex justify-between text-xs text-gray-500">
                              <span>Course fee at joining</span>
                              <span>{formatInr(selectedPlan.balanceAtJoining)}</span>
                            </div>
                          ) : (
                            <p className="text-xs text-green-700 mt-1">
                              Full course fee covered — no registration fee
                            </p>
                          )}
                        </div>

                        <div>
                          <label className="block text-xs font-medium text-gray-500 mb-1">
                            City
                          </label>
                          <input
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            className="w-full border-2 border-[#ECF0F3] rounded-xl px-4 py-3 text-sm bg-[#FAFBFC]"
                            placeholder="Optional"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-gray-500 mb-1">
                            Current status
                          </label>
                          <input
                            value={currentStatus}
                            onChange={(e) => setCurrentStatus(e.target.value)}
                            className="w-full border-2 border-[#ECF0F3] rounded-xl px-4 py-3 text-sm bg-[#FAFBFC]"
                            placeholder="Student, working professional…"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-gray-500 mb-1">
                            How did you hear about us?
                          </label>
                          <input
                            value={howHeard}
                            onChange={(e) => setHowHeard(e.target.value)}
                            className="w-full border-2 border-[#ECF0F3] rounded-xl px-4 py-3 text-sm bg-[#FAFBFC]"
                            placeholder="Optional"
                          />
                        </div>
                        <label className="flex items-start gap-2 text-sm text-gray-700 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={consentMarketing}
                            onChange={(e) => {
                              setConsentMarketing(e.target.checked);
                              setFormError("");
                            }}
                            className="mt-1 cursor-pointer rounded border-gray-300 shrink-0"
                          />
                          <span>
                            I agree to be contacted about this course and understand that
                            payment is required to confirm my registration. *
                          </span>
                        </label>

                        <div className="flex flex-col-reverse sm:flex-row gap-2">
                          <button
                            type="button"
                            onClick={() => setStep(2)}
                            disabled={busy}
                            className="cursor-pointer sm:flex-1 border-2 border-gray-200 py-3 rounded-xl font-semibold disabled:opacity-50"
                          >
                            Back
                          </button>
                          <button
                            type="button"
                            onClick={handlePayAndRegister}
                            disabled={busy}
                            className="cursor-pointer sm:flex-1 bg-[#B11C20] text-white py-3 rounded-xl font-semibold hover:bg-red-800 disabled:opacity-60 inline-flex items-center justify-center gap-2"
                          >
                            <CreditCard className="w-5 h-5" />
                            {busy
                              ? "Processing…"
                              : `Pay ${formatInr(selectedPlan.payNow)}`}
                          </button>
                        </div>
                        <p className="text-[10px] text-center text-gray-400 flex items-center justify-center gap-1">
                          <Sparkles className="w-3 h-3" />
                          Secured by Razorpay · Registration ₹{GENAI_REGISTRATION_FEE} or
                          full payment ₹{GENAI_COURSE_FEE} (no registration fee)
                        </p>
                      </div>
                    )}
                  </>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {busy && <LoadingOverlay />}
    </>
  );
}
