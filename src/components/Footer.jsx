import React from 'react';
import { Linkedin, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-[#0a1929] border-t border-[#d4af37] border-opacity-20 py-12">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-8 h-8 bg-[#d4af37] rounded-lg flex items-center justify-center">
                                <span className="text-[#0a1929] font-bold text-lg">D</span>
                            </div>
                            <span className="text-xl font-bold text-white">Digital Marketing Pro</span>
                        </div>
                        <p className="text-gray-400 text-sm">
                            Data-driven marketing strategies delivering measurable ROI and business growth.
                        </p>
                    </div>

                    <div>
                        <span className="text-white font-semibold mb-4 block">Quick Links</span>
                        <nav className="space-y-2">
                            <a href="#about" className="block text-gray-400 hover:text-[#d4af37] transition-colors duration-300 text-sm">
                                About
                            </a>
                            <a href="#tech-stack" className="block text-gray-400 hover:text-[#d4af37] transition-colors duration-300 text-sm">
                                Tech Stack
                            </a>
                            <a href="#case-studies" className="block text-gray-400 hover:text-[#d4af37] transition-colors duration-300 text-sm">
                                Case Studies
                            </a>
                            <a href="#contact" className="block text-gray-400 hover:text-[#d4af37] transition-colors duration-300 text-sm">
                                Contact
                            </a>
                        </nav>
                    </div>

                    <div>
                        <span className="text-white font-semibold mb-4 block">Connect</span>
                        <div className="flex gap-4">
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-[#d4af37] bg-opacity-20 border border-[#d4af37] border-opacity-30 rounded-lg flex items-center justify-center text-[#d4af37] hover:bg-opacity-30 transition-all duration-300"
                            >
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a
                                href="mailto:contact@example.com"
                                className="w-10 h-10 bg-[#d4af37] bg-opacity-20 border border-[#d4af37] border-opacity-30 rounded-lg flex items-center justify-center text-[#d4af37] hover:bg-opacity-30 transition-all duration-300"
                            >
                                <Mail className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-[#d4af37] border-opacity-20 pt-8 text-center">
                    <p className="text-gray-400 text-sm">
                        © {new Date().getFullYear()} Digital Marketing Portfolio. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;