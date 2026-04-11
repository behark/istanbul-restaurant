export default function About() {
  return (
    <section id="ueber-uns" className="py-16 sm:py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold font-[family-name:var(--font-playfair)] text-accent mb-6">
              Über <span className="text-primary">Istanbul</span> Restaurant
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Willkommen im Istanbul Restaurant in Wels! Wir bringen Ihnen die
              authentischen Aromen der türkischen und mediterranen Küche direkt
              auf den Teller. Unsere Gerichte werden täglich frisch zubereitet
              — mit traditionellen Rezepten, hochwertigen Zutaten und der
              Leidenschaft unserer Köche.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Von saftigen Kebabs über knusprige Pide bis zu süßem Baklava
              — bei uns erleben Sie den echten Geschmack der Türkei.
              Genießen Sie unser Essen im Restaurant, auf unserer
              gemütlichen Terrasse oder bestellen Sie bequem über WhatsApp
              und Foodora.
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: "🔥", text: "Vom Holzkohlegrill" },
                { icon: "🌿", text: "Frische Zutaten" },
                { icon: "👨‍🍳", text: "Traditionelle Rezepte" },
                { icon: "☀️", text: "Terrasse vorhanden" },
              ].map((f) => (
                <div
                  key={f.text}
                  className="flex items-center gap-3 p-3 bg-white rounded-xl"
                >
                  <span className="text-2xl">{f.icon}</span>
                  <span className="font-semibold text-accent">{f.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image placeholder */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center overflow-hidden shadow-2xl">
              <div className="text-center text-white p-8">
                <span className="text-8xl block mb-4">🕌</span>
                <p className="text-xl font-semibold opacity-80">
                  Istanbul Restaurant
                </p>
                <p className="text-sm opacity-60 mt-2">Wels, Österreich</p>
              </div>
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 bg-secondary text-accent rounded-2xl px-6 py-3 shadow-xl font-bold">
              ⭐ 4,7 Sterne auf Google
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
