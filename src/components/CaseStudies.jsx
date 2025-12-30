import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { TrendingUp, Users, DollarSign, Target, BarChart3, Calendar } from 'lucide-react';

const CaseStudies = () => {
    const [ref, isInView] = useInView({ threshold: 0.2 });
    const [selectedCase, setSelectedCase] = useState(null);

    const caseStudies = [
        {
            id: 1,
            title: "Multi-Location Dental Practice Expansion",
            client: "40+ Dental Practice Locations",
            duration: "12 Months",
            challenge: "Optimize ad spend across diverse geographic markets while maintaining consistent ROI and patient quality",
            solution: "Implemented location-specific campaign structures with automated bidding strategies, custom audience segmentation, and real-time performance dashboards",
            metrics: [
                { icon: <DollarSign className="w-5 h-5" />, label: "Monthly Ad Spend", value: "$1.5M+" },
                { icon: <TrendingUp className="w-5 h-5" />, label: "ROI Increase", value: "285%" },
                { icon: <Users className="w-5 h-5" />, label: "New Patients", value: "2,400+" },
                { icon: <Target className="w-5 h-5" />, label: "Cost Per Acquisition", value: "-42%" }
            ],
            image: "Modern dental office with multiple treatment rooms and advanced equipment"
        },
        {
            id: 2,
            title: "Advanced Analytics Dashboard Development",
            client: "Healthcare Marketing Agency",
            duration: "6 Months",
            challenge: "Create comprehensive real-time reporting system to track performance across 40+ locations and multiple platforms",
            solution: "Developed custom Looker Studio dashboards integrated with GA4, Google Ads, and Meta Ads APIs, featuring automated SQL queries for data aggregation",
            metrics: [
                { icon: <BarChart3 className="w-5 h-5" />, label: "Data Sources", value: "15+" },
                { icon: <Calendar className="w-5 h-5" />, label: "Reporting Time", value: "-75%" },
                { icon: <TrendingUp className="w-5 h-5" />, label: "Decision Speed", value: "+160%" },
                { icon: <Target className="w-5 h-5" />, label: "Accuracy Rate", value: "99.8%" }
            ],
            image: "Professional data dashboard showing multiple charts and analytics visualizations"
        },
        {
            id: 3,
            title: "Conversion Rate Optimization Campaign",
            client: "Regional Dental Group",
            duration: "9 Months",
            challenge: "Improve landing page performance and reduce cost per lead while scaling campaign volume",
            solution: "A/B tested 25+ landing page variations, implemented advanced tracking via GTM, and optimized user journeys using GA4 insights",
            metrics: [
                { icon: <TrendingUp className="w-5 h-5" />, label: "Conversion Rate", value: "+186%" },
                { icon: <DollarSign className="w-5 h-5" />, label: "Cost Per Lead", value: "-54%" },
                { icon: <Users className="w-5 h-5" />, label: "Lead Volume", value: "+320%" },
                { icon: <Target className="w-5 h-5" />, label: "Lead Quality", value: "+45%" }
            ],
            image: "Clean and modern website landing page with conversion-focused design"
        }
    ];

    return (
        <section id="case-studies" className="relative py-24 bg-gradient-to-b from-[#0a1929] to-[#1a3a52]" ref={ref}>
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Case <span className="text-[#d4af37]">Studies</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-[#d4af37] to-[#f4d03f] mx-auto mb-8"></div>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Real results from data-driven marketing strategies and analytical excellence
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                    {caseStudies.map((study, index) => (
                        <motion.div
                            key={study.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group cursor-pointer"
                            onClick={() => setSelectedCase(study)}
                        >
                            <div className="bg-[#1a3a52] bg-opacity-50 backdrop-blur-sm border border-[#d4af37] border-opacity-20 rounded-2xl overflow-hidden hover:border-opacity-60 hover:shadow-2xl hover:shadow-[#d4af37]/30 transition-all duration-300 hover:-translate-y-2 h-full flex flex-col">
                                <div className="relative h-48 bg-gradient-to-br from-[#1a3a52] to-[#0a1929] overflow-hidden">
                                    <img
                                        className="w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-110 transition-all duration-500"
                                        alt={study.title}
                                        src="https://images.unsplash.com/photo-1601429675201-f66be94607bb" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a3a52] to-transparent"></div>
                                </div>

                                <div className="p-6 flex-1 flex flex-col">
                                    <div className="flex items-center justify-between mb-3">
                                        <span className="px-3 py-1 bg-[#d4af37] bg-opacity-20 border border-[#d4af37] border-opacity-30 rounded-full text-xs font-semibold text-[#d4af37]">
                                            {study.duration}
                                        </span>
                                    </div>

                                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#d4af37] transition-colors duration-300">
                                        {study.title}
                                    </h3>

                                    <p className="text-sm text-gray-400 mb-4">{study.client}</p>

                                    <div className="grid grid-cols-2 gap-3 mt-auto">
                                        {study.metrics.slice(0, 4).map((metric, idx) => (
                                            <div key={idx} className="bg-[#0a1929] bg-opacity-50 rounded-lg p-3">
                                                <div className="flex items-center gap-2 text-[#d4af37] mb-1">
                                                    {metric.icon}
                                                </div>
                                                <div className="text-lg font-bold text-white">{metric.value}</div>
                                                <div className="text-xs text-gray-400">{metric.label}</div>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="mt-4 text-[#d4af37] text-sm font-semibold group-hover:translate-x-2 transition-transform duration-300">
                                        View Details →
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Case Study Modal */}
                <AnimatePresence>
                    {selectedCase && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
                            onClick={() => setSelectedCase(null)}
                        >
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.9, opacity: 0 }}
                                className="bg-[#1a3a52] border border-[#d4af37] border-opacity-30 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <div className="relative h-64 bg-gradient-to-br from-[#1a3a52] to-[#0a1929]">
                                    <img
                                        className="w-full h-full object-cover opacity-50"
                                        alt={selectedCase.title}
                                        src="https://images.unsplash.com/photo-1619106353081-dfdb466cbef9" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a3a52] to-transparent"></div>
                                    <button
                                        onClick={() => setSelectedCase(null)}
                                        className="absolute top-4 right-4 w-10 h-10 bg-[#0a1929] bg-opacity-80 hover:bg-opacity-100 rounded-full flex items-center justify-center text-white hover:text-[#d4af37] transition-colors duration-300"
                                    >
                                        ✕
                                    </button>
                                </div>

                                <div className="p-8">
                                    <div className="mb-6">
                                        <span className="px-3 py-1 bg-[#d4af37] bg-opacity-20 border border-[#d4af37] border-opacity-30 rounded-full text-xs font-semibold text-[#d4af37]">
                                            {selectedCase.duration}
                                        </span>
                                    </div>

                                    <h3 className="text-3xl font-bold text-white mb-2">{selectedCase.title}</h3>
                                    <p className="text-lg text-gray-400 mb-8">{selectedCase.client}</p>

                                    <div className="space-y-6 mb-8">
                                        <div>
                                            <h4 className="text-xl font-semibold text-[#d4af37] mb-3">Challenge</h4>
                                            <p className="text-gray-300 leading-relaxed">{selectedCase.challenge}</p>
                                        </div>

                                        <div>
                                            <h4 className="text-xl font-semibold text-[#d4af37] mb-3">Solution</h4>
                                            <p className="text-gray-300 leading-relaxed">{selectedCase.solution}</p>
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="text-xl font-semibold text-[#d4af37] mb-4">Key Metrics</h4>
                                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                            {selectedCase.metrics.map((metric, idx) => (
                                                <div key={idx} className="bg-[#0a1929] bg-opacity-50 border border-[#d4af37] border-opacity-20 rounded-lg p-4">
                                                    <div className="flex items-center gap-2 text-[#d4af37] mb-2">
                                                        {metric.icon}
                                                    </div>
                                                    <div className="text-2xl font-bold text-white mb-1">{metric.value}</div>
                                                    <div className="text-sm text-gray-400">{metric.label}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default CaseStudies;