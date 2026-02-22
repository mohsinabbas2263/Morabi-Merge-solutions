"use client";

const steps = [
    {
        emoji: "🔍",
        title: "Discover",
        description: "We listen, ask the right questions, and map out your vision clearly.",
    },
    {
        emoji: "🎨",
        title: "Design",
        description: "Wireframes, prototypes, and UI that feels premium from the first pixel.",
    },
    {
        emoji: "⚙️",
        title: "Develop",
        description: "Clean, scalable code built with modern frameworks. No shortcuts.",
    },
    {
        emoji: "🚀",
        title: "Deploy",
        description: "Fast deployments on Vercel, Netlify, or your preferred platform.",
    },
    {
        emoji: "🛡️",
        title: "Support",
        description: "Ongoing maintenance, updates, and improvements. We don't ghost.",
    },
];

export default function HowWeWork() {
    return (
        <section
            className="section"
            style={{
                background: "#0F172A",
                position: "relative",
                overflow: "hidden",
            }}
        >
            <div
                className="orb"
                style={{
                    width: "500px",
                    height: "300px",
                    background: "rgba(124, 58, 237, 0.07)",
                    bottom: "0",
                    left: "50%",
                    transform: "translateX(-50%)",
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
                        Our Process
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
                        How we{" "}
                        <span
                            style={{
                                background: "linear-gradient(135deg, #7C3AED, #06B6D4)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                            }}
                        >
                            work
                        </span>
                    </h2>
                </div>

                {/* Timeline */}
                <div
                    style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "0",
                        position: "relative",
                        justifyContent: "center",
                    }}
                >
                    {steps.map((step, idx) => (
                        <div
                            key={step.title}
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                flex: "1 1 180px",
                                maxWidth: "220px",
                                position: "relative",
                                padding: "0 16px",
                            }}
                        >
                            {/* Connector line */}
                            {idx < steps.length - 1 && (
                                <div
                                    className="connector-line"
                                    style={{
                                        position: "absolute",
                                        top: "30px",
                                        left: "calc(50% + 30px)",
                                        width: "100%",
                                        height: "1px",
                                        background: "linear-gradient(90deg, rgba(124, 58, 237, 0.5), rgba(6, 182, 212, 0.3))",
                                    }}
                                />
                            )}

                            {/* Icon */}
                            <div
                                style={{
                                    width: "60px",
                                    height: "60px",
                                    borderRadius: "18px",
                                    background: "rgba(124, 58, 237, 0.12)",
                                    border: "1px solid rgba(124, 58, 237, 0.3)",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontSize: "24px",
                                    marginBottom: "20px",
                                    position: "relative",
                                    zIndex: 1,
                                    transition: "all 0.3s ease",
                                }}
                            >
                                {step.emoji}
                            </div>

                            {/* Step number */}
                            <div
                                style={{
                                    fontSize: "11px",
                                    color: "#7C3AED",
                                    fontWeight: 700,
                                    letterSpacing: "0.08em",
                                    textTransform: "uppercase",
                                    marginBottom: "8px",
                                }}
                            >
                                Step {idx + 1}
                            </div>

                            <h3
                                style={{
                                    color: "#F8FAFC",
                                    fontWeight: 700,
                                    fontSize: "17px",
                                    marginBottom: "10px",
                                    textAlign: "center",
                                }}
                            >
                                {step.title}
                            </h3>
                            <p
                                style={{
                                    color: "#94A3B8",
                                    fontSize: "13px",
                                    lineHeight: 1.6,
                                    textAlign: "center",
                                }}
                            >
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
        @media (max-width: 768px) {
          .connector-line { display: none !important; }
        }
      `}</style>
        </section>
    );
}
