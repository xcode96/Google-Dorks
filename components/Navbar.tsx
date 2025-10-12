
import React from 'react';
import { Page } from '../App';

interface NavbarProps {
    activePage: Page;
    setActivePage: (page: Page) => void;
}

const NavLink: React.FC<{ page: Page; activePage: Page; setActivePage: (page: Page) => void; children: React.ReactNode }> = ({ page, activePage, setActivePage, children }) => {
    const isActive = activePage === page;
    const activeClasses = 'text-neon-cyan font-semibold after:w-full';
    const inactiveClasses = 'text-gray-200';

    return (
        <a
            href="#"
            onClick={(e) => {
                e.preventDefault();
                setActivePage(page);
            }}
            className={`font-share-tech-mono hover:text-neon-cyan px-3 py-2 relative transition-all duration-300 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-px after:bg-neon-cyan after:-translate-x-1/2 after:transition-all after:duration-300 hover:after:w-full ${isActive ? activeClasses : inactiveClasses}`}
        >
            {children}
        </a>
    );
};

const Navbar: React.FC<NavbarProps> = ({ activePage, setActivePage }) => {
    return (
        <nav className="navbar bg-nav-bg p-4 md:px-8 flex flex-col md:flex-row justify-between items-center border-b border-neon-cyan/10 relative overflow-hidden z-50">
            <div className="logo-container flex flex-col items-center md:items-start">
                <div className="logo font-orbitron text-3xl md:text-4xl font-bold text-neon-cyan relative" style={{ textShadow: '0 0 10px rgba(0, 255, 255, 0.5)' }}>
                    BugScout
                </div>
                <div className="tagline font-share-tech-mono text-sm text-gray-500 -mt-1">
                    Bug Bounty Dork Generator
                </div>
            </div>
            <div className="nav-links flex gap-4 md:gap-6 mt-3 md:mt-0">
                <NavLink page="generator" activePage={activePage} setActivePage={setActivePage}>
                    Generator
                </NavLink>
                <NavLink page="about" activePage={activePage} setActivePage={setActivePage}>
                    About
                </NavLink>
            </div>
        </nav>
    );
};

export default Navbar;
