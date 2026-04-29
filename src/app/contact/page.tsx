import React from "react";
import Navbar from "../components/section/Navbar";
import Contact from "../components/section/Contact";
import Stars from "../components/utils/Stars";

export default function ContactPage() {
    return (
        <div className="flex flex-col min-h-screen bg-black text-white">
            <Navbar />
            
            <main className="flex-1 pt-32">
                {/* Minimal Header */}
                <section className="relative pt-20 pb-10 overflow-hidden">
                    <Stars />
                    <div className="max-w-7xl mx-auto px-10 relative z-10 text-center">
                        <span className="px-6 py-2 rounded-full border border-secondary/30 bg-secondary/5 text-secondary text-sm font-semibold mb-8 inline-block shadow-[0_0_15px_rgba(156,254,202,0.1)]">
                            Start a Project
                        </span>
                    </div>
                </section>

                {/* Contact Section (Form + Info) */}
                <Contact />

                {/* FAQ / Trust Section for Contact */}
                <section className="py-24 border-t border-white/5 bg-white/5">
                    <div className="max-w-7xl mx-auto px-10">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                            <div>
                                <h4 className="text-xl font-bold font-sora text-white mb-4">Fast Response</h4>
                                <p className="text-gray-400 font-space-grotesk">Our engineering team reviews all requests and responds within 24 business hours.</p>
                            </div>
                            <div>
                                <h4 className="text-xl font-bold font-sora text-white mb-4">NDAs Included</h4>
                                <p className="text-gray-400 font-space-grotesk">We respect your intellectual property. Mutual NDAs are available upon request.</p>
                            </div>
                            <div>
                                <h4 className="text-xl font-bold font-sora text-white mb-4">Technical Audit</h4>
                                <p className="text-gray-400 font-space-grotesk">Every new inquiry receives a complimentary high-level technical feasibility audit.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Simple Footer Placeholder */}
                <footer className="py-12 border-t border-white/5">
                    <div className="max-w-7xl mx-auto px-10 flex flex-col md:flex-row justify-between items-center gap-6">
                        <p className="text-gray-500 text-sm">© 2026 CipherIT Solutions. All rights reserved.</p>
                        <div className="flex gap-8 text-gray-500 text-sm">
                            <a href="#" className="hover:text-secondary transition-colors">Privacy Policy</a>
                            <a href="#" className="hover:text-secondary transition-colors">Terms of Service</a>
                        </div>
                    </div>
                </footer>
            </main>
        </div>
    );
}
