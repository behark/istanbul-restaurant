export const restaurantInfo = {
  name: "Pizzeria Mia-Mon",
  phone: "+43 681 818 10408",
  phoneTel: "tel:+4368181810408",
  url: "https://miamon.at",
  welcome: {
    title: "Herzlich willkommen!",
    body: [
      "Schön, dass Sie bei uns sind!",
      "Wir freuen uns, Sie mit frisch zubereiteten Speisen und ausgewählten Getränken verwöhnen zu dürfen.",
      "Alle unsere Gerichte werden mit viel Liebe, regionalen Zutaten und größter Sorgfalt zubereitet.",
      "Genießen Sie die gemütliche Atmosphäre, lassen Sie den Alltag hinter sich und verbringen Sie eine angenehme Zeit bei uns!",
    ],
    signature: "Ihr Restaurant Pizzeria Mia-Mon",
  },
  hours: {
    standard: { days: "Mo, Di, Mi, Sa, So", lunch: "11:00 – 14:00", dinner: "17:00 – 22:00" },
    friday: { days: "Freitag", dinner: "17:00 – 22:00" },
    closed: "Donnerstag Ruhetag",
    note: "Warme Küche täglich bis 21:30",
  },
  closing: "Vielen Dank und bis zum nächsten Mal!",
  team: "Team Mia-Mon",
} as const;
