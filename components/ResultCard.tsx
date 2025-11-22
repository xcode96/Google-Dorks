
import React from 'react';
import { DorkCategory } from '../types';

interface ResultCardProps {
    category: DorkCategory;
    domain: string;
    showToast: (msg: string) => void;
    index: number;
}

const DorkRow: React.FC<{ query: string; showToast: (msg: string) => void }> = ({ query, showToast }) => {
    const link = `https://www.google.com/search?q=${encodeURIComponent(query)}`;

    const handleCopy = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        navigator.clipboard.writeText(query).then(() => {
            showToast('QUERY_COPIED_TO_CLIPBOARD');
        });
    };

    return (
        <div className="group flex items-stretch mb-1 hover:bg-brand-yellow/5 transition-colors">
            <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-grow py-2 px-3 font-mono text-[10px] md:text-xs text-gray-400 group-hover:text-brand-yellow truncate transition-colors border-l-2 border-transparent group-hover:border-brand-yellow"
            >
                {query}
            </a>
            <div className="flex items-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity px-1">
                 <button 
                    onClick={handleCopy}
                    className="w-8 h-full flex items-center justify-center text-gray-500 hover:text-white transition-colors"
                    title="COPY"
                >
                    <i className="fas fa-copy text-xs"></i>
                </button>
                <a 
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-full flex items-center justify-center text-gray-500 hover:text-brand-yellow transition-colors"
                    title="OPEN"
                >
                    <i className="fas fa-external-link-alt text-xs"></i>
                </a>
            </div>
        </div>
    );
};

const ResultCard: React.FC<ResultCardProps> = ({ category, domain, showToast, index }) => {
    const style = { animationDelay: `${index * 0.05}s` };

    return (
        <div 
            className="relative bg-brand-panel clip-corner-br animate-slide-in group"
            style={style}
        >
            {/* Decorative Border Line Top */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-brand-border group-hover:bg-brand-yellow transition-colors duration-300"></div>

            {/* Header */}
            <div className="p-4 bg-[#1a1a1d] flex items-center justify-between border-b border-brand-border">
                <div className="flex items-center gap-3">
                    <i className={`${category.icon} text-brand-yellow text-sm`}></i>
                    <h4 className="font-tech font-bold text-lg text-gray-200 uppercase tracking-tight">
                        {category.name}
                    </h4>
                </div>
                <span className="text-[9px] font-mono text-gray-600 bg-black px-1 border border-gray-800">
                    ID:0{index + 1}
                </span>
            </div>
            
            {/* Content Area */}
            <div className="p-2 min-h-[200px] bg-gradient-to-b from-brand-panel to-black">
                <div className="overflow-y-auto custom-scrollbar max-h-[240px]">
                    {category.dorks.map((dork, idx) => {
                        const query = dork.replace(/{domain}/g, domain);
                        return <DorkRow key={idx} query={query} showToast={showToast} />;
                    })}
                </div>
            </div>

            {/* Corner Detail */}
            <div className="absolute bottom-1 right-1 w-3 h-3 border-b border-r border-brand-yellow/30"></div>
        </div>
    );
};

export default ResultCard;
