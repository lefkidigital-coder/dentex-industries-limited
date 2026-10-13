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
import jar500gmScrewWhite from "@/assets/jar-500gm-screw-white.png.asset.json";
import jar500ccWhite45g from "@/assets/jar-500cc-white-45g.png.asset.json";
import jar600cc from "@/assets/jar-600cc-white.png.asset.json";
import jar800Green from "@/assets/jar-800-screw-green-lid.png.asset.json";
import jar1000cc from "@/assets/jar-1000cc-white.png.asset.json";
import jar1150ccYellow from "@/assets/jar-1150cc-yellow-lid.png.asset.json";
import jar1kgRed from "@/assets/jar-1kg-screw-red-lid.png.asset.json";
import jarBlackBlackLid from "@/assets/jar-black-screw-black-lid.png.asset.json";
import jarBlackRedLid from "@/assets/jar-black-screw-red-lid.png.asset.json";

import takeawayContainer from "@/assets/product-white-round-takeaway-container.png.asset.json";

import petPreform1 from "@/assets/pet-preform-clear-1.png.asset.json";
import petPreform2 from "@/assets/pet-preform-clear-2.png.asset.json";

export type CategorySlug =
  | "bottles"
  | "jerrycans"
  | "jars-containers"
  | "food-service"
  | "pet-preforms"
  | "closures"
  | "accessories";

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
  images: { main: string; alternates: string[]; details: string[]; labels?: string[] };
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
  {
    slug: "closures",
    name: "Closures",
    title: "Caps & Closures",
    intro: "Bericap, ratchet, ROPP, PJ and jar caps in the photographed sizes and colours.",
    metaDescription: "Explore Bericap, ratchet, ROPP, PJ and jar caps from Dentex Industries Ltd.",
  },
  {
    slug: "accessories",
    name: "Accessories",
    title: "Packaging Accessories",
    intro: "Natural plugs and measuring cups to complete your packaging specification.",
    metaDescription: "Explore natural LLDPE plugs and measuring cups from Dentex Industries Ltd.",
  },
];

function single(url: string) {
  return { main: url, alternates: [] as string[], details: [] as string[] };
}

/** Preserve uploaded filenames while safely referencing spaces in public asset URLs. */
function uploadedGallery(views: { file: string; label: string }[]) {
  const paths = views.map(({ file }) => {
    // Published asset URLs require percent-encoded parentheses.
    const filename = encodeURIComponent(file).replace(/\(/g, "%28").replace(/\)/g, "%29");
    return `/products/${filename}`;
  });
  return {
    main: paths[0],
    alternates: paths.slice(1),
    details: [] as string[],
    labels: views.map(({ label }) => label),
  };
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
    desc: "A durable, versatile 1 litre HDPE jerrycan for a wide range of liquid products. Its compact, easy-to-handle design suits food, pharmaceutical, household, chemical and industrial applications.",
    highlights: [
      "1 litre capacity",
      "Durable HDPE construction",
      "Custom colours and weights",
      "Bericap or ratchet cap options",
      "Custom branding available",
    ],
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
    desc: "A durable, versatile 1 litre HDPE jerrycan for a wide range of liquid products, fitted with a Bericap closure for secure, reliable product protection. Suited to food, pharmaceutical, household, chemical and industrial applications.",
    highlights: [
      "1 litre capacity",
      "Durable HDPE construction",
      "Custom colours and weights",
      "Bericap closure",
      "Custom branding available",
    ],
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
    desc: "Dentex 2 litre jerrycans provide a robust, practical packaging solution for a wide range of liquid products. Designed for easy handling, storage and transportation, they can be customised to meet specific customer requirements.",
    highlights: [
      "2 litre capacity",
      "HDPE material",
      "Multiple weights and colours",
      "Bericap or ratchet caps",
      "Colour, weight and closure customisation available",
    ],
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
    desc: "A heavy-duty 3 litre HDPE jerrycan for automotive fluids, lubricants, industrial chemicals and cleaning agents. Its integrated side handle supports comfortable handling and controlled pouring, with a Bericap closure on this model.",
    highlights: ["3 litre capacity","Durable HDPE construction","Integrated side handle","Bericap closure","Custom colours available"],
    specs: {
      ...baseSpecs,
      material: "HDPE",
      capacityRange: "3L",
      neckClosure: "Bericap",
      weight: "130g",
      industryFit: "Automotive, chemical and industrial applications",
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
    desc: "A robust, versatile 5 litre HDPE jerrycan for food, pharmaceutical, agricultural, chemical, household and industrial applications, supplied here in black with a Bericap closure.",
    highlights: [
      "5 litre capacity",
      "Robust, lightweight HDPE construction",
      "Multiple weights and colours",
      "Bericap or ratchet cap options",
      "Large surface area for branding and labelling",
    ],
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
    desc: "A robust, versatile 5 litre HDPE jerrycan with the new handle design and a Bericap closure, suited to food, pharmaceutical, agricultural, chemical, household and industrial applications.",
    highlights: [
      "5 litre capacity",
      "Robust, lightweight HDPE construction",
      "Multiple weights and colours",
      "Bericap or ratchet cap options",
      "Large surface area for branding and labelling",
    ],
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
    desc: "A robust, versatile 5 litre HDPE jerrycan with the original handle design and a ratchet cap closure, suited to food, pharmaceutical, agricultural, chemical, household and industrial applications.",
    highlights: [
      "5 litre capacity",
      "Robust, lightweight HDPE construction",
      "Multiple weights and colours",
      "Bericap or ratchet cap options",
      "Large surface area for branding and labelling",
    ],
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
    desc: "A robust, versatile 5 litre HDPE jerrycan in white, with the original handle design and a ratchet cap closure, suited to food, pharmaceutical, agricultural, chemical, household and industrial applications.",
    highlights: [
      "5 litre capacity",
      "Robust, lightweight HDPE construction",
      "Multiple weights and colours",
      "Bericap or ratchet cap options",
      "Large surface area for branding and labelling",
    ],
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
    desc: "A compact, versatile 30 ml clear HDPE bottle for pharmaceutical, cosmetic, personal care and laboratory applications. The clear finish gives product visibility while the durable HDPE construction offers reliable protection and easy handling.",
    highlights: [
      "30 ml capacity",
      "Clear finish",
      "Durable, lightweight HDPE",
      "Easy to handle and label",
      "Custom closures and branding available",
    ],
    specs: { ...baseSpecs, material: "HDPE", capacityRange: "30ml", neckClosure: "Bericap", weight: "9g" },
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
    desc: "A compact, durable 100 ml HDPE bottle ideal for pharmaceutical, personal care, chemical and household products. Its practical design offers reliable handling, filling and dispensing plus an excellent surface for labelling and branding.",
    highlights: [
      "100 ml capacity",
      "Durable HDPE construction",
      "Multiple colour options",
      "Closure options tailored to the application",
      "Suitable for liquid and semi-liquid products",
    ],
    specs: { ...baseSpecs, material: "HDPE", capacityRange: "100ml", neckClosure: "Bericap", weight: "16g" },
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
    desc: "A compact, durable 100 ml HDPE bottle for pharmaceutical, personal care, chemical and household products, shown with its white Bericap closure and as an uncapped view.",
    highlights: [
      "100 ml capacity",
      "Durable HDPE construction",
      "Multiple colour options",
      "Closure options tailored to the application",
      "Suitable for liquid and semi-liquid products",
    ],
    specs: { ...baseSpecs, material: "HDPE", capacityRange: "100ml", neckClosure: "Bericap", weight: "16g" },
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
    desc: "The Dentex 120 ml long neck bottle combines a distinctive, elegant profile with practical functionality, making it ideal for pharmaceutical, food, beverage, personal care and specialty products.",
    highlights: [
      "120 ml capacity",
      "Long-neck design for controlled pouring",
      "Multiple bottle colours",
      "Caps in a wide range of colour shades",
      "Customisable to customer specifications",
    ],
    specs: { ...baseSpecs, capacityRange: "120ml", neckClosure: "25mm longneck cap", weight: "22g", material: "HDPE" },
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
    desc: "A durable, versatile 500 ml bottle for pharmaceutical, food, personal care, household and specialty products, designed for a Bericap closure. Its clean, practical design gives excellent space for labelling and branding.",
    highlights: [
      "500 ml capacity",
      "Multiple bottle colours",
      "Multiple cap colours",
      "Durable construction",
      "Suitable for diverse product applications",
    ],
    specs: { ...baseSpecs, capacityRange: "500ml", neckClosure: "Bericap" },
    images: single(bottle500mlBericap.url),
    colours: [{ name: "Natural / Clear", hex: "#E8EEF2" }],
  },
  {
    slug: "500ml-bottle-ratchet-cap",
    title: "500ml Bottle with Ratchet Cap",
    category: "bottles",
    desc: "A durable, versatile 500 ml bottle for pharmaceutical, food, personal care, household and specialty products, designed for a ratchet cap closure. Its clean, practical design gives excellent space for labelling and branding.",
    highlights: [
      "500 ml capacity",
      "Multiple bottle colours",
      "Multiple cap colours",
      "Durable construction",
      "Suitable for diverse product applications",
    ],
    specs: { ...baseSpecs, capacityRange: "500ml", neckClosure: "Ratchet cap", weight: "28g" },
    images: single(bottle500mlRatchet.url),
    colours: [{ name: "White", hex: "#FFFFFF" }],
  },
  {
    slug: "500ml-pet-bottle-16g",
    title: "500ml PET Bottle",
    category: "bottles",
    desc: "A lightweight, durable 16g PET water bottle designed for bottled water applications. Its ergonomic shape provides comfortable handling, efficient storage and an attractive platform for branding and labelling.",
    highlights: [
      "16g PET",
      "Lightweight design",
      "Clear and attractive appearance",
      "Durable construction",
      "Designed for efficient filling, handling and distribution",
    ],
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
    desc: "A practical 100g screw-top jar designed for packaging spices, seasonings and powdered food products. Its compact design and wide labelling surface provide an attractive, functional packaging solution.",
    highlights: ["Screw-top closure", "Wide labelling surface", "Custom jar and closure colours available"],
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
    slug: "500gm-screw-jar",
    title: "500gm Screw Jar",
    category: "jars-containers",
    desc: "A durable 500g screw jar designed for convenient packaging of spices, powders, supplements and other dry products.",
    highlights: [
      "Wide-mouth design for easy filling",
      "Secure screw closure",
      "Large labelling area",
      "Custom jar and closure colours available",
      "Suitable for food, pharmaceutical and industrial applications",
    ],
    specs: { ...baseSpecs, capacityRange: "500gm", neckClosure: "Screw lid" },
    images: single(jar500gmScrewWhite.url),
    colours: [{ name: "White", hex: "#FFFFFF" }],
  },
  {
    slug: "500cc-jar-white-45g",
    title: "500CC Jar White 45G",
    category: "jars-containers",
    desc: "A durable 500cc plastic jar for pharmaceutical, food, personal care, chemical and household products. Its cylindrical design supports convenient filling and provides space for labelling and branding. This model is supplied in white with a screw lid.",
    highlights: ["500cc capacity","Cylindrical design for convenient filling","Space for labelling and branding","Custom colours available"],
    specs: { ...baseSpecs, capacityRange: "500cc", weight: "45g", neckClosure: "Screw lid" },
    images: single(jar500ccWhite45g.url),
    colours: [{ name: "White", hex: "#FFFFFF" }],
  },
  {
    slug: "600cc-jar",
    title: "600cc Jar",
    category: "jars-containers",
    desc: "A durable 600cc plastic jar for pharmaceutical, food, personal care, chemical and household products. Its cylindrical design supports convenient filling and provides space for labelling and branding, with a ribbed screw lid.",
    highlights: ["600cc capacity","Cylindrical design for convenient filling","Space for labelling and branding","Custom colours available"],
    specs: { ...baseSpecs, capacityRange: "600cc", neckClosure: "Screw lid" },
    images: single(jar600cc.url),
    colours: [{ name: "White", hex: "#FFFFFF" }],
  },
  {
    slug: "800-screw-jar",
    title: "800 Screw Jar",
    category: "jars-containers",
    desc: "A durable 800cc plastic jar for pharmaceutical, food, personal care, chemical and household products. Its cylindrical design supports convenient filling and provides space for labelling and branding. This model is shown with a green screw lid.",
    highlights: ["800cc capacity","Cylindrical design for convenient filling","Space for labelling and branding","Custom colours available"],
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
    desc: "A durable 1000cc plastic jar for pharmaceutical, food, personal care, chemical and household products. Its cylindrical design supports convenient filling and provides space for labelling and branding, with a ribbed screw lid.",
    highlights: ["1000cc capacity","Cylindrical design for convenient filling","Space for labelling and branding","Custom colours available"],
    specs: { ...baseSpecs, capacityRange: "1000cc", neckClosure: "Screw lid" },
    images: single(jar1000cc.url),
    colours: [{ name: "White", hex: "#FFFFFF" }],
  },
  {
    slug: "1150cc-jar",
    title: "1150cc Jar",
    category: "jars-containers",
    desc: "A durable 1150cc plastic jar for pharmaceutical, food, personal care, chemical and household products. Its cylindrical design supports convenient filling and provides space for labelling and branding. This model is shown with a yellow screw lid.",
    highlights: ["1150cc capacity","Cylindrical design for convenient filling","Space for labelling and branding","Custom colours available"],
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
    desc: "A premium food-grade polypropylene container designed for secure packaging of hot and cold foods. Its tight-fitting snap-on lid provides excellent leak resistance, durability and freshness preservation.",
    highlights: [
      "Food-grade polypropylene",
      "Tight-fitting snap-on lid",
      "Excellent leak resistance",
      "Available in 1 kg and ½ kg sizes",
      "Ideal for restaurants, caterers, supermarkets and food manufacturers",
    ],
    specs: {
      ...baseSpecs,
      material: "Polypropylene (PP)",
      capacityRange: "½ kg and 1 kg",
      neckClosure: "Snap-on lid",
    },
    images: single(takeawayContainer.url),
  },
  {
    slug: "pet-preforms",
    title: "PET Preforms",
    category: "pet-preforms",
    desc: "Precision-manufactured PET preforms for efficient, consistent PET bottle production. Available in 16g, 19g and 21g weights, they offer flexibility for different bottle designs and applications.",
    highlights: [
      "Available weights: 16g, 19g and 21g",
      "Available colours: clear, blue, amber and green",
      "Precision-manufactured for consistent bottle production",
      "Applications: bottled water, beverages and other PET packaging",
    ],
    specs: {
      ...baseSpecs,
      material: "PET",
      weight: "16g | 19g | 21g",
      industryFit: "Bottled water, beverages and other PET packaging applications",
    },
    images: {
      main: petPreform1.url,
      alternates: [petPreform2.url],
      details: [],
    },
    colours: [
      { name: "Clear", hex: "#E8EEF2" },
      { name: "Blue", hex: "#249BD7" },
      { name: "Amber", hex: "#B26A16" },
      { name: "Green", hex: "#149B4B" },
    ],
  },
  {
    slug: "50g-pj-jar-39mm-pj-closure",
    title: "50g PJ Jar with 39mm PJ Closure",
    category: "jars-containers",
    desc: "50g PJ jar fitted with a ribbed 39mm PJ closure, with red and white cap options.",
    highlights: ["50g jar size","39mm PJ closure"],
    specs: { ...baseSpecs, capacityRange: "50g", neckClosure: "39mm PJ closure" },
    images: uploadedGallery([
      { file: "50G CLEAR PJ JAR WITH RED 39MM PJ CAP.png", label: "Jar with red cap" },
      { file: "50G CLEAR PJ JAR WITH RED 39MM PJ CAP3.png", label: "Jar with white cap" },
    ]),
    colours: [
      { name: "Red cap", hex: "#E23B26" },
      { name: "White cap", hex: "#FFFFFF" },
    ],
  },
  {
    slug: "100cc-hdpe-jar-white-cap",
    title: "100cc HDPE Jar with White Cap",
    category: "jars-containers",
    desc: "A durable 100cc HDPE jar for pharmaceutical, food, personal care, chemical and household products. Its cylindrical design supports convenient filling and provides space for labelling and branding. Supplied with a white cap.",
    highlights: ["100cc capacity","HDPE jar body","White cap","Space for labelling and branding"],
    specs: { ...baseSpecs, material: "HDPE (jar body)", capacityRange: "100cc", neckClosure: "White cap", industryFit: "Pharmaceutical, food, personal care, chemical and household applications" },
    images: uploadedGallery([
      { file: "100CC HDPE JAR WITH WHITE CAP.png", label: "Jar with white cap" },
    ]),
    colours: [
      { name: "White", hex: "#FFFFFF" },
    ],
  },
  {
    slug: "1kg-takeaway-lid",
    title: "1kg Takeaway Lid",
    category: "food-service",
    desc: "Pink lid for the 1kg takeaway container range. Confirm the matching container specification with our team.",
    highlights: ["1kg takeaway range","Pink finish"],
    specs: { ...baseSpecs, capacityRange: "For the 1kg takeaway range", neckClosure: "Takeaway lid" },
    images: uploadedGallery([
      { file: "1 KG TAKEAWAY LID (PINK).png", label: "Pink takeaway lid, main view" },
      { file: "1 KG TAKEAWAY LID (PINK) 1.png", label: "Pink takeaway lid, alternative view" },
    ]),
    colours: [
      { name: "Pink", hex: "#F75BAE" },
    ],
  },
  {
    slug: "28mm-1881-csd-cap",
    title: "28mm 1881 CSD Cap",
    category: "closures",
    desc: "28mm 1881 CSD cap with a ribbed exterior, in blue, sky blue and white.",
    highlights: ["28mm 1881 CSD closure","Ribbed exterior"],
    specs: { ...baseSpecs, neckClosure: "28mm 1881 CSD" },
    images: uploadedGallery([
      { file: "28MM 1881 CSD CAP.png", label: "Blue cap, main view" },
      { file: "28MM 1881 CSD CAP (DARK BLUE)L.png", label: "Dark blue cap, alternative view" },
      { file: "28MM 1881 CSD CAP (SKY BLUE).png", label: "Sky blue cap, main view" },
      { file: "28MM 1881 CSD CAP (SKY BLUE)2.png", label: "Sky blue cap, alternative view" },
      { file: "28MM 1881 CSD(WHITE).png", label: "White cap" },
    ]),
    colours: [
      { name: "Blue", hex: "#3550D6" },
      { name: "Sky blue", hex: "#6CC6ED" },
      { name: "White", hex: "#FFFFFF" },
    ],
  },
  {
    slug: "28mm-ropp-cap",
    title: "28mm ROPP Cap",
    category: "closures",
    desc: "Ribbed 28mm ROPP cap shown in dark blue, red, sky blue, yellow and white.",
    highlights: ["28mm ROPP closure","Ribbed exterior"],
    specs: { ...baseSpecs, neckClosure: "28mm ROPP" },
    images: uploadedGallery([
      { file: "28MM ROPP CAP (RED)H.png", label: "Red cap, exterior view" },
      { file: "28MM ROPP CAP (RED)G.png", label: "Red cap, interior view" },
      { file: "28MM ROPP CAP (DARK BLUE)1.png", label: "Dark blue cap" },
      { file: "28MM ROPP CAP (SKY BLUE)1.png", label: "Sky blue cap" },
      { file: "28MM ROPP CAP (YELLOW)3.png", label: "Yellow cap, main view" },
      { file: "28MM ROPP CAP (YELLOW)4.png", label: "Yellow cap, alternative view" },
      { file: "28MM ROPP(WHITE)5.png", label: "White cap" },
    ]),
    colours: [
      { name: "Dark blue", hex: "#243C9F" },
      { name: "Red", hex: "#E23B26" },
      { name: "Sky blue", hex: "#6CC6ED" },
      { name: "Yellow", hex: "#F5C518" },
      { name: "White", hex: "#FFFFFF" },
    ],
  },
  {
    slug: "28mm-bericap",
    title: "28mm Bericap",
    category: "closures",
    desc: "28mm Bericap closure with a ribbed exterior, in black and white.",
    highlights: ["28mm Bericap closure","Ribbed exterior"],
    specs: { ...baseSpecs, neckClosure: "28mm Bericap" },
    images: uploadedGallery([
      { file: "28MM BERICAP(BLACK).png", label: "Black cap" },
      { file: "28MM BERICAP (WHITE).png", label: "White cap, open view" },
    ]),
    colours: [
      { name: "Black", hex: "#151515" },
      { name: "White", hex: "#FFFFFF" },
    ],
  },
  {
    slug: "28mm-ratchet-cap",
    title: "28mm Ratchet Cap",
    category: "closures",
    desc: "28mm ratchet cap with a ribbed exterior and attached outer ring, in green, dark green, dark blue, red, black and white.",
    highlights: ["28mm ratchet closure","Ribbed cap with outer ring"],
    specs: { ...baseSpecs, neckClosure: "28mm ratchet" },
    images: uploadedGallery([
      { file: "28MM RATCHET CAP (GREEN).png", label: "Green cap" },
      { file: "28MM RATCHET CAP (DARK GREEN).png", label: "Dark green cap" },
      { file: "28MM RATCHET CAP (DARK BLUE).png", label: "Dark blue cap" },
      { file: "28MM RATCHET CAP (RED).png", label: "Red cap" },
      { file: "28MM RATCHET(BLACK).png", label: "Black cap" },
      { file: "28MM RATCHET(WHITE).png", label: "White cap" },
    ]),
    colours: [
      { name: "Green", hex: "#149B4B" },
      { name: "Dark green", hex: "#145F42" },
      { name: "Dark blue", hex: "#3550D6" },
      { name: "Red", hex: "#EF4D32" },
      { name: "Black", hex: "#151515" },
      { name: "White", hex: "#FFFFFF" },
    ],
  },
  {
    slug: "39mm-bericap",
    title: "39mm Bericap",
    category: "closures",
    desc: "White 39mm Bericap closure with broad grip ribs.",
    highlights: ["39mm Bericap closure","White finish","Broad grip ribs"],
    specs: { ...baseSpecs, neckClosure: "39mm Bericap" },
    images: uploadedGallery([
      { file: "39MM BERICAP (WHITE).png", label: "White cap, exterior view" },
      { file: "39MM BERICAP (WHITE) 2.png", label: "White caps, paired view" },
      { file: "39MM BERICAP (WHITE) 1.png", label: "White cap, open view" },
    ]),
    colours: [
      { name: "White", hex: "#FFFFFF" },
    ],
  },
  {
    slug: "39mm-pj-cap",
    title: "39mm PJ Cap",
    category: "closures",
    desc: "Red 39mm PJ cap with broad grip ribs.",
    highlights: ["39mm PJ closure","Red finish","Broad grip ribs"],
    specs: { ...baseSpecs, neckClosure: "39mm PJ" },
    images: uploadedGallery([
      { file: "39MM PJ CAP (RED).png", label: "Red PJ cap, main view" },
      { file: "39MM PJ CAP (RED)1.png", label: "Red PJ cap, alternative view" },
    ]),
    colours: [
      { name: "Red", hex: "#E23B26" },
    ],
  },
  {
    slug: "39mm-ratchet-cap",
    title: "39mm Ratchet Cap",
    category: "closures",
    desc: "39mm ratchet cap with broad grip ribs and an attached outer ring, in pink, coral/orange and white.",
    highlights: ["39mm ratchet closure","Broad grip ribs","Attached outer ring"],
    specs: { ...baseSpecs, neckClosure: "39mm ratchet" },
    images: uploadedGallery([
      { file: "39MM RATCHET CAP (PINK).png", label: "Pink cap" },
      { file: "39MM RATCHET CAP (PINK) (2).png", label: "Coral/orange cap" },
      { file: "39MM RATCHET CAP (White).png", label: "White cap, open view" },
    ]),
    colours: [
      { name: "Pink", hex: "#F44CAF" },
      { name: "Coral / Orange", hex: "#F65339" },
      { name: "White", hex: "#FFFFFF" },
    ],
  },
  {
    slug: "100cc-jar-cap",
    title: "100cc Jar Cap",
    category: "closures",
    desc: "Yellow cap for the 100cc jar range, with a ribbed sidewall and an attached side tab.",
    highlights: ["100cc jar range","Yellow finish","Attached side tab"],
    specs: { ...baseSpecs, capacityRange: "For the 100cc jar range", neckClosure: "Jar cap" },
    images: uploadedGallery([
      { file: "100CC CAP (YELLOW).png", label: "Yellow cap with side tab" },
    ]),
    colours: [
      { name: "Yellow", hex: "#F5C518" },
    ],
  },
  {
    slug: "1150cc-jar-cap",
    title: "1150cc Jar Cap",
    category: "closures",
    desc: "Cap for the 1150cc jar range, in green and red.",
    highlights: ["1150cc jar range","Green and red options"],
    specs: { ...baseSpecs, capacityRange: "For the 1150cc jar range", neckClosure: "Jar cap" },
    images: uploadedGallery([
      { file: "1150CC CAP (GREEN).png", label: "Green jar cap" },
      { file: "1150CC CAP (RED).png", label: "Red jar cap" },
    ]),
    colours: [
      { name: "Green", hex: "#149B4B" },
      { name: "Red", hex: "#E23B26" },
    ],
  },
  {
    slug: "31-5mm-lldpe-natural-plug",
    title: "31.5mm LLDPE Natural Plug",
    category: "accessories",
    desc: "31.5mm natural translucent LLDPE plug with a flanged rim.",
    highlights: ["31.5mm size","LLDPE material","Natural finish"],
    specs: { ...baseSpecs, material: "LLDPE", neckClosure: "31.5mm plug" },
    images: uploadedGallery([
      { file: "31.5MM LLDPE NATURAL PLUGS.png", label: "Natural plug, side view" },
      { file: "31.5MM LLDPE NATURAL PLUGS 1.png", label: "Natural plug, open view" },
    ]),
    colours: [
      { name: "Natural", hex: "#E8EEF2" },
    ],
  },
  {
    slug: "10ml-measuring-cup",
    title: "10ml Measuring Cup",
    category: "accessories",
    desc: "A clear 10ml measuring cup for measuring and dispensing liquid products. Its moulded 2.5ml, 5ml and 10ml graduations support dose measurement for pharmaceutical, healthcare and other liquid applications.",
    highlights: ["10ml capacity","Moulded 2.5ml, 5ml and 10ml graduations","Clear plastic","For measuring and dispensing liquids"],
    specs: { ...baseSpecs, capacityRange: "10ml", industryFit: "Pharmaceutical, healthcare and liquid measurement applications", material: "Plastic" },
    images: uploadedGallery([
      { file: "10ML MEASURING CUP.png", label: "Single measuring cup" },
      { file: "10ML MEASURING CUP 1.png", label: "Two measuring cups, paired view" },
    ]),
    colours: [
      { name: "Natural / Clear", hex: "#E8EEF2" },
    ],
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
