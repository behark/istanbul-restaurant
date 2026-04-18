import { menuData } from "@/data/menu";

const allergenLabels: Record<string, string> = {
  A: "Gluten",
  B: "Krebstiere",
  C: "Eier",
  D: "Fisch",
  E: "Erdnüsse",
  F: "Soja",
  G: "Milch",
  H: "Schalenfrüchte",
  L: "Sellerie",
  M: "Senf",
  N: "Sesam",
  O: "Sulfite",
  P: "Lupinen",
  R: "Weichtiere",
};

export default function Speisekarte() {
  return (
    <main className="min-h-screen bg-cream">
      <div className="bg-[#14231D] text-white py-10 px-4 text-center">
        <div className="eyebrow text-[#E5C878] mb-2">Speisekarte</div>
        <h1 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl font-semibold">
          Mia <span className="italic opacity-70">Mon</span>
        </h1>
        <p className="text-white/60 text-sm mt-2">
          Schöngrubstraße 2, 4553 Schlierbach · 04651 / 299 18 88
        </p>
      </div>

      <div className="max-w-2xl mx-auto px-5 py-8">
        {menuData.map((category) => (
          <div key={category.id} className="mb-10">
            <div className="flex items-center gap-2 mb-5 pb-3 border-b hairline">
              <h2 className="text-lg font-[family-name:var(--font-playfair)] text-ink">
                {category.name}
              </h2>
              <span className="text-xs text-ink/40 ml-auto uppercase tracking-wider">
                {category.nameEn}
              </span>
            </div>

            <div className="space-y-4">
              {category.items.map((item, idx) => (
                <div key={idx} className="flex justify-between items-start gap-3">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span className="font-medium text-ink text-[0.95rem]">
                        {item.name}
                      </span>
                      {item.allergens && item.allergens.length > 0 && (
                        <span className="text-[10px] text-ink/40">
                          ({item.allergens.join(",")})
                        </span>
                      )}
                    </div>
                    {item.description && (
                      <p className="text-xs text-ink/55 mt-0.5 leading-snug">
                        {item.description}
                      </p>
                    )}
                  </div>
                  <span className="font-[family-name:var(--font-playfair)] text-base text-primary whitespace-nowrap tabular-nums">
                    {item.price.toFixed(2).replace(".", ",")} €
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="mt-6 p-4 border hairline rounded-sm text-xs bg-white">
          <div className="eyebrow mb-2">Allergene</div>
          <div className="flex flex-wrap gap-x-4 gap-y-1 text-ink/70">
            {Object.entries(allergenLabels).map(([key, label]) => (
              <span key={key}>
                <span className="font-semibold text-ink">{key}</span> · {label}
              </span>
            ))}
          </div>
        </div>

        <div className="text-center mt-8 pb-10">
          <p className="text-xs text-ink/45">
            Alle Preise in EUR inkl. MwSt. · Irrtümer und Preisänderungen vorbehalten.
          </p>
          <p className="text-xs text-ink/45 mt-1">
            © {new Date().getFullYear()} Mia Mon Restaurant Schlierbach
          </p>
        </div>
      </div>
    </main>
  );
}
