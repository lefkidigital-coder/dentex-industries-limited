import type { Product } from "./products";

export const INDUSTRY_OPTIONS = [
  { key: "pharma", label: "Pharmaceutical" },
  { key: "food", label: "Food & Beverage" },
  { key: "cosmetics", label: "Cosmetics" },
  { key: "automotive", label: "Automotive" },
  // Preserve the URL key used by existing links.
  { key: "agrochemical", label: "Agrovet" },
  { key: "industrial", label: "Industrial & Allied" },
] as const;

export type IndustryKey = (typeof INDUSTRY_OPTIONS)[number]["key"];
export function isIndustryKey(value: string): value is IndustryKey {
  return INDUSTRY_OPTIONS.some((industry) => industry.key === value);
}

export function industryLabel(key: IndustryKey): string {
  return INDUSTRY_OPTIONS.find((industry) => industry.key === key)!.label;
}

type IndustryAssignment = {
  industries: IndustryKey[];
  source: "john-workbook" | "existing-content" | "unconfirmed";
  /** Excel row numbers in Sheet2 of DENTEX PRODUCTS_01.xlsx. */
  sheet2Rows?: number[];
  reviewNote?: string;
};

const workbook = (industries: IndustryKey[], sheet2Rows: number[], reviewNote?: string): IndustryAssignment =>
  ({ industries, source: "john-workbook", sheet2Rows, reviewNote });
const existing = (industries: IndustryKey[], reviewNote: string): IndustryAssignment =>
  ({ industries, source: "existing-content", reviewNote });
const unconfirmed = (reviewNote: string): IndustryAssignment =>
  ({ industries: [], source: "unconfirmed", reviewNote });

/**
 * Explicit merchandising assignments, separate from product categories and copy.
 * Combined USES entries become multiple tags, never duplicate products.
 * Retain supported existing uses when the workbook has no exact model match.
 * Missing entries do not imply discontinuation or certification.
 * Never infer uses from substrings: "ice cream" must not imply Cosmetics.
 */
export const PRODUCT_INDUSTRY_ASSIGNMENTS: Record<string, IndustryAssignment> = {
  "1l-jerrycan-ratchet-cap": workbook(["industrial", "agrochemical", "cosmetics"], [105, 112, 117]),
  "1l-jerrycan-clear-bericap": workbook(["industrial", "agrochemical", "cosmetics"], [107]),
  "2l-jerrycan-ratchet-cap": workbook(["food"], [123]),
  "3-5l-clear-jerrycan": unconfirmed("Confirm exact capacity/model. Do not inherit uses from every jerrycan."),
  "3l-jerrycan-bericap": workbook(["industrial", "agrochemical", "cosmetics", "automotive"], [124],
    "Sheet2 covers clear 3L. Confirm the black option and the existing Automotive use."),
  "5l-black-jerrycan-bericap": existing(["food", "pharma", "agrochemical", "industrial"],
    "Black 180g has no exact Sheet2 match. Retain existing described uses for review."),
  "5l-jerrycan-new-handle-bericap": existing(["food", "pharma", "agrochemical", "industrial"],
    "The clear 200g new-handle model is not the white 240g model assigned in Sheet2."),
  "5l-jerrycan-old-handle-ratchet-cap": workbook(["food"], [93]),
  "5l-white-jerrycan-old-handle-ratchet-cap": existing(["food", "pharma", "agrochemical", "industrial"],
    "The white 200g model is not the white 155g model assigned in Sheet2."),
  "15ml-clear-bottle-red-bericap": workbook(["pharma"], [16]),
  "30ml-bottle-clear-bericap-9g": workbook(["pharma"], [17, 18]),
  "60ml-old-type-bericap-12g": workbook(["pharma"], [2, 4]),
  "100ml-old-type-bericap-16g": workbook(["pharma"], [13, 15]),
  "100ml-new-type-bottle-bericap-16g": workbook(["pharma"], [12]),
  "1l-white-battery-acid-bottle-bericap-50g": workbook(["industrial", "agrochemical", "automotive"], [87],
    "Industrial and Agrovet from Sheet2. Automotive retained from the established battery-acid application."),
  "120ml-long-neck-bottle": workbook(["agrochemical"], [5, 7, 9, 11],
    "Family match. Confirm Sheet1's 21g versus the published 22g. No weight change made."),
  "200ml-round-bottle-bericap": unconfirmed("Listed in Sheet1 but no use supplied in Sheet2."),
  "500ml-bottle-bericap": workbook(["industrial", "agrochemical"], [22, 24]),
  "500ml-bottle-ratchet-cap": workbook(["industrial", "agrochemical"], [20, 30]),
  "50gm-spice-jar": existing(["food"], "Retain established spice use. This is different from the 50g PJ jar."),
  "100gm-spice-jar": workbook(["food"], [46]),
  "250gm-screw-jar": workbook(["food", "pharma"], [38]),
  "500gm-screw-jar": existing(["food", "pharma"],
    "Confirm white screw jar: Sheet2 distinguishes a clear 500gm jar and a row labelled NOT USED."),
  "500cc-jar-white-45g": workbook(["food", "pharma"], [54]),
  "600cc-jar": workbook(["food", "pharma"], [57]),
  "800-screw-jar": existing(["food", "pharma", "cosmetics", "industrial"],
    "Confirm 800cc versus 800gm identity before matching. Both are distinct stock descriptions."),
  "1000cc-jar": workbook(["food", "pharma"], [62]),
  "1150cc-jar": workbook(["food", "pharma"], [40, 65]),
  "1kg-screw-jar": workbook(["food", "pharma"], [43]),
  "black-screw-jar": unconfirmed("Capacity unspecified. Do not match an arbitrary black jar SKU."),
  "white-round-takeaway-container": workbook(["food"], [83, 85]),
  "pet-preforms": workbook(["food"], [68, 72, 79]),
  "50g-pj-jar-39mm-pj-closure": workbook(["pharma"], [32, 34]),
  "100cc-hdpe-jar-white-cap": workbook(["food", "pharma"], [48]),
  "1kg-takeaway-lid": workbook(["food"], [82]),
  "28mm-1881-csd-cap": unconfirmed("No closure-specific industry assignment in Sheet2."),
  "28mm-ropp-cap": unconfirmed("No closure-specific industry assignment in Sheet2."),
  "28mm-bericap": unconfirmed("No closure-specific industry assignment in Sheet2."),
  "28mm-ratchet-cap": unconfirmed("No closure-specific industry assignment in Sheet2."),
  "39mm-bericap": unconfirmed("No closure-specific industry assignment in Sheet2."),
  "39mm-pj-cap": unconfirmed("No closure-specific industry assignment in Sheet2."),
  "39mm-ratchet-cap": unconfirmed("No closure-specific industry assignment in Sheet2."),
  "100cc-jar-cap": unconfirmed("No closure-specific industry assignment in Sheet2."),
  "1150cc-jar-cap": unconfirmed("No closure-specific industry assignment in Sheet2."),
  "31-5mm-lldpe-natural-plug": unconfirmed("No plug-specific industry assignment in Sheet2."),
  "10ml-measuring-cup": workbook(["food"], [132]),
  "plastic-spoons": workbook(["food"], [126, 128]),
  "plastic-forks": workbook(["food"], [130]),
  "plastic-knives": existing(["food"], "Retain food-service use from John's earlier descriptions. Absent from this workbook."),
};

export function productIndustries(product: Product): IndustryKey[] {
  return [...(PRODUCT_INDUSTRY_ASSIGNMENTS[product.slug]?.industries ?? [])];
}

export function productIndustryFit(product: Product): string {
  const keys = productIndustries(product);
  return keys.length
    ? INDUSTRY_OPTIONS.filter((industry) => keys.includes(industry.key)).map((industry) => industry.label).join(", ")
    : "Confirm the application with our team";
}
