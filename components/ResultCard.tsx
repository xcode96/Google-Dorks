import React from 'react';
import { DorkCategory } from '../types';

interface ResultCardProps {
    category: DorkCategory;
    domain: string;
    showToast: (msg: string) => void;
    index: number;
}

const DorkItem: React.FC<{ query: string; showToast: (msg: string) => void }> = ({ query, showToast }) => {
    const link = `https://www.google.com/search?q=${encodeURIComponent(query)}`;

    const handleCopy = (e: React.MouseEvent) => {
        e.preventDefault();
        navigator.clipboard.writeText(query).then(() => {
            showToast('Copied to clipboard');
        });
    };

    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="group block p-3 rounded-md hover:bg-zinc-800/50 transition-colors border border-transparent hover:border-zinc-800"
        >
            <code className="block font-mono text-xs text-zinc-300 mb-2 break-all leading-relaxed">
                {query}
            </code>
            <div className="flex items-center justify-between">
                <span className="text-[10px] font-medium text-zinc-500 uppercase tracking-wider group-hover:text-zinc-400">Google Search</span>
                <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button 
                        onClick={handleCopy}
                        className="p-1.5 text-zinc-400 hover:text-white bg-zinc-800 rounded hover:bg-zinc-700 transition-colors"
                        title="Copy Dork"
                    >
                        <i className="far fa-copy text-xs"></i>
                    </button>
                    <div className="p-1.5 text-zinc-400 hover:text-white bg-zinc-800 rounded hover:bg-zinc-700 transition-colors">
                        <i className="fas fa-external-link-alt text-xs"></i>
                    </div>
                </div>
            </div>
        </a>
    );
};

const ResultCard: React.FC<ResultCardProps> = ({ category, domain, showToast, index }) => {
    const style = { animationDelay: `${index * 0.05}s` };

    return (
        <div 
            className="pro-card rounded-xl overflow-hidden animate-enter flex flex-col h-full"
            style={style}
        >
            <div className="p-4 border-b border-zinc-800/50 bg-zinc-900/30 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-zinc-900 flex items-center justify-center border border-zinc-800 text-zinc-400">
                    <i className={`${category.icon} text-sm`}></i>
                </div>
                <h3 className="font-medium text-sm text-zinc-200">{category.name}</h3>
            </div>
            
            <div className="p-2 flex-grow bg-zinc-900/10">
                <div className="space-y-1">
                    {category.dorks.map((dork, idx) => {
                        const query = dork.replace(/{domain}/g, domain);
                        return <DorkItem key={idx} query={query} showToast={showToast} />;
                    })}
                </div>
            </div>
        </div>
    );
};

export default ResultCard;