import React from "react";
import Navbar from "../components/section/Navbar";
import Services from "../components/section/Services";
import Stars from "../components/utils/Stars";

export default function ServicesPage() {
    return (
        <div className="flex flex-col min-h-screen bg-black">
            <Navbar />

            <main className="flex-1 pt-32">
                {/* Dedicated Page Header */}
                <section className="relative py-20 overflow-hidden">
                    <Stars />


                    {/* Background decoration */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(50%_50%_at_50%_0%,rgba(156,254,202,0.1)_0%,transparent_100%)] pointer-events-none" />
                </section>

                {/* Reusing the Services Grid Component */}
                <Services />

                {/* Bottom CTA for the page */}
                <section className="py-24 border-t border-white/5">
                    <div className="max-w-4xl mx-auto px-10 text-center">
                        <h2 className="text-3xl font-bold font-sora mb-6">Ready to experience these services?</h2>
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
