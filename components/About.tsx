
import React from 'react';

const About: React.FC = () => {
    return (
        <div className="fade-in-animation dork-card-main bg-card-bg rounded-lg p-6 md:p-8 shadow-2xl relative overflow-hidden border border-neon-cyan/10">
            <h2 className="section-title text-center text-neon-cyan font-orbitron text-2xl md:text-3xl mb-8 relative inline-block w-full z-10" style={{ textShadow: '0 0 10px rgba(0, 255, 255, 0.3)', letterSpacing: '2px' }}>
                ABOUT BUGSCOUT
                <span className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-transparent via-neon-cyan to-transparent"></span>
            </h2>
            <div className="space-y-6 text-gray-300 font-rajdhani text-lg leading-relaxed">
                <p>
                    <span className="text-neon-cyan font-semibold">BugScout</span> is a reconnaissance tool designed for bug bounty hunters, penetration testers, and security researchers. It automates the generation of targeted Google Dorks to rapidly uncover potential vulnerabilities, misconfigurations, and sensitive data exposure on a given domain.
                </p>
                <p>
                    In the fast-paced world of cybersecurity, efficiency is key. Manually crafting search queries is time-consuming. BugScout streamlines this process, providing a comprehensive, categorized list of dorks that can reveal everything from open admin panels and sensitive files to cloud storage misconfigurations and potential injection points.
                </p>
                <div className="border-t border-neon-cyan/20 my-6"></div>
                <h3 className="font-orbitron text-xl text-neon-green">How It Works</h3>
                <p>
                    Simply enter a target domain (e.g., <code className="bg-black/50 text-neon-yellow px-2 py-1 rounded">example.com</code>). BugScout will then inject this domain into a vast, curated library of dork templates. The results are presented in a clean, organized interface, allowing you to quickly launch these searches on Google and begin your analysis.
                </p>
                <p className="text-sm text-gray-500 font-share-tech-mono">
                    <i className="fas fa-exclamation-triangle text-neon-orange mr-2"></i>
                    Disclaimer: This tool is intended for educational and authorized security testing purposes only. Unauthorized scanning of systems is illegal. Always respect the scope of bug bounty programs and obtain proper authorization before testing.
                </p>
            </div>
        </div>
    );
};

export default About;
