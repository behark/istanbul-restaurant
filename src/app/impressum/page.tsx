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
        <h1 className="text-4xl font-bold font-[family-name:var(--font-playfair)] text-accent mb-8">
          Impressum
        </h1>

        <div className="prose prose-lg text-gray-700 space-y-6">
          <section>
            <h2 className="text-xl font-bold text-accent">
              Angaben gemäß &sect; 5 ECG
            </h2>
            <p>
              Istanbul Restaurant
              <br />
              Salzburger Str. 102a
              <br />
              4600 Wels, Österreich
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-accent">Kontakt</h2>
            <p>
              Telefon: +43 660 344 05 68
              <br />
              WhatsApp:{" "}
              <a
                href="https://wa.me/436603440568"
                className="text-primary hover:text-primary-dark"
              >
                +43 660 344 05 68
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-accent">
              Haftungsausschluss
            </h2>
            <p>
              Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt.
              Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte
              können wir jedoch keine Gewähr übernehmen.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-accent">Urheberrecht</h2>
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
