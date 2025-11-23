import React from "react";
import { motion } from "framer-motion";
import { FiStar, FiLinkedin } from "react-icons/fi";
import image from "./../assets/whatstudentsdays.png";

const Testimonials = () => {
  const testimonials = [
    {
      name: "YUG PANDEY",
      college: "College Name",
      quote:
        "I attended the Resume Building masterclass and within a week my CV looked 10x better. The mentor explained every detail step by step and even shared templates. This has boosted my confidence for interviews.",
      img: "https://res.cloudinary.com/dc4gqqd35/image/upload/v1759842750/Yug_Dobariya_hpnrvx.jpg",
      rating: 5,
    },
    {
      name: "SWATEE",
      college: "College Name",
      quote:
        "The Data Structures session cleared all my basics in just one hour. I used to struggle with arrays, but the mentor's examples made it so easy to understand. It felt like a full semester packed into 60 minutes.",
      img: "https://res.cloudinary.com/dc4gqqd35/image/upload/v1759842668/swatee_ulkfwf.jpg",
      rating: 5,
    },
    {
      name: "HARPAL PATEL",
      college: "College Name",
      quote:
        "I never thought online classes could feel so engaging. The mentor gave personal attention to each of us, answered doubts live, and even shared notes afterward. Totally worth much more than the fee!",
      img: "https://res.cloudinary.com/dc4gqqd35/image/upload/v1759842663/Harpal_Modasiya_km895u.jpg",
      rating: 5,
    },
    {
      name: "AKSHIT PANDEY",
      college: "College Name",
      quote:
        "The competitive programming masterclass was a game changer for me. I learned problem-solving tricks that I now apply in coding contests. The best part was the real-time coding examples shared during the class.",
      img: "https://res.cloudinary.com/dc4gqqd35/image/upload/v1759842659/Akshit_bc5spo.jpg",
      rating: 5,
    },
    {
      name: "ADISH MODI",
      college: "College Name",
      quote:
        "The mentorship program transformed my career path. The hands-on approach and real-world examples made complex concepts easy to understand. Highly recommend to anyone serious about learning.",
      img: "https://res.cloudinary.com/dc4gqqd35/image/upload/v1759842657/Adroja_Akshit_opn25p.jpg",
      rating: 5,
    },
    {
      name: "DEV DARJI",
      college: "College Name",
      quote:
        "The DSA course completely changed the way I approach problem-solving. The step-by-step explanations and practical coding examples made even tough concepts feel simple. Highly recommend it to anyone serious about improving their coding skills.",
      img: "https://res.cloudinary.com/dc4gqqd35/image/upload/v1759842662/Dev_Kardani_u6l6uq.jpg",
      rating: 5,
    }
  ];

  return (
    <section className="w-full py-12 md:py-16 lg:py-20 px-4 md:px-6 bg-[#E2E2E2] flex flex-col relative overflow-hidden">
      {/* Decorative Background Elements */}
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
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="heading-section mb-4">
            Our Success Stories
          </h2>
          <p className="text-lg md:text-xl font-nunito text-black/70 max-w-3xl mx-auto">
            Real stories from students who transformed their careers with us
          </p>
        </motion.div>

        {/* Testimonials Grid - Creative Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => {
            const delay = index * 0.1;
            return (
              <motion.div
                key={index}
                className="bg-white rounded-3xl shadow-xl p-6 md:p-7 flex flex-col gap-5 border-2 border-transparent hover:border-[#ED0331]/30 relative overflow-hidden group"
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay, ease: "easeOut" }}
                whileHover={{ y: -8, scale: 1.02, boxShadow: "0 20px 40px rgba(237, 3, 49, 0.15)" }}
              >
                {/* Decorative Corner */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#ED0331]/5 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity"></div>

                {/* Quote Icon */}
                <div className="text-5xl md:text-6xl text-[#ED0331]/20 font-playfair leading-none mb-2">
                  "
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-2">
                  {[...Array(testimonial.rating || 5)].map((_, i) => (
                    <FiStar key={i} className="w-5 h-5 text-[#ED0331] fill-[#ED0331]" />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-sm md:text-base font-nunito text-black leading-relaxed flex-grow line-clamp-4">
                  {testimonial.quote}
                </p>

                {/* Student Info */}
                <div className="flex items-center gap-4 pt-4 border-t-2 border-gray-100">
                  <motion.div
                    className="w-14 h-14 md:w-16 md:h-16 rounded-full overflow-hidden border-3 border-[#ED0331]/30 flex-shrink-0 shadow-lg ring-2 ring-[#ED0331]/10"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src={testimonial.img}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
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
                  <motion.a
                    href="#"
                    className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-blue-500 flex items-center justify-center text-white hover:bg-blue-600 transition-colors flex-shrink-0 shadow-lg"
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label="LinkedIn profile"
                  >
                    <FiLinkedin className="w-5 h-5 md:w-6 md:h-6" />
                  </motion.a>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
