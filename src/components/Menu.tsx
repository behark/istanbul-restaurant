"use client";

import { useState } from "react";
import { menuData } from "@/data/menu";
import { allergenLabels, type AllergenCode } from "@/data/allergens";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const homeMenu = menuData.filter((c) => c.showOnHome);

function formatPrice(n: number) {
  return n.toFixed(2).replace(".", ",");
}

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState(homeMenu[0]?.id ?? "");
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  const activeMenu = homeMenu.find((c) => c.id === activeCategory);

  return (
    <section
      id="speisekarte"
      ref={ref}
      className={`py-20 sm:py-32 bg-cream transition-opacity duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-14 sm:mb-20">
          <div className="eyebrow mb-4">Unsere Karte</div>
          <h2 className="font-[family-name:var(--font-playfair)] font-semibold text-[clamp(2rem,4.5vw,3.75rem)] leading-[1.05] text-ink">
            Frisch zubereitet
            <span className="block italic font-normal text-primary">mit Liebe.</span>
          </h2>
          <p className="text-ink/60 text-lg mt-6 max-w-2xl mx-auto leading-relaxed">
            Pizza aus dem Holzofen, hausgemachte Pasta, saftige Burger und österreichische
            Klassiker – täglich frisch zubereitet.
          </p>
          <a
            href="/speisekarte"
            className="inline-block mt-6 text-sm font-semibold text-primary hover:text-primary-dark underline underline-offset-4"
          >
            Komplette Speisekarte ansehen →
          </a>
        </div>

        <div className="flex overflow-x-auto gap-1.5 pb-5 mb-12 scrollbar-hide justify-start sm:justify-center border-b hairline">
          {homeMenu.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex-shrink-0 px-5 py-3 text-[0.82rem] font-medium tracking-wide transition-all border-b-2 -mb-px ${activeCategory === category.id
                ? "border-primary text-ink"
                : "border-transparent text-ink/50 hover:text-ink/80"
                }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {activeMenu && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-14 gap-y-2">
            {activeMenu.items.map((item, idx) => (
              <div
                key={idx}
                className="flex justify-between items-baseline gap-6 py-5 border-b hairline"
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="font-[family-name:var(--font-playfair)] text-lg text-ink">{item.name}</h3>
                    {item.allergens && item.allergens.length > 0 && (
                      <div className="flex gap-1">
                        {item.allergens.map((a) => (
                          <span
                            key={a}
                            title={allergenLabels[a as AllergenCode] ?? a}
                            className="inline-flex items-center justify-center w-4 h-4 rounded-full text-[9px] font-semibold text-ink/50 border hairline"
                          >
                            {a}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                  {item.description && (
                    <p className="text-[0.88rem] text-ink/55 mt-1 leading-relaxed">
                      {item.description}
                    </p>
                  )}
                </div>
                <span className="font-[family-name:var(--font-playfair)] text-lg text-primary whitespace-nowrap tabular-nums">
                  {item.price !== undefined
                    ? formatPrice(item.price)
                    : item.variants?.[0]
                      ? `ab ${formatPrice(item.variants[0].price)}`
                      : ""}
                </span>
              </div>
            ))}
          </div>
        )}

        <div className="mt-16 pt-10 border-t hairline">
          <div className="eyebrow mb-4">Allergene</div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink/60">
            {Object.entries(allergenLabels).map(([key, label]) => (
              <span key={key}>
                <span className="font-semibold text-ink">{key}</span> · {label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
