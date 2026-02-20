'use client';

import { useCallback, useEffect, useRef, useState } from "react";

const BACKGROUNDS = [
    "https://amen-api.flamingoitstudio.net/media/carousel/Discover%20the%20Bhutan.jpg",
];

export default function Hero() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [imageErrors, setImageErrors] = useState({});
    const intervalRef = useRef(null);

    const startAutoSlide = useCallback(() => {
        intervalRef.current = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % BACKGROUNDS.length);
        }, 6000);
    }, []);

    useEffect(() => {
        startAutoSlide();
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [startAutoSlide]);

    const stats = [
        { value: "15+", label: "Years Experience" },
        { value: "98%", label: "Client Satisfaction" },
        { value: "50+", label: "Curated Tours" },
        { value: "4.9★", label: "Average Rating" },
    ];

    return (
        <section
            id="home"
            role="banner"
            aria-label="Hero section"
            className="relative min-h-[100svh] overflow-hidden"
        >
            {/* Background Slideshow */}
            <div className="absolute inset-0">
                {BACKGROUNDS.map((src, index) => {
                    const finalSrc = imageErrors[index] ? BACKGROUNDS[1] : src;

                    return (
                        <img
                            key={src}
                            src={finalSrc}
                            alt="Scenic landscape of Bhutan mountains and monasteries"
                            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${currentSlide === index ? "opacity-100" : "opacity-0"
                                }`}
                            loading={index === 0 ? "eager" : "lazy"}
                            onError={() =>
                                setImageErrors((prev) => ({ ...prev, [index]: true }))
                            }
                        />
                    );
                })}

                {/* Professional Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-950/70 via-blue-950/60 to-indigo-950/70" />
            </div>

            {/* Content */}
            <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
                <div className="flex min-h-[100svh] items-center">
                    <div className="max-w-2xl py-20">
                        {/* Brand Line */}
                        <div className="mb-4 flex items-center gap-3 text-sm tracking-widest text-white/60">
                            <span>Alpine</span>
                            <span className="text-cyan-400">●</span>
                            <span>Odyssey</span>
                            <span className="text-cyan-400">●</span>
                            <span>Bhutan</span>
                        </div>

                        {/* Eyebrow */}
                        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm">
                            <span className="h-2 w-2 rounded-full bg-cyan-400" />
                            <span className="text-xs tracking-widest text-white/70">
                                BHUTAN • TOURS • TREKKINGS • FESTIVALS
                            </span>
                        </div>

                        {/* Heading */}
                        <h1 className="mb-6 leading-tight">
                            <span className="block text-5xl font-bold text-white sm:text-6xl lg:text-7xl">
                                Discover Bhutan
                            </span>
                            <span className="block text-4xl font-light text-cyan-300 sm:text-5xl lg:text-6xl">
                                The Land of the Thunder Dragon
                            </span>
                        </h1>

                        {/* Description */}
                        <p className="mb-8 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
                            Immerse yourself in ancient Himalayan culture, breathtaking
                            landscapes, sacred monasteries, and authentic spiritual journeys
                            across Bhutan’s most iconic destinations.
                        </p>

                        {/* Crypto Payment Trust Badge */}
                        <div className="mb-10 inline-flex items-center gap-3 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-2 backdrop-blur-sm">
                            <span className="h-2 w-2 rounded-full bg-emerald-400" />
                            <span className="text-xs font-medium tracking-wide text-emerald-200">
                                Secure payments accepted via Crypto & Binance Pay
                            </span>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col gap-4 sm:flex-row">
                            <button className="rounded-xl bg-cyan-600 px-8 py-4 text-base font-semibold text-white shadow-lg transition hover:bg-cyan-500">
                                Plan Your Bhutan Journey →
                            </button>

                            <button className="rounded-xl border border-white/20 px-8 py-4 text-base font-semibold text-white/90 backdrop-blur-md transition hover:bg-white/10">
                                Watch Travel Story
                            </button>
                        </div>

                        {/* Stats */}
                        <div className="mt-14 grid grid-cols-2 gap-6 rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm sm:grid-cols-4">
                            {stats.map((stat) => (
                                <div key={stat.label} className="text-center">
                                    <div className="text-2xl font-semibold text-white sm:text-3xl">
                                        {stat.value}
                                    </div>
                                    <p className="mt-1 text-xs text-white/60 sm:text-sm">
                                        {stat.label}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* Scroll Indicator */}
                        <div className="mt-12 flex items-center gap-2 text-xs tracking-wider text-white/50">
                            <span className="animate-bounce">↓</span>
                            Scroll to explore
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
