import React, { useEffect, useRef } from 'react';

const MatrixBackground: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const createMatrix = () => {
            const container = containerRef.current;
            if (!container) return;

            // Clear existing lines
            container.innerHTML = '';
            
            const containerWidth = container.offsetWidth;
            const numberOfLines = Math.min(Math.floor(containerWidth / 30), 30);

            for (let i = 0; i < numberOfLines; i++) {
                const line = document.createElement('div');
                line.className = 'matrix-line';
                line.style.left = Math.random() * containerWidth + 'px';
                line.style.animationDuration = (Math.random() * 2 + 1.5) + 's';
                line.style.height = (Math.random() * 100 + 70) + '%';
                line.style.animationDelay = (Math.random() * 1) + 's';
                container.appendChild(line);
            }
        };

        createMatrix();

        // Fix: Use 'number' for the return type of setTimeout in a browser environment.
        let resizeTimeout: number;
        const handleResize = () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = window.setTimeout(createMatrix, 250);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            clearTimeout(resizeTimeout);
        };
    }, []);

    return <div ref={containerRef} className="matrix-bg absolute inset-0 overflow-hidden z-0 opacity-[0.05]"></div>;
};

export default MatrixBackground;