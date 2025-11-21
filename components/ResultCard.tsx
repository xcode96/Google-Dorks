
import React, { useState } from 'react';
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
            showToast('Query Copied to Clipboard');
        });
    };

    return (
        <div className="group flex items-center gap-2 p-2 rounded hover:bg-slate-800/80 transition-colors border border-transparent hover:border-slate-700/50">
            <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-grow font-mono text-[11px] md:text-xs text-cyan-200/80 hover:text-cyan-400 truncate transition-colors"
                title="Open in Google"
            >
                {query}
            </a>
            <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                 <button 
                    onClick={handleCopy}
                    className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-700 rounded transition-colors"
                    title="Copy Dork"
                >
                    <i className="fas fa-copy text-xs"></i>
                </button>
                <a 
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 text-slate-400 hover:text-cyan-400 hover:bg-slate-700 rounded transition-colors"
                    title="Execute Search"
                >
                    <i className="fas fa-external-link-alt text-xs"></i>
                </a>
            </div>
        </div>
    );
};


const ResultCard: React.FC<ResultCardProps> = ({ category, domain, showToast, index }) => {
    // Delay animation based on index for a cascading effect
    const style = { animationDelay: `${index * 0.05}s` };

    return (
        <div 
            className="glass-panel glass-panel-hover rounded-xl p-5 flex flex-col h-full animate-fade-in-up"
            style={style}
        >
            <div className="flex items-center justify-between mb-4 pb-4 border-b border-white/5">
                <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center bg-slate-800 border border-slate-700 text-cyan-500`}>
                        <i className={`${category.icon} text-sm`}></i>
                    </div>
                    <h4 className="font-display font-semibold text-lg text-slate-200 tracking-wide">
                        {category.name}
                    </h4>
                </div>
                <span className="text-[10px] font-mono font-bold text-slate-500 bg-slate-900 px-2 py-1 rounded">
                    {category.dorks.length} OPS
                </span>
            </div>
            
            <div className="flex-grow overflow-y-auto custom-scrollbar max-h-[240px] -mr-2 pr-2 space-y-1">
                {category.dorks.map((dork, idx) => {
                    const query = dork.replace(/{domain}/g, domain);
                    return <DorkRow key={idx} query={query} showToast={showToast} />;
                })}
            </div>
        </div>
    );
};

export default ResultCard;
