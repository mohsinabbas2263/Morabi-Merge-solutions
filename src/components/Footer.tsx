"use client";

import Link from "next/link";
import {
    Github,
    Instagram,
    Mail,
    MapPin,
    ArrowRight,
} from "lucide-react";
import Logo from "@/components/Logo";

const footerLinks = {
    Company: [
        { label: "Home", href: "/" },
        { label: "Projects", href: "/projects" },
        { label: "Team", href: "/team" },
        { label: "Services", href: "/services" },
        { label: "Contact", href: "/contact" },
    ],
    Services: [
        { label: "Web Development", href: "/services" },
        { label: "UI/UX Design", href: "/services" },
        { label: "Landing Pages", href: "/services" },
        { label: "E-commerce", href: "/services" },
        { label: "Custom Dashboards", href: "/services" },
    ],
};

export default function Footer() {
    return (
        <footer
            style={{
                background: "rgba(15, 23, 42, 0.98)",
                borderTop: "1px solid rgba(124, 58, 237, 0.15)",
                padding: "64px 0 0",
                position: "relative",
                overflow: "hidden",
            }}
        >
            {/* Decorative orb */}
            <div
                className="orb"
                style={{
                    width: "400px",
                    height: "400px",
                    background: "rgba(124, 58, 237, 0.06)",
                    bottom: "-100px",
                    right: "-100px",
                }}
            />

            <div className="container" style={{ position: "relative", zIndex: 1 }}>
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                        gap: "48px",
                        marginBottom: "64px",
                    }}
                >
                    {/* Brand */}
                    <div style={{ gridColumn: "span 1" }}>
                        <Link
                            href="/"
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "10px",
                                textDecoration: "none",
                                marginBottom: "16px",
                            }}
                        >
                            <div
                                style={{
                                    width: "42px",
                                    height: "42px",
                                    borderRadius: "10px",
                                    overflow: "hidden",
                                    background: "rgba(124, 58, 237, 0.15)",
                                    border: "1px solid rgba(124, 58, 237, 0.3)",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <Logo size={34} />
                            </div>
                            <div>
                                <span
                                    style={{
                                        fontWeight: 700,
                                        fontSize: "15px",
                                        color: "#F8FAFC",
                                        display: "block",
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
                                    }}
                                >
                                    Solutions
                                </span>
                            </div>
                        </Link>

                        <p
                            style={{
                                color: "#94A3B8",
                                fontSize: "14px",
                                lineHeight: 1.7,
                                marginBottom: "20px",
                            }}
                        >
                            We build modern websites that perform. Web development, UI/UX, and
                            custom digital solutions.
                        </p>

                        <div
                            style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "8px" }}
                        >
                            <MapPin size={14} color="#7C3AED" />
                            <span style={{ color: "#94A3B8", fontSize: "14px" }}>
                                Remote • Pakistan
                            </span>
                        </div>

                        <div
                            style={{ display: "flex", alignItems: "center", gap: "6px" }}
                        >
                            <Mail size={14} color="#7C3AED" />
                            <a
                                href="mailto:morabimergesolutions@gmail.com"
                                style={{
                                    color: "#94A3B8",
                                    fontSize: "14px",
                                    textDecoration: "none",
                                    transition: "color 0.2s",
                                }}
                                onMouseEnter={(e) =>
                                    ((e.target as HTMLElement).style.color = "#F8FAFC")
                                }
                                onMouseLeave={(e) =>
                                    ((e.target as HTMLElement).style.color = "#94A3B8")
                                }
                            >
                                morabimergesolutions@gmail.com
                            </a>
                        </div>
                    </div>

                    {/* Links */}
                    {Object.entries(footerLinks).map(([section, links]) => (
                        <div key={section}>
                            <h4
                                style={{
                                    color: "#F8FAFC",
                                    fontWeight: 600,
                                    fontSize: "14px",
                                    marginBottom: "16px",
                                    letterSpacing: "0.05em",
                                    textTransform: "uppercase",
                                }}
                            >
                                {section}
                            </h4>
                            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
                                {links.map((link) => (
                                    <li key={link.label}>
                                        <Link
                                            href={link.href}
                                            style={{
                                                color: "#94A3B8",
                                                textDecoration: "none",
                                                fontSize: "14px",
                                                transition: "color 0.2s",
                                                display: "flex",
                                                alignItems: "center",
                                                gap: "6px",
                                            }}
                                            onMouseEnter={(e) => {
                                                const target = e.currentTarget;
                                                target.style.color = "#F8FAFC";
                                            }}
                                            onMouseLeave={(e) => {
                                                const target = e.currentTarget;
                                                target.style.color = "#94A3B8";
                                            }}
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    {/* Newsletter / CTA */}
                    <div>
                        <h4
                            style={{
                                color: "#F8FAFC",
                                fontWeight: 600,
                                fontSize: "14px",
                                marginBottom: "16px",
                                letterSpacing: "0.05em",
                                textTransform: "uppercase",
                            }}
                        >
                            Get In Touch
                        </h4>
                        <p style={{ color: "#94A3B8", fontSize: "14px", lineHeight: 1.6, marginBottom: "16px" }}>
                            Ready to build something great? Let&apos;s talk.
                        </p>
                        <Link href="/contact" className="btn-primary" style={{ fontSize: "14px", padding: "10px 20px" }}>
                            <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                                Start a Project <ArrowRight size={14} />
                            </span>
                        </Link>
                    </div>
                </div>

                {/* Bottom bar */}
                <div
                    style={{
                        borderTop: "1px solid rgba(124, 58, 237, 0.1)",
                        padding: "24px 0",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        flexWrap: "wrap",
                        gap: "16px",
                    }}
                >
                    <span style={{ color: "#64748B", fontSize: "13px" }}>
                        © {new Date().getFullYear()} Morabi Merge Solutions. All rights reserved.
                    </span>

                    {/* Social links */}
                    <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                        {[
                            {
                                href: "https://www.instagram.com/morabimergesolutions/",
                                icon: <Instagram size={16} />,
                                label: "Instagram",
                            },
                            {
                                href: "mailto:morabimergesolutions@gmail.com",
                                icon: <Mail size={16} />,
                                label: "Email",
                            },
                            {
                                href: "https://github.com/RabailB",
                                icon: <Github size={16} />,
                                label: "GitHub",
                            },
                        ].map((social) => (
                            <a
                                key={social.label}
                                href={social.href}
                                target={social.href.startsWith("http") ? "_blank" : undefined}
                                rel="noopener noreferrer"
                                aria-label={social.label}
                                style={{
                                    width: "36px",
                                    height: "36px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    borderRadius: "8px",
                                    background: "rgba(124, 58, 237, 0.1)",
                                    border: "1px solid rgba(124, 58, 237, 0.2)",
                                    color: "#94A3B8",
                                    textDecoration: "none",
                                    transition: "all 0.2s ease",
                                }}
                                onMouseEnter={(e) => {
                                    const el = e.currentTarget;
                                    el.style.background = "rgba(124, 58, 237, 0.25)";
                                    el.style.color = "#F8FAFC";
                                    el.style.borderColor = "rgba(124, 58, 237, 0.5)";
                                }}
                                onMouseLeave={(e) => {
                                    const el = e.currentTarget;
                                    el.style.background = "rgba(124, 58, 237, 0.1)";
                                    el.style.color = "#94A3B8";
                                    el.style.borderColor = "rgba(124, 58, 237, 0.2)";
                                }}
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
