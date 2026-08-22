import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

import Navbar from "@/components/navbar";
import Footer from "@/components/Footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GenMax IT Solution | IT & Digital Solutions",
  description:
    "GenMax IT Solution provides web development, software development, digital marketing, SEO and IT solutions for businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="m-0 w-full min-h-screen overflow-x-hidden bg-white">
        {/* ================= NAVBAR ================= */}
        <Navbar />

        {/* ================= MAIN CONTENT ================= */}
        <main className="w-full min-w-0 overflow-x-hidden">
          {children}
        </main>

        {/* ================= FOOTER ================= */}
        <Footer />
      </body>
    </html>
  );
}