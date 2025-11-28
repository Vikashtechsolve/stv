import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Sparkles, Award } from 'lucide-react';

const TeamMember = ({ name, role, description, imagePlaceholder, index, isInView }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <motion.div
      className="group relative flex flex-col bg-white rounded-3xl shadow-lg hover:shadow-2xl overflow-hidden transform transition-all duration-500 border-2 border-transparent hover:border-[#ED0331]/30 max-w-sm mx-auto w-full"
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -12, scale: 1.03 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Shine Effect on Hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 z-20 pointer-events-none"
      />

      {/* Gradient Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#ED0331]/5 via-pink-50/30 to-blue-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
      
      {/* Image Section */}
      <div className="relative h-72 w-full overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
        <motion.img
          src={imagePlaceholder}
          alt={name}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.15 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = `https://ui-avatars.com/api/?name=${name}&background=ED0331&color=fff&size=400`;
          }}
        />
        
        {/* Multi-layer Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#ED0331]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Decorative Corner Element */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#ED0331]/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Role Badge - Enhanced */}
        <motion.div
          className="absolute bottom-4 left-4 right-4 z-10"
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ delay: index * 0.1 + 0.3 }}
        >
          <div className="bg-white/95 backdrop-blur-md rounded-xl px-4 py-2.5 shadow-xl border border-[#ED0331]/20">
            <p className="text-xs font-nunito font-bold text-[#ED0331] text-center tracking-wide uppercase">
              {role}
            </p>
          </div>
        </motion.div>

        {/* Floating Award Icon */}
        <motion.div
          className="absolute top-4 right-4 w-10 h-10 bg-gradient-to-br from-[#ED0331] to-[#87021C] rounded-full flex items-center justify-center shadow-xl z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          whileHover={{ rotate: 360, scale: 1.1 }}
          transition={{ duration: 0.6 }}
        >
          <Award className="w-5 h-5 text-white" />
        </motion.div>
      </div>

      {/* Content Section */}
      <div className="relative z-10 p-6 sm:p-7 flex-grow flex flex-col bg-white">
        {/* Name */}
        <motion.h3
          className="text-2xl font-bold font-playfair text-gray-900 mb-3 text-center group-hover:text-[#ED0331] transition-colors duration-300"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: index * 0.1 + 0.4 }}
        >
          {name}
        </motion.h3>
        
        {/* Description */}
        <motion.p
          className="text-gray-600 text-sm sm:text-base leading-relaxed text-center flex-grow font-nunito"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: index * 0.1 + 0.5 }}
        >
          {description}
        </motion.p>
      </div>

      {/* Animated Border Effect */}
      <motion.div
        className="absolute inset-0 rounded-3xl border-2 border-[#ED0331] opacity-0 pointer-events-none"
        animate={{
          opacity: isHovered ? 0.4 : 0,
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Corner Accent */}
      <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-[#ED0331]/10 to-transparent rounded-br-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </motion.div>
  );
};

export default function OurTeam() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const team = [
    {
      name: "VIKAS DUBEY",
      role: "FOUNDER & TECH MENTOR",
      description: "Vikash Dubey is the visionary behind Vikas Tech Solutions, dedicated to transforming the way students and professionals learn. With deep expertise in full-stack development and product architecture.",
      imagePlaceholder: "https://res.cloudinary.com/dc4gqqd35/image/upload/v1760116012/WhatsApp_Image_2025-10-10_at_21.00.46_s5xkzu.jpg"
    },
    {
      name: "AMIT VAGHAMSHI",
      role: "Software Developer / Tech Mentor",
      description: "A passionate tech mentor with deep expertise in software development and coding fundamentals. He guides learners through hands-on projects, real-world problem-solving, and industry-relevant practices to help them grow into confident developers.",
      imagePlaceholder: "https://res.cloudinary.com/dc4gqqd35/image/upload/v1760116272/IMG_20231210_134514_zyphpu.jpg"
    },
    {
      name: "SWATI SHARMA",
      role: "Program Manager",
      description: "A results-driven Program Manager skilled in leading cross-functional teams and ensuring seamless project execution from start to finish. Known for aligning business goals with technology to drive measurable impact and growth.",
      imagePlaceholder: "https://res.cloudinary.com/dc4gqqd35/image/upload/v1759842668/swatee_ulkfwf.jpg"
    },
    {
      name: "Jiya Kapoor",
      role: "UI/UX Developer",
      description: "A passionate UI/UX Developer dedicated to crafting intuitive, user-centered digital experiences. Skilled in transforming complex ideas into visually stunning and easy-to-use interfaces.",
      imagePlaceholder: "https://res.cloudinary.com/dc4gqqd35/image/upload/v1760115261/1000022510_oetw7k.jpg"
    },
    {
      name: "Mustakim Shaikh",
      role: "Senior Software Developer",
      description: "A Senior Software Developer with strong expertise in designing scalable and efficient systems. Skilled in writing high-quality code. Passionate about adopting best practices and driving innovation in software development.",
      imagePlaceholder: "https://res.cloudinary.com/dc4gqqd35/image/upload/v1760116792/IMG_8245_vkhaxe.jpg"
    },
    {
      name: "VIKRAM DESAI",
      role: "TECH MENTOR",
      description: "Provides mentorship on coding best practices, debugging techniques, and industry-ready skills, supporting students in preparing for competitive coding, interviews, and advanced projects.",
      imagePlaceholder: "https://res.cloudinary.com/dc4gqqd35/image/upload/v1759832524/Venkatesh__ihttlr.jpg"
    }
  ];

  return (
    <motion.div
      ref={ref}
      className="relative min-h-screen py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-white to-gray-50 overflow-hidden"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {/* Enhanced Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-10 w-96 h-96 bg-red-200/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -50, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, 50, 0],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-200/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16 md:mb-20"
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.6 }}
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 bg-gradient-to-r from-red-50 to-pink-50 border-2 border-red-200 rounded-full px-4 py-2 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
          >
            <Sparkles className="w-4 h-4 text-[#ED0331]" />
            <span className="text-sm font-semibold text-[#ED0331] font-nunito">Meet Our Experts</span>
            <Sparkles className="w-4 h-4 text-[#ED0331]" />
          </motion.div>

          <div className="inline-flex items-center gap-3 mb-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Sparkles className="w-8 h-8 sm:w-10 sm:h-10 text-[#ED0331]" />
            </motion.div>
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold font-playfair heading-primary"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Our Team
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Sparkles className="w-8 h-8 sm:w-10 sm:h-10 text-[#ED0331]" />
            </motion.div>
          </div>
          
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-[#ED0331] to-[#87021C] mx-auto rounded-full mb-6"
            initial={{ width: 0 }}
            animate={isInView ? { width: 96 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
          
          <motion.p
            className="text-base sm:text-lg md:text-xl font-nunito text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            A team of passionate professionals dedicated to your growth and success. 
            <span className="block mt-2 text-[#ED0331] font-semibold">
              Experts who transform careers, one session at a time.
            </span>
          </motion.p>
        </motion.div>

        {/* Enhanced Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 max-w-6xl mx-auto">
          {team.map((member, index) => (
            <TeamMember key={index} {...member} index={index} isInView={isInView} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}