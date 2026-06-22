import React from "react";
import { motion } from "framer-motion";
import { FiStar } from "react-icons/fi";

const testimonials = [
  {
    name: "Priya Sharma",
    college: "3rd Year B.Tech, Delhi",
    quote:
      "The Resume Building masterclass was exactly what I needed before campus placements. The mentor walked us through every section live and shared templates I could edit right away. My shortlist callbacks improved within two weeks.",
    img: "https://images.squarespace-cdn.com/content/v1/63bd194fcd3c0b07a92cc80a/90d78a9c-a242-4e19-9254-cfa561e36372/Priya+Sharma.png",
    rating: 5,
  },
  {
    name: "Rohan Iyer",
    college: "BCA Student, Bangalore",
    quote:
      "I joined the Data Structures masterclass with zero confidence in arrays and trees. In one focused session, the mentor broke concepts down with simple coding examples. It felt like a full semester revision packed into 90 minutes.",
    img: "https://media.licdn.com/dms/image/v2/D4E03AQFtOMUGPupt_Q/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1702588300079?e=2147483647&v=beta&t=yAzNVJepVRYbu8fcTBEQwJzdoZZITUzseswjZu57ThE",
    rating: 5,
  },
  {
    name: "Ananya Reddy",
    college: "MCA Student, Hyderabad",
    quote:
      "The Generative AI masterclass opened my eyes to prompt engineering and real LLM use cases. I built a small chatbot the same evening using what I learned. Worth far more than the ticket price.",
    img: "https://media.licdn.com/dms/image/v2/D5603AQHeYQemwQOEzA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1712819683917?e=2147483647&v=beta&t=whzKXi4Gn3I8dg6QPTGJIhb0Uinhm2UYz9dUmN8po8E",
    rating: 5,
  },
  {
    name: "Karan Malhotra",
    college: "2nd Year CSE, Mumbai",
    quote:
      "Competitive programming always intimidated me until this masterclass. The mentor shared patterns for arrays, strings, and DP with live problem-solving. I used the same approach in my college coding contest and ranked in the top 20.",
    img: "https://media.licdn.com/dms/image/v2/C5603AQFe-4VAI8o1wg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1523877351805?e=2147483647&v=beta&t=cGsX0doXjcLgEHuyqTYs_a926PC8lSze7eyJ-rCcqUo",
    rating: 5,
  },
  {
    name: "Sneha Nair",
    college: "Final Year IT, Chennai",
    quote:
      "The interview preparation masterclass covered HR questions, project explanations, and mock answers. I felt much calmer in my first company interview and finally cleared the technical round. Highly recommend for final-year students.",
    img: "https://media.licdn.com/dms/image/v2/D4E03AQGjyvrqrQFMyQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1688019139091?e=2147483647&v=beta&t=zHooq_bJZoNq4CljIOVfsmaMTsm8U800sbGAQWTYCnA",
    rating: 5,
  },
  {
    name: "Arjun Desai",
    college: "Diploma in CS, Ahmedabad",
    quote:
      "As a student from a tier-2 city, I was unsure if online masterclasses would work for me. The live Q&A, shared notes, and patient mentoring made it feel personal. I have already booked two more sessions this month.",
    img: "https://media.licdn.com/dms/image/v2/D5603AQEZNSbJCEAw4Q/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1727338848511?e=2147483647&v=beta&t=nSzl48rWTUBFKuvX8148bpk81Slasl7WhbUZAsQ3QOM",
    rating: 5,
  },
];

const WhatStudentsSay = () => {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20 px-4 md:px-6 bg-gray-50 flex flex-col relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 bg-red-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="w-full max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="heading-section mb-4">Our Success Stories</h2>
          <p className="text-lg md:text-xl font-nunito text-black/70 max-w-3xl mx-auto">
            Stories from Indian students across colleges who grew their skills through VTS masterclasses
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => {
            const delay = index * 0.1;
            return (
              <motion.div
                key={testimonial.name}
                className="bg-white rounded-3xl shadow-xl p-6 md:p-7 flex flex-col gap-5 border-2 border-transparent hover:border-[#ED0331]/30 relative overflow-hidden group"
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay, ease: "easeOut" }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  boxShadow: "0 20px 40px rgba(237, 3, 49, 0.15)",
                }}
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#ED0331]/5 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="text-5xl md:text-6xl text-[#ED0331]/20 font-playfair leading-none mb-2">
                  "
                </div>

                <div className="flex gap-1 mb-2">
                  {[...Array(testimonial.rating || 5)].map((_, i) => (
                    <FiStar key={i} className="w-5 h-5 text-[#ED0331] fill-[#ED0331]" />
                  ))}
                </div>

                <p className="text-sm md:text-base font-nunito text-black leading-relaxed grow line-clamp-5">
                  {testimonial.quote}
                </p>

                <div className="flex items-center gap-4 pt-4 border-t-2 border-gray-100">
                  <motion.div
                    className="w-14 h-14 md:w-16 md:h-16 rounded-full overflow-hidden border-3 border-[#ED0331]/30 shrink-0 shadow-lg ring-2 ring-[#ED0331]/10 bg-[#FBEAEB]"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src={testimonial.img}
                      alt={`${testimonial.name}, ${testimonial.college}`}
                      className="w-full h-full object-cover object-top"
                      loading="lazy"
                      decoding="async"
                    />
                  </motion.div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base md:text-lg font-bold font-playfair text-black mb-0.5 truncate">
                      {testimonial.name}
                    </h3>
                    <p className="text-xs md:text-sm text-gray-600 font-nunito truncate">
                      {testimonial.college}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhatStudentsSay;
