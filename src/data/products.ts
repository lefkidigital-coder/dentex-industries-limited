/**
 * Product content, separated from presentation so it maps cleanly onto a
 * future WooCommerce catalogue (category slug + product slug + attributes).
 *
 * To add a product later: drop a new entry into PRODUCTS with an existing
 * category slug, the products page, filters, category pages and detail
 * pages all read from this file, so no layout work is needed.
 */

import jc1lBlackRatchet from "@/assets/jc-1l-black-ratchet.png.asset.json";
import jc1lGreenRatchet from "@/assets/jc-1l-green-ratchet.png.asset.json";
import jc1lWhiteRatchet from "@/assets/jc-1l-white-ratchet.png.asset.json";
import jc1lClearBericap from "@/assets/jc-1l-clear-bericap.png.asset.json";
import jc1lClearBericapAlt from "@/assets/jc-1l-clear-bericap-alt.png.asset.json";
import jc2lRatchet from "@/assets/jc-2l-ratchet.png.asset.json";
import jc35lClear from "@/assets/jc-3-5l-clear.png.asset.json";
import jc3lBlackBericap from "@/assets/jc-3l-black-bericap.png.asset.json";
import jc3lNaturalBericap from "@/assets/jc-3l-natural-bericap.png.asset.json";
import jc5lBlackBericap from "@/assets/jc-5l-black-bericap.png.asset.json";
import jc5lNewHandleBericap from "@/assets/jc-5l-newhandle-bericap.png.asset.json";
import jc5lOldHandleRatchet from "@/assets/jc-5l-oldhandle-ratchet.png.asset.json";
import jc5lWhiteOldHandleRatchet from "@/assets/jc-5l-white-oldhandle-ratchet.png.asset.json";

import bottle100mlOldBericap from "@/assets/bottle-100ml-old-type-bericap-16g.png.asset.json";
import bottle100mlOldWhite from "@/assets/bottle-100ml-old-type-white-16g.png.asset.json";
import bottle100mlNewCapped from "@/assets/bottle-100ml-new-type-white-bericap.png.asset.json";
import bottle100mlNewBericap from "@/assets/bottle-100ml-new-type-bericap-16g.png.asset.json";
import bottle60mlOldBericap from "@/assets/bottle-60ml-old-type-bericap-12g.png.asset.json";
import bottle30mlClearBericap from "@/assets/bottle-30ml-clear-bericap-9g.png.asset.json";
import bottle15mlClearRedBericap from "@/assets/bottle-15ml-clear-red-bericap.png.asset.json";
import bottle1lBatteryAcid from "@/assets/bottle-1l-white-battery-acid-bericap-50g.png.asset.json";
import bottle120mlLongneck from "@/assets/bottle-120ml-longneck-22g.png.asset.json";
import bottle120mlLongneckAlt from "@/assets/bottle-120ml-longneck-22g-alt.png.asset.json";
import bottle120mlLongneckOrange from "@/assets/bottle-120ml-longneck-orange-22g.png.asset.json";
import bottle200mlRound from "@/assets/bottle-200ml-round-red-bericap.png.asset.json";
import bottle200mlRoundNatural from "@/assets/bottle-200ml-round-bericap.png.asset.json";
import bottle200mlRoundBlack from "@/assets/bottle-200ml-round-black-20g.png.asset.json";
import bottle200mlRoundBrown from "@/assets/bottle-200ml-round-brown-20g.png.asset.json";
import bottle500mlBericap from "@/assets/bottle-500ml-bericap.png.asset.json";
import bottle500mlRatchet from "@/assets/bottle-500ml-ratchet-28g.png.asset.json";
import bottle500mlPetClear from "@/assets/bottle-500ml-pet-clear-16g.png.asset.json";
import bottle500mlPetBlue from "@/assets/bottle-500ml-pet-blue-16g.png.asset.json";
import jar50gmSpice from "@/assets/jar-50gm-spice-white.png.asset.json";
import jar100gmSpice from "@/assets/jar-100gm-spice-red-lid.png.asset.json";
import jar250gmGreen from "@/assets/jar-250gm-screw-green-lid.png.asset.json";
import jar600cc from "@/assets/jar-600cc-white.png.asset.json";
import jar800Green from "@/assets/jar-800-screw-green-lid.png.asset.json";
import jar1000cc from "@/assets/jar-1000cc-white.png.asset.json";
import jar1150ccYellow from "@/assets/jar-1150cc-yellow-lid.png.asset.json";
import jar1kgRed from "@/assets/jar-1kg-screw-red-lid.png.asset.json";
import jarBlackBlackLid from "@/assets/jar-black-screw-black-lid.png.asset.json";
import jarBlackRedLid from "@/assets/jar-black-screw-red-lid.png.asset.json";

import takeawayContainer from "@/assets/product-white-round-takeaway-container.png.asset.json";

export type CategorySlug =
  | "bottles"
  | "jerrycans"
  | "jars-containers"
  | "food-service"
  | "pet-preforms";

export type ProductCategory = {
  slug: CategorySlug;
  name: string;
  title: string;
  intro: string;
  metaDescription: string;
};

export type ProductSpecs = {
  material: string;
  capacityRange: string;
  neckClosure: string;
  weight: string;
  moq: string;
  industryFit: string;
};

export type Product = {
  slug: string;
  title: string;
  category: CategorySlug;
  desc: string;
  highlights: string[];
  specs: ProductSpecs;
  images: { main: string; alternates: string[]; details: string[] };
  /** Confirmed colour options only, never inferred or invented. */
  colours?: { name: string; hex: string }[];
  colourNote?: string;
};

export const ON_REQUEST = "Available on request";

export const CATEGORIES: ProductCategory[] = [
  {
    slug: "bottles",
    name: "Bottles",
    title: "Bottles",
    intro:
      "Rigid plastic bottles for pharmaceutical, food, beverage, personal care, household and specialty products.",
    metaDescription:
      "Rigid plastic bottles from Dentex Industries Ltd, HDPE and PET bottles manufactured in Nairobi, Kenya.",
  },
  {
    slug: "jerrycans",
    name: "Jerrycans",
    title: "Jerrycans",
    intro:
      "HDPE jerrycans for food, pharmaceutical, chemical, household and industrial liquid products.",
    metaDescription:
      "HDPE jerrycans from Dentex Industries Ltd, 1L, 3L and 5L containers manufactured in Nairobi, Kenya.",
  },
  {
    slug: "jars-containers",
    name: "Jars & Containers",
    title: "Jars & Containers",
    intro: "Jars and rigid containers for dry goods, powders, creams and packed products.",
    metaDescription:
      "Plastic jars and rigid containers from Dentex Industries Ltd, manufactured in Nairobi, Kenya.",
  },
  {
    slug: "food-service",
    name: "Food Service",
    title: "Food Service",
    intro: "Food-grade containers for restaurants, caterers and food processors.",
    metaDescription:
      "Food service packaging from Dentex Industries Ltd, food-grade containers made in Nairobi, Kenya.",
  },
  {
    slug: "pet-preforms",
    name: "PET Preforms",
    title: "PET Preforms",
    intro: "PET preforms for blow-moulded bottles across beverage and packaged water applications.",
    metaDescription:
      "PET preforms from Dentex Industries Ltd, manufactured in Nairobi, Kenya.",
  },
];

function single(url: string) {
  return { main: url, alternates: [] as string[], details: [] as string[] };
}

const baseSpecs: ProductSpecs = {
  material: ON_REQUEST,
  capacityRange: ON_REQUEST,
  neckClosure: ON_REQUEST,
  weight: ON_REQUEST,
  moq: ON_REQUEST,
  industryFit: ON_REQUEST,
};

export const PRODUCTS: Product[] = [
  {
    slug: "1l-jerrycan-ratchet-cap",
    title: "1L Jerrycan with Ratchet Cap",
    category: "jerrycans",
    desc: "Compact 1L HDPE jerrycan fitted with a ratchet cap, available in black, green and white.",
    highlights: [],
    specs: {
      ...baseSpecs,
      material: "HDPE",
      capacityRange: "1L",
      neckClosure: "Ratchet cap",
      weight: "55g",
    },
    images: {
      main: jc1lBlackRatchet.url,
      alternates: [jc1lGreenRatchet.url, jc1lWhiteRatchet.url],
      details: [],
    },
    colours: [
      { name: "Black", hex: "#151515" },
      { name: "Green", hex: "#0B9E57" },
      { name: "White", hex: "#FFFFFF" },
    ],
  },
  {
    slug: "1l-jerrycan-clear-bericap",
    title: "1L Clear Jerrycan with Bericap",
    category: "jerrycans",
    desc: "Clear 1L HDPE jerrycan fitted with a Bericap closure for easy viewing of contents.",
    highlights: [],
    specs: {
      ...baseSpecs,
      material: "HDPE",
      capacityRange: "1L",
      neckClosure: "Bericap",
      weight: "55g",
    },
    images: {
      main: jc1lClearBericap.url,
      alternates: [jc1lClearBericapAlt.url],
      details: [],
    },
    colours: [{ name: "Natural / Clear", hex: "#E8EEF2" }],
  },
  {
    slug: "2l-jerrycan-ratchet-cap",
    title: "2L Jerrycan with Ratchet Cap",
    category: "jerrycans",
    desc: "2L HDPE jerrycan with a ratchet cap closure and moulded carry handle.",
    highlights: [],
    specs: {
      ...baseSpecs,
      material: "HDPE",
      capacityRange: "2L",
      neckClosure: "Ratchet cap",
      weight: "100g",
    },
    images: single(jc2lRatchet.url),
    colours: [{ name: "Natural / Clear", hex: "#E8EEF2" }],
  },
  {
    slug: "3-5l-clear-jerrycan",
    title: "3-5L Clear Jerrycan",
    category: "jerrycans",
    desc: "Clear HDPE jerrycan with a side carry handle.",
    highlights: [],
    specs: { ...baseSpecs, material: "HDPE" },
    images: single(jc35lClear.url),
    colours: [{ name: "Natural / Clear", hex: "#E8EEF2" }],
  },
  {
    slug: "3l-jerrycan-bericap",
    title: "3L Jerrycan with Bericap",
    category: "jerrycans",
    desc: "3L HDPE jerrycan with a Bericap closure, available in black and natural.",
    highlights: [],
    specs: {
      ...baseSpecs,
      material: "HDPE",
      capacityRange: "3L",
      neckClosure: "Bericap",
      weight: "130g",
    },
    images: {
      main: jc3lBlackBericap.url,
      alternates: [jc3lNaturalBericap.url],
      details: [],
    },
    colours: [
      { name: "Black", hex: "#151515" },
      { name: "Natural / Clear", hex: "#E8EEF2" },
    ],
  },
  {
    slug: "5l-black-jerrycan-bericap",
    title: "5L Black Jerrycan with Bericap",
    category: "jerrycans",
    desc: "5L black HDPE jerrycan with a Bericap closure for liquids requiring light protection.",
    highlights: [],
    specs: {
      ...baseSpecs,
      material: "HDPE",
      capacityRange: "5L",
      neckClosure: "Bericap",
      weight: "180g",
    },
    images: single(jc5lBlackBericap.url),
    colours: [{ name: "Black", hex: "#151515" }],
  },
  {
    slug: "5l-jerrycan-new-handle-bericap",
    title: "5L Jerrycan, New Handle, with Bericap",

    category: "jerrycans",
    desc: "5L HDPE jerrycan with the new handle design and a Bericap closure.",
    highlights: [],
    specs: {
      ...baseSpecs,
      material: "HDPE",
      capacityRange: "5L",
      neckClosure: "Bericap",
      weight: "200g",
    },
    images: single(jc5lNewHandleBericap.url),
    colours: [{ name: "Natural / Clear", hex: "#E8EEF2" }],
  },
  {
    slug: "5l-jerrycan-old-handle-ratchet-cap",
    title: "5L Jerrycan, Old Handle, with Ratchet Cap",
    category: "jerrycans",
    desc: "5L HDPE jerrycan with the original handle design and a ratchet cap closure.",
    highlights: [],
    specs: {
      ...baseSpecs,
      material: "HDPE",
      capacityRange: "5L",
      neckClosure: "Ratchet cap",
      weight: "155g",
    },
    images: single(jc5lOldHandleRatchet.url),
    colours: [{ name: "Natural / Clear", hex: "#E8EEF2" }],
  },
  {
    slug: "5l-white-jerrycan-old-handle-ratchet-cap",
    title: "5L White Jerrycan, Old Handle, with Ratchet Cap",
    category: "jerrycans",
    desc: "5L white HDPE jerrycan with the original handle design and a ratchet cap closure.",
    highlights: [],
    specs: {
      ...baseSpecs,
      material: "HDPE",
      capacityRange: "5L",
      neckClosure: "Ratchet cap",
      weight: "200g",
    },
    images: single(jc5lWhiteOldHandleRatchet.url),
    colours: [{ name: "White", hex: "#FFFFFF" }],
  },
  {
    slug: "15ml-clear-bottle-red-bericap",
    title: "15ml Clear Bottle with Red Bericap",
    category: "bottles",
    desc: "15ml clear bottle supplied with a red Bericap closure.",
    highlights: [],
    specs: { ...baseSpecs, capacityRange: "15ml", neckClosure: "Bericap" },
    images: single(bottle15mlClearRedBericap.url),
    colours: [{ name: "Natural / Clear", hex: "#E8EEF2" }],
  },
  {
    slug: "30ml-bottle-clear-bericap-9g",
    title: "30ml Bottle Clear Bericap 9G",
    category: "bottles",
    desc: "30ml clear bottle with a Bericap neck finish.",
    highlights: [],
    specs: { ...baseSpecs, capacityRange: "30ml", neckClosure: "Bericap", weight: "9g" },
    images: single(bottle30mlClearBericap.url),
    colours: [{ name: "Natural / Clear", hex: "#E8EEF2" }],
  },
  {
    slug: "60ml-old-type-bericap-12g",
    title: "60ml Old Type Bericap 12G",
    category: "bottles",
    desc: "60ml old type bottle with a Bericap neck finish.",
    highlights: [],
    specs: { ...baseSpecs, capacityRange: "60ml", neckClosure: "Bericap", weight: "12g" },
    images: single(bottle60mlOldBericap.url),
    colours: [{ name: "Natural / Clear", hex: "#E8EEF2" }],
  },
  {
    slug: "100ml-old-type-bericap-16g",
    title: "100ml Old Type Bericap 16G",
    category: "bottles",
    desc: "100ml old type bottle with a Bericap neck finish, available in white and natural.",
    highlights: [],
    specs: { ...baseSpecs, capacityRange: "100ml", neckClosure: "Bericap", weight: "16g" },
    images: {
      main: bottle100mlOldBericap.url,
      alternates: [bottle100mlOldWhite.url],
      details: [],
    },
    colours: [
      { name: "White", hex: "#FFFFFF" },
      { name: "Natural / Clear", hex: "#E8EEF2" },
    ],
  },
  {
    slug: "100ml-new-type-bottle-bericap-16g",
    title: "100ml New Type Bottle with Bericap",
    category: "bottles",
    desc: "100ml new type bottle shown with its white Bericap closure, plus an uncapped view.",
    highlights: [],
    specs: { ...baseSpecs, capacityRange: "100ml", neckClosure: "Bericap", weight: "16g" },
    images: {
      main: bottle100mlNewCapped.url,
      alternates: [bottle100mlNewBericap.url],
      details: [],
    },
    colours: [{ name: "White", hex: "#FFFFFF" }],
  },
  {
    slug: "1l-white-battery-acid-bottle-bericap-50g",
    title: "1L White Battery Acid Bottle Bericap 50G",
    category: "bottles",
    desc: "1L white bottle engineered for battery acid and similar chemical filling, with a Bericap neck finish.",
    highlights: [],
    specs: { ...baseSpecs, capacityRange: "1L", neckClosure: "Bericap", weight: "50g" },
    images: single(bottle1lBatteryAcid.url),
    colours: [{ name: "White", hex: "#FFFFFF" }],
  },
  {
    slug: "120ml-long-neck-bottle",
    title: "120ml Longneck Bottle",
    category: "bottles",
    desc: "120ml longneck bottle available in white and orange variants.",
    highlights: [],
    specs: { ...baseSpecs, capacityRange: "120ml", neckClosure: "25mm longneck cap", weight: "22g" },
    images: {
      main: bottle120mlLongneck.url,
      alternates: [bottle120mlLongneckOrange.url, bottle120mlLongneckAlt.url],
      details: [],
    },
    colours: [
      { name: "White", hex: "#FFFFFF" },
      { name: "Orange", hex: "#F05A22" },
    ],
  },
  {
    slug: "200ml-round-bottle-bericap",
    title: "200ml Round Bottle with Bericap",
    category: "bottles",
    desc: "200ml round bottle available in natural, white, black and brown variants.",
    highlights: [],
    specs: { ...baseSpecs, capacityRange: "200ml", neckClosure: "Bericap", weight: "19–20g" },
    images: {
      main: bottle200mlRound.url,
      alternates: [bottle200mlRoundNatural.url, bottle200mlRoundBlack.url, bottle200mlRoundBrown.url],
      details: [],
    },
    colours: [
      { name: "White", hex: "#FFFFFF" },
      { name: "Natural / Clear", hex: "#E8EEF2" },
      { name: "Black", hex: "#151515" },
      { name: "Brown", hex: "#5A2D21" },
    ],
  },
  {
    slug: "500ml-bottle-bericap",
    title: "Dentex 500ml Bottle with Bericap",
    category: "bottles",
    desc: "500ml bottle designed for a Bericap closure.",
    highlights: [],
    specs: { ...baseSpecs, capacityRange: "500ml", neckClosure: "Bericap" },
    images: single(bottle500mlBericap.url),
    colours: [{ name: "Natural / Clear", hex: "#E8EEF2" }],
  },
  {
    slug: "500ml-bottle-ratchet-cap",
    title: "500ml Bottle with Ratchet Cap",
    category: "bottles",
    desc: "500ml bottle designed for a ratchet cap closure.",
    highlights: [],
    specs: { ...baseSpecs, capacityRange: "500ml", neckClosure: "Ratchet cap", weight: "28g" },
    images: single(bottle500mlRatchet.url),
    colours: [{ name: "White", hex: "#FFFFFF" }],
  },
  {
    slug: "500ml-pet-bottle-16g",
    title: "500ml PET Bottle",
    category: "bottles",
    desc: "500ml PET bottle available in clear and blue variants.",
    highlights: [],
    specs: { ...baseSpecs, material: "PET", capacityRange: "500ml", weight: "16g" },
    images: {
      main: bottle500mlPetClear.url,
      alternates: [bottle500mlPetBlue.url],
      details: [],
    },
    colours: [
      { name: "Clear", hex: "#E8EEF2" },
      { name: "Blue", hex: "#249BD7" },
    ],
  },
  {
    slug: "50gm-spice-jar",
    title: "50gm Spice Jar",
    category: "jars-containers",
    desc: "50gm white spice jar with a ribbed screw lid for herbs, spices and dry blends.",
    highlights: [],
    specs: { ...baseSpecs, capacityRange: "50gm", neckClosure: "Screw lid" },
    images: single(jar50gmSpice.url),
    colours: [{ name: "White", hex: "#FFFFFF" }],
  },
  {
    slug: "100gm-spice-jar",
    title: "100gm Spice Jar",
    category: "jars-containers",
    desc: "100gm spice jar with a red screw lid for herbs, spices and dry blends.",
    highlights: [],
    specs: { ...baseSpecs, capacityRange: "100gm", neckClosure: "Screw lid" },
    images: single(jar100gmSpice.url),
    colours: [
      { name: "White", hex: "#FFFFFF" },
      { name: "Red lid", hex: "#E23B26" },
    ],
  },
  {
    slug: "250gm-screw-jar",
    title: "250gm Screw Jar",
    category: "jars-containers",
    desc: "250gm jar with a green screw lid for powders, creams and packed dry goods.",
    highlights: [],
    specs: { ...baseSpecs, capacityRange: "250gm", neckClosure: "Screw lid" },
    images: single(jar250gmGreen.url),
    colours: [
      { name: "White", hex: "#FFFFFF" },
      { name: "Green lid", hex: "#149B4B" },
    ],
  },
  {
    slug: "600cc-jar",
    title: "600cc Jar",
    category: "jars-containers",
    desc: "600cc white jar with a wide ribbed screw lid for creams, pastes and dry goods.",
    highlights: [],
    specs: { ...baseSpecs, capacityRange: "600cc", neckClosure: "Screw lid" },
    images: single(jar600cc.url),
    colours: [{ name: "White", hex: "#FFFFFF" }],
  },
  {
    slug: "800-screw-jar",
    title: "800 Screw Jar",
    category: "jars-containers",
    desc: "800 screw jar with a green lid for powders and packed dry products.",
    highlights: [],
    specs: { ...baseSpecs, capacityRange: "800cc", neckClosure: "Screw lid" },
    images: single(jar800Green.url),
    colours: [
      { name: "Natural / Clear", hex: "#E8EEF2" },
      { name: "Green lid", hex: "#149B4B" },
    ],
  },
  {
    slug: "1000cc-jar",
    title: "1000cc Jar",
    category: "jars-containers",
    desc: "1000cc white jar with a wide ribbed screw neck for bulk dry goods and creams.",
    highlights: [],
    specs: { ...baseSpecs, capacityRange: "1000cc", neckClosure: "Screw lid" },
    images: single(jar1000cc.url),
    colours: [{ name: "White", hex: "#FFFFFF" }],
  },
  {
    slug: "1150cc-jar",
    title: "1150cc Jar",
    category: "jars-containers",
    desc: "1150cc jar with a yellow screw lid for bulk powders and packed products.",
    highlights: [],
    specs: { ...baseSpecs, capacityRange: "1150cc", neckClosure: "Screw lid" },
    images: single(jar1150ccYellow.url),
    colours: [
      { name: "Natural / Clear", hex: "#E8EEF2" },
      { name: "Yellow lid", hex: "#F5C518" },
    ],
  },
  {
    slug: "1kg-screw-jar",
    title: "1KG Screw Jar",
    category: "jars-containers",
    desc: "1KG screw jar with a red lid for bulk powders, pastes and packed dry goods.",
    highlights: [],
    specs: { ...baseSpecs, capacityRange: "1KG", neckClosure: "Screw lid" },
    images: single(jar1kgRed.url),
    colours: [
      { name: "Natural / Clear", hex: "#E8EEF2" },
      { name: "Red lid", hex: "#E23B26" },
    ],
  },
  {
    slug: "black-screw-jar",
    title: "Black Screw Jar",
    category: "jars-containers",
    desc: "Black screw jar available with a black or red lid for light-sensitive products.",
    highlights: [],
    specs: { ...baseSpecs, neckClosure: "Screw lid" },
    images: {
      main: jarBlackBlackLid.url,
      alternates: [jarBlackRedLid.url],
      details: [],
    },
    colours: [
      { name: "Black lid", hex: "#151515" },
      { name: "Red lid", hex: "#E23B26" },
    ],
  },
  {
    slug: "white-round-takeaway-container",
    title: "White Round Takeaway Container",
    category: "food-service",
    desc: "Food-grade polypropylene container with a secure snap-on lid for hot and cold foods.",
    highlights: [],
    specs: { ...baseSpecs, material: "Polypropylene (PP)", neckClosure: "Snap-on lid" },
    images: single(takeawayContainer.url),
  },
];

export const getCategory = (slug: string) => CATEGORIES.find((c) => c.slug === slug);
export const productsByCategory = (slug: CategorySlug) =>
  PRODUCTS.filter((p) => p.category === slug);
export const getProduct = (category: string, slug: string) =>
  PRODUCTS.find((p) => p.category === category && p.slug === slug);
export const relatedProducts = (product: Product, limit = 3) =>
  PRODUCTS.filter((p) => p.category === product.category && p.slug !== product.slug).slice(0, limit);
export const categoryName = (slug: CategorySlug) =>
  CATEGORIES.find((c) => c.slug === slug)?.name ?? slug;
