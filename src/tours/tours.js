"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import { Star, Users, Calendar, ChevronRight } from "lucide-react";

/* -------------------------------------------------------------------------- */
/*                                   DATA                                     */
/* -------------------------------------------------------------------------- */

const CATEGORIES = [
    { id: "all", label: "All Journeys" },
    { id: "cultural", label: "Cultural" },
    { id: "nature", label: "Nature" },
    { id: "luxury", label: "Luxury" },
    { id: "adventure", label: "Adventure" },
    { id: "spiritual", label: "Spiritual" },
    { id: "festival", label: "Festival" },
];

const TOURS = [
    {
        title: "Bhutan Cultural Discovery",
        image:
            "https://amen-api.flamingoitstudio.net/media/package/banner/thimphu-festivals.jpg",
        duration: "7 Days",
        rating: 4.9,
        travelers: "12 Guests",
        category: "cultural",
        tag: "Signature Journey",
        highlights: ["Tiger's Nest", "Punakha Dzong", "Village Life"],
    },
    {
        title: "Himalayan Nature Escape",
        image:
            "https://amen-api.flamingoitstudio.net/media/featured/unique-bhutan-tour.jpg",
        duration: "8 Days",
        rating: 4.7,
        travelers: "6 Guests",
        category: "nature",
        tag: "Nature Focused",
        highlights: ["Forest Trails", "Wildlife", "Hot Stone Baths"],
    },
    {
        title: "Luxury Bhutan Retreat",
        image:
            "https://amen-api.flamingoitstudio.net/media/package/banner/incredible-bhutan.jpg",
        duration: "9 Days",
        rating: 5.0,
        travelers: "4 Guests",
        category: "luxury",
        tag: "Ultra Luxury",
        highlights: ["Private Lodges", "Helicopter Views", "Personal Hosts"],
    },
    {
        title: "Himalayan Adventure Trek",
        image:
            "https://amen-api.flamingoitstudio.net/media/package/banner/jomolhari-trek.jpg",
        duration: "14 Days",
        rating: 4.8,
        travelers: "8 Guests",
        category: "adventure",
        tag: "Expedition",
        highlights: ["High Passes", "Remote Camps", "Expert Guides"],
    },
    {
        title: "Bhutan Festival Experience",
        image:
            "https://amen-api.flamingoitstudio.net/media/package/banner/punakha-festival.jpg",
        duration: "10 Days",
        rating: 4.9,
        travelers: "10 Guests",
        category: "festival",
        tag: "Festival Special",
        highlights: ["Paro Tshechu", "Masked Dances", "Monastery Blessings"],
    },
    {
        title: "Spiritual Bhutan Journey",
        image:
            "https://amen-api.flamingoitstudio.net/media/package/banner/pilgrimage-tour.jpg",
        duration: "8 Days",
        rating: 4.8,
        travelers: "6 Guests",
        category: "spiritual",
        tag: "Mindful Travel",
        highlights: ["Meditation Retreats", "Sacred Monasteries", "Local Rituals"],
    },
    {
        title: "Eastern Bhutan Explorer",
        image:
            "https://amen-api.flamingoitstudio.net/media/package/banner/10-days-merak-sakteng-trek.jpg",
        duration: "12 Days",
        rating: 4.7,
        travelers: "8 Guests",
        category: "adventure",
        tag: "Off The Beaten Path",
        highlights: ["Remote Valleys", "Nomadic Culture", "Untouched Landscapes"],
    },
    {
        title: "Bhutan Honeymoon Escape",
        image:
            "https://amen-api.flamingoitstudio.net/media/package/banner/perfect-bhutan-tour.jpg",
        duration: "7 Days",
        rating: 5.0,
        travelers: "2 Guests",
        category: "luxury",
        tag: "Romantic Luxury",
        highlights: ["Private Villas", "Couples Spa", "Sunset Dzongs"],
    },
    {
        title: "Wildlife & Birding Expedition",
        image:
            "https://amen-api.flamingoitstudio.net/media/package/banner/bird-watching-in-bhutan.jpg",
        duration: "11 Days",
        rating: 4.6,
        travelers: "6 Guests",
        category: "nature",
        tag: "Eco Expedition",
        highlights: ["Black-Necked Cranes", "National Parks", "Expert Naturalists"],
    },
    {
        title: "Dagala Thousand Lakes Trek",
        image:
            "https://amen-api.flamingoitstudio.net/media/package/banner/dagala-trek.jpg",
        duration: "6 Days",
        rating: 4.7,
        travelers: "8 Guests",
        category: "adventure",
        tag: "Scenic Trek",
        highlights: ["Alpine Lakes", "Panoramic Peaks", "Highland Camps"],
    },
    {
        title: "Bhutan Mountain Biking Adventure",
        image:
            "https://amen-api.flamingoitstudio.net/media/package/banner/biking-in-bhutan.jpg",
        duration: "9 Days",
        rating: 4.9,
        travelers: "6 Guests",
        category: "adventure",
        tag: "Cycling Expedition",
        highlights: [
            "Himalayan Trails",
            "Highland Pass Rides",
            "Village Cycling Routes",
        ],
    },
];

/* -------------------------------------------------------------------------- */
/*                                   COMPONENT                                */
/* -------------------------------------------------------------------------- */

export default function Tours() {
    const [activeCategory, setActiveCategory] = useState("all");
    const [visibleCount, setVisibleCount] = useState(6);
    const [hoveredCard, setHoveredCard] = useState(null);
    const [particles, setParticles] = useState([]);
    const sectionRef = useRef(null);

    /* Hydration-safe particle generation */
    useEffect(() => {
        const generated = Array.from({ length: 12 }).map((_, i) => ({
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            duration: `${6 + Math.random() * 4}s`,
            delay: `${i * 0.3}s`,
        }));
        setParticles(generated);
    }, []);

    const filteredTours = useMemo(() => {
        return activeCategory === "all"
            ? TOURS
            : TOURS.filter((tour) => tour.category === activeCategory);
    }, [activeCategory]);

    const visibleTours = filteredTours.slice(0, visibleCount);

    return (
        <section
            id="tours"
            ref={sectionRef}
            className="relative overflow-hidden bg-gradient-to-b from-blue-950 via-blue-900 to-indigo-950 py-24"
        >
            {/* Background particles */}
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

            <div className="relative mx-auto max-w-7xl px-6">
                {/* Header */}
                <header className="mx-auto mb-16 max-w-3xl text-center">
                    <span className="inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs tracking-widest text-white">
                        CURATED JOURNEYS
                    </span>

                    <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                        Explore <span className="text-blue-300">Bhutan</span>
                    </h2>

                    <p className="mt-3 text-base leading-relaxed text-blue-100">
                        Thoughtfully designed journeys shaped by culture, nature,
                        spirituality, and authentic Bhutanese experiences.
                    </p>
                </header>

                {/* Category Filters */}
                <div className="mb-12 flex flex-wrap justify-center gap-3">
                    {CATEGORIES.map((cat) => {
                        const isActive = activeCategory === cat.id;
                        return (
                            <button
                                key={cat.id}
                                onClick={() => {
                                    setActiveCategory(cat.id);
                                    setVisibleCount(6);
                                }}
                                className={`rounded-full px-5 py-2 text-sm font-medium transition ${isActive
                                    ? "bg-white text-blue-900 shadow-lg"
                                    : "bg-white/10 text-white/80 hover:bg-white/20"
                                    }`}
                            >
                                {cat.label}
                            </button>
                        );
                    })}
                </div>

                {/* Tours Grid */}
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {visibleTours.map((tour) => {
                        const isHovered = hoveredCard === tour.title;

                        return (
                            <article
                                key={tour.title}
                                onMouseEnter={() => setHoveredCard(tour.title)}
                                onMouseLeave={() => setHoveredCard(null)}
                                className="group overflow-hidden rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:bg-white/15 hover:shadow-xl"
                            >
                                {/* Image - Fixed visibility */}
                                <div className="relative h-52 overflow-hidden">
                                    <img
                                        src={tour.image}
                                        alt={tour.title}
                                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        loading="lazy"
                                    />
                                    {/* Very subtle gradient at the bottom only for text readability */}
                                    <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-blue-900/60 to-transparent" />

                                    {/* Tag - Made more visible */}
                                    <span className="absolute top-3 right-3 rounded-full bg-blue-900/80 backdrop-blur-sm px-3 py-1 text-xs font-medium text-white border border-white/30 shadow-lg">
                                        {tour.tag}
                                    </span>
                                </div>

                                {/* Content */}
                                <div className="p-5">
                                    <h3 className="mb-2 text-lg font-semibold text-white">
                                        {tour.title}
                                    </h3>

                                    {/* Meta */}
                                    <div className="mb-3 flex items-center gap-4 text-xs text-blue-200">
                                        <span className="flex items-center gap-1">
                                            <Calendar className="h-3 w-3" />
                                            {tour.duration}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <Users className="h-3 w-3" />
                                            {tour.travelers}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <Star className="h-3 w-3 text-yellow-300" />
                                            {tour.rating}
                                        </span>
                                    </div>

                                    {/* Highlights */}
                                    <div className="mb-4 flex flex-wrap gap-2">
                                        {tour.highlights.map((h) => (
                                            <span
                                                key={h}
                                                className="rounded-full bg-white/10 px-2 py-0.5 text-[10px] text-blue-100"
                                            >
                                                {h}
                                            </span>
                                        ))}
                                    </div>

                                    {/* CTA */}
                                    <button className="inline-flex items-center gap-1 text-sm font-medium text-white transition hover:text-blue-200">
                                        View Journey
                                        <ChevronRight
                                            className={`h-4 w-4 transition-transform ${isHovered ? "translate-x-1" : ""
                                                }`}
                                        />
                                    </button>
                                </div>
                            </article>
                        );
                    })}
                </div>

                {/* View More Button */}
                {visibleCount < filteredTours.length && (
                    <div className="mt-14 text-center">
                        <button
                            onClick={() => setVisibleCount((prev) => prev + 6)}
                            className="rounded-full bg-white px-8 py-3 text-sm font-semibold text-blue-900 transition hover:bg-blue-50 hover:scale-105 shadow-lg shadow-white/20"
                        >
                            View More Journeys
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}