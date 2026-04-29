import React from "react";
import Navbar from "../components/section/Navbar";
import Reviews from "../components/section/Reviews";
import Stars from "../components/utils/Stars";

export default function ReviewsPage() {
    return (
        <div className="flex flex-col min-h-screen bg-black">
            <Navbar />
            
            <main className="flex-1 pt-32">
                {/* Page Header */}
                <section className="relative py-20 overflow-hidden">
                    <Stars />
                    <div className="max-w-7xl mx-auto px-10 relative z-10 text-center">
                        <span className="px-6 py-2 rounded-full border border-secondary/30 bg-secondary/5 text-secondary text-sm font-semibold mb-8 inline-block shadow-[0_0_15px_rgba(156,254,202,0.1)]">
                            Our Impact
                        </span>
                        <h1 className="text-5xl md:text-7xl font-bold font-sora mb-8 leading-tight">
                            What Our Clients <br />
                            <span className="text-secondary">Are Saying</span>
                        </h1>
                        <p className="text-gray-400 max-w-3xl mx-auto text-xl font-space-grotesk leading-relaxed">
                            Success stories from companies that scaled their operations and dominated their markets with CipherIT's strategic solutions.
                        </p>
                    </div>
                    
                    {/* Background decoration */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(50%_50%_at_50%_100%,rgba(156,254,202,0.1)_0%,transparent_100%)] pointer-events-none" />
                </section>

                {/* Reviews Grid */}
                <Reviews />

                {/* Trust Section */}
                <section className="py-24 bg-white/5 border-y border-white/5">
                    <div className="max-w-7xl mx-auto px-10 text-center">
                        <p className="text-secondary uppercase tracking-widest font-bold mb-10">Trusted By</p>
                        <div className="flex flex-wrap justify-center items-center gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                            {/* Placeholder for logos */}
                            <span className="text-2xl font-bold font-sora">TECHFLOW</span>
                            <span className="text-2xl font-bold font-sora">ARGENT</span>
                            <span className="text-2xl font-bold font-sora">NEXUS</span>
                            <span className="text-2xl font-bold font-sora">BLOOM</span>
                            <span className="text-2xl font-bold font-sora">SKYBOUND</span>
                        </div>
                    </div>
                </section>

                {/* Bottom CTA */}
                <section className="py-24">
                    <div className="max-w-4xl mx-auto px-10 text-center">
                        <h2 className="text-3xl font-bold font-sora mb-6">Want to be our next success story?</h2>
                        <p className="text-gray-400 mb-10 text-lg">Let's build something extraordinary together.</p>
                        <a href="/contact" className="btn-primary inline-block">
                            Start a Conversation
                        </a>
                    </div>
                </section>
            </main>
        </div>
    );
}
