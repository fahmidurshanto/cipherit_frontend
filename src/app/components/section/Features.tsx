import React from 'react';

const FEATURES = [
    {
        title: "Custom Development",
        description: "Tailored software solutions built from the ground up to match your unique business needs and scalability requirements.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary"><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></svg>
        )
    },
    {
        title: "SEO & Digital Mastery",
        description: "Dominate search rankings and social algorithms. From YouTube SEO to viral video editing, we make your brand unmissable.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary"><circle cx="12" cy="12" r="10"/><path d="m16 12-4-4-4 4"/><path d="M12 16V8"/></svg>
        )
    },
    {
        title: "UI/UX Excellence",
        description: "Immersive, user-centric designs that don't just look stunning but drive engagement and conversion across all devices.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9 3v18"/><path d="M3 9h18"/></svg>
        )
    },
    {
        title: "24/7 Expert Support",
        description: "Your digital foundation is monitored round-the-clock. We are always online to ensure your systems run at peak performance.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
        )
    },
    {
        title: "E-commerce Solutions",
        description: "High-conversion online stores with seamless payment integrations and robust inventory management systems.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
        )
    },
    {
        title: "Lifetime Maintenance",
        description: "We don't just build and leave. Our lifetime partnership ensures your software evolves with technology and your business.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
        )
    }
];

const Features: React.FC = () => {
    return (
        <section id="features" className="py-24 relative overflow-hidden bg-black">
            {/* Subtle background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-10 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-sm uppercase tracking-[0.3em] text-secondary font-bold mb-4">Core Capabilities</h2>
                    <h3 className="text-4xl md:text-5xl font-semibold font-sora mb-6">
                        Engineered for <span className="text-secondary">Excellence</span>
                    </h3>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg font-space-grotesk">
                        From initial concept to lifetime maintenance, we provide the full spectrum of digital transformation services.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {FEATURES.map((feature, index) => (
                        <div 
                            key={index}
                            className="group relative p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:border-secondary/50 hover:bg-white/10 hover:-translate-y-1 overflow-hidden"
                        >
                            {/* Card glow effect on hover */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-secondary/20 to-transparent opacity-0 group-hover:opacity-100 blur transition-opacity duration-300" />
                            
                            <div className="relative z-10">
                                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-6 border border-secondary/20 shadow-[0_0_10px_rgba(156,254,202,0.1)] group-hover:shadow-[0_0_15px_rgba(156,254,202,0.3)] transition-all duration-300">
                                    {feature.icon}
                                </div>
                                <h4 className="text-xl font-bold font-sora mb-3 group-hover:text-secondary transition-colors">
                                    {feature.title}
                                </h4>
                                <p className="text-gray-400 font-space-grotesk leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
