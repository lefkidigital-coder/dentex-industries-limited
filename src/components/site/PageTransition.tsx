import { useEffect } from "react";
import { useRouter } from "@tanstack/react-router";
import { initMouldTransition } from "@/motion/page-transition";

/** Name shown on the parting line, keyed by the first path segment. */
const LABELS: Record<string, string> = {
  "": "HOME",
  about: "ABOUT US",
  products: "OUR PRODUCTS",
  industries: "INDUSTRIES",
  quality: "QUALITY & INNOVATION",
  contact: "CONTACT US",
  "our-journey": "OUR JOURNEY",
  "privacy-policy": "PRIVACY POLICY",
  "terms-of-service": "TERMS OF SERVICE",
};

/** Connects the framework-agnostic mould transition to the router. */
export function PageTransition() {
  const router = useRouter();

  useEffect(() => {
    const transition = initMouldTransition({
      headerSelector: "header",
      labelFor: (url) => LABELS[url.pathname.split("/")[1] ?? ""] ?? "",
      navigate: (url) => router.navigate({ href: url.pathname + url.search + url.hash }),
    });
    return () => transition.destroy();
  }, [router]);

  return null;
}
