
import React, { useState } from 'react';
import { DorkCategory } from '../types';

interface ResultCardProps {
    category: DorkCategory;
    domain: string;
}

const DorkLink: React.FC<{ query: string; categoryClassName: string }> = ({ query, categoryClassName }) => {
    const [isHovered, setIsHovered] = useState(false);
    const categoryColorVar = `var(--category-color, var(--neon-cyan))`;
    const categoryShadowVar = `rgba(var(--category-shadow, 0,255,255), 0.3)`;
    
    const link = `https://www.google.com/search?q=${encodeURIComponent(query)}`;

    const baseStyle = {
        borderColor: categoryShadowVar,
        backgroundColor: 'rgba(0,0,0,0.4)',
        color: 'var(--text-color)'
    };
    
    const hoverStyle = {
        borderColor: categoryColorVar,
        backgroundColor: `rgba(var(--category-shadow, 0,255,255), 0.1)`,
        color: categoryColorVar
    };

    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="dork-link block text-gray-300 p-2.5 bg-black/40 rounded text-xs font-mono border-l-2 transition-all duration-300 hover:pl-3.5 break-all"
            style={isHovered ? hoverStyle : baseStyle}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {query}
        </a>
    );
};


const ResultCard: React.FC<ResultCardProps> = ({ category, domain }) => {
    const categoryColor = `var(--category-color, var(--neon-cyan))`;
    const categoryShadow = `0 0 5px rgba(var(--category-shadow, 0,255,255), 0.5)`;

    return (
        <div className={`category-container ${category.className} bg-darker-bg/70 backdrop-blur-sm rounded-md p-4 shadow-lg border border-neon-cyan/10 relative transition-all duration-300 hover:shadow-neon-cyan/20 hover:-translate-y-1`}>
            <div className="category-indicator"></div>
            <div
                className="dork-count absolute top-3 right-3 text-xs bg-black/50 px-2 py-0.5 rounded-full font-share-tech-mono border border-current"
                style={{ color: categoryColor }}
            >
                {`${category.dorks.length} dorks`}
            </div>
            <h4 className="category-title font-rajdhani text-lg mb-3 font-medium flex items-center gap-3 relative pl-4" style={{ color: categoryColor, textShadow: categoryShadow }}>
                <div className="category-badge-animated w-8 h-8 rounded-full flex items-center justify-center relative">
                    <i className={`${category.icon} text-base`} style={{ color: categoryColor }}></i>
                </div>
                <span>{category.name}</span>
            </h4>
            <div className="dork-links-custom-scrollbar dork-links flex flex-col gap-2 max-h-52 overflow-y-auto pr-1">
                {category.dorks.map((dork, index) => {
                    const query = dork.replace(/{domain}/g, domain);
                    return <DorkLink key={index} query={query} categoryClassName={category.className} />;
                })}
            </div>
        </div>
    );
};

export default ResultCard;
