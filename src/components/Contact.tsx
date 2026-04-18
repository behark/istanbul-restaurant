"use client";

import Image from "next/image";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function Contact() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section
      id="kontakt"
      ref={ref}
      className={`relative py-24 sm:py-36 bg-[#14231D] text-white overflow-hidden transition-opacity duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}
    >
      <div className="absolute inset-0 opacity-25" aria-hidden>
        <Image
          src="/images/contact-oven.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#14231D] via-[#14231D]/90 to-[#14231D]/70" aria-hidden />

      <div className="relative max-w-3xl mx-auto px-5 sm:px-8 text-center">
        <div className="eyebrow text-[#E5C878] mb-5">Reservierung</div>
        <h2 className="font-[family-name:var(--font-playfair)] font-semibold text-[clamp(2.25rem,5vw,4.25rem)] leading-[1.02]">
          Tisch reservieren,
          <span className="block italic font-normal text-[#E5C878]">einfach und direkt.</span>
        </h2>
        <p className="text-white/65 text-lg mt-6 max-w-xl mx-auto leading-relaxed">
          Rufen Sie uns an oder schreiben Sie auf Facebook – wir melden uns
          so schnell wie möglich.
        </p>

        <div className="grid sm:grid-cols-3 gap-px mt-12 bg-white/10">
          <a
            href="tel:+4346512991888"
            className="group bg-[#14231D] hover:bg-[#1E2F28] transition-colors p-8 text-left"
          >
            <div className="eyebrow text-[#E5C878] mb-3">01</div>
            <div className="font-[family-name:var(--font-playfair)] text-2xl mb-1">Anrufen</div>
            <div className="text-white/55 text-sm tabular-nums">04651 / 299 18 88</div>
            <div className="mt-5 text-xs uppercase tracking-[0.2em] text-white/40 group-hover:text-[#E5C878] transition-colors">
              Wählen →
            </div>
          </a>

          <a
            href="tel:+436818181040"
            className="group bg-[#14231D] hover:bg-[#1E2F28] transition-colors p-8 text-left"
          >
            <div className="eyebrow text-[#E5C878] mb-3">02</div>
            <div className="font-[family-name:var(--font-playfair)] text-2xl mb-1">Mobil</div>
            <div className="text-white/55 text-sm tabular-nums">+43 681 818 104 08</div>
            <div className="mt-5 text-xs uppercase tracking-[0.2em] text-white/40 group-hover:text-[#E5C878] transition-colors">
              Wählen →
            </div>
          </a>

          <a
            href="https://www.facebook.com/share/1DL1CpVJ8D/"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-[#14231D] hover:bg-[#1E2F28] transition-colors p-8 text-left"
          >
            <div className="eyebrow text-[#E5C878] mb-3">03</div>
            <div className="font-[family-name:var(--font-playfair)] text-2xl mb-1">Facebook</div>
            <div className="text-white/55 text-sm">Nachricht senden</div>
            <div className="mt-5 text-xs uppercase tracking-[0.2em] text-white/40 group-hover:text-[#E5C878] transition-colors">
              Öffnen →
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
