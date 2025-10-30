import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { FaCloudUploadAlt } from "react-icons/fa";
import joinImg from "../../assets/form.png"; // 🖼️ Update if path differs

// ✅ Validation Schema
const schema = yup.object({
  name: yup.string().required("Name is required"),
  qualification: yup.string().required("Qualification is required"),
  passingYear: yup.string().required("Passing Year is required"),
  contactNo: yup
    .string()
    .matches(/^[0-9]{7,15}$/, "Enter valid contact number")
    .required("Contact number is required"),
  subject: yup.string().required("Subject is required"),
  resume: yup
    .mixed()
    .required("Resume is required")
    .test("fileSize", "File too large (max 10MB)", (v) => v?.[0]?.size <= 10 * 1024 * 1024),
  teachingExperience: yup.number().required().min(0),
  developmentExperience: yup.number().required().min(0),
  totalExperience: yup.number().required().min(0),
  workLookingFor: yup.array().min(1, "Select at least one option"),
  mode: yup.array().min(1, "Select at least one mode"),
  location: yup.string().required("Location is required"),
  payoutExpectations: yup.number().required().min(0, "Payout is required"),
});

const JoinUsForm = () => {
  const [message, setMessage] = useState(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: yupResolver(schema) });

  // 📅 Passing Year dropdown (current year - last 50 years)
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 50 }, (_, i) => currentYear - i);

  // 🧩 Submit handler
  const onSubmit = async (data) => {
    setMessage(null);
    try {
      const formData = new FormData();
      for (const key in data) {
        if (Array.isArray(data[key])) formData.append(key, JSON.stringify(data[key]));
        else if (key === "resume") formData.append("resume", data.resume[0]);
        else formData.append(key, data[key]);
      }

      const res = await axios.post("/api/joinus", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setMessage({ type: "success", text: res.data.message || "Form submitted successfully!" });
      reset();
    } catch (err) {
      setMessage({
        type: "error",
        text: err.response?.data?.message || "Submission failed. Try again.",
      });
    }
  };

  const inputClass =
    "w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-700 placeholder:text-gray-500 text-left focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none";

  return (
    <section className="bg-[#E2E2E2] text-gray-800 py-10 px-6 md:px-16 mt-0 pt-5">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h1 className="text-center text-3xl sm:text-4xl md:text-5xl font-semibold mb-12 bg-gradient-to-r from-[#ED0331] to-[#87021C] bg-clip-text text-transparent">
          Join as a Trainer
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left: Image & Text */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4">
            <img src={joinImg} alt="Join Us" className="w-[80%] md:w-[70%] mx-auto md:mx-0" />
            <p className="text-base md:text-lg font-medium text-gray-700 leading-relaxed">
              Help shape the next generation of developers!  
              Apply now to become a mentor or trainer at{" "}
              <span className="font-semibold text-red-600">VTS</span>.
            </p>
          </div>

          {/* Right: Form */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            encType="multipart/form-data"
            className="space-y-5 bg-white p-6 md:p-8 rounded-xl shadow-lg border border-gray-200 flex flex-col w-full"
          >
            {/* Name */}
            <div>
              <input {...register("name")} placeholder="Full Name *" className={inputClass} />
              <p className="text-sm text-red-600 mt-1">{errors.name?.message}</p>
            </div>

            {/* Qualification */}
            <div>
              <input
                {...register("qualification")}
                placeholder="Qualification *"
                className={inputClass}
              />
              <p className="text-sm text-red-600 mt-1">{errors.qualification?.message}</p>
            </div>

            {/* Passing Year Dropdown */}
            <div>
              <select {...register("passingYear")} className={inputClass} defaultValue="">
                <option value="" disabled>
                  Select Passing Year *
                </option>
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
              <p className="text-sm text-red-600 mt-1">{errors.passingYear?.message}</p>
            </div>

            {/* Contact Number */}
            <div>
              <input
                {...register("contactNo")}
                placeholder="Contact Number *"
                className={inputClass}
              />
              <p className="text-sm text-red-600 mt-1">{errors.contactNo?.message}</p>
            </div>

            {/* Subject */}
            <div>
              <input {...register("subject")} placeholder="Subject *" className={inputClass} />
              <p className="text-sm text-red-600 mt-1">{errors.subject?.message}</p>
            </div>

            {/* Resume Upload */}
            <div>
              <label className="w-full border border-dashed border-gray-400 rounded-lg py-4 flex flex-col items-center cursor-pointer hover:border-red-400">
                <FaCloudUploadAlt className="text-3xl text-red-600 mb-2" />
                <span className="text-gray-600">Upload Resume (PDF/DOC) *</span>
                <input type="file" {...register("resume")} className="hidden" />
              </label>
              <p className="text-sm text-red-600 mt-1">{errors.resume?.message}</p>
            </div>

            {/* Experience Fields (Responsive grid) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {["teachingExperience", "developmentExperience", "totalExperience"].map((f) => (
                <div key={f}>
                  <input
                    type="number"
                    {...register(f)}
                    placeholder={`${f.replace(/([A-Z])/g, " $1")} *`}
                    className={inputClass}
                  />
                  <p className="text-sm text-red-600 mt-1">{errors[f]?.message}</p>
                </div>
              ))}
            </div>

            {/* Work Looking For */}
            <div>
              <span className="font-medium">Work Looking For *</span>
              <div className="flex flex-wrap gap-4 mt-2">
                {["Part-Time Trainer", "Full-Time Trainer"].map((v) => (
                  <label key={v} className="inline-flex items-center gap-2">
                    <input type="checkbox" value={v} {...register("workLookingFor")} />
                    <span>{v}</span>
                  </label>
                ))}
              </div>
              <p className="text-sm text-red-600 mt-1">{errors.workLookingFor?.message}</p>
            </div>

            {/* Mode */}
            <div>
              <span className="font-medium">Mode *</span>
              <div className="flex flex-wrap gap-4 mt-2">
                {["Online Mode", "Offline Mode"].map((v) => (
                  <label key={v} className="inline-flex items-center gap-2">
                    <input type="checkbox" value={v} {...register("mode")} />
                    <span>{v}</span>
                  </label>
                ))}
              </div>
              <p className="text-sm text-red-600 mt-1">{errors.mode?.message}</p>
            </div>

            {/* Location */}
            <div>
              <input {...register("location")} placeholder="Location *" className={inputClass} />
              <p className="text-sm text-red-600 mt-1">{errors.location?.message}</p>
            </div>

            {/* Payout */}
            <div>
              <input
                type="number"
                {...register("payoutExpectations")}
                placeholder="Payout Expectations (per hour) *"
                className={inputClass}
              />
              <p className="text-sm text-red-600 mt-1">{errors.payoutExpectations?.message}</p>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-[60%] md:w-[50%] bg-gradient-to-r from-[#ED0331] to-[#87021C] text-white font-medium px-6 py-3 rounded-xl hover:opacity-90 transition disabled:opacity-50 mx-auto"
            >
              {isSubmitting ? "Submitting..." : "Submit Application"}
            </button>

            {/* Success/Error Message */}
            {message && (
              <p
                className={`mt-3 text-center font-medium ${
                  message.type === "success" ? "text-green-600" : "text-red-600"
                }`}
              >
                {message.text}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default JoinUsForm;
