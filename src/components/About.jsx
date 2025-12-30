import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { TrendingUp, Database, Lightbulb, Target } from 'lucide-react';

const About = () => {
    const [ref, isInView] = useInView({ threshold: 0.2 });

    const skills = [
        {
            icon: <TrendingUp className="w-6 h-6" />,
            title: "Data-Driven Strategy",
            description: "Leveraging SQL and Python to extract actionable insights from complex datasets"
        },
        {
            icon: <Database className="w-6 h-6" />,
            title: "Advanced Analytics",
            description: "Building custom dashboards and reports using Looker Studio and GA4"
        },
        {
            icon: <Lightbulb className="w-6 h-6" />,
            title: "Creative Problem Solving",
            description: "Engineering background enables innovative solutions to marketing challenges"
        },
        {
            icon: <Target className="w-6 h-6" />,
            title: "ROI Optimization",
            description: "Maximizing campaign performance across Google Ads, Meta Ads, and beyond"
        }
    ];

    return (
        <section id="about" className="relative py-24 bg-gradient-to-b from-[#0a1929] to-[#1a3a52]" ref={ref}>
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        About <span className="text-[#d4af37]">Me</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-[#d4af37] to-[#f4d03f] mx-auto mb-8"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-[#d4af37] opacity-10 blur-3xl rounded-full"></div>
                        <div className="relative bg-[#1a3a52] bg-opacity-50 backdrop-blur-sm border border-[#d4af37] border-opacity-20 rounded-2xl p-8 shadow-2xl">
                            <h3 className="text-2xl font-bold text-white mb-4">
                                From Engineering to Marketing Excellence
                            </h3>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                Starting my career as a <span className="text-[#d4af37] font-semibold">Mechanical Engineer</span>, I discovered my passion for data-driven decision making and strategic problem-solving. This unique background provides me with an analytical framework that transforms marketing from art into science.
                            </p>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                Today, I manage multi-million dollar advertising budgets across <span className="text-[#d4af37] font-semibold">40+ dental practice locations</span>, combining technical expertise in SQL and Python with creative marketing strategies to deliver exceptional ROI.
                            </p>
                            <p className="text-gray-300 leading-relaxed">
                                My approach integrates advanced analytics, conversion optimization, and strategic campaign management to drive measurable business growth for every client.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                    >
                        {skills.map((skill, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                                className="bg-[#1a3a52] bg-opacity-50 backdrop-blur-sm border border-[#d4af37] border-opacity-20 rounded-xl p-6 hover:border-opacity-50 hover:shadow-lg hover:shadow-[#d4af37]/20 transition-all duration-300 group"
                            >
                                <div className="text-[#d4af37] mb-4 group-hover:scale-110 transition-transform duration-300">
                                    {skill.icon}
                                </div>
                                <h4 className="text-lg font-semibold text-white mb-2">{skill.title}</h4>
                                <p className="text-sm text-gray-400">{skill.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-8 bg-[#1a3a52] bg-opacity-30 backdrop-blur-sm border border-[#d4af37] border-opacity-20 rounded-2xl p-8"
                >
                    <div className="text-center">
                        <div className="text-4xl font-bold text-[#d4af37] mb-2">$1.5M+</div>
                        <div className="text-sm text-gray-400">Monthly Ad Spend</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold text-[#d4af37] mb-2">40+</div>
                        <div className="text-sm text-gray-400">Practice Locations</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold text-[#d4af37] mb-2">250%</div>
                        <div className="text-sm text-gray-400">Avg ROI Increase</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold text-[#d4af37] mb-2">5+</div>
                        <div className="text-sm text-gray-400">Years Experience</div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;