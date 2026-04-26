import type { Metadata } from "next";
import QRCode from "qrcode";
import QrDownloads from "./QrDownloads";
import { restaurantInfo } from "@/data/info";

export const metadata: Metadata = {
  title: "QR-Code | Pizzeria Mia-Mon",
  description: "Druckfertige QR-Codes für die digitale Speisekarte.",
  robots: { index: false, follow: false },
};

const QR_TARGET = "https://miamon.at/speisekarte";

async function buildQrSvg(): Promise<string> {
  return QRCode.toString(QR_TARGET, {
    type: "svg",
    errorCorrectionLevel: "H",
    margin: 1,
    color: { dark: "#14231D", light: "#ffffff" },
    width: 1024,
  });
}

type CardProps = {
  size: "A6" | "A5" | "Tisch" | "Holder";
  label: string;
  description: string;
  cmW: number;
  cmH: number;
  svg: string;
};

function PrintCard({ size, label, description, cmW, cmH, svg }: CardProps) {
  return (
    <div
      className="relative bg-white border-2 border-dashed border-[#C9A455] rounded-lg overflow-hidden flex flex-col items-center justify-between print:break-after-page print:border-0 print:rounded-none print:shadow-none"
      style={{ aspectRatio: `${cmW} / ${cmH}` }}
      data-card={size}
    >
      <div className="absolute top-2 left-3 text-[10px] text-ink/40 print:hidden">
        {label} · {cmW}×{cmH} cm
      </div>

      <div className="flex flex-col items-center justify-center w-full h-full px-[6%] py-[8%] text-center">
        <div className="font-[family-name:var(--font-playfair)] text-[2.4cqw] text-primary leading-tight">
          Pizzeria
        </div>
        <div className="font-[family-name:var(--font-playfair)] text-[5cqw] italic text-ink leading-none mb-[2cqw]">
          Mia-Mon
        </div>

        <div className="text-[1.6cqw] uppercase tracking-[0.25em] text-[#7E5A1F] font-semibold mt-1">
          Speisekarte
        </div>
        <div className="text-[1.4cqw] text-ink/60 mb-[2cqw]">
          Scan für unsere digitale Karte
        </div>

        <div
          className="w-[58%] aspect-square bg-white p-[1.5%] rounded-md ring-1 ring-[#14231D]/10"
          dangerouslySetInnerHTML={{ __html: svg }}
        />

        <div className="mt-[3cqw] text-[1.5cqw] text-ink/55">
          {description}
        </div>
        <div className="mt-[1cqw] text-[1.3cqw] text-ink/50">
          {restaurantInfo.phone}
        </div>
      </div>
    </div>
  );
}

export default async function QrPage() {
  const svg = await buildQrSvg();

  return (
    <main className="min-h-screen bg-cream py-10 px-4 print:bg-white print:py-0">
      <div className="max-w-5xl mx-auto print:hidden">
        <div className="text-center mb-8">
          <div className="eyebrow mb-2">QR-Code</div>
          <h1 className="font-[family-name:var(--font-playfair)] text-3xl text-ink">
            Druckfertige Tischkarten
          </h1>
          <p className="text-sm text-ink/60 mt-3 max-w-xl mx-auto">
            QR-Code öffnet:{" "}
            <code className="text-primary">{QR_TARGET}</code>
          </p>
        </div>

        <div className="bg-white border hairline rounded-lg p-5 mb-8 flex items-center justify-between gap-4 flex-wrap">
          <div>
            <div className="font-semibold text-ink">QR-Code herunterladen</div>
            <div className="text-xs text-ink/55">
              SVG für Druckereien · PNG für Office/Word · Drucken für direkte Tischkarten
            </div>
          </div>
          <QrDownloads svgMarkup={svg} filenameBase="miamon-speisekarte-qr" />
        </div>

        <div className="bg-white border hairline rounded-lg p-5 mb-8">
          <h2 className="font-semibold text-ink mb-1">So drucken Sie die Karten</h2>
          <ol className="text-sm text-ink/70 list-decimal ml-5 space-y-1 mt-2">
            <li>Klicken Sie auf <strong>Drucken</strong> oben rechts.</li>
            <li>Wählen Sie <strong>A4</strong> als Papiergröße und <strong>Hintergrundgrafiken aktivieren</strong>.</li>
            <li>Schneiden Sie entlang der gestrichelten Linien.</li>
            <li>Empfehlung: Karten auf 250–300 g Karton drucken oder laminieren.</li>
          </ol>
        </div>

        <h2 className="font-[family-name:var(--font-playfair)] text-xl text-ink mb-4">Vorschau</h2>
      </div>

      <div className="qr-print-area max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 print:gap-0 print:block">
        <div style={{ containerType: "inline-size" }}>
          <PrintCard
            size="A6"
            label="A6 Tischkarte"
            description="Genießen Sie Ihre Mahlzeit"
            cmW={10.5}
            cmH={14.8}
            svg={svg}
          />
        </div>
        <div style={{ containerType: "inline-size" }}>
          <PrintCard
            size="A5"
            label="A5 Plakat"
            description="Willkommen bei Mia-Mon"
            cmW={14.8}
            cmH={21}
            svg={svg}
          />
        </div>
        <div style={{ containerType: "inline-size" }}>
          <PrintCard
            size="Tisch"
            label="Quadrat 10×10 cm"
            description="Zum Aufstellen"
            cmW={10}
            cmH={10}
            svg={svg}
          />
        </div>
        <div style={{ containerType: "inline-size" }}>
          <PrintCard
            size="Holder"
            label="Halter-Einsatz 6×9 cm"
            description="Für Acryl-Tischaufsteller"
            cmW={6}
            cmH={9}
            svg={svg}
          />
        </div>
      </div>

      <style>{`
        @media print {
          @page { size: A4; margin: 8mm; }
          body { background: white !important; }
        }
      `}</style>
    </main>
  );
}
