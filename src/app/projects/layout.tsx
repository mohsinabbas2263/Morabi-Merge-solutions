import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Projects — Morabi Merge Solutions",
    description:
        "Explore real projects built by the Morabi Merge Solutions team. Web apps, UI designs, landing pages, and more — pulled live from GitHub.",
};

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
