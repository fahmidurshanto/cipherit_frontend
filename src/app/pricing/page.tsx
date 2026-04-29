import React from "react";
import Navbar from "../components/section/Navbar";
import Pricing from "../components/section/Pricing";
import Stars from "../components/utils/Stars";

export default function PricingPage() {
    return (
        <div className="flex flex-col min-h-screen bg-black text-white">
            <Navbar />
            
            <main className="flex-1 pt-32">
                {/* Page Header */}
                <section className="relative py-20 overflow-hidden">
                    <Stars />
                    <div className="max-w-7xl mx-auto px-10 relative z-10 text-center">
                        <span className="px-6 py-2 rounded-full border border-secondary/30 bg-secondary/5 text-secondary text-sm font-semibold mb-8 inline-block shadow-[0_0_15px_rgba(156,254,202,0.1)]">
                            Our Plans
                        </span>
                        <h1 className="text-5xl md:text-7xl font-bold font-sora mb-8 leading-tight">
                            Invest in Your <br />
                            <span className="text-secondary">Digital Future</span>
                        </h1>
                        <p className="text-gray-400 max-w-3xl mx-auto text-xl font-space-grotesk leading-relaxed">
                            No subscription traps. No hidden fees. Just elite-tier software engineering and strategic maintenance tailored to your ROI.
                        </p>
                    </div>
                    
                    {/* Background decoration */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(156,254,202,0.05)_0%,transparent_70%)] pointer-events-none" />
                </section>

                {/* Pricing Tiers */}
                <Pricing />

                {/* FAQ or Trust Section */}
                <section className="py-24 border-t border-white/5">
                    <div className="max-w-5xl mx-auto px-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                            <div>
                                <h4 className="text-2xl font-bold font-sora mb-4 text-secondary">Why CipherIT?</h4>
                                <p className="text-gray-400 font-space-grotesk leading-relaxed">
                                    Unlike generic agencies, we treat every project as a lifetime partnership. Our pricing reflects our commitment to 24/7 support, rigorous testing, and continuous evolution.
                                </p>
                            </div>
                            <div>
                                <h4 className="text-2xl font-bold font-sora mb-4 text-secondary">Custom Solutions?</h4>
                                <p className="text-gray-400 font-space-grotesk leading-relaxed">
                                    Need something that doesn't fit a tier? We specialize in complex, high-security, and high-scale systems. Contact us for a technical consultation.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Bottom CTA */}
                <section className="py-24">
                    <div className="max-w-4xl mx-auto px-10 text-center">
                        <h2 className="text-3xl font-bold font-sora mb-6">Need a custom quote?</h2>
                        <p className="text-gray-400 mb-10 text-lg">Our architects are ready to design your specific solution.</p>
                        <a href="/contact" className="btn-primary inline-block">
                            Get a Technical Audit
                        </a>
                    </div>
                </section>
            </main>
        </div>
    );
}
