import React from 'react';

const METRICS = [
    { label: "Client ROI", value: "400%", description: "Average increase in revenue within the first year." },
    { label: "Systems Built", value: "150+", description: "Custom platforms delivered across 12 industries." },
    { label: "Code Quality", value: "99.9%", description: "Unit test coverage and architectural uptime." },
    { label: "Support", value: "24/7", description: "Global monitoring and technical expert availability." }
];

const CASE_STUDIES = [
    {
        title: "Argent Financial Ecosystem",
        category: "Fintech & Security",
        outcome: "Zero breaches & 3x performance boost",
        description: "Re-engineered a legacy banking core into a high-security, distributed cloud architecture.",
        tags: ["Next.js", "Rust", "AWS", "Blockchain"]
    },
    {
        title: "Nexus Media Stream",
        category: "Scalable Infrastructure",
        outcome: "Handling 2M+ concurrent users",
        description: "Built a custom video streaming engine that reduced latency by 60% globally.",
        tags: ["Go", "WebRTC", "Redis", "Docker"]
    },
    {
        title: "Bloom Retail Hub",
        category: "E-commerce Transformation",
        outcome: "45% conversion rate increase",
        description: "Unified 5 separate store systems into one seamless headless commerce platform.",
        tags: ["Shopify Plus", "React", "Node.js", "SEO"]
    }
];

const Results: React.FC = () => {
    return (
        <section id="results" className="py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-10 relative z-10">
                {/* Metrics Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
                    {METRICS.map((metric, index) => (
                        <div key={index} className="text-center p-8 rounded-2xl border border-white/5 bg-white/5 backdrop-blur-sm hover:border-secondary/30 transition-colors">
                            <h4 className="text-4xl md:text-5xl font-bold font-sora text-secondary mb-2 shadow-[0_0_20px_rgba(156,254,202,0.2)]">
                                {metric.value}
                            </h4>
                            <p className="text-white font-bold mb-2 uppercase tracking-widest text-xs">{metric.label}</p>
                            <p className="text-gray-400 text-sm font-space-grotesk">{metric.description}</p>
                        </div>
                    ))}
                </div>

                <div className="text-center mb-16">
                    <h2 className="text-sm uppercase tracking-[0.3em] text-secondary font-bold mb-4">Case Studies</h2>
                    <h3 className="text-4xl md:text-5xl font-semibold font-sora mb-6">
                        Real Problems. <br />
                        <span className="text-secondary">Exceptional Solutions.</span>
                    </h3>
                </div>

                {/* Case Studies Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {CASE_STUDIES.map((study, index) => (
                        <div 
                            key={index}
                            className="group relative flex flex-col p-8 rounded-3xl border border-white/10 bg-white/5 transition-all duration-500 hover:-translate-y-2 hover:bg-white/10"
                        >
                            <div className="mb-6">
                                <span className="text-xs font-bold text-secondary uppercase tracking-widest bg-secondary/10 px-3 py-1 rounded-full">
                                    {study.category}
                                </span>
                            </div>
                            <h4 className="text-2xl font-bold font-sora text-white mb-3 group-hover:text-secondary transition-colors">
                                {study.title}
                            </h4>
                            <p className="text-lg font-bold text-gray-200 mb-4 font-space-grotesk italic">
                                "{study.outcome}"
                            </p>
                            <p className="text-gray-400 font-space-grotesk mb-8 flex-1">
                                {study.description}
                            </p>
                            
                            <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5">
                                {study.tags.map((tag, i) => (
                                    <span key={i} className="text-[10px] uppercase font-bold text-gray-500 border border-white/10 px-2 py-1 rounded">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Results;
