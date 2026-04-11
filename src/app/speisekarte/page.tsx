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
      {/* Header */}
      <div className="bg-gradient-to-br from-accent via-primary-dark to-primary text-white py-8 px-4 text-center">
        <div className="text-4xl mb-2">🕌</div>
        <h1 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-playfair)]">
          <span className="text-secondary">Istanbul</span> Restaurant
        </h1>
        <p className="text-white/80 mt-1">Speisekarte</p>
        <p className="text-white/60 text-sm mt-1">
          Salzburger Str. 102a, 4600 Wels &middot; +43 660 344 05 68
        </p>
      </div>

      {/* Menu content */}
      <div className="max-w-2xl mx-auto px-4 py-6">
        {menuData.map((category) => (
          <div key={category.id} className="mb-8">
            <div className="flex items-center gap-2 mb-4 pb-2 border-b-2 border-primary/20">
              <span className="text-2xl">{category.icon}</span>
              <h2 className="text-xl font-bold text-accent font-[family-name:var(--font-playfair)]">
                {category.name}
              </h2>
              <span className="text-sm text-gray-400 ml-auto">
                {category.nameEn}
              </span>
            </div>

            <div className="space-y-3">
              {category.items.map((item, idx) => (
                <div
                  key={idx}
                  className="flex justify-between items-start gap-3"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span className="font-semibold text-accent text-sm">
                        {item.name}
                      </span>
                      {item.allergens && item.allergens.length > 0 && (
                        <span className="text-[10px] text-gray-400">
                          ({item.allergens.join(",")})
                        </span>
                      )}
                    </div>
                    {item.description && (
                      <p className="text-xs text-gray-500 mt-0.5 leading-snug">
                        {item.description}
                      </p>
                    )}
                  </div>
                  <span className="text-sm font-bold text-primary whitespace-nowrap">
                    {item.price.toFixed(2).replace(".", ",")} &euro;
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Allergen legend */}
        <div className="mt-6 p-4 bg-warm-gray rounded-xl text-xs">
          <h3 className="font-bold text-gray-500 uppercase tracking-wider mb-2">
            Allergene
          </h3>
          <div className="flex flex-wrap gap-x-4 gap-y-1 text-gray-600">
            {Object.entries(allergenLabels).map(([key, label]) => (
              <span key={key}>
                <span className="font-bold">{key}</span>={label}
              </span>
            ))}
          </div>
        </div>

        {/* Footer note */}
        <div className="text-center mt-6 pb-8">
          <p className="text-xs text-gray-400">
            Alle Preise in EUR inkl. MwSt. &middot; Irrtümer und
            Preisänderungen vorbehalten.
          </p>
          <p className="text-xs text-gray-400 mt-1">
            &copy; {new Date().getFullYear()} Istanbul Restaurant Wels
          </p>
        </div>
      </div>
    </main>
  );
}
