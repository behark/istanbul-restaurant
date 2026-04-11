import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Istanbul Restaurant Wels | Authentische Türkische Küche",
  description:
    "Istanbul Restaurant in Wels - Authentische türkische und mediterrane Küche. Kebab, Pide, Lahmacun, Baklava und mehr. Frisch zubereitet mit traditionellen Rezepten. Jetzt bestellen!",
  keywords:
    "Türkisches Restaurant Wels, Kebab Wels, Döner Wels, Istanbul Restaurant, Pide Wels, Lahmacun Wels, Türkische Küche Wels",
  openGraph: {
    title: "Istanbul Restaurant Wels",
    description:
      "Authentische türkische und mediterrane Küche in Wels. Frisch, traditionell, lecker!",
    locale: "de_AT",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${inter.variable} ${playfair.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
