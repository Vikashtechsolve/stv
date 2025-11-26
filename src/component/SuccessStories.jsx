import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import p2 from "../assets/p2.jpg";
import vector from "../assets/Vector.svg";

const testimonials = [
  {
    text: "I used the live doubt solving feature during exam prep and it was a lifesaver. The mentors not only answered my questions but also explained concepts in depth, which made everything so much clearer. The practice notes after each session helped me revise quickly and saved me hours of confusion, ultimately improving my scores.",
    name: "Arjun Mehta",
    role: "(Class 12, PCM)",
    img: p2,
  },
  {
    text: "The 1:1 mentorship sessions really cleared my doubts about career choices. My mentor gave me a clear roadmap that matched my goals, and it felt like having a guide who truly understands the challenges students face. I now feel more confident about my next steps and the direction my career is heading in.",
    name: "Akshit Kumar",
    role: "(Engineering Student)",
    img: "https://res.cloudinary.com/dc4gqqd35/image/upload/v1759842659/Akshit_bc5spo.jpg",
  },
  {
    text: "The resume review service was a game-changer for me. I got detailed feedback with AI plus human suggestions that made my resume stand out in the job market. The reviewers highlighted mistakes I never noticed and rewrote my key points in a stronger way. Thanks to this, I cracked my first internship interview easily.",
    name: "Akshit Adroja",
    role: "(Engineering Student)",
    img: "https://res.cloudinary.com/dc4gqqd35/image/upload/v1759842657/Adroja_Akshit_opn25p.jpg",
  },
  {
    text: "The platform has given me exactly what I needed — personal guidance and real growth. The mentors explain concepts so clearly and the doubt-solving sessions save a lot of time. I enjoy participating in the coding contests, which keep me motivated to practice regularly. The resume review session was the best part — it made my profile industry-ready and boosted my confidence.",
    name: "Yug Dobariya",
    role: "(MBA Student)",
    img: "https://res.cloudinary.com/dc4gqqd35/image/upload/v1759842750/Yug_Dobariya_hpnrvx.jpg",
  },
  {
    text: "The online coding contests helped me test my skills under real conditions. The leaderboard and feedback pushed me to improve every time. I even got recognition for top performance, which boosted my confidence for interviews and campus placements. A fun and practical way to learn!",
    name: "Dev Kardani",
    role: "(BE Student)",
    img: "https://res.cloudinary.com/dc4gqqd35/image/upload/v1759842662/Dev_Kardani_u6l6uq.jpg",
  },
  {
    text: "I uploaded my resume and got detailed feedback from an industry expert. They highlighted exactly what to improve, suggested projects to add, and gave me a clear roadmap for applying to companies. The process was simple, affordable, and extremely helpful in boosting my chances of getting interviews.",
    name: "Meet Bhuva",
    role: "(IT Student)",
    img: "https://res.cloudinary.com/dc4gqqd35/image/upload/v1759842666/Meet_Bhuva_vafq1d.jpg",
  },
  {
    text: "I used the live doubt-solving feature for my Math and Web Development queries. The mentor explained everything clearly, shared notes, and even suggested exercises for practice. I could ask questions in real time, and the session felt personalized. It's like having a teacher right at home!",
    name: "Harpal Modasiya",
    role: "(MBA Student)",
    img: "https://res.cloudinary.com/dc4gqqd35/image/upload/v1759842663/Harpal_Modasiya_km895u.jpg",
  },
  {
    text: "The one-on-one mentorship really changed the way I studied. Earlier, I used to get stuck for hours, but now my doubts are solved instantly through the live doubt-solving sessions. The coding contests have boosted my confidence and improved my problem-solving speed. The resume review was also super helpful — it gave my CV a professional touch that will help me in placements.",
    name: "Swatee Singh",
    role: "(B.Tech Student)",
    img: "https://res.cloudinary.com/dc4gqqd35/image/upload/v1759842668/swatee_ulkfwf.jpg",
  },
];

const SuccessStories = () => {
  const viewportRef = useRef(null);
  const carouselRef = useRef(null);
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const gap = 28;
  const autoScrollRef = useRef(null);

  const calcSizesAndCenter = () => {
    const viewport = viewportRef.current;
    const carousel = carouselRef.current;
    if (!viewport || !carousel) return;

    const vw = viewport.clientWidth;
    const isMobile = vw < 820;

    let cardW;
    if (isMobile) {
      cardW = Math.max(320, vw - 48);
    } else {
      cardW = Math.max(420, Math.min(920, Math.floor(vw * 0.65)));
    }

    const cards = carousel.querySelectorAll(".card");
    cards.forEach((c) => (c.style.width = cardW + "px"));
    carousel.style.gap = gap + "px";

    centerCard(index, cardW, vw);
  };

  const centerCard = (idx, cardW, vw) => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const fullStep = cardW + gap;
    const offset = idx * fullStep;
    const centerLeft = (vw - cardW) / 2;
    const translateX = offset - centerLeft;

    carousel.style.transform = `translateX(-${translateX}px)`;
    carousel.style.transition = "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)";
  };

  const nextCard = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevCard = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const startAutoScroll = () => {
    autoScrollRef.current = setInterval(nextCard, 5000);
  };

  const resetAutoScroll = () => {
    clearInterval(autoScrollRef.current);
    startAutoScroll();
  };

  useEffect(() => {
    calcSizesAndCenter();
    resetAutoScroll();
  }, [index]);

  useEffect(() => {
    if (isHovered) {
      clearInterval(autoScrollRef.current);
    } else {
      startAutoScroll();
    }
    return () => clearInterval(autoScrollRef.current);
  }, [isHovered]);

  useEffect(() => {
    calcSizesAndCenter();
    startAutoScroll();

    let resizeTimer;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(calcSizesAndCenter, 80);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      clearInterval(autoScrollRef.current);
    };
  }, []);

  return (
    <motion.section
      className="py-12 md:py-16 lg:py-20 px-4 md:px-6 bg-gray-50 relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-10 w-64 h-64 bg-red-200/20 rounded-full blur-3xl"
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
        {/* Header */}
        <motion.div
          className="text-center mb-8 md:mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="heading-section mb-4 md:mb-6">
            Our Success Stories
          </h1>
          <p className="text-center text-base sm:text-lg md:text-xl text-gray-900 font-nunito font-medium max-w-3xl mx-auto">
            From doubt-solving to dream careers — here's how our students
            transformed their journey!
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div
          id="viewport"
          ref={viewportRef}
          className="relative w-full max-w-6xl mx-auto overflow-hidden py-6"
        >
          {/* Carousel */}
          <div
            id="carousel"
            ref={carouselRef}
            className="flex items-stretch"
          >
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                className={`card flex-none bg-white h-auto overflow-hidden flex flex-col md:flex-row items-center md:items-stretch rounded-2xl shadow-lg transition-all duration-500 ${
                  i === index
                    ? "shadow-2xl ring-2 ring-red-200 scale-105 z-10"
                    : "opacity-70 scale-95"
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                {/* Text Content */}
                <div className="order-2 md:order-1 px-5 py-6 md:px-8 md:py-8 w-full md:w-2/3 flex flex-col justify-center text-center md:text-left">
                  {/* Quote Icon */}
                  <motion.div
                    className="mb-4 md:mb-6"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  >
                    <img
                      src={vector}
                      className="w-8 h-8 md:w-10 md:h-10 opacity-50"
                      alt="quote"
                    />
                  </motion.div>

                  {/* Testimonial Text */}
                  <p className="text-gray-800 mb-6 text-sm md:text-base leading-relaxed font-nunito">
                    "{t.text}"
                  </p>

                  {/* Student Info */}
                  <div className="mt-auto">
                    <h3 className="text-lg md:text-xl font-bold font-playfair text-gray-900 mb-1">
                      {t.name}
                    </h3>
                    <p className="text-gray-600 text-xs md:text-sm font-nunito">
                      {t.role}
                    </p>
                  </div>
                </div>

                {/* Image Section */}
                <div className="order-1 md:order-2 w-full md:w-1/3 flex justify-center md:block relative">
                  <motion.img
                    src={t.img}
                    alt={t.name}
                    className={`w-24 h-24 md:w-full md:h-full object-cover rounded-full md:rounded-none md:rounded-r-2xl mt-4 md:mt-0 transition-all duration-500 ${
                      i === index ? "ring-4 ring-red-200 scale-105" : "scale-100"
                    }`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <motion.button
            onClick={() => {
              prevCard();
              resetAutoScroll();
            }}
            className="hidden md:flex absolute top-1/2 -translate-y-1/2 left-4 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer z-20 group"
            whileHover={{ scale: 1.1, x: -3 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Previous testimonial"
          >
            <FiChevronLeft className="w-6 h-6 text-gray-700 group-hover:text-red-600 transition-colors" />
          </motion.button>

          <motion.button
            onClick={() => {
              nextCard();
              resetAutoScroll();
            }}
            className="hidden md:flex absolute top-1/2 -translate-y-1/2 right-4 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer z-20 group"
            whileHover={{ scale: 1.1, x: 3 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Next testimonial"
          >
            <FiChevronRight className="w-6 h-6 text-gray-700 group-hover:text-red-600 transition-colors" />
          </motion.button>

          {/* Indicator Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, idx) => (
              <motion.button
                key={idx}
                onClick={() => {
                  setIndex(idx);
                  resetAutoScroll();
                }}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  idx === index
                    ? "w-8 bg-red-600"
                    : "w-2 bg-gray-300 hover:bg-gray-400"
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default SuccessStories;
