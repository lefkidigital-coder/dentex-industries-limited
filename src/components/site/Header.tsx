import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, Factory } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/products", label: "Our Products" },
  { to: "/quality", label: "Quality & Innovation" },
  { to: "/contact", label: "Contact Us" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-primary text-primary-foreground shadow-sm">
            <Factory className="h-5 w-5" />
          </span>
          <span className="font-extrabold text-primary tracking-tight text-lg leading-none">
            Dentex<span className="text-accent">.</span>
            <span className="block text-[10px] font-medium uppercase tracking-widest text-muted-foreground">Industries Ltd</span>
          </span>
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
            className="hidden sm:inline-flex items-center justify-center rounded-md bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground shadow-sm hover:brightness-110 transition-all hover:-translate-y-0.5"
          >
            Get a Quote
          </Link>
          <button
            className="lg:hidden p-2 rounded-md hover:bg-secondary"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6 text-primary" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 lg:hidden bg-primary text-primary-foreground flex flex-col"
          >
            <div className="flex items-center justify-between h-16 px-6 border-b border-white/10">
              <span className="font-extrabold tracking-tight">Dentex<span className="text-accent">.</span></span>
              <button onClick={() => setOpen(false)} aria-label="Close menu" className="p-2">
                <X className="h-6 w-6" />
              </button>
            </div>
            <nav className="flex-1 flex flex-col items-center justify-center gap-6 text-2xl font-semibold">
              {nav.map((n, i) => (
                <motion.div
                  key={n.to}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0, transition: { delay: i * 0.05 } }}
                >
                  <Link to={n.to} onClick={() => setOpen(false)} className="hover:text-accent transition-colors">
                    {n.label}
                  </Link>
                </motion.div>
              ))}
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="mt-6 inline-flex items-center justify-center rounded-md bg-accent px-6 py-3 text-base font-semibold text-accent-foreground"
              >
                Get a Quote
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}