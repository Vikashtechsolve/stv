import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Sparkles, BookOpen, ArrowUpRight } from "lucide-react";
import MentorSessionForm from "./MentorSessionForm";

const topicData = [
  {
    category: "Web Development",
    description: "Frontend, backend, APIs and project guidance.",
    topics: ["HTML/CSS", "JavaScript", "React", "Node.js", "MERN Projects"],
  },
  {
    category: "Data Structures",
    description: "DSA concepts, problem solving and interview prep.",
    topics: ["Arrays & Strings", "Recursion", "Dynamic Programming", "Graphs", "System Design Basics"],
  },
  {
    category: "Data Science",
    description: "Data analysis and practical machine learning workflows.",
    topics: ["Python for Data", "Pandas & Numpy", "Data Visualization", "Statistics", "ML Projects"],
  },
  {
    category: "AI/Machine Learning",
    description: "Deep learning, NLP and real-world AI use-cases.",
    topics: ["Neural Networks", "NLP", "Deep Learning", "Model Deployment", "Generative AI"],
  },
  {
    category: "Career",
    description: "Job strategy, interview confidence and growth plan.",
    topics: ["Resume Review", "LinkedIn Profile", "Mock Interview", "Portfolio Guidance", "Career Roadmap"],
  },
  {
    category: "Others",
    description: "Custom learning goals tailored to your needs.",
    topics: ["Academic Doubts", "Project Review", "Tech Planning", "Learning Strategy", "Custom Topic"],
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
  const [selectedTopics, setSelectedTopics] = useState([]);
  const [openBooking, setOpenBooking] = useState(false);
  const [topicWarning, setTopicWarning] = useState("");
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

  const filteredTopics =
    selectedCategory === "All"
      ? topicData
      : topicData.filter((item) => item.category === selectedCategory);
  const toggleTopic = (topic) => {
    setSelectedTopics((prev) =>
      prev.includes(topic) ? prev.filter((t) => t !== topic) : [...prev, topic]
    );
  };
  const openBookingFlow = () => {
    if (!selectedTopics.length) {
      setTopicWarning("Please select at least one topic before booking.");
      document.getElementById("topic-selection-grid")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      return;
    }
    setTopicWarning("");
    setOpenBooking(true);
  };

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
              Book by Topic
            </h2>
            <Sparkles className="w-6 h-6 text-[#ED0331]" />
          </div>
          <p className="heading-primary font-nunito text-lg md:text-xl mb-2">
            Select one or multiple topics and book your 1:1 mentorship session.
          </p>
          <p className="text-lg md:text-xl font-nunito heading-primary mb-10">
            Our team will assign the best available trainer after your booking.
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

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="bg-white border border-[#ED0331]/20 rounded-2xl p-5 md:p-6 mb-8 text-left shadow-md"
        >
          <p className="text-sm md:text-base font-semibold text-gray-800 mb-3">
            Step 1: Choose topic(s) {"->"} Step 2: Complete registration form
          </p>
          <div className="flex flex-wrap gap-2 mb-4 min-h-[36px]">
            {selectedTopics.length ? (
              selectedTopics.map((topic) => (
                <span
                  key={topic}
                  className="px-3 py-1.5 rounded-full bg-[#ED0331] text-white text-xs md:text-sm"
                >
                  {topic}
                </span>
              ))
            ) : (
              <span className="text-sm text-gray-600">No topics selected yet.</span>
            )}
          </div>
          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => setSelectedTopics([])}
              className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 text-sm font-medium hover:bg-gray-50"
            >
              Clear Selection
            </button>
            <button
              type="button"
              onClick={openBookingFlow}
              className="px-5 py-2 rounded-lg bg-gradient-to-r from-[#ED0331] to-[#87021C] text-white text-sm font-semibold shadow-lg disabled:opacity-60"
              disabled={!selectedTopics.length}
            >
              Continue to Book Session
            </button>
          </div>
          {topicWarning && <p className="text-sm text-[#ED0331] mt-3">{topicWarning}</p>}
        </motion.div>

        {/* Topic Cards */}
        <motion.div
          id="topic-selection-grid"
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
            {filteredTopics.map((item, index) => (
              <motion.div
                key={item.category}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="bg-white shadow-lg rounded-2xl p-6 w-[90%] sm:w-[280px] md:w-[300px] lg:w-[320px] transition-all border-2 border-transparent hover:border-[#ED0331]/30 text-left relative overflow-hidden group"
                whileHover={isMobile ? {} : { y: -10, scale: 1.02 }}
              >
                {/* Decorative Background */}
                <motion.div
                  className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#ED0331]/10 to-[#87021C]/10 rounded-full blur-2xl -z-0 pointer-events-none"
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
                  <div className="flex items-center gap-2 mb-4">
                    <BookOpen className="w-5 h-5 text-[#ED0331]" />
                    <h3 className="text-xl font-playfair font-semibold text-gray-800">
                      {item.category}
                    </h3>
                  </div>
                  <p className="text-sm text-gray-600 mb-4 font-nunito">{item.description}</p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {item.topics.map((topic) => {
                      const checked = selectedTopics.includes(topic);
                      return (
                        <button
                          key={topic}
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleTopic(topic);
                          }}
                          className={`text-xs px-3 py-2 rounded-full border transition-all ${
                            checked
                              ? "bg-[#ED0331] text-white border-[#ED0331]"
                              : "bg-white text-gray-700 border-gray-300 hover:border-[#ED0331]/50"
                          } cursor-pointer`}
                        >
                          {checked ? `✓ ${topic}` : topic}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <motion.button
        type="button"
        onClick={openBookingFlow}
        className="fixed bottom-6 right-6 z-[9998] px-5 py-3 rounded-full bg-gradient-to-r from-[#ED0331] to-[#87021C] text-white font-semibold shadow-2xl flex items-center gap-2"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Book Now
        <ArrowUpRight className="w-4 h-4" />
      </motion.button>

      {openBooking && (
        <MentorSessionForm
          selectedTopics={selectedTopics}
          onClose={() => setOpenBooking(false)}
        />
      )}
    </section>
  );
};

export default MentorSection;
