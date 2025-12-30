import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '/src/hooks/useInView.js';

const TechStack = () => {
    const [ref, isInView] = useInView({ threshold: 0.2 });

    const technologies = [
        {
            name: "Google Ads",
            category: "Paid Advertising",
            description: "Advanced campaign management & optimization",
            icon: "💰"
        },
        {
            name: "Meta Ads",
            category: "Social Advertising",
            description: "Facebook & Instagram campaign strategy",
            icon: "📱"
        },
        {
            name: "Google Analytics 4",
            category: "Analytics",
            description: "Advanced tracking & attribution modeling",
            icon: "📊"
        },
        {
            name: "Google Tag Manager",
            category: "Tag Management",
            description: "Event tracking & conversion optimization",
            icon: "🏷️"
        },
        {
            name: "Looker Studio",
            category: "Data Visualization",
            description: "Custom dashboards & automated reporting",
            icon: "📈"
        },
        {
            name: "SQL",
            category: "Data Analysis",
            description: "Database queries & data manipulation",
            icon: "🗄️"
        },
        {
            name: "Python",
            category: "Programming",
            description: "Data analysis & automation scripts",
            icon: "🐍"
        },
        {
            name: "Excel / Sheets",
            category: "Spreadsheets",
            description: "Advanced formulas & data modeling",
            icon: "📑"
        }
    ];

    return (
        <section id="tech-stack" className="relative py-24 bg-gradient-to-b from-[#1a3a52] to-[#0a1929]" ref={ref}>
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Tech <span className="text-[#d4af37]">Stack</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-[#d4af37] to-[#f4d03f] mx-auto mb-8"></div>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Leveraging cutting-edge tools and technologies to drive data-driven marketing excellence
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {technologies.map((tech, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group relative bg-[#1a3a52] bg-opacity-50 backdrop-blur-sm border border-[#d4af37] border-opacity-20 rounded-xl p-6 hover:border-opacity-60 hover:shadow-xl hover:shadow-[#d4af37]/30 transition-all duration-300 hover:-translate-y-2"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37] to-transparent opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300"></div>

                            <div className="relative z-10">
                                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                                    {tech.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">{tech.name}</h3>
                                <div className="inline-block px-3 py-1 bg-[#d4af37] bg-opacity-20 border border-[#d4af37] border-opacity-30 rounded-full mb-3">
                                    <span className="text-xs font-semibold text-[#d4af37]">{tech.category}</span>
                                </div>
                                <p className="text-sm text-gray-400">{tech.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="mt-16 text-center"
                >
                    <div className="inline-block bg-[#1a3a52] bg-opacity-50 backdrop-blur-sm border border-[#d4af37] border-opacity-20 rounded-2xl px-8 py-6">
                        <p className="text-gray-300 text-lg">
                            <span className="text-[#d4af37] font-semibold">Continuous Learning:</span> Always exploring new tools and methodologies to stay ahead in the ever-evolving digital marketing landscape
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default TechStack;