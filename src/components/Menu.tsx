"use client";

import { useState } from "react";
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

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState(menuData[0]?.id ?? "");

  const activeMenu = menuData.find((c) => c.id === activeCategory);

  return (
    <section id="speisekarte" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold font-[family-name:var(--font-playfair)] text-accent mb-4">
            Unsere <span className="text-primary">Speisekarte</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Authentische türkische Gerichte, frisch zubereitet mit
            traditionellen Rezepten und den besten Zutaten.
          </p>
          {/* QR code hint */}
          <p className="text-sm text-gray-400 mt-3">
            📱 Speisekarte als QR-Code?{" "}
            <a
              href="/speisekarte"
              className="text-primary hover:text-primary-dark underline"
            >
              Hier klicken
            </a>
          </p>
        </div>

        {/* Category tabs */}
        <div className="flex overflow-x-auto gap-2 pb-4 mb-8 scrollbar-hide justify-start sm:justify-center">
          {menuData.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex-shrink-0 flex items-center gap-2 px-5 py-3 rounded-full text-sm font-semibold transition-all ${
                activeCategory === category.id
                  ? "bg-primary text-white shadow-lg shadow-primary/30"
                  : "bg-warm-gray text-gray-700 hover:bg-gray-200"
              }`}
            >
              <span className="text-lg">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>

        {/* Menu items grid */}
        {activeMenu && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {activeMenu.items.map((item, idx) => (
              <div
                key={idx}
                className="flex justify-between items-start gap-4 p-4 rounded-xl bg-cream hover:bg-warm-gray transition-colors border border-transparent hover:border-secondary/30"
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="font-bold text-accent">{item.name}</h3>
                    {item.allergens && item.allergens.length > 0 && (
                      <div className="flex gap-1">
                        {item.allergens.map((a) => (
                          <span
                            key={a}
                            title={allergenLabels[a] ?? a}
                            className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-gray-200 text-[10px] font-bold text-gray-600"
                          >
                            {a}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                  {item.description && (
                    <p className="text-sm text-gray-500 mt-1">
                      {item.description}
                    </p>
                  )}
                </div>
                <span className="text-lg font-bold text-primary whitespace-nowrap">
                  {item.price.toFixed(2).replace(".", ",")} &euro;
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Allergen legend */}
        <div className="mt-12 p-6 bg-warm-gray rounded-2xl">
          <h3 className="font-bold text-sm uppercase tracking-wider text-gray-500 mb-3">
            Allergene
          </h3>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-600">
            {Object.entries(allergenLabels).map(([key, label]) => (
              <span key={key}>
                <span className="font-bold text-accent">{key}</span> = {label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
