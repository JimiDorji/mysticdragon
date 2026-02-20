"use client";

import { useRef, useState, useEffect } from "react";

export default function Contact() {
    const sectionRef = useRef(null);
    const [particles, setParticles] = useState([]);

    /* Hydration-safe particles */
    useEffect(() => {
        const generated = Array.from({ length: 14 }).map((_, i) => ({
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            delay: `${i * 0.3}s`,
            duration: `${4 + Math.random() * 4}s`,
        }));
        setParticles(generated);
    }, []);

    /* Scoped intersection observer */
    useEffect(() => {
        if (!sectionRef.current) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) entry.target.classList.add("in-view");
                });
            },
            { threshold: 0.1 }
        );

        sectionRef.current
            .querySelectorAll(".animate-on-scroll")
            .forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    const contactInfo = [
        { icon: "📍", label: "Address", value: "Olakha, Thimphu, Bhutan" },
        { icon: "✉️", label: "Email", value: "info@mysticdragon.com" },
        { icon: "☎️", label: "Phone", value: "+975 17587471" },
        { icon: "🕘", label: "Business Hours", value: "9:00 AM – 5:00 PM (BST)" },
    ];

    return (
        <section
            ref={sectionRef}
            id="contact"
            className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-950 py-32"
        >
            {/* Background Particles */}
            <div className="pointer-events-none absolute inset-0">
                {particles.map((p, i) => (
                    <div
                        key={i}
                        className="absolute h-1.5 w-1.5 rounded-full bg-white/30 animate-float"
                        style={{
                            top: p.top,
                            left: p.left,
                            animationDelay: p.delay,
                            animationDuration: p.duration,
                        }}
                    />
                ))}
            </div>

            <div className="relative mx-auto max-w-7xl px-6">
                {/* Header */}
                <header className="mx-auto mb-20 max-w-4xl text-center">
                    <span className="inline-block rounded-full border border-white/20 bg-white/10 px-5 py-2 text-xs tracking-widest text-white backdrop-blur">
                        GET IN TOUCH
                    </span>

                    <h2 className="mt-6 text-5xl font-bold tracking-tight text-white sm:text-6xl">
                        Start Your Himalayan Journey
                    </h2>

                    <p className="mt-6 text-lg text-blue-100 max-w-2xl mx-auto">
                        Connect with our Bhutan travel specialists for bespoke itineraries
                        and personalized service tailored to your interests.
                    </p>
                </header>

                <div className="grid gap-16 lg:grid-cols-2">
                    {/* CONTACT INFO CARDS */}
                    <div className="space-y-8">
                        <div className="grid gap-6 sm:grid-cols-2">
                            {contactInfo.map((info, index) => (
                                <div
                                    key={index}
                                    className="rounded-2xl bg-white/10 p-6 backdrop-blur-md border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105"
                                >
                                    <div className="text-3xl mb-3">{info.icon}</div>
                                    <h4 className="text-sm font-medium text-blue-200 mb-1">
                                        {info.label}
                                    </h4>
                                    <p className="text-white font-semibold">{info.value}</p>
                                </div>
                            ))}
                        </div>

                        {/* Business Hours Note */}
                        <div className="rounded-2xl bg-gradient-to-r from-blue-600/20 to-indigo-600/20 p-6 backdrop-blur-md border border-white/20">
                            <h4 className="text-lg font-semibold text-white mb-2">
                                Quick Response Guarantee
                            </h4>
                            <p className="text-blue-100 text-sm">
                                We respond to all inquiries within 4 business hours.
                                For urgent matters, please call us directly.
                            </p>
                        </div>
                    </div>

                    {/* MAP */}
                    <div className="space-y-6">
                        <div className="rounded-3xl bg-white/5 p-4 backdrop-blur-xl border border-white/20">
                            <iframe
                                title="Bhutan Office Map"
                                src="https://www.google.com/maps?q=Thimphu,Bhutan&output=embed"
                                className="h-96 w-full rounded-2xl border-0 shadow-xl"
                                loading="lazy"
                                allowFullScreen
                            />
                        </div>

                        {/* Map Attribution */}
                        <p className="text-center text-xs text-blue-300/60">
                            Mystic Dragon Tours & Travels • Olakha, Thimphu, Bhutan
                        </p>
                    </div>
                </div>

                {/* Footer */}
                <footer className="mt-20 text-center">
                    <div className="inline-flex items-center gap-2 text-sm text-white/80">
                        <span>✦</span>
                        We're here to help you plan your perfect Bhutan adventure
                        <span>✦</span>
                    </div>
                </footer>
            </div>
        </section>
    );
}