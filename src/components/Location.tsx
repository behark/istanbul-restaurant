export default function Location() {
  return (
    <section id="standort" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold font-[family-name:var(--font-playfair)] text-accent mb-4">
            Besuchen Sie <span className="text-primary">uns</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Wir freuen uns auf Ihren Besuch!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Info cards */}
          <div className="space-y-6">
            {/* Address */}
            <div className="bg-cream rounded-2xl p-6 flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">📍</span>
              </div>
              <div>
                <h3 className="font-bold text-accent text-lg">Adresse</h3>
                <p className="text-gray-600 mt-1">
                  Salzburger Str. 102a
                  <br />
                  4600 Wels, Österreich
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-cream rounded-2xl p-6 flex items-start gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">📞</span>
              </div>
              <div>
                <h3 className="font-bold text-accent text-lg">
                  Telefon / WhatsApp
                </h3>
                <a
                  href="tel:+436603440568"
                  className="text-primary hover:text-primary-dark font-semibold text-lg mt-1 block"
                >
                  +43 660 344 05 68
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-cream rounded-2xl p-6 flex items-start gap-4">
              <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">🕐</span>
              </div>
              <div>
                <h3 className="font-bold text-accent text-lg">
                  Öffnungszeiten
                </h3>
                <div className="text-gray-600 mt-2 space-y-1">
                  <div className="flex justify-between gap-8">
                    <span>Täglich</span>
                    <span className="font-semibold">08:00 – 20:00</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="bg-cream rounded-2xl p-6 flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">👍</span>
              </div>
              <div>
                <h3 className="font-bold text-accent text-lg">Social Media</h3>
                <a
                  href="https://www.instagram.com/istanbul.restaurantwels/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary-dark font-semibold mt-1 block"
                >
                  Instagram: @istanbul.restaurantwels
                </a>
                <span className="text-xs text-gray-400">
                  1.654 Follower
                </span>
                <a
                  href="https://www.facebook.com/istanbul.restaurant.2023/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary-dark font-semibold mt-1 block"
                >
                  Facebook: istanbul.restaurant.2023
                </a>
              </div>
            </div>
          </div>

          {/* Google Maps */}
          <div className="rounded-2xl overflow-hidden shadow-xl h-full min-h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2672.0!2d14.0115!3d48.1545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4773a5a0a0a0a0a0%3A0x0!2sSalzburger+Str.+102a%2C+4600+Wels%2C+Austria!5e0!3m2!1sde!2sat!4v1"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Istanbul Restaurant Wels Standort"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
