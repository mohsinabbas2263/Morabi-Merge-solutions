"use client";

import { Quote } from "lucide-react";

const testimonials = [
    {
        name: "Ahmad Raza",
        role: "Founder, TechStartup PK",
        review:
            "Morabi Merge delivered our SaaS platform in record time. The code quality was exceptional and the design blew our expectations. Highly recommend.",
        avatar: "AR",
        stars: 5,
    },
    {
        name: "Sara Ali",
        role: "E-commerce Entrepreneur",
        review:
            "They built our Shopify store from scratch — clean, fast, and exactly what we wanted. Great communication throughout the project.",
        avatar: "SA",
        stars: 5,
    },
    {
        name: "Usman Khalid",
        role: "CEO, DigitalEdge Agency",
        review:
            "I've worked with many dev teams. Morabi Merge Solutions is top-tier — they actually care about the end product. Will work with them again.",
        avatar: "UK",
        stars: 5,
    },
];

export default function Testimonials() {
    return (
        <section
            className="section"
            style={{
                background: "linear-gradient(180deg, #0F172A 0%, #111827 100%)",
                position: "relative",
                overflow: "hidden",
            }}
        >
            <div
                className="orb"
                style={{
                    width: "400px",
                    height: "400px",
                    background: "rgba(124, 58, 237, 0.06)",
                    top: "-100px",
                    left: "-100px",
                }}
            />

            <div className="container" style={{ position: "relative", zIndex: 1 }}>
                <div style={{ textAlign: "center", marginBottom: "64px" }}>
                    <div
                        style={{
                            display: "inline-flex",
                            background: "rgba(124, 58, 237, 0.1)",
                            border: "1px solid rgba(124, 58, 237, 0.25)",
                            borderRadius: "100px",
                            padding: "4px 14px",
                            marginBottom: "16px",
                            color: "#A78BFA",
                            fontSize: "12px",
                            fontWeight: 600,
                            letterSpacing: "0.08em",
                            textTransform: "uppercase",
                        }}
                    >
                        Testimonials
                    </div>
                    <h2
                        style={{
                            fontSize: "clamp(28px, 5vw, 48px)",
                            fontWeight: 800,
                            color: "#F8FAFC",
                            letterSpacing: "-0.03em",
                            fontFamily: "'Outfit', sans-serif",
                        }}
                    >
                        What clients{" "}
                        <span
                            style={{
                                background: "linear-gradient(135deg, #7C3AED, #06B6D4)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                            }}
                        >
                            say
                        </span>
                    </h2>
                </div>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                        gap: "24px",
                    }}
                >
                    {testimonials.map((t) => (
                        <div
                            key={t.name}
                            className="card"
                            style={{ padding: "32px", display: "flex", flexDirection: "column", gap: "20px" }}
                        >
                            <Quote size={28} color="#7C3AED" opacity={0.6} />

                            <p
                                style={{
                                    color: "#CBD5E1",
                                    fontSize: "15px",
                                    lineHeight: 1.7,
                                    flex: 1,
                                    fontStyle: "italic",
                                }}
                            >
                                &ldquo;{t.review}&rdquo;
                            </p>

                            {/* Stars */}
                            <div style={{ display: "flex", gap: "3px" }}>
                                {[...Array(t.stars)].map((_, i) => (
                                    <span key={i} style={{ color: "#F59E0B", fontSize: "14px" }}>⭐</span>
                                ))}
                            </div>

                            {/* Author */}
                            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                                <div
                                    style={{
                                        width: "44px",
                                        height: "44px",
                                        borderRadius: "50%",
                                        background: "linear-gradient(135deg, #7C3AED, #06B6D4)",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        color: "#F8FAFC",
                                        fontWeight: 700,
                                        fontSize: "14px",
                                        flexShrink: 0,
                                    }}
                                >
                                    {t.avatar}
                                </div>
                                <div>
                                    <div style={{ color: "#F8FAFC", fontWeight: 600, fontSize: "14px" }}>
                                        {t.name}
                                    </div>
                                    <div style={{ color: "#94A3B8", fontSize: "12px" }}>{t.role}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
