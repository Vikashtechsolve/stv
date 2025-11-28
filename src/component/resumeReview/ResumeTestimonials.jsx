import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Raj Sharma",
    role: "Web Development Student",
    image:
      "https://res.cloudinary.com/dc4gqqd35/image/upload/v1759840361/Vivek_m6sgzw.jpg",
    review:
      "I got my resume reviewed for just ₹149 and the mentor pointed out so many small issues that made a big difference! I got shortlisted for my dream internship.",
    rating: 5,
  },
  {
    name: "Nitin Singh",
    role: "DSA Learner",
    image:
      "https://res.cloudinary.com/dc4gqqd35/image/upload/v1759832493/Ashish_ae2fxk.jpg",
    review:
      "Very affordable and valuable. The mentor helped me improve my resume layout and keywords for ATS. Totally worth it.",
    rating: 5,
  },
  {
    name: "Naman Joshi",
    role: "Programming Languages",
    image:
      "https://res.cloudinary.com/dc4gqqd35/image/upload/v1759841028/Abhinav_kilenc.jpg",
    review:
      "Before taking the resume review, I had no idea how to structure my experience. The expert completely transformed my resume — I got shortlisted for 3 companies within a week!",
    rating: 5,
  },
];

const ResumeTestimonials = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="bg-gray-50 py-16 md:py-20 px-4 md:px-6 lg:px-12 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 bg-yellow-200/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="heading-section mb-4 md:mb-6">
            What Students Say About Our Resume Reviews
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl p-6 md:p-8 flex flex-col items-center text-center transition-all duration-300 border-2 border-transparent hover:border-red-200"
              whileHover={{ y: -8, scale: 1.02 }}
            >
              {/* Quote Icon */}
              <motion.div
                className="absolute top-4 left-4 opacity-10"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Quote className="w-12 h-12 text-red-500" />
              </motion.div>

              {/* Profile Image */}
              <motion.div
                className="relative mb-6"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, type: "spring", stiffness: 200 }}
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-xl"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-red-500/20 to-red-500/0" />
              </motion.div>

              {/* Review Text */}
              <p className="text-gray-700 font-nunito text-sm md:text-base leading-relaxed mb-6 relative z-10">
                "{testimonial.review}"
              </p>

              {/* Rating Stars */}
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + i * 0.1 }}
                  >
                    <Star
                      size={18}
                      className={
                        i < testimonial.rating
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-300"
                      }
                    />
                  </motion.div>
                ))}
              </div>

              {/* Name and Role */}
              <div className="mt-auto">
                <p className="font-bold text-base font-playfair heading-primary">
                  {testimonial.name}
                </p>
                <p className="text-sm text-gray-600 font-nunito italic mt-1">
                  {testimonial.role}
                </p>
              </div>

              {/* Decorative Gradient */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ResumeTestimonials;
