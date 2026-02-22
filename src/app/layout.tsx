import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Morabi Merge Solutions — Web Development, UI/UX & Custom Software",
  description:
    "Morabi Merge Solutions is a Pakistan-based software house specializing in modern web development, UI/UX design, e-commerce, custom dashboards, and digital solutions. We build websites that perform.",
  keywords: [
    "web development",
    "UI/UX design",
    "software house",
    "Next.js",
    "React",
    "Pakistan",
    "Morabi Merge Solutions",
    "landing pages",
    "e-commerce",
    "custom dashboards",
  ],
  authors: [{ name: "Morabi Merge Solutions" }],
  creator: "Morabi Merge Solutions",
  openGraph: {
    title: "Morabi Merge Solutions — Web Development & Custom Software",
    description:
      "We build modern websites that perform. Web Development • UI/UX • Custom Solutions",
    url: "https://morabimergesolutions.vercel.app",
    siteName: "Morabi Merge Solutions",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Morabi Merge Solutions",
    description: "We build modern websites that perform.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${outfit.variable} ${inter.variable}`}>
      <head>
        <link rel="icon" href="/logo.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/logo.svg" />
      </head>
      <body className="antialiased">
        <div className="noise" aria-hidden="true" />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
