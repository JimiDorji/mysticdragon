"use client";

import { useEffect, useState } from "react";

export default function Footer() {
    const currentYear = new Date().getFullYear();
    const [particles, setParticles] = useState([]);

    /* Hydration-safe particles */
    useEffect(() => {
        const generated = Array.from({ length: 10 }).map((_, i) => ({
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            duration: `${5 + Math.random() * 5}s`,
            delay: `${i * 0.4}s`,
        }));
        setParticles(generated);
    }, []);

    const companyLinks = ["About", "Our Story", "Team", "Careers", "Press"];
    const experienceLinks = [
        "Cultural Tours",
        "Trekking",
        "Festivals",
        "Wellness",
        "Custom Travel",
    ];
    const supportLinks = [
        "Contact",
        "FAQ",
        "Booking Guide",
        "Privacy Policy",
        "Terms",
    ];

    const socialLinks = [
        { name: "Instagram", icon: "📷", href: "https://www.instagram.com/mysticdragontoursandtravels" },
        { name: "Facebook", icon: "📘", href: "https://www.facebook.com/mysticdragontoursandtravels" },
        { name: "YouTube", icon: "▶️", href: "#" },
        { name: "LinkedIn", icon: "💼", href: "#" },
        { name: "Twitter", icon: "🐦", href: "#" },
    ];

    return (
        <footer className="relative overflow-hidden bg-gradient-to-b from-blue-950 via-blue-900 to-indigo-950 text-blue-100">
            {/* Background Particles */}
            <div className="pointer-events-none absolute inset-0">
                {particles.map((p, i) => (
                    <div
                        key={i}
                        className="absolute h-1.5 w-1.5 rounded-full bg-white/20 animate-float"
                        style={{
                            top: p.top,
                            left: p.left,
                            animationDelay: p.delay,
                            animationDuration: p.duration,
                        }}
                    />
                ))}
            </div>

            <div className="relative mx-auto max-w-7xl px-6 py-20">
                {/* Top Grid */}
                <div className="grid gap-16 lg:grid-cols-2">
                    {/* Brand */}
                    <div className="space-y-6">
                        <h2 className="text-2xl font-semibold text-white">
                            Mystic Dragon Travel — Your Gateway to Bhutan's Wonders
                        </h2>

                        <p className="max-w-md leading-relaxed text-blue-200">
                            We design immersive and responsible travel experiences in Bhutan,
                            blending cultural depth, natural beauty, and sustainable tourism
                            aligned with the Royal Government of Bhutan.
                        </p>

                        {/* Trust Badge */}
                        <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm border border-white/20">
                            <span className="h-2 w-2 rounded-full bg-white" />
                            <span className="text-xs font-medium text-white/90">
                                Licensed Bhutan Tour Operator
                            </span>
                        </div>
                    </div>

                    {/* Links */}
                    <div className="grid gap-10 sm:grid-cols-3">
                        <FooterColumn title="Company" links={companyLinks} />
                        <FooterColumn title="Experiences" links={experienceLinks} />
                        <FooterColumn title="Support" links={supportLinks} />
                    </div>
                </div>

                {/* Divider */}
                <div className="my-14 h-px w-full bg-gradient-to-r from-transparent via-white/30 to-transparent" />

                {/* Bottom Section */}
                <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
                    {/* Copyright */}
                    <div>
                        <p className="text-sm text-blue-200">
                            © {currentYear} Mystic Dragon — Licensed Bhutan Tour Operator
                        </p>
                    </div>

                    {/* Social */}
                    <div className="flex gap-3">
                        {socialLinks.map((social) => (
                            <a
                                key={social.name}
                                href={social.href}
                                aria-label={social.name}
                                className="rounded-lg border border-white/20 bg-white/5 px-3 py-2 transition hover:scale-110 hover:bg-white/20 hover:border-white/30"
                            >
                                <span className="flex items-center gap-1 text-sm text-white">
                                    <span>{social.icon}</span>
                                    <span className="hidden sm:inline">{social.name}</span>
                                </span>
                            </a>
                        ))}
                    </div>
                </div>

                {/* Contact Cards - Updated with new coordinates */}
                <div className="mt-12 grid gap-4 rounded-xl border border-white/20 bg-white/5 p-6 backdrop-blur-sm sm:grid-cols-3 text-sm">
                    <ContactCard
                        icon="✉️"
                        label="Email"
                        value="mysticdragontoursandtravel26@gmail.com"
                        href="mailto:mysticdragontoursandtravel26@gmail.com"
                    />
                    <ContactCard
                        icon="📞"
                        label="Whatsapp"
                        value="+975 17587471"
                        href="tel:+97517587471"
                    />
                    <ContactCard
                        icon="🏔️"
                        label="Office Location"
                        value="Babesa"
                        sub="Thimphu, Bhutan"
                    />
                </div>

                {/* Compliance */}
                <p className="mt-8 text-center text-xs text-blue-300/60">
                    All travel operations comply with Bhutan's Sustainable Tourism Policy
                    and cultural preservation standards.
                </p>
            </div>
        </footer>
    );
}

/* ---------- Reusable Components ---------- */

function FooterColumn({ title, links }) {
    return (
        <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white">
                {title}
            </h3>
            <ul className="space-y-2 text-sm">
                {links.map((link) => (
                    <li key={link}>
                        <a
                            href="#"
                            className="text-blue-200 transition hover:text-white hover:translate-x-1 inline-block"
                        >
                            {link}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

function ContactCard({ icon, label, value, href, sub }) {
    const content = (
        <>
            <div className="mb-2 text-xl">{icon}</div>
            <div className="text-xs text-blue-300">{label}</div>
            <div className="font-semibold text-white">{value}</div>
            {sub && <div className="text-xs text-blue-300/80">{sub}</div>}
        </>
    );

    return href ? (
        <a
            href={href}
            className="rounded-lg bg-white/10 p-4 text-center transition hover:scale-105 hover:bg-white/20 border border-white/20"
        >
            {content}
        </a>
    ) : (
        <div className="rounded-lg bg-white/10 p-4 text-center border border-white/20">
            {content}
        </div>
    );
}