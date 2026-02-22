import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function CTABanner() {
    return (
        <section
            style={{
                padding: "80px 0",
                background: "#0F172A",
                position: "relative",
                overflow: "hidden",
            }}
        >
            <div className="container" style={{ position: "relative", zIndex: 1 }}>
                <div
                    style={{
                        background: "linear-gradient(135deg, rgba(124, 58, 237, 0.15) 0%, rgba(6, 182, 212, 0.08) 100%)",
                        border: "1px solid rgba(124, 58, 237, 0.25)",
                        borderRadius: "24px",
                        padding: "64px 48px",
                        textAlign: "center",
                        position: "relative",
                        overflow: "hidden",
                    }}
                >
                    {/* Orbs inside banner */}
                    <div
                        className="orb"
                        style={{
                            width: "300px",
                            height: "300px",
                            background: "rgba(124, 58, 237, 0.12)",
                            top: "-50px",
                            left: "-50px",
                        }}
                    />
                    <div
                        className="orb"
                        style={{
                            width: "250px",
                            height: "250px",
                            background: "rgba(6, 182, 212, 0.08)",
                            bottom: "-50px",
                            right: "-50px",
                        }}
                    />

                    <div style={{ position: "relative", zIndex: 1 }}>
                        <div
                            style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "6px",
                                background: "rgba(124, 58, 237, 0.15)",
                                border: "1px solid rgba(124, 58, 237, 0.3)",
                                borderRadius: "100px",
                                padding: "4px 14px",
                                marginBottom: "24px",
                                color: "#A78BFA",
                                fontSize: "12px",
                                fontWeight: 600,
                                letterSpacing: "0.08em",
                                textTransform: "uppercase",
                            }}
                        >
                            <Sparkles size={12} /> Let&apos;s Build Together
                        </div>

                        <h2
                            style={{
                                fontSize: "clamp(28px, 5vw, 52px)",
                                fontWeight: 800,
                                color: "#F8FAFC",
                                letterSpacing: "-0.03em",
                                lineHeight: 1.15,
                                marginBottom: "16px",
                                fontFamily: "'Outfit', sans-serif",
                            }}
                        >
                            Ready to build?{" "}
                            <span
                                style={{
                                    background: "linear-gradient(135deg, #7C3AED, #06B6D4)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    backgroundClip: "text",
                                }}
                            >
                                Let&apos;s merge ideas
                            </span>
                            <br />
                            into reality.
                        </h2>

                        <p
                            style={{
                                color: "#94A3B8",
                                fontSize: "17px",
                                marginBottom: "36px",
                                maxWidth: "500px",
                                margin: "0 auto 36px",
                            }}
                        >
                            From a simple landing page to a full-stack platform — we&apos;ve got you.
                        </p>

                        <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
                            <Link href="/contact" className="btn-primary" id="cta-start-project" style={{ padding: "14px 36px", fontSize: "16px" }}>
                                <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                                    Start a Project <ArrowRight size={16} />
                                </span>
                            </Link>
                            <Link href="/projects" className="btn-secondary" style={{ padding: "14px 36px", fontSize: "16px" }}>
                                See Our Work
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
