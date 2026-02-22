import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "Services — Morabi Merge Solutions",
    description: "Explore our services: web development, UI/UX design, landing pages, e-commerce, custom dashboards, and maintenance. Transparent pricing, quality output.",
};
export default function ServicesLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
