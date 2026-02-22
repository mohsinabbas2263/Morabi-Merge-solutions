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
} from "lucide-react";

const services = [
    {
        icon: <Code2 size={24} />,
        title: "Web Development",
        description:
            "Full-stack web applications built with modern frameworks like Next.js, React, and Node.js.",
        color: "#7C3AED",
    },
    {
        icon: <Palette size={24} />,
        title: "UI/UX Design",
        description:
            "Beautiful, intuitive interfaces that convert. From wireframes to high-fidelity prototypes.",
        color: "#06B6D4",
    },
    {
        icon: <FileText size={24} />,
        title: "Landing Pages",
        description:
            "High-converting landing pages built for speed, SEO, and first impressions that last.",
        color: "#8B5CF6",
    },
    {
        icon: <ShoppingBag size={24} />,
        title: "E-commerce",
        description:
            "Shopify and WooCommerce stores, custom carts, and payment integrations that sell.",
        color: "#0EA5E9",
    },
    {
        icon: <LayoutDashboard size={24} />,
        title: "Custom Dashboards",
        description:
            "Data-driven admin panels and dashboards with real-time charts, tables, and analytics.",
        color: "#7C3AED",
    },
    {
        icon: <Wrench size={24} />,
        title: "Maintenance & Optimization",
        description:
            "Performance audits, bug fixes, SEO improvements, and ongoing site maintenance.",
        color: "#06B6D4",
    },
];

export default function ServicesSection() {
    const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

    return (
        <section id="services" className="section" style={{ background: "#0F172A" }}>
            <div className="container">
                {/* Section header */}
                <div style={{ textAlign: "center", marginBottom: "64px" }}>
                    <div
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "8px",
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
                        What We Do
                    </div>
                    <h2
                        style={{
                            fontSize: "clamp(28px, 5vw, 48px)",
                            fontWeight: 800,
                            color: "#F8FAFC",
                            letterSpacing: "-0.03em",
                            lineHeight: 1.15,
                            fontFamily: "'Outfit', sans-serif",
                        }}
                    >
                        Services that{" "}
                        <span
                            style={{
                                background: "linear-gradient(135deg, #7C3AED, #06B6D4)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                            }}
                        >
                            move the needle
                        </span>
                    </h2>
                    <p
                        style={{
                            color: "#94A3B8",
                            marginTop: "16px",
                            fontSize: "16px",
                            maxWidth: "500px",
                            margin: "16px auto 0",
                        }}
                    >
                        From concept to deployment — we handle the full stack.
                    </p>
                </div>

                {/* Cards grid */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                        gap: "24px",
                    }}
                >
                    {services.map((service, idx) => (
                        <div
                            key={service.title}
                            className="card border-gradient"
                            style={{
                                padding: "32px",
                                cursor: "default",
                                position: "relative",
                                overflow: "hidden",
                            }}
                            onMouseEnter={() => setHoveredIdx(idx)}
                            onMouseLeave={() => setHoveredIdx(null)}
                            id={`service-card-${idx}`}
                        >
                            {/* Glow on hover */}
                            <div
                                style={{
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    height: "2px",
                                    background: `linear-gradient(90deg, transparent, ${service.color}, transparent)`,
                                    opacity: hoveredIdx === idx ? 1 : 0,
                                    transition: "opacity 0.3s ease",
                                }}
                            />

                            <div
                                style={{
                                    width: "52px",
                                    height: "52px",
                                    borderRadius: "14px",
                                    background: `${service.color}18`,
                                    border: `1px solid ${service.color}30`,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    color: service.color,
                                    marginBottom: "20px",
                                    transition: "all 0.3s ease",
                                    ...(hoveredIdx === idx
                                        ? {
                                            background: `${service.color}25`,
                                            boxShadow: `0 0 20px ${service.color}30`,
                                        }
                                        : {}),
                                }}
                            >
                                {service.icon}
                            </div>

                            <h3
                                style={{
                                    color: "#F8FAFC",
                                    fontWeight: 700,
                                    fontSize: "18px",
                                    marginBottom: "10px",
                                    letterSpacing: "-0.01em",
                                }}
                            >
                                {service.title}
                            </h3>
                            <p
                                style={{
                                    color: "#94A3B8",
                                    fontSize: "14px",
                                    lineHeight: 1.7,
                                }}
                            >
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div style={{ textAlign: "center", marginTop: "48px" }}>
                    <Link href="/services" className="btn-secondary">
                        View All Services <ArrowRight size={16} />
                    </Link>
                </div>
            </div>
        </section>
    );
}
