import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { gsap, prefersReducedMotion } from "@/lib/motion";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/products", label: "Our Products" },
  { to: "/industries", label: "Industries" },
  { to: "/quality", label: "Quality & Innovation" },
  { to: "/contact", label: "Contact Us" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const panel = panelRef.current;
    let ctx: gsap.Context | undefined;
    if (panel && !prefersReducedMotion()) {
      ctx = gsap.context(() => {
        gsap.fromTo(panel, { opacity: 0, y: -12 }, { opacity: 1, y: 0, duration: 0.4, ease: "power3.out" });
        gsap.fromTo(
          panel.querySelectorAll("[data-menu-item]"),
          { opacity: 0, y: 14 },
          { opacity: 1, y: 0, duration: 0.5, stagger: 0.05, ease: "power3.out", delay: 0.08 },
        );
      }, panel);
    }

    return () => {
      document.body.style.overflow = prev;
      ctx?.revert();
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center group shrink-0" aria-label="Dentex Industries Limited — home">
          <Logo variant="horizontal" className="hidden xs:block h-9 sm:h-10 w-auto" />
          <Logo variant="icon" className="block xs:hidden h-9 w-auto" alt="Dentex Industries Limited" />
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors rounded-md"
              activeProps={{ className: "px-3 py-2 text-sm font-semibold text-primary rounded-md bg-secondary" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/contact"
            className="mould-press hidden sm:inline-flex items-center justify-center rounded-md bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground shadow-sm"
          >
            Get a Quote
          </Link>
          <button
            className="lg:hidden p-2 rounded-md hover:bg-secondary"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-6 w-6 text-primary" /> : <Menu className="h-6 w-6 text-primary" />}
          </button>
        </div>
      </div>

      {open && typeof document !== "undefined" && createPortal(
        <div
          ref={panelRef}
          className="fixed inset-0 z-[100] lg:hidden bg-background text-foreground flex flex-col"
        >
          <div className="flex items-center justify-between h-16 px-4 sm:px-6 border-b border-border/60">
            <Logo variant="horizontal" className="h-8 w-auto" />
            <button onClick={() => setOpen(false)} aria-label="Close menu" className="p-2 rounded-md hover:bg-secondary">
              <X className="h-6 w-6 text-primary" />
            </button>
          </div>
          <nav className="flex-1 overflow-y-auto px-6 py-10 flex flex-col gap-7">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                data-menu-item
                onClick={() => setOpen(false)}
                className="text-2xl font-semibold text-primary hover:text-accent transition-colors"
                activeProps={{ className: "text-2xl font-semibold text-accent" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            ))}
            <Link
              to="/contact"
              data-menu-item
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex items-center justify-center rounded-md bg-accent px-6 py-4 text-base font-semibold text-accent-foreground"
            >
              Get a Quote
            </Link>
          </nav>
        </div>,
        document.body,
      )}
    </header>
  );
}
