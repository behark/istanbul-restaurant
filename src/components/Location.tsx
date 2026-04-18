"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function Location() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section
      id="standort"
      ref={ref}
      className={`py-20 sm:py-32 bg-white transition-opacity duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-14 sm:mb-20">
          <div className="eyebrow mb-4">Besuchen Sie uns</div>
          <h2 className="font-[family-name:var(--font-playfair)] font-semibold text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.05] text-ink">
            In Schlierbach,
            <span className="block italic font-normal text-primary">Bezirk Kirchdorf.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
          <div className="grid sm:grid-cols-2 gap-6 self-start">
            <div className="border-t border-ink pt-6">
              <div className="eyebrow mb-2">Adresse</div>
              <p className="text-ink/75 leading-relaxed">
                Schöngrubstraße 2<br />4553 Schlierbach, Österreich
              </p>
            </div>
            <div className="border-t border-ink pt-6">
              <div className="eyebrow mb-2">Telefon</div>
              <a href="tel:+4346512991888" className="text-ink hover:text-primary transition-colors tabular-nums">
                04651 / 299 18 88
              </a>
              <div className="mt-1">
                <a href="tel:+436818181040" className="text-ink/60 hover:text-primary transition-colors text-sm tabular-nums">
                  +43 681 818 104 08
                </a>
              </div>
            </div>
            <div className="border-t border-ink pt-6 sm:col-span-2">
              <div className="eyebrow mb-3">Öffnungszeiten</div>
              <div className="text-ink/75 space-y-1.5 tabular-nums">
                <div className="flex justify-between gap-6"><span>Mo, Di, Mi</span><span>11:00 – 14:00 · 17:00 – 22:00</span></div>
                <div className="flex justify-between gap-6"><span>Do</span><span className="text-primary">Ruhetag</span></div>
                <div className="flex justify-between gap-6"><span>Fr</span><span>17:00 – 22:00</span></div>
                <div className="flex justify-between gap-6"><span>Sa, So</span><span>11:00 – 14:00 · 17:00 – 22:00</span></div>
              </div>
              <p className="text-xs text-ink/50 mt-3">Warme Küche bis 21:00 Uhr</p>
            </div>
            <div className="border-t border-ink pt-6 sm:col-span-2">
              <div className="eyebrow mb-2">Gut zu wissen</div>
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink/70">
                <span>· Nur Barzahlung</span>
                <span>· Reservierung empfohlen</span>
                <span>· Sitzplätze im Freien</span>
              </div>
            </div>
          </div>

          <div className="overflow-hidden shadow-xl min-h-[480px] bg-warm-gray">
            <iframe
              src="https://www.google.com/maps?q=Sch%C3%B6ngrubstra%C3%9Fe+2%2C+4553+Schlierbach%2C+Austria&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "480px", filter: "grayscale(0.2) contrast(0.95)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mia Mon Schlierbach Standort"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
