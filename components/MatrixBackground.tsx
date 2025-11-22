
import React from 'react';

const MatrixBackground: React.FC = () => {
    return (
        <div className="fixed inset-0 z-0 pointer-events-none">
            {/* Solid Dark Base */}
            <div className="absolute inset-0 bg-[#050505]"></div>
            
            {/* Technical Grid */}
            <div 
                className="absolute inset-0 opacity-10"
                style={{
                    backgroundImage: `linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                }}
            ></div>

            {/* Large Crosshairs */}
            <div 
                className="absolute inset-0 opacity-5"
                style={{
                    backgroundImage: `radial-gradient(circle at center, transparent 0%, #000 100%), linear-gradient(#EAB308 1px, transparent 1px), linear-gradient(90deg, #EAB308 1px, transparent 1px)`,
                    backgroundSize: '200px 200px'
                }}
            ></div>
            
            {/* Vignette */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#000_90%)]"></div>
        </div>
    );
};

export default MatrixBackground;
