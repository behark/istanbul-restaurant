export type AllergenCode =
  | "A" | "B" | "C" | "D" | "E" | "F" | "G" | "H"
  | "L" | "M" | "N" | "O" | "P" | "R";

export const allergenLabels: Record<AllergenCode, string> = {
  A: "Glutenhaltiges Getreide",
  B: "Krebstiere",
  C: "Eier von Geflügel",
  D: "Fisch",
  E: "Erdnüsse",
  F: "Sojabohnen",
  G: "Milch (inkl. Laktose)",
  H: "Schalenfrüchte",
  L: "Sellerie",
  M: "Senf",
  N: "Sesamsamen",
  O: "Schwefeldioxid und Sulfite",
  P: "Lupinen",
  R: "Weichtiere (Schnecken, Muscheln, Tintenfische)",
};
