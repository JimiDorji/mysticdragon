'use client';

import { useCallback, useEffect, useRef, useState } from "react";
import { Mountain, ArrowRight, MapPin } from "lucide-react";

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
        { value: "3+", label: "Years Experience" },
        { value: "98%", label: "Happy Travelers" },
        { value: "50+", label: "Unique Routes" },
        { value: "4.9★", label: "TripAdvisor" },
    ];

    const features = [
        "Certified Local Guides",
        "Carbon Neutral Tours",
        "24/7 Support",
        "Flexible Booking",
    ];

    return (
        <section
            id="home"
            role="banner"
            aria-label="Hero section"
            className="relative min-h-[100svh] overflow-hidden"
        >
            {/* Background Image with Darker Overlay */}
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

                {/* Darker Gradient Overlay for better text visibility */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-blue-800/60 to-blue-900/80" />

                {/* Additional dark overlay at the bottom for stats */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </div>

            {/* Content */}
            <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
                <div className="flex min-h-[100svh] items-center">
                    <div className="max-w-3xl py-20">
                        {/* Brand Pill - More visible */}
                        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-blue-900/90 backdrop-blur-sm shadow-xl border border-blue-300/30 px-3 py-1.5">
                            <Mountain className="h-4 w-4 text-blue-300" />
                            <span className="text-xs font-medium text-white drop-shadow-lg">
                                Mystic Dragon Tours and Travels
                            </span>
                            <MapPin className="h-4 w-4 text-blue-300 ml-2" />
                            <span className="text-xs font-medium text-white drop-shadow-lg">
                                Thimphu, Bhutan
                            </span>
                        </div>

                        {/* Main Heading - Stronger text shadows */}
                        <h1 className="mb-4 leading-tight">
                            <span className="block text-6xl font-bold text-white drop-shadow-2xl sm:text-7xl lg:text-8xl [text-shadow:0_4px_8px_rgba(0,0,0,0.5),0_8px_16px_rgba(0,0,0,0.3)]">
                                Not Just a Trip -
                            </span>
                            <span className="block text-6xl font-bold text-blue-200 drop-shadow-2xl sm:text-7xl lg:text-8xl [text-shadow:0_4px_8px_rgba(0,0,0,0.5),0_8px_16px_rgba(0,0,35,0.7)]">
                                A Life Exprience
                            </span>
                        </h1>

                        {/* Subheading - Better contrast */}
                        <p className="mb-6 max-w-2xl text-xl leading-relaxed text-white sm:text-2xl font-light italic drop-shadow-2xl [text-shadow:0_2px_4px_rgba(0,0,0,0.8)]">
                            step into a world of tradition, happiness, and Himalayan mystique with us
                        </p>

                        {/* Description - Better contrast */}
                        <p className="mb-8 max-w-xl text-base leading-relaxed text-white/95 sm:text-lg drop-shadow-2xl [text-shadow:0_2px_4px_rgba(0,0,0,0.8)]">
                            Experience Bhutan through the eyes of local storytellers.
                            Ancient traditions, untouched landscapes, and genuine encounters
                            await in the last Himalayan kingdom.
                        </p>

                        {/* Feature Pills - More visible */}
                        <div className="mb-8 flex flex-wrap gap-2">
                            {features.map((feature) => (
                                <span
                                    key={feature}
                                    className="rounded-full bg-blue-900/70 backdrop-blur-sm px-3 py-1.5 text-xs font-medium text-white border border-blue-300/40 shadow-xl drop-shadow-lg"
                                >
                                    {feature}
                                </span>
                            ))}
                        </div>

                        {/* CTA Buttons - Uncommented and enhanced */}
                        {/* <div className="flex flex-col gap-4 sm:flex-row">
                            <button className="group rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-4 text-base font-semibold text-white shadow-2xl transition-all hover:scale-105 hover:from-blue-700 hover:to-blue-800 flex items-center justify-center gap-2 shadow-black/30 ring-2 ring-white/20">
                                Start Your Journey
                                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                            </button>

                            <button className="rounded-xl border-2 border-white/80 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20 shadow-2xl shadow-black/30">
                                Watch Film
                            </button>
                        </div> */}

                        {/* Stats - Better contrast */}
                        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4">
                            {stats.map((stat) => (
                                <div
                                    key={stat.label}
                                    className="text-center p-4 rounded-xl bg-black/40 backdrop-blur-md border border-white/30 transition-all hover:bg-black/50 hover:scale-105 shadow-2xl"
                                >
                                    <div className="text-2xl font-bold text-white mb-1 drop-shadow-2xl [text-shadow:0_2px_4px_black]">
                                        {stat.value}
                                    </div>
                                    <p className="text-xs font-medium text-white/90 drop-shadow-lg">
                                        {stat.label}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* Scroll Indicator - Better contrast */}
                        <div className="mt-12 flex items-center gap-2">
                            <span className="text-sm tracking-wider font-medium text-white/90 drop-shadow-2xl [text-shadow:0_2px_4px_black]">
                                Scroll to discover
                            </span>
                            <span className="text-white/90 animate-bounce text-lg drop-shadow-2xl">↓</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Gradient Transition */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        </section>
    );
}