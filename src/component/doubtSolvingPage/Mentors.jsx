import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star, Sparkles, Award, Briefcase, TrendingUp, CheckCircle2, MessageSquare, Zap, Users } from "lucide-react";

const MENTORS = [
  {
    name: "Shreya Patel",
    title: "Full Stack Developer",
    company: "Microsoft",
    rating: 5,
    expertise: "MERN Stack, REST APIs",
    experience: "7+ years",
    students: "500+",
    imageUrl: "https://res.cloudinary.com/dc4gqqd35/image/upload/v1759841930/Abhishek_mgavg9.jpg",
    altText: "Shreya Patel",
  },
  {
    name: "Kavya Sharma",
    title: "SDE II",
    company: "Adobe",
    rating: 5,
    expertise: "C++, Java, System Design",
    experience: "6+ years",
    students: "400+",
    imageUrl: "https://res.cloudinary.com/dc4gqqd35/image/upload/v1759841574/Mayur_zez5fr.jpg",
    altText: "Kavya Sharma",
  },
  {
    name: "Arjun Mehta",
    title: "Frontend Dev (React, JS)",
    company: null,
    rating: 5,
    expertise: "React, JavaScript",
    experience: "5+ years",
    students: "350+",
    imageUrl: "https://res.cloudinary.com/dc4gqqd35/image/upload/v1759831230/Abhinav_kilenc.jpg",
    altText: "Arjun Mehta",
  },
  {
    name: "Meera Jain",
    title: "Frontend Dev (React, JS)",
    company: null,
    rating: 5,
    expertise: "React, JavaScript",
    experience: "7+ years",
    students: "450+",
    imageUrl: "https://res.cloudinary.com/dc4gqqd35/image/upload/v1759832519/pavan_ooikbo.jpg",
    altText: "Meera Jain",
  },
  {
    name: "Ravi Gupta",
    title: "SDE II",
    company: "Adobe",
    rating: 5,
    expertise: "C++, Java, System Design",
    experience: "6+ years",
    students: "380+",
    imageUrl: "https://res.cloudinary.com/dc4gqqd35/image/upload/v1759832493/Ashish_ae2fxk.jpg",
    altText: "Ravi Gupta",
  },
  {
    name: "Harshita Jian",
    title: "Full Stack Developer",
    company: "Microsoft",
    rating: 5,
    expertise: "MERN Stack, REST APIs",
    experience: "5+ years",
    students: "300+",
    imageUrl: "https://res.cloudinary.com/dc4gqqd35/image/upload/v1759841574/Mayur_zez5fr.jpg",
    altText: "Harshita Jian",
  },
  {
    name: "Aditya Roy",
    title: "Frontend Dev (React, JS)",
    company: null,
    rating: 5,
    expertise: "React, JavaScript",
    experience: "7+ years",
    students: "420+",
    imageUrl: "https://res.cloudinary.com/dc4gqqd35/image/upload/v1759832518/Masood_Raza_ew6k7a.png",
    altText: "Aditya Roy",
  },
  {
    name: "Priya Singh",
    title: "Full Stack Developer",
    company: "Google",
    rating: 5,
    expertise: "MERN Stack, REST APIs",
    experience: "8+ years",
    students: "550+",
    imageUrl: "https://res.cloudinary.com/dc4gqqd35/image/upload/v1759841930/Abhishek_mgavg9.jpg",
    altText: "Priya Singh",
  },
];

const StarRating = ({ rating }) => {
  return (
    <div className="flex justify-center gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={12}
          className={i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
        />
      ))}
    </div>
  );
};

const MentorCard = ({ mentor, index, isInView }) => {
  return (
    <motion.div
      className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-transparent hover:border-red-300"
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -10, scale: 1.03 }}
    >
      {/* Image Section */}
      <div className="relative h-56 md:h-64 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
        <motion.img
          src={mentor.imageUrl}
          alt={mentor.altText}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = `https://placehold.co/400x400/D1D5DB/111827?text=${mentor.name
              .split(" ")
              .map((n) => n[0])
              .join("")}`;
          }}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

        {/* Rating Badge */}
        <motion.div
          className="absolute top-2 right-2 bg-white/95 backdrop-blur-sm rounded-full px-2.5 py-1 flex items-center gap-1 shadow-lg"
          whileHover={{ scale: 1.1 }}
        >
          <Star size={12} className="text-yellow-400 fill-yellow-400" />
          <span className="text-xs font-bold text-gray-900">{mentor.rating}</span>
        </motion.div>

        {/* Company Badge */}
        {mentor.company && (
          <motion.div
            className="absolute top-2 left-2 bg-red-600/90 backdrop-blur-sm rounded-lg px-2.5 py-1 shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-xs font-semibold text-white">{mentor.company}</span>
          </motion.div>
        )}

        {/* Students Count Badge */}
        <motion.div
          className="absolute bottom-2 left-2 bg-white/90 backdrop-blur-sm rounded-lg px-2.5 py-1 shadow-lg"
          whileHover={{ scale: 1.05 }}
        >
          <div className="flex items-center gap-1">
            <Users className="w-3 h-3 text-red-600" />
            <span className="text-xs font-semibold text-gray-900">{mentor.students}</span>
          </div>
        </motion.div>
      </div>

      {/* Content Section */}
      <div className="p-4 md:p-5 flex flex-col items-center text-center">
        {/* Name */}
        <h3 className="text-lg md:text-xl font-bold font-playfair heading-primary mb-1">
          {mentor.name}
        </h3>

        {/* Title with Company */}
        <div className="flex items-center justify-center gap-1.5 mb-2">
          <Briefcase className="w-3.5 h-3.5 text-gray-500" />
          <p className="text-xs md:text-sm font-nunito text-gray-700">
            {mentor.title}
            {mentor.company && (
              <span className="font-semibold text-red-600"> @ {mentor.company}</span>
            )}
          </p>
        </div>

        {/* Star Rating */}
        <div className="mb-2">
          <StarRating rating={mentor.rating} />
        </div>

        {/* Expertise & Experience - Compact */}
        <div className="w-full mt-2 border-t border-gray-200 pt-3 space-y-1.5">
          <div className="flex items-center justify-center gap-1.5">
            <Award className="w-3.5 h-3.5 text-red-600 flex-shrink-0" />
            <p className="text-xs font-nunito text-gray-700">
              <span className="font-semibold">Expertise:</span>{" "}
              <span className="text-red-600">{mentor.expertise}</span>
            </p>
          </div>
          <div className="flex items-center justify-center gap-1.5">
            <TrendingUp className="w-3.5 h-3.5 text-red-600 flex-shrink-0" />
            <p className="text-xs font-nunito text-gray-700">
              <span className="font-semibold">Experience:</span>{" "}
              <span className="text-red-600">{mentor.experience}</span>
            </p>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="w-full mt-3 pt-3 border-t border-gray-100 grid grid-cols-2 gap-2">
          <div className="flex items-center justify-center gap-1">
            <CheckCircle2 className="w-3 h-3 text-green-600" />
            <span className="text-xs text-gray-600 font-nunito">Verified</span>
          </div>
          <div className="flex items-center justify-center gap-1">
            <MessageSquare className="w-3 h-3 text-blue-600" />
            <span className="text-xs text-gray-600 font-nunito">Available</span>
          </div>
        </div>
      </div>

      {/* Hover Glow Effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-red-500/0 to-red-500/0 group-hover:from-red-500/5 group-hover:to-red-500/10 transition-all duration-300 pointer-events-none" />
      
      {/* Shine Effect on Hover */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
      </div>
    </motion.div>
  );
};

const Mentors = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <motion.section
      ref={ref}
      className="relative bg-gray-50 py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-12 overflow-hidden"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 bg-red-200/20 rounded-full blur-3xl"
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
        <motion.div
          className="absolute bottom-20 right-10 w-64 h-64 bg-purple-200/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <motion.div
          className="text-center mb-8 md:mb-10"
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 mb-3">
            <Sparkles className="w-6 h-6 text-[#ED0331]" />
            <h1 className="heading-section">
              Meet Our Mentors
            </h1>
            <Sparkles className="w-6 h-6 text-[#ED0331]" />
          </div>
          <p className="text-sm sm:text-base md:text-lg text-gray-900 font-nunito font-medium max-w-3xl mx-auto">
            Guiding You Every Step of the Way —{" "}
            <span className="heading-primary">Learn from the Best Minds in the Industry.</span>
          </p>
        </motion.div>

        {/* Mentors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {MENTORS.map((mentor, index) => (
            <MentorCard key={index} mentor={mentor} index={index} isInView={isInView} />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Mentors;
