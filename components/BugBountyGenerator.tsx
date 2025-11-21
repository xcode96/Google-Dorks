
import React, { useState, useCallback, useMemo } from 'react';
import { bugBountyCategories } from '../constants/dorks';
import ResultCard from './ResultCard';

interface BugBountyGeneratorProps {
    showToast: (message: string) => void;
}

const BugBountyGenerator: React.FC<BugBountyGeneratorProps> = ({ showToast }) => {
    const [domain, setDomain] = useState('');
    const [targetDomain, setTargetDomain] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [showResults, setShowResults] = useState(false);
    const [activeFilter, setActiveFilter] = useState('All');

    const isValidDomain = (d: string): boolean => {
        const domainRegex = /^(https?:\/\/)?([a-zA-Z0-9][a-zA-Z0-9-]{0,61}[a-zA-Z0-9]\.)+[a-zA-Z]{2,}(\/[^\s]*)?$/i;
        return domainRegex.test(d);
    };

    const handleGenerate = useCallback(() => {
        if (!isValidDomain(domain)) {
            showToast('ERR: Invalid Domain Syntax');
            return;
        }

        let cleanDomain = domain.replace(/^(https?:\/\/)?(www\.)?/, '');
        cleanDomain = cleanDomain.split('/')[0];

        setShowResults(false);
        setIsLoading(true);
        setTargetDomain(cleanDomain);

        // Simulated scanning delay
        setTimeout(() => {
            setIsLoading(false);
            setShowResults(true);
        }, 1000);
    }, [domain, showToast]);

    // Extract unique category names for the filter tab
    const filters = useMemo(() => {
        return ['All', ...bugBountyCategories.map(c => c.name.split(' ')[0])]; // Simplified filter names
    }, []);

    const filteredCategories = useMemo(() => {
        if (activeFilter === 'All') return bugBountyCategories;
        return bugBountyCategories.filter(c => c.name.startsWith(activeFilter));
    }, [activeFilter]);

    return (
        <div className="w-full flex flex-col gap-8">
            
            {/* Command Console Section */}
            <section className="glass-panel rounded-xl p-8 md:p-12 relative overflow-hidden group animate-fade-in-up">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-30"></div>
                
                <div className="relative z-10 flex flex-col items-center text-center">
                    <h2 className="font-display font-bold text-3xl md:text-4xl mb-2 text-white tracking-tight">
                        TARGET <span className="text-cyan-400">ACQUISITION</span>
                    </h2>
                    <p className="text-slate-400 mb-8 max-w-lg mx-auto text-sm">
                        Enter target domain to initialize detailed reconnaissance parameters and generate Google Hacking Database queries.
                    </p>

                    <div className="w-full max-w-2xl relative flex items-center">
                        <div className="absolute left-6 text-cyan-500">
                            <i className="fas fa-terminal"></i>
                        </div>
                        <input 
                            type="text" 
                            value={domain}
                            onChange={(e) => setDomain(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleGenerate()}
                            className="w-full bg-slate-900/80 border border-slate-700 rounded-lg py-5 pl-14 pr-36 text-white font-mono text-lg focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all placeholder-slate-600 shadow-inner"
                            placeholder="target.com"
                            autoComplete="off"
                            spellCheck="false"
                        />
                        <div className="absolute right-2">
                            <button 
                                onClick={handleGenerate}
                                disabled={isLoading}
                                className="bg-cyan-600 hover:bg-cyan-500 text-white font-semibold px-6 py-2.5 rounded-md transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 text-sm"
                            >
                                {isLoading ? (
                                    <i className="fas fa-circle-notch fa-spin"></i>
                                ) : (
                                    <>
                                        <span>SCAN</span>
                                        <i className="fas fa-arrow-right"></i>
                                    </>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Results Section */}
            {showResults && (
                <section className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                    
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
                        <div className="flex items-center gap-3">
                            <div className="w-2 h-8 bg-cyan-500 rounded-full"></div>
                            <h3 className="text-2xl font-display font-bold text-white">
                                INTEL <span className="text-slate-500">RESULTS</span>
                            </h3>
                            <span className="bg-slate-800 text-cyan-400 text-xs px-2 py-1 rounded border border-slate-700 font-mono">
                                {targetDomain}
                            </span>
                        </div>

                        {/* Filter Tabs */}
                        <div className="flex overflow-x-auto pb-2 md:pb-0 gap-2 scrollbar-hide">
                            {filters.map(filter => (
                                <button
                                    key={filter}
                                    onClick={() => setActiveFilter(filter)}
                                    className={`px-4 py-1.5 rounded text-xs font-medium uppercase tracking-wider transition-colors whitespace-nowrap ${
                                        activeFilter === filter
                                            ? 'bg-white text-slate-900'
                                            : 'bg-slate-800/50 text-slate-400 hover:bg-slate-800 hover:text-white border border-slate-700'
                                    }`}
                                >
                                    {filter}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredCategories.map((category, index) => (
                            <ResultCard 
                                key={category.name} 
                                category={category} 
                                domain={targetDomain} 
                                showToast={showToast}
                                index={index}
                            />
                        ))}
                    </div>
                </section>
            )}
        </div>
    );
};

export default BugBountyGenerator;
