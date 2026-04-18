export default function Footer() {
  return (
    <footer className="bg-[#0D1612] text-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 pt-16 pb-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-white/25 font-[family-name:var(--font-playfair)] italic">
                M
              </span>
              <span className="font-[family-name:var(--font-playfair)] text-xl">
                Mia <span className="italic opacity-70">Mon</span>
              </span>
            </div>
            <p className="text-white/55 text-sm leading-relaxed max-w-xs">
              Kroatische & italienische Küche in Schlierbach. Frisch, ehrlich und mit Liebe zubereitet.
            </p>
          </div>

          <div>
            <div className="eyebrow text-white/60 mb-4">Navigation</div>
            <ul className="space-y-2.5 text-sm text-white/70">
              <li><a href="#speisekarte" className="hover:text-[#E5C878] transition-colors">Speisekarte</a></li>
              <li><a href="#galerie" className="hover:text-[#E5C878] transition-colors">Galerie</a></li>
              <li><a href="#ueber-uns" className="hover:text-[#E5C878] transition-colors">Über uns</a></li>
              <li><a href="#standort" className="hover:text-[#E5C878] transition-colors">Standort</a></li>
              <li><a href="#kontakt" className="hover:text-[#E5C878] transition-colors">Kontakt</a></li>
            </ul>
          </div>

          <div>
            <div className="eyebrow text-white/60 mb-4">Kontakt</div>
            <ul className="space-y-2.5 text-sm text-white/70">
              <li>Schöngrubstraße 2</li>
              <li>4553 Schlierbach, Österreich</li>
              <li><a href="tel:+4346512991888" className="hover:text-[#E5C878] transition-colors tabular-nums">04651 / 299 18 88</a></li>
              <li><a href="mailto:info@miamon.at" className="hover:text-[#E5C878] transition-colors">info@miamon.at</a></li>
            </ul>
          </div>

          <div>
            <div className="eyebrow text-white/60 mb-4">Rechtliches</div>
            <ul className="space-y-2.5 text-sm text-white/70">
              <li><a href="/impressum" className="hover:text-[#E5C878] transition-colors">Impressum</a></li>
              <li><a href="/datenschutz" className="hover:text-[#E5C878] transition-colors">Datenschutz</a></li>
            </ul>
            <div className="flex gap-3 mt-6">
              <a
                href="https://www.facebook.com/share/1DL1CpVJ8D/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-white/20 rounded-full flex items-center justify-center hover:border-[#E5C878] hover:text-[#E5C878] transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-14 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-white/45">
          <p>© {new Date().getFullYear()} Mia Mon Restaurant Schlierbach. Alle Rechte vorbehalten.</p>
          <p>
            Design & Entwicklung ·{" "}
            <a href="https://beharkabashi.com" target="_blank" rel="noopener noreferrer" className="text-[#E5C878] hover:underline">
              Apex Agency
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
