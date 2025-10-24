import React, { useState, useEffect } from "react";
import { Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Tamana Kapoor",
    role: "CS Fundamentals Student",
    text: "Operating System and DBMS topics were confusing during my college exam prep. My mentor explained with real-world examples — I finally understood how systems work!",
    img: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    name: "Aarav Mehta",
    role: "Science Student",
    text: "I couldn’t understand a tricky Physics numericals chapter before my test. My mentor solved each problem step-by-step — it felt like having a personal teacher at home!",
    img: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    name: "Anika Verma",
    role: "AI & ML Enthusiast",
    text: "I joined to clear one ML model doubt but ended up learning so much about optimization and deployment. The mentor’s live explanation made tough topics super easy!",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Rohan Gupta",
    role: "Data Science Student",
    text: "My mentor explained complex algorithms in such a simple way that I could finally implement them confidently in my projects.",
    img: "https://randomuser.me/api/portraits/men/40.jpg",
  },
  {
    name: "Sanya Patel",
    role: "Engineering Student",
    text: "I loved how interactive the sessions were! My mentor made even the toughest topics feel approachable.",
    img: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "Karan Singh",
    role: "Programming Enthusiast",
    text: "Thanks to my mentor, I not only understood recursion but also developed the confidence to solve new problems easily.",
    img: "https://randomuser.me/api/portraits/men/12.jpg",
  },
];

const StudentTestimonials = () => {
  const [index, setIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);

  // ✅ Adjust cards per view based on screen width
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

  // ✅ Auto slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + cardsPerView) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [cardsPerView]);

  // ✅ Visible testimonials
  const visible = [];
  for (let i = 0; i < cardsPerView; i++) {
    visible.push(testimonials[(index + i) % testimonials.length]);
  }

  return (
    <section className="bg-[#E2E2E2] py-16 px-4 md:px-10 text-center overflow-hidden">
      <h2 className="text-3xl sm:text-4xl font-playfair mb-3">
        Student Testimonials
      </h2>
      <p className="text-xl md:text-xl font-nunito  red-gradient mt-5 mb-2">
        Every doubt solved here turns into a success story.
      </p>
      <p className="text-xl md:text-xl font-nunito  red-gradient mb-10 w-[95%] md:w-[70%] mx-auto">
        Students share how Live Doubt Solving sessions helped them understand
        faster, build confidence, and truly learn — not just memorize.
      </p>

      {/* ✅ Slider container */}
      <div className="relative w-full overflow-hidden">
        <div className="flex justify-center items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "-100%", opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className={`flex gap-6 justify-center flex-wrap md:flex-nowrap`}
            >
              {visible.map((t, i) => (
                <div
                  key={i}
                  className="bg-gradient-to-b from-[#EAF0FF] to-[#F5EFFF] shadow-md rounded-2xl p-6 flex flex-col items-center w-[90%] sm:w-[45%] lg:w-[30%] mx-auto transition-all duration-500 hover:shadow-xl"
                >
                  <img
                    src={t.img}
                    alt={t.name}
                    className="w-24 h-24 rounded-full mb-4 object-cover"
                  />
                  <p className="text-gray-800 font-nunito  mb-4 text-sm md:text-base">
                    “{t.text}”
                  </p>
                  <div className="flex text-yellow-500 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={18} fill="#fbbf24" />
                    ))}
                  </div>
                  <h3 className="font-playfair  red-gradient mt-2 text-lg font-semibold">
                    {t.name} —{" "}
                    <span className="text-gray-800">{t.role}</span>
                  </h3>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default StudentTestimonials;
