"use client";

import Image from "next/image";
import Stars from "@/components/Stars";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function About() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section
      id="ueber-uns"
      ref={ref}
      className={`py-20 sm:py-32 bg-white transition-opacity duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid md:grid-cols-2 gap-14 lg:gap-24 items-center">
          <div className={`transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
            <div className="eyebrow mb-4">Über uns</div>
            <h2 className="font-[family-name:var(--font-playfair)] font-semibold text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.05] text-ink">
              Gastfreundschaft,
              <span className="block italic font-normal text-primary">wie an der Adria.</span>
            </h2>
            <p className="text-ink/65 text-[1.02rem] leading-relaxed mt-7">
              Mia Mon hat im Dezember 2025 in Schlierbach eröffnet und vereint
              das Beste aus zwei Welten: traditionelle kroatische Küche vom Grill
              und italienische Klassiker aus dem Holzofen. Unsere Gerichte
              werden täglich frisch zubereitet – ehrlich, bodenständig und mit viel Liebe.
            </p>
            <p className="text-ink/65 text-[1.02rem] leading-relaxed mt-5">
              Genießen Sie ein gemütliches Abendessen im Restaurant oder
              entspannen Sie auf unserer Terrasse mit Blick auf das Stift
              Schlierbach.
            </p>

            <div className="grid grid-cols-2 gap-x-8 gap-y-5 mt-10 pt-10 border-t hairline">
              {[
                { label: "Pizza aus dem Holzofen" },
                { label: "Ćevapčići & Grillgerichte" },
                { label: "Hausgemachte Nudeln" },
                { label: "Sitzplätze im Freien" },
              ].map((f) => (
                <div key={f.label} className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  <span className="text-ink font-medium text-[0.95rem]">{f.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={`relative transition-all duration-700 delay-200 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
            <div className="aspect-[4/5] rounded-sm overflow-hidden shadow-2xl relative">
              <Image
                src="/images/about-dining.jpg"
                alt="Mia Mon Restaurant Innenraum"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 sm:-left-10 bg-cream border hairline px-6 py-4 shadow-xl">
              <div className="eyebrow mb-1">Google Bewertung</div>
              <div className="flex items-center gap-2">
                <Stars rating={5} size="sm" />
                <span className="font-[family-name:var(--font-playfair)] text-xl text-ink">4,8</span>
              </div>
              <div className="text-[0.75rem] text-ink/55 mt-0.5">31 Rezensionen</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
