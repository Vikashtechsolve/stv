import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code, Sigma, Key, Brain, Hash, Database, ArrowRight, Sparkles } from 'lucide-react';

// Map icon names (strings) to actual Lucide React components
const IconMap = {
  Code,
  Sigma,
  Key,
  Brain,
  Hash,
  Database,
};

// Data structure for the subject cards
const subjects = [
  { 
    icon: 'Code', 
    title: 'Web Development', 
    description: "Master your frontend and backend doubts with ease! Whether it's HTML, CSS, JavaScript, or React, our mentors guide you step-by-step through real examples and practical explanations to help you build confidently.", 
    gradient: 'from-indigo-500 to-blue-600',
    bgGradient: 'from-indigo-50 to-blue-50',
  },
  { 
    icon: 'Sigma', 
    title: 'Science & Maths', 
    description: "From formulas to complex numerical problems — get your concepts clarified instantly. Our mentors simplify each topic using visual methods and live examples, helping you truly understand rather than memorize.", 
    gradient: 'from-orange-500 to-red-600',
    bgGradient: 'from-orange-50 to-red-50',
  },
  { 
    icon: 'Key', 
    title: 'DSA (Data Structures & Algorithms)', 
    description: "Struggling with recursion, trees, or sorting? Learn logic building and step-by-step problem-solving strategies live with expert mentors to boost your confidence for interviews and exams.", 
    gradient: 'from-[#ED0331] to-[#87021C]',
    bgGradient: 'from-red-50 to-pink-50',
  },
  { 
    icon: 'Brain', 
    title: 'AI & Data Science', 
    description: "Confused about machine learning, datasets, or AI models? Learn core AI & ML concepts in real-time — from algorithm logic to real-world applications — directly from experienced professionals.", 
    gradient: 'from-blue-500 to-cyan-600',
    bgGradient: 'from-blue-50 to-cyan-50',
  },
  { 
    icon: 'Hash', 
    title: 'Programming Languages', 
    description: "Get one-on-one coding help for Java, Python, C++, or JavaScript. Learn how to debug, write efficient code, and understand every concept clearly under expert guidance.", 
    gradient: 'from-purple-500 to-pink-600',
    bgGradient: 'from-purple-50 to-pink-50',
  },
  { 
    icon: 'Database', 
    title: 'CS Fundamentals', 
    description: "Build a strong base in Operating Systems, DBMS, and Computer Networks. Get real-world insights and conceptual clarity from industry mentors to strengthen your core CS knowledge.", 
    gradient: 'from-emerald-500 to-teal-600',
    bgGradient: 'from-emerald-50 to-teal-50',
  },
];

/**
 * A reusable card component for displaying subject details.
 */
const SubjectCard = ({ subject, index, isInView }) => {
  const IconComponent = IconMap[subject.icon];

  return (
    <motion.div
      className="group relative flex flex-col p-8 h-full bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200/50 overflow-hidden"
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.02 }}
    >
      {/* Gradient Background Overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br ${subject.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
      
      {/* Decorative Corner */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/10 to-transparent rounded-bl-full"></div>

      <div className="relative z-10 flex flex-col items-center h-full">
        {/* Icon Container */}
        <motion.div
          className={`p-4 mb-6 rounded-2xl bg-gradient-to-br ${subject.gradient} shadow-xl`}
          whileHover={{ rotate: 5, scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {IconComponent && <IconComponent size={32} className="text-white" />}
        </motion.div>
        
        {/* Title */}
        <h3 className="font-playfair text-xl md:text-2xl font-semibold text-gray-900 leading-tight mb-4 text-center">
          {subject.title}
        </h3>
        
        {/* Description */}
        <p className="text-gray-600 font-nunito mb-6 flex-grow text-center leading-relaxed text-base">
          {subject.description}
        </p>
      </div>

      {/* Hover Border Effect */}
      <motion.div
        className={`absolute inset-0 rounded-2xl border-2 bg-gradient-to-r ${subject.gradient} opacity-0 pointer-events-none`}
        whileHover={{
          opacity: 0.2,
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

/**
 * Main application component to display the entire guidance section.
 */
const SubjectDetails = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      className="relative bg-gradient-to-br from-gray-50 via-white to-gray-50 py-16 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
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
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <Sparkles className="w-8 h-8 text-[#ED0331]" />
            <motion.h1
              className="heading-section"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Master Every Subject with Expert Guidance
            </motion.h1>
            <Sparkles className="w-8 h-8 text-[#ED0331]" />
          </div>
          <motion.p
            className="text-xl md:text-2xl font-nunito text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Web development, DSA, data science, or core subjects — we've got mentors ready to{' '}
            <span className="font-semibold text-[#ED0331]">solve your toughest doubts.</span>
          </motion.p>
        </motion.div>

        {/* Cards Grid Section */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {subjects.map((subject, index) => (
            <SubjectCard key={index} subject={subject} index={index} isInView={isInView} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default SubjectDetails;
