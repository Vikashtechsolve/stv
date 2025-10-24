import React from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Riya Sharma",
    role: "Web Development Student",
    image: "https://via.placeholder.com/150x150", // replace with actual image
    review:
      "I got my resume reviewed for just ₹149 and the mentor pointed out so many small issues that made a big difference! I got shortlisted for my dream internship.",
    rating: 4,
  },
  {
    name: "Neha Singh",
    role: "DSA Learner",
    image: "https://via.placeholder.com/150x150",
    review:
      "Very affordable and valuable. The mentor helped me improve my resume layout and keywords for ATS. Totally worth it.",
    rating: 4,
  },
  {
    name: "Kritika Joshi",
    role: "Programming Languages",
    image: "https://via.placeholder.com/150x150",
    review:
      "Before taking the resume review, I had no idea how to structure my experience. The expert completely transformed my resume — I got shortlisted for 3 companies within a week!",
    rating: 4,
  },
];

export default function ResumeTestimonials() {
  return (
    <section className="bg-[#E2E2E2] py-16 px-4">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="font-playfair text-3xl sm:text-4xl  text-gray-800 ">
          What Students Say About Our Resume Reviews
        </h2>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className="bg-gradient-to-b from-white to-blue-50 rounded-2xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition-all"
          >
            <img
              src={t.image}
              alt={t.name}
              className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-white shadow"
            />
            <p className="text-gray-700  font-nunito text-sm leading-relaxed mb-4">
              “{t.review}”
            </p>

            <div className="flex justify-center mb-3">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={18}
                  className={
                    i < t.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                  }
                />
              ))}
            </div>

            <p className="red-gradient font-semibold text-sm">
              {t.name} — <span className="italic">{t.role}</span>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
