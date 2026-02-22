"use client";

import { useState } from "react";
import { Mail, MessageSquare, MapPin, Instagram, Send, CheckCircle } from "lucide-react";

const projectTypes = [
    "Web Development",
    "UI/UX Design",
    "Landing Page",
    "E-commerce Store",
    "Custom Dashboard",
    "Mobile App",
    "Other",
];

const budgetRanges = [
    "< $500",
    "$500 – $1,000",
    "$1,000 – $3,000",
    "$3,000 – $10,000",
    "$10,000+",
    "Prefer not to say",
];

export default function ContactPage() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        projectType: "",
        budget: "",
        message: "",
    });
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        // Simulate submission (replace with actual API route or Formspree, EmailJS, etc.)
        await new Promise((res) => setTimeout(res, 1500));
        setLoading(false);
        setSubmitted(true);
    };

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
                <div className="orb" style={{ width: "500px", height: "400px", background: "rgba(124, 58, 237, 0.08)", top: "-100px", right: "0" }} />
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
                        Get In Touch
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
                        Let&apos;s{" "}
                        <span
                            style={{
                                background: "linear-gradient(135deg, #7C3AED, #06B6D4)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                            }}
                        >
                            build something
                        </span>
                    </h1>
                    <p style={{ color: "#94A3B8", fontSize: "17px", maxWidth: "480px", margin: "0 auto" }}>
                        Tell us about your project and we&apos;ll get back to you within 24 hours.
                    </p>
                </div>
            </div>

            <div className="container" style={{ paddingTop: "60px", paddingBottom: "100px" }}>
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                        gap: "48px",
                        maxWidth: "1000px",
                        margin: "0 auto",
                    }}
                >
                    {/* Contact info sidebar */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                        <div>
                            <h2
                                style={{
                                    color: "#F8FAFC",
                                    fontSize: "22px",
                                    fontWeight: 700,
                                    marginBottom: "12px",
                                    fontFamily: "'Outfit', sans-serif",
                                }}
                            >
                                Other ways to reach us
                            </h2>
                            <p style={{ color: "#94A3B8", fontSize: "14px", lineHeight: 1.7 }}>
                                Prefer a quick chat? Slide into our DMs. We respond fast.
                            </p>
                        </div>

                        {/* Info cards */}
                        {[
                            {
                                icon: <Mail size={18} />,
                                label: "Email",
                                value: "morabimergesolutions@gmail.com",
                                href: "mailto:morabimergesolutions@gmail.com",
                                color: "#7C3AED",
                            },
                            {
                                icon: <Instagram size={18} />,
                                label: "Instagram",
                                value: "@morabimergesolutions",
                                href: "https://www.instagram.com/morabimergesolutions/",
                                color: "#EC4899",
                            },
                            {
                                icon: <MessageSquare size={18} />,
                                label: "WhatsApp",
                                value: "DM us on WhatsApp",
                                href: "https://wa.me/923000000000",
                                color: "#22C55E",
                            },
                            {
                                icon: <MapPin size={18} />,
                                label: "Location",
                                value: "Remote • Pakistan",
                                color: "#06B6D4",
                            },
                        ].map((item) => (
                            <div
                                key={item.label}
                                className="card"
                                style={{ padding: "20px 24px", display: "flex", alignItems: "center", gap: "16px" }}
                            >
                                <div
                                    style={{
                                        width: "44px",
                                        height: "44px",
                                        borderRadius: "12px",
                                        background: `${item.color}15`,
                                        border: `1px solid ${item.color}30`,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        color: item.color,
                                        flexShrink: 0,
                                    }}
                                >
                                    {item.icon}
                                </div>
                                <div>
                                    <div style={{ color: "#64748B", fontSize: "11px", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "3px" }}>
                                        {item.label}
                                    </div>
                                    {item.href ? (
                                        <a
                                            href={item.href}
                                            target={item.href.startsWith("http") ? "_blank" : undefined}
                                            rel="noopener noreferrer"
                                            style={{
                                                color: "#F8FAFC",
                                                fontSize: "14px",
                                                fontWeight: 500,
                                                textDecoration: "none",
                                                transition: "color 0.2s",
                                            }}
                                            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = item.color)}
                                            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#F8FAFC")}
                                        >
                                            {item.value}
                                        </a>
                                    ) : (
                                        <span style={{ color: "#F8FAFC", fontSize: "14px", fontWeight: 500 }}>{item.value}</span>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Form */}
                    <div
                        className="card"
                        style={{ padding: "40px 36px" }}
                    >
                        {submitted ? (
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    gap: "20px",
                                    minHeight: "400px",
                                    textAlign: "center",
                                }}
                            >
                                <div
                                    style={{
                                        width: "72px",
                                        height: "72px",
                                        borderRadius: "50%",
                                        background: "rgba(34, 197, 94, 0.1)",
                                        border: "1px solid rgba(34, 197, 94, 0.3)",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        color: "#22C55E",
                                    }}
                                >
                                    <CheckCircle size={32} />
                                </div>
                                <h3 style={{ color: "#F8FAFC", fontSize: "22px", fontWeight: 700, fontFamily: "'Outfit', sans-serif" }}>
                                    Message sent! 🎉
                                </h3>
                                <p style={{ color: "#94A3B8", fontSize: "15px", lineHeight: 1.6 }}>
                                    Thanks for reaching out. We&apos;ll come back to you within 24 hours.
                                </p>
                                <button
                                    onClick={() => { setSubmitted(false); setForm({ name: "", email: "", projectType: "", budget: "", message: "" }); }}
                                    className="btn-secondary"
                                    style={{ marginTop: "8px" }}
                                >
                                    Send another
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                                <h2 style={{ color: "#F8FAFC", fontSize: "20px", fontWeight: 700, fontFamily: "'Outfit', sans-serif", marginBottom: "4px" }}>
                                    Tell us about your project
                                </h2>

                                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                                    <div>
                                        <label style={{ display: "block", color: "#94A3B8", fontSize: "12px", fontWeight: 600, marginBottom: "8px", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                                            Name *
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            id="contact-name"
                                            required
                                            value={form.name}
                                            onChange={handleChange}
                                            placeholder="Your name"
                                            style={{
                                                width: "100%",
                                                background: "rgba(15, 23, 42, 0.6)",
                                                border: "1px solid rgba(124, 58, 237, 0.15)",
                                                borderRadius: "10px",
                                                padding: "11px 14px",
                                                color: "#F8FAFC",
                                                fontSize: "14px",
                                            }}
                                        />
                                    </div>
                                    <div>
                                        <label style={{ display: "block", color: "#94A3B8", fontSize: "12px", fontWeight: 600, marginBottom: "8px", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                                            Email *
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            id="contact-email"
                                            required
                                            value={form.email}
                                            onChange={handleChange}
                                            placeholder="you@email.com"
                                            style={{
                                                width: "100%",
                                                background: "rgba(15, 23, 42, 0.6)",
                                                border: "1px solid rgba(124, 58, 237, 0.15)",
                                                borderRadius: "10px",
                                                padding: "11px 14px",
                                                color: "#F8FAFC",
                                                fontSize: "14px",
                                            }}
                                        />
                                    </div>
                                </div>

                                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                                    <div>
                                        <label style={{ display: "block", color: "#94A3B8", fontSize: "12px", fontWeight: 600, marginBottom: "8px", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                                            Project Type
                                        </label>
                                        <select
                                            name="projectType"
                                            id="contact-project-type"
                                            value={form.projectType}
                                            onChange={handleChange}
                                            style={{
                                                width: "100%",
                                                background: "#1E293B",
                                                border: "1px solid rgba(124, 58, 237, 0.15)",
                                                borderRadius: "10px",
                                                padding: "11px 14px",
                                                color: form.projectType ? "#F8FAFC" : "#94A3B8",
                                                fontSize: "14px",
                                                cursor: "pointer",
                                            }}
                                        >
                                            <option value="" disabled>Select type</option>
                                            {projectTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                                        </select>
                                    </div>
                                    <div>
                                        <label style={{ display: "block", color: "#94A3B8", fontSize: "12px", fontWeight: 600, marginBottom: "8px", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                                            Budget (optional)
                                        </label>
                                        <select
                                            name="budget"
                                            id="contact-budget"
                                            value={form.budget}
                                            onChange={handleChange}
                                            style={{
                                                width: "100%",
                                                background: "#1E293B",
                                                border: "1px solid rgba(124, 58, 237, 0.15)",
                                                borderRadius: "10px",
                                                padding: "11px 14px",
                                                color: form.budget ? "#F8FAFC" : "#94A3B8",
                                                fontSize: "14px",
                                                cursor: "pointer",
                                            }}
                                        >
                                            <option value="" disabled>Select range</option>
                                            {budgetRanges.map((b) => <option key={b} value={b}>{b}</option>)}
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label style={{ display: "block", color: "#94A3B8", fontSize: "12px", fontWeight: 600, marginBottom: "8px", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                                        Message *
                                    </label>
                                    <textarea
                                        name="message"
                                        id="contact-message"
                                        required
                                        value={form.message}
                                        onChange={handleChange}
                                        placeholder="Describe your project, goals, and any specific requirements..."
                                        rows={5}
                                        style={{
                                            width: "100%",
                                            background: "rgba(15, 23, 42, 0.6)",
                                            border: "1px solid rgba(124, 58, 237, 0.15)",
                                            borderRadius: "10px",
                                            padding: "12px 14px",
                                            color: "#F8FAFC",
                                            fontSize: "14px",
                                            resize: "vertical",
                                            lineHeight: 1.6,
                                        }}
                                    />
                                </div>

                                <button
                                    type="submit"
                                    id="contact-submit"
                                    disabled={loading}
                                    className="btn-primary"
                                    style={{
                                        justifyContent: "center",
                                        padding: "14px",
                                        fontSize: "15px",
                                        opacity: loading ? 0.7 : 1,
                                    }}
                                >
                                    <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                                        {loading ? "Sending..." : <><Send size={16} /> Send Message</>}
                                    </span>
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
