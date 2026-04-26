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
  metadataBase: new URL("https://miamon.at"),
  title: "Mia Mon Restaurant Schlierbach | Kroatische & Italienische Küche",
  description:
    "Mia Mon in Schlierbach – kroatische und italienische Küche. Ćevapčići, Schnitzel, hausgemachte Nudeln und Pizza aus dem Holzofen. Täglich frisch zubereitet.",
  keywords:
    "Mia Mon, Restaurant Schlierbach, Kroatisches Restaurant Oberösterreich, Pizza Schlierbach, Cevapcici Kirchdorf, Holzofen Pizza",
  openGraph: {
    title: "Mia Mon Restaurant Schlierbach",
    description:
      "Kroatische & italienische Küche in Schlierbach. Pizza aus dem Holzofen, Ćevapčići, hausgemachte Nudeln.",
    locale: "de_AT",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: "Mia Mon Restaurant",
    image: "https://miamon.at/images/hero-interior.jpg",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Schöngrubstraße 2",
      addressLocality: "Schlierbach",
      postalCode: "4553",
      addressCountry: "AT",
    },
    telephone: "+4368181810408",
    servesCuisine: ["Italienisch", "Österreichisch", "Pizza"],
    priceRange: "$$",
    hasMenu: "https://miamon.at/speisekarte",
    openingHoursSpecification: [
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Saturday", "Sunday"], opens: "11:00", closes: "14:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Saturday", "Sunday"], opens: "17:00", closes: "22:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Friday", opens: "17:00", closes: "22:00" },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "31",
    },
    url: "https://miamon.at",
    email: "info@miamon.at",
  };

  return (
    <html lang="de" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
