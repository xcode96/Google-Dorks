import React from 'react';

interface ToastProps {
    message: string;
    isVisible: boolean;
}

const Toast: React.FC<ToastProps> = ({ message, isVisible }) => {
    return (
        <div
            className={`
                fixed bottom-8 right-8 z-50
                bg-white text-black
                px-4 py-3 rounded-lg shadow-xl
                transition-all duration-300 transform
                flex items-center gap-3
                ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0 pointer-events-none'}
            `}
        >
            <i className="fas fa-check-circle text-green-600"></i>
            <span className="text-sm font-medium">{message}</span>
        </div>
    );
};

export default Toast;