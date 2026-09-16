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

import bottle100ml from "@/assets/product-100ml-hdpe-bottle.png.asset.json";
import bottle120mlLongneck from "@/assets/bottle-120ml-longneck-22g.png.asset.json";
import bottle120mlLongneckOrange from "@/assets/bottle-120ml-longneck-orange-22g.png.asset.json";
import bottle200mlRound from "@/assets/bottle-200ml-round-red-bericap.png.asset.json";
import bottle200mlRoundNatural from "@/assets/bottle-200ml-round-bericap.png.asset.json";
import bottle200mlRoundBlack from "@/assets/bottle-200ml-round-black-20g.png.asset.json";
import bottle200mlRoundBrown from "@/assets/bottle-200ml-round-brown-20g.png.asset.json";
import bottle500mlBericap from "@/assets/bottle-500ml-bericap.png.asset.json";
import bottle500mlRatchet from "@/assets/bottle-500ml-ratchet-28g.png.asset.json";
import bottle500mlPetClear from "@/assets/bottle-500ml-pet-clear-16g.png.asset.json";
import bottle500mlPetBlue from "@/assets/bottle-500ml-pet-blue-16g.png.asset.json";
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
    slug: "100ml-hdpe-bottle",
    title: "100ml HDPE Bottle",
    category: "bottles",
    desc: "Compact HDPE bottle for pharmaceutical, personal care, chemical and household products.",
    highlights: [],
    specs: { ...baseSpecs, material: "HDPE", capacityRange: "100ml" },
    images: single(bottle100ml.url),
    colourNote: "Multiple colours available. Additional colours available on request.",
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
      alternates: [bottle120mlLongneckOrange.url],
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
