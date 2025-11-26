import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import masterImg from '../assets/masterclass.jpg';
import { useNavigate } from "react-router-dom";
import { FiClock, FiUsers, FiAward, FiArrowRight, FiCheck, FiStar } from "react-icons/fi";

const MasterClass = () => {
    const navigate = useNavigate();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const benefits = [
        { icon: FiCheck, text: "Expert-led live sessions" },
        { icon: FiCheck, text: "Interactive Q&A sessions" },
        { icon: FiCheck, text: "Hands-on practice exercises" },
        { icon: FiCheck, text: "Certificate of completion" },
        { icon: FiCheck, text: "Lifetime access to recordings" },
        { icon: FiCheck, text: "Community support" },
    ];

    const stats = [
        { number: "50+", label: "Masterclasses" },
        { number: "5K+", label: "Students" },
        { number: "4.8", label: "Rating", icon: FiStar },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut",
            },
        },
    };

    return (
        <motion.div
            ref={ref}
            className="w-full py-12 md:py-16 lg:py-20 px-4 md:px-6 bg-gray-50 relative overflow-hidden"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
        >
            {/* Background Decorative Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    className="absolute top-20 left-10 w-64 h-64 bg-red-200/20 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.3, 0.5, 0.3],
                        x: [0, 30, 0],
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
                <motion.div
                    className="absolute bottom-20 right-10 w-80 h-80 bg-red-300/15 rounded-full blur-3xl"
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.3, 0.5, 0.3],
                        x: [0, -30, 0],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header Section */}
                <motion.div
                    className="text-center mb-10 md:mb-12"
                    variants={itemVariants}
                >
                    <motion.h1
                        className="heading-section mb-4 md:mb-6"
                        initial={{ opacity: 0, y: -20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                        transition={{ duration: 0.6 }}
                    >
                        Master Class – Learn a Topic in Just 2 Hour!
                    </motion.h1>
                    <motion.p
                        className="text-lg sm:text-xl md:text-2xl text-gray-900 mb-4 font-nunito font-medium"
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Quick, affordable, and interactive classes starting at{" "}
                        <span className="text-red-600 font-bold text-2xl md:text-3xl">
                            just ₹49
                        </span>
                    </motion.p>
                </motion.div>

                {/* Main Content Grid - Split Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-10 md:mb-12">
                    {/* Left Side - Image with Stats */}
                    <motion.div
                        className="relative"
                        variants={itemVariants}
                    >
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl group h-full min-h-[400px] md:min-h-[500px]">
                            {/* Master Class Image */}
                            <motion.img
                                src={masterImg}
                                alt="Master Class"
                                className="w-full h-full object-cover"
                                initial={{ scale: 1.1, opacity: 0 }}
                                animate={isInView ? { scale: 1, opacity: 1 } : { scale: 1.1, opacity: 0 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                                whileHover={{ scale: 1.05 }}
                            />
                            
                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                            
                            {/* Stats Cards Overlay */}
                            <div className="absolute bottom-6 left-6 right-6">
                                <div className="grid grid-cols-3 gap-3">
                                    {stats.map((stat, idx) => {
                                        const IconComponent = stat.icon;
                                        return (
                                            <motion.div
                                                key={idx}
                                                className="bg-white/95 backdrop-blur-sm rounded-xl p-3 md:p-4 text-center shadow-lg"
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                                transition={{ duration: 0.5, delay: 0.5 + idx * 0.1 }}
                                                whileHover={{ scale: 1.05 }}
                                            >
                                                <div className="flex items-center justify-center gap-1 mb-1">
                                                    {IconComponent && (
                                                        <IconComponent className="w-4 h-4 text-red-600" />
                                                    )}
                                                    <span className="text-xl md:text-2xl font-bold font-nunito text-red-600">
                                                        {stat.number}
                                                    </span>
                                                </div>
                                                <p className="text-xs md:text-sm font-nunito text-gray-700 font-medium">
                                                    {stat.label}
                                                </p>
                                            </motion.div>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Price Badge */}
                            <motion.div
                                className="absolute top-6 right-6 bg-white rounded-full px-6 py-3 shadow-xl"
                                initial={{ scale: 0, rotate: -180 }}
                                animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                                transition={{ type: "spring", stiffness: 200, delay: 0.6 }}
                                whileHover={{ scale: 1.1 }}
                            >
                                <div className="flex flex-col items-center">
                                    <span className="text-3xl md:text-4xl font-bold font-nunito heading-primary leading-none">
                                        ₹49
                                    </span>
                                    <span className="text-xs font-nunito text-gray-600">Only</span>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Right Side - Content Card */}
                    <motion.div
                        className="flex flex-col justify-center"
                        variants={itemVariants}
                    >
                        <motion.div
                            className="bg-white rounded-2xl p-6 md:p-8 shadow-xl border-l-4 border-red-600 h-full"
                            initial={{ opacity: 0, x: 50 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            <h3 className="text-2xl md:text-3xl font-bold font-playfair text-gray-900 mb-4 heading-primary">
                                Why Choose Our Master Classes?
                            </h3>
                            
                            <p className="text-base md:text-lg text-gray-700 font-nunito leading-relaxed mb-6">
                                Quick, interactive, and affordable — our live Master Classes help you
                                master one topic in just 120 minutes. Perfect for students and
                                professionals who want focused learning without extra cost.
                            </p>

                            {/* Benefits List */}
                            <div className="space-y-3 mb-6">
                                {benefits.map((benefit, idx) => {
                                    const IconComponent = benefit.icon;
                                    return (
                                        <motion.div
                                            key={idx}
                                            className="flex items-center gap-3"
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                                            transition={{ duration: 0.4, delay: 0.6 + idx * 0.1 }}
                                        >
                                            <div className="shrink-0 w-6 h-6 bg-red-100 rounded-full flex items-center justify-center">
                                                <IconComponent className="w-4 h-4 text-red-600" />
                                            </div>
                                            <span className="text-sm md:text-base font-nunito text-gray-700">
                                                {benefit.text}
                                            </span>
                                        </motion.div>
                                    );
                                })}
                            </div>

                            {/* CTA Button */}
                            <motion.button
                                className="group relative w-full btn-gradient-red text-white text-base md:text-lg px-8 py-4 rounded-xl font-bold shadow-lg font-nunito overflow-hidden"
                                onClick={() => navigate("/masterClass")}
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                transition={{ duration: 0.6, delay: 1 }}
                                whileHover={{ scale: 1.02, y: -2 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <span className="relative z-10 flex items-center justify-center gap-3">
                                    Join Master Class Now
                                    <motion.span
                                        animate={{ x: [0, 5, 0] }}
                                        transition={{ duration: 1.5, repeat: Infinity }}
                                    >
                                        <FiArrowRight className="w-5 h-5" />
                                    </motion.span>
                                </span>
                                <motion.div
                                    className="absolute inset-0 bg-white/20"
                                    initial={{ x: "-100%" }}
                                    whileHover={{ x: "100%" }}
                                    transition={{ duration: 0.6 }}
                                />
                            </motion.button>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Trust Indicators */}
                <motion.div
                    className="flex flex-wrap justify-center items-center gap-6 md:gap-10 text-sm md:text-base"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 1.2 }}
                >
                    {["No hidden charges", "Certificate included", "Lifetime access"].map((item, idx) => (
                        <motion.div
                            key={idx}
                            className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md"
                            whileHover={{ scale: 1.05 }}
                        >
                            <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                            <span className="font-nunito text-gray-700 font-medium">{item}</span>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.div>
    );
};

export default MasterClass;
