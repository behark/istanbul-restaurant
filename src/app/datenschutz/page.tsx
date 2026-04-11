import Link from "next/link";

export default function Datenschutz() {
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
          Datenschutzerklärung
        </h1>

        <div className="prose prose-lg text-gray-700 space-y-6">
          <section>
            <h2 className="text-xl font-bold text-accent">
              1. Datenschutz auf einen Blick
            </h2>
            <p>
              Diese Datenschutzerklärung klärt Sie über die Art, den Umfang und
              Zweck der Verarbeitung von personenbezogenen Daten auf unserer
              Website auf.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-accent">
              2. Verantwortliche Stelle
            </h2>
            <p>
              Istanbul Restaurant
              <br />
              Salzburger Str. 102a
              <br />
              4600 Wels, Österreich
              <br />
              Telefon: +43 660 344 05 68
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-accent">
              3. Datenerfassung auf unserer Website
            </h2>
            <p>
              Unsere Website erhebt keine personenbezogenen Daten automatisch.
              Wenn Sie uns per Telefon oder WhatsApp kontaktieren, werden die
              angegebenen Daten zwecks Bearbeitung der Anfrage gespeichert.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-accent">4. Cookies</h2>
            <p>
              Diese Website verwendet keine Tracking-Cookies. Es werden nur
              technisch notwendige Cookies eingesetzt, die für den Betrieb der
              Website erforderlich sind.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-accent">5. Google Maps</h2>
            <p>
              Wir nutzen Google Maps zur Darstellung unseres Standorts. Dabei
              werden Daten an Google übertragen. Nähere Informationen finden Sie
              in der Datenschutzerklärung von Google.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-accent">6. Ihre Rechte</h2>
            <p>
              Sie haben gemäß DSGVO das Recht auf Auskunft, Berichtigung,
              Löschung und Einschränkung der Verarbeitung Ihrer Daten. Bei
              Fragen wenden Sie sich bitte an uns.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
