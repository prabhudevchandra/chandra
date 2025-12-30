import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
    const scrollToAbout = () => {
        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0a1929] via-[#1a3a52] to-[#0a1929]">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    className="absolute top-20 left-10 w-72 h-72 bg-[#d4af37] rounded-full opacity-5 blur-3xl"
                    animate={{
                        x: [0, 100, 0],
                        y: [0, -50, 0],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <motion.div
                    className="absolute bottom-20 right-10 w-96 h-96 bg-[#d4af37] rounded-full opacity-5 blur-3xl"
                    animate={{
                        x: [0, -100, 0],
                        y: [0, 50, 0],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="inline-block mb-6 px-4 py-2 bg-[#d4af37] bg-opacity-10 border border-[#d4af37] border-opacity-30 rounded-full"
                    >
                        <span className="text-[#d4af37] text-sm font-semibold tracking-wide">SENIOR DIGITAL MARKETING MANAGER & DATA ANALYST</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
                    >
                        Managing{' '}
                        <span className="text-[#d4af37]">$1.5M+</span>
                        <br />
                        Monthly Ad Spend with
                        <br />
                        <span className="bg-gradient-to-r from-[#d4af37] to-[#f4d03f] bg-clip-text text-transparent">
                            ROI-Driven Precision
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto"
                    >
                        Transforming data into actionable insights and delivering measurable ROI through strategic campaign management and advanced analytics
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.7 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    >
                        <a
                            href="#contact"
                            className="group px-8 py-4 bg-[#d4af37] text-[#0a1929] font-semibold rounded-lg hover:bg-[#f4d03f] transition-all duration-300 hover:shadow-lg hover:shadow-[#d4af37]/50 hover:scale-105"
                        >
                            Get In Touch
                            <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                        </a>
                        <a
                            href="#case-studies"
                            className="px-8 py-4 border-2 border-[#d4af37] text-[#d4af37] font-semibold rounded-lg hover:bg-[#d4af37] hover:text-[#0a1929] transition-all duration-300 hover:scale-105"
                        >
                            View Case Studies
                        </a>
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
                    onClick={scrollToAbout}
                >
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="flex flex-col items-center text-[#d4af37]"
                    >
                        <span className="text-sm mb-2">Scroll to explore</span>
                        <ChevronDown className="w-6 h-6" />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;