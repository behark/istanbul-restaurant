export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background with Turkish-inspired gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent via-primary-dark to-primary" />
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_30%_50%,rgba(212,160,23,0.3),transparent_50%),radial-gradient(circle_at_70%_50%,rgba(185,28,28,0.2),transparent_50%)]" />
      <div className="absolute inset-0 bg-black/30" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center text-white">
        {/* Logo area */}
        <div className="mb-6">
          <div className="inline-flex items-center justify-center w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-secondary shadow-2xl mb-4">
            <span className="text-5xl sm:text-6xl">🕌</span>
          </div>
        </div>

        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold font-[family-name:var(--font-playfair)] mb-4 leading-tight">
          <span className="text-secondary">Istanbul</span> Restaurant
        </h1>

        <p className="text-xl sm:text-2xl lg:text-3xl font-light mb-2 opacity-90">
          Kebab &middot; Pide &middot; Lahmacun &middot; Baklava
        </p>

        <p className="text-lg sm:text-xl mb-10 text-secondary font-semibold italic">
          Authentische türkische Küche in Wels
        </p>

        {/* Rating */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <div className="flex text-secondary text-xl">
            <span>&#9733;</span>
            <span>&#9733;</span>
            <span>&#9733;</span>
            <span>&#9733;</span>
            <span className="opacity-60">&#9733;</span>
          </div>
          <span className="text-white/90 font-semibold">
            4,7 Sterne &middot; 143 Google Bewertungen
          </span>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a
            href="#speisekarte"
            className="bg-secondary hover:bg-secondary-dark text-accent font-bold px-8 py-4 rounded-full text-lg transition-all hover:scale-105 shadow-lg w-full sm:w-auto"
          >
            🥙 Speisekarte ansehen
          </a>
          <a
            href="https://wa.me/436603440568"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-4 rounded-full text-lg transition-all hover:scale-105 shadow-lg w-full sm:w-auto"
          >
            💬 WhatsApp Bestellen
          </a>
        </div>

        {/* Delivery platform */}
        <div className="flex flex-col items-center gap-3">
          <p className="text-sm uppercase tracking-widest opacity-70">
            Auch bestellen über
          </p>
          <div className="flex items-center gap-6">
            <a
              href="https://www.foodora.at"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 px-6 py-3 rounded-xl transition-all flex items-center gap-2"
            >
              <span className="text-2xl">🩷</span>
              <span className="font-semibold">Foodora</span>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-white/60"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
