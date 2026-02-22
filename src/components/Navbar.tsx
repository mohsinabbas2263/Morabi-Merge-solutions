"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import Logo from "@/components/Logo";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/team", label: "Team" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    return (
        <nav
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                zIndex: 50,
                transition: "all 0.3s ease",
                background: scrolled
                    ? "rgba(15, 23, 42, 0.9)"
                    : "transparent",
                backdropFilter: scrolled ? "blur(20px)" : "none",
                borderBottom: scrolled
                    ? "1px solid rgba(124, 58, 237, 0.15)"
                    : "1px solid transparent",
            }}
        >
            <div
                className="container"
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "14px 24px",
                    maxWidth: "1200px",
                    margin: "0 auto",
                }}
            >
                {/* Logo */}
                <Link
                    href="/"
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        textDecoration: "none",
                    }}
                >
                    <div
                        style={{
                            width: "40px",
                            height: "40px",
                            borderRadius: "10px",
                            overflow: "hidden",
                            background: "rgba(124, 58, 237, 0.15)",
                            border: "1px solid rgba(124, 58, 237, 0.3)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                        }}
                    >
                        <Logo size={32} />
                    </div>
                    <div>
                        <span
                            style={{
                                fontWeight: 700,
                                fontSize: "15px",
                                color: "#F8FAFC",
                                display: "block",
                                lineHeight: 1.2,
                                fontFamily: "'Outfit', sans-serif",
                                letterSpacing: "-0.02em",
                            }}
                        >
                            Morabi Merge
                        </span>
                        <span
                            style={{
                                fontSize: "11px",
                                color: "#94A3B8",
                                letterSpacing: "0.08em",
                                textTransform: "uppercase",
                                fontWeight: 500,
                            }}
                        >
                            Solutions
                        </span>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "4px",
                    }}
                    className="desktop-nav"
                >
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            style={{
                                padding: "8px 16px",
                                borderRadius: "8px",
                                fontSize: "14px",
                                fontWeight: 500,
                                color: pathname === link.href ? "#F8FAFC" : "#94A3B8",
                                background:
                                    pathname === link.href
                                        ? "rgba(124, 58, 237, 0.15)"
                                        : "transparent",
                                textDecoration: "none",
                                transition: "all 0.2s ease",
                                border:
                                    pathname === link.href
                                        ? "1px solid rgba(124, 58, 237, 0.3)"
                                        : "1px solid transparent",
                            }}
                            onMouseEnter={(e) => {
                                if (pathname !== link.href) {
                                    (e.target as HTMLElement).style.color = "#F8FAFC";
                                    (e.target as HTMLElement).style.background =
                                        "rgba(124, 58, 237, 0.08)";
                                }
                            }}
                            onMouseLeave={(e) => {
                                if (pathname !== link.href) {
                                    (e.target as HTMLElement).style.color = "#94A3B8";
                                    (e.target as HTMLElement).style.background = "transparent";
                                }
                            }}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                {/* CTA + Mobile toggle */}
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <Link href="/contact" className="btn-primary desktop-cta" style={{ padding: "10px 20px", fontSize: "14px" }}>
                        <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                            Start a Project <ArrowRight size={14} />
                        </span>
                    </Link>

                    {/* Mobile toggle */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="mobile-menu-btn"
                        style={{
                            background: "rgba(124, 58, 237, 0.15)",
                            border: "1px solid rgba(124, 58, 237, 0.3)",
                            borderRadius: "8px",
                            padding: "8px",
                            color: "#F8FAFC",
                            cursor: "pointer",
                            display: "none",
                        }}
                        aria-label="Toggle menu"
                        id="mobile-menu-toggle"
                    >
                        {isOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div
                    style={{
                        background: "rgba(15, 23, 42, 0.98)",
                        backdropFilter: "blur(20px)",
                        borderTop: "1px solid rgba(124, 58, 237, 0.15)",
                        padding: "16px 24px 24px",
                    }}
                >
                    <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                style={{
                                    padding: "12px 16px",
                                    borderRadius: "10px",
                                    fontSize: "15px",
                                    fontWeight: 500,
                                    color: pathname === link.href ? "#F8FAFC" : "#94A3B8",
                                    background:
                                        pathname === link.href
                                            ? "rgba(124, 58, 237, 0.15)"
                                            : "transparent",
                                    textDecoration: "none",
                                    border:
                                        pathname === link.href
                                            ? "1px solid rgba(124, 58, 237, 0.3)"
                                            : "1px solid transparent",
                                }}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Link
                            href="/contact"
                            className="btn-primary"
                            style={{ marginTop: "12px", justifyContent: "center" }}
                        >
                            <span>Start a Project</span>
                        </Link>
                    </div>
                </div>
            )}

            <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
          .desktop-cta { display: none !important; }
        }
      `}</style>
        </nav>
    );
}
