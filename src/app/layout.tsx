import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://basalt.works"),
  title: "Basalt — AI systems, web platforms, media pipelines",
  description:
    "Basalt is the studio of Arifin Tonang: autonomous agent systems, edge web platforms and generative media pipelines, running in production.",
  openGraph: {
    title: "Basalt",
    description:
      "Autonomous agent systems, edge web platforms and generative media pipelines — built and run by Arifin Tonang.",
    url: "https://basalt.works",
    siteName: "Basalt",
    type: "website",
  },
  alternates: { canonical: "https://basalt.works" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={mono.variable}>
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link rel="preconnect" href="https://cdn.fontshare.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f%5B%5D=cabinet-grotesk@800,900,700,500,400&display=swap"
        />
      </head>
      <body className="min-h-screen bg-here-bg font-sans text-here-cream">{children}</body>
    </html>
  );
}
