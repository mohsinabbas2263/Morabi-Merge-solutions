"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Github, ExternalLink, ArrowRight, Star } from "lucide-react";
import { fetchAllRepos, GitHubRepo } from "@/lib/github";

export default function FeaturedProjects() {
    const [repos, setRepos] = useState<GitHubRepo[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchAllRepos()
            .then((data) => {
                const sorted = data
                    .sort((a, b) => b.stargazers_count - a.stargazers_count || new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime())
                    .slice(0, 6);
                setRepos(sorted);
            })
            .finally(() => setLoading(false));
    }, []);

    return (
        <section
            className="section"
            style={{
                background: "linear-gradient(180deg, #0F172A 0%, #0D1526 100%)",
                position: "relative",
                overflow: "hidden",
            }}
        >
            <div className="orb" style={{ width: "500px", height: "500px", background: "rgba(6, 182, 212, 0.06)", top: "0", right: "0" }} />

            <div className="container" style={{ position: "relative", zIndex: 1 }}>
                <div style={{ textAlign: "center", marginBottom: "64px" }}>
                    <div
                        style={{
                            display: "inline-flex",
                            gap: "8px",
                            background: "rgba(6, 182, 212, 0.1)",
                            border: "1px solid rgba(6, 182, 212, 0.25)",
                            borderRadius: "100px",
                            padding: "4px 14px",
                            marginBottom: "16px",
                            color: "#06B6D4",
                            fontSize: "12px",
                            fontWeight: 600,
                            letterSpacing: "0.08em",
                            textTransform: "uppercase",
                        }}
                    >
                        Our Work
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
                        Featured{" "}
                        <span
                            style={{
                                background: "linear-gradient(135deg, #06B6D4, #7C3AED)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                            }}
                        >
                            Projects
                        </span>
                    </h2>
                    <p style={{ color: "#94A3B8", marginTop: "16px", fontSize: "16px" }}>
                        Live from GitHub — our latest and finest builds.
                    </p>
                </div>

                {loading ? (
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px" }}>
                        {[...Array(6)].map((_, i) => (
                            <div key={i} className="skeleton" style={{ height: "220px", borderRadius: "16px" }} />
                        ))}
                    </div>
                ) : repos.length === 0 ? (
                    <div style={{ textAlign: "center", color: "#94A3B8", padding: "40px" }}>
                        No projects found. Check back soon!
                    </div>
                ) : (
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "24px" }}>
                        {repos.map((repo) => (
                            <ProjectCard key={repo.id} repo={repo} />
                        ))}
                    </div>
                )}

                <div style={{ textAlign: "center", marginTop: "48px" }}>
                    <Link href="/projects" className="btn-primary">
                        <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                            View All Projects <ArrowRight size={16} />
                        </span>
                    </Link>
                </div>
            </div>
        </section>
    );
}

function ProjectCard({ repo }: { repo: GitHubRepo }) {
    const [hovered, setHovered] = useState(false);

    const langColors: Record<string, string> = {
        TypeScript: "#3178C6",
        JavaScript: "#F7DF1E",
        Python: "#3776AB",
        HTML: "#E34F26",
        CSS: "#1572B6",
        "C#": "#239120",
        Java: "#007396",
        PHP: "#777BB4",
        Vue: "#42B883",
        React: "#61DAFB",
    };

    const color = repo.language ? (langColors[repo.language] || "#94A3B8") : "#94A3B8";

    return (
        <div
            className="card"
            style={{
                padding: "28px",
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                transition: "all 0.3s ease",
                ...(hovered ? {
                    borderColor: "rgba(124, 58, 237, 0.4)",
                    transform: "translateY(-4px)",
                    boxShadow: "0 20px 40px rgba(0,0,0,0.3), 0 0 30px rgba(124, 58, 237, 0.1)",
                } : {}),
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <h3
                    style={{
                        color: "#F8FAFC",
                        fontWeight: 700,
                        fontSize: "16px",
                        letterSpacing: "-0.01em",
                        lineHeight: 1.3,
                    }}
                >
                    {repo.name
                        .replace(/-/g, " ")
                        .replace(/_/g, " ")
                        .replace(/\b\w/g, (c) => c.toUpperCase())}
                </h3>
                <div style={{ display: "flex", gap: "4px", alignItems: "center", color: "#94A3B8", fontSize: "13px", flexShrink: 0 }}>
                    <Star size={13} />
                    {repo.stargazers_count}
                </div>
            </div>

            <p
                style={{
                    color: "#94A3B8",
                    fontSize: "13px",
                    lineHeight: 1.6,
                    flex: 1,
                }}
            >
                {repo.description || "A project by Morabi Merge Solutions team."}
            </p>

            {/* Language & topics */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                {repo.language && (
                    <span
                        style={{
                            background: `${color}18`,
                            border: `1px solid ${color}40`,
                            color: color,
                            padding: "3px 10px",
                            borderRadius: "6px",
                            fontSize: "11px",
                            fontWeight: 600,
                        }}
                    >
                        {repo.language}
                    </span>
                )}
                {repo.topics?.slice(0, 3).map((topic) => (
                    <span key={topic} className="tech-tag">
                        {topic}
                    </span>
                ))}
            </div>

            {/* Links */}
            <div style={{ display: "flex", gap: "12px", borderTop: "1px solid rgba(124, 58, 237, 0.1)", paddingTop: "16px" }}>
                <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                        color: "#94A3B8",
                        fontSize: "13px",
                        fontWeight: 500,
                        textDecoration: "none",
                        transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#F8FAFC")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#94A3B8")}
                >
                    <Github size={14} /> GitHub
                </a>
                {repo.homepage && (
                    <a
                        href={repo.homepage}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "6px",
                            color: "#06B6D4",
                            fontSize: "13px",
                            fontWeight: 500,
                            textDecoration: "none",
                            transition: "opacity 0.2s",
                        }}
                    >
                        <ExternalLink size={14} /> Live Demo
                    </a>
                )}
            </div>
        </div>
    );
}
