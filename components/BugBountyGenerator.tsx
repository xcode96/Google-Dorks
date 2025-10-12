
import React, { useState, useCallback } from 'react';
import { bugBountyCategories } from '../constants/dorks';
import MatrixBackground from './MatrixBackground';
import ResultCard from './ResultCard';

interface BugBountyGeneratorProps {
    showToast: (message: string) => void;
}

const BugBountyGenerator: React.FC<BugBountyGeneratorProps> = ({ showToast }) => {
    const [domain, setDomain] = useState('');
    const [targetDomain, setTargetDomain] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [showResults, setShowResults] = useState(false);

    const isValidDomain = (d: string): boolean => {
        const domainRegex = /^(https?:\/\/)?([a-zA-Z0-9][a-zA-Z0-9-]{0,61}[a-zA-Z0-9]\.)+[a-zA-Z]{2,}(\/[^\s]*)?$/i;
        return domainRegex.test(d);
    };

    const handleGenerate = useCallback(() => {
        if (!isValidDomain(domain)) {
            showToast('Please enter a valid domain (e.g., example.com)');
            return;
        }

        let cleanDomain = domain.replace(/^(https?:\/\/)?(www\.)?/, '');
        cleanDomain = cleanDomain.split('/')[0];

        setShowResults(false);
        setIsLoading(true);
        setTargetDomain(cleanDomain);

        setTimeout(() => {
            setIsLoading(false);
            setShowResults(true);
        }, 1200);
    }, [domain, showToast]);

    return (
        <div className="dork-card-main bg-card-bg rounded-lg p-6 md:p-8 mb-8 shadow-2xl relative overflow-hidden border border-neon-cyan/10">
            <MatrixBackground />
            
            <h2 className="section-title text-center text-neon-cyan font-orbitron text-2xl md:text-3xl mb-8 relative inline-block w-full z-10" style={{ textShadow: '0 0 10px rgba(0, 255, 255, 0.3)', letterSpacing: '2px' }}>
                BUG BOUNTY DORK GENERATOR
                <span className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-transparent via-neon-cyan to-transparent"></span>
            </h2>
            
            <div className="input-container relative mb-6 z-10">
                <i className="fas fa-globe absolute left-4 top-1/2 -translate-y-1/2 text-neon-cyan z-10"></i>
                <input 
                    type="text" 
                    value={domain}
                    onChange={(e) => setDomain(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleGenerate()}
                    className="input-field font-share-tech-mono w-full p-4 pl-12 bg-black/30 border border-neon-cyan/20 text-gray-200 text-base rounded-md focus:outline-none focus:border-neon-cyan focus:shadow-[0_0_10px_rgba(0,255,255,0.3)] transition-all duration-300 relative z-[5]" 
                    placeholder="Enter domain (e.g., example.com)"
                />
                <div className="input-scan"></div>
            </div>
            
            <div className="buttons-container flex flex-col sm:flex-row justify-center gap-4 mb-8 z-10 relative">
                <button 
                    className="btn btn-sheen font-share-tech-mono bg-neon-cyan text-slate-900 font-semibold px-6 py-3 rounded-md flex items-center justify-center gap-3 relative overflow-hidden transition-all duration-300 hover:bg-cyan-400 hover:shadow-[0_0_15px_rgba(0,255,255,0.6)]"
                    onClick={handleGenerate}
                    disabled={isLoading}
                >
                    <i className="fas fa-shield-alt text-xl z-[2]"></i>
                    <span className="z-[2]">{isLoading ? 'Generating...' : 'Generate Bug Bounty Dorks'}</span>
                </button>
            </div>
            
            {isLoading && (
                <div className="loading-container text-center my-5 z-10 relative">
                    <div className="cyber-loader inline-block w-12 h-12 relative"></div>
                    <div className="loading-text-animated font-share-tech-mono text-neon-cyan mt-2 relative" style={{ textShadow: '0 0 5px rgba(0, 255, 255, 0.5)', letterSpacing: '1px' }}>
                        Generating vulnerability dorks
                    </div>
                </div>
            )}
            
            {showResults && (
                <div className="results-container mt-10 z-10 relative">
                    <h3 className="results-title font-orbitron text-xl text-neon-cyan mb-5 pb-2.5 border-b border-neon-cyan/20 flex items-center gap-2.5" style={{ textShadow: '0 0 5px rgba(0, 255, 255, 0.3)' }}>
                        <i className="fas fa-fingerprint text-lg results-title-icon"></i>
                        <span>Bug Bounty Dorks for: <span className="font-semibold">{targetDomain}</span></span>
                    </h3>
                    <div className="dork-sections grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {bugBountyCategories.map(category => (
                            <ResultCard key={category.name} category={category} domain={targetDomain} />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default BugBountyGenerator;
