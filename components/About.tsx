import React from 'react';

const About: React.FC = () => {
    return (
        <div className="w-full max-w-3xl mx-auto pt-12 pb-20 px-6 animate-enter">
            <div className="mb-10">
                <h2 className="text-3xl font-bold text-white mb-4">About BugScout</h2>
                <p className="text-zinc-400 leading-relaxed">
                    BugScout is a specialized reconnaissance tool designed for security researchers, penetration testers, and bug bounty hunters. It automates the generation of Google Dorks—advanced search queries used to uncover security gaps.
                </p>
            </div>

            <div className="space-y-12">
                <section>
                    <h3 className="text-lg font-semibold text-white mb-4 border-l-2 border-white pl-4">How It Works</h3>
                    <div className="pro-card p-6 rounded-xl">
                        <div className="space-y-4">
                            <div className="flex gap-4">
                                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-zinc-800 text-white text-xs flex items-center justify-center font-mono">1</span>
                                <div>
                                    <h4 className="text-sm font-medium text-white">Input Target</h4>
                                    <p className="text-sm text-zinc-500 mt-1">Enter the domain name (e.g., example.com) you wish to audit.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-zinc-800 text-white text-xs flex items-center justify-center font-mono">2</span>
                                <div>
                                    <h4 className="text-sm font-medium text-white">Process</h4>
                                    <p className="text-sm text-zinc-500 mt-1">The system injects the domain into a curated list of vulnerability patterns.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-zinc-800 text-white text-xs flex items-center justify-center font-mono">3</span>
                                <div>
                                    <h4 className="text-sm font-medium text-white">Execute</h4>
                                    <p className="text-sm text-zinc-500 mt-1">Clicking a result opens a Google search specifically targeted to find that vulnerability on the domain.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <h3 className="text-lg font-semibold text-white mb-4 border-l-2 border-red-500 pl-4">Legal Disclaimer</h3>
                    <div className="bg-red-500/5 border border-red-500/20 rounded-xl p-6">
                        <p className="text-sm text-red-200/80 leading-relaxed">
                            This tool is intended for educational purposes and authorized security testing only. Using these queries to target systems you do not own or do not have explicit permission to test is illegal and unethical. The creators of BugScout assume no responsibility for misuse of this tool.
                        </p>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default About;