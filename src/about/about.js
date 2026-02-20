"use client";

import { useEffect, useRef, useState } from "react";

export default function About() {
    const [particles, setParticles] = useState([]);
    const sectionRef = useRef(null);

    /* Hydration-safe particles */
    useEffect(() => {
        const generated = Array.from({ length: 10 }).map((_, i) => ({
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            duration: `${6 + Math.random() * 4}s`,
            delay: `${i * 0.3}s`,
        }));
        setParticles(generated);
    }, []);

    const highlights = [
        {
            title: "Local Expertise",
            text: "Guided by Bhutanese professionals with deep cultural and historical knowledge.",
            stat: "3+ Years",
            color: "from-blue-500 to-blue-700",
        },
        {
            title: "Sustainable Travel",
            text: "Carbon-neutral journeys that protect Bhutan's pristine environment and traditions.",
            stat: "100% Offset",
            color: "from-blue-400 to-indigo-600",
        },
        {
            title: "Custom Journeys",
            text: "Tailor-made itineraries crafted around your interests and travel pace.",
            stat: "Personalized",
            color: "from-blue-600 to-indigo-700",
        },
        {
            title: "Authentic Experiences",
            text: "Genuine encounters with local communities beyond typical tourist paths.",
            stat: "25+ Villages",
            color: "from-indigo-500 to-blue-600",
        },
    ];

    const stats = [
        { value: "98%", label: "Guest Satisfaction" },
        { value: "2,500+", label: "Travelers Guided" },
        { value: "50+", label: "Local Partnerships" },
        { value: "24/7", label: "Support Available" },
    ];

    return (
        <section
            id="about"
            ref={sectionRef}
            className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-950"
        >
            {/* Ambient Particles */}
            <div className="pointer-events-none absolute inset-0">
                {particles.map((p, i) => (
                    <div
                        key={i}
                        className="absolute h-1 w-1 rounded-full bg-white/20 animate-float"
                        style={{
                            top: p.top,
                            left: p.left,
                            animationDelay: p.delay,
                            animationDuration: p.duration,
                        }}
                    />
                ))}
            </div>

            <div className="relative mx-auto max-w-7xl px-4 py-28 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="mx-auto mb-20 max-w-4xl text-center">
                    <span className="inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs tracking-widest text-white">
                        OUR STORY & MISSION
                    </span>

                    <h2 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                        <span className="text-white">Crafting Himalayan </span>
                        <span className="text-blue-300">
                            Journeys
                        </span>
                    </h2>

                    <p className="mx-auto mt-4 max-w-3xl text-lg leading-relaxed text-blue-100">
                        We are Bhutan's premier travel curator, revealing the kingdom's soul
                        through authentic, sustainable, and transformative experiences.
                    </p>
                </div>

                {/* Story + Highlights */}
                <div className="grid gap-16 lg:grid-cols-2">
                    {/* Story */}
                    <div className="space-y-6 text-blue-100">
                        <p className="text-lg leading-relaxed">
                            Founded in the heart of the Himalayas,{" "}
                            <span className="font-semibold text-white">Mystic Dragon</span>{" "}
                            emerged from a passion to share Bhutan's extraordinary beauty while
                            preserving its timeless traditions.
                        </p>

                        <p className="text-lg leading-relaxed">
                            Our locally-born guides and travel experts have explored every valley,
                            monastery, and mountain pass, creating journeys that reveal Bhutan's
                            living culture with authenticity and respect.
                        </p>

                        <div className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm">
                            <h3 className="mb-3 text-xl font-semibold text-white">
                                Our Philosophy
                            </h3>
                            <p className="text-blue-100">
                                Travel should enrich both visitor and host. Through responsible
                                tourism, we support local communities, preserve cultural heritage,
                                and maintain Bhutan's carbon-negative legacy.
                            </p>
                        </div>

                        {/* Location Badge - Added to fill space */}
                        <div className="flex items-center gap-3 rounded-2xl border border-white/20 bg-white/5 p-4 backdrop-blur-sm">
                            <span className="text-3xl">🏔️</span>
                            <div>
                                <p className="text-sm font-medium text-white">Operating From</p>
                                <p className="text-sm text-blue-200">Babesa, Thimphu, Bhutan</p>
                            </div>
                        </div>
                    </div>

                    {/* Highlights */}
                    <div className="grid gap-6 sm:grid-cols-2">
                        {highlights.map((item) => (
                            <div
                                key={item.title}
                                className="group relative overflow-hidden rounded-2xl border border-white/20 bg-white/95 p-6 shadow-xl transition hover:-translate-y-1 hover:shadow-2xl"
                            >
                                <div
                                    className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition`}
                                />
                                <div className="relative z-10">
                                    <div className="mb-3 flex items-center justify-between">
                                        <h3 className="text-lg font-bold text-gray-900">
                                            {item.title}
                                        </h3>
                                        <span
                                            className={`rounded-full bg-gradient-to-r ${item.color} px-3 py-1 text-xs font-semibold text-white shadow-md`}
                                        >
                                            {item.stat}
                                        </span>
                                    </div>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        {item.text}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Stats */}
                <div className="mt-24 grid gap-8 rounded-3xl border border-white/20 bg-white/10 p-10 backdrop-blur-xl sm:grid-cols-2 lg:grid-cols-4">
                    {stats.map((stat) => (
                        <div key={stat.label} className="text-center">
                            <div className="text-4xl font-bold text-white">
                                {stat.value}
                            </div>
                            <p className="mt-2 text-sm text-blue-200">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Testimonial Quote - Added as replacement for team section */}
                <div className="mt-24 text-center">
                    <div className="mx-auto max-w-3xl rounded-3xl border border-white/20 bg-white/5 p-10 backdrop-blur-sm">
                        <span className="text-6xl text-white/30">"</span>
                        <p className="mt-2 text-xl italic text-white/90">
                            Traveling with Mystic Dragon was transformative. They didn't just show us Bhutan—they helped us feel it.
                        </p>
                        <p className="mt-4 text-sm font-medium text-blue-200">
                            — Sarah Mitchell, USA (Traveler, 2024)
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}