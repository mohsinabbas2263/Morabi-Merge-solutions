"use client";

import { useState } from "react";
import Link from "next/link";
import { Github, Linkedin, ExternalLink, Code2, Palette, Layout } from "lucide-react";

const team = [
    {
        name: "Syed Mohsin Abbas",
        role: "Project Lead & Manager",
        specialty: "Strategy & Delivery",
        bio: "Drives projects from idea to launch. Bridges business goals with technical execution, ensuring on-time, on-quality delivery.",
        initials: "SM",
        gradient: "linear-gradient(135deg, #06B6D4, #0284C7)",
        skills: ["Project Management", "Agile", "Team Leadership", "Scrum", "Python"],
        icon: <Layout size={18} />,
        links: {
            github: "https://github.com/mohsinabbas2263",
            linkedin: "https://www.linkedin.com/in/syed-mohsin-abbas/",
        },
    },
    {
        name: "Rabail Butt",
        role: "Frontend Developer",
        specialty: "UI Engineering",
        bio: "Crafts fast, beautiful, and accessible user interfaces. Specializes in React, Next.js, and pixel-perfect implementation of designs.",
        initials: "RB",
        gradient: "linear-gradient(135deg, #7C3AED, #A855F7)",
        skills: ["React", "Next.js", "TypeScript", "Tailwind", "Figma"],
        icon: <Code2 size={18} />,
        links: {
            github: "https://github.com/RabailB",
            linkedin: "https://www.linkedin.com/in/rabail-butt-690035391/",
        },
    },
    {
        name: "Abiha Shamshad",
        role: "Backend Developer",
        specialty: "APIs & Systems",
        bio: "Builds the logic that powers the product. Expert in server-side development, database architecture, and API design.",
        initials: "AS",
        gradient: "linear-gradient(135deg, #EC4899, #8B5CF6)",
        skills: ["Node.js", "Python", "PostgreSQL", "REST APIs", "MongoDB"],
        icon: <Palette size={18} />,
        links: {
            github: "https://github.com/abiha-Shamshad",
            linkedin: "https://www.linkedin.com/in/abiha-shamshad-0713aa33b/",
        },
    },
];

export default function TeamPage() {
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
                <div className="orb" style={{ width: "500px", height: "400px", background: "rgba(124, 58, 237, 0.08)", top: "-100px", left: "0" }} />
                <div className="orb" style={{ width: "400px", height: "300px", background: "rgba(6, 182, 212, 0.05)", bottom: "-50px", right: "0" }} />

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
                        The Team
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
                        People behind the{" "}
                        <span
                            style={{
                                background: "linear-gradient(135deg, #7C3AED, #06B6D4)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                            }}
                        >
                            magic
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
                        Three developers. One mission — to build the web right.
                    </p>
                </div>
            </div>

            {/* Team cards */}
            <div className="container" style={{ paddingTop: "60px", paddingBottom: "100px" }}>
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
                        gap: "32px",
                        maxWidth: "1100px",
                        margin: "0 auto",
                    }}
                >
                    {team.map((member, idx) => (
                        <TeamCard key={member.name} member={member} idx={idx} />
                    ))}
                </div>

                {/* Bottom CTA */}
                <div
                    style={{
                        textAlign: "center",
                        marginTop: "80px",
                        padding: "48px",
                        background: "rgba(124, 58, 237, 0.06)",
                        border: "1px solid rgba(124, 58, 237, 0.15)",
                        borderRadius: "20px",
                    }}
                >
                    <h3
                        style={{
                            color: "#F8FAFC",
                            fontSize: "24px",
                            fontWeight: 700,
                            marginBottom: "12px",
                            fontFamily: "'Outfit', sans-serif",
                        }}
                    >
                        Want to work with us?
                    </h3>
                    <p style={{ color: "#94A3B8", marginBottom: "24px", fontSize: "15px" }}>
                        We&apos;re always open to interesting projects and collaborations.
                    </p>
                    <Link href="/contact" className="btn-primary">
                        <span>Get In Touch</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}

function TeamCard({
    member,
    idx,
}: {
    member: (typeof team)[0];
    idx: number;
}) {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            className="card"
            style={{
                padding: "40px 32px",
                display: "flex",
                flexDirection: "column",
                gap: "24px",
                alignItems: "center",
                textAlign: "center",
                transition: "all 0.3s ease",
                cursor: "default",
                ...(hovered
                    ? {
                        borderColor: "rgba(124, 58, 237, 0.4)",
                        transform: "translateY(-6px)",
                        boxShadow:
                            "0 24px 48px rgba(0,0,0,0.35), 0 0 40px rgba(124, 58, 237, 0.12)",
                    }
                    : {}),
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            id={`team-card-${idx}`}
        >
            {/* Avatar */}
            <div style={{ position: "relative" }}>
                <div
                    style={{
                        width: "100px",
                        height: "100px",
                        borderRadius: "50%",
                        background: member.gradient,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "32px",
                        fontWeight: 800,
                        color: "#F8FAFC",
                        boxShadow: hovered ? "0 0 40px rgba(124, 58, 237, 0.4)" : "none",
                        transition: "all 0.3s ease",
                        fontFamily: "'Outfit', sans-serif",
                    }}
                >
                    {member.initials}
                </div>
                {/* Role badge */}
                <div
                    style={{
                        position: "absolute",
                        bottom: "-2px",
                        right: "-4px",
                        width: "32px",
                        height: "32px",
                        borderRadius: "50%",
                        background: "#1E293B",
                        border: "2px solid rgba(124, 58, 237, 0.3)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#A78BFA",
                    }}
                >
                    {member.icon}
                </div>
            </div>

            {/* Name + role */}
            <div>
                <h2
                    style={{
                        color: "#F8FAFC",
                        fontSize: "22px",
                        fontWeight: 700,
                        letterSpacing: "-0.01em",
                        marginBottom: "6px",
                        fontFamily: "'Outfit', sans-serif",
                    }}
                >
                    {member.name}
                </h2>
                <div
                    style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                        background: "rgba(124, 58, 237, 0.1)",
                        border: "1px solid rgba(124, 58, 237, 0.2)",
                        borderRadius: "100px",
                        padding: "4px 12px",
                        color: "#A78BFA",
                        fontSize: "12px",
                        fontWeight: 600,
                    }}
                >
                    {member.role}
                </div>
            </div>

            {/* Bio */}
            <p
                style={{
                    color: "#94A3B8",
                    fontSize: "14px",
                    lineHeight: 1.7,
                    maxWidth: "300px",
                }}
            >
                {member.bio}
            </p>

            {/* Skills */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", justifyContent: "center" }}>
                {member.skills.map((skill) => (
                    <span key={skill} className="tech-tag">
                        {skill}
                    </span>
                ))}
            </div>

            {/* Links */}
            <div style={{ display: "flex", gap: "12px", marginTop: "8px" }}>
                <a
                    href={member.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        background: "rgba(248, 250, 252, 0.06)",
                        border: "1px solid rgba(248, 250, 252, 0.1)",
                        padding: "10px 20px",
                        borderRadius: "10px",
                        color: "#F8FAFC",
                        textDecoration: "none",
                        fontSize: "13px",
                        fontWeight: 600,
                        transition: "all 0.2s ease",
                    }}
                    onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.background = "rgba(248, 250, 252, 0.12)";
                    }}
                    onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.background = "rgba(248, 250, 252, 0.06)";
                    }}
                >
                    <Github size={15} /> GitHub
                </a>
                <a
                    href={member.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        background: "rgba(10, 102, 194, 0.15)",
                        border: "1px solid rgba(10, 102, 194, 0.3)",
                        padding: "10px 20px",
                        borderRadius: "10px",
                        color: "#60A5FA",
                        textDecoration: "none",
                        fontSize: "13px",
                        fontWeight: 600,
                        transition: "all 0.2s ease",
                    }}
                    onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.background = "rgba(10, 102, 194, 0.25)";
                    }}
                    onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.background = "rgba(10, 102, 194, 0.15)";
                    }}
                >
                    <Linkedin size={15} /> LinkedIn
                </a>
            </div>
        </div>
    );
}
