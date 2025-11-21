
import React from 'react';

interface ToastProps {
    message: string;
    isVisible: boolean;
}

const Toast: React.FC<ToastProps> = ({ message, isVisible }) => {
    return (
        <div
            className={`fixed bottom-8 left-1/2 transform -translate-x-1/2 md:translate-x-0 md:left-auto md:right-8 bg-slate-900 border border-cyan-500/30 text-cyan-100 px-6 py-3 rounded-lg shadow-[0_0_20px_rgba(6,182,212,0.2)] text-sm z-[1000] transition-all duration-300 flex items-center gap-3 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0 pointer-events-none'}`}
        >
            <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></span>
            <span className="font-mono tracking-tight">{message}</span>
        </div>
    );
};

export default Toast;
