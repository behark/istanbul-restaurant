export type MenuItem = {
  name: string;
  description: string;
  price: number;
  allergens?: string[];
};

export type MenuCategory = {
  id: string;
  name: string;
  nameEn: string;
  icon: string;
  items: MenuItem[];
};

export const menuData: MenuCategory[] = [
  {
    id: "vorspeisen",
    name: "Vorspeisen",
    nameEn: "Starters",
    icon: "🥣",
    items: [
      {
        name: "Ezme",
        description:
          "Würzige türkische Paste aus fein gehackten Tomaten, Paprika und Kräutern.",
        price: 5.9,
        allergens: ["O"],
      },
      {
        name: "Humus",
        description:
          "Cremiges Kichererbsenpüree mit Tahini, Zitronensaft und Olivenöl.",
        price: 5.9,
        allergens: ["N"],
      },
      {
        name: "Cacik",
        description:
          "Erfrischender Joghurt-Dip mit Gurke, Knoblauch und Minze.",
        price: 4.9,
        allergens: ["G"],
      },
      {
        name: "Mercimek Corbasi",
        description: "Traditionelle rote Linsensuppe mit Gewürzen und Zitrone.",
        price: 5.5,
        allergens: ["L"],
      },
      {
        name: "Sigara Börek",
        description:
          "Knusprige Filoteig-Röllchen gefüllt mit Schafskäse und Petersilie.",
        price: 6.9,
        allergens: ["A", "C", "G"],
      },
      {
        name: "Babaganoush",
        description:
          "Rauchiges Auberginenpüree mit Tahini, Knoblauch und Olivenöl.",
        price: 5.9,
        allergens: ["N"],
      },
    ],
  },
  {
    id: "kebab",
    name: "Kebab",
    nameEn: "Kebab",
    icon: "🥙",
    items: [
      {
        name: "Iskender Kebab",
        description:
          "Dünne Döner-Scheiben auf Fladenbrot mit Tomatensauce, Joghurt und zerlassener Butter.",
        price: 14.9,
        allergens: ["A", "G"],
      },
      {
        name: "Adana Kebab",
        description:
          "Würziger Hackfleisch-Kebab vom Grill, serviert mit Reis und gegrilltem Gemüse.",
        price: 13.9,
      },
      {
        name: "Döner Kebab",
        description:
          "Klassischer Döner im Fladenbrot mit frischem Salat und Joghurtsauce.",
        price: 7.5,
        allergens: ["A", "G"],
      },
      {
        name: "Döner Teller",
        description:
          "Döner-Fleisch serviert mit Reis, Salat und Joghurtsauce.",
        price: 11.9,
        allergens: ["G"],
      },
      {
        name: "Lahmacun",
        description:
          "Dünne türkische Pizza mit Hackfleisch, Gemüse und Kräutern.",
        price: 4.5,
        allergens: ["A"],
      },
      {
        name: "Dürüm",
        description:
          "Döner-Fleisch im gerollten Lavash-Brot mit Salat und Sauce.",
        price: 7.9,
        allergens: ["A", "G"],
      },
      {
        name: "Chicken Kebab",
        description:
          "Zartes Hähnchenfleisch vom Grill mit Reis und gegrilltem Gemüse.",
        price: 12.9,
      },
      {
        name: "Mixed Grill",
        description:
          "Auswahl verschiedener Grillspezialitäten: Adana, Hähnchen und Lammkoteletts mit Beilagen.",
        price: 16.9,
        allergens: ["G"],
      },
    ],
  },
  {
    id: "pizza",
    name: "Pizza & Pide",
    nameEn: "Pizza & Pide",
    icon: "🫓",
    items: [
      {
        name: "Sucuk Pizza",
        description:
          "Tomatensauce, Mozzarella und türkische Knoblauchwurst (Sucuk).",
        price: 11.9,
        allergens: ["A", "G"],
      },
      {
        name: "Margherita",
        description: "Tomatensauce, Mozzarella und frisches Basilikum.",
        price: 9.9,
        allergens: ["A", "G"],
      },
      {
        name: "Karisik Tost",
        description:
          "Türkischer Toast mit Käse, Sucuk, Tomaten und Paprika.",
        price: 6.9,
        allergens: ["A", "G"],
      },
      {
        name: "Pide mit Käse",
        description:
          "Türkisches Fladenbrot in Schiffchenform mit Mozzarella und Feta.",
        price: 9.9,
        allergens: ["A", "G"],
      },
      {
        name: "Pide mit Hackfleisch",
        description:
          "Türkisches Fladenbrot mit gewürztem Hackfleisch, Tomaten und Paprika.",
        price: 10.9,
        allergens: ["A"],
      },
    ],
  },
  {
    id: "salate",
    name: "Salate",
    nameEn: "Salads",
    icon: "🥗",
    items: [
      {
        name: "Hirtensalat / Coban Salat",
        description:
          "Frischer türkischer Salat mit Tomaten, Gurken, Paprika, Zwiebeln und Petersilie.",
        price: 7.9,
      },
      {
        name: "Fattoush",
        description:
          "Orientalischer Salat mit knusprigen Fladenbrot-Stücken, Gemüse und Sumach-Dressing.",
        price: 8.9,
        allergens: ["A"],
      },
      {
        name: "Tabule",
        description:
          "Libanesischer Petersiliensalat mit Bulgur, Tomaten, Minze und Zitronendressing.",
        price: 7.9,
        allergens: ["A"],
      },
    ],
  },
  {
    id: "hauptgerichte",
    name: "Hauptgerichte",
    nameEn: "Main Courses",
    icon: "🍖",
    items: [
      {
        name: "Köfte Teller",
        description:
          "Hausgemachte türkische Frikadellen vom Grill, serviert mit Reis und Salat.",
        price: 12.9,
      },
      {
        name: "Beyti",
        description:
          "Gegrilltes Hackfleisch im Lavash-Brot, serviert mit Tomatensauce und Joghurt.",
        price: 14.9,
        allergens: ["A", "G"],
      },
      {
        name: "Ali Nazik",
        description:
          "Gegrillte Lammstücke auf rauchigem Auberginenpüree mit Knoblauchjoghurt.",
        price: 15.9,
        allergens: ["G"],
      },
    ],
  },
  {
    id: "getraenke",
    name: "Getränke",
    nameEn: "Drinks",
    icon: "🍵",
    items: [
      {
        name: "Ayran",
        description: "Erfrischendes türkisches Joghurtgetränk.",
        price: 2.5,
        allergens: ["G"],
      },
      {
        name: "Türkischer Tee",
        description: "Traditioneller schwarzer Tee im Glas serviert.",
        price: 2.0,
      },
      {
        name: "Türkischer Kaffee",
        description:
          "Fein gemahlener Kaffee, traditionell in der Cezve zubereitet.",
        price: 3.5,
      },
      {
        name: "Cola",
        description: "",
        price: 2.5,
      },
      {
        name: "Wasser",
        description: "",
        price: 1.5,
      },
    ],
  },
  {
    id: "desserts",
    name: "Desserts",
    nameEn: "Desserts",
    icon: "🍯",
    items: [
      {
        name: "Baklava",
        description:
          "Knuspriges Blätterteig-Gebäck mit Walnüssen und Zuckersirup.",
        price: 5.5,
        allergens: ["A", "H"],
      },
      {
        name: "Künefe",
        description:
          "Warmes Kadayif-Gebäck mit geschmolzenem Käse und Zuckersirup, garniert mit Pistazien.",
        price: 7.9,
        allergens: ["A", "G", "H"],
      },
      {
        name: "Sütlac / Reispudding",
        description:
          "Cremiger türkischer Reispudding, im Ofen karamellisiert.",
        price: 5.0,
        allergens: ["G"],
      },
    ],
  },
  {
    id: "combos",
    name: "Combo Deals",
    nameEn: "Combo Deals",
    icon: "🥤",
    items: [
      {
        name: "Kebab Combo",
        description:
          "Döner Kebab oder Dürüm mit einer Coca-Cola (0,33l) zum Sparpreis.",
        price: 10.8,
        allergens: ["A", "G"],
      },
    ],
  },
];
