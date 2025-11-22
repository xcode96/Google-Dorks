import React, { useState, useCallback, useMemo } from 'react';
import { bugBountyCategories } from '../constants/dorks';
import ResultCard from './ResultCard';

interface BugBountyGeneratorProps {
    showToast: (message: string) => void;
}

const BugBountyGenerator: React.FC<BugBountyGeneratorProps> = ({ showToast }) => {
    const [domain, setDomain] = useState('');
    const [targetDomain, setTargetDomain] = useState('');
    const [isGenerating, setIsGenerating] = useState(false);
    const [showResults, setShowResults] = useState(false);
    const [activeFilter, setActiveFilter] = useState('All');

    const handleGenerate = useCallback(() => {
        if (!domain) return;
        
        // Basic validation (looser to allow for rapid testing)
        const cleanDomain = domain.trim().replace(/^(https?:\/\/)?(www\.)?/, '').split('/')[0];
        
        setIsGenerating(true);
        setTargetDomain(cleanDomain);
        setShowResults(false);

        // Artificial delay for "processing" feel
        setTimeout(() => {
            setIsGenerating(false);
            setShowResults(true);
        }, 600);
    }, [domain]);

    const filters = useMemo(() => {
        return ['All', ...bugBountyCategories.map(c => c.name.split(' ')[0])];
    }, []);

    const filteredCategories = useMemo(() => {
        if (activeFilter === 'All') return bugBountyCategories;
        return bugBountyCategories.filter(c => c.name.startsWith(activeFilter));
    }, [activeFilter]);

    return (
        <div className="w-full max-w-5xl mx-auto pb-20">
            
            {/* Hero / Search Section */}
            <div className={`flex flex-col items-center text-center transition-all duration-500 ${showResults ? 'py-8' : 'py-32'}`}>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                    Reconnaissance <span className="text-zinc-500">Simplified</span>
                </h1>
                <p className="text-zinc-400 mb-8 max-w-lg text-sm md:text-base">
                    Generate advanced Google Dorks to uncover vulnerabilities, exposed files, and misconfigurations in seconds.
                </p>

                <div className="w-full max-w-xl relative">
                    <div className="relative group">
                        <input 
                            type="text" 
                            value={domain}
                            onChange={(e) => setDomain(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleGenerate()}
                            className="w-full bg-zinc-900/50 border border-zinc-700 rounded-xl py-4 pl-6 pr-32 text-lg text-white placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-white/40 transition-all shadow-lg"
                            placeholder="target.com"
                            autoFocus
                        />
                        <div className="absolute right-2 top-2 bottom-2">
                            <button 
                                onClick={handleGenerate}
                                disabled={!domain || isGenerating}
                                className="h-full px-6 bg-white text-black font-semibold rounded-lg hover:bg-zinc-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-sm"
                            >
                                {isGenerating ? '...' : 'Scan'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Results Section */}
            {showResults && (
                <div className="animate-enter">
                    {/* Controls Bar */}
                    <div className="sticky top-20 z-40 bg-zinc-950/90 backdrop-blur-md border-y border-zinc-800 py-4 mb-8 -mx-6 px-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                        <div className="flex items-baseline gap-3">
                            <h2 className="text-xl font-semibold text-white">Results</h2>
                            <span className="text-sm text-zinc-500 font-mono">{targetDomain}</span>
                        </div>

                        <div className="flex items-center gap-2 overflow-x-auto max-w-full no-scrollbar pb-2 md:pb-0">
                            {filters.map(filter => (
                                <button
                                    key={filter}
                                    onClick={() => setActiveFilter(filter)}
                                    className={`
                                        px-3 py-1 text-xs font-medium rounded-full whitespace-nowrap transition-colors
                                        ${activeFilter === filter
                                            ? 'bg-white text-black'
                                            : 'bg-zinc-900 text-zinc-400 hover:bg-zinc-800 border border-zinc-800'}
                                    `}
                                >
                                    {filter}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Grid */}
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
                </div>
            )}
        </div>
    );
};

export default BugBountyGenerator;