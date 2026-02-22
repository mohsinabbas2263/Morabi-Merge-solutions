"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown, Zap } from "lucide-react";

export default function HeroSection() {
    const heroRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = heroRef.current;
        if (!el) return;
        el.style.opacity = "0";
        el.style.transform = "translateY(20px)";
        setTimeout(() => {
            el.style.transition = "opacity 0.8s ease, transform 0.8s ease";
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        }, 100);
    }, []);

    return (
        <section
            style={{
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                position: "relative",
                overflow: "hidden",
                background: "#0F172A",
                padding: "120px 0 80px",
            }}
        >
            {/* Background grid */}
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    backgroundImage: `
            linear-gradient(rgba(124, 58, 237, 0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(124, 58, 237, 0.04) 1px, transparent 1px)
          `,
                    backgroundSize: "60px 60px",
                    zIndex: 0,
                }}
            />

            {/* Gradient orbs */}
            <div
                className="orb"
                style={{
                    width: "600px",
                    height: "600px",
                    background: "radial-gradient(circle, rgba(124, 58, 237, 0.15) 0%, transparent 70%)",
                    top: "-100px",
                    left: "-100px",
                }}
            />
            <div
                className="orb"
                style={{
                    width: "500px",
                    height: "500px",
                    background: "radial-gradient(circle, rgba(6, 182, 212, 0.1) 0%, transparent 70%)",
                    bottom: "0",
                    right: "-50px",
                }}
            />

            <div
                className="container"
                style={{
                    position: "relative",
                    zIndex: 1,
                    textAlign: "center",
                }}
                ref={heroRef}
            >
                {/* Badge */}
                <div
                    style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "8px",
                        background: "rgba(124, 58, 237, 0.12)",
                        border: "1px solid rgba(124, 58, 237, 0.3)",
                        borderRadius: "100px",
                        padding: "6px 16px 6px 10px",
                        marginBottom: "32px",
                        color: "#A78BFA",
                        fontSize: "13px",
                        fontWeight: 500,
                    }}
                >
                    <Zap size={14} fill="#7C3AED" color="#7C3AED" />
                    Remote • Pakistan-based Software House
                </div>

                {/* Headline */}
                <h1
                    style={{
                        fontSize: "clamp(36px, 7vw, 80px)",
                        fontWeight: 800,
                        lineHeight: 1.1,
                        letterSpacing: "-0.03em",
                        marginBottom: "24px",
                        color: "#F8FAFC",
                        fontFamily: "'Outfit', sans-serif",
                    }}
                >
                    We build modern{" "}
                    <span
                        style={{
                            background: "linear-gradient(135deg, #7C3AED 0%, #06B6D4 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                        }}
                    >
                        websites
                    </span>
                    <br />
                    that perform.
                </h1>

                {/* Subtext */}
                <p
                    style={{
                        fontSize: "clamp(16px, 2.5vw, 20px)",
                        color: "#94A3B8",
                        maxWidth: "600px",
                        margin: "0 auto 40px",
                        lineHeight: 1.7,
                        fontWeight: 400,
                    }}
                >
                    Morabi Merge Solutions — Web Development • UI/UX • Custom Solutions
                </p>

                {/* CTAs */}
                <div
                    style={{
                        display: "flex",
                        gap: "16px",
                        justifyContent: "center",
                        flexWrap: "wrap",
                    }}
                >
                    <Link href="/projects" className="btn-primary" id="hero-view-projects" style={{ padding: "14px 32px", fontSize: "16px" }}>
                        <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                            View Projects <ArrowRight size={16} />
                        </span>
                    </Link>
                    <Link href="/contact" className="btn-secondary" id="hero-contact-us" style={{ padding: "14px 32px", fontSize: "16px" }}>
                        Contact Us
                    </Link>
                </div>

                {/* Stats */}
                <div
                    style={{
                        display: "flex",
                        gap: "48px",
                        justifyContent: "center",
                        marginTop: "72px",
                        flexWrap: "wrap",
                    }}
                >
                    {[
                        { value: "3+", label: "Team Members" },
                        { value: "20+", label: "Projects Built" },
                        { value: "100%", label: "Remote-First" },
                        { value: "5★", label: "Client Rating" },
                    ].map((stat) => (
                        <div key={stat.label} style={{ textAlign: "center" }}>
                            <div
                                style={{
                                    fontSize: "clamp(24px, 4vw, 36px)",
                                    fontWeight: 800,
                                    background: "linear-gradient(135deg, #F8FAFC, #94A3B8)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    backgroundClip: "text",
                                    fontFamily: "'Outfit', sans-serif",
                                    letterSpacing: "-0.02em",
                                }}
                            >
                                {stat.value}
                            </div>
                            <div style={{ color: "#64748B", fontSize: "13px", fontWeight: 500, marginTop: "4px" }}>
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Scroll indicator */}
            <a
                href="#services"
                style={{
                    position: "absolute",
                    bottom: "32px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    color: "#94A3B8",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "8px",
                    textDecoration: "none",
                    fontSize: "12px",
                    animation: "bounce 2s infinite",
                }}
                aria-label="Scroll down"
            >
                <span style={{ letterSpacing: "0.1em", textTransform: "uppercase" }}>Scroll</span>
                <ChevronDown size={16} />
            </a>

            <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(6px); }
        }
      `}</style>
        </section>
    );
}
