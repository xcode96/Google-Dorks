
import React from 'react';

const MatrixBackground: React.FC = () => {
    return (
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
            {/* Deep Background Color */}
            <div className="absolute inset-0 bg-slate-950"></div>
            
            {/* Dot Grid Pattern */}
            <div className="absolute inset-0 bg-grid-pattern bg-grid-sm opacity-[0.07]"></div>
            
            {/* Ambient Searchlights / Glows */}
            <div className="absolute top-[-20%] left-[20%] w-[500px] h-[500px] bg-cyan-500/10 blur-[120px] rounded-full animate-pulse-slow"></div>
            <div className="absolute bottom-[-10%] right-[10%] w-[600px] h-[600px] bg-indigo-500/10 blur-[120px] rounded-full animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
            
            {/* Vignette */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-950/80"></div>
        </div>
    );
};

export default MatrixBackground;
