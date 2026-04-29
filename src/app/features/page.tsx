import React from "react";
import Navbar from "../components/section/Navbar";
import Features from "../components/section/Features";
import Stars from "../components/utils/Stars";

export default function FeaturesPage() {
    return (
        <div className="flex flex-col min-h-screen bg-black">
            <Navbar />
            
            <main className="flex-1 pt-32">
                {/* Dedicated Page Header */}
                <section className="relative py-20 overflow-hidden">
                    <Stars />
                    <div className="max-w-7xl mx-auto px-10 relative z-10 text-center">
                        <span className="px-6 py-2 rounded-full border border-secondary/30 bg-secondary/5 text-secondary text-sm font-semibold mb-8 inline-block shadow-[0_0_15px_rgba(156,254,202,0.1)]">
                            Our Platform
                        </span>
                        <h1 className="text-5xl md:text-7xl font-bold font-sora mb-8 leading-tight">
                            Powerful Features for <br />
                            <span className="text-secondary">Modern Businesses</span>
                        </h1>
                        <p className="text-gray-400 max-w-3xl mx-auto text-xl font-space-grotesk leading-relaxed">
                            Discover the tools and technologies we use to build, scale, and maintain your digital empire. Engineered for performance, designed for impact.
                        </p>
                    </div>
                    
                    {/* Background decoration */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(50%_50%_at_50%_0%,rgba(156,254,202,0.1)_0%,transparent_100%)] pointer-events-none" />
                </section>

                {/* Reusing the Features Grid Component */}
                <Features />

                {/* Bottom CTA for the page */}
                <section className="py-24 border-t border-white/5">
                    <div className="max-w-4xl mx-auto px-10 text-center">
                        <h2 className="text-3xl font-bold font-sora mb-6">Ready to experience these features?</h2>
                        <p className="text-gray-400 mb-10 text-lg">Join hundreds of businesses already scaling with CipherIT's custom solutions.</p>
                        <a href="/contact" className="btn-primary inline-block">
                            Start Your Journey
                        </a>
                    </div>
                </section>
            </main>
        </div>
    );
}
