
import React from 'react';

const About: React.FC = () => {
    return (
        <div className="max-w-4xl mx-auto animate-slide-in pt-8">
            <div className="relative bg-brand-panel border border-brand-border p-8 md:p-12 clip-corner-br">
                
                {/* Decorative Header */}
                <div className="flex items-center gap-2 mb-8 border-b border-brand-border pb-4">
                    <div className="w-4 h-4 bg-brand-yellow"></div>
                    <h2 className="font-sans font-bold text-3xl text-white uppercase tracking-tighter">
                        Protocol Information
                    </h2>
                </div>

                <div className="space-y-8 text-gray-400 font-mono text-sm leading-relaxed">
                    <div>
                        <p className="mb-4">
                            <span className="text-brand-yellow font-bold">&gt;&gt; SYSTEM OVERVIEW:</span> BugScout operates as a specialized reconnaissance interface for security researchers. It abstracts standard Google search operators (Dorks), automating the generation of complex query strings.
                        </p>
                        <p>
                             By programmatically injecting target domains into curated query patterns, the system reduces the "Time-to-Discovery" for critical exposure vectors including configuration leaks, administrative entry points, and exposed file systems.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                        <div className="bg-black border border-brand-border p-6 relative">
                            <div className="absolute top-0 left-0 w-2 h-full bg-brand-border/30"></div>
                            <h3 className="font-tech font-bold text-xl text-white mb-3 uppercase">
                                Workflow
                            </h3>
                            <p className="text-xs text-gray-500">
                                INPUT VECTOR &rarr; PARSE STRING &rarr; MAP VULNERABILITIES &rarr; RENDER QUERIES
                            </p>
                        </div>
                        <div className="bg-black border border-brand-border p-6 relative">
                             <div className="absolute top-0 left-0 w-2 h-full bg-brand-border/30"></div>
                            <h3 className="font-tech font-bold text-xl text-white mb-3 uppercase">
                                Legal Compliance
                            </h3>
                            <p className="text-xs text-gray-500">
                                // WARNING: UNAUTHORIZED ENUMERATION VIOLATES CFAA.
                                // AUTHORIZED PERSONNEL ONLY.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
