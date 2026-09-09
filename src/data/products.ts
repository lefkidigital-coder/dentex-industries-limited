/**
 * Product content, separated from presentation so it maps cleanly onto a
 * future WooCommerce catalogue (category slug + product slug + attributes).
 *
 * To add a product later: drop a new entry into PRODUCTS with an existing
 * category slug, the products page, filters, category pages and detail
 * pages all read from this file, so no layout work is needed.
 */

import jc1lWhiteRatchet from "@/assets/jc-1l-white-jerrycan-with-ratchet-cap-55g.jpg.asset.json";
import jc2lRatchet from "@/assets/jc-2l-jerrycan-with-rachet-cap-100g.jpg.asset.json";
import jc3lBlackBericap from "@/assets/jc-3l-black-jerrycan-with-bericap-130g.jpg.asset.json";
import jc3lNaturalBericap from "@/assets/jc-3l-jerrycan-bericap-130g.jpg.asset.json";
import jc5lBlackBericap from "@/assets/jc-5l-black-jerrycan-with-bericap-180g.jpg.asset.json";
import jc5lNewHandleBericap from "@/assets/jc-5l-jerrycan-newhandle-with-bericap-200g.jpg.asset.json";
import jc5lOldHandleRatchet from "@/assets/jc-5l-jerrycan-oldhandle-with-ratchet-cap-155g.jpg.asset.json";
import jc5lWhiteOldHandleRatchet from "@/assets/jc-5l-white-jerrycan-old-handle-with-ratchet-cap-200g.jpg.asset.json";
import bottle100ml from "@/assets/product-100ml-hdpe-bottle.png.asset.json";
import bottle120ml from "@/assets/product-120ml-long-neck-bottle.png.asset.json";
import bottle500ml from "@/assets/product-500ml-plastic-bottle.png.asset.json";
import takeawayContainer from "@/assets/product-white-round-takeaway-container.png.asset.json";
import petWaterBottle from "@/assets/product-pet-water-bottle.png.asset.json";

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
    desc: "Compact 1L HDPE jerrycan fitted with a ratchet cap, photographed in white.",
    highlights: [],
    specs: {
      ...baseSpecs,
      material: "HDPE",
      capacityRange: "1L",
      neckClosure: "Ratchet cap",
      weight: "55g",
    },
    images: single(jc1lWhiteRatchet.url),
    colours: [{ name: "White", hex: "#FFFFFF" }],
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
      main: jc3lNaturalBericap.url,
      alternates: [jc3lBlackBericap.url],
      details: [],
    },
    colours: [
      { name: "Natural / Clear", hex: "#E8EEF2" },
      { name: "Black", hex: "#151515" },
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
    title: "120ml Long-Neck Bottle",
    category: "bottles",
    desc: "Distinctive 120ml long-neck bottle for pharmaceutical, food, beverage, personal care and specialty products.",
    highlights: [],
    specs: { ...baseSpecs, capacityRange: "120ml" },
    images: single(bottle120ml.url),
    colourNote: "Multiple bottle colours and cap colours available on request.",
  },
  {
    slug: "500ml-plastic-bottle",
    title: "500ml Plastic Bottle",
    category: "bottles",
    desc: "Versatile 500ml bottle for pharmaceutical, food, personal care, household and specialty products.",
    highlights: [],
    specs: { ...baseSpecs, capacityRange: "500ml" },
    images: single(bottle500ml.url),
    colourNote: "Multiple bottle colours and cap colours available on request.",
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
  {
    slug: "pet-water-bottle",
    title: "PET Water Bottle",
    category: "bottles",
    desc: "Lightweight PET bottle designed for packaged drinking water, efficient filling, handling and distribution.",
    highlights: [],
    specs: { ...baseSpecs, material: "PET" },
    images: single(petWaterBottle.url),
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
