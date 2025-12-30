import React from 'react';
import { Helmet } from 'react-helmet';
import { Toaster } from './components/ui/toaster';
import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import CaseStudies from './components/CaseStudies';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
    return (
        <>
            <Helmet>
                <title>Senior Digital Marketing Manager & Data Analyst | Portfolio</title>
                <meta name="description" content="Experienced Digital Marketing Manager & Data Analyst managing $1.5M+ monthly ad spend with expertise in Google Ads, Meta Ads, SQL, Python, and data-driven marketing strategies." />
            </Helmet>
            <div className="min-h-screen bg-[#0a1929]">
                <Hero />
                <About />
                <TechStack />
                <CaseStudies />
                <Contact />
                <Footer />
                <Toaster />
            </div>
        </>
    );
}

export default App;