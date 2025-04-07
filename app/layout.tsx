import "./globals.css";
import { ReactNode } from "react";
import type { Metadata, Viewport } from "next";
import { Syne } from "next/font/google";

const syne = Syne({
  subsets: ["latin"],
  display: "block",
  weight: ["400", "500", "600", "700", "800"],
});

// ✅ metadata remains as-is, minus `colorScheme`
export const metadata: Metadata = {
  title: "Janith.coder",
  description: "Next JS Portfolio",
  generator: "Next.js",
  category: "technology",
};

// ✅ Move colorScheme to viewport
export const viewport: Viewport = {
  colorScheme: "dark",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${syne.className} scroll-smooth scrollbar-thin scrollbar-track-[#0E1016] scrollbar-thumb-[#212531]`}
      >
        {children}
      </body>
    </html>
  );
}
