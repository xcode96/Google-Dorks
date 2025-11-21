
import React from 'react';

const About: React.FC = () => {
    return (
        <div className="max-w-4xl mx-auto animate-fade-in-up">
            <div className="glass-panel rounded-xl p-8 md:p-12 relative overflow-hidden">
                {/* Decorator */}
                <div className="absolute top-0 right-0 p-10 opacity-10 pointer-events-none">
                    <i className="fas fa-fingerprint text-9xl text-white"></i>
                </div>

                <h2 className="font-display font-bold text-3xl text-white mb-8 flex items-center gap-4">
                    <span className="w-1 h-8 bg-cyan-500 block rounded-full"></span>
                    SYSTEM ARCHITECTURE
                </h2>

                <div className="space-y-8 text-slate-300 font-light leading-relaxed">
                    <div>
                        <p className="mb-4">
                            <strong className="text-cyan-400 font-medium">BugScout</strong> operates as a specialized reconnaissance interface for security researchers. It creates an abstraction layer over standard Google search operators (Dorks), automating the generation of complex query strings tailored for vulnerability discovery.
                        </p>
                        <p>
                            By programmatically injecting target domains into curated query patterns, the system reduces the "Time-to-Discovery" for critical exposure vectors including configuration leaks, administrative entry points, and exposed file systems.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                        <div className="bg-slate-900/50 border border-slate-700/50 p-6 rounded-lg">
                            <h3 className="font-display font-bold text-lg text-white mb-3 flex items-center gap-2">
                                <i className="fas fa-code-branch text-cyan-500 text-sm"></i>
                                Workflow
                            </h3>
                            <p className="text-sm text-slate-400">
                                Input target vector (domain) -> System parses input -> Maps against vulnerability database -> Renders executable queries.
                            </p>
                        </div>
                        <div className="bg-slate-900/50 border border-slate-700/50 p-6 rounded-lg">
                            <h3 className="font-display font-bold text-lg text-white mb-3 flex items-center gap-2">
                                <i className="fas fa-shield-alt text-cyan-500 text-sm"></i>
                                Compliance
                            </h3>
                            <p className="text-sm text-slate-400">
                                Tool intended for defensive security analysis and authorized Bug Bounty programs only. Unauthorized enumeration constitutes a violation of the CFAA.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
