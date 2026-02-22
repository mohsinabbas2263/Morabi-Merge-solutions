"use client";

import { useState } from "react";
import Link from "next/link";
import {
    Code2,
    Palette,
    FileText,
    ShoppingBag,
    LayoutDashboard,
    Wrench,
    ArrowRight,
    CheckCircle2,
} from "lucide-react";

const services = [
    {
        icon: <Code2 size={28} />,
        title: "Web Development",
        tagline: "Full-stack. Production-ready. Fast.",
        description:
            "We build robust, scalable web applications using Next.js, React, Node.js, and modern ORMs. From MVPs to complex platforms.",
        features: [
            "Next.js / React applications",
            "REST & GraphQL APIs",
            "Database architecture",
            "Authentication & security",
            "Performance optimization",
            "Deployment & CI/CD",
        ],
        color: "#7C3AED",
        price: "From $500",
    },
    {
        icon: <Palette size={28} />,
        title: "UI/UX Design",
        tagline: "Pixels with purpose.",
        description:
            "From wireframes to polished high-fidelity designs. We design interfaces that feel intuitive, modern, and on-brand.",
        features: [
            "User research & personas",
            "Wireframes & prototypes",
            "Design systems",
            "Figma files delivered",
            "Responsive mobile design",
            "Accessibility compliance",
        ],
        color: "#06B6D4",
        price: "From $300",
    },
    {
        icon: <FileText size={28} />,
        title: "Landing Pages",
        tagline: "First impressions, optimized.",
        description:
            "High-converting landing pages with fast load times, strong copy structure, and SEO foundations built in.",
        features: [
            "Single-page design",
            "Copywriting support",
            "SEO foundations",
            "Analytics integration",
            "A/B testing ready",
            "Fast delivery (48–72hrs)",
        ],
        color: "#8B5CF6",
        price: "From $200",
    },
    {
        icon: <ShoppingBag size={28} />,
        title: "E-commerce",
        tagline: "Shops that sell.",
        description:
            "Shopify & WooCommerce stores, custom carts, payment gateway integration, and product management systems.",
        features: [
            "Shopify / WooCommerce",
            "Custom cart & checkout",
            "Payment integrations",
            "Product management",
            "Inventory tracking",
            "Order notifications",
        ],
        color: "#F59E0B",
        price: "From $700",
    },
    {
        icon: <LayoutDashboard size={28} />,
        title: "Custom Dashboards",
        tagline: "Data visible. Decisions faster.",
        description:
            "Admin panels, analytics dashboards, and internal tools built to your exact workflow. Charts, tables, role-based access.",
        features: [
            "Real-time data charts",
            "Data tables & exports",
            "Role-based access",
            "Dark/light mode",
            "API integrations",
            "Mobile responsive",
        ],
        color: "#10B981",
        price: "From $600",
    },
    {
        icon: <Wrench size={28} />,
        title: "Maintenance & Optimization",
        tagline: "Ongoing. Reliable. Transparent.",
        description:
            "Bug fixes, performance audits, security updates, and feature improvements. We keep your site healthy.",
        features: [
            "Bug fixes & hotfixes",
            "Performance audits",
            "SEO improvements",
            "Security updates",
            "Feature additions",
            "Monthly reports",
        ],
        color: "#94A3B8",
        price: "From $150/mo",
    },
];

export default function ServicesPage() {
    const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

    return (
        <div style={{ minHeight: "100vh", background: "#0F172A", paddingTop: "100px" }}>
            {/* Header */}
            <div
                style={{
                    background: "linear-gradient(180deg, #111827 0%, #0F172A 100%)",
                    padding: "80px 0 60px",
                    position: "relative",
                    overflow: "hidden",
                }}
            >
                <div className="orb" style={{ width: "500px", height: "400px", background: "rgba(124, 58, 237, 0.09)", top: "-100px", left: "0" }} />
                <div className="orb" style={{ width: "400px", height: "300px", background: "rgba(6, 182, 212, 0.05)", bottom: "0", right: "0" }} />

                <div className="container" style={{ textAlign: "center", position: "relative", zIndex: 1 }}>
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
                        What We Offer
                    </div>
                    <h1
                        style={{
                            fontSize: "clamp(32px, 6vw, 60px)",
                            fontWeight: 800,
                            color: "#F8FAFC",
                            letterSpacing: "-0.03em",
                            fontFamily: "'Outfit', sans-serif",
                            lineHeight: 1.1,
                            marginBottom: "16px",
                        }}
                    >
                        Our{" "}
                        <span
                            style={{
                                background: "linear-gradient(135deg, #7C3AED, #06B6D4)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                            }}
                        >
                            Services
                        </span>
                    </h1>
                    <p
                        style={{
                            color: "#94A3B8",
                            fontSize: "17px",
                            maxWidth: "520px",
                            margin: "0 auto",
                            lineHeight: 1.7,
                        }}
                    >
                        Transparent pricing, quality output, no surprises.
                    </p>
                </div>
            </div>

            {/* Services grid */}
            <div className="container" style={{ paddingTop: "60px", paddingBottom: "100px" }}>
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
                        gap: "28px",
                    }}
                >
                    {services.map((service, idx) => (
                        <div
                            key={service.title}
                            className="card"
                            style={{
                                padding: "36px",
                                display: "flex",
                                flexDirection: "column",
                                gap: "20px",
                                transition: "all 0.3s ease",
                                position: "relative",
                                overflow: "hidden",
                                ...(hoveredIdx === idx
                                    ? {
                                        borderColor: `${service.color}50`,
                                        transform: "translateY(-4px)",
                                        boxShadow: `0 20px 40px rgba(0,0,0,0.3), 0 0 30px ${service.color}15`,
                                    }
                                    : {}),
                            }}
                            onMouseEnter={() => setHoveredIdx(idx)}
                            onMouseLeave={() => setHoveredIdx(null)}
                            id={`service-detail-${idx}`}
                        >
                            {/* Top accent bar */}
                            <div
                                style={{
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    height: "2px",
                                    background: `linear-gradient(90deg, transparent, ${service.color}, transparent)`,
                                    opacity: hoveredIdx === idx ? 1 : 0,
                                    transition: "opacity 0.3s",
                                }}
                            />

                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                                <div
                                    style={{
                                        width: "56px",
                                        height: "56px",
                                        borderRadius: "16px",
                                        background: `${service.color}15`,
                                        border: `1px solid ${service.color}30`,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        color: service.color,
                                        transition: "all 0.3s ease",
                                        ...(hoveredIdx === idx ? { background: `${service.color}22`, boxShadow: `0 0 20px ${service.color}30` } : {}),
                                    }}
                                >
                                    {service.icon}
                                </div>
                                <span
                                    style={{
                                        fontSize: "13px",
                                        color: service.color,
                                        fontWeight: 700,
                                        background: `${service.color}12`,
                                        border: `1px solid ${service.color}25`,
                                        borderRadius: "8px",
                                        padding: "4px 12px",
                                    }}
                                >
                                    {service.price}
                                </span>
                            </div>

                            <div>
                                <div style={{ color: "#64748B", fontSize: "11px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "6px" }}>
                                    {service.tagline}
                                </div>
                                <h3
                                    style={{
                                        color: "#F8FAFC",
                                        fontWeight: 700,
                                        fontSize: "20px",
                                        letterSpacing: "-0.02em",
                                        fontFamily: "'Outfit', sans-serif",
                                        marginBottom: "12px",
                                    }}
                                >
                                    {service.title}
                                </h3>
                                <p style={{ color: "#94A3B8", fontSize: "14px", lineHeight: 1.7 }}>
                                    {service.description}
                                </p>
                            </div>

                            <ul style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                                {service.features.map((feature) => (
                                    <li
                                        key={feature}
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "10px",
                                            color: "#CBD5E1",
                                            fontSize: "13px",
                                        }}
                                    >
                                        <CheckCircle2 size={14} color={service.color} style={{ flexShrink: 0 }} />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <Link
                                href="/contact"
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "6px",
                                    color: service.color,
                                    fontSize: "13px",
                                    fontWeight: 600,
                                    textDecoration: "none",
                                    marginTop: "4px",
                                    transition: "gap 0.2s",
                                }}
                                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.gap = "10px"; }}
                                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.gap = "6px"; }}
                            >
                                Get a quote <ArrowRight size={14} />
                            </Link>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div
                    style={{
                        marginTop: "80px",
                        background: "linear-gradient(135deg, rgba(124, 58, 237, 0.12), rgba(6, 182, 212, 0.06))",
                        border: "1px solid rgba(124, 58, 237, 0.2)",
                        borderRadius: "20px",
                        padding: "56px 48px",
                        textAlign: "center",
                    }}
                >
                    <h2
                        style={{
                            color: "#F8FAFC",
                            fontSize: "28px",
                            fontWeight: 800,
                            fontFamily: "'Outfit', sans-serif",
                            marginBottom: "12px",
                            letterSpacing: "-0.02em",
                        }}
                    >
                        Not sure what you need?
                    </h2>
                    <p style={{ color: "#94A3B8", fontSize: "16px", marginBottom: "28px" }}>
                        Just drop us a message and we&apos;ll figure it out together.
                    </p>
                    <Link href="/contact" className="btn-primary" id="services-cta">
                        <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                            Talk to us <ArrowRight size={16} />
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    );
}
