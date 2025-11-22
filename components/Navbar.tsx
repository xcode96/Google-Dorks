import React from 'react';
import { Page } from '../types';

interface NavbarProps {
    activePage: Page;
    setActivePage: (page: Page) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activePage, setActivePage }) => {
    return (
        <header className="fixed top-0 w-full z-50 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-md">
            <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-white text-black rounded flex items-center justify-center">
                         {/* Simple Abstract Logo */}
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                    <span className="font-semibold text-lg tracking-tight text-white">BugScout</span>
                </div>

                {/* Navigation */}
                <nav className="flex items-center bg-zinc-900 rounded-lg p-1 border border-zinc-800">
                    <button
                        onClick={() => setActivePage('generator')}
                        className={`
                            px-4 py-1.5 rounded text-sm font-medium transition-all duration-200
                            ${activePage === 'generator' 
                                ? 'bg-zinc-800 text-white shadow-sm' 
                                : 'text-zinc-400 hover:text-zinc-200'}
                        `}
                    >
                        Scanner
                    </button>
                    <button
                        onClick={() => setActivePage('about')}
                        className={`
                            px-4 py-1.5 rounded text-sm font-medium transition-all duration-200
                            ${activePage === 'about' 
                                ? 'bg-zinc-800 text-white shadow-sm' 
                                : 'text-zinc-400 hover:text-zinc-200'}
                        `}
                    >
                        Guide
                    </button>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;