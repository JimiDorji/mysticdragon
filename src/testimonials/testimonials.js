"use client";

import { useState, useEffect, useRef } from "react";

export default function Testimonials() {
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

    const testimonials = [
        {
            name: "Sarah Thompson",
            country: "United Kingdom",
            quote:
                "Travel Bhutan exceeded every expectation. The guides were incredibly knowledgeable, and every detail was handled with care.",
            avatar:
                "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
            stay: "12-Day Cultural Journey",
            rating: 5,
            highlight: "Exceptional Guide",
            accent: "bg-cyan-500",
        },
        {
            name: "Daniel Müller",
            country: "Germany",
            quote:
                "From monasteries to mountain passes, the experience felt deeply personal and profoundly authentic.",
            avatar:
                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
            stay: "Himalayan Trek Adventure",
            rating: 5,
            highlight: "Life-Changing Trek",
            accent: "bg-emerald-500",
        },
        {
            name: "Aiko Tanaka",
            country: "Japan",
            quote:
                "Every moment was calm, respectful, and beautifully paced. Bhutan felt sacred, not touristic.",
            avatar:
                "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
            stay: "Spiritual Retreat",
            rating: 5,
            highlight: "Deeply Spiritual",
            accent: "bg-purple-500",
        },
        {
            name: "Michael Carter",
            country: "United States",
            quote:
                "An extraordinary journey. Impeccable service, genuine warmth, and unforgettable landscapes.",
            avatar:
                "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80",
            stay: "Luxury Heritage Tour",
            rating: 5,
            highlight: "Unforgettable Luxury",
            accent: "bg-amber-500",
        },
    ];

    const stats = [
        { value: "500+", label: "Happy Travelers" },
        { value: "4.9★", label: "Average Rating" },
        { value: "98%", label: "Would Recommend" },
        { value: "15+", label: "Years Experience" },
    ];

    return (
        <section
            id="testimonials"
            ref={sectionRef}
            className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-blue-950 to-indigo-950 py-28"
        >
            {/* Ambient particles */}
            <div className="pointer-events-none absolute inset-0">
                {particles.map((p, i) => (
                    <div
                        key={i}
                        className="absolute h-1 w-1 rounded-full bg-cyan-400/20 animate-float"
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
                <div className="mx-auto mb-16 max-w-3xl text-center">
                    <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-xs tracking-widest text-cyan-200 backdrop-blur-sm">
                        ✦ GUEST EXPERIENCES
                    </span>

                    <h2 className="mt-8 text-4xl font-semibold tracking-tight sm:text-5xl">
                        <span className="text-white">What Our </span>
                        <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                            Travelers Say
                        </span>
                    </h2>

                    <p className="mt-6 text-lg leading-relaxed text-slate-300">
                        Authentic reflections from guests who explored Bhutan
                        through thoughtfully curated and meaningful journeys.
                    </p>
                </div>

                {/* Stats */}
                <div className="mb-16 grid grid-cols-2 gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm sm:grid-cols-4">
                    {stats.map((stat) => (
                        <div key={stat.label} className="text-center">
                            <div className="text-xl font-bold text-white">
                                {stat.value}
                            </div>
                            <p className="text-xs text-white/60">{stat.label}</p>
                        </div>
                    ))}
                </div>

                {/* Testimonials Grid */}
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {testimonials.map((t) => (
                        <article
                            key={t.name}
                            className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-xl"
                        >
                            {/* Accent top bar */}
                            <div
                                className={`absolute left-0 top-0 h-1 w-full rounded-t-2xl ${t.accent}`}
                            />

                            {/* Quote */}
                            <p className="mb-6 text-sm leading-relaxed text-slate-200">
                                “{t.quote}”
                            </p>

                            {/* Highlight Tag */}
                            <span className="mb-6 inline-block rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-white/80">
                                {t.highlight}
                            </span>

                            {/* Divider */}
                            <div className="my-6 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                            {/* Author Row */}
                            <div className="flex items-center gap-4">
                                {/* Avatar - LEFT */}
                                <img
                                    src={t.avatar}
                                    alt={t.name}
                                    className="h-14 w-14 rounded-xl object-cover ring-1 ring-white/20"
                                />

                                {/* Info - RIGHT */}
                                <div className="flex-1">
                                    <h4 className="text-sm font-semibold text-white">
                                        {t.name}
                                    </h4>
                                    <p className="text-xs text-slate-400">
                                        {t.country}
                                    </p>
                                    <p className="text-xs text-cyan-300 mt-0.5">
                                        {t.stay}
                                    </p>

                                    {/* Stars */}
                                    <div className="mt-2 flex items-center gap-1">
                                        <div className="flex gap-0.5">
                                            {Array.from({ length: 5 }).map((_, i) => (
                                                <svg
                                                    key={i}
                                                    className={`h-4 w-4 ${i < t.rating
                                                        ? "fill-amber-400"
                                                        : "fill-white/20"
                                                        }`}
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 
                                    9.24l-7.19-.61L12 2 9.19 8.63 2 
                                    9.24l5.46 4.73L5.82 21z" />
                                                </svg>
                                            ))}
                                        </div>
                                        <span className="text-[10px] text-white/60">
                                            {t.rating.toFixed(1)}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>


                {/* CTA */}
                <div className="mt-20 text-center">
                    <button className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 px-10 py-4 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-cyan-500/30">
                        <span className="relative z-10">
                            Read More Guest Stories →
                        </span>
                    </button>
                </div>
            </div>
        </section>
    );
}
