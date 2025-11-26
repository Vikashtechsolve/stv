import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import mentroship from '../assets/mentorship.jpg';
import AI from '../assets/Ai.jpg';
import { FiAward, FiUsers, FiTool, FiSun } from "react-icons/fi";

const cards = [
  {
    icon: FiAward,
    title: "1:1 Mentorship",
    subtitle: "Personal guidance from experts",
    description: "Get tailored support on careers, subjects, projects, internships, or switching roles. Build a clear roadmap with mentors who guide you step by step",
    image: mentroship,
    path: "/oneToOneMentoring",
    gradient: "from-red-500 to-pink-600",
    bgColor: "bg-gradient-to-br from-red-50 to-pink-50",
  },
  {
    icon: FiUsers,
    title: "Master Class",
    subtitle: "Learn from Industry Experts",
    description: "Unlock expert-led sessions designed to enhance your skills and knowledge. Our masterclasses provide in-depth learning experiences guided by industry professionals to help you grow and excel in your career",
    path: "/masterClass",
    gradient: "from-purple-500 to-indigo-600",
    bgColor: "bg-gradient-to-br from-purple-50 to-indigo-50",
  },
  {
    icon: FiTool,
    title: "Resume Review",
    subtitle: "Human + AI feedback",
    description: "Upload your resume and get detailed, actionable suggestions to make it job-ready. Receive an improved version, ATS score, and a clear career roadmap",
    image: AI,
    path: "/resume-review",
    gradient: "from-blue-500 to-cyan-600",
    bgColor: "bg-gradient-to-br from-blue-50 to-cyan-50",
  },
  {
    icon: FiSun,
    title: "Live Doubt Solving",
    subtitle: "Instant Help, Anytime",
    description: "Stuck on a problem? Connect with the right mentor for quick solutions in math, coding, science, or projects. Solve doubts fast and reinforce concepts with practice tasks",
    path: "/doubt-solving",
    gradient: "from-orange-500 to-yellow-600",
    bgColor: "bg-gradient-to-br from-orange-50 to-yellow-50",
  },
];

const WhatWeOffer = () => {
    const navigate = useNavigate();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [hoveredCard, setHoveredCard] = useState(null);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1,
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
                duration: 0.6,
                ease: "easeOut",
            },
        },
    };

    const iconVariants = {
        rest: { scale: 1, rotate: 0 },
        hover: { scale: 1.2, rotate: 10 },
    };

    const handleLearnMore = (path) => {
        navigate(path);
    };

    return (
        <motion.div
            ref={ref}
            // CHANGED: Reduced py-16... to py-8 md:py-12 to remove extra top spacing
            className="py-8 md:py-12 px-4 md:px-6 bg-gray-50 relative overflow-hidden"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
        >
            {/* Background Decorative Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    className="absolute top-20 left-10 w-72 h-72 bg-red-200/20 rounded-full blur-3xl"
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
                    className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl"
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

            {/* Heading */}
            <motion.div
                className="text-center mb-12 md:mb-16 relative z-10"
                variants={cardVariants}
            >
                <motion.h1
                    className="heading-section mb-4"
                    initial={{ opacity: 0, y: -20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                    transition={{ duration: 0.6 }}
                >
                    What We Offer
                </motion.h1>
                <motion.p
                    className="text-lg md:text-xl text-gray-600 font-nunito max-w-2xl mx-auto"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    Discover our comprehensive range of services designed to accelerate your career growth
                </motion.p>
            </motion.div>

            {/* Cards Grid */}
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {cards.map((card, index) => {
                        const IconComponent = card.icon;
                        const isHovered = hoveredCard === index;

                        return (
                            <motion.div
                                key={index}
                                className="group relative"
                                variants={cardVariants}
                                onMouseEnter={() => setHoveredCard(index)}
                                onMouseLeave={() => setHoveredCard(null)}
                            >
                                <motion.div
                                    className={`relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 h-full flex flex-col ${isHovered ? 'ring-4 ring-red-200' : ''}`}
                                    whileHover={{ y: -10, scale: 1.02 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    {/* Card Header with Gradient Background */}
                                    <div className={`relative h-48 ${card.bgColor} overflow-hidden`}>
                                        {/* Animated Background Pattern */}
                                        <motion.div
                                            className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                                            animate={isHovered ? { opacity: 0.1 } : { opacity: 0 }}
                                        />
                                        
                                        {/* Icon Container */}
                                        <div className="relative h-full flex items-center justify-center p-6">
                                            <motion.div
                                                className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${card.gradient} flex items-center justify-center shadow-lg`}
                                                variants={iconVariants}
                                                initial="rest"
                                                animate={isHovered ? "hover" : "rest"}
                                                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                            >
                                                <IconComponent className="w-10 h-10 text-white" />
                                            </motion.div>
                                        </div>

                                        {/* Decorative Corner */}
                                        <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-bl-full" />
                                    </div>

                                    {/* Card Content */}
                                    <div className="p-6 flex-1 flex flex-col">
                                        <div className="flex-1">
                                            <h2 className="text-xl font-bold font-playfair text-gray-900 mb-2">
                                                {card.title}
                                            </h2>
                                            <p className="text-sm text-red-600 font-nunito font-semibold mb-3">
                                                {card.subtitle}
                                            </p>
                                            <p className="text-sm text-gray-600 font-nunito leading-relaxed line-clamp-4">
                                                {card.description}
                                            </p>
                                        </div>

                                        {/* Learn More Button */}
                                        <motion.button
                                            onClick={() => handleLearnMore(card.path)}
                                            className={`mt-6 w-full bg-gradient-to-r ${card.gradient} text-white py-3 px-6 rounded-xl font-semibold font-nunito shadow-md hover:shadow-lg transition-all duration-300 relative overflow-hidden group`}
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            <span className="relative z-10 flex cursor-pointer items-center justify-center gap-2">
                                                Learn More
                                                <motion.svg
                                                    className="w-4 h-4"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                    initial={{ x: 0 }}
                                                    animate={{ x: isHovered ? 5 : 0 }}
                                                    transition={{ duration: 0.3 }}
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                </motion.svg>
                                            </span>
                                            <motion.div
                                                className="absolute inset-0 bg-white/20"
                                                initial={{ x: "-100%" }}
                                                whileHover={{ x: "100%" }}
                                                transition={{ duration: 0.6 }}
                                            />
                                        </motion.button>
                                    </div>

                                    {/* Hover Effect Border */}
                                    <motion.div
                                        className={`absolute inset-0 rounded-2xl border-2 bg-gradient-to-r ${card.gradient} opacity-0 pointer-events-none`}
                                        animate={{
                                            opacity: isHovered ? 0.3 : 0,
                                        }}
                                        transition={{ duration: 0.3 }}
                                    />
                                </motion.div>

                                {/* Floating Image (if exists) */}
                                {card.image && (
                                    <motion.div
                                        className="absolute -top-6 -right-6 w-32 h-32 rounded-xl overflow-hidden shadow-2xl hidden lg:block z-20"
                                        initial={{ opacity: 0, scale: 0, rotate: -10 }}
                                        animate={isHovered ? { opacity: 1, scale: 1, rotate: 5 } : { opacity: 0.8, scale: 0.9, rotate: -5 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                    >
                                        <img
                                            src={card.image}
                                            alt={card.title}
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                                    </motion.div>
                                )}
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </motion.div>
    );
};

export default WhatWeOffer;