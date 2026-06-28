import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jorgen Bergh",
  description: "ML engineer. Student at NTNU and UC Berkeley.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen bg-[#fafaf8] text-[#111110]">
        <Nav />
        {children}
        <footer className="border-t border-[#e8e6e0] mt-24">
          <div className="max-w-5xl mx-auto px-6 py-8 flex justify-between items-center">
            <span className="text-xs text-[#999890] font-[family-name:var(--font-geist-mono)]">
              © {new Date().getFullYear()} Jorgen Bergh
            </span>
            <div className="flex gap-6">
              <a href="https://github.com/jorgbergh" target="_blank" rel="noopener noreferrer"
                className="text-xs text-[#999890] hover:text-[#111110] transition-colors font-[family-name:var(--font-geist-mono)]">
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/jørgen-bergh" target="_blank" rel="noopener noreferrer"
                className="text-xs text-[#999890] hover:text-[#111110] transition-colors font-[family-name:var(--font-geist-mono)]">
                LinkedIn
              </a>
              <a href="https://x.com/jorgbergh" target="_blank" rel="noopener noreferrer"
                className="text-xs text-[#999890] hover:text-[#111110] transition-colors font-[family-name:var(--font-geist-mono)]">
                X
              </a>
              <a href="mailto:jrg.bergh@gmail.com"
                className="text-xs text-[#999890] hover:text-[#111110] transition-colors font-[family-name:var(--font-geist-mono)]">
                Email
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
