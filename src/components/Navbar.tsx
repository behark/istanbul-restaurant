"use client";

import { useState, useEffect } from "react";
import { useScrollSpy } from "@/hooks/useScrollSpy";

const sectionIds = ["home", "speisekarte", "galerie", "ueber-uns", "standort", "kontakt"];

const navLinks = [
  { href: "#speisekarte", label: "Speisekarte" },
  { href: "#galerie", label: "Galerie" },
  { href: "#ueber-uns", label: "Über uns" },
  { href: "#standort", label: "Standort" },
  { href: "#kontakt", label: "Kontakt" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeId = useScrollSpy(sectionIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <a
        href="#speisekarte"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:bg-primary focus:text-white focus:px-4 focus:py-2 focus:rounded focus:text-sm focus:font-medium"
      >
        Zum Inhalt springen
      </a>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
            ? "bg-cream/95 backdrop-blur-md border-b hairline"
            : "bg-transparent"
          }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <a href="#home" className="flex items-center gap-3">
              <span
                className={`inline-flex items-center justify-center w-9 h-9 rounded-full border ${scrolled ? "border-ink/20 text-ink" : "border-white/30 text-white"
                  } font-[family-name:var(--font-playfair)] italic text-lg`}
              >
                M
              </span>
              <span
                className={`font-[family-name:var(--font-playfair)] text-lg sm:text-xl tracking-tight ${scrolled ? "text-ink" : "text-white"
                  }`}
              >
                Mia
                <span className="font-normal italic opacity-70"> Mon</span>
              </span>
            </a>

            <div className="hidden md:flex items-center gap-9">
              {navLinks.map((link) => {
                const id = link.href.replace("#", "");
                const isActive = activeId === id;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    className={`text-[0.82rem] font-medium tracking-wide transition-colors relative ${scrolled
                        ? isActive ? "text-primary" : "text-ink/75 hover:text-primary"
                        : isActive ? "text-[#E5C878]" : "text-white/85 hover:text-[#E5C878]"
                      }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className={`absolute -bottom-1 left-0 right-0 h-px ${scrolled ? "bg-primary" : "bg-[#E5C878]"}`} />
                    )}
                  </a>
                );
              })}
              <a
                href="tel:+4346512991888"
                className={`inline-flex items-center gap-2 rounded-full text-[0.82rem] font-medium tracking-wide px-5 py-2.5 transition-all ${scrolled
                    ? "bg-ink text-white hover:bg-primary"
                    : "bg-white text-ink hover:bg-[#E5C878]"
                  }`}
              >
                Reservieren
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-6-6 6 6-6 6" />
                </svg>
              </a>
            </div>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2"
              aria-label={mobileOpen ? "Menü schließen" : "Menü öffnen"}
              aria-expanded={mobileOpen}
            >
              <div className="space-y-1.5">
                <span className={`block w-6 h-px transition-all ${mobileOpen ? "rotate-45 translate-y-2 bg-ink" : scrolled ? "bg-ink" : "bg-white"}`} />
                <span className={`block w-6 h-px transition-all ${mobileOpen ? "opacity-0" : scrolled ? "bg-ink" : "bg-white"}`} />
                <span className={`block w-6 h-px transition-all ${mobileOpen ? "-rotate-45 -translate-y-2 bg-ink" : scrolled ? "bg-ink" : "bg-white"}`} />
              </div>
            </button>
          </div>
        </div>

        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${mobileOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
            }`}
        >
          <div className="bg-cream border-t hairline">
            <div className="px-5 py-5 space-y-1">
              {navLinks.map((link) => {
                const id = link.href.replace("#", "");
                const isActive = activeId === id;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`block font-medium py-3 border-b hairline last:border-0 ${isActive ? "text-primary" : "text-ink/80 hover:text-primary"
                      }`}
                  >
                    {link.label}
                  </a>
                );
              })}
              <a
                href="tel:+4346512991888"
                className="mt-4 inline-flex items-center justify-center gap-2 w-full bg-ink text-white font-medium rounded-full py-3.5"
              >
                Reservieren
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
