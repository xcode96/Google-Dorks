
import React, { useState, useCallback, useRef } from 'react';
import Navbar from './components/Navbar';
import BugBountyGenerator from './components/BugBountyGenerator';
import About from './components/About';
import Toast from './components/Toast';
import MatrixBackground from './components/MatrixBackground';

export type Page = 'generator' | 'about';

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
        <div className="min-h-screen w-full relative flex flex-col">
            <MatrixBackground /> {/* Acts as the Grid Background now */}
            <Navbar activePage={activePage} setActivePage={setActivePage} />
            <main className="flex-grow container max-w-7xl mx-auto px-4 py-8 relative z-10">
                {activePage === 'generator' && <BugBountyGenerator showToast={showToast} />}
                {activePage === 'about' && <About />}
            </main>
            
            <footer className="relative z-10 py-6 text-center text-slate-600 text-xs font-mono">
                BUGSCOUT SYSTEM v2.0 // SECURE CONNECTION ESTABLISHED
            </footer>
            
            <Toast message={toast.message} isVisible={toast.isVisible} />
        </div>
    );
};

export default App;
