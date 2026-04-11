export default function Contact() {
  return (
    <section
      id="kontakt"
      className="py-16 sm:py-24 bg-gradient-to-br from-accent via-primary-dark to-primary text-white"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold font-[family-name:var(--font-playfair)] mb-4">
          Jetzt <span className="text-secondary">bestellen!</span>
        </h2>
        <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
          Rufen Sie uns an, schreiben Sie uns auf WhatsApp oder bestellen Sie
          bequem über Foodora.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <a
            href="https://wa.me/436603440568"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white rounded-2xl p-6 transition-all hover:scale-105 shadow-lg"
          >
            <span className="text-3xl block mb-2">💬</span>
            <span className="font-bold text-lg block">WhatsApp</span>
            <span className="text-sm opacity-80">Nachricht senden</span>
          </a>

          <a
            href="tel:+436603440568"
            className="bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-2xl p-6 transition-all hover:scale-105"
          >
            <span className="text-3xl block mb-2">📞</span>
            <span className="font-bold text-lg block">Anrufen</span>
            <span className="text-sm opacity-80">+43 660 344 05 68</span>
          </a>

          <a
            href="https://www.foodora.at"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-2xl p-6 transition-all hover:scale-105"
          >
            <span className="text-3xl block mb-2">🩷</span>
            <span className="font-bold text-lg block">Foodora</span>
            <span className="text-sm opacity-80">Online bestellen</span>
          </a>
        </div>
      </div>
    </section>
  );
}
