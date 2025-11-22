
import React from 'react';
import { Page } from '../types';

interface NavbarProps {
    activePage: Page;
    setActivePage: (page: Page) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activePage, setActivePage }) => {
    return (
        <header className="sticky top-0 z-50 bg-brand-dark/95 backdrop-blur-sm border-b border-brand-yellow/20">
            <div className="flex flex-col md:flex-row justify-between items-stretch md:items-center">
                
                {/* Logo Section */}
                <div className="flex items-center px-6 py-4 border-b md:border-b-0 md:border-r border-brand-border bg-brand-panel/30">
                    <i className="fas fa-bug text-brand-yellow text-xl mr-3"></i>
                    <div className="flex flex-col">
                        <span className="font-tech text-2xl leading-none tracking-tighter text-white">
                            BUG<span className="text-brand-yellow">SCOUT</span>
                        </span>
                        <span className="text-[9px] tracking-[0.3em] text-gray-500 font-bold uppercase">
                            Recon Interface
                        </span>
                    </div>
                </div>

                {/* Navigation */}
                <nav className="flex-grow flex items-center justify-end px-4 py-2 gap-2">
                    <button
                        onClick={() => setActivePage('generator')}
                        className={`
                            relative px-6 py-2 font-tech text-sm uppercase tracking-wider transition-all
                            clip-corner-br border-l-2
                            ${activePage === 'generator' 
                                ? 'bg-brand-yellow/10 text-brand-yellow border-brand-yellow' 
                                : 'text-gray-500 border-transparent hover:text-gray-300 hover:bg-white/5'}
                        `}
                    >
                        Dashboard
                        {activePage === 'generator' && <span className="absolute top-0 right-0 w-2 h-2 bg-brand-yellow"></span>}
                    </button>
                    
                    <button
                        onClick={() => setActivePage('about')}
                        className={`
                            relative px-6 py-2 font-tech text-sm uppercase tracking-wider transition-all
                            clip-corner-br border-l-2
                            ${activePage === 'about' 
                                ? 'bg-brand-yellow/10 text-brand-yellow border-brand-yellow' 
                                : 'text-gray-500 border-transparent hover:text-gray-300 hover:bg-white/5'}
                        `}
                    >
                        System Info
                        {activePage === 'about' && <span className="absolute top-0 right-0 w-2 h-2 bg-brand-yellow"></span>}
                    </button>
                </nav>
            </div>
            
            {/* Decorator Line */}
            <div className="h-[2px] w-full bg-gradient-to-r from-brand-yellow via-transparent to-transparent opacity-50"></div>
        </header>
    );
};

export default Navbar;
