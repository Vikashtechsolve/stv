import React, { useState, useEffect, useRef } from "react";
import { Star, Sparkles, Quote } from "lucide-react";
import { motion, AnimatePresence, useInView } from "framer-motion";

const testimonials = [
  {
    name: "Tamana Kapoor",
    role: "CS Fundamentals Student",
    text: "Operating System and DBMS topics were confusing during my college exam prep. My mentor explained with real-world examples — I finally understood how systems work!",
    img: "https://randomuser.me/api/portraits/women/1.jpg",
    rating: 5,
  },
  {
    name: "Aarav Mehta",
    role: "Science Student",
    text: "I couldn't understand a tricky Physics numericals chapter before my test. My mentor solved each problem step-by-step — it felt like having a personal teacher at home!",
    img: "https://randomuser.me/api/portraits/men/3.jpg",
    rating: 5,
  },
  {
    name: "Anika Verma",
    role: "AI & ML Enthusiast",
    text: "I joined to clear one ML model doubt but ended up learning so much about optimization and deployment. The mentor's live explanation made tough topics super easy!",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
  },
  {
    name: "Rohan Gupta",
    role: "Data Science Student",
    text: "My mentor explained complex algorithms in such a simple way that I could finally implement them confidently in my projects.",
    img: "https://randomuser.me/api/portraits/men/40.jpg",
    rating: 5,
  },
  {
    name: "Sanya Patel",
    role: "Engineering Student",
    text: "I loved how interactive the sessions were! My mentor made even the toughest topics feel approachable.",
    img: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 5,
  },
  {
    name: "Karan Singh",
    role: "Programming Enthusiast",
    text: "Thanks to my mentor, I not only understood recursion but also developed the confidence to solve new problems easily.",
    img: "https://randomuser.me/api/portraits/men/12.jpg",
    rating: 5,
  },
];

const StudentTestimonials = () => {
  const [index, setIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Adjust cards per view based on screen width
  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth < 640) setCardsPerView(1);
      else if (window.innerWidth < 1024) setCardsPerView(2);
      else setCardsPerView(3);
    };
    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);
    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);

  // Auto slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + cardsPerView) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [cardsPerView]);

  // Visible testimonials
  const visible = [];
  for (let i = 0; i < cardsPerView; i++) {
    visible.push(testimonials[(index + i) % testimonials.length]);
  }

  return (
    <motion.section
      ref={ref}
      className="relative bg-gradient-to-br from-gray-50 via-white to-gray-50 py-20 md:py-28 px-4 md:px-10 text-center overflow-hidden"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-pink-200/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <Sparkles className="w-8 h-8 text-[#ED0331]" />
            <motion.h2
              className="heading-section"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Student Testimonials
            </motion.h2>
            <Sparkles className="w-8 h-8 text-[#ED0331]" />
          </div>
          <motion.p
            className="text-xl md:text-2xl font-nunito font-semibold text-[#ED0331] mb-3"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Every doubt solved here turns into a success story.
          </motion.p>
          <motion.p
            className="text-lg md:text-xl font-nunito text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Students share how Live Doubt Solving sessions helped them understand
            faster, build confidence, and truly learn — not just memorize.
          </motion.p>
        </motion.div>

        {/* Slider container */}
        <div className="relative w-full overflow-hidden">
          <div className="flex justify-center items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ x: "100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: "-100%", opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="flex gap-6 justify-center flex-wrap md:flex-nowrap w-full"
              >
                {visible.map((t, i) => (
                  <motion.div
                    key={`${index}-${i}`}
                    className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl p-8 flex flex-col items-center w-[90%] sm:w-[45%] lg:w-[30%] mx-auto transition-all duration-500 border border-gray-200/50 overflow-hidden"
                    initial={{ opacity: 0, y: 30, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    whileHover={{ y: -8, scale: 1.02 }}
                  >
                    {/* Gradient Background Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-red-50/50 to-pink-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Quote Icon */}
                    <div className="absolute top-4 left-4 opacity-10">
                      <Quote className="w-12 h-12 text-[#ED0331]" />
                    </div>

                    <div className="relative z-10 w-full">
                      {/* Avatar */}
                      <motion.div
                        className="mb-6"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <div className="relative inline-block">
                          <img
                            src={t.img}
                            alt={t.name}
                            className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg"
                          />
                          <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-[#ED0331] to-[#87021C] rounded-full p-1">
                            <Star className="w-4 h-4 text-white fill-white" />
                          </div>
                        </div>
                      </motion.div>

                      {/* Testimonial Text */}
                      <p className="text-gray-700 font-nunito mb-6 text-base leading-relaxed italic">
                        "{t.text}"
                      </p>

                      {/* Star Rating */}
                      <div className="flex justify-center gap-1 mb-4">
                        {[...Array(t.rating)].map((_, i) => (
                          <Star key={i} size={20} className="text-yellow-500 fill-yellow-500" />
                        ))}
                      </div>

                      {/* Name and Role */}
                      <div>
                        <h3 className="font-playfair font-semibold text-xl text-gray-900 mb-1">
                          {t.name}
                        </h3>
                        <p className="text-sm font-nunito text-gray-600">
                          {t.role}
                        </p>
                      </div>
                    </div>

                    {/* Hover Border Effect */}
                    <motion.div
                      className="absolute inset-0 rounded-2xl border-2 border-[#ED0331] opacity-0 pointer-events-none"
                      whileHover={{
                        opacity: 0.3,
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default StudentTestimonials;
