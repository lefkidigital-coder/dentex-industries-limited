import type { Product } from "./products";

export const INDUSTRY_OPTIONS = [
  { key: "pharma", label: "Pharma" },
  { key: "food", label: "Food & Beverage" },
  { key: "cosmetics", label: "Cosmetics" },
  { key: "automotive", label: "Automotive" },
  { key: "agrochemical", label: "Agrochemical" },
  { key: "industrial", label: "Industrial & Allied" },
] as const;

export type IndustryKey = (typeof INDUSTRY_OPTIONS)[number]["key"];
export function isIndustryKey(value: string): value is IndustryKey {
  return INDUSTRY_OPTIONS.some((industry) => industry.key === value);
}

/** Multi-sector merchandising based on existing catalogue applications, not certification claims. */
export function productIndustries(product: Product): IndustryKey[] {
  const text = `${product.desc} ${product.specs.industryFit}`.toLowerCase();
  const result = new Set<IndustryKey>();
  if (/pharma|supplement/.test(text)) result.add("pharma");
  if (/food|beverage|water|spice|seasoning|herb/.test(text)) result.add("food");
  if (/cosmetic|personal care|cream/.test(text)) result.add("cosmetics");
  if (/battery acid|lubricant|automotive/.test(text)) result.add("automotive");
  if (/agricultur|agrochemical|crop/.test(text)) result.add("agrochemical");
  if (/industrial|chemical|laboratory/.test(text)) result.add("industrial");
  // These are the existing industry's jerrycan range associations.
  if (product.category === "jerrycans") {
    result.add("automotive");
    result.add("agrochemical");
    result.add("industrial");
  }
  return [...result];
}