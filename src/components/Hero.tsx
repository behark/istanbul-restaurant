import Image from "next/image";
import Stars from "@/components/Stars";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-[#14231D]"
    >
      <div className="absolute inset-0 kenburns" aria-hidden>
        <Image
          src="/images/hero-interior.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
      </div>
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(20,35,29,0.35) 0%, rgba(20,35,29,0.55) 45%, rgba(20,35,29,0.9) 100%)",
        }}
        aria-hidden
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
        <div className="eyebrow text-[#E5C878] fade-up fade-up-1">
          Seit 2025 · Schlierbach, Oberösterreich
        </div>

        <h1 className="font-[family-name:var(--font-playfair)] font-semibold tracking-tight mt-6 mb-5 text-[clamp(3rem,7.5vw,6.25rem)] leading-[0.95] fade-up fade-up-2">
          Mia
          <span className="block italic font-normal text-[#E5C878] -mt-1">
            Mon.
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-white/75 font-light leading-relaxed fade-up fade-up-3">
          Kroatische & italienische Küche – Ćevapčići vom Grill, Pasta nach
          Großmutters Rezept, Pizza aus dem Holzofen.
        </p>

        <div className="flex items-center justify-center gap-6 mt-10 fade-up fade-up-3">
          <div className="flex items-center gap-2">
            <Stars rating={4.8} size="base" />
            <span className="text-white/70 text-sm">
              4,8 · 31 Google Bewertungen
            </span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-10 fade-up fade-up-4">
          <a
            href="#speisekarte"
            className="group inline-flex items-center gap-2 bg-white text-[#14231D] font-medium px-7 py-3.5 rounded-full text-[0.95rem] tracking-wide transition-all hover:bg-[#E5C878] hover:text-[#14231D] w-full sm:w-auto justify-center"
          >
            Speisekarte ansehen
            <svg
              className="w-4 h-4 transition-transform group-hover:translate-x-0.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-6-6 6 6-6 6" />
            </svg>
          </a>
          <a
            href="tel:+4346512991888"
            className="inline-flex items-center gap-2 border border-white/25 hover:border-white/60 text-white font-medium px-7 py-3.5 rounded-full text-[0.95rem] tracking-wide transition-all w-full sm:w-auto justify-center hover:bg-white/5"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 0 1 2-2h2.28a1 1 0 0 1 .95.68l1.49 4.47a1 1 0 0 1-.5 1.21l-2.26 1.13a11 11 0 0 0 5.52 5.52l1.13-2.26a1 1 0 0 1 1.21-.5l4.47 1.49a1 1 0 0 1 .68.95V19a2 2 0 0 1-2 2h-1C9.72 21 3 14.28 3 6V5Z" />
            </svg>
            Tisch reservieren
          </a>
        </div>

        <div className="mt-16 flex flex-col items-center gap-3 fade-up fade-up-4">
          <p className="eyebrow text-white/50">Reservierung empfohlen</p>
          <a
            href="tel:+4346512991888"
            className="text-white/80 hover:text-[#E5C878] text-sm font-semibold tracking-wide transition-colors tabular-nums"
          >
            04651 / 299 18 88
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2 text-white/50">
        <span className="eyebrow">Scroll</span>
        <svg className="w-4 h-4 animate-bounce" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
