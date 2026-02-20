"use client";

import { useState, useEffect, useCallback } from "react";
import { Search, Phone, Menu, X } from "lucide-react";
import Image from "next/image";
import logo from "../assets/img/logo.png";

const NAV_ITEMS = [
    { label: "Home", href: "#home" },
    { label: "Tours", href: "#tours" },
    { label: "Trekkings", href: "#trekkings" },
    { label: "Festival", href: "#festival" },
    { label: "About Us", href: "#about" },
    { label: "Contact", href: "#contact" },
];

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    const scrollToSection = useCallback((e, href) => {
        e.preventDefault();
        const id = href.replace("#", "");
        const element = document.getElementById(id);

        if (!element) return;

        setIsOpen(false);

        const headerHeight = isScrolled ? 72 : 88;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
        });

        setActiveSection(id);
    }, [isScrolled]);

    const handleScroll = useCallback(() => {
        const scrollY = window.scrollY;
        setIsScrolled(scrollY > 20);

        const headerHeight = scrollY > 20 ? 72 : 88;

        for (const item of NAV_ITEMS) {
            const id = item.href.slice(1);
            const el = document.getElementById(id);
            if (!el) continue;

            const rect = el.getBoundingClientRect();

            if (
                rect.top <= headerHeight + 60 &&
                rect.bottom >= headerHeight + 60
            ) {
                setActiveSection(id);
                break;
            }
        }
    }, []);

    useEffect(() => {
        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [handleScroll]);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (isOpen && !e.target.closest("header")) {
                setIsOpen(false);
            }
        };
        document.addEventListener("click", handleClickOutside);
        return () => document.removeEventListener("click", handleClickOutside);
    }, [isOpen]);

    const linkBase =
        "relative px-1 py-2 text-sm font-medium transition-colors after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:scale-x-0 after:transition-transform hover:after:scale-x-100";

    return (
        <header
            className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${isScrolled
                ? "bg-white/95 backdrop-blur-xl shadow-lg shadow-blue-900/10"
                : "bg-gradient-to-b from-blue-900/90 via-blue-800/70 to-transparent backdrop-blur-md"
                }`}
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between sm:h-20 transition-all">
                    {/* LOGO - Fixed sizing and fit */}
                    <a
                        href="#home"
                        onClick={(e) => scrollToSection(e, "#home")}
                        className="group flex items-center gap-3"
                    >
                        <div className="relative h-12 w-12 rounded-xl overflow-hidden flex items-center justify-center sm:h-14 sm:w-14 bg-white shadow-md">
                            <div className="relative h-10 w-10 sm:h-12 sm:w-12">
                                <Image
                                    src={logo}
                                    alt="Mystic Dragon Logo"
                                    fill
                                    className="object-contain"
                                    priority
                                    sizes="(max-width: 768px) 40px, 48px"
                                />
                            </div>
                        </div>

                        <div>
                            <h1
                                className={`text-xl font-bold tracking-wide transition-colors sm:text-2xl ${isScrolled ? "text-slate-900" : "text-white"
                                    }`}
                            >
                                Mystic
                                <span className="text-blue-400">Dragon</span>
                            </h1>
                            <p
                                className={`text-[10px] font-medium sm:text-xs ${isScrolled ? "text-slate-500" : "text-blue-200"
                                    }`}
                            >
                                • Tours & Travels
                            </p>
                        </div>
                    </a>

                    {/* DESKTOP NAV */}
                    <nav className="hidden lg:flex items-center gap-5 xl:gap-6">
                        {NAV_ITEMS.map(({ label, href }) => {
                            const id = href.slice(1);
                            const active = activeSection === id;

                            return (
                                <a
                                    key={label}
                                    href={href}
                                    onClick={(e) => scrollToSection(e, href)}
                                    className={`${linkBase} ${isScrolled
                                        ? "text-slate-700 hover:text-blue-600 after:bg-gradient-to-r after:from-blue-500 after:to-blue-700"
                                        : "text-white/90 hover:text-white after:bg-white"
                                        } ${active ? "font-semibold" : ""
                                        } text-sm xl:text-base`}
                                >
                                    {label}
                                    {active && (
                                        <span
                                            className={`absolute bottom-0 left-0 right-0 h-0.5 rounded-full ${isScrolled
                                                ? "bg-gradient-to-r from-blue-500 to-blue-700"
                                                : "bg-white"
                                                }`}
                                        />
                                    )}
                                </a>
                            );
                        })}
                    </nav>

                    {/* DESKTOP ACTIONS */}
                    <div className="hidden lg:flex items-center gap-4 xl:gap-6">
                        <button
                            aria-label="Search"
                            className={`rounded-xl p-2 transition ${isScrolled ? "hover:bg-slate-100" : "hover:bg-white/10"
                                }`}
                        >
                            <Search
                                className={`h-5 w-5 ${isScrolled ? "text-slate-600" : "text-white"
                                    }`}
                            />
                        </button>

                        <div
                            className={`hidden xl:flex items-center gap-2 rounded-xl px-4 py-2 backdrop-blur-md border ${isScrolled
                                ? "bg-blue-50 border-blue-200"
                                : "bg-white/20 border-white/30"
                                }`}
                        >
                            <Phone
                                className={`h-4 w-4 ${isScrolled ? "text-blue-600" : "text-white"
                                    }`}
                            />
                            <span
                                className={`text-sm font-medium whitespace-nowrap ${isScrolled ? "text-blue-700" : "text-white"
                                    }`}
                            >
                                +975-17587471
                            </span>
                        </div>

                        <button
                            onClick={(e) => scrollToSection(e, "#contact")}
                            className="relative overflow-hidden rounded-xl bg-gradient-to-r from-blue-500 to-blue-700 px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition hover:scale-105 hover:shadow-xl active:scale-95 xl:px-6 xl:py-3"
                        >
                            CONTACT US
                        </button>
                    </div>

                    {/* MOBILE ACTIONS */}
                    <div className="flex items-center gap-3 lg:hidden">
                        <button
                            aria-label="Search"
                            className={`rounded-xl p-2 transition ${isScrolled ? "text-slate-700" : "text-white"
                                }`}
                        >
                            <Search className="h-5 w-5" />
                        </button>

                        <button
                            aria-label="Toggle menu"
                            onClick={() => setIsOpen((v) => !v)}
                            className={`rounded-xl p-2 transition ${isScrolled ? "text-slate-700" : "text-white"
                                }`}
                        >
                            {isOpen ? (
                                <X className="h-6 w-6" />
                            ) : (
                                <Menu className="h-6 w-6" />
                            )}
                        </button>
                    </div>
                </div>

                {/* MOBILE MENU */}
                <div
                    className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen
                        ? "max-h-[500px] opacity-100 visible"
                        : "max-h-0 opacity-0 invisible"
                        }`}
                >
                    <div className="border-t border-white/20 pt-4 pb-6">
                        <nav className="space-y-1">
                            {NAV_ITEMS.map(({ label, href }) => {
                                const id = href.slice(1);
                                const active = activeSection === id;

                                return (
                                    <a
                                        key={label}
                                        href={href}
                                        onClick={(e) => scrollToSection(e, href)}
                                        className={`flex items-center justify-between rounded-xl px-4 py-3.5 text-base font-medium transition-colors ${isScrolled
                                            ? "text-slate-700 hover:bg-slate-50"
                                            : "text-white hover:bg-white/20"
                                            } ${active
                                                ? isScrolled
                                                    ? "bg-blue-50 text-blue-700"
                                                    : "bg-white/20 text-white"
                                                : ""
                                            }`}
                                    >
                                        {label}
                                        {active && (
                                            <span className="h-2 w-2 rounded-full bg-blue-400" />
                                        )}
                                    </a>
                                );
                            })}
                        </nav>

                        {/* MOBILE CONTACT */}
                        <div className="mt-6 px-4 space-y-4">
                            <div
                                className={`flex items-center gap-3 rounded-xl px-4 py-3 backdrop-blur-md border ${isScrolled
                                    ? "bg-blue-50 border-blue-200"
                                    : "bg-white/20 border-white/30"
                                    }`}
                            >
                                <Phone
                                    className={`h-5 w-5 ${isScrolled ? "text-blue-600" : "text-white"
                                        }`}
                                />
                                <span
                                    className={`font-medium ${isScrolled ? "text-blue-700" : "text-white"
                                        }`}
                                >
                                    +975-17587471
                                </span>
                            </div>

                            <button
                                onClick={(e) => {
                                    scrollToSection(e, "#contact");
                                    setIsOpen(false);
                                }}
                                className="w-full rounded-xl bg-gradient-to-r from-blue-500 to-blue-700 px-6 py-3.5 text-base font-semibold text-white shadow-lg transition hover:shadow-xl active:scale-95"
                            >
                                CONTACT US
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}