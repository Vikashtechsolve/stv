// import React from "react";
// import bgImage from "../assets/membershipBG.jpg";
// import videoThumbnail from "../assets/video.jpg";

// const Membership = () => {
//     return (
//         <div className="mt-6">
//             {/* Title */}
//             <h1 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold font-playfair mb-8 sm:mb-10 md:mb-12 lg:mb-16 bg-gradient-to-r from-[#ED0331] to-[#87021C] bg-clip-text text-transparent leading-snug sm:leading-snug md:leading-[1.2] lg:leading-[1.2]">
//                 Power of Mentorship
//             </h1>

//             {/* Desktop/Tablet Version (with background) */}
//             <section
//                 className="relative w-full h-[400px] bg-cover bg-center items-center hidden md:flex"
//                 style={{ backgroundImage: `url(${bgImage})` }}
//             >
//                 {/* Overlay (only for desktop) */}
//                 <div className="absolute inset-0 hidden md:block bg-black/40"></div>

//                 {/* Content */}
//                 <div className="relative w-full max-w-6xl mx-auto flex items-center justify-between px-6">
//                     {/* Left: Video Thumbnail with Play Icon */}
//                     <div className="w-1/2 flex justify-center">
//                         <div className="relative">
//                             <img
//                                 src={videoThumbnail}
//                                 alt="Video Thumbnail"
//                                 className="w-[650px] h-[300px] rounded-xl shadow-xl cursor-pointer object-cover -ml-10"
//                             />
//                             {/* Play Icon */}
//                             <div className="absolute inset-0 flex items-center justify-center">
//                                 <div className="bg-white/80 rounded-full p-4 hover:scale-110 transition-transform cursor-pointer">
//                                     <svg
//                                         xmlns="http://www.w3.org/2000/svg"
//                                         className="h-10 w-10 text-gray-800"
//                                         fill="currentColor"
//                                         viewBox="0 0 24 24"
//                                     >
//                                         <path d="M8 5v14l11-7z" />
//                                     </svg>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Right: Text */}
//                     <div className="w-1/2 text-white space-y-6 px-6 text-center flex flex-col items-center">
//                         <p className="text-lg px-[38px] py-[20px]">
//                             See how our mentors simplify concepts and guide learners step by
//                             step!
//                         </p>
//                         <hr className="border-gray-300/50 w-3/4 mx-auto" />
//                         <p className="text-lg px-[38px] py-[20px]">
//                             Get a glimpse of how our mentors guide students toward success!
//                         </p>
//                     </div>

//                 </div>
//             </section>

//             {/* Mobile Version (without background) */}
//             <section className="w-full flex flex-col items-center justify-center md:hidden py-8 px-4 bg-gray-900">
//                 {/* Video */}
//                 <div className="relative w-full max-w-md">
//                     <img
//                         src={videoThumbnail}
//                         alt="Video Thumbnail"
//                         className="w-full h-[200px] sm:h-[250px] rounded-xl shadow-xl cursor-pointer object-cover"
//                     />
//                     {/* Play Icon */}
//                     <div className="absolute inset-0 flex items-center justify-center">
//                         <div className="bg-white/80 rounded-full p-3 hover:scale-110 transition-transform cursor-pointer">
//                             <svg
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 className="h-8 w-8 text-gray-800"
//                                 fill="currentColor"
//                                 viewBox="0 0 24 24"
//                             >
//                                 <path d="M8 5v14l11-7z" />
//                             </svg>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Text */}
//                 <div className="text-white text-center space-y-4 mt-6">
//                     <p className="text-base sm:text-lg">
//                         See how our mentors simplify concepts and guide learners step by
//                         step!
//                     </p>
//                     <hr className="border-gray-300/50 w-3/4 mx-auto" />
//                     <p className="text-base sm:text-lg">
//                         Get a glimpse of how our mentors guide students toward success!
//                     </p>
//                 </div>
//             </section>

//             {/* Book Button OUTSIDE background */}
//             <div className="flex justify-center mt-10">
//                 <button className="px-6 py-3 bg-gradient-to-r from-[#ED0331] to-[#87021C] text-white rounded-lg shadow hover:opacity-90 transition">
//                     Book a Session
//                 </button>
//             </div>

//         </div>
//     );
// };

// export default Membership;


import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import bgImage from "../assets/membershipBG.jpg";
import videoThumbnail from "../assets/video.jpg";
import { useNavigate } from "react-router-dom";
import { Play, Users, Target, Award } from "lucide-react";

const Membership = () => {
    const navigate = useNavigate();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [isHovered, setIsHovered] = useState(false);

    const handleBookSession = () => {
        navigate("/oneToOneMentoring");
    };

    const benefits = [
        {
            icon: Users,
            text: "See how our mentors simplify concepts and guide learners step by step!",
        },
        {
            icon: Target,
            text: "Get a glimpse of how our mentors guide students toward success!",
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.08,
                delayChildren: 0.05,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.4,
                ease: "easeOut",
            },
        },
    };

    return (
        <motion.div
            ref={ref}
            className="relative py-16 md:py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50 overflow-hidden"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
        >
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    className="absolute top-20 left-10 w-96 h-96 bg-red-200/20 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.2, 1],
                        x: [0, 50, 0],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
                <motion.div
                    className="absolute bottom-20 right-10 w-96 h-96 bg-pink-200/20 rounded-full blur-3xl"
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

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Title */}
                <motion.div
                    className="text-center mb-12 md:mb-16"
                    variants={itemVariants}
                >
                    <motion.h1
                        className="heading-section mb-4"
                        initial={{ opacity: 0, y: -20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                Power of Mentorship
                    </motion.h1>
                    <motion.p
                        className="text-lg md:text-xl text-gray-600 font-nunito max-w-2xl mx-auto"
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                    >
                        Experience personalized guidance that transforms your learning journey
                    </motion.p>
                </motion.div>

                {/* Desktop/Tablet Version */}
                <div className="hidden md:block">
                    <motion.section
                        className="relative rounded-3xl overflow-hidden shadow-2xl"
                style={{ backgroundImage: `url(${bgImage})` }}
                        variants={itemVariants}
            >
                        {/* Enhanced Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70"></div>
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30"></div>

                {/* Content */}
                        <div className="relative max-w-7xl mx-auto px-8 lg:px-12 py-16 flex items-center justify-between gap-12">
                            {/* Left: Video Thumbnail */}
                            <motion.div
                                className="flex-1 max-w-2xl"
                                initial={{ opacity: 0, x: -50 }}
                                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                                transition={{ duration: 0.4, delay: 0.1 }}
                            >
                                <div
                                    className="relative group cursor-pointer"
                                    onMouseEnter={() => setIsHovered(true)}
                                    onMouseLeave={() => setIsHovered(false)}
                                >
                                    <motion.div
                                        className="relative rounded-2xl overflow-hidden shadow-2xl"
                                        whileHover={{ scale: 1.02 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                    >
                                        <img
                                            src={videoThumbnail}
                                            alt="Video Thumbnail"
                                            className="w-full h-[400px] object-cover"
                                        />
                                        {/* Gradient Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                                        
                                        {/* Animated Play Button */}
                                        <motion.div
                                            className="absolute inset-0 flex items-center justify-center"
                                            animate={{
                                                scale: isHovered ? 1.1 : 1,
                                            }}
                                            transition={{ type: "spring", stiffness: 400 }}
                                        >
                                            <motion.div
                                                className="relative"
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                <div className="absolute inset-0 bg-white/30 rounded-full blur-xl"></div>
                                                <div className="relative bg-gradient-to-br from-white/95 to-white/80 rounded-full p-6 shadow-2xl backdrop-blur-sm">
                                                    <Play className="w-12 h-12 text-gray-900 fill-gray-900 ml-1" />
                                                </div>
                                            </motion.div>
                                        </motion.div>

                                        {/* Decorative Border */}
                                        <motion.div
                                            className="absolute inset-0 rounded-2xl border-2 border-white/30"
                                            animate={{
                                                opacity: isHovered ? 0.6 : 0.3,
                                            }}
                                        />
                                    </motion.div>
                                </div>
                            </motion.div>

                            {/* Right: Benefits */}
                            <motion.div
                                className="flex-1 space-y-8"
                                initial={{ opacity: 0, x: 50 }}
                                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                                transition={{ duration: 0.4, delay: 0.15 }}
                            >
                                {benefits.map((benefit, index) => {
                                    const IconComponent = benefit.icon;
                                    return (
                                        <motion.div
                                            key={index}
                                            className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-xl"
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                            transition={{ duration: 0.3, delay: 0.2 + index * 0.08 }}
                                            whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.15)" }}
                                        >
                                            <div className="flex items-start gap-4">
                                                <motion.div
                                                    className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-[#ED0331] to-[#87021C] flex items-center justify-center shadow-lg"
                                                    whileHover={{ rotate: 5, scale: 1.1 }}
                                                    transition={{ type: "spring", stiffness: 400 }}
                                                >
                                                    <IconComponent className="w-7 h-7 text-white" />
                                                </motion.div>
                                                <p className="text-white text-lg md:text-xl font-nunito leading-relaxed pt-2">
                                                    {benefit.text}
                                                </p>
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </motion.div>
                        </div>
                    </motion.section>
                </div>

                {/* Mobile Version */}
                <div className="md:hidden">
                    <motion.div
                        className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-gray-900 to-black"
                        variants={itemVariants}
                    >
                        {/* Video */}
                        <div className="relative">
                            <img
                                src={videoThumbnail}
                                alt="Video Thumbnail"
                                className="w-full h-[250px] object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                            
                            {/* Play Button */}
                            <motion.div
                                className="absolute inset-0 flex items-center justify-center"
                                whileTap={{ scale: 0.95 }}
                            >
                                <div className="bg-white/90 rounded-full p-4 shadow-2xl">
                                    <Play className="w-8 h-8 text-gray-900 fill-gray-900 ml-1" />
                                </div>
                            </motion.div>
                    </div>

                        {/* Benefits */}
                        <div className="p-6 space-y-6">
                            {benefits.map((benefit, index) => {
                                const IconComponent = benefit.icon;
                                return (
                                    <motion.div
                                        key={index}
                                        className="bg-white/10 backdrop-blur-md rounded-xl p-5 border border-white/20"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                        transition={{ duration: 0.3, delay: 0.15 + index * 0.08 }}
                                    >
                                        <div className="flex items-start gap-4">
                                            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#ED0331] to-[#87021C] flex items-center justify-center">
                                                <IconComponent className="w-6 h-6 text-white" />
                                            </div>
                                            <p className="text-white text-base font-nunito leading-relaxed pt-1">
                                                {benefit.text}
                        </p>
                    </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </motion.div>
                </div>

                {/* Book Button */}
                <motion.div
                    className="flex justify-center mt-12 md:mt-16"
                    variants={itemVariants}
                >
                    <motion.button
                onClick={handleBookSession}
                        className="relative px-10 py-5 bg-gradient-to-r from-[#ED0331] to-[#87021C] text-white rounded-2xl shadow-2xl font-nunito font-semibold text-lg md:text-xl overflow-hidden group"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <span className="relative z-10 flex items-center gap-3">
                            <Award className="w-6 h-6" />
                    Book a Session
                        </span>
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-[#87021C] to-[#ED0331]"
                            initial={{ x: "-100%" }}
                            whileHover={{ x: "0%" }}
                            transition={{ duration: 0.3 }}
                        />
                    </motion.button>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Membership;
