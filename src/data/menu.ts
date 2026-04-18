export type MenuItem = {
  name: string;
  description?: string;
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
    id: "suppen",
    name: "Suppen",
    nameEn: "Soups",
    icon: "",
    items: [
      { name: "Frittatensuppe", price: 4.8, allergens: ["A", "C", "G"] },
      { name: "Tomatensuppe", price: 5.8, allergens: ["L", "G"] },
    ],
  },
  {
    id: "salate",
    name: "Salate",
    nameEn: "Salads",
    icon: "",
    items: [
      {
        name: "Kleiner gemischter Salat",
        description: "Hausdressing",
        price: 4.4,
        allergens: ["A", "M"],
      },
      {
        name: "Spezialsalat",
        description:
          "Blattsalat, Tomaten, Gurke, Karotten, Hausdressing – wähle dein Topping.",
        price: 9.4,
        allergens: ["L", "G", "M"],
      },
      { name: "+ Hähnchenstreifen", price: 6.2 },
      { name: "+ Thunfisch", price: 6.2 },
      { name: "+ Fetakäse", price: 6.2 },
      { name: "+ Scampi", price: 7.4 },
    ],
  },
  {
    id: "grill",
    name: "Vom Grill",
    nameEn: "From the Grill",
    icon: "",
    items: [
      {
        name: "Schnitzel Wiener Art",
        description: "Paniertes Schweineschnitzel mit Pommes.",
        price: 15.4,
        allergens: ["A", "C", "G", "O", "L"],
      },
      {
        name: "Cordon Bleu",
        description: "Gefüllt mit Mozzarella, Zwiebeln, Speck, Pommes.",
        price: 18.8,
        allergens: ["A", "C", "G", "O", "L"],
      },
      {
        name: "Cevapcici",
        description:
          "8 Cevapcici, Ajvar, Zwiebeln, Pommes oder nach Wunsch Fladenbrot.",
        price: 13.8,
        allergens: ["A", "L"],
      },
      {
        name: "Cevapcici (kleine Portion)",
        description:
          "6 Cevapcici, Ajvar, Zwiebeln, Pommes oder nach Wunsch Fladenbrot.",
        price: 10.8,
        allergens: ["A", "L"],
      },
      {
        name: "Pola-Pola",
        description: "4 Cevapcici, Schweinespieß, Ajvar, Zwiebeln, Pommes.",
        price: 13.8,
        allergens: ["A", "L", "O"],
      },
      {
        name: "Raznjici",
        description: "2 Schweinespieße, Ajvar, Zwiebeln, Pommes.",
        price: 13.8,
        allergens: ["A", "L", "O"],
      },
      {
        name: "Big Steak",
        description:
          "Hackfleisch gefüllt mit Fetakäse, Ajvar, Zwiebeln und Pommes.",
        price: 18.8,
        allergens: ["G", "L"],
      },
      {
        name: "Mix-Grill",
        description:
          "2 Cevapcici, Schweinespieß, Pljeskavica, Hähnchen, Grillspeck, Würstel, Pommes.",
        price: 21.8,
        allergens: ["A", "L", "O"],
      },
    ],
  },
  {
    id: "nudeln",
    name: "Nudelgerichte",
    nameEn: "Pasta",
    icon: "",
    items: [
      {
        name: "Fungi",
        description: "Tagliatelle, Pilze, Cremesauce.",
        price: 12.6,
        allergens: ["A", "C", "G"],
      },
      {
        name: "Carbonara",
        description: "Tagliatelle, Speck, Sahnecremesauce.",
        price: 13.8,
        allergens: ["A", "C", "G"],
      },
      {
        name: "Alfredo",
        description:
          "Tagliatelle, Hähnchenstreifen, Cremesauce, Brokkoli, Parmesan.",
        price: 15.9,
        allergens: ["A", "C", "G"],
      },
      {
        name: "Frutti di Mare",
        description: "Tagliatelle, Meeresfrüchte, Knoblauch, Tomatensauce.",
        price: 16.8,
        allergens: ["A", "O", "R", "C"],
      },
      {
        name: "Scampi",
        description: "Tagliatelle, Scampi, Knoblauch.",
        price: 23.8,
        allergens: ["A", "O", "R", "C"],
      },
    ],
  },
  {
    id: "pizza",
    name: "Pizza aus dem Holzofen",
    nameEn: "Wood-fired Pizza",
    icon: "",
    items: [
      { name: "Marinara", description: "Tomaten, Knoblauch, Oregano.", price: 6.9 },
      { name: "Margherita", description: "Tomaten, Käse, Oregano.", price: 9.9 },
      {
        name: "Funghi",
        description: "Tomaten, Käse, Champignons.",
        price: 11.9,
      },
      {
        name: "Salami",
        description: "Tomaten, Käse, Salami.",
        price: 11.9,
      },
      {
        name: "Vesuvio",
        description: "Tomaten, Käse, Schinken.",
        price: 11.9,
      },
      {
        name: "Tonno",
        description: "Tomaten, Käse, Thunfisch, Zwiebeln.",
        price: 12.9,
      },
      {
        name: "Hawaii",
        description: "Tomaten, Käse, Schinken, Ananas.",
        price: 12.9,
      },
      {
        name: "Capricciosa",
        description: "Tomaten, Käse, Schinken, Champignons, Artischocken.",
        price: 13.9,
      },
      {
        name: "Regina",
        description: "Tomaten, Käse, Schinken, Champignons.",
        price: 13.9,
      },
      {
        name: "Calzone",
        description: "Tomaten, Käse, Schinken, Champignons.",
        price: 13.9,
      },
      {
        name: "Vegetarisch",
        description: "Tomaten, Käse, saisonales Gemüse.",
        price: 13.9,
      },
      {
        name: "Pizza Bianche",
        description: "Käse, Crème fraîche, Speck, Zwiebeln, Knoblauch.",
        price: 13.9,
      },
      {
        name: "Frutti di Mare",
        description: "Tomaten, Käse, Meeresfrüchte, Knoblauch.",
        price: 14.4,
      },
      {
        name: "San Daniele",
        description: "Tomaten, Käse, San Daniele Rohschinken, Cocktailtomaten.",
        price: 15.6,
      },
      {
        name: "Mia-Mon",
        description: "Unsere Hauspizza – fragen Sie unser Team.",
        price: 16.9,
      },
      {
        name: "Rolita Gerollt",
        description: "Gerollte Pizza – gefüllt nach Wahl.",
        price: 19.8,
      },
    ],
  },
  {
    id: "extras",
    name: "Extras",
    nameEn: "Extras",
    icon: "",
    items: [
      { name: "San Daniele Rohschinken", price: 2.2 },
      { name: "Mini Mozzarella", price: 2.2 },
    ],
  },
];
