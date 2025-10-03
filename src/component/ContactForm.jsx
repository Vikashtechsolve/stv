import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import formImg from "../assets/form.png";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    query: "",
    type: "sales", // "sales" or "responses"
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, phone, query, type } = formData;

    if (!name || !email || !phone || !query) {
      alert("⚠️ Please fill in all fields!");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("http://localhost:8000/api/mail/send-mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, query, type }),
      });

      const data = await res.json();
      console.log("Server response:", data);

      if (res.ok) {
        alert("✅ Your query has been sent successfully!");
        setFormData({ name: "", email: "", phone: "", query: "", type: "sales" });
      } else {
        alert(`❌ Failed to send query: ${data.error || data.message}`);
      }
    } catch (err) {
      console.error("Error sending query:", err);
      alert("❌ Failed to send query. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-12 mt-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold font-playfair mb-8 sm:mb-10 md:mb-12 lg:mb-16 bg-gradient-to-r from-[#ED0331] to-[#87021C] bg-clip-text text-transparent leading-snug sm:leading-snug md:leading-[1.2] lg:leading-[1.2]">
          Have Questions? We’re Here to Help
        </h1>

        <div className="grid md:grid-cols-2 gap-10 md:gap-6 items-center">
          <div className="flex flex-col items-center space-y-4">
            <img
              src={formImg}
              alt="Support Illustration"
              className="w-[80%] sm:w-[70%] md:w-[75%] lg:w-[65%]"
            />
            <p className="text-base sm:text-lg font-medium text-center mb-6 sm:mb-10">
              Let’s solve your doubts together!
            </p>
            <div className="self-center md:self-start">
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-medium px-5 py-2 rounded-md transition text-sm sm:text-base"
              >
                <FaWhatsapp className="text-lg sm:text-xl" /> Chat with us
              </a>
            </div>
          </div>

          <form
            className="space-y-6 sm:space-y-8 flex flex-col items-center justify-center w-full"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your Full Name"
              className="w-full sm:w-[85%] px-4 py-3 sm:py-4 rounded-xl border border-black text-center placeholder:text-center placeholder:text-base sm:placeholder:text-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your Email Address"
              className="w-full sm:w-[85%] px-4 py-3 sm:py-4 rounded-xl border border-black text-center placeholder:text-center placeholder:text-base sm:placeholder:text-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              type="tel"
              name="phone"
              placeholder="Enter your 10-digit mobile number"
              className="w-full sm:w-[85%] px-4 py-3 sm:py-4 rounded-xl border border-black text-center placeholder:text-center placeholder:text-base sm:placeholder:text-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              value={formData.phone}
              onChange={handleChange}
            />
            <textarea
              name="query"
              rows="4"
              placeholder="Type your Query Here..."
              className="w-full sm:w-[85%] px-4 py-3 rounded-xl border border-black text-center placeholder:text-center placeholder:text-base sm:placeholder:text-lg resize-none focus:outline-none focus:ring-2 focus:ring-red-500"
              value={formData.query}
              onChange={handleChange}
            />

            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="hidden"
            >
              <option value="sales">Sales</option>
              <option value="responses">General</option>
            </select>

            <button
              type="submit"
              disabled={loading}
              className="w-[60%] sm:w-[40%] lg:w-[30%] bg-gradient-to-r from-[#ED0331] to-[#87021C] text-white font-medium px-6 py-3 rounded-xl hover:opacity-90 transition disabled:opacity-50"
            >
              {loading ? "Sending..." : "Submit Query"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
