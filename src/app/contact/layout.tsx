import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "Contact — Morabi Merge Solutions",
    description: "Get in touch with Morabi Merge Solutions. Tell us about your project and we'll respond within 24 hours.",
};
export default function ContactLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
