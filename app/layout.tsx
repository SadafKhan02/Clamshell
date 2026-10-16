import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import React from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Clamshell Infrastructure Private Limited | SHAPE PERFECT | PSCC Poles & Precast Solutions",
  description:
    "Leading manufacturer and supplier of Pre-Stressed Cement Concrete (PSCC) Poles, Rectangular Transmission Poles, Spun Concrete Piles, and heavy precast infrastructure in India. Trusted by state electricity utilities and infrastructure leaders.",
  keywords: [
    "Clamshell Infrastructure",
    "PSCC Poles manufacturer",
    "Pre-Stressed Cement Concrete Poles",
    "Spun Poles",
    "Rectangular Poles",
    "Power Distribution Infrastructure",
    "Shape Perfect",
    "Electrical Transmission Poles India",
  ],
  icons: {
    icon: "/logo.jpg",
    apple: "/logo.jpg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${montserrat.variable} scroll-smooth`}>
      <head>
        <link rel="icon" href="/logo.jpg" />
      </head>
      <body className="min-h-screen flex flex-col bg-[#FDFBF9] text-[#1A1614] antialiased selection:bg-[#D96B4F] selection:text-white">
        <Navbar />
        <main className="flex-1 flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
