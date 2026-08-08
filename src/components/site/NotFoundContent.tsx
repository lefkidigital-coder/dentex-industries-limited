import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";

/** Shared 404 content — used by the /404 route and the router's not-found boundary. */
export function NotFoundContent() {
  return (
    <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 py-24 text-center">
      <Logo variant="stacked" className="mx-auto h-28 w-auto" />
      <h1 className="mt-8 text-3xl sm:text-4xl font-extrabold text-primary tracking-tight">Page Not Found</h1>
      <p className="mt-4 text-muted-foreground leading-relaxed">
        The page you are looking for isn't available. It may have been moved, or the address may be incorrect.
      </p>
      <div className="mt-10 flex flex-wrap justify-center gap-3">
        <Link
          to="/"
          className="inline-flex items-center justify-center rounded-md bg-accent px-6 py-3 text-base font-semibold text-accent-foreground shadow-md"
        >
          Back to Home
        </Link>
        <Link
          to="/products"
          className="inline-flex items-center justify-center rounded-md border-2 border-primary px-6 py-3 text-base font-semibold text-primary"
        >
          Browse Products
        </Link>
        <Link
          to="/contact"
          className="inline-flex items-center justify-center rounded-md border-2 border-border px-6 py-3 text-base font-semibold text-foreground"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
}