import type { Metadata } from "next";
import MenuExplorer from "./MenuExplorer";
import { menuData } from "@/data/menu";
import { allergenLabels } from "@/data/allergens";
import { restaurantInfo } from "@/data/info";

export const metadata: Metadata = {
  title: "Speisekarte | Pizzeria Mia-Mon",
  description:
    "Die aktuelle Speisekarte der Pizzeria Mia-Mon: Suppen, Salate, Burger, Pizza aus dem Holzofen, Pasta, Hauptgerichte, Kindermenü, Getränke und Weine.",
  alternates: { canonical: "/speisekarte" },
  openGraph: {
    title: "Speisekarte – Pizzeria Mia-Mon",
    description:
      "Frisch zubereitete Speisen, Pizza aus dem Holzofen, Pasta und mehr.",
    url: "https://miamon.at/speisekarte",
    type: "website",
    locale: "de_AT",
  },
};

export default function SpeisekartePage() {
  const menuJsonLd = {
    "@context": "https://schema.org",
    "@type": "Menu",
    name: "Speisekarte Pizzeria Mia-Mon",
    inLanguage: "de-AT",
    hasMenuSection: menuData.map((cat) => ({
      "@type": "MenuSection",
      name: cat.name,
      hasMenuItem: cat.items.map((it) => ({
        "@type": "MenuItem",
        name: it.name,
        ...(it.description ? { description: it.description } : {}),
        ...(it.price !== undefined
          ? { offers: { "@type": "Offer", price: it.price.toFixed(2), priceCurrency: "EUR" } }
          : it.variants && it.variants.length > 0
            ? {
                offers: it.variants.map((v) => ({
                  "@type": "Offer",
                  price: v.price.toFixed(2),
                  priceCurrency: "EUR",
                  description: v.label,
                })),
              }
            : {}),
      })),
    })),
  };

  return (
    <main className="min-h-screen bg-cream">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(menuJsonLd) }}
      />

      <div className="bg-[#14231D] text-white py-10 px-4 text-center print:bg-white print:text-ink">
        <div className="eyebrow text-[#E5C878] mb-2 print:text-primary">Speisekarte</div>
        <h1 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl font-semibold">
          Pizzeria <span className="italic opacity-80">Mia-Mon</span>
        </h1>
        <p className="text-white/70 text-sm mt-3 max-w-md mx-auto">
          {restaurantInfo.welcome.title}
        </p>
        <div className="text-xs text-white/55 mt-4 space-y-0.5">
          <div>
            {restaurantInfo.hours.standard.days}: {restaurantInfo.hours.standard.lunch} & {restaurantInfo.hours.standard.dinner}
          </div>
          <div>
            {restaurantInfo.hours.friday.days}: {restaurantInfo.hours.friday.dinner}
          </div>
          <div className="text-[#E5C878]">{restaurantInfo.hours.closed}</div>
          <div className="italic">{restaurantInfo.hours.note}</div>
        </div>
        <a
          href={restaurantInfo.phoneTel}
          className="inline-block mt-4 text-sm text-white/80 hover:text-white underline underline-offset-4"
        >
          📞 {restaurantInfo.phone}
        </a>
      </div>

      <MenuExplorer />

      <div className="max-w-3xl mx-auto px-5 pb-12">
        <details className="mt-4 p-4 border hairline rounded-md bg-white">
          <summary className="cursor-pointer font-semibold text-sm text-ink">
            Allergene (A–R)
          </summary>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 mt-3 text-xs text-ink/70">
            {Object.entries(allergenLabels).map(([key, label]) => (
              <div key={key}>
                <span className="font-semibold text-ink mr-1.5">{key}</span>
                {label}
              </div>
            ))}
          </div>
        </details>

        <div className="text-center mt-8">
          <a
            href={restaurantInfo.phoneTel}
            className="inline-block bg-primary text-white px-6 py-3 rounded-full text-sm font-semibold shadow-sm hover:bg-primary-dark transition print:hidden"
          >
            📞 Reservieren – {restaurantInfo.phone}
          </a>
          <p className="text-xs text-ink/45 mt-6">
            Alle Preise in EUR inkl. MwSt. · Irrtümer und Preisänderungen vorbehalten.
          </p>
          <p className="text-xs text-ink/45 mt-1 italic">
            {restaurantInfo.closing} – {restaurantInfo.team}
          </p>
          <p className="text-xs text-ink/35 mt-4">
            © {new Date().getFullYear()} Pizzeria Mia-Mon
          </p>
        </div>
      </div>

      <a
        href={restaurantInfo.phoneTel}
        className="fixed bottom-5 right-5 sm:hidden bg-primary text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center text-xl print:hidden"
        aria-label="Anrufen"
      >
        📞
      </a>
    </main>
  );
}
