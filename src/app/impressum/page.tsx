import Link from "next/link";

export default function Impressum() {
  return (
    <main className="min-h-screen bg-cream py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/"
          className="text-primary hover:text-primary-dark font-semibold mb-8 inline-block"
        >
          &larr; Zurück zur Startseite
        </Link>
        <h1 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl font-semibold text-ink mb-8">
          Impressum
        </h1>

        <div className="prose prose-lg text-ink/75 space-y-6">
          <section>
            <h2 className="text-xl font-bold text-ink">
              Angaben gemäß &sect; 5 ECG
            </h2>
            <p>
              Mia Mon Restaurant
              <br />
              Schöngrubstraße 2
              <br />
              4553 Schlierbach, Österreich
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-ink">Kontakt</h2>
            <p>
              Telefon: 04651 / 299 18 88
              <br />
              Mobil: +43 681 818 104 08
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-ink">Haftungsausschluss</h2>
            <p>
              Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt.
              Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte
              können wir jedoch keine Gewähr übernehmen.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-ink">Urheberrecht</h2>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
              diesen Seiten unterliegen dem österreichischen Urheberrecht. Die
              Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
              Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
              schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
