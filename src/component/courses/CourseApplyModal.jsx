import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import MobileNumberInput from "../common/MobileNumberInput";
import LoadingOverlay from "../common/LoadingOverlay";
import { fetchActiveIntakeBatch, submitCourseLeadRegistration } from "../../utils/courseLeadsPublic";

const PROGRAMS = [
  { value: "mini", label: "Mini program" },
  { value: "macro", label: "Macro program" },
];

export default function CourseApplyModal({
  open,
  onClose,
  courseType,
  courseTitle,
  defaultProgram,
}) {
  const [step, setStep] = useState(1);
  const [batch, setBatch] = useState(null);
  const [loadError, setLoadError] = useState("");
  const [loadingBatch, setLoadingBatch] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState("");
  const [success, setSuccess] = useState(false);

  const [program, setProgram] = useState(defaultProgram || "mini");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [fullMobile, setFullMobile] = useState("");
  const [city, setCity] = useState("");
  const [currentStatus, setCurrentStatus] = useState("");
  const [howHeard, setHowHeard] = useState("");
  const [message, setMessage] = useState("");
  const [consentMarketing, setConsentMarketing] = useState(false);

  const showProgramPicker = defaultProgram == null;

  useEffect(() => {
    if (!open) return;
    setStep(1);
    setProgram(defaultProgram || "mini");
    setLoadError("");
    setBatch(null);
    setSuccess(false);
    setFormError("");
    setLoadingBatch(true);
    fetchActiveIntakeBatch(courseType)
      .then((b) => setBatch(b))
      .catch((e) => setLoadError(e.message || "Registrations are not open right now."))
      .finally(() => setLoadingBatch(false));
  }, [open, courseType, defaultProgram]);

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
  };

  const handleClose = () => {
    resetForm();
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

  const validateStep2 = () => {
    if (!consentMarketing) {
      return "Please agree to be contacted for course and marketing updates.";
    }
    return null;
  };

  const goNext = () => {
    const err = validateStep1();
    if (err) {
      setFormError(err);
      return;
    }
    setFormError("");
    setStep(2);
  };

  const goBack = () => {
    setFormError("");
    setStep(1);
  };

  const submit = async () => {
    const err1 = validateStep1();
    if (err1) {
      setFormError(err1);
      setStep(1);
      return;
    }
    const err2 = validateStep2();
    if (err2) {
      setFormError(err2);
      return;
    }
    if (!batch?._id) return;

    setSubmitting(true);
    try {
      await submitCourseLeadRegistration({
        intakeBatchId: batch._id,
        program,
        fullName: fullName.trim(),
        email: email.trim(),
        phone: fullMobile,
        city: city.trim(),
        currentStatus: currentStatus.trim(),
        howHeard: howHeard.trim(),
        message: message.trim(),
        consentMarketing: true,
      });
      setSuccess(true);
      resetForm();
      setTimeout(() => {
        setSuccess(false);
        onClose();
      }, 2800);
    } catch (e) {
      setFormError(e.message || "Something went wrong.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[1100] flex cursor-pointer items-start justify-center px-4 pt-[max(5.5rem,env(safe-area-inset-top,0px)+4.5rem)] pb-8 sm:pt-24 md:pt-28 bg-black/50 overflow-y-auto overscroll-contain"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={(e) => e.target === e.currentTarget && !submitting && handleClose()}
          >
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 16 }}
              className="cursor-default bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[min(85dvh,calc(100dvh-6.5rem))] flex flex-col my-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="shrink-0 p-4 sm:p-6 border-b border-gray-100 flex justify-between items-start gap-4">
                <div className="min-w-0 pr-2">
                  <h2 className="text-lg sm:text-xl font-serif font-bold text-gray-900">Apply now</h2>
                  <p className="text-xs sm:text-sm text-gray-600 mt-1 line-clamp-2">{courseTitle}</p>
                  {batch?.displayName && (
                    <p className="text-xs sm:text-sm text-[#B11C20] font-medium mt-1">
                      Batch: {batch.displayName}
                    </p>
                  )}
                  {!loadingBatch && batch && !success && !loadError && (
                    <div className="flex items-center gap-2 mt-3" aria-hidden="true">
                      <div
                        className={`h-1 flex-1 rounded-full ${step >= 1 ? "bg-[#B11C20]" : "bg-gray-200"}`}
                      />
                      <div
                        className={`h-1 flex-1 rounded-full ${step >= 2 ? "bg-[#B11C20]" : "bg-gray-200"}`}
                      />
                    </div>
                  )}
                  {!loadingBatch && batch && !success && !loadError && (
                    <p className="text-[11px] sm:text-xs text-gray-500 mt-1.5">
                      Step {step} of 2
                      {step === 1 ? " — Your details" : " — A bit more about you"}
                    </p>
                  )}
                </div>
                <button
                  type="button"
                  onClick={() => !submitting && handleClose()}
                  className="cursor-pointer shrink-0 text-gray-400 hover:text-gray-700 text-2xl leading-none p-1 -mr-1 -mt-1"
                  aria-label="Close"
                >
                  ×
                </button>
              </div>

              <div className="flex-1 min-h-0 overflow-y-auto p-4 sm:p-6 space-y-4">
                {loadingBatch && (
                  <p className="text-sm text-gray-500 text-center py-6">Loading…</p>
                )}
                {!loadingBatch && loadError && (
                  <p className="text-sm text-red-600 bg-red-50 border border-red-100 rounded-xl p-4">
                    {loadError}
                  </p>
                )}
                {!loadingBatch && success && (
                  <p className="text-sm text-green-800 bg-green-50 border border-green-100 rounded-xl p-4">
                    Thank you — we have received your details. Our team will contact you soon.
                  </p>
                )}
                {!loadingBatch && batch && !success && (
                  <>
                    {formError && (
                      <div
                        role="alert"
                        className="text-sm text-red-700 bg-red-50 border border-red-100 rounded-xl px-3 py-2.5"
                      >
                        {formError}
                      </div>
                    )}
                    {step === 1 && (
                      <motion.div
                        key="step1"
                        initial={{ opacity: 0, x: -12 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 12 }}
                        transition={{ duration: 0.2 }}
                        className="space-y-4"
                      >
                        {showProgramPicker && (
                          <div>
                            <label className="block text-xs font-medium text-gray-500 mb-2">
                              Program
                            </label>
                            <div className="flex rounded-lg bg-gray-100 p-1 gap-1">
                              {PROGRAMS.map((p) => (
                                <button
                                  key={p.value}
                                  type="button"
                                  onClick={() => {
                                    setProgram(p.value);
                                    setFormError("");
                                  }}
                                  className={`cursor-pointer flex-1 py-2.5 sm:py-2 rounded-md text-sm font-medium transition ${
                                    program === p.value
                                      ? "bg-white shadow text-[#B11C20]"
                                      : "text-gray-600"
                                  }`}
                                >
                                  {p.label}
                                </button>
                              ))}
                            </div>
                          </div>
                        )}

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
                            autoComplete="name"
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
                            autoComplete="email"
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
                          onClick={goNext}
                          disabled={submitting}
                          className="cursor-pointer w-full bg-[#B11C20] hover:bg-red-800 text-white py-3 rounded-xl font-semibold transition disabled:opacity-60 disabled:cursor-not-allowed mt-2"
                        >
                          Next
                        </button>
                      </motion.div>
                    )}

                    {step === 2 && (
                      <motion.div
                        key="step2"
                        initial={{ opacity: 0, x: 12 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -12 }}
                        transition={{ duration: 0.2 }}
                        className="space-y-4"
                      >
                        <div>
                          <label className="block text-xs font-medium text-gray-500 mb-1">City</label>
                          <input
                            value={city}
                            onChange={(e) => {
                              setCity(e.target.value);
                              setFormError("");
                            }}
                            autoComplete="address-level2"
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
                            onChange={(e) => {
                              setCurrentStatus(e.target.value);
                              setFormError("");
                            }}
                            className="w-full border-2 border-[#ECF0F3] rounded-xl px-4 py-3 text-sm bg-[#FAFBFC]"
                            placeholder="e.g. Student, Working professional"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-gray-500 mb-1">
                            How did you hear about us?
                          </label>
                          <input
                            value={howHeard}
                            onChange={(e) => {
                              setHowHeard(e.target.value);
                              setFormError("");
                            }}
                            className="w-full border-2 border-[#ECF0F3] rounded-xl px-4 py-3 text-sm bg-[#FAFBFC]"
                            placeholder="Optional"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-gray-500 mb-1">
                            Message
                          </label>
                          <textarea
                            value={message}
                            onChange={(e) => {
                              setMessage(e.target.value);
                              setFormError("");
                            }}
                            rows={3}
                            className="w-full border-2 border-[#ECF0F3] rounded-xl px-4 py-3 text-sm bg-[#FAFBFC] resize-none min-h-[88px]"
                            placeholder="Questions or goals (optional)"
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
                            I agree to be contacted by phone, email, or WhatsApp about this course and
                            related programs. *
                          </span>
                        </label>

                        <div className="flex flex-col-reverse sm:flex-row gap-2 sm:gap-3 pt-1">
                          <button
                            type="button"
                            onClick={goBack}
                            disabled={submitting}
                            className="cursor-pointer w-full sm:flex-1 border-2 border-gray-200 text-gray-800 py-3 rounded-xl font-semibold hover:bg-gray-50 transition disabled:opacity-60 disabled:cursor-not-allowed"
                          >
                            Back
                          </button>
                          <button
                            type="button"
                            onClick={submit}
                            disabled={submitting}
                            className="cursor-pointer w-full sm:flex-1 bg-[#B11C20] hover:bg-red-800 text-white py-3 rounded-xl font-semibold transition disabled:opacity-60 disabled:cursor-not-allowed"
                          >
                            {submitting ? "Submitting…" : "Submit application"}
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {submitting && <LoadingOverlay />}
    </>
  );
}
