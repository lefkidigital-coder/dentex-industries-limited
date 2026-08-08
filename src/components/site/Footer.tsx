import { Link } from "@tanstack/react-router";
import { Linkedin, Twitter, Facebook, Mail, Phone, MapPin } from "lucide-react";
import { Logo } from "./Logo";
import { COMPANY } from "@/data/company";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-10 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <span className="inline-grid place-items-center rounded-md bg-white px-3 py-2">
              <Logo variant="horizontal" className="h-9 w-auto" />
            </span>
            <p className="mt-4 text-sm text-primary-foreground/70 leading-relaxed">
              Precision plastic packaging for East Africa's leading brands. Trusted since 1986.
            </p>
            <div className="flex gap-3 mt-6">
              {[Linkedin, Twitter, Facebook].map((Icon, i) => (
                <a key={i} href="#" aria-label="social" className="grid h-9 w-9 place-items-center rounded-full bg-white/10 hover:bg-accent transition-colors">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-accent">Quick Links</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><Link to="/" className="hover:text-accent">Home</Link></li>
              <li><Link to="/about" className="hover:text-accent">About Us</Link></li>
              <li><Link to="/products" className="hover:text-accent">Our Products</Link></li>
              <li><Link to="/industries" className="hover:text-accent">Industries</Link></li>
              <li><Link to="/quality" className="hover:text-accent">Quality & Innovation</Link></li>
              <li><Link to="/contact" className="hover:text-accent">Contact Us</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-accent">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="hover:text-accent">Terms of Service</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-accent">Contact</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li className="flex gap-2"><MapPin className="h-4 w-4 shrink-0 mt-0.5 text-accent" />{COMPANY.address}</li>
              <li className="flex gap-2">
                <Phone className="h-4 w-4 shrink-0 mt-0.5 text-accent" />
                <span>
                  <a href={COMPANY.phonePrimaryHref} className="hover:text-accent">{COMPANY.phonePrimary}</a>
                  <br />
                  <a href={COMPANY.phoneSecondaryHref} className="hover:text-accent">{COMPANY.phoneSecondary}</a>
                </span>
              </li>
              <li className="flex gap-2"><Mail className="h-4 w-4 shrink-0 mt-0.5 text-accent" /><a href={COMPANY.emailHref} className="hover:text-accent">{COMPANY.email}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-accent">Business Hours</h4>
            <p className="text-sm text-primary-foreground/80">Monday – Saturday<br />9:00 AM – 6:00 PM EAT</p>
            <p className="mt-4 text-xs text-primary-foreground/60">{COMPANY.certification}</p>
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center justify-center rounded-md bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground hover:brightness-110 transition-all"
            >
              Request a Quote
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-primary-foreground/60">
          <p>© {new Date().getFullYear()} Dentex Industries Ltd. All rights reserved.</p>
          <p>Precision Plastic Packaging · Made in Kenya</p>
        </div>
      </div>
    </footer>
  );
}