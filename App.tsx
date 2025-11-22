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

    const showToast = useCallback((message: string, duration: number = 2000) => {
        setToast({ message, isVisible: true });

        if (toastTimeoutRef.current) {
            clearTimeout(toastTimeoutRef.current);
        }

        toastTimeoutRef.current = window.setTimeout(() => {
            setToast({ message: '', isVisible: false });
        }, duration);
    }, []);

    return (
        <div className="min-h-screen w-full relative flex flex-col text-zinc-300">
            <MatrixBackground />
            
            <Navbar activePage={activePage} setActivePage={setActivePage} />
            
            <main className="flex-grow w-full pt-16 px-4 md:px-6 relative z-10">
                {activePage === 'generator' && <BugBountyGenerator showToast={showToast} />}
                {activePage === 'about' && <About />}
            </main>
            
            <footer className="w-full text-center py-8 text-xs text-zinc-600 z-10">
                BugScout v2.0 &copy; {new Date().getFullYear()}
            </footer>
            
            <Toast message={toast.message} isVisible={toast.isVisible} />
        </div>
    );
};

export default App;