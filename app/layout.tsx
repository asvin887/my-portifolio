import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import ConsoleSignature from "./components/ConsoleSignature";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Asvin Thakur | Cosmic Portfolio",
  description: "A future-facing portfolio for Asvin Thakur, blending business, technology, AI, and management.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ConsoleSignature />
        {children}
      </body>
    </html>
  );
}
