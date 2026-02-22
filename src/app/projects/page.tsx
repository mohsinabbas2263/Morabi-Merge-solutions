"use client";

import { useEffect, useState, useMemo } from "react";
import { Github, ExternalLink, Star, Search, Lock } from "lucide-react";
import { fetchAllRepos, GitHubRepo } from "@/lib/github";

type SortOption = "recent" | "stars" | "az";
type FilterOption = "all" | "web" | "frontend" | "backend";

const ITEMS_PER_PAGE = 12;

const langColors: Record<string, string> = {
    TypeScript: "#3178C6",
    JavaScript: "#F7DF1E",
    Python: "#3776AB",
    HTML: "#E34F26",
    CSS: "#1572B6",
    "C#": "#239120",
    "C++": "#00599C",
    Java: "#007396",
    PHP: "#777BB4",
    Vue: "#42B883",
    Dart: "#0175C2",
    Swift: "#F05138",
};

function categorizeRepo(repo: GitHubRepo): FilterOption[] {
    const categories: FilterOption[] = ["all"];
    const text = `${repo.name} ${repo.description || ""} ${(repo.topics || []).join(" ")}`.toLowerCase();
    const isBackend = ["node", "express", "nestjs", "django", "flask", "api", "backend", "server", "python", "go", "java", "php", "ruby", "database", "postgresql", "mongodb", "c++", "dsa", "algorithms"].some((kw) => text.includes(kw));
    const isFrontend = ["react", "next", "vue", "angular", "svelte", "tailwind", "frontend", "ui", "css", "html", "sass", "webpage"].some((kw) => text.includes(kw));
    const isWeb = isFrontend || isBackend || ["web", "website", "landing", "portfolio", "ecommerce", "shop"].some((kw) => text.includes(kw));
    if (isWeb) categories.push("web");
    if (isFrontend) categories.push("frontend");
    if (isBackend) categories.push("backend");
    return categories;
}

const TEAM_LABELS: Record<string, { name: string; role: string; color: string }> = {
    RabailB: { name: "Rabail Butt", role: "Frontend Developer", color: "#7C3AED" },
    mohsinabbas2263: { name: "Syed Mohsin Abbas", role: "Project Lead & Manager", color: "#06B6D4" },
    "abiha-Shamshad": { name: "Abiha Shamshad", role: "Backend Developer", color: "#EC4899" },
};

export default function ProjectsPage() {
    const [repos, setRepos] = useState<GitHubRepo[]>([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");
    const [sort, setSort] = useState<SortOption>("recent");
    const [filter, setFilter] = useState<FilterOption>("all");
    const [member, setMember] = useState<string>("all");
    const [page, setPage] = useState(1);

    useEffect(() => {
        fetchAllRepos()
            .then(setRepos)
            .finally(() => setLoading(false));
    }, []);

    const filtered = useMemo(() => {
        let result = repos;
        if (search.trim()) {
            const q = search.toLowerCase();
            result = result.filter(
                (r) =>
                    r.name.toLowerCase().includes(q) ||
                    (r.description || "").toLowerCase().includes(q) ||
                    (r.language || "").toLowerCase().includes(q) ||
                    (r.topics || []).some((t) => t.includes(q))
            );
        }
        if (filter !== "all") {
            result = result.filter((r) => categorizeRepo(r).includes(filter));
        }
        if (member !== "all") {
            result = result.filter((r) => r.owner.login === member);
        }
        result = [...result].sort((a, b) => {
            if (sort === "stars") return b.stargazers_count - a.stargazers_count;
            if (sort === "az") return a.name.localeCompare(b.name);
            return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
        });
        return result;
    }, [repos, search, sort, filter, member]);

    const paginated = filtered.slice(0, page * ITEMS_PER_PAGE);
    const hasMore = paginated.length < filtered.length;

    return (
        <div style={{ minHeight: "100vh", background: "#0F172A", paddingTop: "100px" }}>
            {/* Header */}
            <div style={{ background: "linear-gradient(180deg, #111827 0%, #0F172A 100%)", padding: "80px 0 60px", position: "relative", overflow: "hidden" }}>
                <div className="orb" style={{ width: "400px", height: "400px", background: "rgba(124, 58, 237, 0.08)", top: "-100px", right: "0" }} />
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
                        GitHub Portfolio
                    </div>
                    <h1
                        style={{
                            fontSize: "clamp(32px, 6vw, 60px)",
                            fontWeight: 800,
                            color: "#F8FAFC",
                            letterSpacing: "-0.03em",
                            fontFamily: "var(--font-outfit), sans-serif",
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
                            Projects
                        </span>
                    </h1>
                    <p style={{ color: "#94A3B8", fontSize: "17px", maxWidth: "500px", margin: "0 auto" }}>
                        Real code, real output — built by all three of us.
                    </p>
                </div>
            </div>

            <div className="container" style={{ paddingTop: "40px", paddingBottom: "100px" }}>

                {/* Mohsin notice */}
                <div
                    style={{
                        background: "linear-gradient(135deg, rgba(6, 182, 212, 0.08), rgba(6, 182, 212, 0.03))",
                        border: "1px solid rgba(6, 182, 212, 0.2)",
                        borderRadius: "14px",
                        padding: "16px 20px",
                        marginBottom: "32px",
                        display: "flex",
                        alignItems: "center",
                        gap: "14px",
                        flexWrap: "wrap",
                    }}
                >
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", flex: 1 }}>
                        <div
                            style={{
                                width: "36px",
                                height: "36px",
                                borderRadius: "50%",
                                background: "linear-gradient(135deg, #06B6D4, #0284C7)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                color: "#fff",
                                fontSize: "14px",
                                fontWeight: 700,
                                flexShrink: 0,
                            }}
                        >
                            SM
                        </div>
                        <div>
                            <div style={{ color: "#F8FAFC", fontSize: "13px", fontWeight: 600 }}>
                                Syed Mohsin Abbas — Project Lead &amp; Manager
                            </div>
                            <div style={{ color: "#94A3B8", fontSize: "12px", display: "flex", alignItems: "center", gap: "5px", marginTop: "2px" }}>
                                <Lock size={11} />
                                Projects currently in private repos. Showcase projects listed below.
                            </div>
                        </div>
                    </div>
                    <a
                        href="https://github.com/mohsinabbas2263"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "7px",
                            background: "rgba(6, 182, 212, 0.12)",
                            border: "1px solid rgba(6, 182, 212, 0.3)",
                            borderRadius: "8px",
                            padding: "8px 16px",
                            color: "#06B6D4",
                            textDecoration: "none",
                            fontSize: "13px",
                            fontWeight: 600,
                            transition: "all 0.2s",
                            whiteSpace: "nowrap",
                        }}
                        id="mohsin-github-banner"
                        onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(6, 182, 212, 0.22)"; }}
                        onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(6, 182, 212, 0.12)"; }}
                    >
                        <Github size={14} /> View GitHub Profile
                    </a>
                </div>

                {/* Filters */}
                <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", marginBottom: "40px", alignItems: "center" }}>
                    {/* Search */}
                    <div style={{ position: "relative", flex: 1, minWidth: "220px" }}>
                        <Search size={16} style={{ position: "absolute", left: "14px", top: "50%", transform: "translateY(-50%)", color: "#64748B" }} />
                        <input
                            type="text"
                            placeholder="Search projects..."
                            value={search}
                            onChange={(e) => { setSearch(e.target.value); setPage(1); }}
                            id="project-search"
                            style={{
                                width: "100%",
                                background: "#1E293B",
                                border: "1px solid rgba(124, 58, 237, 0.15)",
                                borderRadius: "10px",
                                padding: "11px 14px 11px 40px",
                                color: "#F8FAFC",
                                fontSize: "14px",
                                outline: "none",
                            }}
                        />
                    </div>

                    {/* Category filter */}
                    <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                        {(["all", "web", "frontend", "backend"] as FilterOption[]).map((f) => (
                            <button
                                key={f}
                                onClick={() => { setFilter(f); setPage(1); }}
                                id={`filter-${f}`}
                                style={{
                                    padding: "8px 14px",
                                    borderRadius: "8px",
                                    fontSize: "13px",
                                    fontWeight: 500,
                                    cursor: "pointer",
                                    transition: "all 0.2s",
                                    border: filter === f ? "1px solid rgba(124, 58, 237, 0.5)" : "1px solid rgba(124, 58, 237, 0.15)",
                                    background: filter === f ? "rgba(124, 58, 237, 0.2)" : "rgba(30, 41, 59, 0.5)",
                                    color: filter === f ? "#A78BFA" : "#94A3B8",
                                    textTransform: "capitalize",
                                }}
                            >
                                {f === "all" ? "All" : f.charAt(0).toUpperCase() + f.slice(1)}
                            </button>
                        ))}
                    </div>

                    {/* Member filter */}
                    <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                        {(["all", "RabailB", "mohsinabbas2263", "abiha-Shamshad"]).map((m) => {
                            const label = m === "all" ? "Everyone" : (TEAM_LABELS[m]?.name.split(" ")[0] || m);
                            const color = m === "all" ? "#7C3AED" : (TEAM_LABELS[m]?.color || "#7C3AED");
                            const active = member === m;
                            return (
                                <button
                                    key={m}
                                    onClick={() => { setMember(m); setPage(1); }}
                                    id={`member-filter-${m}`}
                                    style={{
                                        padding: "8px 14px",
                                        borderRadius: "8px",
                                        fontSize: "12px",
                                        fontWeight: 600,
                                        cursor: "pointer",
                                        transition: "all 0.2s",
                                        border: active ? `1px solid ${color}70` : "1px solid rgba(255,255,255,0.06)",
                                        background: active ? `${color}20` : "rgba(30, 41, 59, 0.4)",
                                        color: active ? color : "#64748B",
                                    }}
                                >
                                    {label}
                                </button>
                            );
                        })}
                    </div>

                    {/* Sort */}
                    <select
                        value={sort}
                        onChange={(e) => { setSort(e.target.value as SortOption); setPage(1); }}
                        id="project-sort"
                        style={{
                            background: "#1E293B",
                            border: "1px solid rgba(124, 58, 237, 0.15)",
                            borderRadius: "10px",
                            padding: "11px 14px",
                            color: "#94A3B8",
                            fontSize: "14px",
                            cursor: "pointer",
                        }}
                    >
                        <option value="recent">Most Recent</option>
                        <option value="stars">Most Starred</option>
                        <option value="az">A–Z</option>
                    </select>
                </div>

                {/* Count */}
                <div style={{ color: "#64748B", fontSize: "13px", marginBottom: "24px" }}>
                    {loading ? "Loading..." : `${filtered.length} project${filtered.length !== 1 ? "s" : ""} found`}
                </div>

                {/* Grid */}
                {loading ? (
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "24px" }}>
                        {[...Array(9)].map((_, i) => (
                            <div key={i} className="skeleton" style={{ height: "240px", borderRadius: "16px" }} />
                        ))}
                    </div>
                ) : filtered.length === 0 ? (
                    <div style={{ textAlign: "center", padding: "80px 20px", color: "#94A3B8" }}>
                        <div style={{ fontSize: "48px", marginBottom: "16px" }}>🔍</div>
                        <h3 style={{ color: "#F8FAFC", fontSize: "20px", marginBottom: "8px" }}>No projects found</h3>
                        <p>Try adjusting your search or filters.</p>
                    </div>
                ) : (
                    <>
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "24px" }}>
                            {paginated.map((repo) => (
                                <RepoCard key={repo.id} repo={repo} />
                            ))}
                        </div>

                        {hasMore && (
                            <div style={{ textAlign: "center", marginTop: "48px" }}>
                                <button
                                    onClick={() => setPage((p) => p + 1)}
                                    id="load-more-projects"
                                    style={{
                                        background: "rgba(124, 58, 237, 0.1)",
                                        border: "1px solid rgba(124, 58, 237, 0.3)",
                                        borderRadius: "10px",
                                        padding: "12px 32px",
                                        color: "#A78BFA",
                                        fontSize: "14px",
                                        fontWeight: 600,
                                        cursor: "pointer",
                                        transition: "all 0.2s",
                                    }}
                                >
                                    Load More ({filtered.length - paginated.length} remaining)
                                </button>
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    );
}

function RepoCard({ repo }: { repo: GitHubRepo }) {
    const [hovered, setHovered] = useState(false);
    const color = repo.language ? (langColors[repo.language] || "#94A3B8") : "#94A3B8";
    const updatedDays = Math.floor((Date.now() - new Date(repo.updated_at).getTime()) / 86400000);
    const ownerInfo = TEAM_LABELS[repo.owner.login];
    const isManual = repo._manual;

    return (
        <div
            className="card"
            style={{
                padding: "28px",
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                transition: "all 0.3s ease",
                position: "relative",
                ...(hovered ? {
                    borderColor: ownerInfo ? `${ownerInfo.color}60` : "rgba(124, 58, 237, 0.4)",
                    transform: "translateY(-4px)",
                    boxShadow: `0 20px 40px rgba(0,0,0,0.3), 0 0 20px ${ownerInfo ? ownerInfo.color : "#7C3AED"}10`,
                } : {}),
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {/* Owner + date row */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                    <div
                        style={{
                            width: "20px",
                            height: "20px",
                            borderRadius: "50%",
                            background: ownerInfo?.color || "#7C3AED",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "8px",
                            fontWeight: 700,
                            color: "#fff",
                        }}
                    >
                        {ownerInfo?.name.charAt(0) || "?"}
                    </div>
                    <span
                        style={{
                            fontSize: "11px",
                            color: ownerInfo?.color || "#64748B",
                            fontWeight: 600,
                        }}
                    >
                        {ownerInfo?.name.split(" ")[0] || repo.owner.login}
                    </span>
                    {isManual && (
                        <span
                            style={{
                                fontSize: "9px",
                                background: "rgba(6, 182, 212, 0.12)",
                                border: "1px solid rgba(6, 182, 212, 0.25)",
                                color: "#06B6D4",
                                borderRadius: "4px",
                                padding: "1px 5px",
                                fontWeight: 600,
                                letterSpacing: "0.05em",
                            }}
                        >
                            PRIVATE
                        </span>
                    )}
                </div>
                <span style={{ fontSize: "11px", color: "#64748B" }}>
                    {updatedDays === 0 ? "Today" : `${updatedDays}d ago`}
                </span>
            </div>

            <h3
                style={{
                    color: "#F8FAFC",
                    fontWeight: 700,
                    fontSize: "16px",
                    letterSpacing: "-0.01em",
                    lineHeight: 1.3,
                }}
            >
                {repo.name.replace(/-/g, " ").replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())}
            </h3>

            <p style={{ color: "#94A3B8", fontSize: "13px", lineHeight: 1.6, flex: 1 }}>
                {repo.description || "A project from the Morabi Merge Solutions team."}
            </p>

            {/* Tags */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                {repo.language && (
                    <span
                        style={{
                            background: `${color}18`,
                            border: `1px solid ${color}40`,
                            color,
                            padding: "3px 10px",
                            borderRadius: "6px",
                            fontSize: "11px",
                            fontWeight: 600,
                        }}
                    >
                        {repo.language}
                    </span>
                )}
                {(repo.topics || []).slice(0, 3).map((topic) => (
                    <span key={topic} className="tech-tag">{topic}</span>
                ))}
            </div>

            {/* Footer */}
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    borderTop: "1px solid rgba(124, 58, 237, 0.1)",
                    paddingTop: "16px",
                }}
            >
                <div style={{ display: "flex", gap: "16px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "4px", color: "#94A3B8", fontSize: "12px" }}>
                        <Star size={12} /> {repo.stargazers_count}
                    </div>
                </div>
                <div style={{ display: "flex", gap: "12px" }}>
                    <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "5px",
                            color: "#94A3B8",
                            fontSize: "12px",
                            textDecoration: "none",
                            transition: "color 0.2s",
                            fontWeight: 500,
                        }}
                        onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#F8FAFC")}
                        onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#94A3B8")}
                    >
                        <Github size={13} /> {isManual ? "Profile" : "Code"}
                    </a>
                    {repo.homepage && (
                        <a
                            href={repo.homepage}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "5px",
                                color: "#06B6D4",
                                fontSize: "12px",
                                textDecoration: "none",
                                fontWeight: 500,
                            }}
                        >
                            <ExternalLink size={13} /> Demo
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}
