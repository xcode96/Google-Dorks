
import React from 'react';
import { Page } from '../types';

interface NavbarProps {
    activePage: Page;
    setActivePage: (page: Page) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activePage, setActivePage }) => {
    return (
        <header className="sticky top-0 z-50 px-4 pt-4 pb-2">
            <div className="max-w-7xl mx-auto glass-panel rounded-2xl px-6 py-4 flex flex-col md:flex-row justify-between items-center">
                
                <div className="flex items-center gap-3 mb-4 md:mb-0">
                    <div className="w-8 h-8 rounded bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/20">
                        <i className="fas fa-radar text-white text-sm"></i>
                    </div>
                    <div className="flex flex-col">
                        <span className="font-display font-bold text-xl tracking-wide text-white leading-none">
                            BUGSCOUT
                        </span>
                        <span className="text-[10px] font-mono text-cyan-400 tracking-widest uppercase opacity-80">
                            Reconnaissance Unit
                        </span>
                    </div>
                </div>

                <nav className="flex items-center gap-1 bg-slate-900/50 rounded-full p-1 border border-white/5">
                    <button
                        onClick={() => setActivePage('generator')}
                        className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                            activePage === 'generator'
                                ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/25'
                                : 'text-slate-400 hover:text-white hover:bg-white/5'
                        }`}
                    >
                        Dashboard
                    </button>
                    <button
                        onClick={() => setActivePage('about')}
                        className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                            activePage === 'about'
                                ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/25'
                                : 'text-slate-400 hover:text-white hover:bg-white/5'
                        }`}
                    >
                        Protocol
                    </button>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
