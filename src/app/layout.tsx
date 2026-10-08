import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Arifin Tonang — Creative AI Engineer & Automation Architect",
  description: "Architecting Autonomous AI & High-Yield Digital Engines. Portfolio and digital systems by Arifin Tonang.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-canvas text-gray-200 antialiased selection:bg-amber-glow selection:text-black">
        {children}
      </body>
    </html>
  );
}
