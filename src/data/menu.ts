import type { AllergenCode } from "./allergens";

export type PriceVariant = { label: string; price: number };

export type MenuItem = {
  name: string;
  description?: string;
  price?: number;
  variants?: PriceVariant[];
  allergens?: AllergenCode[];
  badge?: "spicy" | "vegetarian" | "house" | "kids" | "new";
};

export type MenuCategory = {
  id: string;
  name: string;
  nameEn: string;
  intro?: string;
  note?: string;
  showOnHome?: boolean;
  items: MenuItem[];
};

export const menuData: MenuCategory[] = [
  {
    id: "suppen",
    name: "Suppen",
    nameEn: "Soups",
    showOnHome: true,
    items: [
      { name: "Frittatensuppe", price: 4.8, allergens: ["A", "G", "C"] },
      { name: "Tomatensuppe", price: 5.8, allergens: ["L", "G"] },
    ],
  },
  {
    id: "salate",
    name: "Salate",
    nameEn: "Salads",
    showOnHome: true,
    items: [
      { name: "Kleiner gemischter Salat", description: "Hausdressing.", price: 5.4, allergens: ["A", "M"] },
      { name: "Haus Salat", description: "Gem. Salat mit Hähnchenstreifen & Hausdressing.", price: 15.6, allergens: ["A", "M"] },
      { name: "Salat Tonno", description: "Gem. Salat mit Thunfisch & Hausdressing.", price: 15.6, allergens: ["A", "M", "D"] },
      { name: "Salat Feta", description: "Gem. Salat mit Fetakäse & Hausdressing.", price: 15.6, allergens: ["A", "M"], badge: "vegetarian" },
    ],
  },
  {
    id: "burger",
    name: "Burger",
    nameEn: "Burgers",
    showOnHome: true,
    items: [
      { name: "Haus Burger", description: "1× Rinderhackfleisch 180 g, Tomaten, Gurken, Käse, Zwiebel & Wedges.", price: 15.5, allergens: ["A", "G", "C", "M"] },
      { name: "Rucola Burger", description: "1× Rinderhackfleisch, Tomaten, Rucola, Parmesan & Wedges.", price: 16.5, allergens: ["A", "G", "C", "M"] },
      { name: "Chefkoch Burger", description: "2× Rinderhackfleisch, Tomaten, Gurken, Käse, Spiegelei, Bacon, Zwiebel & Wedges.", price: 22.5, allergens: ["A", "G", "C", "M"], badge: "house" },
    ],
  },
  {
    id: "nudeln",
    name: "Nudelgerichte",
    nameEn: "Pasta",
    showOnHome: true,
    items: [
      { name: "Funghi", description: "Tagliatelle, Pilze, Cremesauce.", price: 13.9, allergens: ["A", "C", "G"], badge: "vegetarian" },
      { name: "Carbonara", description: "Tagliatelle, Speck, Sahnecremesauce.", price: 14.9, allergens: ["A", "C", "G"] },
      { name: "Alfredo", description: "Tagliatelle, Hühnerstreifen, Cremesauce, Ruccola, Parmesan.", price: 16.9, allergens: ["A", "C", "G"] },
      { name: "Frutti di Mare", description: "Tagliatelle, Meeresfrüchte, Knoblauch, Tomatensauce.", price: 17.9, allergens: ["A", "D", "R", "G", "C"] },
      { name: "Mia-Mon", description: "Tagliatelle, Hühnerstreifen, Cremesauce, Pesto, Parmesan.", price: 16.9, allergens: ["A", "C", "G"], badge: "house" },
    ],
  },
  {
    id: "hauptgerichte",
    name: "Hauptgerichte",
    nameEn: "Main Courses",
    showOnHome: true,
    items: [
      { name: "Schnitzel „Wiener Art\"", description: "Paniertes Schweineschnitzel & Pommes.", price: 16.9, allergens: ["A", "C", "G", "O", "L"] },
      { name: "Cordon Bleu", description: "Gefüllt mit Mozzarella, Zwiebeln, Speck & Pommes.", price: 18.9, allergens: ["A", "C", "G", "O", "L"] },
      { name: "Cevapcici", description: "10 Cevapcici, Ajvar, Zwiebeln & Pommes.", price: 14.9, allergens: ["A", "L"] },
      { name: "Pola-Pola", description: "4 Cevapcici, Schweinespieß, Ajvar, Zwiebeln & Pommes.", price: 14.9, allergens: ["L", "O"] },
      { name: "Big Steak", description: "Hackfleisch gefüllt mit Fetakäse, Ajvar, Zwiebeln & Pommes.", price: 19.9, allergens: ["G", "L"] },
      { name: "Mix-Grill", description: "2 Cevapcici, Schweinespieß, Pljeskavica, Hähnchen, Grillspeck, Würstel & Pommes.", price: 23.9, allergens: ["A", "L", "O"] },
      { name: "Schweinemedaillons", description: "Mit Jägersauce & Spätzle.", price: 20.9, allergens: ["G", "L"] },
      { name: "Zwiebelrostbraten", description: "Rindersteak, Zwiebelschmelz, Bratensauce & Spätzle.", price: 27.9, allergens: ["A", "C", "G", "L"] },
      { name: "Rumpsteak", description: "Rosa gebraten & Pommes.", price: 24.9 },
      { name: "Käsespätzle", description: "Käsespätzle & Zwiebelschmelz.", price: 12.9, allergens: ["A", "C", "G"], badge: "vegetarian" },
    ],
  },
  {
    id: "pizza",
    name: "Pizza aus dem Holzofen",
    nameEn: "Wood-fired Pizza",
    intro: "Unsere frische Pizza aus dem Holzofen.",
    note: "Extra Belag 2,00 €",
    showOnHome: true,
    items: [
      { name: "Margherita", description: "Tomaten, Käse, Oregano.", price: 10.9, allergens: ["A", "G"], badge: "vegetarian" },
      { name: "Funghi", description: "Tomaten, Käse, Champignons.", price: 11.9, allergens: ["A", "G"], badge: "vegetarian" },
      { name: "Schinken", description: "Tomaten, Käse, Schinken.", price: 11.9, allergens: ["A", "G"] },
      { name: "Salami", description: "Tomaten, Käse, Salami.", price: 11.9, allergens: ["A", "G"] },
      { name: "Hawaii", description: "Tomaten, Käse, Schinken, Ananas.", price: 13.9, allergens: ["A", "G"] },
      { name: "Tonno", description: "Tomaten, Käse, Thunfisch, Zwiebel.", price: 12.9, allergens: ["A", "G", "D"] },
      { name: "Regina", description: "Tomaten, Käse, Schinken, Champignons, Paprika, Knoblauch.", price: 13.9, allergens: ["A", "G"] },
      { name: "Vegetarisch", description: "Tomaten, Käse, Champignons, Paprika, Oliven, Zwiebel, Mais, Knoblauch.", price: 13.9, allergens: ["A", "G"], badge: "vegetarian" },
      { name: "Frutti di Mare", description: "Tomaten, Käse, Meeresfrüchte, Knoblauch.", price: 14.4, allergens: ["A", "G", "D"] },
      { name: "Monaco", description: "Tomaten, Käse, Schinken, Champignons, Ei, Mais.", price: 13.6, allergens: ["A", "C", "G"] },
      { name: "Diavolo", description: "Tomaten, Käse, Schinken, scharfe Salami, scharfe Pfefferoni.", price: 13.9, allergens: ["A", "G", "M"], badge: "spicy" },
      { name: "Capricciosa", description: "Tomaten, Käse, Schinken, Salami, Champignons.", price: 13.9, allergens: ["A", "G", "M"] },
      { name: "Mia-Mon", description: "Tomaten, Käse, scharfe Salami, Schinken, Champignons, Hähnchenstreifen, Knoblauch.", price: 16.9, allergens: ["A", "G", "M"], badge: "house" },
      { name: "Rollita gerollt", description: "Tomaten, Käse, Schinken, Speck, Cocktailtomaten, Mini Mozzarella, Olivenöl, Ruccola.", price: 19.4, allergens: ["A", "G"] },
      { name: "San Daniele", description: "Tomaten, Käse, San Daniele Schinken, Cocktailtomaten, Ruccola, Parmesan.", price: 15.9, allergens: ["A", "G", "M"] },
      { name: "Calzone", description: "Tomaten, Käse, Schinken, Champignons.", price: 13.5, allergens: ["A", "G", "M"] },
      { name: "Bianca", description: "Käse, Sahnecremesauce, San Daniele Schinken, Cocktailtomaten, Ruccola, Parmesan.", price: 15.8, allergens: ["A", "G", "M"] },
      { name: "Bianca Vegetarisch", description: "Käse, Sahnecremesauce, Champignons, Paprika, Oliven, Zwiebel, Mais, Knoblauch.", price: 14.4, allergens: ["A", "G"], badge: "vegetarian" },
    ],
  },
  {
    id: "grill-platte",
    name: "Grill Platte",
    nameEn: "Grill Platter",
    intro: "Cevapcici, Raznjici, Schnitzel, Hähnchenbrust, Grillspeck, Pommes, Ajvar & Knoblauchbrot.",
    items: [
      { name: "Für 2 Personen", price: 44.9 },
      { name: "Für 3 Personen", price: 68.9 },
      { name: "Für 4 Personen", price: 86.9 },
    ],
  },
  {
    id: "kinder",
    name: "Für unsere kleinen Gäste",
    nameEn: "Kids (up to 12)",
    intro: "Für unsere kleinen Gäste bis 12 Jahre.",
    items: [
      { name: "Chicken Nuggets", description: "Hähnchen Nuggets & Pommes.", price: 9.8, allergens: ["A", "C", "G", "L"], badge: "kids" },
      { name: "Mozzarella Sticks", description: "Mit Pommes.", price: 9.7, allergens: ["A", "G", "E"], badge: "kids" },
      { name: "Kinder Pasta", description: "Tomatensauce.", price: 8.7, allergens: ["A", "L"], badge: "kids" },
      { name: "Pinocchio", description: "Kleines Hähnchen- oder Schweineschnitzel & Pommes.", price: 8.7, allergens: ["A", "C", "G"], badge: "kids" },
    ],
  },
  {
    id: "beilagen",
    name: "Beilagen",
    nameEn: "Sides",
    items: [
      { name: "Pizzabrot", price: 5.8, allergens: ["A"] },
      { name: "Pizzabrot mit Knoblauch", price: 7.2, allergens: ["A"] },
      { name: "Pommes", price: 4.8 },
      { name: "Wedges", price: 5.9 },
      { name: "Ketchup oder Mayonnaise", price: 0.8, allergens: ["C", "M", "L", "O"] },
    ],
  },
  {
    id: "kaffee",
    name: "Kaffee",
    nameEn: "Coffee",
    items: [
      { name: "Espresso", price: 3.2 },
      { name: "Doppelter Espresso", price: 4.2 },
      { name: "Cappuccino", price: 4.2 },
      { name: "Latte Macchiato", price: 4.9 },
      { name: "Kakao", price: 4.5 },
      { name: "Tee (div. Sorten)", price: 3.2 },
    ],
  },
  {
    id: "dessert",
    name: "Dessert",
    nameEn: "Dessert",
    items: [
      { name: "Heiße Liebe", description: "Heiße Himbeeren mit Vanilleeis.", price: 8.8, allergens: ["G"] },
      { name: "Palatschinken", description: "Mit 2 Kugeln Vanilleeis, Nutella oder Marmelade nach Wunsch.", price: 10.8, allergens: ["A", "C", "G"] },
      { name: "Eisespresso", description: "Mit Kugel Vanilleeis.", price: 5.8, allergens: ["G"] },
      { name: "Gemischtes Eis", description: "Mit Schlagobers, Schoko, Vanille, Erdbeere.", price: 7.2, allergens: ["G"] },
    ],
  },
  {
    id: "bier",
    name: "Bier",
    nameEn: "Beer",
    intro: "Eggenberger.",
    items: [
      { name: "Hopfenkönig Helles Bier", variants: [{ label: "0,3 L", price: 4.5 }, { label: "0,5 L", price: 4.9 }] },
      { name: "Hefe Weizen Hell Erdinger", variants: [{ label: "0,5 L", price: 5.4 }] },
      { name: "Radler", variants: [{ label: "0,3 L", price: 4.5 }, { label: "0,5 L", price: 4.9 }] },
      { name: "Alkoholfreies Bier", variants: [{ label: "0,5 L", price: 4.9 }] },
    ],
  },
  {
    id: "spirituosen",
    name: "Spirituosen",
    nameEn: "Spirits",
    items: [
      { name: "Amaretto", variants: [{ label: "2 cl", price: 4.5 }] },
      { name: "Marillenschnaps", variants: [{ label: "2 cl", price: 4.5 }] },
      { name: "Williams", variants: [{ label: "2 cl", price: 4.5 }] },
      { name: "Ramazzotti", variants: [{ label: "4 cl", price: 5.5 }] },
      { name: "Bacardi Cola", variants: [{ label: "4 cl", price: 5.5 }] },
      { name: "Jack Daniel's Cola", price: 6.2 },
    ],
  },
  {
    id: "alkoholfrei",
    name: "Alkoholfreie Getränke",
    nameEn: "Soft Drinks",
    items: [
      { name: "Coca Cola", variants: [{ label: "0,33 L", price: 4.2 }] },
      { name: "Cola Zero", variants: [{ label: "0,33 L", price: 4.2 }] },
      { name: "Fanta", variants: [{ label: "0,33 L", price: 4.2 }] },
      { name: "Sprite", variants: [{ label: "0,33 L", price: 4.2 }] },
      { name: "Mezzo Mix", variants: [{ label: "0,33 L", price: 4.2 }] },
      { name: "Almdudler", variants: [{ label: "0,35 L", price: 4.2 }] },
      { name: "Eistee Pfirsich", variants: [{ label: "0,33 L", price: 4.2 }] },
      { name: "Eistee Zitrone", variants: [{ label: "0,33 L", price: 4.2 }] },
      { name: "Sodawasser Zitrone", variants: [{ label: "0,3 L", price: 3.5 }, { label: "0,5 L", price: 4.0 }] },
      { name: "Leitungswasser Zitrone", price: 2.5 },
      { name: "Völsauer Soda & Still", variants: [{ label: "0,33 L", price: 3.8 }, { label: "0,75 L", price: 5.4 }] },
      { name: "Pfanner", description: "Apfel, Johannisbeere, Erdbeer, Maracuja, Orange.", variants: [{ label: "0,2 L", price: 3.9 }] },
      { name: "Pfanner Leitung", price: 4.6 },
      { name: "Pfanner Gespritzt", price: 4.9 },
    ],
  },
  {
    id: "weisswein",
    name: "Weißweine",
    nameEn: "White Wines",
    items: [
      { name: "Veltliner Weinzierl", variants: [{ label: "1/8", price: 3.9 }, { label: "1/4", price: 6.9 }] },
      { name: "Sommergespritzter", variants: [{ label: "1/4", price: 4.5 }] },
      { name: "Süßergespritzter", variants: [{ label: "1/4", price: 4.6 }] },
      { name: "Aperol Spritzer", variants: [{ label: "1/4", price: 7.4 }] },
      { name: "Hugo", variants: [{ label: "1/4", price: 7.4 }] },
      { name: "Lillet Wildberry", variants: [{ label: "1/4", price: 7.4 }] },
    ],
  },
  {
    id: "rotwein",
    name: "Rotweine",
    nameEn: "Red Wines",
    note: "Plavac – trockener Wein, Fruchtaromen, herber Geschmack.",
    items: [
      { name: "Plavac (Hauswein) Trocken", variants: [{ label: "1/8", price: 4.2 }, { label: "1/4", price: 7.2 }, { label: "0,75 L", price: 26.5 }] },
      { name: "Lambrusco Rosso", variants: [{ label: "1/8", price: 3.9 }, { label: "1/4", price: 6.9 }] },
      { name: "Rotwein Gespritzt", variants: [{ label: "1/4", price: 4.2 }] },
      { name: "Cola Rot", variants: [{ label: "1/4", price: 4.6 }] },
    ],
  },
];
