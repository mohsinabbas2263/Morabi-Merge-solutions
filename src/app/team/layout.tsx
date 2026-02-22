import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Team — Morabi Merge Solutions",
    description:
        "Meet the talented team behind Morabi Merge Solutions — passionate developers and designers building modern digital experiences.",
};

export default function TeamLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
