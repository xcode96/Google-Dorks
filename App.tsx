
import React, { useState, useCallback, useRef } from 'react';
import Navbar from './components/Navbar';
import BugBountyGenerator from './components/BugBountyGenerator';
import About from './components/About';
import Toast from './components/Toast';
import MatrixBackground from './components/MatrixBackground';
import { Page } from './types';

const App: React.FC = () => {
    const [activePage, setActivePage] = useState<Page>('generator');
    const [toast, setToast] = useState<{ message: string; isVisible: boolean }>({
        message: '',
        isVisible: false,
    });
    
    const toastTimeoutRef = useRef<number | null>(null);

    const showToast = useCallback((message: string, duration: number = 3000) => {
        setToast({ message, isVisible: true });

        if (toastTimeoutRef.current) {
            clearTimeout(toastTimeoutRef.current);
        }

        toastTimeoutRef.current = window.setTimeout(() => {
            setToast({ message: '', isVisible: false });
        }, duration);
    }, []);

    return (
        <div className="min-h-screen w-full relative flex flex-col bg-brand-dark text-gray-300">
            <MatrixBackground />
            
            <div className="relative z-10 flex flex-col min-h-screen border-l border-r border-brand-border max-w-[1400px] mx-auto bg-brand-dark/80 shadow-[0_0_100px_rgba(0,0,0,0.8)]">
                <Navbar activePage={activePage} setActivePage={setActivePage} />
                
                <main className="flex-grow w-full p-4 md:p-8">
                    {activePage === 'generator' && <BugBountyGenerator showToast={showToast} />}
                    {activePage === 'about' && <About />}
                </main>
                
                <footer className="border-t border-brand-border bg-brand-panel/50 p-4 flex justify-between items-center text-[10px] font-tech uppercase tracking-widest text-gray-500">
                    <span>System Status: Operational</span>
                    <span>v2.4.0 // BLK-OPS</span>
                </footer>
            </div>
            
            <Toast message={toast.message} isVisible={toast.isVisible} />
        </div>
    );
};

export default App;
