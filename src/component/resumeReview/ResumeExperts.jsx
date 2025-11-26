import React from "react";

const experts = [
  {
    name: "Priya Sharma",
    title: "HR Specialist | Ex-TCS | Resume Coach",
    image: "https://res.cloudinary.com/dc4gqqd35/image/upload/v1760115261/1000022510_oetw7k.jpg", // Replace with actual image URLs
    description:
      "Reviewed 800+ resumes and helped 150+ graduates get shortlisted at top MNCs.",
    quote:
      "I specialize in transforming basic resumes into job-winning career stories.",
  },
  {
    name: "Vijay Kapoor",
    title: "Product Designer | Swiggy | Portfolio & Resume Mentor",
    image: "https://res.cloudinary.com/dc4gqqd35/image/upload/v1759840447/Amol_ykm4vw.jpg",
    description:
      "Helped 100+ aspiring designers refine their portfolios and resumes for creative roles.",
    quote:
      "Your design portfolio and resume should speak your personality — not just projects.",
  },
  {
    name: "Arjun Mehta",
    title: "Software Engineer | Google | Resume Expert",
    image: "https://res.cloudinary.com/dc4gqqd35/image/upload/v1759840361/Vivek_m6sgzw.jpg",
    description:
      "Mentored 500+ students and guided them to land internships at startups & FAANG companies.",
    quote:
      "A great resume doesn’t just list skills — it tells your growth journey.",
  },
  {
    name: "Jaimin Sharma",
    title: "HR Specialist | Ex-TCS | Resume Coach",
    image: "https://res.cloudinary.com/dc4gqqd35/image/upload/v1759832518/Masood_Raza_ew6k7a.png",
    description:
      "Reviewed 800+ resumes and helped 150+ graduates get shortlisted at top MNCs.",
    quote:
      "I specialize in transforming basic resumes into job-winning career stories.",
  },
  {
    name: "Kishor Jain",
    title: "Talent Acquisition Lead | Accenture | Resume Strategist",
    image: "https://res.cloudinary.com/dc4gqqd35/image/upload/v1759841721/Kishor_rdehwa.jpg",
    description:
      "Assisted 200+ candidates in achieving their dream job placements with industry-optimized resumes.",
    quote:
      "I help candidates align their resumes with the language recruiters actually search for.",
  },
  {
    name: "Ashish Gupta",
    title: "Senior Data Analyst | Deloitte | Career Coach",
    image: "https://res.cloudinary.com/dc4gqqd35/image/upload/v1759832493/Ashish_ae2fxk.jpg",
    description:
      "Reviewed 600+ resumes focused on data & analytics roles and improved their ATS visibility.",
    quote:
      "Numbers matter in analytics — and in your resume too. Let’s make them count.",
  },
];

export default function ResumeExperts() {
  return (
    <section className="bg-gray-50  py-14 px-4">
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h2 className=" mb-2 font-playfair text-3xl sm:text-4xl  text-gray-800  inline-block pb-2">
          Meet Our Resume Experts
        </h2>
        <p className="text-xl  red-gradient  font-nunito mt-3 font-medium">
          Our industry professionals have reviewed thousands of resumes and
          guided students to their dream jobs — now it’s your turn!
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {experts.map((expert, index) => (
          <div
            key={index}
            className="bg-[#f9fafb] rounded-xl shadow-sm overflow-hidden border border-dotted border-blue-300 hover:shadow-md transition-all text-center"
          >
            <img
              src={expert.image}
              alt={expert.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-5 flex flex-col items-center">
              <h3 className="text-lg font-semibold red-gradient ">
                {expert.name}
              </h3>
              <p className="text-sm text-gray-700 mt-1">{expert.title}</p>
              <p className="text-sm text-gray-600 mt-3">{expert.description}</p>
              <p className="italic text-gray-800 mt-3 border-t border-gray-200 pt-2">
                “{expert.quote}”
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
