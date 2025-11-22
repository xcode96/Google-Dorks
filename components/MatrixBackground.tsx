import React from 'react';

const MatrixBackground: React.FC = () => {
    return (
        <div className="fixed inset-0 z-0 pointer-events-none bg-dots">
            {/* Vignette for focus */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#09090b_100%)]"></div>
        </div>
    );
};

export default MatrixBackground;