import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Award, CheckCircle2, Star, Quote, Building2, Users, TrendingUp } from "lucide-react";

const experts = [
  {
    name: "Priya Sharma",
    title: "HR Specialist | Ex-TCS | Resume Coach",
    image:
      "https://res.cloudinary.com/dc4gqqd35/image/upload/v1760115261/1000022510_oetw7k.jpg",
    description:
      "Reviewed 800+ resumes and helped 150+ graduates get shortlisted at top MNCs.",
    quote:
      "I specialize in transforming basic resumes into job-winning career stories.",
    stats: "800+ Reviews",
    badge: "Top Rated",
  },
  {
    name: "Vijay Kapoor",
    title: "Product Designer | Swiggy | Portfolio & Resume Mentor",
    image:
      "https://res.cloudinary.com/dc4gqqd35/image/upload/v1759840447/Amol_ykm4vw.jpg",
    description:
      "Helped 100+ aspiring designers refine their portfolios and resumes for creative roles.",
    quote:
      "Your design portfolio and resume should speak your personality — not just projects.",
    stats: "100+ Helped",
    badge: "Design Expert",
  },
  {
    name: "Arjun Mehta",
    title: "Software Engineer | Google | Resume Expert",
    image:
      "https://res.cloudinary.com/dc4gqqd35/image/upload/v1759840361/Vivek_m6sgzw.jpg",
    description:
      "Mentored 500+ students and guided them to land internships at startups & FAANG companies.",
    quote: "A great resume doesn't just list skills — it tells your growth journey.",
    stats: "500+ Mentored",
    badge: "FAANG Expert",
  },
  {
    name: "Jaimin Sharma",
    title: "HR Specialist | Ex-TCS | Resume Coach",
    image:
      "https://res.cloudinary.com/dc4gqqd35/image/upload/v1759832518/Masood_Raza_ew6k7a.png",
    description:
      "Reviewed 800+ resumes and helped 150+ graduates get shortlisted at top MNCs.",
    quote:
      "I specialize in transforming basic resumes into job-winning career stories.",
    stats: "800+ Reviews",
    badge: "Top Rated",
  },
  {
    name: "Kishor Jain",
    title: "Talent Acquisition Lead | Accenture | Resume Strategist",
    image:
      "https://res.cloudinary.com/dc4gqqd35/image/upload/v1759841721/Kishor_rdehwa.jpg",
    description:
      "Assisted 200+ candidates in achieving their dream job placements with industry-optimized resumes.",
    quote:
      "I help candidates align their resumes with the language recruiters actually search for.",
    stats: "200+ Assisted",
    badge: "Recruiter Insight",
  },
  {
    name: "Ashish Gupta",
    title: "Senior Data Analyst | Deloitte | Career Coach",
    image:
      "https://res.cloudinary.com/dc4gqqd35/image/upload/v1759832493/Ashish_ae2fxk.jpg",
    description:
      "Reviewed 600+ resumes focused on data & analytics roles and improved their ATS visibility.",
    quote: "Numbers matter in analytics — and in your resume too. Let's make them count.",
    stats: "600+ Reviews",
    badge: "Data Expert",
  },
];

const ResumeExperts = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05,
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
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="bg-gray-50 py-16 md:py-20 px-4 md:px-6 lg:px-12 relative overflow-hidden">
      {/* Enhanced Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-[#ED0331]/10 to-[#87021C]/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-br from-purple-200/15 to-blue-200/15 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [0, -90, 0],
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
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <Sparkles className="w-8 h-8 text-[#ED0331]" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-playfair heading-primary">
              Meet Our Resume Experts
            </h2>
            <Sparkles className="w-8 h-8 text-[#ED0331]" />
          </div>
          <motion.div
            className="w-32 md:w-40 h-2 bg-gradient-to-r from-[#ED0331] to-[#87021C] mx-auto rounded-full mb-6"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          />
          <p className="text-lg sm:text-xl md:text-2xl text-gray-700 font-nunito font-semibold max-w-3xl mx-auto leading-relaxed">
            Our industry professionals have reviewed thousands of resumes and guided students to their dream jobs — now it's your turn!
          </p>
          
          {/* Stats Bar */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-6 mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            {[
              { icon: Users, text: "3000+ Resumes Reviewed", color: "text-blue-600" },
              { icon: Award, text: "500+ Success Stories", color: "text-[#ED0331]" },
              { icon: TrendingUp, text: "95% Success Rate", color: "text-green-600" },
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  <Icon className={`w-5 h-5 ${stat.color}`} />
                  <span className="font-nunito font-semibold text-gray-700">{stat.text}</span>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Enhanced Expert Cards Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {experts.map((expert, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl overflow-hidden border-2 border-transparent hover:border-[#ED0331]/40 transition-all duration-300"
              whileHover={{ y: -12, scale: 1.02 }}
            >
              {/* Badge */}
              <motion.div
                className="absolute top-4 right-4 z-20 bg-gradient-to-r from-[#ED0331] to-[#87021C] text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg flex items-center gap-1"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.2 }}
              >
                <Star className="w-3 h-3 fill-white" />
                {expert.badge}
              </motion.div>

              {/* Image Section with Overlay */}
              <div className="relative h-72 overflow-hidden">
                <motion.img
                  src={expert.image}
                  alt={expert.name}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                />
                {/* Enhanced Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                
                {/* Stats Badge on Image */}
                <motion.div
                  className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-bold text-gray-800 flex items-center gap-1"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  <TrendingUp className="w-3 h-3 text-[#ED0331]" />
                  {expert.stats}
                </motion.div>
              </div>

              {/* Content Section */}
              <div className="p-6 flex flex-col items-center text-center relative">
                {/* Quote Icon */}
                <motion.div
                  className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-[#ED0331] to-[#87021C] rounded-full flex items-center justify-center shadow-xl"
                  initial={{ opacity: 0, scale: 0, rotate: -180 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.2, type: "spring", stiffness: 200 }}
                >
                  <Quote className="w-6 h-6 text-white" />
                </motion.div>

                <div className="mt-4 w-full">
                  <h3 className="text-xl md:text-2xl font-bold font-playfair heading-primary mb-2">
                    {expert.name}
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 font-nunito mb-4 font-semibold">
                    {expert.title}
                  </p>
                  <p className="text-sm text-gray-600 font-nunito mb-4 leading-relaxed">
                    {expert.description}
                  </p>
                  
                  {/* Quote Section */}
                  <div className="w-full border-t-2 border-gray-100 pt-4 mt-4">
                    <div className="flex items-start gap-2">
                      <Quote className="w-5 h-5 text-[#ED0331] mt-1 flex-shrink-0" />
                      <p className="italic text-gray-700 text-sm font-nunito leading-relaxed text-left">
                        "{expert.quote}"
                      </p>
                    </div>
                  </div>

                  {/* Rating Stars */}
                  <div className="flex justify-center gap-1 mt-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-yellow-500 fill-yellow-500"
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <motion.div
                className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#ED0331]/0 to-[#87021C]/0 group-hover:from-[#ED0331]/5 group-hover:to-[#87021C]/10 transition-all duration-300 pointer-events-none"
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
              />

              {/* Shine Effect on Hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ResumeExperts;
