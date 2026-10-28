import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-inter",
});

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
  variable: "--font-grotesk",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://darklabs.tech"),
  title: "Darklabs — Agent systems, edge platforms, render farms",
  description:
    "Darklabs is the studio of Arifin Tonang: autonomous agent systems, edge web platforms and generative media pipelines, deployed and kept alive in production.",
  openGraph: {
    title: "Darklabs",
    description:
      "Agent systems, edge web platforms and generative media pipelines — built and run by Arifin Tonang.",
    url: "https://darklabs.tech",
    siteName: "Darklabs",
    type: "website",
  },
  alternates: { canonical: "https://darklabs.tech" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${grotesk.variable} ${mono.variable}`}>
      <body className="min-h-screen bg-lum-deep font-sans text-lum-ink">
        <SiteHeader />
        <main className="mx-auto max-w-page px-5 md:px-12">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
