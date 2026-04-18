import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-[80svh] flex items-center justify-center bg-cream">
      <div className="text-center px-6">
        <div className="eyebrow mb-4">404</div>
        <h1 className="font-[family-name:var(--font-playfair)] font-semibold text-[clamp(2rem,5vw,4rem)] leading-[1.05] text-ink">
          Seite nicht
          <span className="block italic font-normal text-primary">gefunden.</span>
        </h1>
        <p className="text-ink/60 text-lg mt-6 max-w-md mx-auto leading-relaxed">
          Diese Seite existiert leider nicht. Vielleicht finden Sie, was Sie suchen, auf unserer Startseite.
        </p>
        <Link
          href="/"
          className="group inline-flex items-center gap-2 bg-ink text-white font-medium px-7 py-3.5 rounded-full text-[0.95rem] tracking-wide transition-all hover:bg-primary mt-8"
        >
          Zur Startseite
          <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-6-6 6 6-6 6" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
