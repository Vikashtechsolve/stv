import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Sparkles, Award, TrendingUp, BookOpen } from "lucide-react";
import MentorSessionForm from "./MentorSessionForm";

const mentorsData = [
  {
    name: "Arjun Singh",
    role: "Frontend Engineer, Google",
    expertise: "React, Next.js, and UI Systems",
    experience: "7+ years",
    rating: 4.9,
    category: "Web Development",
    subject: "React.js",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Shreya Patel",
    role: "Full Stack Developer, Microsoft",
    expertise: "MERN Stack, REST APIs",
    experience: "6+ years",
    rating: 4.8,
    category: "Web Development",
    subject: "Full Stack Development",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Kavya Sharma",
    role: "SDE II, Adobe",
    expertise: "C++, Java, System Design",
    experience: "6+ years",
    rating: 4.9,
    category: "Data Structures",
    subject: "System Design",
    img: "https://randomuser.me/api/portraits/women/47.jpg",
  },
  {
    name: "Rohan Gupta",
    role: "Software Engineer, Amazon",
    expertise: "DSA, Competitive Programming",
    experience: "5+ years",
    rating: 4.9,
    category: "Data Structures",
    subject: "DSA",
    img: "https://randomuser.me/api/portraits/men/36.jpg",
  },
  {
    name: "Meera Jain",
    role: "Machine Learning Engineer, Zomato",
    expertise: "Statistics, Deep Learning, NLP",
    experience: "5+ years",
    rating: 4.8,
    category: "AI/Machine Learning",
    subject: "Deep Learning",
    img: "https://randomuser.me/api/portraits/women/52.jpg",
  },
  {
    name: "Nisha Bansal",
    role: "Research Scientist, IIT Delhi",
    expertise: "Deep Learning, Generative AI",
    experience: "6+ years",
    rating: 4.8,
    category: "AI/Machine Learning",
    subject: "Generative AI",
    img: "https://randomuser.me/api/portraits/women/59.jpg",
  },
];

const categories = [
  "All",
  "Web Development",
  "Data Structures",
  "Data Science",
  "AI/Machine Learning",
  "Career",
  "Others",
];

const MentorSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedMentor, setSelectedMentor] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const scrollRef = useRef(null);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const filteredMentors =
    selectedCategory === "All"
      ? mentorsData
      : mentorsData.filter((m) => m.category === selectedCategory);

  const scrollLeft = () => scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
  const scrollRight = () => scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: isMobile ? 0.3 : 0.5,
        type: "spring",
        stiffness: isMobile ? 150 : 100,
        damping: 20,
      },
    },
  };

  return (
    <section className="px-4 md:px-10 py-16 bg-gray-50 text-center relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className={`absolute top-20 right-20 w-96 h-96 bg-blue-200/10 rounded-full ${isMobile ? 'blur-xl' : 'blur-3xl'}`}
          animate={isMobile ? {} : {
            scale: [1, 1.1, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ willChange: isMobile ? 'auto' : 'transform' }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Headings */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.3 }}
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <Sparkles className="w-6 h-6 text-[#ED0331]" />
            <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl text-gray-800">
              Meet Our Mentors
            </h2>
            <Sparkles className="w-6 h-6 text-[#ED0331]" />
          </div>
          <p className="heading-primary font-nunito text-lg md:text-xl mb-2">
            Learn directly from professionals working at Google, Microsoft, and top startups.
          </p>
          <p className="text-lg md:text-xl font-nunito heading-primary mb-10">
            Our mentors are not just teachers — they are guides who've walked the same path you're on.
          </p>
        </motion.div>

        {/* Category Bar */}
        <motion.div
          className="relative flex items-center hide-scrollbar justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.3, delay: 0.05 }}
        >
          <motion.button
            onClick={scrollLeft}
            className="absolute left-0 bg-gradient-to-r from-[#ED0331] to-[#87021C] text-white p-2 rounded-full hover:opacity-90 z-10 shadow-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft size={20} />
          </motion.button>
          <div ref={scrollRef} className="flex gap-3 overflow-x-auto hide-scrollbar mx-8">
            {categories.map((cat, index) => (
              <motion.button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-3 rounded-lg whitespace-nowrap font-medium transition-all ${
                  selectedCategory === cat
                    ? "bg-gradient-to-r from-[#ED0331] to-[#87021C] text-white shadow-lg"
                    : "bg-white hover:bg-gray-100 text-gray-700 shadow-md"
                }`}
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {cat}
              </motion.button>
            ))}
          </div>
          <motion.button
            onClick={scrollRight}
            className="absolute right-0 bg-gradient-to-r from-[#ED0331] to-[#87021C] text-white p-2 rounded-full hover:opacity-90 z-10 shadow-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight size={20} />
          </motion.button>
        </motion.div>

        {/* Mentor Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          <AnimatePresence mode="wait">
            {filteredMentors.map((mentor, index) => (
              <motion.div
                key={mentor.name}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="bg-white shadow-lg rounded-2xl p-6 w-[90%] sm:w-[280px] md:w-[300px] lg:w-[320px] transition-all border-2 border-transparent hover:border-[#ED0331]/30 text-left relative overflow-hidden group"
                whileHover={isMobile ? {} : { y: -10, scale: 1.02 }}
              >
                {/* Decorative Background */}
                <motion.div
                  className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#ED0331]/10 to-[#87021C]/10 rounded-full blur-2xl -z-0"
                  animate={isMobile ? {} : {
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.4, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  style={{ willChange: isMobile ? 'auto' : 'transform, opacity' }}
                />

                <div className="relative z-10">
                  {/* Profile Image */}
                  <motion.div
                    className="relative mb-4"
                    whileHover={isMobile ? {} : { scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src={mentor.img}
                      alt={mentor.name}
                      className="w-28 h-28 object-cover rounded-full mx-auto md:mx-0 border-4 border-[#ED0331]/20 shadow-lg"
                    />
                    <motion.div
                      className="absolute -top-2 -right-2 bg-green-500 w-6 h-6 rounded-full border-4 border-white"
                      animate={isMobile ? {} : { scale: [1, 1.1, 1] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      style={{ willChange: isMobile ? 'auto' : 'transform' }}
                    />
                  </motion.div>

                  {/* Name and Role */}
                  <h3 className="text-lg font-playfair font-semibold text-gray-800 mb-1">
                    {mentor.name}
                  </h3>
                  <div className="flex items-center gap-2 mb-3">
                    <Award className="w-4 h-4 text-[#ED0331]" />
                    <p className="text-gray-600 text-sm">{mentor.role}</p>
                  </div>

                  {/* Expertise */}
                  <div className="mb-3">
                    <div className="flex items-center gap-2 mb-1">
                      <BookOpen className="w-4 h-4 text-[#ED0331]" />
                      <span className="font-semibold text-[#ED0331] text-sm">Expertise:</span>
                    </div>
                    <p className="text-sm text-gray-700 font-nunito ml-6">{mentor.expertise}</p>
                  </div>

                  {/* Experience */}
                  <div className="mb-3">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-[#ED0331]" />
                      <span className="font-semibold text-[#ED0331] text-sm">Experience:</span>
                      <span className="text-sm text-gray-700">{mentor.experience}</span>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-sm text-[#ED0331] font-semibold">Rating:</span>
                    <span className="text-sm font-medium text-gray-700">{mentor.rating}</span>
                    <Star size={16} className="text-yellow-400 fill-yellow-400" />
                  </div>

                  {/* Book Session Button */}
                  <motion.button
                    onClick={() => setSelectedMentor(mentor)}
                    className="w-full bg-gradient-to-r from-[#ED0331] to-[#87021C] text-white px-4 py-3 rounded-xl font-nunito font-semibold shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
                    whileHover={isMobile ? {} : { scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      Book Session
                      <motion.span
                        animate={isMobile ? {} : { x: [0, 5, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        style={{ willChange: isMobile ? 'auto' : 'transform' }}
                      >
                        →
                      </motion.span>
                    </span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-[#87021C] to-[#ED0331] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Open Modal */}
      {selectedMentor && (
        <MentorSessionForm
          mentor={selectedMentor}
          onClose={() => setSelectedMentor(null)}
        />
      )}
    </section>
  );
};

export default MentorSection;
