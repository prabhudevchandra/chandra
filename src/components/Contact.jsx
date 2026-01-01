import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '/src/hooks/useInView.js';
import { Mail, Phone, Linkedin, Send } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { toast } from './ui/use-toast';

const Contact = () => {
    const [ref, isInView] = useInView({ threshold: 0.2 });
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        toast({
            title: "Message Received!",
            description: "Thank you for your inquiry. I'll get back to you within 24 hours.",
            duration: 5000,
        });
        setFormData({ name: '', email: '', company: '', message: '' });
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <section id="contact" className="relative py-24 bg-gradient-to-b from-[#1a3a52] to-[#0a1929]" ref={ref}>
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Let's <span className="text-[#d4af37]">Connect</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-[#d4af37] to-[#f4d03f] mx-auto mb-8"></div>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Ready to transform your digital marketing with data-driven strategies? Let's discuss how we can achieve exceptional results together.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="bg-[#1a3a52] bg-opacity-50 backdrop-blur-sm border border-[#d4af37] border-opacity-20 rounded-2xl p-8 h-full">
                            <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>

                            <div className="space-y-6 mb-8">
                                <div className="flex items-start gap-4 group hover:translate-x-2 transition-transform duration-300">
                                    <div className="w-12 h-12 bg-[#d4af37] bg-opacity-20 border border-[#d4af37] border-opacity-30 rounded-lg flex items-center justify-center text-[#d4af37] group-hover:bg-opacity-30 transition-all duration-300">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <div className="text-sm text-gray-400 mb-1">Email</div>
                                        <a href="mailto:contact@chandraprabhudev.com" className="text-white hover:text-[#d4af37] transition-colors duration-300">
                                            contact@chandraprabhudev.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 group hover:translate-x-2 transition-transform duration-300">
                                    <div className="w-12 h-12 bg-[#d4af37] bg-opacity-20 border border-[#d4af37] border-opacity-30 rounded-lg flex items-center justify-center text-[#d4af37] group-hover:bg-opacity-30 transition-all duration-300">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <div className="text-sm text-gray-400 mb-1">Phone</div>
                                        <a href="tel:+917975328137" className="text-white hover:text-[#d4af37] transition-colors duration-300">
                                            +91 (797) 532-8137
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 group hover:translate-x-2 transition-transform duration-300">
                                    <div className="w-12 h-12 bg-[#d4af37] bg-opacity-20 border border-[#d4af37] border-opacity-30 rounded-lg flex items-center justify-center text-[#d4af37] group-hover:bg-opacity-30 transition-all duration-300">
                                        <Linkedin className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <div className="text-sm text-gray-400 mb-1">LinkedIn</div>
                                        <a href="https://www.linkedin.com/in/chandraprabhudevk/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#d4af37] transition-colors duration-300">
                                            Connect on LinkedIn
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="border-t border-[#d4af37] border-opacity-20 pt-6">
                                <h4 className="text-lg font-semibold text-white mb-4">Consulting Services</h4>
                                <ul className="space-y-2 text-gray-300">
                                    <li className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-[#d4af37] rounded-full"></div>
                                        Campaign Strategy & Optimization
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-[#d4af37] rounded-full"></div>
                                        Analytics & Reporting Setup
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-[#d4af37] rounded-full"></div>
                                        Data Analysis & Insights
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-[#d4af37] rounded-full"></div>
                                        Marketing Technology Integration
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <form onSubmit={handleSubmit} className="bg-[#1a3a52] bg-opacity-50 backdrop-blur-sm border border-[#d4af37] border-opacity-20 rounded-2xl p-8">
                            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>

                            <div className="space-y-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                                        Full Name *
                                    </label>
                                    <Input
                                        id="name"
                                        name="name"
                                        type="text"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full bg-[#0a1929] bg-opacity-50 border-[#d4af37] border-opacity-30 text-white placeholder-gray-500 focus:border-[#d4af37] focus:ring-[#d4af37]"
                                        placeholder="John Doe"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                                        Email Address *
                                    </label>
                                    <Input
                                        id="email"
                                        name="email"
                                        type="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full bg-[#0a1929] bg-opacity-50 border-[#d4af37] border-opacity-30 text-white placeholder-gray-500 focus:border-[#d4af37] focus:ring-[#d4af37]"
                                        placeholder="john@example.com"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                                        Company / Organization
                                    </label>
                                    <Input
                                        id="company"
                                        name="company"
                                        type="text"
                                        value={formData.company}
                                        onChange={handleChange}
                                        className="w-full bg-[#0a1929] bg-opacity-50 border-[#d4af37] border-opacity-30 text-white placeholder-gray-500 focus:border-[#d4af37] focus:ring-[#d4af37]"
                                        placeholder="Your Company"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                                        Message *
                                    </label>
                                    <Textarea
                                        id="message"
                                        name="message"
                                        required
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={6}
                                        className="w-full bg-[#0a1929] bg-opacity-50 border-[#d4af37] border-opacity-30 text-white placeholder-gray-500 focus:border-[#d4af37] focus:ring-[#d4af37] resize-none"
                                        placeholder="Tell me about your project and how I can help..."
                                    />
                                </div>

                                <Button
                                    type="submit"
                                    className="w-full bg-[#d4af37] hover:bg-[#f4d03f] text-[#0a1929] font-semibold py-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#d4af37]/50 group"
                                >
                                    <span>Send Message</span>
                                    <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                                </Button>
                            </div>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;