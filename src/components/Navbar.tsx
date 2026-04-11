"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#speisekarte", label: "Speisekarte" },
  { href: "#ueber-uns", label: "Über uns" },
  { href: "#standort", label: "Standort" },
  { href: "#kontakt", label: "Kontakt" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-sm shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <a href="#home" className="flex items-center gap-2">
            <span className="text-2xl sm:text-3xl font-bold font-[family-name:var(--font-playfair)]">
              <span className="text-primary">Istanbul</span>
              <span className={scrolled ? "text-accent" : "text-white"}>
                {" "}Restaurant
              </span>
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  scrolled ? "text-gray-700" : "text-white"
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/436603440568"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold transition-colors"
            >
              📞 Bestellen
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2"
            aria-label="Menü öffnen"
          >
            <div className="space-y-1.5">
              <span
                className={`block w-6 h-0.5 transition-all ${
                  mobileOpen
                    ? "rotate-45 translate-y-2 bg-gray-800"
                    : scrolled
                    ? "bg-gray-800"
                    : "bg-white"
                }`}
              />
              <span
                className={`block w-6 h-0.5 transition-all ${
                  mobileOpen
                    ? "opacity-0"
                    : scrolled
                    ? "bg-gray-800"
                    : "bg-white"
                }`}
              />
              <span
                className={`block w-6 h-0.5 transition-all ${
                  mobileOpen
                    ? "-rotate-45 -translate-y-2 bg-gray-800"
                    : scrolled
                    ? "bg-gray-800"
                    : "bg-white"
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white shadow-lg border-t">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block text-gray-700 hover:text-primary font-medium py-2"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/436603440568"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-green-500 text-white text-center px-4 py-3 rounded-full font-semibold"
            >
              📞 Jetzt Bestellen
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
