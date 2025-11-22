
import React from 'react';
import { Page } from '../types';

interface NavbarProps {
    activePage: Page;
    setActivePage: (page: Page) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activePage, setActivePage }) => {
    return (
        <header className="sticky top-0 z-50 bg-brand-dark/95 backdrop-blur-sm border-b border-brand-yellow/20 shadow-lg">
            <div className="flex flex-col md:flex-row justify-between items-stretch md:items-center">
                
                {/* Logo Section */}
                <div className="flex items-center justify-center md:justify-start px-6 py-4 border-b md:border-b-0 md:border-r border-brand-border bg-brand-panel/30 group cursor-default">
                    
                    {/* Custom Cyber Bug SVG */}
                    <div className="mr-4 text-brand-yellow relative">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-[0_0_5px_rgba(234,179,8,0.5)] group-hover:drop-shadow-[0_0_10px_rgba(234,179,8,0.8)] transition-all duration-300">
                            <path d="M12 2V5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                            <path d="M12 19V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                            <path d="M5 7L19 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="opacity-50"/>
                            <path d="M4 12H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="opacity-50"/>
                            <path d="M5 17L19 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="opacity-50"/>
                            <path d="M7 5H17L19 8V16L17 19H7L5 16V8L7 5Z" stroke="currentColor" strokeWidth="2" fill="#18181B"/>
                            <path d="M9 10H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                            <path d="M9 14H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                            <circle cx="12" cy="12" r="1" fill="currentColor" className="animate-pulse"/>
                        </svg>
                    </div>

                    <div className="flex flex-col">
                        <span className="font-tech text-2xl leading-none tracking-tighter text-white group-hover:text-white transition-colors">
                            BUG<span className="text-brand-yellow group-hover:text-yellow-300 transition-colors">SCOUT</span>
                        </span>
                        <span className="text-[9px] tracking-[0.3em] text-gray-500 font-bold uppercase group-hover:text-brand-yellow transition-colors">
                            Recon Interface
                        </span>
                    </div>
                </div>

                {/* Navigation */}
                <nav className="flex-grow flex items-center justify-center md:justify-end px-4 py-3 md:py-2 gap-2 md:gap-4 overflow-x-auto">
                    <button
                        onClick={() => setActivePage('generator')}
                        className={`
                            relative flex-1 md:flex-none px-4 md:px-6 py-2 font-tech text-xs md:text-sm uppercase tracking-wider transition-all text-center
                            clip-corner-br border-l-2 whitespace-nowrap
                            ${activePage === 'generator' 
                                ? 'bg-brand-yellow/10 text-brand-yellow border-brand-yellow' 
                                : 'text-gray-500 border-transparent hover:text-gray-300 hover:bg-white/5'}
                        `}
                    >
                        Dashboard
                        {activePage === 'generator' && <span className="absolute top-0 right-0 w-2 h-2 bg-brand-yellow shadow-[0_0_5px_#EAB308]"></span>}
                    </button>
                    
                    <button
                        onClick={() => setActivePage('about')}
                        className={`
                            relative flex-1 md:flex-none px-4 md:px-6 py-2 font-tech text-xs md:text-sm uppercase tracking-wider transition-all text-center
                            clip-corner-br border-l-2 whitespace-nowrap
                            ${activePage === 'about' 
                                ? 'bg-brand-yellow/10 text-brand-yellow border-brand-yellow' 
                                : 'text-gray-500 border-transparent hover:text-gray-300 hover:bg-white/5'}
                        `}
                    >
                        System Info
                        {activePage === 'about' && <span className="absolute top-0 right-0 w-2 h-2 bg-brand-yellow shadow-[0_0_5px_#EAB308]"></span>}
                    </button>
                </nav>
            </div>
            
            {/* Decorator Line */}
            <div className="h-[2px] w-full bg-gradient-to-r from-brand-yellow via-transparent to-transparent opacity-50"></div>
        </header>
    );
};

export default Navbar;
