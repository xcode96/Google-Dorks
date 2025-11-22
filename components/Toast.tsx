
import React from 'react';

interface ToastProps {
    message: string;
    isVisible: boolean;
}

const Toast: React.FC<ToastProps> = ({ message, isVisible }) => {
    return (
        <div
            className={`
                fixed bottom-8 right-8 
                bg-black border-l-4 border-brand-yellow text-brand-yellow 
                px-6 py-4 shadow-2xl z-[1000] 
                transition-all duration-200 transform
                font-tech uppercase tracking-wider
                flex items-center gap-4
                ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'}
            `}
        >
            <i className="fas fa-terminal text-sm animate-pulse"></i>
            <span>{message}</span>
        </div>
    );
};

export default Toast;
