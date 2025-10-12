
import React from 'react';

interface ToastProps {
    message: string;
    isVisible: boolean;
}

const Toast: React.FC<ToastProps> = ({ message, isVisible }) => {
    return (
        <div
            id="toast-notification"
            className={`fixed bottom-5 right-5 bg-neon-red text-white px-6 py-3 rounded-lg shadow-lg text-sm z-[1000] transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            style={{ fontFamily: "'Share Tech Mono', monospace" }}
        >
            {message}
        </div>
    );
};

export default Toast;
