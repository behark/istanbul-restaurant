"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { menuData, type MenuItem } from "@/data/menu";
import { allergenLabels, type AllergenCode } from "@/data/allergens";

const badgeStyles: Record<NonNullable<MenuItem["badge"]>, { label: string; cls: string }> = {
  spicy: { label: "Scharf", cls: "bg-[#A63D2A]/10 text-[#A63D2A]" },
  vegetarian: { label: "Vegetarisch", cls: "bg-emerald-700/10 text-emerald-800" },
  house: { label: "Hausspezialität", cls: "bg-[#C9A455]/15 text-[#7E5A1F]" },
  kids: { label: "Kindermenü", cls: "bg-sky-700/10 text-sky-800" },
  new: { label: "Neu", cls: "bg-rose-700/10 text-rose-800" },
};

function formatPrice(n: number) {
  return n.toFixed(2).replace(".", ",") + " €";
}

export default function MenuExplorer() {
  const [query, setQuery] = useState("");
  const [vegOnly, setVegOnly] = useState(false);
  const [activeId, setActiveId] = useState(menuData[0]?.id ?? "");
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return menuData
      .map((cat) => ({
        ...cat,
        items: cat.items.filter((it) => {
          if (vegOnly && it.badge !== "vegetarian") return false;
          if (!q) return true;
          return (
            it.name.toLowerCase().includes(q) ||
            (it.description?.toLowerCase().includes(q) ?? false)
          );
        }),
      }))
      .filter((cat) => cat.items.length > 0);
  }, [query, vegOnly]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          visible.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
          const id = visible[0].target.getAttribute("data-cat-id");
          if (id) setActiveId(id);
        }
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
    );
    Object.values(sectionRefs.current).forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, [filtered.length]);

  const scrollTo = (id: string) => {
    const el = sectionRefs.current[id];
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 110;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="sticky top-0 z-30 bg-cream/95 backdrop-blur-sm border-b hairline print:hidden">
        <div className="max-w-3xl mx-auto px-4 pt-3 pb-2">
          <div className="flex gap-2 items-center">
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Speisekarte durchsuchen…"
              className="flex-1 px-3 py-2 text-sm rounded-md border hairline bg-white focus:outline-none focus:ring-2 focus:ring-primary/30"
              aria-label="Speisekarte durchsuchen"
            />
            <button
              onClick={() => setVegOnly((v) => !v)}
              className={`px-3 py-2 text-xs font-medium rounded-md border hairline transition ${
                vegOnly ? "bg-emerald-700 text-white border-emerald-700" : "bg-white text-ink/70"
              }`}
              aria-pressed={vegOnly}
            >
              🌱 Veggie
            </button>
          </div>
          <div className="flex overflow-x-auto gap-1.5 pt-3 pb-1 scrollbar-hide -mx-4 px-4">
            {menuData.map((cat) => (
              <button
                key={cat.id}
                onClick={() => scrollTo(cat.id)}
                className={`flex-shrink-0 px-3.5 py-1.5 text-[0.78rem] font-medium rounded-full border transition whitespace-nowrap ${
                  activeId === cat.id
                    ? "bg-primary text-white border-primary"
                    : "bg-white text-ink/60 hairline hover:text-ink"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-5 py-8">
        {filtered.length === 0 && (
          <p className="text-center text-ink/50 py-16 text-sm">
            Keine Gerichte gefunden.
          </p>
        )}

        {filtered.map((cat) => (
          <section
            key={cat.id}
            data-cat-id={cat.id}
            ref={(el) => {
              sectionRefs.current[cat.id] = el;
            }}
            className="mb-12 scroll-mt-32"
          >
            <header className="mb-5 pb-3 border-b hairline">
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl text-primary">
                {cat.name}
              </h2>
              {cat.intro && (
                <p className="text-xs text-ink/55 mt-1 italic">{cat.intro}</p>
              )}
            </header>

            <ul className="space-y-5">
              {cat.items.map((item, idx) => (
                <li key={idx} className="flex justify-between items-start gap-3">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <h3 className="font-semibold text-ink text-[0.98rem] leading-tight">
                        {item.name}
                      </h3>
                      {item.badge && (
                        <span
                          className={`text-[10px] font-semibold px-1.5 py-0.5 rounded-full ${badgeStyles[item.badge].cls}`}
                        >
                          {badgeStyles[item.badge].label}
                        </span>
                      )}
                      {item.allergens && item.allergens.length > 0 && (
                        <span
                          className="text-[10px] text-ink/40 font-mono"
                          title={item.allergens
                            .map((a) => `${a}: ${allergenLabels[a as AllergenCode] ?? ""}`)
                            .join(" · ")}
                        >
                          ({item.allergens.join(",")})
                        </span>
                      )}
                    </div>
                    {item.description && (
                      <p className="text-[0.84rem] text-ink/60 mt-0.5 leading-snug">
                        {item.description}
                      </p>
                    )}
                  </div>
                  <div className="text-right whitespace-nowrap">
                    {item.price !== undefined && (
                      <div className="font-[family-name:var(--font-playfair)] text-[1rem] text-primary tabular-nums">
                        {formatPrice(item.price)}
                      </div>
                    )}
                    {item.variants?.map((v) => (
                      <div key={v.label} className="text-[0.82rem] text-ink/70 tabular-nums">
                        <span className="text-ink/45 mr-2">{v.label}</span>
                        <span className="font-semibold text-primary">{formatPrice(v.price)}</span>
                      </div>
                    ))}
                  </div>
                </li>
              ))}
            </ul>

            {cat.note && (
              <p className="mt-4 text-xs text-ink/55 italic">{cat.note}</p>
            )}
          </section>
        ))}
      </div>
    </>
  );
}
