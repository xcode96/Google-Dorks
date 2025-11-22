
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
            showToast('ERROR: INVALID_DOMAIN_SYNTAX');
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
        }, 800);
    }, [domain, showToast]);

    const filters = useMemo(() => {
        return ['All', ...bugBountyCategories.map(c => c.name.split(' ')[0])];
    }, []);

    const filteredCategories = useMemo(() => {
        if (activeFilter === 'All') return bugBountyCategories;
        return bugBountyCategories.filter(c => c.name.startsWith(activeFilter));
    }, [activeFilter]);

    return (
        <div className="w-full flex flex-col gap-8">
            
            {/* Console Input Section */}
            <section className="relative bg-brand-panel border border-brand-border p-1 clip-corner-tl-br">
                <div className="absolute top-0 left-0 bg-brand-yellow/20 w-full h-[1px]"></div>
                <div className="absolute bottom-0 right-0 bg-brand-yellow/20 w-full h-[1px]"></div>

                <div className="bg-[#0a0a0c] p-6 md:p-12 flex flex-col items-center text-center clip-corner-tl-br border border-white/5">
                    
                    <div className="mb-6 flex flex-col items-center">
                         <div className="text-brand-yellow text-[10px] md:text-xs font-tech tracking-[0.4em] mb-2 uppercase">
                            // Target Designation System
                         </div>
                         <h2 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-tight font-sans">
                            Initialize <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-yellow to-white">Scan</span>
                         </h2>
                    </div>

                    <div className="w-full max-w-3xl relative group">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-yellow/50 to-gray-600/50 opacity-30 blur transition duration-200 group-hover:opacity-50"></div>
                        
                        {/* Responsive Input Container */}
                        <div className="relative flex flex-col md:flex-row items-stretch bg-black border border-brand-border">
                            {/* Label / Prefix */}
                            <div className="bg-brand-panel px-4 py-2 md:py-0 flex items-center justify-center md:justify-start border-b md:border-b-0 md:border-r border-brand-border text-gray-500 font-mono select-none text-xs md:text-base">
                                root@scout:~#
                            </div>
                            
                            {/* Input Field */}
                            <input 
                                type="text" 
                                value={domain}
                                onChange={(e) => setDomain(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && handleGenerate()}
                                className="flex-grow bg-transparent py-3 md:py-4 px-4 text-brand-yellow font-mono text-base md:text-lg focus:outline-none placeholder-gray-800 uppercase text-center md:text-left"
                                placeholder="ENTER DOMAIN"
                                autoComplete="off"
                                spellCheck="false"
                            />
                            
                            {/* Action Button */}
                            <button 
                                onClick={handleGenerate}
                                disabled={isLoading}
                                className="bg-brand-yellow hover:bg-yellow-400 text-black font-bold py-3 md:py-0 px-8 transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-tech uppercase tracking-wider flex items-center justify-center gap-2 md:border-l border-black/20"
                            >
                                {isLoading ? <i className="fas fa-cog fa-spin"></i> : 'EXECUTE'}
                            </button>
                        </div>
                    </div>
                    
                    <div className="mt-4 text-[10px] text-gray-600 font-mono flex flex-wrap justify-center gap-2 md:gap-4">
                        <span>STATUS: {isLoading ? <span className="text-brand-yellow animate-pulse">PROCESSING</span> : <span className="text-green-500">IDLE</span>}</span>
                        <span className="hidden md:inline">|</span>
                        <span>MODULES: LOADED</span>
                        <span className="hidden md:inline">|</span>
                        <span>ENCRYPTION: ACTIVE</span>
                    </div>
                </div>
            </section>

            {/* Results Grid */}
            {showResults && (
                <section className="animate-slide-in">
                    
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-8 border-b border-brand-border pb-4 gap-4">
                        <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4">
                            <h3 className="text-2xl font-bold text-white font-sans uppercase">
                                Scan Results
                            </h3>
                            <span className="font-mono text-brand-yellow text-sm break-all">
                                [{targetDomain}]
                            </span>
                        </div>

                        {/* Industrial Filters */}
                        <div className="flex flex-wrap gap-2">
                            {filters.map(filter => (
                                <button
                                    key={filter}
                                    onClick={() => setActiveFilter(filter)}
                                    className={`
                                        px-3 py-1 text-[10px] font-bold uppercase tracking-widest font-tech border
                                        transition-all duration-200 flex-grow md:flex-grow-0
                                        ${activeFilter === filter
                                            ? 'bg-brand-yellow text-black border-brand-yellow'
                                            : 'bg-transparent text-gray-500 border-brand-border hover:border-gray-500 hover:text-gray-300'}
                                    `}
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
