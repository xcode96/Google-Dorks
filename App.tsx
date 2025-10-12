import React, { useState, useCallback, useRef } from 'react';
import Navbar from './components/Navbar';
import BugBountyGenerator from './components/BugBountyGenerator';
import About from './components/About';
import Toast from './components/Toast';

export type Page = 'generator' | 'about';

const App: React.FC = () => {
    const [activePage, setActivePage] = useState<Page>('generator');
    const [toast, setToast] = useState<{ message: string; isVisible: boolean }>({
        message: '',
        isVisible: false,
    });
    
    // Fix: Use useRef to persist timeout ID across re-renders and use number type for browser's setTimeout.
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
        <>
            <Navbar activePage={activePage} setActivePage={setActivePage} />
            <main className="container max-w-6xl mx-auto p-4 md:p-8 relative z-10">
                {activePage === 'generator' && <BugBountyGenerator showToast={showToast} />}
                {activePage === 'about' && <About />}
            </main>
            <Toast message={toast.message} isVisible={toast.isVisible} />
        </>
    );
};

export default App;